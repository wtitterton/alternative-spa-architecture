import { Container } from 'inversify'
import {HttpGateway} from './gateways';
import {RoutingState, Router, RouterGateway, Routes} from './routing'
export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind<HttpGateway>("HttpGateway").to(HttpGateway)
container.bind<RouterGateway>("RouterGateway").to(RouterGateway).inSingletonScope()
container.bind<RoutingState>("RoutingState").to(RoutingState).inSingletonScope()
container.bind<Router>("Router").to(Router).inSingletonScope()
container.bind<Routes>("Routes").to(Routes).inSingletonScope()