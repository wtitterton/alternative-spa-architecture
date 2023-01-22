import { inject, injectable } from 'inversify'

@injectable()
export class FakeRouterGateway {
  registerRoutes = async (routeConfig: any) => {}

  unload = () => {}

  goToPath = async (pathname: string) => {}
}