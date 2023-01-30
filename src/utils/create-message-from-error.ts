import { ValidationError } from "yup"

export const createMessageFromError = (error: any): string[] => {
    if(error instanceof ValidationError) {
       return error.errors
    }
    
    console.log(error);

    return []
}