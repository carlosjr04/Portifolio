import style from "./style.module.css";
import { useEffect, useState } from "react";
import CardProjeto from "../CardProjeto";
import type { Card, PillUnity } from "../../Types";
import { DarkMode } from "../../store/DarkMode";

let pils: PillUnity[] = [
  {
    id: 1,
    nome: "React",
    selecionado: false,
  },
  {
    id: 2,
    nome: "Javascript",
    selecionado: false,
  },
  { id: 3, nome: "CSS", selecionado: false },
  {
    id: 4,
    nome: "Python",
    selecionado: false,
  },
  {
    id: 5,
    nome: "Java",
    selecionado: false,
  },
];

const cardsProjetos: Card[] = [
  {
    id: 1,
    nome: "Pagina individual",
    linguagem: ["HTML", "CSS"],
    link: "https://github.com/carlosjr04/Pagina-individual-DOM",
    imagem: "/individual.png",
  },
  {
    id: 2,
    nome: "Lobinho",
    linguagem: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/carlosjr04/Adote-um-lobinho",
    imagem: "/lobinho.png",
  },
  {
    id: 3,
    nome: "Blog",
    linguagem: ["React"],
    link: "https://github.com/carlosjr04/Blog-React",
    imagem: "/Blog.png",
  },
  {
    id: 4,
    nome: "Steam",
    linguagem: ["React", "Java"],
    link: "https://github.com/carlosjr04/Projeto-Steam",
    imagem: "/SteamImg.png",
  },
  {
    id: 5,
    nome: "Livraria",
    linguagem: ["React"],
    link: "https://github.com/carlosjr04/Livraria-Next",
    imagem: "/livraria.png",
  },
  {
    id: 6,
    nome: "Pijaminhas",
    linguagem: ["React", "NodeJS"],
    link: "https://github.com/carlosjr04/Pijama_projeto_final",
    imagem: "/pijama.png",
  },
  {
    id: 7,
    nome: "Administrador de cursos",
    linguagem: ["Java"],
    link: "https://github.com/carlosjr04/Curso-em-Java",
    imagem: "/curso.png",
  },
  {
    id: 8,
    nome: "Samurai Mitology War",
    linguagem: ["Python"],
    link: "https://github.com/carlosjr04/Samurai-Mitology-War",
    imagem: "/samurai.png",
  },
];
export default function Projeto() {
  const [PilsList, setPilsList] = useState<PillUnity[]>(pils);
  const [cardsTotal] = useState<Card[]>(cardsProjetos);
  const [cards, setCards] = useState<Card[]>(cardsProjetos);
  const [verTudo, setVerTudo] = useState<boolean>(true);
  useEffect(() => {
    let cardsTemp: Card[] = [];
    for (let i = 0; i < 6; i++) {
      cardsTemp.push(cardsTotal[i]);
    }
    setCards(cardsTemp);
  }, []);

  function AlterarBotao(id: number): void {
    const novoPill = PilsList.map((pill) => ({
      ...pill,
      selecionado:
        pill.id === id ? (pill.selecionado === false ? true : false) : false,
    }));
    setPilsList(novoPill);
    const novoCards = cardsProjetos.filter((card) => {
      const pillSelecionado = novoPill.find((pill) => pill.selecionado);
      if (!pillSelecionado) return true;
      return card.linguagem.filter(
        (linguagem) => linguagem == pillSelecionado.nome
      ).length > 0;
    });
    if (novoCards.length >= 6) {
      setVerTudo(true);
      let cardsTemp: Card[] = [];
      for (let i = 0; i < 6; i++) {
        cardsTemp.push(cardsTotal[i]);
      }
      setCards(cardsTemp);
    } else {
      setCards(novoCards);
      setVerTudo(false);
    }
  }

  function VerTudo(): void {
    let cardsTemp: Card[] = [];
    for (let i = 0; i < cardsTotal.length; i++) {
      if (cardsTotal[i] === undefined) break;
      cardsTemp.push(cardsTotal[i]);
    }
    setCards(cardsTemp);
    setVerTudo(false);
  }
  const dark = DarkMode((state) => state.dark);

  return (
    <div>
      <div className={dark ? style.textos : style.textosClaro}>
        <h1>Projetos</h1>
        <h3>Um pouco do meu trabalho</h3>
      </div>

      <div className={style.pills}>
        {PilsList.map((pill) => (
          <button
            key={pill.id}
            onClick={() => AlterarBotao(pill.id)}
            className={
              !dark
                ? pill.selecionado
                  ? style.pillSelecionado
                  : style.pillClaro
                : pill.selecionado
                ? style.pillSelecionado
                : style.pill
            }
          >
            {pill.nome}
          </button>
        ))}
      </div>

      <div className={style.cards}>
        {cards.map((card) => (
          <CardProjeto
            key={card.id}
            id={card.id}
            imagem={card.imagem}
            linguagem={card.linguagem}
            link={card.link}
            nome={card.nome}
          />
        ))}
      </div>
      {verTudo ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => VerTudo()}
            className={dark ? style.verTudo : style.verTudoClaro}
          >
            Ver tudo
          </button>
        </div>
      ) : null}
    </div>
  );
}
