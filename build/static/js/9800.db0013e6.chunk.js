"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9800],{39800:(t,e,n)=>{n.r(e),n.d(e,{default:()=>$});var r=n(9950),i=n(87094),o=n(41988),a=n(32212),l=n(28429),p=n(36672),d=n(57687),x=n(67482),m=n(29355),s=n(44414);const h=(0,r.lazy)((()=>n.e(5e3).then(n.bind(n,75e3)))),c=(0,r.lazy)((()=>n.e(2634).then(n.bind(n,2634)))),g=(0,r.lazy)((()=>n.e(917).then(n.bind(n,70917)))),u=(0,r.lazy)((()=>n.e(5433).then(n.bind(n,25433)))),f=(0,r.lazy)((()=>n.e(5670).then(n.bind(n,95670)))),b=(0,r.lazy)((()=>n.e(3518).then(n.bind(n,53518)))),y=(0,r.lazy)((()=>n.e(5717).then(n.bind(n,95717))));const $=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.PageHeader,{title:"My Profile",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}]}),(0,s.jsx)(x.Main,{children:(0,s.jsxs)(i.A,{gutter:25,children:[(0,s.jsx)(o.A,{xxl:6,lg:8,md:10,xs:24,children:(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(m.Cards,{headless:!0,children:(0,s.jsx)(a.A,{avatar:!0})}),children:(0,s.jsx)(b,{})})}),(0,s.jsx)(o.A,{xxl:18,lg:16,md:14,xs:24,children:(0,s.jsxs)(p.SettingWrapper,{children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(m.Cards,{headless:!0,children:(0,s.jsx)(a.A,{avatar:!0})}),children:(0,s.jsx)(y,{})}),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)(m.Cards,{headless:!0,children:(0,s.jsx)(a.A,{paragraph:{rows:20}})}),children:(0,s.jsxs)(l.BV,{children:[(0,s.jsx)(l.qh,{index:!0,element:(0,s.jsx)(h,{})}),(0,s.jsx)(l.qh,{path:"profile",element:(0,s.jsx)(h,{})}),(0,s.jsx)(l.qh,{path:"account",element:(0,s.jsx)(c,{})}),(0,s.jsx)(l.qh,{path:"password",element:(0,s.jsx)(g,{})}),(0,s.jsx)(l.qh,{path:"social",element:(0,s.jsx)(u,{})}),(0,s.jsx)(l.qh,{path:"notification",element:(0,s.jsx)(f,{})})]})})]})})]})})]})}},36672:(t,e,n)=>{n.r(e),n.d(e,{AccountWrapper:()=>a,ChangePasswordWrapper:()=>l,NotificationWrapper:()=>d,ProfileAuthorBox:()=>i,SettingWrapper:()=>o,SocialProfileForm:()=>p});var r=n(19335);const i=r.Ay.div`
    .ant-card-body{
        padding: 25px 0 25px !important;
    }
    .author-info{
        padding: 0 20px 20px;
        text-align: center;
        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
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
            ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 0;
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
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}};
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
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
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
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                i,
                svg,
                img{
                    width: 16px;
                    height: 16px;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 13px;
                }
                &.active{
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["primary-transparent"]}};;
                }
            }
        }
    }
`,o=r.Ay.div`
    .cover-image{
        position: relative;
        margin-bottom: 25px;
        .ant-upload-select{
            position: absolute;
            ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: auto;
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
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 8px;
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        }
    }
`,a=r.Ay.div`
    .ant-card-body{
        padding: 30px 25px 25px 25px !important;
        @media only screen and (max-width: 767px){
            padding: 20px !important;
        }
    }
    .account-form-top{
        margin-bottom: 26px;
        padding-bottom: 30px; 
        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .account-form{
        .ant-row{
            &:not(:last-child){
                margin-bottom: 0;
            }
        }
        p{
            margin: 2px 0 22px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
            span{
                    font-weight: 500;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
            background: ${t=>{let{theme:e}=t;return e["bg-color-light"]}};
            border: 1px solid ${t=>{let{theme:e}=t;return e["border-color-light"]}};
        }
    }
`,l=r.Ay.div`
    .ant-card-body{
        min-height: 565px;
        @media only screen and (max-width: 575px){
            min-height: 365px;
        }
    }
    form{
        .ant-form-item-control-input-content{
            .ant-input-password{
                padding: ${t=>{let{theme:e}=t;return e.rtl,"0 20px 0 20px"}} !important;
            }
        }
        .input-message{
            font-size: 13px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
            margin: -22px 0 0;
        }
        .ant-form-item-control-input-content{
            .anticon-eye-invisible{
                svg,
                i{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                }
            }
        }
        .setting-form-actions{
            button{
                border-radius: 6px;
            }
            .ant-btn-light{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            }
        }
    }
`,p=r.Ay.div`
    .ant-form-item-control-input{
        min-height: 44px;
        .ant-form-item-control-input-content{
            input{
            padding: ${t=>{let{theme:e}=t;return e.rtl?"12px 50px 12px 20px":"12px 20px 12px 50px"}} !important;
            }
            input::placeholder{
                font-size: 13px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
            }
        }
    }
    .ant-form-item{
        button{
            padding: 0px 23px;
        }
        label{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        .ant-input-affix-wrapper{
            position: relative;
            input{
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 50px;
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
                ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
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
`,d=r.Ay.div`
    .notification-box-single{
        .ant-card{
            border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
        >.ant-card{
            .ant-card-body{
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
            }
        }
        .notification-header{
            margin-top: -8px;
            .notification-header__text{
                font-size: 15px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
            }
            .btn-toggle{
                font-size: 13px;
                color: ${t=>{let{theme:e}=t;return e["info-color"]}};
            }
        }
        .notification-body{
            box-shadow: 0 10px 30px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}10;
            .ant-card{
                margin-bottom: 0 !important;
            }
            .ant-card-body{
                padding: 5px 0 !important;
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                border-radius: 10px;
            }
            nav{
                li{
                    padding: 15px 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px 20px !important;
                    }
                    &:not(:last-child){
                        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    }
                }
            }
        }
        .notification-list-single{
            .notification-list-single__title{
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 2px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
            p{
                margin-bottom: 3px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
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
                border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
    }
`}}]);