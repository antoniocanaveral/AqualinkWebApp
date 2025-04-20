"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9496],{91:(t,e,r)=>{r.r(e),r.d(e,{AutoComplete:()=>u});var n=r(60767),a=r(55902),o=r(48538),l=r(9950),s=r(73878),i=r(3783),p=r(44414);const c=()=>{},d=(t,e)=>({value:t,label:(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[t,e]})}),u=l.memo((t=>{const{rtl:e}=(0,s.d4)((t=>({rtl:t.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:l,patternButtons:u,width:h,onSearch:m,options:x,placeholder:C}=t,g=(null===x||void 0===x?void 0:x.length)>0&&x.map((t=>{const{title:e,count:r}=t;return{label:e,options:[d(e,(0,p.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),f=t=>{m(t)};return r?(0,p.jsx)(i.AutoCompleteStyled,{options:x,style:{width:h},onSelect:c,onSearch:f,children:r}):l?(0,p.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:g,placeholder:C,onSearch:f,children:(0,p.jsx)(a.A,{suffix:u?(0,p.jsx)(o.A,{className:"search-btn",style:{[e?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,p.jsx)(n.A,{})}):(0,p.jsx)(n.A,{})})}):(0,p.jsx)(i.AutoCompleteStyled,{options:x,style:{width:h},onSelect:c,onSearch:f,placeholder:C})}));u.defaultProps={width:"350px",placeholder:"Input here"}},3783:(t,e,r)=>{r.r(e),r.d(e,{AutoCompleteStyled:()=>j});var n=r(58168),a=r(82284),o=r(5544),l=r(48738),s=r.n(l),i=r(50604),p=r(15207),c=r(9950),d=r(5741),u=r(99674),h=r(39156),m=u.A.Option;function x(t){return t&&t.type&&(t.type.isSelectOption||t.type.isSelectOptGroup)}var C=function(t,e){var r,l=t.prefixCls,C=t.className,g=t.popupClassName,f=t.dropdownClassName,j=t.children,A=t.dataSource,b=(0,i.A)(j);if(1===b.length&&(0,h.zO)(b[0])&&!x(b[0])){var y=(0,o.A)(b,1);r=y[0]}var S,w=r?function(){return r}:void 0;return S=b.length&&x(b[0])?j:A?A.map((function(t){if((0,h.zO)(t))return t;switch((0,a.A)(t)){case"string":return c.createElement(m,{key:t,value:t},t);case"object":var e=t.value;return c.createElement(m,{key:e,value:e},t.text);default:return}})):[],c.createElement(d.TG,null,(function(r){var a=(0,r.getPrefixCls)("select",l);return c.createElement(u.A,(0,n.A)({ref:e},(0,p.A)(t,["dataSource"]),{prefixCls:a,popupClassName:g||f,className:s()("".concat(a,"-auto-complete"),C),mode:u.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:w}),S)}))},g=c.forwardRef(C);g.Option=m;const f=g;const j=(0,r(19335).Ay)(f)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 23px;
            padding: 0 !important;
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                    input{
                        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
                    }
                }
            }
            textarea{
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0 !important;
    }
    .ant-select-selection-search{
        ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 20px;
        width: auto;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
        textarea.ant-input{
            padding: 12px 20px;
        }
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
        input{
            height: 38px !important;
        }
        .ant-input-suffix{
            height: auto;
            border-radius: ${t=>{let{theme:e}=t;return e.rtl?"4px 0 0 4px":"0 4px 4px 0"}}; 
            svg,
            i{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            }
            .search-btn{
                height: 38px;
                border-radius: 0px 4px 4px 0px;
                svg,
                i{
                    color: #fff !important;
                }
            }
        }
    }
`},29496:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var n=r(9950),a=r(55902),o=r(87094),l=r(41988),s=r(73878),i=r(57687),p=r(67482),c=r(29355),d=r(91),u=r(44414);const{TextArea:h}=a.A;const m=function(){const t=(0,s.d4)((t=>t.headerSearchData)),[e,r]=(0,n.useState)({dataSource:[],notData:t}),{dataSource:a,notData:m}=e,x=e=>{let n=[];const a=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));a.length?a.map((t=>n.push({value:t.title}))):n=[{value:"Data Not Found!"}],r({dataSource:e?n:[]})},C=e=>{const n=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));r({notData:n})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.PageHeader,{title:"AutoComplete",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"AutoComplete"}]}),(0,u.jsx)(p.Main,{children:(0,u.jsx)(p.AutoCompleteWrapper,{children:(0,u.jsxs)(o.A,{gutter:25,children:[(0,u.jsxs)(l.A,{md:12,sm:24,xs:24,children:[(0,u.jsx)(c.Cards,{title:"Basic Usage",children:(0,u.jsxs)("div",{className:"auto-complete-input",children:[(0,u.jsx)(d.AutoComplete,{options:a,onSearch:x}),(0,u.jsx)(d.AutoComplete,{options:a,onSearch:x})]})}),(0,u.jsx)(c.Cards,{title:"Customize Input Component",children:(0,u.jsx)("div",{className:"auto-complete-input",children:(0,u.jsx)(d.AutoComplete,{customComponent:(0,u.jsx)(h,{placeholder:"input here",className:"custom",style:{height:50}}),options:a,onSearch:x})})}),(0,u.jsx)(c.Cards,{title:"Lookup-Patterns - Certain Category",children:(0,u.jsx)(d.AutoComplete,{onSearch:C,options:m,width:"100%",patterns:!0})})]}),(0,u.jsxs)(l.A,{md:12,sm:24,xs:24,children:[(0,u.jsx)("div",{className:"auto-complete-input",children:(0,u.jsx)(c.Cards,{title:"Customize",children:(0,u.jsx)(d.AutoComplete,{options:a,onSearch:x})})}),(0,u.jsx)(c.Cards,{title:"Lookup-Patterns - Uncertain Category",children:(0,u.jsx)(d.AutoComplete,{options:m,onSearch:C,width:"100%",patterns:!0,patternButtons:!0})})]})]})})})]})}}}]);