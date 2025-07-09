import { Book } from '../model/book';
import { Reader } from '../model/reader';

export class ReadingGroup {
    private bookIdCounter = 0;
    private readerIdCounter = 0;
    private members: Reader[] = [];
    private collection: Book[] = [];

    public getMembers() {
        return this.members;
    }

    public getCollection() {
        return this.collection;
    }

    public currentlyReading(name: string) {
        const members: Reader[] = this.members.filter(
            (member) => member.name === name
        )
        const currentlyReading: any[] = [];
        for(const member of members){
            currentlyReading.push(member.currentlyReading);
        }
        return currentlyReading;
    }

    public getReadCount(name: string) {
        const members: Reader[] = this.members.filter(
            (member) => member.name === name
        )
        const readCounts: any[] = [];
        for(const member of members) {
            readCounts.push(member.numOfBooksRead)
        }
        return readCounts;
    }

    public numOfTimesBorrowed(name: string) {
        const books: Book[] = this.collection.filter(
            (book) => book.name === name
        )
        const numOfTimesBorrowed: number[] = [];
        for(const book of books) {
            numOfTimesBorrowed.push(book.numOfTimesBorrowed);
        }
        return numOfTimesBorrowed;
    }

    public isAvailable(name: string) {
        const books: Book[] = this.collection.filter(
            (book) => book.name === name
        )
        const isAvailable: boolean[] = [];
        for(const book of books) {
            isAvailable.push(book.isAvailable);
        }
        return isAvailable;
    }

    public addBookToCollection(name: string, author: string) {
        const newBook: Book = {
            id: this.bookIdCounter, 
            name, 
            author, 
            numOfTimesBorrowed: 0,
            isAvailable: true,
        };
        this.collection.push(newBook);
        this.bookIdCounter++;
    }

    public addReaderToMembers(name: string) {
        const newReader: Reader = {
            id: this.readerIdCounter, 
            name, 
            numOfBooksRead: 0, 
            currentlyReading: undefined,
        };
        this.members.push(newReader);
        this.readerIdCounter++;
    }

    public removeFromCollection() {
            // TODO
    }

    public removeMember() {
            // TODO
    }
}