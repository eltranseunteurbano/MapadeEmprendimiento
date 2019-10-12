import React from 'react';
import './EntrepreneurCard.scss';

import { Link } from 'react-router-dom';

const EntrepreneurCard = (props) => {
    console.log(props.data)
    return(
        <section className={props.type === 2 ? "EntrepreneurCard EntrepreneurCard__two" : "EntrepreneurCard"}>
            <article className="EntrepreneurCard__img">
                {//<img src={process.env.PUBLIC_URL + 'burger.png'} alt=""/>
                }
                <img src={props.data.business_logo} alt=""/>

            </article>
            <article className="EntrepreneurCard__info">
                <h1>{props.data.business_name}</h1>
                <p>{props.data.business_slogan}</p>
                <p>{props.data.business_description}</p>
                <Link to="emprendimientos"> Ver emprendimiento </Link>
            </article>
        </section>
    )
}

export default EntrepreneurCard;