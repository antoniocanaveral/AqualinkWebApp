import{s as i}from"./index-BJIB_XH5.js";const a=i.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        ${({theme:n})=>n.rtl?"padding-right":"padding-left"}: 10px;
    }
`,t=i.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        ${({theme:n})=>n.rtl?"padding-right":"padding-left"}: 10px;
    }
`,d=i.div`
    .ant-card{
        .ant-card-body{
            padding: 15px 10px 10px 10px !important;
        }
    }

    .icon-single{
        span{
            color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
            ${({theme:n})=>n.rtl?"padding-right":"padding-left"}: 0;
        }
        span.fa,
        svg,
        i{
            font-size: 18px;
            min-width: 20px;
            color: ${({theme:n})=>n[n.mainContent]["gray-text"]};
            ${({theme:n})=>n.rtl?"margin-left":"margin-right"}: 10px;
        }
        &.unicon{
            padding: 8px 15px;
            svg,
            img{
                width: 18px;
                height: 18px;
            }
        }
    }
`;export{t as A,d as I,a};
