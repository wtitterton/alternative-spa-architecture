import { ValidationError } from "yup"
import { unsuccesfulResponse } from "../gateways/errors";

export const createMessageFromError = (error: any): string[] => {
    if(error instanceof ValidationError) {
       return error.errors
    }

    if(error instanceof unsuccesfulResponse) {
        return [error.message]
    }

    console.log(error);

    return []
}