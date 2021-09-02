
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


    if (books.length > 0) {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';

        books.forEach(book => {
            const bookTitle = document.getElementById('search-field').value;
            const image = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `             
                <div class="card h-100">
                    <img src="${image}" class="card-img-top p-2 h-75" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author : ${book.author_name ? book.author_name : ''}</p>
                        <p class="card-text">First Published : ${book.first_publish_year ? book.first_publish_year : ''}</p>
                        <p class="card-text">Publisher : ${book.publisher ? book.publisher : ''}</p>
                    </div>
                </div>
            `;
            searchResult.appendChild(div);

        });

        //total result number
        const Result = document.getElementById('result-number');
        const h5 = document.createElement('h5');
        h5.innerText = `Result Found:${books.length}`;
        Result.appendChild(h5);
        document.getElementById('not-found').style.display = 'none';

    }
    //not found result
    else {
        const notFound = document.getElementById('not-found');
        const h3 = document.createElement('h3');
        h3.innerText = `No Result Found`;
        notFound.appendChild(h3);
    }

}