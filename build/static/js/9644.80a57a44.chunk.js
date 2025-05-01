(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9644],{39644:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(9950),a=n(67128),i=n(50466),o=n(15052),l=n.n(o),d=n(55902),p=n(20133),s=n(26039),h=n(44414);function m(t){let{close:e}=t;const[n,o]=(0,r.useState)({value:l().createEmptyValue(),tags:[],size:"small"});return(0,h.jsxs)(p.MailBox,{size:n.size,children:[(0,h.jsxs)("div",{className:"header",children:[(0,h.jsx)("p",{children:"New Message"}),(0,h.jsxs)("div",{className:"icon-right",children:[(0,h.jsx)(i.A,{onClick:()=>o({...n,size:"small"===n.size?"big":"small"})}),(0,h.jsx)(a.A,{onClick:e})]})]}),(0,h.jsxs)("div",{className:"body",children:[(0,h.jsx)("div",{className:"group",children:(0,h.jsx)(d.A,{placeholder:"Subject",type:"text"})}),(0,h.jsx)(s.default,{onSend:async()=>{},onChange:t=>{o({...n,value:t})}})]})]})}m.defaultProps={close:()=>{}};const u=m},26039:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var r=n(9950),a=n(34574),i=n(35250),o=n(93392),l=n(15052),d=n.n(l),p=n(17270),s=n.n(p),h=n(42074),m=n(92759),u=n(48874),g=n(20133),c=n(72449),x=n(44414);const f=function(t){let{onChange:e,onSend:n,defaultTag:l,replay:p,text:f}=t;const[y,b]=(0,r.useState)({value:d().createEmptyValue(),tags:l?[l]:[]}),v={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange(t){"done"===t.file.status?m.Ay.success(`${t.file.name} file uploaded successfully`):"error"===t.file.status&&m.Ay.error(`${t.file.name} file upload failed.`)}};return(0,x.jsxs)(g.MailBox,{children:[(0,x.jsxs)("div",{className:"body",children:[!f&&(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},className:"group",children:[(0,x.jsxs)("div",{className:"reply-inner",style:{display:"flex",alignItems:"center"},children:[p?(0,x.jsx)("span",{className:"reply-title",children:"Replay To"}):null,(0,x.jsx)(s(),{inputProps:{placeholder:p?null:"To"},value:y.tags,onChange:t=>{b({...y,tags:t})}})]}),(0,x.jsx)("span",{className:"mail-cc",children:"Cc"})]}),(0,x.jsx)("div",{className:"group",children:(0,x.jsx)(d(),{placeholder:"Type your message...",value:y.value,onChange:t=>{b({...y,value:t}),e&&e(t.toString("html"))}})})]}),!f&&(0,x.jsxs)("div",{className:"footer",children:[(0,x.jsxs)("div",{className:"left d-flex align-items-center",children:[(0,x.jsx)(c.Button,{size:"default",type:"primary",onClick:()=>{n&&n(y.value.toString("html"))},raised:!0,children:"Send"}),(0,x.jsx)(h.N_,{to:"#",children:(0,x.jsx)(u.A,{...v,children:(0,x.jsx)(i.A,{})})}),(0,x.jsx)(h.N_,{to:"#",children:(0,x.jsx)(o.A,{})})]}),(0,x.jsx)("div",{className:"right",children:(0,x.jsx)(h.N_,{to:"#",children:(0,x.jsx)(a.A,{})})})]})]})}},20133:(t,e,n)=>{"use strict";n.r(e),n.d(e,{EmailAuthor:()=>s,EmailHeader:()=>h,EmailNav:()=>l,EmailWrapper:()=>x,MailBox:()=>o,MailDetailsWrapper:()=>d,MailRightAction:()=>c,MailSideBar:()=>f,MessageAction:()=>p,MessageDetails:()=>m,MessageReply:()=>u,ReplyList:()=>g,Style:()=>i});var r=n(19335),a=n(72896);const i=(0,r.Ay)(a.A)`
  margin-bottom: 30px;  
  .ant-table{
    padding-bottom: 30px;
    border-radius: 10px;
    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    tr{
      th,
      td{
        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        &:first-child{
          ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 30px;
        }
        &:last-child{
          ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      /* ${t=>{let{theme:e}=t;return e.rtl?"right: 15px;":"left: -15px;"}} */
      right: 15px;
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        &:first-child{
          ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 20px;
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        .ant-table-selection-extra{
          ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: -25px
        }
        .ant-dropdown-trigger{
          svg{
            width: 20px;
            color: ${t=>{let{theme:e}=t;return e["gray-solid"]}};
          }
        }
        .email-top-search{
          display: flex;
          justify-content: ${t=>{let{theme:e}=t;return e.rtl?"flex-start":"flex-end"}};
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
              background:  ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
              border: 0 none;
              input{
                height: 44px !important;
                border-radius: 6px !important;
                background:  ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
                &::placeholder{
                  color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                }
              }
              .ant-input-suffix{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                .anticon-search{
                  svg{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
              color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
              &:not(:last-child){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 25px;
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          .pagination-slider{
            margin: ${t=>{let{theme:e}=t;return e.rtl?"0 15px 0 20px":"0 20px 0 15px"}};
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}}10;
              }
              svg{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
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
      text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${t=>{let{theme:e}=t;return e["gray-solid"]}}20;
        h1{
          font-weight: 600;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
          a{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
          }
        }
        .email-time{
          font-weight: 500;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        >td{
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}} !important;
          border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
      }
      p{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      }
      h1 a{
        font-weight: 500;
        transition: 0s;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      }
      &.ant-table-row-selected{
        &:hover{
            >td{
              background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
            }
        }
        >td{
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        }
      }
      >td{
        padding: 15px 16px;
        &:last-child{
          text-align: ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}};
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 400;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}};
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 0;
  }
  
`,o=r.Ay.div`
  ${t=>{let{size:e,theme:n}=t;return"small"===e&&(t=>{let{rtl:e}=t;return`\n    max-width: 600px;\n    width: 100%;\n    position: fixed;\n    height: calc(100vh - 40%);\n    bottom: 140px;\n    ${e?"left":"right"}: 15px;\n    @media only screen and (max-width: 1450px){\n      height: calc(100vh - 50%);\n      bottom: 35%;\n    }\n    @media only screen and (max-width: 575px){\n      min-height: 450px;\n      bottom: 80px;\n    }\n`})(n)}}
  ${t=>{let{size:e,theme:n}=t;return"big"===e&&(t=>{let{rtl:e}=t;return`\n  max-width: 1200px;\n  width: 100%;\n  position: fixed;\n  min-height: 600px;\n  bottom: 100px;\n  ${e?"left":"right"}: 100px;\n  z-index: 988;\n  `})(n)}}

  background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
  z-index: 988;
  border-radius: 10px;
  box-shadow: 0 10px 50px rgba(146, 153, 184, .19);
  @media only screen and (max-width: 575px){
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 0;
  }
  .reply-inner{
    width: 100%;
    border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}} !important;
    &:focus,
    &:hover{
      border-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
    }
  }
  input{
    border: 0 none;
    border-radius: 0px;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
  }
  .react-tagsinput{
    width: 100%;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0;
    border: 0 none;
    input{
      border: 0 none;
      width: 100%;
    }
    input::placeholder{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
    }
    .react-tagsinput-tag{
      padding: 5px 16px;
      border: 0 none;
      border-radius: 16px;
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
      .react-tagsinput-remove{
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 8px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
      }
    }
  }
  .ant-upload-list{
    position: absolute;
    bottom: 15%;
    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 25px;
    width: 95%;    
  }
  input{
    padding: 15px 0;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    &:focus{
      box-shadow: 0 0;
    }
  }
  input::placeholder{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
  }

  .header {
    padding: 20px;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
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
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
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
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        border: none;
      }
      .mail-cc{
        position: absolute;
        ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 30px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
      }
      .DraftEditor-root{
        font-size: 14px;
        font-family: 'Jost', sans-serif;
      }
      .EditorToolbar__root___3_Aqz{
        font-family: 'Jost', sans-serif;
        border-bottom-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        .public-DraftStyleDefault-block{
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          span{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
    border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    padding: 20px 0 30px;
    margin: 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
        line-height: 1;
        svg{
          width: 18px;
          height: 18px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        }
      }
      .ant-upload {
        margin-top: 4px;
          svg{
            width: 15px;
            height: 15px;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
          }
      }
      .ant-upload-list{
        overflow: hidden;
        .ant-upload-list-item{
          border-radius: 4px;
          height: 25px;
          line-height: 2.5;
          z-index: 10;
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
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
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        svg{
          width: 18px;
          height: 18px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        }
      }
    }
  }
`,l=r.Ay.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      &.add-label-btn{
        direction: ${t=>{let{theme:e}=t;return e.rtl,"ltr"}};
        a{
          direction: ${t=>{let{theme:e}=t;return e.rtl?"rtl":"ltr"}};
        }
        &:hover{
          background: transparent;
          a{
            background: transparent;
            color: ${t=>{let{theme:e}=t;return e["primary-color"]}} !important;
          }
        }
        a{
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}} !important;
          transition: .3s;
          span{
            line-height: 1.5;
          }
          &:hover{
            background: transparent;
            svg,
            i,
            span{
              color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
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
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        svg{
          width: 16px;
          ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
        &.active{
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["primary-transparent"]}};
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
          span{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
          }
          svg,
          i{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
          }
        }
        span{
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
      }

      &:hover{
        a{
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["primary-transparent"]}};
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
          svg,
          i{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
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
        ${t=>{let{theme:e}=t;return e.rtl,"left"}}: 50%;
        transform: translateX(-50%);
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
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
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        input{
          height: 44px;
          border-radius: 2px;
          background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
          border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
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
      text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`,d=r.Ay.div`
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
`,p=r.Ay.div`
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
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
      }
    }
  }
`,s=r.Ay.div`
  display: flex;
  align-items: center;  
  svg{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
  }
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 16px;
  }
  h1{
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    a{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      transition: .3s;
    }
  }
  i,
  span.fa{
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
  }
