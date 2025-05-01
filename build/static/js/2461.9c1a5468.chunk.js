"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2461],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>u});var s=r(60767),a=r(55902),l=r(48538),n=r(9950),i=r(73878),o=r(3783),c=r(44414);const d=()=>{},h=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),u=n.memo((e=>{const{rtl:t}=(0,i.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:n,patternButtons:u,width:p,onSearch:m,options:x,placeholder:g}=e,j=(null===x||void 0===x?void 0:x.length)>0&&x.map((e=>{const{title:t,count:r}=e;return{label:t,options:[h(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),w=e=>{m(e)};return r?(0,c.jsx)(o.AutoCompleteStyled,{options:x,style:{width:p},onSelect:d,onSearch:w,children:r}):n?(0,c.jsx)(o.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:p},options:j,placeholder:g,onSearch:w,children:(0,c.jsx)(a.A,{suffix:u?(0,c.jsx)(l.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(s.A,{})}):(0,c.jsx)(s.A,{})})}):(0,c.jsx)(o.AutoCompleteStyled,{options:x,style:{width:p},onSelect:d,onSearch:w,placeholder:g})}));u.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>f});var s=r(58168),a=r(82284),l=r(5544),n=r(48738),i=r.n(n),o=r(50604),c=r(15207),d=r(9950),h=r(5741),u=r(99674),p=r(39156),m=u.A.Option;function x(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var g=function(e,t){var r,n=e.prefixCls,g=e.className,j=e.popupClassName,w=e.dropdownClassName,f=e.children,y=e.dataSource,v=(0,o.A)(f);if(1===v.length&&(0,p.zO)(v[0])&&!x(v[0])){var C=(0,l.A)(v,1);r=C[0]}var N,k=r?function(){return r}:void 0;return N=v.length&&x(v[0])?f:y?y.map((function(e){if((0,p.zO)(e))return e;switch((0,a.A)(e)){case"string":return d.createElement(m,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(m,{key:t,value:t},e.text);default:return}})):[],d.createElement(h.TG,null,(function(r){var a=(0,r.getPrefixCls)("select",n);return d.createElement(u.A,(0,s.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:a,popupClassName:j||w,className:i()("".concat(a,"-auto-complete"),g),mode:u.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:k}),N)}))},j=d.forwardRef(g);j.Option=m;const w=j;const f=(0,r(19335).Ay)(w)`
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
`},92461:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(9950),a=r(73878),l=r(87094),n=r(41988),i=r(7037),o=r(42074),c=r(8603),d=r(57687),h=r(67482),u=r(42017),p=r(91),m=r(29355),x=r(44414);const g=function(){const e=(0,a.d4)((e=>e.headerSearchData)),[t,r]=(0,s.useState)({notData:e,activeClass:"all",current:0,pageSize:0}),{notData:g}=t,j=e=>{r({...t,activeClass:e})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.PageHeader,{ghost:!0,title:"Search Result"}),(0,x.jsx)(h.Main,{children:(0,x.jsx)(c.SearchResultWrapper,{children:(0,x.jsxs)(l.A,{gutter:25,children:[(0,x.jsx)(n.A,{xs:24,children:(0,x.jsx)(p.AutoComplete,{onSearch:s=>{const a=e.filter((e=>e.title.toUpperCase().startsWith(s.toUpperCase())));r({...t,notData:a})},dataSource:g,placeholder:"Type and search",width:"40%",patterns:!0})}),(0,x.jsx)(n.A,{xs:24,children:(0,x.jsx)("div",{className:"search-filter-menu",children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.N_,{className:"all"===t.activeClass?"active":"deactivate",onClick:()=>j("all"),to:"#",children:"All"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.N_,{className:"webDesign"===t.activeClass?"active":"deactivate",onClick:()=>j("webDesign"),to:"#",children:"Web Design"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.N_,{className:"uiDesign"===t.activeClass?"active":"deactivate",onClick:()=>j("uiDesign"),to:"#",children:"UI Design"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.N_,{className:"wireframe"===t.activeClass?"active":"deactivate",onClick:()=>j("wireframe"),to:"#",children:"Wireframe"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.N_,{className:"presentation"===t.activeClass?"active":"deactivate",onClick:()=>j("presentation"),to:"#",children:"Presentation"})})]})})}),(0,x.jsx)(n.A,{xs:24,children:(0,x.jsx)(c.ResultList,{children:(0,x.jsxs)(m.Cards,{headless:!0,children:[(0,x.jsx)("div",{className:"result-list-top",children:(0,x.jsxs)(l.A,{children:[(0,x.jsx)(n.A,{md:13,xs:24,children:(0,x.jsxs)("p",{className:"search-found-text",children:[(0,x.jsx)("span",{className:"result-count",children:"207"}),"results found for",(0,x.jsx)("span",{className:"result-keyword",children:"\u201cKeyword\u201d"})]})}),(0,x.jsx)(n.A,{md:11,xs:24,children:(0,x.jsx)("p",{className:"result-limit",children:"Showing 1-10 of 76 results"})})]})}),(0,x.jsx)("div",{className:"result-list-content",children:(0,x.jsx)(l.A,{children:(0,x.jsx)(n.A,{md:24,children:(0,x.jsx)("nav",{children:(0,x.jsxs)("ul",{children:[(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]}),(0,x.jsxs)("li",{children:[(0,x.jsxs)(u.default,{className:"result-list-title",as:"h6",children:[(0,x.jsx)("span",{className:"search-keyword",children:"Keyword"})," installing lorem multi vendor marketplace"]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing elitr, sed diam nonumy eirmod..."})]})]})})})})}),(0,x.jsx)(i.A,{onChange:(e,s)=>{r({...t,current:e,pageSize:s})},showSizeChanger:!0,onShowSizeChange:(e,s)=>{r({...t,current:e,pageSize:s})},pageSize:10,defaultCurrent:1,total:40})]})})})]})})})]})}}}]);