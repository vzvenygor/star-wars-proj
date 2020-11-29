import React from 'react';
import ListItem from './listItem';
import { FaSearch } from 'react-icons/fa';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            url: 'https://swapi.dev/api/people/?search=',
        };

        this.getDataFromFetch = this.getDataFromFetch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFlagChange = this.handleFlagChange.bind(this);
        this.handleList = this.handleList.bind(this);

    }

    componentDidMount() {
        this.getDataFromFetch();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.text !== prevState.text) {
            this.getDataFromFetch();
        }
    }

    getDataFromFetch() {
        fetch(this.state.url+this.state.text, {})
        .then(response => response.json())
        .then(result => this.setState({data: result}));
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }

    handleList() {
        return this.state.data.results.map(function(item) {
            return <ListItem item={item.name} />
        })
    }

    render() {
        return(
            <div className='searchContainer'>
                <input 
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button onClick={this.handleList}><FaSearch /></button>
                {/* {this.state.flag}
                {this.state.data && this.handleList()} */}
            </div>
        )
    }
}
export default Search;