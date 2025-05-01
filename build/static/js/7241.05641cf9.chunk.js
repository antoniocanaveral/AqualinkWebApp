"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7241],{71222:(e,t,a)=>{a.r(t),a.d(t,{MainWraper:()=>o,SocialIcon:()=>n});var r=a(19335);const o=r.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 18px 0;
  h1{
    font-size: 22px;
    font-weight: 600;
    padding-top: 5px;
    margin: 0;
  }
  p{
    margin: 0;
    color: #868EAE;
  }
  .social-icon{
    span{
      font-size: 20px;
    }
  }
`,n=r.Ay.div`
  width: 50px;
  height: 50px;
  background: ${e=>{let{bgColor:t}=e;return t}};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`},81182:(e,t,a)=>{a.r(t),a.d(t,{SocialMediaContent:()=>l});a(9950);var r=a(54963),o=a.n(r),n=a(71222),i=a(42017),s=a(44414);function l(e){const{icon:t,bgColor:a,title:r,subTitle:l}=e;return(0,s.jsxs)(n.MainWraper,{children:[(0,s.jsx)(n.SocialIcon,{className:"social-icon",bgColor:a,children:(0,s.jsx)(o(),{className:"super-crazy-colors",name:t,size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}})}),(0,s.jsx)(i.default,{as:"h1",children:r}),(0,s.jsx)("p",{children:l})]})}},37241:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});a(9950);var r=a(87094),o=a(41988),n=a(34166),i=a(29355),s=a(81182),l=a(44414);const u=function(){return(0,l.jsx)(n.SocialMediaWrapper,{children:(0,l.jsx)(i.Cards,{title:"Social Media Overview",size:"large",children:(0,l.jsxs)(r.A,{gutter:25,children:[(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"facebook",bgColor:"#2366B8",title:"5,461",subTitle:"Likes"})}),(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"twitter",bgColor:"#00ABE4",title:"5,461",subTitle:"Followers"})}),(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"instagram",bgColor:"linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)",title:"5,461",subTitle:"Followers"})}),(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"youtube-play",bgColor:"#E32212",title:"5,461",subTitle:"Subscribers"})}),(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"pinterest-p",bgColor:"#E32212",title:"5,461",subTitle:"Followers"})}),(0,l.jsx)(o.A,{xxl:8,md:4,xs:8,children:(0,l.jsx)(s.SocialMediaContent,{icon:"linkedin",bgColor:"#007CBC",title:"5,461",subTitle:"Followers"})})]})})})}},54963:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=s(a(9950)),i=s(a(11942));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.border,a=e.cssModule,o=e.className,i=e.fixedWidth,s=e.flip,l=e.inverse,u=e.name,c=e.pulse,f=e.rotate,p=e.size,d=e.spin,h=e.stack,x=e.tag,b=void 0===x?"span":x,g=e.ariaLabel,j=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),y=g?{"aria-label":g}:{"aria-hidden":!0},m=[];return a?(m.push(a.fa),m.push(a["fa-"+u]),p&&m.push(a["fa-"+p]),d&&m.push(a["fa-spin"]),c&&m.push(a["fa-pulse"]),t&&m.push(a["fa-border"]),i&&m.push(a["fa-fw"]),l&&m.push(a["fa-inverse"]),s&&m.push(a["fa-flip-"+s]),f&&m.push(a["fa-rotate-"+f]),h&&m.push(a["fa-stack-"+h])):(m.push("fa"),m.push("fa-"+u),p&&m.push("fa-"+p),d&&m.push("fa-spin"),c&&m.push("fa-pulse"),t&&m.push("fa-border"),i&&m.push("fa-fw"),l&&m.push("fa-inverse"),s&&m.push("fa-flip-"+s),f&&m.push("fa-rotate-"+f),h&&m.push("fa-stack-"+h)),o&&m.push(o),n.default.createElement(b,r({},j,y,{className:m.join(" ")}))}}]),t}(n.default.Component);l.propTypes={ariaLabel:i.default.string,border:i.default.bool,className:i.default.string,cssModule:i.default.object,fixedWidth:i.default.bool,flip:i.default.oneOf(["horizontal","vertical"]),inverse:i.default.bool,name:i.default.string.isRequired,pulse:i.default.bool,rotate:i.default.oneOf([90,180,270]),size:i.default.oneOf(["lg","2x","3x","4x","5x"]),spin:i.default.bool,stack:i.default.oneOf(["1x","2x"]),tag:i.default.string},t.default=l,e.exports=t.default}}]);