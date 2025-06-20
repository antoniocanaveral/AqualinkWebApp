import{s as t}from"./index-B54C9UsK.js";const o=t.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px 0 20px;
`,i=t.div`
    .ninjadash-course-content{
        .ninjadash-course-content-top-title{
            font-size: 30px;
            font-weight: 600;
            color: ${({theme:n})=>n[n.mainContent]["dark-text"]};
        }
        p{
            font-size: 16px;
            margin-bottom: 28px;
            color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
        }
        .ninjadash-course-content__title{
            font-size: 22px;
            font-weight: 600;
            margin: 30px 0 14px 0;
            color: ${({theme:n})=>n[n.mainContent]["dark-text"]};
        }
        .ninjadash-course-instructor{
            display: flex;
            align-items: center;
            margin-bottom: -6px;
            img{
                max-width: 50px;
                border-radius: 50%;
            }
            .ninjadash-course-instructor__info{
                ${({theme:n})=>n.rtl?"margin-right":"margin-left"}: 10px;
                .ninjadash-course-instructor__name{
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.25;
                    margin-bottom: 3px;
                    color: ${({theme:n})=>n[n.mainContent]["dark-text"]};
                }
                .ninjadash-course-instructor__designation{
                    font-size: 15px;
                    color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
                }
            }
        }
        .ninjadash-course-content__list{
            li{
                font-size: 16px;
                position: relative;
                ${({theme:n})=>n.rtl?"padding-right":"padding-left"}: 16px;
                color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
                &:not(:last-child){
                    margin-bottom: 12px;
                }
                &:before{
                    position: absolute;
                    ${({theme:n})=>n.rtl?"right":"left"}: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    content: '';
                    background-color: ${({theme:n})=>n[n.mainContent]["dark-text"]}; 
                }
            }
        }
    }
    .ninjadash-course-content__lectures{
        .ant-collapse-header{
            .ant-collapse-extra{
                min-width: 120px;
                span + span{
                    ${({theme:n})=>n.rtl?"margin-right":"margin-left"}: 70px;
                    @media only screen and (max-width: 1299px){
                        ${({theme:n})=>n.rtl?"margin-right":"margin-left"}: 10px;
                    }
                }
            }
        }
        .ant-collapse-content-box{
            ul{
                li{
                    &:not(:last-child){
                        margin-bottom: 24px;
                    }
                    .ninjadash-course-content__lecture--single{
                        display: flex;
                        align-items: center;
                        @media only screen and (max-width: 991px){
                            align-items: flex-start;
                        }
                        svg{
                            min-width: 16px;
                            width: 16px;
                            ${({theme:n})=>n.rtl?"margin-left":"margin-right"}: 8px;
                            fill: ${({theme:n})=>n["primary-color"]};
                        }
                        .ninjadash-course-content__lecture--title{
                            font-size: 15px;
                            ${({theme:n})=>n.rtl?"margin-left":"margin-right"}: 10px;
                            color: ${({theme:n})=>n[n.mainContent]["gray-text"]}; 
                        }
                        .ninjadash-course-content__lecture--extra{
                            display: flex;
                            align-items: center;
                            margin-left: auto;
                            p{
                                font-size: 14px;
                                margin: 0;
                                color: ${({theme:n})=>n["primary-color"]};
                            }
                        }
                        .ninjadash-course-content__lecture--duration{
                            font-size: 14px;
                            margin-left: 80px;
                            ${({theme:n})=>n.rtl?"margin-right":"margin-left"}: 80px;
                            color: ${({theme:n})=>n[n.mainContent]["gray-text"]}; 
                        }
                    }
                }
            }
        }
        .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
            background-color: ${({theme:n})=>n[n.mainContent]["white-background"]};
        }
        .ant-collapse {
            > .ant-collapse-item {
                > .ant-collapse-header {
                    .ant-collapse-arrow{
                        width: 14px;
                        height: 14px;
                        top: 1px;
                    }
                }
            }
        }
    }
    .ninjadash-course-content__faqs{
        .ant-collapse > {
            .ant-collapse-item > {
                .ant-collapse-content {
                    .ant-collapse-content-box{
                        padding: 24px 25px 30px;
                    }
                }
            }
        }
        .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
            background-color: ${({theme:n})=>n[n.mainContent]["white-background"]};
        }
        .ant-collapse {
            > .ant-collapse-item {
                > .ant-collapse-header {
                    .ant-collapse-arrow{
                        width: 14px;
                        height: 14px;
                        top: 1px;
                    }
                }
            }
            &.ant-collapse-borderless{
                > .ant-collapse-item:last-child{
                    border-radius: 6px;
                }
            }
        }
    }
    .ninjadash-course-infobox{
        padding: 35px;
        border-radius: 10px;
        background-color: ${({theme:n})=>n[n.mainContent]["white-background"]}; 
        @media only screen and (max-width: 991px){
            padding: 25px;
            margin-bottom: 25px;
        }
        .ninjadash-course-infobox__video{
            margin-bottom: 24px;
            iframe{
                border-radius: 10px;
                width: 100%;
            }
        }
        .ninjadash-course-meta{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: -25px;
            .ninjadash-course-meta__item{
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 25px;
                
                .ninjadash-course-meta__item--icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 70px;
                    width: 70px;
                    border-radius: 10px;
                    &.bg-primary{
                        background-color: ${({theme:n})=>n["primary-color"]}20;
                        svg{
                            fill: ${({theme:n})=>n["primary-color"]};
                        }
                    }
                    &.bg-secondary{
                        background-color: ${({theme:n})=>n["secondary-color"]}20;
                        svg{
                            fill: ${({theme:n})=>n["secondary-color"]};
                        }
                    }
                    &.bg-success{
                        background-color: ${({theme:n})=>n["success-color"]}20;
                        svg{
                            fill: ${({theme:n})=>n["success-color"]};
                        }
                    }
                    &.bg-warning{
                        background-color: ${({theme:n})=>n["warning-color"]}20;
                        svg{
                            fill: ${({theme:n})=>n["warning-color"]};
                        }
                    }
                }
                .ninjadash-course-meta__item--text{
                    display: inline-block;
                    margin-top: 6px;
                    color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
                }
            }
        }
        .ninjadash-course-infobox__action{
            text-align: center;
            margin-top: 30px;
        }
        .ninjadash-course-infobox__price{
            font-size: 30px;
            font-weight: 600;
            display: block;
            margin-bottom: 12px;
            color: ${({theme:n})=>n[n.mainContent]["dark-text"]};
        }
    }
`;export{o as C,i as a};
