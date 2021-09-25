import React, { CSSProperties } from 'react'
import { ComponentsProps } from '../types'
export declare const components: {
  Container: import('./Container').ContainerComponentType
  List: import('./List').ListComponentType
  Node: import('./Node').NodeComponentType
}
export declare type NestViewComponentsGeneric = typeof components
export declare const defaultComponents: <T>(custom: ComponentsProps<T>) => {
  Container: import('./Container').ContainerComponentType
  List: import('./List').ListComponentType
  Node: import('./Node').NodeComponentType
}
export interface CommonComponentProps {
  children: React.ReactNode
  style: CSSProperties
}
