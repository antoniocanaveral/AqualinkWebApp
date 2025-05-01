"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2307],{32307:(e,a,t)=>{t.r(a),t.d(a,{default:()=>U});var i=t(9950),s=t(99674),n=t(87827),r=t(87094),l=t(41988),o=t(90650),c=t(48874),d=t(55902),x=t(477),h=t(24893),u=t(28429),p=t(42074),g=t(73878),m=t(63795),j=t(59051),A=t.n(j),f=t(84262),b=t(57687),y=t(29355),w=t(72449),v=t(67482),F=t(41010),D=t(42017),S=t(44414);const{Option:k}=s.A,V="YYYY/MM/DD";const U=function(){const e=(0,g.wA)(),{id:a}=(0,u.g)(),{crud:j,isLoading:U,url:X,isFileLoading:I}=(0,g.d4)((e=>({crud:e.SingleAxiosCrud.data,isLoading:e.AxiosCrud.loading,url:e.AxiosCrud.url,isFileLoading:e.AxiosCrud.fileLoading}))),[B,C]=(0,i.useState)({join:null}),[z,M]=(0,i.useState)(X),[R]=n.A.useForm();(0,i.useEffect)((()=>{j&&(R.setFieldsValue(j),C({join:j.join}),M(j.image))}),[R,j]),(0,i.useEffect)((()=>{X&&M(X)}),[X]),(0,i.useEffect)((()=>{F.axiosDataSingle&&e((0,F.axiosDataSingle)(parseInt(a,10)))}),[e,a]);const Y={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!1,showUploadList:!1,headers:{authorization:"authorization-text"},onChange(a){"uploading"!==a.file.status&&e((0,F.axiosFileUploder)(a.file.originFileObj)),"done"===a.file.status||a.file.status}};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.PageHeader,{buttons:[(0,S.jsx)(w.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,S.jsx)(p.N_,{to:"/admin/axios/crud/axios-view",children:"View All"},"1")},"1")],ghost:!0,title:"Update Your Recored"}),(0,S.jsx)(v.Main,{children:(0,S.jsx)(r.A,{gutter:15,children:(0,S.jsx)(l.A,{xs:24,children:(0,S.jsx)(f.RecordFormWrapper,{children:(0,S.jsx)(y.Cards,{headless:!0,children:null===j?(0,S.jsx)("div",{className:"record-spin",children:(0,S.jsx)(o.A,{})}):(0,S.jsx)(r.A,{justify:"center",children:(0,S.jsxs)(l.A,{xl:10,md:16,xs:24,children:[(0,S.jsxs)("figure",{className:"pro-image align-center-v mt-25",children:[null!==j&&(0,S.jsx)("img",{src:null===z?t(98831):`http://localhost:4000/${z}`,alt:j.id}),(0,S.jsxs)("figcaption",{children:[(0,S.jsx)(c.A,{...Y,children:(0,S.jsx)(p.N_,{className:"upload-btn",to:"#",children:(0,S.jsx)(m.A,{})})}),(0,S.jsx)("div",{className:"info",children:(0,S.jsx)(D.default,{as:"h4",children:"Profile Photo"})}),I&&(0,S.jsx)("div",{className:"isUploadSpain",children:(0,S.jsx)(o.A,{})})]})]}),(0,S.jsx)(v.BasicFormWrapper,{children:void 0!==j.name?(0,S.jsxs)(n.A,{className:"add-record-form",style:{width:"100%"},layout:"vertical",form:R,name:"edit",onFinish:t=>{e((0,F.axiosDataUpdate)(a,{...t,image:X,join:B.join}))},initialValues:j,children:[(0,S.jsx)(n.A.Item,{name:"name",label:"Name",children:(0,S.jsx)(d.A,{})}),(0,S.jsx)(n.A.Item,{name:"email",rules:[{type:"email"}],label:"Email",children:(0,S.jsx)(d.A,{})}),(0,S.jsx)(n.A.Item,{name:"country",label:"Country",children:(0,S.jsxs)(s.A,{style:{width:"100%"},children:[(0,S.jsx)(k,{value:"",children:"Please Select"}),(0,S.jsx)(k,{value:"bangladesh",children:"Bangladesh"}),(0,S.jsx)(k,{value:"india",children:"India"}),(0,S.jsx)(k,{value:"pakistan",children:"Pakistan"}),(0,S.jsx)(k,{value:"srilanka",children:"Srilanka"})]})}),(0,S.jsx)(n.A.Item,{name:"city",label:"City",children:(0,S.jsxs)(s.A,{style:{width:"100%"},children:[(0,S.jsx)(k,{value:"",children:"Please Select"}),(0,S.jsx)(k,{value:"dhaka",children:"Dhaka"}),(0,S.jsx)(k,{value:"mymensingh",children:"Mymensingh"}),(0,S.jsx)(k,{value:"khulna",children:"Khulna"}),(0,S.jsx)(k,{value:"barisal",children:"Barisal"})]})}),(0,S.jsx)(n.A.Item,{name:"company",label:"Company",children:(0,S.jsx)(d.A,{})}),(0,S.jsx)(n.A.Item,{name:"position",label:"Position",children:(0,S.jsx)(d.A,{})}),(0,S.jsx)(n.A.Item,{label:"Joining Date",children:(0,S.jsx)(x.A,{defaultValue:A()(`${null===B.join?j.join:B.join}`,V),onChange:(e,a)=>{C({join:a})},style:{width:"100%"},format:V})}),(0,S.jsx)(n.A.Item,{name:"status",label:"Status",children:(0,S.jsxs)(h.Ay.Group,{children:[(0,S.jsx)(h.Ay,{value:"active",children:"Active"}),(0,S.jsx)(h.Ay,{value:"deactivated",children:"Deactivated"}),(0,S.jsx)(h.Ay,{value:"blocked",children:"Blocked"})]})}),(0,S.jsx)("div",{className:"record-form-actions text-right",children:(0,S.jsx)(w.Button,{htmlType:"submit",type:"primary",children:U?"Loading...":"Update"})})]}):null})]})})})})})})})]})}},84262:(e,a,t)=>{t.r(a),t.d(a,{RecordFormWrapper:()=>n,RecordViewWrapper:()=>s});var i=t(19335);const s=i.Ay.div`
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
`},41010:(e,a,t)=>{t.r(a),t.d(a,{axiosDataDelete:()=>I,axiosDataRead:()=>V,axiosDataSearch:()=>U,axiosDataSingle:()=>B,axiosDataSubmit:()=>k,axiosDataUpdate:()=>X,axiosFileClear:()=>z,axiosFileUploder:()=>C});var i=t(78777),s=t(63593),n=t.n(s),r=t(22807),l=t(70811);const o=e=>{i.A.error({message:e})},{axiosAddBegin:c,axiosAddSuccess:d,axiosAddErr:x,axiosReadBegin:h,axiosReadSuccess:u,axiosReadErr:p,axiosUpdateBegin:g,axiosUpdateSuccess:m,axiosUpdateErr:j,axiosDeleteBegin:A,axiosDeleteSuccess:f,axiosDeleteErr:b,axiosSingleDataBegin:y,axiosSingleDataSuccess:w,axiosSingleDataErr:v,axiosUploadBegin:F,axiosUploadSuccess:D,axiosUploadErr:S}=r.default,k=e=>async a=>{try{await a(c());const t=await l.DataService.post("/data/store",e);n().get("access_token")?(await a(d(t.data.data)),i.A.success({message:"Your Record has been Submited"})):(await a(x("No Unauthorize access")),o("No Unauthorize access"))}catch(t){await a(x(t)),o(t)}},V=()=>async e=>{try{await e(h());const a=await l.DataService.get("/data/all");n().get("access_token")?await e(u(a.data.data)):await e(u([]))}catch(a){await e(p(a))}},U=e=>async a=>{try{if(await a(h()),""!==e){const t=await l.DataService.get(`/data/search/${e}`);await a(u(t.data.data))}else try{const e=await l.DataService.get("/data/all");await a(u(e.data.data))}catch(t){await a(p(t))}}catch(t){await a(p(t))}},X=(e,a)=>async t=>{try{await t(g()),await l.DataService.post(`/data/${e}/update`,a),await t(m()),i.A.success({message:"Your Record has been updated"})}catch(s){await t(j(s)),(e=>{i.A.error({message:e})})(s)}},I=e=>{let{id:a,getData:t}=e;return async e=>{try{await e(A());const s=await l.DataService.post(`/${a}/delete`,{});await e(f(s.data)),await t(),i.A.success({message:"Your Record has been Deleted"})}catch(s){await e(b(s)),(e=>{i.A.error({message:e})})(s)}}},B=e=>async a=>{try{await a(y());const t=await l.DataService.get(`/data/${e}/show`);await a(w(t.data.data[0]))}catch(t){await a(v(t))}},C=e=>{const a=new FormData;return a.append("image",e),async e=>{try{await e(F());const t=await l.DataService.post("/data/image/upload",a,{"Content-Type":"multipart/form-data"});e(D(`${t.data}`))}catch(t){await e(S(t))}}},z=()=>async e=>{try{await e(F()),e(D(null))}catch(a){await e(S(a))}}},98831:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABNVBMVEUAAADFxcXGxsbGxsb////FxcXFxcXGxsbFxcXGxsbJycnl5eXFxcXZ2dnFxcXGxsbV1dXFxcXFxcXFxcXFxcXFxcXHx8fMzMz////FxcXFxcXFxcXGxsbGxsbFxcXFxcXGxsb////////////////////////FxcXFxcX////////Hx8f////FxcX////ExMT+/v7////////////t7e3+/v7////////FxcXExMT////FxcXGxsb////////////////s7Oz////+/v7+/v7////////////////IyMj////FxcX////9/f3ExMTGxsbCwsL7+/v39/f5+fnq6urKysrIyMjV1dX09PTT09Pi4uLa2trl5eXs7Ozf39/Jycnx8fHu7u7X19fQ0NDMzMzc3NzOzs6u+jaVAAAAS3RSTlMA9E9ZAvzJLvihIQjVBelCDNmw7uB6NRfRwriocWhh5Uod9e3Yw72RgEpCQCbQyZiLXD42Dvjy5Lyyqqqpk3pza1ZUtbStrIVkRRhMijsuAAAInElEQVRo3r1ah0IbMQy9hNFNS4GW7r333nvXZ8nOXoTZ/v8n9GxMdFPn0LQvgeAcuecny7KlOBgf+6tLp07cmT+3IMTCufk7J04tVfcH/xj7p67NVkQOKrPXpv4R+5HDSy/mBIu5F0uHD0ya9swJd3cwGP2VIT9x9sjkWA9VX+0Vgicm7H1dPTQR2unzkVgYQRQgfvHE+QmoPTsvDHyJHe5MTf8d762DYpc4ePgvaI+/En+B17udXweWKuKvUFk6sKtgUWZliFBm712InuLk+oueGjdg7BMTwr6xzL1nXkwMB/f48x6uiAmi4j2xzu8VE8XeqqdbzYgJY8bLxU6Lf4Azvnr/v+ZbZbyIQoF9AWGf5gEChUNBYJkp8bBjXv6MEBFbKvuKlognFpVjbJhcKGdV0ROMxtVmc9XKB/sswwITPg8c9FDbUgqx3ahJHYZa1hr91qpSLfSIJMUxzCtOQnfQ0ZIQyk5jA72iZxHvWX5cwfjS6sZ6RBUmIWVn2HQeBul+xt47WxCgK4xM4zIthVsdR5tmDutttH1DKCau5A7zIW6AUShEaDaMadPUpmneX9uMNAMyisVs3v7zOm9oVNCtSYMsseHV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"}}]);