import{s as l,cb as w,cc as o,cd as p,b5 as n}from"./index-BJIB_XH5.js";const j=l.div`
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
            ${({theme:a})=>a.rtl?"right":"left"}: 18px;
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
            padding: ${({theme:a})=>a.rtl?"0 45px 0 20px":"0 20px 0 45px"};
            border-radius: 6px;
            background-color: ${({theme:a})=>a[a.mainContent]["input-bg"]};
            &::placeholder{
                color: ${({theme:a})=>a[a.mainContent]["extra-light-text"]};
            }
            &:focus{
                outline: none;
            }
        }
    }
`,C=l.div`
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
            ${({theme:a})=>a.rtl?"right":"left"}: 0;
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
                ${({theme:a})=>a.rtl?"right":"left"}: 0;
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
            ${({theme:a})=>a.rtl?"right":"left"}: 80px;
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
            ${({theme:a})=>a.rtl?"margin-right":"margin-left"}: 20px;
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
                    ${({theme:a})=>a.rtl?"padding-right":"padding-left"}: 14px;
                    ${({theme:a})=>a.rtl?"padding-left":"padding-right"}: 10px;
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
`,m=()=>{n.success({message:"Your Record has been Submited"})},c=a=>{n.error({message:a})},h=()=>{n.success({message:"Your Record has been Deleted"})},y=a=>{n.error({message:a})},b=()=>{n.success({message:"Your Record has been updated"})},S=a=>{n.error({message:a})},{axiosAddBegin:D,axiosAddSuccess:$,axiosAddErr:d,axiosReadBegin:g,axiosReadSuccess:r,axiosReadErr:s,axiosUpdateBegin:k,axiosUpdateSuccess:v,axiosUpdateErr:R,axiosDeleteBegin:U,axiosDeleteSuccess:B,axiosDeleteErr:E,axiosSingleDataBegin:N,axiosSingleDataSuccess:z,axiosSingleDataErr:q,axiosUploadBegin:x,axiosUploadSuccess:u,axiosUploadErr:f}=w,Y=a=>async e=>{try{await e(D());const t=await o.post("/data/store",a);p.get("access_token")?(await e($(t.data.data)),m()):(await e(d("No Unauthorize access")),c("No Unauthorize access"))}catch(t){await e(d(t)),c(t)}},A=()=>async a=>{try{await a(g());const e=await o.get("/data/all");p.get("access_token")?await a(r(e.data.data)):await a(r([]))}catch(e){await a(s(e))}},_=a=>async e=>{try{if(await e(g()),a!==""){const t=await o.get(`/data/search/${a}`);await e(r(t.data.data))}else try{const t=await o.get("/data/all");await e(r(t.data.data))}catch(t){await e(s(t))}}catch(t){await e(s(t))}},W=(a,e)=>async t=>{try{await t(k()),await o.post(`/data/${a}/update`,e),await t(v()),b()}catch(i){await t(R(i)),S(i)}},T=({id:a,getData:e})=>async t=>{try{await t(U());const i=await o.post(`/${a}/delete`,{});await t(B(i.data)),await e(),h()}catch(i){await t(E(i)),y(i)}},V=a=>async e=>{try{await e(N());const t=await o.get(`/data/${a}/show`);await e(z(t.data.data[0]))}catch(t){await e(q(t))}},G=a=>{const e=new FormData;return e.append("image",a),async t=>{try{await t(x());const i=await o.post("/data/image/upload",e,{"Content-Type":"multipart/form-data"});t(u(`${i.data}`))}catch(i){await t(f(i))}}},H=()=>async a=>{try{await a(x()),a(u(null))}catch(e){await a(f(e))}};export{j as R,A as a,T as b,_ as c,H as d,C as e,Y as f,G as g,V as h,W as i};
