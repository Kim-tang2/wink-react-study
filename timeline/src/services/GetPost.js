import {useEffect, useState} from "react";

const GetFeedData = (api) => {

    const [feeds, setFeeds] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            setIsError(null);
            setFeeds(null);
            setIsLoading(true);
            const feedResult = await fetch(api, {
                method: "GET",
            });
            const feedJson = await feedResult.json();
            const propsData = feedJson.map(feed => {
                return {
                    name: feed.owner,
                    body: feed.content
                }
            });
            setFeeds(propsData);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getData()
    }, [])

    return [getData, feeds, isLoading, isError]
}

export default GetFeedData;


