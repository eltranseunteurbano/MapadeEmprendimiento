import React from 'react';
import './Search.scss';

const Search = (props) => {
    return(
        <article className="Search" id={props.type === 'home' ? 'Search__home' : ''} >
            <label>
                <p>Cuéntanos, ¿Que estas buscando?</p>
                <input type="text" placeholder="Escríbe aquí" />
            </label>
        </article>
    )
}

export default Search