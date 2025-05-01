"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6548],{95771:(t,e,n)=>{n.r(e),n.d(e,{Cascader:()=>o});var r=n(9950),a=n(97794),i=n(44414);function o(t){const{data:e,defaultValue:n,trigger:o,onChange:l,isShowSearch:d,loading:p,placeholder:m}=t,c=e,[h,g]=(0,r.useState)({options:c});return(0,i.jsx)(a.CascaderStyle,{options:c,expandTrigger:o,defaultValue:n,onChange:p?(t,e)=>{l(t,e)}:t=>{l(t)},showSearch:d&&{filter:(t,e)=>e.some((e=>e.label.toLowerCase().indexOf(t.toLowerCase())>-1))},loadData:t=>{const e=t[t.length-1];e.loading=!0,setTimeout((()=>{e.loading=!1,e.children=[{label:`${e.label} Dynamic 1`,value:"dynamic1"},{label:`${e.label} Dynamic 2`,value:"dynamic2"}],g({options:[...h.options]})}),1e3)},placeholder:m,changeOnSelect:!!p})}o.defaultProps={data:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],defaultValue:[],trigger:"click",placeholder:"Please select"}},97794:(t,e,n)=>{n.r(e),n.d(e,{CascaderStyle:()=>a});var r=n(75139);const a=(0,n(19335).Ay)(r.A)`
    .ant-input{
        padding: 5.5px 20px;
    }
    .anticon svg{
        width: 10px;
        height: 8.5px;
    }
`},56548:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var r=n(9950),a=n(87094),i=n(41988),o=n(52596),l=n(57687),d=n(67482),p=n(29355),m=n(95771),c=n(44414);const h=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}];const g=function(){const[t,e]=(0,r.useState)({value:null,loading:[]}),n=n=>{e({...t,value:n})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.PageHeader,{title:"Cascader",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Cascader"}]}),(0,c.jsx)(d.Main,{children:(0,c.jsxs)(a.A,{gutter:25,children:[(0,c.jsxs)(i.A,{md:12,xs:24,children:[(0,c.jsx)(p.Cards,{title:"Basic",children:(0,c.jsx)(m.Cascader,{onChange:n})}),(0,c.jsx)(p.Cards,{title:"Disabled option",children:(0,c.jsx)(m.Cascader,{onChange:n})}),(0,c.jsx)(p.Cards,{title:"Size",children:(0,c.jsxs)(o.CasCaderStyleWrapper,{children:[(0,c.jsx)(m.Cascader,{size:"large",onChange:n}),(0,c.jsx)(m.Cascader,{onChange:n}),(0,c.jsx)(m.Cascader,{size:"small",onChange:n})]})}),(0,c.jsx)(p.Cards,{title:"Search",children:(0,c.jsx)(m.Cascader,{onChange:n,isShowSearch:!0})}),(0,c.jsx)(p.Cards,{title:"Custom Field Names",children:(0,c.jsx)(m.Cascader,{fieldNames:{label:"name",value:"code",children:"items"},onChange:n})})]}),(0,c.jsxs)(i.A,{md:12,xs:24,children:[(0,c.jsx)(p.Cards,{title:"Default Value",children:(0,c.jsx)(m.Cascader,{onChange:n,defaultValue:["zhejiang","hangzhou","xihu"]})}),(0,c.jsx)(p.Cards,{title:"Hover",children:(0,c.jsx)(m.Cascader,{onChange:n,trigger:"hover"})}),(0,c.jsx)(p.Cards,{title:"Change on select",children:(0,c.jsx)(m.Cascader,{onChange:n,changeOnSelect:!0})}),(0,c.jsx)("div",{className:"custom-cascade-render",children:(0,c.jsx)(p.Cards,{title:"Custom render",style:{width:"100%"},children:(0,c.jsx)(m.Cascader,{onChange:n})})}),(0,c.jsx)(p.Cards,{title:"Lazy Load",children:(0,c.jsx)(m.Cascader,{onChange:(n,r)=>{e({...t,loading:[n,r]})},loading:!0,data:h})})]})]})})]})}},52596:(t,e,n)=>{n.r(e),n.d(e,{AvatarWraperStyle:()=>p,BadgeDynamicStyle:()=>x,BadgeOverflowStyle:()=>g,BadgeRedStyle:()=>c,BadgeStandAloneStyle:()=>h,BadgeWraperStyle:()=>m,BreadcrumbWrapperStyle:()=>s,CardStyleWrapper:()=>u,CarouselStyleWraper:()=>d,CasCaderStyleWrapper:()=>b,DropdownIconStyleWrapper:()=>i,DropdownStyle:()=>a,SelectRadioStyle:()=>C,SelectWrapperStyle:()=>f,SpinerWraperStyle:()=>o,SwitchStyleWrap:()=>l,TimeLinePointerIconWrap:()=>y,TimelineBoxWrap:()=>k,TimelineNormalWrap:()=>$});var r=n(19335);const a=r.Ay.div`
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
`,o=r.Ay.div`
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
`,g=r.Ay.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`,s=r.Ay.div`
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
`,x=r.Ay.div`
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
`,C=r.Ay.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`,y=r.Ay.div`
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
`,$=r.Ay.div`
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
`,k=r.Ay.div`
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