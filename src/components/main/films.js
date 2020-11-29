import React from 'react';
import './main.css';

export default function Films({data}) {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>FILMS</h1>
            <div className='cards'>
                {data.map((films, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{films.title}</div>
                                <div className='cardDescr'>
                                    <p>Release date: <b>{films.release_date}</b></p> 
                                    <p>Director: <b>{films.director}</b></p> 
                                    <p>Producer: <b>{films.producer}</b></p> 
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </div>
    )
}