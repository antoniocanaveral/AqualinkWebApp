import{s as r}from"./index-zxEALkft.js";const o=r.div`
    margin: 20px 0 10px;
    @media (max-width: 991px){
        margin: 5px 0 5px;
    }
    @media (max-width: 767px){
        margin: 10px 0 10px;
    }
    .ant-page-header.ninjadash-page-header-main{
        padding: 18px 30px 15px;
    }
    .ant-page-header-heading{
        .ant-page-header-heading-title{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
            @media only screen and (max-width: 767px){
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 12px;
            }
        }
    }
    .ant-page-header-heading-sub-title{
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
        position: relative;
        ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
            ${({theme:t})=>t.rtl?"right":"left"}: 0;
            top:0;
        }
    }
`,a=r.div`
    margin-bottom: 25px;
    .project-sort-bar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -10px;
        @media only screen and (max-width: 1299px){

            justify-content: space-between;
        }
        .project-sort-group{
            @media only screen and (max-width: 1150px){
                flex: 0 0 100%;
                display: flex;
                justify-content: center;
            }
        }
        .project-sort-nav,
        .project-sort-search,
        .project-sort-group{
            padding: 0 10px;
        }
        .project-sort-nav{
            @media only screen and (max-width: 1150px){
                margin: 0 auto;
            }
        }

        .project-sort-group{
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: auto;
            @media only screen and (max-width: 1299px){
                ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 15px 0 0;
            }
        }
        .project-sort-search{
            @media only screen and (max-width: 1299px){
                margin: 15px 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 0 0 15px;
            }
            .ant-select-selection-search{
                width: 100% !important;
            }
        }
        nav{
            ul{
                li{
                    
                    a{
                        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                        &:hover{
                            color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1500px){
        .project-sort-search{
            .ant-select{
                width: 237px !important;
            }
        }
        .project-sort-group .sort-group{
            .ant-select{
                min-width: 180px;
            }
        }
    }
    @media (min-width: 1201px) and (max-width: 1300px) {
        .project-sort-search{
            .ant-select{
                width: 170px !important;
            }
        }
        .project-sort-group{
            padding: 0 5px;
            
        }
        .project-sort-group .sort-group .layout-style a{
            width: 35px;
            height: 35px;
        }
        .project-sort-group .sort-group .ant-select {
            min-width: 170px;
            ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 5px;
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 5px;
        }
    }
    @media (max-width: 1199px){
        .project-sort-search{
            flex: 0 0 100%;
            order: 0;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            .ant-select{
                width: 350px !important;
            }
        }
        .project-sort-nav{
            order: 1;
            margin: 0 auto;
        }
        .project-sort-group{
            order: 2;
        }
    }
    @media (max-width: 991px){
        .project-sort-group{
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: auto;
                }
            }
        }
    }
    @media (max-width: 575px){
        .project-sort-group{
            .sort-group{
                > span{
                    display: none;
                }
            }
        }
    }

    nav{
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border-radius: 5px;
        padding: 9px 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 12px;
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 11px;
                ${({theme:t})=>t.rtl?"border-left":"border-right"}: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                &:last-child{
                    ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 0;
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
                    ${({theme:t})=>t.rtl?"border-left":"border-right"}: 0 none;
                }
                a{
                    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                    font-weight: 400;
                }
                &.active{
                    a{
                        color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
        input{
            height: 40px !important;
            border-radius: 23px;
            background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
        }
        .ant-input-suffix{
            svg{
                color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
            }
        }
    }
    .ant-select-arrow{
        right: auto;
        ${({theme:t})=>t.rtl?"left":"right"}: 11px !important;
        svg{
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
        }
    }
    
    .sort-group{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        display: flex;
        align-items: center;
        justify-content: flex-end;

               
        .ant-select{
            ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 10px;
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 15px;
            @media only screen and (max-width: 575px){
                ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 0px;
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
            }
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                background-color: ${({theme:t})=>t[t.mainContent]["input-bg"]};
                .ant-select-selection-item{                    
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                }
                
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 20px;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                &:hover,
                &.active{
                    color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                    background: ${({theme:t})=>t[t.mainContent]["white-background"]};
                }
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    @media (max-width: 400px){
        .sort-group .ant-select{
            min-width: 200px;
        }
        .project-sort-search{
            .ant-select-auto-complete{
                width: 100% !important;
            }
        }
        .project-sort-nav{
            nav{
                padding: 10px;
            }
            nav ul{
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: -5px;
                li{
                    ${({theme:t})=>t.rtl?"border-left":"border-right"}: 0 none;
                    margin-bottom: 5px;
                }
            }
        }
    }
`,i=r.div`
    .ant-card-body{
        padding: 0px !important;
    }
    .project-top{
        padding:30px 30px 0px;
    }
    .project-bottom{
        .project-assignees{
            padding: 16px 30px 25px;
        }
    }
    .project-title{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        h1{
            font-size: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -2px;
            a{
                color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 11px !important;
            }
            a,
            .ant-tag{
                margin: 2px;
            }
            .ant-tag{
                text-transform: uppercase;
                font-size: 10px;
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
                line-height: 18px;
                background: red;
                color: #fff;
                border: 0 none;
                &.early{
                    background: ${({theme:t})=>t["primary-color"]};
                }
                &.progress{
                    background: #FF4D4F;
                }
                &.late{
                    background: ${({theme:t})=>t["warning-color"]};
                }
                &.complete{
                    background: ${({theme:t})=>t["success-color"]};
                }
            }
        }
        .ant-dropdown-trigger{
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
            svg{
                color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
            }
        }
    }
    .project-desc{
        margin: 7px 0 25px 0;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 30px;
            &:last-child{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 0;
            }
            span, strong{
                display: block;
            }
            span{
                font-size: 12px;
                margin-bottom: 2px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            }
            strong{
                font-weight: 500;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            }
        }
    }
    .project-progress{
        p{
            margin: 2px 0 0 0;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            font-size: 12px;
        }
        .ant-progress-text{
            font-size: 12px;
            font-weight: 500;
        }
    }
    .ant-progress{
        &.ant-progress-status-success{
            .ant-progress-text{
                svg{
                    color: ${({theme:t})=>t["success-color"]};
                }
            }
        }
    }
    .project-assignees{
        border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 14px;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
        ul{
            margin: -3px;
            padding: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
                list-style: none;
                padding: 3px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
`,e=r.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 767px) {
            justify-content: center;
        }
    }
