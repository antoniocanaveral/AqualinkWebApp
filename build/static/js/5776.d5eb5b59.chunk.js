"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[5776],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>u});var n=r(60767),a=r(55902),l=r(48538),s=r(9950),o=r(73878),i=r(3783),c=r(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),u=s.memo((e=>{const{rtl:t}=(0,o.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:s,patternButtons:u,width:h,onSearch:x,options:m,placeholder:g}=e,f=(null===m||void 0===m?void 0:m.length)>0&&m.map((e=>{const{title:t,count:r}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),y=e=>{x(e)};return r?(0,c.jsx)(i.AutoCompleteStyled,{options:m,style:{width:h},onSelect:d,onSearch:y,children:r}):s?(0,c.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:f,placeholder:g,onSearch:y,children:(0,c.jsx)(a.A,{suffix:u?(0,c.jsx)(l.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(n.A,{})}):(0,c.jsx)(n.A,{})})}):(0,c.jsx)(i.AutoCompleteStyled,{options:m,style:{width:h},onSelect:d,onSearch:y,placeholder:g})}));u.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>j});var n=r(58168),a=r(82284),l=r(5544),s=r(48738),o=r.n(s),i=r(50604),c=r(15207),d=r(9950),p=r(5741),u=r(99674),h=r(39156),x=u.A.Option;function m(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var r,s=e.prefixCls,g=e.className,f=e.popupClassName,y=e.dropdownClassName,j=e.children,b=e.dataSource,w=(0,i.A)(j);if(1===w.length&&(0,h.zO)(w[0])&&!m(w[0])){var A=(0,l.A)(w,1);r=A[0]}var v,C=r?function(){return r}:void 0;return v=w.length&&m(w[0])?j:b?b.map((function(e){if((0,h.zO)(e))return e;switch((0,a.A)(e)){case"string":return d.createElement(x,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(x,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(r){var a=(0,r.getPrefixCls)("select",s);return d.createElement(u.A,(0,n.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:a,popupClassName:f||y,className:o()("".concat(a,"-auto-complete"),g),mode:u.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:C}),v)}))},f=d.forwardRef(g);f.Option=x;const y=f;const j=(0,r(19335).Ay)(y)`
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
`},75776:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(9950),a=r(73878),l=r(87094),s=r(41988),o=r(32212),i=r(24893),c=r(90650),d=r(42074),p=r(28429),u=r(10356),h=r(58072),x=r(57687),m=r(67482),g=r(91),f=r(34503),y=r(16358),j=r(29355),b=r(44414);const w=(0,n.lazy)((()=>Promise.all([r.e(4380),r.e(8719)]).then(r.bind(r,58719)))),A=(0,n.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(4185),r.e(290),r.e(4360),r.e(7291),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(3149)]).then(r.bind(r,10742)))),v=(0,n.lazy)((()=>Promise.all([r.e(5059),r.e(8045),r.e(8573),r.e(4380),r.e(7848),r.e(7149),r.e(6279),r.e(8623),r.e(5139),r.e(6934),r.e(1741),r.e(9696),r.e(8143),r.e(656),r.e(777),r.e(884),r.e(538),r.e(2671),r.e(1717),r.e(3780),r.e(9556),r.e(37),r.e(4185),r.e(290),r.e(4360),r.e(7291),r.e(6233),r.e(3917),r.e(3548),r.e(9537),r.e(5267),r.e(2661),r.e(5727),r.e(9644),r.e(3149)]).then(r.bind(r,36550))));const C=function(){const e=(0,a.wA)(),t=(0,a.d4)((e=>e.headerSearchData)),[r,C]=(0,n.useState)({notData:t,active:"active"}),{notData:S}=r;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.PageHeader,{title:"Shop",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"products"}]}),(0,b.jsx)(m.Main,{children:(0,b.jsxs)(l.A,{gutter:30,children:[(0,b.jsx)(s.A,{className:"product-sidebar-col",xxl:5,xl:7,lg:7,md:10,xs:24,children:(0,b.jsx)(n.Suspense,{fallback:(0,b.jsx)(j.Cards,{headless:!0,children:(0,b.jsx)(o.A,{paragraph:{rows:22},active:!0})}),children:(0,b.jsx)(w,{})})}),(0,b.jsxs)(s.A,{className:"product-content-col",xxl:19,lg:17,md:14,xs:24,children:[(0,b.jsx)(f.TopToolBox,{children:(0,b.jsxs)(l.A,{gutter:0,children:[(0,b.jsx)(s.A,{xxl:7,lg:12,xs:24,children:(0,b.jsx)(g.AutoComplete,{onSearch:e=>{const n=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));C({...r,notData:n})},dataSource:S,placeholder:"Search",width:"100%",patterns:!0})}),(0,b.jsx)(s.A,{xxl:7,lg:12,xs:24,children:(0,b.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),(0,b.jsx)(s.A,{xxl:10,xs:24,children:(0,b.jsxs)("div",{className:"product-list-action d-flex justify-content-between align-items-center",children:[(0,b.jsxs)("div",{className:"product-list-action__tab",children:[(0,b.jsx)("span",{className:"toolbox-menu-title",children:"Sort by:"}),(0,b.jsxs)(i.Ay.Group,{onChange:t=>{e((0,y.sorting)(t.target.value))},defaultValue:"rate",children:[(0,b.jsx)(i.Ay.Button,{value:"rate",children:"Top Rated"}),(0,b.jsx)(i.Ay.Button,{value:"popular",children:"Popular"}),(0,b.jsx)(i.Ay.Button,{value:"time",children:"Newest"}),(0,b.jsx)(i.Ay.Button,{value:"price",children:"Price"})]})]}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,b.jsxs)("div",{className:"product-list-action__viewmode",children:[(0,b.jsx)(d.k2,{to:"./grid",children:(0,b.jsx)(u.A,{})}),(0,b.jsx)(d.k2,{to:"./list",children:(0,b.jsx)(h.A,{})})]})]})})]})}),(0,b.jsx)(n.Suspense,{fallback:(0,b.jsx)("div",{className:"spin d-flex align-center-v",children:(0,b.jsx)(c.A,{})}),children:(0,b.jsxs)(p.BV,{children:[(0,b.jsx)(p.qh,{index:!0,element:(0,b.jsx)(A,{})}),(0,b.jsx)(p.qh,{path:"grid",element:(0,b.jsx)(A,{})}),(0,b.jsx)(p.qh,{path:"list",element:(0,b.jsx)(v,{})})]})})]})]})})]})}},16358:(e,t,r)=>{r.r(t),r.d(t,{filterByBrand:()=>y,filterByCategory:()=>j,filterByPriceRange:()=>g,filterByRating:()=>f,filterSinglePage:()=>x,sorting:()=>m,updateWishList:()=>b});var n=r(65571),a=r(44199);const{singleProductBegin:l,singleProductSuccess:s,singleProductErr:o,filterProductBegin:i,filterProductSuccess:c,filterProductErr:d,sortingProductBegin:p,sortingProductSuccess:u,sortingProductErr:h}=n.default,x=(e,t)=>async r=>{try{r(l());const n=t.filter((t=>t.id===e));r(s(n))}catch(n){r(o(n))}},m=e=>async t=>{try{t(p()),setTimeout((()=>{const r=a.sort(((t,r)=>r[e]-t[e]));t(u(r))}),100)}catch(r){t(h(r))}},g=e=>async t=>{t(i());try{const r=a.filter((t=>t.price>=e[0]&&t.price<=e[1]));t(c(r))}catch(r){t(d(r))}},f=e=>async t=>{try{t(i()),setTimeout((()=>{const r=a.filter((t=>e[0].length?e[0].includes(t.rate):a));t(c(r))}),100)}catch(r){t(d(r))}},y=e=>async t=>{try{t(i()),setTimeout((()=>{const r=a.filter((t=>e[0].length?e[0].includes(t.brand):a));t(c(r))}),100)}catch(r){t(d(r))}},j=e=>async t=>{try{t(i()),setTimeout((()=>{const r=a.filter((t=>"all"!==e?t.category===e:a));t(c(r))}),100)}catch(r){t(d(r))}},b=e=>async t=>{try{t(i()),a.map((r=>r.id===e?r.popular?r.popular=!1:r.popular=!0:t(c(a))))}catch(r){t(d(r))}}}}]);