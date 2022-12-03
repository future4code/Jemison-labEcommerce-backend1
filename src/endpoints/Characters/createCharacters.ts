import { Request, Response } from "express";
import connection from "../../connection";
import { badSyntax } from "../../errors/BadSyntax"
import { internalServerError } from "../../errors/InternalServerError";
import { unprocessableGender } from "../../errors/UnprocessableGender";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { name, gender, description } = req.body
        gender = gender.toUpperCase()

        if (!name || !gender) throw badSyntax

        if (gender !== 'MALE' && gender !== 'FEMALE' && gender !== 'OTHER') throw unprocessableGender

        await connection('allCharacters_Revisao').insert({ name, gender, description })

        res.status(201).end()
    } catch (e: any) {
        switch (e.name) {
            case 'badSyntax':
                res.status(e.code).send(e.message)
                break;
            case 'unprocessableGender':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(internalServerError.code).send(internalServerError.message)
        }
    }
}