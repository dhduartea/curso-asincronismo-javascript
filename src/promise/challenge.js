import fetch from "node-fetch";
const API='https://api.escuelajs.co/api/v1';
//Fetch: Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
//Hay que instalar en la terminal -> npm i node-fetch y nombrarlo el type module para trabajarlo de manera local en VSC

function fetchData(urlApi) {
    return fetch(urlApi);
}
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola');
//     }) //se pueden anidar múltiples .then
//     .catch(error =>console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        // console.log(products);
        console.log(products[0]);
        console.log(`${API}/products/${products[0].id}`);
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally!')); //es opcional para mostrar que se terminó la solicitud
