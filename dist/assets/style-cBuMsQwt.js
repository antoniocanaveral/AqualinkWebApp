import{s as i}from"./index-BJIB_XH5.js";const n=i.div`
  .active{
    color: #FA8B0C;
  }
`,o=i.div`
  .ant-page-header-heading-title{
    margin-right: 0;
    padding-right: 0;
    &:after{
      display: none;
    }
  }
  .ant-select .ant-select-selection-search-input{
    border-radius: 6px;
  }
`,r=i.div`
  position: relative;
  button{
    position: absolute;
    background: transparent !important;
    top: 0;
    right: 0;
    padding: 0;
    svg {      
      color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
      width: 18px;
      height: 18px;
    }
  }
  .contact-card{
    figure{
      text-align: center;
      margin: 0;
      img{
        border-radius: 50%;
      }
      figcaption{
        margin-top: 20px;
        h3{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0;
        }
        span{
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }
    }
    .user-info{
      margin-top: 20px;
      border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      padding-top: 25px;
      ul{
        li{
          display: flex;
          align-items: center;
          color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
          &:not(:last-child){
            margin-bottom: 14px;
          }
          svg{
            width: 16px;
            height: 16px;
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 12px;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
          }
        }
      }
    }
  }
`;export{n as A,o as C,r as a};
