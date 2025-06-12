import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import striptags from 'striptags';

const Exibicao = ({ previsoes }) => {
    if (previsoes.length === 0) {
        return (
            <p className="mt-4 flex justify-content-center p-3">Nenhuma previsão disponível.</p>
        );
    }
    console.log(previsoes);
    return (
        <div className="flex-wrap flex justify-content-center p-3">
            {previsoes.map((previsao, index) => (
                <div key={index} className="col-12 md:col-2 flex justify-content-center sm:col-12">

                    <Card
                        title="Previsão do Tempo"
                        subTitle={striptags(previsao.description)}
                        className="w-20 shadow-2 border-round p-3">

                        <i className={`fa-solid fa-${striptags(previsao.icon)} fa-4x block mx-auto mb-3`}></i>

                        <p><strong>Temperatura Mínima:</strong> {striptags(previsao.temp_min.toString())}°C</p>
                        
                        <p><strong>Temperatura Máxima:</strong> {striptags(previsao.temp_max.toString())}°C</p>
                        <p><strong>Umidade Relativa:</strong> {striptags(previsao.humidity.toString())}%</p>
                        
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Exibicao;