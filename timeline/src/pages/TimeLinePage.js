import React from 'react';
import {Write} from "../components/timeline/Write";
import TimeLine from '../components/timeline/TimeLine'
import GetFeedData from "../services/GetPost";
import {api} from "../constants/api"

export function TimeLinePage() {
    const [getData, feeds, isLoading, isError] = GetFeedData(api);

    return <>
        <Write refresh = {getData}/>
        <TimeLine items={feeds} isLoading={isLoading} isError={isError} />
    </>
}

