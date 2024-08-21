import { Props } from '@/components/projects/components/card/card.interface'

export const projects:Props[] = [
  {
    title: 'Whirlpool Corporation',
    imgSrc: '/project-imgs/whirlpool.jpg',
    projectLink: 'https://www.whirlpool.com',
    tech: ['PHP', 'POO', 'NodeJS', 'SCSS', 'MySQL'],
    description:
      'Desenvolvemos uma solução inovadora, onde é conhecido como escola de logística, que otimiza o controle de transportadores, facilitando a gestão de comunicação, documentos, treinamentos e rastreamento, garantindo eficiência e segurança .',
  },
  {
    title: '13 Registro de Imóveis de SP',
    imgSrc: '/project-imgs/13risp.jpg',
    projectLink: 'https://13registro.com.br',
    tech: ['TypeScript', 'NextJs', 'NestJS', 'Prisma', 'SCSS'],
    description:
      'Desenvolvemos um portal exclusivo para o 13 Registro de Imóveis de São Paulo, com busca avançada de prenotações, requerimentos de forma online e acesso restrito para usuários autorizados, garantindo segurança, praticidade e eficiência na gestão de informações.',
  },
  {
    title: 'The Hunch Box',
    imgSrc: '/project-imgs/thb.jpg',
    projectLink: 'https://www.instagram.com/thehunchbox/?hl=en',
    tech: ['VueJS', 'TypeScript', 'NodeJS'],
    description:
      'Sistema para delivery de roupas, onde os clientes escolham e recebam peças em casa sem compromisso de compra. A plataforma oferece uma gestão online prática para provas e escolhas, proporcionando uma experiência personalizada e sem complicações.',
  },
  {
    title: 'SPG Peças em Zamack',
    imgSrc: '/project-imgs/spg.jpg',
    projectLink: 'https://spgzamack.com.br',
    tech: ['TypeScript', 'NodeJS', 'Prisma', 'SCSS', 'PHP', 'Laravel', 'MySQL'],
    description:
      'Criamos um site exclusivo para fabricantes especializados em injeção de micropeças em zamac, com área dedicada para solicitação de orçamentos online, tornando o processo de compra mais ágil e acessível, fomentando novas parcerias e produtos.',
  }, {
    title: 'MathPulse',
    imgSrc: '/project-imgs/mathpulse.jpg',
    projectLink: 'https://mathpulse.vercel.app',
    tech: ['TypeScript', 'NextJS', 'SCSS'],
    description:
      'Criamos uma ferramenta online e gratuíta onde números aleatórios aparecem e desafiam você a somá-los e comparar com o resultado final. Com dificuldade parametrizada como tempo de exibição, dígitos e quantidade de números sorteados.',
  }, {
    title: 'Bora realizar?',
    imgSrc: '/project-imgs/banner-default.png',
    projectLink: 'https://d2f.dev/#contato',
    tech: ['Surpreenda-se', 'Ideia?', 'Realize'],
    description:
      'Está pronto para transformar sua ideia em um projeto incrível? Entre em contato conosco para discutir como podemos desenvolver uma solução personalizada para você. nossa equipe estará pronta para ajudar a trazer sua visão à vida!',
  },
]