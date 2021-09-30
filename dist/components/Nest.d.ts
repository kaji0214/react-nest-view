import React from 'react';
import { NodeProps } from '../types';
import { ListComponentType } from './List';
import { NodeComponentType } from './Node';
import { GetStyles } from '../style';
interface CombineComponentProps<T> {
    ListComponent: ListComponentType;
    NodeComponent: NodeComponentType;
    node: NodeProps<T>;
    getStyles: GetStyles;
    isOpen: boolean;
    depth: number;
    parent: NodeProps<T> | undefined;
}
export declare type CombineComponentType = <T>(props: CombineComponentProps<T>) => React.ReactElement<CombineComponentProps<T>>;
declare const Nest: CombineComponentType;
export default Nest;
