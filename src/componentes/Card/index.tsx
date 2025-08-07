
import { DarkMode } from "../../store/DarkMode";
import type { CardProps } from "../../Types";
import style from "./style.module.css";
export default function Card(card: CardProps) {
  const dark = DarkMode((state) => state.dark);

  return (
      <div className={`${card.imagemExemploBoolean ? style.containerIMG : style.container} ${!dark?style.containerClaro:null}`}>
        <div className={style.infos}>
          <div className={dark?style.imagem:style.imagemClaro}>
            <img src={card.image} alt="" />
          </div>
          <h3 className={dark?style.title:style.titleClaro}>{card.title}</h3>
          <p className={dark?style.description:style.descriptionClaro}>{card.description}</p>
        </div>
        {card.imagemExemploBoolean ? (
          <img className={style.imagemExemplo} src={card.imagemExemplo} alt="" />
        ) : (
          ""
        )}
      </div>
    
  );
}
