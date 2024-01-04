"use strict";

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
    await fetch(url)
        .then((data) => data.json())
        .then((json) => setListUsers(json));
}

const setListUsers = (users) => {
    const containerEl = document.querySelector('.container');
    const ulEl = document.createElement('ul');
    users.forEach(element => {
        console.log(element);
        const liEl = document.createElement('li');
        liEl.classList.add('user');
        liEl.setAttribute('id', element.id);
        liEl.textContent = element.name;

        liEl.addEventListener('click', () => {
            console.log('удаление: ', liEl);
            ulEl.removeChild(liEl);
        });

        ulEl.appendChild(liEl);
    });

    containerEl.appendChild(ulEl);
}

getUsers();