
const getTodos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((d)=>{
        return d.json();
    })
    .then((data)=>{
      console.log(data);
    })
}

getTodos();



