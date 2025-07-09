export interface Reader {
    id: number;
    name : string;
    numOfBooksRead: number;
    currentlyReading?: string;
}