"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4779],{64779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var i=a(9950),s=a(87094),r=a(41988),n=a(90650),c=a(72896),o=a(73878),d=a(42074),l=a(95467),p=a(43301),E=a(67482),x=a(72449),g=a(29355),h=a(57687),u=a(81044),S=a(44414);const A=function(){const e=(0,o.wA)(),{crud:t,isLoading:A}=(0,o.d4)((e=>({crud:e.crud.data,isLoading:e.crud.loading}))),[F,f]=(0,i.useState)({selectedRowKeys:[]}),{selectedRowKeys:b}=F;(0,i.useEffect)((()=>{u.fbDataRead&&e((0,u.fbDataRead)())}),[e]);const B=[];t.length&&t.map(((t,i)=>{const{id:s,name:r,email:n,company:c,position:o,join:p,status:E,city:x,country:g,image:h}=t;return B.push({key:i+1,name:(0,S.jsxs)("div",{className:"record-img align-center-v",children:[(0,S.jsx)("img",{src:null!==h?h:a(98831),alt:s}),(0,S.jsxs)("span",{children:[(0,S.jsx)("span",{children:r}),(0,S.jsxs)("span",{className:"record-location",children:[x,",",g]})]})]}),email:n,company:c,position:o,jdate:p,status:(0,S.jsx)("span",{className:`status ${E}`,children:E}),action:(0,S.jsxs)("div",{className:"table-actions",children:[(0,S.jsx)(d.N_,{className:"edit",to:`/admin/firestore/edit/${s}`,children:(0,S.jsx)(l.A,{icon:"edit",size:14})}),"\xa0\xa0\xa0",(0,S.jsx)(d.N_,{className:"delete",onClick:()=>(t=>(window.confirm("Are you sure delete this?")&&e((0,u.fbDataDelete)(parseInt(t,10))),!1))(s),to:"#",children:(0,S.jsx)(l.A,{icon:"trash-2",size:14})})]})})}));const D={selectedRowKeys:b,onChange:e=>{f({...F,selectedRowKeys:e})}};return(0,S.jsxs)(p.RecordViewWrapper,{children:[(0,S.jsx)(h.PageHeader,{routes:[],subTitle:(0,S.jsx)("div",{children:(0,S.jsx)(x.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,S.jsxs)(d.N_,{to:"/admin/firestore/fbAdd",children:[(0,S.jsx)(l.A,{icon:"plus",size:14})," Add New"]})},"1")}),buttons:[(0,S.jsxs)("div",{className:"search-box",children:[(0,S.jsx)("span",{className:"search-icon",children:(0,S.jsx)(l.A,{icon:"search",size:14})}),(0,S.jsx)("input",{onChange:a=>{e((0,u.fbDataSearch)(a.target.value,t))},type:"text",name:"recored-search",placeholder:"Search Here"})]},1)],ghost:!0,title:"Data List"}),(0,S.jsx)(E.Main,{children:(0,S.jsx)(s.A,{gutter:15,children:(0,S.jsx)(r.A,{className:"w-100",md:24,children:(0,S.jsx)(g.Cards,{headless:!0,children:A?(0,S.jsx)("div",{className:"spin",children:(0,S.jsx)(n.A,{})}):(0,S.jsx)("div",{children:(0,S.jsx)(E.TableWrapper,{className:"table-data-view table-responsive",children:(0,S.jsx)(c.A,{rowSelection:D,pagination:{pageSize:10,showSizeChanger:!0},dataSource:B,columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Company",dataIndex:"company",key:"company"},{title:"Position",dataIndex:"position",key:"position"},{title:"Status",dataIndex:"status",key:"status"},{title:"Joining Date",dataIndex:"jdate",key:"jdate"},{title:"Actions",dataIndex:"action",key:"action",width:"90px"}]})})})})})})})]})}},43301:(e,t,a)=>{a.r(t),a.d(t,{RecordFormWrapper:()=>r,RecordViewWrapper:()=>s});var i=a(19335);const s=i.Ay.div`
    .btn-add_new{
        ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 10px;
        a{
            display: flex;
            align-items: center;
            svg,
            img,
            i{
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 6px;
            }
        }
    }
    .search-box{
        position: relative;
        box-shadow: 0 5px 5px rgba(#9299B8,.3);
        .search-icon{
            position: absolute;
            ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 18px;
            top: 50%;
            transform: translateY(-50%);
            svg,
            img{
                margin-top: 6px;
                min-width: 16px;
                color: #9299B8;
            }
        }
        input{
            border: 0 none;
            height: 40px;
            min-width: 280px;
            padding: ${e=>{let{theme:t}=e;return t.rtl?"0 45px 0 20px":"0 20px 0 45px"}};
            border-radius: 6px;
            &::placeholder{
                color: #ADB4D2;
            }
            &:focus{
                outline: none;
            }
        }
    }
`,r=i.Ay.div`
    .pro-image{
        position: relative;
        margin-bottom: 30px;
        .ant-spin.ant-spin-spinning{
            position: absolute;
            top: 0;
            ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
            width: 120px;
            height: 120px;
            background: #ffffff90;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 10;
            &:after{
                position: absolute;
                ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #272B4120;
                content: '';
                z-index: -1;
            }
            .ant-spin-dot {
                position: relative;
                z-index: 10;
            }
        }
        img{
            max-width: 120px;
            border-radius: 50%;
        }
        .ant-spin{
            height: 120px;
            width: 120px;
            display: flex;
            align-items: center;
        }
        .ant-upload-select{
            position: absolute;
            ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 80px;
            bottom: -5px;
            height: 40px;
            width: 40px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 222;
            span{
                display: inline-flex;
                height: 32px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 32px;
                background: #5F63F2;
            }
        }
        .upload-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        .info{
            ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 20px;
            h1{
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 0;
            }
        }
        .ant-upload-list-item{
            margin-top: 0;
            &:hover{
                .ant-upload-list-item-info{
                    background-color: transparent;
                }
            }
            .ant-upload-list-item-info{
                >span{
                    display: flex;
                    align-items: center;
                    ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 14px;
                    ${e=>{let{theme:t}=e;return t.rtl?"padding-left":"padding-right"}}: 10px;
                }
                .ant-upload-list-item-card-actions {
                    /* // top: -8px; */
                }
            }
        }
    }

    .record-spin{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`},81044:(e,t,a)=>{a.r(t),a.d(t,{fbDataDelete:()=>U,fbDataRead:()=>y,fbDataSearch:()=>w,fbDataSingle:()=>j,fbDataSubmit:()=>R,fbDataUpdate:()=>C,fbFileClear:()=>N,fbFileUploder:()=>I});var i=a(78777),s=a(56365);const{fbAddBegin:r,fbAddSuccess:n,fbAddErr:c,fbReadBegin:o,fbReadSuccess:d,fbReadErr:l,fbUpdateBegin:p,fbUpdateSuccess:E,fbUpdateErr:x,fbDeleteBegin:g,fbDeleteSuccess:h,fbDeleteErr:u,fbSingleDataBegin:S,fbSingleDataSuccess:A,fbSingleDataErr:F,fbUploadBegin:f,fbUploadSuccess:b,fbUploadErr:B,fbSearchBegin:D,fbSearchSuccess:_,fbSearchErr:m}=s.default,R=e=>async(t,a,s)=>{let{_:o,getFirestore:d}=s;const l=d();try{await t(r()),await l.collection("users").doc(`${e.id}`).set(e),await t(n(e)),await void i.A.success({message:"Your Record hasbeen Submited"})}catch(p){await t(c(p)),await(e=>{i.A.error({message:e})})(p)}},y=()=>async(e,t,a)=>{let{_:i,getFirestore:s}=a;const r=s(),n=[];try{await e(o());const t=await r.collection("users").get();await t.forEach((e=>{n.push(e.data())})),await e(d(n))}catch(c){await e(l(c))}},w=e=>async(t,a,i)=>{let{getFirebase:s,getFirestore:r}=i;const n=r(),c=[];try{await t(D());const a=await n.collection("users").get();await a.forEach((e=>{c.push(e.data())}));const i=c.filter((t=>t.name.toLowerCase().startsWith(e.toLowerCase())));await t(_(i))}catch(o){await t(m(o))}},C=(e,t)=>async(a,s,r)=>{let{getFirebase:n,getFirestore:c}=r;const o=c();try{await a(p()),await o.collection("users").doc(`${e}`).update({...t});const s=await o.collection("users").where("id","==",e).get();await s.forEach((e=>{a(E(e.data()))})),await void i.A.success({message:"Your Record hasbeen updated"})}catch(d){await a(x(d)),await(e=>{i.A.error({message:e})})(d)}},U=e=>async(t,a,s)=>{let{getFirebase:r,getFirestore:n}=s;const c=n(),o=[];try{await t(g()),await c.collection("users").doc(`${e}`).delete();const a=await c.collection("users").get();await a.forEach((e=>{o.push(e.data())})),await t(h(o)),await void i.A.success({message:"Your Record hasbeen Deleted"}),await y()}catch(d){await t(u(d)),await(e=>{i.A.error({message:e})})(d)}},j=e=>async(t,a,i)=>{let{getFirebase:s,getFirestore:r}=i;const n=r();try{await t(S());const a=await n.collection("users").where("id","==",e).get();await a.forEach((e=>{t(A(e.data()))}))}catch(c){await t(F(c))}},I=e=>async(t,a,i)=>{let{getFirebase:s,getFirestore:r,storage:n}=i;try{await t(f());const a=n().ref(`/images/${e.name}`).put(e);await a.on("state_changed",(()=>{n().ref("images").child(e.name).getDownloadURL().then((e=>{t(b(e))})).catch((e=>{t(B(e))}))}),(e=>{t(B(e))}))}catch(c){await t(B(c))}},N=()=>async e=>{try{await e(f()),e(b(null))}catch(t){await e(B(t))}}},56365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const i={FB_ADD_BEGIN:"FB_ADD_BEGIN",FB_ADD_SUCCESS:"FB_ADD_SUCCESS",FB_ADD_ERR:"FB_ADD_ERR",FB_READ_BEGIN:"FB_READ_BEGIN",FB_READ_SUCCESS:"FB_READ_SUCCESS",FB_READ_ERR:"FB_READ_ERR",FB_UPDATE_BEGIN:"FB_UPDATE_BEGIN",FB_UPDATE_SUCCESS:"FB_UPDATE_SUCCESS",FB_UPDATE_ERR:"FB_UPDATE_ERR",FB_DELETE_BEGIN:"FB_DELETE_BEGIN",FB_DELETE_SUCCESS:"FB_DELETE_SUCCESS",FB_DELETE_ERR:"FB_DELETE_ERR",FB_SINGLE_DATA_BEGIN:"FB_SINGLE_DATA_BEGIN",FB_SINGLE_DATA_SUCCESS:"FB_SINGLE_DATA_SUCCESS",FB_SINGLE_DATA_ERR:"FB_SINGLE_DATA_ERR",FB_UPLOAD_BEGIN:"FB_UPLOAD_BEGIN",FB_UPLOAD_SUCCESS:"FB_UPLOAD_SUCCESS",FB_UPLOAD_ERR:"FB_UPLOAD_ERR",FB_SEARCH_BEGIN:"FB_SEARCH_BEGIN",FB_SEARCH_SUCCESS:"FB_SEARCH_SUCCESS",FB_SEARCH_ERR:"FB_SEARCH_ERR",fbSearchBegin:()=>({type:i.FB_SEARCH_BEGIN}),fbSearchSuccess:e=>({type:i.FB_SEARCH_SUCCESS,data:e}),fbSearchErr:e=>({type:i.FB_SEARCH_ERR,err:e}),fbUploadBegin:()=>({type:i.FB_UPLOAD_BEGIN}),fbUploadSuccess:e=>({type:i.FB_UPLOAD_SUCCESS,data:e}),fbUploadErr:e=>({type:i.FB_UPLOAD_ERR,err:e}),fbAddBegin:()=>({type:i.FB_ADD_BEGIN}),fbAddSuccess:e=>({type:i.FB_ADD_SUCCESS,data:e}),fbAddErr:e=>({type:i.FB_ADD_ERR,err:e}),fbReadBegin:()=>({type:i.FB_READ_BEGIN}),fbReadSuccess:e=>({type:i.FB_READ_SUCCESS,data:e}),fbReadErr:e=>({type:i.FB_READ_ERR,err:e}),fbUpdateBegin:()=>({type:i.FB_UPDATE_BEGIN}),fbUpdateSuccess:e=>({type:i.FB_UPDATE_SUCCESS,data:e}),fbUpdateErr:e=>({type:i.FB_UPDATE_ERR,err:e}),fbDeleteBegin:()=>({type:i.FB_DELETE_BEGIN}),fbDeleteSuccess:e=>({type:i.FB_DELETE_SUCCESS,data:e}),fbDeleteErr:e=>({type:i.FB_DELETE_ERR,err:e}),fbSingleDataBegin:()=>({type:i.FB_SINGLE_DATA_BEGIN}),fbSingleDataSuccess:e=>({type:i.FB_SINGLE_DATA_SUCCESS,data:e}),fbSingleDataErr:e=>({type:i.FB_SINGLE_DATA_ERR,err:e})},s=i},98831:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABNVBMVEUAAADFxcXGxsbGxsb////FxcXFxcXGxsbFxcXGxsbJycnl5eXFxcXZ2dnFxcXGxsbV1dXFxcXFxcXFxcXFxcXFxcXHx8fMzMz////FxcXFxcXFxcXGxsbGxsbFxcXFxcXGxsb////////////////////////FxcXFxcX////////Hx8f////FxcX////ExMT+/v7////////////t7e3+/v7////////FxcXExMT////FxcXGxsb////////////////s7Oz////+/v7+/v7////////////////IyMj////FxcX////9/f3ExMTGxsbCwsL7+/v39/f5+fnq6urKysrIyMjV1dX09PTT09Pi4uLa2trl5eXs7Ozf39/Jycnx8fHu7u7X19fQ0NDMzMzc3NzOzs6u+jaVAAAAS3RSTlMA9E9ZAvzJLvihIQjVBelCDNmw7uB6NRfRwriocWhh5Uod9e3Yw72RgEpCQCbQyZiLXD42Dvjy5Lyyqqqpk3pza1ZUtbStrIVkRRhMijsuAAAInElEQVRo3r1ah0IbMQy9hNFNS4GW7r333nvXZ8nOXoTZ/v8n9GxMdFPn0LQvgeAcuecny7KlOBgf+6tLp07cmT+3IMTCufk7J04tVfcH/xj7p67NVkQOKrPXpv4R+5HDSy/mBIu5F0uHD0ya9swJd3cwGP2VIT9x9sjkWA9VX+0Vgicm7H1dPTQR2unzkVgYQRQgfvHE+QmoPTsvDHyJHe5MTf8d762DYpc4ePgvaI+/En+B17udXweWKuKvUFk6sKtgUWZliFBm712InuLk+oueGjdg7BMTwr6xzL1nXkwMB/f48x6uiAmi4j2xzu8VE8XeqqdbzYgJY8bLxU6Lf4Azvnr/v+ZbZbyIQoF9AWGf5gEChUNBYJkp8bBjXv6MEBFbKvuKlognFpVjbJhcKGdV0ROMxtVmc9XKB/sswwITPg8c9FDbUgqx3ahJHYZa1hr91qpSLfSIJMUxzCtOQnfQ0ZIQyk5jA72iZxHvWX5cwfjS6sZ6RBUmIWVn2HQeBul+xt47WxCgK4xM4zIthVsdR5tmDutttH1DKCau5A7zIW6AUShEaDaMadPUpmneX9uMNAMyisVs3v7zOm9oVNCtSYMsseHV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"}}]);