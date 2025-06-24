import{s as m,c2 as g,j as x,ay as e}from"./index-BJIB_XH5.js";const d=(t,o)=>`
    border: 1px solid ${t[`${o}-color`]} !important;
    background: #fff!important;
    &:hover, &:focus, &:active {
      .ant-alert-message, .ant-alert-message{
        color: #fff;
      }
    }
    .ant-alert-message, .ant-alert-message {
      color: ${({theme:n})=>n[`${o}-color`]};
    }
  `,f=m(g)`
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
    color: ${({type:t,theme:o})=>o[`${t}-color`]};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${({type:t,theme:o})=>o[`${t}-color`]};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #9299B8;
  }

  ${({outlined:t,theme:o,type:n})=>t&&d(o,n)}

  ${({showIcon:t,theme:o})=>t&&`padding: 16px 20px 20px!important;
    alert-empty-message{
      padding: 11px 40px 11px!important;
    }
    .ant-alert-icon{
      top: 20px !important;
      ${o.rtl?"right":"left"}: 15px !important;
    }
    .ant-alert-message{
      margin-top: -2px;
    }
    i.ant-alert-icon {
      color: ${({type:n,theme:a})=>a[`${n}-color`]} !important;
      background: #ffffff80 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      ${o.rtl?"right":"left"}: 0;
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
`;function s(t){const{type:o,icon:n,message:a,description:p,showIcon:r,outlined:l,closable:c,closeText:i}=t;return x.jsx(f,{message:a,type:o,description:p,closable:c,showIcon:r&&r,outlined:l,closeText:i&&i,icon:n&&n})}s.defaultProps={type:"success",message:"Hello there! A simple success alert—check it out!"};s.propTypes={type:e.oneOf(["success","info","warning","error"]),message:e.oneOfType([e.string,e.node]),description:e.oneOfType([e.string,e.node]),showIcon:e.bool,outlined:e.bool,closable:e.bool,closeText:e.oneOfType([e.string,e.node]),icon:e.node};export{s as A};