`,p=r.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
        a{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
`,l=r.div`
    ul{
        margin: -3px;
        padding: 0;
        display: flex;
        align-items: center;
        li{
            list-style: none;
            padding: 3px;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
`,g=r.div`

    .project-list-progress{
        p{
            margin: 4px 0 0 0;
            font-size: 13px;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
    .ant-table{
        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
        .ant-table-thead{
            tr{
                th{
                    color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
                    background-color: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
                    border-bottom-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                }
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${({theme:t})=>t[t.mainContent]["white-background"]};
                    }
                }
                .ant-tag{
                    &.progress{
                        background-color: #FF4D4F;
                    }
                    &.late{
                        background-color: ${({theme:t})=>t["warning-color"]};
                    }
                    &.complete{
                        background-color: ${({theme:t})=>t["success-color"]};
                    }
                }
                td{
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    border-bottom-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
                }
            }
            .ant-progress{
                &.ant-progress-status-success{
                    .ant-progress-text{
                        svg{
                           color: ${({theme:t})=>t["success-color"]};
                        }
                    }
                }
            }
            .ant-dropdown-trigger {
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    .ant-table-container table > thead > tr th{
        font-weight: 400;
        color: ${({theme:t})=>t[t.mainContent]["light-text"]};
        border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    }
    .ant-table-container table > thead > tr th:first-child{
        border-radius: ${({theme:t})=>t.rtl?"0 10px 10px 0":"10px 0 0 10px"} !important;
        ${({theme:t})=>t.rtl?"border-right":"border-left"}: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    }
    .ant-table-container table > thead > tr th:last-child{
        border-radius: ${({theme:t})=>t.rtl?"10px 0 0 10px":"0 10px 10px 0"} !important;
        ${({theme:t})=>t.rtl?"border-left":"border-right"}: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
    }
    .ant-dropdown-trigger{
        svg{
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
    }
`,d=r.div`
    .ant-page-header{
        padding-top: 30px;
    }
    .project-header{
        display: flex;
        align-items: center;
        margin: 8px 0 16px;
        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            button{
                margin: 15px 0 0;
            }
        }
        h1{
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
            margin-bottom: 0;
            font-size: 20px;
            @media only screen and (max-width: 800px) {
                margin-bottom: 10px;
            }
            @media only screen and (max-width: 575px) {
                margin: 0;
            }
        }
        button{
            font-size: 12px;
            font-weight: 500;
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
            height: 35px;
            padding: 0px 13.5px;
            &.btn-markComplete{
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                background: ${({theme:t})=>t[t.mainContent]["white-background"]};
                transition: .25s;
                border-color: ${({theme:t})=>t[t.mainContent]["border-color-deep"]};
                &:hover{
                    color: ${({theme:t})=>t["primary-color"]};
                    svg{
                        color: ${({theme:t})=>t["primary-color"]};
                    }
                }
            }
        }
    }
    .project-action{
        .project-edit,
        .project-remove{
            border-radius: 6px;
            background: #fff;
            height: 35px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
            border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-secondary"]};
            box-shadow: 0 3px 5px ${({theme:t})=>t[t.mainContent]["gray-text"]}05;
            svg,
            img{
                width: 14px;
                height: 14px;
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
            }
        }
        .project-edit{
            color: ${({theme:t})=>t["primary-color"]};
        }
        .project-remove{
            color: ${({theme:t})=>t["danger-color"]};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${({theme:t})=>t["success-color"]};
        padding: 20px 25px 20px;
        margin-bottom: 25px;
        h3{
            color: #fff;
        }
        
        .ant-progress{
            .ant-progress-inner{
                background: rgba(255,255,255, 0.2);
            }
            .ant-progress-bg{
                background: rgb(255, 255, 255);
            }
            .ant-progress-text{
                color: #fff;
                font-weight: 500;
            }
        }
    }
    .about-project-wrapper{
        min-height: 485px;
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
        border-radius: 10px;
        margin-bottom: 25px;
        @media only screen and (max-width: 1199px) {
            min-height: auto;
        }
    }
    .state-single{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        > div{
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(95,99,242,0.1);
            svg{
                width: 25px;
                height: 25px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 3px;
            color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
        }
        p{
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(251,53,34,0.1);
                svg{
                    color: ${({theme:t})=>t["primary-color"]};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${({theme:t})=>t["secondary-color"]};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${({theme:t})=>t["success-color"]};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${({theme:t})=>t["warning-color"]};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
    }
    .about-project{
        margin: 42px -40px 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 991px) {
            margin: 42px -25px 0;
        }
        @media only screen and (max-width: 575px) {
            margin: 42px -15px 0;
        }
        div{
            margin: 0 40px;
            @media only screen and (max-width: 991px) {
                margin: 0 25px;
            }
            @media only screen and (max-width: 575px) {
                flex: 0 0 38%;
                margin: 0 15px;
            }
            span{
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 500;
            }
            .color-primary{
                color: ${({theme:t})=>t["primary-color"]};
            }
            .color-danger{
                color: ${({theme:t})=>t["danger-color"]};
            }
        }
    }
    .project-users-wrapper{
        .btn-addUser{
            padding: 0px 12.6px;
            font-size: 12px;
            font-weight: 500;
            transition: .25s;
            border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            &:hover{
                svg{
                    color: ${({theme:t})=>t["primary-color"]};
                }
            }
        }
        i +span, svg +span, img +span {
            ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 6px;
        }
    }
    .project-users{
        min-height: 368px;
        .porject-user-single{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:last-child{
                margin-bottom: 0;
            }
            & > div{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 15px;
            }
            div{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    display: block;
                }
                h1{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                    color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                }
                p{
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    margin: 0;
                }
            }
        }
    }

    .file-list{
        min-height: 385px;
        .file-list__single{
            justify-content: space-between;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                display: block;
                font-size: 12px;
                line-height: 1.42;
                &.file-name{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${({theme:t})=>t["primary-color"]};
                    }
                    a + a{
                        margin-left: 8px;
                    }
                }
            }
        }
        .file-single-info{
            width: 50%;
            align-items: center;
            .file-single-logo{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }

    .dropdown-more{
        a{
            font-size: 13px;
            svg,
            i.
            img{
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 8px;
            }
        }
    }
`,c=r.div`
    .ant-card{
        .ant-card-head{
            border-color: ${({theme:t})=>t[t.mainContent]["border-color-default"]};
            margin-bottom: 0;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    nav{
        a{
            font-size: 14px;
            font-weight: 500;
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            position: relative;
            padding: 20px 0px;
            &:not(:last-child){
                ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 18px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                ${({theme:t})=>t.rtl?"right":"left"}: 0;
                bottom: -1px;
                height: 1px;

            }
            &.active{
                color: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                &:before{
                    background: ${({theme:t})=>t[t.mainContent]["menu-active"]};
                }
            }
        }
    }
    .ant-table{
        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
    }
    table{
        margin-top: 15px;
        .ant-checkbox.ant-checkbox-checked{
            .ant-checkbox-inner{
                background: ${({theme:t})=>t["success-color"]};
                border-color: ${({theme:t})=>t["success-color"]};
            }
            &:after{
                border-color: ${({theme:t})=>t["success-color"]};
            }
        }
        thead{
            display: none;
        }
        tr{
            th{
                background: #fff;
                border-bottom: 0;
                padding: 10px;
                &:first-child{
                    ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 25px;
                }
                .ant-checkbox-indeterminate {
                    .ant-checkbox-inner{
                        &:after{
                            background: ${({theme:t})=>t["success-color"]};
                        }
                    }
                }
            }
            &:hover{
                td{
                    background: #fff;
                }
            }
        }
        .ant-table-tbody{
            > tr.ant-table-row{
                &.ant-table-row-selected{
                    > td{
                        background: #fff;
                    }
                    .task-title{
                        text-decoration: line-through;
                    }
                }
                > td{
                    padding: 10px;
                    border-bottom: 0;
                    text-align: ${({theme:t})=>t.rtl?"right":"left"};
                    &:first-child{
                        ${({theme:t})=>t.rtl?"padding-right":"padding-left"}: 25px;
                    }
                    &:last-child{
                        ${({theme:t})=>t.rtl?"padding-left":"padding-right"}: 25px;
                    }
                    .task-title{
                        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    }
                    .task-created{
                        font-size: 12px;
                        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
                    }
                    .ant-checkbox{
                        &:hover{
                            .ant-checkbox-inner{
                                border-color: ${({theme:t})=>t["success-color"]};
                            }
                        }
                    }
                }
                &:hover{
                    box-shadow: 0 15px 50px ${({theme:t})=>t[t.mainContent]["gray-text"]}20;
                    > td{
                        background: ${({theme:t})=>t[t.mainContent]["white-background"]};
                    }
                }
            }
        }
    }

    .tasklist-action{
        margin: 18px 25px 25px;
        button{
            width: 100%;
            text-align: ${({theme:t})=>t.rtl?"right":"left"};
            justify-content: flex-start;
            font-size: 12px;
            font-weight: 500;
            &.ant-btn-primary{
                border-radius: 6px;
                background: ${({theme:t})=>t["primary-color"]}10;
            }
        }
    }
`,s=r.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -10px;
    span, img, div{
        display: block;
        margin: 0 10px;
        line-height: normal;
    }
    span, a{
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    .task-created{
        color: #9299b8 !important;
    }
    .task-move{
        svg,
        i{
            width: 16px;
            height: 16px;
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
    }
    .task-action{
        svg,
        i{
            width: 16px;
            height: 16px;
        }
    }
`,x=r.div`
    padding: 25px;
    min-height: 435px;
    .activity-block{
        &:not(:last-child){
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        }
    }
    .activity-dateMeta{
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: ${({theme:t})=>t[t.mainContent]["main-background-light"]};
        border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
        @media only screen and (max-width: 575px) {
            height: auto;
            padding: 30px 0px;
            margin-bottom: 25px;
        }
        h1{
            font-size: 18px;
            margin-bottom: 0px;
        }
        .activity-month{
            color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
    }

    .activity-single{
        &:not(:last-child){
            margin-bottom: 25px;
        }
        .activity-single__figure{
            min-width: 76px;
        }
        .activity-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin: ${({theme:t})=>t.rtl?"4px 0 0 10px":"4px 10px 0 0"};
            &.bg-primary{
                background: ${({theme:t})=>t["primary-color"]}15;
                color: ${({theme:t})=>t["primary-color"]};
            }
            &.bg-secondary{
                background: ${({theme:t})=>t["secondary-color"]}15;
                color: ${({theme:t})=>t["secondary-color"]};
            }
            &.bg-success{
                background: ${({theme:t})=>t["success-color"]}15;
                color: ${({theme:t})=>t["success-color"]};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        img{
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 12px;
        }
        .activity-title{
            font-size: 14px;
            font-weight: 500;
            margin: -4px 0 0;
            span{
                font-weight: 400;
                margin: 0 2px;
                color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
            }
        }
        .activity-timeMeta{
            font-size: 12px;
            margin-bottom: 0;
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
        }
    }
`;export{x as A,i as P,c as T,o as a,a as b,d as c,l as d,p as e,g as f,e as g,s as h};
