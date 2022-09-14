import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <h1>Accueil</h1>
            <Navigation/>
            <Countries/>
        </div>
    );
};

export default Home;