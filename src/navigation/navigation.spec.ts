import { NavigationPresenter } from "./navigation-presenter";
import { FakeRouterGateway, Router, RoutingState } from "../routing";
import { RouterGateway } from "../routing";
import { Container } from "inversify";


let container = new Container({
    autoBindInjectable: true,
    defaultScope: "Transient"
});

beforeEach(() => {
  container.bind(RouterGateway).to(FakeRouterGateway).inSingletonScope();
  container.bind(RoutingState).to(RoutingState).inSingletonScope();
  container.bind(Router).to(Router).inSingletonScope();
})

it("Should navigate back to the top from anywhere", () => {
   const navigationPresenter = container.get(NavigationPresenter);
   const routingState = container.get(RoutingState);
   const routerGateway = container.get(RouterGateway);

   routerGateway.goToPath = jest.fn();
   routingState.currentState.routeId = "homeLink";

    expect(navigationPresenter.currentSelectedNavigationNode).toBe("homeLink");
    expect(navigationPresenter.isTop).toBeTruthy();

    //Pivot
    routingState.currentState.routeId = "booksLink";
    expect(navigationPresenter.currentSelectedNavigationNode).toBe("booksLink");
    expect(navigationPresenter.isTop).toBeFalsy();
})