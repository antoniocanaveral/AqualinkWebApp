const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UserCard-De_yd5lS.js","assets/index-BJIB_XH5.js","assets/index-CSSobkF6.css","assets/CoverSection-nb60QBVR.js","assets/UserBio-UnoZXkxr.js","assets/index-CXYGyrL1.js","assets/Overview-pkAFAPqS.js","assets/Timeline-CUYvHofH.js","assets/Activity-zH7nr9ct.js"])))=>i.map(i=>d[i]);
import{s as a,j as i,P as c,M as g,e as m,f as p,r as n,X as o,Y as e,N as d,R as h,a as s,_ as r}from"./index-BJIB_XH5.js";const j=a.div`
    .ant-card .ant-card-body{
        padding: 25px 0 25px 0 !important;
    }
    
    .user-info{
        margin-bottom: 22px;
        padding: 0 25px 22px 25px;
        border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        &:last-child{
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .user-info__title{
            font-size: 12px;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
            text-transform: uppercase;
            margin-bottom: 16px;
        }
        p{
            font-size: 15px;
            line-height: 1.667;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            &:last-child{
                margin-bottom:0;
            }
        }
        .user-info__contact{
            li{
                display: flex;
                align-items: center;
                &:not(:last-child){
                    margin-bottom: 14px;
                }
                svg,
                i,
                img{
                    width: 16px;
                    height: 16px;
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 12px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                }
                span{
                    font-size: 14px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                }
            }
        }

        .user-info__skills{
            margin: -3px;
            .btn-outlined{
                margin: 3px !important;
                font-size: 11px;
                height: 25px;
                padding: 0px 8.75px;
                text-transform: uppercase;
                border-radius: 5px;
                border-color: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
                margin: ${({theme:t})=>t.rtl?"0 0 10px 10px":"0 10px 10px 0"};
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]} !important;
            }
        }
        .card__social{
            a{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                box-shadow: 0 5px 15px ${({theme:t})=>t[t.mainContent]["light-text"]}20;
                &:not(:last-child){
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
                }
                &.facebook{
                    span{
                        color: #3B5998;
                    }
                }
                &.twitter{
                    span{
                        color: #1DA1F2;
                    }
                }
                &.dribble{
                    span{
                        color: #C2185B;
                    }
                }
                &.instagram{
                    span{
                        color: #FF0300;
                    }
                }
            }
        }
    }
    
`,f=a.div`
    .cover-image{
        position: relative;
        .ant-upload-select{
            position: absolute;
            ${({theme:t})=>t.rtl?"left":"right"}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${({theme:t})=>t.rtl?"left":"right"}: auto;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            a{
                color: #fff;
                padding: 8px 17.35px;
                display: inline-flex;
                align-items: center;
                @media only screen and (max-width: 479px){
                    padding: 5px 10px;
                }
                i,
                svg,
                img
                {
                    width: 16px;
                    height: 16px;
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 8px;
                }
            }
        }
        .ant-upload-list {
            display: none;
        }
    }
    .coverWrapper{
        position: relative;
        z-index: 1;
        margin-bottom: 25px;
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border-radius: 10px 10px;
        nav{
            padding: 0 25px;
            ul{
                margin: 0;
                @media only screen and (max-width: 375px){
                    text-align: center;
                    padding: 10px 0;
                }
                li{
                    display: inline-block;
                    @media only screen and (max-width: 375px){
                        display: block;
                    }
                    &:not(:last-child){
                        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 22px;
                        @media only screen and (max-width: 375px){
                            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
                        }
                    }
                    a{
                        position: relative;
                        display: block;
                        padding: 20px 5px;
                        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                        @media only screen and (max-width: 375px){
                            padding: 10px 5px;
                        }
                        &:after{
                            position: absolute;
                            ${({theme:t})=>t.rtl?"right":"left"}: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1.5px;
                            content: '';
                            opacity: 0;
                            visibility: hidden;
                            background-color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                            @media only screen and (max-width: 375px){
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
                    }
                }
            }
        }

    }
    .setting-card-title{
        @media only screen and (max-width: 479px){
            text-align: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 500;
        }
        span{
            font-size: 13px;
            font-weight: 400;
            margin: 0;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
        }
    }
`,k=a.div`
    .ant-card-head{
        .btn-seeAll{
            font-size: 13px;
            font-weight: 500;
            color: ${({theme:t})=>t["primary-color"]};
        }
    }
    .ant-card .ant-card-body{
        padding: 0 0 25px !important;
        ul{
            margin: 0;
            padding: 0;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 25px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 15px 50px #9299B820;
                }

                div{
                    display: flex;
                    img{
                        width: 46px;
                        height: 46px;
                        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
                        border-radius: 50%;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                        span{
                            display: block;
                        }
                    }
                }
            }
            .btn-loadMore{
                display: inline-block;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 500;
                padding: 0 25px;
            }
        }
    }
    .ff-widget{
        li{
            @media only screen and (max-width: 1599px){
                flex-flow: column;
                padding: 20px !important;
                align-items: flex-start !important;
            }
            .ff-info{
                @media only screen and (max-width: 1299px){
                    flex-flow: column;
                }
                @media only screen and (max-width: 767px){
                    flex-flow: row;
                }
                img{
                    @media only screen and (max-width: 1299px){
                        margin-right: 0 !important;
                        margin-bottom: 5px;
                    }
                }
                p{
                    font-size: 14px;
                    font-weight: 600;
                    color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                    @media only screen and (max-width: 1299px){
                        margin-top: 12px;
                    }
                    @media only screen and (max-width: 767px){
                        margin-top: 0;
                        margin-bottom: 4px;
                    }
                    span{
                        margin-top: 3px;
                        font-weight: 400;
                        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                    }
                }
            }
            .btn-ff{
                font-size: 12px;
                font-weight: 500;
                padding: 0 12.88px;
                @media only screen and (max-width: 1599px){
                    margin-top: 15px;
                }
                svg,
                i,
                img{
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
                }
            }
            button{
                span{
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .widget-photo-list,
    .widget-video-list{
        padding: 20px 25px 0;
        .ant-row{
            margin: -4px 0;
            .ant-col{
                margin: 4px 0;
            }
        }
        img{
            max-width: 103px;
            border-radius: 6px;
            @media only screen and (max-width: 1599px){
                max-width: 100%;
            }
        }
    }

    .widget-video-list{
        .video{
            display: inline-block;
            position: relative;
            z-index: 4;
            &:after{
                position: absolute;
                ${({theme:t})=>t.rtl?"right":"left"}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                content: '';
                border-radius: 6px;
                background-color: ${({theme:t})=>t[t.mainContent]["dark-text"]}20;
            }
            span{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 5;
                background-color: ${({theme:t})=>t[t.mainContent]["dark-text"]}60;
                svg,
                img,
                i{
                    width: 14px;
                    color: ${({theme:t})=>t[t.mainContent]["white-text"]}
                }
            }
        }
    }
`,C=a.div`
    .ant-card-body{
        padding: 25px 0 !important;
    }
    .activity-list{
        margin: 0;
        .activity-list__single{
            padding: 12px 25px;
            display: flex;
            align-items: center;
            .activity-icon{
                width: 31px;
                height: 31px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #00000015;
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
                svg{
                    width: 14px;
                    height: 14px;
                }
                &.primary{
                    background-color: ${({theme:t})=>t["primary-color"]}15;
                    color: ${({theme:t})=>t["primary-color"]};
                }
                &.secondary{
                    background-color: ${({theme:t})=>t["secondary-color"]}15;
                    color: ${({theme:t})=>t["secondary-color"]};
                }
                &.success{
                    background-color: ${({theme:t})=>t["success-color"]}15;
                    color: ${({theme:t})=>t["success-color"]};
                }
                &.info{
                    background-color: ${({theme:t})=>t["info-color"]}15;
                    color: ${({theme:t})=>t["info-color"]};
                }
                &.danger{
                    background-color: ${({theme:t})=>t["danger-color"]}15;
                    color: ${({theme:t})=>t["danger-color"]};
                }
                &.warning{
                    background-color: ${({theme:t})=>t["warning-color"]}15;
                    color: ${({theme:t})=>t["warning-color"]};
                }
            }
            .more{
                visibility: hidden;
            }
            &:hover{
                box-shadow: 0 15px 50px #88888820;
                .more{                        
                    visibility: visible;
                }
            }
            .activity-content{
                flex: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .activity-info{
                display: flex;
                align-items: center;
                img{
                    max-width: 40px;
                    border-radius: 50%;
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
                }
                p{
                    margin-bottom: 0;
                    font-size: 14px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    .inline-text{
                        font-weight: 500;
                        display: inline;
                    }
                    .hour{
                        display: block;
                        margin-top: 3px;
                        color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                    }
                }
            }
            .activity-more{
                svg,
                i{
                    color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                }
            }
        }
                
    }
`,z=a.div`
    .ant-card-body{
        padding: 0 !important;
        .ant-table{
            border-radius: ${({theme:t})=>t.rtl?"10px 10px 0 0":"0 0 10px 10px"};
            margin-top: 1px;
        }
    }
    .ant-table{
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
    }
    table{
        margin-bottom: 25px;
        .ant-table-thead > tr > th{
            background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
            border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
            &:first-child{
                padding-${({theme:t})=>t.rtl?"right":"left"}: 25px;
            }
            &:last-child{
                text-align: ${({theme:t})=>t.rtl?"left":"right"};
                padding-${({theme:t})=>t.rtl?"left":"right"}: 25px;
            }
            &.p_name{
                min-width: 420px;
            }
            &.p_price{
                min-width: 100px;
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
                    }
                }
                td{
                    padding: 14px 16px;
                    font-size: 14px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                    &:first-child{
                        padding-${({theme:t})=>t.rtl?"right":"left"}: 25px;
                    }
                    &:last-child{
                        padding-${({theme:t})=>t.rtl?"left":"right"}: 25px;
                        text-align: ${({theme:t})=>t.rtl?"left":"right"};
                    }
                }
            }
        }
    }
`,b=n.lazy(()=>r(()=>import("./UserCard-De_yd5lS.js"),__vite__mapDeps([0,1,2]))),u=n.lazy(()=>r(()=>import("./CoverSection-nb60QBVR.js"),__vite__mapDeps([3,1,2]))),y=n.lazy(()=>r(()=>import("./UserBio-UnoZXkxr.js"),__vite__mapDeps([4,1,2,5]))),v=n.lazy(()=>r(()=>import("./Overview-pkAFAPqS.js"),__vite__mapDeps([6,1,2]))),w=n.lazy(()=>r(()=>import("./Timeline-CUYvHofH.js"),__vite__mapDeps([7,1,2]))),$=n.lazy(()=>r(()=>import("./Activity-zH7nr9ct.js"),__vite__mapDeps([8,1,2])));function x(){const t=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}],l=".";return i.jsxs(i.Fragment,{children:[i.jsx(c,{title:"My Profile",routes:t}),i.jsx(g,{children:i.jsxs(m,{gutter:25,children:[i.jsxs(p,{xxl:6,lg:8,md:10,xs:24,children:[i.jsx(n.Suspense,{fallback:i.jsx(o,{headless:!0,children:i.jsx(e,{avatar:!0,active:!0,paragraph:{rows:3}})}),children:i.jsx(b,{user:{name:"Duran Clyton",designation:"UI/UX Designer",img:"static/img/users/1.png"}})}),i.jsx(n.Suspense,{fallback:i.jsx(o,{headless:!0,children:i.jsx(e,{active:!0,paragraph:{rows:10}})}),children:i.jsx(y,{})})]}),i.jsx(p,{xxl:18,lg:16,md:14,xs:24,children:i.jsxs(f,{children:[i.jsx(n.Suspense,{fallback:i.jsx(o,{headless:!0,children:i.jsx(e,{active:!0})}),children:i.jsxs("div",{className:"coverWrapper",children:[i.jsx(u,{}),i.jsx("nav",{className:"profileTab-menu",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx(d,{to:`${l}/overview`,children:"Overview"})}),i.jsx("li",{children:i.jsx(d,{to:`${l}/timeline`,children:"Timeline"})}),i.jsx("li",{children:i.jsx(d,{to:`${l}/activity`,children:"Activity"})})]})})]})}),i.jsx(n.Suspense,{fallback:i.jsx(o,{headless:!0,children:i.jsx(e,{active:!0,paragraph:{rows:10}})}),children:i.jsxs(h,{children:[i.jsx(s,{path:"overview",element:i.jsx(v,{})}),i.jsx(s,{path:"timeline",element:i.jsx(w,{})}),i.jsx(s,{path:"activity",element:i.jsx($,{})})]})})]})})]})})]})}x.propTypes={};const P=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{C as A,P as I,z as P,k as R,j as U};
