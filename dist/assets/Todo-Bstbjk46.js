import{bK as Oe,a7 as Pe,bL as Ne,ae as le,a9 as ce,ah as de,ag as ue,bM as Re,af as qe,ai as fe,bN as Se,ab as pe,ak as ve,aj as $e,bO as Ee,bP as De,al as Te,s as xe,u as Ve,t as Ie,j as a,bQ as Ge,L as M,x as Ae,V as se,n as Me,bR as Fe,X as Le,aE as Ue,T as Be,B as ze,ay as q}from"./index-BJIB_XH5.js";import{T as We}from"./Style-8BCI8C7O.js";const{todoReadBegin:he,todoReadSuccess:me,todoReadErr:ge,starUpdateBegin:He,starUpdateSuccess:Ke,starUpdateErr:Qe}=Oe,na=e=>async c=>{try{c(he()),c(me(e))}catch(s){c(ge(s))}},ae=e=>async c=>{try{c(he()),c(me(e))}catch(s){c(ge(s))}},Xe=(e,c)=>async s=>{try{s(He()),e.map(d=>{if(d.key===c){const y=d;d.favorite?y.favorite=!1:y.favorite=!0}return s(Ke(e))})}catch(d){s(Qe(d))}};var te={};const Ye=Pe(Ne);var re={},oe;function Je(){return oe||(oe=1,function(e){var c=le().default,s=ce().default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.GroupContext=void 0;var d=s(de()),y=s(ue()),_=s(Re()),C=s(qe()),k=s(fe()),f=s(Se()),v=c(pe()),S=ve(),$=s(be()),E=function(o,n){var g={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(g[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(o);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(o,t[l])&&(g[t[l]]=o[t[l]]);return g},r=e.GroupContext=v.createContext(null),u=function(n,g){var t=n.defaultValue,l=n.children,F=n.options,w=F===void 0?[]:F,L=n.prefixCls,U=n.className,Q=n.style,D=n.onChange,b=E(n,["defaultValue","children","options","prefixCls","className","style","onChange"]),T=v.useContext(S.ConfigContext),B=T.getPrefixCls,X=T.direction,p=v.useState(b.value||t||[]),V=(0,C.default)(p,2),P=V[0],z=V[1],i=v.useState([]),W=(0,C.default)(i,2),Y=W[0],H=W[1];v.useEffect(function(){"value"in b&&z(b.value||[])},[b.value]);var I=function(){return w.map(function(m){return typeof m=="string"||typeof m=="number"?{label:m,value:m}:m})},G=function(m){H(function(N){return N.filter(function(R){return R!==m})})},j=function(m){H(function(N){return[].concat((0,_.default)(N),[m])})},O=function(m){var N=P.indexOf(m.value),R=(0,_.default)(P);N===-1?R.push(m.value):R.splice(N,1),"value"in b||z(R);var ne=I();D==null||D(R.filter(function(Z){return Y.includes(Z)}).sort(function(Z,je){var _e=ne.findIndex(function(ee){return ee.value===Z}),we=ne.findIndex(function(ee){return ee.value===je});return _e-we}))},K=B("checkbox",L),A="".concat(K,"-group"),J=(0,f.default)(b,["value","disabled"]);w&&w.length>0&&(l=I().map(function(h){return v.createElement($.default,{prefixCls:K,key:h.value.toString(),disabled:"disabled"in h?h.disabled:b.disabled,value:h.value,checked:P.includes(h.value),onChange:h.onChange,className:"".concat(A,"-item"),style:h.style},h.label)}));var ye={toggleOption:O,value:P,disabled:b.disabled,name:b.name,registerValue:j,cancelValue:G},Ce=(0,k.default)(A,(0,y.default)({},"".concat(A,"-rtl"),X==="rtl"),U);return v.createElement("div",(0,d.default)({className:Ce,style:Q},J,{ref:g}),v.createElement(r.Provider,{value:ye},l))},x=v.forwardRef(u);e.default=v.memo(x)}(re)),re}var ie;function be(){return ie||(ie=1,function(e){var c=le().default,s=ce().default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=s(ue()),y=s(de()),_=s(fe()),C=s(Ye),k=c(pe()),f=k,v=ve(),S=De();s($e());var $=Je(),E=s(Ee()),r=function(o,n){var g={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(g[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(o);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(o,t[l])&&(g[t[l]]=o[t[l]]);return g},u=function(n,g){var t,l=n.prefixCls,F=n.className,w=n.children,L=n.indeterminate,U=L===void 0?!1:L,Q=n.style,D=n.onMouseEnter,b=n.onMouseLeave,T=n.skipGroup,B=T===void 0?!1:T,X=n.disabled,p=r(n,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),V=f.useContext(v.ConfigContext),P=V.getPrefixCls,z=V.direction,i=f.useContext($.GroupContext),W=(0,k.useContext)(S.FormItemInputContext),Y=W.isFormItemInput,H=(0,k.useContext)(E.default),I=(t=(i==null?void 0:i.disabled)||X)!==null&&t!==void 0?t:H,G=f.useRef(p.value);f.useEffect(function(){i==null||i.registerValue(p.value)},[]),f.useEffect(function(){if(!B)return p.value!==G.current&&(i==null||i.cancelValue(G.current),i==null||i.registerValue(p.value),G.current=p.value),function(){return i==null?void 0:i.cancelValue(p.value)}},[p.value]);var j=P("checkbox",l),O=(0,y.default)({},p);i&&!B&&(O.onChange=function(){p.onChange&&p.onChange.apply(p,arguments),i.toggleOption&&i.toggleOption({label:w,value:p.value})},O.name=i.name,O.checked=i.value.includes(p.value));var K=(0,_.default)((0,d.default)((0,d.default)((0,d.default)((0,d.default)((0,d.default)({},"".concat(j,"-wrapper"),!0),"".concat(j,"-rtl"),z==="rtl"),"".concat(j,"-wrapper-checked"),O.checked),"".concat(j,"-wrapper-disabled"),I),"".concat(j,"-wrapper-in-form-item"),Y),F),A=(0,_.default)((0,d.default)({},"".concat(j,"-indeterminate"),U)),J=U?"mixed":void 0;return f.createElement("label",{className:K,style:Q,onMouseEnter:D,onMouseLeave:b},f.createElement(C.default,(0,y.default)({"aria-checked":J},O,{prefixCls:j,className:A,disabled:I,ref:g})),w!==void 0&&f.createElement("span",null,w))},x=f.forwardRef(u);e.default=x}(te)),te}var Ze=be();const ea=Te(Ze);xe.span`
    &.active{
        color: ${({theme:e})=>e["primary-color"]};
        text-decoration: line-through;
    }
`;const aa=xe.div`
    .ant-card{
        min-height: 360px;
    }
    .ant-card-body{
        padding: 15px 0 25px !important
    }
    .ant-table{
        thead{
            display: none;
        }
        tbody{
            tr{
                position: relative;
                &:hover{
                    box-shadow: 0 15px 50px ${({theme:e})=>e["light-color"]}20;
                    .ant-table-cell{
                        background-color: #fff;
                    }
                }
                td{
                    font-size: 14px;
                    color: ${({theme:e})=>e["gray-color"]}
                    line-height: .75;
                    &:first-child{
                        padding-left: 25px;
                    }
                    &:last-child{
                        padding-right: 25px;
                    }
                    .ant-checkbox-wrapper{
                        padding-top: 3px;
                        &:hover{
                            &:after{
                                border-color: ${({theme:e})=>e["success-color"]};
                            }
                            .ant-checkbox-inner{
                                border-color: ${({theme:e})=>e["success-color"]};
                            }
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({theme:e})=>e["success-color"]};
                        }
                    }
                    .ant-checkbox-checked .ant-checkbox-inner{
                        background-color: ${({theme:e})=>e["success-color"]};
                        border-color: ${({theme:e})=>e["success-color"]};
                    }
                    .todo-title{
                        min-width: 150px;
                        line-height: 1.5;
                    }
                }
            }
            .todos-action{
                min-width: 100px;
                text-align: right;
                svg,
                i,
                span{
                    color: #D8DCEB !important;
                }
                svg.feather-trash-2{
                    color: ${({theme:e})=>e["gray-color"]}
                }
                .star{
                    margin: 0 20px;
                    &.active{
                        svg,
                        i{
                            color: ${({theme:e})=>e["warning-color"]} !important;
                        }
                    }
                }
            }
            
        }
    }
    
    .new-todo-wrap{
        padding: 16px 25px 0;
        .btn-toDoAdd{
            font-size: 12px;
            font-weight: 500;
            height: 50px;
            padding: 0px 23.23px;
        }
    }

    .ninjadash-tassklist-wrap{
        margin-top: 2px;
    }

    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            padding: 0 25px;
            margin: -10px 0 0 0;
            .ninjadash-tasklist-item__title {
                .ant-checkbox-wrapper {
                    span{
                        ${({theme:e})=>e[e.mainContent]["dark-text"]};
                    }
                }
            }
            .ninjadash-tasklist-item {
                @media only screen and (max-width: 575px){
                    padding: 7.5px 0 !important;
                    flex-direction: row !important;
                    align-items: center !important;
                }
                .ninjadash-tasklist-item__content{
                    margin-right: 10px;
                }
                .ninjadash-tasklist-item__action{
                    @media only screen and (max-width: 575px){
                        margin: 0;
                    }
                }
            }
            .ninjadash-tasklist-item__action{
                a{
                    margin-right: 0;
                }
            }
        }
    }
`;function ke({todoData:e,showModal:c,isApp:s,title:d,tab:y,status:_}){const C=Ve(),k=Ie(r=>r.Todo.data),f=r=>{const u=k.map(o=>(o.key===r&&(o.status="deleted"),o)),x=k.filter(o=>o.key!==r);C(ae(_==="deleted"?x:u))},v=r=>{const u=k.map(x=>(x.key===r&&(x.isFinish=!x.isFinish),x));C(ae(u))},S=r=>{const u=k.map(x=>(x.key===r&&(x.status="new"),x));C(ae(u))},$=[];e!==null&&e.map((r,u)=>$.push({key:u+1,index:u,action:s?a.jsxs("div",{className:"todos-action",children:[a.jsx(Ge,{}),a.jsx(M,{className:r.favorite?"star active":"star",onClick:()=>C(Xe(e,r.key)),to:"#",children:a.jsx(Ae,{})}),a.jsx(M,{onClick:()=>f(r.key),to:"#",children:a.jsx(se,{})})]}):a.jsx(M,{onClick:()=>f(r.key),to:"#",children:a.jsx(Me,{})})}));const E=()=>{};return a.jsx(a.Fragment,{children:a.jsx(aa,{children:a.jsx(Fe,{children:a.jsxs(Le,{title:d,isbutton:y,children:[a.jsx(We,{children:a.jsx("div",{className:"ninjadash-tassklist-wrap",children:a.jsx("div",{className:"ninjadash-tasklist-body",children:e.length>0?a.jsx("ul",{className:"ninjadash-tasklist",children:e.sort((r,u)=>u.id-r.id).map((r,u)=>a.jsxs("li",{className:"ninjadash-tasklist-item",children:[a.jsx("div",{className:"ninjadash-tasklist-item__content",children:a.jsx("div",{className:"ninjadash-tasklist-item__title",children:a.jsx(ea,{checked:r.isFinish,onChange:()=>v(r.key),children:r.item})})}),a.jsxs("div",{className:"ninjadash-tasklist-item__action",children:[_==="deleted"?a.jsx(M,{onClick:()=>S(r.key),className:"ninjadash-delete",to:"#",children:a.jsx(Ue,{})}):null,a.jsx(Be,{title:"Are you sure to delete this task?",onConfirm:()=>f(r.key),onCancel:E,okText:"Yes",cancelText:"No",children:a.jsx(M,{className:"ninjadash-delete",to:"#",children:a.jsx(se,{})})})]})]},u))}):a.jsx("div",{className:"ninjadash-tasklist-empty",children:a.jsx("span",{children:"Sorry !! No Completed Task Found :("})})})})}),c?a.jsx("div",{className:"new-todo-wrap",children:a.jsx(ze,{onClick:c,className:"btn-toDoAdd",transparented:!0,type:"primary",size:"large",children:"+ Add New Task"})}):null]})})})})}ke.defaultProps={todoData:[],isApp:!1,title:"Todo List"};ke.propTypes={todoData:q.array,showModal:q.func,isApp:q.bool,title:q.string,tab:q.node,status:q.string};export{ke as T,na as a};
