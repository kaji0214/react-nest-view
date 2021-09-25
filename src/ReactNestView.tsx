import React from 'react'
import { defaultComponents } from './components'
import { ReactNestViewType } from './types'
import { GetStyles, baseStyle, defaultStyles } from './style'
import Nest from './components/Nest'

const ReactNestView: ReactNestViewType = ({
  nodes,
  isOpen = true,
  styles,
  components,
}) => {
  const { Container, List, Node } = defaultComponents(components)
  const mergedStyle = defaultStyles(styles)

  const getStyles: GetStyles = (key, props) =>
    mergedStyle[key](baseStyle[key], props)

  const containerStyle = getStyles('container', {})
  const listStyle = getStyles('list', { depth: 1, isNodeOpen: isOpen })
  return (
    <Container style={containerStyle}>
      <List style={listStyle}>
        {nodes.map((node, index) => (
          <Nest
            parent={undefined}
            key={index}
            ListComponent={List}
            NodeComponent={Node}
            node={node}
            getStyles={getStyles}
            depth={1}
            isOpen={isOpen}
          />
        ))}
      </List>
    </Container>
  )
}

export default ReactNestView
