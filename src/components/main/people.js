import React from 'react';
import Pagination from './pagination';


const People = ({ data }) => {
    return (
        <div className='pages'>
            <h1 className='pageTitle'>CHARACTERS</h1>
            <div className='cards'>
                {data.map((people, i) => {
                    return (
                        <div key={i} className='card'>
                            <div className='cardContent'>
                            <div className='cardHeader'>{people.name}</div>
                                <div className='cardDescr'>
                                    <p>Height: <b>{people.height}</b></p> 
                                    <p>Mass: <b>{people.mass}</b></p> 
                                    <p>Hair color: <b>{people.hair_color}</b></p> 
                                    <p>Eye color: <b>{people.eye_color}</b></p> 
                                    <p>Skin color: <b>{people.skin_color}</b></p> 
                                    <p>Birth year: <b>{people.birth_year}</b></p>
                                </div>
                            </div>
                        </div>    
                    )
                })}
            </div>
            <div>
                {/* <Pagination totalPage={data.count} /> */}
            </div>
        </div>
    )
}

export default People