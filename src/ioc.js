import { Container } from 'inversify'
import {HttpGateway} from './gateways';
import {RoutingState, Router, RouterGateway} from './routing'
export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind(HttpGateway).to(HttpGateway)
container.bind(RouterGateway).to(RouterGateway).inSingletonScope()
container.bind(RoutingState).to(RoutingState).inSingletonScope()
container.bind(Router).to(Router).inSingletonScope()