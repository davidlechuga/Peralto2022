import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

//Components
import Header from '../components/Header';
import AbstractSubHeader from '../components/AbstractSubHeader';
//import Footer from '../components/Footer';

export default function LayoutBasic(props) {
    console.log(props);
    const { children } = props;
    return (
        <Fragment>
           <Header />
            <AbstractSubHeader />
            <Container className="layout-basic">  {children} </Container>


        </Fragment>
    )
}