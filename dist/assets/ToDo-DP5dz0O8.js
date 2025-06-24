import{s as b,t as D,u as T,r as f,F as i,j as a,P as g,M as v,e as y,f as N,aO as w,D as C,I as F,B as A}from"./index-BJIB_XH5.js";import{T as I,a as M}from"./Todo-Bstbjk46.js";import"./Style-8BCI8C7O.js";const S=b.div`
    @media only screen and (max-width: 575px){
        margin-top: 10px;
    }
  .ant-card-head{
      margin-bottom: 10px;
  }
`;function B(){const d=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"To Do"}],o=D(t=>t.Todo.data),l=T(),[e,s]=f.useState({inputData:"",selectedRowKeys:[]}),{inputData:n}=e,[c]=i.useForm(),m=t=>{s({...e,inputData:t.target.value})},p=()=>{const t=[];o.map(j=>t.push(j.key));const x=Math.max(...t);n!==""?(l(M([...o,{key:x+1,item:n,time:new Date().getTime(),favorite:!1}])),s({...e,inputData:"",visible:!1})):alert("Please Give a Task Title...")},r=()=>{s({...e,visible:!0})},u=()=>{s({...e,visible:!1})},h=()=>{u()};return a.jsxs(a.Fragment,{children:[a.jsx(g,{title:"To Do",routes:d}),a.jsxs(v,{children:[a.jsx(y,{gutter:30,children:a.jsx(N,{xs:24,children:a.jsx(S,{children:a.jsx(I,{isApp:!0,todoData:o,showModal:r})})})}),a.jsx(w,{type:e.modalType,title:"Add New Todo",visible:e.visible,footer:null,onCancel:h,children:a.jsx("div",{className:"todo-modal",children:a.jsx(C,{children:a.jsxs(i,{className:"adTodo-form",name:"todoAdd",form:c,onFinish:p,children:[a.jsx(F,{value:n,onChange:m,placeholder:"Input Item Name......."}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(A,{onClick:r,htmlType:"submit",className:"btn-adTodo",type:"primary",size:"large",children:"Add New"})]})})})})]})]})}export{B as default};
