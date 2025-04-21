"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[739],{739:(a,e,t)=>{t.r(e),t.d(e,{default:()=>j});var i=t(9950),s=t(87094),n=t(41988),r=t(90650),o=t(72896),c=t(73878),d=t(42074),l=t(78732),x=t(28320),p=t(90556),h=t(51844),u=t(84262),g=t(67482),m=t(72449),w=t(29355),y=t(57687),b=t(41010),A=t(44414);const j=function(){const a=(0,c.wA)(),{crud:e,isLoading:j}=(0,c.d4)((a=>({crud:a.AxiosCrud.data,isLoading:a.AxiosCrud.loading})));(0,i.useEffect)((()=>{a&&a((0,b.axiosDataRead)())}),[a]);const[f,F]=(0,i.useState)({selectedRowKeys:[]}),{selectedRowKeys:v}=f,D=[];e.length&&e.map(((e,i)=>{const{id:s,name:n,email:r,company:o,position:c,join:l,status:x,city:u,country:g,image:m}=e;return D.push({key:i+1,name:(0,A.jsxs)("div",{className:"record-img align-center-v",children:[(0,A.jsx)("img",{src:m?`http://localhost:4000/${m}`:t(98831),alt:s}),(0,A.jsxs)("span",{children:[(0,A.jsx)("span",{children:n}),(0,A.jsx)("span",{className:"record-location",children:u&&g?`${u},${g}`:""})]})]}),email:r,company:o,position:c,jdate:l,status:(0,A.jsx)("span",{className:`status ${x}`,children:x}),action:(0,A.jsxs)("div",{className:"table-actions",children:[(0,A.jsx)(d.N_,{className:"edit",to:`/admin/axios/crud/edit/${s}`,children:(0,A.jsx)(p.A,{})}),"\xa0\xa0\xa0",(0,A.jsx)(d.N_,{className:"delete",onClick:()=>(e=>(window.confirm("Are you sure delete this?")&&a((0,b.axiosDataDelete)({id:e,getData:()=>{a((0,b.axiosDataRead)())}})),!1))(s),to:"#",children:(0,A.jsx)(h.A,{})})]})})}));const S={selectedRowKeys:v,onChange:a=>{F({...f,selectedRowKeys:a})}};return(0,A.jsxs)(u.RecordViewWrapper,{children:[(0,A.jsx)(y.PageHeader,{subTitle:(0,A.jsx)("div",{children:(0,A.jsx)(m.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,A.jsxs)(d.N_,{to:"/admin/axios/crud/add",children:[(0,A.jsx)(l.A,{})," ",(0,A.jsx)("span",{children:"Add New"})]})},"1")}),buttons:[(0,A.jsxs)("div",{className:"search-box",children:[(0,A.jsx)("span",{className:"search-icon",children:(0,A.jsx)(x.A,{})}),(0,A.jsx)("input",{onChange:t=>{a((0,b.axiosDataSearch)(t.target.value,e))},type:"text",name:"recored-search",placeholder:"Search Here"})]},1)],ghost:!0,title:"Data List"}),(0,A.jsx)(g.Main,{children:(0,A.jsx)(s.A,{gutter:15,children:(0,A.jsx)(n.A,{className:"w-100",md:24,children:(0,A.jsx)(w.Cards,{headless:!0,children:j?(0,A.jsx)("div",{className:"spin",children:(0,A.jsx)(r.A,{})}):(0,A.jsx)("div",{children:(0,A.jsx)(g.TableWrapper,{className:"table-data-view table-responsive",children:(0,A.jsx)(o.A,{rowSelection:S,pagination:{pageSize:10,showSizeChanger:!0},dataSource:D,columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Company",dataIndex:"company",key:"company"},{title:"Position",dataIndex:"position",key:"position"},{title:"Status",dataIndex:"status",key:"status"},{title:"Joining Date",dataIndex:"jdate",key:"jdate"},{title:"Actions",dataIndex:"action",key:"action",width:"90px"}]})})})})})})})]})}},84262:(a,e,t)=>{t.r(e),t.d(e,{RecordFormWrapper:()=>n,RecordViewWrapper:()=>s});var i=t(19335);const s=i.Ay.div`
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
            ${a=>{let{theme:e}=a;return e.rtl?"right":"left"}}: 18px;
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
            padding: ${a=>{let{theme:e}=a;return e.rtl?"0 45px 0 20px":"0 20px 0 45px"}};
            border-radius: 6px;
            background-color: ${a=>{let{theme:e}=a;return e[e.mainContent]["input-bg"]}};
            &::placeholder{
                color: ${a=>{let{theme:e}=a;return e[e.mainContent]["extra-light-text"]}};
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
            ${a=>{let{theme:e}=a;return e.rtl?"right":"left"}}: 0;
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
                ${a=>{let{theme:e}=a;return e.rtl?"right":"left"}}: 0;
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
            ${a=>{let{theme:e}=a;return e.rtl?"right":"left"}}: 80px;
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
            ${a=>{let{theme:e}=a;return e.rtl?"margin-right":"margin-left"}}: 20px;
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
                    ${a=>{let{theme:e}=a;return e.rtl?"padding-right":"padding-left"}}: 14px;
                    ${a=>{let{theme:e}=a;return e.rtl?"padding-left":"padding-right"}}: 10px;
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
`},41010:(a,e,t)=>{t.r(e),t.d(e,{axiosDataDelete:()=>R,axiosDataRead:()=>V,axiosDataSearch:()=>X,axiosDataSingle:()=>z,axiosDataSubmit:()=>k,axiosDataUpdate:()=>U,axiosFileClear:()=>I,axiosFileUploder:()=>C});var i=t(78777),s=t(63593),n=t.n(s),r=t(22807),o=t(70811);const c=a=>{i.A.error({message:a})},{axiosAddBegin:d,axiosAddSuccess:l,axiosAddErr:x,axiosReadBegin:p,axiosReadSuccess:h,axiosReadErr:u,axiosUpdateBegin:g,axiosUpdateSuccess:m,axiosUpdateErr:w,axiosDeleteBegin:y,axiosDeleteSuccess:b,axiosDeleteErr:A,axiosSingleDataBegin:j,axiosSingleDataSuccess:f,axiosSingleDataErr:F,axiosUploadBegin:v,axiosUploadSuccess:D,axiosUploadErr:S}=r.default,k=a=>async e=>{try{await e(d());const t=await o.DataService.post("/data/store",a);n().get("access_token")?(await e(l(t.data.data)),i.A.success({message:"Your Record has been Submited"})):(await e(x("No Unauthorize access")),c("No Unauthorize access"))}catch(t){await e(x(t)),c(t)}},V=()=>async a=>{try{await a(p());const e=await o.DataService.get("/data/all");n().get("access_token")?await a(h(e.data.data)):await a(h([]))}catch(e){await a(u(e))}},X=a=>async e=>{try{if(await e(p()),""!==a){const t=await o.DataService.get(`/data/search/${a}`);await e(h(t.data.data))}else try{const a=await o.DataService.get("/data/all");await e(h(a.data.data))}catch(t){await e(u(t))}}catch(t){await e(u(t))}},U=(a,e)=>async t=>{try{await t(g()),await o.DataService.post(`/data/${a}/update`,e),await t(m()),i.A.success({message:"Your Record has been updated"})}catch(s){await t(w(s)),(a=>{i.A.error({message:a})})(s)}},R=a=>{let{id:e,getData:t}=a;return async a=>{try{await a(y());const s=await o.DataService.post(`/${e}/delete`,{});await a(b(s.data)),await t(),i.A.success({message:"Your Record has been Deleted"})}catch(s){await a(A(s)),(a=>{i.A.error({message:a})})(s)}}},z=a=>async e=>{try{await e(j());const t=await o.DataService.get(`/data/${a}/show`);await e(f(t.data.data[0]))}catch(t){await e(F(t))}},C=a=>{const e=new FormData;return e.append("image",a),async a=>{try{await a(v());const t=await o.DataService.post("/data/image/upload",e,{"Content-Type":"multipart/form-data"});a(D(`${t.data}`))}catch(t){await a(S(t))}}},I=()=>async a=>{try{await a(v()),a(D(null))}catch(e){await a(S(e))}}},98831:a=>{a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABNVBMVEUAAADFxcXGxsbGxsb////FxcXFxcXGxsbFxcXGxsbJycnl5eXFxcXZ2dnFxcXGxsbV1dXFxcXFxcXFxcXFxcXFxcXHx8fMzMz////FxcXFxcXFxcXGxsbGxsbFxcXFxcXGxsb////////////////////////FxcXFxcX////////Hx8f////FxcX////ExMT+/v7////////////t7e3+/v7////////FxcXExMT////FxcXGxsb////////////////s7Oz////+/v7+/v7////////////////IyMj////FxcX////9/f3ExMTGxsbCwsL7+/v39/f5+fnq6urKysrIyMjV1dX09PTT09Pi4uLa2trl5eXs7Ozf39/Jycnx8fHu7u7X19fQ0NDMzMzc3NzOzs6u+jaVAAAAS3RSTlMA9E9ZAvzJLvihIQjVBelCDNmw7uB6NRfRwriocWhh5Uod9e3Yw72RgEpCQCbQyZiLXD42Dvjy5Lyyqqqpk3pza1ZUtbStrIVkRRhMijsuAAAInElEQVRo3r1ah0IbMQy9hNFNS4GW7r333nvXZ8nOXoTZ/v8n9GxMdFPn0LQvgeAcuecny7KlOBgf+6tLp07cmT+3IMTCufk7J04tVfcH/xj7p67NVkQOKrPXpv4R+5HDSy/mBIu5F0uHD0ya9swJd3cwGP2VIT9x9sjkWA9VX+0Vgicm7H1dPTQR2unzkVgYQRQgfvHE+QmoPTsvDHyJHe5MTf8d762DYpc4ePgvaI+/En+B17udXweWKuKvUFk6sKtgUWZliFBm712InuLk+oueGjdg7BMTwr6xzL1nXkwMB/f48x6uiAmi4j2xzu8VE8XeqqdbzYgJY8bLxU6Lf4Azvnr/v+ZbZbyIQoF9AWGf5gEChUNBYJkp8bBjXv6MEBFbKvuKlognFpVjbJhcKGdV0ROMxtVmc9XKB/sswwITPg8c9FDbUgqx3ahJHYZa1hr91qpSLfSIJMUxzCtOQnfQ0ZIQyk5jA72iZxHvWX5cwfjS6sZ6RBUmIWVn2HQeBul+xt47WxCgK4xM4zIthVsdR5tmDutttH1DKCau5A7zIW6AUShEaDaMadPUpmneX9uMNAMyisVs3v7zOm9oVNCtSYMsseHV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"}}]);