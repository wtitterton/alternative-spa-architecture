import { injectable, inject } from 'inversify'
import { AuthenticationRepository, RegisterDto } from './'
import { Router } from '../routing'
import { makeObservable, observable, runInAction } from 'mobx'
import { createMessageFromError, validateInput } from '../utils'
import { registrationSchema } from './registration-validation-schema'

type Option = "login" | "register"

@injectable()
export class LoginRegisterPresenter {
  email: string | null = null
  password: string | null = null
  option: Option = "login"
  showValidationMessage: boolean = false
  validationMessage: string[] = []

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

  register = async (registerDto: RegisterDto) => {
    try {
      validateInput(registrationSchema, registerDto)
      await this.authenticationRepository.register(registerDto);
      this.resetValues();
    } catch(error: any) {
      this.showValidationMessage = true;
      this.validationMessage = createMessageFromError(error)
    }
  }

  private resetValues() {
    this.email = "";
    this.password = "";
    this.showValidationMessage = true;
    this.validationMessage = []
  }

  setOption(option: Option) {
    runInAction(() => {
          this.option = option
        })
  }
}
