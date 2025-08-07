
import type { Card } from "../../Types";
import style from "./style.module.css"
import seta from "../../assets/link.png"


export default function CardProjeto(card:Card) {
    function exibirLinguagens(){
      const linguas:string[] = []
      card.linguagem.map((linguagens)=>(
        linguas.push(linguagens)
      )) 
      return linguas.join(", ")
    }
    return (
      <div className={style.card}>
        <img  className={card.nome=="Administrador de cursos"?style.imagemCurso:style.imagem} src={card.imagem} alt="" />
        <div className={style.footer}>
            <div className={style.textos}>
                <h3>{card.nome}</h3>
                  <p>Utilizado:{exibirLinguagens()}</p>
                
                
            </div>
            <a target="_blank" href={card.link}><button className={style.botao}><img src={seta} alt="" /></button></a>
        </div>
      </div>
    );
  }
  