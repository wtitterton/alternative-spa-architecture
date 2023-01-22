import { inject, injectable } from 'inversify'
import { RouteUpdater } from './router-updater'

@injectable()
export class RouteRegistrar {

  constructor(@inject(RouteUpdater) private routeUpdater: RouteUpdater){}

  extractRoutes = (routes: any) => {
    const routeConfig: {[key: string]: any} = {}
    routes.forEach((route: any) => {
      const def = this.routeUpdater.findRoute(route.routeId)
      routeConfig[def.routeDef.path] = async (params: any, query: any) => {
        this.routeUpdater.updateCurrentRoute(def.routeId, params, query)
      }
    })
    return routeConfig
  }
}