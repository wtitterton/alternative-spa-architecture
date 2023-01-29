import * as React from 'react'
import { observer } from 'mobx-react'
import { useInjection } from 'inversify-react'
import { Router } from '../routing'
import { NavigationPresenter } from './navigation-presenter'

export const BackToTop = observer(({node}: any) => {
    const navigationPresenter = useInjection(NavigationPresenter);

  return (
    <>
      <div
        className="navigation-item"
        style={{ backgroundColor: '#2e91fc' }}
        onClick={() => {navigationPresenter.backToTop()}}
      >
        back to top
      </div>
      
    </>
  )
})