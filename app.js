(function () {
  "use strict";

  // Eixos e fatores vêm do cadastro metodológico central
  // (metodologia/metodologia.js, carregado antes deste script).
  var METODOLOGIA = window.METODOLOGIA || { eixos: [] };
  var dados = METODOLOGIA.eixos;

  var layoutEixos = document.getElementById("layout-eixos");
  var roda = document.getElementById("roda");
  var dica = document.getElementById("dica");
  var eixoCabecalho = document.getElementById("eixo-cabecalho");
  var gradeFatores = document.getElementById("grade-fatores");
  var btnVoltar = document.getElementById("btn-voltar");

  var botoesEixo = []; // preenchido em montarRoda(), usado para destacar o selecionado
  var eixoSelecionadoOrdem = null; // null = nenhum eixo aberto no momento

  var overlay = document.getElementById("overlay-popup");
  var popupFechar = document.getElementById("popup-fechar");
  var popupIconeResiliencia = document.getElementById("popup-icone-resiliencia");
  var popupIconeVulnerabilidade = document.getElementById("popup-icone-vulnerabilidade");
  var popupIconeAmeaca = document.getElementById("popup-icone-ameaca");
  var popupOds = document.getElementById("popup-ods");
  var popupTitulo = document.getElementById("popup-titulo");
  var popupDefinicao = document.getElementById("popup-definicao");
  var popupTerritorio = document.getElementById("popup-territorio");
  var popupTexto = document.getElementById("popup-texto");
  var popupReferencias = document.getElementById("popup-referencias");
  var popupRelacionados = document.getElementById("popup-relacionados");
  var popupVoltar = document.getElementById("popup-voltar");
  var territorioStatus = document.getElementById("territorio-status");

  // índice id do fator -> { fator, eixo }, para localizar fatores
  // relacionados citados nos diagnósticos
  var FATORES = {};
  dados.forEach(function (eixo) {
    eixo.fatores.forEach(function (fator) {
      FATORES[fator.id] = { fator: fator, eixo: eixo };
    });
  });

  // ---------- Território ativo ----------
  //
  // Os diagnósticos não ficam na interface: vêm do arquivo de dados de cada
  // território (territorios/<id>.js), listado no cadastro de territórios
  // (territorios/indice.js). O arquivo é carregado por uma tag <script>
  // inserida dinamicamente, o que funciona tanto em servidor (GitHub Pages)
  // quanto abrindo o index.html direto do computador, onde a leitura de
  // arquivos por fetch/XHR é bloqueada pelo navegador.
  //
  // Regras contra a mistura de dados entre localidades:
  //   - ao trocar de território, os dados anteriores deixam de ser usados
  //     imediatamente, antes do novo carregamento;
  //   - cada carregamento começa com window.TERRITORIOS vazio, de modo que
  //     um arquivo só pode fornecer o território que foi solicitado;
  //   - o território só passa a "pronto" se o arquivo registrar exatamente
  //     o id solicitado;
  //   - respostas de carregamentos anteriores (troca rápida de seleção) são
  //     descartadas;
  //   - nunca há substituição automática por outro território.

  var seletorTerritorio = document.getElementById("seletor-territorio");
  var SITUACOES = { "diagnostico": true, "sem-diagnostico": true, "simulado": true };

  var territorio = {
    estado: "carregando", // carregando | pronto | sem-dados | erro
    id: null,
    rotulo: null,
    simulado: false,
    dados: null,
    mensagem: ""
  };
  var cacheTerritorios = {}; // dados já carregados e validados, por id
  var carregamentoAtual = 0; // descarta respostas de seleções anteriores

  // confere o cadastro de territórios e devolve { itens, porId, erros }
  function lerCadastro() {
    var indice = window.TERRITORIOS_INDICE;
    var r = { itens: [], porId: {}, erros: [], padrao: null };
    if (!indice || !indice.territorios || !indice.territorios.length) {
      r.erros.push("O cadastro de territórios (territorios/indice.js) não foi carregado.");
      return r;
    }
    indice.territorios.forEach(function (t) {
      if (!t || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id || "")) {
        r.erros.push("Território com identificador inválido no cadastro: " + (t && t.id));
        return;
      }
      if (r.porId[t.id]) {
        r.erros.push("Identificador repetido no cadastro de territórios: " + t.id);
        return;
      }
      if (!t.rotulo || !SITUACOES[t.situacao] ||
          (t.situacao === "sem-diagnostico" ? t.arquivo : !t.arquivo)) {
        r.erros.push("Cadastro incompleto do território " + t.id + ".");
        return;
      }
      r.porId[t.id] = t;
      r.itens.push(t);
    });
    r.padrao = r.porId[indice.padrao] ? indice.padrao : null;
    if (!r.padrao) r.erros.push("O território padrão do cadastro (" + indice.padrao + ") não está disponível.");
    return r;
  }
  var cadastro = lerCadastro();
  if (cadastro.erros.length && window.console) {
    cadastro.erros.forEach(function (m) { console.warn("[territórios] " + m); });
  }

  function rotuloOpcao(t) {
    if (t.situacao === "simulado") return t.rotulo + " (dados simulados)";
    if (t.situacao === "sem-diagnostico") return t.rotulo + " (sem diagnóstico)";
    return t.rotulo;
  }

  function montarSeletor() {
    seletorTerritorio.innerHTML = "";
    cadastro.itens.forEach(function (t) {
      var op = document.createElement("option");
      op.value = t.id;
      op.textContent = rotuloOpcao(t);
      seletorTerritorio.appendChild(op);
    });
    seletorTerritorio.disabled = !cadastro.itens.length;
    seletorTerritorio.addEventListener("change", function () {
      selecionarTerritorio(seletorTerritorio.value, true);
    });
  }

  // mantém o seletor coerente com o território ativo; se o território
  // pedido pelo endereço não existir, mostra uma opção provisória
  function sincronizarSeletor(id) {
    var provisoria = seletorTerritorio.querySelector("option[data-provisoria]");
    if (provisoria) provisoria.parentNode.removeChild(provisoria);
    if (id && cadastro.porId[id]) {
      seletorTerritorio.value = id;
      return;
    }
    var op = document.createElement("option");
    op.value = "";
    op.disabled = true;
    op.setAttribute("data-provisoria", "");
    op.textContent = "Selecione um território";
    seletorTerritorio.insertBefore(op, seletorTerritorio.firstChild);
    seletorTerritorio.value = "";
  }

  function atualizarEndereco(id) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("territorio", id);
      window.history.replaceState(null, "", url.href);
    } catch (e) {
      // alguns navegadores não permitem alterar o endereço em file://; a
      // troca de território funciona do mesmo modo
    }
  }

  // nome do território ativo no centro da roda (quebra em até 2 linhas e
  // reduz a fonte para caber no círculo central, de raio 36)
  var hubTerritorio = document.getElementById("hub-territorio");
  function atualizarHubTerritorio() {
    if (!hubTerritorio) return;
    var nome = territorio.rotulo || "Selecione";
    var linhas = [nome];
    if (nome.length > 11) {
      var palavras = nome.split(/\s+/), melhor = null;
      for (var i = 1; i < palavras.length; i++) {
        var a = palavras.slice(0, i).join(" "), b = palavras.slice(i).join(" ");
        var m = Math.max(a.length, b.length);
        if (!melhor || m < melhor.m) melhor = { m: m, l: [a, b] };
      }
      if (melhor) linhas = melhor.l;
    }
    var maior = Math.max.apply(null, linhas.map(function (l) { return l.length; }));
    var tam = Math.max(3, Math.min(9, 60 / (maior * 0.56)) - 2);
    var passo = tam * 1.18;
    var y0 = 100 + tam * 0.35 - (linhas.length - 1) * passo / 2;
    var ns = "http://www.w3.org/2000/svg";
    while (hubTerritorio.firstChild) hubTerritorio.removeChild(hubTerritorio.firstChild);
    linhas.forEach(function (l, k) {
      var t = document.createElementNS(ns, "text");
      t.setAttribute("x", "100");
      t.setAttribute("y", (y0 + k * passo).toFixed(2));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("font-family", "Segoe UI, Arial, sans-serif");
      t.setAttribute("font-weight", "800");
      t.setAttribute("font-size", tam.toFixed(2));
      t.setAttribute("fill", "#23303d");
      t.textContent = l;
      hubTerritorio.appendChild(t);
    });
  }

  function atualizarStatusTerritorio() {
    atualizarHubTerritorio();
    territorioStatus.className = "territorio-status territorio-" + territorio.estado;
    territorioStatus.innerHTML = "";
    territorioStatus.removeAttribute("title");
    seletorTerritorio.removeAttribute("title");
    document.body.setAttribute("data-territorio", territorio.id || "");
    document.body.setAttribute("data-territorio-estado", territorio.estado);

    if (territorio.estado === "carregando") {
      territorioStatus.textContent = "Carregando dados de " + (territorio.rotulo || "território") + "…";
      return;
    }
    if (territorio.estado === "erro") {
      territorioStatus.textContent = territorio.mensagem;
      return;
    }
    // o nome do território já aparece no seletor; a frase fica só para
    // leitores de tela, que anunciam a troca de território
    var rotulo = document.createElement("span");
    rotulo.className = "territorio-nome sr-only";
    rotulo.textContent = "Território: " + territorio.rotulo + ".";
    territorioStatus.appendChild(rotulo);

    if (territorio.estado === "sem-dados") {
      var sd = document.createElement("span");
      sd.className = "territorio-selo territorio-selo-sem-dados";
      sd.textContent = "sem diagnóstico cadastrado";
      territorioStatus.appendChild(sd);
      return;
    }
    var sit = territorio.dados.situacao || {};
    if (territorio.simulado) {
      var si = document.createElement("span");
      si.className = "territorio-selo territorio-selo-simulado";
      si.textContent = "dados simulados, não é diagnóstico real";
      territorioStatus.appendChild(si);
    }
    if (sit.aviso) seletorTerritorio.title = sit.aviso;
    var versaoT = territorio.dados.metodologia && territorio.dados.metodologia.versao;
    if (versaoT && versaoT !== METODOLOGIA.versao) {
      var av = document.createElement("span");
      av.className = "territorio-alerta";
      av.textContent = "Diagnóstico organizado pela Matriz v" + versaoT + "; painel usa a v" + METODOLOGIA.versao + ".";
      territorioStatus.appendChild(av);
    }
  }

  // redesenha o popup aberto com os dados do território ativo
  function atualizarPopupAberto() {
    if (!overlay.hidden && fatorAberto) mostrarFator(fatorAberto, false);
  }

  function definirEstado(estado, extra) {
    territorio.estado = estado;
    territorio.dados = (extra && extra.dados) || null;
    territorio.mensagem = (extra && extra.mensagem) || "";
    if (extra && extra.rotulo) territorio.rotulo = extra.rotulo;
    atualizarStatusTerritorio();
    atualizarPopupAberto();
  }

  function falhaTerritorio(msg) {
    definirEstado("erro", { mensagem: msg + " Nenhum diagnóstico será exibido." });
  }

  function aceitarDados(item, t) {
    var simulado = item.situacao === "simulado" || !!(t.situacao && t.situacao.simulado);
    territorio.simulado = simulado;
    definirEstado("pronto", { dados: t, rotulo: item.rotulo });
  }

  function selecionarTerritorio(id, alterarEndereco) {
    var token = ++carregamentoAtual;
    // os dados do território anterior deixam de ser usados imediatamente
    territorio.id = id || null;
    territorio.simulado = false;
    var item = id ? cadastro.porId[id] : null;
    sincronizarSeletor(item ? id : null);

    if (cadastro.erros.length && !cadastro.itens.length) {
      territorio.rotulo = null;
      falhaTerritorio(cadastro.erros[0]);
      return;
    }
    if (!item) {
      territorio.rotulo = null;
      falhaTerritorio("O território solicitado (" + id + ") não está cadastrado na plataforma.");
      return;
    }
    if (alterarEndereco) atualizarEndereco(id);
    territorio.rotulo = item.rotulo;

    if (item.situacao === "sem-diagnostico") {
      definirEstado("sem-dados", { rotulo: item.rotulo });
      return;
    }
    if (cacheTerritorios[id]) {
      aceitarDados(item, cacheTerritorios[id]);
      return;
    }

    definirEstado("carregando", { rotulo: item.rotulo });
    window.TERRITORIOS = {};
    var concluido = false;
    var script = document.createElement("script");
    script.src = item.arquivo;
    script.onload = function () {
      concluido = true;
      if (token !== carregamentoAtual) return;
      var t = window.TERRITORIOS && window.TERRITORIOS[id];
      if (!t || !t.territorio || t.territorio.id !== id || !t.diagnosticos) {
        falhaTerritorio("O arquivo de dados de " + item.rotulo + " não contém os diagnósticos deste território.");
        return;
      }
      cacheTerritorios[id] = t;
      aceitarDados(item, t);
    };
    script.onerror = function () {
      concluido = true;
      if (token !== carregamentoAtual) return;
      falhaTerritorio("Não foi possível carregar os dados de " + item.rotulo + " (" + item.arquivo + ").");
    };
    setTimeout(function () {
      if (!concluido && token === carregamentoAtual) {
        falhaTerritorio("O carregamento dos dados de " + item.rotulo + " excedeu o tempo limite.");
      }
    }, 15000);
    document.head.appendChild(script);
  }

  function territorioInicial() {
    var param = null;
    try {
      param = new URLSearchParams(window.location.search).get("territorio");
    } catch (e) {
      param = null;
    }
    return param || cadastro.padrao;
  }

  // fundo dos códigos dos fatores relacionados: a cor do eixo, escurecida
  // apenas o necessário para o texto branco atingir contraste de 4,5:1
  // (WCAG 2.1 AA)
  function luminancia(hex) {
    var c = [1, 3, 5].map(function (i) {
      var v = parseInt(hex.substr(i, 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function corFundoComTextoBranco(hex) {
    var rgb = [1, 3, 5].map(function (i) { return parseInt(hex.substr(i, 2), 16); });
    var cor = hex;
    for (var k = 0; k < 40 && 1.05 / (luminancia(cor) + 0.05) < 4.5; k++) {
      rgb = rgb.map(function (v) { return Math.round(v * 0.94); });
      cor = "#" + rgb.map(function (v) { return ("0" + v.toString(16)).slice(-2); }).join("");
    }
    return cor;
  }

  function caminhoIcone(codigo) {
    return "assets/icons/" + codigo + ".png";
  }

  // as 3 variantes coloridas de cada ícone (classificação de risco),
  // usadas só no popup de detalhe do fator:
  //   _verde     = resiliência
  //   _amarelo   = vulnerabilidade
  //   _vermelho  = ameaça
  function caminhoIconeVariante(codigo, variante) {
    return "assets/icons/" + codigo + "_" + variante + ".png";
  }

  // ---------- Nível 1: monta a roda com os 6 eixos ----------

  // Posições (em % do lado do container) dos 6 círculos desenhados na arte
  // SVG inline (ver <svg class="roda-svg"> em index.html, viewBox 0 0 200
  // 200 → % = valor/2). O botão clicável fica transparente, sobreposto
  // exatamente ao círculo correspondente na arte.
  var POSICOES_EIXO = [
    { x: 32.5, y: 19.69 }, // Eixo 1
    { x: 67.5, y: 19.69 }, // Eixo 2
    { x: 85, y: 50 },      // Eixo 3
    { x: 67.5, y: 80.31 }, // Eixo 4
    { x: 32.5, y: 80.31 }, // Eixo 5
    { x: 15, y: 50 },      // Eixo 6
  ];

  // Dá um zoom-in na imagem do eixo selecionado, dentro do próprio SVG
  // (em vez de desenhar um círculo/anel de destaque ao redor do botão).
  // Também traz esse grupo pro final do SVG (último a ser desenhado), pra
  // garantir que ele fique por cima dos eixos vizinhos enquanto aumenta.
  function ativarZoomEixo(ordemEixo) {
    var grupos = roda.querySelectorAll(".eixo-grafico");
    grupos.forEach(function (g) {
      var ativo = g.getAttribute("data-eixo") === String(ordemEixo);
      g.classList.toggle("ativo", ativo);
      if (ativo) {
        g.parentNode.appendChild(g); // manda pro topo da pilha de desenho
      }
    });
  }

  function desativarZoomEixos() {
    roda.querySelectorAll(".eixo-grafico.ativo").forEach(function (g) {
      g.classList.remove("ativo");
    });
  }

  function montarRoda() {
    dados.forEach(function (eixo) {
      // a posição na roda segue a ordem metodológica do eixo (1 a 6),
      // e não a posição do eixo na lista
      var pos = POSICOES_EIXO[eixo.ordem - 1] || { x: 50, y: 50 };

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "eixo-botao";
      btn.setAttribute("data-eixo-id", eixo.id);
      btn.style.left = pos.x + "%";
      btn.style.top = pos.y + "%";
      btn.setAttribute(
        "aria-label",
        "Eixo " + eixo.ordem + ": " + eixo.titulo + ". Foco: " + eixo.foco
      );
      btn.title = "EIXO " + eixo.ordem + " — " + eixo.titulo;

      // Passar o mouse (ou focar via teclado) dá o mesmo zoom-in de quando
      // o eixo está selecionado, só que temporário: ao tirar o mouse/foco,
      // volta a mostrar com zoom o eixo que estiver de fato selecionado
      // (ou nenhum, se não houver seleção).
      btn.addEventListener("mouseenter", function () {
        ativarZoomEixo(eixo.ordem);
      });
      btn.addEventListener("mouseleave", function () {
        ativarZoomEixo(eixoSelecionadoOrdem);
      });
      btn.addEventListener("focus", function () {
        ativarZoomEixo(eixo.ordem);
      });
      btn.addEventListener("blur", function () {
        ativarZoomEixo(eixoSelecionadoOrdem);
      });

      btn.addEventListener("click", function () {
        abrirEixo(eixo, btn);
      });

      roda.appendChild(btn);
      botoesEixo.push(btn);
    });
  }

  // ---------- Nível 2: fatores de um eixo ----------

  function abrirEixo(eixo, botaoClicado) {
    botoesEixo.forEach(function (b) {
      b.classList.toggle("selecionado", b === botaoClicado);
    });
    eixoSelecionadoOrdem = eixo.ordem;
    ativarZoomEixo(eixo.ordem);

    eixoCabecalho.innerHTML = "";
    eixoCabecalho.style.background = eixo.cor;

    var tag = document.createElement("div");
    tag.className = "eixo-tag";
    tag.textContent = "EIXO " + eixo.ordem;
    eixoCabecalho.appendChild(tag);

    var h2 = document.createElement("h2");
    h2.textContent = eixo.titulo;
    eixoCabecalho.appendChild(h2);

    var p = document.createElement("p");
    p.textContent = "Foco: " + eixo.foco;
    eixoCabecalho.appendChild(p);

    gradeFatores.innerHTML = "";
    eixo.fatores.forEach(function (fator) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "fator-botao";
      // identificador estável do fator, usado para ligar o diagnóstico
      // territorial nas próximas etapas
      card.setAttribute("data-fator-id", fator.id);

      var badge = document.createElement("div");
      badge.className = "fator-icone-badge";
      badge.style.background = corClara(eixo.cor);

      var img = document.createElement("img");
      // o pino é desenhado em preto e branco; o filtro troca o preto pela
      // cor do eixo e mantém o branco (ver criarFiltrosCorEixo)
      img.style.filter = "url(#tinta-eixo-" + eixo.ordem + ")";
      img.src = caminhoIcone(fator.icone);
      img.alt = fator.fator;
      img.loading = "lazy";
      badge.appendChild(img);
      card.appendChild(badge);

      var nome = document.createElement("div");
      nome.className = "fator-nome";
      nome.textContent = fator.fator;
      card.appendChild(nome);

      var selo = document.createElement("span");
      selo.className = "fator-ods-selo";
      selo.style.background = eixo.cor;
      selo.textContent = "ODS " + pad2(fator.ods);
      card.appendChild(selo);

      card.addEventListener("click", function () {
        abrirPopup(fator);
      });

      gradeFatores.appendChild(card);
    });

    layoutEixos.classList.add("tem-selecao");
    destacarEixoOds(null);
    agendarLacos(0);
  }

  function pad2(n) {
    n = String(n);
    return n.length < 2 ? "0" + n : n;
  }

  function corClara(hex) {
    // gera um tom bem claro da cor do eixo para o fundo do círculo do ícone
    var rgb = hexParaRgb(hex);
    if (!rgb) return "#eef2f5";
    var mistura = 0.85; // 0 = cor pura, 1 = branco
    var r = Math.round(rgb.r + (255 - rgb.r) * mistura);
    var g = Math.round(rgb.g + (255 - rgb.g) * mistura);
    var b = Math.round(rgb.b + (255 - rgb.b) * mistura);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function hexParaRgb(hex) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return null;
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
  }

  // ---------- Nível 3: popup do fator ----------
  //
  // Mostra os dados metodológicos do fator (ícones, ODS, nome, definição de
  // referência) e o diagnóstico situacional do território ativo, localizado
  // pelo id do fator. Os fatores relacionados citados no diagnóstico podem
  // ser abertos no próprio popup; o botão de retorno volta ao fator anterior.

  var fatorAberto = null; // id do fator exibido no popup
  var historicoPopup = []; // ids dos fatores visitados antes, dentro do popup

  function aviso(texto, classe) {
    var div = document.createElement("div");
    div.className = "popup-aviso " + (classe || "");
    div.textContent = texto;
    return div;
  }

  function listaReferencias(titulo, itens) {
    var bloco = document.createElement("div");
    bloco.className = "popup-ref-bloco";
    var h = document.createElement("h4");
    h.textContent = titulo;
    bloco.appendChild(h);
    var ul = document.createElement("ul");
    itens.forEach(function (x) {
      var li = document.createElement("li");
      li.textContent = x;
      ul.appendChild(li);
    });
    bloco.appendChild(ul);
    return bloco;
  }

  function preencherDiagnostico(fid) {
    popupTexto.innerHTML = "";
    popupReferencias.innerHTML = "";
    popupRelacionados.innerHTML = "";

    if (territorio.estado === "carregando") {
      popupTerritorio.textContent = "Diagnóstico situacional";
      popupTexto.appendChild(aviso("Carregando os dados do território…", "aviso-carregando"));
      return;
    }
    if (territorio.estado === "erro") {
      popupTerritorio.textContent = "Diagnóstico situacional";
      popupTexto.appendChild(aviso(territorio.mensagem, "aviso-erro"));
      return;
    }

    if (territorio.estado === "sem-dados") {
      popupTerritorio.textContent = "Diagnóstico situacional · " + territorio.rotulo;
      popupTexto.appendChild(aviso(territorio.rotulo + " ainda não possui diagnóstico situacional cadastrado na plataforma.", "aviso-sem-dados"));
      return;
    }

    popupTerritorio.textContent = "Diagnóstico situacional · " + territorio.rotulo +
      (territorio.simulado ? " · dados simulados, não é diagnóstico real" : "");
    var diag = (territorio.dados.diagnosticos || {})[fid];
    if (!diag || !diag.texto) {
      // motivo registrado no documento do território, quando houver
      var registro = (territorio.dados.fatores_sem_diagnostico || []).filter(function (x) { return x.id === fid; })[0];
      var motivo = registro && registro.motivo && registro.origem === "declarado_no_documento" ? " Motivo informado no diagnóstico: " + registro.motivo + "." : "";
      popupTexto.appendChild(aviso("Não há diagnóstico situacional cadastrado para este fator em " + territorio.rotulo + "." + motivo, "aviso-ausente"));
      return;
    }

    // texto integral; parágrafos separados por linha em branco
    diag.texto.split(/\n\s*\n/).forEach(function (par) {
      var p = document.createElement("p");
      p.textContent = par;
      popupTexto.appendChild(p);
    });

    // as fontes citadas permanecem nos dados do território, mas não são
    // listadas no popup: já aparecem no próprio texto do diagnóstico
    if (diag.referencias_normativas && diag.referencias_normativas.length) {
      popupReferencias.appendChild(listaReferencias("Referências normativas", diag.referencias_normativas));
    }

    var rel = (diag.fatores_relacionados || []).filter(function (r) { return FATORES[r]; });
    if (rel.length) {
      var h = document.createElement("h4");
      h.textContent = "Fatores relacionados";
      popupRelacionados.appendChild(h);
      var lista = document.createElement("div");
      lista.className = "popup-chips";
      rel.forEach(function (r) {
        var info = FATORES[r];
        var b = document.createElement("button");
        b.type = "button";
        b.className = "popup-chip";
        b.setAttribute("data-fator-id", r);
        b.style.borderColor = info.eixo.cor;
        var cod = document.createElement("span");
        cod.className = "popup-chip-id";
        cod.style.background = corFundoComTextoBranco(info.eixo.cor);
        cod.textContent = r;
        b.appendChild(cod);
        b.appendChild(document.createTextNode(" " + info.fator.fator));
        b.addEventListener("click", function () {
          historicoPopup.push(fatorAberto);
          mostrarFator(r, true);
        });
        lista.appendChild(b);
      });
      popupRelacionados.appendChild(lista);
    }
  }

  function mostrarFator(fid, rolarParaTopo) {
    var info = FATORES[fid];
    if (!info) return;
    var fator = info.fator, eixo = info.eixo;
    fatorAberto = fid;

    // com o diagnóstico de um território carregado, o popup omite os ícones
    // de resiliência, vulnerabilidade e ameaça e o selo ODS do topo; sem
    // território (carregando ou erro), mantém a apresentação metodológica
    overlay.querySelector(".popup").classList.toggle("popup-modo-territorio", territorio.estado === "pronto");

    popupIconeResiliencia.src = caminhoIconeVariante(fator.icone, "verde");
    popupIconeResiliencia.alt = fator.fator + " – Resiliência";
    popupIconeVulnerabilidade.src = caminhoIconeVariante(fator.icone, "amarelo");
    popupIconeVulnerabilidade.alt = fator.fator + " – Vulnerabilidade";
    popupIconeAmeaca.src = caminhoIconeVariante(fator.icone, "vermelho");
    popupIconeAmeaca.alt = fator.fator + " – Ameaça";

    popupOds.textContent = fator.nome_ods || ("ODS " + pad2(fator.ods));
    popupOds.style.background = eixo.cor;
    popupTitulo.textContent = fator.fator;
    popupDefinicao.textContent = fator.definicao || "";
    preencherDiagnostico(fid);

    if (historicoPopup.length) {
      var anterior = FATORES[historicoPopup[historicoPopup.length - 1]];
      popupVoltar.textContent = "← Voltar a " + anterior.fator.fator;
      popupVoltar.hidden = false;
    } else {
      popupVoltar.hidden = true;
    }
    if (rolarParaTopo) overlay.querySelector(".popup").scrollTop = 0;
  }

  var elementoQueAbriu = null; // recebe o foco de volta ao fechar o popup

  function abrirPopup(fator) {
    elementoQueAbriu = document.activeElement;
    historicoPopup = [];
    mostrarFator(fator.id, true);
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    popupFechar.focus();
  }

  popupVoltar.addEventListener("click", function () {
    var anterior = historicoPopup.pop();
    if (anterior) mostrarFator(anterior, true);
  });

  function fecharPopup() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    fatorAberto = null;
    historicoPopup = [];
    // devolve o foco ao card do fator, para quem navega por teclado ou
    // leitor de tela não perder a posição na lista
    if (elementoQueAbriu && document.contains(elementoQueAbriu) && elementoQueAbriu.focus) {
      elementoQueAbriu.focus();
    }
    elementoQueAbriu = null;
  }

  popupFechar.addEventListener("click", fecharPopup);
  overlay.addEventListener("click", function (ev) {
    if (ev.target === overlay) fecharPopup();
  });
  document.addEventListener("keydown", function (ev) {
    if (overlay.hidden) return;
    if (ev.key === "Escape") {
      fecharPopup();
      return;
    }
    // mantém o foco dentro do popup enquanto ele está aberto
    if (ev.key === "Tab") {
      var focaveis = Array.prototype.filter.call(
        overlay.querySelectorAll("button, [href], select, input, textarea, [tabindex]:not([tabindex='-1'])"),
        function (el) { return !el.hidden && !el.disabled && el.offsetParent !== null; }
      );
      if (!focaveis.length) return;
      var primeiro = focaveis[0], ultimo = focaveis[focaveis.length - 1];
      var dentro = overlay.contains(document.activeElement);
      if (ev.shiftKey && (document.activeElement === primeiro || !dentro)) {
        ev.preventDefault();
        ultimo.focus();
      } else if (!ev.shiftKey && (document.activeElement === ultimo || !dentro)) {
        ev.preventDefault();
        primeiro.focus();
      }
    }
  });

  // ---------- Voltar a ver só a roda (desmarca o eixo selecionado) ----------

  function fecharColunaFatores() {
    layoutEixos.classList.remove("tem-selecao");
    agendarLacos(400);
    botoesEixo.forEach(function (b) {
      b.classList.remove("selecionado");
    });
    eixoSelecionadoOrdem = null;
    desativarZoomEixos();
  }

  btnVoltar.addEventListener("click", fecharColunaFatores);

    // ---------- Filtros de cor dos ícones dos fatores ----------
  // um filtro SVG por eixo: preto -> cor do eixo (escurecida até ter
  // contraste com o branco), branco -> branco
  function criarFiltrosCorEixo() {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    dados.forEach(function (eixo) {
      var rgb = hexParaRgb(corFundoComTextoBranco(eixo.cor));
      if (!rgb) return;
      var f = document.createElementNS(ns, "filter");
      f.setAttribute("id", "tinta-eixo-" + eixo.ordem);
      f.setAttribute("color-interpolation-filters", "sRGB");
      // engrossa levemente os traços escuros do desenho antes de colorir
      var m = document.createElementNS(ns, "feMorphology");
      m.setAttribute("operator", "erode");
      m.setAttribute("radius", "0.45");
      f.appendChild(m);
      var t = document.createElementNS(ns, "feComponentTransfer");
      [["feFuncR", rgb.r], ["feFuncG", rgb.g], ["feFuncB", rgb.b]].forEach(function (c) {
        var fn = document.createElementNS(ns, c[0]);
        fn.setAttribute("type", "table");
        fn.setAttribute("tableValues", (c[1] / 255).toFixed(3) + " 1");
        t.appendChild(fn);
      });
      f.appendChild(t);
      svg.appendChild(f);
    });
    document.body.appendChild(svg);
  }

  // ---------- Laços com os ODS (tela inicial) ----------

  // nomes curtos para os selos (o nome oficial vai no title) e cores
  // oficiais dos ODS; o ODS 18 (Igualdade Étnico-Racial) é o objetivo
  // adicional adotado pelo Brasil
  var ODS = {
    1: ["Erradicação da Pobreza", "Erradicação da Pobreza", "#E5243B"],
    2: ["Fome Zero", "Fome Zero e Agricultura Sustentável", "#DDA63A"],
    3: ["Saúde e Bem-Estar", "Saúde e Bem-Estar", "#4C9F38"],
    4: ["Educação de Qualidade", "Educação de Qualidade", "#C5192D"],
    5: ["Igualdade de Gênero", "Igualdade de Gênero", "#FF3A21"],
    6: ["Água e Saneamento", "Água Potável e Saneamento", "#26BDE2"],
    7: ["Energia Limpa", "Energia Limpa e Acessível", "#FCC30B"],
    8: ["Trabalho Decente", "Trabalho Decente e Crescimento Econômico", "#A21942"],
    9: ["Indústria e Inovação", "Indústria, Inovação e Infraestrutura", "#FD6925"],
    10: ["Redução das Desigualdades", "Redução das Desigualdades", "#DD1367"],
    11: ["Cidades Sustentáveis", "Cidades e Comunidades Sustentáveis", "#FD9D24"],
    12: ["Consumo Responsável", "Consumo e Produção Responsáveis", "#BF8B2E"],
    13: ["Ação Climática", "Ação contra a Mudança Global do Clima", "#3F7E44"],
    14: ["Vida na Água", "Vida na Água", "#0A97D9"],
    15: ["Vida Terrestre", "Vida Terrestre", "#56C02B"],
    16: ["Paz e Justiça", "Paz, Justiça e Instituições Eficazes", "#00689D"],
    17: ["Parcerias", "Parcerias e Meios de Implementação", "#19486A"],
    18: ["Igualdade Étnico-Racial", "Igualdade Étnico-Racial", "#6D4C41"]
  };
  // em que coluna e em que ordem cada eixo aparece (acompanha a posição
  // do eixo na roda: 1, 6 e 5 à esquerda; 2, 3 e 4 à direita)
  var COLUNAS_ODS = { "ods-esq": [1, 6, 5], "ods-dir": [2, 3, 4] };
  var odsLacos = document.getElementById("ods-lacos");
  var gruposOds = {}; // ordem do eixo -> elemento do grupo

  function odsDoEixo(eixo) {
    var vistos = {};
    eixo.fatores.forEach(function (f) { vistos[+f.ods] = true; });
    return Object.keys(vistos).map(Number).filter(function (n) { return ODS[n]; })
      .sort(function (x, y) { return x - y; });
  }

  function destacarEixoOds(ordem) {
    Object.keys(gruposOds).forEach(function (k) {
      gruposOds[k].classList.toggle("destaque", String(k) === String(ordem));
    });
    if (!odsLacos) return;
    odsLacos.classList.toggle("tem-destaque", ordem != null);
    odsLacos.querySelectorAll("[data-eixo]").forEach(function (el) {
      el.classList.toggle("destaque", el.getAttribute("data-eixo") === String(ordem));
    });
  }

  function montarOds() {
    var porOrdem = {};
    dados.forEach(function (e) { porOrdem[e.ordem] = e; });
    Object.keys(COLUNAS_ODS).forEach(function (idColuna) {
      var coluna = document.getElementById(idColuna);
      if (!coluna) return;
      COLUNAS_ODS[idColuna].forEach(function (ordem) {
        var eixo = porOrdem[ordem];
        if (!eixo) return;
        var grupo = document.createElement("div");
        grupo.className = "ods-grupo";
        grupo.setAttribute("data-eixo", ordem);
        grupo.style.setProperty("--cor-eixo", eixo.cor);
        grupo.setAttribute("role", "button");
        grupo.setAttribute("tabindex", "0");
        grupo.setAttribute("aria-label", "Eixo " + ordem + ": " + eixo.titulo + ". Abrir fatores");

        var titulo = document.createElement("div");
        titulo.className = "ods-grupo-titulo";
        titulo.innerHTML = "<b>EIXO " + ordem + "</b> ";
        titulo.appendChild(document.createTextNode(eixo.titulo));
        grupo.appendChild(titulo);

        var lista = document.createElement("ul");
        lista.className = "ods-lista";
        odsDoEixo(eixo).forEach(function (n) {
          var li = document.createElement("li");
          li.className = "ods-chip";
          li.title = "ODS " + pad2(n) + " - " + ODS[n][1];
          var num = document.createElement("span");
          num.className = "ods-num";
          num.style.background = ODS[n][2];
          num.textContent = pad2(n);
          var nome = document.createElement("span");
          nome.className = "ods-nome";
          nome.textContent = ODS[n][0];
          li.appendChild(num);
          li.appendChild(nome);
          lista.appendChild(li);
        });
        grupo.appendChild(lista);

        var abrir = function () {
          var b = botoesEixo.filter(function (x) { return x.getAttribute("data-eixo-id") === String(eixo.id); })[0];
          if (b) b.click();
        };
        grupo.addEventListener("click", abrir);
        grupo.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); abrir(); }
        });
        grupo.addEventListener("mouseenter", function () { ativarZoomEixo(ordem); destacarEixoOds(ordem); });
        grupo.addEventListener("mouseleave", function () { ativarZoomEixo(eixoSelecionadoOrdem); destacarEixoOds(null); });
        coluna.appendChild(grupo);
        gruposOds[ordem] = grupo;
      });
    });

    // passar o mouse num eixo da roda destaca os ODS dele
    botoesEixo.forEach(function (b) {
      var eixo = dados.filter(function (e) { return String(e.id) === b.getAttribute("data-eixo-id"); })[0];
      if (!eixo) return;
      b.addEventListener("mouseenter", function () { destacarEixoOds(eixo.ordem); });
      b.addEventListener("mouseleave", function () { destacarEixoOds(null); });
    });

    // faixa do rodapé: todos os ODS presentes nos eixos
    var faixa = document.getElementById("ods-faixa-lista");
    if (faixa) {
      var todos = {};
      dados.forEach(function (e) { odsDoEixo(e).forEach(function (n) { todos[n] = true; }); });
      Object.keys(todos).map(Number).sort(function (x, y) { return x - y; }).forEach(function (n) {
        var li = document.createElement("li");
        li.style.background = ODS[n][2];
        li.textContent = pad2(n);
        li.title = "ODS " + pad2(n) + " - " + ODS[n][1];
        faixa.appendChild(li);
      });
    }

    window.addEventListener("resize", function () { agendarLacos(60); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { agendarLacos(0); });
    window.addEventListener("load", function () { agendarLacos(0); });
    agendarLacos(0);
  }

  var temporizadorLacos = null;
  function agendarLacos(ms) {
    clearTimeout(temporizadorLacos);
    temporizadorLacos = setTimeout(desenharLacos, ms);
  }

  // linhas curvas de cada selo de ODS até a borda do círculo do eixo
  function desenharLacos() {
    if (!odsLacos) return;
    while (odsLacos.firstChild) odsLacos.removeChild(odsLacos.firstChild);
    var colEsq = document.getElementById("ods-esq");
    if (!colEsq || layoutEixos.classList.contains("tem-selecao") ||
        getComputedStyle(colEsq).display === "none") return;
    var base = layoutEixos.getBoundingClientRect();
    var rr = roda.getBoundingClientRect();
    odsLacos.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var ns = "http://www.w3.org/2000/svg";
    var raio = rr.width * 0.14;
    Object.keys(gruposOds).forEach(function (ordem) {
      var grupo = gruposOds[ordem];
      var pos = POSICOES_EIXO[ordem - 1];
      var cx = rr.left - base.left + rr.width * pos.x / 100;
      var cy = rr.top - base.top + rr.height * pos.y / 100;
      var esquerda = grupo.parentNode.id === "ods-esq";
      var cor = grupo.style.getPropertyValue("--cor-eixo");
      var g = document.createElementNS(ns, "g");
      g.setAttribute("data-eixo", ordem);
      var chips = grupo.querySelectorAll(".ods-chip");
      var nChips = chips.length;
      chips.forEach(function (chip, i) {
        var c = chip.getBoundingClientRect();
        var ax = (esquerda ? c.right + 8 : c.left - 8) - base.left;
        var ay = c.top + c.height / 2 - base.top;
        // ponto de chegada espalhado num arco da borda voltada para a coluna
        var abertura = Math.min(1.1, 0.12 * nChips);
        var frac = nChips > 1 ? i / (nChips - 1) - 0.5 : 0;
        var ang = (esquerda ? Math.PI : 0) + (esquerda ? -1 : 1) * frac * abertura;
        var ex = cx + raio * Math.cos(ang);
        var ey = cy + raio * Math.sin(ang);
        var dx = (ex - ax) * 0.55;
        var p = document.createElementNS(ns, "path");
        p.setAttribute("d", "M " + ax.toFixed(1) + " " + ay.toFixed(1) + " C " + (ax + dx).toFixed(1) + " " + ay.toFixed(1) +
          " " + (ex - dx * 0.6).toFixed(1) + " " + ey.toFixed(1) + " " + ex.toFixed(1) + " " + ey.toFixed(1));
        p.setAttribute("stroke", cor);
        g.appendChild(p);
        var d = document.createElementNS(ns, "circle");
        d.setAttribute("cx", ax.toFixed(1));
        d.setAttribute("cy", ay.toFixed(1));
        d.setAttribute("r", "3.2");
        d.setAttribute("fill", cor);
        g.appendChild(d);
      });
      odsLacos.appendChild(g);
    });
  }

  // ---------- Inicialização ----------

  criarFiltrosCorEixo();
  montarRoda();
  montarOds();
  montarSeletor();
  selecionarTerritorio(territorioInicial(), false);
})();
