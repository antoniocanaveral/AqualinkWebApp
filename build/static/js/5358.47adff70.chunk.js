"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[5358],{50371:(e,t,i)=>{i.r(t),i.d(t,{TaskListStyle:()=>s});const s=i(19335).Ay.div`
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
`},56409:(e,t,i)=>{i.r(t),i.d(t,{TaskList:()=>g});var s=i(90556),a=i(42140),n=i(67128),l=i(87827),d=i(52765),r=i(56231),o=i(58451),c=i(55902),h=i(9950),m=i(73878),x=i(42074),j=i(50371),p=i(67482),k=i(69606),u=i(72449),f=i(44414);function g(e){let{taskStatus:t,header:i,description:g,taskLimit:v}=e;const{task:N}=(0,m.d4)((e=>({task:e.Task.data}))),_=(0,m.wA)(),[b]=l.A.useForm(),[y,A]=(0,h.useState)({visible:!1,taskEditId:"",taskDeleteId:"",editableItem:{}}),C=(e,t)=>{A({...y,taskEditId:e,visible:!0,editableItem:t})},T=e=>{const t=N.filter((t=>t.id!==e));_((0,k.ontaskDelete)(t))},w=()=>{A({...y,visible:!1})},{taskEditId:$,editableItem:I,visible:S}=y,F=(e,t)=>{_((0,k.onStarUpdate)(e,t))};return(0,h.useEffect)((()=>{S&&b.setFieldsValue(I)}),[b,I,S]),(0,f.jsxs)(j.TaskListStyle,{children:[(0,f.jsxs)("div",{className:"ninjadash-tassklist-wrap",children:[""===i?"":(0,f.jsx)("div",{className:"ninjadash-tasklist-head",children:(0,f.jsx)("h2",{className:"ninjadash-tasklist-head__title",children:i})}),(0,f.jsx)("div",{className:"ninjadash-tasklist-body",children:"favourite"===t?N.filter((e=>e.favourite)).length>0?(0,f.jsx)("ul",{className:"ninjadash-tasklist",children:N.slice(0,v||N.length).sort(((e,t)=>t.id-e.id)).filter((e=>e.favourite)).map(((e,t)=>(0,f.jsxs)("li",{className:"ninjadash-tasklist-item",children:[(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__content",children:[(0,f.jsx)("div",{className:"ninjadash-tasklist-item__title",children:(0,f.jsx)(d.A,{checked:!!e.completed,onChange:()=>_((0,k.onCompleteUpdate)(N,e.id)),children:e.title})}),g?(0,f.jsx)("div",{className:"ninjadash-tasklist-item__text",children:(0,f.jsx)("p",{children:e.description})}):""]}),(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__action",children:[(0,f.jsx)(x.N_,{className:"ninjadash-edit",to:"#",onClick:()=>C(e.id,e),children:(0,f.jsx)(s.A,{})}),(0,f.jsx)(x.N_,{to:"#",className:e.favourite?"task-favourite active":"task-favourite",onClick:()=>F(N,e.id),children:(0,f.jsx)(a.A,{})}),(0,f.jsx)(r.A,{title:"Are you sure to delete this task?",onConfirm:()=>T(e.id),okText:"Yes",cancelText:"No",children:(0,f.jsx)(x.N_,{className:"ninjadash-delete",to:"#",children:(0,f.jsx)(n.A,{})})})]})]},t)))}):(0,f.jsx)("div",{className:"ninjadash-tasklist-empty",children:(0,f.jsx)("span",{children:"Sorry !! No Favourite Task Found :("})}):"completed"===t?N.filter((e=>e.completed)).length>0?(0,f.jsx)("ul",{className:"ninjadash-tasklist",children:N.slice(0,v||N.length).sort(((e,t)=>t.id-e.id)).filter((e=>e.completed)).map(((e,t)=>(0,f.jsxs)("li",{className:"ninjadash-tasklist-item",children:[(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__content",children:[(0,f.jsx)("div",{className:"ninjadash-tasklist-item__title",children:(0,f.jsx)(d.A,{checked:!!e.completed,onChange:()=>_((0,k.onCompleteUpdate)(N,e.id)),children:e.title})}),g?(0,f.jsx)("div",{className:"ninjadash-tasklist-item__text",children:(0,f.jsx)("p",{children:e.description})}):""]}),(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__action",children:[(0,f.jsx)(x.N_,{className:"ninjadash-edit",to:"#",onClick:()=>C(e.id,e),children:(0,f.jsx)(s.A,{})}),(0,f.jsx)(x.N_,{to:"#",className:e.favourite?"task-favourite active":"task-favourite",onClick:()=>F(N,e.id),children:(0,f.jsx)(a.A,{})}),(0,f.jsx)(r.A,{title:"Are you sure to delete this task?",onConfirm:()=>T(e.id),okText:"Yes",cancelText:"No",children:(0,f.jsx)(x.N_,{className:"ninjadash-delete",to:"#",children:(0,f.jsx)(n.A,{})})})]})]},t)))}):(0,f.jsx)("div",{className:"ninjadash-tasklist-empty",children:(0,f.jsx)("span",{children:"Sorry !! No Completed Task Found :("})}):N.length>0?(0,f.jsx)("ul",{className:"ninjadash-tasklist",children:N.slice(0,v||N.length).sort(((e,t)=>t.id-e.id)).map(((e,t)=>(0,f.jsxs)("li",{className:"ninjadash-tasklist-item",children:[(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__content",children:[(0,f.jsx)("div",{className:"ninjadash-tasklist-item__title",children:(0,f.jsx)(d.A,{checked:!!e.completed,onChange:()=>_((0,k.onCompleteUpdate)(N,e.id)),children:e.title})}),g?(0,f.jsx)("div",{className:"ninjadash-tasklist-item__text",children:(0,f.jsx)("p",{children:e.description})}):""]}),(0,f.jsxs)("div",{className:"ninjadash-tasklist-item__action",children:[(0,f.jsx)(x.N_,{className:"ninjadash-edit",to:"#",onClick:()=>C(e.id,e),children:(0,f.jsx)(s.A,{})}),(0,f.jsx)(x.N_,{to:"#",className:e.favourite?"task-favourite active":"task-favourite",onClick:()=>F(N,e.id),children:(0,f.jsx)(a.A,{})}),(0,f.jsx)(r.A,{title:"Are you sure to delete this task?",onConfirm:()=>T(e.id),okText:"Yes",cancelText:"No",children:(0,f.jsx)(x.N_,{className:"ninjadash-delete",to:"#",children:(0,f.jsx)(n.A,{})})})]})]},t)))}):(0,f.jsx)("div",{className:"ninjadash-tasklist-empty",children:(0,f.jsx)("span",{children:"Sorry !! No Task Found :("})})})]}),(0,f.jsx)(o.A,{title:"Edit Task",className:"ninjadash-addTask-modal",type:y.modalType,visible:y.visible,footer:null,onCancel:w,forceRender:!0,children:(0,f.jsx)("div",{className:"ninjadash-addTask-modal-inner",children:N.sort(((e,t)=>t.id-e.id)).filter((e=>e.id===$)).map(((e,t)=>(0,f.jsx)(p.BasicFormWrapper,{children:(0,f.jsxs)(l.A,{form:b,name:"add-task",onFinish:t=>((e,t)=>{const i=N.map((i=>i.id===t?i=e:i));_((0,k.ontaskEdit)(i)),A({...y,visible:!1})})(t,e.id),children:[(0,f.jsx)(l.A.Item,{rules:[{required:!0,message:"Please add a Title"}],name:"title",initialValue:e.title,children:(0,f.jsx)(c.A,{placeholder:"Title"})}),(0,f.jsx)(l.A.Item,{name:"description",initialValue:e.description,children:(0,f.jsx)(c.A.TextArea,{rows:4,placeholder:"Add Description"})}),(0,f.jsx)(l.A.Item,{hidden:"true",name:"favourite",initialValue:e.favourite,children:(0,f.jsx)(c.A,{})}),(0,f.jsx)(l.A.Item,{hidden:"true",name:"completed",initialValue:e.completed,children:(0,f.jsx)(c.A,{})}),(0,f.jsxs)("div",{className:"ninjadash-modal-actions",children:[(0,f.jsx)(u.Button,{size:"small",type:"white",outlined:!0,onClick:w,children:"Cancel"},"cancel"),(0,f.jsx)(u.Button,{htmlType:"submit",size:"small",type:"primary",children:"Edit"},"submit")]})]})},t)))})})]})}},25358:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});i(9950);var s=i(56409),a=i(72422),n=i(44414);const l=function(){return(0,n.jsx)(a.TaskListWrap,{className:"mb-30",children:(0,n.jsx)(s.TaskList,{header:"Task List",description:!0,taskStatus:"completed",taskLimit:10})})}}}]);