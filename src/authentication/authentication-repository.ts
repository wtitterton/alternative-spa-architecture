import { injectable, inject } from 'inversify'
import { Router } from '../routing'
import {  HttpGateway } from '../gateways'
import { UnsuccesfulResponse } from '../gateways/errors'
import { UserModel } from './user-model'


export interface LoginRegisterDto {
  email: string,
  password: string
}

interface LoginRegisterResponse {
   token: string,
   email: string,
   message: string
}

@injectable()
export class AuthenticationRepository {
  constructor(
    @inject(HttpGateway) private dataGateway: HttpGateway,  
    @inject(Router) private router: Router,
    @inject(UserModel) private userModel: UserModel
  ) {}

 public login = async (loginCredentials: LoginRegisterDto): Promise<void> => {
      const response = await this.dataGateway.post<LoginRegisterDto, LoginRegisterResponse>("login", loginCredentials);
      const {result: {email, token}} = response;
      
      this.userModel.email = email;
      this.userModel.token = token;
  }

  public register = async (registrationCredentials: LoginRegisterDto): Promise<void> => {
    await this.dataGateway.post<LoginRegisterDto, LoginRegisterResponse>("register", registrationCredentials);
  }

  public logout = async () => {
    this.router.goToId('loginLink');
  }
}
