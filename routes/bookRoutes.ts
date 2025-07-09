import { Router } from 'express';
import { BookService } from "../services/bookService";
import { Presenter } from "../presenters/presenter";

const router = Router();

const bookService = new BookService;

router.get('/', (req, res) => {
    try {
        const books = bookService.getBooks();
        Presenter.success(res, books);
    } catch(err) {
        Presenter.error(res, 'Unable to get books');
    }
})

router.post('/', (req, res) => {
    try {
        const { name, author } = req.body;
        if (!name || typeof name !== 'string' || !author || typeof author !== 'string') {
            return Presenter.error(res, 'Missing or invalid name or author');
        }
        const book =  bookService.addBook(name, author);
        Presenter.success(res, book);
    } catch(err) {
        Presenter.error(res, 'Unable to add Book');
    }
})

export default router;