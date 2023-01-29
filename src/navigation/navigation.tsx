import * as React from 'react'
import { observer } from 'mobx-react'
import { useInjection } from 'inversify-react'
import { NavigationPresenter } from './navigation-presenter'
import { NavigationList } from './navigation-list'
import { NavigationListExpandable } from './navigation-list-expandable'
import { BackToTop } from './back-to-top'
export const Navigation = observer((props: any) => {
    const navigationPresenter = useInjection(NavigationPresenter);
  return (
    <>
      <div className="navigation-container">
        <>
          <div className="navigation-item" style={{ backgroundColor: '#5BCA06' }}>
            {navigationPresenter.findCurrentNode().model.text} {" > "}
            {navigationPresenter.findCurrentNode().model.id}
          </div>
          {navigationPresenter.findCurrentNode().children.map((node: any, i: number) => {
            return node.model.type === "expand" ? <NavigationListExpandable key={i} node={node} /> : <NavigationList key={i} node={node} />
          })}
        </>

        {!navigationPresenter.isTop && <BackToTop />}

        {/* <LogoutComponent /> */}
      </div>
    </>
  )
})