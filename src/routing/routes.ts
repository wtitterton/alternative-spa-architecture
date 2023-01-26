import { injectable } from 'inversify'

@injectable()
export class Routes {
  routes = [
    {
      routeId: 'homeLink',
      routeDef: {
        path: '/app/home'
      }
    },
    {
      routeId: 'booksLink',
      routeDef: {
        path: '/app/books'
      }
    },
    {
      routeId: 'loginLink',
      routeDef: {
        path: '/app/authentication/login'
      }
    }
  ]
}
