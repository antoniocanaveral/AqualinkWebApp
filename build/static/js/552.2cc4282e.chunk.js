(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[552],{91:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AutoComplete:()=>h});var n=a(60767),r=a(55902),o=a(48538),s=a(9950),l=a(73878),i=a(3783),c=a(44414);const d=()=>{},p=(e,t)=>({value:e,label:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=s.memo((e=>{const{rtl:t}=(0,l.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:a,patterns:s,patternButtons:h,width:u,onSearch:m,options:x,placeholder:y}=e,g=(null===x||void 0===x?void 0:x.length)>0&&x.map((e=>{const{title:t,count:a}=e;return{label:t,options:[p(t,(0,c.jsxs)("span",{className:"certain-search-item-count",children:[a," people"]}))]}})),f=e=>{m(e)};return a?(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:u},onSelect:d,onSearch:f,children:a}):s?(0,c.jsx)(i.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:u},options:g,placeholder:y,onSearch:f,children:(0,c.jsx)(r.A,{suffix:h?(0,c.jsx)(o.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,c.jsx)(n.A,{})}):(0,c.jsx)(n.A,{})})}):(0,c.jsx)(i.AutoCompleteStyled,{options:x,style:{width:u},onSelect:d,onSearch:f,placeholder:y})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AutoCompleteStyled:()=>b});var n=a(58168),r=a(82284),o=a(5544),s=a(48738),l=a.n(s),i=a(50604),c=a(15207),d=a(9950),p=a(5741),h=a(99674),u=a(39156),m=h.A.Option;function x(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var y=function(e,t){var a,s=e.prefixCls,y=e.className,g=e.popupClassName,f=e.dropdownClassName,b=e.children,C=e.dataSource,j=(0,i.A)(b);if(1===j.length&&(0,u.zO)(j[0])&&!x(j[0])){var w=(0,o.A)(j,1);a=w[0]}var v,S=a?function(){return a}:void 0;return v=j.length&&x(j[0])?b:C?C.map((function(e){if((0,u.zO)(e))return e;switch((0,r.A)(e)){case"string":return d.createElement(m,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(m,{key:t,value:t},e.text);default:return}})):[],d.createElement(p.TG,null,(function(a){var r=(0,a.getPrefixCls)("select",s);return d.createElement(h.A,(0,n.A)({ref:t},(0,c.A)(e,["dataSource"]),{prefixCls:r,popupClassName:g||f,className:l()("".concat(r,"-auto-complete"),y),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:S}),v)}))},g=d.forwardRef(y);g.Option=m;const f=g;const b=(0,a(19335).Ay)(f)`
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
`},53107:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var n=a(9950),r=a(99674),o=a(87094),s=a(41988),l=a(58451),i=a(87827),c=a(55902),d=a(72896),p=a(73878),h=a(46411),u=a(34691),m=a(48525),x=a(57687),y=a(67482),g=a(29355),f=a(72449),b=a(91),C=a(16849),j=a(6805),w=a(44414);const v=function(){const e=(0,p.wA)(),{users:t}=(0,p.d4)((e=>({users:e.Contact.data}))),[a,v]=(0,n.useState)({isModalVisible:!1,fileName:"strikingDash",convertedTo:"csv",selectedRowKeys:0,selectedRows:[]}),S=()=>{v({...a,isModalVisible:!1})},A=[],k=[["id","name","email","company","position"]];t.sort(((e,t)=>t.time-e.time)).map((e=>{const{id:t,name:a,designation:n,email:r,company:o}=e;return A.push({key:t,user:a,email:r,company:o,position:n})}));const N={onChange:(e,t)=>{v({...a,selectedRowKeys:e,selectedRows:t})},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})};a.selectedRows.map((e=>{const{key:t,user:a,position:n,email:r,company:o}=e;return k.push([t,a,r,o,n])}));const{isModalVisible:E}=a,{Option:$}=r.A,{fileName:D,convertedTo:O}=a;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x.PageHeader,{title:"Export",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Export"}]}),(0,w.jsx)(y.Main,{children:(0,w.jsx)(o.A,{gutter:25,children:(0,w.jsx)(s.A,{sm:24,xs:24,children:(0,w.jsx)(y.ExportStyleWrap,{children:(0,w.jsxs)(g.Cards,{headless:!0,children:[(0,w.jsxs)("div",{className:"ninjadash_export-box",children:[a.selectedRows.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f.Button,{className:"btn-export",onClick:()=>{v({...a,isModalVisible:!0})},type:"primary",children:"Export"}),(0,w.jsx)(l.A,{title:"Export File",wrapClassName:"ninjadash_export-wrap",visible:E,footer:null,onCancel:S,children:(0,w.jsxs)(i.A,{name:"contact",children:[(0,w.jsx)(i.A.Item,{name:"f_name",children:(0,w.jsx)(c.A,{placeholder:"File Name",value:D,onChange:e=>{v({...a,fileName:e.target.value})}})}),(0,w.jsx)(i.A.Item,{initialValue:"CSV",name:"f_type",children:(0,w.jsxs)(r.A,{onChange:e=>{v({...a,convertedTo:e})},children:[(0,w.jsx)($,{value:"csv",children:"CSV"}),(0,w.jsx)($,{value:"xlxs",children:"xlxs"})]})}),(0,w.jsxs)("div",{className:"ninjadash-button-grp",children:["csv"===O?(0,w.jsx)(h.CSVLink,{filename:`${D}.csv`,data:k,children:(0,w.jsx)(f.Button,{onClick:S,className:"btn-export",type:"primary",children:"Export"})}):(0,w.jsx)(f.Button,{className:"btn-export",onClick:()=>((e,t)=>{const n={Sheets:{data:m.utils.json_to_sheet(e)},SheetNames:["data"]},r=m.write(n,{bookType:"xlsx",type:"array"}),o=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});u.saveAs(o,t+".xlsx"),v({...a,isModalVisible:!1})})(k,D),type:"primary",children:"Eport"}),(0,w.jsx)(f.Button,{htmlType:"submit",onClick:S,size:"default",type:"white",outlined:!0,children:"Cancel"})]})]})})]}):(0,w.jsx)(f.Button,{className:"btn-export",onClick:()=>{j.alertModal.warning({title:"Please Select your Required Rows!"})},type:"primary",children:"Export"}),(0,w.jsx)(b.AutoComplete,{onSearch:t=>{e((0,C.contactSearchData)(t))},placeholder:"Search by Name",width:"100%",patterns:!0})]}),(0,w.jsx)("div",{className:"ninjadash_export-file-table table-bordered table-responsive",children:(0,w.jsx)(d.A,{rowSelection:N,dataSource:A,columns:[{title:"User",dataIndex:"user",key:"user"},{title:"Email",dataIndex:"email",key:"email"},{title:"Company",dataIndex:"company",key:"company"},{title:"Position",dataIndex:"position",key:"position"}],pagination:{defaultPageSize:7,total:A.length,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`}})})]})})})})})]})}},16849:(e,t,a)=>{"use strict";a.r(t),a.d(t,{contactAddData:()=>h,contactDeleteData:()=>u,contactGetData:()=>p,contactSearchData:()=>m,onStarUpdate:()=>x});var n=a(81256),r=a(73741);const{readBegin:o,readSuccess:s,readErr:l,starUpdateBegin:i,starUpdateSuccess:c,starUpdateErr:d}=n.default,p=()=>async e=>{try{e(o()),e(s(r))}catch(t){e(l(t))}},h=e=>async t=>{try{t(o()),t(s(e))}catch(a){t(l(a))}},u=e=>async t=>{try{t(o()),t(s(e))}catch(a){t(l(a))}},m=e=>async t=>{try{t(o());const a=r.filter((t=>t.name.toUpperCase().startsWith(e.toUpperCase())));t(s(a))}catch(a){t(l(a))}},x=(e,t)=>async a=>{try{a(i()),e.map((n=>{if(n.id===t){const e=n;n.stared?e.stared=!1:e.stared=!0}return a(c(e))}))}catch(n){a(d(n))}}},16251:()=>{},67233:()=>{},29800:()=>{}}]);