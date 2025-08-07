
import { DarkMode } from "../../store/DarkMode";
import style from "./style.module.css";
export default function SobreMim() {
  const dark = DarkMode((state) => state.dark);

  return (
    <div className={dark ? style.container : style.containerClaro}>
      <h1>Sobre Mim</h1>
      <h3>Conheça mais sobre mim</h3>
      <p>
        Olá! Sou Carlos Alberto, desenvolvedor front-end especializado em React,
        design de interfaces modernas e experiências digitais intuitivas. Com
        uma paixão por criar soluções visuais elegantes e funcionais, ajudo
        marcas e negócios a se destacarem no mundo digital através de interfaces
        que encantam e performam.
      </p>
      <p>
        Unindo criatividade, conhecimento técnico e atenção aos detalhes, atuo
        no desenvolvimento de aplicações responsivas, acessíveis e otimizadas
        para diferentes dispositivos. Seja criando layouts envolventes,
        otimizando performance ou implementando interações dinâmicas com React,
        estou aqui para transformar ideias em experiências digitais memoráveis.
      </p>

      <p>
        Vamos trabalhar juntos para dar vida ao seu projeto com design
        estratégico e código de qualidade. Entre em contato e vamos criar algo
        incrível!
      </p>
    </div>
  );
}
