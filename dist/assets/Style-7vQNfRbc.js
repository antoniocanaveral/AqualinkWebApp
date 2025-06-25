import{s as a}from"./index-zxEALkft.js";const n=a.div`
  @media only screen and (max-width: 1599px){
    min-height: 270px;
  }
  .ninjadash-info-element {
    img {
      max-width: 25px !important;
    }
  }
  .ant-card{
    @media only screen and (max-width: 1599px){
      min-height: 388px;
    }
    @media only screen and (max-width: 1199px){
      min-height: 100%;
    }
  }
  .ant-table-content {
    tr {
      &:first-child {
        td {
          padding-top: 0 !important;
        }
      }
      .ant-table-cell {
        padding: 7px 15px;
        @media only screen and (max-width: 1699px){
          padding: 7px 10px;
        }
      }
      td.ant-table-cell {
        &:last-child {
          ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 0 !important;
        }
      }
    }
    .ant-progress-inner:not(.ant-progress-circle-gradient) {
      .ant-progress-circle-path{
        stroke: ${({theme:t})=>t["primary-color"]};
      }
    }
    .ant-progress-circle-trail{
      stroke: ${({theme:t})=>t["primary-color"]}15;
    }
  }
`;a.span``;const o=a.div`
  min-height: 272px;
  @media only screen and (max-width: 1599px){
    min-height: 302px;
  }
  @media only screen and (max-width: 1199px){
    min-height: 272px;
  }
  .ant-list-split {
    .ant-list-item,
    .ant-list-item-meta {
      border-bottom: 0 none;
      padding: 0;
    }
    .ant-list-item-meta {
      .ant-list-item-meta-avatar{
        img{
          max-width: 34px;
        }
      }
      .ant-list-item-meta-title {
        font-size: 15px;
        font-weight: 500;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        line-height: 1.25;
        a{
          color: ${({theme:t})=>t[t.mainContent]["light-gray-text"]};
        }
      }
      .ant-list-item-meta-description {
        font-size: 12px;
        line-height: 1;
        ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 12px;
        position: relative;
        &:before {
          position: absolute;
          ${({theme:t})=>t.rtl?"right":"left"}: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform: translateY(-50%);
          content: '';
          background-color: ${({theme:t})=>t["success-color"]};
        }
      }
    }
    .ant-list-items{
      padding-top: 4px;
    }
    .ant-list-item-meta-avatar {
      img {
        border-radius: 5px;
      }
    }
  }
  .ant-list-item {
    &:not(:last-child) {
      margin-bottom: 20px !important;
    }
    .ant-btn {
      font-size: 13px;
      font-weight: 600;
      border-radius: 3px;
      padding: 0 12px;
      color: ${({theme:t})=>t["primary-color"]};
      background-color: ${({theme:t})=>t["primary-color"]}10;
      &:hover {
        color: #fff;
        background-color: ${({theme:t})=>t["primary-color"]};
      }
    }
  }
`,r=a.div`
  .ant-card{
    @media only screen and (max-width: 1599px){
        min-height: 358px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
  }
`,e=a.div`
    ${({theme:t})=>(t.topMenu,"min-height: 305px")};
    
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table{
      background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
        .ninjadash-social-channel{
          font-size: 15px;
          font-weight: 500;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        .ninjadash-traffic{
          display: block;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          min-width: 120px;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
        .ant-progress{
          min-width: 140px;
        }
    }
    
    .table-bordered {
      table{
        thead{
            tr{
                th{
                    background: #fff;
                    color: ${({theme:t})=>t["dark-color"]};
                    padding: 16px 25px;
                    text-align: ${({theme:t})=>t.rtl?"left":"right"};
                    &:first-child, &:nth-child(5){
                        text-align: ${({theme:t})=>t.rtl?"right":"left"};
                    }
                }
            }
        }
        tbody{
            tr{
              &.ant-table-row{
                &:hover{
                  td{
                      background-color: transparent !important;
                  }
                }
              }
              &:first-child{
                td{
                  padding-top: 0;
                }
              }
              td{
                  padding: 10px 15px;
                  border: 0 none;
                  color: ${({theme:t})=>t["gray-color"]};
                  text-align: ${({theme:t})=>t.rtl?"left":"right"};
                  &:first-child, 
                  &:nth-child(5){
                      text-align: ${({theme:t})=>t.rtl?"right":"left"};
                  }
              }
            }
        }
        tr{
          th,
          td{
            &:first-child{
              ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0;
            }
            &:last-child{
              ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 0;
            }
          }
        }
      }
    }
`,l=a.div`
    .ninjadash-social-company{
      .ninjadash-social-company__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 12px;
        &.ninjadash-social-company__icon-facebook{
          background-color: #F2EAFB;
          i,svg{
            color: ${({theme:t})=>t["primary-color"]};
          }
        }
        &.ninjadash-social-company__icon-twitter{
          background-color: #EEEBFF;
          i,svg{
            color: ${({theme:t})=>t["secondary-color"]};
          }
        }
        &.ninjadash-social-company__icon-instagram{
          background-color: #E5F6FF;
          i,svg{
            color: ${({theme:t})=>t["info-color"]};
          }
        }
        &.ninjadash-social-company__icon-youtube{
          background-color: #FFE6E6;
          i,svg{
            color: ${({theme:t})=>t["danger-color"]};
          }
        }
      }
      .ninjadash-social-company__text{
        font-weight: 500;
      }
      tr{
        td{
          color: #090E30;
        }
      }
    }
`,d=a.div`
  min-height: 200px;
  .ant-table-content{
    .ant-table-tbody {
      >tr:first-child {
        >td.ant-table-cell{
          padding-top: 8px !important;
        }
      }
    }
  }
    .ant-table-tbody{
      tr{
        td{
          text-align: right;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
          &:first-child,
          &:last-child{
            text-align: left;
          }
        }
      }
    }
`;export{n as M,d as R,r as T,o as a,l as b,e as c};
