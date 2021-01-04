import React from 'react';
import {Feed} from "./Feed";

const TimeLine = ({items, isLoading, isError}) => {
    return isError ? <div>Error</div> : isLoading ? <h1> Loading... </h1> :
        items.map(feed => React.createElement(Feed, {...feed}))
}

export default TimeLine