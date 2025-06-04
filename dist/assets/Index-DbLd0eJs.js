const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/all-By7BaTiY.js","assets/index-B54C9UsK.js","assets/index-D3CzUhBr.css","assets/TaskList-Cg8nOu3F.js","assets/Style-BxWBb7X1.js","assets/actionCreator-D9o5e3ri.js","assets/favourites-BgJPSwHd.js","assets/completed-UIJ8hiw0.js"])))=>i.map(i=>d[i]);
import{s as v,F as n,u as I,t as P,r,j as a,P as S,M as L,e as R,f,B as t,v as A,N as d,w as y,x as T,y as C,z as w,D as $,I as x,L as U,n as M,G as O,J as B,R as W,a as j,S as q,_ as u}from"./index-B54C9UsK.js";import{t as V}from"./actionCreator-D9o5e3ri.js";const z=v.div`
    .ninjadash-taskApp-sidebar{
        background-color: ${({theme:s})=>s[s.mainContent]["white-background"]};
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px ${({theme:s})=>s[s.mainContent]["gray-text"]}03;
        min-height: 300px;
        .ninjadash-btn-add{
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            border-radius: 22px;
            height: 44px;
            margin-bottom: 20px;
        }
    }
    .ninjadash-taskApp-sidebar__nav{
        width: calc(100% + 30px);
        position: relative;
        ${({theme:s})=>s.rtl?"right":"left"}: -15px;
        .ninjadash-taskApp-sidebar__nav--item{
            display: block;
            .ninjadash-taskApp-sidebar__nav--link{
                display: flex;
                align-items: center;
                font-size: 14px;
                border-radius: 4px;
                color: ${({theme:s})=>s[s.mainContent]["gray-text"]};
                padding: 8px 15px;
                &:hover{
                    color: ${({theme:s})=>s[s.mainContent]["menu-active"]};
                    background-color: ${({theme:s})=>s[s.mainContent]["menu-active-bg"]};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({theme:s})=>s[s.mainContent]["menu-active"]};
                        }
                    }
                }
                &.active{
                    color: ${({theme:s})=>s[s.mainContent]["menu-active"]};
                    background-color: ${({theme:s})=>s[s.mainContent]["menu-active-bg"]};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({theme:s})=>s[s.mainContent]["menu-active"]};
                        }
                    }
                }
                .nav-item-icon{
                    line-height: 1;
                    ${({theme:s})=>s.rtl?"margin-left":"margin-right"}: 12px;
                    i,
                    svg{
                        width: 16px;
                        color: ${({theme:s})=>s[s.mainContent]["extra-light-text"]};
                    }
                }
            }
        }
    }
`,Z=v.div`
    .ninjadash-tasklist-wrap{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(#9299B8,.03);
    }
    .ninjadash-tasklist-head{
        .ninjadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            color: ${({theme:s})=>s[s.mainContent]["dark-text"]};
            border-bottom: 1px solid ${({theme:s})=>s[s.mainContent]["border-color-default"]};
        }
    }
    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            padding: 15px 30px;
            .ninjadash-tasklist-item__title{
                margin-bottom: 10px;
            }
        }
    }
`,X=v.div`
    position: fixed;
    top: 0;
    ${({theme:s})=>s.rtl?"right":"left"}: 0px;
    width: 280px;
    height: 100vh;
    z-index: 9999;
    background-color: #fff;
    overflow-y: auto;
    transition: all .3s ease;
    &.show{
        transform: translateX(0px);
    }
    &.hide{
        transform: translateX(-280px);
    }
    .trigger-close{
        float: right;
        margin-top: 15px;
        ${({theme:s})=>s.rtl?"margin-left":"margin-right"}: 15px;
        svg,
        i{
            color: ${({theme:s})=>s["danger-color"]}; 
        }
    }
    .ninjadash-taskApp-sidebar{
        padding-top: 60px;
    }
`,G=r.lazy(()=>u(()=>import("./all-By7BaTiY.js"),__vite__mapDeps([0,1,2,3,4,5]))),H=r.lazy(()=>u(()=>import("./favourites-BgJPSwHd.js"),__vite__mapDeps([6,1,2,3,4,5]))),J=r.lazy(()=>u(()=>import("./completed-UIJ8hiw0.js"),__vite__mapDeps([7,1,2,3,4,5])));function K(){const s=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Task"}],[k]=n.useForm(),F=I(),{taskData:b}=P(i=>({taskData:i.Task.data})),[e,c]=r.useState({responsive:0,collapsed:!1,visible:!1,modalType:"primary"}),g=()=>{c({...e,visible:!0,collapsed:!1})},o=()=>{c({...e,visible:!1})},_=i=>{o();const m=[];b.map(E=>m.push(E.id));const D=Math.max(...m);F(V([...b,{...i,id:D+1,favourite:!1,completed:!1}]))},{responsive:N,collapsed:p}=e;r.useLayoutEffect(()=>{function i(){const m=window.innerWidth;c({responsive:m})}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]);const h=()=>{c({...e,collapsed:!p})},l="/admin/app/task";return a.jsxs(a.Fragment,{children:[a.jsx(S,{title:"Task",routes:s}),a.jsxs(L,{children:[a.jsxs(R,{gutter:25,children:[a.jsx(f,{xxl:5,lg:6,md:7,xs:24,children:N>767?a.jsxs(a.Fragment,{children:[a.jsx(z,{className:"mb-30",children:a.jsxs("div",{className:"ninjadash-taskApp-sidebar",children:[a.jsxs(t,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:g,children:[a.jsx(A,{}),"Add Task"]}),a.jsxs("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/all`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(y,{})}),a.jsx("span",{className:"nav-item-text",children:"All"})]})}),a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/favourites`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(T,{})}),a.jsx("span",{className:"nav-item-text",children:"Favourite"})]})}),a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/completed`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(C,{})}),a.jsx("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),a.jsx(w,{title:"Add Task",className:"ninjadash-addTask-modal",type:e.modalType,visible:e.visible,footer:null,onCancel:o,children:a.jsx("div",{className:"ninjadash-addTask-modal-inner",children:a.jsx($,{children:a.jsxs(n,{form:k,name:"add-task",onFinish:_,children:[a.jsx(n.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:a.jsx(x,{placeholder:"Title",size:"middle"})}),a.jsx(n.Item,{name:"description",children:a.jsx(x.TextArea,{rows:4,placeholder:"Add Description"})}),a.jsxs("div",{className:"ninjadash-modal-actions",children:[a.jsx(t,{size:"small",type:"white",outlined:!0,onClick:o,children:"Cancel"},"cancel"),a.jsx(t,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]}):a.jsxs(X,{className:p?"show":"hide",children:[a.jsx(U,{to:"#",type:"link",className:"trigger-close",onClick:h,children:a.jsx(M,{})}),a.jsx(z,{className:"mb-30",children:a.jsxs("div",{className:"ninjadash-taskApp-sidebar",children:[a.jsxs(t,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:g,children:[a.jsx(A,{}),"Add Task"]}),a.jsxs("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/all`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(y,{})}),a.jsx("span",{className:"nav-item-text",children:"All"})]})}),a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/favourites`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(T,{})}),a.jsx("span",{className:"nav-item-text",children:"Favourite"})]})}),a.jsx("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:a.jsxs(d,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${l}/completed`,children:[a.jsx("span",{className:"nav-item-icon",children:a.jsx(C,{})}),a.jsx("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),a.jsx(w,{title:"Add Task",className:"ninjadash-addTask-modal",type:e.modalType,visible:e.visible,footer:null,onCancel:o,children:a.jsx("div",{className:"ninjadash-addTask-modal-inner",children:a.jsx($,{children:a.jsxs(n,{form:k,name:"add-task",onFinish:_,children:[a.jsx(n.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:a.jsx(x,{placeholder:"Title"})}),a.jsx(n.Item,{name:"description",children:a.jsx(x.TextArea,{rows:4,placeholder:"Add Description"})}),a.jsxs("div",{className:"ninjadash-modal-actions",children:[a.jsx(t,{size:"small",type:"white",outlined:!0,onClick:o,children:"Cancel"},"cancel"),a.jsx(t,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]})}),a.jsxs(f,{xxl:19,lg:18,md:17,xs:24,children:[N<=767&&a.jsx("div",{className:"sidebar-trier-wrap text-center mb-30",children:a.jsx(t,{type:"link",className:"sidebar-trigger",style:{marginTop:0},onClick:h,children:p?a.jsx(O,{}):a.jsx(B,{})})}),a.jsx(r.Suspense,{fallback:a.jsx("div",{className:"spin",children:a.jsx(q,{})}),children:a.jsxs(W,{children:[a.jsx(j,{path:"all",element:a.jsx(G,{})}),a.jsx(j,{path:"favourites",element:a.jsx(H,{})}),a.jsx(j,{path:"completed",element:a.jsx(J,{})})]})})]})]}),a.jsx("span",{onKeyPress:()=>{},role:"button",tabIndex:"0",className:p?"overlay-dark show":"overlay-dark",onClick:h})]})]})}const aa=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{aa as I,Z as T};
