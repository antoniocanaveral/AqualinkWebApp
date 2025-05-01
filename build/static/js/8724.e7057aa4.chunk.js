"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8724],{68724:(t,e,n)=>{n.r(e),n.d(e,{AddProductForm:()=>s,AdditionalInfoStyle:()=>x,FigureCart:()=>a,JobApplicationWrap:()=>h,JobDetailsWrap:()=>p,JobLandingStyle:()=>i,JobsCard:()=>d,NotFoundWrapper:()=>l,PaginationWrapper:()=>g,ProductDetailsWrapper:()=>c,Sidebar:()=>o,SidebarSingle:()=>m});var r=n(19335);const i=r.Ay.div`
    .ninjadash-joblanding-top{
        justify-content: center;
        margin-bottom: 50px;
        @media only screen and (max-width: 991px){
            margin-bottom: 30px;
        }
        @media only screen and (max-width: 575px){
            flex-direction: column;
        }
        .ninjadash-title-search{
            max-width: 500px;
            @media only screen and (max-width: 575px){
                max-width: 100%;
            }
        }
        .ninjadash-location-search{
            max-width: 350px;
            @media only screen and (max-width: 575px){
                max-width: 100%;
            }
        }
        input{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            &::placeholder{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            }
        }
        .ant-input-affix-wrapper,
        button{
            border-radius: 6px;
            margin: 5px;
        }
        .ant-input-affix-wrapper{
            border: 0 none;
            box-shadow: 0 5px 20px rgba(173,181,217,.03);
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
            .ant-input-prefix{
                position: relative;
                top: -1px;
            }
            svg{
                width: 15px;
                height: 15px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
            }
        }
        button{
            padding: 0px 43.35px;
            height: 48px;
        }
    }
    .ninjadash-showcase-top{
        @media only screen and (max-width: 991px){
            flex-direction: column;
        }
        .ant-select{
            @media only screen and (max-width: 991px){
                margin-bottom: 0;
            }
        }
        .ninjadash-showcase-top__text {
            p{
                @media only screen and (max-width: 991px){
                    margin-bottom: 0;
                }
            }
        }
        .ninjadash-showcase-top__action--filter{
            .ant-select{
                margin-bottom: 0;
            }
        }
    }
`,a=r.Ay.figure`

    display: inline-flex;
    img {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
    }
`,o=r.Ay.div`
    .ant-card-body{
        padding: 20px 25px 25px !important
    }
    .ant-card-head-title{
        padding: 14px 0 !important;
        span{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0;
            font-size: 16px;
            font-weight: 500;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            svg{
                width: 16px;
                height: 16px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
            }
        }
    }
`,l=r.Ay.div`
    text-align: center;
    margin-top: 60px;
    h1{
        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
        border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
        padding: 15px 0 20px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
    }
`,m=r.Ay.div`
    h1{
        font-size: 15px;
        margin-bottom: 10px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
    }
    .price-range-text{
        font-size: 15px;
        margin: -5px 0 0;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
    }
    .ant-slider{
        margin-bottom: 8px;
        margin-top: 6px;
    }
    .price-range-value{
        display: flex;
        justify-content: space-between;
        span{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    
    .atbd-category-list{
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
            a{
                width: 100%
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                .category-count{
                    font-size: 12px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
                }
            }
        }
    }
    .btn-seeMore{
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-top: 8px;
        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
    }
    .ant-checkbox-group{
        .ant-checkbox-group-item{
            display: flex;
            align-items: center;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            &:not(:last-child){
                margin-bottom: 10px;
            }
            &.ant-checkbox-wrapper{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
            }
            >span + span{
                position: relative;
                top: 4px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 15px;
                .brand-count{
                    font-size: 12px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};;
                }
                .rating-left{
                    margin-top: -4px;
                    min-width: 150px;
                    @media only screen and (max-width: 1792px){
                        min-width: 130px;
                    }
                    .ant-rate{
                        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
                    }
                    .anticon svg{
                        color: #FA8B0C;
                    }
                }
                .rating-right{
                    text-align: ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}};
                    min-width: 60px;
                    font-size: 12px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};;
                    @media only screen and (max-width: 1792px){
                        min-width: 26.5px;
                    }
                }
            }
        }
    }
    .ant-checkbox-group{
        width: 100%;
    }
