
document.addEventListener('DOMContentLoaded', function() {
    const contactsArray = [];
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const taskValue = taskInput.value.trim();
        if (taskValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;
            todoList.appendChild(listItem);
            taskInput.value = '';
        }
    });
    

    const addressBookForm = document.getElementById('address-book-form');
    const contactsList = document.getElementById('contacts-list');

    addressBookForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        const contact = {
            name: name,
            email: email,
            phone: phone
        };

        contactsArray.push(contact);
        const contactItem = document.createElement('li');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <strong>Name:</strong> ${contact.name} <br>
            <strong>Email:</strong> ${contact.email} <br>
            <strong>Phone:</strong> ${contact.phone}
        `;
        contactsList.appendChild(contactItem);
        addressBookForm.reset();
        console.log("Contacts List: ", contactsArray);
    });
});

