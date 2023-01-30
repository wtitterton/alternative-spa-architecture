import { injectable, inject } from 'inversify'
import { makeObservable, action } from 'mobx'
import { Router } from '../routing'
import { HTTPResponse, HttpGateway } from '../gateways'

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

  register = async (registerDto: RegisterDto): Promise<HTTPResponse<RegisterResult>> => {
    return this.dataGateway.post<RegisterDto, RegisterResult>("register", registerDto)
  }

  logout = async () => {
    this.router.goToId('loginLink')
  }
}
