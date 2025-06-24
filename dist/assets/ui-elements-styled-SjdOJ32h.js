import{s as n}from"./index-BJIB_XH5.js";const r=n.div`
  .ant-card-body .ant-btn {
    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
      padding: 0px 19px;
      border-radius: 5px;
  }
`,o=n.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${({theme:t})=>t.rtl?"0 16px 0 10px":"0 10px 0 16px"}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${({theme:t})=>t.rtl?"border-right":"border-left"}: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
  }
`,i=n.div`
  text-align: center;
  background: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`,e=n.div`
  margin: 0 -10px;
  .ant-switch{
    margin: 0 10px;
  }
`,d=n.div`
  .ant-carousel {
    .slick-slide{
      text-align: center;
      height: 150px;
      line-height: 160px;
      background: ${({theme:t})=>t[t.mainContent]["light-text"]};
      overflow: hidden;
    }
    .slick-dots{
      li{
        width: 15px;
        button{
          background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
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
    color: ${({theme:t})=>t[t.mainContent]["light-text"]};
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`,p=n.div`
  .ant-avatar {
    margin: 10px;
    background: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
  }
  .ant-btn-default{
    padding: 0 10px;
  }
  .ant-badge-count{
    top: 10px;
    ${({theme:t})=>t.rtl?"left":"right"}: 10px !important;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    top: 10px;
    ${({theme:t})=>t.rtl?"left":"right"}: 10px !important;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
  .btn-outlined{
    padding: 0px 8.05px;
    border-color: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
  }
  .anticon svg{
    color: #fff;
  }
`,l=n.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: ${({theme:t})=>t[t.mainContent]["general-background"]};
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    ${({theme:t})=>t.rtl?"left":"right"}: 15px !important;
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
    ${({theme:t})=>t.rtl?"left":"right"}: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    ${({theme:t})=>t.rtl?"left":"right"}: -1px !important;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 10px !important;
    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
  }
`,c=n.div`
  .ant-badge:not(:last-child){
    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px !important;
  }
`,g=n.div`
  .ant-badge-count{
    ${({theme:t})=>t.rtl?"right":"left"}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`,m=n.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`,x=n.div`
  .ant-breadcrumb{
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    .ant-breadcrumb-link{
      a{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
      .anticon{
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 2px !important;
      }
    }
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: ${({theme:t})=>t[t.mainContent]["light-text"]};
  }
  .demo{
    .ant-breadcrumb{
      .ant-breadcrumb-link{
        font-size: 13px;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]} !important;
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
    background: ${({theme:t})=>t[t.mainContent].bgLight};
  }
  .demo-nav a{
    padding: 0 12px;
    color: ${({theme:t})=>t["primary-color"]};
  }
  .ant-alert{
    &.ant-alert-info{
      background: ${({theme:t})=>t["primary-color"]}15;
      background: ${({theme:t})=>t[t.mainContent].info}15;
    }
    .ant-alert-message{
      font-size: 13px;
      color: ${({theme:t})=>t["primary-color"]};
      background: ${({theme:t})=>t["primary-color"]};
    }
  }
`,s=n.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin: ${({theme:t})=>t.rtl?"6px 12px 0 0":"6px 0 0 12px"};
    border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
    border-radius: 4px;
    padding: 0;
    .ant-btn {
      z-index: 2;
      background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
      &:first-child{
        z-index: 22;
        ${({theme:t})=>t.rtl?"border-left":"border-right"}: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
      }
      svg{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
    }

  }
}
.ant-badge-dot{
  ${({theme:t})=>t.rtl?"left":"right"}: 16px !important;
  top: 8px;
}
.ant-switch{
  min-width: 44px;
  height: 22px;
  ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 15px;
  .ant-switch-handle{
    top: 4px;
  }
  .ant-switch-checked .ant-switch-handle{
    ${({theme:t})=>t.rtl?"right":"left"}: calc(100% - 14px - 5px);
  }
}
`,b=n.div`
  .ant-card{
    background: ${({theme:t})=>t[t.mainContent]["general-background"]};
    &.ant-card-bordered{
      border-radius: 5px;
      overflow: hidden;
      background: ${({theme:t})=>t[t.mainContent]["white-background"]};
      border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]} !important;
      .ant-card-head{
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
      }
    }
  }
  .ant-card-head{
    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    background: ${({theme:t})=>t[t.mainContent]["general-background"]};
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
    color: ${({theme:t})=>t["primary-color"]};
  }
  .ant-card-body{
    padding: 22px 25px 15px 25px !important;
    p{
      margin-bottom: 4px;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
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
`,h=n.div`
  .ant-cascader{
    display: block;
    width: fit-content;
  }
  .ant-cascader:not(:last-child){
    margin-bottom: 20px;
  }
`,u=n.div`
  margin: -5px;
  .ant-select{
    margin: 5px;
  }
  .ant-select-selector{
    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
  }
  .ant-select-multiple.ant-select-sm{
    .ant-select-selection-item{
      height: 20px;
      line-height: 18px;
      font-size: 11px;
    }
  }
`,f=n.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`,$=n.div`
  padding: 20px;
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item-tail{
    border-width: 3px;
    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
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
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
      }
      &:before{
        top: auto;
        bottom: -8px;
      }
    }
    .ant-timeline-item-content{
      margin: ${({theme:t})=>t.rtl?"-38px 42px 0 0":"-38px 0 0 42px"};
      h3{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 30px;
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      }
      p{
        font-size: 14px;
        font-weight: 400;
        max-width: 330px;
        margin-bottom: 12px;
      }
      .tags{
        font-size: 14px;
        color: ${({theme:t})=>t[t.mainContent]["light-gray-text"]};
      }
    }
  }
`,k=n.div`
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
          color: ${({theme:t})=>t["primary-color"]};
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
      margin: ${({theme:t})=>t.rtl?"0 32px 0 0":"0 0 0 32px"};
      font-size: 14px !important;
      .timeline-content-inner{
        .timeline-content-time{
          min-width: 65px;
          font-weight: 600;
          color: ${({theme:t})=>t[t.mainContent]["light-gray-text"]};
        }
      }
      p{
        margin-bottom: 0;
      }
    }
    .ant-timeline-item-head-custom{
      padding: 0px 1px;
      background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
    }
  }
`,y=n.div`
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item{
    .ant-timeline-item-head{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
    }
    &.ant-timeline-item-left{
      .ant-timeline-item-content{
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({theme:t})=>t.rtl?"border-left":"border-right"}: 16px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({theme:t})=>t.rtl?"right":"left"}: -16px;
        }
      }
    }
    &.ant-timeline-item-right{
      .ant-timeline-item-content{
        ${({theme:t})=>t.rtl?"left":"right"}: 6px;
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({theme:t})=>t.rtl?"border-right":"border-left"}: 16px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({theme:t})=>t.rtl?"left":"right"}: -16px;
        }
        .content-box{
          text-align: left !important;
        }
      }
    }
    .ant-timeline-item-content{
      h2{
        font-size: 14px;
        color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
      }
      .content-box{
        padding: 18px 20px;
        border-radius: 10px;
        background-color: ${({theme:t})=>t[t.mainContent]["general-background"]};
        p{
          line-height: 1.75;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;export{p as A,x as B,b as C,r as D,i as S,$ as T,o as a,k as b,y as c,d,l as e,m as f,g,c as h,s as i,h as j,e as k,u as l,f as m};
