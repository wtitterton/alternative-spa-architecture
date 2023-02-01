import { Container } from 'inversify'
import {HttpGateway} from './core';
import {RoutingState, Router, RouterGateway, Routes} from './routing'
import { UserModel } from './authentication';

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind<HttpGateway>(HttpGateway).to(HttpGateway)
container.bind<RouterGateway>(RouterGateway).to(RouterGateway).inSingletonScope()
container.bind<RoutingState>(RoutingState).to(RoutingState).inSingletonScope()
container.bind<Router>(Router).to(Router).inSingletonScope()
container.bind<Routes>(Routes).to(Routes).inSingletonScope()
container.bind<UserModel>(UserModel).to(UserModel).inSingletonScope()