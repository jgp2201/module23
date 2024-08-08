const books = [
    { title: "Book One", author: "author1", year: 1977 },
    { title: "Book Two", author: "author2", year: 2024 },
    { title: "Book Three", author: "author3", year: 2022 },
    { title: "Book Four", author: "author4", year: 2007 },
    { title: "Book Five", author: "author5", year: 2020 }
];

const filterBooks = books.filter((book) => {
    return book.year >= 2010;
})

const result = filterBooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);