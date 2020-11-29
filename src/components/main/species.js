import React from 'react';
import './main.css';

export default function Species({data}) {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>SPECIES</h1>
            <div className='cards'>
                {data.map((species, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{species.name}</div>
                                <div className='cardDescr'>
                                    <p>Average height: <b>{species.average_height}</b></p> 
                                    <p>Average lifespan: <b>{species.average_lifespan}</b></p> 
                                    <p>Classification: <b>{species.classification}</b></p> 
                                    <p>Designation: <b>{species.designation}</b></p> 
                                    <p>Eye colors: <b>{species.eye_colors}</b></p> 
                                    <p>Hair colors: <b>{species.hair_colors}</b></p>
                                    <p>Language: <b>{species.language}</b></p>
                                    <p>Skin colors: <b>{species.skin_colors}</b></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}