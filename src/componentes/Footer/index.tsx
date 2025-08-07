
import { DarkMode } from "../../store/DarkMode";
import style from "./style.module.css";
export default function Footer() {
  const dark = DarkMode((state) => state.dark);
  function Email() {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=carlosjr0421@gmail.com&su=&body=`;
    window.open(gmailURL, "_blank");
  }
  return (
    <footer>
      <div className={dark ? style.texto : style.textoClaro}>
        <h1>
          Vamos trabalhar <br /> juntos!
        </h1>
        <button onClick={Email} className={style.botao}>
          <img src="/gmail.png" alt="" />
          <p>carlosjr0421@gmail.com</p>
        </button>
      </div>
      <div className={style.linha} />
      <div className={dark ? style.footer : style.footerClaro}>
        <p>© 2025 todos os direitos reservados.</p>
        <div className={dark ? style.redesSociais : style.redesSociaisClaro}>
          <a target="_blank" href="https://github.com/carlosjr04">
            <img src="/github.png" alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/carlos-alberto-j%C3%BAnior-88998b202/"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          
        </div>
      </div>
    </footer>
  );
}
