import{s as i}from"./index-B54C9UsK.js";const o=i.div`
    position: relative;
    z-index: 21;
    .ant-card-body{
        padding: 20px 25px 15px!important;
        .postBody{
            display: flex;
            position: relative;
            .post-author{
                max-width: 46px;
                border-radius: 50%;
                position: absolute;
                top: 5px;
                z-index: 22;
                ${({theme:t})=>t.rtl?"right":"left"}: 0;
            }
            textarea{
                border: 0 none;
                padding-${({theme:t})=>t.rtl?"right":"left"}: 70px;
                background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                min-height: 55px;
                resize: none;
                &:focus{
                    outline: none;
                    box-shadow: 0 0 0 0px rgba(95, 99, 242, 0.2);
                }
            }
        }
        .postFooter{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            padding-top: 15px;
            .ant-upload{
                margin-${({theme:t})=>t.rtl?"left":"right"}: 8px;
                .ant-btn{
                    height: 30px;
                    font-size: 12px;
                    font-weight: 500;
                    border-radius: 16px;
                    padding: 0 14.5px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                }
            }
            .btn-more{
                padding: 0 16px;
            }
            .postFooter_left{
                display: flex;
                .ant-btn-light{
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    background-color: ${({theme:t})=>t["bg-color-normal"]};
                }
            }
            .btn-post{
                height: 35px;
            }
        }
    }    
`,a=i.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({theme:t})=>t.rtl?"right":"left"}: 0;
    z-index: -0;
`,e=i.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({theme:t})=>t.rtl?"right":"left"}: 0;
    z-index: 998;
`,r=i.div`
    .ant-card-head {
        .ant-card-head-title{
            @media only screen and (max-width: 575px){
                padding: 24px 0 2px;
            }
        }
    }
    .ant-card-body{
        padding: 20px 0 !important;
    }
    .post-content{
        .gallery{
            padding: 0 25px;
            img{
                margin-bottom: 10px;
                border-radius: 8px;
            }
        }
        .post-text{
            border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            padding: 0 25px 20px 25px;
            margin-bottom: 20px;
            p{
                font-size: 15px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                &:last-child{
                    margin-bottom: 0;
                }
            }
        } 
        .post-actions{
            padding: 0 25px 20px 25px;
            margin-bottom: 20px;
            border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            span{
                display: inline-flex;
                align-items: center;
                color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                margin-${({theme:t})=>t.rtl?"left":"right"}: 20px;
            }
            a{
                display: inline-flex;
                align-items: center;
                font-size: 13px;
                color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                svg,
                i{
                    width: 14px;
                    height: 14px;
                    margin-${({theme:t})=>t.rtl?"left":"right"}: 6px;
                }
            }
        }
        .commentArea{
            display: flex;
            align-items: center;
            padding: 0 25px 20px 25px;
            border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            @media only screen and (max-width: 1299px){
                flex-flow: column;
                align-items: flex-start;
            }
            .comment-form{
                flex: auto;
                position: relative;
                display: flex;
                align-items: center;
                margin-${({theme:t})=>t.rtl?"left":"right"}: 10px;
                @media only screen and (max-width: 1299px){
                    width: 100%;
                    margin-${({theme:t})=>t.rtl?"left":"right"}: 0;
                }
                @media only screen and (max-width: 991px){
                    flex-flow: column;
                    align-items: flex-start;
                    width: 100%;
                    margin-${({theme:t})=>t.rtl?"left":"right"}: 0;
                    margin-bottom: 15px;
                }
                img{
                    max-width: 36px;
                    margin-${({theme:t})=>t.rtl?"left":"right"}: 10px;
                    border-radius: 50%;
                    @media only screen and (max-width: 991px){
                        margin-${({theme:t})=>t.rtl?"left":"right"}: 0;
                        margin-bottom: 15px;
                    }
                }
                textarea{
                    padding: 14px 82px 14px 22px;
                    height: 52px;
                    border: 0 none;
                    border-radius: 25px;
                    background-color: #F4F5F7;
                    resize: none;
                }
            }
            .btn-send{
                padding: 0;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 10px 15px #5F63F220;
                @media only screen and (max-width: 991px){
                    width: 35px;
                    height: 35px;
                }
                svg,
                i,
                img{
                    width: 16px;
                    color: #fff;
                    @media only screen and (max-width: 991px){
                        width: 14px;
                    }
                }
            }
            .chatbox-reply-action{
                position: absolute;
                ${({theme:t})=>t.rtl?"left":"right"}: 22px;
                align-items: center;
                @media only screen and (max-width: 991px){
                    bottom: 10px;
                }
                .smile-icon{
                    position: relative;                    
                    margin-${({theme:t})=>t.rtl?"left":"right"}: 18px;
                    line-height: 1;
                    @media only screen and (max-width: 991px){
                        margin-${({theme:t})=>t.rtl?"left":"right"}: 8px;
                    }
                    aside{
                        position: absolute;
                        z-index: 9999999;
                    }
                }
                a{
                    line-height: 1;
                    &:not(:last-child){
                        margin-${({theme:t})=>t.rtl?"left":"right"}: 18px;
                        @media only screen and (max-width: 991px){
                            margin-${({theme:t})=>t.rtl?"left":"right"}: 6px;
                        }
                    }
                    svg,
                    i{
                        color: #ADB4D2;
                        width: 18px;
                        @media only screen and (max-width: 991px){
                            width: 14px;
                        }
                    }
                }
                .ant-upload-list {
                    display: none;
                }
                .ant-upload{
                    margin: 0;
                    padding: 0;
                    width: auto;
                    height: auto;
                    line-height: .5;
                    background-color: transparent;
                    border: 0 none;
                }
            }
        }
        .commentReplay{
            padding: 20px 25px 0 25px;
            .ant-comment-content-author-name{
                font-size: 14px;
                font-weight: 600;
                color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                span{
                    color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                }
            }
            .ant-comment-actions{
                margin-top: 10px;
                li{
                    &:hover{
                        span.com-like,
                        span.com-reply{
                            color: ${({theme:t})=>t["primary-color"]};
                        }
                    }
                }
            }
        }
    }
`,d=i.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 575px){
        text-align: center;
    }
    img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
        @media only screen and (max-width: 575px){
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
            margin-bottom: 10px;
        }
    }
    p {
        font-size: 14px;
        font-weight: 600;
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        margin: 0;
        span {
            font-size: 13px;
            font-weight: 400;
            display: block;
            margin: 0;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
            @media only screen and (max-width: 575px){
                margin-top: 4px;
            }
        }
    }
`;export{r as A,a as B,o as C,d as T,e as a};
