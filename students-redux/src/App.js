import React, { Component } from 'react';
import './App.css';
import Currencies from './components/Currencies';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
              <BrowserRouter>
                    <div>
                  <Header/>

                  <Currencies />

                        <Footer />
                    </div>
              </BrowserRouter>

          </div>

        </Provider>

    );
  }
}

export default App;
