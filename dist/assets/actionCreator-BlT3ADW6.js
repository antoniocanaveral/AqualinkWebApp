import{s as r,bW as p,bX as e}from"./index-B54C9UsK.js";const C=r.div`
  .create-action{
    padding: 0 25px;
    margin: 25px 0 18px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .btn-add{
      width: 100%;
      height: 44px;
      text-align: center;
      border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      background: ${({theme:t})=>t["bg-color-light"]};
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      svg,
      img,
      i{
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 4px;
      }
    }
  }
`,k=r.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 5px;
  }
`,v=r.div`
  height: 495px;
  overflow-y: auto;
  overflow-x: hidden;
  ul{
    overflow-x: hidden;
  }
  .chat-link-signle{
    position: relative;
    background: ${({theme:t})=>t[t.mainContent]["white-background"]};
    border-radius: 4px;
    width: 100%;
    margin: 0;
    &:before{
      content: '';
      position: absolute;
      width: calc(100% + 20px);
      height: 100%;
      background: ${({theme:t})=>t[t.mainContent]["white-background"]};
      right: -10px;
      left: -10px;
      box-shadow: 0 15px 50px ${({theme:t})=>t[t.mainContent]["light-text"]}20;
      border-radius: 4px;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease;
      z-index: 1;
    }
    &:hover:before{
      visibility: visible;
      opacity: 1;
    }
    a{
      display: flex;
      padding: 20px 24px;
      position: relative;
      z-index: 1;
    }
    .author-figure{
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
      flex: .1;
      img{
        max-width: 46px;
        border-radius: 50%;
      }
    }
    .author-info{
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
      flex: .76;
      .author-name{
        font-weight: 600;
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      }
      .author-chatText{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
    }
    .author-chatMeta{
      flex: .16;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @media (max-width: 991px){
        align-items: center;
        justify-content: center;
      }
      span{
        float: ${({theme:t})=>t.rtl?"left":"right"};
        font-size: 12px;
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
      .ant-badge{
        margin-top: 8px;
        span{
          color: #fff;
        }
      }
    }
  }
`,z=r.span`
  display: block;
`,_=r.div`
  &.group-chat{
    .chatbox-reply-form{
      input{
        background: ${({theme:t})=>t[t.mainContent]["general-background"]};
        box-shadow: 0 5px 30px ${({theme:t})=>t[t.mainContent]["extra-light-text"]}15;
      }
    }
  }
  &.ninjadash-chat-home{
    .ant-card-head {
      box-shadow: 0 0;
      padding: 0 25px !important;
      .ant-card-head-title{
        padding-bottom: 8px;
        @media only screen and (max-width: 575px){
          text-align: center;
        }
        h1{
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
      }
    }
    >.ant-card{
      .ant-card-body{
        padding-bottom: 30px !important;
      }
    }
    
    .atbd-chatbox{
      height: 506px;
    }
    .chatbox-reply-form {
      .chatbox-reply-input {
        input{
          height: 60px;
        }
      }
      .chatbox-reply-action{
        align-items: center;
        position: relative;
        button{
          min-width: 45px;
          height: 45px;
          box-shadow: 0 8px 13px rgba(88,84,255,.20);
          background-color: ${({theme:t})=>t["primary-color"]};
        }
      }
    }
  }
  >.ant-card{
    .ant-card-body{
      padding: 25px 0 !important;
    }
  }
  .ant-card-head{
    padding: 0 30px !important;
    box-shadow: 0 10px 20px ${({theme:t})=>t[t.mainContent]["extra-light-text"]}15;
    border: 0 none;
    .ant-card-extra{
      .ant-dropdown-trigger{
        ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 0 !important;
      }
    }
    .ant-card-head-title{
      h1{
        font-weight: 500;
        margin-bottom: 6px;
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      }
      p{
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 0;
        color: color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
    }
  }

  .group-chat-header{
    padding: 8px 0;
    align-items: center;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 479px){
      flex-flow: column;
    }
    h1{
      @media only screen and (max-width: 479px){
        margin-bottom: 15px !important;
      }
    }
    .members{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        :not(:last-child){
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 4px;
        }
      }
      img{
        max-width: 30px;
      }
      .show-more,
      .add-more{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          margin: 0;
        }
      }
      .show-more{
        background-color: ${({theme:t})=>t["primary-color"]};
        span{
          font-size: 10px;
          font-weight: 500;
          color: #fff;
        }
      }
      .add-more{
        border: 1px dashed ${({theme:t})=>t[t.mainContent]["border-color-deep"]};
        span{
          line-height: .4;
        }
      }
    }
  }

  .atbd-chatbox{
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
    .custom-scrollbar{
      .ninjadash-track-vertical{
        position: absolute;
        width: 6px;
        transition: opacity 200ms ease 0s;
        opacity: 0;
        ${({theme:t})=>t.rtl?"left":"right"}: 6px;
        bottom: 2px;
        top: 2px;
        border-radius: 3px;
        >div{
          background-color: ${({theme:t})=>t[t.mainContent]["scroll-bg"]} !important;
        }
      }
    }
    .time-connector{
      position: relative;
      z-index: 10;
      margin: -14px 0 15px;
      &:after{
        position: absolute;
        width: 100%;
        height: 1px;
        ${({theme:t})=>t.rtl?"right":"left"}: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        content: '';
        z-index: -1;
      }
      span{
        text-transform: capitalize;
        font-size: 13px;
        padding: 0 24px;
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
        color: ${({theme:t})=>t[t.mainContent]["light-text"]};
      }
    }
    .message-box{
      font-size: 16px;
      line-height: 1.7;
    }
    .atbd-chatbox__single{
      padding: 0 25px;
      &:not(:last-child){
        margin-bottom: 30px;
      }
      &:last-child{
        padding-bottom: 15px;
      }
      .left{
        display: flex;
        align-items: flex-start;
        img{
          max-width: 46px;
          border-radius: 50%;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
        }
        .atbd-chatbox__content{
          margin-top: -4px;
        }
        .message-box{
          color: ${({theme:t})=>t[t.mainContent]["chat-reply-text"]};
          background: ${({theme:t})=>t[t.mainContent]["chat-reply-bg"]};
        }
      }
      .right{
        float: ${({theme:t})=>t.rtl?"left":"right"};
        .atbd-chatbox__actions{
          margin: ${({theme:t})=>t.rtl?"0 0 0 15px":"0 15px 0 0"};
        }
        .atbd-chatbox__name{
          text-align: ${({theme:t})=>t.rtl?"left":"right"};
        }
        .message-box{
          
          ${({theme:t})=>t.rtl?"border-radius: 15px 15px 15px 0":"border-radius: 15px 15px 0 15px;"};
          background: ${({theme:t})=>t[t.mainContent]["chat-bg"]};
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
      }
    }
    .atbd-chatbox__name{
      font-size: 14px;
      font-weight: 600;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      span{
        font-size: 12px;
        font-weight: 400;
        margin-left: 15px;
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
    }
    .atbd-chatbox__contentInner{
      align-items: center;
      .message-box + .message-box{
        margin-top: 5px;
      }
    }
    .message-seen{
      margin-top: 10px;
      &.text-right{
        text-align: ${({theme:t})=>t.rtl?"left":"right"};
      }
      img{
        max-width: 20px;
        border-radius: 50%;
      }
      .message-seen__time{
        font-size: 12px;
        font-weight: 400;
        color: ${({theme:t})=>t["light-color"]};
      }
    }
    .group-seen{
      margin-top: 5px;
      text-align: ${({theme:t})=>t.rtl?"left":"right"};
      img{
        max-width: 20px;
        &:not(:last-child){
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 3px;
        }
      }
    }
    .atbd-chatbox__actions{
      display: flex;
      align-items: center;
      ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 15px;
      @media only screen and (max-width: 767px){
        flex-flow: column;
      }
      .ant-dropdown-trigger{
        line-height: 1;
        color: ${({theme:t})=>t["border-color-deep"]};
        .anticon-smile{
          color: ${({theme:t})=>t["extra-light-color"]};
        }
        &{
          + .ant-dropdown-trigger{
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 12px;
            @media only screen and (max-width: 767px){
              margin: 10px 0 0;
            }
          }
        }
      }
    }
  }
`,S=r.div`
  display: block;
  max-width: 670px;
  font-size: 15px;
  ${({theme:t})=>t.rtl?"border-radius: 15px 0 15px 15px":"border-radius: 0 15px 15px"};
  padding: 18px 20px;
  line-height: 1.67;
  color: #fff;
`,j=r.div`
  padding: 0 25px;
  .chatbox-reply-form{
    position: relative;
    margin-top: 20px;
    align-items: center;
    @media only screen and (max-width: 575px){
      flex-flow: column;
    }
    .smile-icon{
      position: absolute;
      ${({theme:t})=>t.rtl?"right":"left"}: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      z-index: 998;
      @media only screen and (max-width: 575px){
        top: 26px;
      }
      aside{
          position: absolute;
          z-index: 998;
          top: auto;
          bottom: 20%;
          .emoji-search{
            padding: 8px;
            height: auto;
            border-radius: 5px;
          }
      }
      .ant-dropdown-trigger{
        display: flex;
        align-items: center;
      }
      a{
        display: flex;
      }
      svg,
      i{
        color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
      }
    }
    &.hasFile{
      .ant-upload-list{
        background: transparent;
        &.ant-upload-list-text{
          background-color: ${({theme:t})=>t["bg-color-normal"]} !important;
          position: absolute;
          z-index: 999999;
          bottom: 70px;
          right: 0;

          
        }
      }
      
    }
    .ant-upload-list{
      display: flex;
      margin-top: 0 !important;
      &.ant-upload-list-picture-card {
        .ant-upload .ant-upload{
          height: auto
        }
      }
    }
    .chatbox-reply-input{
      width: 100%;
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 8px;
      input{
        padding: ${({theme:t})=>t.rtl?"0 70px 0 25px":"0 25px 0 70px"};
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        background: ${({theme:t})=>t[t.mainContent]["general-background"]};
        &::placeholder{
          font-size: 14px;
          color: ${({theme:t})=>t[t.mainContent]["light-text"]};
        }
        &:focus{
          border: 0 none;
          outline: none;
        }
        @media only screen and (max-width: 575px){
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
    input,
    span{
      ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 8px;
    }
    .chatbox-reply-action{
      align-items: center;
      a{
        span{
          display: block;
        }
      }
      .btn-send{
        box-shadow: 0 8px 13px #5F63F220;
      }
      .ant-upload-select,
      button{
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
          color: #fff;
        }
      }
      .ant-upload-select {
        background: ${({theme:t})=>t["bg-color-normal"]};
        .ant-upload{
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
          svg{
            margin-top: 8px;
            width: 18px;
            height: 18px;
            color: ${({theme:t})=>t["light-color"]};
          }
        }
      }
      button{
        padding: 0;
        background: ${({theme:t})=>t["primary-color"]};
      }
    }

    .ant-upload-select-picture-card{
      margin: 0;
      width: 50px;
      border-radius: 50% !important;
      border: 0 none;
      background-color: ${({theme:t})=>t["bg-color-normal"]} !important;
      svg,
      i{
        margin-top: 7px !important;
      }
    }
    .ant-upload-list{
      background: transparent;
      &.ant-upload-list-text{
        display: block;
        top: auto;
        bottom: 136px;
        background: #fff;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0 5px 20px #9299B803;
        background-color: ${({theme:t})=>t["bg-color-normal"]} !important;
        position: absolute;
        z-index: 999999;
        bottom: 70px;
        right: 0;
        
        >div{
          display: block;
        }
        .ant-upload-list-item{
          height: 24px;
          border-radius: 4px;
          background-color: ${({theme:t})=>t["bg-color-normal"]};
          button{
            width: auto;
            height: auto;
            min-width: auto;
            background-color: ${({theme:t})=>t["bg-color-normal"]};
            svg{
              color: ${({theme:t})=>t["info-color"]};
            }
          }
        }
        .ant-upload-list-item-info{
          >span{
            display: flex;
            align-items: center;
          }
          .ant-upload-list-item-name {
            font-size: 13px;
          }
          .anticon,
          .ant-upload-list-item-name {
            color: ${({theme:t})=>t["info-color"]};
          }
        }
      }
      &.ant-upload-list-picture-card{
        .ant-upload-list-picture-card-container{
          width: 60px;
          height: 50px;
        }
        .ant-upload-list-item{
          width: 60px;
          height: 50px;
          padding: 3px;
          .ant-upload-list-item-actions{
            .anticon-eye{
              display: none;
            }
            .anticon{
              margin: 0;
            }
          }
          .ant-upload-list-item-card-actions-btn{
            width: 25px;
            height: 25px;
            min-width: 25px;
          }
          .ant-upload-list-item-thumbnail{
            font-size: 11px;
          }
          .ant-upload-list-item-name{
            display: none;
          }
        }
      }
    }
  }
`,B=r.div`
  min-height: 550px;
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B803;
  
  .custom-scrollbar{
    >div{
      @media only screen and (max-width: 1800px){
        ${({theme:t})=>t.rtl?"margin-left: 0 !important":"margin-left: auto !important"};
      }
    }
    .ninjadash-track-vertical{
      position: absolute;
      width: 6px;
      transition: opacity 200ms ease 0s;
      opacity: 0;
      ${({theme:t})=>t.rtl?"left":"right"}: 6px;
      bottom: 2px;
      top: 2px;
      border-radius: 3px;
      >div{
        background: ${({theme:t})=>t[t.mainContent]["scroll-bg"]} !important;
      }
    }
  }
  @media only screen and (max-width: 991px){
    max-width: 370px;
    margin: 0 auto 40px;
  }
  @media only screen and (max-width: 575px){
    min-height: 580px;
  }
  .ant-card-body{
    padding: 28px 0 !important;
  }
  .chatbox-search{
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .ant-select-selection-search{
      width: 100% !important;
    }
    .ant-input-affix-wrapper .ant-input-suffix{
      height: auto;
      svg{
        color: ${({theme:t})=>t[t.mainContent]["light-text"]};
      }
    }
  }
  .ant-select-selector{
    height: auto !important;
  }
  .ant-select.ant-select-single .ant-select-selector .ant-select-selection-search .ant-select-selection-search-input{
    border-radius: 23px;
    background: ${({theme:t})=>t[t.mainContent]["general-background"]};
    border: 0 none;
    input{
      background: ${({theme:t})=>t[t.mainContent]["general-background"]};
      height: 46px !important;
    }
  }
  nav{
    padding: 0 25px;
    @media only screen and (max-width: 1199px){
      padding: 0 15px;
    }
    ul{
      margin: 0 0 12px 0;
      padding: 30px 0 0 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      @media (max-width: 480px){
        flex-direction: column;
      }
      li{
        padding: 0;
        a{
          position: relative;
          display: block;
          padding: 0 0 18px;
          font-weight: 400;
          color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
          &:after{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background: ${({theme:t})=>t["primary-color"]};
            @media only screen and (max-width: 1199px){
              display: none;
            }
          }
          &.active{
            font-weight: 500;
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
            &:after{
              opacity: 1;
              visibility: visible;
            }
          }
          .ant-badge{
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 6px;
          }
          @media (max-width: 480px){
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`,G=r.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({theme:t})=>t.rtl?"right":"left"}: 0;
    z-index: 998;
`,{singleChatBegin:d,singleChatSuccess:x,singleChatErr:s,singleGroupChatBegin:c,singleGroupChatSuccess:g,singleGroupChatErr:m,updateGroupChatBegin:h,updateGroupChatSuccess:b,updateGroupChatErr:u,updatePrivetChatBegin:f,updatePrivetChatSuccess:y,updatePrivetChatErr:w}=p,E=t=>async n=>{try{n(d());const a=e[0].privetChat.filter(i=>i.email===t);n(x(a))}catch(a){n(s(a))}},F=(t,n)=>async a=>{try{a(f());const i=e[0].privetChat.map(l=>{const o=l;return o.email===t&&(o.time=n.time,o.content=[...o.content,n]),o});a(y(i))}catch(i){a(w(i))}},P=t=>async n=>{try{n(c());const a=e[0].groupChat.filter(i=>i.id===t);n(g(a))}catch(a){n(m(a))}},M=(t,n)=>async a=>{try{a(h());const i=e[0].groupChat.map(l=>{const o=l;return o.id===t&&(o.time=n.time,o.content=[...o.content,n]),o});a(b(i))}catch(i){a(u(i))}};export{z as B,C,j as F,S as M,_ as S,k as U,P as a,B as b,v as c,G as d,M as e,E as f,F as u};
