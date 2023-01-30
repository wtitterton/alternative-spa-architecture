import { injectable, inject } from 'inversify'
import { makeObservable, action } from 'mobx'
import { Router } from '../routing'
import {  HttpGateway, HttpSuccesfulResponse } from '../gateways'
import { unsuccesfulResponse } from '../gateways/errors'

export interface RegisterDto {
  email: string,
  password: string
}

interface RegisterResult {
   token: string,
   email: string,
   message: string
}

@injectable()
export class AuthenticationRepository {
  constructor(@inject(HttpGateway) private dataGateway: HttpGateway,  @inject(Router) private router: Router ) {}

  register = async (registerDto: RegisterDto): Promise<HttpSuccesfulResponse<RegisterResult> | unsuccesfulResponse> => {
   const response = await this.dataGateway.post<RegisterDto, RegisterResult>("register", registerDto);
   console.log(response);
   return response;
    
  }

  logout = async () => {
    this.router.goToId('loginLink')
  }
}
