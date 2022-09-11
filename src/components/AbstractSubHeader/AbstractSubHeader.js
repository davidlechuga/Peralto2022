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
                        <h1 className="team-name"> ESTUDIOS DE ECOSISTEMAS FUTUROS </h1>
                        <h4 className="description-SA">
                            Con nuestra consultoría especializada en planeación prospectiva ,
                            podemos ayudarlos para  determinar los componentes que deben considerarse en los escenarios futuros,
                            a definir los objetivos,
                            los programas de trabajo y las metas que se deben alcanzar a mediano y a largo plazo.
                        </h4>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}