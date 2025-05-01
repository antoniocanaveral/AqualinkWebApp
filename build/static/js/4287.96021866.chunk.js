"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4287],{48149:(e,t,n)=>{n.r(t),n.d(t,{AlertWrap:()=>o});var s=n(99985),r=n(19335);const o=(0,r.Ay)(s.A)`
  border-radius: ${e=>{let{shape:t}=e;return t?"40px":"4px"}} !important;
  border-width: 0px !important;
  margin: 15px 0 0 0!important;
  padding: 16.5px 20px!important;
  .ant-alert-message{
    line-height: 1.8;
    margin-bottom: 0 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
  &.ant-alert-with-description{
    .ant-alert-content{
      line-height: 1;
    }
    .ant-alert-message{
      margin-bottom: 10px !important;
      line-height: 1;
    }
    .ant-alert-description{
      font-size: 15px;
      line-height: 1.35;
    }
  }
  &.ant-alert-closable {
    .ant-alert-message{
      display: block;
    }
  }
  .ant-alert-message, 
  .ant-alert-description {
    color: ${e=>{let{type:t,theme:n}=e;return n[`${t}-color`]}};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${e=>{let{type:t,theme:n}=e;return n[`${t}-color`]}};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #9299B8;
  }

  ${e=>{let{outlined:t,theme:n,type:s}=e;return t&&((e,t)=>`\n    border: 1px solid ${e[`${t}-color`]} !important;\n    background: #fff!important;\n    &:hover, &:focus, &:active {\n      .ant-alert-message, .ant-alert-message{\n        color: #fff;\n      }\n    }\n    .ant-alert-message, .ant-alert-message {\n      color: ${e=>{let{theme:n}=e;return n[`${t}-color`]}};\n    }\n  `)(n,s)}}

  ${e=>{let{showIcon:t,theme:n}=e;return t&&`padding: 16px 20px 20px!important;\n    alert-empty-message{\n      padding: 11px 40px 11px!important;\n    }\n    .ant-alert-icon{\n      top: 20px !important;\n      ${n.rtl?"right":"left"}: 15px !important;\n    }\n    .ant-alert-message{\n      margin-top: -2px;\n    }\n    i.ant-alert-icon {\n      color: ${e=>{let{type:t,theme:n}=e;return n[`${t}-color`]}} !important;\n      background: #ffffff80 !important;\n      height: 100%;\n      width: 50px;\n      position: absolute;\n      top: 0;\n      ${n.rtl?"right":"left"}: 0;\n    }`}}


  .ant-alert-close-icon {
    top: 12px !important;
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
`},51773:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(9950);var s=n(48149),r=n(44414);function o(e){const{type:t,icon:n,message:o,description:i,showIcon:a,outlined:c,closable:l,closeText:p}=e;return(0,r.jsx)(s.AlertWrap,{message:o,type:t,description:i,closable:l,showIcon:a&&a,outlined:c,closeText:p&&p,icon:n&&n})}o.defaultProps={type:"success",message:"Hello there! A simple success alert\u2014check it out!"};const i=o},24287:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});n(9950);var s=n(87094),r=n(41988),o=n(3510),i=n(57687),a=n(67482),c=n(29355),l=n(51773),p=n(44414);const d=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.PageHeader,{title:"Alerts",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Alerts"}]}),(0,p.jsx)(a.Main,{children:(0,p.jsxs)(s.A,{gutter:25,children:[(0,p.jsxs)(r.A,{md:12,xs:24,children:[(0,p.jsx)(c.Cards,{title:"Basic",size:"large",children:(0,p.jsx)(a.AlertList,{children:(0,p.jsx)("div",{className:"alert-empty-message",children:(0,p.jsx)(l.default,{message:"",description:"Success Text",type:"success"})})})}),(0,p.jsx)(c.Cards,{title:"Closable",size:"large",children:(0,p.jsxs)(a.AlertList,{children:[(0,p.jsx)("div",{className:"alert-empty-message",children:(0,p.jsx)(l.default,{closable:!0,message:"",description:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning"})}),(0,p.jsx)(l.default,{closable:!0,message:"Error Text",description:"Error Text Error Text Warning TextW Error Text Error Text Error TextError Text",type:"error"})]})}),(0,p.jsx)(c.Cards,{title:"Icon",size:"large",children:(0,p.jsxs)(a.AlertList,{children:[(0,p.jsxs)("div",{className:"alert-empty-message",children:[(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"",description:"Success Tips",type:"success"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"",description:"Informational Notes",type:"info"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"",description:"Warning",type:"warning"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"",description:"Error",type:"error"})]}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"Informational Notes",description:"Additional description and information about copywriting.",type:"info"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"Warning",description:"This is a warning notice about copywriting.",type:"warning"}),(0,p.jsx)(l.default,{showIcon:!0,icon:(0,p.jsx)(o.A,{}),message:"Error",description:"This is an error message about copywriting.",type:"error"})]})})]}),(0,p.jsxs)(r.A,{md:12,xs:24,children:[(0,p.jsx)(c.Cards,{title:"More Types",size:"large",children:(0,p.jsx)(a.AlertList,{children:(0,p.jsxs)("div",{className:"alert-empty-message",children:[(0,p.jsx)(l.default,{message:"",description:"Success Text",type:"success"}),(0,p.jsx)(l.default,{message:"",description:"Info Text",type:"info"}),(0,p.jsx)(l.default,{message:"",description:"Warning Text",type:"warning"}),(0,p.jsx)(l.default,{message:"",description:"Error Text",type:"error"})]})})}),(0,p.jsx)(c.Cards,{title:"Description",size:"large",children:(0,p.jsxs)(a.AlertList,{children:[(0,p.jsx)(l.default,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),(0,p.jsx)(l.default,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),(0,p.jsx)(l.default,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),(0,p.jsx)(l.default,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"})]})}),(0,p.jsx)(c.Cards,{title:"Customized Close Text",size:"large",children:(0,p.jsx)(a.AlertList,{children:(0,p.jsx)("div",{className:"alert-empty-message",children:(0,p.jsx)(l.default,{closeText:"Close Now",closable:!0,message:"",description:"Info Text",type:"info"})})})}),(0,p.jsx)(c.Cards,{title:"Smoothly Unmount",size:"large",children:(0,p.jsx)(a.AlertList,{children:(0,p.jsx)("div",{className:"alert-empty-message",children:(0,p.jsx)(l.default,{closable:!0,message:"",description:"Alert Message Text",type:"success"})})})})]})]})})]})}},99985:(e,t,n)=>{n.d(t,{A:()=>z});var s=n(58168),r=n(5544),o=n(64467),i=n(30767),a=n(41967),c=n(58143),l=n(57560),p=n(94118),d=n(53557),m=n(27379),u=n(17334),x=n(82278),g=n(48738),f=n.n(g),h=n(2144),y=n(9950),j=n(5741),A=n(27373),b=n(39156),v=n(23029),w=n(92901),T=n(56822),E=n(52176),C=n(53954),I=n(85501);const N=function(e){function t(){var e,n,s,r;return(0,v.A)(this,t),n=this,s=t,r=arguments,s=(0,C.A)(s),(e=(0,T.A)(n,(0,E.A)()?Reflect.construct(s,r||[],(0,C.A)(n).constructor):s.apply(n,r))).state={error:void 0,info:{componentStack:""}},e}return(0,I.A)(t,e),(0,w.A)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,s=e.children,r=this.state,o=r.error,i=r.info,a=i&&i.componentStack?i.componentStack:null,c="undefined"===typeof t?(o||"").toString():t,l="undefined"===typeof n?a:n;return o?y.createElement(z,{type:"error",message:c,description:y.createElement("pre",null,l)}):s}}]),t}(y.Component);var D=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n},W={success:i.A,info:u.A,error:c.A,warning:d.A},S={success:a.A,info:x.A,error:l.A,warning:m.A},k=function(e){var t=e.description,n=e.icon,s=e.prefixCls,r=e.type,i=(t?S:W)[r]||null;return n?(0,b.fx)(n,y.createElement("span",{className:"".concat(s,"-icon")},n),(function(){return{className:f()("".concat(s,"-icon"),(0,o.A)({},n.props.className,n.props.className))}})):y.createElement(i,{className:"".concat(s,"-icon")})},$=function(e){var t=e.isClosable,n=e.closeText,s=e.prefixCls,r=e.closeIcon,o=e.handleClose;return t?y.createElement("button",{type:"button",onClick:o,className:"".concat(s,"-close-icon"),tabIndex:0},n?y.createElement("span",{className:"".concat(s,"-close-text")},n):r):null},L=function(e){var t=e.description,n=e.prefixCls,i=e.message,a=e.banner,c=e.className,l=void 0===c?"":c,d=e.style,m=e.onMouseEnter,u=e.onMouseLeave,x=e.onClick,g=e.afterClose,b=e.showIcon,v=e.closable,w=e.closeText,T=e.closeIcon,E=void 0===T?y.createElement(p.A,null):T,C=e.action,I=D(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),N=y.useState(!1),W=(0,r.A)(N,2),S=W[0],L=W[1],z=y.useRef(),O=y.useContext(j.QO),M=O.getPrefixCls,H=O.direction,P=M("alert",n),B=function(e){var t;L(!0),null===(t=I.onClose)||void 0===t||t.call(I,e)},R=!!w||v,F=function(){var e=I.type;return void 0!==e?e:a?"warning":"info"}(),Q=!(!a||void 0!==b)||b,U=f()(P,"".concat(P,"-").concat(F),(0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(P,"-with-description"),!!t),"".concat(P,"-no-icon"),!Q),"".concat(P,"-banner"),!!a),"".concat(P,"-rtl"),"rtl"===H),l),q=(0,A.A)(I);return y.createElement(h.Ay,{visible:!S,motionName:"".concat(P,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:g},(function(e){var n=e.className,r=e.style;return y.createElement("div",(0,s.A)({ref:z,"data-show":!S,className:f()(U,n),style:(0,s.A)((0,s.A)({},d),r),onMouseEnter:m,onMouseLeave:u,onClick:x,role:"alert"},q),Q?y.createElement(k,{description:t,icon:I.icon,prefixCls:P,type:F}):null,y.createElement("div",{className:"".concat(P,"-content")},i?y.createElement("div",{className:"".concat(P,"-message")},i):null,t?y.createElement("div",{className:"".concat(P,"-description")},t):null),C?y.createElement("div",{className:"".concat(P,"-action")},C):null,y.createElement($,{isClosable:!!R,closeText:w,prefixCls:P,closeIcon:E,handleClose:B}))}))};L.ErrorBoundary=N;const z=L}}]);