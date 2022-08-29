import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi, {
        method: 'PUT', //tiene que ir en mayúscula
        mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}
const idUpdate=306;
const dataUpdate={
    title:"Este objeto es para borrar",
    price: 9999//no es necesario que se pongan todas las opciones
}
putData(`${API}/products/${idUpdate}`,dataUpdate)//se debe poner el id del producto que se quiere actualizar 
    .then(response=>response.json())
    .then(dataUpdate=>console.log(dataUpdate))
    .catch(error=>console.log(error));