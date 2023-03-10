import { ValidationError } from "yup"
import { UnsuccesfulResponse } from "../core";

export const createMessageFromError = (error: any): string[] => {
    if(error instanceof ValidationError) {
       return error.errors
    }

    if(error instanceof UnsuccesfulResponse) {
        return [error.message]
    }

    return ["Something went wrong!"]
}