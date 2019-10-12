import React from 'react';
import './Home.scss';

import Carrousel from '../../components/Carrousel/Carrousel';
import Search from '../../components/Search/Search';
import InformationSection from '../InformationSection/InformationSection';

const Home = () => {

    return(
        <section className="Home">
            <Carrousel />
            <Search type={"home"}/>
            <InformationSection title={"Destacados"} />
            <InformationSection title={"Atención rápida"} type={2} />
            <InformationSection title={"Pet Friendly"} />
        </section>
    )    
}

export default Home;