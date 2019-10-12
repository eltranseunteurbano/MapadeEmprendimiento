import React from 'react';
import './Entrepreneurs.scss';


import SiteMap from '../../components/SiteMap/SiteMap';
import Filters from '../../components/Filters/Filters';
import RenderEntrepreneurs from '../RenderEntrepreneurs/RenderEntrepreneurs';
const Entrepreneurs = () => {

    var routes = [
        {
            "name": "Home",
            "url" : "/"
        },
        {
            "name":"Emprendimientos",
            "url":"Emprendimientos"
        }
    ];

    return(
        <section className="Entrepreneurs">
            <SiteMap routes={routes}/>
            <section className="Entrepreneurs__content">
                <Filters />
                <RenderEntrepreneurs />
            </section>
        </section>
    )
}

export default Entrepreneurs;
