import Styled from 'styled-components';

const Action = Styled.div`
  .active{
    color: #FA8B0C;
  }
`;

const Main = Styled.div`
    padding: 0px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    &.grid-boxed{
        padding: 0px 180px 20px;
        @media only screen and (max-width: 1599px){
            padding: 0px 130px 20px;
        }
        @media only screen and (max-width: 1399px){
            padding: 0px 50px 20px;
        }
        @media only screen and (max-width: 991px){
            padding: 0px 30px 20px;
        }
    }

    .doughnutchart-inner{
        position: relative;
        .doughnutchart-inner-text{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            line-height: 1;
            margin-bottom: 0px;
            display: inline-block;
            transform: translate(-50%, -50%);
            .doughnutchart-inner-content{
                font-size: 30px;
                font-weight: 600;
                line-height: 1;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                display: block;
            }
            .doughnutchart-inner-label{
                font-size: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        canvas{
            margin: 0 auto;
        }
    }
    .ant-switch{
        .anticon svg{
            color: #fff;
        }
    }
    /* ant breadcrumb */
    .ant-breadcrumb {
        a{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    .page-header-actions{
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            &:hover{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']} !important;
            }
        }
    }
    /* Card Title */
    .ant-card{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card{
        &.ninjadash-ghost-card{
            .ant-card-body{
                background: linear-gradient(90deg, rgb(95, 99, 242), rgb(255, 105, 165));
            }
        }
    }
    
    .ant-card-head-title{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ant-card-bordered{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-card-head{
        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ninjadash-card-title-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .ninjadash-card-title-text{
                font-size: 18px;
                font-weight: 600;
                display: inline-block;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                .ninjadash-card-subtitile{
                    font-size: 12px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .ninjadash-card-title-extra-text{
                display: flex;
                align-items: center;
                position: relative;
                top: 3px;
                .ninjadash-total-chart-total{
                    font-size: 18px;
                    font-weight: 600;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 991px){
                        font-size: 15px;
                    }
                }
                .ninjadash-total-chart-status{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                    @media only screen and (max-width: 991px){
                        font-size: 12px;
                    }
                    i,
                    svg{
                        width: 22px;
                        height: 22px;
                        margin-right: -1px;
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: -1px;
                        @media only screen and (max-width: 991px){
                            width: 18px;
                            height: 18px;
                        }
                    }
                    &.ninjadash-total-chart-status-growth{
                        color: ${({ theme }) => theme['success-color']};
                    }
                    &.ninjadash-total-chart-status-down{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }

    .ant-card-body{
        p{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .ninjadash-card-nav{
        ul{
            display: flex;
            align-items: center;
            margin: 0 -10px 2px 0;
            margin: ${({ theme }) => (!theme.rtl ? '0 -10px 2px 0' : '0 0 2px -10px')};
            li{
                margin: 5px 0;
                a{
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 6px;
                    min-height: 30px;
                    padding: 0 12px;
                    transition: .3s;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    &:hover{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                &.ninjadash-active{
                    a{
                        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }

    .ant-card-rtl .ant-card-extra{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        
    }
    .ant-tabs-tab span svg {        
        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
    }
    .ant-btn{
        &.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            &.btn-transparent,
            &.btn-outlined{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.btn-outlined:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    /* Pagination Style */
    .ant-pagination-item{
        border-radius: 4px;
    }
    .ant-pagination-item a{
        font-weight: 400;
    }
    .ant-pagination-next svg{
        fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-pagination-options .ant-select-selector{
        padding: 0 6.5px
    }
    .ant-pagination-options .ant-select .ant-select-arrow{
        svg{
            width: 10px;
            fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    /* Picker Under Input */
    .ant-form-item-control-input .ant-picker {
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')} !important;
    }

    /* progressbars */

    .ant-progress {
        display: inline-flex !important;
        align-items: center;
        .ant-progress-inner{
            /* background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; */
            background-color: transparent;
        }
        .ant-progress-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-progress-circle-trail{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    .ant-progress>div {
        display: flex;
        flex-direction: column;
    }

    .ant-progress .ant-progress-outer {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }

    .ant-progress .ant-progress-text {
        order: 0;
        align-self: flex-end;
        text-align: center;
    }

    .ant-progress-status-warning .ant-progress-bg {
        background: #fa8b0c;
    }

    /* progress bars */
    
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: 580px;
    }
    .w-100{
        width: 100%;
    }
    .product-sidebar-col{
        @media only screen and (max-width: 767px){
            order: 2;
        }
    }
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* Button Group */
    .ant-btn-group{
        .ant-btn-default{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; 
        }
    }

    /* ant skeleton */
    .ant-skeleton{
        &.ant-skeleton-active{
            .ant-skeleton-content {
                .ant-skeleton-title{
                    background: linear-gradient(90deg, ${({ theme }) =>
                      theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                    background-size: 400% 100%;
                }
                .ant-skeleton-paragraph{
                    >li{
                        background: linear-gradient(90deg, ${({ theme }) =>
                          theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                        background-size: 400% 100%;
                    }
                }
            }
            .ant-skeleton-avatar{
                background: linear-gradient(90deg, ${({ theme }) =>
                  theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                background-size: 400% 100%;
            }
        }
        .ant-skeleton-content {
            .ant-skeleton-title{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-skeleton-paragraph{
                >li{
                    background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        .ant-skeleton-header{
            .ant-skeleton-avatar{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
    }

    /* ant picker */
    .ant-picker{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        input{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &::placeholder{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
        .ant-picker-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* ant checkbox */
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-radius: 4px;
            }
        }
        &.ant-checkbox-checked{
            &:after{
                border-color: ${({ theme }) => theme['primary-color']};
                border-radius: 4px;
            }
            .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['primary-color']};
                border-color: ${({ theme }) => theme['primary-color']};
                &:after{
                    top: 44%;
                    border-color: #fff;
                }
            }
        }
        &.ant-checkbox-indeterminate{
            .ant-checkbox-inner{
                &:after{
                    background-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-wrapper{
        &.ant-checkbox-wrapper-disabled{
            opacity: .5;
        }
        .ant-checkbox{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-checkbox-wrapper,
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-checkbox-input{
            &:focus{
                &+.ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-inner{
        border-radius: 4px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-checkbox']};
    }

    /* ant alert */
    .ant-alert-closable{
        .ant-alert-message{
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
    }

    .ant-alert-with-description .ant-alert-description{
        display: inline-block;
    }

    /* ant Calendar Picker */
    .ant-picker-calendar{
        .ant-badge-status-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-year-select{
        @media only screen and (max-width: 400px){
            width: 50% !important;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-month-select{
        @media only screen and (max-width: 400px){
            width: calc(50% - 8px) !important
        }
    }

    /* Card Grid */
    .card-grid-wrap{
        .ant-card-grid{
            @media only screen and (max-width: 575px){
                width: 50% !important
            }
        }
    }

    /* Drawer */
    .atbd-drawer{
        .ant-card-body{
            text-align: center;
            .ant-drawer-wrapper-body {
                text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            }
        }
    }
    .drawer-placement{
        @media only screen and (max-width: 400px){
            text-align: center;
        }
        .ant-radio-group{
            @media only screen and (max-width: 400px){
                margin-bottom: 15px;
            }
        }
    }
    .ant-drawer-content-wrapper{
        @media only screen and (max-width: 400px){
            width: 260px !important;
        }
        @media only screen and (max-width: 375px){
            width: 220px !important;
        }
    }

    /* Input */
    .input-wrap{
        @media only screen and (max-width: 991px){
            min-height: 500px;
        }
        input::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    /* Modal Buttons */
    .modal-btns-wrap{
        margin: 0 -5px;
    }
    /* spinner */
    .ant-spin{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        &:last-child{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
    }

    /* Column Cards Wrapper */
    .columnCardsWrapper{
        background: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-radius: 4px;
        padding: 50px 30px 25px;
    }
    .columnCardsWrapper .ant-card{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .columnCardsWrapper .ant-card-head{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .ant-card-grid{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        box-shadow: 1px 0 0 0 ${({ theme }) => theme[theme.mainContent]['border-color-default']}, 0 1px 0 0 ${({
  theme,
}) => theme[theme.mainContent]['border-color-default']}, 1px 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']}, 1px 0 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset, 0 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset     
    }

    /* Ant Collapse */
    .ant-collapse{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 6px;
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0 0 6px 6px;
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                >.ant-collapse-header{
                    border-radius: 0 0 6px 6px;
                }
            }
            .ant-collapse-item{
                &:last-child{
                    background-color: transparent;
                }
                .ant-collapse-header{
                    border-radius: 6px;
                }
            }
            .ant-collapse-content{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                .ant-collapse-content-box{
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
            }
        }
        .ant-collapse-header{
            .ant-collapse-header-text{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        padding: 12px 16px 10px 45px;
        background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
        @media only screen and (max-width: 1299px){
            padding: 12px 16px 10px 30px;
        }
    }
    .ant-collapse-content p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        margin-bottom: 0;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 20px 20px 20px;
    }
    .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
        padding: 10.5px 20px;
    }
    .ant-collapse.ant-collapse-borderless{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0px;
            }
        }
    }
    .ant-collapse > .ant-collapse-item,
    .ant-collapse .ant-collapse-content{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
    }

    .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        font-size: 8px;
        position: relative;
        top: ${({ theme }) => (!theme.rtl ? '-3px' : '0')};
        right: 0;
    }

    .ant-collapse .ant-collapse {
        border: 0 none;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-collapse .ant-collapse > .ant-collapse-item {
        border-bottom: 0;
    }
    .ant-collapse .ant-collapse .ant-collapse-header{
        border-radius: 6px 6px 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
    }
    .ant-collapse .ant-collapse .ant-collapse-content{
        margin: 20px 0 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 0;
    }

    /* Ant Radio */
    .ant-radio-wrapper{
        .ant-radio{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{
        box-shadow: 0 0;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child{
        border-right-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{
        border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper{
        height: 48px;
        line-height: 46px;
        padding: 0 25.25px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 1024px){
            padding: 0 10px;
        }
        @media only screen and (max-width: 379px){
            height: 40px !important;
            line-height: 38px !important;
            font-size: 12px;
            padding: 0 6px;
        }
        &:not(:first-child){
            &:before{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        &.ant-radio-button-wrapper-checked{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
        }
    }

    /* Select */
    .ant-tree-select .ant-select-selector{
        height: 42px;
    }
    .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
    }
    .tag-select-list{
        margin-bottom: -10px;
        .ant-select{
            margin-bottom: 10px;
        }
    }
    .ant-select-selector{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
    }

    .ant-select{
        .ant-select-selector {
            .ant-select-selection-item{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        &.ant-select-disabled{
            opacity: .6;
        }
        &.ant-select-multiple{
            .ant-select-selection-item{
                height: 24px;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
        
        &.ant-select-lg{
            height: 50px;
            line-height: 48px;
            .ant-select-selector{
                height: 50px !important;
                line-height: 48px;
            }
            .ant-select-selection-item{
                line-height: 48px !important;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
            }
            &.ant-select-multiple.ant-select-lg .ant-select-selection-item{
                height: 32px;
                line-height: 32px !important;
            }
        }
        &.ant-select-multiple.ant-select-sm{
            .ant-select-selection-item{
                height: 16px;
                line-height: 14px;
                font-size: 11px;
            }
        }
        .ant-select-arrow{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* Slider */
    .slider-with-input{
        .ant-slider{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        .slider-with-input__single{
            margin-bottom: 15px;
        }
        .ant-input-number{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-input-number-input{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }

    .ant-slider-mark-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .anticon svg{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }

    .ant-slider-handle{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']}
    }

    /* ant input */
    .ant-input,
    .ant-input-affix-wrapper{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        &:focus{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            box-shadow: 0 0;
        }
        input.ant-input{
            &:focus{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                box-shadow: 0 0 !important;
            }
        }
    }

    .ant-input-affix-wrapper{
        &:not(.ant-input-affix-wrapper-disabled){
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .ant-input-affix-wrapper-focused{
        box-shadow: 0 0;
    }

    /* Taglist */
    .ant-tag{
        margin: 5px;
    }
    .taglist-wrap{
        margin: -5px;
        .ant-tag {
            line-height: 22px;
            padding: 0 10.2px;
            border: 0 none;
            margin: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &.ant-tag-has-color{
                color: #fff !important;
            }
            &.ant-tag-magenta{
                color: #eb2f96;
            }
            &.ant-tag-red{
                color: #f5222d;
            }
            &.ant-tag-volcano{
                color: #fa541c;
            }
            &.ant-tag-orange{
                color: #fa8c16;
            }
            &.ant-tag-gold{
                color: #faad14;
            }
            &.ant-tag-line{
                color: #a0d911;
            }
            &.ant-tag-green{
                color: #a0d911;
            }
            &.ant-tag-cyan{
                color: #13c2c2;
            }
            &.ant-tag-blue{
                color: #1890ff;
            }
            &.ant-tag-geekbule{
                color: #2f54eb;
            }
            &.ant-tag-purple{
                color: #722ed1;
            }
        }
    }

    .ant-tag {
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* ant empty */

    .ant-empty-description{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    /* Steps style */
    .ant-steps-item-finish,
    .ant-steps-item-wait {
        .ant-steps-item-icon{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }

    .steps-content{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-steps-item-wait {
        .ant-steps-item-icon{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            .ant-steps-icon{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-steps-item-process{
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
        }
    }

    /* Timepicker List */
    .timepicker-list{
        margin: -5px;
        .ant-picker{
            margin: 5px;
        }
    }

    /* ant statistics */

    .ant-statistic {
        .ant-statistic-title{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .ant-statistic-content{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-statistic-content{
        .anticon {
            &.anticon-arrow-up{
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            &.anticon-arrow-down{
                svg{
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
        }
    }

    /* Ant Menu */
    .ant-menu{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .ant-menu-submenu-title{
            svg,
            .ant-menu-title-content,
            .ant-menu-submenu-arrow{
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
        }
        .ant-menu-item{
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
            &.ant-menu-item-selected{
                &:after{
                    border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
                .ant-menu-item-icon{
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                .ant-menu-title-content{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
            &.ant-menu-item-disabled{
                .ant-menu-item-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
                .ant-menu-title-content{
                    opacity: .5;
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            &.ant-menu-item-active{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
        .ant-menu-submenu {
            &.ant-menu-submenu-selected{
                .ant-menu-submenu-title{
                    span{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &.ant-menu-inline{
            .ant-menu-submenu-title svg{
                position: relative;
                top: 2px;
            }
            .ant-menu-submenu {
                &.ant-menu-submenu-open,
                &.ant-menu-submenu-active{
                    .anticon {
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                    .ant-menu-submenu-arrow{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &:not(.ant-menu-horizontal){
            .ant-menu-item-selected,
            .ant-menu-submenu-open{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                &.ant-menu-item-active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }

    .ant-menu-horizontal{
        &:not(.ant-menu-dark){
            > .ant-menu-submenu{
                &:hover{
                    .ant-menu-submenu-title{
                        svg,
                        .ant-menu-title-content{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    &:after{
                        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }

    /* ant result */
    .ant-result{
        &.ant-result-success{
            .anticon svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        &.ant-result-info{
            .anticon svg{
                color: ${({ theme }) => theme['info-color']};
            }
        }
        &.ant-result-warning{
            .anticon svg{
                color: ${({ theme }) => theme['warning-color']};
            }
        }
        &.ant-result-error{
            .anticon svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        .ant-result-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ant-result-subtitle{
            font-size: 13px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-result-content{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            .ant-typography{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                a{
                    margin-left: 4px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
    }

    .ant-result-extra{
        .ant-btn-default{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    /* Ant Comment */
    .ant-comment-inner{
        padding: 0;
        .ant-comment-content-author,
        .ant-comment-content-author-name{
            >*{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-comment-content-detail p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .ant-list-items{
        padding-top: 22px;
    }
    .ant-list-items li:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment-nested{
        margin-top: 22px;
    }
    .ant-comment-actions li span{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .ant-comment-content-detail textarea{
        resize: none;
        min-height: 170px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .nested-comment-wrapper  {
        .comment-title{
            font-size: 12px;
            padding-bottom: 10px;
            margin-bottom: 22px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        
    }

    .ant-list-split .ant-list-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    /* ant list */
    .ant-list{
        &.ant-list-bordered{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        .ant-list-item-meta{
            padding: 10px 24px; 
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-list-item-meta-description{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* Vector Map */
    .rsm_map{
        min-height: 505px;
        .world-map{
            width: 100%;
            height: auto;
            @media only screen and (max-width: 1599px){
                height: 480px;
            }
            @media only screen and (max-width: 1399px){
                height: 400px;
            }
            @media only screen and (max-width: 575px){
                height: 400px;
            }
            @media only screen and (max-width: 767px){
                height: 300px;
            }
            @media only screen and (max-width: 575px){
                height: 250px;
            }
            @media only screen and (max-width: 479px){
                height: 350px;
            }
            @media only screen and (max-width: 375px){
                height: 240px;
            }
        }
        .controls{
            position: absolute;
            right: 30px;
            bottom: 30px;
            button{
                display: block;
                width: 27px;
                height: 27px;
                background: none;
                color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                padding: 0;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                cursor: pointer;
                &:first-child{
                    border-radius: 6px 6px 0 0;
                }
                &:last-child{
                    border-radius: 0 0 6px 6px;
                }
                &:focus{
                    outline: none;
                }
                svg{
                    width: 10px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            button + button{
                border-top: 0 none;
            }
        }
    }

    /* Checkout Wrapper */
    .checkoutWraper{
        .ant-card-body{
            padding: 50px 50px 50px 30px !important;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .ant-steps{
            margin-top: 0;
        }
        .step-action-wrap{
            @media only screen and (max-width: 1599px){
                margin-bottom: 50px;
            }
            @media only screen and (max-width: 767px){
                margin-bottom: 30px;
            }
        }
    }

    /* Star Active */
    a{
        i,
        span.fa{
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        &.starDeactivate{
          i:before{
            content: "\f31b";
          }
        }
        &.starActive{
          i,
          span.fa{
            color: ${({ theme }) => theme['warning-color']};
          }
          i:before,
          span.fa:before{
            color: ${({ theme }) => theme['warning-color']};
            content: "\f005";
    
          }
        }
    }

    .ant-timeline{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        .ant-timeline-item-content{
            font-size: 16px;
        }
    }

    .ant-timeline-item-tail{
        border-width: 3px;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    
    .ant-rate-content{
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate{
        .anticon {
            svg{
                color: #FA8B0C;
            }
        }
    }

    .ant-rate-star.ant-rate-star-zero span svg{
        color: #c6d0dc;
    }

    .account-card{
        .ant-card-head{
            .ant-card-extra{
                @media only screen and (max-width: 575px){
                   padding-top: 0 !important;
                }
            }
            
        }
                
    }

    /* Rechart */
    .recharts-default-legend{
        .recharts-legend-item{
            min-width: 100px !important;
        }
    }

    /*  Radio */
    .ant-radio{
        &.ant-radio-disabled{
            opacity: .4;
            &+span{
                opacity: .4;
            }
        }
    }
    .radio-size-wrap{
            .ant-radio-button-wrapper{
                @media only screen and (max-width: 1450px){
                    padding: 0 11.5px;
            }
        }
    }
    .ant-radio-wrapper:hover .ant-radio, 
    .ant-radio:hover .ant-radio-inner, 
    .ant-radio-input:focus + .ant-radio-inner{
        border-color: ${({ theme }) => theme['primary-color']};
        outline: none;
        box-shadow: 0 0;
    }

    .ant-radio-inner{
        transition: 0s;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .ant-radio-checked{
        .ant-radio-inner{
            border-color: ${({ theme }) => theme['primary-color']};
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-disabled{
            opacity: .4;
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-checked{
            &.ant-radio-button-wrapper-disabled{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }
    

    /* Message  */
    .message-button-list{
        margin: -4px;
        .ant-btn {
            margin: 4px;
        }
    }
    /* Chart Label */

    .chart-label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
        color: #5a5f7d;
    }

    .chart-label .label-dot {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }

    .chart-label .label-dot.dot-success {
        background: #20c997;
    }

    .chart-label .label-dot.dot-info {
        background: #5f63f2;
    }

    .chart-label .label-dot.dot-warning {
        background: #fa8b0c;
    }

    .chart-label .label-dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    }

    // Ant comment action
    .ant-comment-actions{
        li{
            position: relative;
            &:not(:last-child){
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 8px;
                &:after{
                    position: absolute;
                    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 12px;
                    background-color: #C6D0DC;
                    content: '';
                }
            }
            .com-time{
                cursor: default;
            }
            span{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0;
            }
        }
    }

    // Emoji Picker React
    .emoji-picker-react{
        top: 15px;
        right: 25px;
        box-shadow: 0 5px 10px #efefef10;
        @media only screen and (max-width: 479px){
            top: 25px;
            right: -50px;
            width: 260px;
        }
        .emoji-categories{
            padding: 0 10px;
        }
        .emoji-search{
            margin: 0 10px;
        }
        .content-wrapper:before{
            display: none;
        }
        .emoji-group{
            padding: 0 10px;
        }
        .emoji-group:before{
            font-size: 12px;
            font-weight: 600;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .emoji-group .emoji-img{
            margin: 5px !important;
        }
    }

    .wizard-side-border{
        >.ant-card{
            .ant-card-body{
                padding: 0 25px !important;
            }
        }
        .checkout-successful{
            >.ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px !important;
                    }
                }
            }
        }
        .payment-method-form.theme-light{
            .shipping-selection__card{
                .ant-card-body{
                    padding: 25px 0 !important;
                }
            }
        }
        .shipping-selection__card{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .atbd-review-order{
            .ant-card-body{
                padding: 25px 25px 0 !important;
                @media only screen and (max-width: 767px) {
                    padding: 15px 15px 0 !important;
                }
            }
        }
        
        .ant-steps {
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
        }
        .steps-wrapper{
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
        }
    }
    .editor-compose > div {
        position: static;
        max-width: 100%;
        margin: 0 0 25px;
    }

    // Ant Dragger
    .ant-upload-drag{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        border-radius: 10px !important;
        display: flex;
        align-items: center;
        min-height: 100px;
        border-color: #C6D0DC;
        &.ninjadash-uploader-large{
            min-height: 180px;
        }
        .ant-upload-drag-container{
            .ant-upload-text{
                margin-bottom: 0;
                font-size: 15px;
                color: #9299B8;
            }
        }
    }

    .ant-upload{
        .ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-upload-list-item{
        .ant-upload-list-item-info{
            border-radius: 6px;
            padding: 0px 8px;
            background-color: transparent;
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            a{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }

    // Form Validation
    .ant-form-item{
        &.ant-form-item-has-success{
            .ant-input{
                border-color: ${({ theme }) => theme['success-color']};
            }
            &.ant-form-item-with-help{
                .ant-form-item-explain{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
        &.ant-form-item-with-help{
            .ant-form-item-explain{
                margin-top: 6px;
            }
        }
    }
    /* Order Summery */
    .ninjadash-order-summery{
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    }

    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-table-thead {
        > tr {
            > th{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-table-tbody{
        >tr{
            >td{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &:hover{
                >td{
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                }
            }
        }
    }
    .ant-btn-transparent,
    .btn-outlined,
    .ant-btn-white
    {
        .anticon-loading{
            svg{
                color: ${({ theme }) => theme['primary-color']};
            }
        } 
    }
    .anticon-loading{
        svg{
            color: #fff;
        }
    }

    .ninjadash-action-count{
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
    }
`;

