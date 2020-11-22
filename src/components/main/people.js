import React from 'react';

class People extends React.Component {
    constructor() {
        super()
        this.state = {
            people: ''
        };
    }
}

componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
        .then(response => response.json())
        .then(people => this.setState({ data: people.results }))
}
    

render() {
    const { data } = this.state;
    return (
        <div className="Card">
            <h3>Name: {this.props.name}</h3>
            <h4 style={{ fontStyle: 'italic', color: 'red' }}>
            The species.name value should be shown below... not the url
            </h4>
            <h4>Species: {this.state.species}</h4>
        </div>
    )
}

export default People;