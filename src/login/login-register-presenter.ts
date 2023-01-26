import { injectable, inject } from 'inversify'
import { AuthenticationRepository } from './'
import { Router } from '../routing'
import { makeObservable, observable, runInAction } from 'mobx'

@injectable()
export class LoginRegisterPresenter {
  email = ''

  password = ''

  option = 'login'

  showValidationMessage = false

  validationMessage = ''

  constructor(
    @inject(AuthenticationRepository) private authenticationRepository: AuthenticationRepository,
    @inject(Router) private router: Router
  ) {
    makeObservable(this, {
      email: observable,
      password: observable,
      option: observable,
      showValidationMessage: observable,
      validationMessage: observable
    })
  }

  login = async () => {
    this.router.goToId('homeLink');
  }

  register = async () => {
    console.log(this)
  }

  setOption(option: string) {
    runInAction(() => {
          this.option = option
        })
  }
}
