"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);const s={Container:({children:e,style:t})=>n.default.createElement("div",{className:"container",style:t},e),List:({children:e,style:t})=>n.default.createElement("div",{className:"react-nest-view--list",style:t},e),Node:({node:e,style:t})=>n.default.createElement("div",{className:"node",style:t},"nodes length is ",e.nodes&&e.nodes.length?e.nodes.length:0)},a=e=>Object.assign(Object.assign({},s),e),o={list:{marginLeft:"20px"},node:{},nest:{},container:{}},l={list:e=>Object.assign(Object.assign({},e),o.list),node:e=>Object.assign(Object.assign({},e),o.node),container:e=>Object.assign(Object.assign({},e),o.container),nest:e=>Object.assign(Object.assign({},e),o.nest)},d=({getStyles:t,node:s,ListComponent:a,NodeComponent:o,isOpen:l,depth:i,parent:c})=>{var r;const[p,m]=e.useState(l),[u,O]=e.useState(null!==(r=s.nodes)&&void 0!==r?r:[]),g={depth:i,isNodeOpen:p},y={setNodes:O,setIsNodeOpen:m,parent:c};return n.default.createElement("div",{style:t("nest",{})},n.default.createElement(o,{node:s,style:t("node",g),state:g,helper:y}),u&&u.length>0&&p&&n.default.createElement(a,{style:t("list",{depth:1+i,isNodeOpen:p})},u.map(((e,l)=>n.default.createElement(d,{key:l,ListComponent:a,NodeComponent:o,node:e,getStyles:t,isOpen:!0,depth:i+1,parent:s})))))};exports.ReactNestView=({nodes:e,isOpen:t=!0,styles:s,components:i})=>{const{Container:c,List:r,Node:p}=a(i),m=(u=s,Object.assign(Object.assign({},l),u));var u;const O=(e,t)=>m[e](o[e],t),g=O("container",{}),y=O("list",{depth:1,isNodeOpen:t});return n.default.createElement(c,{style:g},n.default.createElement(r,{style:y},e.map(((e,s)=>n.default.createElement(d,{parent:void 0,key:s,ListComponent:r,NodeComponent:p,node:e,getStyles:O,depth:1,isOpen:t})))))};
