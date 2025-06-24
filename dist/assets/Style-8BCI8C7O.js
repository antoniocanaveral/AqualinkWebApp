import{s as n}from"./index-BJIB_XH5.js";const e=n.div`
    .ninjadash-tassklist-wrap{
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border-radius: 10px;
        min-height: 220px;
    }
    .ninjadash-tasklist-head{
        .ninjadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
    }
    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            .ninjadash-tasklist-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 7.5px 0;
                @media only screen and (max-width: 575px){
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 7.5px 0 20px;
                }
                .ninjadash-tasklist-item__content{
                    margin-right: 10px;
                }
            }
            .ninjadash-tasklist-item__title{
                font-size: 16px;
                color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                .ant-checkbox + span{
                    position: relative;
                    top: -2px;
                    ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 10px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${({theme:t})=>t["success-color"]};
                        }
                    }
                    span{
                        font-size: 15px;
                        font-weight: 400;
                        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${({theme:t})=>t["success-color"]};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5px;
                            height: 9px;
                            top: 48%;
                            left: 25.5%;
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({theme:t})=>t["success-color"]};
                        }
                        .ant-checkbox-inner{
                            background-color: ${({theme:t})=>t["success-color"]};
                            border-color: ${({theme:t})=>t["success-color"]};
                            &:after{
                                border-color: #fff;
                            }
                        }
                    }
                }
            }
            .ninjadash-tasklist-item__text{
                padding-left: 30px;
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .ninjadash-tasklist-item__action{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 20px;
                @media only screen and (max-width: 575px){
                    margin-top: 20px;
                    margin-left: -10px;
                    padding-left: 30px;
                }
                svg,
                i{
                    width: 16px;
                    height: 16px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                }
                .task-favourite{
                    line-height: 1;
                    &.active{
                        svg,
                        i{
                            color: ${({theme:t})=>t["warning-color"]}; 
                        }
                    }
                    svg,
                    img{
                        position: relative;
                        top: -2px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
                a {
                    display: inline-flex;
                    align-items: center;
                    margin: 0 10px;
                }
                .ninjadash-edit{
                    &:hover{
                        svg,
                        i{
                            color: ${({theme:t})=>t["info-color"]}; 
                        }
                    }
                }
                .ninjadash-delete{
                    &:hover{
                        svg,
                        i{
                            color: ${({theme:t})=>t["danger-color"]}; 
                        } 
                    }
                }
            }
        }
        .ninjadash-tasklist-empty{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            }
        }
    }
    .ninjadash-modal-actions{
        display: flex;
        justify-content: flex-end;
        button{
            margin: 5px;
        }
    }
`;export{e as T};
