import e,{useState as t}from"react";const n={Container:({children:t,style:n})=>e.createElement("div",{className:"container",style:n},t),List:({children:t,style:n})=>e.createElement("div",{className:"react-nest-view--list",style:n},t),Node:({node:t,style:n})=>e.createElement("div",{className:"node",style:n},"nodes length is ",t.nodes&&t.nodes.length?t.nodes.length:0)},s=e=>Object.assign(Object.assign({},n),e),o={list:{marginLeft:"20px"},node:{},nest:{},container:{}},i={list:e=>Object.assign(Object.assign({},e),o.list),node:e=>Object.assign(Object.assign({},e),o.node),container:e=>Object.assign(Object.assign({},e),o.container),nest:e=>Object.assign(Object.assign({},e),o.nest)},a=({getStyles:n,node:s,ListComponent:o,NodeComponent:i,isOpen:l,depth:d,parent:c})=>{var r;const[p,m]=t(l),[g,O]=t(null!==(r=s.nodes)&&void 0!==r?r:[]),y={depth:d,isNodeOpen:p},h={setNodes:O,setIsNodeOpen:m,parent:c};return e.createElement("div",{style:n("nest",{})},e.createElement(i,{node:s,style:n("node",y),state:y,helper:h}),g&&g.length>0&&p&&e.createElement(o,{style:n("list",{depth:1+d,isNodeOpen:p})},g.map(((t,l)=>e.createElement(a,{key:l,ListComponent:o,NodeComponent:i,node:t,getStyles:n,isOpen:!0,depth:d+1,parent:s})))))},l=({nodes:t,isOpen:n=!0,styles:l,components:d})=>{const{Container:c,List:r,Node:p}=s(d),m=(g=l,Object.assign(Object.assign({},i),g));var g;const O=(e,t)=>m[e](o[e],t),y=O("container",{}),h=O("list",{depth:1,isNodeOpen:n});return e.createElement(c,{style:y},e.createElement(r,{style:h},t.map(((t,s)=>e.createElement(a,{parent:void 0,key:s,ListComponent:r,NodeComponent:p,node:t,getStyles:O,depth:1,isOpen:n})))))};export{l as ReactNestView};
