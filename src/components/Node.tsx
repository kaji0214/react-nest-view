import React, { CSSProperties } from 'react'
import { NodeProps } from '../types'

export type NodeState = {
  isNodeOpen: boolean
  depth: number
}
export type NodeHelper<T> = {
  setIsNodeOpen: (value: boolean) => void
  setNodes: (nodes: T[]) => void
  parent: T | undefined
}

export interface NodeComponentProps<T> {
  node: NodeProps<T>
  state: NodeState
  helper: NodeHelper<T>
  style: CSSProperties
}

export type NodeComponentType = <T>(
  props: NodeComponentProps<T>
) => React.ReactElement<NodeComponentProps<T>>

const Node: NodeComponentType = ({ node, style }) => (
  <div className='node' style={style}>
    nodes length is {node.nodes && node.nodes.length ? node.nodes.length : 0}
  </div>
)

export default Node
