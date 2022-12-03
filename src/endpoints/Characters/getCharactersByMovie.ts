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
        
        const characters = await connection('movies_characters_relations')
            .join('allMovies_Revisao', 'movie_id', '=', 'allMovies_Revisao.id')
            .join('allCharacters_Revisao', 'character_id', '=', 'allCharacters_Revisao.id')
            .select('allMovies_Revisao.title', 'allCharacters_Revisao.name', 'allCharacters_Revisao.description')
            .where({ 'allMovies_Revisao.id': id })

        if (!characters.length) throw dataNotFound

        res.status(200).send(characters)

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