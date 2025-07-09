import { Router } from 'express';
import { ReaderService } from "../services/readerService";
import { Presenter } from "../presenters/presenter";

const router = Router();

const readerService = new ReaderService;

router.get('/', (req, res) => {
    try {
        const readers = readerService.getReaders();
        Presenter.success(res, readers);
    } catch(err) {
        Presenter.error(res, 'Unable to Get readers');
    }
})

router.post('/', (req, res) => {
    try {
        const { name } = req.body;
        if (!name || typeof name !== 'string') {
            return Presenter.error(res, 'Missing or invalid name');
        }
        const readers = readerService.addReader(name);
        Presenter.success(res, readers);
    } catch(err) {
        Presenter.error(res, 'Unable to add Reader');
    }
})

export default router;