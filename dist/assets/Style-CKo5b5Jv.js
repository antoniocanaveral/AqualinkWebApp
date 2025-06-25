import{s as i}from"./index-zxEALkft.js";const t=i.div`
  .cashflow-wrap{
    .ant-card{
        min-height: 500px;
        @media only screen and (max-width: 1599px){
          min-height: 440px;
        }
        @media only screen and (max-width: 1450px){
          min-height: 410px;
        }
    }
  }
  .youtube-subscriber-wrap{
      .ant-card{
          min-height: 470px;
      }
  }
  .ninjadash-sales-inner{
    padding-bottom: 48px;
  }
`,a=i.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,r=i.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,e=i.div`
    background: ${({theme:o})=>o[o.mainContent]["white-background"]};
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${({theme:o})=>o.topMenu?"min-height: 595px":"min-height: auto"};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${({theme:o})=>o["secondary-color"]}, ${({theme:o})=>o["warning-color"]});
  ${({theme:o})=>o.rtl?"right":"left"}:0;
        top: 0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .ant-progress-bg{
            height: 6px !important;
        }
        .overview-box-single{
            h1{
                margin-bottom: 0;
            }
            p{
                color: ${({theme:o})=>o["light-color"]};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${({theme:o})=>o.rtl?"margin-right":"margin-left"}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${({theme:o})=>o["success-color"]};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({theme:o})=>o["light-gray-color"]};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${({theme:o})=>o["danger-color"]};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({theme:o})=>o["light-gray-color"]};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            font-size: 12px;
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
            svg,
            img,
            i{
                ${({theme:o})=>o.rtl?"margin-right":"margin-left"}: 8px;
            }
        }
    }
`;export{t as C,a as M,e as O,r as S};
