import{s as o}from"./index-BJIB_XH5.js";const r=o.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-form-horizontal{
        label{
            display: inline-block;
            font-weight: 500;
            margin-bottom: 24px;
            @media only screen and (max-width: 767px) {
                margin-bottom: 12px;
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-input-affix-wrapper > input.ant-input{
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            width: 16px;
            height: 16px;
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
        .ninjadash-form-action{
            margin: -7.5px;
            button{
                font-size: 14px;
                font-weight: 500;
                border-radius: 4px;
                margin: 7.5px;
                padding: 6.4px 19px;
                &.ant-btn-light{
                    height: 44px;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    background-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                }
            }
            .ant-btn-light{
                background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
            }
        }
    }
    &.sDash_input-form{
        .ant-picker{
            width: 100%;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    ant-picker-input{
        &::placeholder{
            color: #9299B8 !important;
        }
    }
`,a=o.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-input-affix-wrapper > input.ant-input{
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .ant-input-affix-wrapper .ant-input-prefix svg{
        width: 16px;
        height: 16px;
        color: ${({theme:t})=>t["gray-color"]};
    }
    .ninjadash-form-action{
        margin: -7.5px;
        button{
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            margin: 7.5px;
            padding: 6.4px 19px;
            &.ant-btn-light{
                height: 44px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                background-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
        }
    }
`,i=o.div`
    .sDash_check-list-wrap{
        display: flex;
        justify-content: space-between;
        .sDash_check-list{
            li{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
        }
    }
`,e=o.div`
    .ninjadash_dropdown-list{
        .ant-dropdown-trigger{
            font-size: 14px;
            font-weight: 400;
            color: #9299B8;
            width: 100%;
            justify-content: flex-start;
            &:not(:last-child){
                margin-bottom: 25px;
            }
        }
    }
`,p=o.div`
    .sDash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .sDash_editor{
        border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
        border-radius: 4px;
        .EditorToolbar__root___3_Aqz{
            padding: 12px 20px 0;
        }
        .DraftEditor-root{
            min-height: 100px;
            .public-DraftEditorPlaceholder-root{
                padding: 12px 20px 0;
            }
        }
        select{
            margin-top: -4px;
        }
        .Dropdown__value___34Py9{
            &:after,
            &:before{
                ${({theme:t})=>t.rtl?"right":"left"}: auto;
                ${({theme:t})=>t.rtl?"left":"right"}: 10px;
            }
        }
    }
    .sDash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`,d=o.div`
    .ant-card-body{
        padding: 30px 25px 50px 25px !important;
    }
    .ant-form-item-has-error{
        .ant-form-item-explain{
            font-size: 13px;
        }
    }
    .ant-form-item{
        .ant-form-item-label{
            >label{
                color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
            }
        }
    }
    .sDash_agree-check{
        .ant-form-item-control-input{
            min-height: auto;
        }
        .ant-form-item-has-error{
            .ant-checkbox-wrapper{
                span{
                    font-size: 13px;
                    color: ${({theme:t})=>t["danger-color"]};
                }
                .ant-checkbox{
                    border-color: ${({theme:t})=>t["danger-color"]}30;
                    &.ant-checkbox-checked{
                        border-color: ${({theme:t})=>t["danger-color"]}30;
                        &:after{
                            border-color: ${({theme:t})=>t["danger-color"]}30;
                        }
                        .ant-checkbox-inner{
                            &:after{
                                border-color: ${({theme:t})=>t["danger-color"]};
                            }
                        }
                    }
                    .ant-checkbox-inner{
                        border-color: ${({theme:t})=>t["danger-color"]}30;
                        background-color: ${({theme:t})=>t["danger-color"]}30;
                    }
                }
            }
        }
        .ant-form-item-explain{
            margin-left: 25px;
            font-size: 13px;
        }
    }
    .ninjadash-form-action{
        button{
            border-radius: 4px;
            padding: 6.4px 29.2px;
            height: 44px;
        }
    }
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, 
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover{
        background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
    }
`;export{i as C,e as D,p as F,r as H,a as V,d as a};
