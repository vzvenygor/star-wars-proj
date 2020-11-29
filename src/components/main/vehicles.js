import React from 'react';
import './main.css';

export default function Vehicles({data}) {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>VEHICLES</h1>
            <div className='cards'>
                {data.map((vehicles, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{vehicles.name}</div>
                                <div className='cardDescr'>
                                    <p>Cargo capacity: <b>{vehicles.cargo_capacity}</b></p> 
                                    <p>Consumables: <b>{vehicles.consumables}</b></p> 
                                    <p>Cost in credits: <b>{vehicles.cost_in_credits}</b></p> 
                                    <p>Crew: <b>{vehicles.crew}</b></p> 
                                    <p>Length: <b>{vehicles.length}</b></p> 
                                    <p>Manufacturer: <b>{vehicles.manufacturer}</b></p>
                                    <p>Max atmosphering speed: <b>{vehicles.max_atmosphering_speed}</b></p>
                                    <p>Model: <b>{vehicles.model}</b></p>
                                    <p>Passengers: <b>{vehicles.passengers}</b></p>
                                    <p>Vehicle class: <b>{vehicles.vehicle_class}</b></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}