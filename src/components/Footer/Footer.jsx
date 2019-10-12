import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

import Logo from '../Logo/Logo';


const Footer = () => (
        <footer className="Footer">
            <section className="Footer__top">
                <article className="Footer__top__left">
                    <Logo />
                    <p className="Footer__top__left__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum vitae a amet laborum optio voluptas est, officia eveniet libero quos reiciendis et dicta molestias molestiae maxime officiis totam ullam?</p>
                </article>
                <article className="Footer__top__right">

                    <div className="Footer__top__right__top">
                        <Link to="/">Nosotros</Link>
                        <Link to="/">Equipo</Link>
                        <Link to="/">¿Cómo lo hacemos?</Link>
                        <Link to="/">Contacto</Link>
                        <Link to="/">Alcaldía de Jamundi</Link>
                    </div>

                    <div className="Footer__top__right__bottom">
                        <FontAwesomeIcon icon={faFacebookF} className="Footer__top__right__bottom__icon"/>
                        <FontAwesomeIcon icon={faInstagram}className="Footer__top__right__bottom__icon" />
                        <FontAwesomeIcon icon={faTwitter} className="Footer__top__right__bottom__icon"/>
                    </div>
                </article>
            </section>
            <section className="Footer__botttom">
                <img src={process.env.PUBLIC_URL + '/logo jamundi.png'} alt="Logo de la alcaldía de Jamundí"/>
                <h1>ALCALDÍA DE JAMUNDÍ</h1>
                <p>Todos los derechos reservados</p>
            </section>

        </footer>
    )


export default Footer;