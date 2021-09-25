import React from 'react'
import { CommonComponentProps } from './index'
export interface ContainerComponentProps extends CommonComponentProps {}
export declare type ContainerComponentType = (
  props: ContainerComponentProps
) => React.ReactElement<ContainerComponentProps>
declare const Container: ContainerComponentType
export default Container
