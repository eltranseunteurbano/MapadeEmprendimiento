import React, { useEffect, useState } from 'react';
import './RenderEntrepreneurs.scss';
import Search  from '../../components/Search/Search';

import EntrepreneurCad from '../../components/EntrepreneurCard/EntrepreneurCard';

import axios from 'axios';

const RenderEntrepreneurs = () => {
    
    const [data, setData] = useState([]);

    useEffect ( () => {
        axios.get("https://limitless-island-55975.herokuapp.com/api/emprendedor/")
        .then( (result) => {
            setData(result.data.objects);
        }, (error) => {
        });
    } );


    
    return(
        <section className="RenderEntrepreneurs">
            <article className="RenderEntrepreneurs__top">
                <h1 className="RenderEntrepreneurs__top__title">EMPRENDEDORES / SERVICIOS</h1>
                <Search type={'home'} className="RenderEntrepreneurs__top__search"/>
                <label className="RenderEntrepreneurs__top__order">
                    <p>Ordenar por:</p>
                    <select defaultValue={0}>
                        <option value={0} selected>Seleccionar</option>
                        <option value={1} >Mejor calificación</option>
                        <option value={2} >Más economicos</option>
                        <option value={3} >Atención más rápida</option>
                    </select>
                </label>
            </article>
            <article className="RenderEntrepreneurs__bottom">

                {
                    data.map( ( item ) => {
                        return(
                            <EntrepreneurCad type={1} data={item} />
                        )
                    })
                }
                
            </article>
        </section>
    )
}

export default RenderEntrepreneurs;