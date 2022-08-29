import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}
const idDelete=306;

deleteData(`${API}/products/${idDelete}`)//se debe poner el id del producto que se quiere eliminar 
    .then(response=>response.json())
    .then(dataUpdate=>console.log(dataUpdate))
    .catch(error=>console.log(error));