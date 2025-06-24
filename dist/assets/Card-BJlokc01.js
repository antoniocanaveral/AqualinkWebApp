import{s as b,u,t as k,j as a,X as C,bQ as v,L as n,x as y,V as F,aQ as w,aR as f,ay as N}from"./index-BJIB_XH5.js";import{o as $,a as D,B as o,b as U}from"./Note-BZvPMHDq.js";const A=b.div`
    .ant-card{
        border-radius: 15px !important;
    }
    .ant-card .ant-card-body{        
        border-radius: 15px !important;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};    
        padding-bottom: 20px !important;
        padding-top: 20px !important;
        transition: .35s;
        h4{
            display: flex;
            align-items: flex-start;
            font-size: 16px;
            margin-bottom: 16px;
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]}; 
            justify-content: space-between;
            svg{
                min-width: 16px;
                width: 16px;
                height: 16px;
                cursor: move;
                position: relative;
                top: 4px;
                ${({theme:t})=>t.rtl?"margin-right":"margin-left"} : 6px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]} !important;
            }
            .status-bullet{
                position: relative;
                bottom: 2px;
                min-width: 7px;
                height: 7px;
                display: inline-block;
                border-radius: 50%;
               ${({theme:t})=>t.rtl?"margin-right":"margin-left"} : 8px;
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
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]}  !important;
                }
                &.active{
                    svg,
                    i,
                    span{
                        color: ${({theme:t})=>t["warning-color"]} !important;
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
                        color: ${({theme:t})=>t[t.mainContent]["gray-text"]} !important;
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
                    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]}
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
`;function B({data:t,listeners:d}){const i=u(),{noteData:e}=k(s=>({noteData:s.Note.data})),{title:p,key:l,description:x,stared:g,label:c}=t,r=s=>{i(U(e,l,s))},h=a.jsx(a.Fragment,{children:a.jsx("div",{className:"nav-labels",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsxs(n,{onClick:()=>r("personal"),to:"#",children:[a.jsx(o,{className:"personal"})," Personal"]})}),a.jsx("li",{children:a.jsxs(n,{onClick:()=>r("work"),to:"#",children:[a.jsx(o,{className:"work"})," Work"]})}),a.jsx("li",{children:a.jsxs(n,{onClick:()=>r("social"),to:"#",children:[a.jsx(o,{className:"social"})," Social"]})}),a.jsx("li",{children:a.jsxs(n,{onClick:()=>r("important"),to:"#",children:[a.jsx(o,{className:"important"})," Important"]})})]})})}),m=()=>{const s=e.filter(j=>j.key!==l);i(D(s))};return a.jsx(A,{className:c,children:a.jsxs(C,{headless:!0,children:[a.jsxs("h4",{children:[a.jsxs("span",{children:[p,a.jsx("span",{className:`status-bullet ${c}`})]}),a.jsx("div",{...d,children:a.jsx(v,{})})]}),a.jsx("p",{children:x}),a.jsxs("div",{className:"actions",children:[a.jsxs("span",{children:[a.jsx(n,{className:g?"star active":"star",onClick:()=>i($(e,l)),to:"#",children:a.jsx(y,{})}),a.jsx(n,{onClick:()=>m(),to:"#",children:a.jsx(F,{})})]}),a.jsx(w,{content:h,children:a.jsx(n,{to:"#",children:a.jsx(f,{})})})]})]})})}B.propTypes={data:N.object};export{B as N};
