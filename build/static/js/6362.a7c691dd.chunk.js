"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6362],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>h});var a=r(60767),n=r(55902),l=r(48538),i=r(9950),o=r(73878),s=r(3783),c=r(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=i.memo((e=>{const{rtl:t}=(0,o.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:i,patternButtons:h,width:u,onSearch:x,options:m,placeholder:j}=e,g=(null===m||void 0===m?void 0:m.length)>0&&m.map((e=>{const{title:t,count:r}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),v=e=>{x(e)};return r?(0,c.jsx)(s.AutoCompleteStyled,{options:m,style:{width:u},onSelect:d,onSearch:v,children:r}):i?(0,c.jsx)(s.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:u},options:g,placeholder:j,onSearch:v,children:(0,c.jsx)(n.A,{suffix:h?(0,c.jsx)(l.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(a.A,{})}):(0,c.jsx)(a.A,{})})}):(0,c.jsx)(s.AutoCompleteStyled,{options:m,style:{width:u},onSelect:d,onSearch:v,placeholder:j})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>y});var a=r(58168),n=r(82284),l=r(5544),i=r(48738),o=r.n(i),s=r(50604),c=r(15207),d=r(9950),p=r(5741),h=r(99674),u=r(39156),x=h.A.Option;function m(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var j=function(e,t){var r,i=e.prefixCls,j=e.className,g=e.popupClassName,v=e.dropdownClassName,y=e.children,f=e.dataSource,C=(0,s.A)(y);if(1===C.length&&(0,u.zO)(C[0])&&!m(C[0])){var A=(0,l.A)(C,1);r=A[0]}var b,N=r?function(){return r}:void 0;return b=C.length&&m(C[0])?y:f?f.map((function(e){if((0,u.zO)(e))return e;switch((0,n.A)(e)){case"string":return d.createElement(x,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(x,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(r){var n=(0,r.getPrefixCls)("select",i);return d.createElement(h.A,(0,a.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:n,popupClassName:g||v,className:o()("".concat(n,"-auto-complete"),j),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:N}),b)}))},g=d.forwardRef(j);g.Option=x;const v=g;const y=(0,r(19335).Ay)(v)`
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
`},6362:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var a=r(9950),n=r(73878),l=r(87094),i=r(41988),o=r(99674),s=r(90650),c=r(42074),d=r(28429),p=r(78732),h=r(10356),u=r(58072),x=r(64522),m=r(55962),j=r(91),g=r(72449),v=r(5332),y=r(67482),f=r(57687),C=r(44414);const A=(0,a.lazy)((()=>r.e(6799).then(r.bind(r,36799)))),b=(0,a.lazy)((()=>r.e(3063).then(r.bind(r,23063))));const N=function(){const e=(0,n.wA)(),t=(0,n.d4)((e=>e.headerSearchData)),[r,N]=(0,a.useState)({notData:t,visible:!1,categoryActive:"all"}),{notData:S,visible:w}=r,k=t=>{N({...r,categoryActive:t}),e((0,v.filterProjectByStatus)(t))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.ProjectHeader,{children:(0,C.jsx)(f.PageHeader,{ghost:!0,title:"Projects",subTitle:(0,C.jsx)(C.Fragment,{children:"12 Running Projects"}),buttons:[(0,C.jsxs)(g.Button,{onClick:()=>{N({...r,visible:!0})},type:"primary",size:"default",children:[(0,C.jsx)(p.A,{})," Create Projects"]},"1")]})}),(0,C.jsxs)(y.Main,{children:[(0,C.jsx)(l.A,{gutter:25,children:(0,C.jsxs)(i.A,{xs:24,children:[(0,C.jsx)(m.ProjectSorting,{children:(0,C.jsxs)("div",{className:"project-sort-bar",children:[(0,C.jsx)("div",{className:"project-sort-nav",children:(0,C.jsx)("nav",{children:(0,C.jsxs)("ul",{children:[(0,C.jsx)("li",{className:"all"===r.categoryActive?"active":"deactivate",children:(0,C.jsx)(c.N_,{onClick:()=>k("all"),to:"#",children:"All"})}),(0,C.jsx)("li",{className:"progress"===r.categoryActive?"active":"deactivate",children:(0,C.jsx)(c.N_,{onClick:()=>k("progress"),to:"#",children:"In Progress"})}),(0,C.jsx)("li",{className:"complete"===r.categoryActive?"active":"deactivate",children:(0,C.jsx)(c.N_,{onClick:()=>k("complete"),to:"#",children:"Complete"})}),(0,C.jsx)("li",{className:"late"===r.categoryActive?"active":"deactivate",children:(0,C.jsx)(c.N_,{onClick:()=>k("late"),to:"#",children:"Late"})}),(0,C.jsx)("li",{className:"early"===r.categoryActive?"active":"deactivate",children:(0,C.jsx)(c.N_,{onClick:()=>k("early"),to:"#",children:"Early"})})]})})}),(0,C.jsx)("div",{className:"project-sort-search",children:(0,C.jsx)(j.AutoComplete,{onSearch:e=>{const a=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));N({...r,notData:a})},dataSource:S,placeholder:"Search projects",patterns:!0})}),(0,C.jsx)("div",{className:"project-sort-group",children:(0,C.jsxs)("div",{className:"sort-group",children:[(0,C.jsx)("span",{children:"Sort By:"}),(0,C.jsxs)(o.A,{onChange:t=>{e((0,v.sortingProjectByCategory)(t))},defaultValue:"category",children:[(0,C.jsx)(o.A.Option,{value:"category",children:"Project Category"}),(0,C.jsx)(o.A.Option,{value:"rate",children:"Top Rated"}),(0,C.jsx)(o.A.Option,{value:"popular",children:"Popular"}),(0,C.jsx)(o.A.Option,{value:"time",children:"Newest"}),(0,C.jsx)(o.A.Option,{value:"price",children:"Price"})]}),(0,C.jsxs)("div",{className:"layout-style",children:[(0,C.jsx)(c.k2,{to:"./grid",children:(0,C.jsx)(h.A,{})}),(0,C.jsx)(c.k2,{to:"./list",children:(0,C.jsx)(u.A,{})})]})]})})]})}),(0,C.jsx)("div",{children:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)("div",{className:"spin",children:(0,C.jsx)(s.A,{})}),children:(0,C.jsxs)(d.BV,{children:[(0,C.jsx)(d.qh,{index:!0,element:(0,C.jsx)(A,{})}),(0,C.jsx)(d.qh,{path:"grid",element:(0,C.jsx)(A,{})}),(0,C.jsx)(d.qh,{path:"list",element:(0,C.jsx)(b,{})})]})})})]})}),(0,C.jsx)(x.default,{onCancel:()=>{N({...r,visible:!1})},visible:w})]})]})}}}]);