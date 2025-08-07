
import style from "./style.module.css";
import Card from "../Card";
import type { CardProps } from "../../Types";
import { DarkMode } from "../../store/DarkMode";
const cards: CardProps[] = [
  {
    id: 1,
    title: "React e Expanções",
    description:
      "Conhecimento avançado em React e suas principais ferramentas, com experiência na construção de interfaces dinâmicas e componentizadas. Familiaridade com as extensões mais utilizadas do ecossistema, como React Router para navegação e Next.js para renderização do lado do servidor e otimização de desempenho.",
    image: "/react.png",
    alt: "Imagem do logo do React",
    imagemExemploBoolean: false,
    imagemExemplo: "/react.png",
  },
  {
    id: 2,
    title: "Typescript",
    description:
      "Conhecimento avançado em TypeScript, com sólida compreensão da tipagem estática e dos principais recursos da linguagem. Familiaridade com ES6+ e suas funcionalidades modernas, como arrow functions, destructuring, módulos, promises e classes, além do uso de ferramentas do ecossistema JavaScript moderno.",
    image: "/tss.png",
    alt: "Imagem do logo do JavaScript",
    imagemExemploBoolean: false,
    imagemExemplo: "/react.png",
  },
  {
    id: 3,
    title: "HTML e CSS",
    description:
      "Conhecimento avançado em HTML e CSS, com domínio de HTML5 e CSS3, aplicando práticas modernas de semântica, acessibilidade e performance. Experiência no uso de ferramentas e técnicas como Flexbox, Grid Layout, animações, variáveis CSS e pré-processadores como SASS.",
    image: "/html.png",
    alt: "Imagem do logo do HTML e CSS",
    imagemExemploBoolean: false,
    imagemExemplo: "/react.png",
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Conhecimento avançado em web design, com foco em criação de interfaces modernas, funcionais e visualmente atrativas. Experiência sólida em design responsivo, garantindo compatibilidade e usabilidade em diferentes dispositivos e tamanhos de tela.",
    image: "/figma-icon.png",
    alt: "Imagem do logo do design responsivo",
    imagemExemploBoolean: false,
    imagemExemplo: "/web_IMAGE.png",
  },
  {
    id: 5,
    title: "Node JS",
    description:
      "Conhecimento avançado em Node.js, com sólida experiência no desenvolvimento de aplicações utilizando o framework Express. Domínio de suas principais ferramentas e middlewares, além de boas práticas de estruturação de rotas, tratamento de erros e integração com bancos de dados e APIs externas.",
    image: "/nodejs-logo.png",
    alt: "Imagem do logo do nodejs",
    imagemExemploBoolean: false,
    imagemExemplo: "/react.png",
  },
];
export default function Serviços() {
  
  const dark = DarkMode((state) => state.dark);

  return (
    <div className={dark?style.container:style.containerClaro}>
      <h1 className={dark?style.title:style.titleClaro}>O que faço</h1>
      <h3 className={dark?style.description:style.descriptionClaro}>Meus serviços</h3>
      <div className={style.cards}>
        {cards.map((card) => (
          <Card
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
            imagemExemploBoolean={card.imagemExemploBoolean}
            imagemExemplo={card.imagemExemplo}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}
