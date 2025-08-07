
import { useEffect } from 'react';
import { DarkMode } from '../../store/DarkMode';

export function BodyTheme() {
  const dark = DarkMode((state) => state.dark);

  useEffect(() => {
    document.body.classList.toggle('bodyEscuro', dark);
    document.body.classList.toggle('bodyClaro', !dark);
  }, [dark]);

  return null; // Esse componente só serve pra aplicar a classe
}