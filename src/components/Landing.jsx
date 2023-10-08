import React from 'react';
import Container from './Container';
import Nav from './Nav';


function Landing({toggleTheme, theme}) {
    return (
        <section className='star_bg'>
           <Nav theme ={theme} toggleTheme={toggleTheme} />
           <Container/>
        </section>
    );
}

export default Landing;