import { Props } from '@/modules/servicos/servicos.interface'
import { AiOutlineApi, AiOutlineBuild, AiOutlineCode, AiOutlineFileSearch, AiOutlineMobile, AiOutlineSync } from 'react-icons/ai'
import { MdAutoGraph, MdCloud, MdOutlineAppShortcut, MdUpdate } from 'react-icons/md'
import { FaPeopleLine } from 'react-icons/fa6'
import { BsGraphUpArrow } from 'react-icons/bs'
import { SiLibreofficedraw } from 'react-icons/si'
import { RiComputerLine } from 'react-icons/ri'
import { MdDesignServices } from 'react-icons/md'
import { IoCloudDoneOutline } from 'react-icons/io5'
import { PiCodeBlockDuotone } from 'react-icons/pi'

export const servicesData: Props[] = [
  {
    type: 'PRIMARY',
    title: 'Consultoria',
    slug: 'consultoria',
    metaDescription: 'Consultoria estratégica da D2F: soluções personalizadas para otimizar processos e transformar desafios em vantagens competitivas.',
    icon: <BsGraphUpArrow size={56} color="var(--brand)" />,
    content: [
      'Na D2F, nossa consultoria é o ponto de partida para o sucesso de qualquer projeto. Oferecemos uma análise detalhada das necessidades do seu negócio, identificando oportunidades de melhoria e inovação.',
      'Nosso foco é fornecer soluções estratégicas que alinhem tecnologia e negócios, garantindo resultados expressivos e duradouros. Com a nossa experiência, transformamos desafios em vantagens competitivas, ajudando sua empresa a alcançar novos patamares de eficiência e produtividade.',
      'Seja para otimizar processos internos, implementar novas tecnologias ou desenvolver estratégias de crescimento, nossa consultoria é uma parceira essencial para o sucesso sustentável da sua empresa.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'Criação de software',
    slug: 'criacao-de-software',
    metaDescription: 'Criação de software personalizada pela D2F: soluções robustas, escaláveis e alinhadas com as necessidades do seu negócio.',
    icon: <AiOutlineCode size={56} color="var(--brand)" />,
    content: [
      'A D2F se destaca na criação de software personalizado, desenhado para atender às demandas específicas de cada cliente. Desenvolvemos soluções robustas e escaláveis, que proporcionam alto desempenho e fácil manutenção.',
      'Nossos softwares são projetados para otimizar processos, aumentar a produtividade e gerar valor para o seu negócio. Utilizando as mais modernas tecnologias e metodologias ágeis, entregamos produtos que não só atendem, mas superam as expectativas.',
      'Trabalhamos lado a lado com nossos clientes durante todo o processo de desenvolvimento, garantindo que cada solução de software seja perfeitamente alinhada com seus objetivos estratégicos e operacionais.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'Criação de sites',
    slug: 'criacao-de-sites',
    metaDescription: 'Desenvolvimento de sites pela D2F: design inovador, alta performance e otimização para SEO.',
    icon: <RiComputerLine size={56} color="var(--brand)" />,
    content: [
      'Desenvolvemos sites que combinam design inovador com alta performance. Na D2F, entendemos que um site é a porta de entrada para o seu negócio, por isso, criamos páginas responsivas, otimizadas para SEO e com uma experiência de usuário impecável.',
      'Seja para uma presença institucional ou um e-commerce, nossos sites são projetados para atrair, engajar e converter visitantes em clientes. O resultado é uma plataforma digital que reflete a identidade da sua marca e gera resultados concretos.',
      'Utilizamos as melhores práticas de desenvolvimento web e design, garantindo que seu site seja não apenas bonito e funcional, mas também seguro, acessível e fácil de gerenciar.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'Criação de aplicativos',
    slug: 'criacao-de-aplicativos',
    metaDescription: 'Desenvolvimento de aplicativos móveis pela D2F: conecte-se com seu público-alvo através de soluções mobile eficientes.',
    icon: <MdOutlineAppShortcut size={56} color="var(--brand)" />,
    content: [
      'Na era mobile, estar presente na palma da mão dos seus clientes é essencial. A D2F é especialista na criação de aplicativos móveis que aliam funcionalidade e usabilidade.',
      'Desenvolvemos apps para diversas plataformas, sempre com foco em entregar uma experiência intuitiva e envolvente. Nossos aplicativos são criados com tecnologias de ponta, garantindo performance, segurança e escalabilidade.',
      'Seja para iOS, Android ou outras plataformas, nossos aplicativos são projetados para maximizar o engajamento do usuário e proporcionar uma experiência de uso consistente e satisfatória.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'UX Research',
    slug: 'ux-research',
    metaDescription: 'Pesquisa de UX da D2F: entenda o comportamento do usuário e crie experiências digitais de sucesso.',
    icon: <SiLibreofficedraw size={56} color="var(--brand)" />,
    content: [
      'Entender o comportamento do usuário é fundamental para criar experiências digitais de sucesso. Na D2F, realizamos pesquisas de UX (User Experience) que fornecem insights valiosos sobre as necessidades e expectativas do seu público.',
      'Nosso objetivo é garantir que cada interação seja agradável e eficiente, resultando em maior satisfação e lealdade dos clientes. Com uma abordagem baseada em dados, otimizamos cada detalhe da experiência do usuário, desde a navegação até a conversão.',
      'Utilizamos uma combinação de metodologias qualitativas e quantitativas para entender profundamente as motivações dos usuários e assim criar interfaces que realmente façam a diferença no seu negócio.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'Design de interface',
    slug: 'design-de-interface',
    metaDescription: 'Design de interface pela D2F: crie interfaces que encantam e facilitam a interação com o usuário.',
    icon: <MdDesignServices size={56} color="var(--brand)" />,
    content: [
      'O design de interface é onde a forma encontra a função, e na D2F, fazemos isso com maestria. Criamos interfaces que são ao mesmo tempo esteticamente agradáveis e altamente funcionais.',
      'Nossos designers trabalham em estreita colaboração com a equipe de desenvolvimento para garantir que cada elemento da interface contribua para uma experiência de usuário intuitiva e eficaz.',
      'Acreditamos que uma boa interface não é apenas bonita, mas também prática e acessível, proporcionando uma experiência de uso agradável e sem frustrações.',
    ],
  },
  {
    type: 'PRIMARY',
    title: 'Arquitetura de sistemas',
    slug: 'arquitetura-de-sistemas',
    metaDescription: 'Arquitetura de sistemas pela D2F: construa infraestruturas robustas e escaláveis para o futuro do seu negócio.',
    icon: <AiOutlineBuild size={56} color="var(--brand)" />,
    content: [
      'A arquitetura de sistemas é a espinha dorsal de qualquer solução tecnológica, e na D2F, tratamos isso com a seriedade que merece. Desenhamos arquiteturas robustas e escaláveis que suportam o crescimento e a evolução do seu negócio.',
      'Nossa equipe é especializada em criar infraestruturas seguras, eficientes e prontas para o futuro, garantindo que seus sistemas estejam sempre disponíveis e funcionando com o máximo desempenho.',
      'Trabalhamos com uma abordagem holística, considerando tanto as necessidades atuais quanto as futuras, para construir uma arquitetura de sistemas que seja flexível e capaz de se adaptar às mudanças do mercado.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Outsourcing de desenvolvedores',
    slug: 'outsourcing-de-desenvolvedores',
    metaDescription: 'Outsourcing de desenvolvedores da D2F: aumente a capacidade da sua equipe com profissionais qualificados e especializados.',
    icon: <FaPeopleLine size={56} color="var(--brand)" />,
    content: [
      'A D2F oferece serviços de outsourcing de desenvolvedores para reforçar a sua equipe com profissionais altamente qualificados. Seja para projetos de curto prazo ou para uma parceria contínua, nossos desenvolvedores são selecionados por sua expertise técnica e capacidade de adaptação ao seu ambiente de trabalho.',
      'Com o outsourcing, sua empresa pode expandir a capacidade de desenvolvimento sem os custos e desafios de recrutamento, mantendo o foco nos objetivos estratégicos enquanto nós cuidamos da entrega técnica.',
      'Cada profissional que colocamos à disposição é treinado para se integrar rapidamente à sua equipe, garantindo que os projetos avancem sem interrupções e com a qualidade que você espera.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Otimização de Legado',
    slug: 'otimizacao-de-legado',
    metaDescription: 'Otimização de sistemas legados pela D2F: modernize e melhore a performance de suas aplicações existentes.',
    icon: <MdUpdate size={56} color="var(--brand)" />,
    content: [
      'Na D2F, entendemos que muitos negócios ainda dependem de sistemas legados para suas operações diárias. Oferecemos serviços de otimização de legado, que visam modernizar e melhorar a performance de suas aplicações existentes.',
      'Nosso objetivo é prolongar a vida útil do seu software, tornando-o mais eficiente, seguro e adaptado às demandas atuais, sem a necessidade de um investimento completo em uma nova plataforma.',
      'Realizamos uma análise detalhada do seu ambiente legado e aplicamos as melhores práticas de modernização, garantindo que suas operações continuem estáveis e que seu sistema esteja preparado para os desafios futuros.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Migração de Cloud',
    slug: 'migracao-de-cloud',
    metaDescription: 'Migração de Cloud pela D2F: transição segura e eficiente para ambientes em nuvem, garantindo escalabilidade e performance.',
    icon: <IoCloudDoneOutline size={56} color="var(--brand)" />,
    content: [
      'A migração para a nuvem é um passo estratégico para empresas que buscam escalabilidade, flexibilidade e redução de custos. Na D2F, oferecemos um serviço completo de migração de cloud, garantindo que a transição seja segura, eficiente e sem interrupções.',
      'Analisamos cuidadosamente a sua infraestrutura atual e planejamos cada etapa da migração, minimizando riscos e garantindo a continuidade dos negócios durante o processo.',
      'Nossa equipe especializada trabalha com as principais plataformas de cloud, como AWS, Azure e Google Cloud, para oferecer uma solução que atenda às suas necessidades específicas e prepare sua empresa para o futuro digital.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Análise de Código',
    slug: 'analise-de-codigo',
    metaDescription: 'Análise de código da D2F: identifique e corrija problemas para melhorar a qualidade e a performance do seu software.',
    icon: <PiCodeBlockDuotone size={56} color="var(--brand)" />,
    content: [
      'A D2F oferece serviços especializados em análise de código para garantir a qualidade e a eficiência do seu software. Nossos especialistas revisam seu código-fonte, identificam problemas e fornecem recomendações para melhorias.',
      'A análise inclui a identificação de bugs, problemas de desempenho e violações de boas práticas de desenvolvimento. Com nossas recomendações, você pode aprimorar a performance, segurança e manutenibilidade do seu sistema.',
      'Trabalhamos para otimizar seu código, tornando-o mais robusto e fácil de manter, garantindo que seu software esteja pronto para enfrentar novos desafios e se adaptar às mudanças no mercado.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Automação de Processos',
    slug: 'automacao-de-processos',
    metaDescription: 'Automação de processos da D2F: aumente a eficiência e reduza erros com soluções automatizadas para suas operações.',
    icon: <MdAutoGraph size={56} color="var(--brand)" />,
    content: [
      'A automação de processos é essencial para aumentar a eficiência e reduzir erros nas operações diárias. Na D2F, desenvolvemos soluções personalizadas que automatizam tarefas repetitivas e processos complexos.',
      'Nosso objetivo é simplificar e otimizar suas operações, permitindo que sua equipe se concentre em atividades de maior valor. Implementamos ferramentas e sistemas que integram e automatizam fluxos de trabalho, melhorando a produtividade e a precisão.',
      'Com a automação, você pode reduzir custos operacionais, melhorar a consistência dos processos e garantir que seu negócio funcione de forma mais ágil e eficiente.',
    ],
  },
  {
    type: 'SECONDARY',
    title: 'Integração de APIs',
    slug: 'integracao-de-apis',
    metaDescription: 'Integração de APIs pela D2F: conecte diferentes sistemas e serviços para melhorar a comunicação e a funcionalidade do seu software.',
    icon: <AiOutlineApi size={56} color="var(--brand)" />,
    content: [
      'A integração de APIs é crucial para conectar diferentes sistemas e serviços, ampliando as funcionalidades do seu software. Na D2F, oferecemos serviços de integração que permitem uma comunicação fluida e eficiente entre diversas plataformas.',
      'Nosso time de especialistas realiza a integração de APIs com precisão, garantindo que os dados sejam trocados de forma segura e eficiente. A integração é projetada para ser escalável e adaptável às suas necessidades específicas.',
      'Com uma integração bem executada, você melhora a interoperabilidade entre sistemas, otimizando processos e proporcionando uma experiência mais coesa para os usuários finais.',
    ],
  }
  ,
]
