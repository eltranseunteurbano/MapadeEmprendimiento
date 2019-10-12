import React, {useState, useEffect} from 'react';
import './InformationSection.scss';
import EntrepreneurCard from '../../components/EntrepreneurCard/EntrepreneurCard';
import axios from 'axios';

import { Link } from 'react-router-dom';

const InformationSection = (props) => {

    const [data, setData] = useState([]);
    var url = props.url;

    useEffect ( () => {
        axios.get(url)
        .then( (result) => {
            setData(result.data.objects);
        }, (error) => {
        });
    } );


    return(
        <section className={props.type === 2 ? "InformationSection InformationSection__two" : "InformationSection"}>

        <h1 className="InformationSection__title">{props.title}</h1>
        <article className="InformationSection__cards">
        {
                    data.map( ( item ) => {
                        return(
                            <EntrepreneurCard type={props.type} data={item} />
                        )
                    })
                }
        
        </article>

        <Link to="/Emprendimientos" className="InformationSection__btn"> Ver todos los emprendimientos</Link>

    </section>

    )
}


export default InformationSection;