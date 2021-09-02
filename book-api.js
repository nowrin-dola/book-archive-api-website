// searching book  function

const searchbook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';


    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data))


}
searchbook();

// displaying book function

const displayBook = books => {

    const searchResult = document.getElementById('search-result');
    const searchNumber = document.getElementById('search-number');
    const errorMessage = document.getElementById('error-message');

    searchResult.textContent = '';
    searchNumber.innerHTML = '';
    errorMessage.textContent = '';

    const BooksArray = books.docs;


    if (BooksArray.length === 0) {
        errorMessage.innerHTML = `<h3 class="text-center"> Not Found </h3>`



    }

    else {
        BooksArray.slice(0, 20).forEach(book => {
            errorMessage.textContent = '';

            // total search result
            searchNumber.innerHTML = `<h3 class=text-center text-danger>search result found ${books.numFound}</h3>`;
            // div card for showing book details
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                            <div class="card shadow p-3 mb-5 bg-body rounded h-100">
                                       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid class="style=" height:70vh; object-fit:cover;" alt="...">
        
                             <div class="card-body my-3">
                                       <h5 class="card-title text-center fw-bold mb-3">${book.text[1]}</h5>
                                   <div class="card-text">
                                       <P><span class="fw-bold">Author Name:</span> ${book.author_name ? book.author_name : 'not found'}</p>
                                       <p><span class="fw-bold">Publisher:</span> ${book.publisher[0] ? book.publisher[0] : 'not found'}</p>
                                       <p><span class="fw-bold">First Publish Year:</span> ${book.first_publish_year}</p>
                                   </div>
                             </div>
                         </div>`;





            searchResult.appendChild(div);

        });


    }



}