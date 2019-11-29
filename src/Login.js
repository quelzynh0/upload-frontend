import React, { Component } from 'react';
import './loginstyle.css'
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import App from './App'


class Login extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login2} ></Route>
                        <Route path="/home" component={App}></Route>

                    </Switch>

                </Router>

                <GlobalStyle></GlobalStyle>
            </>
        );
    };
}

const Login2 = () => (
    <div id="centralizar">
        <h1>Site para visualização de exames médicos</h1>
        <div className="form">
            <form class="login-form">
                <h3>Login</h3>
                <br></br>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Senha" />
                <p className="message">Não tem login? Cadastre-se</p>
            </form>
            <br></br>
            <br></br>
            <Link to="./home" className="btnEntrar">Entrar</Link>

        </div>

        <GlobalStyle></GlobalStyle>
    </div>
)
export default Login;