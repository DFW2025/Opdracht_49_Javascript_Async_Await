// JAVASCRIPT

// Aanroepen data uit database.....

const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b7a9e5e5ba8d431320902a33faf7a30c"

async function getData() {

    let response = await fetch(apiUrl, { method: "GET" });   // await response of fetch call 
    let data = await response.json();                       // only proceed once promise is resolved
    return data;                                              // only proceed once second promise is resolved
    
};


getData()
    .then(data => console.log(data))
    .catch(reason => console.log("Data kon niet binnen worden gehaald " + " -- message: " + reason.message))






