"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9168],{89168:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});r(9950);var a=r(87827),n=r(87094),i=r(41988),o=r(55902),l=r(52765),s=r(48538),d=r(85624),m=r(67482),c=r(29355),p=r(57687),h=r(44414);const x=function(){function e(){}const[t]=a.A.useForm();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.PageHeader,{title:"Form Validation",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Form Validation"}]}),(0,h.jsx)(m.Main,{children:(0,h.jsxs)(n.A,{gutter:25,children:[(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(d.FormValidationWrap,{children:(0,h.jsx)(d.VerticalFormStyleWrap,{children:(0,h.jsx)(c.Cards,{title:"Custom Styles",children:(0,h.jsxs)(a.A,{name:"sDash_validation-form",form:t,layout:"vertical",validateMessages:{types:{city:"",state:"",zip:"",checkbox:""}},children:[(0,h.jsxs)(n.A,{gutter:30,children:[(0,h.jsx)(i.A,{md:8,xs:24,children:(0,h.jsx)(a.A.Item,{name:"f-name",label:"First Name",rules:[{required:!0,message:"First Name required!"}],children:(0,h.jsx)(o.A,{placeholder:"First Name"})})}),(0,h.jsx)(i.A,{md:8,xs:24,children:(0,h.jsx)(a.A.Item,{name:"l-name",label:"Last Name",rules:[{required:!0,message:"Last Name required!"}],children:(0,h.jsx)(o.A,{placeholder:"Last Name"})})}),(0,h.jsx)(i.A,{md:8,xs:24,children:(0,h.jsx)(a.A.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Username required!"}],children:(0,h.jsx)(o.A,{placeholder:"Username"})})}),(0,h.jsx)(i.A,{md:12,xs:24,children:(0,h.jsx)(a.A.Item,{name:"city",label:"City",rules:[{type:"city"}],children:(0,h.jsx)(o.A,{placeholder:"City"})})}),(0,h.jsx)(i.A,{md:6,xs:24,children:(0,h.jsx)(a.A.Item,{name:"state",label:"State",rules:[{type:"state"}],children:(0,h.jsx)(o.A,{placeholder:"State"})})}),(0,h.jsx)(i.A,{md:6,xs:24,children:(0,h.jsx)(a.A.Item,{name:"zip-code",label:"Zip",rules:[{type:"zip"}],children:(0,h.jsx)(o.A,{placeholder:"Zip"})})})]}),(0,h.jsx)("div",{className:"sDash_agree-check",children:(0,h.jsx)(a.A.Item,{rules:[{type:"checkbox"}],children:(0,h.jsx)(l.A,{onChange:e,children:"Agree to terms and conditions"})})}),(0,h.jsx)("div",{className:"ninjadash-form-action mt-20",children:(0,h.jsx)(s.A,{htmlType:"submit",type:"primary",size:"large",children:"Submit Form"})})]})})})})}),(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(d.FormValidationWrap,{children:(0,h.jsx)(d.VerticalFormStyleWrap,{children:(0,h.jsx)(c.Cards,{title:"Server Side",children:(0,h.jsxs)(a.A,{name:"ninjadash-vertical-form",layout:"vertical",children:[(0,h.jsxs)(n.A,{gutter:30,children:[(0,h.jsx)(i.A,{md:8,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"f-name2",label:"First Name",initialValue:"Duran",validateStatus:"success",help:"Looks good!",children:(0,h.jsx)(o.A,{placeholder:"First Name"})})}),(0,h.jsx)(i.A,{md:8,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"l-name2",label:"Last Name",initialValue:"Clayton",validateStatus:"success",help:"Looks good!",children:(0,h.jsx)(o.A,{placeholder:"Last Name"})})}),(0,h.jsx)(i.A,{md:8,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"username2",label:"Username",validateStatus:"error",children:(0,h.jsx)(o.A,{placeholder:"Username"})})}),(0,h.jsx)(i.A,{md:12,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"city2",label:"City",help:"Please provide a valid city.",validateStatus:"error",children:(0,h.jsx)(o.A,{placeholder:"City"})})}),(0,h.jsx)(i.A,{md:6,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"state2",label:"State",help:"Please provide a valid state.",validateStatus:"error",children:(0,h.jsx)(o.A,{placeholder:"State"})})}),(0,h.jsx)(i.A,{md:6,xs:24,className:"mb-20",children:(0,h.jsx)(a.A.Item,{name:"zip-code2",label:"Zip",help:"Please provide a valid zip.",validateStatus:"error",children:(0,h.jsx)(o.A,{placeholder:"Zip"})})})]}),(0,h.jsx)("div",{className:"sDash_agree-check mb-20",children:(0,h.jsx)(a.A.Item,{help:"You must agree before submitting.",validateStatus:"error",children:(0,h.jsx)(l.A,{onChange:e,children:"Agree to terms and conditions"})})}),(0,h.jsx)(n.A,{children:(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(a.A.Item,{name:"password",validateStatus:"error",children:(0,h.jsx)(o.A,{placeholder:"Password"})})})}),(0,h.jsx)("div",{className:"ninjadash-form-action",children:(0,h.jsx)(s.A,{type:"primary",size:"large",children:"Submit Form"})})]})})})})})]})})]})}},85624:(e,t,r)=>{r.r(t),r.d(t,{CheckListWrap:()=>o,DropDownListComponents:()=>l,FormComponentsWrap:()=>s,FormValidationWrap:()=>d,HorizontalFormStyleWrap:()=>n,VerticalFormStyleWrap:()=>i});var a=r(19335);const n=a.Ay.div`
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
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
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
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                }
            }
            .ant-btn-light{
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
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
`,i=a.Ay.div`
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
        color: ${e=>{let{theme:t}=e;return t["gray-color"]}};
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
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
        }
    }
`,o=a.Ay.div`
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
`,l=a.Ay.div`
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
`,s=a.Ay.div`
    .sDash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .sDash_editor{
        border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
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
                ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: auto;
                ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 10px;
            }
        }
    }
    .sDash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`,d=a.Ay.div`
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
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
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
                    color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
                }
                .ant-checkbox{
                    border-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}30;
                    &.ant-checkbox-checked{
                        border-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}30;
                        &:after{
                            border-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}30;
                        }
                        .ant-checkbox-inner{
                            &:after{
                                border-color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
                            }
                        }
                    }
                    .ant-checkbox-inner{
                        border-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}30;
                        background-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}30;
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
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}};
    }
`}}]);