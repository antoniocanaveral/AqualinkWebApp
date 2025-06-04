import{c0 as K,c1 as Q,c2 as U,r as a,c3 as V,c4 as P,c5 as X,bu as Y,bo as Z,bq as $,br as h,c6 as ee,c7 as te,bp as b,c8 as oe,c9 as ne,ca as re,cb as ae,cc as se,cd as ce,ce as le,cf as ie,cg as pe,ch as fe,s as me,j as ue,ay as s}from"./index-B54C9UsK.js";function de(t,e,n){return e=P(e),V(t,X()?Reflect.construct(e,n||[],P(t).constructor):e.apply(t,n))}var ge=function(t){K(e,t);function e(){var n;return Q(this,e),n=de(this,e,arguments),n.state={error:void 0,info:{componentStack:""}},n}return U(e,[{key:"componentDidCatch",value:function(o,r){this.setState({error:o,info:r})}},{key:"render",value:function(){var o=this.props,r=o.message,c=o.description,i=o.children,m=this.state,f=m.error,u=m.info,v=u&&u.componentStack?u.componentStack:null,C=typeof r>"u"?(f||"").toString():r,y=typeof c>"u"?v:c;return f?a.createElement(I,{type:"error",message:C,description:a.createElement("pre",null,y)}):i}}]),e}(a.Component),xe=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n},he={success:pe,info:ie,error:le,warning:ce},ve={success:se,info:ae,error:re,warning:ne},Ce=function(e){var n=e.description,o=e.icon,r=e.prefixCls,c=e.type,i=(n?ve:he)[c]||null;return o?oe(o,a.createElement("span",{className:"".concat(r,"-icon")},o),function(){return{className:$("".concat(r,"-icon"),h({},o.props.className,o.props.className))}}):a.createElement(i,{className:"".concat(r,"-icon")})},ye=function(e){var n=e.isClosable,o=e.closeText,r=e.prefixCls,c=e.closeIcon,i=e.handleClose;return n?a.createElement("button",{type:"button",onClick:i,className:"".concat(r,"-close-icon"),tabIndex:0},o?a.createElement("span",{className:"".concat(r,"-close-text")},o):c):null},I=function(e){var n=e.description,o=e.prefixCls,r=e.message,c=e.banner,i=e.className,m=i===void 0?"":i,f=e.style,u=e.onMouseEnter,v=e.onMouseLeave,C=e.onClick,y=e.afterClose,E=e.showIcon,j=e.closable,w=e.closeText,N=e.closeIcon,L=N===void 0?a.createElement(fe,null):N,S=e.action,d=xe(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),_=a.useState(!1),T=Y(_,2),O=T[0],z=T[1],B=a.useRef(),R=a.useContext(Z),D=R.getPrefixCls,H=R.direction,l=D("alert",o),q=function(p){var x;z(!0),(x=d.onClose)===null||x===void 0||x.call(d,p)},F=function(){var p=d.type;return p!==void 0?p:c?"warning":"info"},W=w?!0:j,k=F(),M=c&&E===void 0?!0:E,G=$(l,"".concat(l,"-").concat(k),h(h(h(h({},"".concat(l,"-with-description"),!!n),"".concat(l,"-no-icon"),!M),"".concat(l,"-banner"),!!c),"".concat(l,"-rtl"),H==="rtl"),m),J=ee(d);return a.createElement(te,{visible:!O,motionName:"".concat(l,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(p){return{maxHeight:p.offsetHeight}},onLeaveEnd:y},function(g){var p=g.className,x=g.style;return a.createElement("div",b({ref:B,"data-show":!O,className:$(G,p),style:b(b({},f),x),onMouseEnter:u,onMouseLeave:v,onClick:C,role:"alert"},J),M?a.createElement(Ce,{description:n,icon:d.icon,prefixCls:l,type:k}):null,a.createElement("div",{className:"".concat(l,"-content")},r?a.createElement("div",{className:"".concat(l,"-message")},r):null,n?a.createElement("div",{className:"".concat(l,"-description")},n):null),S?a.createElement("div",{className:"".concat(l,"-action")},S):null,a.createElement(ye,{isClosable:!!W,closeText:w,prefixCls:l,closeIcon:L,handleClose:q}))})};I.ErrorBoundary=ge;const be=(t,e)=>`
    border: 1px solid ${t[`${e}-color`]} !important;
    background: #fff!important;
    &:hover, &:focus, &:active {
      .ant-alert-message, .ant-alert-message{
        color: #fff;
      }
    }
    .ant-alert-message, .ant-alert-message {
      color: ${({theme:n})=>n[`${e}-color`]};
    }
  `,$e=me(I)`
  border-radius: ${({shape:t})=>t?"40px":"4px"} !important;
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
    color: ${({type:t,theme:e})=>e[`${t}-color`]};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${({type:t,theme:e})=>e[`${t}-color`]};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #9299B8;
  }

  ${({outlined:t,theme:e,type:n})=>t&&be(e,n)}

  ${({showIcon:t,theme:e})=>t&&`padding: 16px 20px 20px!important;
    alert-empty-message{
      padding: 11px 40px 11px!important;
    }
    .ant-alert-icon{
      top: 20px !important;
      ${e.rtl?"right":"left"}: 15px !important;
    }
    .ant-alert-message{
      margin-top: -2px;
    }
    i.ant-alert-icon {
      color: ${({type:n,theme:o})=>o[`${n}-color`]} !important;
      background: #ffffff80 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      ${e.rtl?"right":"left"}: 0;
    }`}


  .ant-alert-close-icon {
    top: 12px !important;
    ${({theme:t})=>t.rtl?"left":"right"}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
`;function A(t){const{type:e,icon:n,message:o,description:r,showIcon:c,outlined:i,closable:m,closeText:f}=t;return ue.jsx($e,{message:o,type:e,description:r,closable:m,showIcon:c&&c,outlined:i,closeText:f&&f,icon:n&&n})}A.defaultProps={type:"success",message:"Hello there! A simple success alert—check it out!"};A.propTypes={type:s.oneOf(["success","info","warning","error"]),message:s.oneOfType([s.string,s.node]),description:s.oneOfType([s.string,s.node]),showIcon:s.bool,outlined:s.bool,closable:s.bool,closeText:s.oneOfType([s.string,s.node]),icon:s.node};export{A};
