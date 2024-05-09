const todolist = [{
    name : 'make dinner',
    dueDate : '2022-09-12'

},{
    name : 'watch ytube',
    dueDate : '2022-09-23'
}];

renderToDoList();

function renderToDoList(){
    let todolistHTML = '';

    for(let i=0; i<todolist.length ; i++){
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.date;
        const {name ,dueDate} =todoObject;
        const html = `
        <div> ${name}</div>
        <div>${dueDate}</div>
        <button onclick='
            todolist.splice(${i},1);
            renderToDoList();
            'class='delete'>Delete</button>
        `
        todolistHTML += html;

    }
    // console.log(todolistHTML)
    document.querySelector('.js-todolist')
    .innerHTML = todolistHTML;
}

function toDo(){
    const inputElement = document.querySelector('.js-add');
    const name = inputElement.value;
    const dateInput = document.querySelector('.js-duedate');

    const dueDate = dateInput.value;
    // console.log(name);
    todolist.push({
        // name : name,
        // dueDate : dueDate
        name,
        dueDate
    });
    // console.log(todolist);
    //to disapear the item name after we added to array this below code is needed
    inputElement.value = '';

    renderToDoList();


}