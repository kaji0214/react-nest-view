import { CSSProperties } from 'react';
import { NodeState } from './components/Node';
export interface StylesProps {
    container: CSSProperties;
    list: CSSProperties;
    nest: CSSProperties;
    node: CSSProperties;
}
export interface StylesStateProps {
    container: any;
    list: NodeState;
    nest: any;
    node: NodeState;
}
export declare type StylesFunctions = {
    [K in keyof StylesProps]?: (base: CSSProperties, state: StylesStateProps[K]) => CSSProperties;
};
export declare type GetStyles = <Key extends keyof StylesProps>(propertyName: Key, state: StylesStateProps[Key]) => CSSProperties;
export declare const baseStyle: StylesProps;
export declare const stylesFunctions: StylesFunctions;
export declare const defaultStyles: (custom: Partial<StylesFunctions>) => StylesFunctions;
