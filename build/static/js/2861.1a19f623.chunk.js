"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2861,5102,2427,6632,7037,4395,1128,5776,6770,1448,340,1001,3806,8745,7041,7906,2681,1644,5810,8724],{91:(e,t,n)=>{n.r(t),n.d(t,{AutoComplete:()=>h});var a=n(60767),r=n(55902),i=n(48538),l=n(9950),s=n(73878),o=n(3783),d=n(44414);const c=()=>{},x=(e,t)=>({value:e,label:(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=l.memo((e=>{const{rtl:t}=(0,s.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:n,patterns:l,patternButtons:h,width:m,onSearch:p,options:g,placeholder:u}=e,j=(null===g||void 0===g?void 0:g.length)>0&&g.map((e=>{const{title:t,count:n}=e;return{label:t,options:[x(t,(0,d.jsxs)("span",{className:"certain-search-item-count",children:[n," people"]}))]}})),b=e=>{p(e)};return n?(0,d.jsx)(o.AutoCompleteStyled,{options:g,style:{width:m},onSelect:c,onSearch:b,children:n}):l?(0,d.jsx)(o.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:m},options:j,placeholder:u,onSearch:b,children:(0,d.jsx)(r.A,{suffix:h?(0,d.jsx)(i.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,d.jsx)(a.A,{})}):(0,d.jsx)(a.A,{})})}):(0,d.jsx)(o.AutoCompleteStyled,{options:g,style:{width:m},onSelect:c,onSearch:b,placeholder:u})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,n)=>{n.r(t),n.d(t,{AutoCompleteStyled:()=>y});var a=n(58168),r=n(82284),i=n(5544),l=n(48738),s=n.n(l),o=n(50604),d=n(15207),c=n(9950),x=n(5741),h=n(99674),m=n(39156),p=h.A.Option;function g(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var u=function(e,t){var n,l=e.prefixCls,u=e.className,j=e.popupClassName,b=e.dropdownClassName,y=e.children,f=e.dataSource,w=(0,o.A)(y);if(1===w.length&&(0,m.zO)(w[0])&&!g(w[0])){var v=(0,i.A)(w,1);n=v[0]}var A,C=n?function(){return n}:void 0;return A=w.length&&g(w[0])?y:f?f.map((function(e){if((0,m.zO)(e))return e;switch((0,r.A)(e)){case"string":return c.createElement(p,{key:e,value:e},e);case"object":var t=e.value;return c.createElement(p,{key:t,value:t},e.text);default:return}})):[],c.createElement(x.TG,null,(function(n){var r=(0,n.getPrefixCls)("select",l);return c.createElement(h.A,(0,a.A)({ref:t},(0,d.A)(e,["dataSource"]),{prefixCls:r,popupClassName:j||b,className:s()("".concat(r,"-auto-complete"),u),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:C}),A)}))},j=c.forwardRef(u);j.Option=p;const b=j;const y=(0,n(19335).Ay)(b)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}};
        ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 23px;
            padding: 0 !important;
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
            border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                    input{
                        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                    }
                }
            }
            textarea{
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
                border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 0 !important;
    }
    .ant-select-selection-search{
        ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 20px;
        width: auto;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
        textarea.ant-input{
            padding: 12px 20px;
        }
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
        input{
            height: 38px !important;
        }
        .ant-input-suffix{
            height: auto;
            border-radius: ${e=>{let{theme:t}=e;return t.rtl?"4px 0 0 4px":"0 4px 4px 0"}}; 
            svg,
            i{
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
            }
            .search-btn{
                height: 38px;
                border-radius: 0px 4px 4px 0px;
                svg,
                i{
                    color: #fff !important;
                }
            }
        }
    }
