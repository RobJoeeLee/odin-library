const myLibrary = [];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBooksToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

function displayBooks(){
    const libraryContainer = document.getElementById("library-container");
    libraryContainer = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.dataset.id = book.id;

        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
        <button class="remove-button" data-id="${book.id}">Remove</button>
        <button class="toggle-read-button" data-id="${book.id}">Toggle Read</button>
        `;

        libraryContainer.appendChild(bookCard);
    })
};

document.getElementById("new-book-button").addEventListener("click" , () => {
    document.getElementById("book-form").style.display = "block";
});
