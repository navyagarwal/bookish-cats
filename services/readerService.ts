import { ReadingGroup } from "../data/accessor";

export class ReaderService {
    private readingGroup = new ReadingGroup;

    public getReaders(){
        this.readingGroup.getMembers();
    }

    public addReader(name: string) {
        this.readingGroup.addReaderToMembers(name);
    }

}