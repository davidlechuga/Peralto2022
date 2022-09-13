// Frameworks functions
import React from 'react';

// Frameworks and local styles
import './AbstractSubHeader.scss';
import { Grid } from 'semantic-ui-react';
//Assets

export default function AbstractSubHeader() {
    return (
        <div className="container">
            <Grid >
                <Grid.Row columns={2}>
                    <Grid.Column width={7}>
                        
                    </Grid.Column>
                    <Grid.Column className="col-title" width={9}>
                        <h1 className="team-name"> PERANTO </h1>
                        <h4 className="description-SA">
                        Servicio de acceso rápido. 
                        Bienvenido, peranto es un intermediario para tus identificaciones legales, podrás subir documentos como tu INE para poder usarlos en puntos de control como recepciones, fronteras u otro tipo de servicios como Fintech o DeFi sin necesidad de volver a pasar por otro registro KYC. 
                        Bienvenido.
                        </h4>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}