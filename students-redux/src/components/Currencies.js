import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from '../redux/modules/currencies'
import _ from 'lodash'
import '../App.css';

import { currenciesSelector, isFetchingSelector } from '../redux/selectors/currenciesSelector'

class Currencies extends Component {
    componentDidMount(){
        this.props.getCurrencies()


    }
    render() {
        const {currency, isFetching} = this.props
        return currency && !isFetching ?
            <div >

                <div class="row mainheader">
                    <div class="col-md-2">Symbool</div>
                    <div class="col-md-2">name</div>
                    <div class="col-md-2">price</div>
                    <div class="col-md-3">change</div>
                    <div class="col-md-3">Podpiska</div>

                </div>

                <div>
                {
                    _.map(currency.data, valuta=>

                            <div key={valuta.id} class="row information">
                                <div class="col-md-2">{valuta.symbol}</div>
                                <div class="col-md-2">{valuta.name}</div>
                                <div class="col-md-2">{valuta.price}</div>
                                <div class="col-md-3">NAN</div>

                                <button class="btn btn-dark" onClick=''>Підписатися</button>
                            </div>

                    )

                }
                </div>

                <button onClick={this.handleClick.bind(this)}>Reverse</button>
            </div>
             :
            <div>Loading...</div>
    }

    handleClick(){
        this.props.reverseCurrencies()
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    currency:currenciesSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)