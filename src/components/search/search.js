import React from 'react';
import './search.css';
import Yoda from '../../img/Yoda.png';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResult: [],
            url: 'https://swapi.dev/api/people/?search=',
        };
    }

    getDataFromSearch = (event) => {
        fetch(this.state.url + event.target.value)
        .then(response => response.json())
        .then(response => {
            this.setState({ searchResult: response.results });
        })
    }

    render() {
        return(
            <div className='searchContainer'>
                <img src={Yoda} alt='Yoda' className='searchImg' />
                <p className='searchDescr'>What looking for are you, young Padawan?</p>
                <div className='searchBar'>
                    <input 
                        type='text'
                        placeholder='Search'
                        onChange={this.getDataFromSearch}
                    />
                    <div className='searchCards'>
                        {Object.keys(this.state.searchResult).map((item, i) => (
                            <li key={i} className='searchResult'>
                                <div className='cardSearch'>
                                    <span>{this.state.searchResult[item].name}</span>
                                    <div className='cardDescr'>
                                        <p>Height: <b>{this.state.searchResult[item].height}</b></p> 
                                        <p>Mass: <b>{this.state.searchResult[item].mass}</b></p> 
                                        <p>Hair color: <b>{this.state.searchResult[item].hair_color}</b></p> 
                                        <p>Eye color: <b>{this.state.searchResult[item].eye_color}</b></p> 
                                        <p>Skin color: <b>{this.state.searchResult[item].skin_color}</b></p> 
                                        <p>Birth year: <b>{this.state.searchResult[item].birth_year}</b></p>
                                    </div>    
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;