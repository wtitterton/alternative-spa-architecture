import * as React from 'react'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './current-page-presenter'
import {Home } from './home';
import {LoginRegistrationPage} from './login'
import { useInjection } from 'inversify-react';
import { Navigation, NavigationPresenter } from './navigation';

export const CurrentPage = observer((props: any) => {
  const currentPagePresenter = useInjection(CurrentPagePresenter);
  const navigationPresenter = useInjection(NavigationPresenter);

  React.useEffect(() => {
    currentPagePresenter.bootstrap()
  })

  const renderedComponents = [
    {
      id: 'homeLink',
      component: <Home key="home" />
    },
    {
      id: 'booksLink',
      component: <Home key="booksLink" />
    }
  ]


  return (
    <div>
      {currentPagePresenter.currentRouteId === 'loginLink' ? (
        <div><LoginRegistrationPage /></div>
      ) : (
        <div className='container'>
          <div className='left'>
            <Navigation />
          </div>
          <div className='right'>
            {renderedComponents.map((current) => {
            return currentPagePresenter.currentRouteId === current.id && current.component
          })}
          </div>  
        </div>
      )}
    </div>
  )
})
