import { ReadingGroup } from "../data/accessor";

export class BookService {
    private readingGroup = new ReadingGroup;

    public getBooks(){
        this.readingGroup.getCollection();
    }

    public addBook(name: string, author: string) {
        this.readingGroup.addBookToCollection(name, author);
    }
}