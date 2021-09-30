import React from 'react';
import { CommonComponentProps } from './index';
export interface ListComponentProps extends CommonComponentProps {
}
export declare type ListComponentType = (props: ListComponentProps) => React.ReactElement<ListComponentProps>;
declare const List: ListComponentType;
export default List;
