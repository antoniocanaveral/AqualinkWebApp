const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Profile-z6HmrEBo.js","assets/index-B54C9UsK.js","assets/index-D3CzUhBr.css","assets/tags-CG8f0XfD.js","assets/Account-B787-tjF.js","assets/Passwoard-BzFvJmwV.js","assets/SocialProfile-DfkIutQ1.js","assets/index-dukHIMAM.js","assets/Notification-UUyDLVnI.js","assets/ProfileAuthorBox-D-bGyuWv.js","assets/CoverSection-Duj1BoWh.js"])))=>i.map(i=>d[i]);
import{s as r,j as n,P as x,M as s,e as c,f as d,r as o,X as e,Y as p,R as g,a,_ as i}from"./index-B54C9UsK.js";const w=r.div`
    .ant-card-body{
        padding: 25px 0 25px !important;
    }
    .author-info{
        padding: 0 20px 20px;
        text-align: center;
        border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        .info{
            background-color: transparent;
        }
    }
    figure{
        position: relative;
        max-width: 120px;
        margin: 0 auto 18px;
        .ant-upload-select{
            position: absolute;
            ${({theme:t})=>t.rtl?"left":"right"}: 0;
            bottom: -2px;
            height: 40px;
            width: 40px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            span{
                display: inline-flex;
                height: 32px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 32px;
                background: ${({theme:t})=>t["primary-color"]};
            } 
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    figcaption{
        .info{
            h1,
            h2,
            h3,
            h4,
            h5,
            h6{
                font-size: 18px;
                margin-bottom: 4px;
            }
            p{
                margin-bottom: 0;
                color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
            }
        }
    }

    .settings-menmulist{
        padding: 20px 20px 0px 20px;
        li{
            a{
                display: flex;
                align-items: center;
                padding: 12px 20px;
                border-radius: 6px;
                color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                i,
                svg,
                img{
                    width: 16px;
                    height: 16px;
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 13px;
                }
                &.active{
                    font-weight: 500;
                    color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                    background: ${({theme:t})=>t[t.mainContent]["primary-transparent"]};;
                }
            }
        }
    }
`,m=r.div`
    .cover-image{
        position: relative;
        margin-bottom: 25px;
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
    }
    .setting-card-title{
        @media only screen and (max-width: 575px){
            padding-bottom: 20px;
        }
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
            @media only screen and (max-width: 575px){
                margin-bottom: 4px;
            }
        }
        span{
            font-size: 13px;
            font-weight: 400;
            margin: 0;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        }
    }
`,C=r.div`
    .ant-card-body{
        padding: 30px 25px 25px 25px !important;
        @media only screen and (max-width: 767px){
            padding: 20px !important;
        }
    }
    .account-form-top{
        margin-bottom: 26px;
        padding-bottom: 30px; 
        border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    }
    .account-form{
        .ant-row{
            &:not(:last-child){
                margin-bottom: 0;
            }
        }
        p{
            margin: 2px 0 22px;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            span{
                    font-weight: 500;
                    color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
            }
        }
    }
    .account-closing{
        .ant-row{
            display: flex;
            align-items: center;
            width: 100%;
        }
        .account-closing__title{
            font-size: 16px;
        }
        p{
            margin-bottom: 0;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
        button{
            height: 38px;
            padding: 0 16.75px;
            @media only screen and (max-width: 991px){
                margin-top: 14px;
            }
            @media only screen and (max-width: 767px){
                margin-top: 0px;
            }
            @media only screen and (max-width: 575px){
                margin-top: 14px;
            }
        }
    }
    .account-action{
        button{
            height: 44px;
        }
        .ant-btn-light{
            font-weight: 400;
            background: ${({theme:t})=>t["bg-color-light"]};
            border: 1px solid ${({theme:t})=>t["border-color-light"]};
        }
    }
`,v=r.div`
    .ant-card-body{
        min-height: 565px;
        @media only screen and (max-width: 575px){
            min-height: 365px;
        }
    }
    form{
        .ant-form-item-control-input-content{
            .ant-input-password{
                padding: ${({theme:t})=>(t.rtl,"0 20px 0 20px")} !important;
            }
        }
        .input-message{
            font-size: 13px;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            margin: -22px 0 0;
        }
        .ant-form-item-control-input-content{
            .anticon-eye-invisible{
                svg,
                i{
                    color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                }
            }
        }
        .setting-form-actions{
            button{
                border-radius: 6px;
            }
            .ant-btn-light{
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            }
        }
    }
`,k=r.div`
    .ant-form-item-control-input{
        min-height: 44px;
        .ant-form-item-control-input-content{
            input{
            padding: ${({theme:t})=>t.rtl?"12px 50px 12px 20px":"12px 20px 12px 50px"} !important;
            }
            input::placeholder{
                font-size: 13px;
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            }
        }
    }
    .ant-form-item{
        button{
            padding: 0px 23px;
        }
        label{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        .ant-input-affix-wrapper{
            position: relative;
            input{
                ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 50px;
            }
            span.fa,
            i{
                font-size: 18px;
                color: #fff;
            }
            &.facebook{
                .ant-input-prefix{
                    background: #3B5998;
                    border-radius: 4px;
                }
            }
            &.twitter{
                .ant-input-prefix{
                    background: #1DA1F2;
                    border-radius: 4px;
                }
            }
            &.dribbble{
                .ant-input-prefix{
                    background: #DD3E7C;
                    border-radius: 4px;
                }
            }
            &.instagram{
                .ant-input-prefix{
                    background: #FF0300;
                    border-radius: 4px;
                }
            }
            &.github{
                .ant-input-prefix{
                    background: #23282D;
                    border-radius: 4px;
                }
            }
            &.medium{
                .ant-input-prefix{
                    background: #292929;
                    border-radius: 4px;
                }
            }
            .ant-input-prefix{
                position: absolute;
                height: 100%;
                width: 44px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${({theme:t})=>t.rtl?"right":"left"}: 0;
                top: 50%;
                transform: translateY(-50%);
                background: #ddd;
                z-index: 1;
                i,
                svg{
                    color: #fff;
                }
            }
        }
    }

    .social-form-actions{
        margin-top: 25px;
    }
`,P=r.div`
    .notification-box-single{
        .ant-card{
            border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
        >.ant-card{
            .ant-card-body{
                background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
            }
        }
        .notification-header{
            margin-top: -8px;
            .notification-header__text{
                font-size: 15px;
                font-weight: 500;
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            }
            .btn-toggle{
                font-size: 13px;
                color: ${({theme:t})=>t["info-color"]};
            }
        }
        .notification-body{
            box-shadow: 0 10px 30px ${({theme:t})=>t[t.mainContent]["light-text"]}10;
            .ant-card{
                margin-bottom: 0 !important;
            }
            .ant-card-body{
                padding: 5px 0 !important;
                background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                border-radius: 10px;
            }
            nav{
                li{
                    padding: 15px 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px 20px !important;
                    }
                    &:not(:last-child){
                        border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                    }
                }
            }
        }
        .notification-list-single{
            .notification-list-single__title{
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 2px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            }
            p{
                margin-bottom: 3px;
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            }
        }
    }
    .notification-actions{
        margin: 26px 0 11px;
        button{
            border-radius: 6px;
            height: 44px;
            margin-bottom: 15px;
            &.ant-btn-extra-light{
                border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            }
        }
    }
`,l=o.lazy(()=>i(()=>import("./Profile-z6HmrEBo.js"),__vite__mapDeps([0,1,2,3]))),f=o.lazy(()=>i(()=>import("./Account-B787-tjF.js"),__vite__mapDeps([4,1,2]))),u=o.lazy(()=>i(()=>import("./Passwoard-BzFvJmwV.js"),__vite__mapDeps([5,1,2]))),b=o.lazy(()=>i(()=>import("./SocialProfile-DfkIutQ1.js"),__vite__mapDeps([6,1,2,7]))),h=o.lazy(()=>i(()=>import("./Notification-UUyDLVnI.js"),__vite__mapDeps([8,1,2]))),y=o.lazy(()=>i(()=>import("./ProfileAuthorBox-D-bGyuWv.js"),__vite__mapDeps([9,1,2]))),_=o.lazy(()=>i(()=>import("./CoverSection-Duj1BoWh.js"),__vite__mapDeps([10,1,2])));function $(){const t=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}];return n.jsxs(n.Fragment,{children:[n.jsx(x,{title:"My Profile",routes:t}),n.jsx(s,{children:n.jsxs(c,{gutter:25,children:[n.jsx(d,{xxl:6,lg:8,md:10,xs:24,children:n.jsx(o.Suspense,{fallback:n.jsx(e,{headless:!0,children:n.jsx(p,{avatar:!0})}),children:n.jsx(y,{})})}),n.jsx(d,{xxl:18,lg:16,md:14,xs:24,children:n.jsxs(m,{children:[n.jsx(o.Suspense,{fallback:n.jsx(e,{headless:!0,children:n.jsx(p,{avatar:!0})}),children:n.jsx(_,{})}),n.jsx(o.Suspense,{fallback:n.jsx(e,{headless:!0,children:n.jsx(p,{paragraph:{rows:20}})}),children:n.jsxs(g,{children:[n.jsx(a,{index:!0,element:n.jsx(l,{})}),n.jsx(a,{path:"profile",element:n.jsx(l,{})}),n.jsx(a,{path:"account",element:n.jsx(f,{})}),n.jsx(a,{path:"password",element:n.jsx(u,{})}),n.jsx(a,{path:"social",element:n.jsx(b,{})}),n.jsx(a,{path:"notification",element:n.jsx(h,{})})]})})]})})]})})]})}const z=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{C as A,v as C,P as N,w as P,k as S,z as a};
