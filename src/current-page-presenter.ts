import 'reflect-metadata'
import { inject } from 'inversify'
import {Router, RoutingState } from './routing'
import { makeObservable, computed } from 'mobx'
import { injectable } from 'inversify'

@injectable()
export class CurrentPagePresenter {
  loading: boolean = false;

  constructor(
    @inject(Router) private router: Router, 
    @inject(RoutingState) private routingState: RoutingState
  ) {
    makeObservable(this, {
      currentRouteId: computed
    })
  }

  get currentRouteId() {
    return this.routingState.currentState.routeId
  }

  bootstrap = async () => {
    this.router.registerRoutes()
    this.loading = false
  }
}
