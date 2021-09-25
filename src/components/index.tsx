import React, { CSSProperties } from 'react'
import Container from './Container'
import Node from './Node'
import List from './List'
import { ComponentsProps } from '../types'

export const components = {
  Container,
  List,
  Node,
}
export type NestViewComponentsGeneric = typeof components

export const defaultComponents = <T,>(custom: ComponentsProps<T>) =>
  ({ ...components, ...custom } as NestViewComponentsGeneric)

export interface CommonComponentProps {
  children: React.ReactNode
  style: CSSProperties
}
