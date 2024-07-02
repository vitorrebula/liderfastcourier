import React from "react";
import * as styled from './Graphs.styles';

function Graphs() {
    
    return (
        <styled.Graphs>
            <div className="container">
                <img src="./graph.jpg" />
                <div className="data">
                    <h3 className="general-title">A Líder Fast em números</h3>
                    <div className="metrics-container">
                        <div className="upper">
                            <p>Entregas Realizadas</p>
                            <h5>+100.000</h5>
                        </div>
                        <div>
                            <p>Anos de Empresa</p>
                            <h5>+50</h5>
                        </div>                
                        <div className="upper">
                            <p>Estados Atendidos</p>
                            <h5>+15</h5>
                        </div>                
                        <div>
                            <p>Empresas Parceiras</p>
                            <h5>+15</h5>
                        </div>
                    </div>
                </div>
            </div>
        </styled.Graphs>
    );
};

export default Graphs;