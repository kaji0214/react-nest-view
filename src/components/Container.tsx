import React from 'react'
import { CommonComponentProps } from './index'

export interface ContainerComponentProps extends CommonComponentProps {}

export type ContainerComponentType = (
  props: ContainerComponentProps
) => React.ReactElement<ContainerComponentProps>

const Container: ContainerComponentType = ({ children, style }) => (
  <div className='container' style={style}>
    {children}
  </div>
)

export default Container
