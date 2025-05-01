"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8593],{28593:(t,e,r)=>{r.r(e),r.d(e,{default:()=>k});var n=r(9950),a=r(87094),o=r(41988),i=r(74947),l=r(25933),d=r(42074),c=r(3911),m=r(39786),p=r(91348),s=r(8750),h=r(52596),x=r(57687),g=r(67482),u=r(29355),b=r(72449),f=r(44414);const y=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];const k=function(){const[t,e]=(0,n.useState)({count:5,show:!0});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.PageHeader,{title:"Avatar",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Avatar"}]}),(0,f.jsx)(g.Main,{children:(0,f.jsxs)(a.A,{gutter:25,children:[(0,f.jsxs)(o.A,{md:12,sm:12,xs:24,children:[(0,f.jsx)(u.Cards,{title:"Basic",children:(0,f.jsxs)(h.BadgeWraperStyle,{children:[(0,f.jsx)(i.A,{count:5,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})}),(0,f.jsx)(i.A,{count:0,showZero:!0,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})}),(0,f.jsx)(i.A,{count:(0,f.jsx)(c.A,{style:{color:"#f5222d"}}),children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})})]})}),(0,f.jsx)(u.Cards,{title:"Overflow Count",children:(0,f.jsx)(h.BadgeWraperStyle,{children:(0,f.jsxs)(h.BadgeOverflowStyle,{children:[(0,f.jsx)(i.A,{count:99,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})}),(0,f.jsx)(i.A,{count:100,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})}),(0,f.jsx)(i.A,{count:99,overflowCount:10,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})}),(0,f.jsx)(i.A,{count:1e3,overflowCount:999,children:(0,f.jsx)(d.k2,{to:"#",className:"head-example"})})]})})}),(0,f.jsx)(u.Cards,{title:"Clickable",children:(0,f.jsx)(h.BadgeWraperStyle,{children:(0,f.jsx)(d.N_,{to:"#",children:(0,f.jsx)(i.A,{count:5,children:(0,f.jsx)("span",{className:"head-example"})})})})}),(0,f.jsx)(u.Cards,{title:"Status",children:(0,f.jsxs)(h.BadgeWraperStyle,{children:[(0,f.jsx)("div",{style:{marginBottom:10},children:y.map((t=>(0,f.jsx)(i.A,{color:t},t)))}),(0,f.jsx)("div",{children:y.map((t=>(0,f.jsx)("div",{children:(0,f.jsx)(i.A,{color:t,text:t})},t)))})]})})]}),(0,f.jsxs)(o.A,{md:12,sm:12,xs:24,children:[(0,f.jsx)(u.Cards,{title:"Standalone",children:(0,f.jsx)(h.BadgeWraperStyle,{children:(0,f.jsxs)(h.BadgeStandAloneStyle,{children:[(0,f.jsx)(i.A,{count:25}),(0,f.jsx)(i.A,{count:4,style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),(0,f.jsx)(i.A,{count:109,style:{backgroundColor:"#01B81A"}})]})})}),(0,f.jsx)(u.Cards,{title:"Red badge",children:(0,f.jsx)(h.BadgeWraperStyle,{children:(0,f.jsxs)(h.BadgeRedStyle,{children:[(0,f.jsx)(i.A,{dot:!0,children:(0,f.jsx)(m.A,{})}),(0,f.jsx)(i.A,{count:0,dot:!0,children:(0,f.jsx)(m.A,{})}),(0,f.jsx)(i.A,{dot:!0,children:(0,f.jsx)(d.N_,{to:"#",children:"Link something"})})]})})}),(0,f.jsx)(u.Cards,{title:"Dynamic",children:(0,f.jsx)(h.BadgeWraperStyle,{children:(0,f.jsxs)(h.BadgeDynamicStyle,{children:[(0,f.jsxs)("div",{className:"badge-dynamic",style:{display:"flex",alignItems:"flex-start"},children:[(0,f.jsx)(i.A,{count:t.count,children:(0,f.jsx)(d.N_,{to:"#",className:"head-example"})}),(0,f.jsxs)(b.BtnGroup,{children:[(0,f.jsx)(b.Button,{onClick:()=>{let r=t.count-1;r<0&&(r=0),e({...t,count:r})},children:(0,f.jsx)(p.A,{})}),(0,f.jsx)(b.Button,{onClick:()=>{const r=t.count+1;e({...t,count:r})},children:(0,f.jsx)(s.A,{})})]})]}),(0,f.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"10"},children:[(0,f.jsx)(i.A,{dot:t.show,children:(0,f.jsx)(d.N_,{to:"#",className:"head-example"})}),(0,f.jsx)(l.A,{onChange:r=>{e({...t,show:r})},checked:t.show})]})]})})})]})]})})]})}},52596:(t,e,r)=>{r.r(e),r.d(e,{AvatarWraperStyle:()=>c,BadgeDynamicStyle:()=>g,BadgeOverflowStyle:()=>h,BadgeRedStyle:()=>p,BadgeStandAloneStyle:()=>s,BadgeWraperStyle:()=>m,BreadcrumbWrapperStyle:()=>x,CardStyleWrapper:()=>u,CarouselStyleWraper:()=>d,CasCaderStyleWrapper:()=>b,DropdownIconStyleWrapper:()=>o,DropdownStyle:()=>a,SelectRadioStyle:()=>y,SelectWrapperStyle:()=>f,SpinerWraperStyle:()=>i,SwitchStyleWrap:()=>l,TimeLinePointerIconWrap:()=>k,TimelineBoxWrap:()=>j,TimelineNormalWrap:()=>$});var n=r(19335);const a=n.Ay.div`
  .ant-card-body .ant-btn {
    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
      padding: 0px 19px;
      border-radius: 5px;
  }
`,o=n.Ay.div`
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
`,i=n.Ay.div`
  text-align: center;
  background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`,l=n.Ay.div`
  margin: 0 -10px;
  .ant-switch{
    margin: 0 10px;
  }
`,d=n.Ay.div`
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
`,c=n.Ay.div`
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
`,m=n.Ay.div`
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
`,p=n.Ay.div`
  .ant-badge:not(:last-child){
    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px !important;
  }
`,s=n.Ay.div`
  .ant-badge-count{
    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`,h=n.Ay.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`,x=n.Ay.div`
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
`,g=n.Ay.div`
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
`,u=n.Ay.div`
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
`,b=n.Ay.div`
  .ant-cascader{
    display: block;
    width: fit-content;
  }
  .ant-cascader:not(:last-child){
    margin-bottom: 20px;
  }
`,f=n.Ay.div`
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
`,y=n.Ay.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`,k=n.Ay.div`
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
`,$=n.Ay.div`
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
`,j=n.Ay.div`
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
`},39786:(t,e,r)=>{r.d(e,{A:()=>d});var n=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};var i=r(47484),l=function(t,e){return a.createElement(i.A,(0,n.A)((0,n.A)({},t),{},{ref:e,icon:o}))};const d=a.forwardRef(l)},91348:(t,e,r)=>{r.d(e,{A:()=>d});var n=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var i=r(47484),l=function(t,e){return a.createElement(i.A,(0,n.A)((0,n.A)({},t),{},{ref:e,icon:o}))};const d=a.forwardRef(l)}}]);