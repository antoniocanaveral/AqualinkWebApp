"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2496],{22496:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var i=t(63795),s=t(99674),n=t(87827),r=t(87094),l=t(41988),o=t(48874),c=t(90650),d=t(55902),x=t(477),h=t(24893),p=t(9950),u=t(73878),g=t(28429),m=t(42074),j=t(84262),A=t(72449),f=t(29355),y=t(42017),b=t(57687),w=t(41010),F=t(67482),v=t(44414);const{Option:D}=s.A;const S=function(){const e=(0,u.wA)(),{isLoading:a,url:S,isFileLoading:k}=(0,u.d4)((e=>({isLoading:e.AxiosCrud.loading,url:e.AxiosCrud.url,isFileLoading:e.AxiosCrud.fileLoading}))),{pathname:V}=(0,g.zy)(),[X]=n.A.useForm(),[U,C]=(0,p.useState)({join:""});(0,p.useEffect)((()=>{e((0,w.axiosFileClear)())}),[V,e]);const I={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!1,showUploadList:!1,headers:{authorization:"authorization-text"},onChange(a){"uploading"!==a.file.status&&e((0,w.axiosFileUploder)(a.file.originFileObj)),"done"===a.file.status||a.file.status}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.PageHeader,{buttons:[(0,v.jsx)(A.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,v.jsx)(m.N_,{to:"/admin/axios/crud/axios-view",children:"View All"})},"1")],ghost:!0,title:"Add New"}),(0,v.jsx)(F.Main,{children:(0,v.jsx)(r.A,{gutter:15,children:(0,v.jsx)(l.A,{xs:24,children:(0,v.jsx)(j.RecordFormWrapper,{children:(0,v.jsx)(f.Cards,{headless:!0,children:(0,v.jsx)(r.A,{justify:"center",children:(0,v.jsx)(l.A,{xl:10,md:16,xs:24,children:(0,v.jsx)(F.BasicFormWrapper,{children:(0,v.jsxs)(n.A,{className:"add-record-form",style:{width:"100%"},layout:"vertical",form:X,name:"addnew",onFinish:a=>{e((0,w.axiosDataSubmit)({...a,image:S,join:U.join,id:(new Date).getTime()})),X.resetFields(),e((0,w.axiosFileClear)())},children:[(0,v.jsxs)("figure",{className:"pro-image align-center-v",children:[(0,v.jsx)("img",{src:null===S?t(98831):`http://localhost:4000/${S}`,alt:""}),(0,v.jsxs)("figcaption",{children:[(0,v.jsx)(o.A,{...I,children:(0,v.jsx)(m.N_,{className:"upload-btn",to:"#",children:(0,v.jsx)(i.A,{})})}),(0,v.jsx)("div",{className:"info",children:(0,v.jsx)(y.default,{as:"h4",children:"Profile Photo"})}),k&&(0,v.jsx)("div",{className:"isUploadSpain",children:(0,v.jsx)(c.A,{})})]})]}),(0,v.jsx)(n.A.Item,{name:"name",label:"Name",children:(0,v.jsx)(d.A,{placeholder:"Input Name"})}),(0,v.jsx)(n.A.Item,{name:"email",rules:[{type:"email"}],label:"Email",children:(0,v.jsx)(d.A,{placeholder:"example@gmail.com"})}),(0,v.jsx)(n.A.Item,{name:"country",initialValue:"",label:"Country",children:(0,v.jsxs)(s.A,{style:{width:"100%"},children:[(0,v.jsx)(D,{value:"",children:"Please Select"}),(0,v.jsx)(D,{value:"bangladesh",children:"Bangladesh"}),(0,v.jsx)(D,{value:"india",children:"India"}),(0,v.jsx)(D,{value:"pakistan",children:"Pakistan"}),(0,v.jsx)(D,{value:"srilanka",children:"Srilanka"})]})}),(0,v.jsx)(n.A.Item,{name:"city",initialValue:"",label:"City",children:(0,v.jsxs)(s.A,{style:{width:"100%"},children:[(0,v.jsx)(D,{value:"",children:"Please Select"}),(0,v.jsx)(D,{value:"dhaka",children:"Dhaka"}),(0,v.jsx)(D,{value:"mymensingh",children:"Mymensingh"}),(0,v.jsx)(D,{value:"khulna",children:"Khulna"}),(0,v.jsx)(D,{value:"barisal",children:"Barisal"})]})}),(0,v.jsx)(n.A.Item,{name:"company",label:"Company",children:(0,v.jsx)(d.A,{placeholder:"Company Name"})}),(0,v.jsx)(n.A.Item,{name:"position",label:"Position",children:(0,v.jsx)(d.A,{placeholder:"Position"})}),(0,v.jsx)(n.A.Item,{label:"Joining Date",children:(0,v.jsx)(x.A,{onChange:(e,a)=>{C({join:a})},style:{width:"100%"},format:"YYYY/MM/DD"})}),(0,v.jsx)(n.A.Item,{name:"status",label:"Status",children:(0,v.jsxs)(h.Ay.Group,{children:[(0,v.jsx)(h.Ay,{value:"active",children:"Active"}),(0,v.jsx)(h.Ay,{value:"deactivated",children:"Deactivated"}),(0,v.jsx)(h.Ay,{value:"blocked",children:"Blocked"})]})}),(0,v.jsx)("div",{className:"record-form-actions text-right",children:(0,v.jsx)(A.Button,{size:"default",htmlType:"Save",type:"primary",children:a?"Loading...":"Submit"})})]})})})})})})})})})]})}},84262:(e,a,t)=>{t.r(a),t.d(a,{RecordFormWrapper:()=>n,RecordViewWrapper:()=>s});var i=t(19335);const s=i.Ay.div`
    &.active{
        color: green;
        text-decoration: line-through;
    }
    .btn-add_new{
        a{
            display: inline-flex;
            align-items: center;
        }
    }
    .search-box{
        position: relative;
        box-shadow: 0 5px 5px rgba(#9299B8,.3);
        .search-icon{
            position: absolute;
            ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: 18px;
            top: 50%;
            transform: translateY(-50%);
            svg,
            img{
                margin-top: 6px;
                width: 16px;
                height: 16px;
                color: #9299B8;
            }
        }
        input{
            border: 0 none;
            height: 40px;
            min-width: 280px;
            padding: ${e=>{let{theme:a}=e;return a.rtl?"0 45px 0 20px":"0 20px 0 45px"}};
            border-radius: 6px;
            background-color: ${e=>{let{theme:a}=e;return a[a.mainContent]["input-bg"]}};
            &::placeholder{
                color: ${e=>{let{theme:a}=e;return a[a.mainContent]["extra-light-text"]}};
            }
            &:focus{
                outline: none;
            }
        }
    }
`,n=i.Ay.div`
    .add-record-form{
        .info{
            background-color: transparent;
        }
    }
    .pro-image{
        position: relative;
        margin-bottom: 30px;
        .ant-spin.ant-spin-spinning{
            position: absolute;
            top: 0;
            ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: 0;
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
                ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: 0;
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
            min-width: 120px;
            min-height: 120px;
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
            ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}: 80px;
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
            ${e=>{let{theme:a}=e;return a.rtl?"margin-right":"margin-left"}}: 20px;
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
                    ${e=>{let{theme:a}=e;return a.rtl?"padding-right":"padding-left"}}: 14px;
                    ${e=>{let{theme:a}=e;return a.rtl?"padding-left":"padding-right"}}: 10px;
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
`},41010:(e,a,t)=>{t.r(a),t.d(a,{axiosDataDelete:()=>C,axiosDataRead:()=>V,axiosDataSearch:()=>X,axiosDataSingle:()=>I,axiosDataSubmit:()=>k,axiosDataUpdate:()=>U,axiosFileClear:()=>B,axiosFileUploder:()=>z});var i=t(78777),s=t(63593),n=t.n(s),r=t(22807),l=t(70811);const o=e=>{i.A.error({message:e})},{axiosAddBegin:c,axiosAddSuccess:d,axiosAddErr:x,axiosReadBegin:h,axiosReadSuccess:p,axiosReadErr:u,axiosUpdateBegin:g,axiosUpdateSuccess:m,axiosUpdateErr:j,axiosDeleteBegin:A,axiosDeleteSuccess:f,axiosDeleteErr:y,axiosSingleDataBegin:b,axiosSingleDataSuccess:w,axiosSingleDataErr:F,axiosUploadBegin:v,axiosUploadSuccess:D,axiosUploadErr:S}=r.default,k=e=>async a=>{try{await a(c());const t=await l.DataService.post("/data/store",e);n().get("access_token")?(await a(d(t.data.data)),i.A.success({message:"Your Record has been Submited"})):(await a(x("No Unauthorize access")),o("No Unauthorize access"))}catch(t){await a(x(t)),o(t)}},V=()=>async e=>{try{await e(h());const a=await l.DataService.get("/data/all");n().get("access_token")?await e(p(a.data.data)):await e(p([]))}catch(a){await e(u(a))}},X=e=>async a=>{try{if(await a(h()),""!==e){const t=await l.DataService.get(`/data/search/${e}`);await a(p(t.data.data))}else try{const e=await l.DataService.get("/data/all");await a(p(e.data.data))}catch(t){await a(u(t))}}catch(t){await a(u(t))}},U=(e,a)=>async t=>{try{await t(g()),await l.DataService.post(`/data/${e}/update`,a),await t(m()),i.A.success({message:"Your Record has been updated"})}catch(s){await t(j(s)),(e=>{i.A.error({message:e})})(s)}},C=e=>{let{id:a,getData:t}=e;return async e=>{try{await e(A());const s=await l.DataService.post(`/${a}/delete`,{});await e(f(s.data)),await t(),i.A.success({message:"Your Record has been Deleted"})}catch(s){await e(y(s)),(e=>{i.A.error({message:e})})(s)}}},I=e=>async a=>{try{await a(b());const t=await l.DataService.get(`/data/${e}/show`);await a(w(t.data.data[0]))}catch(t){await a(F(t))}},z=e=>{const a=new FormData;return a.append("image",e),async e=>{try{await e(v());const t=await l.DataService.post("/data/image/upload",a,{"Content-Type":"multipart/form-data"});e(D(`${t.data}`))}catch(t){await e(S(t))}}},B=()=>async e=>{try{await e(v()),e(D(null))}catch(a){await e(S(a))}}},98831:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABNVBMVEUAAADFxcXGxsbGxsb////FxcXFxcXGxsbFxcXGxsbJycnl5eXFxcXZ2dnFxcXGxsbV1dXFxcXFxcXFxcXFxcXFxcXHx8fMzMz////FxcXFxcXFxcXGxsbGxsbFxcXFxcXGxsb////////////////////////FxcXFxcX////////Hx8f////FxcX////ExMT+/v7////////////t7e3+/v7////////FxcXExMT////FxcXGxsb////////////////s7Oz////+/v7+/v7////////////////IyMj////FxcX////9/f3ExMTGxsbCwsL7+/v39/f5+fnq6urKysrIyMjV1dX09PTT09Pi4uLa2trl5eXs7Ozf39/Jycnx8fHu7u7X19fQ0NDMzMzc3NzOzs6u+jaVAAAAS3RSTlMA9E9ZAvzJLvihIQjVBelCDNmw7uB6NRfRwriocWhh5Uod9e3Yw72RgEpCQCbQyZiLXD42Dvjy5Lyyqqqpk3pza1ZUtbStrIVkRRhMijsuAAAInElEQVRo3r1ah0IbMQy9hNFNS4GW7r333nvXZ8nOXoTZ/v8n9GxMdFPn0LQvgeAcuecny7KlOBgf+6tLp07cmT+3IMTCufk7J04tVfcH/xj7p67NVkQOKrPXpv4R+5HDSy/mBIu5F0uHD0ya9swJd3cwGP2VIT9x9sjkWA9VX+0Vgicm7H1dPTQR2unzkVgYQRQgfvHE+QmoPTsvDHyJHe5MTf8d762DYpc4ePgvaI+/En+B17udXweWKuKvUFk6sKtgUWZliFBm712InuLk+oueGjdg7BMTwr6xzL1nXkwMB/f48x6uiAmi4j2xzu8VE8XeqqdbzYgJY8bLxU6Lf4Azvnr/v+ZbZbyIQoF9AWGf5gEChUNBYJkp8bBjXv6MEBFbKvuKlognFpVjbJhcKGdV0ROMxtVmc9XKB/sswwITPg8c9FDbUgqx3ahJHYZa1hr91qpSLfSIJMUxzCtOQnfQ0ZIQyk5jA72iZxHvWX5cwfjS6sZ6RBUmIWVn2HQeBul+xt47WxCgK4xM4zIthVsdR5tmDutttH1DKCau5A7zIW6AUShEaDaMadPUpmneX9uMNAMyisVs3v7zOm9oVNCtSYMsseHV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"}}]);