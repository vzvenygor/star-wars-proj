import React from 'react';
import '../main/main.css';

function ListItem(props) {
    return (
    <a href={props.url}><li key={props.item} className='searchResults'>{props.item}</li></a>
    )
}

export default ListItem;