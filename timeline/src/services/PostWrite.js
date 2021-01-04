function postWrite(name, body, api) {
    fetch(api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            owner: name,
            content: body,
        }),
    })
        .then((response) => response.json())
        .catch(error => {
            console.log(error)
        })
}

export default postWrite;


