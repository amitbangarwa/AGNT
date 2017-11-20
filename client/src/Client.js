function search(query, cb) {
    //console.log('q', query);
    return fetch(`/api/beers?q=${query}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchByPage(query, cb) {
    return fetch(`/api/beers?q=${query.q}&pageNumber=${query.pageNumber}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function getBeer(query, cb) {
    return fetch(`/api/beer?beerId=${query}`, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

function parseJSON(response) {
    return response.json();
}

const Client = {search, searchByPage, getBeer};
export default Client;