"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6483],{96483:(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var t=s(9950),n=s(42074),i=s(28429),r=s(73878),l=s(87827),d=s(87094),c=s(41988),o=s(58451),m=s(55902),p=s(90650),h=s(94999),x=s(37782),j=s(78732),u=s(42140),k=s(90556),v=s(83678),b=s(67128),A=s(72422),g=s(67482),y=s(57687),N=s(72449),f=s(69606),_=s(44414);const w=(0,t.lazy)((()=>s.e(3252).then(s.bind(s,3252)))),C=(0,t.lazy)((()=>s.e(1563).then(s.bind(s,61563)))),T=(0,t.lazy)((()=>s.e(5358).then(s.bind(s,25358))));const $=function(){const[e]=l.A.useForm(),a=(0,r.wA)(),{taskData:s}=(0,r.d4)((e=>({taskData:e.Task.data}))),[$,z]=(0,t.useState)({responsive:0,collapsed:!1,visible:!1,modalType:"primary"}),B=()=>{z({...$,visible:!0,collapsed:!1})},F=()=>{z({...$,visible:!1})},S=e=>{F();const t=[];s.map((e=>t.push(e.id)));const n=Math.max(...t);a((0,f.taskAddData)([...s,{...e,id:n+1,favourite:!1,completed:!1}]))},{responsive:D,collapsed:U}=$;(0,t.useLayoutEffect)((()=>{function e(){const e=window.innerWidth;z({responsive:e})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const E=()=>{z({...$,collapsed:!U})},W="/admin/app/task";return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(y.PageHeader,{title:"Task",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Task"}]}),(0,_.jsxs)(g.Main,{children:[(0,_.jsxs)(d.A,{gutter:25,children:[(0,_.jsx)(c.A,{xxl:5,lg:6,md:7,xs:24,children:D>767?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(A.SidebarWrap,{className:"mb-30",children:(0,_.jsxs)("div",{className:"ninjadash-taskApp-sidebar",children:[(0,_.jsxs)(N.Button,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:B,children:[(0,_.jsx)(j.A,{}),"Add Task"]}),(0,_.jsxs)("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/all`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(k.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"All"})]})}),(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/favourites`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(u.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"Favourite"})]})}),(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/completed`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(v.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),(0,_.jsx)(o.A,{title:"Add Task",className:"ninjadash-addTask-modal",type:$.modalType,visible:$.visible,footer:null,onCancel:F,children:(0,_.jsx)("div",{className:"ninjadash-addTask-modal-inner",children:(0,_.jsx)(g.BasicFormWrapper,{children:(0,_.jsxs)(l.A,{form:e,name:"add-task",onFinish:S,children:[(0,_.jsx)(l.A.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:(0,_.jsx)(m.A,{placeholder:"Title",size:"middle"})}),(0,_.jsx)(l.A.Item,{name:"description",children:(0,_.jsx)(m.A.TextArea,{rows:4,placeholder:"Add Description"})}),(0,_.jsxs)("div",{className:"ninjadash-modal-actions",children:[(0,_.jsx)(N.Button,{size:"small",type:"white",outlined:!0,onClick:F,children:"Cancel"},"cancel"),(0,_.jsx)(N.Button,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]}):(0,_.jsxs)(A.FixedSidebar,{className:U?"show":"hide",children:[(0,_.jsx)(n.N_,{to:"#",type:"link",className:"trigger-close",onClick:E,children:(0,_.jsx)(b.A,{})}),(0,_.jsx)(A.SidebarWrap,{className:"mb-30",children:(0,_.jsxs)("div",{className:"ninjadash-taskApp-sidebar",children:[(0,_.jsxs)(N.Button,{className:"ninjadash-btn-add",size:"large",type:"primary",raised:!0,onClick:B,children:[(0,_.jsx)(j.A,{}),"Add Task"]}),(0,_.jsxs)("ul",{className:"ninjadash-taskApp-sidebar__nav",children:[(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/all`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(k.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"All"})]})}),(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/favourites`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(u.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"Favourite"})]})}),(0,_.jsx)("li",{className:"ninjadash-taskApp-sidebar__nav--item",children:(0,_.jsxs)(n.k2,{className:"ninjadash-taskApp-sidebar__nav--link",to:`${W}/completed`,children:[(0,_.jsx)("span",{className:"nav-item-icon",children:(0,_.jsx)(v.A,{})}),(0,_.jsx)("span",{className:"nav-item-text",children:"Completed"})]})})]})]})}),(0,_.jsx)(o.A,{title:"Add Task",className:"ninjadash-addTask-modal",type:$.modalType,visible:$.visible,footer:null,onCancel:F,children:(0,_.jsx)("div",{className:"ninjadash-addTask-modal-inner",children:(0,_.jsx)(g.BasicFormWrapper,{children:(0,_.jsxs)(l.A,{form:e,name:"add-task",onFinish:S,children:[(0,_.jsx)(l.A.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",children:(0,_.jsx)(m.A,{placeholder:"Title"})}),(0,_.jsx)(l.A.Item,{name:"description",children:(0,_.jsx)(m.A.TextArea,{rows:4,placeholder:"Add Description"})}),(0,_.jsxs)("div",{className:"ninjadash-modal-actions",children:[(0,_.jsx)(N.Button,{size:"small",type:"white",outlined:!0,onClick:F,children:"Cancel"},"cancel"),(0,_.jsx)(N.Button,{htmlType:"submit",size:"small",type:"primary",children:"Add Task"},"submit")]})]})})})})]})}),(0,_.jsxs)(c.A,{xxl:19,lg:18,md:17,xs:24,children:[D<=767&&(0,_.jsx)("div",{className:"sidebar-trier-wrap text-center mb-30",children:(0,_.jsx)(N.Button,{type:"link",className:"sidebar-trigger",style:{marginTop:0},onClick:E,children:U?(0,_.jsx)(h.A,{}):(0,_.jsx)(x.A,{})})}),(0,_.jsx)(t.Suspense,{fallback:(0,_.jsx)("div",{className:"spin",children:(0,_.jsx)(p.A,{})}),children:(0,_.jsxs)(i.BV,{children:[(0,_.jsx)(i.qh,{path:"all",element:(0,_.jsx)(w,{})}),(0,_.jsx)(i.qh,{path:"favourites",element:(0,_.jsx)(C,{})}),(0,_.jsx)(i.qh,{path:"completed",element:(0,_.jsx)(T,{})})]})})]})]}),(0,_.jsx)("span",{onKeyPress:()=>{},role:"button",tabIndex:"0",className:U?"overlay-dark show":"overlay-dark",onClick:E})]})]})}},72422:(e,a,s)=>{s.r(a),s.d(a,{FixedSidebar:()=>r,SidebarWrap:()=>n,TaskListWrap:()=>i});var t=s(19335);const n=t.Ay.div`
    .ninjadash-taskApp-sidebar{
        background-color: ${e=>{let{theme:a}=e;return a[a.mainContent]["white-background"]}};
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px ${e=>{let{theme:a}=e;return a[a.mainContent]["gray-text"]}}03;
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
        ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: -15px;
        .ninjadash-taskApp-sidebar__nav--item{
            display: block;
            .ninjadash-taskApp-sidebar__nav--link{
                display: flex;
                align-items: center;
                font-size: 14px;
                border-radius: 4px;
                color: ${e=>{let{theme:a}=e;return a[a.mainContent]["gray-text"]}};
                padding: 8px 15px;
                &:hover{
                    color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active"]}};
                    background-color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active-bg"]}};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active"]}};
                        }
                    }
                }
                &.active{
                    color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active"]}};
                    background-color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active-bg"]}};
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${e=>{let{theme:a}=e;return a[a.mainContent]["menu-active"]}};
                        }
                    }
                }
                .nav-item-icon{
                    line-height: 1;
                    ${e=>{let{theme:a}=e;return a.rtl?"margin-left":"margin-right"}}: 12px;
                    i,
                    svg{
                        width: 16px;
                        color: ${e=>{let{theme:a}=e;return a[a.mainContent]["extra-light-text"]}};
                    }
                }
            }
        }
    }
`,i=t.Ay.div`
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
            color: ${e=>{let{theme:a}=e;return a[a.mainContent]["dark-text"]}};
            border-bottom: 1px solid ${e=>{let{theme:a}=e;return a[a.mainContent]["border-color-default"]}};
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
`,r=t.Ay.div`
    position: fixed;
    top: 0;
    ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: 0px;
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
        ${e=>{let{theme:a}=e;return a.rtl?"margin-left":"margin-right"}}: 15px;
        svg,
        i{
            color: ${e=>{let{theme:a}=e;return a["danger-color"]}}; 
        }
    }
    .ninjadash-taskApp-sidebar{
        padding-top: 60px;
    }
`},69606:(e,a,s)=>{s.r(a),s.d(a,{onCompleteUpdate:()=>j,onStarUpdate:()=>x,ontaskDelete:()=>u,ontaskEdit:()=>k,taskAddData:()=>h});var t=s(51971);const{taskReadBegin:n,taskReadSuccess:i,taskReadErr:r,starUpdateBegin:l,starUpdateSuccess:d,starUpdateErr:c,completeUpdateBegin:o,completeUpdateSuccess:m,completeUpdateErr:p}=t.default,h=e=>async a=>{try{a(n()),a(i(e))}catch(s){a(r(s))}},x=(e,a)=>async s=>{try{s(l()),e.map((t=>{if(t.id===a){const e=t;e.favourite?t.favourite=!1:e.favourite=!0}return s(d(e))}))}catch(t){s(c(t))}},j=(e,a)=>async s=>{try{s(o()),e.map((t=>{if(t.id===a){const e=t;e.completed?t.completed=!1:e.completed=!0}return s(m(e))}))}catch(t){s(p(t))}},u=e=>async a=>{try{a(n()),a(i(e))}catch(s){a(r(s))}},k=e=>async a=>{try{a(n()),a(i(e))}catch(s){a(r(s))}}}}]);