`,h=r.Ay.div`
  min-width: 540px;
  @media only screen and (max-width: 575px){
    min-width: 180px;
  }
  h1{
    font-size: 15px;
    font-weight: 500;
    transition: .3s;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    a{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      transition: .3s;
      &:hover{
        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
      }
    }
  }
  .mail-badge{
    display: inline-block;
    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
    font-size: 12px;
    font-weight: 400;
    height: 22px;
    padding: 0 6.4px;
    border-radius: 3px;
    text-transform: capitalize;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-background"]}};
    @media only screen and (max-width: 575px){
      ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0px;
    }
    &.primary{
      background: ${t=>{let{theme:e}=t;return e[e.mainContent]["primary-transparent"]}};
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
    }
  }
  p{
    margin: 0;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
  }
  .btn-attachment{
    font-size: 13px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 22px;
    border-radius: 15px;
    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
    @media only screen and (max-width: 575px){
      display: none;
    }
    i,
    svg{
      width: 16px;
      ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 6px;
    }
  }
  a + a{
    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
  }
`,m=r.Ay.div`
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
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
      @media only screen and (max-width: 767){
        font-size: 20px;
      }
      @media only screen and (max-width: 375px){
        flex-flow: column;
        align-items: flex-start;
      }
      .mail-badge{
        display: inline-block;
        ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
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
        background: ${t=>{let{theme:e}=t;return e["bg-color-deep"]}};
        &.primary{
          background: ${t=>{let{theme:e}=t;return e[e.mainContent]["primary-transparent"]}};
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
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
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
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
      ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
      h1{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 4px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
      }
      a{
        display: flex;
        align-items: center;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        svg,
        i{
          width: 18px;
          height: 18px;
          ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 5px;
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
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
      @media only screen and (max-width: 1199px){
        padding: 0 6px;
      }
    }
    & > span{
      ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0;
    }
    svg{
      width: 16px;
      height: 16px;
    }
    a{
      i,
      span.fa{
        font-size: 16px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
      }
      &.starDeactivate{
        i:before{
          content: "\f31b";
        }
      }
      &.starActive{
        color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
        i:before,
        span.fa:before{
          content: "\f005";
        }
      }
    }
  }

  .message-body{
    ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 82px;
    margin-top: 22px;
    @media only screen and (max-width: 767px){
      ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0px;
      margin-top: 18px;
    }
    .welcome-text{
      font-size: 15px;
      margin-bottom: 40px;
      display: inline-block;
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
    p{
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      font-size: 15px;
      line-height: 1.667;
      margin-bottom: 55px;
    }
    h1{
      font-size: 15px;
      color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
      font-weight: normal;
      line-height: 30px;
    }
  }
  .message-attachments{
    margin: 44px -5px 0 -5px;
    ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 82px;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 767px){
      margin: 30px 0 0;
      ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0px;
      justify-content: center;
    }
    figure{
      position: relative;
      border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
      border-radius: 10px;
      padding: 10px;
      margin: 0 5px 30px;
      &:hover{
        box-shadow: 0 10px 20px ${t=>{let{theme:e}=t;return e["gray-solid"]}}10;
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
          ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
          top: 0;
          width: 100%;
          height: 0%;
          border-radius: 10px;
          content: '';
          opacity: 0;
          visibility: hidden;
          transition: .3s ease-in;
          background: ${t=>{let{theme:e}=t;return e["dark-color"]}}50;
        }
      }
      .attachment-hover{
        position: absolute;
        top: 80px;
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 50%;
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
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
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
          ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 10px;
        }
      }
      figcaption{
        margin-top: 10px;
        h1{
          font-size: 13px;
          margin: 0;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        p{
          font-size: 12px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          margin:0;
        }
      }
    }
  }
  hr{
    margin-bottom: 30px;
    border: 0 none;
    height: 1px;
    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
  }
`,u=r.Ay.div`
  padding: 0 30px;
  @media only screen and (max-width: 575px){
    padding: 0 15px;
  }
  nav{
    ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 70px;
    margin-bottom: 30px;
    @media only screen and (max-width: 575px){
      ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0;
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
          border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
          line-height: 44px;
          display: inline-flex;
          align-items: center;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
          border-radius: 4px;
          &:hover{
            color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
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
      margin: ${t=>{let{theme:e}=t;return e.rtl?"10px 0 0 20px":"10px 20px 0 0"}};
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
      border: 1px solid ${t=>{let{theme:e}=t;return e["border-color-light"]}};
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
      ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
      color: ${t=>{let{theme:e}=t;return e["light-color"]}};
    }
    .mail-cc{
      color: ${t=>{let{theme:e}=t;return e["light-color"]}};
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
`,g=r.Ay.div`
  box-shadow: 0 15px 40px ${t=>{let{theme:e}=t;return e["light-color"]}}10;
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
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
        border-radius: 50%;
        @media only screen and (max-width: 575px){
          margin: 0 0 15px 0;
        }
      }
      figcaption{
        h1{
          font-weight: 500;
          margin-bottom: 12px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        p{
          font-size: 15px;
          color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
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
          ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 30px;
          @media only screen and (max-width: 767px){
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
          }
          @media only screen and (max-width: 575px){
            margin: 0 0 15px 0;
          }
          @media only screen and (max-width: 375px){
            margin: ${t=>{let{theme:e}=t;return e.rtl?"0 0 0 15px":"0 15px 0 0"}};
          }
        }
        a{
          &:not(:last-child){
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 30px;
            @media only screen and (max-width: 767px){
              ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
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
`,c=r.Ay.div`
  span{
    color: ${t=>{let{theme:e}=t;return e["light-color"]}};
  }
`,x=r.Ay.div`
  position: relative;
  .trigger-close.ant-btn-link{
    margin: 0 !important;
    position: absolute;
    ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 20px;
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
    color: ${t=>{let{theme:e}=t;return e["primary-color"]}} !important;
    &:focus{
      color: ${t=>{let{theme:e}=t;return e["primary-color"]}} !important;
    }
  }
  .mail-sideabr{
    &.hide{
      transform: translateX(${t=>{let{theme:e}=t;return e.rtl?"100%":"-100%"}});
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
      ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
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
`,f=r.Ay.div`
  display: ${t=>{let{collapsed:e}=t;return e?"block":"none"}}
`},17270:function(t,e,n){var r,a,i;a=[e,n(9950),n(11942)],r=function(e,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n);function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i(r);var d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function m(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function u(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push("string"===typeof t[n]?t[n].trim():t[n]);return e}function g(t){return window.clipboardData?window.clipboardData.getData("Text"):t.clipboardData?t.clipboardData.getData("text/plain"):""}function c(t){var e=t.tag,n=t.key,r=t.disabled,i=t.onRemove,o=t.classNameRemove,l=t.getTagDisplayValue,d=m(t,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return a.default.createElement("span",h({key:n},d),l(e),!r&&a.default.createElement("a",{className:o,onClick:function(t){return i(n)}}))}function x(t){t.addTag;var e=m(t,["addTag"]),n=e.onChange,r=e.value,i=m(e,["onChange","value"]);return a.default.createElement("input",h({type:"text",onChange:n,value:r},i))}function f(t,e){return a.default.createElement("span",null,t,e)}function y(t){return t.split(" ").map((function(t){return t.trim()}))}var b={className:"react-tagsinput-input",placeholder:"Add a tag"},v=function(t){function e(){l(this,e);var t=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={tag:"",isFocused:!1},t.focus=t.focus.bind(t),t.blur=t.blur.bind(t),t.accept=t.accept.bind(t),t}return s(e,t),d(e,[{key:"_getTagDisplayValue",value:function(t){var e=this.props.tagDisplayProp;return e?t[e]:t}},{key:"_makeTag",value:function(t){var e=this.props.tagDisplayProp;return e?o({},e,t):t}},{key:"_removeTag",value:function(t){var e=this.props.value.concat([]);if(t>-1&&t<e.length){var n=e.splice(t,1);this.props.onChange(e,n,[t])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(t){var e=this,n=this.props,r=n.onChange,a=n.onValidationReject,i=n.onlyUnique,o=n.maxTags,l=n.value;i&&(t=(t=u(t)).filter((function(t){return l.every((function(n){return e._getTagDisplayValue(n)!==e._getTagDisplayValue(t)}))})));var d=t.filter((function(t){return!e._validate(e._getTagDisplayValue(t))}));if(t=(t=t.filter((function(t){return e._validate(e._getTagDisplayValue(t))}))).filter((function(t){var n=e._getTagDisplayValue(t);return"function"===typeof n.trim?n.trim().length>=0:n})),o>=0){var p=Math.max(o-l.length,0);t=t.slice(0,p)}if(a&&d.length>0&&a(d),t.length>0){for(var s=l.concat(t),h=[],m=0;m<t.length;m++)h.push(l.length+m);return r(s,t,h),this._clearInput(),!0}return d.length>0||this._clearInput(),!1}},{key:"_validate",value:function(t){var e=this.props,n=e.validate,r=e.validationRegex;return n(t)&&r.test(t)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(t,e,n){return!!t||"Enter"===n&&(this.props.preventSubmit||!this.props.preventSubmit&&!e)}},{key:"focus",value:function(){this.input&&"function"===typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"===typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var t=this.props.preventSubmit,e=this._tag();return(""!==e||!t)&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(t){return this._addTags([t])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(t){var e=this,n=this.props,r=n.addOnPaste,a=n.pasteSplit;if(r){t.preventDefault();var i=a(g(t)).map((function(t){return e._makeTag(t)}));this._addTags(i)}}},{key:"handleKeyDown",value:function(t){if(!t.defaultPrevented){var e=this.props,n=e.value,r=e.removeKeys,a=e.addKeys,i=""===this._tag(),o=t.keyCode,l=t.key,d=-1!==a.indexOf(o)||-1!==a.indexOf(l),p=-1!==r.indexOf(o)||-1!==r.indexOf(l);if(d){var s=this.accept();this._shouldPreventDefaultEventOnAdd(s,i,l)&&t.preventDefault()}p&&n.length>0&&i&&(t.preventDefault(),this._removeTag(n.length-1))}}},{key:"handleClick",value:function(t){var e=t.target,n=t.target&&t.target.parentElement;e!==this.div&&n!==this.div||this.focus()}},{key:"handleChange",value:function(t){var e=this.props.onChangeInput,n=this.props.inputProps.onChange,r=t.target.value;n&&n(t),this.hasControlledInput()?e(r):this.setState({tag:r})}},{key:"handleOnFocus",value:function(t){var e=this.props.inputProps.onFocus;e&&e(t),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(t){var e=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=t&&(e&&e(t),this.props.addOnBlur&&t.target.value)){var n=this._makeTag(t.target.value);this._addTags([n])}}},{key:"handleRemove",value:function(t){this._removeTag(t)}},{key:"inputProps",value:function(){var t=this.props.inputProps,e=(t.onChange,t.onFocus,t.onBlur,m(t,["onChange","onFocus","onBlur"])),n=h({},b,e);return this.props.disabled&&(n.disabled=!0),n}},{key:"inputValue",value:function(t){return t.currentValue||t.inputValue||""}},{key:"hasControlledInput",value:function(){var t=this.props,e=t.inputValue;return"function"===typeof t.onChangeInput&&"string"===typeof e}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(t){this.hasControlledInput()||this.inputValue(this.props)&&this.inputValue(t)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var t=this,e=this.props,n=e.value,r=e.tagProps,i=e.renderLayout,o=e.renderTag,l=e.renderInput,d=e.className,p=e.focusedClassName,s=e.disabled,m=this.state.isFocused,u=n.map((function(e,n){return o(h({key:n,tag:e,onRemove:t.handleRemove.bind(t),disabled:s,getTagDisplayValue:t._getTagDisplayValue.bind(t)},r))})),g=l(h({ref:function(e){t.input=e},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return a.default.createElement("div",{ref:function(e){t.div=e},onClick:this.handleClick.bind(this),className:d+(m?" "+p:"")},i(u,g))}}]),e}(a.default.Component);v.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:x,renderTag:c,renderLayout:f,pasteSplit:y,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},e.default=v,t.exports=e.default},void 0===(i="function"===typeof r?r.apply(e,a):r)||(t.exports=i)}}]);