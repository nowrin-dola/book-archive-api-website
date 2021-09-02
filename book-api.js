const searchbook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))


}
searchbook();

const displayBook = books => {
    const searchResult = document.getElementById('search-result');
    const searchNumber = document.getElementById('search-number');




    searchResult.textContent = '';
    searchNumber.innerHTML = '';
    books.slice(0, 20).forEach(book => {
        console.log(book);

        searchNumber.innerHTML = `<h3 class=text-center>search result found ${books.length}</h3>`;


        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid class="style=" height:70vh; object-fit:cover;" alt="...">

             <div class="card-body">
                       <h5 class="card-title text-center">${book.text[1]}</h5>
                   <div class="card-text">
                       <P>Author Name: ${book.author_name}</p>
                       <p>Publisher: ${book.publisher[0]}</p>
                       <p>First Publish Year: ${book.first_publish_year}</p>
                   </div>
             </div>
         </div>`;
        searchResult.appendChild(div);





    });
}
