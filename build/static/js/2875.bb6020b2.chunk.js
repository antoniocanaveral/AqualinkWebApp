"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2875],{88025:(e,t,n)=>{n.r(t),n.d(t,{Slider:()=>c});var a=n(54411),r=n(87094),i=n(41988),o=n(40577),l=n(9950),s=n(48463),d=n(44414);function c(e){const{defaultValue:t,range:n,min:c,max:p,step:h,input:m,icon:x,marks:u,vertical:g,defaultValues:b,onAfterChange:j,onChange:f}=e,[A,C]=(0,l.useState)({inputValue:1,mini:c,maxi:p}),y=e=>{isNaN(e)||(C({...A,inputValue:e}),f&&f(e))},{inputValue:k,value:v,mini:w,maxi:N}=A,D=((N-w)/2).toFixed(5),S=v>=D?"":"rgba(0, 0, 0, .45)",$=v>=D?"rgba(0, 0, 0, .45)":"";return m?(0,d.jsxs)(r.A,{children:[(0,d.jsx)(i.A,{xl:20,xs:24,children:(0,d.jsx)(s.SliderStyle,{min:c,max:p,onChange:y,value:"number"===typeof k?k:0,step:h})}),(0,d.jsx)(i.A,{xl:4,xs:24,children:(0,d.jsx)(o.A,{min:c,max:p,value:k,onChange:y,step:h})})]}):x?(0,d.jsxs)(s.IconWrapper,{children:[(0,d.jsx)(a.A,{style:{color:S}}),(0,d.jsx)(s.SliderStyle,{min:w,max:N,onChange:e=>{C({...A,value:e}),f&&f(e)},value:v}),(0,d.jsx)(a.A,{style:{color:$}})]}):(0,d.jsx)(s.SliderStyle,{marks:u,defaultValue:t||b,range:n,step:h,vertical:g,onAfterChange:e=>{j&&j(e)},onChange:f,max:p,min:c})}},48463:(e,t,n)=>{n.r(t),n.d(t,{IconWrapper:()=>i,SliderStyle:()=>o});var a=n(80134),r=n(19335);const i=r.Ay.div`
    position: relative;
    padding: 0px 30px;
    .anticon {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      line-height: 1;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.25);
    }      
    .anticon:first-child {
      left: 0;
    }      
    .anticon:last-child {
      right: 0;
    }
`,o=(0,r.Ay)(a.A)`

`},8755:(e,t,n)=>{n.r(t),n.d(t,{TagStyle:()=>r});var a=n(12916);const r=(0,n(19335).Ay)(a.A)`
    &.ninjadash-tag-new{
        .ant-tag{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
        }
    }
