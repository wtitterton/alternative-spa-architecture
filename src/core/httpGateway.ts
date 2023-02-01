import { inject, injectable } from 'inversify'
import { UnsuccesfulResponse } from './errors'
import { Config } from './config'

export interface HttpSuccesfulResponse<T> {
   success: boolean,
   result: T
}

@injectable()
export class HttpGateway {
  constructor(@inject(Config) private config: Config) {}

  get = async<T> (path: string): Promise<T> => {
    const response = await fetch(`${this.config.getApiUrl()}${path}`)
    const dto = response.json()
    return dto
  }

  post = async<T, R> (path: string, requestDto: T): Promise<HttpSuccesfulResponse<R>> => {
      const response = await fetch(`${this.config.getApiUrl()}${path}`, {
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
