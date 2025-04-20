"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6362],{91:(e,t,r)=>{r.r(t),r.d(t,{AutoComplete:()=>p});var a=r(60767),l=r(55902),n=r(48538),s=r(9950),i=r(73878),c=r(3783),o=r(44414);const d=()=>{},x=(e,t)=>({value:e,label:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),p=s.memo((e=>{const{rtl:t}=(0,i.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:r,patterns:s,patternButtons:p,width:h,onSearch:u,options:m,placeholder:A}=e,g=(null===m||void 0===m?void 0:m.length)>0&&m.map((e=>{const{title:t,count:r}=e;return{label:t,options:[x(t,(0,o.jsxs)("span",{className:"certain-search-item-count",children:[r," people"]}))]}})),j=e=>{u(e)};return r?(0,o.jsx)(c.AutoCompleteStyled,{options:m,style:{width:h},onSelect:d,onSearch:j,children:r}):s?(0,o.jsx)(c.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:g,placeholder:A,onSearch:j,children:(0,o.jsx)(l.A,{suffix:p?(0,o.jsx)(n.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,o.jsx)(a.A,{})}):(0,o.jsx)(a.A,{})})}):(0,o.jsx)(c.AutoCompleteStyled,{options:m,style:{width:h},onSelect:d,onSearch:j,placeholder:A})}));p.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,r)=>{r.r(t),r.d(t,{AutoCompleteStyled:()=>v});var a=r(58168),l=r(82284),n=r(5544),s=r(48738),i=r.n(s),c=r(50604),o=r(15207),d=r(9950),x=r(5741),p=r(99674),h=r(39156),u=p.A.Option;function m(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var A=function(e,t){var r,s=e.prefixCls,A=e.className,g=e.popupClassName,j=e.dropdownClassName,v=e.children,y=e.dataSource,b=(0,c.A)(v);if(1===b.length&&(0,h.zO)(b[0])&&!m(b[0])){var f=(0,n.A)(b,1);r=f[0]}var w,C=r?function(){return r}:void 0;return w=b.length&&m(b[0])?v:y?y.map((function(e){if((0,h.zO)(e))return e;switch((0,l.A)(e)){case"string":return d.createElement(u,{key:e,value:e},e);case"object":var t=e.value;return d.createElement(u,{key:t,value:t},e.text);default:return}})):[],d.createElement(x.TG,null,(function(r){var l=(0,r.getPrefixCls)("select",s);return d.createElement(p.A,(0,a.A)({ref:t},(0,o.A)(e,["dataSource"]),{prefixCls:l,popupClassName:g||j,className:i()("".concat(l,"-auto-complete"),A),mode:p.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:C}),w)}))},g=d.forwardRef(A);g.Option=u;const j=g;const v=(0,r(19335).Ay)(j)`
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
`},6362:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(9950),l=r(73878),n=r(87094),s=r(41988),i=r(99674),c=r(90650),o=r(42074),d=r(28429),x=r(78732),p=r(10356),h=r(58072),u=r(64522),m=r(55962),A=r(91),g=r(72449),j=r(5332),v=r(67482),y=r(57687),b=r(44414);const f=(0,a.lazy)((()=>r.e(6799).then(r.bind(r,36799)))),w=(0,a.lazy)((()=>r.e(3063).then(r.bind(r,23063))));const C=function(){const e=(0,l.wA)(),t=(0,l.d4)((e=>e.headerSearchData)),[r,C]=(0,a.useState)({notData:t,visible:!1,categoryActive:"all"}),{notData:B,visible:H}=r,N=t=>{C({...r,categoryActive:t}),e((0,j.filterProjectByStatus)(t))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.ProjectHeader,{children:(0,b.jsx)(y.PageHeader,{ghost:!0,title:"Projects",subTitle:(0,b.jsx)(b.Fragment,{children:"12 Running Projects"}),buttons:[(0,b.jsxs)(g.Button,{onClick:()=>{C({...r,visible:!0})},type:"primary",size:"default",children:[(0,b.jsx)(x.A,{})," Create Projects"]},"1")]})}),(0,b.jsxs)(v.Main,{children:[(0,b.jsx)(n.A,{gutter:25,children:(0,b.jsxs)(s.A,{xs:24,children:[(0,b.jsx)(m.ProjectSorting,{children:(0,b.jsxs)("div",{className:"project-sort-bar",children:[(0,b.jsx)("div",{className:"project-sort-nav",children:(0,b.jsx)("nav",{children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{className:"all"===r.categoryActive?"active":"deactivate",children:(0,b.jsx)(o.N_,{onClick:()=>N("all"),to:"#",children:"All"})}),(0,b.jsx)("li",{className:"progress"===r.categoryActive?"active":"deactivate",children:(0,b.jsx)(o.N_,{onClick:()=>N("progress"),to:"#",children:"In Progress"})}),(0,b.jsx)("li",{className:"complete"===r.categoryActive?"active":"deactivate",children:(0,b.jsx)(o.N_,{onClick:()=>N("complete"),to:"#",children:"Complete"})}),(0,b.jsx)("li",{className:"late"===r.categoryActive?"active":"deactivate",children:(0,b.jsx)(o.N_,{onClick:()=>N("late"),to:"#",children:"Late"})}),(0,b.jsx)("li",{className:"early"===r.categoryActive?"active":"deactivate",children:(0,b.jsx)(o.N_,{onClick:()=>N("early"),to:"#",children:"Early"})})]})})}),(0,b.jsx)("div",{className:"project-sort-search",children:(0,b.jsx)(A.AutoComplete,{onSearch:e=>{const a=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));C({...r,notData:a})},dataSource:B,placeholder:"Search projects",patterns:!0})}),(0,b.jsx)("div",{className:"project-sort-group",children:(0,b.jsxs)("div",{className:"sort-group",children:[(0,b.jsx)("span",{children:"Sort By:"}),(0,b.jsxs)(i.A,{onChange:t=>{e((0,j.sortingProjectByCategory)(t))},defaultValue:"category",children:[(0,b.jsx)(i.A.Option,{value:"category",children:"Project Category"}),(0,b.jsx)(i.A.Option,{value:"rate",children:"Top Rated"}),(0,b.jsx)(i.A.Option,{value:"popular",children:"Popular"}),(0,b.jsx)(i.A.Option,{value:"time",children:"Newest"}),(0,b.jsx)(i.A.Option,{value:"price",children:"Price"})]}),(0,b.jsxs)("div",{className:"layout-style",children:[(0,b.jsx)(o.k2,{to:"./grid",children:(0,b.jsx)(p.A,{})}),(0,b.jsx)(o.k2,{to:"./list",children:(0,b.jsx)(h.A,{})})]})]})})]})}),(0,b.jsx)("div",{children:(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)("div",{className:"spin",children:(0,b.jsx)(c.A,{})}),children:(0,b.jsxs)(d.BV,{children:[(0,b.jsx)(d.qh,{index:!0,element:(0,b.jsx)(f,{})}),(0,b.jsx)(d.qh,{path:"grid",element:(0,b.jsx)(f,{})}),(0,b.jsx)(d.qh,{path:"list",element:(0,b.jsx)(w,{})})]})})})]})}),(0,b.jsx)(u.default,{onCancel:()=>{C({...r,visible:!1})},visible:H})]})]})}},64522:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(9950),l=r(99674),n=r(87827),s=r(55902),i=r(87094),c=r(41988),o=r(477),d=r(72449),x=r(6805),p=r(66081),h=r(67482),u=r(44414);const{Option:m}=l.A,A="MM/DD/YYYY";const g=function(e){let{visible:t,onCancel:g}=e;const[j]=n.A.useForm(),[v,y]=(0,a.useState)({visible:t,modalType:"primary",checked:[]});(0,a.useEffect)((()=>{let e=!1;return e||y({visible:t}),()=>{e=!0}}),[t]);const b=()=>{g()},f=()=>{g()};return(0,u.jsx)(x.Modal,{type:v.modalType,title:"Create Project",visible:v.visible,footer:[(0,u.jsxs)("div",{className:"project-modal-footer",children:[(0,u.jsx)(d.Button,{size:"default",type:"primary",onClick:b,children:"Add New Project"},"submit"),(0,u.jsx)(d.Button,{size:"default",type:"white",outlined:!0,onClick:f,children:"Cancel"},"back")]},"1")],onCancel:f,children:(0,u.jsx)("div",{className:"project-modal",children:(0,u.jsx)(h.BasicFormWrapper,{children:(0,u.jsxs)(n.A,{form:j,name:"createProject",onFinish:b,children:[(0,u.jsx)(n.A.Item,{name:"project",label:"",children:(0,u.jsx)(s.A,{placeholder:"Project Name"})}),(0,u.jsx)(n.A.Item,{name:"category",initialValue:"",label:"",children:(0,u.jsxs)(l.A,{style:{width:"100%"},children:[(0,u.jsx)(m,{value:"",children:"Project Category"}),(0,u.jsx)(m,{value:"one",children:"Project One"}),(0,u.jsx)(m,{value:"two",children:"Project Two"})]})}),(0,u.jsx)(n.A.Item,{name:"description",label:"",children:(0,u.jsx)(s.A.TextArea,{rows:4,placeholder:"Project Description"})}),(0,u.jsx)(n.A.Item,{name:"pricacy",initialValue:["team"],label:"Project Privacy",children:(0,u.jsx)(p.CheckboxGroup,{options:[{label:"Privet",value:"privet"},{label:"Team",value:"team"},{label:"Public",value:"public"}]})}),(0,u.jsx)(n.A.Item,{name:"members",label:"Project Members",children:(0,u.jsx)(s.A,{placeholder:"Search Members"})}),(0,u.jsxs)("div",{className:"projects-members mb-30",children:[(0,u.jsx)("img",{style:{width:"35px"},src:r(91607),alt:""}),(0,u.jsx)("img",{style:{width:"35px"},src:r(2876),alt:""}),(0,u.jsx)("img",{style:{width:"35px"},src:r(20389),alt:""}),(0,u.jsx)("img",{style:{width:"35px"},src:r(35722),alt:""}),(0,u.jsx)("img",{style:{width:"35px"},src:r(86483),alt:""})]}),(0,u.jsxs)(i.A,{gutter:15,children:[(0,u.jsx)(c.A,{md:12,xs:24,children:(0,u.jsx)(n.A.Item,{name:"start",label:"Start Date",children:(0,u.jsx)(o.A,{placeholder:"mm/dd/yyyy",format:A})})}),(0,u.jsx)(c.A,{md:12,xs:24,children:(0,u.jsx)(n.A.Item,{name:"end",label:"End Date",children:(0,u.jsx)(o.A,{placeholder:"mm/dd/yyyy",format:A})})})]})]})})})})}},2876:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC"}}]);