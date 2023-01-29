import * as React from 'react'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './current-page-presenter'
import {Home } from './home';
import {LoginRegistrationPage} from './login'
import { useInjection } from 'inversify-react';
import { Navigation, NavigationPresenter } from './navigation';
import { AddBooks, Books } from './books';
import { AddAuthors, Authors, Map, Policy } from './authors';

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
      component: <Books key="booksLink" />
    },
    {
      id: 'addBooksLink',
      component: <AddBooks key="addBooksLink" />
    },
    {
      id: 'authorsLink',
      component: <Authors key="authorsLink" />
    },
    {
      id: 'addAuthorsLink',
      component: <AddAuthors key="addAuthorsLink" />
    },
    {
      id: 'authorsPolicyLink',
      component: <Policy key="authorsPolicyLink" />
    },
    {
      id: 'authorsMapLink',
      component: <Map key="authorsMapLink" />
    },
  ]

console.log(currentPagePresenter.currentRouteId);
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
