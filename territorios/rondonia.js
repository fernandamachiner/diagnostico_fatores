/*
 * DIAGNÓSTICO SITUACIONAL TERRITORIAL - Rondônia
 *
 * Arquivo gerado por territorios/ferramentas/gerar_territorio.py a partir de
 * territorios/fontes/Diagnostico_eixos_Rondonia_Matriz_v1.0.2.docx.
 * Não edite à mão: altere o documento-fonte ou os arquivos em
 * territorios/correspondencias/ e gere novamente.
 *
 * Contém apenas dados deste território. Eixos e fatores ficam no cadastro
 * metodológico (metodologia/metodologia.js); cada diagnóstico se liga ao
 * fator pelo id.
 */
window.TERRITORIOS = window.TERRITORIOS || {};
window.TERRITORIOS["rondonia"] = {
  "formato": "diagnostico-territorial/2",
  "territorio": {
    "id": "rondonia",
    "nome": "Rondônia",
    "uf": "RO",
    "tipo": "unidade federativa (52 municípios)",
    "rotulo": "Rondônia"
  },
  "situacao": {
    "status": "diagnóstico situacional",
    "territorio_de_exemplo": false,
    "aviso": "Os textos referem-se ao estado de Rondônia e, quando indicado, aos seus municípios e regiões de saúde."
  },
  "decisoes": [
    {
      "data": "2026-11-11",
      "decisao": "A linha ODS mobilizados da abertura dos eixos é excluída dos dados, pela mesma regra adotada para Campo Grande/MS e para o Distrito Federal; o painel não exibe esse campo. O documento-fonte não foi alterado."
    },
    {
      "data": "2026-11-11",
      "decisao": "Por decisão da coordenação, a ressalva das notas metodológicas sobre a confirmação de dados obtidos por meio de reportagens e de sistematizações de terceiros (Agência Brasil, InfoAmazonia, Mongabay Latam e análises do Anuário) foi retirada do documento-fonte e, por consequência, das notas metodológicas registradas no arquivo de dados."
    }
  ],
  "metodologia": {
    "arquivo": "metodologia/metodologia.js",
    "versao": "1.0.2"
  },
  "documento_fonte": {
    "arquivo": "territorios/fontes/Diagnostico_eixos_Rondonia_Matriz_v1.0.2.docx",
    "titulo": "Diagnóstico Situacional do Estado de Rondônia, Matriz de Fatores v1.0.2",
    "periodo_referencia": "não declarado como período único; cada dado indica o próprio ano de referência e a escala territorial",
    "responsaveis": "PICAPS | CoLaboratório CTIS | Fiocruz Brasília",
    "data_elaboracao": "outubro de 2026",
    "matriz_declarada_no_documento": "Matriz de Fatores v1.0.2, 150 fatores",
    "capa": [
      "PLATAFORMA DE INTELIGÊNCIA COOPERATIVA COM A ATENÇÃO PRIMÁRIA À SAÚDE",
      "CoLaboratório de Ciência, Tecnologia, Inovação e Sociedade, CTIS | Fiocruz Brasília",
      "DIAGNÓSTICO SITUACIONAL",
      "RONDÔNIA",
      "Diagnóstico estadual | 52 municípios | Capital: Porto Velho",
      "1.581.196 habitantes (Censo 2022) | 1.757.338 habitantes estimados (IBGE) | 237.753 km² | 6,65 hab./km² | IDH 0,700 (2021)",
      "Organizado pelos seis Temas Geradores da Pedagogia da Práxis no Território e pelos 150 fatores da Matriz de Fatores v1.0.2",
      "Referenciais: Determinantes Sociais da Saúde (Dahlgren e Whitehead) | Planejamento Estratégico Situacional (Matus) | Teoria Ator-Rede (Latour) | Pedagogia da Práxis (Freire)",
      "Prompt-Mestre v2.0 | Versão para validação técnica e comunitária",
      "Brasília, outubro de 2026"
    ]
  },
  "resumo_executivo": {
    "quadro_eixos": [
      [
        "Eixo",
        "Tema gerador",
        "Fatores",
        "Contradição central"
      ],
      [
        "Eixo 1",
        "O Suor que não nos Sustenta",
        "29",
        "Nosso território produz riqueza, mas vivemos na precarização e no desemprego."
      ],
      [
        "Eixo 2",
        "A Vida em Risco",
        "38",
        "A mortalidade, a insalubridade e o adoecimento expressam a negligência estatal."
      ],
      [
        "Eixo 3",
        "Nossos Corpos Silenciados",
        "18",
        "A cor da pele e o gênero determinam quem sofre mais violência, exclusão e invisibilidade."
      ],
      [
        "Eixo 4",
        "A Terra de Quem?",
        "24",
        "A natureza é tratada como mercadoria, expropriando comunidades tradicionais e destruindo ecossistemas."
      ],
      [
        "Eixo 5",
        "A Cidade Negada",
        "29",
        "Habitação, mobilidade, educação e cultura são direitos sistematicamente sonegados."
      ],
      [
        "Eixo 6",
        "A Voz na Mesa",
        "12",
        "A comunidade transita de beneficiária a sujeito da história quando assume o protagonismo."
      ]
    ],
    "texto": "Rondônia tinha 1.581.196 habitantes no Censo 2022, com estimativa mais recente de 1.757.338 (IBGE), distribuídos em 52 municípios e 237.753 km², com densidade de 6,65 habitantes por km². O estado tem o maior PIB per capita da Região Norte, R$ 48.353,38 em 2023, décimo do país, e IDH de 0,700 em 2021 (IBGE). A contradição estruturante, que atravessa os seis eixos deste diagnóstico, é a coexistência de dinamismo econômico baseado em agropecuária, energia e conversão da floresta com déficits graves de saneamento, violência elevada, conflitos pela terra e exposição crescente de populações vulnerabilizadas a riscos ambientais e climáticos. O desmatamento acumulado de 67.708 km², 13,37% do total da Amazônia Legal (INPE, PRODES), é a marca territorial desse modelo, e sua redução de 36,39% entre 2024 e 2025 indica que a trajetória pode ser alterada.\n\nNo campo sanitário, a malária caiu de 11.762 casos em 2023 para 7.716 em 2024 e manteve queda em 2025 (Agevisa), a mortalidade infantil recuou para 12,2 por mil nascidos vivos em 2023 (DATASUS), e o IDEB dos anos iniciais avançou para 6,1 em 2025 (INEP). Persistem, contudo, a hiperendemia de hanseníase, o surto de febre do Oropouche de 2024 com 1.497 casos confirmados (MPF com base na Agevisa), a exposição de comunidades ribeirinhas e indígenas ao mercúrio do garimpo no Madeira e o pior saneamento entre as grandes cidades, com Porto Velho atendendo 35,02% da população com água e 9,27% com coleta de esgoto em 2023 (Instituto Trata Brasil).\n\nA violência é traço central do território. Em 2025, o estado registrou taxa de 28,1 mortes violentas intencionais por 100 mil habitantes, a nona do país e crescente desde 2019, aumento de 66% nos feminicídios, a segunda maior taxa de estupro do Brasil, primeiro lugar em abandono de incapaz e em aliciamento de crianças, e a terceira maior taxa de encarceramento, com a maior taxa de mortes sob custódia (Anuário Brasileiro de Segurança Pública 2026). No campo, Rondônia concentrou sete dos 26 assassinatos em conflitos agrários do país em 2025 (CPT). O risco climático materializou-se na cheia histórica do Madeira em 2014, nas secas de 2023 e 2024, com emergência reconhecida em 18 municípios, e na fumaça que levou Porto Velho à pior qualidade do ar do país em outubro de 2026.\n\nO diagnóstico identifica como potencialidades a base científica instalada, com UNIR, Fiocruz Rondônia e Embrapa, a tendência de redução da malária e do desmatamento, a tradição associativa rural, a organização de povos indígenas, quilombolas, extrativistas e trabalhadores rurais, a densidade de organizações religiosas e comunitárias com atuação em emergências e a experiência acumulada da PICAPS em formação de pesquisadores populares e brigadas comunitárias. Os nós críticos e as prioridades estão sistematizados na síntese estratégica, com referência aos códigos dos fatores da Matriz v1.0.2."
  },
  "eixos_documento": [
    {
      "numero": 1,
      "titulo_no_documento": "O Suor que não nos Sustenta",
      "contradicao_central": "Nosso território produz riqueza, mas vivemos na precarização e no desemprego.",
      "foco_pedagogico": "Trabalho, renda, economia solidária e agricultura familiar",
      "outros_itens_da_abertura": [
        "EIXO 1  |  O Suor que não nos Sustenta"
      ],
      "introducao": "O eixo examina a contradição entre a condição de Rondônia como estado de maior PIB per capita da Região Norte, R$ 48.353,38 em 2023, décimo do país (IBGE), e a persistência de informalidade, insegurança alimentar e pobreza em comunidades rurais, ribeirinhas, indígenas e nas periferias urbanas. A economia, formada a partir dos projetos de colonização ao longo da BR-364, apoia-se na pecuária, na soja, no café e na geração hidrelétrica das usinas do Madeira, e associa-se historicamente ao desmatamento. Os 29 fatores do eixo descrevem como a riqueza circula sem se distribuir: agricultura familiar pressionada pela concentração fundiária e por 123 conflitos por terra em 2024 (CPT), trabalho informal e em garimpo ilegal, sobrecarga de cuidado sobre as mulheres e dependência logística que encarece alimentos em cheias e secas. Os eventos climáticos extremos acrescentam ao eixo a necessidade de crédito e proteção para a recuperação econômica de trabalhadores e produtores atingidos.",
      "fatores_no_documento": 29
    },
    {
      "numero": 2,
      "titulo_no_documento": "A Vida em Risco",
      "contradicao_central": "A mortalidade, a insalubridade e o adoecimento expressam a negligência estatal.",
      "foco_pedagogico": "Saúde, corpo político, saneamento e adoecimento social",
      "outros_itens_da_abertura": [
        "EIXO 2  |  A Vida em Risco"
      ],
      "introducao": "O eixo reúne 38 fatores que descrevem a vida exposta ao risco em Rondônia, do perfil epidemiológico à cadeia de ameaças climáticas. O estado combina carga elevada de doenças transmissíveis e negligenciadas, como malária, hanseníase, leishmanioses e o surto de febre do Oropouche de 2024, com o déficit de saneamento mais grave entre as capitais, em que Porto Velho atendia 35,02% da população com água e 9,27% com coleta de esgoto em 2023 (Instituto Trata Brasil), e com violência letal crescente, de 28,1 mortes por 100 mil habitantes em 2025, a nona do país (Anuário Brasileiro de Segurança Pública 2026). A mortalidade infantil caiu para 12,2 por mil nascidos vivos em 2023 (DATASUS). O risco climático já se materializa em cheias e secas extremas do Madeira, com mínima histórica em 2023 e emergência reconhecida em 18 municípios em 2024, e em fumaça que levou Porto Velho à pior qualidade do ar do país em outubro de 2026. A exposição ao mercúrio do garimpo é problema sanitário específico do território.",
      "fatores_no_documento": 38
    },
    {
      "numero": 3,
      "titulo_no_documento": "Nossos Corpos Silenciados",
      "contradicao_central": "A cor da pele e o gênero determinam quem sofre mais violência, exclusão e invisibilidade.",
      "foco_pedagogico": "Gênero, raça, direitos fundamentais e empoderamento",
      "outros_itens_da_abertura": [
        "EIXO 3  |  Nossos Corpos Silenciados"
      ],
      "introducao": "O eixo analisa como raça, etnia, gênero, idade e território organizam a violência, a pobreza e o acesso a direitos em Rondônia. O estado abriga 21.146 indígenas, 11.997 deles em terras indígenas, e 2.925 quilombolas (IBGE, Censo 2022), em territórios sob pressão de invasões, grilagem e garimpo, como as terras Uru-Eu-Wau-Wau e Karipuna e o quilombo Pedras Negras, que aguarda titulação. Os indicadores de violência de gênero e contra crianças estão entre os mais graves do país: em 2025, os feminicídios cresceram 66%, a taxa de estupro foi a segunda maior do Brasil, e o estado ocupou o primeiro lugar em abandono de incapaz e em aliciamento de crianças (Anuário Brasileiro de Segurança Pública 2026). Os 18 fatores do eixo permitem nomear o racismo estrutural e ambiental, expresso na exposição desproporcional de quilombolas à fumaça e de ribeirinhos e indígenas ao mercúrio, e as falhas de uma rede de proteção concentrada nos municípios maiores.",
      "fatores_no_documento": 18
    },
    {
      "numero": 4,
      "titulo_no_documento": "A Terra de Quem?",
      "contradicao_central": "A natureza é tratada como mercadoria, expropriando comunidades tradicionais e destruindo ecossistemas.",
      "foco_pedagogico": "Soberania territorial, meio ambiente, biodiversidade e clima",
      "outros_itens_da_abertura": [
        "EIXO 4  |  A Terra de Quem?"
      ],
      "introducao": "O eixo trata da relação entre o modelo de ocupação de Rondônia e a degradação da floresta amazônica, dos rios e dos territórios tradicionais. O estado acumula 67.708 km² desmatados segundo o PRODES, 13,37% do total da Amazônia Legal (INPE), e reduziu o desmatamento em 36,39% entre 2024 e 2025, sinal de que a trajetória pode ser alterada. Os 24 fatores abrangem financiamento ambiental, restauração de ecossistemas hídricos alterados por usinas e garimpo, saberes tradicionais, pesquisa, tecnologias sociais e planejamento climático. O território dispõe de base científica relevante, com UNIR, Fiocruz Rondônia e Embrapa, e de povos e comunidades que mantêm a floresta onde seus territórios são protegidos, mas carece de fiscalização proporcional à extensão do estado, de planos de adaptação climática e de programas de restauração com metas. Um fator marinho é tratado pela interface da bacia amazônica, conforme as notas metodológicas.",
      "fatores_no_documento": 24
    },
    {
      "numero": 5,
      "titulo_no_documento": "A Cidade Negada",
      "contradicao_central": "Habitação, mobilidade, educação e cultura são direitos sistematicamente sonegados.",
      "foco_pedagogico": "Infraestrutura, educação, cultura e território urbano-rural",
      "outros_itens_da_abertura": [
        "EIXO 5  |  A Cidade Negada"
      ],
      "introducao": "O eixo descreve a cidade e o campo negados em Rondônia: um estado de 1.581.196 habitantes no Censo 2022, com estimativa mais recente de 1.757.338, distribuídos em 237.753 km² e densidade de 6,65 habitantes por km² (IBGE), cuja rede urbana cresceu ao longo da BR-364 sem infraestrutura de saneamento, drenagem e transporte coletivo proporcional. Os 29 fatores abrangem habitação, mobilidade rodoviária e fluvial, energia, educação, cultura, lazer e a vulnerabilidade das infraestruturas a cheias, secas e fumaça. Destacam-se o paradoxo de um estado que gera energia em grande escala para o país enquanto comunidades isoladas dependem de geradores a diesel, a dependência do transporte fluvial em parte do território e o avanço do IDEB dos anos iniciais de 5,6 para 6,1 entre 2023 e 2025 (INEP), contrastando com a estagnação no ensino médio. A educação escolar indígena, quilombola e do campo exige atenção específica.",
      "fatores_no_documento": 29
    },
    {
      "numero": 6,
      "titulo_no_documento": "A Voz na Mesa",
      "contradicao_central": "A comunidade transita de beneficiária a sujeito da história quando assume o protagonismo.",
      "foco_pedagogico": "Participação social, governança, transparência e parcerias sociotécnicas",
      "outros_itens_da_abertura": [
        "EIXO 6  |  A Voz na Mesa"
      ],
      "introducao": "O eixo examina as condições para que as comunidades de Rondônia passem de beneficiárias a sujeitos do planejamento. Os 12 fatores abrangem organização comunitária, comunicação local, parcerias, participação institucional, transparência e as formas de apoio mútuo que se ativam em emergências. O estado possui tradição associativa enraizada na colonização, organizações indígenas, quilombolas, extrativistas e de trabalhadores rurais com capacidade de mobilização, e instituições de pesquisa e controle com atuação relevante. Esse capital social opera, contudo, em contexto de violência: Rondônia concentrou sete dos 26 assassinatos em conflitos no campo no país em 2025 (CPT), lidera o país em apreensão de armas e enfrenta a presença do crime organizado associado ao tráfico, ao garimpo e à grilagem (Anuário Brasileiro de Segurança Pública 2026). A proteção de lideranças, a transparência e o acesso à informação em territórios isolados, onde o rádio ainda é o meio principal, são condições para a participação efetiva.",
      "fatores_no_documento": 12
    }
  ],
  "sintese_estrategica": [
    {
      "titulo": null,
      "conteudo": [
        {
          "paragrafo": "A síntese cruza a análise dos 150 fatores para identificar nós críticos, entendidos como problemas cuja transformação produz efeitos em cadeia sobre outros fatores, e potencialidades que podem sustentar a ação. Por se tratar de diagnóstico estadual e na ausência, nesta versão, de inscrições da cartografia social, a seleção baseia-se nos dados secundários e deve ser validada e desdobrada por região de saúde com os pesquisadores populares, as equipes de APS e as organizações dos territórios."
        }
      ]
    },
    {
      "titulo": "Nós críticos",
      "conteudo": [
        {
          "tabela": [
            [
              "Nó crítico",
              "Expressão no território",
              "Fatores"
            ],
            [
              "1. Violência estrutural no campo e na cidade",
              "Taxa de MVI de 28,1 por 100 mil e crescente; 7 assassinatos em conflitos no campo em 2025; feminicídios +66%; 2ª maior taxa de estupro; 1º lugar em abandono de incapaz e apreensão de armas",
              "E2-F28, E3-F02, E3-F19, E6-F06, E1-F01"
            ],
            [
              "2. Saneamento crítico",
              "Porto Velho com 35,02% de água, 9,27% de coleta e 12,18% de tratamento de esgoto em 2023; predomínio de poços e fossas no interior",
              "E2-F20, E2-F31, E2-F21, E1-F19"
            ],
            [
              "3. Desmatamento, garimpo e contaminação",
              "67.708 km² desmatados acumulados; mercúrio no Madeira; aumento de 54% na contaminação por agrotóxicos em 2024",
              "E4-F16, E2-F21, E2-F06, E4-F04, E1-F26"
            ],
            [
              "4. Extremos climáticos sem preparação comunitária",
              "Cheia histórica de 2014, secas com mínimas históricas em 2023 e 2024, emergência em 18 municípios, fumaça extrema em 2024 e 2026",
              "E2-F30, E2-F34, E2-F25, E2-F38, E2-F32, E4-F12"
            ],
            [
              "5. Insegurança territorial de povos e comunidades tradicionais",
              "Invasões em terras indígenas, quilombos sem titulação, exposição desproporcional a fumaça e mercúrio",
              "E3-F19, E3-F17, E4-F18, E2-F25"
            ],
            [
              "6. Doenças transmissíveis amazônicas",
              "Malária concentrada em Porto Velho, Candeias e Guajará-Mirim; hanseníase hiperendêmica; Oropouche em 2024",
              "E2-F08, E2-F35, E2-F07, E2-F14"
            ],
            [
              "7. Acesso desigual a serviços em território extenso",
              "Densidade de 6,65 hab./km², dependência de transporte fluvial, rotatividade de profissionais, serviços concentrados nos polos",
              "E2-F15, E2-F16, E5-F19, E5-F23, E5-F21"
            ]
          ]
        }
      ]
    },
    {
      "titulo": "Potencialidades",
      "conteudo": [
        {
          "paragrafo": "Rondônia dispõe de base científica relevante em saúde e ambiente, com UNIR, Fiocruz Rondônia e Embrapa, incluindo décadas de pesquisa sobre mercúrio e malária no Madeira (E4-F06, E6-F04). A redução da malária e do desmatamento em 2024 e 2025 demonstra capacidade de resposta institucional (E2-F08, E4-F16). A tradição associativa dos projetos de colonização e a organização de povos indígenas, quilombolas, extrativistas e trabalhadores rurais constituem capital social mobilizável (E6-F01, E6-F02, E3-F10). Os povos e comunidades tradicionais mantêm saberes e territórios que conservam a floresta quando protegidos (E4-F18, E5-F29). O avanço do IDEB nos anos iniciais mostra efeito de investimentos educacionais (E5-F04). As organizações religiosas e comunitárias com atuação histórica em defesa de direitos e em emergências são aliadas estratégicas (E6-F16)."
        }
      ]
    },
    {
      "titulo": "Matriz de prioridades para o ciclo PICAPS",
      "conteudo": [
        {
          "tabela": [
            [
              "Prioridade",
              "Ação estruturante",
              "Fatores"
            ],
            [
              "Brigadas populares e preparação para extremos",
              "Inventário comunitário de riscos por município ribeirinho e rural; brigadas articuladas à Defesa Civil e à APS; cadeia de alerta por rádio e lideranças; abrigos climáticos contra fumaça",
              "E2-F32, E2-F33, E2-F37, E5-F01, E6-F03"
            ],
            [
              "Vigilância em saúde do mercúrio e da fumaça",
              "Monitoramento de pescado e de populações expostas no Madeira; aplicação do manual técnico de 2025; alertas de qualidade do ar com orientações de proteção",
              "E2-F06, E2-F21, E2-F25, E1-F26, E4-F09"
            ],
            [
              "Proteção da vida e enfrentamento das violências",
              "Rede de proteção a mulheres e crianças fora dos polos; proteção de lideranças em conflitos agrários; mediação fundiária",
              "E3-F02, E1-F01, E3-F09, E2-F28, E6-F01"
            ],
            [
              "Saneamento como prioridade sanitária",
              "Acompanhamento social de metas de universalização; soluções descentralizadas e tecnologias sociais de água para comunidades isoladas",
              "E2-F20, E2-F22, E4-F05, E2-F31"
            ],
            [
              "Segurança territorial e saúde diferenciada",
              "Apoio à proteção de terras indígenas e titulação quilombola; saúde indígena e quilombola articulada aos DSEI e à APS",
              "E3-F19, E3-F17, E3-F18, E2-F15"
            ],
            [
              "Controle das doenças amazônicas",
              "Vigilância integrada de malária, Oropouche, dengue e hanseníase por microárea; diagnóstico e tratamento oportunos em áreas de garimpo e fronteira",
              "E2-F08, E2-F35, E2-F07, E2-F14"
            ],
            [
              "Restauração e economia da floresta em pé",
              "Restauração de matas ciliares; cadeias da sociobiodiversidade; crédito para transição agroecológica e adaptação",
              "E4-F25, E4-F22, E1-F23, E1-F29"
            ]
          ]
        }
      ]
    }
  ],
  "notas_metodologicas": [
    {
      "titulo": null,
      "conteudo": []
    },
    {
      "titulo": "Procedimentos",
      "conteudo": [
        {
          "paragrafo": "Este diagnóstico foi elaborado segundo o Prompt-Mestre v2.0 e a Matriz de Fatores v1.0.2, com os 150 fatores transcritos literalmente da aba Consolidado e analisados na ordem dos códigos. A estrutura foi gerada por script que interrompe a produção do documento se algum fator não tiver análise, garantindo a integralidade da matriz. Por se tratar de diagnóstico estadual, a escala de referência é o estado de Rondônia; recortes municipais, como Porto Velho, foram utilizados quando disponíveis e explicitamente indicados. Toda afirmação quantitativa é atribuída a fonte com ano de referência e escala territorial; quando nenhum dado foi localizado, a ausência foi registrada como lacuna de informação e como achado do diagnóstico."
        },
        {
          "paragrafo": "Nesta versão não foram incorporadas inscrições da cartografia social. Recomenda-se que o diagnóstico estadual seja desdobrado por região de saúde, com Círculos de Cultura nos territórios prioritários identificados na síntese estratégica, para confrontar percepção comunitária e dados secundários."
        }
      ]
    },
    {
      "titulo": "Fatores de baixa aplicabilidade territorial",
      "conteudo": [
        {
          "tabela": [
            [
              "Fator",
              "Via adotada",
              "Justificativa"
            ],
            [
              "E4-F13 Gerenciar e proteger os oceanos, mares e recursos marinhos",
              "Interface indireta",
              "Estado sem costa; analisado pela contribuição das águas do Madeira à bacia amazônica e ao estuário"
            ],
            [
              "E2-F36 Pontos de deslizamento de terra",
              "Interface indireta",
              "Relevo de planícies e baixos planaltos; interface analisada pela erosão fluvial e desbarrancamento das margens"
            ],
            [
              "E2-F17 Tornado/Vendaval",
              "Lacuna de informação",
              "Eventos de vento extremo ocorrem, mas sem série estadual sistematizada nesta versão"
            ],
            [
              "E3-F07 Tráfico de pessoas",
              "Lacuna de informação",
              "Ausência de dados estaduais sistematizados; risco associado à fronteira e a atividades ilegais"
            ]
          ]
        }
      ]
    },
    {
      "titulo": "Principais lacunas de informação",
      "conteudo": [
        {
          "paragrafo": "Constituem lacunas a serem supridas na próxima versão, por consulta direta às bases indicadas na Seção 10 do Prompt-Mestre: cobertura de APS e número de equipes por município (e-Gestor e painel de cobertura potencial); séries do SIM, SINASC e SINAN por município e região de saúde para mortalidade materna e neonatal, causas externas e agravos transmissíveis; estrutura etária, pessoas com deficiência, analfabetismo, acesso à internet e características do entorno dos domicílios do Censo 2022; famílias no CadÚnico e no Bolsa Família por município (VIS Data/MDS); focos de calor e área queimada por município (Programa Queimadas e MapBiomas); registros de desastres no S2iD; inventário de barragens no SNISB; taxa de informalidade e insegurança alimentar da PNAD Contínua; dados de saúde indígena dos DSEI Porto Velho e Vilhena; e inventário comunitário de organizações, rádios, grupos de mensagens, hortas e pontos de risco, a ser produzido pela cartografia social."
        }
      ]
    },
    {
      "titulo": "Fontes utilizadas",
      "conteudo": [
        {
          "tabela": [
            [
              "Eixo",
              "Fontes, ano de referência e escala"
            ],
            [
              "Todos",
              "IBGE, Censo Demográfico 2022 e IBGE Estados (população, área, densidade, estimativa populacional, IDH 2021, rendimento domiciliar per capita, matrículas 2025, frota 2025, receitas e despesas estaduais 2025), escala estadual"
            ],
            [
              "Eixo 1",
              "IBGE, Contas Regionais 2023 (PIB e PIB per capita); Governo de Rondônia, PIB 2023; CPT, Conflitos no Campo Brasil 2024 (escala estadual); Agência Brasil com base no Serviço Geológico do Brasil e na ANTAQ, 2024"
            ],
            [
              "Eixo 2",
              "Agevisa-RO com base no Sivep-Malária, 2023 a 2025; Secretaria Municipal de Saúde de Porto Velho, boletim de malária 2025; Ministério da Saúde, Boletim Epidemiológico vol. 55 nº 11, 2024; MPF com base na Agevisa, Oropouche 2024; DATASUS via Amazônia Legal em Dados, mortalidade infantil 2022 e 2023; Epidemiologia e Serviços de Saúde, hanseníase 2001 a 2012; Instituto Trata Brasil, Rankings do Saneamento 2025 e 2026 (base SINISA 2023 e 2024); Serviço Geológico do Brasil, cotas do Madeira 2014, 2023 e 2024; Prefeitura de Porto Velho, qualidade do ar e focos de queimada, outubro de 2026; InfoAmazonia com base no CAMS, 2024; Observatório da Saúde Pública, APS em Números"
            ],
            [
              "Eixo 3",
              "IBGE, Censo 2022 Indígenas e Quilombolas; Anuário Brasileiro de Segurança Pública 2026 (dados de 2025, escala estadual e municípios com mais de 100 mil habitantes); CPT, 2024 e 2025; InfoAmazonia, quilombo Pedras Negras, 2025; Senado Federal, TI Uru-Eu-Wau-Wau, dezembro de 2025"
            ],
            [
              "Eixo 4",
              "INPE, PRODES e TerraBrasilis (desmatamento acumulado e taxa 2025); Mongabay Latam, base de estudos sobre mercúrio no rio Madeira, 2026; Ministério da Saúde, Fiocruz e Ministério dos Povos Indígenas, manual técnico sobre mercúrio, 2025"
            ],
            [
              "Eixo 5",
              "INEP, IDEB 2023 e 2025 (escala estadual e rede pública); IBGE Estados, matrículas e frota 2025; Agência Brasil com base na ANTAQ, hidrovia do Madeira 2022"
            ],
            [
              "Eixo 6",
              "CPT e CIMI, relatório Conflitos no Campo 2025; Anuário Brasileiro de Segurança Pública 2026; IBGE Estados, finanças estaduais; Agevisa, malária 2023 e 2024"
            ]
          ]
        },
        {
          "paragrafo": "PICAPS | CoLaboratório CTIS | Fiocruz Brasília. Diagnóstico Situacional do Estado de Rondônia, Matriz de Fatores v1.0.2, outubro de 2026."
        }
      ]
    }
  ],
  "diagnosticos": {
    "E1-F01": {
      "texto": "O cuidado com crianças, idosos e pessoas com deficiência em Rondônia apoia-se nos CRAS e CREAS dos 52 municípios, nas equipes de Saúde da Família e na rede de educação infantil, com capacidade desigual entre a capital, os polos regionais do eixo da BR-364 e os municípios pequenos e ribeirinhos. O Anuário Brasileiro de Segurança Pública 2026 coloca o estado em primeiro lugar no país em abandono de incapaz, com taxa de 102,2 por 100 mil habitantes de 0 a 17 anos em 2025, 3,47 vezes a média nacional, e em segundo lugar em maus-tratos, com 197,3 por 100 mil, indicadores que revelam falhas estruturais na rede de proteção (escala estadual). O fator articula-se a E1-F07, E3-F09 e E3-F02 e exige que o planejamento estime a demanda de cuidado por município com base no CadÚnico e no Censo Escolar, priorizando territórios rurais e ribeirinhos onde a oferta de serviços é mais rarefeita.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F07",
        "E3-F09",
        "E3-F02"
      ],
      "origem": {
        "codigo_documento": "E1-F01",
        "nome_no_documento": "Cuidado com crianças e grupos vulneráveis",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F02": {
      "texto": "O acesso a alimentos em Rondônia é marcado pelo contraste entre a condição de grande produtor agropecuário, com pecuária bovina, soja, milho e café, e a dependência de renda para a alimentação urbana. O rendimento domiciliar per capita estadual informado pelo IBGE é de R$ 1.991 (PNAD Contínua, escala estadual), e as famílias de menor renda comprometem parcela elevada do orçamento com alimentos. As secas de 2023 e 2024, que reduziram o rio Madeira a 1,10 m em outubro de 2023 e a 2,07 m em agosto de 2024 (Serviço Geológico do Brasil), comprometeram a pesca, a navegação e o abastecimento de comunidades ribeirinhas, que receberam água e cestas da Defesa Civil. A medição de insegurança alimentar pela EBIA está disponível apenas em escala estadual na PNAD Contínua, sem recorte municipal, lacuna registrada. O fator relaciona-se a E1-F06, E2-F02 e E2-F30 e orienta a vigilância nutricional pela APS nos territórios ribeirinhos e indígenas.",
      "fontes_citadas": [
        "PNAD Contínua, escala estadual",
        "Serviço Geológico do Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F06",
        "E2-F02",
        "E2-F30"
      ],
      "origem": {
        "codigo_documento": "E1-F02",
        "nome_no_documento": "Alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F03": {
      "texto": "A agricultura familiar é constitutiva da formação de Rondônia, cujo povoamento a partir da década de 1970 foi organizado por projetos de colonização do INCRA ao longo da BR-364, que distribuíram lotes a migrantes do Sul, Sudeste e Nordeste. Essa base produtiva familiar sustenta a produção de café, leite, mandioca, hortaliças e pequenos animais, mas sofre pressão de concentração fundiária e expansão da pecuária extensiva e da soja no Cone Sul do estado. O Censo Agropecuário 2017 do IBGE é a fonte para quantificar estabelecimentos familiares por município, dado não sistematizado nesta versão. Os conflitos agrários, com 123 conflitos por terra atingindo mais de 9.400 famílias em 2024 segundo a Comissão Pastoral da Terra, expressam a disputa pela terra que condiciona a viabilidade da agricultura familiar (E3-F19). O fator articula-se a E1-F26, E1-F22 e E4-F02.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "1970",
        "2017",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F19",
        "E1-F26",
        "E1-F22",
        "E4-F02"
      ],
      "origem": {
        "codigo_documento": "E1-F03",
        "nome_no_documento": "Agricultura familiar",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F04": {
      "texto": "Hortas, quintais produtivos e roças de subsistência são práticas disseminadas em Rondônia, sobretudo nos assentamentos rurais, nas comunidades ribeirinhas do Madeira, Mamoré e Guaporé, nas aldeias indígenas e nas periferias das cidades do eixo da BR-364, onde muitas famílias mantêm vínculo com a origem rural. A produção para autoconsumo é estratégia de segurança alimentar e de redução de gastos, e inclui plantas medicinais (E4-F03). As secas recentes e a contaminação de solos e águas por agrotóxicos e por mercúrio do garimpo, com 102 registros de contaminação por minério no estado em 2024 segundo a CPT, ameaçam essa produção em áreas específicas. Não há inventário estadual dessas iniciativas, lacuna que a cartografia social pode suprir. O fator articula-se a E1-F02, E1-F11 e E2-F21, e o apoio técnico e o acesso à água são condições para sua ampliação nos territórios periféricos e ribeirinhos.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F03",
        "E1-F02",
        "E1-F11",
        "E2-F21"
      ],
      "origem": {
        "codigo_documento": "E1-F04",
        "nome_no_documento": "Produção de alimentos – hortas, hortos, quintais e outros que produzem alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F05": {
      "texto": "A produção orgânica em Rondônia é minoritária frente ao modelo agropecuário convencional, concentrando-se em grupos de agricultores familiares, cooperativas e iniciativas agroecológicas vinculadas a movimentos sociais e à extensão rural. O uso de agrotóxicos na soja, no milho e nas pastagens é intenso no Cone Sul e no eixo central do estado, e a CPT registrou aumento de 54% nos casos de contaminação por agrotóxicos entre 2023 e 2024 (escala estadual), o que reforça a importância sanitária do fator para trabalhadores rurais e comunidades vizinhas às lavouras (E2-F21, E1-F16). O número de produtores orgânicos certificados por município, disponível no Cadastro Nacional de Produtores Orgânicos do Ministério da Agricultura, deve ser incorporado ao diagnóstico. O fator articula-se a E1-F26, E1-F22 e E4-F02, e as compras públicas do PNAE e do PAA são o instrumento mais direto para ampliar a demanda por produção agroecológica local.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F21",
        "E1-F16",
        "E1-F26",
        "E1-F22",
        "E4-F02"
      ],
      "origem": {
        "codigo_documento": "E1-F05",
        "nome_no_documento": "Produção orgânica",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F06": {
      "texto": "A disponibilidade de alimentos em Rondônia é condicionada pela logística: o estado depende da BR-364 e da hidrovia do Madeira, e os municípios ribeirinhos e da faixa de fronteira com a Bolívia dependem do transporte fluvial. As cheias e secas extremas interrompem essa logística, como em 2014, quando o Madeira atingiu 19,74 m e alagou a BR-364, isolando o Acre por via terrestre, e em 2024, quando a navegação operou com capacidade reduzida no trecho Porto Velho a Itacoatiara, que transportou 6,5 milhões de toneladas em 2022 (Agência Brasil com base no Serviço Geológico do Brasil e na ANTAQ). Nesses períodos, preços sobem e o abastecimento de comunidades isoladas depende de ajuda emergencial. O fator articula-se a E1-F02, E1-F24, E2-F30 e E2-F34, e o plano popular deve prever estoques comunitários e rotas alternativas de abastecimento para territórios sujeitos a isolamento.",
      "fontes_citadas": [
        "Agência Brasil com base no Serviço Geológico do Brasil e na ANTAQ"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2024",
        "2022"
      ],
      "fatores_relacionados": [
        "E1-F02",
        "E1-F24",
        "E2-F30",
        "E2-F34"
      ],
      "origem": {
        "codigo_documento": "E1-F06",
        "nome_no_documento": "Disponibilidade de alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F07": {
      "texto": "O trabalho doméstico e de cuidado não remunerado recai predominantemente sobre as mulheres em Rondônia, padrão documentado em escala nacional pela PNAD Contínua e sem desagregação estadual consolidada nesta versão. Nos territórios rurais e ribeirinhos, a sobrecarga inclui busca de água, produção para autoconsumo e cuidado de doentes em contextos de difícil acesso a serviços, agravada nas secas, quando o abastecimento depende de distribuição emergencial. Os indicadores de violência contra mulheres, com feminicídios passando de 15 em 2024 para 25 em 2025 e taxa equivalente ao dobro da nacional (Anuário Brasileiro de Segurança Pública 2026, escala estadual), associam-se à dependência econômica que o cuidado não remunerado aprofunda (E3-F02). O fator articula-se a E1-F01, E3-F04 e E2-F19, e o plano popular deve tratar a oferta de creches, apoio domiciliar e água como infraestrutura de cuidado.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026, escala estadual"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E1-F01",
        "E3-F04",
        "E2-F19"
      ],
      "origem": {
        "codigo_documento": "E1-F07",
        "nome_no_documento": "Trabalho de assistência e doméstico não remunerado",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F08": {
      "texto": "O PIB de Rondônia atingiu R$ 76,4 bilhões em 2023, com PIB per capita de R$ 48.353,38, o décimo do país e o mais alto da Região Norte, equivalente a 0,9 do valor nacional (IBGE, Contas Regionais 2023, escala estadual). A economia apoia-se na agropecuária, especialmente pecuária bovina, soja e café, na geração hidrelétrica das usinas de Santo Antônio e Jirau, no comércio e na administração pública. A geração de renda concentra-se nos polos de Porto Velho, Ji-Paraná, Ariquemes, Vilhena e Cacoal, enquanto municípios ribeirinhos e de fronteira têm base econômica restrita. O dinamismo agropecuário associa-se historicamente ao desmatamento, que acumulou 67.708 km² no estado segundo o PRODES (INPE), o que coloca a sustentabilidade do modelo em questão (E4-F16). O fator articula-se a E1-F12, E1-F23 e E1-F28, e o planejamento deve examinar a distribuição territorial e social da renda gerada.",
      "fontes_citadas": [
        "IBGE, Contas Regionais 2023, escala estadual",
        "INPE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E1-F12",
        "E1-F23",
        "E1-F28"
      ],
      "origem": {
        "codigo_documento": "E1-F08",
        "nome_no_documento": "Geração de emprego e renda",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F09": {
      "texto": "O empreendedorismo em Rondônia é expressivo no comércio, nos serviços e na agroindústria de pequeno porte, com predominância de microempresas e microempreendedores individuais nas cidades do eixo da BR-364. A dimensão solidária, criativa e inovadora nomeada pelo fator manifesta-se em cooperativas de produção agrícola, agroindústrias familiares de café e laticínios, empreendimentos de economia indígena e extrativista e iniciativas culturais, sem cadastro estadual consolidado de empreendimentos solidários, lacuna a ser suprida com o Cadastro Nacional de Empreendimentos Econômicos Solidários e a cartografia social. A distância dos mercados, o custo logístico e a dificuldade de acesso a crédito (E1-F22) limitam a expansão desses empreendimentos nos municípios menores. O fator articula-se a E1-F11, E4-F22 e E5-F10, e o plano popular pode priorizar cadeias da sociobiodiversidade e da agricultura familiar com potencial de agregação de valor local.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F22",
        "E1-F11",
        "E4-F22",
        "E5-F10"
      ],
      "origem": {
        "codigo_documento": "E1-F09",
        "nome_no_documento": "Empreendedorismo solidário, criatividade e inovação",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F10": {
      "texto": "A formalização do trabalho em Rondônia convive com elevada informalidade no campo, no comércio e nos serviços. Os vínculos formais concentram-se na administração pública, no comércio e na agroindústria, e a RAIS permite quantificá-los por município e setor, dado não sistematizado nesta versão. A formalização via MEI ampliou a cobertura previdenciária de autônomos, mas com proteção limitada. No meio rural, parte expressiva dos trabalhadores é composta por agricultores familiares, diaristas e trabalhadores sazonais sem vínculo formal. A Economia Solidária carece de marco estadual de fomento que permita contratos públicos com cooperativas e associações. O fator articula-se a E1-F28, E1-F18 e E1-F15, dado que a ausência de formalização favorece situações de exploração, e o planejamento deve monitorar a formalização desagregada por sexo, raça, território e situação rural ou urbana.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F28",
        "E1-F18",
        "E1-F15"
      ],
      "origem": {
        "codigo_documento": "E1-F10",
        "nome_no_documento": "Formalização de emprego (CLT, MEI, ECOSOL)",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F11": {
      "texto": "As iniciativas de economia solidária em Rondônia incluem cooperativas de agricultores familiares, associações de produtores de café e leite, cooperativas de catadores nas cidades maiores, associações extrativistas e grupos de artesanato indígena. A tradição associativa dos projetos de colonização constituiu base para o cooperativismo rural, hoje fragilizado pela concentração fundiária e pela concorrência de grandes compradores. A ausência de levantamento estadual atualizado do número de empreendimentos e trabalhadores envolvidos constitui lacuna de informação. A coleta seletiva e a reciclagem organizadas por catadores têm expressão limitada, em contexto de baixa cobertura de saneamento na capital, onde o atendimento de esgoto alcançava 9,27% da população em 2023 (Instituto Trata Brasil, base SINISA). O fator articula-se a E1-F22, E1-F27 e E6-F04, e as compras públicas da merenda escolar são instrumento estratégico de mercado para empreendimentos solidários.",
      "fontes_citadas": [
        "Instituto Trata Brasil, base SINISA"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F22",
        "E1-F27",
        "E6-F04"
      ],
      "origem": {
        "codigo_documento": "E1-F11",
        "nome_no_documento": "Iniciativas de economia solidária",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F12": {
      "texto": "A disponibilidade de emprego em Rondônia concentra-se nos polos urbanos do eixo da BR-364 e em Porto Velho, nos setores de comércio, serviços, administração pública, agroindústria e construção. A construção das usinas de Santo Antônio e Jirau, concluída na década passada, produziu ciclo de emprego temporário seguido de desmobilização, padrão típico de grandes obras que deixou passivos sociais em Porto Velho e nos distritos do Madeira. O saldo de empregos formais por município no CAGED deve ser incorporado à série do diagnóstico, não sistematizado nesta versão. A oferta de emprego no campo é sazonal e frequentemente informal, e a mecanização da soja reduz a demanda por mão de obra. O fator articula-se a E1-F08, E1-F13 e E5-F16, e o plano popular deve considerar a distância entre moradia e emprego nos municípios de grande extensão territorial e baixa densidade.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F08",
        "E1-F13",
        "E5-F16"
      ],
      "origem": {
        "codigo_documento": "E1-F12",
        "nome_no_documento": "Disponibilidade de emprego",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F13": {
      "texto": "A taxa de desocupação de Rondônia é estimada trimestralmente pela PNAD Contínua em escala estadual e historicamente situa-se abaixo da média nacional, mas a baixa desocupação convive com informalidade elevada e subutilização da força de trabalho. O desemprego atinge com maior intensidade jovens, mulheres e trabalhadores dos municípios de base econômica restrita, e a série da PNAD Contínua deve ser incorporada ao diagnóstico, não sistematizada nesta versão. A perda de renda associada a eventos extremos, como as secas de 2023 e 2024 que afetaram pescadores e trabalhadores do transporte fluvial, configura desemprego sazonal não captado pelas estatísticas regulares. O fator articula-se a E1-F28, E3-F01 e E2-F18, e o planejamento deve considerar as dinâmicas de migração interna e de fronteira que alteram a oferta de trabalho em Porto Velho e Guajará-Mirim (E3-F13).",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F28",
        "E3-F01",
        "E2-F18",
        "E3-F13"
      ],
      "origem": {
        "codigo_documento": "E1-F13",
        "nome_no_documento": "Desemprego",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F14": {
      "texto": "O trabalho infantil em Rondônia manifesta-se principalmente na agricultura familiar, no trabalho doméstico, no comércio ambulante e, em situações de maior gravidade, em garimpos e atividades extrativas. A CPT registrou em 2024 duas ocorrências de trabalho escravo na zona rural de Porto Velho com quatro trabalhadores resgatados, incluindo menores de idade (escala estadual). O Anuário Brasileiro de Segurança Pública 2026 coloca o estado em primeiro lugar no país em aliciamento de criança para ato libidinoso, com 22,1 por 100 mil habitantes de 0 a 17 anos em 2025, indicador de vulnerabilidade extrema da infância. As notificações de trabalho infantil no SINAN, as denúncias ao Disque 100 e os dados do Censo Escolar sobre abandono devem ser cruzados por município. O fator articula-se a E1-F15, E3-F03 e E5-F04 e exige protocolo conjunto entre escolas, Conselhos Tutelares, assistência social e APS.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2026",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F15",
        "E3-F03",
        "E5-F04"
      ],
      "origem": {
        "codigo_documento": "E1-F14",
        "nome_no_documento": "Trabalho infantil",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F15": {
      "texto": "O trabalho em condições análogas às de escravidão tem ocorrência registrada em Rondônia em atividades rurais, como formação de pastagens, desmatamento, carvoarias e garimpo. Em 2024, a CPT registrou duas ocorrências na zona rural de Porto Velho, com quatro trabalhadores resgatados, incluindo menores de idade. O Painel de Informações e Estatísticas da Inspeção do Trabalho do Ministério do Trabalho e Emprego é a fonte para a série estadual de resgates, a ser incorporada. A exploração associa-se ao avanço da fronteira de desmatamento, à grilagem de terras públicas e ao garimpo ilegal no Madeira, atividades em que a fiscalização é dificultada pela distância e pelo isolamento (E4-F16, E6-F06). Trabalhadores migrantes e indígenas estão entre os mais vulneráveis (E3-F13). O fator articula-se a E3-F07 e E1-F18, e a APS deve ser preparada para reconhecer sinais de exploração em atendimentos.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E6-F06",
        "E3-F13",
        "E3-F07",
        "E1-F18"
      ],
      "origem": {
        "codigo_documento": "E1-F15",
        "nome_no_documento": "Trabalho em condições análogas às de escravidão",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F16": {
      "texto": "A segurança nos ambientes de trabalho em Rondônia é afetada pelos riscos da agropecuária, da agroindústria frigorífica, da construção, do transporte rodoviário e fluvial, da extração de madeira e do garimpo. A exposição a agrotóxicos é relevante: a CPT registrou aumento de 54% nos casos de contaminação por agrotóxicos entre 2023 e 2024 no estado. No garimpo do Madeira, a exposição a vapores de mercúrio e a acidentes com dragas soma-se à informalidade. As notificações de acidentes de trabalho graves e de intoxicações exógenas no SINAN, por município e ocupação, devem ser incorporadas ao diagnóstico. Os CERESTs regionais e a vigilância em saúde do trabalhador têm capacidade limitada frente à extensão do estado. O fator articula-se a E1-F18, E2-F21 e E2-F06, e o plano popular deve integrar a saúde do trabalhador rural às equipes de APS dos municípios agrícolas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F18",
        "E2-F21",
        "E2-F06"
      ],
      "origem": {
        "codigo_documento": "E1-F16",
        "nome_no_documento": "Ambientes de trabalho seguros",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F17": {
      "texto": "As ações solidárias locais em Rondônia ganham visibilidade nos eventos extremos, quando igrejas, associações comunitárias, cooperativas e redes de vizinhança organizam arrecadação de água, alimentos e apoio a famílias atingidas, como nas cheias do Madeira e nas secas de 2023 e 2024. Nos territórios ribeirinhos e indígenas, a reciprocidade e o mutirão são práticas tradicionais que sustentam a subsistência. Essas ações não são registradas em sistemas públicos, o que impede seu reconhecimento como componente da rede de proteção e da capacidade de resposta a desastres, lacuna que a cartografia social deve preencher. O fator articula-se a E6-F01, E6-F16 e E6-F05, e o plano popular deve apoiar logisticamente essas iniciativas sem capturar sua autonomia, reconhecendo-as nos planos municipais de contingência.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F01",
        "E6-F16",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F17",
        "nome_no_documento": "Ações solidárias locais",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F18": {
      "texto": "As condições de trabalho em Rondônia apresentam forte segmentação entre empregos públicos e formais urbanos e ocupações rurais, extrativas e informais marcadas por jornadas extensas, exposição a calor, fumaça e agrotóxicos e ausência de proteção previdenciária. O calor extremo e a fumaça das queimadas, que levaram Porto Velho ao índice de qualidade do ar de 120 em outubro de 2026, prejudicial a grupos sensíveis (IQAir, citado pela Prefeitura de Porto Velho), agravam as condições do trabalho ao ar livre. A rotatividade de profissionais de saúde nos municípios pequenos e distantes, associada a vínculos precários e condições de trabalho adversas, compromete a continuidade da APS (E2-F16). O fator relaciona-se a E1-F10, E1-F16, E2-F25 e E2-F18, e o plano popular deve incorporar indicadores de qualidade do emprego e de proteção do trabalhador frente ao calor e à fumaça.",
      "fontes_citadas": [
        "IQAir, citado pela Prefeitura de Porto Velho"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F16",
        "E1-F10",
        "E1-F16",
        "E2-F25",
        "E2-F18"
      ],
      "origem": {
        "codigo_documento": "E1-F18",
        "nome_no_documento": "Condições de trabalho",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F19": {
      "texto": "As políticas de investimento em Rondônia têm sido orientadas pela infraestrutura logística, pelo agronegócio e pela geração de energia, com as usinas do Madeira como maior investimento da história recente do estado. A distribuição dos benefícios desses investimentos entre municípios e grupos sociais é desigual, e as compensações socioambientais das usinas foram objeto de disputa com comunidades atingidas. O investimento em saneamento é um dos mais baixos do país: Porto Velho investiu em média R$ 47,97 por habitante ao ano entre 2019 e 2023 (Instituto Trata Brasil, Ranking 2025), muito abaixo das necessidades de universalização. O fator articula-se a E1-F08, E2-F20 e E5-F24, e o plano popular deve propor critérios territoriais e sociais de priorização do investimento público, com atenção aos municípios ribeirinhos, de fronteira e às periferias urbanas.",
      "fontes_citadas": [
        "Instituto Trata Brasil, Ranking 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2019",
        "2023",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F08",
        "E2-F20",
        "E5-F24"
      ],
      "origem": {
        "codigo_documento": "E1-F19",
        "nome_no_documento": "Promoção de políticas de investimento local",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F20": {
      "texto": "O acesso a serviços bancários em Rondônia é amplo nas cidades do eixo da BR-364, mas restrito em distritos ribeirinhos, aldeias indígenas e comunidades rurais distantes, onde o deslocamento até a agência mais próxima pode exigir horas de viagem por rio ou estrada. Os correspondentes bancários e o sistema de pagamentos instantâneos reduziram parte dessa barreira, dependentes, contudo, de conectividade (E5-F21). A população indígena, com 21.146 pessoas no estado segundo o Censo 2022, das quais 11.997 residem em terras indígenas (IBGE), e as populações sem documentação civil enfrentam barreiras adicionais. O fator articula-se a E1-F22, E3-F08 e E3-F12, e o recebimento de benefícios sociais e previdenciários em territórios isolados deve ser considerado no planejamento de ações itinerantes de documentação, saúde e assistência.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E5-F21",
        "E1-F22",
        "E3-F08",
        "E3-F12"
      ],
      "origem": {
        "codigo_documento": "E1-F20",
        "nome_no_documento": "Acesso a serviços bancários",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F21": {
      "texto": "A industrialização de Rondônia concentra-se na agroindústria de carnes, laticínios, café e grãos, na indústria madeireira e na geração hidrelétrica, com baixa diversificação e forte dependência de recursos naturais. A inclusividade dessa industrialização é limitada pela concentração em poucos grandes grupos, pela baixa remuneração das ocupações de base e pelos impactos ambientais associados ao desmatamento e ao uso da água. As usinas de Santo Antônio e Jirau ampliaram a geração de energia sem que isso se traduzisse em universalização dos serviços urbanos em Porto Velho, onde o atendimento de água alcançava 35,02% da população em 2023 (Instituto Trata Brasil, base SINISA). O fator articula-se a E1-F23, E5-F15 e E5-F05, e o planejamento deve exigir contrapartidas sociais e ambientais em incentivos fiscais e licenciamentos.",
      "fontes_citadas": [
        "Instituto Trata Brasil, base SINISA"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F23",
        "E5-F15",
        "E5-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F21",
        "nome_no_documento": "Industrialização inclusiva e sustentável",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F22": {
      "texto": "O crédito para pequenos produtores e cooperativas em Rondônia é ofertado pelo PRONAF, pelo Banco da Amazônia, pelo Banco do Brasil, por cooperativas de crédito com forte presença no interior e por programas estaduais de fomento. A regularização fundiária incompleta de muitos lotes de colonização e de ocupações rurais é barreira recorrente ao crédito, pois limita garantias. Agricultores familiares, empreendimentos indígenas, extrativistas e grupos de mulheres enfrentam dificuldades adicionais de documentação e assistência técnica. O volume de crédito do PRONAF por município, disponível no Banco Central, deve ser incorporado ao diagnóstico. O fator articula-se a E1-F03, E1-F11, E1-F29 e E3-F05, e o crédito orientado à transição agroecológica e à adaptação climática é condição para reduzir a vulnerabilidade da produção familiar às secas e ao calor.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F03",
        "E1-F11",
        "E1-F29",
        "E3-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F22",
        "nome_no_documento": "Crédito para micro, pequenas empresas e cooperativas",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F23": {
      "texto": "As atividades econômicas sustentáveis em Rondônia incluem o manejo florestal comunitário, o extrativismo de castanha, açaí e outros produtos da sociobiodiversidade, a piscicultura, o café cultivado em sistemas agroflorestais e o turismo de natureza, com escala ainda pequena frente à economia da pecuária e da soja. A redução do desmatamento em 36,39% entre 2024 e 2025 no estado (INPE, PRODES 2025) abre janela para fortalecer alternativas econômicas que valorizem a floresta em pé. As reservas extrativistas e as terras indígenas são territórios com potencial para cadeias sustentáveis, desde que protegidos de invasões (E3-F19). O fator articula-se a E4-F22, E1-F09 e E1-F21, e o plano popular pode priorizar cadeias da sociobiodiversidade com agregação de valor local, assistência técnica e acesso a mercados institucionais.",
      "fontes_citadas": [
        "INPE, PRODES 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2025"
      ],
      "fatores_relacionados": [
        "E3-F19",
        "E4-F22",
        "E1-F09",
        "E1-F21"
      ],
      "origem": {
        "codigo_documento": "E1-F23",
        "nome_no_documento": "Atividades econômicas sustentáveis",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F24": {
      "texto": "A cobrança de preços abusivos por itens básicos em Rondônia intensifica-se em situações de isolamento logístico, como nas cheias e secas extremas do Madeira, quando a navegação é limitada e o abastecimento de comunidades ribeirinhas e de municípios dependentes do transporte fluvial é encarecido. Durante a seca de 2024, a Defesa Civil distribuiu água e hipoclorito a comunidades ribeirinhas de Porto Velho, e a elevação de preços de água mineral, combustível e alimentos foi relatada pela imprensa local, sem registro sistemático. Os registros de reclamações dos Procons estadual e municipais constituem fonte a incorporar. O fator articula-se a E1-F06, E1-F25 e E2-F29, e o plano popular pode prever mecanismos de denúncia comunitária e de comunicação sobre preços em emergências, por meio de rádios e grupos de mensagens (E6-F03, E6-F11).",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E1-F06",
        "E1-F25",
        "E2-F29",
        "E6-F03",
        "E6-F11"
      ],
      "origem": {
        "codigo_documento": "E1-F24",
        "nome_no_documento": "Cobrança de preços abusivos por itens básicos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F25": {
      "texto": "A regulação de mercados com efeito direto sobre a vida cotidiana em Rondônia inclui os serviços de água e esgoto, energia elétrica, transporte coletivo e transporte fluvial de passageiros e cargas. A baixa cobertura de saneamento em Porto Velho, com 35,02% de atendimento de água e 9,27% de coleta de esgoto em 2023 e posição entre os piores municípios do Ranking do Saneamento do Instituto Trata Brasil, evidencia falhas de regulação e de investimento na prestação desses serviços. O transporte fluvial de passageiros, essencial para as populações ribeirinhas, opera com fiscalização limitada de segurança e preço. O fator articula-se a E2-F22, E5-F23 e E6-F09 e exige transparência dos contratos de prestação de serviços, participação social nas agências reguladoras e metas de universalização compatíveis com o Marco Legal do Saneamento.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023"
      ],
      "fatores_relacionados": [
        "E2-F22",
        "E5-F23",
        "E6-F09"
      ],
      "origem": {
        "codigo_documento": "E1-F25",
        "nome_no_documento": "Regulamentação e monitoramento dos mercados e instituições (monopólios e preço justo)",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F26": {
      "texto": "O sistema alimentar de Rondônia combina produção agropecuária de exportação, como carne bovina e soja, com produção familiar de alimentos para o mercado interno e autoconsumo. A sustentabilidade do sistema é ameaçada pelo desmatamento, pelas secas recorrentes, pelo uso de agrotóxicos e pela contaminação de peixes por mercúrio no rio Madeira, onde estudos reunidos pela Mongabay Latam identificaram exposição em pelo menos 249 comunidades indígenas e ribeirinhas ao longo de 27 anos, com aporte estimado entre 10 e 50 toneladas de mercúrio por ano ao rio. O peixe, base alimentar das populações ribeirinhas, torna-se vetor de exposição (E2-F06). O fator articula-se a E1-F03, E1-F05, E4-F15 e E2-F21, e o plano popular deve associar segurança alimentar, combate ao garimpo ilegal e monitoramento da qualidade do pescado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F06",
        "E1-F03",
        "E1-F05",
        "E4-F15",
        "E2-F21"
      ],
      "origem": {
        "codigo_documento": "E1-F26",
        "nome_no_documento": "Sistemas sustentáveis de produção de alimentos",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F27": {
      "texto": "A economia circular em Rondônia é incipiente: a coleta seletiva tem baixa cobertura, os lixões persistem em municípios do interior, segundo o diagnóstico de resíduos sólidos do SINISA a ser consultado, e a reciclagem depende de catadores com remuneração precária. A logística reversa de embalagens de agrotóxicos opera por meio das centrais de recebimento do setor, com cobertura a verificar nos municípios agrícolas. O descarte irregular de resíduos favorece criadouros do Aedes aegypti e de outros vetores (E2-F07, E2-F35) e, nas áreas ribeirinhas, contamina os cursos d'água. O fator articula-se a E1-F11, E2-F31 e E6-F05, e a organização de cadeias de reciclagem com inclusão de catadores, o aproveitamento de resíduos agrícolas e o reúso de água são estratégias de geração de renda e de proteção ambiental adequadas ao contexto do estado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F07",
        "E2-F35",
        "E1-F11",
        "E2-F31",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E1-F27",
        "nome_no_documento": "Economia circular",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F28": {
      "texto": "O trabalho informal é extenso em Rondônia, abrangendo agricultores familiares sem contribuição previdenciária, trabalhadores rurais diaristas, pescadores, garimpeiros, comerciantes ambulantes, trabalhadores da construção, do transporte por aplicativo e do serviço doméstico. A PNAD Contínua divulga a taxa de informalidade em escala estadual, que deve compor a série do diagnóstico, não sistematizada nesta versão. A informalidade expõe os trabalhadores à perda total de renda em situações de doença ou desastre, como ocorreu com pescadores e trabalhadores do transporte fluvial nas secas de 2023 e 2024. O garimpo ilegal no Madeira, atividade informal e de alto risco, oferece renda imediata a populações sem alternativas, o que dificulta seu enfrentamento sem oferta de trabalho digno (E6-F06). O fator articula-se a E1-F10, E1-F13 e E3-F01.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F06",
        "E1-F10",
        "E1-F13",
        "E3-F01"
      ],
      "origem": {
        "codigo_documento": "E1-F28",
        "nome_no_documento": "Trabalho informal",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E1-F29": {
      "texto": "O crédito para adaptação climática e reconstrução tem relevância crescente em Rondônia, que enfrentou cheia histórica do Madeira em 2014, secas severas em 2023 e 2024, com reconhecimento federal de situação de emergência em 18 municípios em 2024 (Ministério da Integração e do Desenvolvimento Regional, citado pela Agência Brasil), e temporadas de queimadas com fumaça extrema. Os instrumentos disponíveis incluem linhas emergenciais acionadas após o reconhecimento de emergência e o PRONAF, sem programa estadual específico de crédito para adaptação de moradias, sistemas de captação de água e produção resiliente. A perda de safras, de pescado e de renda dos trabalhadores do transporte fluvial nas secas evidencia a necessidade desse instrumento. O fator articula-se a E4-F10, E4-F05, E1-F22 e E2-F32, e o plano popular deve associar crédito a assistência técnica e tecnologias sociais.",
      "fontes_citadas": [
        "Ministério da Integração e do Desenvolvimento Regional, citado pela Agência Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F10",
        "E4-F05",
        "E1-F22",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E1-F29",
        "nome_no_documento": "Crédito para adaptação climática e reconstrução",
        "eixo_documento": 1
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F01": {
      "texto": "As áreas inundáveis de Rondônia concentram-se nas planícies dos rios Madeira, Mamoré, Guaporé, Machado e Jamari, ocupadas por comunidades ribeirinhas, distritos de Porto Velho e bairros baixos de cidades como Porto Velho e Guajará-Mirim. A cheia de 2014, quando o Madeira atingiu 19,74 m em Porto Velho, inundou a área portuária da capital, alagou a BR-364 e isolou o Acre por via terrestre (Serviço Geológico do Brasil). A operação das usinas de Santo Antônio e Jirau alterou o regime hidrossedimentológico do rio e foi objeto de debate quanto à contribuição para a extensão das inundações a montante. O mapeamento de manchas de inundação e a setorização de riscos do Serviço Geológico do Brasil para os municípios ribeirinhos devem ser incorporados ao diagnóstico. O fator articula-se a E2-F34, E2-F33 e E5-F22, e define onde priorizar alerta, rotas de fuga e vigilância de doenças de veiculação hídrica.",
      "fontes_citadas": [
        "Serviço Geológico do Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014"
      ],
      "fatores_relacionados": [
        "E2-F34",
        "E2-F33",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E2-F01",
        "nome_no_documento": "Área inundada",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F02": {
      "texto": "A insegurança alimentar em Rondônia é medida pela EBIA em escala estadual na PNAD Contínua, sem recorte municipal, o que impede identificar os territórios mais afetados, lacuna registrada. Os grupos de maior risco são as populações ribeirinhas afetadas pelas secas do Madeira e pela contaminação do pescado por mercúrio, as comunidades indígenas sob pressão de invasões, os acampamentos e ocupações rurais em conflito e as famílias de baixa renda das periferias urbanas. O SISVAN, alimentado pelas equipes de APS e pelo acompanhamento das condicionalidades do Bolsa Família, é a fonte local para o estado nutricional de crianças e gestantes por município, e seus resultados devem ser extraídos para o diagnóstico. O fator é desfecho de E1-F02, E1-F06 e E2-F30 e determinante de E2-F05, e na saúde indígena deve ser analisado com os dados dos Distritos Sanitários Especiais Indígenas Porto Velho e Vilhena.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F02",
        "E1-F06",
        "E2-F30",
        "E2-F05"
      ],
      "origem": {
        "codigo_documento": "E2-F02",
        "nome_no_documento": "Insegurança alimentar",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F03": {
      "texto": "A mortalidade materna em Rondônia deve ser analisada pela razão de mortalidade materna calculada com dados do SIM e do SINASC por local de residência, série não sistematizada nesta versão. Os determinantes estruturais no estado incluem as grandes distâncias entre comunidades rurais, ribeirinhas e indígenas e as maternidades de referência, concentradas em Porto Velho, Ji-Paraná, Cacoal, Ariquemes e Vilhena, a rotatividade de profissionais nos municípios pequenos e as barreiras de transporte em períodos de cheia e seca. A violência contra mulheres, com feminicídios em 2025 em taxa equivalente ao dobro da nacional (Anuário Brasileiro de Segurança Pública 2026), e as altas taxas de violência sexual compõem o contexto de risco (E3-F02). O fator articula-se a E2-F12, E2-F15 e E5-F23, e a regulação oportuna e o transporte sanitário são pontos críticos da linha de cuidado materno.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E2-F12",
        "E2-F15",
        "E5-F23"
      ],
      "origem": {
        "codigo_documento": "E2-F03",
        "nome_no_documento": "Mortalidade materna",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F04": {
      "texto": "A mortalidade neonatal é o principal componente da mortalidade infantil em Rondônia, e sua redução depende da qualidade do pré-natal, da assistência ao parto e da disponibilidade regionalizada de leitos de UTI neonatal. A concentração desses leitos em poucos municípios impõe transferências de longa distância, de risco elevado para recém-nascidos prematuros e de baixo peso. A série do coeficiente de mortalidade neonatal precoce e tardia por região de saúde deve ser extraída do SIM e do SINASC, não sistematizada nesta versão. Nas populações indígenas, a mortalidade neonatal tende a ser mais elevada e deve ser analisada com dados dos Distritos Sanitários Especiais Indígenas. A exposição de gestantes ribeirinhas ao mercúrio, documentada em estudos da Universidade Federal de Rondônia sobre a bacia do Madeira, é fator de risco para o desenvolvimento fetal (E2-F06). O fator relaciona-se a E2-F03, E2-F05 e E2-F12.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F06",
        "E2-F03",
        "E2-F05",
        "E2-F12"
      ],
      "origem": {
        "codigo_documento": "E2-F04",
        "nome_no_documento": "Mortalidade neonatal",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F05": {
      "texto": "A taxa de mortalidade infantil de Rondônia caiu de 13,4 para 12,2 óbitos por mil nascidos vivos entre 2022 e 2023, com 293 óbitos infantis registrados em 2023 (DATASUS, sistematizado pelo painel Amazônia Legal em Dados e por estudo publicado em periódico científico, escala estadual). A tendência de redução é favorável, mas a média estadual esconde desigualdades entre regiões de saúde, entre áreas urbanas e rurais e entre populações indígenas e não indígenas, que devem ser analisadas por município de residência. Os óbitos por causas evitáveis, como infecções, diarreias e problemas respiratórios, guardam relação com saneamento (E2-F20), cobertura vacinal (E2-F14) e acesso à APS. A fumaça das queimadas e o calor extremo afetam a saúde respiratória de lactentes (E2-F25). O fator articula-se a E2-F02, E2-F04 e E2-F15, e a investigação dos óbitos pelos comitês municipais deve orientar o planejamento.",
      "fontes_citadas": [
        "DATASUS, sistematizado pelo painel Amazônia Legal em Dados e por estudo publicado em periódico científico, escala estadual"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2023"
      ],
      "fatores_relacionados": [
        "E2-F20",
        "E2-F14",
        "E2-F25",
        "E2-F02",
        "E2-F04",
        "E2-F15"
      ],
      "origem": {
        "codigo_documento": "E2-F05",
        "nome_no_documento": "Mortalidade infantil",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F06": {
      "texto": "As doenças decorrentes de contaminação ambiental em Rondônia incluem afecções respiratórias agravadas pela fumaça das queimadas, diarreias e parasitoses associadas à baixa cobertura de saneamento, intoxicações por agrotóxicos e exposição crônica ao mercúrio do garimpo. A bacia do Madeira recebe entre 10 e 50 toneladas de mercúrio por ano, e estudos reunidos pela Mongabay Latam identificaram exposição em pelo menos 249 comunidades indígenas e ribeirinhas, com casos críticos na comunidade Calama e na Terra Indígena Karipuna, em Rondônia. Em maio de 2025, o Ministério da Saúde, a Fiocruz e o Ministério dos Povos Indígenas publicaram manual técnico para atendimento a populações indígenas expostas ao mercúrio. A série de internações por doenças respiratórias e diarreicas no SIH por município deve ser incorporada. O fator integra VIGIAR, VIGIAGUA e VIGIPEQ à APS e articula-se a E2-F21, E2-F25 e E1-F26.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F21",
        "E2-F25",
        "E1-F26"
      ],
      "origem": {
        "codigo_documento": "E2-F06",
        "nome_no_documento": "Doenças decorrentes de contaminação e poluição do ar, da água e do solo",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F07": {
      "texto": "A dengue tem transmissão sazonal em Rondônia, com padrão variável entre anos. Entre as semanas epidemiológicas 1 e 26 de 2024, o estado registrou 5 casos de dengue grave, 25 com sinais de alarme e 3 óbitos, contra 10 casos graves, 142 com sinais de alarme e 7 óbitos no mesmo período de 2023 (Ministério da Saúde, Boletim Epidemiológico, escala estadual). O estado também registrou em 2024 surto de febre do Oropouche, outra arbovirose, com 5.519 casos suspeitos nos 52 municípios e 1.497 confirmados, sem óbitos, segundo o Ministério Público Federal com base na Agevisa, transmitida principalmente pelo maruim (E2-F35). A determinação inclui saneamento deficiente (E2-F20), armazenamento domiciliar de água nas secas, descarte irregular de resíduos e alterações ambientais associadas ao desmatamento. O fator articula-se a E2-F14, E6-F05 e E1-F27, e a vigilância integrada de arboviroses é prioridade.",
      "fontes_citadas": [
        "Ministério da Saúde, Boletim Epidemiológico, escala estadual"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2023"
      ],
      "fatores_relacionados": [
        "E2-F35",
        "E2-F20",
        "E2-F14",
        "E6-F05",
        "E1-F27"
      ],
      "origem": {
        "codigo_documento": "E2-F07",
        "nome_no_documento": "Dengue",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F08": {
      "texto": "Rondônia mantém carga elevada de doenças transmissíveis e negligenciadas. A malária, endêmica na Amazônia, registrou 11.762 casos em 2023 e 7.716 em 2024, redução de 34%, e 954 notificações entre janeiro e março de 2025, queda de 57% sobre o mesmo período de 2024, com cerca de 95% por Plasmodium vivax e concentração em Porto Velho, Candeias do Jamari e Guajará-Mirim (Agevisa com base no Sivep-Malária). A hanseníase é historicamente hiperendêmica no estado, com 15.648 casos notificados entre 2001 e 2012, média de 1.304 por ano (Epidemiologia e Serviços de Saúde, SciELO). Tuberculose, leishmaniose tegumentar, HIV, sífilis e hepatites virais completam o quadro. O garimpo e o desmatamento ampliam a exposição à malária (E4-F16, E6-F06). O fator articula-se a E3-F14, E2-F15 e E2-F35, e as séries do SINAN por município devem ser incorporadas.",
      "fontes_citadas": [
        "Agevisa com base no Sivep-Malária",
        "Epidemiologia e Serviços de Saúde, SciELO"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024",
        "2025",
        "2001",
        "2012"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E6-F06",
        "E3-F14",
        "E2-F15",
        "E2-F35"
      ],
      "origem": {
        "codigo_documento": "E2-F08",
        "nome_no_documento": "Doenças transmissíveis (AIDS, tuberculose, hanseníase, negligenciadas)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F09": {
      "texto": "As doenças crônicas não transmissíveis são a principal causa de morte em adultos em Rondônia, com predominância das doenças cardiovasculares, das neoplasias e do diabetes, padrão que acompanha a transição epidemiológica nacional e deve ser quantificado pelo SIM por região de saúde. O acompanhamento de hipertensos e diabéticos pela APS é dificultado nos municípios de grande extensão e baixa densidade, onde as distâncias até a unidade de saúde reduzem a frequência de consultas, e pela rotatividade de profissionais. A transição alimentar, com maior consumo de ultraprocessados também nas áreas rurais e indígenas, amplia a prevalência de obesidade e diabetes. A exposição a calor extremo e fumaça agrava doenças cardiovasculares e respiratórias crônicas (E2-F25). O fator articula-se a E2-F13, E2-F19 e E5-F26, e os indicadores de desempenho da APS no SISAB devem ser extraídos por município.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F25",
        "E2-F13",
        "E2-F19",
        "E5-F26"
      ],
      "origem": {
        "codigo_documento": "E2-F09",
        "nome_no_documento": "Doenças não transmissíveis (crônicas)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F10": {
      "texto": "O uso problemático de álcool e outras drogas em Rondônia associa-se à violência, aos acidentes de trânsito e à posição do estado nas rotas de tráfico a partir da Bolívia. Os registros de tráfico de drogas cresceram 41,5% em 2025, passando de 1.202 para 1.707, e as apreensões de drogas aumentaram 35,4% (Anuário Brasileiro de Segurança Pública 2026, escala estadual). A Rede de Atenção Psicossocial, com CAPS concentrados nos municípios maiores, tem cobertura insuficiente nos municípios pequenos, rurais e ribeirinhos, e sua composição por município deve ser extraída do CNES. O consumo de álcool tem impacto relevante nas populações indígenas e associa-se à violência doméstica (E3-F02). O fator articula-se a E2-F18, E2-F28 e E6-F06, e a abordagem deve combinar cuidado em liberdade, redução de danos e oferta de alternativas de renda e convivência para a juventude.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026, escala estadual"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E2-F18",
        "E2-F28",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E2-F10",
        "nome_no_documento": "Uso de drogas e álcool",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F11": {
      "texto": "Rondônia é atravessada pela BR-364, principal corredor rodoviário do estado e ligação com o Acre e o Centro-Oeste, com tráfego intenso de caminhões de grãos, gado e combustíveis, e possui frota de 1.295.415 veículos (IBGE, 2025, escala estadual), elevada para uma população de 1,58 milhão de habitantes no Censo 2022. Os acidentes de trânsito, especialmente com motocicletas, são causa relevante de mortalidade por causas externas em homens jovens e de internações de alto custo. A série de óbitos e internações por acidentes de transporte no SIM e no SIH por município, e os registros da Polícia Rodoviária Federal na BR-364, devem ser incorporados ao diagnóstico. A fumaça das queimadas reduz a visibilidade nas rodovias e no rio Madeira, aumentando o risco de acidentes. O fator articula-se a E5-F19, E5-F03 e E2-F25, e o planejamento deve integrar segurança viária e atendimento pré-hospitalar.",
      "fontes_citadas": [
        "IBGE, 2025, escala estadual"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2022"
      ],
      "fatores_relacionados": [
        "E5-F19",
        "E5-F03",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E2-F11",
        "nome_no_documento": "Acidentes em estradas",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F12": {
      "texto": "A saúde sexual e reprodutiva em Rondônia é ofertada pela APS, com planejamento reprodutivo, pré-natal, testagem rápida para HIV, sífilis e hepatites e acesso a métodos contraceptivos, com cobertura desigual entre municípios e entre áreas urbanas, rurais, ribeirinhas e indígenas. O contexto de violência sexual é grave: o estado registrou 1.701 casos de estupro e estupro de vulnerável em 2025, taxa de 97,1 por 100 mil habitantes, a segunda maior do país e 2,46 vezes a média nacional, com Ariquemes e Porto Velho entre os municípios de mais de 100 mil habitantes com taxas mais altas (Anuário Brasileiro de Segurança Pública 2026). A gravidez na adolescência e a sífilis congênita devem ser analisadas no SINASC e no SINAN por município. O fator articula-se a E3-F02, E3-F03 e E2-F03, e a APS deve integrar atenção a vítimas de violência sexual e acesso ao aborto legal nos casos previstos em lei.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E3-F03",
        "E2-F03"
      ],
      "origem": {
        "codigo_documento": "E2-F12",
        "nome_no_documento": "Saúde sexual e reprodutiva",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F13": {
      "texto": "O acesso a medicamentos em Rondônia depende da assistência farmacêutica básica dos municípios, do Programa Farmácia Popular e do componente especializado gerido pelo estado, com dispensação centralizada que impõe deslocamentos longos a pacientes do interior. Em municípios pequenos e isolados, episódios de desabastecimento são agravados pela logística, e nas cheias e secas extremas o transporte de insumos é interrompido. Para a malária, o tratamento gratuito pelo SUS e o diagnóstico rápido são estratégicos para o controle (E2-F08). Os relatórios de gestão da assistência farmacêutica e as atas dos conselhos de saúde são fontes para medir a frequência de faltas, não sistematizadas nesta versão. O fator articula-se a E2-F09, E2-F15 e E1-F24, e o planejamento deve prever estoques estratégicos para períodos de isolamento logístico nos municípios ribeirinhos e de fronteira.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F08",
        "E2-F09",
        "E2-F15",
        "E1-F24"
      ],
      "origem": {
        "codigo_documento": "E2-F13",
        "nome_no_documento": "Acesso a medicamentos",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F14": {
      "texto": "A cobertura vacinal infantil em Rondônia acompanha a tendência nacional de recuperação após a queda do período pandêmico, mas com desigualdades entre municípios e dificuldades de acesso em áreas rurais, ribeirinhas e indígenas. As campanhas de vacinação contra a poliomielite no estado tiveram público-alvo de 110.150 crianças segundo o Governo de Rondônia, com meta de cobertura superior a 95%. As coberturas por vacina e por município devem ser extraídas do painel de cobertura vacinal por residência do Ministério da Saúde, não sistematizadas nesta versão. A circulação de pessoas na fronteira com a Bolívia e o recrudescimento continental do sarampo em 2026 aumentam o risco de reintrodução de doenças imunopreveníveis. O fator articula-se a E2-F15, E3-F13 e E6-F11, e a vacinação em territórios de difícil acesso depende de estratégias itinerantes por rio e estrada.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F15",
        "E3-F13",
        "E6-F11"
      ],
      "origem": {
        "codigo_documento": "E2-F14",
        "nome_no_documento": "Cobertura vacinal",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F15": {
      "texto": "A rede de serviços de saúde de Rondônia organiza-se em regiões de saúde com polos em Porto Velho, Ariquemes, Ji-Paraná, Cacoal, Rolim de Moura, Vilhena e Guajará-Mirim, com concentração dos serviços de alta complexidade na capital e nos polos do eixo da BR-364. A atenção à saúde indígena é prestada pelos Distritos Sanitários Especiais Indígenas Porto Velho e Vilhena. As grandes distâncias, a baixa densidade populacional, de 6,65 habitantes por km² (IBGE, Censo 2022), e a dependência do transporte fluvial em parte do território dificultam o acesso. A cobertura de APS por município e o número de equipes devem ser extraídos do e-Gestor e do painel de cobertura potencial do Ministério da Saúde, não sistematizados nesta versão. O fator articula-se a E2-F16, E5-F19 e E5-F23, e o plano popular deve considerar unidades fluviais e itinerantes para populações ribeirinhas.",
      "fontes_citadas": [
        "IBGE, Censo 2022"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F16",
        "E5-F19",
        "E5-F23"
      ],
      "origem": {
        "codigo_documento": "E2-F15",
        "nome_no_documento": "Serviços de saúde",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F16": {
      "texto": "A fixação de profissionais de saúde é desafio estrutural em Rondônia, especialmente nos municípios pequenos, distantes e ribeirinhos e na saúde indígena. Estudo do Observatório da Saúde Pública sobre a APS registrou que 43,3% dos auxiliares de saúde bucal da Estratégia Saúde da Família em atividade em 2022 deixaram o cargo em 2023 no estado, indicador de rotatividade elevada. Os programas federais de provimento médico, a formação local pela Universidade Federal de Rondônia e por instituições privadas e as residências em saúde são as principais estratégias de reposição. A composição das equipes registrada no CNES e a proporção de vínculos precários por município devem ser extraídas. As condições de trabalho, a violência e a exposição a fumaça e calor afetam a permanência (E1-F18). O fator articula-se a E2-F15, E5-F06 e E2-F09.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2023"
      ],
      "fatores_relacionados": [
        "E1-F18",
        "E2-F15",
        "E5-F06",
        "E2-F09"
      ],
      "origem": {
        "codigo_documento": "E2-F16",
        "nome_no_documento": "Profissionais de saúde",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F17": {
      "texto": "Ventos fortes associados a tempestades convectivas ocorrem em Rondônia, sobretudo na transição entre as estações seca e chuvosa, com registros de destelhamentos, queda de árvores e interrupções de energia em cidades do estado, a serem consultados no S2iD e no Atlas Digital de Desastres no Brasil, fontes não sistematizadas nesta versão. A vulnerabilidade a vendavais é maior em moradias de madeira e coberturas leves, comuns nas áreas rurais, ribeirinhas e periféricas, e em redes elétricas aéreas que atravessam extensas áreas rurais. A experiência de outros territórios acompanhados pela PICAPS mostra que eventos de vento extremo produzem danos concentrados e exigem resposta rápida das equipes de saúde e assistência. O fator articula-se a E2-F32, E4-F07 e E5-F20, e o diagnóstico registra como lacuna a ausência de série estadual de eventos de vento extremo e de seus danos.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F32",
        "E4-F07",
        "E5-F20"
      ],
      "origem": {
        "codigo_documento": "E2-F17",
        "nome_no_documento": "Tornado/Vendaval",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F18": {
      "texto": "A saúde mental em Rondônia é afetada por determinantes como a violência letal, com taxa de 28,1 mortes violentas intencionais por 100 mil habitantes em 2025, a nona do país, os conflitos agrários, a violência sexual, o isolamento de comunidades rurais e ribeirinhas e os eventos extremos que destroem meios de vida. A Rede de Atenção Psicossocial concentra-se nos municípios maiores, e a cobertura de CAPS por habitante e por região de saúde deve ser extraída do CNES. Os povos indígenas enfrentam sofrimento associado à invasão de territórios e à perda de modos de vida, com atenção específica pelos Distritos Sanitários Especiais Indígenas. As notificações de lesão autoprovocada no SINAN e a mortalidade por suicídio devem ser analisadas por equipe técnica com cautela. O fator articula-se a E2-F28, E3-F19 e E6-F15, e grupos de escuta comunitários ampliam a rede de cuidado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F28",
        "E3-F19",
        "E6-F15"
      ],
      "origem": {
        "codigo_documento": "E2-F18",
        "nome_no_documento": "Saúde mental",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F19": {
      "texto": "O envelhecimento populacional em Rondônia é mais recente que nas regiões Sul e Sudeste, dada a história de colonização com fluxos migratórios de adultos jovens a partir da década de 1970, mas a geração de colonos que chegou nesse período envelhece agora, ampliando a proporção de idosos sobretudo nas áreas rurais. A proporção de pessoas com 60 anos ou mais e o índice de envelhecimento por município do Censo 2022 devem ser extraídos, não sistematizados nesta versão. Os idosos rurais enfrentam distâncias aos serviços, isolamento e dependência de familiares, e são mais vulneráveis a calor, fumaça e doenças crônicas (E2-F09, E2-F25). O fator articula-se a E3-F09, E3-F11 e E1-F07 e exige planejamento de cuidado continuado, atenção domiciliar e transporte sanitário nos municípios de baixa densidade.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "1970",
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F09",
        "E2-F25",
        "E3-F09",
        "E3-F11",
        "E1-F07"
      ],
      "origem": {
        "codigo_documento": "E2-F19",
        "nome_no_documento": "Saúde do idoso",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F20": {
      "texto": "O saneamento é o déficit estrutural mais grave de Rondônia. Porto Velho ocupava a 99ª posição entre os cem maiores municípios no Ranking do Saneamento 2025, com atendimento de água de 35,02%, o menor da amostra, coleta de esgoto de 9,27%, tratamento de 12,18%, perdas de 38,56% e investimento médio de R$ 47,97 por habitante ao ano entre 2019 e 2023 (Instituto Trata Brasil, base SINISA 2023), e permanecia entre os piores no ranking de 2026. Nos demais municípios predominam soluções individuais, como poços e fossas, com risco de contaminação cruzada. Os indicadores estaduais e municipais do SINISA e do Censo 2022 devem ser incorporados. O fator determina E2-F06, E2-F07 e E2-F05 e articula-se a E2-F22, E2-F23 e E3-F17, e o plano popular deve tratar a universalização do saneamento como prioridade sanitária do estado.",
      "fontes_citadas": [
        "Instituto Trata Brasil, base SINISA 2023"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2019",
        "2023",
        "2026",
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F06",
        "E2-F07",
        "E2-F05",
        "E2-F22",
        "E2-F23",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F20",
        "nome_no_documento": "Acesso à água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F21": {
      "texto": "A contaminação ambiental em Rondônia tem quatro vetores principais: o mercúrio do garimpo ilegal no rio Madeira e afluentes, com aporte estimado entre 10 e 50 toneladas por ano; os agrotóxicos, com aumento de 54% nos casos de contaminação registrados pela CPT entre 2023 e 2024 e 102 registros de contaminação por minério; o esgoto não tratado em cidades com coleta mínima, como Porto Velho, com 9,27% de coleta em 2023 (Instituto Trata Brasil); e a fumaça das queimadas. A contaminação atinge de forma desproporcional populações ribeirinhas, indígenas e rurais. A vigilância da qualidade da água pelo VIGIAGUA e o monitoramento de populações expostas a contaminantes químicos pelo VIGIPEQ devem ser fortalecidos e seus dados incorporados. O fator é determinante de E2-F06 e expressão de E3-F17, e articula-se a E4-F16, E6-F06 e E1-F26.",
      "fontes_citadas": [
        "Instituto Trata Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F06",
        "E3-F17",
        "E4-F16",
        "E6-F06",
        "E1-F26"
      ],
      "origem": {
        "codigo_documento": "E2-F21",
        "nome_no_documento": "Contaminação e poluição do ar, da água e do solo",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F22": {
      "texto": "A participação comunitária na gestão da água e do saneamento em Rondônia é limitada pela fragilidade das instâncias de controle social do setor e pela baixa visibilidade dos processos regulatórios. Os conflitos pela água registrados pela CPT em 2024, sete grandes conflitos que atingiram mais de 4.000 famílias no estado, indicam disputas pelo acesso e pelo uso de recursos hídricos, envolvendo barramentos, irrigação, mineração e grandes empreendimentos. As comunidades atingidas pelas usinas do Madeira reivindicaram por anos participação nas decisões sobre compensações e reassentamentos. Os comitês de bacia hidrográfica e os conselhos municipais de saneamento devem ter sua existência e funcionamento verificados por município. O fator articula-se a E6-F07, E1-F25 e E2-F20, e a cartografia social pode produzir informação qualificada para a regulação e a gestão hídrica.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F07",
        "E1-F25",
        "E2-F20"
      ],
      "origem": {
        "codigo_documento": "E2-F22",
        "nome_no_documento": "Participação das comunidades locais na gestão da água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F23": {
      "texto": "A gestão da água em Rondônia depende dos rios da bacia do Madeira, de mananciais locais e de águas subterrâneas captadas por poços, num estado em que a disponibilidade hídrica é abundante, mas a infraestrutura de abastecimento é deficiente. As secas de 2023 e 2024 revelaram vulnerabilidades: o Madeira atingiu a mínima histórica de 1,10 m em outubro de 2023 e 2,07 m em agosto de 2024 em Porto Velho, o menor nível para a época desde 1967 (Serviço Geológico do Brasil), e a prefeitura pediu à população que limitasse o uso de água, enquanto comunidades ribeirinhas receberam água e hipoclorito. As perdas na distribuição de 38,56% em Porto Velho (Instituto Trata Brasil, 2023) agravam a escassez. O fator articula-se a E2-F30, E4-F04 e E4-F16, e o planejamento hídrico deve incorporar cenários de seca extrema.",
      "fontes_citadas": [
        "Serviço Geológico do Brasil",
        "Instituto Trata Brasil, 2023"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024",
        "1967"
      ],
      "fatores_relacionados": [
        "E2-F30",
        "E4-F04",
        "E4-F16"
      ],
      "origem": {
        "codigo_documento": "E2-F23",
        "nome_no_documento": "Gestão da água e saneamento",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F25": {
      "texto": "A qualidade do ar em Rondônia é severamente afetada pelas queimadas na estação seca. Em 13 de outubro de 2026, Porto Velho registrou índice de qualidade do ar de 120, prejudicial a grupos sensíveis, com fumaça de incêndios no Amazonas transportada pelos ventos, e em 15 de outubro a capital registrou a pior qualidade do ar do país segundo a plataforma IQAir (Prefeitura de Porto Velho e imprensa local). Em 2024, comunidades quilombolas do Vale do Guaporé enfrentaram concentrações médias de material particulado fino de até 44 microgramas por metro cúbico em Pedras Negras, 193% acima do limite de 15 recomendado pela OMS, entre julho e dezembro (InfoAmazonia com base no CAMS). A rede oficial de monitoramento é insuficiente. O fator articula-se a E2-F38, E2-F06 e E3-F17, e alertas de qualidade do ar permitiriam medidas de proteção.",
      "fontes_citadas": [
        "Prefeitura de Porto Velho e imprensa local",
        "InfoAmazonia com base no CAMS"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F38",
        "E2-F06",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F25",
        "nome_no_documento": "Qualidade do ar",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F26": {
      "texto": "Rotas de fuga definidas e sinalizadas para evacuação em cheias, incêndios florestais ou rompimento de barragens não são de conhecimento público na maior parte dos municípios de Rondônia, segundo a informação disponível, lacuna de preparação a ser confirmada com as defesas civis municipais e estadual. A relevância é concreta para as comunidades ribeirinhas sujeitas a cheias do Madeira, para as populações a jusante das usinas de Santo Antônio e Jirau e de barragens menores, e para comunidades rurais cercadas por áreas de queimada. Nas comunidades ribeirinhas, as rotas de fuga incluem o transporte fluvial, o que exige embarcações disponíveis e pontos de embarque seguros. O fator articula-se a E2-F33, E2-F39 e E5-F15, e a cartografia social é o instrumento adequado para traçar rotas com os moradores, considerando idosos, pessoas com deficiência e crianças.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F33",
        "E2-F39",
        "E5-F15"
      ],
      "origem": {
        "codigo_documento": "E2-F26",
        "nome_no_documento": "Rota de fuga",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F27": {
      "texto": "A segurança pública em Rondônia apresenta indicadores críticos: o estado ocupava em 2025 o primeiro lugar no país em armas de fogo apreendidas pelas polícias estaduais, com 2.280 apreensões e taxa de 130,1 por 100 mil habitantes, o primeiro lugar em roubo a residência, com taxa de 28,3 por 100 mil, e a terceira maior taxa de encarceramento, com 924,7 presos por 100 mil habitantes, além de 160 mortes sob custódia, a maior taxa do país (Anuário Brasileiro de Segurança Pública 2026). O gasto com segurança pública somou R$ 2,32 bilhões em 2025, 13% do orçamento estadual. A insegurança no campo, associada aos conflitos agrários, e nas periferias urbanas restringe a circulação e o acesso a serviços. O fator articula-se a E2-F28, E6-F06 e E5-F30, e o plano popular deve priorizar prevenção comunitária e ocupação qualificada dos espaços públicos.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F28",
        "E6-F06",
        "E5-F30"
      ],
      "origem": {
        "codigo_documento": "E2-F27",
        "nome_no_documento": "Segurança",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F28": {
      "texto": "A violência letal em Rondônia cresceu em contraste com a tendência nacional: o estado registrou 493 mortes violentas intencionais em 2025, taxa de 28,1 por 100 mil habitantes, a nona do país, com aumento de 19,9% desde 2019, enquanto o Brasil reduziu sua taxa em 16,8%; as mortes por intervenção policial passaram de 8 para 47 entre 2024 e 2025 (Anuário Brasileiro de Segurança Pública 2026). No campo, Rondônia e Pará concentraram, cada um, sete dos 26 assassinatos em conflitos no campo registrados no país em 2025, e o estado registrou um dos dois massacres, com três vítimas (Comissão Pastoral da Terra). A violência contra mulheres e crianças apresenta taxas entre as mais altas do país (E3-F02). O fator articula-se a E2-F18, E6-F06, E3-F19 e E2-F10, e exige abordagem intersetorial de prevenção, mediação de conflitos fundiários e proteção de lideranças.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026",
        "Comissão Pastoral da Terra"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2019",
        "2024",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E2-F18",
        "E6-F06",
        "E3-F19",
        "E2-F10"
      ],
      "origem": {
        "codigo_documento": "E2-F28",
        "nome_no_documento": "Violência",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F29": {
      "texto": "A comunicação e a gestão pós-desastre em Rondônia foram testadas pela cheia de 2014 e pelas secas de 2023 e 2024. Na seca de 2024, a Defesa Civil de Porto Velho distribuiu cerca de 120 mil litros de água a comunidades ribeirinhas, atendeu 338 famílias por via terrestre e 78 por via fluvial em comunidades como Silveira, Mutuns, Cujubim, Curicacas e São José, e distribuiu hipoclorito para tratamento da água (Agência Brasil, 2024). A comunicação com essas comunidades depende de rádio, lideranças locais e visitas, dado o acesso limitado à internet. O reconhecimento federal de emergência em 18 municípios viabilizou recursos, mas a coordenação entre estado, municípios e organizações comunitárias carece de plano de comunicação de risco unificado. O fator articula-se a E6-F03, E6-F11, E2-F37 e E5-F01, e o plano popular deve definir canais e responsáveis comunitários para informação antes, durante e depois de desastres.",
      "fontes_citadas": [
        "Agência Brasil, 2024"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E6-F03",
        "E6-F11",
        "E2-F37",
        "E5-F01"
      ],
      "origem": {
        "codigo_documento": "E2-F29",
        "nome_no_documento": "Comunicação e gestão pós-desastre",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F30": {
      "texto": "As secas extremas tornaram-se o evento climático de maior impacto recente em Rondônia. Em 6 de outubro de 2023, o Madeira atingiu 1,10 m em Porto Velho, a menor cota da série iniciada em 1967, e em 6 de agosto de 2024 registrou 2,07 m, mais de 3 m abaixo da média histórica para agosto, segundo o Serviço Geológico do Brasil, que atribui o fenômeno a chuvas abaixo da média na bacia amazônica, ao aquecimento do Atlântico e ao El Niño. Em 2024, 18 municípios tiveram situação de emergência reconhecida pelo governo federal. Os efeitos incluíram isolamento de comunidades ribeirinhas, perda de pesca, dificuldade de abastecimento de água, restrição da navegação, agravamento de queimadas e da qualidade do ar. O fator articula-se a E2-F23, E2-F38, E1-F06 e E4-F12, e o planejamento deve incorporar a seca extrema como risco recorrente.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "1967",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F23",
        "E2-F38",
        "E1-F06",
        "E4-F12"
      ],
      "origem": {
        "codigo_documento": "E2-F30",
        "nome_no_documento": "Seca/Estiagem",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F31": {
      "texto": "O acesso a serviços essenciais em Rondônia é desigual entre a área urbana dos polos regionais e as áreas rurais, ribeirinhas e indígenas. Em Porto Velho, apenas 35,02% da população era atendida por rede de água em 2023 (Instituto Trata Brasil), e a maior parte dos domicílios depende de poços e soluções individuais. A coleta de lixo tem cobertura incompleta em áreas rurais, e a energia elétrica, embora gerada em grande escala no estado pelas usinas do Madeira, apresenta interrupções frequentes em áreas rurais servidas por redes extensas. Nas comunidades ribeirinhas, o acesso a água potável depende do rio, cuja qualidade é afetada pelo garimpo e pelas secas. Os indicadores de abastecimento, esgotamento e coleta do Censo 2022 por município devem ser incorporados. O fator articula-se a E2-F20, E5-F13 e E1-F27.",
      "fontes_citadas": [
        "Instituto Trata Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F20",
        "E5-F13",
        "E1-F27"
      ],
      "origem": {
        "codigo_documento": "E2-F31",
        "nome_no_documento": "Acesso a serviços essenciais de energia, abastecimento de água, coleta de lixo etc.",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F32": {
      "texto": "A gestão de riscos e emergências em Rondônia é conduzida pela Defesa Civil estadual, pelas defesas civis municipais, pelo Corpo de Bombeiros Militar e pela articulação com a Defesa Civil Nacional, com uso do S2iD para registro de ocorrências. A experiência acumulada com cheias, secas e incêndios florestais é significativa, mas a capacidade operacional dos municípios pequenos é limitada, e a participação comunitária organizada em brigadas é incipiente fora das brigadas de combate a incêndios florestais. O modelo de Brigadas Populares de Resposta a Desastres desenvolvido pela PICAPS em territórios do Paraná é referência aplicável às comunidades ribeirinhas e rurais, integrando pesquisadores populares, APS e Defesa Civil. O fator articula-se a E2-F33, E2-F37, E2-F39 e E6-F16, e constitui eixo estruturante do plano popular diante da recorrência de eventos extremos no estado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F33",
        "E2-F37",
        "E2-F39",
        "E6-F16"
      ],
      "origem": {
        "codigo_documento": "E2-F32",
        "nome_no_documento": "Gestão de riscos e emergências (defesa civil, bombeiros, brigadas e outros coletivos)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F33": {
      "texto": "Os pontos de risco de desastres em Rondônia incluem as planícies inundáveis do Madeira, Mamoré, Guaporé e Jamari, os barrancos sujeitos a erosão fluvial e desbarrancamento nas margens do Madeira, as áreas de interface entre vegetação e ocupação humana sujeitas a incêndios, as barragens das usinas de Santo Antônio e Jirau e de pequenas centrais hidrelétricas, e os trechos da BR-364 com tráfego de cargas perigosas. A setorização de riscos geológicos do Serviço Geológico do Brasil para municípios do estado e o inventário de barragens do Sistema Nacional de Informações sobre Segurança de Barragens devem ser consultados para o diagnóstico, não sistematizados nesta versão. O conhecimento das comunidades sobre pontos de desbarrancamento, alagamento e queimada é informação insubstituível. O fator articula-se a E2-F01, E2-F34, E2-F26 e E5-F15, e a cartografia social é o instrumento para produzir esse inventário.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F01",
        "E2-F34",
        "E2-F26",
        "E5-F15"
      ],
      "origem": {
        "codigo_documento": "E2-F33",
        "nome_no_documento": "Pontos de riscos e desastres no território",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F34": {
      "texto": "As enchentes em Rondônia são predominantemente fluviais, de evolução lenta e longa duração, associadas às cheias dos grandes rios da bacia do Madeira, e alagamentos urbanos ocorrem nas cidades com drenagem insuficiente durante chuvas intensas. A cheia de 2014 foi a maior da série, com o Madeira a 19,74 m em Porto Velho, inundação da zona portuária e de bairros ribeirinhos, desalojamento de famílias e isolamento do Acre pela BR-364 (Serviço Geológico do Brasil). Os efeitos sanitários incluem leptospirose, diarreias, acidentes com animais peçonhentos e perdas materiais com impacto sobre a saúde mental. O registro de eventos de inundação no S2iD por município deve ser incorporado. O fator articula-se a E2-F01, E2-F06, E5-F22 e E3-F17, e o planejamento deve considerar a alternância entre cheias e secas extremas como característica do regime climático atual.",
      "fontes_citadas": [
        "Serviço Geológico do Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014"
      ],
      "fatores_relacionados": [
        "E2-F01",
        "E2-F06",
        "E5-F22",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E2-F34",
        "nome_no_documento": "Enchentes e alagamentos",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F35": {
      "texto": "As infestações por vetores e animais peçonhentos são relevantes em Rondônia. O Anopheles, transmissor da malária, mantém transmissão concentrada em Porto Velho, Candeias do Jamari e Guajará-Mirim (Agevisa, 2025); o maruim (Culicoides paraensis) transmitiu a febre do Oropouche, com 1.497 casos confirmados no estado em 2024 (Ministério Público Federal com base na Agevisa); o Aedes aegypti sustenta a transmissão de dengue e chikungunya; e os flebotomíneos transmitem leishmanioses. Os acidentes com serpentes e escorpiões, comuns em áreas rurais e de expansão urbana, devem ser quantificados pelo SINAN. Desmatamento, garimpo, ocupação desordenada e acúmulo de resíduos ampliam o contato entre vetores e pessoas (E4-F16). O fator articula-se a E2-F07, E2-F08, E4-F19 e E6-F05, e o controle depende de manejo ambiental e vigilância entomológica integrados à APS.",
      "fontes_citadas": [
        "Agevisa, 2025",
        "Ministério Público Federal com base na Agevisa"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F16",
        "E2-F07",
        "E2-F08",
        "E4-F19",
        "E6-F05"
      ],
      "origem": {
        "codigo_documento": "E2-F35",
        "nome_no_documento": "Infestações e pragas (mosquito, carrapato, escorpião, animais peçonhentos etc.)",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F36": {
      "texto": "O relevo de Rondônia é predominantemente de planícies e baixos planaltos, sem encostas íngremes ocupadas que caracterizem risco de deslizamento de terra em escala relevante, condição a ser confirmada na setorização de riscos geológicos do Serviço Geológico do Brasil para os municípios do estado. A interface pertinente do fator no território é a erosão fluvial e o desbarrancamento das margens do rio Madeira e de outros rios, processo que destrói moradias, estradas e instalações em comunidades ribeirinhas e em bairros de Porto Velho, intensificado pela variação extrema dos níveis do rio entre cheias e secas. A erosão em áreas desmatadas e em estradas não pavimentadas também compromete a mobilidade rural. O fator é tratado pela via da interface, conforme as notas metodológicas, e articula-se a E2-F33, E4-F04 e E4-F16.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F33",
        "E4-F04",
        "E4-F16"
      ],
      "origem": {
        "codigo_documento": "E2-F36",
        "nome_no_documento": "Pontos de deslizamento de terra",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F37": {
      "texto": "Os sistemas de alerta em Rondônia baseiam-se nos avisos do INMET, nos boletins de monitoramento hidrológico do Serviço Geológico do Brasil para o Madeira e outros rios, nas mensagens por SMS da Defesa Civil mediante cadastro e na divulgação pela imprensa e pelas prefeituras. O monitoramento hidrológico do Madeira permite antecipar cheias e secas com semanas de antecedência, vantagem que não se traduz em alerta efetivo para comunidades ribeirinhas sem acesso regular à internet. As populações a jusante das barragens das usinas do Madeira devem contar com sistemas de alerta previstos nos planos de ação de emergência das barragens, cuja implantação e conhecimento pela população devem ser verificados. O fator articula-se a E2-F29, E6-F03, E6-F11 e E5-F15, e o plano popular deve definir cadeia comunitária de alerta com rádios e lideranças locais.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F29",
        "E6-F03",
        "E6-F11",
        "E5-F15"
      ],
      "origem": {
        "codigo_documento": "E2-F37",
        "nome_no_documento": "Sirenes e alertas de emergências",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F38": {
      "texto": "As queimadas e incêndios florestais são o problema ambiental e sanitário mais visível de Rondônia na estação seca, associados ao desmatamento, à renovação de pastagens e à grilagem de terras. Em Porto Velho, foram registrados 680 focos de queimada entre janeiro e o início de outubro de 2026, redução de 32,8% sobre os 1.013 do mesmo período de 2025, enquanto a fumaça de incêndios no Amazonas, que teve 1.380 focos nos primeiros dez dias de outubro de 2026, levou a capital à pior qualidade do ar do país (Prefeitura de Porto Velho, com base no monitoramento de focos). A série estadual de focos de calor do Programa Queimadas do INPE e a área queimada do MapBiomas devem ser incorporadas. Os efeitos incluem doenças respiratórias e cardiovasculares, perda de produção e de biodiversidade. O fator articula-se a E2-F25, E2-F30, E4-F16 e E4-F11.",
      "fontes_citadas": [
        "Prefeitura de Porto Velho, com base no monitoramento de focos"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026",
        "2025"
      ],
      "fatores_relacionados": [
        "E2-F25",
        "E2-F30",
        "E4-F16",
        "E4-F11"
      ],
      "origem": {
        "codigo_documento": "E2-F38",
        "nome_no_documento": "Queimada/Incêndio",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E2-F39": {
      "texto": "Pontos de encontro para emergências, definidos e conhecidos pela população, não foram identificados nas informações públicas disponíveis para os municípios de Rondônia, lacuna de preparação a ser confirmada com as defesas civis. Nas comunidades ribeirinhas, os pontos de encontro em cheias são tradicionalmente escolas, igrejas e áreas de terra firme conhecidas pelos moradores, conhecimento que deve ser sistematizado e incorporado aos planos de contingência. Em incêndios florestais, os pontos de encontro devem considerar rotas livres de fumaça e acessíveis por estrada ou rio. A segurança estrutural das edificações designadas deve ser avaliada previamente. O fator articula-se a E5-F01, E2-F26 e E2-F32, e a definição dos pontos deve ser feita com os moradores na cartografia social, considerando acessibilidade para idosos e pessoas com deficiência (E3-F11).",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F01",
        "E2-F26",
        "E2-F32",
        "E3-F11"
      ],
      "origem": {
        "codigo_documento": "E2-F39",
        "nome_no_documento": "Ponto de encontro em emergências",
        "eixo_documento": 2
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F01": {
      "texto": "A pobreza em Rondônia coexiste com o PIB per capita mais alto da Região Norte, de R$ 48.353,38 em 2023 (IBGE), e com IDH de 0,700 em 2021 (IBGE, escala estadual). O rendimento domiciliar per capita estadual informado pelo IBGE é de R$ 1.991 (PNAD Contínua), e a renda gerada pela agropecuária e pela energia concentra-se em segmentos restritos. A pobreza é mais intensa nas comunidades ribeirinhas do Madeira, Mamoré e Guaporé, nas terras indígenas, nos acampamentos e assentamentos em conflito, nos municípios de base econômica restrita e nas periferias de Porto Velho e dos polos regionais. O número de famílias no CadÚnico e no Bolsa Família por município, a ser extraído do VIS Data do MDS, é o indicador operacional para o planejamento. O fator é síntese de E1-F13, E1-F28 e E5-F22 e determinante transversal do Eixo 2, e sua redução depende de redistribuição territorial do investimento público.",
      "fontes_citadas": [
        "IBGE",
        "IBGE, escala estadual",
        "PNAD Contínua"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2021"
      ],
      "fatores_relacionados": [
        "E1-F13",
        "E1-F28",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E3-F01",
        "nome_no_documento": "Pobreza",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F02": {
      "texto": "A violência contra mulheres e meninas em Rondônia apresenta indicadores entre os mais graves do país. Em 2025, os feminicídios passaram de 15 para 25, aumento de 66%, com taxa equivalente ao dobro da nacional; os feminicídios passaram a representar 54,3% dos homicídios de mulheres; os descumprimentos de medidas protetivas somaram 1.904 casos; e os estupros e estupros de vulnerável alcançaram 1.701 registros, taxa de 97,1 por 100 mil habitantes, a segunda maior do país (Anuário Brasileiro de Segurança Pública 2026). A CPT registrou 35 ocorrências de intimidação contra mulheres em conflitos no campo em 2024. A rede de atendimento, com delegacias especializadas, centros de referência, casas-abrigo e serviços de saúde, concentra-se em Porto Velho e nos polos regionais, e sua cobertura por município deve ser verificada. O fator articula-se a E2-F28, E3-F06 e E2-F12, e a APS é porta de entrada para identificação precoce e cuidado.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F28",
        "E3-F06",
        "E2-F12"
      ],
      "origem": {
        "codigo_documento": "E3-F02",
        "nome_no_documento": "Discriminação e violência contra mulheres e meninas",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F03": {
      "texto": "Casamentos e uniões precoces envolvendo adolescentes ocorrem em Rondônia e só podem ser estimados indiretamente, pelo estado conjugal por idade no Censo 2022 e pelos nascidos vivos de mães adolescentes no SINASC, dados não sistematizados nesta versão. O contexto de violência sexual contra crianças e adolescentes é grave: o estado ocupava em 2025 o primeiro lugar no país em aliciamento de criança para ato libidinoso, com taxa de 22,1 por 100 mil habitantes de 0 a 17 anos, e a taxa de estupro nessa faixa etária era 1,67 vez a média nacional (Anuário Brasileiro de Segurança Pública 2026). Nascimentos de mães com menos de 14 anos configuram estupro de vulnerável. As uniões precoces associam-se à evasão escolar, à pobreza e a riscos obstétricos (E2-F03, E5-F04). O fator articula-se a E3-F02 e E1-F14, e exige articulação entre escola, Conselho Tutelar e APS, com mediação intercultural em comunidades indígenas.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F03",
        "E5-F04",
        "E3-F02",
        "E1-F14"
      ],
      "origem": {
        "codigo_documento": "E3-F03",
        "nome_no_documento": "Casamentos prematuros, forçados e de crianças",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F04": {
      "texto": "A igualdade de oportunidades para mulheres em Rondônia é limitada pela sobrecarga de cuidado (E1-F07), pela segmentação ocupacional, pela violência de gênero, com taxa de feminicídio equivalente ao dobro da nacional em 2025 (Anuário Brasileiro de Segurança Pública 2026), e pelas desigualdades no acesso à terra e ao crédito no meio rural (E3-F05). As mulheres rurais, ribeirinhas, indígenas e quilombolas enfrentam barreiras adicionais de distância, documentação e reconhecimento de seu trabalho produtivo. Os programas de qualificação, crédito e geração de renda para mulheres, operados por governos e organizações sociais, devem ter cobertura e resultados verificados por município. A participação feminina em conselhos, câmaras municipais e cargos de decisão é indicador a incorporar. O fator articula-se a E3-F06, E3-F10 e E5-F05, e o plano popular deve prever metas de creche e de inserção produtiva por território.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E1-F07",
        "E3-F05",
        "E3-F06",
        "E3-F10",
        "E5-F05"
      ],
      "origem": {
        "codigo_documento": "E3-F04",
        "nome_no_documento": "Igualdade de oportunidades para promover o empoderamento das mulheres",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F05": {
      "texto": "A propriedade e o controle da terra pelas mulheres em Rondônia são marcados pela história da colonização, em que os lotes do INCRA foram majoritariamente titulados em nome dos homens chefes de família. A legislação agrária passou a prever titulação conjunta ou preferencial às mulheres, e a proporção de títulos e contratos de concessão em nome de mulheres nos assentamentos do estado, disponível nos registros do INCRA, deve ser verificada para o diagnóstico. Nas áreas urbanas, a regularização fundiária de núcleos informais, conforme a Lei nº 13.465/2017, pode priorizar a titulação em nome das mulheres. A titularidade feminina reduz a vulnerabilidade em situações de violência doméstica e separação, e amplia o acesso a crédito. Em contexto de conflitos agrários intensos (E3-F19), as mulheres de acampamentos e ocupações estão expostas a intimidações. O fator articula-se a E1-F03, E1-F22 e E5-F22.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Lei nº 13.465/2017"
      ],
      "periodos_citados": [
        "2017"
      ],
      "fatores_relacionados": [
        "E3-F19",
        "E1-F03",
        "E1-F22",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E3-F05",
        "nome_no_documento": "Propriedade e controle sobre a terra para as mulheres",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F06": {
      "texto": "A coordenação de políticas para igualdade de gênero em Rondônia envolve a secretaria estadual responsável pelas políticas para mulheres, os organismos municipais, a rede de enfrentamento à violência, o sistema de justiça e as secretarias de saúde, assistência social e educação. A escalada da violência contra mulheres em 2025, com aumento de 66% nos feminicídios e de 38,2% nos descumprimentos de medidas protetivas (Anuário Brasileiro de Segurança Pública 2026), evidencia falhas de coordenação entre notificação, proteção e acompanhamento. A existência de planos estadual e municipais de políticas para mulheres, sua vigência, metas e execução orçamentária devem ser verificadas. A cobertura dos serviços especializados fora de Porto Velho e dos polos regionais é limitada. O fator articula-se a E3-F02, E3-F04 e E6-F07, e a avaliação deve basear-se em fluxos efetivos de atendimento e não na existência formal de serviços.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F02",
        "E3-F04",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E3-F06",
        "nome_no_documento": "Ação do Estado na coordenação e coerência de políticas para igualdade de gênero",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F07": {
      "texto": "O tráfico de pessoas tem relevância regional em Rondônia em razão da fronteira com a Bolívia, especialmente na região de Guajará-Mirim, da circulação de migrantes e trabalhadores sazonais e da presença de atividades de alto risco de exploração, como o garimpo ilegal e a abertura de áreas de desmatamento. As modalidades de maior risco são a exploração sexual de adolescentes, o trabalho em condições análogas às de escravidão (E1-F15) e o aliciamento de migrantes. O registro de 1.018 pessoas desaparecidas no estado em 2025, quinta maior taxa do país (Anuário Brasileiro de Segurança Pública 2026), é indicador indireto de risco que exige investigação. Na ausência de dados estaduais sistematizados sobre tráfico de pessoas, o fator é tratado como lacuna de informação e risco provável. Articula-se a E3-F13, E3-F03 e E6-F06, e as equipes de APS e assistência social devem ser capacitadas para reconhecer sinais de tráfico.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E1-F15",
        "E3-F13",
        "E3-F03",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E3-F07",
        "nome_no_documento": "Tráfico de pessoas",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F08": {
      "texto": "O acesso a direitos fundamentais em Rondônia é desigual entre áreas urbanas e populações rurais, ribeirinhas, indígenas e quilombolas, para as quais a distância de cartórios, unidades de saúde, escolas de ensino médio e serviços de justiça impõe barreiras concretas. A documentação civil incompleta afeta populações ribeirinhas e indígenas e migrantes, limitando o acesso ao CadÚnico, a benefícios previdenciários e ao cartão do SUS. Os 21.146 indígenas recenseados no estado em 2022, dos quais 11.997 em terras indígenas (IBGE), demandam atendimento culturalmente adequado e documentação específica. A taxa de encarceramento de 924,7 presos por 100 mil habitantes, a terceira do país, e as 160 mortes sob custódia em 2025, a maior taxa do Brasil (Anuário Brasileiro de Segurança Pública 2026), indicam graves violações de direitos no sistema prisional. O fator articula-se a E3-F12, E3-F19 e E1-F20, e o plano popular pode prever ações itinerantes de documentação e cidadania.",
      "fontes_citadas": [
        "IBGE",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F12",
        "E3-F19",
        "E1-F20"
      ],
      "origem": {
        "codigo_documento": "E3-F08",
        "nome_no_documento": "Direitos fundamentais",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F09": {
      "texto": "O monitoramento de idosos, pessoas com deficiência e crianças em situação de vulnerabilidade em Rondônia depende do cadastro territorial das equipes de Saúde da Família e dos agentes comunitários, do CadÚnico e do acompanhamento dos CRAS, sistemas sem integração nominal compartilhada. Os indicadores de violência contra crianças, com o primeiro lugar do país em abandono de incapaz e o segundo em maus-tratos em 2025 (Anuário Brasileiro de Segurança Pública 2026), evidenciam falhas desse monitoramento. Em emergências, como as secas que isolaram comunidades ribeirinhas em 2023 e 2024, a ausência de listagem de pessoas acamadas, com deficiência ou dependentes de medicamentos contínuos dificulta a priorização da assistência. O fator articula-se a E2-F19, E3-F11, E1-F01 e E2-F32, e o plano popular deve propor registro territorial de vulnerabilidades alimentado por agentes comunitários e pesquisadores populares, com proteção de dados pessoais conforme a LGPD.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F19",
        "E3-F11",
        "E1-F01",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E3-F09",
        "nome_no_documento": "Monitoramento dos vulneráveis (idosos, PCDs e crianças)",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F10": {
      "texto": "O empoderamento e a inclusão social, econômica e política das populações vulnerabilizadas em Rondônia expressam-se na organização de povos indígenas, comunidades quilombolas do Vale do Guaporé, movimentos de trabalhadores rurais sem terra, atingidos por barragens, extrativistas, ribeirinhos e movimentos de mulheres. Essas organizações enfrentam contexto de violência: o estado concentrou sete dos 26 assassinatos em conflitos no campo no país em 2025 (Comissão Pastoral da Terra), o que torna a proteção de lideranças condição para a participação. A representação desses grupos nos espaços de decisão estadual e municipal é baixa. A formação de pesquisadores populares pela PICAPS é estratégia de empoderamento ao reconhecer a comunidade como produtora de conhecimento sobre o território. O fator articula-se a E6-F07, E6-F01, E6-F02 e E3-F19, e seus indicadores incluem composição dos conselhos e lideranças formadas.",
      "fontes_citadas": [
        "Comissão Pastoral da Terra"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F07",
        "E6-F01",
        "E6-F02",
        "E3-F19"
      ],
      "origem": {
        "codigo_documento": "E3-F10",
        "nome_no_documento": "Empoderamento e inclusão social, econômica e política",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F11": {
      "texto": "A acessibilidade em Rondônia é limitada nas cidades, com calçadas irregulares, transporte coletivo com frota acessível incompleta e equipamentos públicos sem adequação plena às normas técnicas, e é ainda mais restrita nas áreas rurais e ribeirinhas, onde o acesso depende de estradas não pavimentadas e embarcações sem adaptação. O número de pessoas com deficiência por município, disponível no Censo 2022, deve ser extraído para dimensionar a demanda, não sistematizado nesta versão. As barreiras afetam o acesso à saúde, à educação e ao trabalho e tornam-se críticas em emergências, quando evacuações por rio ou estrada não consideram pessoas com mobilidade reduzida. Os alertas raramente incluem formatos acessíveis (E2-F37). O fator articula-se a E3-F09, E2-F26 e E5-F23, e o plano popular deve incorporar auditorias comunitárias de acessibilidade nos trajetos entre moradias e serviços essenciais.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F37",
        "E3-F09",
        "E2-F26",
        "E5-F23"
      ],
      "origem": {
        "codigo_documento": "E3-F11",
        "nome_no_documento": "Acessibilidade e inclusão",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F12": {
      "texto": "A rede de proteção social de Rondônia compreende os CRAS e CREAS dos 52 municípios, os serviços de acolhimento, os benefícios socioassistenciais e o CadÚnico, articulados à APS e à rede de educação, com capacidade concentrada nos municípios maiores. Nos municípios pequenos e nas áreas ribeirinhas, as equipes volantes e as ações itinerantes são as principais formas de alcance. A gestão do Bolsa Família e das condicionalidades de saúde e educação conecta proteção social e APS, e o acompanhamento por município deve ser verificado no sistema do programa. Os dados do Censo SUAS sobre equipes e infraestrutura dos CRAS e CREAS e a distribuição das famílias no CadÚnico devem ser incorporados. Nas emergências climáticas, a assistência social é responsável pelo acolhimento e pelos benefícios eventuais. O fator articula-se a E3-F01, E3-F14, E3-F09 e E5-F01, e o plano popular deve priorizar a integração entre assistência social e saúde nos territórios.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E3-F01",
        "E3-F14",
        "E3-F09",
        "E5-F01"
      ],
      "origem": {
        "codigo_documento": "E3-F12",
        "nome_no_documento": "Serviços públicos e políticas de proteção social",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F13": {
      "texto": "Rondônia é estado de formação migratória, povoado a partir da década de 1970 por colonos do Sul, Sudeste e Nordeste atraídos pelos projetos de colonização ao longo da BR-364, e mantém fluxos internos de população rural para as cidades e de trabalhadores para grandes obras e frentes de expansão agropecuária. A fronteira com a Bolívia, em Guajará-Mirim e outros municípios, e a posição na rota de entrada de imigrantes haitianos e venezuelanos pelo Acre tornam o estado espaço de trânsito e destino de migrantes internacionais. As barreiras linguísticas e documentais afetam o acesso à saúde e à proteção social. O número de imigrantes registrados por município, disponível no Sistema de Registro Nacional Migratório e nos relatórios do Observatório das Migrações Internacionais, deve ser incorporado, não sistematizado nesta versão. O fator articula-se a E3-F07, E1-F15 e E2-F14, e o plano popular deve prever mediação intercultural nos serviços.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "1970"
      ],
      "fatores_relacionados": [
        "E3-F07",
        "E1-F15",
        "E2-F14"
      ],
      "origem": {
        "codigo_documento": "E3-F13",
        "nome_no_documento": "Migração",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F14": {
      "texto": "O acolhimento de pessoas em situação de rua em Rondônia concentra-se em Porto Velho e nos polos regionais, com Centros POP, casas de passagem e equipes de Consultório na Rua em poucos municípios. O número de pessoas em situação de rua inscritas no CadÚnico por município, publicado pelo MDS, é a fonte disponível para dimensionar o grupo, não sistematizada nesta versão, e deve ser complementado por contagens locais. Migrantes internacionais em trânsito, pessoas egressas do sistema prisional, que no estado abriga 16.201 presos, a terceira maior taxa de encarceramento do país em 2025 (Anuário Brasileiro de Segurança Pública 2026), e usuários de álcool e outras drogas estão entre os grupos mais expostos. Em emergências, famílias desalojadas por cheias e desbarrancamentos também demandam acolhimento. O fator articula-se a E3-F08, E2-F08, E2-F10 e E5-F01, e a resposta estrutural exige moradia, renda e cuidado integrado.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F08",
        "E2-F08",
        "E2-F10",
        "E5-F01"
      ],
      "origem": {
        "codigo_documento": "E3-F14",
        "nome_no_documento": "Acolhimento de vulneráveis e população em situação de rua",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F16": {
      "texto": "A discriminação racial em Rondônia manifesta-se na distribuição desigual de renda, terra, educação, violência e acesso a serviços entre brancos, pardos, pretos e indígenas, padrão a ser quantificado com o quesito raça e cor do Censo 2022, do SIM, do SINAN e do CadÚnico por município, dados não sistematizados nesta versão. Os povos indígenas enfrentam discriminação associada à disputa territorial, com invasões, grilagem e ameaças a lideranças em terras como Uru-Eu-Wau-Wau e Karipuna, e as comunidades quilombolas do Vale do Guaporé aguardam há décadas a titulação de seus territórios. A Política Nacional de Saúde Integral da População Negra e a política de saúde indígena estabelecem diretrizes cuja implementação estadual deve ser verificada. O fator articula-se a E3-F17, E3-F18 e E2-F28, e exige desagregação racial e étnica de todos os indicadores do diagnóstico.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Política Nacional de Saúde Integral da População Negra"
      ],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E3-F17",
        "E3-F18",
        "E2-F28"
      ],
      "origem": {
        "codigo_documento": "E3-F16",
        "nome_no_documento": "Discriminação racial",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F17": {
      "texto": "O racismo ambiental em Rondônia expressa-se na concentração dos danos ambientais sobre povos indígenas, comunidades quilombolas, ribeirinhos e populações pobres. Em 2024, as comunidades quilombolas do Vale do Guaporé foram expostas a concentrações médias de material particulado fino de até 44 microgramas por metro cúbico em Pedras Negras, 193% acima do limite da OMS, entre julho e dezembro (InfoAmazonia com base no CAMS); comunidades ribeirinhas e a Terra Indígena Karipuna estão entre os casos críticos de exposição ao mercúrio do garimpo no Madeira (Mongabay Latam, 2026); e as populações atingidas pelas usinas do Madeira suportaram os custos sociais de grandes empreendimentos. Os bairros sem saneamento de Porto Velho concentram população de menor renda. O fator, associado ao ODS 18, articula-se a E3-F16, E3-F19, E2-F21 e E2-F25, e orienta a priorização de investimentos pelos territórios mais expostos.",
      "fontes_citadas": [
        "InfoAmazonia com base no CAMS",
        "Mongabay Latam, 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024",
        "2026"
      ],
      "fatores_relacionados": [
        "E3-F16",
        "E3-F19",
        "E2-F21",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E3-F17",
        "nome_no_documento": "Racismo ambiental",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F18": {
      "texto": "A promoção da igualdade racial em Rondônia conta com marcos como o Estatuto da Igualdade Racial, a Política Nacional de Saúde Integral da População Negra e a política de saúde indígena, mas a tradução desses marcos em metas mensuráveis no planejamento estadual e municipal é limitada. A educação para as relações étnico-raciais e a educação escolar indígena e quilombola, previstas nas Leis nº 10.639/2003 e nº 11.645/2008, devem ser verificadas nas redes de ensino. As comunidades quilombolas do Vale do Guaporé, como Pedras Negras, Santo Antônio do Guaporé, Forte Príncipe da Beira, Santa Fé, Jesus e Laranjeiras, e os povos indígenas, com 21.146 pessoas no Censo 2022 (IBGE), são sujeitos centrais dessas políticas. O fator articula-se a E3-F16, E3-F19 e E5-F29 e tem como indicadores a redução das desigualdades raciais em mortalidade, renda e escolaridade e a qualidade do quesito raça e cor nos registros.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [
        "Política Nacional de Saúde Integral da População Negra"
      ],
      "periodos_citados": [
        "2003",
        "2008",
        "2022"
      ],
      "fatores_relacionados": [
        "E3-F16",
        "E3-F19",
        "E5-F29"
      ],
      "origem": {
        "codigo_documento": "E3-F18",
        "nome_no_documento": "Igualdade racial",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E3-F19": {
      "texto": "A segurança territorial de povos indígenas e comunidades tradicionais é um dos nós críticos de Rondônia. O Censo 2022 registrou 21.146 indígenas no estado, dos quais 11.997 residentes em terras indígenas, e 2.925 quilombolas (IBGE). Terras como Uru-Eu-Wau-Wau, Karipuna, Karitiana e Puruborá sofrem invasões, grilagem, desmatamento e garimpo, e a desintrusão de ocupantes não indígenas da Uru-Eu-Wau-Wau foi objeto de debate no Senado Federal em dezembro de 2025. O quilombo Pedras Negras, certificado pela Fundação Cultural Palmares em 2005, aguarda a titulação coletiva de 43.911 hectares pelo INCRA (InfoAmazonia, 2025). A CPT registrou 123 conflitos por terra no estado em 2024, atingindo mais de 9.400 famílias. O fator articula-se a E3-F17, E4-F18, E2-F28 e E4-F16, e o plano popular deve tratar a segurança territorial como determinante de saúde.",
      "fontes_citadas": [
        "IBGE",
        "InfoAmazonia, 2025"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2025",
        "2005",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F17",
        "E4-F18",
        "E2-F28",
        "E4-F16"
      ],
      "origem": {
        "codigo_documento": "E3-F19",
        "nome_no_documento": "Igualdade de direitos à propriedade e controle da terra (comunidades tradicionais e quilombolas)",
        "eixo_documento": 3
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F01": {
      "texto": "O financiamento da conservação da biodiversidade em Rondônia provém do orçamento da secretaria estadual de meio ambiente, de fundos estaduais e municipais de meio ambiente, de compensações ambientais das usinas do Madeira e de outros empreendimentos, de recursos federais e de mecanismos internacionais como o Fundo Amazônia. A capacidade de fiscalização e gestão das unidades de conservação estaduais é afetada pela insuficiência de recursos e de pessoal frente à extensão do território, de 237.753 km² (IBGE). A execução orçamentária da função gestão ambiental no estado e nos municípios, consultável no SICONFI e nos portais de transparência, e os projetos do Fundo Amazônia em Rondônia devem ser incorporados ao diagnóstico, não sistematizados nesta versão. O fator articula-se a E4-F22, E4-F25 e E6-F09, e o plano popular deve propor critérios públicos de aplicação dos recursos, priorizando proteção de territórios tradicionais e restauração.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F22",
        "E4-F25",
        "E6-F09"
      ],
      "origem": {
        "codigo_documento": "E4-F01",
        "nome_no_documento": "Acesso a recursos financeiros para gestão, conservação sustentável da biodiversidade (investimentos públicos e privados)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F02": {
      "texto": "A gestão de bancos de sementes em Rondônia tem expressão em iniciativas de agricultores familiares, assentamentos, comunidades indígenas e organizações de agroecologia que conservam sementes crioulas e variedades tradicionais de milho, feijão, mandioca, arroz e espécies florestais. A Embrapa Rondônia, sediada em Porto Velho, e a Universidade Federal de Rondônia detêm competência técnica em recursos genéticos e sistemas agroflorestais que pode apoiar iniciativas comunitárias. A conservação de sementes adaptadas tem valor estratégico diante das secas extremas de 2023 e 2024 (E2-F30) e da expansão de monoculturas. A produção de sementes e mudas de espécies nativas para restauração é também oportunidade de renda. A inexistência de inventário estadual dessas iniciativas é lacuna que a cartografia social pode suprir. O fator articula-se a E1-F03, E1-F26, E4-F18 e E4-F25.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F30",
        "E1-F03",
        "E1-F26",
        "E4-F18",
        "E4-F25"
      ],
      "origem": {
        "codigo_documento": "E4-F02",
        "nome_no_documento": "Gestão de bancos de sementes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F03": {
      "texto": "O uso e o plantio de plantas medicinais em Rondônia estão presentes nas comunidades indígenas, quilombolas, ribeirinhas e extrativistas e entre agricultores familiares, mobilizando espécies amazônicas e de origem migrante transmitidas por saberes tradicionais. A Política Nacional de Práticas Integrativas e Complementares e a Política Nacional de Plantas Medicinais e Fitoterápicos orientam a incorporação da fitoterapia ao SUS, e a oferta de fitoterápicos e práticas integrativas nos municípios do estado deve ser verificada para o diagnóstico. A medicina tradicional indígena é reconhecida pela política de atenção à saúde dos povos indígenas, e sua articulação com os serviços dos Distritos Sanitários Especiais Indígenas é componente do cuidado diferenciado. O desmatamento e a contaminação ameaçam as espécies e os locais de coleta. O fator articula-se a E4-F18, E1-F04 e E5-F29, e o plano popular pode prever hortos comunitários de plantas medicinais junto às unidades de saúde.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Política Nacional de Práticas Integrativas e Complementares",
        "Política Nacional de Plantas Medicinais e Fitoterápicos"
      ],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F18",
        "E1-F04",
        "E5-F29"
      ],
      "origem": {
        "codigo_documento": "E4-F03",
        "nome_no_documento": "Plantas medicinais (uso e plantio)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F04": {
      "texto": "Os ecossistemas hídricos de Rondônia, organizados em torno da bacia do Madeira e de seus formadores Mamoré e Guaporé e de afluentes como Machado, Jamari e Roosevelt, foram profundamente alterados pelas usinas de Santo Antônio e Jirau, pelo garimpo de ouro no leito do Madeira, pelo desmatamento de matas ciliares e pelo lançamento de esgoto não tratado nas cidades. As secas de 2023 e 2024, com o Madeira em níveis mínimos históricos (Serviço Geológico do Brasil), expuseram a vulnerabilidade desses sistemas à variabilidade climática. O garimpo lança entre 10 e 50 toneladas de mercúrio por ano no rio, segundo estudos reunidos pela Mongabay Latam, com contaminação de peixes e pessoas. A proteção das cabeceiras e áreas de recarga e a restauração de matas ciliares são condições para a segurança hídrica. O fator articula-se a E2-F21, E2-F23, E4-F25 e E4-F14.",
      "fontes_citadas": [
        "Serviço Geológico do Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F21",
        "E2-F23",
        "E4-F25",
        "E4-F14"
      ],
      "origem": {
        "codigo_documento": "E4-F04",
        "nome_no_documento": "Proteção e restauração de ecossistemas hídricos",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F05": {
      "texto": "As tecnologias sociais em Rondônia incluem sistemas de captação e tratamento simplificado de água para comunidades ribeirinhas, cisternas, filtros, biodigestores, fossas ecológicas, sistemas agroflorestais, secadores solares e casas de farinha comunitárias, aplicadas por organizações da sociedade civil, extensão rural e projetos universitários, sem programa estadual que as difunda sistematicamente. A relevância cresce com a recorrência de secas, que tornam comunidades ribeirinhas dependentes de água distribuída pela Defesa Civil, e com a contaminação do rio por mercúrio, que exige alternativas de abastecimento seguro. Na seca de 2024, a distribuição de hipoclorito para tratamento domiciliar da água foi a principal medida em comunidades de Porto Velho (Agência Brasil). A inexistência de inventário estadual de tecnologias sociais em uso é lacuna. O fator articula-se a E5-F10, E4-F24 e E2-F31, e o plano popular pode selecionar com as comunidades as tecnologias prioritárias.",
      "fontes_citadas": [
        "Agência Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F10",
        "E4-F24",
        "E2-F31"
      ],
      "origem": {
        "codigo_documento": "E4-F05",
        "nome_no_documento": "Tecnologias sociais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F06": {
      "texto": "A pesquisa científica em Rondônia é conduzida pela Universidade Federal de Rondônia, pela Fiocruz Rondônia, pela Embrapa Rondônia, pelo Instituto Federal de Rondônia e por instituições privadas, com produção relevante em malária, doenças tropicais, mercúrio na bacia do Madeira, sistemas agroflorestais e ecologia amazônica. Pesquisadores da UNIR investigam há 26 anos a contaminação por mercúrio no Madeira, segundo a Mongabay Latam, base de conhecimento essencial para a vigilância em saúde. A tradução desse conhecimento em políticas públicas é irregular, e a articulação entre instituições de pesquisa, gestores e comunidades pode ser fortalecida. O fator articula-se a E4-F14, E6-F04 e E5-F06, e o plano popular deve propor agenda de pesquisa compartilhada orientada pelos nós críticos deste diagnóstico, com participação dos pesquisadores populares e retorno dos resultados às comunidades estudadas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F14",
        "E6-F04",
        "E5-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F06",
        "nome_no_documento": "Pesquisa científica e inovação",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F07": {
      "texto": "As edificações em Rondônia, sobretudo habitações populares, moradias de madeira nas áreas rurais e ribeirinhas e prédios públicos, têm baixa adaptação a calor extremo, fumaça, cheias e ventos fortes. Nas comunidades ribeirinhas, palafitas e casas próximas às margens estão sujeitas a inundação e desbarrancamento (E2-F36). O calor extremo e a fumaça das queimadas exigem edificações com ventilação, sombreamento e possibilidade de filtragem do ar, ausentes na maioria das escolas e unidades de saúde. A incorporação de critérios de resiliência climática aos códigos de obras municipais e aos programas habitacionais deve ser verificada. O fator articula-se a E4-F10, E5-F20, E5-F22 e E2-F25, e o plano popular deve priorizar a adequação de escolas e unidades de saúde como abrigos climáticos, com ambientes protegidos da fumaça durante a estação de queimadas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F36",
        "E4-F10",
        "E5-F20",
        "E5-F22",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E4-F07",
        "nome_no_documento": "Construções sustentáveis e resilientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F08": {
      "texto": "As tecnologias ambientalmente corretas em Rondônia incluem geração solar distribuída, crescente no estado, sistemas de rastreamento e monitoramento por satélite do desmatamento, técnicas de recuperação de pastagens degradadas e sistemas agroflorestais, com adoção concentrada em produtores e domicílios de maior renda. Nas comunidades isoladas, a geração solar com armazenamento pode substituir geradores a diesel e garantir energia para conservação de vacinas e medicamentos em unidades de saúde. A ausência de inventário estadual de tecnologias ambientais em equipamentos públicos e de programa de difusão para populações vulneráveis constitui lacuna. O fator articula-se a E4-F24, que trata do acesso a essas tecnologias, a E5-F14 e a E1-F23, e a substituição do mercúrio na mineração por técnicas limpas, onde a atividade for legal, é tecnologia ambiental de alta relevância sanitária para o estado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F24",
        "E5-F14",
        "E1-F23"
      ],
      "origem": {
        "codigo_documento": "E4-F08",
        "nome_no_documento": "Tecnologias ambientalmente corretas",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F09": {
      "texto": "O acesso à informação de qualidade sobre ambiente, saúde e riscos em Rondônia é fragmentado e desigual. A informação sobre qualidade do ar depende de plataformas internacionais como a IQAir, citada pela Prefeitura de Porto Velho, sem rede oficial ampla de monitoramento; os boletins hidrológicos do Serviço Geológico do Brasil sobre o Madeira são técnicos e pouco difundidos nas comunidades ribeirinhas; e a informação sobre contaminação por mercúrio raramente chega às populações expostas, que relatam ter tomado conhecimento do problema por pesquisas acadêmicas (Mongabay Latam, 2026). A desinformação sobre vacinas, saúde e conflitos agrários circula por redes sociais. O fator articula-se a E6-F09, E6-F03, E6-F11 e E2-F37, e o plano popular pode atribuir aos pesquisadores populares a mediação entre dados técnicos e conhecimento comunitário, com boletins territoriais em linguagem acessível.",
      "fontes_citadas": [
        "Mongabay Latam, 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026"
      ],
      "fatores_relacionados": [
        "E6-F09",
        "E6-F03",
        "E6-F11",
        "E2-F37"
      ],
      "origem": {
        "codigo_documento": "E4-F09",
        "nome_no_documento": "Acesso à informação de qualidade",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F10": {
      "texto": "A reconstrução sustentável e resiliente tem relevância em Rondônia após eventos como a cheia de 2014, que destruiu moradias e infraestrutura em Porto Velho e nos distritos do Madeira, os desbarrancamentos recorrentes nas margens dos rios e as perdas produtivas das secas de 2023 e 2024. Reconstruir nas mesmas áreas de risco e com os mesmos padrões reproduz a vulnerabilidade. A realocação de famílias de áreas de alto risco, quando necessária, deve ser negociada com as comunidades, considerando a relação dos ribeirinhos com o rio como base de seus meios de vida. O fator articula-se a E4-F07, E1-F29, E5-F20 e E5-F22, e o plano popular deve propor que as obras e programas habitacionais pós-desastre incorporem critérios de resiliência verificáveis, participação das comunidades atingidas e acompanhamento social da aplicação dos recursos emergenciais.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F07",
        "E1-F29",
        "E5-F20",
        "E5-F22"
      ],
      "origem": {
        "codigo_documento": "E4-F10",
        "nome_no_documento": "Reconstruções sustentáveis e resilientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F11": {
      "texto": "A educação ambiental e para adaptação climática em Rondônia ocorre em projetos escolares, ações de órgãos ambientais, programas de prevenção a incêndios e iniciativas de organizações da sociedade civil, sem programa estadual articulado que trate dos riscos concretos do território, como queimadas, fumaça, secas extremas, cheias e contaminação por mercúrio. A Política Nacional de Educação Ambiental fornece o marco normativo. A experiência recente de secas históricas e de fumaça extrema oferece oportunidade pedagógica de tratar o risco a partir da vivência de estudantes e famílias. O fator articula-se a E4-F12, E2-F38, E5-F04 e E6-F07, e os Círculos de Cultura da PICAPS constituem espaço metodológico para a educação ambiental crítica, que relaciona riscos climáticos ao modelo de ocupação do território e às desigualdades, e não apenas a comportamentos individuais.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Política Nacional de Educação Ambiental"
      ],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F12",
        "E2-F38",
        "E5-F04",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E4-F11",
        "nome_no_documento": "Educação ambiental e para adaptação climática",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F12": {
      "texto": "O planejamento relacionado à mudança do clima em Rondônia deve ser verificado quanto à existência de plano estadual de adaptação climática com metas, responsáveis e orçamento, e de planos municipais nos municípios mais expostos. A sequência de eventos extremos, com a cheia histórica de 2014, as secas com mínimas históricas do Madeira em 2023 e 2024, a situação de emergência reconhecida em 18 municípios em 2024 e a fumaça extrema em 2024 e 2026, demonstra que os riscos climáticos já operam no território. A redução do desmatamento em 36,39% entre 2024 e 2025 (INPE, PRODES) é componente da mitigação, mas a adaptação exige medidas específicas em saúde, abastecimento de água, energia, transporte e proteção de populações vulneráveis. O fator articula-se a E4-F11, E2-F32, E2-F30 e E5-F20, e o plano popular deve propor elaboração participativa de planos de adaptação.",
      "fontes_citadas": [
        "INPE, PRODES"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2023",
        "2024",
        "2026",
        "2025"
      ],
      "fatores_relacionados": [
        "E4-F11",
        "E2-F32",
        "E2-F30",
        "E5-F20"
      ],
      "origem": {
        "codigo_documento": "E4-F12",
        "nome_no_documento": "Planejamento relacionado à mudança do clima e à gestão eficaz",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F13": {
      "texto": "Rondônia não possui costa marítima, razão pela qual o fator é tratado pela via da interface indireta, conforme as notas metodológicas. O estado integra a bacia do Madeira, principal afluente do Amazonas pela margem direita, e a qualidade das águas que deixam o território, afetada pelo mercúrio do garimpo, pelos sedimentos do desmatamento e pelo esgoto não tratado, contribui para a condição dos sistemas hídricos a jusante e, em última instância, para o estuário amazônico e a zona costeira. A alteração do regime de sedimentos pelas usinas do Madeira tem efeitos sobre a dinâmica fluvial de longa distância. O fator articula-se a E4-F04 e E2-F21, e sua relevância para o planejamento local reside na responsabilidade do estado pela qualidade da água e pela carga de contaminantes que exporta para a bacia amazônica.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F04",
        "E2-F21"
      ],
      "origem": {
        "codigo_documento": "E4-F13",
        "nome_no_documento": "Gerenciar e proteger os oceanos, mares e recursos marinhos de forma sustentável",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F14": {
      "texto": "A pesquisa científica voltada à recuperação de ambientes degradados em Rondônia é conduzida pela Embrapa Rondônia, pela Universidade Federal de Rondônia e por organizações da sociedade civil em temas como recuperação de pastagens degradadas, restauração florestal, sistemas agroflorestais e monitoramento de rios afetados pelo garimpo e pelas usinas. A aplicação desse conhecimento à restauração de áreas desmatadas, que somam 67.708 km² acumulados no estado segundo o PRODES (INPE), e à recuperação de matas ciliares é oportunidade concreta de cooperação entre pesquisa, poder público e produtores. A participação comunitária no monitoramento, por meio de ciência cidadã e da cartografia social, amplia a capacidade de acompanhamento. O fator articula-se a E4-F06, E4-F04, E4-F25 e E6-F04, e o diagnóstico registra como lacuna a ausência de programa estadual de restauração com metas por bacia.",
      "fontes_citadas": [
        "INPE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F06",
        "E4-F04",
        "E4-F25",
        "E6-F04"
      ],
      "origem": {
        "codigo_documento": "E4-F14",
        "nome_no_documento": "Pesquisa científica e inovação para recuperação de ambientes",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F15": {
      "texto": "A pesca artesanal é atividade relevante em Rondônia nos rios Madeira, Mamoré, Guaporé e afluentes, base alimentar e de renda de comunidades ribeirinhas e indígenas. Os pescadores foram afetados pelas usinas de Santo Antônio e Jirau, que alteraram rotas migratórias de peixes como os grandes bagres, pelas secas extremas de 2023 e 2024, que reduziram a disponibilidade de pescado e o acesso aos locais de pesca, e pela contaminação por mercúrio, que torna o pescado vetor de exposição (E2-F06). O número de pescadores artesanais no Registro Geral da Atividade Pesqueira por município e o pagamento do seguro-defeso devem ser incorporados ao diagnóstico, não sistematizados nesta versão. O fator articula-se a E4-F04, E4-F20 e E1-F26, e o monitoramento do mercúrio no pescado e o apoio aos pescadores em secas são prioridades.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F06",
        "E4-F04",
        "E4-F20",
        "E1-F26"
      ],
      "origem": {
        "codigo_documento": "E4-F15",
        "nome_no_documento": "Pescadores artesanais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F16": {
      "texto": "Rondônia é um dos estados mais desmatados da Amazônia: o desmatamento acumulado medido pelo PRODES soma 67.708 km², 13,37% do total da Amazônia Legal e terceiro maior entre os estados, atrás de Pará e Mato Grosso (INPE, TerraBrasilis). Em 2025, o desmatamento no estado caiu 36,39% em relação a 2024, acima da redução média de 12,07% na Amazônia, que somou 5.731 km² (INPE, agosto de 2026). O desmatamento associa-se à expansão da pecuária e da soja, à grilagem de terras públicas e à invasão de terras indígenas e unidades de conservação, e produz efeitos sobre o regime de chuvas, a intensidade das secas, as queimadas e a transmissão de malária (E2-F08). O fator articula-se a E4-F17, E4-F25, E2-F38 e E3-F19, e a série anual por município deve ser incorporada ao diagnóstico.",
      "fontes_citadas": [
        "INPE, TerraBrasilis",
        "INPE, agosto de 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2024",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F08",
        "E4-F17",
        "E4-F25",
        "E2-F38",
        "E3-F19"
      ],
      "origem": {
        "codigo_documento": "E4-F16",
        "nome_no_documento": "Desmatamento e solos degradados",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F17": {
      "texto": "A gestão dos recursos naturais em Rondônia envolve a secretaria estadual de meio ambiente, o IBAMA, o ICMBio, a FUNAI, a Polícia Militar Ambiental e os municípios, com instrumentos como licenciamento ambiental, Cadastro Ambiental Rural, unidades de conservação federais e estaduais e zoneamento socioeconômico-ecológico. A capacidade de fiscalização é insuficiente frente à extensão do território e às pressões de desmatamento, garimpo e grilagem, e o estado tem histórico de redução de unidades de conservação por lei estadual, objeto de contestação judicial. A gestão do garimpo de ouro no Madeira, com dragas operando ilegalmente, é exemplo das fragilidades do controle. O fator, que na Matriz v1.0.2 reúne a gestão de ecossistemas, fauna e produtos químicos, articula-se a E4-F04, E4-F16, E4-F22 e E6-F06, e o plano popular deve fortalecer a participação social nos conselhos ambientais e no acompanhamento do licenciamento.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F04",
        "E4-F16",
        "E4-F22",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E4-F17",
        "nome_no_documento": "Gestão sustentável dos recursos naturais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F18": {
      "texto": "Os conhecimentos e práticas tradicionais de conservação em Rondônia estão presentes nos povos indígenas, com 21.146 pessoas recenseadas em 2022 (IBGE), nas comunidades quilombolas do Vale do Guaporé, nos seringueiros e extrativistas das reservas extrativistas e nas comunidades ribeirinhas. Esses saberes incluem manejo de recursos florestais e pesqueiros, agricultura de coivara, conhecimento de plantas medicinais e formas de ocupação do território que mantêm a floresta. As terras indígenas funcionam como barreiras ao desmatamento quando protegidas, e sua invasão representa perda simultânea de floresta e de conhecimento. O reconhecimento desses saberes é condição para gestão ambiental culturalmente adequada. O fator articula-se a E5-F29, E3-F19, E4-F03 e E4-F22, e o plano popular pode prever a participação de detentores de saberes tradicionais em programas de restauração, educação ambiental e saúde.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E5-F29",
        "E3-F19",
        "E4-F03",
        "E4-F22"
      ],
      "origem": {
        "codigo_documento": "E4-F18",
        "nome_no_documento": "Conhecimentos e práticas tradicionais de conservação e uso sustentável",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F19": {
      "texto": "O atendimento veterinário e o resgate de animais em Rondônia envolvem serviços municipais de controle de zoonoses, clínicas veterinárias, a Polícia Militar Ambiental, o IBAMA e organizações de proteção animal, com capacidade concentrada nos municípios maiores. O fator tem relevância sanitária pela raiva, que circula em morcegos e herbívoros em áreas rurais, pelas leishmanioses, pela leptospirose e pelos acidentes com animais. As queimadas e o desmatamento ampliam a demanda por resgate de fauna silvestre ferida ou desalojada, e as secas extremas concentram animais em poucos corpos d'água. A abordagem de Saúde Única, que integra saúde humana, animal e ambiental, é especialmente pertinente em fronteira de desmatamento com alta transmissão de zoonoses. O fator articula-se a E2-F35, E4-F20 e E2-F08, e o diagnóstico registra como lacuna a inexistência de levantamento estadual de serviços veterinários públicos.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F35",
        "E4-F20",
        "E2-F08"
      ],
      "origem": {
        "codigo_documento": "E4-F19",
        "nome_no_documento": "Hospital veterinário e resgate de animais",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F20": {
      "texto": "O tráfico de fauna e flora em Rondônia inclui a extração ilegal de madeira de terras indígenas e unidades de conservação, a caça e a pesca ilegais e a captura de animais silvestres, facilitadas pela extensão territorial, pela fronteira com a Bolívia e pela fiscalização limitada. A extração ilegal de madeira está associada à grilagem e ao desmatamento e alimenta redes criminosas que se sobrepõem a outras atividades ilícitas (E6-F06). Os autos de infração e apreensões do IBAMA, do ICMBio e da Polícia Militar Ambiental por município devem ser incorporados ao diagnóstico, não sistematizados nesta versão. O tráfico ameaça espécies, empobrece os territórios tradicionais e introduz riscos sanitários associados a zoonoses. O fator articula-se a E4-F19, E4-F15 e E3-F19, e a vigilância territorial indígena e comunitária é estratégia de proteção que deve ser apoiada.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E6-F06",
        "E4-F19",
        "E4-F15",
        "E3-F19"
      ],
      "origem": {
        "codigo_documento": "E4-F20",
        "nome_no_documento": "Tráfico de espécies da flora e fauna (caça e pesca ilegal)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F21": {
      "texto": "As espécies exóticas invasoras em Rondônia incluem gramíneas africanas usadas em pastagens que dominam áreas desmatadas e aumentam a combustibilidade da vegetação, favorecendo incêndios, e peixes exóticos introduzidos na piscicultura e em reservatórios, como os das usinas do Madeira, com riscos à fauna nativa. O mosquito Aedes aegypti, espécie exótica, sustenta a transmissão de dengue e chikungunya (E2-F07). A presença e o impacto de espécies invasoras nos reservatórios das hidrelétricas devem ser verificados nos programas de monitoramento ambiental exigidos no licenciamento. A elaboração de listas estaduais de espécies invasoras e de normas para piscicultura e restauração com espécies nativas deve ser verificada. O fator articula-se a E4-F25, E4-F17 e E4-F15, e o diagnóstico registra como lacuna a ausência de levantamento sistematizado de espécies invasoras no estado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F07",
        "E4-F25",
        "E4-F17",
        "E4-F15"
      ],
      "origem": {
        "codigo_documento": "E4-F21",
        "nome_no_documento": "Espécies exóticas invasoras",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F22": {
      "texto": "A gestão da biodiversidade para o desenvolvimento e a redução da pobreza em Rondônia tem potencial em cadeias da sociobiodiversidade como castanha, açaí, óleos vegetais, borracha e pescado manejado, no turismo de natureza e de base comunitária, na produção de sementes e mudas para restauração e no pagamento por serviços ambientais. As reservas extrativistas, as terras indígenas e os assentamentos agroextrativistas são territórios com base para essas cadeias, desde que protegidos de invasões e apoiados com assistência técnica, crédito e acesso a mercados. A redução do desmatamento em 2025 (INPE) cria ambiente favorável a políticas de valorização da floresta em pé. O fator articula-se a E1-F23, E4-F25, E4-F01 e E4-F18, e o plano popular pode identificar com as comunidades as cadeias viáveis em cada território e as condições para que a renda gerada permaneça localmente.",
      "fontes_citadas": [
        "INPE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F23",
        "E4-F25",
        "E4-F01",
        "E4-F18"
      ],
      "origem": {
        "codigo_documento": "E4-F22",
        "nome_no_documento": "Gestão sustentável da biodiversidade para o desenvolvimento e redução da pobreza",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F24": {
      "texto": "O acesso das populações vulneráveis de Rondônia a tecnologias ambientalmente corretas é restrito pelo custo e pela logística. Comunidades ribeirinhas, indígenas e rurais isoladas dependem de geradores a diesel, de água do rio sem tratamento e de fogões a lenha, enquanto a geração solar, os filtros e os sistemas de tratamento simplificado concentram-se em quem pode adquiri-los. Programas federais de universalização da energia elétrica em regiões remotas e de acesso à água, como o Luz para Todos e programas de cisternas, devem ter sua cobertura no estado verificada. A transferência de tecnologia para essas populações reduziria custos, ampliaria a resiliência em secas e cheias e protegeria a saúde. O fator articula-se a E4-F08, E4-F05, E5-F14 e E5-F10, e o plano popular pode propor programas comunitários de acesso associados à formação técnica de moradores para instalação e manutenção.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F08",
        "E4-F05",
        "E5-F14",
        "E5-F10"
      ],
      "origem": {
        "codigo_documento": "E4-F24",
        "nome_no_documento": "Transferência de tecnologias ambientalmente corretas (acesso)",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E4-F25": {
      "texto": "O reflorestamento e a restauração em Rondônia têm escala modesta frente ao passivo de 67.708 km² desmatados acumulados no estado (INPE, PRODES), e concentram-se em compensações ambientais, programas de regularização ambiental de imóveis rurais vinculados ao Cadastro Ambiental Rural, projetos de organizações da sociedade civil e sistemas agroflorestais com café e espécies nativas. A restauração das áreas de preservação permanente ao longo dos rios é prioridade funcional para a qualidade da água e para a resiliência às secas. As metas de restauração do Plano Nacional de Recuperação da Vegetação Nativa e a regularização ambiental dos imóveis rurais oferecem instrumentos cuja execução estadual deve ser verificada. O fator articula-se a E4-F16, E4-F04, E4-F02 e E4-F14, e a produção comunitária de sementes e mudas pode gerar renda em territórios rurais e tradicionais.",
      "fontes_citadas": [
        "INPE, PRODES"
      ],
      "referencias_normativas": [
        "Plano Nacional de Recuperação da Vegetação Nativa"
      ],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F16",
        "E4-F04",
        "E4-F02",
        "E4-F14"
      ],
      "origem": {
        "codigo_documento": "E4-F25",
        "nome_no_documento": "Reflorestamento",
        "eixo_documento": 4
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F01": {
      "texto": "A disponibilidade de abrigos para emergências em Rondônia é organizada caso a caso pelas defesas civis municipais, com uso de escolas, ginásios e igrejas para acolher famílias desalojadas por cheias, como na cheia de 2014 em Porto Velho, e por desbarrancamentos. Os planos municipais de contingência com indicação prévia de abrigos não são de conhecimento público na maior parte dos municípios, lacuna a ser verificada. Na estação de queimadas, a necessidade de abrigos climáticos, ambientes com ar filtrado para proteger crianças, idosos e pessoas com doenças respiratórias da fumaça, é inteiramente nova no planejamento. Nas comunidades ribeirinhas, abrigos em terra firme e com acesso fluvial devem ser previamente definidos. O fator articula-se a E2-F39, E6-F16, E3-F14 e E4-F07, e o plano popular deve mapear com as comunidades edificações seguras e acordos prévios com organizações religiosas e comunitárias para seu uso.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014"
      ],
      "fatores_relacionados": [
        "E2-F39",
        "E6-F16",
        "E3-F14",
        "E4-F07"
      ],
      "origem": {
        "codigo_documento": "E5-F01",
        "nome_no_documento": "Disponibilidade a abrigos para emergências",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F02": {
      "texto": "A obstrução e o dano de vias em Rondônia afetam a BR-364, as rodovias estaduais e as extensas malhas de estradas vicinais não pavimentadas, que se tornam intransitáveis no período chuvoso. Na cheia de 2014, o Madeira atingiu 19,74 m e alagou a BR-364, isolando o Acre por via terrestre (Serviço Geológico do Brasil, e defesas civis). Na estação seca, a fumaça das queimadas reduz a visibilidade nas rodovias, e nas secas extremas a navegação no Madeira, via essencial para comunidades ribeirinhas, foi restringida. A interrupção de vias atrasa o socorro, o transporte de pacientes e o abastecimento de medicamentos e alimentos. Os registros de interdições da Polícia Rodoviária Federal e do departamento estadual de estradas devem ser incorporados ao diagnóstico. O fator articula-se a E5-F19, E2-F34, E2-F30 e E2-F26, e o planejamento deve prever rotas alternativas e estoques para territórios sujeitos a isolamento.",
      "fontes_citadas": [
        "Serviço Geológico do Brasil, e defesas civis"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014"
      ],
      "fatores_relacionados": [
        "E5-F19",
        "E2-F34",
        "E2-F30",
        "E2-F26"
      ],
      "origem": {
        "codigo_documento": "E5-F02",
        "nome_no_documento": "Vias obstruídas e danificadas – vias municipais, estaduais e federais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F03": {
      "texto": "O transporte de produtos perigosos em Rondônia concentra-se na BR-364, corredor de combustíveis, fertilizantes, agrotóxicos e grãos, e na hidrovia do Madeira, que transportou 6,5 milhões de toneladas em 2022 entre Porto Velho e Itacoatiara, cerca de 9,2% da carga hidroviária do país (Agência Brasil com base na ANTAQ), incluindo combustíveis e insumos agrícolas. Acidentes com cargas perigosas nas rodovias e no rio podem contaminar solos, cursos d'água e captações de abastecimento. Os registros de acidentes com produtos perigosos no estado, mantidos pela Polícia Rodoviária Federal, pelos bombeiros e pelos órgãos ambientais, não foram sistematizados nesta versão e constituem lacuna. O plano de contingência para emergências com produtos químicos perigosos deve ser verificado nas esferas estadual e municipal. O fator articula-se a E2-F11, E5-F15 e E2-F21, e a cartografia social pode identificar trechos de risco próximos a escolas e moradias.",
      "fontes_citadas": [
        "Agência Brasil com base na ANTAQ"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E2-F11",
        "E5-F15",
        "E2-F21"
      ],
      "origem": {
        "codigo_documento": "E5-F03",
        "nome_no_documento": "Acidentes no transporte de produtos perigosos",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F04": {
      "texto": "O ensino fundamental em Rondônia apresentou avanço nos anos iniciais, com IDEB passando de 5,6 para 6,1 entre 2023 e 2025, e estabilidade nos anos finais, em 4,8; na rede pública estadual, o índice dos anos iniciais passou de 5,5 para 6,0, e os anos finais mantiveram 4,7 (INEP, escala estadual). O estado registrou 222.448 matrículas no ensino fundamental em 2025 (IBGE com base no Censo Escolar). As médias estaduais escondem desigualdades entre escolas urbanas e rurais, ribeirinhas, indígenas e quilombolas, que devem ser analisadas por escola. O transporte escolar em estradas vicinais precárias e por rio, interrompido em cheias e secas, compromete a frequência. A fumaça das queimadas levou à suspensão de aulas em episódios críticos. O fator articula-se a E5-F08, E5-F12, E1-F14 e E2-F25, e a educação escolar indígena e do campo exige atenção específica.",
      "fontes_citadas": [
        "INEP, escala estadual",
        "IBGE com base no Censo Escolar"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F08",
        "E5-F12",
        "E1-F14",
        "E2-F25"
      ],
      "origem": {
        "codigo_documento": "E5-F04",
        "nome_no_documento": "Educação – ensino primário",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F05": {
      "texto": "A educação técnica e profissional em Rondônia é ofertada pelo Instituto Federal de Rondônia, com campi distribuídos pelo estado, pelo Sistema S, pela rede estadual e por instituições privadas, com cursos voltados à agropecuária, à agroindústria, à saúde, à gestão e à tecnologia. O número de matrículas em educação profissional por município, disponível no Censo Escolar do INEP, deve ser incorporado ao diagnóstico, não sistematizado nesta versão. A distância das unidades ofertantes para jovens rurais, ribeirinhos e indígenas e o custo de deslocamento limitam o acesso. A formação técnica em agroecologia, manejo florestal, saneamento e energias renováveis tem relevância para a transição econômica do estado. O fator articula-se a E5-F16, E1-F12, E1-F23 e E5-F10, e o plano popular pode orientar a oferta para ocupações com demanda local e para a formação em tecnologias sociais e restauração.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F16",
        "E1-F12",
        "E1-F23",
        "E5-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F05",
        "nome_no_documento": "Educação técnica e profissional",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F06": {
      "texto": "A educação superior em Rondônia é ofertada pela Universidade Federal de Rondônia, com campi em Porto Velho e em municípios do interior, pelo Instituto Federal de Rondônia e por instituições privadas, com cursos de graduação e pós-graduação em saúde, ciências agrárias, ambientais e humanas. A presença dessas instituições sustenta a formação de profissionais de saúde para o estado, cuja fixação no interior é desafio (E2-F16), e a capacidade de pesquisa local em malária, mercúrio e ecologia amazônica (E4-F06). O acesso de estudantes indígenas, quilombolas, ribeirinhos e de baixa renda depende de ações afirmativas, bolsas e condições de permanência. Os dados de matrícula por cor ou raça e origem, disponíveis no Censo da Educação Superior do INEP, devem ser incorporados. O fator articula-se a E5-F11, E6-F04 e E2-F16, e a extensão universitária é via de articulação com os territórios.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F16",
        "E4-F06",
        "E5-F11",
        "E6-F04"
      ],
      "origem": {
        "codigo_documento": "E5-F06",
        "nome_no_documento": "Educação superior",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F08": {
      "texto": "A rede pública de educação em Rondônia compreende as redes municipais, responsáveis pela educação infantil e pelo ensino fundamental, e a rede estadual, com predominância no ensino médio, além de escolas indígenas e do campo. O IDEB do ensino médio estadual manteve-se em 4,2 entre 2023 e 2025 e, na rede pública, em 4,0 (INEP), indicador de estagnação nessa etapa. A oferta de educação infantil nas áreas rurais e ribeirinhas é restrita, com efeito sobre o trabalho das mulheres (E1-F07). O número de matrículas e de estabelecimentos por rede, etapa e localização, disponível no Censo Escolar, deve ser incorporado. A escola pública é também equipamento de alimentação, proteção social e, potencialmente, abrigo em emergências, mas sua infraestrutura frente a calor e fumaça é inadequada (E4-F07). O fator articula-se a E5-F04 e E5-F12, e a educação escolar indígena e quilombola requer currículos e professores específicos.",
      "fontes_citadas": [
        "INEP"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025"
      ],
      "fatores_relacionados": [
        "E1-F07",
        "E4-F07",
        "E5-F04",
        "E5-F12"
      ],
      "origem": {
        "codigo_documento": "E5-F08",
        "nome_no_documento": "Educação pública",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F09": {
      "texto": "A Educação de Jovens e Adultos em Rondônia atende trabalhadores rurais e urbanos, mulheres que interromperam os estudos, idosos da geração de colonos e migrantes. A taxa de analfabetismo da população de 15 anos ou mais por município, disponível no Censo 2022, deve ser extraída para dimensionar a demanda, não sistematizada nesta versão, e tende a ser mais elevada entre idosos rurais e populações indígenas. O analfabetismo limita o acesso a serviços digitalizados, a compreensão de orientações de saúde e a participação em espaços de decisão. A oferta de EJA nas áreas rurais, ribeirinhas e nos estabelecimentos prisionais, que abrigam 16.201 pessoas no estado (Anuário Brasileiro de Segurança Pública 2026), deve ser verificada. O fator articula-se a E5-F21, E2-F13 e E6-F07, e a metodologia freireana dos Círculos de Cultura da PICAPS permite integrar formação de pesquisadores populares e elevação de escolaridade.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2026"
      ],
      "fatores_relacionados": [
        "E5-F21",
        "E2-F13",
        "E6-F07"
      ],
      "origem": {
        "codigo_documento": "E5-F09",
        "nome_no_documento": "Alfabetização – EJA",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F10": {
      "texto": "A formação em tecnologias sociais em Rondônia ocorre em programas de extensão rural e universitária, em organizações da sociedade civil, em movimentos sociais do campo e em projetos de cooperação, sem oferta regular na rede pública de educação profissional. A formação de moradores para construir e manter sistemas de captação e tratamento de água, sistemas agroflorestais, biodigestores, secadores solares e instalações de energia solar amplia a autonomia de comunidades rurais e ribeirinhas e gera trabalho local. A recorrência de secas extremas e a contaminação do rio por mercúrio conferem urgência à formação em soluções de abastecimento seguro. A inexistência de dados sobre cursos e egressos nessa área constitui lacuna de informação. O fator articula-se a E4-F05, E4-F24, E1-F09 e E5-F16, e o plano popular pode associar a formação de pesquisadores populares à formação técnica em tecnologias sociais prioritárias.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F05",
        "E4-F24",
        "E1-F09",
        "E5-F16"
      ],
      "origem": {
        "codigo_documento": "E5-F10",
        "nome_no_documento": "Formação em tecnologias sociais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F11": {
      "texto": "As bolsas de estudo acessíveis a estudantes de Rondônia incluem o Programa Universidade para Todos e o Fundo de Financiamento Estudantil para o ensino superior privado, as bolsas de permanência das instituições públicas, inclusive a Bolsa Permanência para estudantes indígenas e quilombolas, e o programa federal de incentivo à permanência no ensino médio. O número de bolsistas por programa e município, disponível nos sistemas do Ministério da Educação, deve ser incorporado ao diagnóstico, não sistematizado nesta versão. A permanência depende de transporte, moradia e alimentação, especialmente para estudantes de municípios distantes dos campi, comunidades ribeirinhas e aldeias. O fator articula-se a E5-F06, E5-F05 e E3-F18, e seu efeito sobre a redução de desigualdades raciais e territoriais na escolarização superior é indicador relevante, inclusive para a formação de profissionais de saúde indígenas e do interior.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F06",
        "E5-F05",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E5-F11",
        "nome_no_documento": "Bolsas de estudo",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F12": {
      "texto": "A qualificação dos professores em Rondônia é medida pelo indicador de adequação da formação docente do INEP e pela proporção de docentes com pós-graduação, disponíveis por escola e rede no Censo Escolar e não sistematizados nesta versão. A rotatividade e a formação inadequada são mais frequentes nas escolas rurais, ribeirinhas e indígenas, onde as condições de trabalho, a distância e o isolamento dificultam a fixação. A formação de professores indígenas e quilombolas para a educação diferenciada e a formação para educação ambiental e em riscos climáticos (E4-F11) são dimensões qualitativas do fator. O avanço do IDEB dos anos iniciais de 5,6 para 6,1 entre 2023 e 2025 (INEP) sugere efeito de investimentos pedagógicos, enquanto a estagnação nos anos finais e no ensino médio indica necessidade de atenção. O fator articula-se a E5-F04 e E5-F08.",
      "fontes_citadas": [
        "INEP"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2025"
      ],
      "fatores_relacionados": [
        "E4-F11",
        "E5-F04",
        "E5-F08"
      ],
      "origem": {
        "codigo_documento": "E5-F12",
        "nome_no_documento": "Professores qualificados",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F13": {
      "texto": "O acesso à energia elétrica em Rondônia é amplo nas áreas urbanas, mas incompleto em comunidades rurais isoladas, ribeirinhas e indígenas, parte delas atendida por sistemas isolados a diesel ou sem atendimento, a serem verificados nos dados do programa Luz para Todos e da ANEEL. O paradoxo do estado é gerar energia em grande escala nas usinas de Santo Antônio e Jirau, exportada para outras regiões pelo sistema interligado, enquanto comunidades próximas aos reservatórios relatam fornecimento precário. A continuidade do fornecimento em áreas rurais, medida pelos indicadores de duração e frequência de interrupções da ANEEL por conjunto elétrico, deve ser incorporada ao diagnóstico. A interrupção afeta conservação de vacinas e medicamentos, especialmente em unidades de saúde rurais. O fator articula-se a E2-F31, E5-F14 e E4-F24.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F31",
        "E5-F14",
        "E4-F24"
      ],
      "origem": {
        "codigo_documento": "E5-F13",
        "nome_no_documento": "Acesso aos serviços de energia",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F14": {
      "texto": "A geração de energia em Rondônia é predominantemente hidrelétrica, com as usinas de Santo Antônio e Jirau no Madeira e pequenas centrais, e a geração solar distribuída cresce em domicílios e empresas, concentrada em quem tem capacidade de investimento. Nas comunidades isoladas, a substituição de geradores a diesel por sistemas solares com armazenamento reduziria custos, emissões e ruído, e garantiria energia para unidades de saúde e escolas. A tarifa social de energia elétrica, destinada a famílias do CadÚnico, é instrumento de acessibilidade econômica, e sua cobertura no estado deve ser verificada na ANEEL e no MDS. As secas extremas reduzem a geração hidrelétrica, o que evidencia a interdependência entre clima e segurança energética. O fator articula-se a E4-F08, E4-F24 e E5-F13, e o diagnóstico registra como lacuna a inexistência de levantamento da geração solar em equipamentos públicos.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F08",
        "E4-F24",
        "E5-F13"
      ],
      "origem": {
        "codigo_documento": "E5-F14",
        "nome_no_documento": "Serviços de energia modernos e sustentáveis",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F15": {
      "texto": "Os empreendimentos com elevado risco de desastres em Rondônia incluem as usinas hidrelétricas de Santo Antônio e Jirau, no rio Madeira, cujas barragens são reguladas pela ANEEL e estão sujeitas a planos de ação de emergência, pequenas centrais hidrelétricas e barragens de usos múltiplos, depósitos de combustíveis e agroquímicos e o transporte de cargas perigosas (E5-F03). O garimpo com dragas no leito do Madeira, embora ilegal em grande parte, constitui atividade de risco ambiental e sanitário contínuo pelo lançamento de mercúrio. O inventário de barragens com classificação de risco e dano potencial associado, disponível no Sistema Nacional de Informações sobre Segurança de Barragens da ANA, deve ser incorporado ao diagnóstico, não sistematizado nesta versão. O fator articula-se a E2-F33, E2-F37, E2-F26 e E4-F17, e as populações a jusante devem conhecer os planos de emergência das barragens.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F03",
        "E2-F33",
        "E2-F37",
        "E2-F26",
        "E4-F17"
      ],
      "origem": {
        "codigo_documento": "E5-F15",
        "nome_no_documento": "Empreendimento com elevado risco de desastres",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F16": {
      "texto": "A educação para o trabalho em Rondônia abrange a intermediação de mão de obra pelo sistema público de emprego, a qualificação pelo Sistema S e por programas estaduais e os programas de aprendizagem para jovens. A distância entre o perfil das vagas, concentradas no comércio, nos serviços e na agroindústria, e a qualificação de jovens rurais, ribeirinhos e indígenas reduz a efetividade da intermediação. Os dados de inscritos, encaminhados e colocados pelo sistema público de emprego por município devem ser incorporados, não sistematizados nesta versão. A formação para o trabalho deve incluir direitos trabalhistas, saúde do trabalhador e economia solidária, e oferecer alternativas a atividades ilegais de alto risco, como o garimpo (E1-F28). O fator articula-se a E5-F05, E1-F12, E1-F13 e E5-F10, e o plano popular pode propor formações vinculadas às demandas identificadas na cartografia social.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E1-F28",
        "E5-F05",
        "E1-F12",
        "E1-F13",
        "E5-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F16",
        "nome_no_documento": "Educação para trabalho",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F17": {
      "texto": "A promoção da cultura em Rondônia é conduzida pela secretaria estadual de cultura, por órgãos municipais e por coletivos culturais, com equipamentos concentrados em Porto Velho e nos polos regionais, como os espaços do complexo da Estrada de Ferro Madeira-Mamoré, patrimônio histórico da capital. A diversidade cultural do estado, formada por povos indígenas, quilombolas do Guaporé, ribeirinhos, seringueiros, bolivianos e migrantes de todas as regiões do país, tem reconhecimento limitado nas políticas públicas. O orçamento estadual e municipal da função cultura e o número de projetos apoiados pela Lei Paulo Gustavo e pela Política Nacional Aldir Blanc por município devem ser incorporados ao diagnóstico. A cultura é determinante de saúde mental, coesão comunitária e identidade. O fator articula-se a E5-F18, E5-F29 e E3-F18, e o plano popular pode priorizar o apoio a grupos culturais atuantes nos territórios.",
      "fontes_citadas": [],
      "referencias_normativas": [
        "Política Nacional Aldir Blanc"
      ],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F18",
        "E5-F29",
        "E3-F18"
      ],
      "origem": {
        "codigo_documento": "E5-F17",
        "nome_no_documento": "Promoção de cultura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F18": {
      "texto": "O acesso à cultura em Rondônia é desigual entre Porto Velho e os polos regionais, que concentram cinemas, teatros e espaços culturais, e os municípios pequenos, rurais e ribeirinhos, onde a oferta depende de festas comunitárias, igrejas e iniciativas locais. A pesquisa do Ministério da Cultura sobre índice cultural das capitais, divulgada em 2025, oferece indicadores de acesso para Porto Velho que devem ser consultados, não sistematizados nesta versão. As festas tradicionais, como as celebrações religiosas e culturais das comunidades quilombolas do Guaporé e os festejos ribeirinhos, constituem patrimônio vivo com baixo apoio público. O acesso à cultura tem efeitos sobre convivência, saúde mental e prevenção da violência entre jovens. O fator articula-se a E5-F17, E5-F25, E5-F27 e E5-F28, e o plano popular pode propor circuitos culturais descentralizados e uso das escolas e espaços comunitários para programação cultural.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F17",
        "E5-F25",
        "E5-F27",
        "E5-F28"
      ],
      "origem": {
        "codigo_documento": "E5-F18",
        "nome_no_documento": "Acesso à cultura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F19": {
      "texto": "O sistema viário de Rondônia é estruturado pela BR-364, eixo de ocupação do estado desde a década de 1970 e ligação com o Acre e o Centro-Oeste, por rodovias federais e estaduais complementares, como a BR-425 para Guajará-Mirim e a BR-429 para o Vale do Guaporé, e por extensa malha de estradas vicinais não pavimentadas dos projetos de colonização. A hidrovia do Madeira complementa o sistema para cargas e para o acesso às comunidades ribeirinhas. As condições de conservação das rodovias e vicinais e sua trafegabilidade no período chuvoso determinam o acesso a serviços de saúde, escolas e mercados. A frota de 1.295.415 veículos registrada em 2025 (IBGE) indica alta dependência do transporte individual. O fator articula-se a E5-F02, E5-F23, E2-F11 e E2-F15, e a acessibilidade viária determina o tempo de transporte sanitário entre municípios e polos regionais.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "1970",
        "2025"
      ],
      "fatores_relacionados": [
        "E5-F02",
        "E5-F23",
        "E2-F11",
        "E2-F15"
      ],
      "origem": {
        "codigo_documento": "E5-F19",
        "nome_no_documento": "Sistema viário – vias municipais, estaduais e federais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F20": {
      "texto": "A infraestrutura de Rondônia apresentou vulnerabilidades nos eventos extremos recentes: a cheia de 2014 inundou a área portuária de Porto Velho, centro de distribuição de combustíveis e alimentos para o estado e o Acre, e interrompeu a BR-364; as secas de 2023 e 2024 restringiram a navegação no Madeira, reduziram o abastecimento de água e afetaram a geração hidrelétrica; e a fumaça das queimadas comprometeu a navegação e o transporte aéreo. A infraestrutura de saneamento é a mais deficiente, com Porto Velho entre os piores municípios do país (Instituto Trata Brasil). A resiliência das infraestruturas críticas de saúde, energia, água e transporte exige investimentos e planejamento orientados por cenários climáticos. O fator articula-se a E4-F07, E4-F12, E5-F13 e E2-F20, e o plano popular deve priorizar a resiliência das infraestruturas de saúde e abastecimento.",
      "fontes_citadas": [
        "Instituto Trata Brasil"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2014",
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E4-F07",
        "E4-F12",
        "E5-F13",
        "E2-F20"
      ],
      "origem": {
        "codigo_documento": "E5-F20",
        "nome_no_documento": "Infraestrutura sustentável e resiliente",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F21": {
      "texto": "O acesso a tecnologias de informação e comunicação em Rondônia é amplo nas cidades pela telefonia móvel, mas limitado nas áreas rurais, ribeirinhas e indígenas, onde a cobertura de sinal é irregular e a internet depende de soluções via satélite. Os dados de acesso à internet por domicílio do Censo 2022 e de cobertura móvel da ANATEL por município devem ser incorporados ao diagnóstico, não sistematizados nesta versão. A digitalização dos serviços públicos aprofunda a exclusão de idosos, pessoas com baixa escolaridade e populações isoladas. O registro de 13.985 casos de estelionato eletrônico no estado em 2025, terceira maior taxa do país (Anuário Brasileiro de Segurança Pública 2026), indica vulnerabilidade da população a golpes digitais. Em emergências, o celular é canal de alerta dependente de energia e sinal. O fator articula-se a E5-F09, E6-F11 e E2-F37.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E5-F09",
        "E6-F11",
        "E2-F37"
      ],
      "origem": {
        "codigo_documento": "E5-F21",
        "nome_no_documento": "Tecnologias de informação e comunicação",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F22": {
      "texto": "A habitação em Rondônia combina moradias de madeira e alvenaria nos lotes rurais da colonização, palafitas e casas ribeirinhas sujeitas a cheias e desbarrancamentos, ocupações irregulares e loteamentos sem infraestrutura nas periferias urbanas, e conjuntos habitacionais, incluindo reassentamentos das usinas do Madeira. O déficit habitacional estimado pela Fundação João Pinheiro e os domicílios em favelas e comunidades urbanas do Censo 2022 devem ser incorporados por município, não sistematizados nesta versão. A insegurança da posse em acampamentos e ocupações rurais em conflito, com 123 conflitos por terra registrados pela CPT em 2024, configura vulnerabilidade habitacional extrema (E3-F19). A inadequação das moradias ao calor e à fumaça agrava riscos à saúde. O fator articula-se a E5-F24, E3-F05, E4-F07 e E4-F10, e o plano popular deve associar regularização fundiária, melhorias habitacionais e adaptação climática.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2024"
      ],
      "fatores_relacionados": [
        "E3-F19",
        "E5-F24",
        "E3-F05",
        "E4-F07",
        "E4-F10"
      ],
      "origem": {
        "codigo_documento": "E5-F22",
        "nome_no_documento": "Habitação",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F23": {
      "texto": "O transporte em Rondônia é predominantemente rodoviário e individual, com transporte coletivo urbano em Porto Velho e em poucos polos regionais, transporte intermunicipal por ônibus ao longo da BR-364 e transporte fluvial de passageiros para comunidades do Madeira, Mamoré e Guaporé. O transporte fluvial opera com embarcações de padrões de segurança variáveis e fiscalização limitada, e foi restringido nas secas de 2023 e 2024. O transporte escolar rural e o transporte sanitário de pacientes para os polos regionais percorrem longas distâncias em estradas precárias. Os acidentes de trânsito, especialmente com motocicletas, são causa relevante de mortalidade (E2-F11). Os indicadores de oferta de transporte coletivo e de transporte sanitário por município devem ser incorporados. O fator articula-se a E5-F19, E2-F15, E1-F12 e E3-F11, e o plano popular deve incluir a segurança do transporte fluvial.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024"
      ],
      "fatores_relacionados": [
        "E2-F11",
        "E5-F19",
        "E2-F15",
        "E1-F12",
        "E3-F11"
      ],
      "origem": {
        "codigo_documento": "E5-F23",
        "nome_no_documento": "Transportes seguros",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F24": {
      "texto": "A urbanização de Rondônia, com 1.581.196 habitantes no Censo 2022 em 237.753 km² e densidade de 6,65 habitantes por km² (IBGE), produziu rede urbana organizada ao longo da BR-364, com Porto Velho como principal centro e cidades médias como Ji-Paraná, Ariquemes, Vilhena e Cacoal, formadas a partir de núcleos de colonização. A expansão urbana ocorreu com infraestrutura insuficiente, especialmente em saneamento, drenagem e pavimentação, e Porto Velho cresceu com ocupação de áreas sujeitas a cheias e sem rede de água e esgoto. A população estimada mais recente divulgada pelo IBGE é de 1.757.338 habitantes, indicando crescimento continuado. As características do entorno dos domicílios no Censo 2022, como pavimentação, iluminação e bueiros, devem ser extraídas por município. O fator articula-se a E5-F22, E2-F01, E2-F20 e E3-F17 e é determinante transversal das desigualdades de saúde.",
      "fontes_citadas": [
        "IBGE"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022"
      ],
      "fatores_relacionados": [
        "E5-F22",
        "E2-F01",
        "E2-F20",
        "E3-F17"
      ],
      "origem": {
        "codigo_documento": "E5-F24",
        "nome_no_documento": "Urbanização e infraestrutura",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F25": {
      "texto": "Os equipamentos públicos de lazer e cultura seguros em Rondônia concentram-se nas áreas centrais de Porto Velho e dos polos regionais, com oferta escassa nas periferias, nos distritos e nas áreas rurais, onde praças, quadras e centros comunitários são poucos e com manutenção irregular. A segurança desses espaços depende de iluminação, manutenção e ocupação comunitária, e sua ausência reduz o uso por mulheres, crianças e idosos, em contexto de altas taxas de violência sexual e contra crianças no estado (Anuário Brasileiro de Segurança Pública 2026). Na estação de queimadas, a fumaça inviabiliza o uso de espaços ao ar livre. O inventário de equipamentos de lazer, esporte e cultura por município, a ser elaborado com as prefeituras e a cartografia social, é lacuna do diagnóstico. O fator articula-se a E5-F18, E5-F26, E5-F28 e E2-F27, e a ocupação qualificada desses espaços é estratégia de prevenção da violência.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2026"
      ],
      "fatores_relacionados": [
        "E5-F18",
        "E5-F26",
        "E5-F28",
        "E2-F27"
      ],
      "origem": {
        "codigo_documento": "E5-F25",
        "nome_no_documento": "Equipamentos públicos de lazer e cultura seguros",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F26": {
      "texto": "O acesso ao esporte em Rondônia depende de equipamentos públicos, programas municipais e estaduais e projetos sociais, com distribuição desigual entre municípios e entre áreas urbanas e rurais. A prática de atividade física no lazer, monitorada para Porto Velho pelo VIGITEL do Ministério da Saúde, relaciona-se à prevenção de doenças crônicas (E2-F09) e à saúde mental (E2-F18), e os indicadores do VIGITEL para a capital devem ser extraídos da edição mais recente, não sistematizados nesta versão. A oferta de esporte para jovens nas periferias e nos distritos é estratégia de prevenção da violência e do uso de drogas. O calor extremo e a fumaça na estação seca limitam a prática ao ar livre e exigem espaços cobertos e horários adequados. O fator articula-se a E5-F25, E5-F28 e E2-F27, e as academias da saúde vinculadas à APS são ponto de integração entre esporte e cuidado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F09",
        "E2-F18",
        "E5-F25",
        "E5-F28",
        "E2-F27"
      ],
      "origem": {
        "codigo_documento": "E5-F26",
        "nome_no_documento": "Esportes",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F27": {
      "texto": "As bibliotecas públicas em Rondônia concentram-se em Porto Velho e nas sedes municipais, com acervos e horários limitados, e as bibliotecas escolares são o principal acesso a livros nas áreas rurais e ribeirinhas. O número de bibliotecas públicas por município, registrado no Sistema Nacional de Bibliotecas Públicas, e sua situação de funcionamento devem ser incorporados ao diagnóstico, não sistematizados nesta versão. Bibliotecas comunitárias e iniciativas de leitura mantidas por associações e coletivos podem ampliar o acesso com baixo custo. Nas comunidades indígenas, materiais em línguas indígenas são escassos. O fator articula-se a E5-F18, E5-F09 e E5-F21, e a biblioteca pode funcionar como espaço de encontro, acesso digital, informação em saúde e ponto de referência para a comunicação comunitária, inclusive como local de acolhimento em episódios de fumaça se dotada de ambiente climatizado.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F18",
        "E5-F09",
        "E5-F21"
      ],
      "origem": {
        "codigo_documento": "E5-F27",
        "nome_no_documento": "Biblioteca",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F28": {
      "texto": "O lazer em Rondônia é marcado pela relação com os rios, como os balneários e praias fluviais que surgem na vazante, e com festas comunitárias, esportes e encontros religiosos. As secas extremas e a contaminação por mercúrio alteram essas práticas: na seca de 2024, a Agência Brasil registrou riscos de afogamento e de ataques de jacarés, cobras e arraias associados ao banho nos rios. A fumaça das queimadas restringe o lazer ao ar livre por semanas na estação seca. As restrições de tempo impostas por jornadas extensas e longos deslocamentos, a sobrecarga de cuidado das mulheres e a insegurança reduzem as oportunidades de lazer. Na ausência de inquérito sobre uso do tempo, a cartografia social é a fonte para identificar espaços usados e demandas. O fator articula-se a E5-F25, E5-F26, E2-F18 e E2-F19, e a qualificação de espaços públicos seguros amplia a oferta.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2024"
      ],
      "fatores_relacionados": [
        "E5-F25",
        "E5-F26",
        "E2-F18",
        "E2-F19"
      ],
      "origem": {
        "codigo_documento": "E5-F28",
        "nome_no_documento": "Lazer",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F29": {
      "texto": "Os saberes e práticas locais de Rondônia incluem as tradições dos povos indígenas, as expressões culturais e religiosas das comunidades quilombolas do Vale do Guaporé, os saberes dos seringueiros, extrativistas e ribeirinhos sobre a floresta e os rios, e as tradições trazidas por migrantes de todas as regiões do Brasil e da Bolívia. Esses saberes incluem conhecimento sobre plantas medicinais, manejo de recursos, alimentação e leitura dos ciclos de cheia e seca, conhecimento que se torna estratégico diante das mudanças climáticas. São pouco reconhecidos pelas políticas públicas, que tendem a tratá-los como folclore. A valorização dos saberes locais é princípio metodológico da Pedagogia da Práxis no Território. O fator articula-se a E4-F18, E4-F03, E3-F18 e E5-F17, e o plano popular pode prever registro, transmissão intergeracional e integração desses saberes à escola, à APS e às estratégias de adaptação climática.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E4-F18",
        "E4-F03",
        "E3-F18",
        "E5-F17"
      ],
      "origem": {
        "codigo_documento": "E5-F29",
        "nome_no_documento": "Valorização dos saberes e práticas locais",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E5-F30": {
      "texto": "A iluminação pública em Rondônia é gerida pelos municípios e financiada pela contribuição de iluminação pública, com cobertura e manutenção desiguais entre áreas centrais, periferias e distritos. A proporção de domicílios com iluminação pública no entorno, disponível no Censo 2022 por município e setor censitário, deve ser extraída para o diagnóstico, não sistematizada nesta versão. A iluminação é condição de segurança, especialmente para mulheres, em contexto de taxas de estupro e feminicídio entre as mais altas do país (Anuário Brasileiro de Segurança Pública 2026), e para o uso noturno de espaços públicos, transporte e acesso a unidades de saúde e escolas. A substituição por tecnologia LED e o uso de energia solar em áreas rurais e distritos são oportunidades de ampliação com menor custo. O fator articula-se a E2-F27, E5-F23, E5-F25 e E3-F02, e a cartografia social pode identificar trechos escuros prioritários.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2022",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F27",
        "E5-F23",
        "E5-F25",
        "E3-F02"
      ],
      "origem": {
        "codigo_documento": "E5-F30",
        "nome_no_documento": "Acesso a iluminação pública",
        "eixo_documento": 5
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F01": {
      "texto": "As associações de moradores e lideranças locais de Rondônia formam rede extensa que inclui associações de bairro, associações de produtores e de assentados, organizações e lideranças indígenas, associações quilombolas do Vale do Guaporé, associações de ribeirinhos e extrativistas e conselhos locais de saúde. A tradição associativa dos projetos de colonização constituiu base organizativa no meio rural. Essas lideranças operam em contexto de risco: o estado registrou sete assassinatos em conflitos no campo em 2025, cerca de 27% do total nacional, e um massacre com três vítimas (Comissão Pastoral da Terra), e lideranças indígenas e de trabalhadores rurais sofrem ameaças. O registro dessas organizações não está consolidado em base pública, lacuna que a cartografia social deve suprir. O fator articula-se a E6-F02, E6-F07, E1-F17 e E3-F10, e o plano popular deve reconhecer essas lideranças como interlocutoras e articular sua proteção.",
      "fontes_citadas": [
        "Comissão Pastoral da Terra"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F02",
        "E6-F07",
        "E1-F17",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E6-F01",
        "nome_no_documento": "Associação de moradores e lideranças locais",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F02": {
      "texto": "A mobilização de redes e grupos organizados em Rondônia expressa-se em organizações indígenas regionais, movimentos de trabalhadores rurais sem terra, movimento dos atingidos por barragens, organizações de seringueiros e extrativistas, comunidades quilombolas, pastorais sociais, movimentos de mulheres e coletivos urbanos. Essas redes têm capacidade de incidência sobre temas territoriais e ambientais, mas a fragmentação entre agendas e o contexto de violência e criminalização limitam sua atuação. A Comissão Pastoral da Terra e o Conselho Indigenista Missionário documentam sistematicamente conflitos e violências, produzindo informação essencial para o diagnóstico. A formação de pesquisadores populares pela PICAPS é estratégia de mobilização ancorada na produção de conhecimento sobre o território. O fator articula-se a E6-F01, E6-F07, E3-F10 e E6-F04, e a efetividade da mobilização deve ser avaliada por sua capacidade de alterar decisões públicas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E6-F01",
        "E6-F07",
        "E3-F10",
        "E6-F04"
      ],
      "origem": {
        "codigo_documento": "E6-F02",
        "nome_no_documento": "Mobilização de redes e grupos organizados",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F03": {
      "texto": "As rádios comunitárias e locais têm papel relevante em Rondônia, sobretudo para populações rurais, ribeirinhas e indígenas com acesso limitado à internet, para quem o rádio é a principal fonte de informação e de avisos. O registro de rádios comunitárias autorizadas por município, mantido pelo Ministério das Comunicações e pela ANATEL, deve ser incorporado ao diagnóstico, não sistematizado nesta versão. A relevância do fator cresce em emergências: nas secas e cheias do Madeira, o rádio é meio resiliente para alertas, orientações sobre água, saúde e abastecimento, e para a comunicação entre comunidades e defesas civis, e na estação de queimadas pode difundir alertas de qualidade do ar. O fator articula-se a E2-F37, E2-F29, E6-F11 e E4-F09, e o plano popular pode prever acordos com rádios comunitárias e locais para veiculação regular de informações de saúde em linguagem acessível e em línguas indígenas quando pertinente.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F37",
        "E2-F29",
        "E6-F11",
        "E4-F09"
      ],
      "origem": {
        "codigo_documento": "E6-F03",
        "nome_no_documento": "Rádios comunitárias",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F04": {
      "texto": "As parcerias entre instituições públicas, privadas e sociedade civil em Rondônia envolvem universidades, a Fiocruz Rondônia, a Embrapa, organizações indígenas e socioambientais, o Ministério Público, a Defensoria Pública e os governos estadual e municipais, em temas como malária, mercúrio, desmatamento, saúde indígena e resposta a desastres. A redução da malária, com queda de 34% entre 2023 e 2024 segundo a Agevisa, resulta de cooperação entre vigilância estadual, municípios, Ministério da Saúde e instituições de pesquisa. A intersetorialidade, contudo, opera por projetos, sem arquitetura permanente de governança territorial que integre saúde, assistência social, meio ambiente, defesa civil e comunidades por região de saúde. O manual técnico para atendimento a indígenas expostos ao mercúrio, publicado em 2025 pelo Ministério da Saúde, pela Fiocruz e pelo Ministério dos Povos Indígenas, é exemplo de parceria aplicável ao estado. O fator articula-se a E6-F07, E4-F06 e E2-F32.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [
        "2023",
        "2024",
        "2025"
      ],
      "fatores_relacionados": [
        "E6-F07",
        "E4-F06",
        "E2-F32"
      ],
      "origem": {
        "codigo_documento": "E6-F04",
        "nome_no_documento": "Parcerias entre instituições públicas, privadas e com a sociedade civil",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F05": {
      "texto": "Os mutirões de limpeza em Rondônia são realizados por moradores, igrejas, escolas e associações e por campanhas municipais de combate ao Aedes aegypti e de limpeza de terrenos, rios e praias fluviais, sem calendário integrado nem registro sistemático. A relevância sanitária é direta: o acúmulo de resíduos favorece criadouros de vetores de dengue e outras arboviroses (E2-F07, E2-F35), e a limpeza de margens e igarapés reduz a contaminação da água. Nas comunidades rurais, os mutirões tradicionais de trabalho coletivo, como os de roçado e de construção, são prática enraizada que pode ser mobilizada para ações de saúde e prevenção de incêndios, como aceiros comunitários. Os mutirões de plantio contribuem para a restauração de matas ciliares (E4-F25). O fator articula-se a E1-F27 e E6-F01, e o plano popular pode organizar calendário territorial de mutirões associado à vigilância em saúde e à prevenção de queimadas.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F07",
        "E2-F35",
        "E4-F25",
        "E1-F27",
        "E6-F01"
      ],
      "origem": {
        "codigo_documento": "E6-F05",
        "nome_no_documento": "Mutirão de limpeza",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F06": {
      "texto": "O crime organizado tem presença relevante em Rondônia, associada às rotas de tráfico de drogas e armas a partir da Bolívia, ao garimpo ilegal, à extração ilegal de madeira e à grilagem de terras públicas. Em 2025, o estado liderou o país em armas de fogo apreendidas pelas polícias estaduais, com 2.280 apreensões, registrou aumento de 41,5% nos registros de tráfico de drogas e viu as armas registradas e ativas crescerem de 16.054 em 2019 para 44.072 em 2025 (Anuário Brasileiro de Segurança Pública 2026). A sobreposição entre crimes ambientais, violência no campo e economia ilegal produz territórios em que comunidades, lideranças e servidores públicos estão sob ameaça. O fator articula-se a E2-F27, E2-F28, E4-F20 e E3-F07, e o enfrentamento exige articular repressão qualificada aos crimes ambientais e ao tráfico, proteção de lideranças, prevenção social e alternativas de trabalho digno.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2019",
        "2026"
      ],
      "fatores_relacionados": [
        "E2-F27",
        "E2-F28",
        "E4-F20",
        "E3-F07"
      ],
      "origem": {
        "codigo_documento": "E6-F06",
        "nome_no_documento": "Combate ao crime organizado",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F07": {
      "texto": "A participação social na tomada de decisão em Rondônia é institucionalizada no Conselho Estadual de Saúde, nos conselhos municipais de saúde dos 52 municípios, nas conferências, nos conselhos de assistência social, de direitos da criança e do adolescente, de meio ambiente e nos conselhos distritais de saúde indígena dos Distritos Sanitários Especiais Indígenas Porto Velho e Vilhena. A efetividade dessas instâncias depende da representatividade, da regularidade de funcionamento, do acesso à informação e da capacidade de incidir sobre o orçamento e os planos. A participação de populações rurais, ribeirinhas, indígenas, quilombolas e de mulheres é proporcionalmente menor, e as distâncias dificultam a presença em reuniões. As atas, resoluções e o acompanhamento dos Relatórios Anuais de Gestão pelos conselhos são fontes para avaliar a qualidade da participação. O fator articula-se a E6-F01, E6-F02, E6-F09 e E3-F10, e a PICAPS contribui ao qualificar tecnicamente a participação com dados territoriais.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E6-F01",
        "E6-F02",
        "E6-F09",
        "E3-F10"
      ],
      "origem": {
        "codigo_documento": "E6-F07",
        "nome_no_documento": "Participação social na tomada de decisão responsiva, inclusiva e participativa",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F08": {
      "texto": "A corrupção afeta a efetividade das políticas públicas em Rondônia ao desviar recursos e distorcer prioridades, com efeitos sobre saúde, saneamento e infraestrutura, e é facilitada em contextos de contratações emergenciais, frequentes no estado em razão de cheias, secas e queimadas. Os mecanismos de controle incluem a Controladoria-Geral do Estado, os controles internos municipais, o Tribunal de Contas do Estado, o Ministério Público estadual e federal, as assembleias e câmaras e o controle social. A captura de instituições por interesses vinculados à grilagem e aos crimes ambientais é risco específico de territórios de fronteira de desmatamento. Os relatórios de auditoria e as decisões do Tribunal de Contas sobre o estado e os municípios devem ser consultados. O fator articula-se a E6-F09, E6-F07 e E6-F06, e o plano popular pode propor acompanhamento comunitário das contratações emergenciais e dos recursos de saúde e saneamento.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E6-F09",
        "E6-F07",
        "E6-F06"
      ],
      "origem": {
        "codigo_documento": "E6-F08",
        "nome_no_documento": "Corrupção e suborno (em todos os níveis)",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F09": {
      "texto": "A transparência ativa em Rondônia é exercida pelos portais de transparência do estado e dos municípios, pelos relatórios de gestão submetidos aos conselhos de saúde, pelo SIOPS e pelos portais das concessionárias de serviços. O IBGE registra receitas brutas realizadas pelo estado de R$ 22,38 bilhões e despesas empenhadas de R$ 17,80 bilhões (IBGE, finanças estaduais, 2025), magnitude que indica a relevância do acompanhamento social do gasto, e o gasto com segurança pública alcançou R$ 2,32 bilhões em 2025, 13% do orçamento estadual (Anuário Brasileiro de Segurança Pública 2026). A disponibilidade de dados abertos, georreferenciados e em linguagem acessível sobre saúde, saneamento, qualidade do ar, barragens e desmatamento é limitada e fragmentada. O fator articula-se a E6-F08, E6-F07, E4-F09 e E1-F25, e o plano popular pode propor painel territorial público com indicadores por região de saúde.",
      "fontes_citadas": [
        "IBGE, finanças estaduais, 2025",
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E6-F08",
        "E6-F07",
        "E4-F09",
        "E1-F25"
      ],
      "origem": {
        "codigo_documento": "E6-F09",
        "nome_no_documento": "Instituições públicas e privadas em todos os níveis (transparência ativa)",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F11": {
      "texto": "Os grupos de mensagens são o principal canal de comunicação comunitária nas cidades e nas áreas rurais com cobertura de sinal em Rondônia, usados por associações, escolas, igrejas, equipes de saúde, comunidades indígenas e redes de vizinhança para avisos e organização. Nas secas e cheias e na estação de queimadas, esses grupos difundem alertas, informações sobre abastecimento e pedidos de ajuda com rapidez, mas também propagam informações imprecisas, e o alto número de golpes digitais no estado, com 13.985 registros de estelionato eletrônico em 2025 (Anuário Brasileiro de Segurança Pública 2026), indica vulnerabilidade a fraudes. Nas comunidades sem sinal, a comunicação depende de rádio e de visitas. A inexistência de levantamento desses grupos é lacuna que a cartografia social pode suprir. O fator articula-se a E6-F03, E2-F29, E2-F37 e E4-F09, e o plano popular pode estruturar rede de grupos territoriais com pontos focais formados.",
      "fontes_citadas": [
        "Anuário Brasileiro de Segurança Pública 2026"
      ],
      "referencias_normativas": [],
      "periodos_citados": [
        "2025",
        "2026"
      ],
      "fatores_relacionados": [
        "E6-F03",
        "E2-F29",
        "E2-F37",
        "E4-F09"
      ],
      "origem": {
        "codigo_documento": "E6-F11",
        "nome_no_documento": "Comunicação comunitária – grupos de mensagens",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F15": {
      "texto": "Os grupos de escuta, espaços regulares em que pessoas podem expressar sofrimento e necessidades e ser acolhidas, existem em Rondônia nos grupos terapêuticos da APS e dos CAPS, em pastorais e igrejas, em grupos de mulheres e em iniciativas comunitárias, sem mapeamento de sua oferta por município. A relevância do fator é elevada em contexto de violência letal crescente, violência sexual e contra crianças entre as mais altas do país, conflitos agrários com ameaças e assassinatos, e eventos extremos que destroem meios de vida. Grupos conduzidos por agentes comunitários, lideranças formadas e profissionais de saúde ampliam a capacidade de cuidado além dos serviços especializados, concentrados nos municípios maiores. Nas comunidades indígenas, as práticas próprias de cuidado coletivo devem ser reconhecidas. O fator articula-se a E2-F18, E6-F16 e E3-F02, e o plano popular pode prever formação de facilitadores comunitários articulada ao matriciamento em saúde mental.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E2-F18",
        "E6-F16",
        "E3-F02"
      ],
      "origem": {
        "codigo_documento": "E6-F15",
        "nome_no_documento": "Grupos de escuta diários",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    },
    "E6-F16": {
      "texto": "As igrejas, grupos religiosos e coletivos comunitários de Rondônia desempenham papel relevante no apoio a populações vulneráveis, com distribuição de alimentos e água, acolhimento de famílias desalojadas por cheias, apoio a migrantes e cessão de espaços para atividades comunitárias. Sua capilaridade nas periferias, nos distritos e nas comunidades rurais e ribeirinhas supera a de muitos serviços públicos, o que os torna atores estratégicos na resposta a emergências, como pontos de abrigo, distribuição de doações e comunicação. Organizações vinculadas às igrejas, como a Comissão Pastoral da Terra e o Conselho Indigenista Missionário, têm papel histórico na defesa de direitos no campo e dos povos indígenas no estado. A ausência de acordos prévios com as defesas civis limita sua integração aos planos de contingência. O fator articula-se a E5-F01, E2-F39, E1-F17 e E6-F15, e o plano popular deve prever cooperação que respeite a laicidade do Estado e a autonomia das organizações.",
      "fontes_citadas": [],
      "referencias_normativas": [],
      "periodos_citados": [],
      "fatores_relacionados": [
        "E5-F01",
        "E2-F39",
        "E1-F17",
        "E6-F15"
      ],
      "origem": {
        "codigo_documento": "E6-F16",
        "nome_no_documento": "Igrejas, grupos religiosos e outros coletivos que apoiam as situações de emergência",
        "eixo_documento": 6
      },
      "correspondencia": {
        "situacao": "validada",
        "tipo": "identificador_no_documento",
        "observacao": "ID, nome, ODS e definição de referência do documento idênticos ao cadastro."
      }
    }
  },
  "fatores_sem_diagnostico": [],
  "pendentes_validacao": []
};
