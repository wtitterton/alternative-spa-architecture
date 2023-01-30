export class unsuccesfulResponse extends Error {
    constructor(message: string) {
        super(message)
    }
}