`},55835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(9950);var a=n(28423),r=n(72449),i=n(44414);const l=function(){return(0,i.jsxs)(a.NewsletterStyle,{children:[(0,i.jsx)("figcaption",{children:(0,i.jsxs)("form",{action:"",children:[(0,i.jsx)("h4",{children:"Subscribe To Our Newsletter"}),(0,i.jsx)("p",{children:"We notify you once any post is published"}),(0,i.jsx)(r.Button,{size:"small",type:"primary",children:"Subscribe"})]})}),(0,i.jsx)("img",{src:n(87945),alt:""})]})}},74395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(29355),o=n(18450),d=n(67482),c=n(59537),x=n(66260),h=n(44414);const m=(0,a.lazy)((()=>Promise.all([n.e(4360),n.e(1976)]).then(n.bind(n,71976)))),p=(0,a.lazy)((()=>Promise.all([n.e(6279),n.e(3917),n.e(8316)]).then(n.bind(n,18316)))),g=(0,a.lazy)((()=>n.e(693).then(n.bind(n,23074)))),u=(0,a.lazy)((()=>n.e(7175).then(n.bind(n,27175)))),j=(0,a.lazy)((()=>n.e(9195).then(n.bind(n,49195)))),b=(0,a.lazy)((()=>n.e(5303).then(n.bind(n,55303)))),y=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(3917),n.e(3548),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(8370)]).then(n.bind(n,44234)))),{BlogCardData:f}=x;const w=function(){return(0,h.jsx)(d.Main,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(c.PageHeaderBanner,{type:"corporate",title:"Hey Danial! Welcome to the Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available,\r\nut the majority have suffered passages of Lorem Ipsum available alteration in some form"})})}),(0,h.jsx)(i.A,{xxl:16,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(m,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(p,{})})}),(0,h.jsx)(i.A,{xxl:12,xl:14,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(g,{})})}),(0,h.jsx)(i.A,{xl:12,lg:24,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(u,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(j,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(b,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,h.jsx)(i.A,{xxl:8,sm:12,xs:24,children:(0,h.jsx)(o.default,{item:e})},e.id)))]})})}},21128:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(29355),o=n(18450),d=n(67482),c=n(59537),x=n(66260),h=n(44414);const m=(0,a.lazy)((()=>Promise.all([n.e(4360),n.e(1976)]).then(n.bind(n,71976)))),p=(0,a.lazy)((()=>Promise.all([n.e(6279),n.e(3917),n.e(8316)]).then(n.bind(n,18316)))),g=(0,a.lazy)((()=>n.e(693).then(n.bind(n,23074)))),u=(0,a.lazy)((()=>n.e(7175).then(n.bind(n,27175)))),j=(0,a.lazy)((()=>n.e(9195).then(n.bind(n,49195)))),b=(0,a.lazy)((()=>n.e(5303).then(n.bind(n,55303)))),y=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(3917),n.e(3548),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(4901)]).then(n.bind(n,44234)))),{BlogCardData:f}=x;const w=function(){return(0,h.jsx)(d.Main,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(c.PageHeaderBanner,{title:"Welcome To Demo Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"})})}),(0,h.jsx)(i.A,{xxl:16,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(m,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(p,{})})}),(0,h.jsx)(i.A,{xxl:12,xl:14,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(g,{})})}),(0,h.jsx)(i.A,{xl:12,lg:24,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(u,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(j,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(b,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(s.Cards,{headless:!0,children:(0,h.jsx)(l.A,{active:!0})}),children:(0,h.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,h.jsx)(i.A,{xxl:8,sm:12,xs:24,children:(0,h.jsx)(o.default,{item:e})},e.id)))]})})}},26770:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(28429),o=n(73878),d=n(57687),c=n(67482),x=n(29355),h=n(4909),m=n(44414);const p=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(8439)]).then(n.bind(n,73802)))),g=(0,a.lazy)((()=>Promise.all([n.e(4503),n.e(7906)]).then(n.bind(n,7906))));const u=function(){const e=(0,o.wA)(),{cartData:t}=(0,o.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,a.useEffect)((()=>{h.cartGetData&&e((0,h.cartGetData)())}),[e]);let n=0;return null!==t&&t.map((e=>{const{quantity:t,price:a}=e;return n+=parseInt(t,10)*parseInt(a,10),n})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,m.jsx)(c.Main,{children:(0,m.jsx)("div",{className:"cartWraper",children:(0,m.jsx)(r.A,{gutter:15,children:(0,m.jsx)(i.A,{md:24,children:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsxs)(r.A,{gutter:30,children:[(0,m.jsx)(i.A,{xxl:17,xs:24,children:(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(s.BV,{children:(0,m.jsx)(s.qh,{index:!0,element:(0,m.jsx)(p,{})})})})}),(0,m.jsx)(i.A,{xxl:7,xs:24,children:(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(g,{subtotal:n,checkout:!1})})})]})})})})})})]})}},61448:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(28429),o=n(73878),d=n(57687),c=n(67482),x=n(29355),h=n(4909),m=n(12144),p=n(44414);const g=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(4421)]).then(n.bind(n,75521)))),u=(0,a.lazy)((()=>Promise.all([n.e(4503),n.e(7906)]).then(n.bind(n,7906))));const j=function(){const e=(0,o.wA)(),{cartData:t}=(0,o.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,a.useEffect)((()=>{h.cartGetData&&e((0,h.cartGetData)())}),[e]);let n=0;return null!==t&&t.map((e=>{const{quantity:t,price:a}=e;return n+=parseInt(t,10)*parseInt(a,10),n})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,p.jsx)(c.Main,{children:(0,p.jsx)("div",{className:"checkoutWraper",children:(0,p.jsx)(r.A,{gutter:15,children:(0,p.jsx)(i.A,{md:24,children:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsxs)(r.A,{gutter:30,children:[(0,p.jsx)(i.A,{xxl:17,xs:24,children:(0,p.jsx)(m.WizardWrapper,{children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(s.BV,{children:(0,p.jsx)(s.qh,{index:!0,element:(0,p.jsx)(g,{})})})})})}),(0,p.jsx)(i.A,{xxl:7,xs:24,children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(u,{subtotal:n,checkout:!0})})})]})})})})})})]})}},7906:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(9950),r=n(87827),i=n(99674),l=n(55902),s=n(94999),o=n(37782),d=n(42074),c=n(73878),x=n(34503),h=n(29355),m=n(42017),p=n(72449),g=n(4909),u=n(44414);const j=function(e){let{subtotal:t,checkout:j}=e;const b=(0,c.wA)(),{rtl:y}=(0,c.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),[f]=r.A.useForm(),[w,v]=(0,a.useState)({coupon:0,promo:0,current:0});(0,a.useEffect)((()=>{g.cartGetData&&b((0,g.cartGetData)())}),[b]);const{Option:A}=i.A;return(0,u.jsx)(h.Cards,{bodyStyle:{borderRadius:"20px"},className:"ninjadash-order-summery",headless:!0,children:(0,u.jsxs)(x.OrderSummary,{children:[(0,u.jsx)(m.default,{className:"summary-table-title",as:"h4",children:"Order Summary"}),(0,u.jsx)(h.Cards,{bodyStyle:{borderRadius:"10px"},headless:!0,children:(0,u.jsxs)("div",{className:"order-summary-inner",children:[(0,u.jsxs)("ul",{className:"summary-list",children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Subtotal :"}),(0,u.jsx)("span",{className:"summary-list-text",children:`$${t}`})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Discount :"}),(0,u.jsx)("span",{className:"summary-list-text",children:"$-20"})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Shipping Charge :"}),(0,u.jsx)("span",{className:"summary-list-text",children:"$30"})]})]}),(0,u.jsxs)(r.A,{form:f,name:"promo",onFinish:e=>{v({...w,promo:e})},children:[(0,u.jsx)(r.A.Item,{name:"couponType",initialValue:"",label:"",children:(0,u.jsxs)(i.A,{style:{width:"100%"},children:[(0,u.jsxs)(A,{value:"",children:[(0,u.jsx)("img",{src:n(85544),alt:""})," Select Coupon"]}),(0,u.jsxs)(A,{value:"one",children:[(0,u.jsx)("img",{src:n(85544),alt:""})," Coupon one"]}),(0,u.jsxs)(A,{value:"tow",children:[(0,u.jsx)("img",{src:n(85544),alt:""})," Coupon tow"]})]})}),(0,u.jsxs)("div",{className:"promo-apply-form",children:[(0,u.jsx)(r.A.Item,{name:"promoCode",label:"Promo Code",children:(0,u.jsx)(l.A,{placeholder:"Promo Code"})}),(0,u.jsx)(r.A.Item,{children:(0,u.jsx)(p.Button,{htmlType:"submit",size:"default",type:"success",outlined:!0,children:"Apply"})})]})]}),(0,u.jsxs)(m.default,{className:"summary-total",as:"h4",children:[(0,u.jsx)("span",{className:"summary-total-label",children:"Total : "}),(0,u.jsx)("span",{className:"summary-total-amount",children:"$"+(t+30-20)})]}),!j&&(0,u.jsx)(p.Button,{className:"btn-proceed",type:"secondary",size:"large",children:(0,u.jsxs)(d.N_,{to:"/admin/ecommerce/checkout",children:["Proceed To Checkout",y?(0,u.jsx)(s.A,{}):(0,u.jsx)(o.A,{})]})}),3===w.current&&(0,u.jsx)(p.Button,{onClick:()=>{document.querySelectorAll("button span").forEach((e=>{"Done"===e.innerHTML&&e.click()}))},className:"btn-proceed",type:"secondary",size:"large",children:(0,u.jsx)(d.N_,{to:"#",children:"Place Order"})})]})})]})})}},75776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(9950),r=n(73878),i=n(87094),l=n(41988),s=n(32212),o=n(24893),d=n(90650),c=n(42074),x=n(28429),h=n(10356),m=n(58072),p=n(57687),g=n(67482),u=n(91),j=n(34503),b=n(16358),y=n(29355),f=n(44414);const w=(0,a.lazy)((()=>Promise.all([n.e(4380),n.e(8719)]).then(n.bind(n,58719)))),v=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(3149)]).then(n.bind(n,10742)))),A=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(3149)]).then(n.bind(n,36550))));const C=function(){const e=(0,r.wA)(),t=(0,r.d4)((e=>e.headerSearchData)),[n,C]=(0,a.useState)({notData:t,active:"active"}),{notData:$}=n;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.PageHeader,{title:"Shop",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"products"}]}),(0,f.jsx)(g.Main,{children:(0,f.jsxs)(i.A,{gutter:30,children:[(0,f.jsx)(l.A,{className:"product-sidebar-col",xxl:5,xl:7,lg:7,md:10,xs:24,children:(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)(y.Cards,{headless:!0,children:(0,f.jsx)(s.A,{paragraph:{rows:22},active:!0})}),children:(0,f.jsx)(w,{})})}),(0,f.jsxs)(l.A,{className:"product-content-col",xxl:19,lg:17,md:14,xs:24,children:[(0,f.jsx)(j.TopToolBox,{children:(0,f.jsxs)(i.A,{gutter:0,children:[(0,f.jsx)(l.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)(u.AutoComplete,{onSearch:e=>{const a=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));C({...n,notData:a})},dataSource:$,placeholder:"Search",width:"100%",patterns:!0})}),(0,f.jsx)(l.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),(0,f.jsx)(l.A,{xxl:10,xs:24,children:(0,f.jsxs)("div",{className:"product-list-action d-flex justify-content-between align-items-center",children:[(0,f.jsxs)("div",{className:"product-list-action__tab",children:[(0,f.jsx)("span",{className:"toolbox-menu-title",children:"Sort by:"}),(0,f.jsxs)(o.Ay.Group,{onChange:t=>{e((0,b.sorting)(t.target.value))},defaultValue:"rate",children:[(0,f.jsx)(o.Ay.Button,{value:"rate",children:"Top Rated"}),(0,f.jsx)(o.Ay.Button,{value:"popular",children:"Popular"}),(0,f.jsx)(o.Ay.Button,{value:"time",children:"Newest"}),(0,f.jsx)(o.Ay.Button,{value:"price",children:"Price"})]})]}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,f.jsxs)("div",{className:"product-list-action__viewmode",children:[(0,f.jsx)(c.k2,{to:"./grid",children:(0,f.jsx)(h.A,{})}),(0,f.jsx)(c.k2,{to:"./list",children:(0,f.jsx)(m.A,{})})]})]})})]})}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)("div",{className:"spin d-flex align-center-v",children:(0,f.jsx)(d.A,{})}),children:(0,f.jsxs)(x.BV,{children:[(0,f.jsx)(x.qh,{index:!0,element:(0,f.jsx)(v,{})}),(0,f.jsx)(x.qh,{path:"grid",element:(0,f.jsx)(v,{})}),(0,f.jsx)(x.qh,{path:"list",element:(0,f.jsx)(A,{})})]})})]})]})})]})}},51186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(9950),r=n(87094),i=n(41988),l=n(90650),s=n(28429),o=n(78732),d=n(67128),c=n(72777),x=n(15408),h=n(64508),m=n(39644),p=n(20133),g=n(57687),u=n(29355),j=n(67482),b=n(72449),y=n(44414);const f=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,6004)))),w=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,2336)))),v=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,24381)))),A=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,41059)))),C=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,95834)))),$=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(4891)]).then(n.bind(n,10107)))),k=(0,a.lazy)((()=>n.e(7633).then(n.bind(n,27633))));const z=function(){const[e,t]=(0,a.useState)(!1),[n,z]=(0,a.useState)({responsive:0,collapsed:!1}),{responsive:S,collapsed:N}=n;(0,a.useLayoutEffect)((()=>{function e(){const e=window.innerWidth;z({responsive:e})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const _=()=>{z({...n,collapsed:!N})},P=()=>{t(!e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.PageHeader,{title:"Dashboard",routes:[{path:"/admin",breadcrumbName:"Email"},{path:"",breadcrumbName:"Email"}]}),e&&(0,y.jsx)(m.default,{close:()=>{t(!1)}}),(0,y.jsx)(j.Main,{children:(0,y.jsx)(p.EmailWrapper,{children:(0,y.jsxs)(r.A,{gutter:25,children:[(0,y.jsxs)(i.A,{className:"trigger-col",xxl:5,xl:7,lg:8,xs:24,children:[S<=991&&(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger",style:{marginTop:0},onClick:_,children:N?(0,y.jsx)(c.A,{}):(0,y.jsx)(x.A,{})}),S>991?(0,y.jsx)("div",{className:"mail-sideabr",children:(0,y.jsxs)(u.Cards,{headless:!0,children:[(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsxs)(b.Button,{onClick:P,shape:"round",type:"primary",size:"default",block:!0,children:[(0,y.jsx)(o.A,{})," Compose"]})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(h.default,{})})]})}):(0,y.jsx)(p.MailSideBar,{className:N?"mail-sideabr show":"mail-sideabr hide",children:(0,y.jsxs)(u.Cards,{headless:!0,children:[(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger trigger-close",style:{marginTop:0},onClick:_,children:(0,y.jsx)(d.A,{})}),(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsx)(b.Button,{onClick:P,shape:"round",type:"primary",size:"default",block:!0,children:"+ Compose"})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(h.default,{toggleCollapsed:_})})]})})]}),(0,y.jsx)(i.A,{xxl:19,xl:17,lg:16,children:(0,y.jsx)(a.Suspense,{fallback:(0,y.jsx)("div",{className:"spin",children:(0,y.jsx)(l.A,{})}),children:(0,y.jsxs)(s.BV,{children:[(0,y.jsx)(s.qh,{path:"inbox",element:(0,y.jsx)(f,{})}),(0,y.jsx)(s.qh,{path:"sent",element:(0,y.jsx)(w,{})}),(0,y.jsx)(s.qh,{path:"drafts",element:(0,y.jsx)(v,{})}),(0,y.jsx)(s.qh,{path:"starred",element:(0,y.jsx)(A,{})}),(0,y.jsx)(s.qh,{path:"spam",element:(0,y.jsx)($,{})}),(0,y.jsx)(s.qh,{path:"trash",element:(0,y.jsx)(C,{})}),(0,y.jsx)(s.qh,{path:"single/:id/*",element:(0,y.jsx)(k,{})})]})})})]})})})]})}},64508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(9950),r=n(42074),i=n(87827),l=n(55902),s=n(84962),o=n(42140),d=n(34189),c=n(78732),x=n(90556),h=n(70233),m=n(34574),p=n(58072),g=n(20133),u=n(72449),j=n(42017),b=n(44414);const y=a.memo((e=>{let{toggleCollapsed:t}=e;const[n,y]=(0,a.useState)({labels:["personal","social","promotions"],newLabel:"",addNewDisplay:!1}),{labels:f,newLabel:w,addNewDisplay:v}=n,A=e=>{e.preventDefault(),y({...n,addNewDisplay:!0})},C=e=>{e.preventDefault(),e.stopPropagation(),""!==w?y({...n,labels:[...f,w],newLabel:""}):alert("Please Give a label...")};return(0,b.jsxs)(g.EmailNav,{children:[(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./inbox",onClick:t,children:[(0,b.jsx)(s.A,{}),(0,b.jsxs)("span",{className:"nav-text",children:[(0,b.jsx)("span",{children:"Inbox"}),(0,b.jsx)("span",{className:"badge badge-primary",children:"3"})]})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./starred",onClick:t,children:[(0,b.jsx)(o.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Starred"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./sent",onClick:t,children:[(0,b.jsx)(d.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Sent"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./drafts",onClick:t,children:[(0,b.jsx)(x.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Drafts"})}),(0,b.jsx)("span",{className:"badge badge-primary",children:"12"})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./spam",onClick:t,children:[(0,b.jsx)(h.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Spam"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./trash",onClick:t,children:[(0,b.jsx)(m.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Trash"})})]})})]}),(0,b.jsxs)("div",{className:"nav-labels",children:[(0,b.jsx)("p",{children:"Labels"}),(0,b.jsxs)("ul",{children:[f.map((e=>(0,b.jsx)("li",{children:(0,b.jsxs)(r.N_,{to:"#",children:[(0,b.jsx)(p.A,{})," ",e]})},e))),(0,b.jsxs)("li",{className:"add-label-btn",onKeyPress:()=>{},onClick:A,role:"menuitem",children:[(0,b.jsxs)(r.k2,{onClick:A,to:"./newLabels",children:[(0,b.jsx)(c.A,{})," Add New Label"]}),v&&(0,b.jsx)("div",{className:"add-label",children:(0,b.jsxs)(i.A,{onSubmit:C,children:[(0,b.jsx)(j.default,{label:3,children:"Add New Label"}),(0,b.jsx)(l.A,{onChange:e=>{y({...n,newLabel:e.target.value})},value:w,name:w,type:"text",placeholder:"Enter label name"}),(0,b.jsxs)("div",{className:"btn-group",children:[(0,b.jsx)(u.Button,{size:"default",onClick:C,type:"primary",children:"Add Label"}),(0,b.jsx)(u.Button,{onClick:e=>{e.preventDefault(),e.stopPropagation(),y({...n,addNewDisplay:!1})},type:"default",children:"Cancel"})]})]})})]})]})]})]})}))},29418:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(9950),r=n(73878),i=n(55902),l=n(87094),s=n(41988),o=n(32212),d=n(99674),c=n(90650),x=n(42074),h=n(28429),m=n(10356),p=n(58072),g=n(28320),u=n(28280),j=n(68724),b=n(57687),y=n(67482),f=n(65167),w=n(72449),v=n(29355),A=n(44414);const C=(0,a.lazy)((()=>Promise.all([n.e(4380),n.e(9422)]).then(n.bind(n,59422)))),$=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(66)]).then(n.bind(n,61701)))),k=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(66)]).then(n.bind(n,79153))));const z=function(){const{jobs:e}=(0,r.d4)((e=>({jobs:e.jobs.jobs}))),t=(0,r.wA)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b.PageHeader,{title:"Job Search ",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"job",breadcrumbName:"Job Search"}]}),(0,A.jsx)(y.Main,{children:(0,A.jsxs)(j.JobLandingStyle,{children:[(0,A.jsxs)("div",{className:"ninjadash-joblanding-top align-center-v",children:[(0,A.jsx)(i.A,{size:"large",prefix:(0,A.jsx)(g.A,{}),className:"ninjadash-title-search",id:"title",placeholder:"Job title, skills, or company"}),(0,A.jsx)(i.A,{id:"location",size:"large",className:"ninjadash-location-search",prefix:(0,A.jsx)(u.A,{}),placeholder:"Location"}),(0,A.jsxs)(w.Button,{onClick:()=>{const n=document.getElementById("title").value,a=document.getElementById("location").value;t((0,f.filterWithTitleLocation)(n,a,e))},size:"large",type:"primary",children:[(0,A.jsx)(g.A,{})," Search"]})]}),(0,A.jsxs)(l.A,{gutter:25,children:[(0,A.jsx)(s.A,{xxl:6,lg:8,md:10,xs:24,children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(v.Cards,{headless:!0,children:(0,A.jsx)(o.A,{paragraph:{rows:22},active:!0})}),children:(0,A.jsx)(C,{})})}),(0,A.jsxs)(s.A,{xxl:18,lg:16,md:14,xs:24,children:[(0,A.jsx)(y.TopToolBox,{children:(0,A.jsxs)("div",{className:"ninjadash-showcase-top d-flex justify-content-between align-items-center",children:[(0,A.jsx)("div",{className:"ninjadash-showcase-top__text",children:(0,A.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,A.jsxs)("div",{className:"ninjadash-showcase-top__action",children:[(0,A.jsxs)("div",{className:"ninjadash-showcase-top__action--filter",children:[(0,A.jsx)("span",{className:"toolbox-menu-title",children:" Sort By:"}),(0,A.jsxs)(d.A,{onChange:n=>{t((0,f.sorting)(n,e))},style:{width:"150px"},defaultValue:"latest",children:[(0,A.jsx)(d.A.Option,{value:"Latest",children:"Latest"}),(0,A.jsx)(d.A.Option,{value:"Old",children:"Old"})]})]}),(0,A.jsxs)("div",{className:"ninjadash-showcase-top__action--viewmode",children:[(0,A.jsx)(x.k2,{to:"./grid",children:(0,A.jsx)(m.A,{})}),(0,A.jsx)(x.k2,{to:"./list",children:(0,A.jsx)(p.A,{})})]})]})]})}),(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)("div",{className:"spin d-flex align-center-v",children:(0,A.jsx)(c.A,{})}),children:(0,A.jsxs)(h.BV,{children:[(0,A.jsx)(h.qh,{index:!0,element:(0,A.jsx)($,{})}),(0,A.jsx)(h.qh,{path:"grid",element:(0,A.jsx)($,{})}),(0,A.jsx)(h.qh,{path:"list",element:(0,A.jsx)(k,{})})]})})]})]})]})})]})}},68724:(e,t,n)=>{n.r(t),n.d(t,{AddProductForm:()=>g,AdditionalInfoStyle:()=>x,FigureCart:()=>i,JobApplicationWrap:()=>h,JobDetailsWrap:()=>c,JobLandingStyle:()=>r,JobsCard:()=>d,NotFoundWrapper:()=>s,PaginationWrapper:()=>m,ProductDetailsWrapper:()=>p,Sidebar:()=>l,SidebarSingle:()=>o});var a=n(19335);const r=a.Ay.div`
    .ninjadash-joblanding-top{
        justify-content: center;
        margin-bottom: 50px;
        @media only screen and (max-width: 991px){
            margin-bottom: 30px;
        }
        @media only screen and (max-width: 575px){
            flex-direction: column;
        }
        .ninjadash-title-search{
            max-width: 500px;
            @media only screen and (max-width: 575px){
                max-width: 100%;
            }
        }
        .ninjadash-location-search{
            max-width: 350px;
            @media only screen and (max-width: 575px){
                max-width: 100%;
            }
        }
        input{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}};
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            &::placeholder{
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
            }
        }
        .ant-input-affix-wrapper,
        button{
            border-radius: 6px;
            margin: 5px;
        }
        .ant-input-affix-wrapper{
            border: 0 none;
            box-shadow: 0 5px 20px rgba(173,181,217,.03);
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}};
            .ant-input-prefix{
                position: relative;
                top: -1px;
            }
            svg{
                width: 15px;
                height: 15px;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
            }
        }
        button{
            padding: 0px 43.35px;
            height: 48px;
        }
    }
    .ninjadash-showcase-top{
        @media only screen and (max-width: 991px){
            flex-direction: column;
        }
        .ant-select{
            @media only screen and (max-width: 991px){
                margin-bottom: 0;
            }
        }
        .ninjadash-showcase-top__text {
            p{
                @media only screen and (max-width: 991px){
                    margin-bottom: 0;
                }
            }
        }
        .ninjadash-showcase-top__action--filter{
            .ant-select{
                margin-bottom: 0;
            }
        }
    }
