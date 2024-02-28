import React from 'react';
import NavBar from '../Components/NavBar';
import LandingBody from '../Components/Landing-body';
import About from '../Components/About';

const LandingPage = () =>{
    return(
        <div class="landing-page">
        <NavBar/>
        <LandingBody/>
        <About/>
        {/* <Contact/> */}
        </div>
    )
}

export default LandingPage;