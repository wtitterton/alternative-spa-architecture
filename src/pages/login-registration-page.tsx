import { observer } from 'mobx-react'

export const LoginRegistrationPage = observer((props: any) => {
    return (
        <>
        <div className="container mx-auto">
            <img className=" block w-12"
            alt="logo"
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/1537017/settings_images/1UxqoCceShyczTsmzsLy_logo.png"
            />
            <div className="option">
                <input
                style={{ backgroundColor: '#e4257d' }}
                type="submit"
                value="login"
                onClick={() => {
                    props.presenter.option = 'login'
                }}
                />
                <input
                style={{ backgroundColor: '#2E91FC' }}
                type="submit"
                value="register"
                onClick={() => {
                    props.presenter.option = 'register'
                }}
                />
            </div>
        </div>

        </>
    )
})
