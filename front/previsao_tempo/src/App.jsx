import React, { Component } from 'react'
import Busca from './components/Busca'
import openweatherClient from './utils/openweatherClient'
import Exibicao from './components/Exibicao'

export default class App extends Component {

  state = {
    previsao: []
  }

  onBuscaRealizada = (termo) => {
    openweatherClient.get('/search', {
      params: {
        query: termo
      }
    }).then(result => {
      this.setState({ previsao: result.data })
    }).catch(error => {
      this.setState({ previsao: [] })
    })

  }

  render() {
    return (
      <div
        className='grid justify-content-center'>
        <div className="col-12">
          <Busca
            dica='Digite o nome de uma cidade...'
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <Exibicao previsoes={this.state.previsao} />
        </div>
      </div>
    )
  }
}

