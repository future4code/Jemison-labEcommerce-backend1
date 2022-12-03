import { Request, Response } from "express";
import connection from "../../connection";
import { dataNotFound } from "../../errors/DataNotFound";
import { internalServerError } from "../../errors/InternalServerError";
import { pageNotFound } from "../../errors/PageNotFound";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { title, orderBy, orderType, page} = req.query
        const resultsPerPage = 5
        const offset = resultsPerPage * (Number(page) - 1)

        if (!title) title = '%'

        const characters = await connection('allMovies_Revisao')
            .where('title', 'LIKE', `%${title}%`)
            .orderBy(orderBy as string || 'title', orderType as string)
            .offset(offset)

            if (characters.length === 0 && page) throw pageNotFound

            if (!characters.length) throw dataNotFound

        res.status(200).send(characters)

    } catch (e:any) {
        switch (e.name) {
            case 'dataNotFound':
                res.status(e.code).send(e.message)
                break;
            case 'pageNotFound':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(internalServerError.code).send(internalServerError.message)
        }
    }
}