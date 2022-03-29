import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    this.texto = evento.target.value;
  }

  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
