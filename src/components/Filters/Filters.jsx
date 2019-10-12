import React from 'react';
import "./Filters.scss";


const Filters = () => {

    return(
        <section className="Filters">
            <h1 className="Filters__title"> FILTROS </h1>
            <article className="Filters__content"> 
                <article className="Filters__content__filter">
                    <h1> Categorías </h1>
                    <div className="Filters__content__filter__item">
                        <label>
                            <input type="checkbox" value={1}/>
                            <p>Alimentos</p>
                        </label>
                    </div>
                    <div className="Filters__content__filter__item">
                        <label>
                            <input type="checkbox" value={2}/>
                            <p>Arte</p>
                        </label>
                    </div>
                    <div className="Filters__content__filter__item">
                        <label>
                            <input type="checkbox" value={3} />
                            <p>Moda</p>
                        </label>
                    </div>
                    <div className="Filters__content__filter__item">
                        <label>
                            <input type="checkbox" value={4}/>
                            <p>Tecnología</p>
                        </label>
                    </div>
                </article>
                
                <article className="Filters__content__filter">
                    <h1> Horarios de atención </h1>
                    <div></div>
                </article>
                
                <article className="Filters__content__filter">
                    <h1> Otras caracteristicas </h1>
                    <div></div>    
                </article>
            </article>
        </section>
    )
}

export default Filters;