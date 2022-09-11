// Frameworks functions
import React from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

// Frameworks and local styles
import './Header.scss';
import { Grid, Image } from 'semantic-ui-react';
//Assets
import Logo from '../../assets/imagenes-layout/logoPeranto.png'

export default function Header() {
    return (


        <div className="header container">
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column width={4} className="header_logo-img">
                        <Link to="/">
                            <Image src={Logo} alt="Twitgov" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={12} className="navigation" >
                        <nav className="nav nav-header">
                            <a className="nav-link" href="/">Inicio</a>
                            <a className="nav-link active" href="/galeria">Galeria</a>
                            <a className="nav-link" href="/servicios">Servicios</a>
                            <a className="nav-link" href="/trabajos">Trabajos</a>
                            <AmplifySignOut />
                        </nav>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>


    )
}