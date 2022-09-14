import React from 'react';
//destructuration d'un element "{}"
const Cards = ({country}) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.commun}/>
            <div className="infos">
                <h2>{country.translations.fra.commun}</h2>
                <h4>{country.capital}</h4>
                <p>Pop : {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Cards;