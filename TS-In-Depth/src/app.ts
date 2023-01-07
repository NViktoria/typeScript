import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { purge, bookTitleTransform, calcTotalPages, createCustomer, createCustomerID, getAllBooks, getBookAuthorByIndex, getBookByID, getBookTitlesByCategory, getProperty, getTitles, logBookTitles, logFirstAvailable, printBook, setDefaultConfig, getObjectProperty, сheckoutBooks, printRefBook, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Author, Magazine, Book, ShelfItem, Librarian, Logger, TOptions } from './interfaces';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ____________________________________________________
// Task 02

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();
// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// ________________________________________________________
// Task 03

// const myID = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerID;
// console.log(idGenerator('Bob', 7));

// createCustomer('Alex');
// createCustomer('Alex', 25);
// createCustomer('Alex', 25, 'Odesa');
// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// console.log(bookTitleTransform('qwertyuiop'));
// console.log(bookTitleTransform(234567890));

// _______________________________________________________
// Task 04

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string): void {
//         console.log(`Damaged: ${reason}`);
//     }
//     // year: 2015,
//     // copies: 3
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'qwertyuio@gmfk.lj',
//     numBooksPublished: 23
// };

// const favoriteLibrarian: Librarian = {
//     name: 'fghjk',
//     email: 'dfghjkl@sdf.jhg',
//     department: 'fghjkl;',
//     assistCustomer: null
// };

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// ________________________________________________________
// Task 05

// const ref = new ReferenceItem('Guana', 2006, 8);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// const refBook = new RefBook('Lern TS', 2018, 2, 4);
// refBook.printItem();
// refBook.printCitation();

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Lern TS');

// const personBook: PersonBook = {
//     name: 'Ann',
//     email: 'ann@sdfgh.kj',
//     id: 6,
//     title: 'Node.js',
//     author: 'Nik Fuery',
//     category: Category.JavaScript,
//     available: true
// };

// console.log(personBook);

// const option: TOptions = { duration: 20 };
// const option2 = setDefaultConfig(option);

// console.log(option);
// console.log(option2);

// ________________________________________________________
// Task 06

// const refBook = new RefBook('Lern TS', 2018, 2, 4);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Ann';
//             reader.take(getAllBooks()[0]);
//             console.log(reader.books);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Ann';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }

// let library = new Library;
// let library: Library = {
//     address: 'ghj@dfg.kkn',
//     Id: 9,
//     name: 'Ann',
// };
// console.log(library);

// ________________________________________________________
// Task 07

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// console.log(purge(inventory));
// console.log(purge([2, 3, 4, 5, 6, 7, 8, 9, 0]));

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(inventory[2], 'author'));

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Ann',
//     available: false,
//     category: Category.HTML,
//     id: 23,
//     title: 'New HTML',
//     pages: 238,
//     markDamaged: null
// };

// const updatedBook: UpdatedBook = {
//     id: 3,
//     pages: 218
// };

// let param: Parameters<СreateCustomerFunctionType>;
// param = ['Ann', 6, 'Odesa'];
// createCustomer(...param);

// ________________________________________________________
// Task 08

// const favoriteLibrarian1: Librarian = new UL.UniversityLibrarian();
// const favoriteLibrarian2: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Ann';
// favoriteLibrarian1['printLibrarian']();

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// const refBook: RefBook = new RefBook('Lern TS', 2018, 2, 4);
// refBook.printItem();

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Inga', 'New HTML');

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistCustomer('Inga', 'New HTML');

// const refBook: RefBook = new RefBook('Lern TS', 2018, 2, 4);
// refBook.copies = 10;
// refBook.copies = 0;
// console.log(refBook.copies);

// ________________________________________________________
// Task 09

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(reason => console.log(reason));
// console.log('End');