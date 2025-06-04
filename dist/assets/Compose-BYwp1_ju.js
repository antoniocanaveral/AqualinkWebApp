import{s as g,$ as Y,ab as Z,bd as tt,al as nt,r as A,j as l,B as et,L as V,aG as at,be as it,bf as rt,V as ot,aH as B,ay as _,bg as lt,n as pt,I as dt}from"./index-B54C9UsK.js";import{R as N}from"./react-rte-DOB2EeLc.js";const bt=g(Y)`
  margin-bottom: 30px;  
  .ant-table{
    padding-bottom: 30px;
    border-radius: 10px;
    background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
    tr{
      th,
      td{
        border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        &:first-child{
          ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 30px;
        }
        &:last-child{
          ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      /* ${({theme:t})=>t.rtl?"right: 15px;":"left: -15px;"} */
      right: 15px;
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        &:first-child{
          ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 20px;
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        .ant-table-selection-extra{
          ${({theme:t})=>t.rtl?"left":"right"}: -25px
        }
        .ant-dropdown-trigger{
          svg{
            width: 20px;
            color: ${({theme:t})=>t["gray-solid"]};
          }
        }
        .email-top-search{
          display: flex;
          justify-content: ${({theme:t})=>t.rtl?"flex-start":"flex-end"};
          align-items: center;
          min-width: 350px;
          @media only screen and (max-width: 575px){
            display: none;
          }
          .ant-select{
            max-width: 350px;
          }
          .ant-select-selector{
            height: 46px !important;
          }
          .ant-select-selection-search{
            width: 100% !important;
            .ant-select-selection-search-input{
              text-align: right;
              border-radius: 24px;
              background:  ${({theme:t})=>t[t.mainContent]["general-background"]};
              border: 0 none;
              input{
                height: 44px !important;
                border-radius: 6px !important;
                background:  ${({theme:t})=>t[t.mainContent]["general-background"]};
                &::placeholder{
                  color:  ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                }
              }
              .ant-input-suffix{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
                .anticon-search{
                  svg{
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                  }
                }
              }
            }
          }
        }
        .email-top-right{
          justify-content: flex-end;
          .email-extra{
            line-height: 1;
            a{
              color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
              &:not(:last-child){
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 25px;
              }
              svg{
                width: 16px;
                height: 16px;
              }
            }
          }
          .page-number{
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          .pagination-slider{
            margin: ${({theme:t})=>t.rtl?"0 15px 0 20px":"0 20px 0 15px"};
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${({theme:t})=>t["primary-color"]}10;
              }
              svg{
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
              }
            }
          }
        }
      }
    }
  }

  
  .ant-table-tbody{
    .ant-table-cell{
      white-space: normal !important;
      text-align: ${({theme:t})=>t.rtl?"right":"left"};
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({theme:t})=>t["gray-solid"]}20;
        h1{
          font-weight: 600;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
          a{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
          }
        }
        .email-time{
          font-weight: 500;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        >td{
          background: ${({theme:t})=>t[t.mainContent]["white-background"]} !important;
          border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
      }
      p{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
      h1 a{
        font-weight: 500;
        transition: 0s;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
      &.ant-table-row-selected{
        &:hover{
            >td{
              background: ${({theme:t})=>t[t.mainContent]["white-background"]};
            }
        }
        >td{
          background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        }
      }
      >td{
        padding: 15px 16px;
        &:last-child{
          text-align: ${({theme:t})=>t.rtl?"left":"right"};
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 400;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: ${({theme:t})=>t.rtl?"left":"right"};
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    ${({theme:t})=>t.rtl?"left":"right"}: 0;
  }
  
`,st=({rtl:t})=>`
    max-width: 600px;
    width: 100%;
    position: fixed;
    height: calc(100vh - 40%);
    bottom: 140px;
    ${t?"left":"right"}: 15px;
    @media only screen and (max-width: 1450px){
      height: calc(100vh - 50%);
      bottom: 35%;
    }
    @media only screen and (max-width: 575px){
      min-height: 450px;
      bottom: 80px;
    }
`,gt=({rtl:t})=>`
  max-width: 1200px;
  width: 100%;
  position: fixed;
  min-height: 600px;
  bottom: 100px;
  ${t?"left":"right"}: 100px;
  z-index: 988;
  `,K=g.div`
  ${({size:t,theme:s})=>t==="small"&&st(s)}
  ${({size:t,theme:s})=>t==="big"&&gt(s)}

  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  z-index: 988;
  border-radius: 10px;
  box-shadow: 0 10px 50px rgba(146, 153, 184, .19);
  @media only screen and (max-width: 575px){
    ${({theme:t})=>t.rtl?"left":"right"}: 0;
  }
  .reply-inner{
    width: 100%;
    border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]} !important;
    &:focus,
    &:hover{
      border-color: ${({theme:t})=>t["primary-color"]};
    }
  }
  input{
    border: 0 none;
    border-radius: 0px;
    background: ${({theme:t})=>t[t.mainContent]["white-background"]};
    border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
  }
  .react-tagsinput{
    width: 100%;
    background: ${({theme:t})=>t[t.mainContent]["white-background"]};
    ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0;
    border: 0 none;
    input{
      border: 0 none;
      width: 100%;
    }
    input::placeholder{
      color: ${({theme:t})=>t[t.mainContent]["light-text"]};
    }
    .react-tagsinput-tag{
      padding: 5px 16px;
      border: 0 none;
      border-radius: 16px;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      background: ${({theme:t})=>t[t.mainContent]["general-background"]};
      .react-tagsinput-remove{
        ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 8px;
        color: ${({theme:t})=>t[t.mainContent]["light-text"]};
      }
    }
  }
  .ant-upload-list{
    position: absolute;
    bottom: 15%;
    ${({theme:t})=>t.rtl?"right":"left"}: 25px;
    width: 95%;    
  }
  input{
    padding: 15px 0;
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    &:focus{
      box-shadow: 0 0;
    }
  }
  input::placeholder{
    color: ${({theme:t})=>t[t.mainContent]["light-text"]};
  }

  .header {
    padding: 20px;
    color: ${({theme:t})=>t[t.mainContent]["white-text"]};
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    p {
      margin: 0;
      padding: 0;
    }
    .icon-right {
      svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
        opacity: .70;
      }
      svg:first-child {
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
      }
    }
  }
  .body {
    @media only screen and (max-width: 1599px){
      height: 450px;
      overflow-y: scroll;
    }
    @media only screen and (max-width: 1450px){
      height: 400px;
    }
    .group {
      padding: 0px 30px;
      position: relative;
      @media only screen and (max-width: 575px){
        padding: 0px 15px;
      }
      >div{
        box-shadow: 0 0;
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border: none;
      }
      .mail-cc{
        position: absolute;
        ${({theme:t})=>t.rtl?"left":"right"}: 30px;
        color: ${({theme:t})=>t[t.mainContent]["light-text"]};
      }
      .DraftEditor-root{
        font-size: 14px;
        font-family: 'Jost', sans-serif;
      }
      .EditorToolbar__root___3_Aqz{
        font-family: 'Jost', sans-serif;
        border-bottom-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        .public-DraftStyleDefault-block{
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
          span{
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
          }
        }
      }
    }
    .public-DraftEditorPlaceholder-root{
      padding-top: 20px;
    }
    .public-DraftEditor-content {
      height: 275px;
      padding-top: 20px;
      @media only screen and (max-width: 1599px){
        height: 220px
      }
      @media only screen and (max-width: 1450px){
        height: 170px
      }
      @media only screen and (max-width: 575px){
        height: 160px
      }
    }
  }
  .footer {
    border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    padding: 20px 0 30px;
    margin: 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
        line-height: 1;
        svg{
          width: 18px;
          height: 18px;
          color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        }
      }
      .ant-upload {
        margin-top: 4px;
          svg{
            width: 15px;
            height: 15px;
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 10px;
          }
      }
      .ant-upload-list{
        overflow: hidden;
        .ant-upload-list-item{
          border-radius: 4px;
          height: 25px;
          line-height: 2.5;
          z-index: 10;
          background: ${({theme:t})=>t[t.mainContent]["general-background"]};
          .ant-upload-list-item-name{
            font-size: 13px;
          }
          .ant-upload-list-item-card-actions{
            top: -4px;
            line-height: 1;
          }
        }
      }
    }
    .right{
      line-height: 1;
      a{
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        svg{
          width: 18px;
          height: 18px;
          color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        }
      }
    }
  }
`,yt=g.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      &.add-label-btn{
        direction: ${({theme:t})=>(t.rtl,"ltr")};
        a{
          direction: ${({theme:t})=>t.rtl?"rtl":"ltr"};
        }
        &:hover{
          background: transparent;
          a{
            background: transparent;
            color: ${({theme:t})=>t["primary-color"]} !important;
          }
        }
        a{
          color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]} !important;
          transition: .3s;
          span{
            line-height: 1.5;
          }
          &:hover{
            background: transparent;
            svg,
            i,
            span{
              color: ${({theme:t})=>t["primary-color"]};
            }
          }
        }
      }
      a{
        padding: 10px 15px;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        border-radius: 6px;
        line-height: 1;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        svg{
          width: 16px;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
          color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
        &.active{
          background: ${({theme:t})=>t[t.mainContent]["primary-transparent"]};
          color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          span{
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          }
          svg,
          i{
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          }
        }
        span{
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }

      &:hover{
        a{
          background: ${({theme:t})=>t[t.mainContent]["primary-transparent"]};
          color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          svg,
          i{
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          }
        }
      }
      .nav-text{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        position: relative;
        width: calc(100% + 60px);
        ${({theme:t})=>(t.rtl,"left")}: 50%;
        transform: translateX(-50%);
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border-radius: 8px;
        @media only screen and (max-width: 1199px){
          width: calc(100% + 40px);
          padding: 15px;
          bottom: 150px;
        }
        h1{
          text-align: left;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
          transition: .3s;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        input{
          height: 44px;
          border-radius: 2px;
          background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
          border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
            height: 38px;
          }
          .ant-btn-default{
            padding: 0 12px;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
          }
        }
      }
    }
  }
  .nav-labels{
    margin-top: 35px;
    p{
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding: 0 15px;
      color: #9299b8;
      text-align: ${({theme:t})=>t.rtl?"right":"left"};
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`,vt=g.div`
  .ant-card-body{
    padding: 30px 0 !important;
  }
  .ant-card-head-wrapper{
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: center;
    }
  }

  .ant-card-head {
    .ant-card-extra{
      @media only screen and (max-width: 767px){
        width: 100%;
        justify-content: center;
      }
    }
    .ant-card-head-title{
      @media only screen and (max-width: 767px){
        padding: 18px 0 0;
      }
    }
  }
`,wt=g.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  @media only screen and (max-width: 575px){
    flex-flow: row !important;
    margin-bottom: 5px;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0 4px;
    transition: 0.3s ease;
    @media only screen and (max-width: 575px){
      width: 25px;
      height: 25px;
    }
    svg{
      width: 16px;
      color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${({theme:t})=>t["primary-color"]};
      }
    }
  }
`,$t=g.div`
  display: flex;
  align-items: center;  
  svg{
    color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
  }
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 20px;
    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 16px;
  }
  h1{
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    a{
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      transition: .3s;
    }
  }
  i,
  span.fa{
    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
  }
`,Ct=g.div`
  min-width: 540px;
  @media only screen and (max-width: 575px){
    min-width: 180px;
  }
  h1{
    font-size: 15px;
    font-weight: 500;
    transition: .3s;
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    a{
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      transition: .3s;
      &:hover{
        color: ${({theme:t})=>t["primary-color"]};
      }
    }
  }
  .mail-badge{
    display: inline-block;
    ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 10px;
    font-size: 12px;
    font-weight: 400;
    height: 22px;
    padding: 0 6.4px;
    border-radius: 3px;
    text-transform: capitalize;
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    background: ${({theme:t})=>t[t.mainContent]["dark-background"]};
    @media only screen and (max-width: 575px){
      ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 0px;
    }
    &.primary{
      background: ${({theme:t})=>t[t.mainContent]["primary-transparent"]};
      color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
    }
  }
  p{
    margin: 0;
    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
  }
  .btn-attachment{
    font-size: 13px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 22px;
    border-radius: 15px;
    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
    background: ${({theme:t})=>t[t.mainContent]["general-background"]};
    @media only screen and (max-width: 575px){
      display: none;
    }
    i,
    svg{
      width: 16px;
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
    }
  }
  a + a{
    ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 15px;
  }
`,kt=g.div`
  padding: 0 30px;
  .message-box {
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: flex-start;
    }
    @media only screen and (max-width: 575px){
      padding: 0;
    }
  }
  >div{
    &.align-items-center{
      @media only screen and (max-width: 375px){
        align-items: flex-start;
      }
    }
  }
  .message-subject{
    h1{
      display: flex;
      align-items: center;
      font-weight: 500;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      @media only screen and (max-width: 767){
        font-size: 20px;
      }
      @media only screen and (max-width: 375px){
        flex-flow: column;
        align-items: flex-start;
      }
      .mail-badge{
        display: inline-block;
        ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 20px;
        font-size: 12px;
        font-weight: 400;
        height: 20px;
        line-height: 1.6;
        padding: 0 6.4px;
        border-radius: 3px;
        text-transform: capitalize;
        @media only screen and (max-width: 375px){
          margin: 15px 0 0 0;
        }
        background: ${({theme:t})=>t["bg-color-deep"]};
        &.primary{
          background: ${({theme:t})=>t[t.mainContent]["primary-transparent"]};
          color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
        }
      }
    }
  }
  .message-action{
    display: flex;
    align-items: center;
    a{
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      transition: 0.3s ease;
      color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      svg{
        width: 16px;
        height: 16px;
        margin: -3px 0;
      }
      &:hover{
        background: rgba(95,99,242,0.05);
      }
    }
  }
  .message-author{
    display: flex;
    align-items: center;
    margin-top: 20px;
    @media only screen and (max-width: 767px){
      margin-top: 14px;
    }
    div{
      ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 20px;
      h1{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 4px;
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      }
      a{
        display: flex;
        align-items: center;
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        svg,
        i{
          width: 18px;
          height: 18px;
          ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 5px;
        }
      }
    }

  }
  .message-excerpt{
    display: flex;
    align-items: center;
    margin: 0 -15px;
    @media only screen and (max-width: 767px){
      margin: 18px 0 0;
    }
    span + span{
      font-size: 13px;
      line-height: 1.5;
    }
    span, a{
      display: block;
      padding: 0 15px;
      line-height: 0;
      color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      @media only screen and (max-width: 1199px){
        padding: 0 6px;
      }
    }
    & > span{
      ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0;
    }
    svg{
      width: 16px;
      height: 16px;
    }
    a{
      i,
      span.fa{
        font-size: 16px;
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
      &.starDeactivate{
        i:before{
          content: "\f31b";
        }
      }
      &.starActive{
        color: ${({theme:t})=>t["warning-color"]};
        i:before,
        span.fa:before{
          content: "\f005";
        }
      }
    }
  }

  .message-body{
    ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 82px;
    margin-top: 22px;
    @media only screen and (max-width: 767px){
      ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0px;
      margin-top: 18px;
    }
    .welcome-text{
      font-size: 15px;
      margin-bottom: 40px;
      display: inline-block;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    p{
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      font-size: 15px;
      line-height: 1.667;
      margin-bottom: 55px;
    }
    h1{
      font-size: 15px;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      font-weight: normal;
      line-height: 30px;
    }
  }
  .message-attachments{
    margin: 44px -5px 0 -5px;
    ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 82px;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 767px){
      margin: 30px 0 0;
      ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0px;
      justify-content: center;
    }
    figure{
      position: relative;
      border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      border-radius: 10px;
      padding: 10px;
      margin: 0 5px 30px;
      &:hover{
        box-shadow: 0 10px 20px ${({theme:t})=>t["gray-solid"]}10;
        .attachment-image{
          &:after{
            height: 100%;
            opacity: 1;
            visibility: visible;
          }
        }
        .attachment-hover{
          opacity: 1;
          visibility: visible
        }
      }
      .attachment-image{
        position: relative;
        &:after{
          position: absolute;
          ${({theme:t})=>t.rtl?"right":"left"}: 0;
          top: 0;
          width: 100%;
          height: 0%;
          border-radius: 10px;
          content: '';
          opacity: 0;
          visibility: hidden;
          transition: .3s ease-in;
          background: ${({theme:t})=>t["dark-color"]}50;
        }
      }
      .attachment-hover{
        position: absolute;
        top: 80px;
        ${({theme:t})=>t.rtl?"right":"left"}: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        transition: .35s;
        .btn-link{
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          &:after{
            position: absolute;
            ${({theme:t})=>t.rtl?"right":"left"}: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #fff;
            opacity: .20;
            content: '';
          }
          svg,
          img{
            width: 14.5px;
            color: #fff;
          }
        }
        .btn-link + .btn-link{
          ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 10px;
        }
      }
      figcaption{
        margin-top: 10px;
        h1{
          font-size: 13px;
          margin: 0;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        p{
          font-size: 12px;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
          margin:0;
        }
      }
    }
  }
  hr{
    margin-bottom: 30px;
    border: 0 none;
    height: 1px;
    background: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
  }
`,_t=g.div`
  padding: 0 30px;
  @media only screen and (max-width: 575px){
    padding: 0 15px;
  }
  nav{
    ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 70px;
    margin-bottom: 30px;
    @media only screen and (max-width: 575px){
      ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0;
    }
    ul{
      display: flex;
      align-items: center;
      list-style:none;
      margin: 0 -5px;
      padding: 0;
      li{
        padding: 0 5px;
        a{
          border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
          line-height: 44px;
          display: inline-flex;
          align-items: center;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
          border-radius: 4px;
          &:hover{
            color: ${({theme:t})=>t["primary-color"]};
          }
          svg{
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .reply-form{
    @media only screen and (max-width: 575px){
      flex-flow: column;
      align-items: center;
    }
    img{
      margin: ${({theme:t})=>t.rtl?"10px 0 0 20px":"10px 20px 0 0"};
      border-radius: 50%;
      @media only screen and (max-width: 575px){
        margin: 0 0 20px;
      }
    }
  }
  .RichTextEditor__root___2QXK-{
    border: 0 none;
    padding: 15px 0px;
    @media only screen and (max-width: 575px){
      padding: 15px 0;
    }
    .public-DraftEditor-content{
      min-height: 120px;
    }
  }
  .reply-box{
    display: flex;
    > div{
      width: 100%;
      z-index: 10;
      border: 1px solid ${({theme:t})=>t["border-color-light"]};
    }
    .reply-inner{
      width: 100%
      border-bottom: 1px solid #F1F2F6 !important;
      @media only screen and (max-width: 575px){
        flex-flow: column;
        align-items: flex-start !important;
        padding-top: 15px;
      }
      .react-tagsinput{
        border-bottom: 0 none !important;
      }
    }
    .reply-title{
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
      color: ${({theme:t})=>t["light-color"]};
    }
    .mail-cc{
      color: ${({theme:t})=>t["light-color"]};
    }
    .body{
      .DraftEditor-root{
        >div{
          font-size: 14px;
          font-family: 'Jost', sans-serif;
        }
      }
      .public-DraftEditorPlaceholder-root{
        padding-top: 20px;
      }
      .public-DraftEditor-content {
        height: 155px;
        padding-top: 20px;
        @media only screen and (max-width: 575px){
          height: 140px
        }
      }
    }
    .footer{
      margin: 0 30px 0;
      @media only screen and (max-width: 575px){
        margin: 0 15px 0
      }
    }
  }
`,Tt=g.div`
  box-shadow: 0 15px 40px ${({theme:t})=>t["light-color"]}10;
  margin: 0px 0 50px;
  padding-top: 30px;
  .reply-view__single{
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    @media only screen and (max-width: 375px){
      flex-flow: column;
    }
    &:not(:last-child){
      margin-bottom: 30px;
    }
    .reply-view__content{
      @media only screen and (max-width: 575px){
          flex-flow: column;
      }
      img{
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
        border-radius: 50%;
        @media only screen and (max-width: 575px){
          margin: 0 0 15px 0;
        }
      }
      figcaption{
        h1{
          font-weight: 500;
          margin-bottom: 12px;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        p{
          font-size: 15px;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }
    }
    .reply-view__meta{
      @media only screen and (max-width: 375px){
        order: -1;
      }
      span{
        font-size: 13px;
      }
      svg,
      i,
      span{
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
      i,
      span.fa{
        font-size: 16px;
      }
      svg,
      img{
        width: 16px;
      }
      .meta-list{
        display: flex;
        align-items: center;
        @media only screen and (max-width: 575px){
            flex-flow: column;
        }
        @media only screen and (max-width: 375px){
            flex-flow: row;
            justify-content: flex-start;
            margin-bottom: 20px;
        }
        a{
          line-height: 1;
        }
        .date-meta{
          min-width: 135px;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 30px;
          @media only screen and (max-width: 767px){
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
          }
          @media only screen and (max-width: 575px){
            margin: 0 0 15px 0;
          }
          @media only screen and (max-width: 375px){
            margin: ${({theme:t})=>t.rtl?"0 0 0 15px":"0 15px 0 0"};
          }
        }
        a{
          &:not(:last-child){
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 30px;
            @media only screen and (max-width: 767px){
              ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
            }
            @media only screen and (max-width: 575px){
                margin: 0 0 15px 0;
            }
            @media only screen and (max-width: 375px){
              margin: 0 15px 0 0;
            }
          }
        }
      }
    }
  }
`,jt=g.div`
  span{
    color: ${({theme:t})=>t["light-color"]};
  }
`,Dt=g.div`
  position: relative;
  .trigger-close.ant-btn-link{
    margin: 0 !important;
    position: absolute;
    ${({theme:t})=>t.rtl?"left":"right"}: 20px;
    top: 20px;
    z-index: 99;
    padding: 0;
    background: transparent !important;
  }
  .trigger-col {
    button{
      svg{
        width: 18px;
        height: 18px;
      }
    }
  }
  .ant-btn-link{
    background: #fff !important;
    margin-bottom: 25px;
    border-radius: 6px;
    color: ${({theme:t})=>t["primary-color"]} !important;
    &:focus{
      color: ${({theme:t})=>t["primary-color"]} !important;
    }
  }
  .mail-sideabr{
    &.hide{
      transform: translateX(${({theme:t})=>t.rtl?"100%":"-100%"});
      transition: .35s ease-in;
    }
    &.show{
      transform: translateX(0%);
      transition: .35s ease-in;
    }
    @media only screen and (max-width: 991px){
      display: block;
      background: #fff;
      position: fixed;
      ${({theme:t})=>t.rtl?"right":"left"}: 0;
      top: 60px;
      width: 280px;
      height: 100%;
      z-index: 99;
    }
    .ant-card{
      min-height: 900px;
      .ant-card-body{
        padding: 0px !important;
      }
    }
  }

  .mail-sidebar-top{
    padding: 30px 30px 0;
    @media only screen and (max-width: 991px){
      padding: 60px 30px 0;
    }
  }

  .mail-sidebar-bottom{
    padding: 0 15px 25px 15px;
    ul{
      li {
        a{
          text-transform: capitalize;
        }
      }
    }
  }

  table{
    .ant-table-tbody{
      .ant-table-cell{
        vertical-align: top;
      }
    }
    tr td.ant-table-selection-column{
      padding: 15px 16px;
    }
  }
`,Pt=g.div`
  display: ${({collapsed:t})=>t?"block":"none"}
`;var z={exports:{}},ct=z.exports,q;function xt(){return q||(q=1,function(t,s){(function(f,v){v(s,Z(),tt())})(ct,function(f,v,C){Object.defineProperty(f,"__esModule",{value:!0});var d=$(v);$(C);function $(i){return i&&i.__esModule?i:{default:i}}function O(i,r,a){return r in i?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a,i}function R(i,r){if(!(i instanceof r))throw new TypeError("Cannot call a class as a function")}var S=function(){function i(r,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(r,a,n){return a&&i(r.prototype,a),n&&i(r,n),r}}();function I(i,r){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:i}function c(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);i.prototype=Object.create(r&&r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(i,r):i.__proto__=r)}var T=Object.assign||function(i){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n])}return i};function E(i,r){var a={};for(var n in i)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n]);return a}function L(i){for(var r=[],a=0;a<i.length;a++)r.indexOf(i[a])===-1&&r.push(typeof i[a]=="string"?i[a].trim():i[a]);return r}function X(i){return window.clipboardData?window.clipboardData.getData("Text"):i.clipboardData?i.clipboardData.getData("text/plain"):""}function J(i){var r=i.tag,a=i.key,n=i.disabled,e=i.onRemove,o=i.classNameRemove,p=i.getTagDisplayValue,x=E(i,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return d.default.createElement("span",T({key:a},x),p(r),!n&&d.default.createElement("a",{className:o,onClick:function(b){return e(a)}}))}function W(i){i.addTag;var r=E(i,["addTag"]),a=r.onChange,n=r.value,e=E(r,["onChange","value"]);return d.default.createElement("input",T({type:"text",onChange:a,value:n},e))}function H(i,r){return d.default.createElement("span",null,i,r)}function G(i){return i.split(" ").map(function(r){return r.trim()})}var Q={className:"react-tagsinput-input",placeholder:"Add a tag"},M=function(i){c(r,i);function r(){R(this,r);var a=I(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return a.state={tag:"",isFocused:!1},a.focus=a.focus.bind(a),a.blur=a.blur.bind(a),a.accept=a.accept.bind(a),a}return S(r,[{key:"_getTagDisplayValue",value:function(n){var e=this.props.tagDisplayProp;return e?n[e]:n}},{key:"_makeTag",value:function(n){var e=this.props.tagDisplayProp;return e?O({},e,n):n}},{key:"_removeTag",value:function(n){var e=this.props.value.concat([]);if(n>-1&&n<e.length){var o=e.splice(n,1);this.props.onChange(e,o,[n])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(n){var e=this,o=this.props,p=o.onChange,x=o.onValidationReject,w=o.onlyUnique,b=o.maxTags,u=o.value;w&&(n=L(n),n=n.filter(function(h){return u.every(function(m){return e._getTagDisplayValue(m)!==e._getTagDisplayValue(h)})}));var y=n.filter(function(h){return!e._validate(e._getTagDisplayValue(h))});if(n=n.filter(function(h){return e._validate(e._getTagDisplayValue(h))}),n=n.filter(function(h){var m=e._getTagDisplayValue(h);return typeof m.trim=="function"?m.trim().length>=0:m}),b>=0){var j=Math.max(b-u.length,0);n=n.slice(0,j)}if(x&&y.length>0&&x(y),n.length>0){for(var D=u.concat(n),k=[],P=0;P<n.length;P++)k.push(u.length+P);return p(D,n,k),this._clearInput(),!0}return y.length>0||this._clearInput(),!1}},{key:"_validate",value:function(n){var e=this.props,o=e.validate,p=e.validationRegex;return o(n)&&p.test(n)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(n,e,o){return n?!0:o==="Enter"?this.props.preventSubmit||!this.props.preventSubmit&&!e:!1}},{key:"focus",value:function(){this.input&&typeof this.input.focus=="function"&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&typeof this.input.blur=="function"&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var n=this.props.preventSubmit,e=this._tag();return e!==""||!n?(e=this._makeTag(e),this._addTags([e])):!1}},{key:"addTag",value:function(n){return this._addTags([n])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(n){var e=this,o=this.props,p=o.addOnPaste,x=o.pasteSplit;if(p){n.preventDefault();var w=X(n),b=x(w).map(function(u){return e._makeTag(u)});this._addTags(b)}}},{key:"handleKeyDown",value:function(n){if(!n.defaultPrevented){var e=this.props,o=e.value,p=e.removeKeys,x=e.addKeys,w=this._tag(),b=w==="",u=n.keyCode,y=n.key,j=x.indexOf(u)!==-1||x.indexOf(y)!==-1,D=p.indexOf(u)!==-1||p.indexOf(y)!==-1;if(j){var k=this.accept();this._shouldPreventDefaultEventOnAdd(k,b,y)&&n.preventDefault()}D&&o.length>0&&b&&(n.preventDefault(),this._removeTag(o.length-1))}}},{key:"handleClick",value:function(n){var e=n.target,o=n.target&&n.target.parentElement;(e===this.div||o===this.div)&&this.focus()}},{key:"handleChange",value:function(n){var e=this.props.onChangeInput,o=this.props.inputProps.onChange,p=n.target.value;o&&o(n),this.hasControlledInput()?e(p):this.setState({tag:p})}},{key:"handleOnFocus",value:function(n){var e=this.props.inputProps.onFocus;e&&e(n),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(n){var e=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),n!=null&&(e&&e(n),this.props.addOnBlur&&n.target.value)){var o=this._makeTag(n.target.value);this._addTags([o])}}},{key:"handleRemove",value:function(n){this._removeTag(n)}},{key:"inputProps",value:function(){var n=this.props.inputProps;n.onChange,n.onFocus,n.onBlur;var e=E(n,["onChange","onFocus","onBlur"]),o=T({},Q,e);return this.props.disabled&&(o.disabled=!0),o}},{key:"inputValue",value:function(n){return n.currentValue||n.inputValue||""}},{key:"hasControlledInput",value:function(){var n=this.props,e=n.inputValue,o=n.onChangeInput;return typeof o=="function"&&typeof e=="string"}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(n){this.hasControlledInput()||this.inputValue(this.props)&&this.inputValue(n)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var n=this,e=this.props,o=e.value,p=e.tagProps,x=e.renderLayout,w=e.renderTag,b=e.renderInput,u=e.className,y=e.focusedClassName,j=e.disabled,D=this.state.isFocused,k=o.map(function(h,m){return w(T({key:m,tag:h,onRemove:n.handleRemove.bind(n),disabled:j,getTagDisplayValue:n._getTagDisplayValue.bind(n)},p))}),P=b(T({ref:function(m){n.input=m},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return d.default.createElement("div",{ref:function(m){n.div=m},onClick:this.handleClick.bind(this),className:u+(D?" "+y:"")},x(k,P))}}]),r}(d.default.Component);M.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:W,renderTag:J,renderLayout:H,pasteSplit:G,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},f.default=M,t.exports=f.default})}(z,z.exports)),z.exports}var ut=xt();const ht=nt(ut);function F({onChange:t,onSend:s,defaultTag:f,replay:v,text:C}){const[d,$]=A.useState({value:N.createEmptyValue(),tags:f?[f]:[]}),O=c=>{$({...d,value:c}),t&&t(c.toString("html"))},R=c=>{$({...d,tags:c})},S=()=>{s&&s(d.value.toString("html"))},I={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange(c){c.file.status==="done"?B.success(`${c.file.name} file uploaded successfully`):c.file.status==="error"&&B.error(`${c.file.name} file upload failed.`)}};return l.jsxs(K,{children:[l.jsxs("div",{className:"body",children:[!C&&l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},className:"group",children:[l.jsxs("div",{className:"reply-inner",style:{display:"flex",alignItems:"center"},children:[v?l.jsx("span",{className:"reply-title",children:"Replay To"}):null,l.jsx(ht,{inputProps:{placeholder:v?null:"To"},value:d.tags,onChange:R})]}),l.jsx("span",{className:"mail-cc",children:"Cc"})]}),l.jsx("div",{className:"group",children:l.jsx(N,{placeholder:"Type your message...",value:d.value,onChange:O})})]}),!C&&l.jsxs("div",{className:"footer",children:[l.jsxs("div",{className:"left d-flex align-items-center",children:[l.jsx(et,{size:"default",type:"primary",onClick:S,raised:!0,children:"Send"}),l.jsx(V,{to:"#",children:l.jsx(at,{...I,children:l.jsx(it,{})})}),l.jsx(V,{to:"#",children:l.jsx(rt,{})})]}),l.jsx("div",{className:"right",children:l.jsx(V,{to:"#",children:l.jsx(ot,{})})})]})]})}F.propTypes={onChange:_.func,onSend:_.func,defaultTag:_.string,replay:_.bool,text:_.bool};const zt=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));function U({close:t}){const[s,f]=A.useState({value:N.createEmptyValue(),tags:[],size:"small"}),v=$=>{f({...s,value:$})},C=()=>f({...s,size:s.size==="small"?"big":"small"}),d=async()=>{};return l.jsxs(K,{size:s.size,children:[l.jsxs("div",{className:"header",children:[l.jsx("p",{children:"New Message"}),l.jsxs("div",{className:"icon-right",children:[l.jsx(lt,{onClick:C}),l.jsx(pt,{onClick:t})]})]}),l.jsxs("div",{className:"body",children:[l.jsx("div",{className:"group",children:l.jsx(dt,{placeholder:"Subject",type:"text"})}),l.jsx(F,{onSend:d,onChange:v})]})]})}U.propTypes={close:_.func};U.defaultProps={close:()=>{}};export{U as C,yt as E,Pt as M,Tt as R,bt as S,Dt as a,F as b,wt as c,Ct as d,$t as e,vt as f,kt as g,_t as h,jt as i,zt as j};
