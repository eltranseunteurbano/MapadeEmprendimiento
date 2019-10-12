import React from 'react';
import './EntrepreneurCard.scss';

import { Link } from 'react-router-dom';

const EntrepreneurCard = (props) => {
    return(
        <section className={props.type === 2 ? "EntrepreneurCard EntrepreneurCard__two" : "EntrepreneurCard"}>
            <article className="EntrepreneurCard__img">
                <img src={process.env.PUBLIC_URL + 'burger.png'} alt=""/>
            </article>
            <article className="EntrepreneurCard__info">
                <h1>MARTINS FOOD AND BEERasds</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus necessitatibus architecto minima</p>
                <Link to="/"> Ver emprendimiento </Link>
            </article>
        </section>
    )
}

export default EntrepreneurCard;