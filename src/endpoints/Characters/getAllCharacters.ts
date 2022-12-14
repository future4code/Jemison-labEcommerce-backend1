import { Request, Response } from "express";
import connection from "../../connection";
import { internalServerError } from "../../errors/InternalServerError";
import { dataNotFound } from '../../errors/DataNotFound'
import { pageNotFound } from "../../errors/PageNotFound";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { name, orderBy, orderType, page } = req.query
        const resultsPerPage = 5
        const offset = resultsPerPage * (Number(page) - 1)

        if (!name) name = '%'

        const characters = await connection('allCharacters_Revisao')
            .where('name', 'LIKE', `%${name}%`)
            .orderBy(orderBy as string || 'name', orderType as string)
            .offset(offset)

        if (characters.length === 0 && page) throw pageNotFound

        if (!characters.length) throw dataNotFound

        res.status(200).send(characters)

    } catch (e: any) {
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