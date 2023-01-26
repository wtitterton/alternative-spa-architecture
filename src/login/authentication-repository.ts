import { injectable, inject } from 'inversify'
import { makeObservable, action } from 'mobx'
import { Router } from '../routing'
import { HttpGateway } from '../gateways'

@injectable()
export class AuthenticationRepository {
  constructor(@inject(HttpGateway) private dataGateway: HttpGateway,  @inject(Router) private router: Router ) {}

  logout = async () => {
    this.router.goToId('loginLink')
  }
}
