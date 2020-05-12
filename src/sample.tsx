import * as React from 'react'

const Child: React.FC = props => (
  <div>{props.children}</div>
)

const Parent: React.FC<{ childLabel: string }> = props => (
  <Child>
    {props.childLabel}
  </Child>
)