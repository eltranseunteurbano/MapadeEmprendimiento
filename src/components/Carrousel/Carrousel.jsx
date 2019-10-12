import React from 'react';
import { Link } from "react-router-dom";
import './Carrousel.scss';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carrousel = () => {


    return(
        <section className="Carrousel__home">
            <article className="Carrousel__home__info">
                <div className="Carrousel__home__info__text">
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aperiam fuga adipisci sit, quidem quod labore amet veritatis dicta, illo ducimus iste sequi autem eligendi reiciendis neque quasi, dolore libero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aperiam fuga adipisci sit, quidem quod labore amet veritatis dicta, illo ducimus iste sequi autem eligendi reiciendis neque quasi, dolore libero.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aperiam fuga adipisci sit, quidem quod labore amet veritatis dicta, illo ducimus iste sequi autem eligendi reiciendis neque quasi, dolore libero.</p>
                </div>

                <div className="Carrousel__home__info__img">
                    <img src={process.env.PUBLIC_URL + './burger.png'} alt="Burger"/>
                </div>
            </article>
            <article className="Carrousel__home__btn">
                <Link to ="/">VER MÁS INFORMACIÓN</Link>
            </article>

            <article className="Carrousel__home__points">
                <div className="Carrousel__home__points__item Carrousel__home__points__item-se" />
                <div className="Carrousel__home__points__item" />
                <div className="Carrousel__home__points__item" />
            </article>
            <article className="Carrousel__home__icon">
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </article>
        </section>
    )
}

export default Carrousel