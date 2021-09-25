import React from 'react'
import { StylesFunctions } from './style'
import { ContainerComponentType } from './components/Container'
import { ListComponentType } from './components/List'
import { NodeComponentProps } from './components/Node'

export type NodeProps<T> = T & {
  nodes?: NodeProps<T>[]
}
export type ComponentsProps<T> = {
  Container?: ContainerComponentType
  List?: ListComponentType
  Node: (
    props: NodeComponentProps<T>
  ) => React.ReactElement<NodeComponentProps<T>>
}

export interface ReactNestViewProps<T> {
  components: ComponentsProps<T>
  nodes: NodeProps<T>[]
  isOpen?: boolean
  styles?: Partial<StylesFunctions>
}
export type ReactNestViewType = <T>(
  props: ReactNestViewProps<T>
) => React.ReactElement<ReactNestViewProps<T>>
