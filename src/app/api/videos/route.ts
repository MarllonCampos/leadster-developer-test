import { VideoInfo } from '@/types/videos';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const VIDEOS: Array<VideoInfo> = [
  {
    title: 'Aprenda a criar APIs RESTful com Node.js',
    description:
      'Neste vídeo, mostramos como criar APIs RESTful usando o Node.js e Express, abordando os principais conceitos e práticas recomendadas.',
    downloads: [
      {
        name: 'Exemplo de Código Node.js.zip',
        type: 'zip',
      },
      {
        name: 'Documentação da API.ppt',
        type: 'ppt',
      },
    ],
    created_at: new Date('2023-07-02'),
    type: 'geracao-de-leads',
  },
  {
    title: 'Desvendando os segredos do CSS Grid',
    description:
      'Explore os recursos poderosos do CSS Grid e aprenda a criar layouts complexos e responsivos para suas aplicações web.',
    downloads: [
      {
        name: 'Guia do CSS Grid.ppt',
        type: 'ppt',
      },
      {
        name: 'Exemplos de Layouts HTML e CSS.zip',
        type: 'zip',
      },
    ],
    created_at: new Date('2023-07-10'),
    type: 'midia-paga',
  },
  {
    title: 'A importância da usabilidade na experiência do usuário',
    description:
      'Descubra como garantir uma boa usabilidade em seu site ou aplicativo, proporcionando uma experiência fluida e intuitiva para os usuários.',
    downloads: [
      {
        name: 'Checklist de Usabilidade.ppt',
        type: 'ppt',
      },
      {
        name: 'Apresentação de Slides.ppt',
        type: 'ppt',
      },
    ],
    created_at: new Date('2023-08-20'),
    type: 'agencias',
  },
  {
    title: 'Introdução ao GraphQL',
    description:
      'Aprenda os fundamentos do GraphQL e como utilizá-lo para criar APIs eficientes e flexíveis para suas aplicações web.',
    downloads: [
      {
        name: 'Exemplo de Schema GraphQL.doc',
        type: 'doc',
      },
    ],
    created_at: new Date('2023-09-05'),
    type: 'chatbot',
  },
  {
    title: 'Desenvolvimento mobile com React Native',
    description:
      'Explore o desenvolvimento de aplicativos móveis multiplataforma usando o framework React Native, compartilhando código entre iOS e Android.',
    downloads: [
      {
        name: 'Exemplo de Aplicativo React Native.zip',
        type: 'zip',
      },
      {
        name: 'Lista de Bibliotecas Recomendadas.doc',
        type: 'doc',
      },
    ],
    created_at: new Date('2023-10-15'),
    type: 'marketing-digital',
  },
  {
    title: 'Estratégias avançadas de SEO para melhorar seu ranking',
    description:
      'Descubra técnicas avançadas de otimização para mecanismos de busca e aumente o ranking do seu site nos resultados de pesquisa.',
    downloads: [
      {
        name: 'Guia Avançado de SEO.ppt',
        type: 'ppt',
      },
      {
        name: 'Lista de Ferramentas de SEO.doc',
        type: 'doc',
      },
      {
        name: 'Ferramentas SEO.zip',
        type: 'zip',
      },
      {
        name: 'Documentação da SpreadSheet.xls',
        type: 'xls',
      },
    ],
    created_at: new Date('2023-11-25'),
    type: 'agencias',
  },
  {
    title: 'Como aumentar sua Geração de Leads feat. Traktor',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur, aperiam ab autem reiciendis, inventore, minima nam porro fugiat aliquam provident iusto consequatur quae praesentium ut fugit error placeat voluptas.',
    downloads: [
      {
        name: 'SpreadSheet.xls',
        type: 'xls',
      },
    ],
    created_at: new Date('2022-01-01'),
    type: 'geracao-de-leads',
  },
  {
    title: 'Introdução ao React.js',
    description:
      'Aprenda os conceitos básicos do React.js e como construir interfaces de usuário interativas e reativas.',
    downloads: [
      {
        name: 'Código-fonte.zip',
        type: 'zip',
      },
    ],
    created_at: new Date('2022-02-15'),
    type: 'midia-paga',
  },
  {
    title: 'Desenvolvimento web responsivo',
    description:
      'Descubra as melhores práticas para criar sites responsivos que se adaptam a diferentes dispositivos e tamanhos de tela.',
    downloads: [
      {
        name: 'Guia de Design Responsivo.ppt',
        type: 'ppt',
      },
    ],
    created_at: new Date('2022-03-10'),
    type: 'chatbot',
  },
  {
    title: 'Aprenda TypeScript em 10 minutos',
    description: 'Um tutorial rápido para começar a usar TypeScript em seus projetos JavaScript.',
    downloads: [
      {
        name: 'Cheatsheet do TypeScript.ppt',
        type: 'ppt',
      },
    ],
    created_at: new Date('2022-04-20'),
    type: 'agencias',
  },
  {
    title: 'Dicas para otimizar o desempenho do seu aplicativo',
    description:
      'Melhore a velocidade e a eficiência do seu aplicativo seguindo essas dicas de otimização de desempenho.',
    downloads: [
      {
        name: 'Checklist de Otimização.ppt',
        type: 'ppt',
      },
    ],
    created_at: new Date('2022-05-05'),
    type: 'marketing-digital',
  },
];

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = searchParams.get('filter');
  const order = searchParams.get('order');
  let formattedVideos = VIDEOS;

  if (order) {
    formattedVideos.sort((a, b) => {
      const timeDiff =
        order === 'desc'
          ? b.created_at.getTime() - a.created_at.getTime()
          : a.created_at.getTime() - b.created_at.getTime();
      return timeDiff;
    });
  }

  if (filter == 'all') return NextResponse.json(formattedVideos, { status: 200 });

  if (filter) {
    formattedVideos = formattedVideos.filter((video) => video.type === filter);
  }

  return NextResponse.json(formattedVideos, { status: 200 });
}
