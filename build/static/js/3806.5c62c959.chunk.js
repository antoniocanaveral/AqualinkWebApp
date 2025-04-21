"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3806],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>h});var a=r(60767),n=r(55902),s=r(48538),l=r(9950),o=r(73878),i=r(3783),c=r(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=l.memo((e=>{const{rtl:t}=(0,o.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:l,patternButtons:h,width:u,onSearch:x,options:m,placeholder:g}=e,j=(null===m||void 0===m?void 0:m.length)>0&&m.map((e=>{const{title:t,count:r}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),f=e=>{x(e)};return r?(0,c.jsx)(i.AutoCompleteStyled,{options:m,style:{width:u},onSelect:d,onSearch:f,children:r}):l?(0,c.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:u},options:j,placeholder:g,onSearch:f,children:(0,c.jsx)(n.A,{suffix:h?(0,c.jsx)(s.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(a.A,{})}):(0,c.jsx)(a.A,{})})}):(0,c.jsx)(i.AutoCompleteStyled,{options:m,style:{width:u},onSelect:d,onSearch:f,placeholder:g})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>b});var a=r(58168),n=r(82284),s=r(5544),l=r(48738),o=r.n(l),i=r(50604),c=r(15207),d=r(9950),p=r(5741),h=r(99674),u=r(39156),x=h.A.Option;function m(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var r,l=e.prefixCls,g=e.className,j=e.popupClassName,f=e.dropdownClassName,b=e.children,C=e.dataSource,y=(0,i.A)(b);if(1===y.length&&(0,u.zO)(y[0])&&!m(y[0])){var A=(0,s.A)(y,1);r=A[0]}var S,v=r?function(){return r}:void 0;return S=y.length&&m(y[0])?b:C?C.map((function(e){if((0,u.zO)(e))return e;switch((0,n.A)(e)){case"string":return d.createElement(x,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(x,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(r){var n=(0,r.getPrefixCls)("select",l);return d.createElement(h.A,(0,a.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:n,popupClassName:j||f,className:o()("".concat(n,"-auto-complete"),g),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:v}),S)}))},j=d.forwardRef(g);j.Option=x;const f=j;const b=(0,r(19335).Ay)(f)`
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
`},63806:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var a=r(9950),n=r(73878),s=r(41988),l=r(32212),o=r(87094),i=r(7037),c=r(78732),d=r(10356),p=r(58072),h=r(11876),u=r(96457),x=r(42074),m=r(28429),g=r(8603),j=r(57687),f=r(67482),b=r(91),C=r(72449),y=r(29355),A=r(44414);const S=(0,a.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(1313)]).then(r.bind(r,82259)))),v=(0,a.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(1313)]).then(r.bind(r,60698)))),w=(0,a.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(1313)]).then(r.bind(r,35099)))),k=(0,a.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(6522),r.e(290),r.e(4360),r.e(7291),r.e(4503),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(9944),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(1313)]).then(r.bind(r,30684))));const N=function(){const{searchData:e,users:t,userGroup:r}=(0,n.d4)((e=>({searchData:e.headerSearchData,users:e.users,userGroup:e.userGroup}))),N=".",[$,O]=(0,a.useState)({notData:e,current:0,pageSize:0,page:0}),{notData:z}=$,D=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(s.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(y.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(S,{user:e})})},t)})))),E=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(s.A,{xxl:12,xl:12,sm:24,xs:24,children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(y.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(w,{user:e})})},t)})))),U=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(s.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(y.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(v,{user:e})})},t)})))),P=a.memo((()=>r.map((e=>{const{id:t}=e;return(0,A.jsx)(s.A,{xxl:8,md:12,sm:24,xs:24,children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(y.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(k,{user:e})})},t)}))));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.CardToolbox,{children:(0,A.jsx)(g.UserCarrdTop,{children:(0,A.jsx)(j.PageHeader,{ghost:!0,title:"Users Card",subTitle:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("span",{className:"title-counter",children:"274 Users "}),(0,A.jsx)(b.AutoComplete,{onSearch:t=>{const r=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));O({...$,notData:r})},dataSource:z,placeholder:"Search by Name",width:"100%",patterns:!0})]}),buttons:[(0,A.jsx)(C.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,A.jsxs)(x.N_,{to:"/admin/users/add-user/info",children:[(0,A.jsx)(c.A,{})," Add New User"]})},"1"),(0,A.jsx)(x.k2,{className:"action-btn",to:`${N}/grid`,children:(0,A.jsx)(d.A,{})},"2"),(0,A.jsx)(x.k2,{className:"action-btn",to:`${N}/list`,children:(0,A.jsx)(p.A,{})},"3"),(0,A.jsx)(x.k2,{className:"action-btn",to:`${N}/grid-style`,children:(0,A.jsx)(u.A,{})},"4"),(0,A.jsx)(x.k2,{className:"action-btn",to:`${N}/grid-group`,children:(0,A.jsx)(h.A,{})},"5")]})})}),(0,A.jsx)(f.Main,{children:(0,A.jsx)(g.UsercardWrapper,{children:(0,A.jsxs)(o.A,{gutter:25,children:[(0,A.jsxs)(m.BV,{children:[(0,A.jsx)(m.qh,{path:"grid",element:(0,A.jsx)(D,{})}),(0,A.jsx)(m.qh,{path:"list",element:(0,A.jsx)(E,{})}),(0,A.jsx)(m.qh,{path:"grid-group",element:(0,A.jsx)(P,{})}),(0,A.jsx)(m.qh,{path:"grid-style",element:(0,A.jsx)(U,{})})]}),(0,A.jsx)(s.A,{xs:24,children:(0,A.jsx)("div",{className:"user-card-pagination",children:(0,A.jsx)(i.A,{onChange:e=>{O({...$,page:e})},showSizeChanger:!0,onShowSizeChange:(e,t)=>{O({...$,current:e,pageSize:t})},defaultCurrent:6,total:500})})})]})})})]})}}}]);