"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6748],{50371:(e,t,a)=>{a.r(t),a.d(t,{TaskListStyle:()=>n});const n=a(19335).Ay.div`
    .ninjadash-tassklist-wrap{
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
        border-radius: 10px;
        min-height: 220px;
    }
    .ninjadash-tasklist-head{
        .ninjadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
        }
    }
    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            .ninjadash-tasklist-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 7.5px 0;
                @media only screen and (max-width: 575px){
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 7.5px 0 20px;
                }
                .ninjadash-tasklist-item__content{
                    margin-right: 10px;
                }
            }
            .ninjadash-tasklist-item__title{
                font-size: 16px;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                .ant-checkbox + span{
                    position: relative;
                    top: -2px;
                    ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 10px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                        }
                    }
                    span{
                        font-size: 15px;
                        font-weight: 400;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5px;
                            height: 9px;
                            top: 48%;
                            left: 25.5%;
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                        }
                        .ant-checkbox-inner{
                            background-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                            border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                            &:after{
                                border-color: #fff;
                            }
                        }
                    }
                }
            }
            .ninjadash-tasklist-item__text{
                padding-left: 30px;
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .ninjadash-tasklist-item__action{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 20px;
                @media only screen and (max-width: 575px){
                    margin-top: 20px;
                    margin-left: -10px;
                    padding-left: 30px;
                }
                svg,
                i{
                    width: 16px;
                    height: 16px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                }
                .task-favourite{
                    line-height: 1;
                    &.active{
                        svg,
                        i{
                            color: ${e=>{let{theme:t}=e;return t["warning-color"]}}; 
                        }
                    }
                    svg,
                    img{
                        position: relative;
                        top: -2px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
                a {
                    display: inline-flex;
                    align-items: center;
                    margin: 0 10px;
                }
                .ninjadash-edit{
                    &:hover{
                        svg,
                        i{
                            color: ${e=>{let{theme:t}=e;return t["info-color"]}}; 
                        }
                    }
                }
                .ninjadash-delete{
                    &:hover{
                        svg,
                        i{
                            color: ${e=>{let{theme:t}=e;return t["danger-color"]}}; 
                        } 
                    }
                }
            }
        }
        .ninjadash-tasklist-empty{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
            }
        }
    }
    .ninjadash-modal-actions{
        display: flex;
        justify-content: flex-end;
        button{
            margin: 5px;
        }
    }
`},37027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(42140),i=a(12587),o=a(67128),r=a(34683),l=a(34574),s=a(56231),d=a(28967),c=(a(9950),a(73878)),u=a(42074),p=a(26866),h=a(67482),m=a(77967),x=a(72449),f=a(29355),g=a(50371),v=a(44414);function y(e){let{todoData:t,showModal:a,isApp:y,title:b,tab:k,status:j}=e;const w=(0,c.wA)(),C=(0,c.d4)((e=>e.Todo.data)),N=e=>{const t=C.map((t=>(t.key===e&&(t.status="deleted"),t))),a=C.filter((t=>t.key!==e));w((0,m.ToDoDeleteData)("deleted"===j?a:t))},D=[];null!==t&&t.map(((e,a)=>D.push({key:a+1,index:a,action:y?(0,v.jsxs)("div",{className:"todos-action",children:[(0,v.jsx)(r.A,{}),(0,v.jsx)(u.N_,{className:e.favorite?"star active":"star",onClick:()=>w((0,m.onStarUpdate)(t,e.key)),to:"#",children:(0,v.jsx)(n.A,{})}),(0,v.jsx)(u.N_,{onClick:()=>N(e.key),to:"#",children:(0,v.jsx)(l.A,{})})]}):(0,v.jsx)(u.N_,{onClick:()=>N(e.key),to:"#",children:(0,v.jsx)(o.A,{})})})));const _=()=>{};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p.TodoStyleWrapper,{children:(0,v.jsx)(h.BorderLessHeading,{children:(0,v.jsxs)(f.Cards,{title:b,isbutton:k,children:[(0,v.jsx)(g.TaskListStyle,{children:(0,v.jsx)("div",{className:"ninjadash-tassklist-wrap",children:(0,v.jsx)("div",{className:"ninjadash-tasklist-body",children:t.length>0?(0,v.jsx)("ul",{className:"ninjadash-tasklist",children:t.sort(((e,t)=>t.id-e.id)).map(((e,t)=>(0,v.jsxs)("li",{className:"ninjadash-tasklist-item",children:[(0,v.jsx)("div",{className:"ninjadash-tasklist-item__content",children:(0,v.jsx)("div",{className:"ninjadash-tasklist-item__title",children:(0,v.jsx)(d.default,{checked:e.isFinish,onChange:()=>(e=>{const t=C.map((t=>(t.key===e&&(t.isFinish=!t.isFinish),t)));w((0,m.ToDoDeleteData)(t))})(e.key),children:e.item})})}),(0,v.jsxs)("div",{className:"ninjadash-tasklist-item__action",children:["deleted"===j?(0,v.jsx)(u.N_,{onClick:()=>(e=>{const t=C.map((t=>(t.key===e&&(t.status="new"),t)));w((0,m.ToDoDeleteData)(t))})(e.key),className:"ninjadash-delete",to:"#",children:(0,v.jsx)(i.A,{})}):null,(0,v.jsx)(s.A,{title:"Are you sure to delete this task?",onConfirm:()=>N(e.key),onCancel:_,okText:"Yes",cancelText:"No",children:(0,v.jsx)(u.N_,{className:"ninjadash-delete",to:"#",children:(0,v.jsx)(l.A,{})})})]})]},t)))}):(0,v.jsx)("div",{className:"ninjadash-tasklist-empty",children:(0,v.jsx)("span",{children:"Sorry !! No Completed Task Found :("})})})})}),a?(0,v.jsx)("div",{className:"new-todo-wrap",children:(0,v.jsx)(x.Button,{onClick:a,className:"btn-toDoAdd",transparented:!0,type:"primary",size:"large",children:"+ Add New Task"})}):null]})})})})}y.defaultProps={todoData:[],isApp:!1,title:"Todo List"};const b=y},26866:(e,t,a)=>{a.r(t),a.d(t,{Span:()=>i,TodoStyleWrapper:()=>o});var n=a(19335);const i=n.Ay.span`
    &.active{
        color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
        text-decoration: line-through;
    }
