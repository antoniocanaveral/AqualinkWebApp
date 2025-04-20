"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4159],{48149:(e,t,n)=>{n.r(t),n.d(t,{AlertWrap:()=>r});var o=n(99985),a=n(19335);const r=(0,a.Ay)(o.A)`
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

  ${e=>{let{outlined:t,theme:n,type:o}=e;return t&&((e,t)=>`\n    border: 1px solid ${e[`${t}-color`]} !important;\n    background: #fff!important;\n    &:hover, &:focus, &:active {\n      .ant-alert-message, .ant-alert-message{\n        color: #fff;\n      }\n    }\n    .ant-alert-message, .ant-alert-message {\n      color: ${e=>{let{theme:n}=e;return n[`${t}-color`]}};\n    }\n  `)(n,o)}}

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
`},51773:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(9950);var o=n(48149),a=n(44414);function r(e){const{type:t,icon:n,message:r,description:s,showIcon:c,outlined:i,closable:l,closeText:p}=e;return(0,a.jsx)(o.AlertWrap,{message:r,type:t,description:s,closable:l,showIcon:c&&c,outlined:i,closeText:p&&p,icon:n&&n})}r.defaultProps={type:"success",message:"Hello there! A simple success alert\u2014check it out!"};const s=r},26540:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var o=n(51773),a=n(87827),r=n(87094),s=n(41988),c=n(55902),i=n(48538),l=n(9950),p=n(73878),m=n(28429),u=n(42074),d=(n(18860),n(82771)),h=n(25299),f=n(66081),x=n(44414);const g=function(){const e=(0,m.Zp)(),t=(0,p.wA)(),n=(0,p.d4)((e=>e.auth.loading)),[g]=a.A.useForm(),[v,A]=(0,l.useState)({checked:null}),[y,b]=(0,l.useState)(!1),[j,k]=(0,l.useState)(""),C=(0,l.useCallback)((n=>{t((0,h.login)(n,((t,n)=>{n?(console.log(JSON.stringify(n)),b(!0),n.invalidTokenError?k("Usuario y/o contrase\xf1a incorrectos."):n.networkError?k("No es posible conectar con el servidor."):k("Ocurri\xf3 un error desconocido")):e(t?"/ecosystem":"/roles")})))}),[e,t]);return(0,x.jsx)(r.A,{justify:"center",children:(0,x.jsx)(s.A,{xxl:6,xl:8,md:12,sm:18,xs:24,children:(0,x.jsxs)(d.AuthFormWrap,{children:[(0,x.jsx)("div",{className:"ninjadash-authentication-top",children:(0,x.jsx)("h2",{className:"ninjadash-authentication-top__title",children:"Iniciar Sesi\xf3n"})}),(0,x.jsx)("div",{className:"ninjadash-authentication-content",children:(0,x.jsxs)(a.A,{name:"login",form:g,onFinish:C,layout:"vertical",children:[y&&(0,x.jsx)("div",{style:{marginBottom:15},children:(0,x.jsx)(o.default,{message:"Error",description:j,type:"error"})}),(0,x.jsx)(a.A.Item,{name:"userName",rules:[{message:"Por favor ingrese su usuario o correo electr\xf3nico!",required:!0}],initialValue:"",label:"",children:(0,x.jsx)(c.A,{placeholder:"Ingrese su Usuario o Correo Electr\xf3nico"})}),(0,x.jsx)(a.A.Item,{name:"password",initialValue:"",label:"Contrase\xf1a",children:(0,x.jsx)(c.A.Password,{placeholder:" Ingrese su Contrase\xf1a"})}),(0,x.jsxs)("div",{className:"ninjadash-auth-extra-links",children:[(0,x.jsx)(f.Checkbox,{onChange:e=>{A({...v,checked:e})},checked:v.checked,children:"Mantenerme conectado"}),(0,x.jsx)(u.k2,{className:"forgot-pass-link",to:"/forgotPassword",children:"Olvidaste tu contrase\xf1a?"})]}),(0,x.jsx)(a.A.Item,{children:(0,x.jsx)(i.A,{className:"btn-signin",htmlType:"submit",type:"primary",size:"large",children:n?"Cargando...":"Ingresar a AquaLink"})})]})}),(0,x.jsx)("div",{className:"ninjadash-authentication-bottom",children:(0,x.jsxs)("p",{children:["No tienes una cuenta a\xfan?",(0,x.jsx)(u.N_,{to:"https://aquamanagerlatam.com/site/planes-y-precios/",children:"Reg\xedstrate en AquaLink"})]})})]})})})}},99985:(e,t,n)=>{n.d(t,{A:()=>M});var o=n(58168),a=n(5544),r=n(64467),s=n(30767),c=n(41967),i=n(58143),l=n(57560),p=n(94118),m=n(53557),u=n(27379),d=n(17334),h=n(82278),f=n(48738),x=n.n(f),g=n(2144),v=n(9950),A=n(5741),y=n(27373),b=n(39156),j=n(23029),k=n(92901),C=n(56822),N=n(52176),w=n(53954),E=n(85501);const I=function(e){function t(){var e,n,o,a;return(0,j.A)(this,t),n=this,o=t,a=arguments,o=(0,w.A)(o),(e=(0,C.A)(n,(0,N.A)()?Reflect.construct(o,a||[],(0,w.A)(n).constructor):o.apply(n,a))).state={error:void 0,info:{componentStack:""}},e}return(0,E.A)(t,e),(0,k.A)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,o=e.children,a=this.state,r=a.error,s=a.info,c=s&&s.componentStack?s.componentStack:null,i="undefined"===typeof t?(r||"").toString():t,l="undefined"===typeof n?c:n;return r?v.createElement(M,{type:"error",message:i,description:v.createElement("pre",null,l)}):o}}]),t}(v.Component);var $=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},S={success:s.A,info:d.A,error:i.A,warning:m.A},O={success:c.A,info:h.A,error:l.A,warning:u.A},P=function(e){var t=e.description,n=e.icon,o=e.prefixCls,a=e.type,s=(t?O:S)[a]||null;return n?(0,b.fx)(n,v.createElement("span",{className:"".concat(o,"-icon")},n),(function(){return{className:x()("".concat(o,"-icon"),(0,r.A)({},n.props.className,n.props.className))}})):v.createElement(s,{className:"".concat(o,"-icon")})},T=function(e){var t=e.isClosable,n=e.closeText,o=e.prefixCls,a=e.closeIcon,r=e.handleClose;return t?v.createElement("button",{type:"button",onClick:r,className:"".concat(o,"-close-icon"),tabIndex:0},n?v.createElement("span",{className:"".concat(o,"-close-text")},n):a):null},L=function(e){var t=e.description,n=e.prefixCls,s=e.message,c=e.banner,i=e.className,l=void 0===i?"":i,m=e.style,u=e.onMouseEnter,d=e.onMouseLeave,h=e.onClick,f=e.afterClose,b=e.showIcon,j=e.closable,k=e.closeText,C=e.closeIcon,N=void 0===C?v.createElement(p.A,null):C,w=e.action,E=$(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),I=v.useState(!1),S=(0,a.A)(I,2),O=S[0],L=S[1],M=v.useRef(),H=v.useContext(A.QO),q=H.getPrefixCls,z=H.direction,B=q("alert",n),D=function(e){var t;L(!0),null===(t=E.onClose)||void 0===t||t.call(E,e)},F=!!k||j,R=function(){var e=E.type;return void 0!==e?e:c?"warning":"info"}(),W=!(!c||void 0!==b)||b,_=x()(B,"".concat(B,"-").concat(R),(0,r.A)((0,r.A)((0,r.A)((0,r.A)({},"".concat(B,"-with-description"),!!t),"".concat(B,"-no-icon"),!W),"".concat(B,"-banner"),!!c),"".concat(B,"-rtl"),"rtl"===z),l),U=(0,y.A)(E);return v.createElement(g.Ay,{visible:!O,motionName:"".concat(B,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:f},(function(e){var n=e.className,a=e.style;return v.createElement("div",(0,o.A)({ref:M,"data-show":!O,className:x()(_,n),style:(0,o.A)((0,o.A)({},m),a),onMouseEnter:u,onMouseLeave:d,onClick:h,role:"alert"},U),W?v.createElement(P,{description:t,icon:E.icon,prefixCls:B,type:R}):null,v.createElement("div",{className:"".concat(B,"-content")},s?v.createElement("div",{className:"".concat(B,"-message")},s):null,t?v.createElement("div",{className:"".concat(B,"-description")},t):null),w?v.createElement("div",{className:"".concat(B,"-action")},w):null,v.createElement(T,{isClosable:!!F,closeText:k,prefixCls:B,closeIcon:N,handleClose:D}))}))};L.ErrorBoundary=I;const M=L}}]);