`,i=a.Ay.figure`

    display: inline-flex;
    img {
        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 15px;
    }
`,l=a.Ay.div`
    .ant-card-body{
        padding: 20px 25px 25px !important
    }
    .ant-card-head-title{
        padding: 14px 0 !important;
        span{
            ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 0;
            font-size: 16px;
            font-weight: 500;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            svg{
                width: 16px;
                height: 16px;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 12px;
            }
        }
    }
`,s=a.Ay.div`
    text-align: center;
    margin-top: 60px;
    h1{
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
        border-top: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
        padding: 15px 0 20px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
`,o=a.Ay.div`
    h1{
        font-size: 15px;
        margin-bottom: 10px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
    .price-range-text{
        font-size: 15px;
        margin: -5px 0 0;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
    .ant-slider{
        margin-bottom: 8px;
        margin-top: 6px;
    }
    .price-range-value{
        display: flex;
        justify-content: space-between;
        span{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
        }
    }
    
    .atbd-category-list{
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
            a{
                width: 100%
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                .category-count{
                    font-size: 12px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
                }
            }
        }
    }
    .btn-seeMore{
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-top: 8px;
        color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
    }
    .ant-checkbox-group{
        .ant-checkbox-group-item{
            display: flex;
            align-items: center;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            &:not(:last-child){
                margin-bottom: 10px;
            }
            &.ant-checkbox-wrapper{
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 0;
            }
            >span + span{
                position: relative;
                top: 4px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 15px;
                .brand-count{
                    font-size: 12px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};;
                }
                .rating-left{
                    margin-top: -4px;
                    min-width: 150px;
                    @media only screen and (max-width: 1792px){
                        min-width: 130px;
                    }
                    .ant-rate{
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
                    }
                    .anticon svg{
                        color: #FA8B0C;
                    }
                }
                .rating-right{
                    text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
                    min-width: 60px;
                    font-size: 12px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};;
                    @media only screen and (max-width: 1792px){
                        min-width: 26.5px;
                    }
                }
            }
        }
    }
    .ant-checkbox-group{
        width: 100%;
    }
`,d=a.Ay.div`
    .ninjadash-job-card{
        justify-content: space-between;
        padding: 30px 25px 26px 25px;
        box-shadow: 0 5px 20px rgba(173,181,217,.05);
        border-radius: 10px;
        margin-bottom: 25px;
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
        @media only screen and (max-width: 1399px){
            flex-direction: column;
            align-items: flex-start;
        }
        @media only screen and (max-width: 991px){
            flex-direction: row;
        }
        @media only screen and (max-width: 475px){
            flex-direction: column;
        }
        .ninjadash-media{
            margin-bottom: 15px;
        }
        .ninjadash-media__figure {
            ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
        }
        .ninjadash-media__body{
            h1{
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 6px;
                @media only screen and (max-width: 1199px){
                    font-size: 15px;
                }
                a{
                    color:  ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                    &:hover{
                        color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                    }
                }
            }
            p{
                font-size: 15px;
                margin: 0;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            }
        }
        .ninjadash-jobinfo-meta{
            margin-bottom: 0;
            li{
                .ninjadash-jobinfo-meta__label{
                    display: inline-block;
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
                    font-weight: 500;
                    min-width: 62px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    @media only screen and (max-width: 1399px){
                        margin-right: 10px;
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
                    }
                }
                .ninjadash-jobinfo-meta__info{
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                }
                &:not(:last-child){
                    margin-bottom: 8px;
                }
            }
        }
        .ninjadash-job-card__action{
            @media only screen and (max-width: 1399px){
                margin-top: 20px;
            }
            @media only screen and (max-width: 991px){
                margin-top: 0;
            }
            @media only screen and (max-width: 475px){
                margin-top: 20px;
            }
            .ninjadash-job-card-btn-details{
                display: flex;
                align-items: center;
                font-size: 14px;
                height: 38px;
                padding: 0px 20.15px;
                border-radius: 24px;
                transition: background 0.3s;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-background"]}};
                &:hover{
                    color: #fff;
                    background-color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                }
            }
            .ant-btn-round.ant-btn-sm{
                font-size: 14px;
                height: 38px;
                padding: 0 20.15px;
                &.ant-btn-light{
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                    background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-background"]}};
                    &:hover{
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-text"]}};
                        background-color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                    }
                }
            }
        }
        &.ninjadash-job-card-listview{
            .ninjadash-media{
                margin-bottom: 0;
                .ninjadash-media__figure{
                    img{
                        max-width: 46px;
                    }
                }
            }
            .ninjadash-media__body{
                h1{
                    margin-bottom: 4px;
                }
            }
            .ninjadash-jobinfo-meta{
                display: flex;
                justify-content: space-between;
                li{
                    span{
                        display: block;
                        font-weight: 400;
                        &.ninjadash-jobinfo-meta__info{
                            font-weight: 500;
                            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                        }
                    }
                }
            }
            .ninjadash-job-card__action{
                text-align: right;
                @media only screen and (max-width: 1599px){
                    text-align: left;
                    margin-top: 20px;
                }
            }
        }
    }
