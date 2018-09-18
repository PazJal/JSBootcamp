let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {

  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);


let convertTemperature = function (fahrenheit) {
  let celsius = (fahrenheit -32) * 5 / 9;
  let kelvin = (fahrenheit + 459.67) * 5 / 9;
  return {celsius , kelvin , fahrenheit}
}

console.log(convertTemperature(32));
