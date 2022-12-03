import { Request, Response } from "express";
import connection from "../../connection";
import { badSyntax } from "../../errors/BadSyntax";
import { dataNotFound } from "../../errors/DataNotFound";
import { internalServerError } from "../../errors/InternalServerError";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { id } = req.params as { id: string | number }
        id = Number(id)

        if (!id) throw badSyntax

        const movies = await connection('allMovies_Revisao')

        const index = movies.findIndex((movie => movie.id === id))

        if (index === -1) throw dataNotFound
        
        await connection('allMovies_Revisao').delete().where({ id })

        res.status(200).end()
    } catch (e:any) {
        switch (e.name) {
            case 'badSyntax':
                res.status(e.code).send(e.message)
                break;
            case 'dataNotFound':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(internalServerError.code).send(internalServerError.message)
        }
    }
}