`,c=a.Ay.div`
    .ninjadash-media{
        margin-bottom: 24px;
    }
    .ninjadash-media__figure {
        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
    }
    .ninjadash-media__body{
        h1{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 6px;
            @media only screen and (max-width: 767px){
                font-size: 18px;
            }
            a{
                color:  ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                &:hover{
                    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                }
            }
        }
        p{
            font-size: 15px;
            margin: 0;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
        }
    }
    article{
        margin-bottom: 20px;
        h2{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color:  ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            @media only screen and (max-width: 767px){
                font-size: 16px;
            }
        }
        p{
            font-size: 16px;
            line-height: 1.69;
            color:  ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
        }
        ul{
            li{
                font-size: 16px;
                position: relative;
                padding-left: 22px;
                color:  ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                ${e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}}: 22px;
                &:after{
                    position: absolute;
                    ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                    top: 50%;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    content: '';
                    background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                }
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
    }
`,x=a.Ay.div`
    .ninjadash-additional-info__title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 18px;
    }
    .ninjadash-additional-info__list{
        margin-bottom: 25px;
        li{
            &:not(:last-child){
                margin-bottom: 12px;
            }
            .ninjadash-list-label{
                display: inline-block;
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
                min-width: 76px;
                font-weight: 500;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            }
            .ninjadash-list-text{
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            }
        }
    }
`,h=a.Ay.div`
    @media only screen and (max-width: 575px){
        margin-top: 10px;
    }
    .ant-card {
        .ant-card-body{
            padding: 40px 60px 25px !important;
            @media only screen and (max-width: 575px){
                padding: 20px 30px 5px !important;
            }
        }
    }
    .ninjadash-application-title{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 42px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
        @media only screen and (max-width: 575px){
            font-size: 24px;
            margin-bottom: 30px;
        }
    }
    .ant-form-item-label{
        label{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
        }
    }
    .ant-input{
        font-size: 15px;
        &::placeholder{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
        }
    }
    .ant-form-item-control-input-content{
        textarea{
            min-height: 130px;
        }
        .ant-upload-select{
            width: 100%;
            padding: 12px 14px;
            border: 1px dashed ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
            .ant-btn{
                &.ant-btn-sm{
                    padding: 0px 13.75px;
                    height: 38px;
                }
                svg{
                    color: #fff;
                }
            }
        }
    }
    .ninjadash-form-action{
        margin-top: 35px;
    }
`,m=a.Ay.div`
    display: flex;
    justify-content: flex-end;
    
    @media only screen and (max-width: 767px){
        margin-top: 0px !important
    }
    @media only screen and (max-width: 1199px){
        justify-content: center;
    }
    .ant-pagination{
        .ant-pagination-item-link,
        .ant-pagination-item,
        .ant-pagination-options .ant-select-selector{
            border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}} !important;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["input-bg"]}};          
        }
        .ant-pagination-item a{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};;
        }
    }
    
`,p=a.Ay.div`
    .product-details-box{
        padding: 15px;
        @media only screen and (max-width: 575px){
            padding: 0;
        }
    }
    .product-details-box__left{
        figure{
            margin-bottom: 0;
            img{
                border-radius: 10px;
            }
        }
    }
    .pdbl__slider{
        margin-top: 15px;
    }
    .pdbl__image{
        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 6px;
        img{
            border-radius: 10px;
            max-width: 90px;
            @media only screen and (max-width: 991px){
                margin-bottom: 10px;
            }
        }
    }
    .product-details-box__right{
        @media only screen and (max-width: 991px){
            margin-top: 20px;
        }
        p{
            margin-bottom: 8px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};;
        }
        .ant-rate{
            margin-bottom: 6px;
        }
        .ant-rate-star:not(:last-child){
            ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 2px !important;
        }
    }
    .pdbr__title{
        margin-bottom: 10px;
    }
    .pdbr__rating{
        display: inline-block;
        margin: ${e=>{let{theme:t}=e;return t.rtl?"0 8px 0 4px":"0 4px 0 8px"}};
        font-size: 12px;
        font-weight: 500;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
    .pdbr__review-count{
        font-size: 12px;
        font-weight: 400;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};;
    }
    .pdbr__brand-text{
        display: inline-block;
        margin-bottom: 8px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};;
    }
    .pdbr__brand-name{
        font-weight: 500;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
    .pdbr__new-price{
        font-size: 22px;
        font-weight: 500;
        margin: 18px 0 8px;
        color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
        .pdbr__currency{
            font-size: 14px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};;
        }
    }
    .pdbr__desc{
        font-size: 15px;
        max-width: 580px;
    }
    .pdbr__old-price{
        display: inline-flex;
        align-items: center;
        margin-bottom: 22px;
        del{
            font-size: 16px;
            font-weight: 400;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
        }
        .pdbr__offer-price{
            display: inline-block;
            ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 8px;
            font-size: 12px;
            color: ${e=>{let{theme:t}=e;return t["secondary-color"]}};
        }
    }

    .pdbr__current-status{
        margin-top: 25px;
        p{
            margin-bottom: 2px;
        }
        .current-status-title{
            font-weight: 500;
            margin-right: 30px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            @media only screen and (max-width: 1000px){
                margin-right: 15px;
            }
        }
        .stock-status{
            &.in-stock{
                font-weight: 500;
                color: ${e=>{let{theme:t}=e;return t["success-color"]}};
            }
        }
        .shipping-cost{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};;
        }
    }

    .pdbr__quantity{
        font-weight: 500;
        margin: 30px 0 30px !important;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
        button{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
            &.btn-inc{
                margin-right: 15px;
            }
            &.btn-dec{
                margin-left: 15px;
            }
        }
        .pdbr__availability{
            font-size: 13px;
            font-weight: 400;
            ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 15px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
        }
    }
    .pdbr__Actions{
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["general-background"]}};
        padding-bottom: 30px;
        margin-bottom: 28px;
        @media only screen and (max-width: 1399px){
            flex-flow: column;
            align-items: flex-start;
        }
        .pdbr__product-action{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .btn-cart{
                padding: 0 26.35px;
            }
            .btn-buy{
                padding: 0 29.85px;
            }
            .btn-cart,
            .btn-buy{
                border-radius: 6px;
                height: 44px;
            }
            button,
            a{
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
                @media only screen and (max-width: 1399px){
                    margin-bottom: 20px;
                }
                &:focus{
                    svg{
                        fill: #5a5f7d;
                    }
                }
            }
            .btn-icon{
                height: 44px;
                padding: 0 13px;
                box-shadow: 0 5px 15px ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}}15;
                &:hover{
                    background: transparent;
                }
                i{
                    color: #707070;
                }
            }
        }
        .pdbr__socials{
            margin: 0px 0 0 5px;
            a{
                color: #666666;
                &:not(:last-child){
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 12px;
                }
                span{
                    font-size: 14px;
                    color: #666666;
                }
            }
        }
    }

    .pdbr__list{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        li{
            span{
                &:first-child{
                    display: inline-block;
                    min-width: 66px;
                    font-weight: 500;
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 25px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                }
            }
            span + span{
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};;
            }
        }
    }
    .btn-cart span {
        ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 6px;
    }
`,g=a.Ay.div`
    margin-top: 28px;
    .ant-select-arrow{
        ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 11px;
    }
    
    .ant-table table {
        text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
    }
    .add-product-block{
        background: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
        border-radius: 20px;
        padding: 30px;
        border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
        @media only screen and (max-width: 575px){
            padding: 20px;
        }
        &:not(:last-child){
            margin-bottom: 30px;
            @media only screen and (max-width: 575px){
                margin-bottom: 15px;
            }
        }
        .ant-card{
            margin-bottom: 0 !important;
            border-radius: 20px;
        }
        .add-product-content{
            box-shadow: 0 10px 30px ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}}10;
            border-radius: 20px;
            .ant-card-head{
                padding: 0 40px !important;
                border-radius: ${e=>{let{theme:t}=e;return t.rtl?"20px 0 0 20px":"20px 20px 0 0"}};
                @media only screen and (max-width: 575px){
                    padding: 0 15px !important;
                }
            }
            .ant-card-head-title{
                padding: 26px 0 25px;
            }
            .ant-card-body{
                padding: 26px 40px 40px !important;
                @media only screen and (max-width: 575px){
                    padding: 20px !important;
                }
            }
        }
        .ant-upload{
            border-spacing: 6px;
            border-width: 2px;
            border-radius: 10px;
            background: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
            border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-deep"]}};
            padding: 50px;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-upload-drag-icon{
                i,
                svg{
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                }
            }
            .ant-upload-text{
                font-weight: 500;
                margin-bottom: 8px;
            }
            .ant-upload-hint{
                font-size: 15px;
                font-weight: 500;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};;
                span{
                    color: ${e=>{let{theme:t}=e;return t["secondary-color"]}};
                }
            }
        }
        .ant-upload-list-item{
            height: 100%;
            padding: 0;
            border: 0 none;
            margin-top: 25px;
        }
        .ant-upload-list-item-info{
            height: 100%;
            >span{
                display: flex;
                align-items: center;
            }
            .ant-upload-list-item-name{
                padding: 0 10px;
                font-weight: 500;
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                &:hover{
                    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                }
            }
            .ant-upload-list-item-card-actions{
                position: relative;
                top: 0;
                i,
                svg{
                    width: 15px;
                    color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
                }
            }
            .ant-upload-list-item-thumbnail{
                position: relative;
                top: 0;
                min-width: 100px;
                width: auto;
                height: 100%;
                img{
                    max-width: 100px;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px;
                }
            }
        }
    }
    .add-form-action{
        text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
        margin-top: 40px;
        @media only screen and (max-width: 575px){
            text-align: center;
            margin-top: 0;
        }
        .ant-form-item-control-input{
            button{
                height: 50px;
                padding: 0 22.82px;
            }
        }
        button{
            font-size: 15px;
            font-weight: 400;
            height: 50px;
        }
        .btn-cancel{
            border: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
            ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
            background: ${e=>{let{theme:t}=e;return t["bg-color-light"]}};
        }
    }
