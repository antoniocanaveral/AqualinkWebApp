"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2134],{55962:(t,e,r)=>{r.r(e),r.d(e,{ActivitiesWrapper:()=>s,ProjectCard:()=>a,ProjectDetailsWrapper:()=>x,ProjectHeader:()=>o,ProjectList:()=>m,ProjectListAssignees:()=>c,ProjectListTitle:()=>l,ProjectPagination:()=>g,ProjectSorting:()=>i,TaskLists:()=>p,TasklistAction:()=>d});var n=r(19335);const o=n.Ay.div`
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            @media only screen and (max-width: 767px){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
            }
        }
    }
    .ant-page-header-heading-sub-title{
        ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
        position: relative;
        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
            top:0;
        }
    }
`,i=n.Ay.div`
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
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: auto;
            @media only screen and (max-width: 1299px){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 0;
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
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                        &:hover{
                            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
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
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 5px;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 5px;
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
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: auto;
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
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
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
                ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 12px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 11px;
                ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                &:last-child{
                    ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 0;
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0 none;
                }
                a{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                    font-weight: 400;
                }
                &.active{
                    a{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
        input{
            height: 40px !important;
            border-radius: 23px;
            background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
        }
        .ant-input-suffix{
            svg{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
            }
        }
    }
    .ant-select-arrow{
        right: auto;
        ${t=>{let{theme:e}=t;return e.rtl?"left":"right"}}: 11px !important;
        svg{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
        }
    }
    
    .sort-group{
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        display: flex;
        align-items: center;
        justify-content: flex-end;

               
        .ant-select{
            ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 10px;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 15px;
            @media only screen and (max-width: 575px){
                ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 0px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
            }
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["input-bg"]}};
                .ant-select-selection-item{                    
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 20px;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                &:hover,
                &.active{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
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
                    ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 0 none;
                    margin-bottom: 5px;
                }
            }
        }
    }
`,a=n.Ay.div`
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
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 11px !important;
            }
            a,
            .ant-tag{
                margin: 2px;
            }
            .ant-tag{
                text-transform: uppercase;
                font-size: 10px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
                line-height: 18px;
                background: red;
                color: #fff;
                border: 0 none;
                &.early{
                    background: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
                &.progress{
                    background: #FF4D4F;
                }
                &.late{
                    background: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                }
                &.complete{
                    background: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
        .ant-dropdown-trigger{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            svg{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
            }
        }
    }
    .project-desc{
        margin: 7px 0 25px 0;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 30px;
            &:last-child{
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 0;
            }
            span, strong{
                display: block;
            }
            span{
                font-size: 12px;
                margin-bottom: 2px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
            strong{
                font-weight: 500;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
    }
    .project-progress{
        p{
            margin: 2px 0 0 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
                    color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
    }
    .project-assignees{
        border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 14px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
`,g=n.Ay.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 767px) {
            justify-content: center;
        }
    }
`,l=n.Ay.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
        a{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
`,c=n.Ay.div`
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
`,m=n.Ay.div`

    .project-list-progress{
        p{
            margin: 4px 0 0 0;
            font-size: 13px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
    .ant-table{
        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
        .ant-table-thead{
            tr{
                th{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-light-text"]}};
                    background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
                    border-bottom-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                }
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
                .ant-tag{
                    &.progress{
                        background-color: #FF4D4F;
                    }
                    &.late{
                        background-color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                    }
                    &.complete{
                        background-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                    }
                }
                td{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    border-bottom-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
                }
            }
            .ant-progress{
                &.ant-progress-status-success{
                    .ant-progress-text{
                        svg{
                           color: ${t=>{let{theme:e}=t;return e["success-color"]}};
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
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["light-text"]}};
        border-top: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-table-container table > thead > tr th:first-child{
        border-radius: ${t=>{let{theme:e}=t;return e.rtl?"0 10px 10px 0":"10px 0 0 10px"}} !important;
        ${t=>{let{theme:e}=t;return e.rtl?"border-right":"border-left"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-table-container table > thead > tr th:last-child{
        border-radius: ${t=>{let{theme:e}=t;return e.rtl?"10px 0 0 10px":"0 10px 10px 0"}} !important;
        ${t=>{let{theme:e}=t;return e.rtl?"border-left":"border-right"}}: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
    }
    .ant-dropdown-trigger{
        svg{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
`,x=n.Ay.div`
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
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
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 10px;
            height: 35px;
            padding: 0px 13.5px;
            &.btn-markComplete{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                transition: .25s;
                border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-deep"]}};
                &:hover{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                    svg{
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
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
            border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-secondary"]}};
            box-shadow: 0 3px 5px ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}05;
            svg,
            img{
                width: 14px;
                height: 14px;
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 6px;
            }
        }
        .project-edit{
            color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
        }
        .project-remove{
            color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${t=>{let{theme:e}=t;return e["success-color"]}};
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
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
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
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 20px;
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
        }
        p{
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(251,53,34,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${t=>{let{theme:e}=t;return e["warning-color"]}};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 500;
            }
            .color-primary{
                color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
            .color-danger{
                color: ${t=>{let{theme:e}=t;return e["danger-color"]}};
            }
        }
    }
    .project-users-wrapper{
        .btn-addUser{
            padding: 0px 12.6px;
            font-size: 12px;
            font-weight: 500;
            transition: .25s;
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
            &:hover{
                svg{
                    color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
                }
            }
        }
        i +span, svg +span, img +span {
            ${t=>{let{theme:e}=t;return e.rtl?"margin-right":"margin-left"}}: 6px;
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
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 15px;
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
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                }
                p{
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["dark-text"]}};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
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
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
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
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 8px;
            }
        }
    }
`,p=n.Ay.div`
    .ant-card{
        .ant-card-head{
            border-color: ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            position: relative;
            padding: 20px 0px;
            &:not(:last-child){
                ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 18px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}}: 0;
                bottom: -1px;
                height: 1px;

            }
            &.active{
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                &:before{
                    background: ${t=>{let{theme:e}=t;return e[e.mainContent]["menu-active"]}};
                }
            }
        }
    }
    .ant-table{
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
    }
    table{
        margin-top: 15px;
        .ant-checkbox.ant-checkbox-checked{
            .ant-checkbox-inner{
                background: ${t=>{let{theme:e}=t;return e["success-color"]}};
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
            &:after{
                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
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
                    ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 25px;
                }
                .ant-checkbox-indeterminate {
                    .ant-checkbox-inner{
                        &:after{
                            background: ${t=>{let{theme:e}=t;return e["success-color"]}};
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
                    text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
                    &:first-child{
                        ${t=>{let{theme:e}=t;return e.rtl?"padding-right":"padding-left"}}: 25px;
                    }
                    &:last-child{
                        ${t=>{let{theme:e}=t;return e.rtl?"padding-left":"padding-right"}}: 25px;
                    }
                    .task-title{
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    }
                    .task-created{
                        font-size: 12px;
                        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
                    }
                    .ant-checkbox{
                        &:hover{
                            .ant-checkbox-inner{
                                border-color: ${t=>{let{theme:e}=t;return e["success-color"]}};
                            }
                        }
                    }
                }
                &:hover{
                    box-shadow: 0 15px 50px ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}}20;
                    > td{
                        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["white-background"]}};
                    }
                }
            }
        }
    }

    .tasklist-action{
        margin: 18px 25px 25px;
        button{
            width: 100%;
            text-align: ${t=>{let{theme:e}=t;return e.rtl?"right":"left"}};
            justify-content: flex-start;
            font-size: 12px;
            font-weight: 500;
            &.ant-btn-primary{
                border-radius: 6px;
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}}10;
            }
        }
    }
`,d=n.Ay.div`
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
        color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
    }
    .task-created{
        color: #9299b8 !important;
    }
    .task-move{
        svg,
        i{
            width: 16px;
            height: 16px;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
    .task-action{
        svg,
        i{
            width: 16px;
            height: 16px;
        }
    }
`,s=n.Ay.div`
    padding: 25px;
    min-height: 435px;
    .activity-block{
        &:not(:last-child){
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
        }
    }
    .activity-dateMeta{
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: ${t=>{let{theme:e}=t;return e[e.mainContent]["main-background-light"]}};
        border: 1px solid ${t=>{let{theme:e}=t;return e[e.mainContent]["border-color-default"]}};
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
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
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
            margin: ${t=>{let{theme:e}=t;return e.rtl?"4px 0 0 10px":"4px 10px 0 0"}};
            &.bg-primary{
                background: ${t=>{let{theme:e}=t;return e["primary-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["primary-color"]}};
            }
            &.bg-secondary{
                background: ${t=>{let{theme:e}=t;return e["secondary-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["secondary-color"]}};
            }
            &.bg-success{
                background: ${t=>{let{theme:e}=t;return e["success-color"]}}15;
                color: ${t=>{let{theme:e}=t;return e["success-color"]}};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        img{
            ${t=>{let{theme:e}=t;return e.rtl?"margin-left":"margin-right"}}: 12px;
        }
        .activity-title{
            font-size: 14px;
            font-weight: 500;
            margin: -4px 0 0;
            span{
                font-weight: 400;
                margin: 0 2px;
                color: ${t=>{let{theme:e}=t;return e[e.mainContent]["gray-text"]}};
            }
        }
        .activity-timeMeta{
            font-size: 12px;
            margin-bottom: 0;
            color: ${t=>{let{theme:e}=t;return e[e.mainContent]["extra-light-text"]}};
        }
    }
`},5332:(t,e,r)=>{r.r(e),r.d(e,{filterProjectByStatus:()=>h,filterSinglePage:()=>s,sortingProjectByCategory:()=>u});var n=r(53229),o=r(97604);const{singleProjectBegin:i,singleProjectSuccess:a,singleProjectErr:g,filterProjectBegin:l,filterProjectSuccess:c,filterProjectErr:m,sortingProjectBegin:x,sortingProjectSuccess:p,sortingProjectErr:d}=n.default,s=t=>async e=>{try{e(i());const r=o.filter((e=>e.id===parseInt(t,10)));e(a(r))}catch(r){e(g(r))}},h=t=>async e=>{try{e(l());const r=o.filter((e=>"all"!==t?e.status===t:o));e(c(r))}catch(r){e(m(r.toString()))}},u=t=>async e=>{try{e(x());const r=o.sort(((e,r)=>r[t]-e[t]));setTimeout((()=>{e(p(r))}),500)}catch(r){e(d(r))}}},91607:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC"},20389:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC"},35722:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC"},86483:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAD3klEQVR4Xu2Xzys1URyHDymSjWSBSBRJsrRQ/mv/gLKwlCSiRGwkGwrJ+/adOtO5Y67rLTHv03M3t/k9n89znjkzQ7u7u3+SP2wDQwLGsq2CCZjNV8BwvgIWML0BeD7nYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH02ABwxuAx9NgAcMbgMfTYAHDG4DH65TBGxsbaWZmJh0fH6ebm5u6+p2dnTQxMVEtPz8/p8PDw3R/f18tl9ti3cHBQQ+ylZWVtLi4mC4vL9PZ2Vm1LdYtLCykk5OTnuvkA+Oc8dvb26vPNTc3l9bX19PIyEi1rrzW1NRU2tzcTGNjY9W26+vrdHR01Imh0xnAATdKfH19Taenp3XxsX58fLwGF+W/vLxUy7FtcnKyAhElx/Lt7W0NMjfc3C9g3N3dtUKI8weop6entL+/X0Pa3t6ujolBEve5traWrq6uquWtra1qv7in2La6utqT4TdJdwJwwAk7YuTPz8+ni4uLVrOiqBJWwHh4eKhBRdGjo6M95pVWxr7xy4OiWXyYPT09XYGM/xJwc9987RhQzYFVDsLfhBvX7gTgXMJXRn+25fz8/EOxJfw2eEtLS+n9/f3DFNDc97PzxL7l0yJMbxpbGi3gooFBgMOw2dnZ2tiwvrS93J7n6LLgtrm1DcAgwM1H8vLycjVo8jUHHf+T0P8bg5vw2+bcz4qNbXHM8PBw3/m3bc4eZHfboNTgPkO4n8HNl5rmvJrfWPvNweXxcWx+CrRZ3pzny1uNQRJzc/kW3zbQnIP/AXA/uBlELjyW+70dN40aBKDtSdAGN8coB9Zn9/uTj+Z8rc4/oqO8sKT8vb291S9Kg76D28AMgtAE3PzOzffy+PhYf6L5Hfwbw9drduszSR7f30CnHtHfH88zChg+BgQsYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaLGB4A/B4GixgeAPweBosYHgD8HgaDAf8Fw5nKbbT1XKOAAAAAElFTkSuQmCC"}}]);