const BorderLessHeading = Styled.div`
    .ant-card{
        .ant-card-head{
            border: 0 none;
        }
        .ant-card-body{
            padding-top: 0 !important;
        }
    }
`;
const ChartPointHorizontal = Styled.div`
    .ninjadash-chartpoint{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 330px;
        margin: 20px auto 0;
        .ninjadash-chartpoint__item{
            display: flex;
            align-items: center;
            .ninjadash-chartpoint__tika{
                display: block;
                width: 7px;
                height: 7px;
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
                border-radius: 50%;
            }
            .ninjadash-chartpoint__label{
                font-size: 14px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
    }
`;
const TableDefaultStyle = Styled.div`
    &.ninjadash-having-header-bg{
        .ant-table-content{
            table{
                tr{
                    &:first-child{
                        td{
                            padding-top: 15px !important;
                        }
                    }
                }
            }
        }
    }
    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ant-table-cell{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-table-content{
        .ant-table-thead{
            >tr{
                >th{
                    &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan]){
                        &:before{
                            display: none;
                        }
                    }
                }
                >th.ant-table-cell{
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['status-background']};
                    border: 0 none;
                    &:first-child{
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
                    }
                    &:last-child{
                        border-top-right-radius: 6px;
                        border-bottom-right-radius: 6px;
                        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 15px;
                        text-align: right;
                    }
                }
            }
        }
        .ant-table-tbody{
            >tr{
                .status{
                    font-weight: 500;
                    text-transform: capitalize;
                    &.done{
                        color: ${({ theme }) => theme['success-color']};
                        background: ${({ theme }) => theme['success-color']}10;
                    }
                    &.pending{
                        color: ${({ theme }) => theme['warning-color']};
                        background: ${({ theme }) => theme['warning-color']}10;
                    }
                    &.blocked{
                        color: ${({ theme }) => theme['danger-color']};
                        background: ${({ theme }) => theme['danger-color']}10;
                    }
                }
                &:hover{
                    td.ant-table-cell{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
                    }
                }
                &:first-child{
                    >td.ant-table-cell{
                        padding-top: 20px;
                    }
                }
                >td.ant-table-cell{
                    border: 0 none;
                    font-size: 14px;
                    &:first-child{
                        font-size: 15px;
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                    }
                    &:last-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 15px;
                        text-align: right;
                    }
                }
            }
        }
        tr{
            .ant-table-cell{
                padding: 10px 15px;
                .ninjadash-info-element{
                    img{
                        max-width: 32px;
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
                        
                    }
                
                    .ninjadash-info-element__text{
                        font-size: 15px;
                        font-weight: 500;
                        text-transform: capitalize;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    
                }
            }
        }
    }
    .ninjadash-recent-deals,
    .ninjadash-top-product{
        min-height: 385px;
    }

    .ninjadash-member-progress-table{
        .ant-progress{
            min-width: 120px;
        }
        .ant-table-content {
            .ant-table-tbody {
                >tr:first-child {
                    >td.ant-table-cell{
                        padding-top: 14px;
                    }
                }
            }
        }
        .ant-progress-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ant-empty-description{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
`;