`},90340:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(9950),r=n(73878),i=n(87094),l=n(41988),s=n(90650),o=n(32212),d=n(42074),c=n(8603),x=n(67482),h=n(57687),m=n(81883),p=n(29355),g=n(44414);const u=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(2525)]).then(n.bind(n,34672))));const j=function(){const e=(0,r.wA)(),{gallery:t,isLoading:n}=(0,r.d4)((e=>({gallery:e.gallery.data,isLoading:e.gallery.loading}))),[j,b]=(0,a.useState)({activeClass:""}),y=t=>{e((0,m.galleryFilter)("category",t)),b({...j,activeClass:t})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.PageHeader,{title:"Gallery",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Gallery"}]}),(0,g.jsx)(x.Main,{children:(0,g.jsxs)(i.A,{gutter:25,children:[(0,g.jsx)(l.A,{xs:24,children:(0,g.jsx)(c.GalleryNav,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(d.N_,{className:""===j.activeClass?"active":"deactivate",onClick:()=>y(""),to:"#",children:"All"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.N_,{className:"webDesign"===j.activeClass?"active":"deactivate",onClick:()=>y("webDesign"),to:"#",children:"Web Design"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.N_,{className:"uiDesign"===j.activeClass?"active":"deactivate",onClick:()=>y("uiDesign"),to:"#",children:"UI Design"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.N_,{className:"wireframe"===j.activeClass?"active":"deactivate",onClick:()=>y("wireframe"),to:"#",children:"Wireframe"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.N_,{className:"Presentation"===j.activeClass?"active":"deactivate",onClick:()=>y("Presentation"),to:"#",children:"Presentation"})})]})})}),n?(0,g.jsx)(l.A,{xs:24,children:(0,g.jsx)("div",{className:"spin",children:(0,g.jsx)(s.A,{})})}):t.map((e=>{const{id:t}=e;return(0,g.jsx)(l.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(p.Cards,{headless:!0,children:(0,g.jsx)(o.A,{active:!0})}),children:(0,g.jsx)(u,{item:e})})},t)}))]})})]})}},71001:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(28429),o=n(12144),d=n(57687),c=n(67482),x=n(29355),h=n(44414);const m=(0,a.lazy)((()=>n.e(2681).then(n.bind(n,12681)))),p=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(6920)]).then(n.bind(n,23035)))),g=(0,a.lazy)((()=>n.e(3393).then(n.bind(n,73393)))),u=(0,a.lazy)((()=>n.e(6561).then(n.bind(n,36561)))),j=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(6920)]).then(n.bind(n,26201)))),b=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(6920)]).then(n.bind(n,96257))));const y=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.PageHeader,{title:"Wizards",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Wizards"}]}),(0,h.jsx)(c.Main,{children:(0,h.jsx)(r.A,{gutter:25,children:(0,h.jsx)(i.A,{sm:24,xs:24,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(l.A,{paragraph:{rows:20},active:!0})}),children:(0,h.jsx)(o.WizardBlock,{children:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(r.A,{justify:"center",children:(0,h.jsx)(i.A,{xxl:20,xs:24,children:(0,h.jsxs)(s.BV,{children:[(0,h.jsx)(s.qh,{path:"one",element:(0,h.jsx)(m,{})}),(0,h.jsx)(s.qh,{path:"two",element:(0,h.jsx)(p,{})}),(0,h.jsx)(s.qh,{path:"three",element:(0,h.jsx)(g,{})}),(0,h.jsx)(s.qh,{path:"four",element:(0,h.jsx)(u,{})}),(0,h.jsx)(s.qh,{path:"five",element:(0,h.jsx)(j,{})}),(0,h.jsx)(s.qh,{path:"six",element:(0,h.jsx)(b,{})})]})})})})})})})})})]})}},12681:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(9950),r=n(12144),i=n(44414);const l=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(8464)]).then(n.bind(n,75521))));const s=function(){return(0,i.jsx)(r.WizardWrapper,{className:"ninjadash-wizard-page",children:(0,i.jsx)(l,{})})}},32427:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(42074),o=n(28429),d=n(84394),c=n(57687),x=n(67482),h=n(29355),m=n(44414);const p=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(5600)]).then(n.bind(n,82259)))),g=(0,a.lazy)((()=>n.e(5717).then(n.bind(n,95717)))),u=(0,a.lazy)((()=>n.e(1596).then(n.bind(n,91596)))),j=(0,a.lazy)((()=>n.e(9804).then(n.bind(n,9804)))),b=(0,a.lazy)((()=>n.e(1644).then(n.bind(n,51644)))),y=(0,a.lazy)((()=>n.e(5810).then(n.bind(n,55810))));const f=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.PageHeader,{title:"My Profile",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}]}),(0,m.jsx)(x.Main,{children:(0,m.jsxs)(r.A,{gutter:25,children:[(0,m.jsxs)(i.A,{xxl:6,lg:8,md:10,xs:24,children:[(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{avatar:!0,active:!0,paragraph:{rows:3}})}),children:(0,m.jsx)(p,{user:{name:"Duran Clyton",designation:"UI/UX Designer",img:"static/img/users/1.png"}})}),(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,m.jsx)(u,{})})]}),(0,m.jsx)(i.A,{xxl:18,lg:16,md:14,xs:24,children:(0,m.jsxs)(d.SettingWrapper,{children:[(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{active:!0})}),children:(0,m.jsxs)("div",{className:"coverWrapper",children:[(0,m.jsx)(g,{}),(0,m.jsx)("nav",{className:"profileTab-menu",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(s.k2,{to:"./overview",children:"Overview"})}),(0,m.jsx)("li",{children:(0,m.jsx)(s.k2,{to:"./timeline",children:"Timeline"})}),(0,m.jsx)("li",{children:(0,m.jsx)(s.k2,{to:"./activity",children:"Activity"})})]})})]})}),(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,m.jsxs)(o.BV,{children:[(0,m.jsx)(o.qh,{path:"overview",element:(0,m.jsx)(j,{})}),(0,m.jsx)(o.qh,{path:"timeline",element:(0,m.jsx)(b,{})}),(0,m.jsx)(o.qh,{path:"activity",element:(0,m.jsx)(y,{})})]})})]})})]})})]})}},55810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(29355),o=n(44414);const d=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(6247)]).then(n.bind(n,70489)))),c=(0,a.lazy)((()=>n.e(7937).then(n.bind(n,87937))));const x=function(){return(0,o.jsxs)(r.A,{gutter:25,children:[(0,o.jsx)(i.A,{md:16,xs:24,children:(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(s.Cards,{headless:!0,children:(0,o.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,o.jsx)(c,{})})}),(0,o.jsx)(i.A,{md:8,children:(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(s.Cards,{headless:!0,children:(0,o.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,o.jsx)(d,{})})})]})}},84394:(e,t,n)=>{n.r(t),n.d(t,{ActivityContents:()=>s,ProductOverviewTable:()=>o,RightAsideWrapper:()=>l,SettingWrapper:()=>i,UserBioBox:()=>r});var a=n(19335);const r=a.Ay.div`
    .ant-card .ant-card-body{
        padding: 25px 0 25px 0 !important;
    }
    
    .user-info{
        margin-bottom: 22px;
        padding: 0 25px 22px 25px;
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
        &:last-child{
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .user-info__title{
            font-size: 12px;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
            text-transform: uppercase;
            margin-bottom: 16px;
        }
        p{
            font-size: 15px;
            line-height: 1.667;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
            &:last-child{
                margin-bottom:0;
            }
        }
        .user-info__contact{
            li{
                display: flex;
                align-items: center;
                &:not(:last-child){
                    margin-bottom: 14px;
                }
                svg,
                i,
                img{
                    width: 16px;
                    height: 16px;
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 12px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                }
                span{
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                }
            }
        }

        .user-info__skills{
            margin: -3px;
            .btn-outlined{
                margin: 3px !important;
                font-size: 11px;
                height: 25px;
                padding: 0px 8.75px;
                text-transform: uppercase;
                border-radius: 5px;
                border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
                margin: ${e=>{let{theme:t}=e;return t.rtl?"0 0 10px 10px":"0 10px 10px 0"}};
                color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}} !important;
            }
        }
        .card__social{
            a{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                box-shadow: 0 5px 15px ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}}20;
                &:not(:last-child){
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
                }
                &.facebook{
                    span{
                        color: #3B5998;
                    }
                }
                &.twitter{
                    span{
                        color: #1DA1F2;
                    }
                }
                &.dribble{
                    span{
                        color: #C2185B;
                    }
                }
                &.instagram{
                    span{
                        color: #FF0300;
                    }
                }
            }
        }
    }
    
`,i=a.Ay.div`
    .cover-image{
        position: relative;
        .ant-upload-select{
            position: absolute;
            ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: auto;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            a{
                color: #fff;
                padding: 8px 17.35px;
                display: inline-flex;
                align-items: center;
                @media only screen and (max-width: 479px){
                    padding: 5px 10px;
                }
                i,
                svg,
                img
                {
                    width: 16px;
                    height: 16px;
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 8px;
                }
            }
        }
        .ant-upload-list {
            display: none;
        }
    }
    .coverWrapper{
        position: relative;
        z-index: 1;
        margin-bottom: 25px;
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
        border-radius: 10px 10px;
        nav{
            padding: 0 25px;
            ul{
                margin: 0;
                @media only screen and (max-width: 375px){
                    text-align: center;
                    padding: 10px 0;
                }
                li{
                    display: inline-block;
                    @media only screen and (max-width: 375px){
                        display: block;
                    }
                    &:not(:last-child){
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 22px;
                        @media only screen and (max-width: 375px){
                            ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 0;
                        }
                    }
                    a{
                        position: relative;
                        display: block;
                        padding: 20px 5px;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                        @media only screen and (max-width: 375px){
                            padding: 10px 5px;
                        }
                        &:after{
                            position: absolute;
                            ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1.5px;
                            content: '';
                            opacity: 0;
                            visibility: hidden;
                            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
                            @media only screen and (max-width: 375px){
                                display: none;
                            }
                        }
                        &.active{
                            font-weight: 500;
                            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
                            &:after{
                                opacity: 1;
                                visibility: visible;
                            }
                        }
                    }
                }
            }
        }

    }
    .setting-card-title{
        @media only screen and (max-width: 479px){
            text-align: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 500;
        }
        span{
            font-size: 13px;
            font-weight: 400;
            margin: 0;
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["light-text"]}};
        }
    }
