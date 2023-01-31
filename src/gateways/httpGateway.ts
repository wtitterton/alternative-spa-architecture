import { injectable } from 'inversify'
import { UnsuccesfulResponse } from './errors'

export interface HttpSuccesfulResponse<T> {
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

  post = async<T, R> (path: string, requestDto: T): Promise<HttpSuccesfulResponse<R>> => {
      const response = await fetch(`${this.API_URL}${path}`, {
        method: 'POST',
        body: JSON.stringify(requestDto),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseDto = await response.json();

      if(!response.ok || responseDto.success === false) {
       throw new UnsuccesfulResponse(responseDto.result.message ?? "Something went Wrong!");
      }

      return responseDto
  }
}
