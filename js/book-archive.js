// search books
const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs))
}

const displayResult = books => {
    // console.log(books);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <h1>${book.title}</h1> 
            <p>Author:${book.author_name}</p>
            <p>First published:${book.publish_date}</p>       
            <p>Publisher:${book.publisher}</p>       
        `;
        searchResult.appendChild(div);
    });
}