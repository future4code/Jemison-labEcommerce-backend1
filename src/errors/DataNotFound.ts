import * as types from '../types'

export const dataNotFound:types.err = {
    code: 404,
    name: "dataNotFound",
    message: "Sorry, we couldn't find the information you're looking for. Please, check your URL and/or query parameters and try again."
}