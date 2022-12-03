import { Request, Response } from "express";
import connection from "../../connection";
import { badSyntax } from "../../errors/BadSyntax";
import { internalServerError } from "../../errors/InternalServerError";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { title, year } = req.body

        if (!title || !year) throw badSyntax

        await connection('allMovies_Revisao').insert({ title, year })

        res.status(201).end()
    } catch (e: any) {
        switch (e.name) {
            case 'badSyntax':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(internalServerError.code).send(internalServerError.message)
        }
    }
}