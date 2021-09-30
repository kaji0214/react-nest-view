import React, { CSSProperties } from 'react';
import { NodeProps } from '../types';
export declare type NodeState = {
    isNodeOpen: boolean;
    depth: number;
};
export declare type NodeHelper<T> = {
    setIsNodeOpen: (value: boolean) => void;
    setNodes: (nodes: T[]) => void;
    parent: T | undefined;
};
export interface NodeComponentProps<T> {
    node: NodeProps<T>;
    state: NodeState;
    helper: NodeHelper<T>;
    style: CSSProperties;
}
export declare type NodeComponentType = <T>(props: NodeComponentProps<T>) => React.ReactElement<NodeComponentProps<T>>;
declare const Node: NodeComponentType;
export default Node;
