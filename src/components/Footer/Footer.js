// Frameworks functions
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// Frameworks and local styles
import './Footer.scss';
import { Grid, Image } from 'semantic-ui-react';

export default function Footer() {
    return (
        <Fragment>
            <Grid className="container-footer" >
                <Grid.Row columns={1}>
                    <div className="footer_logo">
                        <Link to="/">
                            <h1>logo</h1>
                        </Link>
                    </div>
                    <Grid.Column width={12}  >
                        <nav className="nav nav-footer">
                            <a className="nav-link" href="/">Inicio</a>
                            <a className="nav-link active" href="/galeria">Galeria</a>
                            <a className="nav-link" href="/servicios">Servicios</a>
                            <a className="nav-link" href="/trabajos">Trabajos</a>
                        </nav>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}