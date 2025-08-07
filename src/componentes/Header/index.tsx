import { DarkMode } from '../../store/DarkMode';
import style from './style.module.css';
import { useEffect, useState, useRef } from 'react';
import groupIcon from '../../assets/Group.png';
import luaIcon from '../../assets/lua.png';
import hamburguerIcon from '../../assets/hamburguer.png';
export default function Header() {
    const dark = DarkMode((state) => state.dark);
    const [aberto, setAberto] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsMobile(newWidth < 900);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setAberto(false);
      }
    };

    if (aberto) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aberto]);
    const changeColor = DarkMode((state) => state.changeColor)

    return (
        <header >
            <div className={dark ? style.HeaderGeral : style.HeaderGeralClaro}>

                <h1 className={style.nome}>Carlos Alberto</h1>
                {!isMobile ?
                    <div style={{ display: 'flex',  gap: '5rem' }}>
                        <div className={style.lista}>
                            <div><a href="#HomePage">Home</a></div>
                            <div><a href="#SobreMim">Sobre mim</a></div>
                            <div><a href="#Serviços">Serviços</a></div>
                            <div><a href="#Projetos">Projetos</a></div>
                        </div>
                        <a href="#Contato"><button className={dark ? style.botao : style.botaoClaro}>Contato</button></a>
                        
                        <button onClick={() => changeColor()} className={style.luz}>
                            <img src={dark ? groupIcon : luaIcon} alt="Tema" />
                        </button>
                        
                    </div> :
                    <div className={style.containerMenu} ref={menuRef}>
                        <button onClick={() => changeColor()} className={style.luz}>
                            <img src={dark ? groupIcon : luaIcon} alt="Tema" />
                        </button>
                        <div>
                            <button className={style.hamburguerButton} onClick={() => setAberto(!aberto)}>
                                <img className={style.barras} src={hamburguerIcon} alt="Menu"/>
                            </button>
                            {aberto &&
                            <div className={style.Menu}>
                                <div><a href="#HomePage" onClick={() => setAberto(false)}>Home</a></div>
                                <div><a href="#SobreMim" onClick={() => setAberto(false)}>Sobre mim</a></div>
                                <div><a href="#Serviços" onClick={() => setAberto(false)}>Serviços</a></div>
                                <div><a href="#Projetos" onClick={() => setAberto(false)}>Projetos</a></div>
                                <div><a href="#Contato" onClick={() => setAberto(false)}>Contato</a></div>
                            </div>}
                        </div>
                    </div>}

            </div>
        </header>
    )
}