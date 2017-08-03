function fetchBugs(cb){
    return fetch('/api/BugsListings',{
        accept: "application/json"
    })
    .then(parseJSON)
    .then(cb);
}

function parseJSON(res){
    return res.json();
}

const Api = {fetchBugs};
export default Api;