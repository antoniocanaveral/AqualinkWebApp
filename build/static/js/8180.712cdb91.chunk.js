"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8180],{18180:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(9950),a=r(99674),i=r(87094),l=r(41988),o=r(24893),d=r(52596),c=r(57687),p=r(67482),h=r(29355),m=r(44414);const{Option:s,OptGroup:u}=a.A,x=["Zhejiang","Jiangsu"],g={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]};const b=function(){const[e,t]=(0,n.useState)({selectedItems:[],size:"default",cities:g[x[0]],secondCity:g[x[0]][0]}),r=r=>{t({...e,selectedItems:r})},b=[];for(let n=10;n<36;n+=1)b.push((0,m.jsx)(s,{children:n.toString(36)+n},n.toString(36)+n));const{size:y,cities:f}=e,{selectedItems:j}=e,k=["Apples","Nails","Bananas","Helicopters"].filter((e=>!j.includes(e)));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.PageHeader,{title:"Select",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Select"}]}),(0,m.jsx)(p.Main,{children:(0,m.jsxs)(i.A,{gutter:25,children:[(0,m.jsxs)(l.A,{md:12,xs:24,children:[(0,m.jsx)(h.Cards,{title:"Basic",children:(0,m.jsxs)(d.SelectWrapperStyle,{children:[(0,m.jsxs)(a.A,{defaultValue:"lucy",style:{width:120},children:[(0,m.jsx)(s,{value:"jack",children:"Jack"}),(0,m.jsx)(s,{value:"lucy",children:"Lucy"}),(0,m.jsx)(s,{value:"disabled",disabled:!0,children:"Disabled"}),(0,m.jsx)(s,{value:"Yiminghe",children:"yiminghe"})]}),(0,m.jsx)(a.A,{defaultValue:"lucy",style:{width:120},disabled:!0,children:(0,m.jsx)(s,{value:"lucy",children:"Lucy"})}),(0,m.jsx)(a.A,{defaultValue:"lucy",style:{width:120},loading:!0,children:(0,m.jsx)(s,{value:"lucy",children:"Lucy"})})]})}),(0,m.jsx)(h.Cards,{title:"Search and select",children:(0,m.jsxs)(a.A,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",filterOption:(e,t)=>t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:[(0,m.jsx)(s,{value:"jack",children:"Jack"}),(0,m.jsx)(s,{value:"lucy",children:"Lucy"}),(0,m.jsx)(s,{value:"tom",children:"Tom"})]})}),(0,m.jsxs)(h.Cards,{title:"Select Size",children:[(0,m.jsx)(d.SelectRadioStyle,{children:(0,m.jsxs)(o.Ay.Group,{value:y,onChange:r=>{t({...e,size:r.target.value})},children:[(0,m.jsx)(o.Ay.Button,{value:"large",children:"Large"}),(0,m.jsx)(o.Ay.Button,{value:"default",children:"Default"}),(0,m.jsx)(o.Ay.Button,{value:"small",children:"Small"})]})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"tag-select-list",children:[(0,m.jsx)(a.A,{size:y,defaultValue:"a1",onChange:r,style:{width:200},children:b}),(0,m.jsx)(a.A,{mode:"multiple",size:y,placeholder:"Please select",defaultValue:["a10","c12"],onChange:r,style:{width:"100%"},children:b}),(0,m.jsx)(a.A,{mode:"tags",size:y,placeholder:"Please select",defaultValue:["a10","c12"],onChange:r,style:{width:"100%"},children:b})]})]}),(0,m.jsx)(h.Cards,{title:"Custom",children:(0,m.jsxs)(a.A,{mode:"multiple",style:{width:"100%"},placeholder:"select one country",defaultValue:["china"],optionLabelProp:"label",children:[(0,m.jsxs)(s,{value:"china",label:"China",children:[(0,m.jsx)("span",{role:"img","aria-label":"China",children:"\ud83c\udde8\ud83c\uddf3"}),"China"]}),(0,m.jsxs)(s,{value:"usa",label:"USA",children:[(0,m.jsx)("span",{role:"img","aria-label":"USA",children:"\ud83c\uddfa\ud83c\uddf8"}),"USA"]}),(0,m.jsxs)(s,{value:"japan",label:"Japan",children:[(0,m.jsx)("span",{role:"img","aria-label":"Japan",children:"\ud83c\uddef\ud83c\uddf5"}),"Japan"]}),(0,m.jsxs)(s,{value:"korea",label:"Korea",children:[(0,m.jsx)("span",{role:"img","aria-label":"Korea",children:"\ud83c\uddf0\ud83c\uddf7"}),"Korea"]})]})}),(0,m.jsx)(h.Cards,{title:"Hide Already Selected",children:(0,m.jsx)(a.A,{mode:"multiple",placeholder:"Inserted are removed",value:j,onChange:r,style:{width:"100%"},children:k.map((e=>(0,m.jsx)(a.A.Option,{value:e,children:e},e)))})})]}),(0,m.jsxs)(l.A,{md:12,xs:24,children:[(0,m.jsx)(h.Cards,{title:"Select Coordinate",children:(0,m.jsxs)(d.SelectWrapperStyle,{children:[(0,m.jsx)(a.A,{defaultValue:x[0],style:{width:120},onChange:e=>{t({cities:g[e],secondCity:g[e][0]})},children:x.map((e=>(0,m.jsx)(s,{children:e},e)))}),(0,m.jsx)(a.A,{style:{width:120},value:e.secondCity,onChange:e=>{t({secondCity:e})},children:f.map((e=>(0,m.jsx)(s,{children:e},e)))})]})}),(0,m.jsx)(h.Cards,{title:"Multiple select",children:(0,m.jsxs)(a.A,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["jack","tom"],children:[(0,m.jsx)(s,{value:"jack",children:"Jack"}),(0,m.jsx)(s,{value:"lucy",children:"Lucy"}),(0,m.jsx)(s,{value:"tom",children:"Tom"})]})}),(0,m.jsx)(h.Cards,{title:"Tags select",children:(0,m.jsxs)(a.A,{mode:"tags",style:{width:"100%"},placeholder:"Please select",children:[(0,m.jsx)(s,{value:"jack",children:"Jack"}),(0,m.jsx)(s,{value:"lucy",children:"Lucy"}),(0,m.jsx)(s,{value:"tom",children:"Tom"})]})}),(0,m.jsx)(h.Cards,{title:"Custom",children:(0,m.jsxs)(a.A,{defaultValue:"lucy",style:{width:200},children:[(0,m.jsxs)(u,{label:"Manager",children:[(0,m.jsx)(s,{value:"jack",children:"Jack"}),(0,m.jsx)(s,{value:"lucy",children:"Lucy"})]}),(0,m.jsx)(u,{label:"Engineer",children:(0,m.jsx)(s,{value:"Yiminghe",children:"yiminghe"})})]})}),(0,m.jsx)(h.Cards,{title:"Automatic Completion",children:(0,m.jsx)(a.A,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:r,children:b})})]})]})})]})}},52596:(e,t,r)=>{r.r(t),r.d(t,{AvatarWraperStyle:()=>c,BadgeDynamicStyle:()=>x,BadgeOverflowStyle:()=>s,BadgeRedStyle:()=>h,BadgeStandAloneStyle:()=>m,BadgeWraperStyle:()=>p,BreadcrumbWrapperStyle:()=>u,CardStyleWrapper:()=>g,CarouselStyleWraper:()=>d,CasCaderStyleWrapper:()=>b,DropdownIconStyleWrapper:()=>i,DropdownStyle:()=>a,SelectRadioStyle:()=>f,SelectWrapperStyle:()=>y,SpinerWraperStyle:()=>l,SwitchStyleWrap:()=>o,TimeLinePointerIconWrap:()=>j,TimelineBoxWrap:()=>C,TimelineNormalWrap:()=>k});var n=r(19335);const a=n.Ay.div`
  .ant-card-body .ant-btn {
    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
      padding: 0px 19px;
      border-radius: 5px;
  }
`,i=n.Ay.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${e=>{let{theme:t}=e;return t.rtl?"0 16px 0 10px":"0 10px 0 16px"}}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${e=>{let{theme:t}=e;return t.rtl?"border-right":"border-left"}}: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
  }
`,l=n.Ay.div`
  text-align: center;
  background: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`,o=n.Ay.div`
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
      background: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
      overflow: hidden;
    }
    .slick-dots{
      li{
        width: 15px;
        button{
          background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}};
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
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`,c=n.Ay.div`
  .ant-avatar {
    margin: 10px;
    background: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
  }
  .ant-btn-default{
    padding: 0 10px;
  }
  .ant-badge-count{
    top: 10px;
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 10px !important;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    top: 10px;
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 10px !important;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
  .btn-outlined{
    padding: 0px 8.05px;
    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
  }
  .anticon svg{
    color: #fff;
  }
`,p=n.Ay.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 15px !important;
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
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: -1px !important;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 10px !important;
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
  }
`,h=n.Ay.div`
  .ant-badge:not(:last-child){
    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px !important;
  }
`,m=n.Ay.div`
  .ant-badge-count{
    ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`,s=n.Ay.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`,u=n.Ay.div`
  .ant-breadcrumb{
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
    .ant-breadcrumb-link{
      a{
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
      }
      .anticon{
        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 2px !important;
      }
    }
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
  }
  .demo{
    .ant-breadcrumb{
      .ant-breadcrumb-link{
        font-size: 13px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}} !important;
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
    background: ${e=>{let{theme:t}=e;return t[t.mainContent].bgLight}};
  }
  .demo-nav a{
    padding: 0 12px;
    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
  }
  .ant-alert{
    &.ant-alert-info{
      background: ${e=>{let{theme:t}=e;return t["primary-color"]}}15;
      background: ${e=>{let{theme:t}=e;return t[t.mainContent].info}}15;
    }
    .ant-alert-message{
      font-size: 13px;
      color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
      background: ${e=>{let{theme:t}=e;return t["primary-color"]}};
    }
  }
`,x=n.Ay.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin: ${e=>{let{theme:t}=e;return t.rtl?"6px 12px 0 0":"6px 0 0 12px"}};
    border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
    border-radius: 4px;
    padding: 0;
    .ant-btn {
      z-index: 2;
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
      &:first-child{
        z-index: 22;
        ${e=>{let{theme:t}=e;return t.rtl?"border-left":"border-right"}}: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
      }
      svg{
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
      }
    }

  }
}
.ant-badge-dot{
  ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 16px !important;
  top: 8px;
}
.ant-switch{
  min-width: 44px;
  height: 22px;
  ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 15px;
  .ant-switch-handle{
    top: 4px;
  }
  .ant-switch-checked .ant-switch-handle{
    ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: calc(100% - 14px - 5px);
  }
}
`,g=n.Ay.div`
  .ant-card{
    background: ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
    &.ant-card-bordered{
      border-radius: 5px;
      overflow: hidden;
      background: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
      border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}} !important;
      .ant-card-head{
        background: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
      }
    }
  }
  .ant-card-head{
    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
    background: ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
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
    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
  }
  .ant-card-body{
    padding: 22px 25px 15px 25px !important;
    p{
      margin-bottom: 4px;
      color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
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
`,y=n.Ay.div`
  margin: -5px;
  .ant-select{
    margin: 5px;
  }
  .ant-select-selector{
    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
  }
  .ant-select-multiple.ant-select-sm{
    .ant-select-selection-item{
      height: 20px;
      line-height: 18px;
      font-size: 11px;
    }
  }
`,f=n.Ay.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`,j=n.Ay.div`
  padding: 20px;
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item-tail{
    border-width: 3px;
    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
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
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
      }
      &:before{
        top: auto;
        bottom: -8px;
      }
    }
    .ant-timeline-item-content{
      margin: ${e=>{let{theme:t}=e;return t.rtl?"-38px 42px 0 0":"-38px 0 0 42px"}};
      h3{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 30px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
      }
      p{
        font-size: 14px;
        font-weight: 400;
        max-width: 330px;
        margin-bottom: 12px;
      }
      .tags{
        font-size: 14px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-gray-text"]}};
      }
    }
  }
`,k=n.Ay.div`
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
          color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
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
      margin: ${e=>{let{theme:t}=e;return t.rtl?"0 32px 0 0":"0 0 0 32px"}};
      font-size: 14px !important;
      .timeline-content-inner{
        .timeline-content-time{
          min-width: 65px;
          font-weight: 600;
          color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-gray-text"]}};
        }
      }
      p{
        margin-bottom: 0;
      }
    }
    .ant-timeline-item-head-custom{
      padding: 0px 1px;
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
    }
  }
`,C=n.Ay.div`
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item{
    .ant-timeline-item-head{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
    }
    &.ant-timeline-item-left{
      .ant-timeline-item-content{
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${e=>{let{theme:t}=e;return t.rtl?"border-left":"border-right"}}: 16px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: -16px;
        }
      }
    }
    &.ant-timeline-item-right{
      .ant-timeline-item-content{
        ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 6px;
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${e=>{let{theme:t}=e;return t.rtl?"border-right":"border-left"}}: 16px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: -16px;
        }
        .content-box{
          text-align: left !important;
        }
      }
    }
    .ant-timeline-item-content{
      h2{
        font-size: 14px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
      }
      .content-box{
        padding: 18px 20px;
        border-radius: 10px;
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
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