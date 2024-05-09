const getTodos = (resource) => {

    return new Promise((resolve ,reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () =>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                // callback(data,undefined);
                // console.log( request.responseText)
                resolve(data)
            }else if(request.readyState === 4){
                //console.log("could not fetch the data")
                // callback(undefined,"could not find");
                reject('error getting resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
   
    
};

getTodos('todos/luigi.json').then(data => {
    console.log('promise1 resolved:',data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise2 resolved :', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('promise3 resolved :',data)
}).catch(err => {
    console.log('promise rejected:',err)
})

// getTodos('todos/luigi.json',(data,error) => {
//     //  console.log('callback fired')
//     //  console.log(error);
//     //  console.log(data);
//     console.log(data);
//     getTodos('todos/mario.json',(data,error)=>{
//         console.log(data);
//         getTodos('todos/shaun.json',(data,error) => {
//             console.log(data);
//         })
//     })
    
// });

//promise example

// const getSomething = () => {
//     return new Promise((resolve,reject)=> {
//         //fetch something
//         resolve('some data');
//         reject('some error')
//     });
// };
// getSomething().then((data)=> {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// })

// getSomething().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err);
// })

