import { inject, injectable } from 'inversify'
import Navigo from 'navigo'

@injectable()
export class RouterGateway {
  navigo: Navigo = new Navigo("");

  registerRoutes = async (routeConfig: any) => {
    if (this.navigo) return new Promise((resolve) => setTimeout(resolve, 0))
    let root = null
    let useHash = false
    this.navigo = new Navigo(root ?? "", {
       hash: useHash,
    });
    this.navigo
      .on(routeConfig)
      .notFound(() => {})
      .resolve()
    return new Promise((resolve) => setTimeout(resolve, 0))
  }

  unload = () => {
    this.navigo.destroy()
  }

  goToPath = async (pathname: string) => {
    this.navigo.navigate(pathname)
  }
}
