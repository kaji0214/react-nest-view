import { CSSProperties } from 'react'
import { NodeState } from './components/Node'

export interface StylesProps {
  container: CSSProperties
  list: CSSProperties
  nest: CSSProperties
  node: CSSProperties
}
export interface StylesStateProps {
  container: any
  list: NodeState
  nest: any
  node: NodeState
}

export type StylesFunctions = {
  [K in keyof StylesProps]?: (
    base: CSSProperties,
    state: StylesStateProps[K]
  ) => CSSProperties
}

export type GetStyles = <Key extends keyof StylesProps>(
  propertyName: Key,
  state: StylesStateProps[Key]
) => CSSProperties

export const baseStyle: StylesProps = {
  list: {
    marginLeft: '20px',
  },
  node: {},
  nest: {},
  container: {},
}
export const stylesFunctions: StylesFunctions = {
  list: (base) => ({ ...base, ...baseStyle.list }),
  node: (base) => ({ ...base, ...baseStyle.node }),
  container: (base) => ({ ...base, ...baseStyle.container }),
  nest: (base) => ({ ...base, ...baseStyle.nest }),
}

export const defaultStyles = (custom: Partial<StylesFunctions>) =>
  ({ ...stylesFunctions, ...custom } as StylesFunctions)
