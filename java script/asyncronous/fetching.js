// //fetch api

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response)
//     return response.json();
// }).then(data => {
//     console.log(data);
//     return fetch('todos/mario.json');
// }).then(response => {
//     console.log('resolved',response);
//     return response.json();
// }).then(data => {
//     console.log(data);
//     return fetch('todos/shaun.json');
// }).then(response =>{
//     // console.log(response);
//     return response.json();
// }).catch((err) => {
//     console.log('rejected', err)
// })

//async & await 

const getTodos = async () => {
    const response = await fetch('todos/mario.json');
    if( response.status !== 200){
        throw new Error('cannot fetch the data ');
    }
    // console.log(response);
    const data = await response.json();
    return data;
}
 getTodos()
    .then( data => console.log('resolved', data))
    .catch(error => console.log('rejected:', error.message));



