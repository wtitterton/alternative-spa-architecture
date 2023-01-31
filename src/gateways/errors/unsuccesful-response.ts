export class UnsuccesfulResponse extends Error {
    constructor(message: string) {
        super(message)
    }
}