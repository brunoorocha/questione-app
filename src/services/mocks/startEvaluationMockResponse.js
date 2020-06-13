export const mockedResponse = [
  {
    id: 6370,
    answer: null,
    fk_evaluation_question_id: 640,
    fk_aluno_id: null,
    fk_aplication_evaluation_id: null,
    created_at: '2020-05-28T18:20:52.000000Z',
    updated_at: '2020-05-28T18:20:52.000000Z',
    fk_answers_head_id: 28,
    evaluation_question_without_correct: {
      id: 640,
      fk_evaluation_id: 106,
      fk_question_id: 721,
      created_at: '2020-05-27T17:21:26.000000Z',
      updated_at: '2020-05-27T17:21:26.000000Z',
      cancel: null,
      question_without_correct: {
        id: 721,
        base_text:
          '<p style="text-align: justify;"><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px;">O RUP (</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px;">Rational Unified Process</em><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px;">) &eacute; subdividido em Fases, que indica a &ecirc;nfase que &eacute; dada ao projeto em um dado instante, e em Fluxos de trabalho, que definem os grupos&nbsp; de atividades a serem realizadas ao longo das fases.</span></p>',
        stem:
          '<p style="text-align: justify;"><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">Considerando que no desenvolvimento de&nbsp;</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">software</em><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">&nbsp;utiliza-se t&eacute;cnicas de an&aacute;lise e projeto orientado a objetos e que as atividades sejam distribu&iacute;das de acordo com o RUP. Qual fluxo de trabalho &eacute; caracterizado pelo tipo de plataforma, pela rede, pela organiza&ccedil;&atilde;o dos diret&oacute;rios no qual ficar&atilde;o os artefatos e os c&oacute;digos fontes e pelo sistema de backup?</span></p>',
        validated: 1,
        fk_profile_id: 6,
        fk_skill_id: 7,
        fk_user_id: 2,
        created_at: '2020-02-21T00:19:54.000000Z',
        updated_at: '2020-02-21T20:51:25.000000Z',
        reference: null,
        fk_course_id: 1,
        course: {
          id: 1,
          initials: 'BSI',
          description: 'Sistemas de Informação - Bacharelado',
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2020-05-29T02:18:07.000000Z',
        },
        question_items_without_correct: [
          {
            id: 3536,
            description:
              '<p>Gest&atilde;o de Configura&ccedil;&atilde;o e Mudan&ccedil;as.</p>',
            fk_question_id: 721,
          },
          {
            id: 3537,
            description: '<p>Gest&atilde;o de Projetos.</p>',
            fk_question_id: 721,
          },
          {
            id: 3538,
            description: '<p>Ambiente.</p>',
            fk_question_id: 721,
          },
          {
            id: 3539,
            description: '<p>Implanta&ccedil;&atilde;o.</p>',
            fk_question_id: 721,
          },
          {
            id: 3540,
            description: '<p>Testes.</p>',
            fk_question_id: 721,
          },
        ],
        skill: {
          id: 7,
          description:
            'Avaliar a qualidade de processos e produtos de software para Sistemas de Informação',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:45.000000Z',
          updated_at: '2019-08-24T13:37:50.000000Z',
        },
        profile: {
          id: 6,
          description:
            'Criativo na proposição de soluções em sistemas de informação, buscando múltiplas perspectivas e alternativas nas diversas áreas do conhecimento',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2019-08-24T13:34:54.000000Z',
        },
        knowledge_objects: [
          {
            id: 13,
            description: 'Engenharia de Software',
            fk_course_id: 1,
            created_at: '2019-08-07T21:22:45.000000Z',
            updated_at: '2019-08-24T13:44:18.000000Z',
            pivot: {
              fk_question_id: 721,
              fk_knowledge_object: 13,
              created_at: '2020-02-21T20:51:25.000000Z',
              updated_at: '2020-02-21T20:51:25.000000Z',
            },
          },
        ],
        keywords: [
          {
            id: 52,
            keyword: 'Processo de Software',
            fk_question_id: 721,
            created_at: '2020-05-26T05:09:21.000000Z',
            updated_at: '2020-05-26T05:09:21.000000Z',
          },
          {
            id: 53,
            keyword: 'RUP',
            fk_question_id: 721,
            created_at: '2020-05-26T05:09:24.000000Z',
            updated_at: '2020-05-26T05:09:24.000000Z',
          },
        ],
      },
    },
  },
  {
    id: 6371,
    answer: null,
    fk_evaluation_question_id: 641,
    fk_aluno_id: null,
    fk_aplication_evaluation_id: null,
    created_at: '2020-05-28T18:20:52.000000Z',
    updated_at: '2020-05-28T18:20:52.000000Z',
    fk_answers_head_id: 28,
    evaluation_question_without_correct: {
      id: 641,
      fk_evaluation_id: 106,
      fk_question_id: 720,
      created_at: '2020-05-27T17:21:29.000000Z',
      updated_at: '2020-05-27T17:21:29.000000Z',
      cancel: null,
      question_without_correct: {
        id: 720,
        base_text:
          '<p style="text-align: justify;"><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">O RUP (</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">Rational Unified Process</em><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">) &eacute; subdividido em Fases, que indica a &ecirc;nfase que &eacute; dada ao projeto em um dado instante, e em Fluxos de trabalho, que definem os grupos&nbsp; de atividades a serem realizadas ao longo das fases.</span></p>',
        stem:
          '<p style="text-align: justify;"><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">Considerando que no desenvolvimento de&nbsp;</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">software</em><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">&nbsp;utiliza-se t&eacute;cnicas de an&aacute;lise e projeto orientado a objetos e que as atividades sejam distribu&iacute;das de acordo com o RUP. Qual disciplina &eacute; constante durante todo o ciclo de vida do&nbsp;<em>software</em>, elaborando reuni&otilde;es com RTF (Revis&atilde;o T&eacute;cnica Formal), garantindo a correta mudan&ccedil;a dos artefatos, al&eacute;m da necessidade de manter um bom relacionamento com o cliente?</span></p>',
        validated: 1,
        fk_profile_id: 6,
        fk_skill_id: 7,
        fk_user_id: 2,
        created_at: '2020-02-21T00:17:08.000000Z',
        updated_at: '2020-02-21T00:20:17.000000Z',
        reference: null,
        fk_course_id: 1,
        course: {
          id: 1,
          initials: 'BSI',
          description: 'Sistemas de Informação - Bacharelado',
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2020-05-29T02:18:07.000000Z',
        },
        question_items_without_correct: [
          {
            id: 3531,
            description: '<p>Implanta&ccedil;&atilde;o.</p>',
            fk_question_id: 720,
          },
          {
            id: 3532,
            description: '<p>Implementa&ccedil;&atilde;o.</p>',
            fk_question_id: 720,
          },
          {
            id: 3533,
            description: '<p>Ambiente.</p>',
            fk_question_id: 720,
          },
          {
            id: 3534,
            description: '<p>Gerenciamento de Projeto</p>',
            fk_question_id: 720,
          },
          {
            id: 3535,
            description:
              '<p>Gest&atilde;o de Configura&ccedil;&atilde;o e Mudan&ccedil;as.</p>',
            fk_question_id: 720,
          },
        ],
        skill: {
          id: 7,
          description:
            'Avaliar a qualidade de processos e produtos de software para Sistemas de Informação',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:45.000000Z',
          updated_at: '2019-08-24T13:37:50.000000Z',
        },
        profile: {
          id: 6,
          description:
            'Criativo na proposição de soluções em sistemas de informação, buscando múltiplas perspectivas e alternativas nas diversas áreas do conhecimento',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2019-08-24T13:34:54.000000Z',
        },
        knowledge_objects: [
          {
            id: 13,
            description: 'Engenharia de Software',
            fk_course_id: 1,
            created_at: '2019-08-07T21:22:45.000000Z',
            updated_at: '2019-08-24T13:44:18.000000Z',
            pivot: {
              fk_question_id: 720,
              fk_knowledge_object: 13,
              created_at: '2020-02-21T00:17:08.000000Z',
              updated_at: '2020-02-21T00:17:08.000000Z',
            },
          },
        ],
        keywords: [
          {
            id: 54,
            keyword: 'Processo de Software',
            fk_question_id: 720,
            created_at: '2020-05-26T05:09:52.000000Z',
            updated_at: '2020-05-26T05:09:52.000000Z',
          },
          {
            id: 55,
            keyword: 'RUP',
            fk_question_id: 720,
            created_at: '2020-05-26T05:09:55.000000Z',
            updated_at: '2020-05-26T05:09:55.000000Z',
          },
        ],
      },
    },
  },
  {
    id: 6372,
    answer: null,
    fk_evaluation_question_id: 642,
    fk_aluno_id: null,
    fk_aplication_evaluation_id: null,
    created_at: '2020-05-28T18:20:52.000000Z',
    updated_at: '2020-05-28T18:20:52.000000Z',
    fk_answers_head_id: 28,
    evaluation_question_without_correct: {
      id: 642,
      fk_evaluation_id: 106,
      fk_question_id: 719,
      created_at: '2020-05-27T17:21:31.000000Z',
      updated_at: '2020-05-27T17:21:31.000000Z',
      cancel: null,
      question_without_correct: {
        id: 719,
        base_text:
          '<p><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">O RUP (</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">Rational Unified Process</em><span style="caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">) &eacute; subdividido em Fases, que indica a &ecirc;nfase que &eacute; dada ao projeto em um dado instante, e em Fluxos de trabalho, que definem os grupos&nbsp; de atividades a serem realizadas ao longo das fases.</span></p>',
        stem:
          '<p><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">Considerando que no desenvolvimento de&nbsp;</span><em style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">software</em><span style="margin: 0px; padding: 0px; box-sizing: border-box; caret-color: #212529; color: #212529; font-family: Nunito, sans-serif; font-size: 14.399999618530273px; text-align: justify;">&nbsp;utiliza-se t&eacute;cnicas de an&aacute;lise e projeto orientado a objetos e que as atividades sejam distribu&iacute;das de acordo com o RUP, o momento em que &eacute; realizado a instala&ccedil;&atilde;o do sistema no ambiente do cliente &eacute;</span></p>',
        validated: 1,
        fk_profile_id: 6,
        fk_skill_id: 7,
        fk_user_id: 2,
        created_at: '2020-02-21T00:11:05.000000Z',
        updated_at: '2020-02-21T20:52:37.000000Z',
        reference: null,
        fk_course_id: 1,
        course: {
          id: 1,
          initials: 'BSI',
          description: 'Sistemas de Informação - Bacharelado',
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2020-05-29T02:18:07.000000Z',
        },
        question_items_without_correct: [
          {
            id: 3526,
            description: '<p>Implementa&ccedil;&atilde;o.</p>',
            fk_question_id: 719,
          },
          {
            id: 3527,
            description: '<p>Implanta&ccedil;&atilde;o.</p>',
            fk_question_id: 719,
          },
          {
            id: 3528,
            description: '<p>Testes.</p>',
            fk_question_id: 719,
          },
          {
            id: 3529,
            description:
              '<p>Ger&ecirc;ncia de Configura&ccedil;&atilde;o e Mudan&ccedil;as.</p>',
            fk_question_id: 719,
          },
          {
            id: 3530,
            description: '<p>Gerenciamento de Projetos.</p>',
            fk_question_id: 719,
          },
        ],
        skill: {
          id: 7,
          description:
            'Avaliar a qualidade de processos e produtos de software para Sistemas de Informação',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:45.000000Z',
          updated_at: '2019-08-24T13:37:50.000000Z',
        },
        profile: {
          id: 6,
          description:
            'Criativo na proposição de soluções em sistemas de informação, buscando múltiplas perspectivas e alternativas nas diversas áreas do conhecimento',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2019-08-24T13:34:54.000000Z',
        },
        knowledge_objects: [
          {
            id: 13,
            description: 'Engenharia de Software',
            fk_course_id: 1,
            created_at: '2019-08-07T21:22:45.000000Z',
            updated_at: '2019-08-24T13:44:18.000000Z',
            pivot: {
              fk_question_id: 719,
              fk_knowledge_object: 13,
              created_at: '2020-02-21T20:52:37.000000Z',
              updated_at: '2020-02-21T20:52:37.000000Z',
            },
          },
        ],
        keywords: [
          {
            id: 56,
            keyword: 'Processo de Software',
            fk_question_id: 719,
            created_at: '2020-05-26T05:10:05.000000Z',
            updated_at: '2020-05-26T05:10:05.000000Z',
          },
          {
            id: 57,
            keyword: 'RUP',
            fk_question_id: 719,
            created_at: '2020-05-26T05:10:10.000000Z',
            updated_at: '2020-05-26T05:10:10.000000Z',
          },
        ],
      },
    },
  },
  {
    id: 6373,
    answer: null,
    fk_evaluation_question_id: 643,
    fk_aluno_id: null,
    fk_aplication_evaluation_id: null,
    created_at: '2020-05-28T18:20:52.000000Z',
    updated_at: '2020-05-28T18:20:52.000000Z',
    fk_answers_head_id: 28,
    evaluation_question_without_correct: {
      id: 643,
      fk_evaluation_id: 106,
      fk_question_id: 718,
      created_at: '2020-05-27T17:21:34.000000Z',
      updated_at: '2020-05-27T17:21:34.000000Z',
      cancel: null,
      question_without_correct: {
        id: 718,
        base_text:
          '<p>Um fluxo de processo, descreve como s&atilde;o organizadas as atividades metodol&oacute;gicas, bem como as a&ccedil;&otilde;es e tarefas que ocorrem dentro de cada atividadde.</p>\r\n<p style="text-align: right;"><span style="font-family: \'courier new\', courier, monospace; font-size: 12px;">PRESSMAN, R. S. &nbsp;<strong>Engenharia de Software: uma abordagem profissional. </strong>8 ed. porto Alegre: AMGH, 2016.</span></p>',
        stem:
          '<p>A seguir s&atilde;o apresentados dois modelos de processo. A primeira figura apresenta o modelo Incremental e a segunda figura apersenta o modelo de Prototipa&ccedil;&atilde;o.</p>\r\n<p><img style="display: block; margin-left: auto; margin-right: auto;" src="/uploads/incremental.png" alt="" width="331" height="187" /></p>\r\n<p><img style="display: block; margin-left: auto; margin-right: auto;" src="/uploads/prototipaccao.png" alt="" width="340" height="313" /></p>\r\n<p style="text-align: right;"><span style="font-size: 12px;"><span style="font-family: \'courier new\', courier, monospace; text-align: right;">PRESSMAN, R. S. &nbsp;</span><strong style="font-family: \'courier new\', courier, monospace; text-align: right;">Engenharia de Software: uma abordagem profissional.&nbsp;</strong><span style="font-family: \'courier new\', courier, monospace; text-align: right;">8 ed. porto Alegre: AMGH, 2016.</span></span></p>\r\n<p style="text-align: left;">&nbsp;</p>\r\n<p style="text-align: left;"><span style="font-size: 14px; font-family: verdana, geneva, sans-serif;"><span style="text-align: right;">Marque a alternativa que apresenta os fluxos de processo correspondente aos dois modelos.</span></span></p>',
        validated: 1,
        fk_profile_id: 6,
        fk_skill_id: 7,
        fk_user_id: 2,
        created_at: '2020-02-20T23:17:08.000000Z',
        updated_at: '2020-05-29T23:16:04.000000Z',
        reference: null,
        fk_course_id: 1,
        course: {
          id: 1,
          initials: 'BSI',
          description: 'Sistemas de Informação - Bacharelado',
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2020-05-29T02:18:07.000000Z',
        },
        question_items_without_correct: [
          {
            id: 3521,
            description:
              '<p>O modelo de processo Incremental possui fluxo evolucion&aacute;rio. O modelo de processo Prototipa&ccedil;&atilde;o possui fluxo de processo paralelo e iterativo.</p>',
            fk_question_id: 718,
          },
          {
            id: 3522,
            description:
              '<p>O modelo de processo Incremental possui evolucion&aacute;rio. O modelo de processo Prototipa&ccedil;&atilde;o possui fluxo de processo linear e interativo.</p>',
            fk_question_id: 718,
          },
          {
            id: 3523,
            description:
              '<p>O modelo de processo Incremental possui fluxo linear e interativo. O modelo de processo Prototipa&ccedil;&atilde;o possui fluxo de processo paralelo.</p>',
            fk_question_id: 718,
          },
          {
            id: 3524,
            description:
              '<p>O modelo de processo Incremental possui fluxo interativo. O modelo de processo Prototipa&ccedil;&atilde;o possui fluxo de processo evolucion&aacute;rio.</p>',
            fk_question_id: 718,
          },
          {
            id: 3525,
            description:
              '<p>O modelo de processo Incremental possui fluxo linear e paralelo. O modelo de processo Prototipa&ccedil;&atilde;o possui fluxo de processo evolucion&aacute;rio.</p>',
            fk_question_id: 718,
          },
        ],
        skill: {
          id: 7,
          description:
            'Avaliar a qualidade de processos e produtos de software para Sistemas de Informação',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:45.000000Z',
          updated_at: '2019-08-24T13:37:50.000000Z',
        },
        profile: {
          id: 6,
          description:
            'Criativo na proposição de soluções em sistemas de informação, buscando múltiplas perspectivas e alternativas nas diversas áreas do conhecimento',
          fk_course_id: 1,
          created_at: '2019-08-07T21:22:44.000000Z',
          updated_at: '2019-08-24T13:34:54.000000Z',
        },
        knowledge_objects: [
          {
            id: 13,
            description: 'Engenharia de Software',
            fk_course_id: 1,
            created_at: '2019-08-07T21:22:45.000000Z',
            updated_at: '2019-08-24T13:44:18.000000Z',
            pivot: {
              fk_question_id: 718,
              fk_knowledge_object: 13,
              created_at: '2020-02-20T23:19:46.000000Z',
              updated_at: '2020-02-20T23:19:46.000000Z',
            },
          },
        ],
        keywords: [
          {
            id: 59,
            keyword: 'Fluxo de Processo',
            fk_question_id: 718,
            created_at: '2020-05-26T05:12:00.000000Z',
            updated_at: '2020-05-26T05:12:00.000000Z',
          },
          {
            id: 62,
            keyword: 'Modelos de Processo',
            fk_question_id: 718,
            created_at: '2020-05-26T05:13:07.000000Z',
            updated_at: '2020-05-26T05:13:07.000000Z',
          },
        ],
      },
    },
  },
];
