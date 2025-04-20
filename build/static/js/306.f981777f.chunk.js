"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[306],{13269:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var a=n(29680),r=n(42140),s=n(34574),i=n(34683),o=(n(9950),n(73878)),l=n(42074),d=n(19026),c=n(79251),x=n(97871),p=n(29355),h=n(59377),m=n(44414);const g=function(t){let{data:e,listeners:n}=t;const g=(0,o.wA)(),{noteData:u}=(0,o.d4)((t=>({noteData:t.Note.data}))),{title:j,key:b,description:k,stared:f,label:v}=e,C=t=>{g((0,x.onLabelUpdate)(u,b,t))},y=(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"nav-labels",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("personal"),to:"#",children:[(0,m.jsx)(c.Bullet,{className:"personal"})," Personal"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("work"),to:"#",children:[(0,m.jsx)(c.Bullet,{className:"work"})," Work"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("social"),to:"#",children:[(0,m.jsx)(c.Bullet,{className:"social"})," Social"]})}),(0,m.jsx)("li",{children:(0,m.jsxs)(l.N_,{onClick:()=>C("important"),to:"#",children:[(0,m.jsx)(c.Bullet,{className:"important"})," Important"]})})]})})});return(0,m.jsx)(d.Card,{className:v,children:(0,m.jsxs)(p.Cards,{headless:!0,children:[(0,m.jsxs)("h4",{children:[(0,m.jsxs)("span",{children:[j,(0,m.jsx)("span",{className:`status-bullet ${v}`})]}),(0,m.jsx)("div",{...n,children:(0,m.jsx)(i.A,{})})]}),(0,m.jsx)("p",{children:k}),(0,m.jsxs)("div",{className:"actions",children:[(0,m.jsxs)("span",{children:[(0,m.jsx)(l.N_,{className:f?"star active":"star",onClick:()=>g((0,x.onStarUpdate)(u,b)),to:"#",children:(0,m.jsx)(r.A,{})}),(0,m.jsx)(l.N_,{onClick:()=>(()=>{const t=u.filter((t=>t.key!==b));g((0,x.noteDeleteData)(t))})(),to:"#",children:(0,m.jsx)(s.A,{})})]}),(0,m.jsx)(h.Dropdown,{content:y,children:(0,m.jsx)(l.N_,{to:"#",children:(0,m.jsx)(a.A,{})})})]})]})})}},19026:(t,e,n)=>{n.r(e),n.d(e,{Card:()=>a});const a=n(19335).Ay.div`
    .ant-card{
        border-radius: 15px !important;
    }
    .ant-card .ant-card-body{        
        border-radius: 15px !important;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};    
        padding-bottom: 20px !important;
        padding-top: 20px !important;
        transition: .35s;
        h4{
            display: flex;
            align-items: flex-start;
            font-size: 16px;
            margin-bottom: 16px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}}; 
            justify-content: space-between;
            svg{
                min-width: 16px;
                width: 16px;
                height: 16px;
                cursor: move;
                position: relative;
                top: 4px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}} : 6px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}} !important;
            }
            .status-bullet{
                position: relative;
                bottom: 2px;
                min-width: 7px;
                height: 7px;
                display: inline-block;
                border-radius: 50%;
               ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}} : 8px;
               &.personal{
                background: #5F63F2;
               }
               &.work{
                background: #20C997;
               }
               &.social{
                background: #FA8B0C;
               }
               &.important{
                background: #2C99FF;
               }
            }
        }
        .actions{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 18px;
            .star{
                svg,
                i,
                span{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}  !important;
                }
                &.active{
                    svg,
                    i,
                    span{
                        color: ${t=>{let{theme:e}=t;return e["warning-color"]}} !important;
                    } 
                } 
            }
            span{
                display: inline-block;
                margin: -5px;
                a {
                    margin: 5px;
                    svg,
                    i,
                    span{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}} !important;
                    }
                    svg{
                        width: 16px;
                        height: 16px;
                    }
                }
            }
            .ant-dropdown-trigger{
                svg{
                    width: 16px;
                    height: 16px;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}}
                }
            }
        }        
    } 
    &.personal .ant-card .ant-card-body{
        background: #5F63F240;
        &:hover{
            background: #5F63F290;
        }
    }
    &.work .ant-card .ant-card-body{
        background: #20C99740;
        &:hover{
            background: #20C99790;
        }
    }
    &.social .ant-card .ant-card-body{
        background: #FA8B0C40;
        &:hover{
            background: #FA8B0C90;
        }
    }
    &.important .ant-card .ant-card-body{
        background: #2C99FF40;
        &:hover{
            background: #2C99FF90;
        }
    }  
`},306:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});n(9950);var a=n(73878),r=n(71370),s=n(93718),i=n(78045),o=n(41988),l=n(87094),d=n(79251),c=n(13269),x=n(29355),p=n(97871),h=n(44414);function m(t){const e=t.value,{attributes:n,listeners:a,setNodeRef:s,transform:l,transition:d}=(0,i.gl)({id:e}),x={transform:r.Ks.Transform.toString(l),transition:d};return(0,h.jsx)(o.A,{xxl:8,xl:12,lg:12,sm:12,xs:24,children:(0,h.jsx)("div",{ref:s,style:x,...n,...a,children:(0,h.jsx)(c.default,{data:e})})},e)}const g=function(){const t=(0,a.wA)(),{noteData:e}=(0,a.d4)((t=>({noteData:t.Note.data})));return(0,h.jsx)(s.Mp,{collisionDetection:s.fp,onDragEnd:function(n){const{active:a,over:r}=n;if(a&&r&&a.id!==r.id){const n=e.indexOf(a.id),s=e.indexOf(r.id);t((0,p.noteDragData)((0,i.be)(e,n,s)))}},children:(0,h.jsx)(x.Cards,{title:"Favorite",children:(0,h.jsx)(d.NoteCardWrap,{children:(0,h.jsx)(l.A,{gutter:24,children:(0,h.jsx)(i.gB,{items:e,strategy:i.kL,children:e.filter((t=>t.stared)).map(((t,e)=>(0,h.jsx)(m,{index:e,value:t},t.key)))})})})})})}}}]);