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
            <InformationSection title={"Destacados"} url={"https://limitless-island-55975.herokuapp.com/api/emprendedor?super_user=True"} />
            <InformationSection title={"Atención rápida"} type={2} />
            <InformationSection title={"Pet Friendly"} />
        </section>
    )    
}

export default Home;