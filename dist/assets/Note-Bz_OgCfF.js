const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/all-Bp0jt1Wk.js","assets/index-B54C9UsK.js","assets/index-D3CzUhBr.css","assets/sortable.esm-DX901zD3.js","assets/Card-BAYBpDsO.js","assets/favorite-Bz47UGr8.js","assets/personal-DaOdHlcG.js","assets/work-4XQ2K6Bb.js","assets/social-DNCy-d3P.js","assets/important-BqyjJQ8W.js"])))=>i.map(i=>d[i]);
import{s as c,$ as Y,aP as Q,t as Z,u as K,F as u,r as l,j as e,P as X,M as J,e as G,f as $,B as b,g as W,h as q,X as N,v as E,N as o,w as S,x as I,L as v,n as tt,R as et,a as m,S as at,aO as nt,D as it,I as R,p as F,_ as h}from"./index-B54C9UsK.js";c.span`
    &.active{
        color: green;
        text-decoration: line-through;
    }
`;c(Y)`
  margin-bottom: 30px;  
  .ant-table{
    padding-bottom: 30px;
    border-radius: 10px;
    tr{
      th,
      td{
        &:first-child{
          ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 30px;
        }
        &:last-child{
          ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      /* ${({theme:t})=>t.rtl?"right: 15px;":"left: -15px;"} */
      right: 15px;
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: #fff;
        &:first-child{
          ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 20px;
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        .ant-table-selection-extra{
          ${({theme:t})=>t.rtl?"left":"right"}: -25px
        }
        .ant-dropdown-trigger{
          svg{
            width: 20px;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
          }
        }
        .email-top-search{
          display: flex;
          justify-content: ${({theme:t})=>t.rtl?"flex-start":"flex-end"};
          align-items: center;
          @media only screen and (max-width: 575px){
            display: none;
          }
          .ant-select{
            max-width: 350px;
          }
          .ant-select-selector{
            height: 46px !important;
          }
          .ant-select-selection-search{
            width: 100% !important;
            .ant-select-selection-search-input{
              text-align: right;
              border-radius: 24px;
              background: ${({theme:t})=>t[t.mainContent]["general-background"]};
              border: 0 none;
              input{
                height: 44px !important;
                background: ${({theme:t})=>t[t.mainContent]["general-background"]};
                &:placeholder{
                  color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                }
              }
              .ant-input-suffix{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
                .anticon-search{
                  svg{
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                  }
                }
              }
            }
          }
        }
        .email-top-right{
          justify-content: flex-end;
          .email-extra{
            line-height: 1;
            a{
              color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
              &:not(:last-child){
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 25px;
              }
              svg{
                width: 16px;
                height: 16px;
              }
            }
          }
          .page-number{
            display: inline-block
            font-size: 14px;
            font-weight: 400;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          .pagination-slider{
            margin: ${({theme:t})=>t.rtl?"0 15px 0 20px":"0 20px 0 15px"};
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${({theme:t})=>t["primary-color"]}10;
              }
              svg{
                color: ${({theme:t})=>t[t.mainContent]["light-text"]};
              }
            }
          }
        }
      }
    }
  }

  
  .ant-table-tbody{
    .ant-table-cell{
      white-space: normal !important;
      text-align: ${({theme:t})=>t.rtl?"right":"left"};
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({theme:t})=>t[t.mainContent]["gray-text"]}20;
        h1{
          font-weight: 600;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
          a{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
          }
        }
        .email-time{
          font-weight: 500;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        >td{
          background: #fff !important;
          border-color: #ffffff;
        }
      }
      h1 a{
        font-weight: 500;
        transition: 0s;
      }
      &.ant-table-row-selected{
        &:hover{
            >td{
              background: ${({theme:t})=>t[t.mainContent]["white-background"]};
            }
        }
        >td{
          background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        }
      }
      >td{
        padding: 15px 16px;
        &:last-child{
          text-align: ${({theme:t})=>t.rtl?"left":"right"};
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 400;
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: ${({theme:t})=>t.rtl?"left":"right"};
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    ${({theme:t})=>t.rtl?"left":"right"}: 0;
  }
  
`;const _=c.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      &.add-label-btn{
        &:hover{
          background: transparent;
          a{
            background: transparent;
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]}; !important;
          }
        }
        a{
          color: ${({theme:t})=>t[t.mainContent]["light-text"]} !important;
          transition: .3s;
          &:hover{
            background: transparent;
            svg,
            i,
            span{
              color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
            }
          }
        }
      }
      a{
        padding: 8px 20px;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        border-radius: 4px;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        svg{
          width: 16px;
          height: 16px;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 14px;
          color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
        &.active{
          background: ${({theme:t})=>t[t.mainContent]["menu-active-bg"]};
          color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          svg,
          i{
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          }
        }
      }

      &:hover{
        a{
          background: ${({theme:t})=>t[t.mainContent]["menu-active-bg"]};
          color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          svg,
          i{
            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
          }
        }
      }
      .nav-text{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        position: relative;
        width: calc(100% + 60px);
        ${({theme:t})=>t.rtl?"right":"left"}: 50%;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 8px;
        @media only screen and (max-width: 1199px){
          width: calc(100% + 40px);
          padding: 15px;
        }
        h1{
          text-align: left;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
          transition: .3s;
          color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        input{
          height: 44px;
          border-radius: 2px;
          border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
            height: 38px;
          }
          .ant-btn-default{
            padding: 0 12px;
            color: ${({theme:t})=>t[t.mainContent]["light-text"]};
          }
        }
      }
    }
  }
  .nav-labels{
    margin-top: 35px;
    p{
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding: 0 15px;
      color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      text-align: ${({theme:t})=>t.rtl?"right":"left"};
      img,
      svg,
      i{
        max-width: 16px;
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
      }
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`;c.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  @media only screen and (max-width: 575px){
    flex-flow: row !important;
    margin-bottom: 5px;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0 4px;
    transition: 0.3s ease;
    @media only screen and (max-width: 575px){
      width: 25px;
      height: 25px;
    }
    svg{
      width: 16px;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${({theme:t})=>t["primary-color"]};
      }
    }
  }
`;c.div`
  span{
    color: ${({theme:t})=>t[t.mainContent]["light-text"]};
  }
`;const bt=c.div`
  min-height: 625px;
  @media only screen and (max-width: 1199px){
    min-height: 100%;
  }
`,rt=c.div`
  position: relative;
  .sidebar-card{
    .ant-card{
      min-height: 710px;
      .ant-card-body{
        padding: 25px 0 !important;
      }
    }
  }
  .ant-card-body{
    padding: 30px 30px 0 30px !important;
  }
  .trigger-close.ant-btn-link{
    margin: 0 !important;
    position: absolute;
    ${({theme:t})=>t.rtl?"left":"right"}: 20px;
    top: 20px;
    z-index: 99;
    padding: 0;
    background: transparent !important;
  }
  .trigger-col {
    @media only screen and (max-width: 991px){
      text-align: center;
    }
  }
  .ant-btn-link{
    background: ${({theme:t})=>t[t.mainContent]["white-background"]}; !important;
    margin-bottom: 25px;
    border-radius: 6px;
    color: ${({theme:t})=>t["primary-color"]} !important;
    &:focus{
      color: ${({theme:t})=>t["primary-color"]} !important;
    }
  }
  .note-sideabr{
    &.hide{
      transform: translateX(${({theme:t})=>t.rtl?"100%":"-100%"});
      transition: .35s ease-in;
    }
    &.show{
      transform: translateX(0%);
      transition: .35s ease-in;
    }
    @media only screen and (max-width: 991px){
      display: block;
      background: #fff;
      position: fixed;
      ${({theme:t})=>t.rtl?"right":"left"}: 0;
      top: 60px;
      width: 280px;
      height: 100%;
      z-index: 99;
    }
    .ant-card{
      min-height: 900px;
      .ant-card-body{
        padding: 0px !important;
      }
    }
  }

  .note-sidebar-top{
    padding: 30px 30px 0;
    @media only screen and (max-width: 991px){
      padding: 60px 30px 0;
    }
    .ant-btn{
      height: 44px;
    }
  }

  .note-sidebar-bottom{
    padding: 0 15px 25px 15px;
  }

  table{
    .ant-table-tbody{
      .ant-table-cell{
        vertical-align: top;
      }
    }
  }
`,d=c.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
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
`,{noteReadBegin:U,noteReadSuccess:B,noteReadErr:L,starUpdateBegin:st,starUpdateSuccess:ot,starUpdateErr:lt,labelUpdateBegin:z,labelUpdateSuccess:T,labelUpdateErr:D}=Q,jt=t=>async a=>{try{a(z()),a(T(t))}catch(i){a(D(i))}},dt=t=>async a=>{try{a(U()),a(B(t))}catch(i){a(L(i))}},ft=t=>async a=>{try{a(U()),a(B(t))}catch(i){a(L(i))}},At=(t,a)=>async i=>{try{i(st()),t.map(r=>{if(r.key===a){const n=r;r.stared?n.stared=!1:n.stared=!0}return i(ot(t))})}catch(r){i(lt(r))}},vt=(t,a,i)=>async r=>{try{r(z()),t.map(n=>{if(n.key===a){const p=n;p.label=i}return r(T(t))})}catch(n){r(D(n))}},ct=l.lazy(()=>h(()=>import("./all-Bp0jt1Wk.js"),__vite__mapDeps([0,1,2,3,4]))),pt=l.lazy(()=>h(()=>import("./favorite-Bz47UGr8.js"),__vite__mapDeps([5,1,2,3,4]))),xt=l.lazy(()=>h(()=>import("./personal-DaOdHlcG.js"),__vite__mapDeps([6,1,2,3,4]))),gt=l.lazy(()=>h(()=>import("./work-4XQ2K6Bb.js"),__vite__mapDeps([7,1,2,3,4]))),mt=l.lazy(()=>h(()=>import("./social-DNCy-d3P.js"),__vite__mapDeps([8,1,2,3,4]))),ht=l.lazy(()=>h(()=>import("./important-BqyjJQ8W.js"),__vite__mapDeps([9,1,2,3,4]))),{Option:f}=F;function P(){const t=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Note"}],{noteData:a}=Z(x=>({noteData:x.Note.data})),i=K(),[r]=u.useForm(),[n,p]=l.useState({visible:!1,modalType:"primary",checked:[],responsive:0,collapsed:!1}),{responsive:y,collapsed:A}=n;l.useLayoutEffect(()=>{function x(){const j=window.innerWidth;p({responsive:j})}return window.addEventListener("resize",x),x(),()=>window.removeEventListener("resize",x)},[]);const k=()=>{p({...n,visible:!0})},w=()=>{p({...n,visible:!1})},H=x=>{w();const j=[];a.map(M=>j.push(M.key));const V=Math.max(...j);i(dt([...a,{...x,key:V+1,time:new Date().getTime(),stared:!1}])),r.resetFields()},O=()=>{w()},C=()=>{p({...n,collapsed:!A})},g=()=>{p({...n,collapsed:!1})},s=".";return e.jsxs(e.Fragment,{children:[e.jsx(X,{title:"Note",routes:t}),e.jsxs(J,{children:[e.jsx(rt,{children:e.jsxs(G,{className:"justify-content-center",gutter:25,children:[e.jsxs($,{className:"trigger-col",xxl:5,xl:7,lg:9,xs:24,children:[y<=991&&e.jsx(b,{type:"link",className:"mail-sidebar-trigger",style:{marginTop:0},onClick:C,children:A?e.jsx(W,{}):e.jsx(q,{})}),y>991?e.jsx("div",{className:"sidebar-card",children:e.jsxs(N,{headless:!0,children:[e.jsx("div",{className:"note-sidebar-top",children:e.jsxs(b,{onClick:k,shape:"round",type:"primary",size:"default",block:!0,children:[e.jsx(E,{})," Add Notes"]})}),e.jsx("div",{className:"note-sidebar-bottom",children:e.jsxs(_,{children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(o,{to:`${s}/all`,children:[e.jsx(S,{}),e.jsx("span",{className:"nav-text",children:e.jsx("span",{children:"All"})})]})}),e.jsx("li",{children:e.jsxs(o,{to:`${s}/favorite`,children:[e.jsx(I,{}),e.jsx("span",{className:"nav-text",children:e.jsx("span",{children:"Favorites"})})]})})]}),e.jsxs("div",{className:"nav-labels",children:[e.jsxs("p",{children:[e.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAPFJREFUOE+V1MENgjAUBuD3SPSqTCIj6AaCAxg3ELzJhYu9ASvgAEKcQEfASeSMCc/UCFZsaeXU0Jcvr68/IIvzEhBmoHgIoALERei7paoGWZKTarN9r4M6ZB94KMNYkmcAsB6CtAiHdZARooOMkSHoL0QF/Y30oTDwbGTxiedgQkRZuFttdNfN96O0mI6J7nxdI9p4SAsHm+ZqCnFgRHRBAIcAzmHgLV/ZMIVEAAhutYXzyHerLmA6SAXwJr5SqoKGgB9EdrSHZfntDMQjiBcg/V7EjrpiYQb9G5Qin44oe/8mjjXilg9RFgElYpKXtuYJYxHP4F8uc4QAAAAASUVORK5CYII=",import.meta.url).href,alt:"icon"})," Labels"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(o,{to:`${s}/personal`,children:[e.jsx(d,{className:"personal"})," Personal"]})}),e.jsx("li",{children:e.jsxs(v,{to:`${s}/work`,children:[e.jsx(d,{className:"work"})," Work"]})}),e.jsx("li",{children:e.jsxs(v,{to:`${s}/social`,children:[e.jsx(d,{className:"social"})," Social"]})}),e.jsx("li",{children:e.jsxs(v,{to:`${s}/important`,children:[e.jsx(d,{className:"important"})," Important"]})})]})]})]})})]})}):e.jsx("div",{className:A?"sidebar-card note-sideabr show":"sidebar-card note-sideabr hide",children:e.jsxs(N,{headless:!0,children:[e.jsx(b,{type:"link",className:"mail-sidebar-trigger trigger-close",style:{marginTop:0},onClick:C,children:e.jsx(tt,{})}),e.jsx("div",{className:"note-sidebar-top",children:e.jsxs(b,{onClick:k,shape:"round",type:"primary",size:"default",block:!0,children:[e.jsx(E,{})," Add Notes"]})}),e.jsx("div",{className:"note-sidebar-bottom",children:e.jsxs(_,{children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(o,{to:`${s}/all`,onClick:g,children:[e.jsx(S,{}),e.jsx("span",{className:"nav-text",children:e.jsx("span",{children:"All"})})]})}),e.jsx("li",{children:e.jsxs(o,{to:`${s}/favorite`,onClick:g,children:[e.jsx(I,{}),e.jsx("span",{className:"nav-text",children:e.jsx("span",{children:"Favorites"})})]})})]}),e.jsxs("div",{className:"nav-labels",children:[e.jsxs("p",{children:[e.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAPFJREFUOE+V1MENgjAUBuD3SPSqTCIj6AaCAxg3ELzJhYu9ASvgAEKcQEfASeSMCc/UCFZsaeXU0Jcvr68/IIvzEhBmoHgIoALERei7paoGWZKTarN9r4M6ZB94KMNYkmcAsB6CtAiHdZARooOMkSHoL0QF/Y30oTDwbGTxiedgQkRZuFttdNfN96O0mI6J7nxdI9p4SAsHm+ZqCnFgRHRBAIcAzmHgLV/ZMIVEAAhutYXzyHerLmA6SAXwJr5SqoKGgB9EdrSHZfntDMQjiBcg/V7EjrpiYQb9G5Qin44oe/8mjjXilg9RFgElYpKXtuYJYxHP4F8uc4QAAAAASUVORK5CYII=",import.meta.url).href,alt:"icon"})," Labels"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(o,{to:`${s}/personal`,onClick:g,children:[e.jsx(d,{className:"personal"})," Personal"]})}),e.jsx("li",{children:e.jsxs(o,{to:`${s}/work`,onClick:g,children:[e.jsx(d,{className:"work"})," Work"]})}),e.jsx("li",{children:e.jsxs(o,{to:`${s}/social`,onClick:g,children:[e.jsx(d,{className:"social"})," Social"]})}),e.jsx("li",{children:e.jsxs(o,{to:`${s}/important`,onClick:g,children:[e.jsx(d,{className:"important"})," Important"]})})]})]})]})})]})})]}),e.jsx($,{xxl:19,xl:17,lg:15,xs:24,children:e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"spin",children:e.jsx(at,{})}),children:e.jsxs(et,{children:[e.jsx(m,{path:"all",element:e.jsx(ct,{})}),e.jsx(m,{path:"favorite",element:e.jsx(pt,{})}),e.jsx(m,{path:"personal",element:e.jsx(xt,{})}),e.jsx(m,{path:"work",element:e.jsx(gt,{})}),e.jsx(m,{path:"social",element:e.jsx(mt,{})}),e.jsx(m,{path:"important",element:e.jsx(ht,{})})]})})})]})}),e.jsx(nt,{type:n.modalType,title:null,visible:n.visible,footer:null,onCancel:O,children:e.jsx("div",{className:"project-modal",children:e.jsx(it,{children:e.jsxs(u,{form:r,name:"createProject",onFinish:H,children:[e.jsx(u.Item,{rules:[{required:!0,message:"Please input your note title!"}],name:"title",label:"Title",children:e.jsx(R,{placeholder:"Note Title"})}),e.jsx(u.Item,{rules:[{required:!0,message:"Please input your note description!"}],name:"description",label:"Description",children:e.jsx(R.TextArea,{rows:4,placeholder:"Note Description"})}),e.jsx(u.Item,{name:"label",initialValue:"personal",label:"Note Label",children:e.jsxs(F,{style:{width:"100%"},children:[e.jsx(f,{value:"personal",children:"Personal"}),e.jsx(f,{value:"work",children:"Work"}),e.jsx(f,{value:"social",children:"Social"}),e.jsx(f,{value:"important",children:"Important"})]})}),e.jsx(b,{htmlType:"submit",size:"default",type:"primary",children:"Add New Note"},"submit")]})})})})]})]})}P.propTypes={};const yt=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{d as B,bt as N,ft as a,vt as b,yt as c,jt as n,At as o};
