import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import { LoginRegisterPresenter } from './login-register-presenter';

export const LoginRegistrationPage = observer((props: any) => {
    const loginRegisterPresenter = useInjection(LoginRegisterPresenter);
    return (
        <>
      <div className="logo">
        <img
          alt="logo"
          style={{ width: 60, filter: 'grayscale(100%)' }}
          src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/1537017/settings_images/1UxqoCceShyczTsmzsLy_logo.png"
        />
      </div>
      <div className="option">
        <input
          style={{ backgroundColor: '#e4257d' }}
          type="submit"
          value="login"
          onClick={() => {
            loginRegisterPresenter.setOption("login")
          }}
        />
        <input
          style={{ backgroundColor: '#2E91FC' }}
          type="submit"
          value="register"
          onClick={() => {
            loginRegisterPresenter.setOption("register")
          }}
        />
      </div>
      <div
        className="login-register"
        style={{
          backgroundColor: loginRegisterPresenter.option === 'login' ? '#E4257D' : '#2E91FC'
        }}
      >
        <form
          className="login"
          onSubmit={(event) => {
            event.preventDefault()
            if (loginRegisterPresenter.option === 'login') loginRegisterPresenter.login()
            if (loginRegisterPresenter.option === 'register') loginRegisterPresenter.register()
          }}
        >
          <label>
            <input
              type="text"
              value={loginRegisterPresenter.email}
              placeholder="Email"
              onChange={(event) => {
               loginRegisterPresenter.email = event.target.value
              }}
            />
          </label>
          <label>
            <input
              type="text"
              value={loginRegisterPresenter.password}
              placeholder="Password"
              onChange={(event) => {
                loginRegisterPresenter.password = event.target.value
              }}
            />
          </label>
          {loginRegisterPresenter.option === 'login' ? (
            <input type="submit" value="login" />
          ) : (
            <input type="submit" value="register" />
          )}
        </form>

        <div className="validation-message">
          {loginRegisterPresenter.showValidationMessage && loginRegisterPresenter.validationMessage}
        </div>
      </div>
    </>
       
    )
})