const ButtonsGroupWrapper = Styled.div`
    margin-bottom: -25px;
    .button-group-single{
        margin-bottom: 15px;
        h4{
            font-size: 15px;
            margin-bottom: 8px;
        }
        .ant-btn-white{
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
            // ${({ theme }) => (theme.rtl ? 'border-left-width' : 'border-right-width')}: 0px;
            &:last-child{
                ${({ theme }) => (theme.rtl ? 'border-left-width' : 'border-right-width')}: 1px;
            }
            &:hover{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
                background: ${({ theme }) => theme[theme.mainContent]['general-background']} !important;
            }
        }
        .ant-btn.ant-btn-light{
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
            background: ${({ theme }) => theme[theme.mainContent]['general-background']} !important;
            &:last-child{
                ${({ theme }) => (theme.rtl ? 'border-left-width' : 'border-right-width')}: 1px;
            }
        }
        
        .ant-btn-group{
            margin-bottom: 10px;
            &:not(last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            }
            button{
                font-size: 13px;
                span{
                    line-height: 1;
                }
                svg{
                    color: #fff;
                }
            }
        }
    }
`;

const BlockButtonsWrapper = Styled.div`
    .ant-btn-block{
        margin-bottom: 10px;
    }
`;

const ButtonSizeWrapper = Styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
`;

const BtnWithIcon = Styled.div`
    display: inline;
    .anticon i,
    .anticon svg,
    .anticon img{
        width: 10px;
        height: 10px;
    }
    .ant-btn-group button.active{
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0px;
    }
