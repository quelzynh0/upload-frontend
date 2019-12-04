import React, { Component } from 'react';
import './loginstyle.css';
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class Cadastro extends Component {
    render() {
        return (
            <div id="centralizar">
                <h1>Site para visualização de exames médicos</h1>
                <div className="form">
                    <form class="login-form">
                        <h3>Cadastro</h3>
                        <br></br>
                        <input type="text" placeholder="CPF" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Senha" />
                        <br></br>
                        <br></br>
                        <p><Link  to="/">Cadastrar</Link></p>
                        <br></br>
            <br></br>
            <br></br>
                        <p ><Link to="/">Voltar ao login</Link></p>
                    </form>

                    <GlobalStyle></GlobalStyle>
                </div>
            </div>
        );
    };
}


export default Cadastro;