"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2427],{32427:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(9950),i=r(87094),a=r(41988),o=r(32212),l=r(42074),d=r(28429),p=r(84394),s=r(57687),m=r(67482),x=r(29355),h=r(44414);const c=(0,n.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(2134),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(5600)]).then(r.bind(r,82259)))),g=(0,n.lazy)((()=>r.e(5717).then(r.bind(r,95717)))),u=(0,n.lazy)((()=>r.e(1596).then(r.bind(r,91596)))),f=(0,n.lazy)((()=>r.e(9804).then(r.bind(r,9804)))),b=(0,n.lazy)((()=>r.e(1644).then(r.bind(r,51644)))),y=(0,n.lazy)((()=>r.e(5810).then(r.bind(r,55810))));const w=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.PageHeader,{title:"My Profile",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}]}),(0,h.jsx)(m.Main,{children:(0,h.jsxs)(i.A,{gutter:25,children:[(0,h.jsxs)(a.A,{xxl:6,lg:8,md:10,xs:24,children:[(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(o.A,{avatar:!0,active:!0,paragraph:{rows:3}})}),children:(0,h.jsx)(c,{user:{name:"Duran Clyton",designation:"UI/UX Designer",img:"static/img/users/1.png"}})}),(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(o.A,{active:!0,paragraph:{rows:10}})}),children:(0,h.jsx)(u,{})})]}),(0,h.jsx)(a.A,{xxl:18,lg:16,md:14,xs:24,children:(0,h.jsxs)(p.SettingWrapper,{children:[(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(o.A,{active:!0})}),children:(0,h.jsxs)("div",{className:"coverWrapper",children:[(0,h.jsx)(g,{}),(0,h.jsx)("nav",{className:"profileTab-menu",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.k2,{to:"./overview",children:"Overview"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.k2,{to:"./timeline",children:"Timeline"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.k2,{to:"./activity",children:"Activity"})})]})})]})}),(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(o.A,{active:!0,paragraph:{rows:10}})}),children:(0,h.jsxs)(d.BV,{children:[(0,h.jsx)(d.qh,{path:"overview",element:(0,h.jsx)(f,{})}),(0,h.jsx)(d.qh,{path:"timeline",element:(0,h.jsx)(b,{})}),(0,h.jsx)(d.qh,{path:"activity",element:(0,h.jsx)(y,{})})]})})]})})]})})]})}},84394:(e,t,r)=>{r.r(t),r.d(t,{ActivityContents:()=>l,ProductOverviewTable:()=>d,RightAsideWrapper:()=>o,SettingWrapper:()=>a,UserBioBox:()=>i});var n=r(19335);const i=n.Ay.div`
    .ant-card .ant-card-body{
        padding: 25px 0 25px 0 !important;
    }
    
    .user-info{
        margin-bottom: 22px;
        padding: 0 25px 22px 25px;
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
        &:last-child{
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .user-info__title{
            font-size: 12px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
            text-transform: uppercase;
            margin-bottom: 16px;
        }
        p{
            font-size: 15px;
            line-height: 1.667;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
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
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 12px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                }
                span{
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
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
                border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
                margin: ${e=>{let{theme:t}=e;return t.rtl?"0 0 10px 10px":"0 10px 10px 0"}};
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}} !important;
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
                box-shadow: 0 5px 15px ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}}20;
                &:not(:last-child){
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
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
    
`,a=n.Ay.div`
    .cover-image{
        position: relative;
        .ant-upload-select{
            position: absolute;
            ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: auto;
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
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 8px;
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
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
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
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 22px;
                        @media only screen and (max-width: 375px){
                            ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 0;
                        }
                    }
                    a{
                        position: relative;
                        display: block;
                        padding: 20px 5px;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                        @media only screen and (max-width: 375px){
                            padding: 10px 5px;
                        }
                        &:after{
                            position: absolute;
                            ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1.5px;
                            content: '';
                            opacity: 0;
                            visibility: hidden;
                            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
                            @media only screen and (max-width: 375px){
                                display: none;
                            }
                        }
                        &.active{
                            font-weight: 500;
                            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
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
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
        }
    }
`,o=n.Ay.div`
    .ant-card-head{
        .btn-seeAll{
            font-size: 13px;
            font-weight: 500;
            color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
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
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
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
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
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
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
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
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 6px;
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
                ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                content: '';
                border-radius: 6px;
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}}20;
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
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}}60;
                svg,
                img,
                i{
                    width: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-text"]}}
                }
            }
        }
    }
`,l=n.Ay.div`
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
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 15px;
                svg{
                    width: 14px;
                    height: 14px;
                }
                &.primary{
                    background-color: ${e=>{let{theme:t}=e;return t["primary-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                }
                &.secondary{
                    background-color: ${e=>{let{theme:t}=e;return t["secondary-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["secondary-color"]}};
                }
                &.success{
                    background-color: ${e=>{let{theme:t}=e;return t["success-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                }
                &.info{
                    background-color: ${e=>{let{theme:t}=e;return t["info-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["info-color"]}};
                }
                &.danger{
                    background-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
                }
                &.warning{
                    background-color: ${e=>{let{theme:t}=e;return t["warning-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["warning-color"]}};
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
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
                }
                p{
                    margin-bottom: 0;
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    .inline-text{
                        font-weight: 500;
                        display: inline;
                    }
                    .hour{
                        display: block;
                        margin-top: 3px;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                    }
                }
            }
            .activity-more{
                svg,
                i{
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                }
            }
        }
                
    }
`,d=n.Ay.div`
    .ant-card-body{
        padding: 0 !important;
        .ant-table{
            border-radius: ${e=>{let{theme:t}=e;return t.rtl?"10px 10px 0 0":"0 0 10px 10px"}};
            margin-top: 1px;
        }
    }
    .ant-table{
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
    }
    table{
        margin-bottom: 25px;
        .ant-table-thead > tr > th{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
            border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            &:first-child{
                padding-${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 25px;
            }
            &:last-child{
                text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
                padding-${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 25px;
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
                        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
                    }
                }
                td{
                    padding: 14px 16px;
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                    &:first-child{
                        padding-${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 25px;
                    }
                    &:last-child{
                        padding-${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 25px;
                        text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
                    }
                }
            }
        }
    }
`}}]);