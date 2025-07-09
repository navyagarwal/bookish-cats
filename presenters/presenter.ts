import { Response } from 'express';

export const Presenter = {
    success: (res: Response, body: any) => res.status(200).json(body),
    error: (res: Response, message: string) => res.status(400).json(message),
}