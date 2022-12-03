import * as types from '../types'

export const badSyntax:types.err = {
    code: 400,
    name: "badSyntax",
    message: "Sorry, your request couldn't be fulfilled due to bad syntax. Please, check if all mandatory fields were provided and try again."
}