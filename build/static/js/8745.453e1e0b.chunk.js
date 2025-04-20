"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8745],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>h});var n=r(60767),a=r(55902),o=r(48538),l=r(9950),s=r(73878),i=r(3783),c=r(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=l.memo((e=>{const{rtl:t}=(0,s.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:l,patternButtons:h,width:u,onSearch:m,options:x,placeholder:g}=e,f=(null===x||void 0===x?void 0:x.length)>0&&x.map((e=>{const{title:t,count:r}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),b=e=>{m(e)};return r?(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:u},onSelect:d,onSearch:b,children:r}):l?(0,c.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:u},options:f,placeholder:g,onSearch:b,children:(0,c.jsx)(a.A,{suffix:h?(0,c.jsx)(o.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(n.A,{})}):(0,c.jsx)(n.A,{})})}):(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:u},onSelect:d,onSearch:b,placeholder:g})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>j});var n=r(58168),a=r(82284),o=r(5544),l=r(48738),s=r.n(l),i=r(50604),c=r(15207),d=r(9950),p=r(5741),h=r(99674),u=r(39156),m=h.A.Option;function x(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var r,l=e.prefixCls,g=e.className,f=e.popupClassName,b=e.dropdownClassName,j=e.children,C=e.dataSource,y=(0,i.A)(j);if(1===y.length&&(0,u.zO)(y[0])&&!x(y[0])){var w=(0,o.A)(y,1);r=w[0]}var A,S=r?function(){return r}:void 0;return A=y.length&&x(y[0])?j:C?C.map((function(e){if((0,u.zO)(e))return e;switch((0,a.A)(e)){case"string":return d.createElement(m,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(m,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(r){var a=(0,r.getPrefixCls)("select",l);return d.createElement(h.A,(0,n.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:a,popupClassName:f||b,className:s()("".concat(a,"-auto-complete"),g),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:S}),A)}))},f=d.forwardRef(g);f.Option=m;const b=f;const j=(0,r(19335).Ay)(b)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}};
        ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 23px;
            padding: 0 !important;
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
            border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                    input{
                        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                    }
                }
            }
            textarea{
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 0 !important;
    }
    .ant-select-selection-search{
        ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 20px;
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
            border-radius: ${e=>{let{theme:t}=e;return t.rtl?"4px 0 0 4px":"0 4px 4px 0"}}; 
            svg,
            i{
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
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
`},28745:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(9950),a=r(73878),o=r(87094),l=r(41988),s=r(32212),i=r(78732),c=r(83587),d=r(90556),p=r(34574),h=r(42074),u=r(57687),m=r(67482),x=r(91),g=r(29355),f=r(44414);const b=function(){const{searchData:e,team:t}=(0,a.d4)((e=>({searchData:e.headerSearchData,team:e.team.data}))),[b,j]=(0,n.useState)({notData:e}),{notData:C}=b,y=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h.N_,{to:"#",children:[(0,f.jsx)(c.A,{}),(0,f.jsx)("span",{children:"View"})]}),(0,f.jsxs)(h.N_,{to:"#",children:[(0,f.jsx)(d.A,{}),(0,f.jsx)("span",{children:"Edit"})]}),(0,f.jsxs)(h.N_,{to:"#",children:[(0,f.jsx)(p.A,{}),(0,f.jsx)("span",{children:"Delete"})]})]});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.CardToolbox,{children:(0,f.jsx)(u.PageHeader,{backIcon:!1,title:"Team Members",subTitle:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"title-counter",children:"274 Users"}),(0,f.jsx)(x.AutoComplete,{onSearch:t=>{const r=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));j({...b,notData:r})},dataSource:C,width:"100%",placeholder:"Search by Name",patterns:!0})]}),buttons:[(0,f.jsxs)(h.N_,{to:"/admin/users/add-user/info",className:"btn-add_new",children:[(0,f.jsx)(i.A,{})," Add New Member"]})]})}),(0,f.jsx)(m.Main,{children:(0,f.jsx)(o.A,{gutter:25,children:t.map((e=>{const t=(0,n.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(2134),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(5052)]).then(r.bind(r,89025)))),{id:a}=e;return(0,f.jsx)(l.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(g.Cards,{headless:!0,children:(0,f.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,f.jsx)(t,{actions:y,user:e})})},a)}))})})]})}}}]);