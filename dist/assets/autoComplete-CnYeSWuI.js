import{r as u,bE as k,bF as S,bu as A,bt as _,p as y,bG as I,bp as R,bH as B,bq as P,s as T,aJ as M,t as q,j as r,I as D,q as G,a4 as N,ay as s}from"./index-BJIB_XH5.js";var v=y.Option;function O(t){return t&&t.type&&(t.type.isSelectOption||t.type.isSelectOptGroup)}var z=function(e,x){var f=e.prefixCls,g=e.className,c=e.popupClassName,b=e.dropdownClassName,n=e.children,p=e.dataSource,o=k(n),l;if(o.length===1&&S(o[0])&&!O(o[0])){var i=A(o,1);l=i[0]}var m=l?function(){return l}:void 0,d;return o.length&&O(o[0])?d=n:d=p?p.map(function(a){if(S(a))return a;switch(_(a)){case"string":return u.createElement(v,{key:a,value:a},a);case"object":{var h=a.value;return u.createElement(v,{key:h,value:h},a.text)}default:return}}):[],u.createElement(I,null,function(a){var h=a.getPrefixCls,w=h("select",f);return u.createElement(y,R({ref:x},B(e,["dataSource"]),{prefixCls:w,popupClassName:c||b,className:P("".concat(w,"-auto-complete"),g),mode:y.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:m}),d)})},j=u.forwardRef(z);j.Option=v;const C=T(j)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${({theme:t})=>t.rtl?"right":"left"};
        ${({theme:t})=>t.rtl?"right":"left"}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 23px;
            padding: 0 !important;
            background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
            border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                    border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                    input{
                        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                    }
                }
            }
            textarea{
                background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                border-color: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0 !important;
    }
    .ant-select-selection-search{
        ${({theme:t})=>t.rtl?"right":"left"}: 20px;
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
            border-radius: ${({theme:t})=>t.rtl?"4px 0 0 4px":"0 4px 4px 0"}; 
            svg,
            i{
                color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
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
`,$=()=>{},L=(t,e)=>({value:t,label:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t,e]})}),E=M.memo(t=>{const{rtl:e}=q(i=>({rtl:i.ChangeLayoutMode.rtlData})),{customComponent:x,patterns:f,patternButtons:g,width:c,onSearch:b,options:n,placeholder:p}=t,o=(n==null?void 0:n.length)>0&&n.map(i=>{const{title:m,count:d}=i;return{label:m,options:[L(m,r.jsxs("span",{className:"certain-search-item-count",children:[d," people"]}))]}}),l=i=>{b(i)};return x?r.jsx(C,{options:n,style:{width:c},onSelect:$,onSearch:l,children:x}):f?r.jsx(C,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:c},options:o,placeholder:p,onSearch:l,children:r.jsx(D,{suffix:g?r.jsx(G,{className:"search-btn",style:{[e?"marginLeft":"marginRight"]:-20},type:"primary",children:r.jsx(N,{})}):r.jsx(N,{})})}):r.jsx(C,{options:n,style:{width:c},onSelect:$,onSearch:l,placeholder:p})});E.defaultProps={width:"350px",placeholder:"Input here"};E.propTypes={customComponent:s.node,patterns:s.bool,patternButtons:s.bool,width:s.string,onSearch:s.func,options:s.arrayOf(s.object),placeholder:s.string};export{E as A};
