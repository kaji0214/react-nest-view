import React, { CSSProperties } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import FolderIcon from '@mui/icons-material/Folder'
import { ListItemIcon } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ReactNestView from '../src/ReactNestView'
import { NodeState } from '../src/components/Node'

const FlatToNested = require('flat-to-nested')

export default {
  title: 'Example/ReactNestView',
  component: ReactNestView,
} as ComponentMeta<typeof ReactNestView>

const flatToNested = new FlatToNested({
  parent: 'parent',
  children: 'nodes',
})

type FlatDataProps = {
  id: number
  name: string
  parent: number | null
}

type NestDataProps = {
  id: number
  name: string
  nodes: NestDataProps[]
}

const data: FlatDataProps[] = [
  { id: 1, name: 'node-1', parent: null },
  { id: 2, name: 'node-2', parent: null },
  { id: 3, name: 'node-1-1', parent: 1 },
  { id: 4, name: 'node-1-2', parent: 1 },
  { id: 5, name: 'node-1-2-1', parent: 4 },
  { id: 6, name: 'node-1-2-2', parent: 4 },
]

const nested: { nodes: NestDataProps[] } = flatToNested.convert(data)

const Template: ComponentStory<typeof ReactNestView> = (args) => (
  <ReactNestView
    {...args}
    nodes={nested.nodes}
    components={{
      Node: ({ node, style }) => <div style={style}>{node.name}</div>,
    }}
  />
)

export const CustomStyles = Template.bind({})
CustomStyles.args = {
  styles: {
    container: (base: CSSProperties) => ({
      ...base,
      border: '1px solid yellow',
      margin: '5px',
      padding: '5px',
    }),
    nest: (base: CSSProperties) => ({
      ...base,
      border: '1px solid blue',
      margin: '5px',
      padding: '5px',
    }),
    list: (base: CSSProperties) => ({
      ...base,
      border: '1px solid green',
      margin: '5px',
      padding: '5px',
    }),
    node: (base: CSSProperties) => ({
      ...base,
      border: '1px solid red',
      margin: '5px',
      padding: '5px',
    }),
  },
}

export const StylesWithDepth = Template.bind({})

StylesWithDepth.args = {
  styles: {
    list: (base: CSSProperties, state: NodeState) => ({
      ...base,
      // eslint-disable-next-line no-bitwise
      marginLeft: `${(state.depth * 10) ^ 2}px`,
    }),
    node: (base: CSSProperties, state: NodeState) => ({
      ...base,
      fontSize: `${state.depth * 10}px`,
    }),
  },
}

const MuiTemplate: ComponentStory<typeof ReactNestView> = () => (
  <ReactNestView
    nodes={nested.nodes}
    components={{
      Container: ({ children, style }) => <div style={style}>{children}</div>,
      List: ({ children, style }) => (
        <Box
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          style={style}
        >
          <nav aria-label='main mailbox folders'>
            <CustomList>{children}</CustomList>
          </nav>
        </Box>
      ),
      Node: ({ node, state, helper }) => {
        let RightIcon = null
        if (node.nodes && node.nodes.length) {
          if (state.isNodeOpen) {
            RightIcon = <KeyboardArrowDownIcon />
          } else {
            RightIcon = <KeyboardArrowUpIcon />
          }
        }
        return (
          <ListItem disablePadding>
            <ListItemButton>
              {node.nodes && node.nodes.length ? (
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
              ) : null}
              <ListItemButton>
                <ListItemText
                  primary={node.name}
                  onClick={() => alert(JSON.stringify(node))}
                />
              </ListItemButton>
              <ListItemIcon
                onClick={() => helper.setIsNodeOpen(!state.isNodeOpen)}
              >
                {RightIcon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )
      },
    }}
  />
)
export const MaterialUI = MuiTemplate.bind({})
const CustomList = styled(List)`
  border: 1px solid gray;
  marginLeft: 20px

  :hover {
    color: #2e8b57;
  }
`
