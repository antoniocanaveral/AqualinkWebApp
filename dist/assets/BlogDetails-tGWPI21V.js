import{s as c,r as t,j as n,P as h,M as x,e as m,f as p,L as a,c6 as s,c7 as o,cZ as l,df as r}from"./index-zxEALkft.js";const A=c.div`
    .ninjadash-blog-details{
        margin-bottom: 80px;
        @media only screen and (max-width: 767px){
            margin-bottom: 40px;
        }
        @media only screen and (max-width: 575px){
            margin-top: 15px
        }
        img{
            width: 100%;
        }
        .ninjadash-blog-content-box{
            padding: 0 100px;
            @media only screen and (max-width: 1399px){
                padding: 0 30px;
            }
            @media only screen and (max-width: 1150px){
                padding: 0;
            }
        }
        .ninjadash-blog-content{
            .ninjadash-blog-title{
                font-size: 30px;
                font-weight: 600;
                line-height: 1.267;
                margin: 40px 0 26px;
                color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                @media only screen and (max-width: 767px){
                    font-size: 20px;
                }
            }
            .ninjadash-blog-meta{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin-bottom: 44px;
                @media only screen and (max-width: 767px){
                    margin-bottom: 34px;
                }
                li{
                    position: relative;
                    margin: 4px;
                    color: ${({theme:i})=>i[i.mainContent]["gray-light-text"]};
                    &:before{
                        position: absolute;
                        ${({theme:i})=>i.rtl?"right":"left"}: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background-color: ${({theme:i})=>i[i.mainContent]["extra-light-text"]};
                    }
                    &:not(:first-child){
                        ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 10px;
                        &:before{
                            content: '';
                        }
                    }
                    a{
                        color: ${({theme:i})=>i["secondary-color"]};
                    }
                }
                .ninjadash-blog-meta__author{
                    img{
                        max-width: 50px;
                    }
                    .ninjadash-blog-authorname{
                        font-size: 16px;
                        font-weight: 500;
                        display: inline-block;
                        ${({theme:i})=>i.rtl?"margin-right":"margin-left"}: 10px;
                        color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                    }
                }
            }
            h1,
            h2,
            h3,
            h4,
            h5{
                font-weight: 600;
                color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                margin: 40px 0 16px;
            }
            h2{
                font-size: 30px;
                @media only screen and (max-width: 767px){
                    font-size: 20px;
                }
            }
            h3{
                font-size: 24px;
                @media only screen and (max-width: 767px){
                    font-size: 18px;
                }
            }
            h4{
                font-size: 22px;
                @media only screen and (max-width: 767px){
                    font-size: 18px;
                }
            }
            h5{
                font-size: 20px;
                @media only screen and (max-width: 767px){
                    font-size: 16px;
                }
            }
            p{
                font-size: 18px;
                color: ${({theme:i})=>i[i.mainContent]["gray-text"]};
                @media only screen and (max-width: 767px){
                    font-size: 16px;
                }
            }
            .ninjadash-blog-list{
                li{
                    font-size: 18px;
                    position: relative;
                    ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 18px;
                    &:not(:last-child){
                        margin-bottom: 14px;
                    }
                    &:before{
                        position: absolute;
                        ${({theme:i})=>i.rtl?"right":"left"}: 0;
                        top: 10px;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                    }
                    .ninjadash-blog-list__item--label{
                        display: inline-block;
                        ${({theme:i})=>i.rtl?"margin-left":"margin-right"}: 4px;
                        font-weight: 500;
                        color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                    }
                    .ninjadash-blog-list__item--text{
                        color:  ${({theme:i})=>i[i.mainContent]["gray-text"]};
                    }
                }
            }
        }
        .ninjadash-category-list{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -4px;
            .ninjadash-category-list__item{
                margin: 4px;
                a{
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    padding: 0 10px;
                    border-radius: 5px;
                    min-height: 34px;
                    color: ${({theme:i})=>i[i.mainContent]["gray-text"]};
                    background-color: ${({theme:i})=>i[i.mainContent]["general-background"]};
                    &:hover{
                        color: ${({theme:i})=>i["primary-color"]};
                    }
                }
            }
        }
        .ninjadash-social-links{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 50px -5px -5px;
            li{
                margin: 5px;
                &:first-child{
                    font-weight: 500;
                    ${({theme:i})=>i.rtl?"margin-left":"margin-right"}: 18px;
                    color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                }
                &:not(:first-child){
                    a{
                        display: inline-flex;
                        align-items: center;
                        min-height: 36px;
                        border-radius: 5px;
                        padding: 0 14px;
                        transition: .3s;
                        color: ${({theme:i})=>i[i.mainContent]["gray-text"]};
                        border: 1px solid ${({theme:i})=>i[i.mainContent]["border-color-default"]};
                        background-color: ${({theme:i})=>i[i.mainContent]["white-background"]};
                        &:hover{
                            color: ${({theme:i})=>i["white-color"]};
                            &.ninjadash-facebook{
                                border-color: #3A589B;
                                background-color: #3A589B;
                            }
                            &.ninjadash-twitter{
                                border-color: #1DA1F2;
                                background-color: #1DA1F2;
                            }
                            &.ninjadash-linkedin{
                                border-color: #0077B5;
                                background-color: #0077B5;
                            }
                            &.ninjadash-copy{
                                color: ${({theme:i})=>i[i.mainContent]["white-text"]} !important;
                                border-color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                                background-color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                            }
                            svg{
                                color: ${({theme:i})=>i[i.mainContent]["white-text"]} !important; 
                            }
                        }
                        svg{
                            width: 16px;
                            height: 16px;
                            transition: .3s;
                            margin-right: 5px;
                        }
                        span{
                            line-height: 1;
                        }
                        &.ninjadash-facebook{
                            svg{
                                color: #3A589B;
                            }
                        }
                        &.ninjadash-twitter{
                            svg{
                                color: #1DA1F2;
                            }
                        }
                        &.ninjadash-linkedin{
                            svg{
                                color: #0077B5;
                            }
                        }
                        &.ninjadash-copy{
                            svg{
                                color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                            }
                        }
                    }
                }
            }
        }
        .ninjadash-blog-author-box{
            display: flex;
            align-items: flex-start;
            padding: 35px;
            border-radius: 8px;
            margin-top: 50px;
            background-color: ${({theme:i})=>i[i.mainContent]["white-background"]};
            box-shadow: ${({theme:i})=>i.mainContent==="lightMode"?"0 10px 40px rgba(173, 181, 217, .20)":"0 0"};
            @media only screen and (max-width: 767px){
                flex-direction: column;
            }
            .ninjadash-blog-author-img{
                ${({theme:i})=>i.rtl?"margin-left":"margin-right"}: 20px;
                @media only screen and (max-width: 767px){
                    ${({theme:i})=>i.rtl?"margin-left":"margin-right"}: 0;
                    margin-bottom: 15px;
                }
                img{
                    max-width: 70px;
                }
            }
            .ninjadash-blog-author-info{
                span{
                    font-size: 15px;
                    font-weight: 400;
                    color: ${({theme:i})=>i[i.mainContent]["gray-text"]};
                }
                .ninjadash-blog-author-name{
                    font-size: 18px;
                    font-weight: 600;
                    display: block;
                    color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                }
                p{
                    font-size: 16px;
                    margin: 20px 0 0;
                }
            }
        }
        .ninjadash-blog-blockquote{
            position: relative;
            ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 40px;
            @media only screen and (max-width: 767px){
                ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 25px;
            }
            max-width: 630px;
            &:before{
                position: absolute;
                ${({theme:i})=>i.rtl?"right":"left"}: 8px;
                top: 0;
                width: 2px;
                height: 100%;
                content: '';
                background-color: ${({theme:i})=>i["primary-color"]}50;
            }
            p{
                font-size: 20px;
                ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 20px;
                color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                position: relative;
                img{
                    max-width: 15px;
                    &.ninjadash-blog-blockquote-icon-left{
                        position: absolute;
                        ${({theme:i})=>i.rtl?"right":"left"}: 0;
                        top: 4px;
                    }
                    &.ninjadash-blog-blockquote-icon-right{
                        margin: 0 0 -4px 5px;
                    }
                }
            }
            .ninjadash-blog-quote-author{
                font-size: 18px;
                position: relative;
                ${({theme:i})=>i.rtl?"padding-right":"padding-left"}: 32px;
                &:after{
                    position: absolute;
                    ${({theme:i})=>i.rtl?"right":"left"}: 0;
                    top: 50%;
                    width: 20px;
                    height: 2px;
                    content: '';
                    background-color: #C6D0DC;
                }
                strong{
                    display: inline-block;
                    ${({theme:i})=>i.rtl?"margin-left":"margin-right"}: 4px;
                    color: ${({theme:i})=>i[i.mainContent]["dark-text"]};
                }
            }
        }
        .ninjadash-share-links{
            position: fixed;
            top: 0;
            ${({theme:i})=>i.rtl?"margin-right":"margin-left"}: 820px;
            text-align: center;
            transform: translateY(160px);
            opacity: 0;
            visibility: hidden;
            @media only screen and (max-width: 1599px){
                margin-left: 600px;
            }
            @media only screen and (max-width: 1399px){
                margin-left: 630px;
            }
            @media only screen and (max-width: 1299px){
                display: none;
            }
            &.show{
                transform: translateY(140px);
                opacity: 1;
                visibility: visible;
            }
            span{
                font-size: 16px;
                font-weight: 500;
            }
            ul{
                li{
                    margin: 10px 0;
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        box-shadow: 0 2px 15px rgba( 173, 181, 217, .20);
                        background-color: ${({theme:i})=>i[i.mainContent]["white-background"]};
                        svg{
                            width: 18px;
                            height: 18px;
                        }
                        &.ninjadash-facebook{
                            svg{
                                color: #3A589B;
                            }
                        }
                        &.ninjadash-twitter{
                            svg{
                                color: #1DA1F2;
                            }
                        }
                        &.ninjadash-linkedin{
                            svg{
                                color: #0077B5;
                            }
                        }
                        &.ninjadash-copy{
                            svg{
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }
    }
`;function b(){const i=[{path:"index",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Blog Details"}],[d,e]=t.useState({shareLinks:!1});t.useEffect(()=>{window.addEventListener("scroll",()=>{window.pageYOffset>600?e({shareLinks:!0}):e({shareLinks:!1})})},[]);const{shareLinks:g}=d;return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"Blog Details",routes:i}),n.jsx(x,{children:n.jsx(m,{justify:"center",children:n.jsx(p,{lg:15,children:n.jsx(A,{children:n.jsxs("div",{className:"ninjadash-blog-details",children:[n.jsx("div",{className:"ninjadash-blog-featured-img",children:n.jsx("img",{src:new URL("/aqualinkdemo/assets/1-vUqZ4FFZ.png",import.meta.url).href,alt:"ninjadash Blog"})}),n.jsxs("div",{className:"ninjadash-blog-content-box",children:[n.jsxs("div",{className:"ninjadash-blog-content",children:[n.jsx("h1",{className:"ninjadash-blog-title",children:"Know More About Time Management System on your Daily Works"}),n.jsxs("ul",{className:"ninjadash-blog-meta",children:[n.jsxs("li",{className:"ninjadash-blog-meta__author",children:[n.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC",import.meta.url).href,alt:"ninjadash blog author"}),n.jsx("span",{className:"ninjadash-blog-authorname",children:"Charli Day"})]}),n.jsx("li",{className:"ninjadash-blog-meta__date",children:"01 July 2020"}),n.jsx("li",{className:"ninjadash-blog-meta__category",children:n.jsx(a,{to:"#",children:"Development"})}),n.jsx("li",{className:"ninjadash-blog-meta__read-time",children:"6 mins read"})]}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter – not harder – so that you get more done in less time, even when time is tight and pressures are high. Failing to manage your time damages your effectiveness and causes stress."}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter – not harder – so that you get more done enables you to work smarter."}),n.jsx("h2",{children:"What is Time Management?"}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter – not harder – so that you get more done in less time, even when time is tight and pressures are high. Failing to manage your time damages your effectiveness and causes stress."}),n.jsx("img",{src:new URL("/aqualinkdemo/assets/2-DDE2Xhdg.png",import.meta.url).href,alt:"ninjadash Blog"}),n.jsx("h3",{children:"How Can you Use your Time Properly?"}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter – not harder – so that you get more done in less time, even when time is tight and pressures are high"}),n.jsx("blockquote",{children:n.jsxs("div",{className:"ninjadash-blog-blockquote",children:[n.jsxs("p",{children:[n.jsx("img",{className:"ninjadash-blog-blockquote-icon-left",src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAAABHNCSVQICAgIfAhkiAAAAUhJREFUKFNtUjFSg1AQ3YWZFGmMJ9AUBu3iCSSlEkcYsJYr5ASJJ9CcwFgLAzP6tSSeQKwMSSFHsLFy/Ov+KBNAqJh9+/7bt28RSl+UvHfk59eYgLa9oeGXseI/FNkECGx3aPRxU1z6QHQFCFOt3bp2Bt2PysNi2ZcgIwJ81dstX+FrciiYCHQjpTY4P92b1xUjRSRKAHHkWr1ZgWP09LYrv7UXpehaxqR51EXOiqlnGXYZx+AhmyHChQZ46Fi9tE4upiIExzsx4ipZZGr2LU2TXef4IK+TA5HFjJ81knl7pAhE9OsVscPNKS9tpJYSigXX8Yg71qMjgckPzXXAS2SQ1XCnrkgEtyquwtb/XVDOZM4NYNwAPrvWvnl3vzLZUtK0yL+oitE2LWWPTep8SNPKkXCBo2BvUo/reQePmc2XxffAJgFjlfcPTCSblsooIHYAAAAASUVORK5CYII=",import.meta.url).href,alt:"ninjadash blockquote"}),"Usability design is to improve the usability of a product, which is an important part to guide the actual design. It can also be regarded. A month ago, I agreed to",n.jsx("img",{className:"ninjadash-blog-blockquote-icon-right",src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAAABHNCSVQICAgIfAhkiAAAAVBJREFUKFN1UTFSwlAQ3f0ZU5iGI5BC0A5OYCyd6JgMWIsnEE+gnABuANYmA46JLXCD2BEszA2MDQUzsO4PiQaIr/kzu+/993YXh+PP0nqx7AJAC4AiIDES2kHHPtNjriVw/fCRezdAWAKEkThU72UfXX82AcDTjChfAgiaZrX+J4SHfJ8JsdBUncUhc4uAtw2zMij6PDEgeCp0Tt1f2N1yvVkbEOVY22B3TKIxgRDKCCIgIIuLV/z3tGEeG5voc7mPMtvFGx7eyXoizuP59cMQYj2WsZoXVRZtI13wF8/9vidOXfoCsG6bleC/z7ne2Rd7YcDRIjlv0RodPxwhUI1H4vgpZJzVYtlHAp3PYOTvnHEcLxzwoJYCaMhUidh5Cy0k6hLhVNHU9q5w6M9rK6A+O34LQS37/CT6XZjjz3qKoF5W3I0rr7EmJbi+PJrkez/JTJxql0iR3wAAAABJRU5ErkJggg==",import.meta.url).href,alt:"ninjadash blockquote"})]}),n.jsxs("span",{className:"ninjadash-blog-quote-author",children:[n.jsx("strong",{children:"Daniel Brown,"}),"Founder of Company"]})]})}),n.jsx("h4",{children:"Value of Time Management"}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter."}),n.jsxs("ul",{className:"ninjadash-blog-list",children:[n.jsxs("li",{className:"ninjadash-blog-list__item",children:[n.jsx("span",{className:"ninjadash-blog-list__item--label",children:"Trim transparent pixels on exports:"}),n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Usability design is to improve the usability of a product, which is an important."})]}),n.jsxs("li",{className:"ninjadash-blog-list__item",children:[n.jsx("span",{className:"ninjadash-blog-list__item--label",children:"Crash and bug fixes:"}),n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Usability design is to improve the usability of a product, which is an important part to guide."})]})]}),n.jsx("h5",{children:"How Can you Benefit from Time Management System?"}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter."}),n.jsxs("ul",{className:"ninjadash-blog-list",children:[n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Only be run by an explicit user action"})}),n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Show UI in a single plugin-specific dialog"})}),n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Make a technology change (described in the next section) that avoided the privately-disclosed vulnerabilities."})})]}),n.jsx("h5",{children:"Help Users Fill in Forms"}),n.jsx("p",{children:"”Time management” is the process of organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter.."}),n.jsxs("ul",{className:"ninjadash-blog-list",children:[n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Only be run by an explicit user action"})}),n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Show UI in a single plugin-specific dialog"})}),n.jsx("li",{className:"ninjadash-blog-list__item",children:n.jsx("span",{className:"ninjadash-blog-list__item--text",children:"Make a technology change (described in the next section) that avoided the privately-disclosed vulnerabilities."})})]})]}),n.jsxs("ul",{className:"ninjadash-category-list",children:[n.jsx("li",{className:"ninjadash-category-list__item",children:n.jsx(a,{to:"#",children:"Design Process"})}),n.jsx("li",{className:"ninjadash-category-list__item",children:n.jsx(a,{to:"#",children:"Prototype"})}),n.jsx("li",{className:"ninjadash-category-list__item",children:n.jsx(a,{to:"#",children:"Design Process"})}),n.jsx("li",{className:"ninjadash-category-list__item",children:n.jsx(a,{to:"#",children:"Prototype"})})]}),n.jsxs("ul",{className:"ninjadash-social-links",children:[n.jsx("li",{children:"Share this article:"}),n.jsx("li",{children:n.jsxs(a,{to:"#",className:"ninjadash-facebook",children:[n.jsx(s,{}),n.jsx("span",{children:"Share"})]})}),n.jsx("li",{children:n.jsxs(a,{to:"#",className:"ninjadash-twitter",children:[n.jsx(o,{}),n.jsx("span",{children:"Tweet"})]})}),n.jsx("li",{children:n.jsxs(a,{to:"#",className:"ninjadash-linkedin",children:[n.jsx(l,{}),n.jsx("span",{children:"Share"})]})}),n.jsx("li",{children:n.jsxs(a,{to:"#",className:"ninjadash-copy",children:[n.jsx(r,{}),n.jsx("span",{children:"Copy"})]})})]}),n.jsxs("div",{className:"ninjadash-blog-author-box",children:[n.jsx("div",{className:"ninjadash-blog-author-img",children:n.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC",import.meta.url).href,alt:"ninjadash Blog"})}),n.jsxs("div",{className:"ninjadash-blog-author-info",children:[n.jsx("span",{children:"Written By"}),n.jsx("span",{className:"ninjadash-blog-author-name",children:"Charli Day"}),n.jsxs("p",{children:["Charli Day is a British writer and social media manager specializing in dynamic branding, campaign strategy and content engagement."," "]})]})]}),n.jsxs("div",{className:g?"ninjadash-share-links show":"ninjadash-share-links",children:[n.jsx("span",{children:"Share"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(a,{to:"#",className:"ninjadash-facebook",children:n.jsx(s,{})})}),n.jsx("li",{children:n.jsx(a,{to:"#",className:"ninjadash-twitter",children:n.jsx(o,{})})}),n.jsx("li",{children:n.jsx(a,{to:"#",className:"ninjadash-linkedin",children:n.jsx(l,{})})}),n.jsx("li",{children:n.jsx(a,{to:"#",className:"ninjadash-link",children:n.jsx(r,{})})})]})]})]})]})})})})})]})}export{b as default};