`;

const AlertList = Styled.div`
    margin-top: -15px;
    .alert-empty-message{
        .ant-alert{
            padding: 14.5px 20px 14.5px!important;
            &.ant-alert-no-icon{
                padding: 14.5px 20px 14.5px!important;
            }
        }
        .ant-alert-icon{
            top: 15px !important;
        }
        .ant-alert-message{
            display: none !important;
        }
    }
`;

const AutoCompleteWrapper = Styled.div`
    .ant-select:not(:last-child){
        margin-bottom: 20px;
    }
    .auto-complete-input{
        .ant-select{
            width: 200px !important;
            @media only screen and (max-width: 575px){
                width: 100% !important;
            }
        }
    }
`;

const CalendarWrapper = Styled.div`
    .ant-picker-calendar{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ant-picker-panel{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            .ant-picker-calendar-date{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                .ant-picker-calendar-date-value{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
                .ant-picker-calendar-date-content{
                    .notes-month{
                        span{
                            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        }
                    }
                }
            }
        }
    }
    .ant-picker-content{
        thead{
            tr{
                th,
                td{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        tbody{
            tr{
                td{
                    &:hover{
                        .ant-picker-cell-inner{
                            background-color: ${({ theme }) =>
                              theme[theme.mainContent]['main-background-light']} !important;
                        }
                    }
                    .ant-picker-calendar-date{
                        .ant-picker-calendar-date-value{
                            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                            opacity: .6;
                        }
                        &.ant-picker-calendar-date-today{
                            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                            &:hover{
                                .ant-picker-calendar-date-value{
                                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                                }
                            }
                        }
                    }
                    &.ant-picker-cell-in-view{
                        .ant-picker-calendar-date{
                            .ant-picker-calendar-date-value{
                                opacity: 1;
                                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                            }
                        }
                    }
                }
            }
        }
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        height: 30px !important;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-item,
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        line-height: 28px !important;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content{
        height: 105px;
        @media only screen and (max-width: 575px){
            height: 40px;
        }
    }
    .ant-radio-button-wrapper{
        height: 30px;
        line-height: 28px;
        @media only screen and (max-width: 575px){
            height: 30px !important;
            line-height: 28px !important;
        }
    }
`;

const DatePickerWrapper = Styled.div`
    .ant-picker{
        padding: 6px 11px 6px;
        width: 100%;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 5px;
    }
    .ant-picker:not(:last-child){
        margin-bottom: 20px;
    }
    .ant-picker-input > input{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        &::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    .ant-picker-input > input[disabled]{
        opacity: .6;
    }
    .ant-picker-range .ant-picker-input > input{
        text-align: center;
    }
`;

const NotificationListWrapper = Styled.div`
    margin: -4px;
    button{
        margin: 4px;
        .anticon svg{
            color: #fff;
        }
    }
`;

const TagInput = Styled.div`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    margin: -3px;
    .ant-tag{
        margin: 3px;
        font-size: 11px;
        padding: 0 4px;
        border: 0 none;
        height: 24px;
        display: inline-flex;
        align-items: center;
    }
`;

const PageHeaderWrapper = Styled.div`
    .ant-page-header{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 5px;
    }
    .ant-page-header .ant-page-header-heading-left{
        margin: 2px 0;
    }
`;

const MessageStyleWrapper = Styled.div`
    .ant-btn-lg{
        font-size: 14px;
    }
`;

const BasicFormWrapper = Styled.div`
    .ant-form {
        .form-item{
            margin-bottom: 30px;
            label{
                font-weight: 500;
                display: block;
                margin-bottom: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .ant-cascader-picker{
                width: 100%;
                min-height: 48px;
                .ant-cascader-input{
                    min-height: 48px;
                }
            }
        }
        .ant-input-affix-wrapper > input.ant-input{
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            color: #9299B8;
        }
        .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
            position: relative;
            top: -2px;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        }
    }
    .ant-form-item-control-input{
        min-height: auto !important;
    }
    .ant-form-item,
    .ant-form-item-row{
        flex-flow: column;
        &:not(:last-child){
            margin-bottom: 26px;
        }
        &:last-child{
            margin-bottom: 0;
        }
        .ant-form-item-label{
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            label{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                height: fit-content;
                margin-bottom: 6px;
            }
        }
        .ant-form-item-control-input{
            input,
            textarea{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                &:placeholder{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
            }
            .ant-picker-input input{
                padding: 12px;
            }
            button{
                height: 44px;
            }
            .ant-input-affix-wrapper{
                padding: 0 20px;
            }
        }
        .ant-select {
            .ant-select-arrow{
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        .ant-select-single{
            .ant-select-selector{
                padding: 0 20px;
                height: 50px !important;
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
                .ant-select-selection-item{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    line-height: 46px !important;
                    padding: 0 !important;
                }
                .ant-select-selection-placeholder{
                    line-height: 46px !important;
                }
            }
        }
        .ant-radio-group {
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .setting-form-actions{
        margin: 48px 0 14px;
        @media only screen and (max-width: 575px){
            margin: 40px 0 14px;
        }
        button{
            border-radius: 6px;
            height: 44px;
            margin-bottom: 14px;
            &.ant-btn-light{
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-form-item-control-input{
        .input-prepend{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            height: 48px;
            border-radius: ${({ theme }) => (theme.rtl ? '0 4px 4px 0' : '4px 0 0 4px')};
            z-index: 10;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            svg,
            i{
                color:${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        .input-prepend-wrap{
            .ant-input-number{
                input{
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 70px;
                }
            }
        }
        .ant-input-number{
            width: 100% !important;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
    }
    .add-record-form{
        margin: 25px 0 35px 0;
        
        .record-form-actions{
            padding-right: 40px;
        }
        .ant-btn{
            height: 44px;
            font-size: 14px;
            font-weight: 500;
        }
        .ant-radio-group{
            margin-bottom: -4px;
            .ant-radio-wrapper{
                margin-bottom: 4px;
            }
        }
    }
    .adTodo-form{
        .btn-adTodo {
            font-size: 14px;
        }
    }

    .ninjadash-form-action{
        margin: -7.5px;
        button{
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            margin: 7.5px;
            padding: 6.4px 19px;
            &.ant-btn-light{
                height: 44px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
        }
    }
    .ninjadash_color-picker{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 4px;
        padding: 11px 14px;
        input{
            width: 100%;
            border: 0 none;
            background-color: #fff;
            &::-webkit-color-swatch{
                min-height: 18px;
                border: 1px solid #C6D0DC;
            }
        }
    }
    .ant-input-number{
        .ant-input-number-input{
            min-height: 46px;
        }
    }
`;

const CardToolbox = Styled.div`
    margin: 16px 0 10px;
    @media only screen and (max-width: 767px){
        margin: 8px 0 2px;
    }
    @media only screen and (max-width: 575px){
        margin: 2px 0 2px;
    }
    .ant-page-header.ninjadash-page-header-main{
        padding: 18px 30px 15px;
        @media only screen and (max-width: 767px){
            padding: 18px 15px 15px;
        }
    }
    .ant-page-header-heading{
        @media only screen and (max-width: 991px){
            flex-flow: column;
            align-items: center;
        }
        .ant-page-header-heading-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .title-counter{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-input-affix-wrapper{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            input{
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            }
        }
    }

    .ant-page-header-heading-left{
        @media only screen and (max-width: 575px){
            flex-flow: column;
        }
        @media only screen and (max-width: 800px){
            max-width: 100%;
        }
        .ant-page-header-back{
            @media only screen and (max-width: 575px){
                margin: 0;
                padding: 0;
            }
        }
        .ant-page-header-heading-title{
            @media only screen and (max-width: 575px){
                margin: 0 0 8px;
                padding: 0;
            }
            &:after{
                @media only screen and (max-width: 575px){
                    display: none;
                }
            }
        }
        .ant-page-header-heading-sub-title{
            @media only screen and (max-width: 575px){
                margin: 0;
                padding: 0;
                flex-flow: column;
            }
            .title-counter{
                @media only screen and (max-width: 575px){
                    margin-bottom: 16px;
                }
            }
        }
    }

    .ant-page-header-heading-title{
        position: relative;
        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 24px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 24px;
        @media only screen and (max-width: 767px){
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 12px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px !important;
        }
        &:after{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0px;
            top: 0;
            height: 100%;
            width: 1px;
            content: '';
            background: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }
    .ant-page-header-heading-sub-title{
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    .ant-page-header-heading-extra{
        @media only screen and (max-width: 991px){
            margin-top: 10px;
        }
    }
    .ant-select{
        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
        @media only screen and (max-width: 575px){
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-select-selector{
            height: 46px !important;
            min-width: 350px;
            @media only screen and (max-width: 1299px){
                min-width: 250px;
            }
            @media only screen and (max-width: 1199px){
                min-width: 220px;
            }
            @media only screen and (max-width: 991px){
                min-width: 100%;
            }
        }
        .ant-select-selection-search-input{
            height: 46px;
            border-radius: 23px;
            border: 0 none;
            box-shadow: 0 5px 20px #9299B803;
            input{
                height: 46px !important;
                font-size: 14px;
            }
        }
    }
    .btn-add_new{
        display: flex;
        align-items: center;
        font-weight: 600;
        border-radius: 6px;
        height: 40px;
        padding: 0 14px;
        font-size: 14px;
        color: #fff;
        background-color: ${({ theme }) => theme['primary-color']};
        @media only screen and (max-width: 375px){
            padding: 0 10px;
        }
        svg{
            width: 14px;
            height: 14px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
        }
        a{
            display: flex;
            align-items: center;
            svg{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            }
        }
    }
    .ant-select-selection-search{
        .ant-input-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
    }
`;

const FormGroupWrapper = Styled.div`
    .ant-card-body{
        @media only screen and (max-width: 767px){
            padding: 0 !important;
        }
    }
`;
const BannerCardStyleWrap = Styled.div`
    .ant-card-body{
        padding: 25px 25px 0 25px !important;
    }
`;

const FileCardWrapper = Styled.div`
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
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${({ theme }) => theme['primary-color']};
                    }
                    a + a{
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                    }
                }
            }
        }
        .file-single-info{
            width: 50%;
            align-items: center;
            .file-single-logo{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
        }
    }
`;

const TableWrapper = Styled.div`
    .ant-pagination-prev, .ant-pagination-next {
        line-height: 28px !important;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-table table{
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
    }
    .ant-table-thead > tr > th{
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
    }
    span.anticon.anticon-right{
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    span.anticon.anticon-left{
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    &.table-order,
    &.table-seller,
    &.table-data-view{
        .ant-table-selection{
            .ant-checkbox-indeterminate{
                .ant-checkbox-inner{
                    background: ${({ theme }) => theme['primary-color']};
                    border-color: ${({ theme }) => theme['primary-color']};
                    &:after{
                        height: 2px;
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
            }
        }
        .ant-table-container{
            padding-bottom: 25px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        tbody{
            tr{
                &:hover{
                    td{
                        background: ${({ theme }) => theme[theme.mainContent]['main-background']};
                    }
                }
                td{
                    .product-id{
                        max-width: 60px;
                        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
        .ant-pagination{
            margin-top: 25px !important;
        }
    }
    &.table-data-view{
        .ant-table-container{
            padding-bottom: 15px;
        }
        table{
            thead{
                th{
                    padding: 16px 25px;
                }
            }
            tbody{
                td{
                    padding: 16px 25px;
                    .record-img{
                        img{
                            max-width: 38px;
                            width: 38px;
                            height: 38px;
                            border-radius: 50%;
                            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
                        }
                    }
                    .record-location{
                        display: block;
                        font-size: 12px;
                        font-weight: 400;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    .status{
                        font-weight: 500;
                        text-transform: capitalize;
                        &.active{
                            color: ${({ theme }) => theme['success-color']};
                            background: ${({ theme }) => theme['success-color']}10;
                        }
                        &.deactivated{
                            color: ${({ theme }) => theme['warning-color']};
                            background: ${({ theme }) => theme['warning-color']}10;
                        }
                        &.blocked{
                            color: ${({ theme }) => theme['danger-color']};
                            background: ${({ theme }) => theme['danger-color']}10;
                        }
                    }
                    .table-actions{
                        a{
                            svg, i{
                                width: 16px;
                                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                            }
                            &.edit{
                              &:hover{
                                svg,
                                i{
                                    color: ${({ theme }) => theme['info-color']};
                                }
                              }  
                            }
                            &.delete{
                              &:hover{
                                svg,
                                i{
                                    color: ${({ theme }) => theme['danger-color']};
                                }
                              }  
                            }
                        }
                    }
                }
            }
        }
    }
    &.table-responsive{
        table{
            tbody{
                tr{
                    &:hover{
                        td{
                            background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        }
                    }
                }
            } 
        }
    }
    table{
        thead{
            tr{
                border-radius: 10px;
                th{
                    border-bottom: 0 none;
                    &:first-child{
                        border-radius: 10px 0 0 10px !important;
                    }
                    &:last-child{
                        border-radius: 0 10px 10px 0 !important;
                        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    }
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    background: ${({ theme }) => theme['bg-color-light']};
                }
            }
        }
        tbody{
            tr{
                &:hover{
                    td{
                        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                &.ant-table-row-selected{
                    &:hover{
                        td{
                            background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        }
                    }
                    td{
                        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                td{
                    border: 0 none;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    &:first-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '10px 0 0 10px' : '0 10px 10px 0')} !important;
                    }
                    &:last-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                    span{
                        display: block;
                    }
                    .order-id{
                        min-width: 128px;
                    }
                    .customer-name{
                        min-width: 174px;
                    }
                    .status{
                        min-width: 175px;
                    }
                    .ordered-amount{
                        min-width: 175px;
                    }
                    .ordered-date{
                        min-width: 165px;
                    }
                    .table-actions{
                        min-width: 60px;
                    }
                }
            }
        }
        .table-actions{
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            min-width: 50px !important;
            button{
                height: 40px;
                padding: 0 11px;
                background: transparent;
                border: 0 none;
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                &:hover{
                    &.ant-btn-primary{
                        color: ${({ theme }) => theme['primary-color']};
                        background: ${({ theme }) => theme['primary-color']}10;
                    }
                    &.ant-btn-info{
                        color: ${({ theme }) => theme['info-color']};
                        background: ${({ theme }) => theme['info-color']}10;
                    }
                    &.ant-btn-danger{
                        color: ${({ theme }) => theme['danger-color']};
                        background: ${({ theme }) => theme['danger-color']}10;
                    }
                }
            }
        }
        .seller-info{
            img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            }
        }
        .user-info{
            display: flex;
            align-items: center;
            figure{
                margin: 0 8px 0;
            }
            .user-name{
                margin-bottom: 4px;
                font-weight: 500;
            }
            .user-designation{
                font-size: 12px;
                font-weight: 400;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
    }
    .table-actions{
        margin: -8px;
        a{
            display: inline-block;
            margin: 8px;
        }
    }
    .ninjadash-status{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        text-transform: capitalize;
        font-weight: 500;
        padding: 0 8px;
        min-height: 24px;
        border-radius: 15px;
        &.ninjadash-status-active{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
        &.ninjadash-status-CONFIRMADO{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
        &.ninjadash-status-deactiveted{
            color: ${({ theme }) => theme['warning-color']};
            background-color: ${({ theme }) => theme['warning-color']}15;
        }
        &.ninjadash-status-rejected{
            color: ${({ theme }) => "#b3b3b3"};
            background-color: ${({ theme }) => "#636363"}15;
        }
        &.ninjadash-status-POR_COORDINAR{
            color: ${({ theme }) => theme['warning-color']};
            background-color: ${({ theme }) => theme['warning-color']}15;
        }
        &.ninjadash-status-blocked{
            color: ${({ theme }) => theme['danger-color']};
            background-color: ${({ theme }) => theme['danger-color']}15;
        }
        &.ninjadash-status-none{
            color: ${({ theme }) => theme['danger-color']};
            background-color: ${({ theme }) => theme['danger-color']}15;
        }
        &.ninjadash-status-waiting{
            color: ${({ theme }) => "#c9ac4b"};
            background-color: ${({ theme }) => "#c47616"}15;
        }
        &.ninjadash-status-asigned{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
    }
`;

const CoordStatusWrapper = Styled.div`
    .ninjadash-status{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        text-transform: capitalize;
        font-weight: 500;
        padding: 0 12px;
        min-height: 24px;
        border-radius: 15px;
        margin: 12px 0px;
        &.ninjadash-status-active{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
        &.ninjadash-status-CONFIRMADO{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
        &.ninjadash-status-deactiveted{
            color: ${({ theme }) => theme['warning-color']};
            background-color: ${({ theme }) => theme['warning-color']}15;
        }
        &.ninjadash-status-rejected{
            color: ${({ theme }) => "#b3b3b3"};
            background-color: ${({ theme }) => "#636363"}15;
        }
        &.ninjadash-status-POR_COORDINAR{
            color: ${({ theme }) => theme['warning-color']};
            background-color: ${({ theme }) => theme['warning-color']}15;
        }
        &.ninjadash-status-blocked{
            color: ${({ theme }) => theme['danger-color']};
            background-color: ${({ theme }) => theme['danger-color']}15;
        }
        &.ninjadash-status-none{
            color: ${({ theme }) => theme['danger-color']};
            background-color: ${({ theme }) => theme['danger-color']}15;
        }
        &.ninjadash-status-waiting{
            color: ${({ theme }) => "#c9ac4b"};
            background-color: ${({ theme }) => "#c47616"}15;
        }
        &.ninjadash-status-asigned{
            color: ${({ theme }) => theme['success-color']};
            background-color: ${({ theme }) => theme['success-color']}15;
        }
    }
`;

const DragDropStyle = Styled.div`
    .ant-card-body{
        padding: 15px !important;
    }
    table{
        thead{
            display: none;
        }
        tbody{
            >tr{
                &:not(:last-child){
                    td{
                         border-bottom: 1px solid ${({ theme }) =>
                           theme[theme.mainContent]['border-color-secondary']} !important;
                    }
                 }
                 &:hover{
                     td{
                         background-color: transparent !important;
                     }
                 }
                >td{
                    font-size: 14px;
                    &:first-child,
                    &:last-child{
                        border-radius: 0 !important;
                    }
                }
            }
        }
        tr{
            td{
                &.drag-visible{
                    svg,
                    img{
                        width: 16px;
                        height: 16px;
                    }
                    svg,
                    i{
                        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                    }
                }
            }
        }
        .user-info{
            .user-name{
                font-size: 14px;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            }
        }
    }
`;

const ImportStyleWrap = Styled.div`
    @media only screen and (max-width: 575px){
        margin-top: 10px;
    }
    .ant-upload.ant-upload-drag{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        min-height: 280px;
        display: flex;
        align-items: center;
        border-color: #C6D0DC;
        border-radius: 10px;
        .ant-upload-drag-icon{
            svg,
            i{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
        }
    }
    .ninjadash_import-inner{
        .ant-upload-text{
            font-size: 20px;
            font-weight: 500;
        }
        .ant-upload-hint{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
            span{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-upload-list{
            .ant-upload-list-item{
                background-color: #fff;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-upload-list-item-card-actions.picture{
                top: 18px;
                ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 15px;
            }
        }
    }
`;

const ExportStyleWrap = Styled.div`
    .ninjadash_export-box{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        @media only screen and (max-width: 575px){
            flex-flow: column;
        }
        .btn-export{
            height: 44px; 
            @media only screen and (max-width: 575px){
                margin-bottom: 20px;
            }
        }
        .ant-select{
            width: auto !important;
            .ant-select-selector{
                padding: 0 20px;
                .ant-select-selection-search-input{
                    border-radius: 20px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    input{
                        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                    }
                }
            }
        }
    }
    .ninjadash_export-file-table{
        .ant-table{
            border-radius: 10px 10px 0 0;
            background-color: transparent;
        }
        .ant-table-content{
            .ant-table-thead{
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border-radius: 10px;
                tr{
                    th{
                        background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                        border: 0 none;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        &:first-child{
                            border-radius: 10px 0 0 10px;
                        }
                        &:last-child{
                            border-radius: 0 10px 10px 0;
                        }
                    }
                }
            }
            .ant-table-tbody{
                tr{
                    &:hover{
                        box-shadow: 0 15px 50px #9299B820;
                        td{
                            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
                        }
                    }
                    td{
                        border: 0 none;
                        padding: 22px 25px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
            }
        }
    }
    .ninjadash-button-grp{
        button{
            min-height: 44px;
        }
    }
`;

const CollapseStyleWrap = Styled.div`
    .ant-collapse{
        background-color: transparent !important;
        > .ant-collapse-item{
            margin-bottom: 5px;
            border-radius: 5px;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']} !important;
            box-shadow: 0px 15px 40px rgba(173,181,217,.15);
            > .ant-collapse-header{
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                padding: 18.5px 25px 18.5px 25px;
                border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']};
                .ant-collapse-arrow{
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                    vertical-align: -2px;
                }
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            .ant-collapse-extra{
                span{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            > .ant-collapse-content{
                .ant-collapse-content-box{
                    padding: 20px 25px 12px;
                }
                p{
                    font-size: 16px;
                    line-height: 1.7;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
`;

const TopToolBox = Styled.div`
    margin-bottom: 30px;
    .ninjadash-showcase-top{
        .ant-select {
            .ant-select-selection-search {
                .ant-select-selection-search-input{
                    min-width: auto;
                }
            }
        }
        .ninjadash-showcase-top__text{
            p{
                font-size: 14px;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .ninjadash-showcase-top__action{
            display: flex;
            align-items: center;
            .ninjadash-showcase-top__action--filter{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 50px;
                .toolbox-menu-title{
                    display: inline-block;
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
                    font-size: 14px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
                    padding: 0 10px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
                    .ant-select-selection-item{
                        font-size: 14px;
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                .ant-select{
                    .ant-select-arrow{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                }
            }
            .ninjadash-showcase-top__action--viewmode{
                display: flex;
                align-items: center;
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: transparent;
                    cursor: pointer;
                    box-shadow: 0 0 0 rgba(173,181,217,.10);
                    svg{
                        width: 16px;
                        height: 16px;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    &.active{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        box-shadow: 0 5px 10px rgba(173,181,217,.10);
                        svg{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
        }
    }
    
    .table-toolbox-menu{
        margin: -10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        @media only screen and (max-width: 1599px){
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        }
        @media only screen and (max-width: 991px){
            margin-top: 20px;
        }
        .ant-radio-button-wrapper{
            height: 40px;
            line-height: 40px;
            padding: 0 12.5px;
            &.active{
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
        @media only screen and (max-width: 991px){
            text-align: center;
        }
        .toolbox-menu-title,
        .ant-radio-group-outline{
            margin: 10px;
        }
    }
    .ant-select{
        @media only screen and (max-width: 1599px){
            margin-bottom: 20px;
        }
        @media only screen and (max-width: 767px){
            max-width: 350px;
            margin: 0 auto 20px;
        }
        .ant-select-selection-search{
            @media only screen and (max-width: 991px){
                width: 100% !important;
            }
            .ant-select-selection-search-input{
                min-width: 350px;
                @media only screen and (max-width: 1792px){
                    min-width: 230px;
                }
            }
        }
    }
    .search-result{
        margin: ${({ theme }) => (theme.rtl ? '0 25px 0 0' : '0 0 0 25px')};
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        @media only screen and (max-width: 1599px){
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            margin-bottom: 15px;
        }
        @media only screen and (max-width: 991px){
            text-align: center;
            margin-bottom: 18px;
        }
        @media only screen and (max-width: 991px){
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
        }
    }
    .ant-select-selector{
        height: 46px !important;
        .ant-select-selection-search-input{
            box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}3;
            border-radius: 23px;
            border: 0 none;
            input{
                height: 46px !important;
            }
        }
    }

    .ant-radio-group-outline{
        padding: 0 10px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 1792px){
            padding: 0 5px;
        }
        @media only screen and (max-width: 991px){
            padding: 0;
        }
    }
    .ant-radio-button-wrapper{
        height: 40px;
        line-height: 42px;
        padding: 0 12px;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border: 0 none !important;
        @media only screen and (max-width: 1792px){
            padding: 0 7.5px;
        }
        @media only screen and (max-width: 1599px){
            padding: 0 12.5px;
        }
        &.ant-radio-button-wrapper-checked{
            &:focus-within{
                box-shadow: 0 0;
            }
        }
        &:not(:first-child){
            &:before{
                display: none;
            }
        }
        &:not(:last-child){
            &:after{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0px;
                display: block;
                box-sizing: content-box;
                width: 1px;
                height: 50%;
                padding: 1px 0;
                background-color: #F1F2F6;
                transition: background-color 0.3s;
                content: '';
                z-index: 1;
                @media only screen and (max-width: 479px){
                    display: none;
                }
            }
        }
        span{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            @media only screen and (max-width: 1792px){
                font-size: 13px;
            }
        }
        &.ant-radio-button-wrapper-checked{
            span{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }

    // Product Toolbox Styles
    .product-list-action{
        @media only screen and (max-width: 991px){
            flex-flow: column;
            justify-content: center;
        }
    }
    .product-list-action__tab{
        margin: -10px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};;
        
        @media only screen and (max-width: 767px){
            margin-bottom: 15px;
            text-align: center;
        }
        @media only screen and (max-width: 991px) and (min-width: 768px){
            margin: -10px -10px 0;
        }
        @media only screen and (max-width: 575px){
            margin: -6px -6px 0;
        }
        @media only screen and (max-width: 344px){
            .ant-radio-group-outline{
                margin-top: 8px;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;;
            }
        }
        .toolbox-menu-title,
        .ant-radio-group{
            margin: 10px;
            @media only screen and (max-width: 575px){
                margin: 6px
            }
        }
    }

    .product-list-action__viewmode{
        display: flex;
        align-items: center;
        a{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            &.active{
                background-color: #fff;
                box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }

    .table-search-box{
        @media only screen and (max-width: 991px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-select{
            margin-bottom: 0;
            .ant-select-selector{
                .ant-select-selection-search{
                    width: 100% !important;
                    .ant-select-selection-search-input {
                        border-radius: 20px;
                        border: 0 none;
                        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                        height: 40px;
                        input{
                            background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                            height: 40px !important;
                        }
                    }
                }
            }
        }
        
    }
    .table-toolbox-actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media only screen and (max-width: 1599px){
            margin-top: 20px;
            justify-content: center !important;
            text-align: center !important;
        }
        button{
            padding: 0px 13.4px;
            height: 38px;
            font-size: 13px;
            font-weight: 500;
            border-radius: 6px;
            svg,
            i{
                color: #fff;
            }
            &{
                +button{
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                }
            }
        }
    }
`;

const FormComponentsWrap = Styled.div`
    .sDash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .sDash_editor{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 4px;
        .EditorToolbar__root___3_Aqz{
            padding: 12px 20px 0;
        }
        .DraftEditor-root{
            min-height: 100px;
            .public-DraftEditorPlaceholder-root{
                padding: 12px 20px 0;
            }
        }
        select{
            margin-top: -4px;
        }
        .Dropdown__value___34Py9{
            &:after,
            &:before{
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: auto;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
        }
    }
    .sDash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`;

const FormValidationWrap = Styled.div`
    .ant-card-body{
        padding: 30px 25px 50px 25px !important;
    }
    .ant-form-item-has-error{
        .ant-form-item-explain{
            font-size: 13px;
        }
    }
    .ant-form-item{
        .ant-form-item-label{
            >label{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .sDash_agree-check{
        .ant-form-item-control-input{
            min-height: auto;
        }
        .ant-form-item-has-error{
            .ant-checkbox-wrapper{
                span{
                    font-size: 13px;
                    color: ${({ theme }) => theme['danger-color']};
                }
                .ant-checkbox{
                    border-color: ${({ theme }) => theme['danger-color']}30;
                    &.ant-checkbox-checked{
                        border-color: ${({ theme }) => theme['danger-color']}30;
                        &:after{
                            border-color: ${({ theme }) => theme['danger-color']}30;
                        }
                        .ant-checkbox-inner{
                            &:after{
                                border-color: ${({ theme }) => theme['danger-color']};
                            }
                        }
                    }
                    .ant-checkbox-inner{
                        border-color: ${({ theme }) => theme['danger-color']}30;
                        background-color: ${({ theme }) => theme['danger-color']}30;
                    }
                }
            }
        }
        .ant-form-item-explain{
            margin-left: 25px;
            font-size: 13px;
        }
    }
    .ninjadash-form-action{
        button{
            border-radius: 4px;
            padding: 6.4px 29.2px;
            height: 44px;
        }
    }
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, 
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
    }
`;

const DropDownListComponents = Styled.div`
    .ninjadash_dropdown-list{
        .ant-dropdown-trigger{
            font-size: 14px;
            font-weight: 400;
            color: #9299B8;
            width: 100%;
            justify-content: flex-start;
            &:not(:last-child){
                margin-bottom: 25px;
            }
        }
    }
`;

const HorizontalFormStyleWrap = Styled.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-form-horizontal{
        label{
            display: inline-block;
            font-weight: 500;
            margin-bottom: 24px;
            @media only screen and (max-width: 767px) {
                margin-bottom: 12px;
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-input-affix-wrapper > input.ant-input{
            padding-top: 12px;
            padding-bottom: 12px;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        .ninjadash-form-action{
            margin: -7.5px;
            button{
                font-size: 14px;
                font-weight: 500;
                border-radius: 4px;
                margin: 7.5px;
                padding: 6.4px 19px;
                &.ant-btn-light{
                    height: 44px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
            .ant-btn-light{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            }
        }
    }
    &.sDash_input-form{
        .ant-picker{
            width: 100%;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    ant-picker-input{
        &::placeholder{
            color: #9299B8 !important;
        }
    }
`;

const WizardBlock = Styled.div`
    
    >.ant-card{
        .ant-card-body{
            padding: 50px 0 !important;
        }
        .steps-content{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px) {
                    padding: 15px !important;
                }
            }
        }
    }
    
`;

const InvoiceAction = Styled.div`
    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    margin: 90px -5px 10px;
    @media only screen and (max-width: 991px){
        margin-top: 50px;
    }
    @media only screen and (max-width: 479px){
        text-align: center;
        margin-top: 30px;
    }
    .ant-btn-default{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background: ${({ theme }) => theme['bg-color-light']};
        border: 1px solid ${({ theme }) => theme['border-color-light']};
    }
    button{
        padding: 0 25px !important;
        margin: 5px;
        @media only screen and (max-width: 479px){
            margin-bottom 10px;
        }
        svg,
        i{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        .feather-download{
            color: #fff;
        }
        svg +span{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }
`;

const WizardWrapper = Styled.div`
    color:#eee;
    &.ninjadash-wizard-page{
        padding: 25px 0;
    }
    &.bordered-wizard{
        padding: 0;
    }
    .steps-action button.btn-next svg {
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .steps-action button.btn-prev svg {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail{
        @media only screen and (max-width: 575px) {
            display: none;
        }
    }
    .ant-steps {
        @media only screen and (max-width: 767px) {
            flex-flow: column;
            align-items: center;
        }
    }
    .ant-steps-item-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        @media only screen and (max-width: 991px) {
            width: 100%;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                background: #C5CAE1;
                top: 35px !important;
                padding: 20px 0 8px !important;
            }
        }
        .ant-steps-item-content{
            @media only screen and (max-width: 480px) {
                min-height: auto !important;
            }
        }
    }
    .steps-content{
        margin-top: 72px !important;
        @media only screen and (max-width: 1599px) {
            min-height: 252px !important;
        }
        @media only screen and (max-width: 1199px) {
            margin-top: 45px !important;
        }
        @media only screen and (max-width: 575px) {
            margin-top: 30px !important;
        }
    }
    .ant-steps-item-container{
        position: relative;
        &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 100%;
            top: 35px;
            color: #333;
            background-image: url(${require('../static/img/progress.png')});
            width: 110%;
            height: 6px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent !important;
            content: '';
            @media only screen and (max-width: 1399px) {
                width: 120%;
            }
            @media only screen and (max-width: 991px) {
                display: none;
            }
        }
        .ant-steps-item-tail{
            &:after{
                height: 80%;
            }
        }
    }
    .wizard-step-item{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress.png')});
            }
        }
    }
    .wizard-steps-item-active{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress-active.png')});
            }
        }
    }
    .success-step-item,
    .ant-steps-item-finish{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress-success.png')});
            }
        }
    }
    .ant-steps-item{
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 25px !important' : '0 25px 0 0 !important')} ;
        @media only screen and (max-width: 767px) {
            padding: 0 !important;
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        &:last-child{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px !important;
            @media only screen and (max-width: 767px) {
                padding: 0 !important;
            }
            .ant-steps-item-container{
                &:after{
                    display: none;
                }
            }
        }
        &:last-child{
            @media only screen and (max-width: 991px) {
                flex: 1 1;
            }
        }
        .ant-steps-item-title{
            font-size: 15px;
            font-weight: 500;
            margin-top: 8px;
            padding: ${({ theme }) => (theme.rtl ? '0 10px 0 0' : '0 0 0 10px')};
            
            color: ${({ theme }) => theme['gray-solid']} !important;
            @media only screen and (max-width: 1210px) {
                padding: ${({ theme }) => (!theme.rtl ? '0 0 0 20px' : '0 20px 0 0')};
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
            &:after{
                display: none;
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
        .ant-steps-item-icon{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border: 0 none;
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            box-shadow: 10px 0 20px ${({ theme }) => theme[theme.mainContent]['gray-text']}15;
            @media only screen and (max-width: 767px) {
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
            }
            .ant-steps-icon{
                font-size: 16px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                @media only screen and (max-width: 767px) {
                    font-size: 15px;
                }
            }
        }
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: ${({ theme }) => theme['primary-color']};
                .ant-steps-icon{
                    color: #fff;
                }
                svg{
                    color: #fff;
                }
            }
            .ant-steps-item-title{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
            }
            &.ant-steps-item-finish{
                .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']}; !important;
                }
            }
        }
        &.ant-steps-item-finish{
            .ant-steps-item-icon{
                background: ${({ theme }) => theme['success-color']} !important;
                .ant-steps-icon{
                    color: #fff;
                }
                .ant-steps-finish-icon{
                    svg{
                        color: #fff;
                    }
                }
                
            }
        }
    }
    .basic-form-inner{
        width: 580px;
        @media only screen and (max-width: 575px){
            width: 100%
        }
        .ant-form-item{
            .ant-input-password.ant-input-affix-wrapper{
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            }
        }
        .ant-form-item-label{
            label{
                font-weight: 400;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
        .ant-form-item-control-input{
            .ant-input{
                padding: 12px 20px;
            }
        }
    }
    .steps-action{
        .btn-next{
            &:focus{
                background-color: ${({ theme }) => theme['primary-color']};
            }
        }
        button.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .atbd-form-checkout{
        .ant-input-affix-wrapper-rtl{
            input[type="password"]{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            }
        }
       h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 46px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 991px){
                font-size: 18px;
                margin-bottom: 22px;
            }
            @media only screen and (max-width: 479px){
                font-size: 16px;
            }
       }
       .ant-form-item-label{
           label{
               font-size: 15px;
           }
       }
       input::placeholder{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
       .input-message{
           margin-top: -6px;
           display: inline-block;
           font-size: 13px;
           color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
       }

       .shipping-selection{
           > .ant-card{
               .ant-card-body{
                    border: 1px solid ${({ theme }) => theme['border-color-light']};
               }
           }
           .ant-card{
               .ant-card{
                   margin-bottom: 0 !important;
               }
           }
           .ant-radio-group {
               .ant-radio-wrapper{
                    display: flex;
                    align-items: flex-start;
                    span + span{
                        width: 100%;
                        min-height: 60px;
                    }
                   .ant-radio{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                    }
               }
           }
           .ant-form-item-control-input-content{
                input{
                    @media only screen and (max-width: 479px) {
                        width: 100% !important;
                        margin-bottom: 6px;
                    }
                }
               .input-leftText{
                   ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                   @media only screen and (max-width: 479px) {
                        display: block;
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
                    }
               }
           }
           .shipping-selection__card{
               .shipping-selection__card--inner{
                   background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                   border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
               }
               .ant-card .ant-card{
                   border: 0 none;
                   border-radius: 20px;
                   box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
               }
               .ant-radio-wrapper{
                    .ant-radio{
                        margin-top: 30px;
                    }
                    span + span{
                        padding: 0;
                    }
               }
               .cvv-wrap{
                   input{
                       max-width: 120px;
                   }
                   .input-leftText{
                       color: ${({ theme }) => theme['color-info']};
                   }
               }
            }
           .shipping-selection__paypal{
               margin-bottom: 20px;
               .ant-radio-wrapper{
                   span + span{
                       display: flex;
                       justify-content: space-between;
                       @media only screen and (max-width: 375px){
                            img{
                                display: none;
                            }
                        }
                   }
               }
           }
           .shipping-selection__paypal,
           .shipping-selection__cash{
                .ant-radio-wrapper{
                    align-items: center;
                    span + span{
                        font-size: 15px;
                        font-weight: 500;
                        padding: 0 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 10px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    }
                }
           }
           .supported-card{
               align-items: center;
               justify-content: space-between;
               margin-bottom: 20px;
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
               .supported-card_logos{
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                   img + img{
                       ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                   }
               }
           }
       }
   }
   .profile-hints{
       p{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           font-size: 15px;
           span{
               color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
           }
       }
   }
   .atbd-finish-order{
       max-width: 540px;
       margin: 0 auto;
       padding: 30px;
       min-height: 248px;
       border-radius: 6px;
       border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
       h1,
       h2,
       h3,
       h4,
       h5,
       h6{
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
       }
       .ant-checkbox{
           &:hover{
               .ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['success-color']};
               }
           }
       }
       .ant-checkbox-checked{
           &:after{
                border-color: ${({ theme }) => theme['success-color']};
           }
           .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .ant-checkbox-input{
           &:focus + .ant-checkbox-inner{
            border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .checkbox-label{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
   }
   .atbd-review-order{
       > .ant-card{
           > .ant-card-body{
               border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
           }
       }
       h1{
           font-size: 20px;
           font-weight: 500;
           margin-bottom: 45px;
           color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           @media only screen and (max-width: 479px) {
                font-size: 16px;
                margin-bottom: 25px;
            }
       }

       .atbd-review-order__single{
           .ant-card{
               .ant-card-body{
                   background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
               }
           }
           .ant-radio-wrapper{
                display: flex;
                align-items: flex-start;
            }
            .ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px ${({ theme }) => theme['gray-solid']}10;
                }
            }
            h1{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .method-info{
                margin-top: -2px;
                font-weight: 500;
                color: color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                img{
                    margin-top: -4px;
                    max-width: 40px;
                }
            }
            .btn-addCard{
                font-weight: 500
                display: inline-block;
                font-size: 13px;
                margin-top: 20px;
                color: ${({ theme }) => theme['info-color']};
            }

            .table-cart{
                border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                .cart-single-t-price{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                .ant-table{
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                }
                .ant-table-content{
                    padding-bottom: 10px;
                }
                thead{
                    display: none;
                }
                .ant-table-tbody{
                    .ant-table-row{
                        &:hover{
                            box-shadow: 0 0;
                            td{
                                background-color: ${({ theme }) =>
                                  theme[theme.mainContent]['main-background-light']} !important;
                            }
                        }
                    }
                    >tr >td{
                        padding: 8px 15px;
                        &:first-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                        }
                        &:last-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                    }
                }
            }
            .cart-single{
                .cart-single__info{
                    h1{
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        margin-bottom: 8px;
                    }
                }
            }
       }

        .atbd-review-order__shippingTitle{
            h1{
                display: flex;
                margin-bottom: 30px;
                justify-content: space-between;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                a{
                    font-size: 14px;
                    display: inline-flex;
                    align-items: center;
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                    svg{
                        width: 14px;
                        height: 14px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                    }
                }
            }
        }

        .atbd-review-order__shippingInfo{
            .shipping-info-text{
                margin: -4px 12px 0;
                h1{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .btn-addNew{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['info-color']};
            }
        }
   }
   .invoice-summary-inner{
        .summary-total{
            margin-bottom: 0;
        }
   }
   .summary-list{
        margin: 20px 0 10px !important;
        .summary-list-text{
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
   }

   .checkout-successful{
       text-align: center;
        > .ant-card{
            > .ant-card-body{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        .ant-card {
            box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
            .ant-card{
                padding: 25px;
                    margin-bottom: 0 !important;
            }
        }
        .icon-success{
            width: 34px;
            height: 34px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: ${({ theme }) => theme['success-color']};
            svg{
                width: 18px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
   }
`;

const OrderSummary = Styled.div`
    max-width: 650px;
    margin: 0 auto;
    .ant-card{
        margin-bottom: 0 !important;
    }
    .ant-card-body{
        box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['dark-text']}10;
    }
    .ant-form-item{
        margin-bottom: 0;
    }

    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .order-summary-inner{
        padding-bottom: 5px;
        @media only screen and (max-width: 1599px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-select{
            .ant-select-selection-item{
                font-weight: 500;
            }
        }
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
            li{
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
        .summary-total-amount{
            color: ${({ theme }) => theme['primary-color']} !important;
        }
    }

    .summary-list{
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
            .summary-list-title{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .summary-list-text{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            color: ${({ theme }) => theme['success-color']};
        }
        .ant-select-arrow{
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        }
    }
    .promo-apply-form{
        display: flex;
        align-items: flex-end;
        margin: 5px 0 18px;
        @media only screen and (max-width: 479px){
            flex-flow: column;
            align-items: flex-start;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex: auto;
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            label{
                font-weight: 400;
                margin-bottom: 4px;
                height: fit-content;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .ant-form-item-control-input-content{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            input{
                margin: ${({ theme }) => (theme.rtl ? '0 0 0px 6px' : '0 6px 0px 0')};
                height: 40px;
                @media only screen and (max-width: 479px){
                    margin: ${({ theme }) => (theme.rtl ? '0 0 10px 6px' : '0 6px 10px 0')};
                    width: 100% !important;
                }
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-top: 22px;
        @media only screen and (max-width: 575px){
            font-size: 13px;
        }
        a{
            display: flex;
            align-items: center;
        }
        i,
        svg{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
        }
    }
`;

const WizardTwo = Styled.div`
    .ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
        width: 60px;  
        box-shadow: none;
        svg{
            width: 60px;
            height: 60px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
        } 
    }    
    .ant-steps-item-icon .ant-steps-icon span{
        color: #000;
        font-size: 20px;
    }
    .ant-steps-item {
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: transparent;
                .ant-steps-icon{
                    background-color: transparent;
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['primary-color']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
        &.ant-steps-item-finish {
            .ant-steps-item-icon{
                background-color: transparent !important;
                .ant-steps-icon{
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['success-color']};
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
            }
        }
        .ant-steps-item-container{
            .ant-steps-item-tail{
                @media only screen and (max-width: 479px) {
                    display: none !important;
                }
            }
            .ant-steps-item-icon{
                margin-bottom: 15px;
                svg,
                img{
                    @media only screen and (max-width: 479px) {
                        width: 40px;
                    }
                }
            }
        }
    }
`;

const FigureWizards = Styled.figure`

    display: inline-flex;
    img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
`;


export {
  Main,
  BorderLessHeading,
  TableDefaultStyle,
  ButtonsGroupWrapper,
  BlockButtonsWrapper,
  ButtonSizeWrapper,
  BtnWithIcon,
  AlertList,
  AutoCompleteWrapper,
  CalendarWrapper,
  DatePickerWrapper,
  NotificationListWrapper,
  TagInput,
  PageHeaderWrapper,
  MessageStyleWrapper,
  BasicFormWrapper,
  CardToolbox,
  FormGroupWrapper,
  DragDropStyle,
  BannerCardStyleWrap,
  FileCardWrapper,
  TableWrapper,
  ImportStyleWrap,
  ExportStyleWrap,
  ChartPointHorizontal,
  CollapseStyleWrap,
  TopToolBox,
  Action,
  FormValidationWrap,
  FormComponentsWrap,
  DropDownListComponents,
  HorizontalFormStyleWrap,
  WizardBlock,
  WizardWrapper,
  OrderSummary,
  WizardTwo,
  FigureWizards,
  CoordStatusWrapper
};