`,o=n.Ay.div`
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
                    box-shadow: 0 15px 50px ${e=>{let{theme:t}=e;return t["light-color"]}}20;
                    .ant-table-cell{
                        background-color: #fff;
                    }
                }
                td{
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t["gray-color"]}}
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
                                border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                            }
                            .ant-checkbox-inner{
                                border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                            }
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                        }
                    }
                    .ant-checkbox-checked .ant-checkbox-inner{
                        background-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                        border-color: ${e=>{let{theme:t}=e;return t["success-color"]}};
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
                    color: ${e=>{let{theme:t}=e;return t["gray-color"]}}
                }
                .star{
                    margin: 0 20px;
                    &.active{
                        svg,
                        i{
                            color: ${e=>{let{theme:t}=e;return t["warning-color"]}} !important;
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
                        ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
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
`},87535:(e,t,a)=>{a.r(t),a.d(t,{TodoStyle:()=>n});const n=a(19335).Ay.div`
    @media only screen and (max-width: 575px){
        margin-top: 10px;
    }
  .ant-card-head{
      margin-bottom: 10px;
  }
`},6748:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(9950),i=a(87827),o=a(87094),r=a(41988),l=a(55902),s=a(73878),d=a(87535),c=a(67482),u=a(6805),p=a(72449),h=a(57687),m=a(77967),x=a(37027),f=a(44414);const g=function(){const e=(0,s.d4)((e=>e.Todo.data)),t=(0,s.wA)(),[a,g]=(0,n.useState)({inputData:"",selectedRowKeys:[]}),{inputData:v}=a,[y]=i.A.useForm(),b=()=>{g({...a,visible:!0})};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.PageHeader,{title:"To Do",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"To Do"}]}),(0,f.jsxs)(c.Main,{children:[(0,f.jsx)(o.A,{gutter:30,children:(0,f.jsx)(r.A,{xs:24,children:(0,f.jsx)(d.TodoStyle,{children:(0,f.jsx)(x.default,{isApp:!0,todoData:e,showModal:b})})})}),(0,f.jsx)(u.Modal,{type:a.modalType,title:"Add New Todo",visible:a.visible,footer:null,onCancel:()=>{g({...a,visible:!1})},children:(0,f.jsx)("div",{className:"todo-modal",children:(0,f.jsx)(c.BasicFormWrapper,{children:(0,f.jsxs)(i.A,{className:"adTodo-form",name:"todoAdd",form:y,onFinish:()=>{const n=[];e.map((e=>n.push(e.key)));const i=Math.max(...n);""!==v?(t((0,m.ToDoAddData)([...e,{key:i+1,item:v,time:(new Date).getTime(),favorite:!1}])),g({...a,inputData:"",visible:!1})):alert("Please Give a Task Title...")},children:[(0,f.jsx)(l.A,{value:v,onChange:e=>{g({...a,inputData:e.target.value})},placeholder:"Input Item Name......."}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(p.Button,{onClick:b,htmlType:"submit",className:"btn-adTodo",type:"primary",size:"large",children:"Add New"})]})})})})]})]})}},77967:(e,t,a)=>{a.r(t),a.d(t,{ToDoAddData:()=>p,ToDoDeleteData:()=>h,ToDoGetData:()=>u,onStarUpdate:()=>m});var n=a(61690),i=a(9375);const{todoReadBegin:o,todoReadSuccess:r,todoReadErr:l,starUpdateBegin:s,starUpdateSuccess:d,starUpdateErr:c}=n.default,u=()=>async e=>{try{e(o()),e(r(i))}catch(t){e(l(t))}},p=e=>async t=>{try{t(o()),t(r(e))}catch(a){t(l(a))}},h=e=>async t=>{try{t(o()),t(r(e))}catch(a){t(l(a))}},m=(e,t)=>async a=>{try{a(s()),e.map((n=>{if(n.key===t){const e=n;n.favorite?e.favorite=!1:e.favorite=!0}return a(d(e))}))}catch(n){a(c(n))}}},28967:(e,t,a)=>{var n=a(6305).default,i=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(43693)),r=i(a(94634)),l=i(a(48738)),s=i(a(14691)),d=n(a(9950)),c=d,u=a(78279),p=a(3352),h=(i(a(85778)),a(64931)),m=i(a(77588)),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a},f=function(e,t){var a,n=e.prefixCls,i=e.className,f=e.children,g=e.indeterminate,v=void 0!==g&&g,y=e.style,b=e.onMouseEnter,k=e.onMouseLeave,j=e.skipGroup,w=void 0!==j&&j,C=e.disabled,N=x(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),D=c.useContext(u.ConfigContext),_=D.getPrefixCls,A=D.direction,T=c.useContext(h.GroupContext),$=(0,d.useContext)(p.FormItemInputContext).isFormItemInput,O=(0,d.useContext)(m.default),S=null!==(a=(null===T||void 0===T?void 0:T.disabled)||C)&&void 0!==a?a:O,E=c.useRef(N.value);c.useEffect((function(){null===T||void 0===T||T.registerValue(N.value)}),[]),c.useEffect((function(){if(!w)return N.value!==E.current&&(null===T||void 0===T||T.cancelValue(E.current),null===T||void 0===T||T.registerValue(N.value),E.current=N.value),function(){return null===T||void 0===T?void 0:T.cancelValue(N.value)}}),[N.value]);var P=_("checkbox",n),M=(0,r.default)({},N);T&&!w&&(M.onChange=function(){N.onChange&&N.onChange.apply(N,arguments),T.toggleOption&&T.toggleOption({label:f,value:N.value})},M.name=T.name,M.checked=T.value.includes(N.value));var F=(0,l.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(P,"-wrapper"),!0),"".concat(P,"-rtl"),"rtl"===A),"".concat(P,"-wrapper-checked"),M.checked),"".concat(P,"-wrapper-disabled"),S),"".concat(P,"-wrapper-in-form-item"),$),i),I=(0,l.default)((0,o.default)({},"".concat(P,"-indeterminate"),v)),z=v?"mixed":void 0;return c.createElement("label",{className:F,style:y,onMouseEnter:b,onMouseLeave:k},c.createElement(s.default,(0,r.default)({"aria-checked":z},M,{prefixCls:P,className:I,disabled:S,ref:t})),void 0!==f&&c.createElement("span",null,f))},g=c.forwardRef(f);t.default=g},64931:(e,t,a)=>{var n=a(6305).default,i=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GroupContext=void 0;var o=i(a(94634)),r=i(a(43693)),l=i(a(41132)),s=i(a(85715)),d=i(a(48738)),c=i(a(76270)),u=n(a(9950)),p=a(78279),h=i(a(28967)),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a},x=t.GroupContext=u.createContext(null),f=function(e,t){var a=e.defaultValue,n=e.children,i=e.options,f=void 0===i?[]:i,g=e.prefixCls,v=e.className,y=e.style,b=e.onChange,k=m(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),j=u.useContext(p.ConfigContext),w=j.getPrefixCls,C=j.direction,N=u.useState(k.value||a||[]),D=(0,s.default)(N,2),_=D[0],A=D[1],T=u.useState([]),$=(0,s.default)(T,2),O=$[0],S=$[1];u.useEffect((function(){"value"in k&&A(k.value||[])}),[k.value]);var E=function(){return f.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},P=w("checkbox",g),M="".concat(P,"-group"),F=(0,c.default)(k,["value","disabled"]);f&&f.length>0&&(n=E().map((function(e){return u.createElement(h.default,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:k.disabled,value:e.value,checked:_.includes(e.value),onChange:e.onChange,className:"".concat(M,"-item"),style:e.style},e.label)})));var I={toggleOption:function(e){var t=_.indexOf(e.value),a=(0,l.default)(_);-1===t?a.push(e.value):a.splice(t,1),"value"in k||A(a);var n=E();null===b||void 0===b||b(a.filter((function(e){return O.includes(e)})).sort((function(e,t){return n.findIndex((function(t){return t.value===e}))-n.findIndex((function(e){return e.value===t}))})))},value:_,disabled:k.disabled,name:k.name,registerValue:function(e){S((function(t){return[].concat((0,l.default)(t),[e])}))},cancelValue:function(e){S((function(t){return t.filter((function(t){return t!==e}))}))}},z=(0,d.default)(M,(0,r.default)({},"".concat(M,"-rtl"),"rtl"===C),v);return u.createElement("div",(0,o.default)({className:z,style:y},F,{ref:t}),u.createElement(x.Provider,{value:I},n))},g=u.forwardRef(f);t.default=u.memo(g)}}]);