`,d=r.Ay.div`
    .ninjadash-job-card{
        justify-content: space-between;
        padding: 30px 25px 26px 25px;
        box-shadow: 0 5px 20px rgba(173,181,217,.05);
        border-radius: 10px;
        margin-bottom: 25px;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        @media only screen and (max-width: 1399px){
            flex-direction: column;
            align-items: flex-start;
        }
        @media only screen and (max-width: 991px){
            flex-direction: row;
        }
        @media only screen and (max-width: 475px){
            flex-direction: column;
        }
        .ninjadash-media{
            margin-bottom: 15px;
        }
        .ninjadash-media__figure {
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
        }
        .ninjadash-media__body{
            h1{
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 6px;
                @media only screen and (max-width: 1199px){
                    font-size: 15px;
                }
                a{
                    color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                    &:hover{
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    }
                }
            }
            p{
                font-size: 15px;
                margin: 0;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
        .ninjadash-jobinfo-meta{
            margin-bottom: 0;
            li{
                .ninjadash-jobinfo-meta__label{
                    display: inline-block;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
                    font-weight: 500;
                    min-width: 62px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    @media only screen and (max-width: 1399px){
                        margin-right: 10px;
                        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
                    }
                }
                .ninjadash-jobinfo-meta__info{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                &:not(:last-child){
                    margin-bottom: 8px;
                }
            }
        }
        .ninjadash-job-card__action{
            @media only screen and (max-width: 1399px){
                margin-top: 20px;
            }
            @media only screen and (max-width: 991px){
                margin-top: 0;
            }
            @media only screen and (max-width: 475px){
                margin-top: 20px;
            }
            .ninjadash-job-card-btn-details{
                display: flex;
                align-items: center;
                font-size: 14px;
                height: 38px;
                padding: 0px 20.15px;
                border-radius: 24px;
                transition: background 0.3s;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-background"]}};
                &:hover{
                    color: #fff;
                    background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
            .ant-btn-round.ant-btn-sm{
                font-size: 14px;
                height: 38px;
                padding: 0 20.15px;
                &.ant-btn-light{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-background"]}};
                    &:hover{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-text"]}};
                        background-color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    }
                }
            }
        }
        &.ninjadash-job-card-listview{
            .ninjadash-media{
                margin-bottom: 0;
                .ninjadash-media__figure{
                    img{
                        max-width: 46px;
                    }
                }
            }
            .ninjadash-media__body{
                h1{
                    margin-bottom: 4px;
                }
            }
            .ninjadash-jobinfo-meta{
                display: flex;
                justify-content: space-between;
                li{
                    span{
                        display: block;
                        font-weight: 400;
                        &.ninjadash-jobinfo-meta__info{
                            font-weight: 500;
                            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                        }
                    }
                }
            }
            .ninjadash-job-card__action{
                text-align: right;
                @media only screen and (max-width: 1599px){
                    text-align: left;
                    margin-top: 20px;
                }
            }
        }
    }
`,p=r.Ay.div`
    .ninjadash-media{
        margin-bottom: 24px;
    }
    .ninjadash-media__figure {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
    }
    .ninjadash-media__body{
        h1{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 6px;
            @media only screen and (max-width: 767px){
                font-size: 18px;
            }
            a{
                color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                &:hover{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
        p{
            font-size: 15px;
            margin: 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    article{
        margin-bottom: 20px;
        h2{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            @media only screen and (max-width: 767px){
                font-size: 16px;
            }
        }
        p{
            font-size: 16px;
            line-height: 1.69;
            color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
        ul{
            li{
                font-size: 16px;
                position: relative;
                padding-left: 22px;
                color:  ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 22px;
                &:after{
                    position: absolute;
                    ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
                    top: 50%;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    content: '';
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
    }
`,x=r.Ay.div`
    .ninjadash-additional-info__title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 18px;
    }
    .ninjadash-additional-info__list{
        margin-bottom: 25px;
        li{
            &:not(:last-child){
                margin-bottom: 12px;
            }
            .ninjadash-list-label{
                display: inline-block;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
                min-width: 76px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            }
            .ninjadash-list-text{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
    }
`,h=r.Ay.div`
    @media only screen and (max-width: 575px){
        margin-top: 10px;
    }
    .ant-card {
        .ant-card-body{
            padding: 40px 60px 25px !important;
            @media only screen and (max-width: 575px){
                padding: 20px 30px 5px !important;
            }
        }
    }
    .ninjadash-application-title{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 42px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        @media only screen and (max-width: 575px){
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
    .ant-form-item-label{
        label{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    .ant-input{
        font-size: 15px;
        &::placeholder{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
    .ant-form-item-control-input-content{
        textarea{
            min-height: 130px;
        }
        .ant-upload-select{
            width: 100%;
            padding: 12px 14px;
            border: 1px dashed ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            .ant-btn{
                &.ant-btn-sm{
                    padding: 0px 13.75px;
                    height: 38px;
                }
                svg{
                    color: #fff;
                }
            }
        }
    }
    .ninjadash-form-action{
        margin-top: 35px;
    }
`,g=r.Ay.div`
    display: flex;
    justify-content: flex-end;
    
    @media only screen and (max-width: 767px){
        margin-top: 0px !important
    }
    @media only screen and (max-width: 1199px){
        justify-content: center;
    }
    .ant-pagination{
        .ant-pagination-item-link,
        .ant-pagination-item,
        .ant-pagination-options .ant-select-selector{
            border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}} !important;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};          
        }
        .ant-pagination-item a{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};;
        }
    }
    
`,c=r.Ay.div`
    .product-details-box{
        padding: 15px;
        @media only screen and (max-width: 575px){
            padding: 0;
        }
    }
    .product-details-box__left{
        figure{
            margin-bottom: 0;
            img{
                border-radius: 10px;
            }
        }
    }
    .pdbl__slider{
        margin-top: 15px;
    }
    .pdbl__image{
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 6px;
        img{
            border-radius: 10px;
            max-width: 90px;
            @media only screen and (max-width: 991px){
                margin-bottom: 10px;
            }
        }
    }
    .product-details-box__right{
        @media only screen and (max-width: 991px){
            margin-top: 20px;
        }
        p{
            margin-bottom: 8px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};;
        }
        .ant-rate{
            margin-bottom: 6px;
        }
        .ant-rate-star:not(:last-child){
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 2px !important;
        }
    }
    .pdbr__title{
        margin-bottom: 10px;
    }
    .pdbr__rating{
        display: inline-block;
        margin: ${t=>{let{theme:e}=t;return e.rtl?"0 8px 0 4px":"0 4px 0 8px"}};
        font-size: 12px;
        font-weight: 500;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
    }
    .pdbr__review-count{
        font-size: 12px;
        font-weight: 400;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};;
    }
    .pdbr__brand-text{
        display: inline-block;
        margin-bottom: 8px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};;
    }
    .pdbr__brand-name{
        font-weight: 500;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
    }
    .pdbr__new-price{
        font-size: 22px;
        font-weight: 500;
        margin: 18px 0 8px;
        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        .pdbr__currency{
            font-size: 14px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};;
        }
    }
    .pdbr__desc{
        font-size: 15px;
        max-width: 580px;
    }
    .pdbr__old-price{
        display: inline-flex;
        align-items: center;
        margin-bottom: 22px;
        del{
            font-size: 16px;
            font-weight: 400;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
        .pdbr__offer-price{
            display: inline-block;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 8px;
            font-size: 12px;
            color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
        }
    }

    .pdbr__current-status{
        margin-top: 25px;
        p{
            margin-bottom: 2px;
        }
        .current-status-title{
            font-weight: 500;
            margin-right: 30px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            @media only screen and (max-width: 1000px){
                margin-right: 15px;
            }
        }
        .stock-status{
            &.in-stock{
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
        }
        .shipping-cost{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};;
        }
    }

    .pdbr__quantity{
        font-weight: 500;
        margin: 30px 0 30px !important;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        button{
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
            &.btn-inc{
                margin-right: 15px;
            }
            &.btn-dec{
                margin-left: 15px;
            }
        }
        .pdbr__availability{
            font-size: 13px;
            font-weight: 400;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
        }
    }
    .pdbr__Actions{
        border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["general-background"]}};
        padding-bottom: 30px;
        margin-bottom: 28px;
        @media only screen and (max-width: 1399px){
            flex-flow: column;
            align-items: flex-start;
        }
        .pdbr__product-action{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .btn-cart{
                padding: 0 26.35px;
            }
            .btn-buy{
                padding: 0 29.85px;
            }
            .btn-cart,
            .btn-buy{
                border-radius: 6px;
                height: 44px;
            }
            button,
            a{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
                @media only screen and (max-width: 1399px){
                    margin-bottom: 20px;
                }
                &:focus{
                    svg{
                        fill: #5a5f7d;
                    }
                }
            }
            .btn-icon{
                height: 44px;
                padding: 0 13px;
                box-shadow: 0 5px 15px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}15;
                &:hover{
                    background: transparent;
                }
                i{
                    color: #707070;
                }
            }
        }
        .pdbr__socials{
            margin: 0px 0 0 5px;
            a{
                color: #666666;
                &:not(:last-child){
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
                }
                span{
                    font-size: 14px;
                    color: #666666;
                }
            }
        }
    }

    .pdbr__list{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        li{
            span{
                &:first-child{
                    display: inline-block;
                    min-width: 66px;
                    font-weight: 500;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 25px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
            }
            span + span{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};;
            }
        }
    }
    .btn-cart span {
        ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 6px;
    }
`,s=r.Ay.div`
    margin-top: 28px;
    .ant-select-arrow{
        ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 11px;
    }
    
    .ant-table table {
        text-align: ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}};
    }
    .add-product-block{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
        border-radius: 20px;
        padding: 30px;
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
        @media only screen and (max-width: 575px){
            padding: 20px;
        }
        &:not(:last-child){
            margin-bottom: 30px;
            @media only screen and (max-width: 575px){
                margin-bottom: 15px;
            }
        }
        .ant-card{
            margin-bottom: 0 !important;
            border-radius: 20px;
        }
        .add-product-content{
            box-shadow: 0 10px 30px ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}}10;
            border-radius: 20px;
            .ant-card-head{
                padding: 0 40px !important;
                border-radius: ${t=>{let{theme:e}=t;return e.rtl?"20px 0 0 20px":"20px 20px 0 0"}};
                @media only screen and (max-width: 575px){
                    padding: 0 15px !important;
                }
            }
            .ant-card-head-title{
                padding: 26px 0 25px;
            }
            .ant-card-body{
                padding: 26px 40px 40px !important;
                @media only screen and (max-width: 575px){
                    padding: 20px !important;
                }
            }
        }
        .ant-upload{
            border-spacing: 6px;
            border-width: 2px;
            border-radius: 10px;
            background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-deep"]}};
            padding: 50px;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-upload-drag-icon{
                i,
                svg{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                }
            }
            .ant-upload-text{
                font-weight: 500;
                margin-bottom: 8px;
            }
            .ant-upload-hint{
                font-size: 15px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};;
                span{
                    color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                }
            }
        }
        .ant-upload-list-item{
            height: 100%;
            padding: 0;
            border: 0 none;
            margin-top: 25px;
        }
        .ant-upload-list-item-info{
            height: 100%;
            >span{
                display: flex;
                align-items: center;
            }
            .ant-upload-list-item-name{
                padding: 0 10px;
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                &:hover{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
            .ant-upload-list-item-card-actions{
                position: relative;
                top: 0;
                i,
                svg{
                    width: 15px;
                    color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
                }
            }
            .ant-upload-list-item-thumbnail{
                position: relative;
                top: 0;
                min-width: 100px;
                width: auto;
                height: 100%;
                img{
                    max-width: 100px;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px;
                }
            }
        }
    }
    .add-form-action{
        text-align: ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}};
        margin-top: 40px;
        @media only screen and (max-width: 575px){
            text-align: center;
            margin-top: 0;
        }
        .ant-form-item-control-input{
            button{
                height: 50px;
                padding: 0 22.82px;
            }
        }
        button{
            font-size: 15px;
            font-weight: 400;
            height: 50px;
        }
        .btn-cancel{
            border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
            background: ${t=>{let{theme:e}=t;return e["bg-color-light"]}};
        }
    }
`}}]);