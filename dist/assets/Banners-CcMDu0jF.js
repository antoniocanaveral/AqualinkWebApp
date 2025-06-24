import{s as n,j as t,X as e,B as a,ay as r}from"./index-BJIB_XH5.js";import{C as x}from"./index-BaGkREgo.js";const c=n.figure`
    position: relative;
    padding: 20px 0px 30px;
    margin-bottom: 0;
    img {
        position: absolute;
        bottom : -15px;
        right : 0;
        ${({theme:A})=>A.rtl?"left":"right"}: 0;
    }
    figcaption{
        h2{
            font-size: 30px;
            font-weight: 600;
            color: ${({theme:A})=>A[A.mainContent]["white-text"]};
            margin-bottom: 14px;
        }
        p{
            font-size: 15px;
            opacity: .7;
            color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        }
        button{
            margin-top: 26px;
            color: ${({theme:A})=>A["primary-color"]};
            &:focus{
                background-color:  ${({theme:A})=>A[A.mainContent]["white-background"]} !important;
            }
            &.ant-btn-lg{
                height: 44px;
                font-size: 15px;
                font-weight: 500;
            }
        }
    }
`,o=n.figure`
    position: relative;    
    min-height: 180px;
    margin-bottom: 0;
    padding: 18px 0 0;
    &.theme-wide{
        padding: 0;
        min-height: 100%;
        width: 100%;
        figcaption{
            h2{
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            p{
                font-size: 15px;
                margin-bottom: 18px;
            }
        }
    }
    &.theme-3{
        padding: 0px 0 30px;
        img{
            bottom: -55px;
        }
        figcaption{  
            h2{
                margin-bottom: 10px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        margin-bottom: 25px;
    }
    p{
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        opacity: .7;
    }
    img {
        position: absolute;
        bottom: -45px;
        ${({theme:A})=>A.rtl?"left":"right"}: -25px;
        @media only screen and (max-width: 1599px){
            max-width: 150px;
        }
    }
    button{
        color: ${({theme:A})=>A["primary-color"]};
        &:focus{
            background-color:  ${({theme:A})=>A[A.mainContent]["white-background"]} !important;
        }
        &.ant-btn-lg{
            height: 44px;
            font-size: 15px;
            font-weight: 500;
        }
    }
`,g=n.figure`
    position: relative;    
    min-height: 180px;
    margin-bottom: 0;
    padding: 18px 0 0;
    &.theme-wide{
        padding: 0;
        height: 100%;
        width: 100%;
        figcaption{
            h2{
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            p{
                font-size: 15px;
                margin-bottom: 18px;
            }
        }
    }
    &.theme-3{
        padding: 0px 0 30px;
        img{
            bottom: -55px;
        }
        figcaption{  
            h2{
                margin-bottom: 10px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        margin-bottom: 25px;
    }
    p{
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        opacity: .7;
    }
    img {
        position: absolute;
        bottom: -45px;
        max-width: 200px;
        ${({theme:A})=>A.rtl?"left":"right"}: -25px;
        @media only screen and (max-width: 1599px){
            max-width: 150px;
        }
    }
    button{
        font-weight: 600;
        color: ${({theme:A})=>A["secondary-color"]} !important;
        &:focus{
            background-color:  ${({theme:A})=>A[A.mainContent]["white-background"]} !important;
        }
        &.ant-btn-lg{
            height: 44px;
            font-size: 15px;
        }
    }
`,B=n.figure`
    position: relative;  
    margin-bottom: 0;
    direction: ${({theme:A})=>A.rtl?"rtl":"ltr"};
    figcaption{
        h2{
            font-size: 22px;
            font-weight: 600;
            color: #FF4D4F;
            margin: 15px 0 18px;
        }
    }
    
`,Q=n.figure`
    display: flex;  
    margin-bottom: 0;
    align-items: center;
    @media only screen and (max-width: 575px){
        flex-direction: column;
    }
    img{
        @media only screen and (max-width: 575px){
            margin-bottom: 15px;
        }
    }
    figcaption{
        @media only screen and (max-width: 575px){
            text-align: center;
            margin-left: 0px;
        }
    }
`,i=n.figure`
    .ant-card{
        margin-bottom: 70px !important;
        @media only screen and (max-width: 1199px){
            margin-bottom: 50px !important;
        }
        @media only screen and (max-width: 991px){
            margin-bottom: 30px !important;
        }
        .ant-btn-white{
            color: ${({theme:A})=>A[A.mainContent]["menu-active"]};
            background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
        }
        h2{
            color: #fff;
        }
        P{
            color: #fff;
        }
    }
    &.ninjadash-congratulation-banner{
        
        figcaption {
            h2{
                font-size: 30px;
                font-weight: 700;
            }
            p{
                font-size: 16px;
            }
        }
        
        .ant-card{
            background-color: #0A0A0A;
        }
        
        .ant-btn{
            margin-top: 5px;
            color: ${({theme:A})=>A[A.mainContent]["white-text"]} !important;
        }
    }

    &.ninjadash-card-banner{
        .ant-card{
            margin-bottom: 0 !important;
            background-image: linear-gradient(to right top,#5840ff,#0082ff,#0af,#00caff,#00e4ec);
            .ninjadash-card-banner-content{
                min-height: 300px;
                figcaption{
                    h2{
                        font-size: 30px;
                        font-weight: 700;
                    }
                    p{
                        font-size: 16px;
                        margin: 10px 0 22px;
                    }
                }
                img{
                    bottom: -20px;
                }
            }
        }
    }
    &.ninjadash-top-banner{
        margin-top: 38px;
        &.ninjadash-top-banner-corporate{
            .ant-card{
                background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
                .ant-card-body{
                    padding: 34px 40px 40px !important;
                    figure.theme-wide{
                        position: static;
                        margin: 0;
                    }
                    img{
                        margin-bottom: 0;
                        max-width: fit-content;
                        bottom: 0;
                        right: 230px;
                        @media only screen and (max-width: 1699px){
                            right: 100px;
                        }
                        @media only screen and (max-width: 1599px){
                            right: 0;
                        }
                        @media only screen and (max-width: 1399px){
                            max-width: 400px;
                        }
                        @media only screen and (max-width: 1299px){
                            max-width: 360px;
                        }
                        @media only screen and (max-width: 767px){
                            margin-bottom: 22px;
                            width: 100%;
                        }
                    }
                }
            }
            .ninjadash-top-banner__title{
                color: ${({theme:A})=>A[A.mainContent]["dark-text"]};
            }
            .ninjadash-top-banner__text{
                font-size: 16px;
                color: ${({theme:A})=>A[A.mainContent]["dark-text"]};
            }
        }
        .ant-card{
            margin-bottom: 25px !important;
            background-color: ${({theme:A})=>A[A.mainContent]["darker-background"]};
            .ant-card-body{
                padding: 50px 54px !important;
                @media only screen and (max-width: 991px){
                    padding: 30px 34px !important;
                }
                figure{
                    @media only screen and (max-width: 991px){
                        text-align: center;
                    }
                }
                img{
                    margin-bottom: -110px;
                    @media only screen and (max-width: 991px){
                        position: static;
                        margin-bottom: 30px;
                    }
                }
            }
        }
        
        .ninjadash-top-banner__title{
            font-size: 30px;
            font-weight: 600;
            color: ${({theme:A})=>A["white-color"]};
            @media only screen and (max-width: 991px){
                font-size: 24px;
            }
        }
        .ninjadash-top-banner__text{
            font-size: 15px;
            max-width: 610px;
            opacity: 1;
            margin-bottom: 25px;
            color: ${({theme:A})=>A["white-color"]};
            @media only screen and (max-width: 1599px){
                max-width: 480px;
            }
            @media only screen and (max-width: 991px){
                max-width: 100%;
            }
        }
        .ninjadash-top-banner__action{
            border-radius: 4px;
        }
    }
`,s=n.div`
    .ant-card{
        margin-bottom: 70px !important;
        box-shadow: 0 5px 20px ${({theme:A})=>A["dark-color"]}15;
        @media only screen and (max-width: 1199px){
            margin-bottom: 50px !important;
        }
        @media only screen and (max-width: 991px){
            margin-bottom: 30px !important;
        }
    }
    .ant-card-body{
        padding: 35px 30px 46px !important;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 12px;
        color: ${({theme:A})=>A["dark-color"]};
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 18px;
        line-height: 1.667;
        color: ${({theme:A})=>A["gray-color"]};
    }
    .ant-btn{
        height: 38px;
        &.ant-btn-white{
            background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
        }
    }
    &.theme-wide{
        .ant-card-body{
            padding: 50px 25px 50px 0 !important;
            padding: ${({theme:A})=>A.rtl?"50px 25px 50px 25px":"50px 25px 50px 0"}!important;
        }
        figcaption{
            ${({theme:A})=>A.rtl?"margin-right":"margin-left"}: 18px;
            h2{
                font-size: 23px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            .ant-btn-lg{
                padding: 0 16.24px;
                font-size: 15px;
                height: 44px;
            }
        }
    }
`,b=n.div`
    margin-bottom: 70px;
    border-radius: 10px;
    padding: 60px 0 105px;
    background-color: ${({theme:A})=>A["primary-color"]};
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    .ant-carousel{
        .slick-dots{
            &.slick-dots-bottom{
                bottom: -35px;
            }
            li{
                width: auto;
                &.slick-active{
                    width: auto;
                }
                button{
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                }
            }
        }
    }
    .banner-signle{
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .banner-single__content{
            margin-top: 28px;
            text-align: center;
            h3{
                font-size: 24px;
                font-weight: 600; 
                color: #fff;
                margin-bottom: 8px;
            }
            p{
                font-size: 15px;
                color: #fff;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
`,C=n.div`
    margin-bottom: 70px;
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    .banner-long-inner{
        padding: 30px 0;
        text-align: center;
        border-radius: 10px;
        background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
        h2{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 28px;
            color: ${({theme:A})=>A[A.mainContent]["dark-text"]};
        }
    }
`,m=n.div`
    position: relative;
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 20px;
    }
    .banner-card-inner{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        min-height: 450px;
        padding: 38px 40px 40px 40px;
        border-radius: 10px;
        @media only screen and (max-width: 575px){
            padding: 28px 30px 30px 30px;
        }
        &.theme-2{
            h2{
                margin-bottom: 18px;
            }
            p{
                font-size: 15px;
                color: #fff;
                opacity: .70;
                max-width: 290px;
                margin-bottom: 20px;
            }
            img{
                max-width: 285px;
            }
        }
        button{
            height: 44px;
            font-size: 15px;
            font-weight: 500;
            color: ${({theme:A})=>A[A.mainContent]["menu-active"]};
            background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
            svg{
                color: ${({theme:A})=>A[A.mainContent]["menu-active"]};
            }
        }
        img{
            position: absolute;
            bottom: 0;
            max-width: 460px;
            ${({theme:A})=>A.rtl?"left":"right"}: 0;
        }
    }
`,d=n.div`
    border-radius: 10px;
    margin-bottom: 30px;
    .banner-cta{
        min-height: 224px;
        justify-content: flex-end;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;
        border-radius: 10px;
        @media only screen and (max-width: 1599px){
            margin-top: 70px;
        }
        @media only screen and (max-width: 1199px){
            margin-top: 50px;
        }
        @media only screen and (max-width: 991px){
            margin-top: 0;
        }
        @media only screen and (max-width: 575px){
            background-position: center;
        }
        .banner-cta__content{
            text-align: center;
            margin-top: -8px;
            padding: ${({theme:A})=>A.rtl?"30px 0px 30px 30px":"30px 30px 30px 0px"};
            h2{
                font-size: 30px;
                font-weight: 600;
                color: ${({theme:A})=>A[A.mainContent]["dark-text"]};
            }
            button{
                margin-top: 10px;
                height: 44px;
                &.ant-btn-white{
                    color: ${({theme:A})=>A[A.mainContent]["menu-active"]};
                    background-color: ${({theme:A})=>A[A.mainContent]["white-background"]};
                }
            }
        }
        &.theme-2{
            justify-content: flex-start;
            background-position: right;
            @media only screen and (max-width: 575px){
                background-position: center;
            }
            .banner-cta__content{
                padding: ${({theme:A})=>A.rtl?"30px 30px 30px 0px":"30px 0px 30px 30px"};
                text-align: ${({theme:A})=>A.rtl?"right":"left"};
                @media only screen and (max-width: 575px){
                    padding: ${({theme:A})=>A.rtl?"30px 20px 30px 0px":"30px 0px 30px 20px"};
                }
                h2{
                    margin-bottom: 10px;
                }
                p{
                    font-size: 16px;
                }
            } 
        }
    }
`,I=n.figure`
    position: relative;    
    min-height: 180px;
    padding: 18px 0 0;
    &.theme-wide{
        padding: 0;
        height: 100%;
        width: 100%;
        figcaption{
            h2{
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    &.theme-3{
        padding: 0px 0 30px;
        img{
            bottom: -55px;
        }
        figcaption{  
            h2{
                margin-bottom: 10px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        margin-bottom: 25px;
    }
    p{
        color: ${({theme:A})=>A[A.mainContent]["white-text"]};
        opacity: .7;
    }
    img {
        position: absolute;
        bottom: 50%;
        margin-bottom: -80px;
        max-width: 240px;
        ${({theme:A})=>A.rtl?"left":"right"}: 30px;
        @media only screen and (max-width: 1599px){
            max-width: 250px;
        }
    }
    button{
        
        &:focus{
            background-color:  ${({theme:A})=>A[A.mainContent]["white-background"]} !important;
        }
        &.ant-btn-lg{
            height: 50px;
            padding: 0px 28px;
            font-size: 15px;
            font-weight: 400;
        }
    }
`;function u(){return t.jsx(s,{children:t.jsxs(e,{headless:!0,bodyStyle:{minHeight:"270px"},children:[t.jsx("h2",{children:"15 Days Free Trail"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"}),t.jsx(a,{className:"btn-outlined",size:"small",outlined:!0,type:"primary",children:"Start"})]})})}function f(){return t.jsx(i,{children:t.jsx(e,{className:"mb-70",bodyStyle:{background:"#5F63F2",borderRadius:"10px",minHeight:"270px"},headless:!0,children:t.jsxs(c,{children:[t.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAABjCAYAAACi5VNqAAAEVUlEQVR4Xu2Yzyu0URSAD41Y2EgWiCYLkmQpKf+1f0BZWEoSZZqIjSSFkPg69+vqzjvv+HE6i9ec591g5p4z9zznmfvDyO7u7ofwQMBAYAR5DNQISQSQBxHMBJDHjI5A5MEBMwHkMaMjEHlwwEwAeczoCEQeHDATQB4zOgKRBwfMBJDHjI5A5MEBMwHkMaMjEHlwwEwAeczoCEQeHDATQB4zOgKRBwfMBJDHjI5A5MEBMwHkMaMjEHlwwEwAeczoCEQeHDATQB4zOgKRBwfMBJDHjI5A5MEBMwHkMaMjEHlwwEwAeczoCEQeHDATQB4zOgKRBwfMBJDHjI5A5MEBMwHkMaMjEHlwwEwAeczoCEQeHDATQB4zOgKRBwfMBJDHjI5A5MEBM4GhkWd9fV1mZ2fl+PhYrq6u+oAsLy9Lu92WbrcrZ2dnon8vLS3J6OhoGvvw8CB7e3s9cdUYfVNfW1xclJOTk57PmZ6elo2NDZmYmEg5bm9v5eDgIP0+Pz8va2tr0mq10t+Xl5dydHRkblpTAodCHhVHG/T6+iqnp6d98mhjtXkqyvX1dZJna2tLLi4u0tjc+Jubm76mau6pqakk1lfjNjc3ZXx8PI3Tuayurqb8+lk7Ozvy8vKSZBokX1OE+M08/rw8WQz9Ni8sLMj5+XmfPNpYffSbr4JoQ6uPNvju7q52RcjvaUwWqYzXOahkWUx9L0un81lZWemROs8nr0y/aViTxv55eTJM/bZXm5S3mZmZGdnf35ft7e1aeb5bDfIW9/7+XrstIk+TlDbMpU6evCrl1agqj64ok5OTolJ0Op3aFSlPRcfqUz0Xle/nrSlvb29vb0k2PQvlLTGff+7v7z/PRIZyGxEy1CuPbg9PT0+fW9GglSc3+/HxsbahugXpGD0z1Z2LqodilVHlGBsbS7KVh3MVSj9Hf7JtNeI78P9GU25b1RtOOc3yJpRfLw/G5djy8Kuvz83NJRk1x1dPVdxy7CCJG4Lyx9MY6pWnSiE3TRuvV+p8pf9q5akebsub0yDKKqKesw4PD/skK29lP+5SQweGlaf8n4z2pu7/PHUSVK/h5cqltz19np+fe8RRYVTQQZ/TUDe+ndbQyPNtpQxwJ4A87kjjJESeOL12rxR53JHGSYg8cXrtXinyuCONkxB54vTavVLkcUcaJyHyxOm1e6XI4440TkLkidNr90qRxx1pnITIE6fX7pUijzvSOAmRJ06v3StFHnekcRIiT5xeu1eKPO5I4yREnji9dq8UedyRxkmIPHF67V4p8rgjjZMQeeL02r1S5HFHGich8sTptXulyOOONE5C5InTa/dKkccdaZyEyBOn1+6VIo870jgJkSdOr90rRR53pHESIk+cXrtXijzuSOMkRJ44vXavFHnckcZJiDxxeu1eKfK4I42TEHni9Nq9UuRxRxonIfLE6bV7pcjjjjROQuSJ02v3SpHHHWmchMgTp9fulf4D/Z/WHHaXLvIAAAAASUVORK5CYII=",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Upgrade your plan"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet"}),t.jsx(a,{size:"large",type:"white",children:"Upgrade"})]})]})})})}function U(){return t.jsx(i,{children:t.jsx(e,{bodyStyle:{borderRadius:"10px",minHeight:"270px",background:"#5F63F2"},headless:!0,children:t.jsxs(o,{children:[t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Earn More Money"}),t.jsx(a,{size:"large",type:"white",children:"Learn More"})]})]})})})}function y(){return t.jsx(i,{children:t.jsx(e,{bodyStyle:{background:"#272B41",borderRadius:"10px",minHeight:"270px"},headless:!0,children:t.jsxs(o,{className:"theme-3",children:[t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Win Your Bonus"}),t.jsx("p",{children:"Weekly performance bonus"}),t.jsx(a,{size:"large",type:"white",children:"Learn More"})]})]})})})}function w(){return t.jsx(i,{children:t.jsx(e,{bodyStyle:{background:"#5F63F2",borderRadius:"10px",minHeight:"265px",display:"flex",alignItems:"center"},headless:!0,children:t.jsxs(o,{className:"theme-wide",children:[t.jsx("img",{src:new URL("data:image/png;base64,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ABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCSCh63joXAQCSBghZcbomgASuo6HzkUggIQRUmaMrgkgoet46FwEAkgYIWXG6JoAErqOh85FIICEEVJmjK4JIKHreOhcBAJIGCFlxuiaABK6jofORSCAhBFSZoyuCfwFhbqKuYgLeJgAAAAASUVORK5CYII=",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Congratulations Jhon!"}),t.jsx("p",{children:"Best Seller on the last month."}),t.jsx(a,{size:"large",type:"white",children:"Learn More"})]})]})})})}function M(){return t.jsx(i,{className:"ninjadash-congratulation-banner",children:t.jsx(e,{bodyStyle:{borderRadius:"10px",minHeight:"265px",display:"flex",alignItems:"start"},headless:!0,children:t.jsxs(g,{className:"ninjadash-congratulation-banner-content theme-wide",children:[t.jsx("img",{src:new URL("/aqualinkdemo/assets/trophy-C6sI6WWr.png",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Congratulations Jhon!"}),t.jsx("p",{children:"Best Seller on the last month."}),t.jsx(a,{size:"large",type:"gray",children:"Learn More"})]})]})})})}function J(){return t.jsx(i,{className:"ninjadash-card-banner",children:t.jsx(e,{bodyStyle:{borderRadius:"10px",minHeight:"265px",display:"flex",alignItems:"start"},headless:!0,children:t.jsxs(g,{className:"ninjadash-card-banner-content theme-wide",children:[t.jsx("img",{src:new URL("/aqualinkdemo/assets/trophy-2-0m9xM_mf.png",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Congratulations Jhon!"}),t.jsx("p",{children:"Best Seller on the last month."}),t.jsx(a,{size:"large",type:"white",children:"Learn More"})]})]})})})}function G(){return t.jsx(i,{children:t.jsx(e,{bodyStyle:{background:`url(${new URL("/aqualinkdemo/assets/5-CBEmc9pf.png",import.meta.url).href})`,backgroundSize:"cover",borderRadius:"10px",minHeight:"265px",display:"flex",direction:"ltr",alignItems:"center"},headless:!0,children:t.jsxs(B,{children:[t.jsx("img",{src:new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%3e%3cg%20id='sale'%20transform='translate(-0.002%20-0.001)'%3e%3cpath%20id='Path_6645'%20data-name='Path%206645'%20d='M47.594,26.223a2.955,2.955,0,0,1,0-2.442l1.865-4.1a6.075,6.075,0,0,0-3.4-8.205L41.843,9.889a2.94,2.94,0,0,1-1.727-1.727L38.532,3.945a6.075,6.075,0,0,0-8.205-3.4l-4.1,1.865a2.939,2.939,0,0,1-2.442,0L19.677.546a6.075,6.075,0,0,0-8.205,3.4L9.889,8.162A2.94,2.94,0,0,1,8.161,9.889L3.944,11.473a6.075,6.075,0,0,0-3.4,8.205l1.865,4.1a2.955,2.955,0,0,1,0,2.442l-1.865,4.1a6.075,6.075,0,0,0,3.4,8.205l4.217,1.584a2.94,2.94,0,0,1,1.727,1.727l1.584,4.217a6.08,6.08,0,0,0,8.205,3.4l4.1-1.865a2.939,2.939,0,0,1,2.442,0l4.1,1.865a6.075,6.075,0,0,0,8.205-3.4l1.584-4.217a2.94,2.94,0,0,1,1.727-1.727l4.217-1.584a6.075,6.075,0,0,0,3.4-8.205Z'%20transform='translate(0%200)'%20fill='%23f44336'/%3e%3cg%20id='Group_3442'%20data-name='Group%203442'%20transform='translate(11.27%2010.165)'%3e%3cpath%20id='Path_6646'%20data-name='Path%206646'%20d='M17.58,10.416a4.691,4.691,0,0,0-6.634,6.634L13.894,20a4.691,4.691,0,1,0,6.634-6.634Zm.738,7.37a1.564,1.564,0,0,1-2.212,0l-2.948-2.948a1.568,1.568,0,0,1,0-2.212,1.565,1.565,0,0,1,2.21,0l2.948,2.948a1.566,1.566,0,0,1,0,2.212Z'%20transform='translate(-0.901%20-0.373)'%20fill='%23fafafa'/%3e%3cpath%20id='Path_6647'%20data-name='Path%206647'%20d='M12.511,12.415A1.564,1.564,0,1,0,10.3,14.628l2.579,2.579-2.212,2.214L8.085,16.84a1.564,1.564,0,1,0-2.212,2.212l7.372,7.372a1.563,1.563,0,0,0,2.21-2.212l-2.579-2.579,2.212-2.214L17.667,22a1.563,1.563,0,0,0,2.21-2.212Z'%20transform='translate(-5.414%202.788)'%20fill='%23fafafa'/%3e%3cpath%20id='Path_6648'%20data-name='Path%206648'%20d='M24.742,14.928,18.475,8.661,19.58,7.556a1.564,1.564,0,0,0-2.212-2.212L15.16,7.553l0,0,0,0L12.943,9.77a1.563,1.563,0,1,0,2.21,2.212l1.105-1.107,6.267,6.267a1.566,1.566,0,0,0,2.216-2.214Z'%20transform='translate(2.258%20-4.885)'%20fill='%23fafafa'/%3e%3c/g%3e%3cpath%20id='Path_6649'%20data-name='Path%206649'%20d='M22.139,18.823l-2.212,2.212,1.547,1.547a1.563,1.563,0,1,0,2.21-2.212Zm14.2-14.2L29.511,11.45l3.759,3.759a1.563,1.563,0,1,1-2.21,2.212L27.3,13.66l-2.95,2.95L25.9,18.157a4.691,4.691,0,0,1-6.634,6.634l-1.547-1.547-.738.738,3.759,3.759a1.563,1.563,0,1,1-2.21,2.212l-2.579-2.579-2.212,2.214,2.579,2.579a1.563,1.563,0,1,1-2.21,2.212l-3.759-3.759L4.625,36.34a2.9,2.9,0,0,1,.252.517l1.585,4.22a6.084,6.084,0,0,0,8.211,3.4l4.105-1.866A2.954,2.954,0,0,1,20,42.347a2.921,2.921,0,0,1,1.22.265l4.105,1.866a6.081,6.081,0,0,0,8.213-3.4l1.585-4.22a2.942,2.942,0,0,1,1.728-1.728l4.22-1.585a6.079,6.079,0,0,0,3.4-8.211l-1.866-4.105a2.956,2.956,0,0,1,0-2.444l1.866-4.105a6.079,6.079,0,0,0-3.4-8.211l-4.22-1.585A3.625,3.625,0,0,1,36.335,4.626Z'%20transform='translate(4.983%204.979)'%20fill='%23d43a2f'/%3e%3cpath%20id='Path_6650'%20data-name='Path%206650'%20d='M17.538,10.374l-2.212,2.212,1.547,1.547A1.565,1.565,0,0,1,15.768,16.8a1.551,1.551,0,0,1-1.105-.459L13.116,14.8,10.9,17.01l1.547,1.547a4.691,4.691,0,0,0,6.634-6.634Z'%20transform='translate(11.81%2011.233)'%20fill='%23dadada'/%3e%3cpath%20id='Path_6651'%20data-name='Path%206651'%20d='M14,13.909,7.369,20.543,11.128,24.3a1.563,1.563,0,0,0,2.21-2.212l-2.579-2.579L12.971,17.3l2.579,2.579a1.563,1.563,0,0,0,2.21-2.212Z'%20transform='translate(7.98%2015.061)'%20fill='%23dadada'/%3e%3cpath%20id='Path_6652'%20data-name='Path%206652'%20d='M17.712,7.9,15.5,10.109l3.759,3.759a1.563,1.563,0,0,0,2.21-2.212Z'%20transform='translate(16.791%208.554)'%20fill='%23dadada'/%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Up to 50 OFF"}),t.jsx(a,{className:"btn-outlined",size:"small",outlined:!0,type:"danger",children:"Buy Now"})]})]})})})}function v(){return t.jsx(s,{className:"theme-wide",children:t.jsx(e,{headless:!0,children:t.jsxs(Q,{children:[t.jsx("img",{src:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACfCAYAAAAWEFBtAAAFPElEQVR4Xu3YwStsYRyH8fdKETaSBSJRJMnSQvmv/QPKwlKSCImwEFIoknv7nXqnM2eOoXlk7uixUZfvzNzn/Thz+LO5ufk3+WGBDgv8EVCH5ZwVBQQkBFRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVSgpwGtrKykiYmJtL+/ny4vL1tCLCwspNnZ2XR2dpaOjo6avr62tpaGh4fT7u5uur29bXytbhP/NjMzkw4ODmqfZ2Njo9hvbW01Pc7c3Fzq6+sr/u3t7a3xOqemptLy8nLq7+8vvnZxcZH29vbQQXZr3LOAAk8cxOvrazo8PGw52LGxseKQ4gCvrq6aAAWIycnJ9P7+XhxqGVAcRDz26OhoASIeZ3V1Nd3c3NQecuAZHBxMT09PaXt7u3GO5ceoHm5sXl5e0s7OTvoMZ7dgfPV5exJQxhE/udPT0+nk5KQFUFxh4iN+yuPw8xUotnG4gSaQ1AGKXRzy/f198RgZUzVqHP74+Hjx+PG5CmhoaKhAUv4I9IuLi03o82utfu9XD7Gb39eTgHKwusOIr+WDjQNdX19vAhSH9fz8nO7u7tL8/PyHgOIx4i0oX6Xq3iLz66i72sTzBNb88fj4WFzRBNRN7pXnrjuMfHXKV6UyoDKs2LYDlK9C1Xubuv9+u7er+P78Nhhvc8fHx01vifl+6OHhoeVq9R+l/vCl/LorUL7C5JvSDCjesuKeKMP6DFCgiIOPe6iP7n/aXYGqxcvI8tUtHjturgNWfPYt7Id/ZKpXoOpvN+WXEzetAwMDLa8w3qJOT0+bbrLjcZaWltL5+Xnx/XHDHSCrN9udAqq+iOrb7A9nRE/3665AXz2cdleg6k1t+bemTt7CMuzr6+uW3+TiuQJ2+U8A6ER/eCygyq/x8VYTv1GV/z5UviJV/54U51V3DxToRkZGGsdZ/ltP+QY731z/8Ll/29P1NKBvq+ADdVxAQB2ncxgFBKQDVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVEBAKJ9jAWkAFRAQyudYQBpABQSE8jkWkAZQAQGhfI4FpAFUQEAon2MBaQAVEBDK51hAGkAFBITyORaQBlABAaF8jgWkAVRAQCifYwFpABUQEMrnWEAaQAUEhPI5FpAGUAEBoXyOBaQBVOAfH6ugby6qxBwAAAAASUVORK5CYII=",import.meta.url).href,alt:""}),t.jsxs("figcaption",{children:[t.jsx("h2",{children:"Subscribe to our newsletter"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur "}),t.jsx(a,{className:"btn-outlined",size:"large",outlined:!0,type:"primary",children:"Subscribe Now"})]})]})})})}function j(){return t.jsx(b,{children:t.jsxs(x,{autoplay:!0,children:[t.jsxs("div",{className:"banner-signle",children:[t.jsx("div",{className:"banner-single__img",children:t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""})}),t.jsxs("div",{className:"banner-single__content",children:[t.jsx("h3",{children:"Achievements"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."})]})]}),t.jsxs("div",{className:"banner-signle",children:[t.jsx("div",{className:"banner-single__img",children:t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""})}),t.jsxs("div",{className:"banner-single__content",children:[t.jsx("h3",{children:"Achievements"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."})]})]}),t.jsxs("div",{className:"banner-signle",children:[t.jsx("div",{className:"banner-single__img",children:t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""})}),t.jsxs("div",{className:"banner-single__content",children:[t.jsx("h3",{children:"Achievements"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."})]})]})]})})}function S(){return t.jsx(C,{children:t.jsxs("div",{className:"banner-long-inner",children:[t.jsx("h2",{children:"Up To Date "}),t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:""})]})})}function Z(){return t.jsx(m,{children:t.jsxs("div",{className:"banner-card-inner",style:{backgroundImage:`url(${new URL("/aqualinkdemo/assets/card-banner-1-DY5eMJX6.png",import.meta.url).href})`},children:[t.jsx("h2",{children:"Need More Space?"}),t.jsx(a,{size:"small",type:"white",children:"Buy Storage"})]})})}function D(){return t.jsx(m,{children:t.jsxs("div",{className:"banner-card-inner theme-2",style:{backgroundImage:`url(${new URL("/aqualinkdemo/assets/card-banner-1-DY5eMJX6.png",import.meta.url).href})`},children:[t.jsx("h2",{children:"Create Sale Report"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"}),t.jsx(a,{size:"small",type:"white",children:"Learn More"})]})})}function Y(){return t.jsx(d,{children:t.jsx("div",{className:"banner-cta align-center-v",style:{backgroundImage:`url(${new URL("/aqualinkdemo/assets/cta-banner-1-D97DFb9O.png",import.meta.url).href})`},children:t.jsxs("div",{className:"banner-cta__content",children:[t.jsx("h2",{children:"Dedicated Support"}),t.jsx(a,{size:"small",type:"primary",children:"Learn More"})]})})})}function R(){return t.jsx(d,{children:t.jsx("div",{className:"banner-cta align-center-v theme-2",style:{backgroundImage:`url(${new URL("/aqualinkdemo/assets/cta-banner-2-CJhr66r-.png",import.meta.url).href})`},children:t.jsxs("div",{className:"banner-cta__content",children:[t.jsx("h2",{children:"Welcome Back Garry Sobars!"}),t.jsx("p",{children:"Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam "}),t.jsx(a,{size:"small",type:"white",children:"Learn More"})]})})})}function p({type:A,title:l,subtitle:h}){return t.jsx(i,{className:A==="corporate"?"ninjadash-top-banner ninjadash-top-banner-corporate":"ninjadash-top-banner",children:t.jsx(e,{headless:!0,children:t.jsxs(I,{className:"theme-wide",children:[A==="corporate"?t.jsx("img",{src:new URL("/aqualinkdemo/assets/corporate-C8FbCKow.png",import.meta.url).href,alt:"HexaDash Admin Template"}):t.jsx("img",{src:new URL("data:image/png;base64,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",import.meta.url).href,alt:"HexaDash Admin Template"}),t.jsxs("figcaption",{children:[t.jsx("h2",{className:"ninjadash-top-banner__title",children:l}),t.jsx("p",{className:"ninjadash-top-banner__text",children:h}),t.jsx(a,{className:"ninjadash-top-banner__action",size:"large",type:"primary",children:"Learn More"})]})]})})})}p.propTypes={type:r.string,title:r.string,subtitle:r.string};p.defaultProps={type:"",title:"Welcome To Demo Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"};export{M as B,p as P,J as a,u as b,f as c,U as d,y as e,w as f,G as g,v as h,j as i,S as j,Z as k,D as l,Y as m,R as n};
