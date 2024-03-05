"use strict";
let store = [];
let todo = document.getElementById('todo');
let list = document.getElementById('list');
let btn2 = document.getElementById('.btn2');
console.log(btn2);

let btn = document.querySelector(".btn");
let submit = () => {
    store.push(todo.value);
    todo.value = '';
    let data = '';
    for (let i = 0; i < store.length; i++) {
        data += `
           
            <li>${store[i]}  <button id="btn2">Edit </button> <button>Delete</button></li>
           
             `;
        list.innerHTML = data;
    }
    console.log(data);
};
let id = 0;
let deleteItem = (x) => {
    for (let i = 0; i < store.length; i++) {
        if (x === i) {
            store.splice(x);
        }
    }
};

