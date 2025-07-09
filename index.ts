import express from 'express';
import readerRoutes from './routes/readerRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/book', bookRoutes);
app.use('/reader', readerRoutes);

app.listen(3000, () => console.log('Server up on http://localhost:3000'));