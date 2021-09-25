import React, { useState } from 'react'
import { NodeProps } from '../types'
import { ListComponentType } from './List'
import { NodeComponentType, NodeHelper, NodeState } from './Node'
import { GetStyles } from '../style'

interface CombineComponentProps<T> {
  ListComponent: ListComponentType
  NodeComponent: NodeComponentType
  node: NodeProps<T>
  getStyles: GetStyles
  isOpen: boolean
  depth: number
  parent: NodeProps<T> | undefined
}

export type CombineComponentType = <T>(
  props: CombineComponentProps<T>
) => React.ReactElement<CombineComponentProps<T>>

const Nest: CombineComponentType = ({
  getStyles,
  node,
  ListComponent,
  NodeComponent,
  isOpen,
  depth,
  parent = undefined,
}) => {
  const [isNodeOpen, setIsNodeOpen] = useState(isOpen)
  type NodeType = typeof node
  const [nodes, setNodes] = useState<NodeType[]>(node.nodes ?? [])
  const nodeState: NodeState = {
    depth,
    isNodeOpen,
  }

  const nodeHelper: NodeHelper<typeof node> = {
    setNodes,
    setIsNodeOpen,
    parent,
  }
  return (
    <div style={getStyles('nest', {})}>
      <NodeComponent
        node={node}
        style={getStyles('node', nodeState)}
        state={nodeState}
        helper={nodeHelper}
      />
      {nodes && nodes.length > 0 && isNodeOpen && (
        <ListComponent
          style={getStyles('list', { depth: 1 + depth, isNodeOpen })}
        >
          {nodes.map((item, index) => (
            <Nest
              key={index}
              ListComponent={ListComponent}
              NodeComponent={NodeComponent}
              node={item}
              getStyles={getStyles}
              isOpen
              depth={depth + 1}
              parent={node}
            />
          ))}
        </ListComponent>
      )}
    </div>
  )
}

export default Nest
