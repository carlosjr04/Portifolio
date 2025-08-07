
import { DarkMode } from "../../store/DarkMode";
import style from "./style.module.css";
export default function HomePage() {
  const dark = DarkMode((state) => state.dark);
  
  return (
    <div className={style.container}>
      <div className={dark?style.home:style.homeClaro}>
        <img className={style.foto} src="/minha foto.jpg" alt="" />
        <h1>Carlos Alberto</h1>
        <h4>Desenvolvedor Front-End</h4>
        <p>
          Como desenvolvedor front-end apaixonado, com expertise em React,
          interfaces modernas e experiências de usuário interativas, prospero
          diante dos desafios de transformar ideias em interfaces elegantes e
          funcionais. Gosto de explorar novas tecnologias, criar soluções
          escaláveis e entregar aplicações que unem performance, design e
          usabilidade para impulsionar a inovação.
        </p>
        <a href="#Contato"><button className={style.botao}>Contato</button></a>
      </div>
    </div>
  );
}
