import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

class Header extends Component{
    render(){
        return(
            <div>
                <div>

                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                            <div class="mx-auto order-0">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Primecoin_Logo.png" width="23px" height="23px" alt=""/>

                                <a class="navbar-brand mx-auto" href="#">Crypto</a>
                            </div>
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Головна</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Інформація</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Види киптовалют</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Підписки</a>
                                </li>
                            </ul>
                        </div>

                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Реєстрація</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Вход</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
                
                <div>
                    <nav class="navbar navbar-expand-md navbar-muted bg-muted navbarr">

                        <div class="mx-auto order-0">

                            <h1>КриптоВалюти</h1>

                        </div>

                    </nav>
                </div>

            </div>
        )
    }
}
export default Header