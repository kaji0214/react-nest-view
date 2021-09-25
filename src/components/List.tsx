import React from 'react'
import { CommonComponentProps } from './index'

export interface ListComponentProps extends CommonComponentProps {}

export type ListComponentType = (
  props: ListComponentProps
) => React.ReactElement<ListComponentProps>

const List: ListComponentType = ({ children, style }) => (
  <div className='react-nest-view--list' style={style}>
    {children}
  </div>
)

export default List