`,l=a.Ay.div`
    .ant-card-head{
        .btn-seeAll{
            font-size: 13px;
            font-weight: 500;
            color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
        }
    }
    .ant-card .ant-card-body{
        padding: 0 0 25px !important;
        ul{
            margin: 0;
            padding: 0;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 25px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 15px 50px #9299B820;
                }

                div{
                    display: flex;
                    img{
                        width: 46px;
                        height: 46px;
                        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 10px;
                        border-radius: 50%;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                        span{
                            display: block;
                        }
                    }
                }
            }
            .btn-loadMore{
                display: inline-block;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 500;
                padding: 0 25px;
            }
        }
    }
    .ff-widget{
        li{
            @media only screen and (max-width: 1599px){
                flex-flow: column;
                padding: 20px !important;
                align-items: flex-start !important;
            }
            .ff-info{
                @media only screen and (max-width: 1299px){
                    flex-flow: column;
                }
                @media only screen and (max-width: 767px){
                    flex-flow: row;
                }
                img{
                    @media only screen and (max-width: 1299px){
                        margin-right: 0 !important;
                        margin-bottom: 5px;
                    }
                }
                p{
                    font-size: 14px;
                    font-weight: 600;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
                    @media only screen and (max-width: 1299px){
                        margin-top: 12px;
                    }
                    @media only screen and (max-width: 767px){
                        margin-top: 0;
                        margin-bottom: 4px;
                    }
                    span{
                        margin-top: 3px;
                        font-weight: 400;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-light-text"]}};
                    }
                }
            }
            .btn-ff{
                font-size: 12px;
                font-weight: 500;
                padding: 0 12.88px;
                @media only screen and (max-width: 1599px){
                    margin-top: 15px;
                }
                svg,
                i,
                img{
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 6px;
                }
            }
            button{
                span{
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .widget-photo-list,
    .widget-video-list{
        padding: 20px 25px 0;
        .ant-row{
            margin: -4px 0;
            .ant-col{
                margin: 4px 0;
            }
        }
        img{
            max-width: 103px;
            border-radius: 6px;
            @media only screen and (max-width: 1599px){
                max-width: 100%;
            }
        }
    }

    .widget-video-list{
        .video{
            display: inline-block;
            position: relative;
            z-index: 4;
            &:after{
                position: absolute;
                ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                content: '';
                border-radius: 6px;
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}}20;
            }
            span{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 5;
                background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}}60;
                svg,
                img,
                i{
                    width: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-text"]}}
                }
            }
        }
    }
