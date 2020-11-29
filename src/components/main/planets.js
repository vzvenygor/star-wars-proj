import React from 'react';
import './main.css';

export default function Planets({data}) {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>PLANETS</h1>
            <div className='cards'>
                {data.map((planets, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{planets.name}</div>
                                <div className='cardDescr'>
                                    <p>Terrain: <b>{planets.terrain}</b></p> 
                                    <p>Climate: <b>{planets.climate}</b></p> 
                                    <p>Diameter: <b>{planets.diameter}</b></p> 
                                    <p>Gravity: <b>{planets.gravity}</b></p> 
                                    <p>Orbital period: <b>{planets.orbital_period}</b></p> 
                                    <p>Population: <b>{planets.population}</b></p>
                                    <p>Rotation period: <b>{planets.rotation_period}</b></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}