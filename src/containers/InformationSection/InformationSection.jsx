import React from 'react';
import './InformationSection.scss';
import EntrepreneurCard from '../../components/EntrepreneurCard/EntrepreneurCard';

import { Link } from 'react-router-dom';

const InformationSection = (props) => (
    <section className={props.type === 2 ? "InformationSection InformationSection__two" : "InformationSection"}>

        <h1 className="InformationSection__title">{props.title}</h1>
        <article className="InformationSection__cards">
            <EntrepreneurCard type={props.type} />
            <EntrepreneurCard type={props.type} />
            <EntrepreneurCard type={props.type} />
            <EntrepreneurCard type={props.type} />
            <EntrepreneurCard type={props.type} />
            <EntrepreneurCard type={props.type} />
        </article>

        <Link to="/" className="InformationSection__btn"> Ver todos los emprendimientos</Link>

    </section>
)

export default InformationSection;