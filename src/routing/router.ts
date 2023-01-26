import { inject, injectable } from 'inversify'
import { RouteRegistrar } from './router-registrar'
import { RouteUpdater } from './router-updater'
import { Routes } from './routes'
import { RoutingState } from './routing-state'
import { makeObservable, computed } from 'mobx'
import { RouterGateway } from './router-gateway'

@injectable()
export  class Router {
  constructor(
    @inject(RouteRegistrar) private routeRegistrar: RouteRegistrar,
    @inject(RouteUpdater) private routeUpdater : RouteUpdater,
    @inject(Routes) private routes: Routes,
    @inject(RouterGateway) private routerGateway: RouterGateway,
    @inject(RoutingState) private routingState : RoutingState
  ) {
    makeObservable(this, {
      currentRouteId: computed
    })
  }

  get currentRouteId() {
    return this.routingState.currentState.routeId
  }

  registerRoutes = async () => {
    let routeConfig = this.routeRegistrar.extractRoutes(this.routes.routes);
    this.routerGateway.registerRoutes(routeConfig)
  }

  goToId = async (routeId: string, params?: any, query?: any) => {
    let routePath = this.routeUpdater.findRoute(routeId).routeDef.path
    if (query) {
      routePath = routePath + '?' + query
    }

    this.routerGateway.goToPath(routePath)
  }
}
