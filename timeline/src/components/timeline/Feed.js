import React from 'react';

export function Feed(props) {
    return <div className="feed-list">
        <h3>{props.body}</h3>
        <p>{props.name}</p>
        <hr/>
    </div>
}