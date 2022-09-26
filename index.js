function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  // .then(function (response) {
  //   console.log(response);
  //   return response.json();
  // })
  // .then(function(json) {
  //   console.log(json);
  //   return json;
  // });

  .then(response => response.json())
  .then(json => renderBooks(json))

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    
  });
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

