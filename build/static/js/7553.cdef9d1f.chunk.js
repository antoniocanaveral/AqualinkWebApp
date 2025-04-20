"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[7553],{57553:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});n(9950);var r=n(92759),o=n(87094),i=n(41988),a=n(52735),l=n(55067),d=n(79378),p=n(94889),m=n(42074),c=n(52596),h=n(57687),s=n(67482),x=n(29355),g=n(59377),u=n(72449),b=n(44414);const f=function(){return(0,b.jsxs)(c.DropdownStyle,{children:[(0,b.jsx)(h.PageHeader,{title:"Dropdown",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Dropdown"}]}),(0,b.jsx)(s.Main,{children:(0,b.jsxs)(o.A,{gutter:25,children:[(0,b.jsxs)(i.A,{md:12,xs:24,children:[(0,b.jsx)(x.Cards,{title:"Basic Dropdown",caption:"The simplest use of Steps",children:(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",children:(0,b.jsx)(m.N_,{to:"#",children:"Hover me"})})}),(0,b.jsxs)(x.Cards,{title:"Event menu ",caption:"The simplest use of Dropdown",children:[(0,b.jsx)(g.Dropdown,{action:["hover"],placement:"bottomLeft",children:(0,b.jsx)(m.N_,{to:"#",children:"hover me "})}),(0,b.jsx)(g.Dropdown,{action:["click"],placement:"bottom",children:(0,b.jsx)(m.N_,{to:"#",children:"click "})}),(0,b.jsx)(g.Dropdown,{action:["contextMenu"],placement:"bottomRight",children:(0,b.jsx)(m.N_,{to:"#",children:"context"})})]})]}),(0,b.jsxs)(i.A,{md:12,xs:24,children:[(0,b.jsxs)(x.Cards,{title:"Placement",caption:"The simplest use of Dropdown",children:[(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Left"})}),(0,b.jsx)(g.Dropdown,{placement:"bottom",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Center"})}),(0,b.jsx)(g.Dropdown,{placement:"bottomRight",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Bottom Right"})}),(0,b.jsx)("br",{}),(0,b.jsx)(g.Dropdown,{placement:"topLeft",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Left"})}),(0,b.jsx)(g.Dropdown,{placement:"topCenter",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Center"})}),(0,b.jsx)(g.Dropdown,{placement:"topRight",children:(0,b.jsx)(u.Button,{className:"btn-outlined",size:"small",outlined:!0,type:"light",children:"Top Right"})})]}),(0,b.jsx)(x.Cards,{title:"Button with dropdown menu",caption:"The simplest use of Dropdown",children:(0,b.jsxs)(c.DropdownIconStyleWrapper,{children:[(0,b.jsxs)(u.Button,{onClick:function(){r.Ay.info("Click on left button.")},className:"btn-outlined",size:"default",outlined:!0,type:"light",children:["Bottom Left Click",(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",action:["hover"],children:(0,b.jsx)(l.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Bottom Right hover",(0,b.jsx)(g.Dropdown,{placement:"bottomRight",title:"with title",children:(0,b.jsx)(d.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Top Left hover",(0,b.jsx)(g.Dropdown,{placement:"topLeft",children:(0,b.jsx)(l.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Top Right hover",(0,b.jsx)(g.Dropdown,{placement:"topRight",children:(0,b.jsx)(l.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"error",children:[(0,b.jsx)(a.A,{title:"tooltip",children:"Tooltip"},"leftButton"),(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,b.jsx)(l.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"warning",children:["Warning",(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,b.jsx)(l.A,{})})]}),(0,b.jsxs)(u.Button,{className:"btn-outlined",outlined:!0,type:"light",children:["Info",(0,b.jsx)(g.Dropdown,{placement:"bottomLeft",size:"small",children:(0,b.jsx)(p.A,{})})]})]})})]})]})})]})}},52596:(t,e,n)=>{n.r(e),n.d(e,{AvatarWraperStyle:()=>p,BadgeDynamicStyle:()=>g,BadgeOverflowStyle:()=>s,BadgeRedStyle:()=>c,BadgeStandAloneStyle:()=>h,BadgeWraperStyle:()=>m,BreadcrumbWrapperStyle:()=>x,CardStyleWrapper:()=>u,CarouselStyleWraper:()=>d,CasCaderStyleWrapper:()=>b,DropdownIconStyleWrapper:()=>i,DropdownStyle:()=>o,SelectRadioStyle:()=>y,SelectWrapperStyle:()=>f,SpinerWraperStyle:()=>a,SwitchStyleWrap:()=>l,TimeLinePointerIconWrap:()=>w,TimelineBoxWrap:()=>$,TimelineNormalWrap:()=>k});var r=n(19335);const o=r.Ay.div`
  .ant-card-body .ant-btn {
    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
      padding: 0px 19px;
      border-radius: 5px;
  }
`,i=r.Ay.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${t=>{let{theme:e}=t;return e.rtl?"0 16px 0 10px":"0 10px 0 16px"}}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
  }
`,a=r.Ay.div`
  text-align: center;
  background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`,l=r.Ay.div`
  margin: 0 -10px;
  .ant-switch{
    margin: 0 10px;
  }
`,d=r.Ay.div`
  .ant-carousel {
    .slick-slide{
      text-align: center;
      height: 150px;
      line-height: 160px;
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
      overflow: hidden;
    }
    .slick-dots{
      li{
        width: 15px;
        button{
          background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
        }
        &.slick-active{
          width: 25px;
        }
      }
    }
  }
  .ant-radio-group{
    margin-bottom: 16px !important;
  }
  .ant-radio-button-wrapper{
    font-size: 14px;
    height: 38px !important;
    line-height: 36px !important;
    font-weight: 600;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`,p=r.Ay.div`
  .ant-avatar {
    margin: 10px;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
  }
  .ant-btn-default{
    padding: 0 10px;
  }
  .ant-badge-count{
    top: 10px;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 10px !important;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    top: 10px;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 10px !important;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
  .btn-outlined{
    padding: 0px 8.05px;
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
  }
  .anticon svg{
    color: #fff;
  }
`,m=r.Ay.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 15px !important;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    padding: 0;
    height: 20px;
    line-height: 14px;
    border: 3px solid transparent;  
  }
  .ant-scroll-number-custom-component{
    top: 10px !important;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: -1px !important;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px !important;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
  }
`,c=r.Ay.div`
  .ant-badge:not(:last-child){
    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px !important;
  }
`,h=r.Ay.div`
  .ant-badge-count{
    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`,s=r.Ay.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`,x=r.Ay.div`
  .ant-breadcrumb{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    .ant-breadcrumb-link{
      a{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      }
      .anticon{
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 2px !important;
      }
    }
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
  }
  .demo{
    .ant-breadcrumb{
      .ant-breadcrumb-link{
        font-size: 13px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}} !important;
      }
    }
    .ant-alert-info{
      border-color: #FB358615;
    }
  }
  .demo-nav{
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    border-radius: 4px;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent].bgLight}};
  }
  .demo-nav a{
    padding: 0 12px;
    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
  }
  .ant-alert{
    &.ant-alert-info{
      background: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
      background: ${t=>{let{theme:e}=t;return e[e.mainContent].info}}15;
    }
    .ant-alert-message{
      font-size: 13px;
      color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
      background: ${t=>{let{theme:e}=t;return e["primary-color"]}};
    }
  }
`,g=r.Ay.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin: ${t=>{let{theme:e}=t;return e.rtl?"6px 12px 0 0":"6px 0 0 12px"}};
    border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
    border-radius: 4px;
    padding: 0;
    .ant-btn {
      z-index: 2;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
      &:first-child{
        z-index: 22;
        ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
      }
      svg{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      }
    }

  }
}
.ant-badge-dot{
  ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 16px !important;
  top: 8px;
}
.ant-switch{
  min-width: 44px;
  height: 22px;
  ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
  .ant-switch-handle{
    top: 4px;
  }
  .ant-switch-checked .ant-switch-handle{
    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: calc(100% - 14px - 5px);
  }
}
`,u=r.Ay.div`
  .ant-card{
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
    &.ant-card-bordered{
      border-radius: 5px;
      overflow: hidden;
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
      border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}} !important;
      .ant-card-head{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
      }
    }
  }
  .ant-card-head{
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
    .ant-card-head-wrapper{
      .ant-card-head-title{
        padding: 12px 0;
      }
    }
    
    .ant-card-extra{
      display: block;
      padding: 12px 0;
      @media only screen and (max-width: 575px){
        margin-bottom: 4px;
      }
    }
  }
  .ant-card-head-wrapper .ant-card-extra a{
    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
  }
  .ant-card-body{
    padding: 22px 25px 15px 25px !important;
    p{
      margin-bottom: 4px;
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
  }
  .ant-card-small > .ant-card-head{
    font-size: 16px;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .ant-card-small > .ant-card-body{
    padding: 12px 15px 8px 15px !important
  }
`,b=r.Ay.div`
  .ant-cascader{
    display: block;
    width: fit-content;
  }
  .ant-cascader:not(:last-child){
    margin-bottom: 20px;
  }
`,f=r.Ay.div`
  margin: -5px;
  .ant-select{
    margin: 5px;
  }
  .ant-select-selector{
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
  }
  .ant-select-multiple.ant-select-sm{
    .ant-select-selection-item{
      height: 20px;
      line-height: 18px;
      font-size: 11px;
    }
  }
`,y=r.Ay.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`,w=r.Ay.div`
  padding: 20px;
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item-tail{
    border-width: 3px;
    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
  }
  .ant-timeline-item{
    padding-bottom: 28px;
    &.primary{
      background-color: transparent;
    }
    &.info{
      background-color: transparent;
    }
    &.warning{
      background-color: transparent;
    }
    &.pink{
      background-color: transparent;
    }
    &.success{
      background-color: transparent;
    }
    &.danger{
      background-color: transparent;
    }
    &:last-child{
      padding-bottom: 0;
    }
    &.primary{
      .ant-timeline-item-head{
        background-color: #FFEAF3;
      }
    }
    &.info{
      .ant-timeline-item-head{
        background-color: #DFF0FF;
      }
    }
    &.warning{
      .ant-timeline-item-head{
        background-color: #FFEEDA;
      }
    }
    &.pink{
      .ant-timeline-item-head{
        background-color: #FFE8F2;
      }
    }
    &.success{
      .ant-timeline-item-head{
        background-color: #DDF7F0;
      }
    }
    &.danger{
      .ant-timeline-item-head{
        background-color: #FFE4E5;
      }
    }
    .ant-timeline-item-head{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      &:after,
      &:before{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -8px;
        width: 8px;
        height: 8px;
        content: "";
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
      }
      &:before{
        top: auto;
        bottom: -8px;
      }
    }
    .ant-timeline-item-content{
      margin: ${t=>{let{theme:e}=t;return e.rtl?"-38px 42px 0 0":"-38px 0 0 42px"}};
      h3{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 30px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
      }
      p{
        font-size: 14px;
        font-weight: 400;
        max-width: 330px;
        margin-bottom: 12px;
      }
      .tags{
        font-size: 14px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-gray-text"]}};
      }
    }
  }
`,k=r.Ay.div`
  .ant-timeline-item-last > .ant-timeline-item-content{
    min-height: auto;
  }
  
  .ant-timeline-right{
    .ant-timeline-item-right{
      .ant-timeline-item-content{
        width: calc(100% - 32px) !important;
      }
    }
  }
  .ant-timeline-item{
    padding-bottom: 25px;
    &:last-child{
      padding-bottom: 0;
    }
    &.active{
      .timeline-content-text{
        p{
          color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
      }
    }
    &.primary{
      background-color: transparent;
    }
    &.secondary{
      background-color: transparent;
    }
    &.success{
      background-color: transparent;
    }
    &.info{
      background-color: transparent;
    }
    &.warning{
      background-color: transparent;
    }
    .ant-timeline-item-content{
      margin: ${t=>{let{theme:e}=t;return e.rtl?"0 32px 0 0":"0 0 0 32px"}};
      font-size: 14px !important;
      .timeline-content-inner{
        .timeline-content-time{
          min-width: 65px;
          font-weight: 600;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-gray-text"]}};
        }
      }
      p{
        margin-bottom: 0;
      }
    }
    .ant-timeline-item-head-custom{
      padding: 0px 1px;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    }
  }
`,$=r.Ay.div`
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item{
    .ant-timeline-item-head{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
    }
    &.ant-timeline-item-left{
      .ant-timeline-item-content{
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 16px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: -16px;
        }
      }
    }
    &.ant-timeline-item-right{
      .ant-timeline-item-content{
        ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 6px;
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 16px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: -16px;
        }
        .content-box{
          text-align: left !important;
        }
      }
    }
    .ant-timeline-item-content{
      h2{
        font-size: 14px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
      }
      .content-box{
        padding: 18px 20px;
        border-radius: 10px;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
        p{
          line-height: 1.75;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
`}}]);