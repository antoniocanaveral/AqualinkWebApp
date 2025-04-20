"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[6361],{66361:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(9950),r=a(99674),s=a(87827),n=a(87094),l=a(41988),c=a(48874),o=a(90650),d=a(55902),h=a(477),p=a(24893),x=a(28429),E=a(42074),u=a(73878),g=a(95467),A=a(43301),f=a(57687),F=a(29355),b=a(72449),S=a(67482),m=a(81044),B=a(42017),D=a(44414);const{Option:_}=r.A;const y=function(){const e=(0,u.wA)(),{isLoading:t,image:y,isFileLoading:j}=(0,u.d4)((e=>({isLoading:e.crud.loading,image:e.crud.image,isFileLoading:e.crud.fileLoading}))),{pathname:R}=(0,x.zy)(),[w]=s.A.useForm(),[C,U]=(0,i.useState)({join:""});(0,i.useEffect)((()=>{e((0,m.fbFileUploder)())}),[R,e]);const I={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!1,showUploadList:!1,headers:{authorization:"authorization-text"},onChange(t){"uploading"!==t.file.status&&e((0,m.fbFileUploder)(t.file.originFileObj)),"done"===t.file.status||t.file.status}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(f.PageHeader,{routes:[],buttons:[(0,D.jsx)(b.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,D.jsx)(E.N_,{to:"/admin/firestore/fbView",children:"View All"})},"1")],ghost:!0,title:"Add New"}),(0,D.jsx)(S.Main,{children:(0,D.jsx)(n.A,{gutter:15,children:(0,D.jsx)(l.A,{xs:24,children:(0,D.jsx)(A.RecordFormWrapper,{children:(0,D.jsx)(F.Cards,{headless:!0,children:(0,D.jsx)(n.A,{justify:"center",children:(0,D.jsx)(l.A,{xl:10,md:16,xs:24,children:(0,D.jsx)(S.BasicFormWrapper,{children:(0,D.jsxs)(s.A,{className:"add-record-form",style:{width:"100%"},layout:"vertical",form:w,name:"addnew",onFinish:t=>{e((0,m.fbDataSubmit)({...t,image:y,join:C.join,id:(new Date).getTime()})),w.resetFields(),e((0,m.fbFileClear)())},children:[(0,D.jsxs)("figure",{className:"pro-image align-center-v",children:[(0,D.jsx)("img",{src:y||a(98831),alt:""}),(0,D.jsxs)("figcaption",{children:[(0,D.jsx)(c.A,{...I,children:(0,D.jsx)(E.N_,{className:"upload-btn",to:"#",children:(0,D.jsx)(g.A,{icon:"camera",size:16})})}),(0,D.jsx)("div",{className:"info",children:(0,D.jsx)(B.default,{as:"h4",children:"Profile Photo"})}),j&&(0,D.jsx)("div",{className:"isUploadSpain",children:(0,D.jsx)(o.A,{})})]})]}),(0,D.jsx)(s.A.Item,{name:"name",label:"Name",children:(0,D.jsx)(d.A,{placeholder:"Input Name"})}),(0,D.jsx)(s.A.Item,{name:"email",rules:[{type:"email"}],label:"Email",children:(0,D.jsx)(d.A,{placeholder:"example@gmail.com"})}),(0,D.jsx)(s.A.Item,{name:"country",initialValue:"",label:"Country",children:(0,D.jsxs)(r.A,{style:{width:"100%"},children:[(0,D.jsx)(_,{value:"",children:"Please Select"}),(0,D.jsx)(_,{value:"bangladesh",children:"Bangladesh"}),(0,D.jsx)(_,{value:"india",children:"India"}),(0,D.jsx)(_,{value:"pakistan",children:"Pakistan"}),(0,D.jsx)(_,{value:"srilanka",children:"Srilanka"})]})}),(0,D.jsx)(s.A.Item,{name:"city",initialValue:"",label:"City",children:(0,D.jsxs)(r.A,{style:{width:"100%"},children:[(0,D.jsx)(_,{value:"",children:"Please Select"}),(0,D.jsx)(_,{value:"dhaka",children:"Dhaka"}),(0,D.jsx)(_,{value:"mymensingh",children:"Mymensingh"}),(0,D.jsx)(_,{value:"khulna",children:"Khulna"}),(0,D.jsx)(_,{value:"barisal",children:"Barisal"})]})}),(0,D.jsx)(s.A.Item,{name:"company",label:"Company",children:(0,D.jsx)(d.A,{placeholder:"Company Name"})}),(0,D.jsx)(s.A.Item,{name:"position",label:"Position",children:(0,D.jsx)(d.A,{placeholder:"Position"})}),(0,D.jsx)(s.A.Item,{label:"Joining Date",children:(0,D.jsx)(h.A,{onChange:(e,t)=>{U({join:t})},style:{width:"100%"},format:"YYYY/MM/DD"})}),(0,D.jsx)(s.A.Item,{name:"status",label:"Status",children:(0,D.jsxs)(p.Ay.Group,{children:[(0,D.jsx)(p.Ay,{value:"active",children:"Active"}),(0,D.jsx)(p.Ay,{value:"deactivated",children:"Deactivated"}),(0,D.jsx)(p.Ay,{value:"blocked",children:"Blocked"})]})}),(0,D.jsx)("div",{className:"record-form-actions text-right",children:(0,D.jsx)(b.Button,{size:"default",htmlType:"Save",type:"primary",children:t?"Loading...":"Submit"})})]})})})})})})})})})]})}},43301:(e,t,a)=>{a.r(t),a.d(t,{RecordFormWrapper:()=>s,RecordViewWrapper:()=>r});var i=a(19335);const r=i.Ay.div`
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
`,s=i.Ay.div`
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
`},81044:(e,t,a)=>{a.r(t),a.d(t,{fbDataDelete:()=>C,fbDataRead:()=>j,fbDataSearch:()=>R,fbDataSingle:()=>U,fbDataSubmit:()=>y,fbDataUpdate:()=>w,fbFileClear:()=>v,fbFileUploder:()=>I});var i=a(78777),r=a(56365);const{fbAddBegin:s,fbAddSuccess:n,fbAddErr:l,fbReadBegin:c,fbReadSuccess:o,fbReadErr:d,fbUpdateBegin:h,fbUpdateSuccess:p,fbUpdateErr:x,fbDeleteBegin:E,fbDeleteSuccess:u,fbDeleteErr:g,fbSingleDataBegin:A,fbSingleDataSuccess:f,fbSingleDataErr:F,fbUploadBegin:b,fbUploadSuccess:S,fbUploadErr:m,fbSearchBegin:B,fbSearchSuccess:D,fbSearchErr:_}=r.default,y=e=>async(t,a,r)=>{let{_:c,getFirestore:o}=r;const d=o();try{await t(s()),await d.collection("users").doc(`${e.id}`).set(e),await t(n(e)),await void i.A.success({message:"Your Record hasbeen Submited"})}catch(h){await t(l(h)),await(e=>{i.A.error({message:e})})(h)}},j=()=>async(e,t,a)=>{let{_:i,getFirestore:r}=a;const s=r(),n=[];try{await e(c());const t=await s.collection("users").get();await t.forEach((e=>{n.push(e.data())})),await e(o(n))}catch(l){await e(d(l))}},R=e=>async(t,a,i)=>{let{getFirebase:r,getFirestore:s}=i;const n=s(),l=[];try{await t(B());const a=await n.collection("users").get();await a.forEach((e=>{l.push(e.data())}));const i=l.filter((t=>t.name.toLowerCase().startsWith(e.toLowerCase())));await t(D(i))}catch(c){await t(_(c))}},w=(e,t)=>async(a,r,s)=>{let{getFirebase:n,getFirestore:l}=s;const c=l();try{await a(h()),await c.collection("users").doc(`${e}`).update({...t});const r=await c.collection("users").where("id","==",e).get();await r.forEach((e=>{a(p(e.data()))})),await void i.A.success({message:"Your Record hasbeen updated"})}catch(o){await a(x(o)),await(e=>{i.A.error({message:e})})(o)}},C=e=>async(t,a,r)=>{let{getFirebase:s,getFirestore:n}=r;const l=n(),c=[];try{await t(E()),await l.collection("users").doc(`${e}`).delete();const a=await l.collection("users").get();await a.forEach((e=>{c.push(e.data())})),await t(u(c)),await void i.A.success({message:"Your Record hasbeen Deleted"}),await j()}catch(o){await t(g(o)),await(e=>{i.A.error({message:e})})(o)}},U=e=>async(t,a,i)=>{let{getFirebase:r,getFirestore:s}=i;const n=s();try{await t(A());const a=await n.collection("users").where("id","==",e).get();await a.forEach((e=>{t(f(e.data()))}))}catch(l){await t(F(l))}},I=e=>async(t,a,i)=>{let{getFirebase:r,getFirestore:s,storage:n}=i;try{await t(b());const a=n().ref(`/images/${e.name}`).put(e);await a.on("state_changed",(()=>{n().ref("images").child(e.name).getDownloadURL().then((e=>{t(S(e))})).catch((e=>{t(m(e))}))}),(e=>{t(m(e))}))}catch(l){await t(m(l))}},v=()=>async e=>{try{await e(b()),e(S(null))}catch(t){await e(m(t))}}},56365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const i={FB_ADD_BEGIN:"FB_ADD_BEGIN",FB_ADD_SUCCESS:"FB_ADD_SUCCESS",FB_ADD_ERR:"FB_ADD_ERR",FB_READ_BEGIN:"FB_READ_BEGIN",FB_READ_SUCCESS:"FB_READ_SUCCESS",FB_READ_ERR:"FB_READ_ERR",FB_UPDATE_BEGIN:"FB_UPDATE_BEGIN",FB_UPDATE_SUCCESS:"FB_UPDATE_SUCCESS",FB_UPDATE_ERR:"FB_UPDATE_ERR",FB_DELETE_BEGIN:"FB_DELETE_BEGIN",FB_DELETE_SUCCESS:"FB_DELETE_SUCCESS",FB_DELETE_ERR:"FB_DELETE_ERR",FB_SINGLE_DATA_BEGIN:"FB_SINGLE_DATA_BEGIN",FB_SINGLE_DATA_SUCCESS:"FB_SINGLE_DATA_SUCCESS",FB_SINGLE_DATA_ERR:"FB_SINGLE_DATA_ERR",FB_UPLOAD_BEGIN:"FB_UPLOAD_BEGIN",FB_UPLOAD_SUCCESS:"FB_UPLOAD_SUCCESS",FB_UPLOAD_ERR:"FB_UPLOAD_ERR",FB_SEARCH_BEGIN:"FB_SEARCH_BEGIN",FB_SEARCH_SUCCESS:"FB_SEARCH_SUCCESS",FB_SEARCH_ERR:"FB_SEARCH_ERR",fbSearchBegin:()=>({type:i.FB_SEARCH_BEGIN}),fbSearchSuccess:e=>({type:i.FB_SEARCH_SUCCESS,data:e}),fbSearchErr:e=>({type:i.FB_SEARCH_ERR,err:e}),fbUploadBegin:()=>({type:i.FB_UPLOAD_BEGIN}),fbUploadSuccess:e=>({type:i.FB_UPLOAD_SUCCESS,data:e}),fbUploadErr:e=>({type:i.FB_UPLOAD_ERR,err:e}),fbAddBegin:()=>({type:i.FB_ADD_BEGIN}),fbAddSuccess:e=>({type:i.FB_ADD_SUCCESS,data:e}),fbAddErr:e=>({type:i.FB_ADD_ERR,err:e}),fbReadBegin:()=>({type:i.FB_READ_BEGIN}),fbReadSuccess:e=>({type:i.FB_READ_SUCCESS,data:e}),fbReadErr:e=>({type:i.FB_READ_ERR,err:e}),fbUpdateBegin:()=>({type:i.FB_UPDATE_BEGIN}),fbUpdateSuccess:e=>({type:i.FB_UPDATE_SUCCESS,data:e}),fbUpdateErr:e=>({type:i.FB_UPDATE_ERR,err:e}),fbDeleteBegin:()=>({type:i.FB_DELETE_BEGIN}),fbDeleteSuccess:e=>({type:i.FB_DELETE_SUCCESS,data:e}),fbDeleteErr:e=>({type:i.FB_DELETE_ERR,err:e}),fbSingleDataBegin:()=>({type:i.FB_SINGLE_DATA_BEGIN}),fbSingleDataSuccess:e=>({type:i.FB_SINGLE_DATA_SUCCESS,data:e}),fbSingleDataErr:e=>({type:i.FB_SINGLE_DATA_ERR,err:e})},r=i},98831:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABNVBMVEUAAADFxcXGxsbGxsb////FxcXFxcXGxsbFxcXGxsbJycnl5eXFxcXZ2dnFxcXGxsbV1dXFxcXFxcXFxcXFxcXFxcXHx8fMzMz////FxcXFxcXFxcXGxsbGxsbFxcXFxcXGxsb////////////////////////FxcXFxcX////////Hx8f////FxcX////ExMT+/v7////////////t7e3+/v7////////FxcXExMT////FxcXGxsb////////////////s7Oz////+/v7+/v7////////////////IyMj////FxcX////9/f3ExMTGxsbCwsL7+/v39/f5+fnq6urKysrIyMjV1dX09PTT09Pi4uLa2trl5eXs7Ozf39/Jycnx8fHu7u7X19fQ0NDMzMzc3NzOzs6u+jaVAAAAS3RSTlMA9E9ZAvzJLvihIQjVBelCDNmw7uB6NRfRwriocWhh5Uod9e3Yw72RgEpCQCbQyZiLXD42Dvjy5Lyyqqqpk3pza1ZUtbStrIVkRRhMijsuAAAInElEQVRo3r1ah0IbMQy9hNFNS4GW7r333nvXZ8nOXoTZ/v8n9GxMdFPn0LQvgeAcuecny7KlOBgf+6tLp07cmT+3IMTCufk7J04tVfcH/xj7p67NVkQOKrPXpv4R+5HDSy/mBIu5F0uHD0ya9swJd3cwGP2VIT9x9sjkWA9VX+0Vgicm7H1dPTQR2unzkVgYQRQgfvHE+QmoPTsvDHyJHe5MTf8d762DYpc4ePgvaI+/En+B17udXweWKuKvUFk6sKtgUWZliFBm712InuLk+oueGjdg7BMTwr6xzL1nXkwMB/f48x6uiAmi4j2xzu8VE8XeqqdbzYgJY8bLxU6Lf4Azvnr/v+ZbZbyIQoF9AWGf5gEChUNBYJkp8bBjXv6MEBFbKvuKlognFpVjbJhcKGdV0ROMxtVmc9XKB/sswwITPg8c9FDbUgqx3ahJHYZa1hr91qpSLfSIJMUxzCtOQnfQ0ZIQyk5jA72iZxHvWX5cwfjS6sZ6RBUmIWVn2HQeBul+xt47WxCgK4xM4zIthVsdR5tmDutttH1DKCau5A7zIW6AUShEaDaMadPUpmneX9uMNAMyisVs3v7zOm9oVNCtSYMsseHV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"}}]);