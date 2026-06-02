const API = "http://localhost:5096/api/contacts";

async function loadContacts() {

    const response = await fetch(API);

    const contacts = await response.json();

    const list = document.getElementById("contactList");

    list.innerHTML = "";

    if (contacts.length === 0) {

        list.innerHTML = `
            <p class="empty-message">
                Nenhum contato cadastrado.
            </p>
        `;

        return;
    }

    contacts.forEach(contact => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="contact-info">
                <span class="contact-name">
                    ${contact.name}
                </span>

                <span class="contact-email">
                    ${contact.email}
                </span>
            </div>

            <button
                class="delete-btn"
                onclick="deleteContact(${contact.id})">
                Excluir
            </button>
        `;

        list.appendChild(li);
    });
}

async function addContact() {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Preencha todos os campos.");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    loadContacts();
}

async function deleteContact(id) {

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    loadContacts();
}

loadContacts();