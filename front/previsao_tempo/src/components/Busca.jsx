import React, { Component } from 'react'

export default class Busca extends Component {
   
    state = {
        termoDeBusca: 'São Paulo'
    }

    timeoutID = null

    componentDidMount(){
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    onTermoAlterado = (event) => {
        let termoDeBusca = event.target.value
        
        this.setState ({termoDeBusca: termoDeBusca})
        
        if(termoDeBusca.length >=3 ){
            if(termoDeBusca && termoDeBusca.length === 3){
                this.props.onBuscaRealizada(termoDeBusca)
            } else{
                if(this.timeoutID)
                clearTimeout(this.timeoutID)

                this.timeoutID = setTimeout(() => {
                    
                    if(termoDeBusca){
                        this.props.onBuscaRealizada(termoDeBusca)
                    }
                }, 2000)  
            } 
        }  
    }

    render() {
        return (
            <form>
                <div
                    className='flex flex-column m-2'>
                        <label htmlFor="busca"
                            className='mb-2'>
                                Digite a cidade para consultar a previsão do tempo
                        </label>
                        <input type="text" 
                            name='busca'
                            className='w-full p-2 border-1 border-round-sm text-lg pl-3'
                            placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca}/>
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Buscar cidade...'
}