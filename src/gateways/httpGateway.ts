import { injectable } from 'inversify'

export interface HTTPResponse<T> {
   success: boolean,
   result: T
}

@injectable()
export class HttpGateway {
  API_URL = "https://api.logicroom.co/secure-api/wftitterton@gmail.com/"

  get = async<T> (path: string): Promise<T> => {
    const response = await fetch(`${this.API_URL}${path}`)
    const dto = response.json()
    return dto
  }

  post = async<T, R> (path: string, requestDto: T): Promise<HTTPResponse<R>> => {
      const response = await fetch(`${this.API_URL}${path}`, {
        method: 'POST',
        body: JSON.stringify(requestDto),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const responseDto = response.json()
      return responseDto
  }
}
