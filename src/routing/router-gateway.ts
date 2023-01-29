import { injectable } from 'inversify'
import Navigo from 'navigo'

@injectable()
export class RouterGateway {
  navigo: any

  registerRoutes = async (routeConfig: any) => {
   if (this.navigo) return new Promise((resolve) => setTimeout(resolve, 0))
    let root = null
    let useHash = false
    let hash = '#'
    this.navigo = new Navigo(root, useHash, hash)
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
