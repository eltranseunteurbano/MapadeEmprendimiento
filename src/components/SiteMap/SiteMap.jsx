import React from 'react';
import './SiteMap.scss';

import { Link } from 'react-router-dom';

const SiteMap = (props) => {
    return(
        <section className="SiteMap">
           {props.routes.map( (item) => {
               return(
                   <Link to={item.url} className="SiteMap__item" key={item.url}>{item.name}</Link>
               )
           })}
        </section>
    )
}

export default SiteMap;