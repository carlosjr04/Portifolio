import { useState } from "react";
import style from "./style.module.css";
import { DarkMode } from "../../store/DarkMode";
export default function Formulario() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    servico: "",
    mensagem: "",
  });
  const [select, setselect] = useState(false);
  function handleChange(e: React.ChangeEvent<any>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const assunto = encodeURIComponent(`${form.servico}`);
    const corpo = encodeURIComponent(`Nome: ${form.nome} \n${form.mensagem}`);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=carlosjr0421@gmail.com&su=${assunto}&body=${corpo}`;
    setForm({
      nome: "",
      email: "",
      servico: "",
      mensagem: "",
    });
    window.open(gmailURL, "_blank");
  }
    const dark = DarkMode((state) => state.dark);
  
  return (
    <div>
      <div className={dark?style.textos:style.textosClaro}>
        <h1>Entre em contato</h1>
        <h3>Vamos trabalhar juntos!</h3>
      </div>
      <form onSubmit={handleSubmit} className={dark?style.formulario:style.formularioClaro}>
        <div>
          <h3>Nome</h3>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <h3>E-mail</h3>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h3>Serviço</h3>
          <div className={style.setinha}>
            <select
              name="servico"
              value={form.servico}
              onChange={handleChange}
              required
              className={form.servico === "" ? style.vazio : style.escolhido}
              onClick={()=>setselect(!select)}
            >
              <option value="">Selecione um serviço</option>
              <option value="Design">Design</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Consultoria">Consultoria</option>
            </select>
            {select?<img  src="/setaCima.png" alt="" />:<img  src="/seta.png" alt="" />}
          </div>
        </div>
        <div>
          <h3>Mensagem</h3>
          <textarea
            name="mensagem"
            value={form.mensagem}
            placeholder="Escreva sua mensagem aqui"
            onChange={handleChange}
            required
          />
        </div>
        <button className={dark?style.botao:style.botaoClaro} type="submit">
          Entrar em contato
        </button>
      </form>
    </div>
  );
}