`},27785:(e,t,n)=>{n.r(t),n.d(t,{Tag:()=>d});var a=n(8750),r=n(55902),i=n(9950),o=n(8755),l=n(44414);const{CheckableTag:s}=o.TagStyle;function d(e){const[t,n]=(0,i.useState)({checked:!0,selectedTags:[]}),{closable:a,onClose:r,color:d,checked:p,onChange:h,data:m,hottags:x,animate:u,children:g}=e,b=m,{selectedTags:j}=t;return p?(0,l.jsx)(s,{props:e,checked:t.checked,onChange:e=>{n({...t,checke:e}),h&&h(e)}}):x?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{style:{marginRight:8},children:"Categories:"}),b.map((e=>(0,l.jsx)(s,{checked:j.indexOf(e)>-1,onChange:a=>((e,a)=>{const{selectedTags:r}=t,i=a?[...r,e]:r.filter((t=>t!==e));n({...t,selectedTags:i}),h&&h(i)})(e,a),children:e},e)))]}):u?(0,l.jsx)(c,{data:m,onChange:h}):(0,l.jsx)(o.TagStyle,{closable:a,onClose:e=>{r(e)},color:d,children:g})}function c(e){const{data:t,onChange:n}=e,[s,d]=(0,i.useState)({tags:t,inputVisible:!1,inputValue:""}),c=()=>{const{inputValue:e}=s;let{tags:t}=s;e&&-1===t.indexOf(e)&&(t=[...t,e]),n&&n(t),d({...s,tags:t,inputVisible:!1,inputValue:""})},{tags:p,inputVisible:h,inputValue:m}=s,x=p.map((e=>{const t=(0,l.jsx)(o.TagStyle,{closable:!0,onClose:t=>{t.preventDefault(),(e=>{const t=s.tags.filter((t=>t!==e));d({tags:t}),n&&n(t)})(e)},children:e});return(0,l.jsx)("span",{style:{display:"inline-block"},children:t},e)}));return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{marginBottom:10},children:x}),h&&(0,l.jsx)(r.A,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:m,onChange:e=>{d({...s,inputValue:e.target.value})},onBlur:c,onPressEnter:c}),!h&&(0,l.jsxs)(o.TagStyle,{className:"ninjadash-tag-new",onClick:()=>{d({...s,inputVisible:!0})},style:{borderStyle:"dashed"},children:[(0,l.jsx)(a.A,{})," New Tag"]})]})}},92875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(9950),r=n(477),i=n(48874),o=n(92759),l=n(87094),s=n(41988),d=n(87827),c=n(55902),p=n(25933),h=n(45239),m=n(42860),x=n(8743),u=n(83195),g=n(52),b=n(82370),j=n(15052),f=n.n(j),A=n(85624),C=n(67482),y=n(29355),k=n(88025),v=n(27785),w=n(59377),N=n(72449),D=n(57687),S=n(44414);const{RangePicker:$}=r.A,{Dragger:_}=i.A;const T=function(e){let{onChange:t}=e;const[n,i]=(0,a.useState)({onChangeValue:null,value:f().createEmptyValue()}),j=e=>{i({...n,onChangeValue:e})},T=()=>{},V={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange(e){const{status:t}=e.file;"done"===t?o.Ay.success(`${e.file.name} file uploaded successfully.`):"error"===t&&o.Ay.error(`${e.file.name} file upload failed.`)}};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(D.PageHeader,{title:"Form Components",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Form Components"}]}),(0,S.jsx)(C.Main,{children:(0,S.jsx)(A.FormComponentsWrap,{children:(0,S.jsxs)(l.A,{gutter:25,children:[(0,S.jsxs)(s.A,{md:12,xs:24,children:[(0,S.jsx)(y.Cards,{title:"Input Groups",className:"mb-25",children:(0,S.jsx)(C.BasicFormWrapper,{children:(0,S.jsx)(d.A,{name:"ninjadash_textarea",layout:"vertical",children:(0,S.jsxs)(l.A,{gutter:"30",children:[(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-name",children:(0,S.jsx)(c.A,{prefix:(0,S.jsx)(h.A,{}),placeholder:"Name"})})}),(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-email",children:(0,S.jsx)(c.A,{prefix:(0,S.jsx)(m.A,{}),placeholder:"Email"})})}),(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-location",children:(0,S.jsx)(c.A,{prefix:(0,S.jsx)(x.A,{}),placeholder:"Location"})})}),(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-password",children:(0,S.jsx)(c.A.Password,{prefix:(0,S.jsx)(u.A,{}),placeholder:"Password"})})}),(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-payment",children:(0,S.jsx)(c.A,{prefix:(0,S.jsx)(g.A,{}),placeholder:"Payment Method"})})}),(0,S.jsx)(s.A,{lg:12,xs:24,className:"mb-25",children:(0,S.jsx)(d.A.Item,{name:"input-phone",children:(0,S.jsx)(c.A,{prefix:(0,S.jsx)(b.A,{}),placeholder:"Phone"})})})]})})})}),(0,S.jsx)(y.Cards,{title:"Dropdowns",className:"mb-25",children:(0,S.jsx)(A.DropDownListComponents,{children:(0,S.jsxs)("div",{className:"ninjadash_dropdown-list",children:[(0,S.jsx)(w.Dropdown,{placement:"bottomLeft",children:(0,S.jsx)(N.Button,{className:"btn-outlined",size:"large",outlined:!0,type:"light",children:"Alerts"})}),(0,S.jsx)(w.Dropdown,{placement:"bottomLeft",children:(0,S.jsx)(N.Button,{className:"btn-outlined",size:"large",outlined:!0,type:"light",children:"Select an option..."})})]})})}),(0,S.jsx)(y.Cards,{title:"Datepicker",className:"mb-25",children:(0,S.jsx)("div",{className:"ninjadash_datepicker-list",children:(0,S.jsx)(C.BasicFormWrapper,{children:(0,S.jsxs)(d.A,{name:"datepicker-form",layout:"vertical",children:[(0,S.jsx)(d.A.Item,{name:"datePicker",label:"Datepicker",children:(0,S.jsx)(r.A,{})}),(0,S.jsx)(d.A.Item,{name:"rangePicker",label:"Date Range Picker",children:(0,S.jsx)($,{})})]})})})}),(0,S.jsx)(y.Cards,{title:"Text Editor",className:"mb-25",children:(0,S.jsx)("div",{className:"ninjadash_editor",children:(0,S.jsx)(f(),{placeholder:"Type your message...",value:n.value,onChange:e=>{i({...n,value:e}),t&&t(e.toString("html"))}})})})]}),(0,S.jsxs)(s.A,{md:12,xs:24,children:[(0,S.jsx)(y.Cards,{title:"Tags",className:"mb-25",children:(0,S.jsxs)("div",{className:"taglist-wrap",children:[(0,S.jsx)(v.Tag,{children:"Unremovable"}),(0,S.jsx)(v.Tag,{closable:!0,onClose:T,children:"Tag 2"}),(0,S.jsx)(v.Tag,{closable:!0,onClose:T,children:"Tag 3"})]})}),(0,S.jsx)(y.Cards,{title:"Toggle buttons",className:"mb-25",children:(0,S.jsx)(p.A,{defaultChecked:!0,size:"large"})}),(0,S.jsx)(y.Cards,{title:"Sliders",className:"mb-25",children:(0,S.jsxs)("div",{className:"ninjadash_slider-list",children:[(0,S.jsx)(k.Slider,{onChange:j,defaultValue:30}),(0,S.jsx)(k.Slider,{onChange:j,range:!0,defaultValues:[20,50]})]})}),(0,S.jsx)(y.Cards,{title:"Dropzone",className:"mb-25",children:(0,S.jsxs)("div",{className:"ninjadash_uploader-list",children:[(0,S.jsx)(_,{...V,className:"ninjadash-uploader-large",children:(0,S.jsx)("p",{className:"ant-upload-text",children:"Drop files here to upload"})}),(0,S.jsx)(_,{...V,children:(0,S.jsx)("p",{className:"ant-upload-text",children:"Drop files here to upload"})})]})})]})]})})})]})}},85624:(e,t,n)=>{n.r(t),n.d(t,{CheckListWrap:()=>o,DropDownListComponents:()=>l,FormComponentsWrap:()=>s,FormValidationWrap:()=>d,HorizontalFormStyleWrap:()=>r,VerticalFormStyleWrap:()=>i});var a=n(19335);const r=a.Ay.div`
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