`,s=a.Ay.div`
    .ant-card-body{
        padding: 25px 0 !important;
    }
    .activity-list{
        margin: 0;
        .activity-list__single{
            padding: 12px 25px;
            display: flex;
            align-items: center;
            .activity-icon{
                width: 31px;
                height: 31px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #00000015;
                ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 15px;
                svg{
                    width: 14px;
                    height: 14px;
                }
                &.primary{
                    background-color: ${e=>{let{theme:t}=e;return t["primary-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["primary-color"]}};
                }
                &.secondary{
                    background-color: ${e=>{let{theme:t}=e;return t["secondary-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["secondary-color"]}};
                }
                &.success{
                    background-color: ${e=>{let{theme:t}=e;return t["success-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["success-color"]}};
                }
                &.info{
                    background-color: ${e=>{let{theme:t}=e;return t["info-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["info-color"]}};
                }
                &.danger{
                    background-color: ${e=>{let{theme:t}=e;return t["danger-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
                }
                &.warning{
                    background-color: ${e=>{let{theme:t}=e;return t["warning-color"]}}15;
                    color: ${e=>{let{theme:t}=e;return t["warning-color"]}};
                }
            }
            .more{
                visibility: hidden;
            }
            &:hover{
                box-shadow: 0 15px 50px #88888820;
                .more{                        
                    visibility: visible;
                }
            }
            .activity-content{
                flex: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .activity-info{
                display: flex;
                align-items: center;
                img{
                    max-width: 40px;
                    border-radius: 50%;
                    ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 20px;
                }
                p{
                    margin-bottom: 0;
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    .inline-text{
                        font-weight: 500;
                        display: inline;
                    }
                    .hour{
                        display: block;
                        margin-top: 3px;
                        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                    }
                }
            }
            .activity-more{
                svg,
                i{
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["extra-light-text"]}};
                }
            }
        }
                
    }
`,o=a.Ay.div`
    .ant-card-body{
        padding: 0 !important;
        .ant-table{
            border-radius: ${e=>{let{theme:t}=e;return t.rtl?"10px 10px 0 0":"0 0 10px 10px"}};
            margin-top: 1px;
        }
    }
    .ant-table{
        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
    }
    table{
        margin-bottom: 25px;
        .ant-table-thead > tr > th{
            background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
            border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
            &:first-child{
                padding-${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 25px;
            }
            &:last-child{
                text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
                padding-${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 25px;
            }
            &.p_name{
                min-width: 420px;
            }
            &.p_price{
                min-width: 100px;
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["main-background-light"]}};
                    }
                }
                td{
                    padding: 14px 16px;
                    font-size: 14px;
                    color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
                    border-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-default"]}};
                    &:first-child{
                        padding-${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}: 25px;
                    }
                    &:last-child{
                        padding-${e=>{let{theme:t}=e;return t.rtl?"left":"right"}}: 25px;
                        text-align: ${e=>{let{theme:t}=e;return t.rtl?"left":"right"}};
                    }
                }
            }
        }
    }
`},51644:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(9950),r=n(87094),i=n(41988),l=n(32212),s=n(73878),o=n(29355),d=n(44414);const c=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(2337)]).then(n.bind(n,70489)))),x=(0,a.lazy)((()=>n.e(6001).then(n.bind(n,46001)))),h=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(2337)]).then(n.bind(n,21224))));const m=function(){const{posts:e}=(0,s.d4)((e=>({posts:e.Profile.posts})));return(0,d.jsxs)(r.A,{gutter:25,children:[(0,d.jsxs)(i.A,{lg:16,xs:24,children:[(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.Cards,{headless:!0,children:(0,d.jsx)(l.A,{active:!0})}),children:(0,d.jsx)(x,{})}),e.sort(((e,t)=>t.time-e.time)).map((e=>(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.Cards,{headless:!0,children:(0,d.jsx)(l.A,{active:!0})}),children:(0,d.jsx)(h,{...e})},e.postId)))]}),(0,d.jsx)(i.A,{lg:8,xs:24,children:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.Cards,{headless:!0,children:(0,d.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,d.jsx)(c,{})})})]})}},28745:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(9950),r=n(73878),i=n(87094),l=n(41988),s=n(32212),o=n(78732),d=n(83587),c=n(90556),x=n(34574),h=n(42074),m=n(57687),p=n(67482),g=n(91),u=n(29355),j=n(44414);const b=function(){const{searchData:e,team:t}=(0,r.d4)((e=>({searchData:e.headerSearchData,team:e.team.data}))),[b,y]=(0,a.useState)({notData:e}),{notData:f}=b,w=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h.N_,{to:"#",children:[(0,j.jsx)(d.A,{}),(0,j.jsx)("span",{children:"View"})]}),(0,j.jsxs)(h.N_,{to:"#",children:[(0,j.jsx)(c.A,{}),(0,j.jsx)("span",{children:"Edit"})]}),(0,j.jsxs)(h.N_,{to:"#",children:[(0,j.jsx)(x.A,{}),(0,j.jsx)("span",{children:"Delete"})]})]});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.CardToolbox,{children:(0,j.jsx)(m.PageHeader,{backIcon:!1,title:"Team Members",subTitle:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"title-counter",children:"274 Users"}),(0,j.jsx)(g.AutoComplete,{onSearch:t=>{const n=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));y({...b,notData:n})},dataSource:f,width:"100%",placeholder:"Search by Name",patterns:!0})]}),buttons:[(0,j.jsxs)(h.N_,{to:"/admin/users/add-user/info",className:"btn-add_new",children:[(0,j.jsx)(o.A,{})," Add New Member"]})]})}),(0,j.jsx)(p.Main,{children:(0,j.jsx)(i.A,{gutter:25,children:t.map((e=>{const t=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(5052)]).then(n.bind(n,89025)))),{id:r}=e;return(0,j.jsx)(l.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)(u.Cards,{headless:!0,children:(0,j.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,j.jsx)(t,{actions:w,user:e})})},r)}))})})]})}},63806:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(9950),r=n(73878),i=n(41988),l=n(32212),s=n(87094),o=n(7037),d=n(78732),c=n(10356),x=n(58072),h=n(11876),m=n(96457),p=n(42074),g=n(28429),u=n(8603),j=n(57687),b=n(67482),y=n(91),f=n(72449),w=n(29355),v=n(44414);const A=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(1313)]).then(n.bind(n,82259)))),C=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(1313)]).then(n.bind(n,60698)))),$=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(1313)]).then(n.bind(n,35099)))),k=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(1313)]).then(n.bind(n,30684))));const z=function(){const{searchData:e,users:t,userGroup:n}=(0,r.d4)((e=>({searchData:e.headerSearchData,users:e.users,userGroup:e.userGroup}))),z=".",[S,N]=(0,a.useState)({notData:e,current:0,pageSize:0,page:0}),{notData:_}=S,P=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,v.jsx)(i.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(w.Cards,{headless:!0,children:(0,v.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,v.jsx)(A,{user:e})})},t)})))),D=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,v.jsx)(i.A,{xxl:12,xl:12,sm:24,xs:24,children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(w.Cards,{headless:!0,children:(0,v.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,v.jsx)($,{user:e})})},t)})))),q=a.memo((()=>t.map((e=>{const{id:t}=e;return(0,v.jsx)(i.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(w.Cards,{headless:!0,children:(0,v.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,v.jsx)(C,{user:e})})},t)})))),B=a.memo((()=>n.map((e=>{const{id:t}=e;return(0,v.jsx)(i.A,{xxl:8,md:12,sm:24,xs:24,children:(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)(w.Cards,{headless:!0,children:(0,v.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,v.jsx)(k,{user:e})})},t)}))));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.CardToolbox,{children:(0,v.jsx)(u.UserCarrdTop,{children:(0,v.jsx)(j.PageHeader,{ghost:!0,title:"Users Card",subTitle:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:"title-counter",children:"274 Users "}),(0,v.jsx)(y.AutoComplete,{onSearch:t=>{const n=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));N({...S,notData:n})},dataSource:_,placeholder:"Search by Name",width:"100%",patterns:!0})]}),buttons:[(0,v.jsx)(f.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,v.jsxs)(p.N_,{to:"/admin/users/add-user/info",children:[(0,v.jsx)(d.A,{})," Add New User"]})},"1"),(0,v.jsx)(p.k2,{className:"action-btn",to:`${z}/grid`,children:(0,v.jsx)(c.A,{})},"2"),(0,v.jsx)(p.k2,{className:"action-btn",to:`${z}/list`,children:(0,v.jsx)(x.A,{})},"3"),(0,v.jsx)(p.k2,{className:"action-btn",to:`${z}/grid-style`,children:(0,v.jsx)(m.A,{})},"4"),(0,v.jsx)(p.k2,{className:"action-btn",to:`${z}/grid-group`,children:(0,v.jsx)(h.A,{})},"5")]})})}),(0,v.jsx)(b.Main,{children:(0,v.jsx)(u.UsercardWrapper,{children:(0,v.jsxs)(s.A,{gutter:25,children:[(0,v.jsxs)(g.BV,{children:[(0,v.jsx)(g.qh,{path:"grid",element:(0,v.jsx)(P,{})}),(0,v.jsx)(g.qh,{path:"list",element:(0,v.jsx)(D,{})}),(0,v.jsx)(g.qh,{path:"grid-group",element:(0,v.jsx)(B,{})}),(0,v.jsx)(g.qh,{path:"grid-style",element:(0,v.jsx)(q,{})})]}),(0,v.jsx)(i.A,{xs:24,children:(0,v.jsx)("div",{className:"user-card-pagination",children:(0,v.jsx)(o.A,{onChange:e=>{N({...S,page:e})},showSizeChanger:!0,onShowSizeChange:(e,t)=>{N({...S,current:e,pageSize:t})},defaultCurrent:6,total:500})})})]})})})]})}},47041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(9950),r=n(87094),i=n(41988),l=n(34166),s=n(57687),o=n(67482),d=n(29355),c=n(55835),x=n(7906),h=n(44414);const m=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8005)]).then(n.bind(n,48005)))),p=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(304)]).then(n.bind(n,55355)))),g=(0,a.lazy)((()=>n.e(7241).then(n.bind(n,37241)))),u=(0,a.lazy)((()=>n.e(4989).then(n.bind(n,34989))));const j=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.PageHeader,{title:"Widgets Mixed",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Widgets Mixed"}]}),(0,h.jsx)(o.Main,{children:(0,h.jsx)(l.MixedCardWrap,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(d.Cards,{headless:!0,children:(0,h.jsx)(x.default,{subtotal:1200})})}),(0,h.jsxs)(i.A,{xxl:16,xl:14,xs:24,children:[(0,h.jsx)(m,{}),(0,h.jsx)(c.default,{})]}),(0,h.jsx)(i.A,{xxl:8,xs:24,children:(0,h.jsx)(g,{})}),(0,h.jsx)(i.A,{xxl:8,md:12,xs:24,children:(0,h.jsx)(u,{})}),(0,h.jsx)(i.A,{xxl:8,md:12,xs:24,children:(0,h.jsx)(p,{})})]})})})]})}},34166:(e,t,n)=>{n.r(t),n.d(t,{CardChartStyle:()=>r,MixedCardWrap:()=>i,OverviewCard:()=>s,SocialMediaWrapper:()=>l});var a=n(19335);const r=a.Ay.div`
  .cashflow-wrap{
    .ant-card{
        min-height: 500px;
        @media only screen and (max-width: 1599px){
          min-height: 440px;
        }
        @media only screen and (max-width: 1450px){
          min-height: 410px;
        }
    }
  }
  .youtube-subscriber-wrap{
      .ant-card{
          min-height: 470px;
      }
  }
  .ninjadash-sales-inner{
    padding-bottom: 48px;
  }
`,i=a.Ay.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,l=a.Ay.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,s=a.Ay.div`
    background: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${e=>{let{theme:t}=e;return t.topMenu?"min-height: 595px":"min-height: auto"}};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${e=>{let{theme:t}=e;return t["secondary-color"]}}, ${e=>{let{theme:t}=e;return t["warning-color"]}});
  ${e=>{let{theme:t}=e;return t.rtl?"right":"left"}}:0;
        top: 0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .ant-progress-bg{
            height: 6px !important;
        }
        .overview-box-single{
            h1{
                margin-bottom: 0;
            }
            p{
                color: ${e=>{let{theme:t}=e;return t["light-color"]}};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${e=>{let{theme:t}=e;return t["success-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${e=>{let{theme:t}=e;return t["light-gray-color"]}};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${e=>{let{theme:t}=e;return t["danger-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${e=>{let{theme:t}=e;return t["light-gray-color"]}};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            font-size: 12px;
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
            svg,
            img,
            i{
                ${e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}}: 8px;
            }
        }
    }
`},4909:(e,t,n)=>{n.r(t),n.d(t,{cartDelete:()=>j,cartGetData:()=>g,cartUpdateQuantity:()=>u});var a=n(72316),r=n(5213),i=n(77003);const{cartDataBegin:l,cartDataSuccess:s,cartDataErr:o,cartUpdateBegin:d,cartUpdateSuccess:c,cartUpdateErr:x,cartDeleteBegin:h,cartDeleteSuccess:m,cartDeleteErr:p}=a.default,g=()=>async e=>{try{e(l()),e(s(r))}catch(t){(0,i.handleApiError)(t,e,o)}},u=(e,t,n)=>async a=>{try{a(d());const r=n.map((n=>(n.id===e&&(n.quantity=t),n)));a(c(r))}catch(r){a(x(r))}},j=(e,t)=>async n=>{try{n(h());const a=t.filter((t=>t.id!==e));setTimeout((()=>{n(m(a))}),500)}catch(a){(0,i.handleApiError)(a,n,o)}}},81883:(e,t,n)=>{n.r(t),n.d(t,{galleryFilter:()=>o});var a=n(98638),r=n(35155);const{filterGalleryBegin:i,filterGallerySuccess:l,filterGalleryErr:s}=a.default,o=(e,t)=>async n=>{try{n(i()),setTimeout((()=>{const a=r.filter((n=>""!==t?n[e]===t:n));n(l(a))}),500)}catch(a){n(s(a))}}},65167:(e,t,n)=>{n.r(t),n.d(t,{filterWithTitleLocation:()=>g,jobsReadData:()=>x,jobsUpdateData:()=>h,jobsUpdateSearch:()=>m,singlePageReade:()=>u,sorting:()=>p});var a=n(46906),r=n(68279);const{jobsReadBegin:i,jobsReadSuccess:l,jobsReadErr:s,filterSinglePageReadBegin:o,filterSinglePageReadSuccess:d,filterSinglePageReadErr:c}=a.default,x=()=>async e=>{try{e(i()),e(l(r))}catch(t){e(s(t))}},h=e=>async t=>{try{t(i()),t(l(e))}catch(n){t(s(n))}},m=(e,t)=>async n=>{try{n(i());const a=r.filter((n=>n[t].startsWith(e)));n(l(a))}catch(a){n(s(a))}},p=(e,t)=>async n=>{try{n(i()),setTimeout((()=>{const a=t.sort(((t,n)=>"Old"===e?n.id-t.id:t.id-n.id));n(l(a))}),100)}catch(a){n(s(a))}},g=(e,t)=>async n=>{try{n(i()),setTimeout((()=>{const a=r.filter((n=>n.title.toLowerCase().indexOf(e.toLowerCase())>=0&&n.location.toLowerCase().indexOf(t.toLowerCase())>=0));n(l(a))}),100)}catch(a){n(s(a))}},u=e=>async t=>{try{t(o());const n=r.filter((t=>parseInt(t.id,10)===parseInt(e,10)));t(d(n))}catch(n){t(c(n))}}},16358:(e,t,n)=>{n.r(t),n.d(t,{filterByBrand:()=>b,filterByCategory:()=>y,filterByPriceRange:()=>u,filterByRating:()=>j,filterSinglePage:()=>p,sorting:()=>g,updateWishList:()=>f});var a=n(65571),r=n(44199);const{singleProductBegin:i,singleProductSuccess:l,singleProductErr:s,filterProductBegin:o,filterProductSuccess:d,filterProductErr:c,sortingProductBegin:x,sortingProductSuccess:h,sortingProductErr:m}=a.default,p=(e,t)=>async n=>{try{n(i());const a=t.filter((t=>t.id===e));n(l(a))}catch(a){n(s(a))}},g=e=>async t=>{try{t(x()),setTimeout((()=>{const n=r.sort(((t,n)=>n[e]-t[e]));t(h(n))}),100)}catch(n){t(m(n))}},u=e=>async t=>{t(o());try{const n=r.filter((t=>t.price>=e[0]&&t.price<=e[1]));t(d(n))}catch(n){t(c(n))}},j=e=>async t=>{try{t(o()),setTimeout((()=>{const n=r.filter((t=>e[0].length?e[0].includes(t.rate):r));t(d(n))}),100)}catch(n){t(c(n))}},b=e=>async t=>{try{t(o()),setTimeout((()=>{const n=r.filter((t=>e[0].length?e[0].includes(t.brand):r));t(d(n))}),100)}catch(n){t(c(n))}},y=e=>async t=>{try{t(o()),setTimeout((()=>{const n=r.filter((t=>"all"!==e?t.category===e:r));t(d(n))}),100)}catch(n){t(c(n))}},f=e=>async t=>{try{t(o()),r.map((n=>n.id===e?n.popular?n.popular=!1:n.popular=!0:t(d(r))))}catch(n){t(c(n))}}},2721:(e,t,n)=>{n.r(t),n.d(t,{default:()=>te});var a=n(9950),r=n(28429),i=n(44414);const l=(0,a.lazy)((()=>n.e(7900).then(n.bind(n,47900)))),s=(0,a.lazy)((()=>n.e(4287).then(n.bind(n,24287)))),o=(0,a.lazy)((()=>n.e(5218).then(n.bind(n,55218)))),d=(0,a.lazy)((()=>n.e(7681).then(n.bind(n,37681)))),c=(0,a.lazy)((()=>n.e(1808).then(n.bind(n,41808)))),x=(0,a.lazy)((()=>n.e(8188).then(n.bind(n,48188)))),h=(0,a.lazy)((()=>n.e(5389).then(n.bind(n,75389)))),m=(0,a.lazy)((()=>n.e(5424).then(n.bind(n,25424)))),p=(0,a.lazy)((()=>Promise.all([n.e(8573),n.e(6922)]).then(n.bind(n,94326)))),g=(0,a.lazy)((()=>n.e(1469).then(n.bind(n,21469)))),u=(0,a.lazy)((()=>n.e(7954).then(n.bind(n,27954)))),j=(0,a.lazy)((()=>n.e(1259).then(n.bind(n,11259)))),b=(0,a.lazy)((()=>n.e(9900).then(n.bind(n,69900)))),y=(0,a.lazy)((()=>n.e(9086).then(n.bind(n,89086)))),f=(0,a.lazy)((()=>Promise.all([n.e(4380),n.e(6209)]).then(n.bind(n,36209)))),w=(0,a.lazy)((()=>n.e(5423).then(n.bind(n,55423)))),v=(0,a.lazy)((()=>n.e(3693).then(n.bind(n,93693)))),A=(0,a.lazy)((()=>n.e(7553).then(n.bind(n,57553)))),C=(0,a.lazy)((()=>n.e(1663).then(n.bind(n,61663)))),$=(0,a.lazy)((()=>n.e(3827).then(n.bind(n,13827)))),k=(0,a.lazy)((()=>Promise.all([n.e(3780),n.e(1945)]).then(n.bind(n,71945)))),z=(0,a.lazy)((()=>n.e(351).then(n.bind(n,20351)))),S=(0,a.lazy)((()=>Promise.all([n.e(656),n.e(7777)]).then(n.bind(n,21993)))),N=(0,a.lazy)((()=>n.e(5480).then(n.bind(n,75480)))),_=(0,a.lazy)((()=>Promise.all([n.e(8623),n.e(9214)]).then(n.bind(n,9214)))),P=(0,a.lazy)((()=>n.e(5843).then(n.bind(n,55843)))),D=(0,a.lazy)((()=>n.e(2511).then(n.bind(n,32511)))),q=(0,a.lazy)((()=>n.e(8593).then(n.bind(n,28593)))),B=(0,a.lazy)((()=>n.e(9496).then(n.bind(n,29496)))),T=(0,a.lazy)((()=>n.e(8689).then(n.bind(n,48689)))),W=(0,a.lazy)((()=>Promise.all([n.e(5139),n.e(6548)]).then(n.bind(n,56548)))),E=(0,a.lazy)((()=>Promise.all([n.e(8573),n.e(3623)]).then(n.bind(n,16122)))),U=(0,a.lazy)((()=>n.e(9876).then(n.bind(n,59876)))),L=(0,a.lazy)((()=>n.e(9875).then(n.bind(n,29875)))),O=(0,a.lazy)((()=>Promise.all([n.e(777),n.e(680)]).then(n.bind(n,680)))),F=(0,a.lazy)((()=>n.e(8562).then(n.bind(n,38562)))),M=(0,a.lazy)((()=>Promise.all([n.e(8573),n.e(5139),n.e(9131)]).then(n.bind(n,44646)))),I=(0,a.lazy)((()=>n.e(7980).then(n.bind(n,37980)))),G=(0,a.lazy)((()=>n.e(7215).then(n.bind(n,97215)))),H=(0,a.lazy)((()=>n.e(8180).then(n.bind(n,18180)))),R=(0,a.lazy)((()=>n.e(1421).then(n.bind(n,11421)))),V=(0,a.lazy)((()=>n.e(5821).then(n.bind(n,65821)))),J=(0,a.lazy)((()=>n.e(9181).then(n.bind(n,49181)))),K=(0,a.lazy)((()=>n.e(300).then(n.bind(n,20300)))),Q=(0,a.lazy)((()=>n.e(382).then(n.bind(n,90382)))),X=(0,a.lazy)((()=>n.e(8023).then(n.bind(n,8023)))),Y=(0,a.lazy)((()=>Promise.all([n.e(5059),n.e(8045),n.e(8573),n.e(4380),n.e(7848),n.e(7149),n.e(6279),n.e(8623),n.e(5139),n.e(6934),n.e(1741),n.e(9696),n.e(8143),n.e(656),n.e(777),n.e(884),n.e(538),n.e(2671),n.e(1717),n.e(3780),n.e(9556),n.e(37),n.e(6522),n.e(290),n.e(4360),n.e(7291),n.e(4503),n.e(6233),n.e(3917),n.e(3548),n.e(9537),n.e(9944),n.e(5267),n.e(2661),n.e(5727),n.e(9644),n.e(1005)]).then(n.bind(n,90984)))),Z=(0,a.lazy)((()=>n.e(3795).then(n.bind(n,93795)))),ee=(0,a.lazy)((()=>n.e(1874).then(n.bind(n,21874))));const te=function(){return(0,i.jsxs)(r.BV,{children:[(0,i.jsx)(r.qh,{path:"button",element:(0,i.jsx)(l,{})}),(0,i.jsx)(r.qh,{path:"alerts",element:(0,i.jsx)(s,{})}),(0,i.jsx)(r.qh,{path:"modals",element:(0,i.jsx)(o,{})}),(0,i.jsx)(r.qh,{path:"cards",element:(0,i.jsx)(d,{})}),(0,i.jsx)(r.qh,{path:"grid",element:(0,i.jsx)(c,{})}),(0,i.jsx)(r.qh,{path:"tabs",element:(0,i.jsx)(x,{})}),(0,i.jsx)(r.qh,{path:"breadcrumb",element:(0,i.jsx)(h,{})}),(0,i.jsx)(r.qh,{path:"list",element:(0,i.jsx)(I,{})}),(0,i.jsx)(r.qh,{path:"pagination",element:(0,i.jsx)(m,{})}),(0,i.jsx)(r.qh,{path:"page-headers",element:(0,i.jsx)(p,{})}),(0,i.jsx)(r.qh,{path:"steps",element:(0,i.jsx)(g,{})}),(0,i.jsx)(r.qh,{path:"comments",element:(0,i.jsx)(u,{})}),(0,i.jsx)(r.qh,{path:"empty",element:(0,i.jsx)(j,{})}),(0,i.jsx)(r.qh,{path:"statistic",element:(0,i.jsx)(b,{})}),(0,i.jsx)(r.qh,{path:"rate",element:(0,i.jsx)(y,{})}),(0,i.jsx)(r.qh,{path:"slider",element:(0,i.jsx)(f,{})}),(0,i.jsx)(r.qh,{path:"progress",element:(0,i.jsx)(w,{})}),(0,i.jsx)(r.qh,{path:"tags",element:(0,i.jsx)(v,{})}),(0,i.jsx)(r.qh,{path:"popover",element:(0,i.jsx)(C,{})}),(0,i.jsx)(r.qh,{path:"timeline",element:(0,i.jsx)($,{})}),(0,i.jsx)(r.qh,{path:"drawer",element:(0,i.jsx)(k,{})}),(0,i.jsx)(r.qh,{path:"notification",element:(0,i.jsx)(z,{})}),(0,i.jsx)(r.qh,{path:"spiner",element:(0,i.jsx)(N,{})}),(0,i.jsx)(r.qh,{path:"carousel",element:(0,i.jsx)(_,{})}),(0,i.jsx)(r.qh,{path:"collapse",element:(0,i.jsx)(P,{})}),(0,i.jsx)(r.qh,{path:"auto-complete",element:(0,i.jsx)(B,{})}),(0,i.jsx)(r.qh,{path:"checkbox",element:(0,i.jsx)(T,{})}),(0,i.jsx)(r.qh,{path:"cascader",element:(0,i.jsx)(W,{})}),(0,i.jsx)(r.qh,{path:"date-picker",element:(0,i.jsx)(E,{})}),(0,i.jsx)(r.qh,{path:"switch",element:(0,i.jsx)(U,{})}),(0,i.jsx)(r.qh,{path:"select",element:(0,i.jsx)(H,{})}),(0,i.jsx)(r.qh,{path:"timePicker",element:(0,i.jsx)(L,{})}),(0,i.jsx)(r.qh,{path:"tree-select",element:(0,i.jsx)(O,{})}),(0,i.jsx)(r.qh,{path:"calendar",element:(0,i.jsx)(F,{})}),(0,i.jsx)(r.qh,{path:"form",element:(0,i.jsx)(M,{})}),(0,i.jsx)(r.qh,{path:"dropdown",element:(0,i.jsx)(A,{})}),(0,i.jsx)(r.qh,{path:"result",element:(0,i.jsx)(S,{})}),(0,i.jsx)(r.qh,{path:"avatar",element:(0,i.jsx)(D,{})}),(0,i.jsx)(r.qh,{path:"badge",element:(0,i.jsx)(q,{})}),(0,i.jsx)(r.qh,{path:"radio",element:(0,i.jsx)(R,{})}),(0,i.jsx)(r.qh,{path:"skeleton",element:(0,i.jsx)(G,{})}),(0,i.jsx)(r.qh,{path:"input",element:(0,i.jsx)(V,{})}),(0,i.jsx)(r.qh,{path:"upload",element:(0,i.jsx)(J,{})}),(0,i.jsx)(r.qh,{path:"message",element:(0,i.jsx)(K,{})}),(0,i.jsx)(r.qh,{path:"confirm",element:(0,i.jsx)(Q,{})}),(0,i.jsx)(r.qh,{path:"menu",element:(0,i.jsx)(X,{})}),(0,i.jsx)(r.qh,{path:"drag",element:(0,i.jsx)(Y,{})}),(0,i.jsx)(r.qh,{exact:!0,path:"base",element:(0,i.jsx)(Z,{})}),(0,i.jsx)(r.qh,{path:"*",element:(0,i.jsx)(ee,{})})]})}},85544:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAW9JREFUOE+tUzFSwlAQfRuGCXRpoTGeQDiB0JlKPIHxBnACuQHcwHADrKBDb+ARsEHL0EAchqzvZwADMWMc3SbzN/vf333vrWBaGwvkGrtQIITGNxBrIEBjny/yVegc9ropMq0T5/9CNW5/C6qKkQhuU90vAQ2gaIjI5VdeHwFxOdHFIZcLCgQs9A+F1qaJ8maOdhhiUg/Mg6r6DO+tlaEvD/SUDL1aCCa1J3bb5z+XfHdhr1r4qPrUY5Cuzx8f2ksXm0J47wRlsFOUNkNsS46INcs0ULRTc5HKElQcOqOH0jZEXJ6RIudPoAmwxneoRGNE1fEOzKVwZ0XH73L84XExRvAWvhGGXvQT0WaOwwde0sC5nGZH2ilt+IS6RnXjbwKcA5ZPN9z/bKmUT7kZSyrtIqp0KMxDsnH2imCMxGK1eaFOefHYp5kz1xEwvHZIk1uI09Pxf3NOON1vyIETM67GHRp8mF6/IsAk+RWVdeMT3eLKgf6IB/oAAAAASUVORK5CYII="},87945:(e,t,n)=>{e.exports=n.p+"static/media/open-message.29a48d087bdf34e15ac1.png"},5213:e=>{e.exports=JSON.parse('[{"id":"1","name":"Montes Scelerisque","size":"Large","color":"Brown","price":"248.66","quantity":"1","img":"static/img/products/1.png","total":"248.66"},{"id":"2","name":"Leo Sodales Varius","size":"Small","color":"Golden","price":"240","quantity":"1","img":"static/img/products/2.png","total":"240"}]')},68279:e=>{e.exports=JSON.parse('[{"id":1,"title":"WordPress Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":2,"title":"JavaScript Developer","location":"Sydney, Aus","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/chrome.svg"},{"id":3,"title":"Senior UI/UX Designer","location":"London,UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/dribble.svg"},{"id":4,"title":"Frontend Developer","location":"Manchester City, UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/slack.svg"},{"id":5,"title":"Senior Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":6,"title":"Visual Graphic Designer","location":"London, UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/tags.svg"},{"id":7,"title":"Support Engineer","location":"California, USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/firefox.svg"},{"id":8,"title":"Junior WordPress Developer","location":"Dhaka,BD","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":9,"title":"WordPress Theme Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":10,"title":"WordPress Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/chrome.svg"}]')}}]);