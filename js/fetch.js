const url = 'http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed'

function fetchData() {
    fetch(url).then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    }).then(data => {
        const html = data.map(user => {
            return `
            <div class = "user">
                <p>작성자: ${user.owner}</p>
                <p>내용: ${user.content}</p>
                <p>작성일시: ${user.created_at}</p>
            </div>
            `
        }).join("");
        document
            .querySelector('#reply')
            .insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error);
    });
}

fetchData();
