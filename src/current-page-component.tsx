import * as React from 'react'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './current-page-presenter'
import {Home} from './pages';
import { useInjection } from 'inversify-react';

export const CurrentPage = observer((props: any) => {
  const currentPagePresenter = useInjection(CurrentPagePresenter);

  React.useEffect(() => {
    currentPagePresenter.bootstrap()
  })

  const renderedComponents = [
    {
      id: 'homeLink',
      component: <Home key="homePage" />
    },
    {
      id: 'booksLink',
      component: <Home key="booksLink" />
    }
  ]
  return (
    <div>
      {currentPagePresenter.currentRouteId === 'loginLink' ? (
        <div>Create the login and register page</div>
      ) : (
        <div>Create the navigation menu and content pages</div>
      )}
    </div>
  )
})
