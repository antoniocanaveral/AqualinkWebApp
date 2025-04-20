"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4369],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>u});var a=r(60767),n=r(55902),s=r(48538),o=r(9950),l=r(73878),i=r(3783),c=r(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),u=o.memo((e=>{const{rtl:t}=(0,l.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:o,patternButtons:u,width:h,onSearch:m,options:x,placeholder:g}=e,f=(null===x||void 0===x?void 0:x.length)>0&&x.map((e=>{const{title:t,count:r}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),y=e=>{m(e)};return r?(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:h},onSelect:d,onSearch:y,children:r}):o?(0,c.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:f,placeholder:g,onSearch:y,children:(0,c.jsx)(n.A,{suffix:u?(0,c.jsx)(s.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(a.A,{})}):(0,c.jsx)(a.A,{})})}):(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:h},onSelect:d,onSearch:y,placeholder:g})}));u.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>j});var a=r(58168),n=r(82284),s=r(5544),o=r(48738),l=r.n(o),i=r(50604),c=r(15207),d=r(9950),p=r(5741),u=r(99674),h=r(39156),m=u.A.Option;function x(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var r,o=e.prefixCls,g=e.className,f=e.popupClassName,y=e.dropdownClassName,j=e.children,b=e.dataSource,A=(0,i.A)(j);if(1===A.length&&(0,h.zO)(A[0])&&!x(A[0])){var w=(0,s.A)(A,1);r=w[0]}var C,S=r?function(){return r}:void 0;return C=A.length&&x(A[0])?j:b?b.map((function(e){if((0,h.zO)(e))return e;switch((0,n.A)(e)){case"string":return d.createElement(m,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(m,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(r){var n=(0,r.getPrefixCls)("select",o);return d.createElement(u.A,(0,a.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:n,popupClassName:f||y,className:l()("".concat(n,"-auto-complete"),g),mode:u.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:S}),C)}))},f=d.forwardRef(g);f.Option=m;const y=f;const j=(0,r(19335).Ay)(y)`
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
`},64369:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var a=r(9950),n=r(73878),s=r(87094),o=r(41988),l=r(24893),i=r(72896),c=r(78732),d=r(90556),p=r(83587),u=r(34574),h=r(34503),m=r(57687),x=r(67482),g=r(91),f=r(72449),y=r(29355),j=r(48326),b=r(44414);const A=function(){const e=(0,n.wA)(),{searchData:t,orders:r}=(0,n.d4)((e=>({searchData:e.headerSearchData,orders:e.orders.data}))),[A,w]=(0,a.useState)({notData:t,item:r,selectedRowKeys:[]}),{notData:C,item:S,selectedRowKeys:v}=A;(0,a.useEffect)((()=>{r&&w({item:r,selectedRowKeys:v})}),[r,v]);const N=[];r.length&&r.map(((e,t)=>{const{status:r,orderId:a,customers:n,amount:s,date:o}=e;return N.push({key:t+1,id:(0,b.jsx)("span",{className:"order-id",children:a}),customer:(0,b.jsx)("span",{className:"customer-name",children:n}),status:(0,b.jsx)("span",{className:"status "+("Shipped"===r?"Success":"Awaiting Shipment"===r?"warning":"error"),children:r}),amount:(0,b.jsx)("span",{className:"ordered-amount",children:s}),date:(0,b.jsx)("span",{className:"ordered-date",children:o}),action:(0,b.jsxs)("div",{className:"table-actions",children:[(0,b.jsx)(f.Button,{className:"btn-icon",type:"primary",to:"#",shape:"circle",children:(0,b.jsx)(p.A,{})}),(0,b.jsx)(f.Button,{className:"btn-icon",type:"info",to:"#",shape:"circle",children:(0,b.jsx)(d.A,{})}),(0,b.jsx)(f.Button,{className:"btn-icon",type:"danger",to:"#",shape:"circle",children:(0,b.jsx)(u.A,{})})]})})}));const k={onChange:e=>{var t;t=e,w({...A,selectedRowKeys:t})}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.PageHeader,{title:"Orders",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Orders"}]}),(0,b.jsx)(x.Main,{children:(0,b.jsxs)(y.Cards,{headless:!0,children:[(0,b.jsx)(s.A,{gutter:15,children:(0,b.jsx)(o.A,{xs:24,children:(0,b.jsx)(h.TopToolBox,{children:(0,b.jsxs)(s.A,{gutter:15,className:"justify-content-center",children:[(0,b.jsx)(o.A,{lg:6,xs:24,children:(0,b.jsx)("div",{className:"table-search-box",children:(0,b.jsx)(g.AutoComplete,{onSearch:e=>{const r=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));w({...A,notData:r})},dataSource:C,width:"100%",patterns:!0})})}),(0,b.jsx)(o.A,{xxl:14,lg:16,xs:24,children:(0,b.jsxs)("div",{className:"table-toolbox-menu",children:[(0,b.jsx)("span",{className:"toolbox-menu-title",children:" Status:"}),(0,b.jsxs)(l.Ay.Group,{onChange:t=>{e((0,j.orderFilter)("status",t.target.value))},defaultValue:"",children:[(0,b.jsx)(l.Ay.Button,{value:"",children:"All"}),S.length&&[...new Set(["Shipped","Awaiting Shipment","Canceled"])].map((e=>(0,b.jsx)(l.Ay.Button,{value:e,children:e},e)))]})]})}),(0,b.jsx)(o.A,{xxl:4,xs:24,children:(0,b.jsxs)("div",{className:"table-toolbox-actions",children:[(0,b.jsx)(f.Button,{size:"small",type:"secondary",transparented:!0,children:"Export"}),(0,b.jsxs)(f.Button,{size:"small",type:"primary",children:[(0,b.jsx)(c.A,{})," Add Seller"]})]})})]})})})}),(0,b.jsx)(s.A,{gutter:15,children:(0,b.jsx)(o.A,{md:24,children:(0,b.jsx)(x.TableWrapper,{className:"table-order table-responsive",children:(0,b.jsx)(i.A,{rowSelection:k,dataSource:N,columns:[{title:"Order Id",dataIndex:"id",key:"id"},{title:"customer",dataIndex:"customer",key:"customer"},{title:"Status",dataIndex:"status",key:"status"},{title:"Amount",dataIndex:"amount",key:"amount"},{title:"Date",dataIndex:"date",key:"date"},{title:"Action",dataIndex:"action",key:"action"}],pagination:{pageSize:7,showSizeChanger:!0,total:r.length}})})})})]})})]})}},48326:(e,t,r)=>{r.r(t),r.d(t,{orderFilter:()=>i});var a=r(13667),n=r(67842);const{filterOrderBegin:s,filterOrderSuccess:o,filterOrderErr:l}=a.default,i=(e,t)=>async r=>{try{r(s());const a=n.filter((r=>""!==t?r[e]===t:r));r(o(a))}catch(a){r(l(a))}}}}]);