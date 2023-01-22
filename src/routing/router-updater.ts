import { inject, injectable } from 'inversify'
import { action, makeObservable } from 'mobx'
import { RoutingState } from './routing-state'
import { Routes } from './routes'
import { Route } from 'navigo'

@injectable()
export class RouteUpdater {
  constructor(
    @inject("RoutingState") private routingState: RoutingState,
    @inject("Routes") private routes: Routes
  ) {
    makeObservable(this, {
      updateCurrentRoute: action,
      updateRouteDetails: action
    })
  }

  // AUTHENTICATION CODE
  // public canView = (routeId: string): boolean => {
  //   const targetRoute = this.routes.find(route => route.routeId === routeId)
  //   if (!targetRoute) return false
  //   if (!targetRoute.routeDef.permissionId) return true
  //   return this.authenticationRepository.canView(targetRoute.routeDef.permissionId)
  // }

  updateCurrentRoute = async (routeId: string, params: any, query: any) => {
    // AUTHENTICATION CODE
    // if (!this.canView(routeId)) {
    //   this.logoutUser()
    //   return
    // }

    const oldRouteId = this.routingState.currentState.routeId
    const routeChanged = oldRouteId !== routeId
    const targetRouteId = this.findRoute(routeId).routeId

    console.log('old route is ', oldRouteId)
    console.log('new route is ', targetRouteId)
    /* @ts-ignore */
    if (routeChanged && oldRouteId && this.findRoute(routeId).onLeave) this.findRoute(routeId).onLeave()
    /* @ts-ignore */
    if (routeChanged && this.findRoute(routeId).onEnter) this.findRoute(routeId).onEnter()
    this.updateRouteDetails(targetRouteId, params, query)
  }

  findRoute(routeId: string) {
    const route = this.routes.routes.find((route) => {
      return route.routeId === routeId
    })
    return route || { routeId: 'loadingSpinner', routeDef: { path: '' } }
  }

  updateRouteDetails = (routeId: string, params: any, query: any) => {
    console.log('updating route')
    this.routingState.currentState.routeId = routeId
    this.routingState.currentState.params = params
    this.routingState.currentState.query = query
  }
}
