import React from 'react';
import './main.css';

export default function Starships({data}) {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>STARSHIPS</h1>
            <div className='cards'>
                {data.map((starships, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{starships.name}</div>
                                <div className='cardDescr'>
                                    <p>Starship class: <b>{starships.starship_class}</b></p> 
                                    <p>Passengers: <b>{starships.passengers}</b></p> 
                                    <p>Classification: <b>{starships.classification}</b></p> 
                                    <p>Model: <b>{starships.model}</b></p> 
                                    <p>Max atmosphering speed: <b>{starships.max_atmosphering_speed}</b></p> 
                                    <p>Manufacturer: <b>{starships.manufacturer}</b></p>
                                    <p>Length: <b>{starships.length}</b></p>
                                    <p>Hyperdrive rating: <b>{starships.hyperdrive_rating}</b></p>
                                    <p>Crew: <b>{starships.crew}</b></p>
                                    <p>Cost in credits: <b>{starships.cost_in_credits}</b></p>
                                    <p>Consumables: <b>{starships.consumables}</b></p>
                                    <p>Cargo capacity: <b>{starships.cargo_capacity}</b></p>
                                    <p>MGLT: <b>{starships.MGLT}</b></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}