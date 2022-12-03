import * as types from '../types'

export const unprocessableGender:types.err = {
    code: 422,
    name: "unprocessableGender",
    message: "Sorry, the field 'gender' can only accept specific parameters: male, female, or other. Please, make sure you're providing processable data and try again."
}