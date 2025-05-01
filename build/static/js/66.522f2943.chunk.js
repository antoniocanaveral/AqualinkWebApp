"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[66,5102,2427,6632,6648,4395,1128,5776,6770,1448,340,1001,3806,8745,7041,7906,2681,1644,5810],{91:(e,t,a)=>{a.r(t),a.d(t,{AutoComplete:()=>x});var s=a(60767),n=a(55902),r=a(48538),l=a(9950),i=a(73878),d=a(3783),o=a(44414);const c=()=>{},h=(e,t)=>({value:e,label:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),x=l.memo((e=>{const{rtl:t}=(0,i.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:a,patterns:l,patternButtons:x,width:p,onSearch:m,options:j,placeholder:u}=e,g=(null===j||void 0===j?void 0:j.length)>0&&j.map((e=>{const{title:t,count:a}=e;return{label:t,options:[h(t,(0,o.jsxs)("span",{className:"certain-search-item-count",children:[a," people"]}))]}})),b=e=>{m(e)};return a?(0,o.jsx)(d.AutoCompleteStyled,{options:j,style:{width:p},onSelect:c,onSearch:b,children:a}):l?(0,o.jsx)(d.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:p},options:g,placeholder:u,onSearch:b,children:(0,o.jsx)(n.A,{suffix:x?(0,o.jsx)(r.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,o.jsx)(s.A,{})}):(0,o.jsx)(s.A,{})})}):(0,o.jsx)(d.AutoCompleteStyled,{options:j,style:{width:p},onSelect:c,onSearch:b,placeholder:u})}));x.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,a)=>{a.r(t),a.d(t,{AutoCompleteStyled:()=>y});var s=a(58168),n=a(82284),r=a(5544),l=a(48738),i=a.n(l),d=a(50604),o=a(15207),c=a(9950),h=a(5741),x=a(99674),p=a(39156),m=x.A.Option;function j(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var u=function(e,t){var a,l=e.prefixCls,u=e.className,g=e.popupClassName,b=e.dropdownClassName,y=e.children,f=e.dataSource,v=(0,d.A)(y);if(1===v.length&&(0,p.zO)(v[0])&&!j(v[0])){var A=(0,r.A)(v,1);a=A[0]}var w,C=a?function(){return a}:void 0;return w=v.length&&j(v[0])?y:f?f.map((function(e){if((0,p.zO)(e))return e;switch((0,n.A)(e)){case"string":return c.createElement(m,{key:e,value:e},e);case"object":var t=e.value;return c.createElement(m,{key:t,value:t},e.text);default:return}})):[],c.createElement(h.TG,null,(function(a){var n=(0,a.getPrefixCls)("select",l);return c.createElement(x.A,(0,s.A)({ref:t},(0,o.A)(e,["dataSource"]),{prefixCls:n,popupClassName:g||b,className:i()("".concat(n,"-auto-complete"),u),mode:x.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:C}),w)}))},g=c.forwardRef(u);g.Option=m;const b=g;const y=(0,a(19335).Ay)(b)`
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
`},55835:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(9950);var s=a(28423),n=a(72449),r=a(44414);const l=function(){return(0,r.jsxs)(s.NewsletterStyle,{children:[(0,r.jsx)("figcaption",{children:(0,r.jsxs)("form",{action:"",children:[(0,r.jsx)("h4",{children:"Subscribe To Our Newsletter"}),(0,r.jsx)("p",{children:"We notify you once any post is published"}),(0,r.jsx)(n.Button,{size:"small",type:"primary",children:"Subscribe"})]})}),(0,r.jsx)("img",{src:a(87945),alt:""})]})}},74395:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(29355),d=a(18450),o=a(67482),c=a(59537),h=a(66260),x=a(44414);const p=(0,s.lazy)((()=>Promise.all([a.e(4360),a.e(1976)]).then(a.bind(a,71976)))),m=(0,s.lazy)((()=>Promise.all([a.e(6279),a.e(3917),a.e(8316)]).then(a.bind(a,18316)))),j=(0,s.lazy)((()=>a.e(693).then(a.bind(a,23074)))),u=(0,s.lazy)((()=>a.e(7175).then(a.bind(a,27175)))),g=(0,s.lazy)((()=>a.e(9195).then(a.bind(a,49195)))),b=(0,s.lazy)((()=>a.e(5303).then(a.bind(a,55303)))),y=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(3917),a.e(3548),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8370)]).then(a.bind(a,44234)))),{BlogCardData:f}=h;const v=function(){return(0,x.jsx)(o.Main,{children:(0,x.jsxs)(n.A,{gutter:25,children:[(0,x.jsx)(r.A,{xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(c.PageHeaderBanner,{type:"corporate",title:"Hey Danial! Welcome to the Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available,\r\nut the majority have suffered passages of Lorem Ipsum available alteration in some form"})})}),(0,x.jsx)(r.A,{xxl:16,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(p,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:10,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(m,{})})}),(0,x.jsx)(r.A,{xxl:12,xl:14,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(j,{})})}),(0,x.jsx)(r.A,{xl:12,lg:24,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(u,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(g,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(b,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,x.jsx)(r.A,{xxl:8,sm:12,xs:24,children:(0,x.jsx)(d.default,{item:e})},e.id)))]})})}},21128:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(29355),d=a(18450),o=a(67482),c=a(59537),h=a(66260),x=a(44414);const p=(0,s.lazy)((()=>Promise.all([a.e(4360),a.e(1976)]).then(a.bind(a,71976)))),m=(0,s.lazy)((()=>Promise.all([a.e(6279),a.e(3917),a.e(8316)]).then(a.bind(a,18316)))),j=(0,s.lazy)((()=>a.e(693).then(a.bind(a,23074)))),u=(0,s.lazy)((()=>a.e(7175).then(a.bind(a,27175)))),g=(0,s.lazy)((()=>a.e(9195).then(a.bind(a,49195)))),b=(0,s.lazy)((()=>a.e(5303).then(a.bind(a,55303)))),y=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(3917),a.e(3548),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(4901)]).then(a.bind(a,44234)))),{BlogCardData:f}=h;const v=function(){return(0,x.jsx)(o.Main,{children:(0,x.jsxs)(n.A,{gutter:25,children:[(0,x.jsx)(r.A,{xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(c.PageHeaderBanner,{title:"Welcome To Demo Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"})})}),(0,x.jsx)(r.A,{xxl:16,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(p,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:10,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(m,{})})}),(0,x.jsx)(r.A,{xxl:12,xl:14,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(j,{})})}),(0,x.jsx)(r.A,{xl:12,lg:24,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(u,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(g,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(b,{})})}),(0,x.jsx)(r.A,{xxl:8,xl:12,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(i.Cards,{headless:!0,children:(0,x.jsx)(l.A,{active:!0})}),children:(0,x.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,x.jsx)(r.A,{xxl:8,sm:12,xs:24,children:(0,x.jsx)(d.default,{item:e})},e.id)))]})})}},26770:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(28429),d=a(73878),o=a(57687),c=a(67482),h=a(29355),x=a(4909),p=a(44414);const m=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8439)]).then(a.bind(a,73802)))),j=(0,s.lazy)((()=>Promise.all([a.e(4503),a.e(7906)]).then(a.bind(a,7906))));const u=function(){const e=(0,d.wA)(),{cartData:t}=(0,d.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,s.useEffect)((()=>{x.cartGetData&&e((0,x.cartGetData)())}),[e]);let a=0;return null!==t&&t.map((e=>{const{quantity:t,price:s}=e;return a+=parseInt(t,10)*parseInt(s,10),a})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,p.jsx)(c.Main,{children:(0,p.jsx)("div",{className:"cartWraper",children:(0,p.jsx)(n.A,{gutter:15,children:(0,p.jsx)(r.A,{md:24,children:(0,p.jsx)(h.Cards,{headless:!0,children:(0,p.jsxs)(n.A,{gutter:30,children:[(0,p.jsx)(r.A,{xxl:17,xs:24,children:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(h.Cards,{headless:!0,children:(0,p.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(i.BV,{children:(0,p.jsx)(i.qh,{index:!0,element:(0,p.jsx)(m,{})})})})}),(0,p.jsx)(r.A,{xxl:7,xs:24,children:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(h.Cards,{headless:!0,children:(0,p.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(j,{subtotal:a,checkout:!1})})})]})})})})})})]})}},61448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(28429),d=a(73878),o=a(57687),c=a(67482),h=a(29355),x=a(4909),p=a(12144),m=a(44414);const j=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(4421)]).then(a.bind(a,75521)))),u=(0,s.lazy)((()=>Promise.all([a.e(4503),a.e(7906)]).then(a.bind(a,7906))));const g=function(){const e=(0,d.wA)(),{cartData:t}=(0,d.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,s.useEffect)((()=>{x.cartGetData&&e((0,x.cartGetData)())}),[e]);let a=0;return null!==t&&t.map((e=>{const{quantity:t,price:s}=e;return a+=parseInt(t,10)*parseInt(s,10),a})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,m.jsx)(c.Main,{children:(0,m.jsx)("div",{className:"checkoutWraper",children:(0,m.jsx)(n.A,{gutter:15,children:(0,m.jsx)(r.A,{md:24,children:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsxs)(n.A,{gutter:30,children:[(0,m.jsx)(r.A,{xxl:17,xs:24,children:(0,m.jsx)(p.WizardWrapper,{children:(0,m.jsx)(s.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(i.BV,{children:(0,m.jsx)(i.qh,{index:!0,element:(0,m.jsx)(j,{})})})})})}),(0,m.jsx)(r.A,{xxl:7,xs:24,children:(0,m.jsx)(s.Suspense,{fallback:(0,m.jsx)(h.Cards,{headless:!0,children:(0,m.jsx)(l.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(u,{subtotal:a,checkout:!0})})})]})})})})})})]})}},7906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9950),n=a(87827),r=a(99674),l=a(55902),i=a(94999),d=a(37782),o=a(42074),c=a(73878),h=a(34503),x=a(29355),p=a(42017),m=a(72449),j=a(4909),u=a(44414);const g=function(e){let{subtotal:t,checkout:g}=e;const b=(0,c.wA)(),{rtl:y}=(0,c.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),[f]=n.A.useForm(),[v,A]=(0,s.useState)({coupon:0,promo:0,current:0});(0,s.useEffect)((()=>{j.cartGetData&&b((0,j.cartGetData)())}),[b]);const{Option:w}=r.A;return(0,u.jsx)(x.Cards,{bodyStyle:{borderRadius:"20px"},className:"ninjadash-order-summery",headless:!0,children:(0,u.jsxs)(h.OrderSummary,{children:[(0,u.jsx)(p.default,{className:"summary-table-title",as:"h4",children:"Order Summary"}),(0,u.jsx)(x.Cards,{bodyStyle:{borderRadius:"10px"},headless:!0,children:(0,u.jsxs)("div",{className:"order-summary-inner",children:[(0,u.jsxs)("ul",{className:"summary-list",children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Subtotal :"}),(0,u.jsx)("span",{className:"summary-list-text",children:`$${t}`})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Discount :"}),(0,u.jsx)("span",{className:"summary-list-text",children:"$-20"})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("span",{className:"summary-list-title",children:"Shipping Charge :"}),(0,u.jsx)("span",{className:"summary-list-text",children:"$30"})]})]}),(0,u.jsxs)(n.A,{form:f,name:"promo",onFinish:e=>{A({...v,promo:e})},children:[(0,u.jsx)(n.A.Item,{name:"couponType",initialValue:"",label:"",children:(0,u.jsxs)(r.A,{style:{width:"100%"},children:[(0,u.jsxs)(w,{value:"",children:[(0,u.jsx)("img",{src:a(85544),alt:""})," Select Coupon"]}),(0,u.jsxs)(w,{value:"one",children:[(0,u.jsx)("img",{src:a(85544),alt:""})," Coupon one"]}),(0,u.jsxs)(w,{value:"tow",children:[(0,u.jsx)("img",{src:a(85544),alt:""})," Coupon tow"]})]})}),(0,u.jsxs)("div",{className:"promo-apply-form",children:[(0,u.jsx)(n.A.Item,{name:"promoCode",label:"Promo Code",children:(0,u.jsx)(l.A,{placeholder:"Promo Code"})}),(0,u.jsx)(n.A.Item,{children:(0,u.jsx)(m.Button,{htmlType:"submit",size:"default",type:"success",outlined:!0,children:"Apply"})})]})]}),(0,u.jsxs)(p.default,{className:"summary-total",as:"h4",children:[(0,u.jsx)("span",{className:"summary-total-label",children:"Total : "}),(0,u.jsx)("span",{className:"summary-total-amount",children:"$"+(t+30-20)})]}),!g&&(0,u.jsx)(m.Button,{className:"btn-proceed",type:"secondary",size:"large",children:(0,u.jsxs)(o.N_,{to:"/admin/ecommerce/checkout",children:["Proceed To Checkout",y?(0,u.jsx)(i.A,{}):(0,u.jsx)(d.A,{})]})}),3===v.current&&(0,u.jsx)(m.Button,{onClick:()=>{document.querySelectorAll("button span").forEach((e=>{"Done"===e.innerHTML&&e.click()}))},className:"btn-proceed",type:"secondary",size:"large",children:(0,u.jsx)(o.N_,{to:"#",children:"Place Order"})})]})})]})})}},75776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(9950),n=a(73878),r=a(87094),l=a(41988),i=a(32212),d=a(24893),o=a(90650),c=a(42074),h=a(28429),x=a(10356),p=a(58072),m=a(57687),j=a(67482),u=a(91),g=a(34503),b=a(16358),y=a(29355),f=a(44414);const v=(0,s.lazy)((()=>Promise.all([a.e(4380),a.e(8719)]).then(a.bind(a,58719)))),A=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(3149)]).then(a.bind(a,10742)))),w=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(3149)]).then(a.bind(a,36550))));const C=function(){const e=(0,n.wA)(),t=(0,n.d4)((e=>e.headerSearchData)),[a,C]=(0,s.useState)({notData:t,active:"active"}),{notData:z}=a;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.PageHeader,{title:"Shop",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"products"}]}),(0,f.jsx)(j.Main,{children:(0,f.jsxs)(r.A,{gutter:30,children:[(0,f.jsx)(l.A,{className:"product-sidebar-col",xxl:5,xl:7,lg:7,md:10,xs:24,children:(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(y.Cards,{headless:!0,children:(0,f.jsx)(i.A,{paragraph:{rows:22},active:!0})}),children:(0,f.jsx)(v,{})})}),(0,f.jsxs)(l.A,{className:"product-content-col",xxl:19,lg:17,md:14,xs:24,children:[(0,f.jsx)(g.TopToolBox,{children:(0,f.jsxs)(r.A,{gutter:0,children:[(0,f.jsx)(l.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)(u.AutoComplete,{onSearch:e=>{const s=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));C({...a,notData:s})},dataSource:z,placeholder:"Search",width:"100%",patterns:!0})}),(0,f.jsx)(l.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),(0,f.jsx)(l.A,{xxl:10,xs:24,children:(0,f.jsxs)("div",{className:"product-list-action d-flex justify-content-between align-items-center",children:[(0,f.jsxs)("div",{className:"product-list-action__tab",children:[(0,f.jsx)("span",{className:"toolbox-menu-title",children:"Sort by:"}),(0,f.jsxs)(d.Ay.Group,{onChange:t=>{e((0,b.sorting)(t.target.value))},defaultValue:"rate",children:[(0,f.jsx)(d.Ay.Button,{value:"rate",children:"Top Rated"}),(0,f.jsx)(d.Ay.Button,{value:"popular",children:"Popular"}),(0,f.jsx)(d.Ay.Button,{value:"time",children:"Newest"}),(0,f.jsx)(d.Ay.Button,{value:"price",children:"Price"})]})]}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,f.jsxs)("div",{className:"product-list-action__viewmode",children:[(0,f.jsx)(c.k2,{to:"./grid",children:(0,f.jsx)(x.A,{})}),(0,f.jsx)(c.k2,{to:"./list",children:(0,f.jsx)(p.A,{})})]})]})})]})}),(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("div",{className:"spin d-flex align-center-v",children:(0,f.jsx)(o.A,{})}),children:(0,f.jsxs)(h.BV,{children:[(0,f.jsx)(h.qh,{index:!0,element:(0,f.jsx)(A,{})}),(0,f.jsx)(h.qh,{path:"grid",element:(0,f.jsx)(A,{})}),(0,f.jsx)(h.qh,{path:"list",element:(0,f.jsx)(w,{})})]})})]})]})})]})}},51186:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var s=a(9950),n=a(87094),r=a(41988),l=a(90650),i=a(28429),d=a(78732),o=a(67128),c=a(72777),h=a(15408),x=a(64508),p=a(39644),m=a(20133),j=a(57687),u=a(29355),g=a(67482),b=a(72449),y=a(44414);const f=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,6004)))),v=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,2336)))),A=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,24381)))),w=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,41059)))),C=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,95834)))),z=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,10107)))),k=(0,s.lazy)((()=>a.e(7633).then(a.bind(a,27633))));const N=function(){const[e,t]=(0,s.useState)(!1),[a,N]=(0,s.useState)({responsive:0,collapsed:!1}),{responsive:S,collapsed:$}=a;(0,s.useLayoutEffect)((()=>{function e(){const e=window.innerWidth;N({responsive:e})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const P=()=>{N({...a,collapsed:!$})},q=()=>{t(!e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.PageHeader,{title:"Dashboard",routes:[{path:"/admin",breadcrumbName:"Email"},{path:"",breadcrumbName:"Email"}]}),e&&(0,y.jsx)(p.default,{close:()=>{t(!1)}}),(0,y.jsx)(g.Main,{children:(0,y.jsx)(m.EmailWrapper,{children:(0,y.jsxs)(n.A,{gutter:25,children:[(0,y.jsxs)(r.A,{className:"trigger-col",xxl:5,xl:7,lg:8,xs:24,children:[S<=991&&(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger",style:{marginTop:0},onClick:P,children:$?(0,y.jsx)(c.A,{}):(0,y.jsx)(h.A,{})}),S>991?(0,y.jsx)("div",{className:"mail-sideabr",children:(0,y.jsxs)(u.Cards,{headless:!0,children:[(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsxs)(b.Button,{onClick:q,shape:"round",type:"primary",size:"default",block:!0,children:[(0,y.jsx)(d.A,{})," Compose"]})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(x.default,{})})]})}):(0,y.jsx)(m.MailSideBar,{className:$?"mail-sideabr show":"mail-sideabr hide",children:(0,y.jsxs)(u.Cards,{headless:!0,children:[(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger trigger-close",style:{marginTop:0},onClick:P,children:(0,y.jsx)(o.A,{})}),(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsx)(b.Button,{onClick:q,shape:"round",type:"primary",size:"default",block:!0,children:"+ Compose"})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(x.default,{toggleCollapsed:P})})]})})]}),(0,y.jsx)(r.A,{xxl:19,xl:17,lg:16,children:(0,y.jsx)(s.Suspense,{fallback:(0,y.jsx)("div",{className:"spin",children:(0,y.jsx)(l.A,{})}),children:(0,y.jsxs)(i.BV,{children:[(0,y.jsx)(i.qh,{path:"inbox",element:(0,y.jsx)(f,{})}),(0,y.jsx)(i.qh,{path:"sent",element:(0,y.jsx)(v,{})}),(0,y.jsx)(i.qh,{path:"drafts",element:(0,y.jsx)(A,{})}),(0,y.jsx)(i.qh,{path:"starred",element:(0,y.jsx)(w,{})}),(0,y.jsx)(i.qh,{path:"spam",element:(0,y.jsx)(z,{})}),(0,y.jsx)(i.qh,{path:"trash",element:(0,y.jsx)(C,{})}),(0,y.jsx)(i.qh,{path:"single/:id/*",element:(0,y.jsx)(k,{})})]})})})]})})})]})}},64508:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(9950),n=a(42074),r=a(87827),l=a(55902),i=a(84962),d=a(42140),o=a(34189),c=a(78732),h=a(90556),x=a(70233),p=a(34574),m=a(58072),j=a(20133),u=a(72449),g=a(42017),b=a(44414);const y=s.memo((e=>{let{toggleCollapsed:t}=e;const[a,y]=(0,s.useState)({labels:["personal","social","promotions"],newLabel:"",addNewDisplay:!1}),{labels:f,newLabel:v,addNewDisplay:A}=a,w=e=>{e.preventDefault(),y({...a,addNewDisplay:!0})},C=e=>{e.preventDefault(),e.stopPropagation(),""!==v?y({...a,labels:[...f,v],newLabel:""}):alert("Please Give a label...")};return(0,b.jsxs)(j.EmailNav,{children:[(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./inbox",onClick:t,children:[(0,b.jsx)(i.A,{}),(0,b.jsxs)("span",{className:"nav-text",children:[(0,b.jsx)("span",{children:"Inbox"}),(0,b.jsx)("span",{className:"badge badge-primary",children:"3"})]})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./starred",onClick:t,children:[(0,b.jsx)(d.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Starred"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./sent",onClick:t,children:[(0,b.jsx)(o.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Sent"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./drafts",onClick:t,children:[(0,b.jsx)(h.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Drafts"})}),(0,b.jsx)("span",{className:"badge badge-primary",children:"12"})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./spam",onClick:t,children:[(0,b.jsx)(x.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Spam"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(n.k2,{to:"./trash",onClick:t,children:[(0,b.jsx)(p.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Trash"})})]})})]}),(0,b.jsxs)("div",{className:"nav-labels",children:[(0,b.jsx)("p",{children:"Labels"}),(0,b.jsxs)("ul",{children:[f.map((e=>(0,b.jsx)("li",{children:(0,b.jsxs)(n.N_,{to:"#",children:[(0,b.jsx)(m.A,{})," ",e]})},e))),(0,b.jsxs)("li",{className:"add-label-btn",onKeyPress:()=>{},onClick:w,role:"menuitem",children:[(0,b.jsxs)(n.k2,{onClick:w,to:"./newLabels",children:[(0,b.jsx)(c.A,{})," Add New Label"]}),A&&(0,b.jsx)("div",{className:"add-label",children:(0,b.jsxs)(r.A,{onSubmit:C,children:[(0,b.jsx)(g.default,{label:3,children:"Add New Label"}),(0,b.jsx)(l.A,{onChange:e=>{y({...a,newLabel:e.target.value})},value:v,name:v,type:"text",placeholder:"Enter label name"}),(0,b.jsxs)("div",{className:"btn-group",children:[(0,b.jsx)(u.Button,{size:"default",onClick:C,type:"primary",children:"Add Label"}),(0,b.jsx)(u.Button,{onClick:e=>{e.preventDefault(),e.stopPropagation(),y({...a,addNewDisplay:!1})},type:"default",children:"Cancel"})]})]})})]})]})]})]})}))},90340:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9950),n=a(73878),r=a(87094),l=a(41988),i=a(90650),d=a(32212),o=a(42074),c=a(8603),h=a(67482),x=a(57687),p=a(81883),m=a(29355),j=a(44414);const u=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2525)]).then(a.bind(a,34672))));const g=function(){const e=(0,n.wA)(),{gallery:t,isLoading:a}=(0,n.d4)((e=>({gallery:e.gallery.data,isLoading:e.gallery.loading}))),[g,b]=(0,s.useState)({activeClass:""}),y=t=>{e((0,p.galleryFilter)("category",t)),b({...g,activeClass:t})};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.PageHeader,{title:"Gallery",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Gallery"}]}),(0,j.jsx)(h.Main,{children:(0,j.jsxs)(r.A,{gutter:25,children:[(0,j.jsx)(l.A,{xs:24,children:(0,j.jsx)(c.GalleryNav,{children:(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(o.N_,{className:""===g.activeClass?"active":"deactivate",onClick:()=>y(""),to:"#",children:"All"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.N_,{className:"webDesign"===g.activeClass?"active":"deactivate",onClick:()=>y("webDesign"),to:"#",children:"Web Design"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.N_,{className:"uiDesign"===g.activeClass?"active":"deactivate",onClick:()=>y("uiDesign"),to:"#",children:"UI Design"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.N_,{className:"wireframe"===g.activeClass?"active":"deactivate",onClick:()=>y("wireframe"),to:"#",children:"Wireframe"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.N_,{className:"Presentation"===g.activeClass?"active":"deactivate",onClick:()=>y("Presentation"),to:"#",children:"Presentation"})})]})})}),a?(0,j.jsx)(l.A,{xs:24,children:(0,j.jsx)("div",{className:"spin",children:(0,j.jsx)(i.A,{})})}):t.map((e=>{const{id:t}=e;return(0,j.jsx)(l.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,j.jsx)(s.Suspense,{fallback:(0,j.jsx)(m.Cards,{headless:!0,children:(0,j.jsx)(d.A,{active:!0})}),children:(0,j.jsx)(u,{item:e})})},t)}))]})})]})}},71001:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(28429),d=a(12144),o=a(57687),c=a(67482),h=a(29355),x=a(44414);const p=(0,s.lazy)((()=>a.e(2681).then(a.bind(a,12681)))),m=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,23035)))),j=(0,s.lazy)((()=>a.e(3393).then(a.bind(a,73393)))),u=(0,s.lazy)((()=>a.e(6561).then(a.bind(a,36561)))),g=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,26201)))),b=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,96257))));const y=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.PageHeader,{title:"Wizards",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Wizards"}]}),(0,x.jsx)(c.Main,{children:(0,x.jsx)(n.A,{gutter:25,children:(0,x.jsx)(r.A,{sm:24,xs:24,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(h.Cards,{headless:!0,children:(0,x.jsx)(l.A,{paragraph:{rows:20},active:!0})}),children:(0,x.jsx)(d.WizardBlock,{children:(0,x.jsx)(h.Cards,{headless:!0,children:(0,x.jsx)(n.A,{justify:"center",children:(0,x.jsx)(r.A,{xxl:20,xs:24,children:(0,x.jsxs)(i.BV,{children:[(0,x.jsx)(i.qh,{path:"one",element:(0,x.jsx)(p,{})}),(0,x.jsx)(i.qh,{path:"two",element:(0,x.jsx)(m,{})}),(0,x.jsx)(i.qh,{path:"three",element:(0,x.jsx)(j,{})}),(0,x.jsx)(i.qh,{path:"four",element:(0,x.jsx)(u,{})}),(0,x.jsx)(i.qh,{path:"five",element:(0,x.jsx)(g,{})}),(0,x.jsx)(i.qh,{path:"six",element:(0,x.jsx)(b,{})})]})})})})})})})})})]})}},12681:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(9950),n=a(12144),r=a(44414);const l=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8464)]).then(a.bind(a,75521))));const i=function(){return(0,r.jsx)(n.WizardWrapper,{className:"ninjadash-wizard-page",children:(0,r.jsx)(l,{})})}},32427:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(42074),d=a(28429),o=a(84394),c=a(57687),h=a(67482),x=a(29355),p=a(44414);const m=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(5600)]).then(a.bind(a,82259)))),j=(0,s.lazy)((()=>a.e(5717).then(a.bind(a,95717)))),u=(0,s.lazy)((()=>a.e(1596).then(a.bind(a,91596)))),g=(0,s.lazy)((()=>a.e(9804).then(a.bind(a,9804)))),b=(0,s.lazy)((()=>a.e(1644).then(a.bind(a,51644)))),y=(0,s.lazy)((()=>a.e(5810).then(a.bind(a,55810))));const f=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.PageHeader,{title:"My Profile",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"My Profile"}]}),(0,p.jsx)(h.Main,{children:(0,p.jsxs)(n.A,{gutter:25,children:[(0,p.jsxs)(r.A,{xxl:6,lg:8,md:10,xs:24,children:[(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{avatar:!0,active:!0,paragraph:{rows:3}})}),children:(0,p.jsx)(m,{user:{name:"Duran Clyton",designation:"UI/UX Designer",img:"static/img/users/1.png"}})}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,p.jsx)(u,{})})]}),(0,p.jsx)(r.A,{xxl:18,lg:16,md:14,xs:24,children:(0,p.jsxs)(o.SettingWrapper,{children:[(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{active:!0})}),children:(0,p.jsxs)("div",{className:"coverWrapper",children:[(0,p.jsx)(j,{}),(0,p.jsx)("nav",{className:"profileTab-menu",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(i.k2,{to:"./overview",children:"Overview"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.k2,{to:"./timeline",children:"Timeline"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.k2,{to:"./activity",children:"Activity"})})]})})]})}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,p.jsxs)(d.BV,{children:[(0,p.jsx)(d.qh,{path:"overview",element:(0,p.jsx)(g,{})}),(0,p.jsx)(d.qh,{path:"timeline",element:(0,p.jsx)(b,{})}),(0,p.jsx)(d.qh,{path:"activity",element:(0,p.jsx)(y,{})})]})})]})})]})})]})}},55810:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(29355),d=a(44414);const o=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6247)]).then(a.bind(a,70489)))),c=(0,s.lazy)((()=>a.e(7937).then(a.bind(a,87937))));const h=function(){return(0,d.jsxs)(n.A,{gutter:25,children:[(0,d.jsx)(r.A,{md:16,xs:24,children:(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(i.Cards,{headless:!0,children:(0,d.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,d.jsx)(c,{})})}),(0,d.jsx)(r.A,{md:8,children:(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(i.Cards,{headless:!0,children:(0,d.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,d.jsx)(o,{})})})]})}},84394:(e,t,a)=>{a.r(t),a.d(t,{ActivityContents:()=>i,ProductOverviewTable:()=>d,RightAsideWrapper:()=>l,SettingWrapper:()=>r,UserBioBox:()=>n});var s=a(19335);const n=s.Ay.div`
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
    
`,r=s.Ay.div`
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
`,l=s.Ay.div`
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
`,i=s.Ay.div`
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
`,d=s.Ay.div`
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
`},51644:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(9950),n=a(87094),r=a(41988),l=a(32212),i=a(73878),d=a(29355),o=a(44414);const c=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2337)]).then(a.bind(a,70489)))),h=(0,s.lazy)((()=>a.e(6001).then(a.bind(a,46001)))),x=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2337)]).then(a.bind(a,21224))));const p=function(){const{posts:e}=(0,i.d4)((e=>({posts:e.Profile.posts})));return(0,o.jsxs)(n.A,{gutter:25,children:[(0,o.jsxs)(r.A,{lg:16,xs:24,children:[(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(d.Cards,{headless:!0,children:(0,o.jsx)(l.A,{active:!0})}),children:(0,o.jsx)(h,{})}),e.sort(((e,t)=>t.time-e.time)).map((e=>(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(d.Cards,{headless:!0,children:(0,o.jsx)(l.A,{active:!0})}),children:(0,o.jsx)(x,{...e})},e.postId)))]}),(0,o.jsx)(r.A,{lg:8,xs:24,children:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(d.Cards,{headless:!0,children:(0,o.jsx)(l.A,{active:!0,paragraph:{rows:10}})}),children:(0,o.jsx)(c,{})})})]})}},28745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(9950),n=a(73878),r=a(87094),l=a(41988),i=a(32212),d=a(78732),o=a(83587),c=a(90556),h=a(34574),x=a(42074),p=a(57687),m=a(67482),j=a(91),u=a(29355),g=a(44414);const b=function(){const{searchData:e,team:t}=(0,n.d4)((e=>({searchData:e.headerSearchData,team:e.team.data}))),[b,y]=(0,s.useState)({notData:e}),{notData:f}=b,v=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(x.N_,{to:"#",children:[(0,g.jsx)(o.A,{}),(0,g.jsx)("span",{children:"View"})]}),(0,g.jsxs)(x.N_,{to:"#",children:[(0,g.jsx)(c.A,{}),(0,g.jsx)("span",{children:"Edit"})]}),(0,g.jsxs)(x.N_,{to:"#",children:[(0,g.jsx)(h.A,{}),(0,g.jsx)("span",{children:"Delete"})]})]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.CardToolbox,{children:(0,g.jsx)(p.PageHeader,{backIcon:!1,title:"Team Members",subTitle:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{className:"title-counter",children:"274 Users"}),(0,g.jsx)(j.AutoComplete,{onSearch:t=>{const a=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));y({...b,notData:a})},dataSource:f,width:"100%",placeholder:"Search by Name",patterns:!0})]}),buttons:[(0,g.jsxs)(x.N_,{to:"/admin/users/add-user/info",className:"btn-add_new",children:[(0,g.jsx)(d.A,{})," Add New Member"]})]})}),(0,g.jsx)(m.Main,{children:(0,g.jsx)(r.A,{gutter:25,children:t.map((e=>{const t=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(5052)]).then(a.bind(a,89025)))),{id:n}=e;return(0,g.jsx)(l.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)(u.Cards,{headless:!0,children:(0,g.jsx)(i.A,{avatar:!0,active:!0})}),children:(0,g.jsx)(t,{actions:v,user:e})})},n)}))})})]})}},63806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var s=a(9950),n=a(73878),r=a(41988),l=a(32212),i=a(87094),d=a(7037),o=a(78732),c=a(10356),h=a(58072),x=a(11876),p=a(96457),m=a(42074),j=a(28429),u=a(8603),g=a(57687),b=a(67482),y=a(91),f=a(72449),v=a(29355),A=a(44414);const w=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,82259)))),C=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,60698)))),z=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,35099)))),k=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,30684))));const N=function(){const{searchData:e,users:t,userGroup:a}=(0,n.d4)((e=>({searchData:e.headerSearchData,users:e.users,userGroup:e.userGroup}))),N=".",[S,$]=(0,s.useState)({notData:e,current:0,pageSize:0,page:0}),{notData:P}=S,q=s.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(r.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(s.Suspense,{fallback:(0,A.jsx)(v.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(w,{user:e})})},t)})))),D=s.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(r.A,{xxl:12,xl:12,sm:24,xs:24,children:(0,A.jsx)(s.Suspense,{fallback:(0,A.jsx)(v.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(z,{user:e})})},t)})))),B=s.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(r.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(s.Suspense,{fallback:(0,A.jsx)(v.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(C,{user:e})})},t)})))),E=s.memo((()=>a.map((e=>{const{id:t}=e;return(0,A.jsx)(r.A,{xxl:8,md:12,sm:24,xs:24,children:(0,A.jsx)(s.Suspense,{fallback:(0,A.jsx)(v.Cards,{headless:!0,children:(0,A.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(k,{user:e})})},t)}))));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b.CardToolbox,{children:(0,A.jsx)(u.UserCarrdTop,{children:(0,A.jsx)(g.PageHeader,{ghost:!0,title:"Users Card",subTitle:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("span",{className:"title-counter",children:"274 Users "}),(0,A.jsx)(y.AutoComplete,{onSearch:t=>{const a=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));$({...S,notData:a})},dataSource:P,placeholder:"Search by Name",width:"100%",patterns:!0})]}),buttons:[(0,A.jsx)(f.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,A.jsxs)(m.N_,{to:"/admin/users/add-user/info",children:[(0,A.jsx)(o.A,{})," Add New User"]})},"1"),(0,A.jsx)(m.k2,{className:"action-btn",to:`${N}/grid`,children:(0,A.jsx)(c.A,{})},"2"),(0,A.jsx)(m.k2,{className:"action-btn",to:`${N}/list`,children:(0,A.jsx)(h.A,{})},"3"),(0,A.jsx)(m.k2,{className:"action-btn",to:`${N}/grid-style`,children:(0,A.jsx)(p.A,{})},"4"),(0,A.jsx)(m.k2,{className:"action-btn",to:`${N}/grid-group`,children:(0,A.jsx)(x.A,{})},"5")]})})}),(0,A.jsx)(b.Main,{children:(0,A.jsx)(u.UsercardWrapper,{children:(0,A.jsxs)(i.A,{gutter:25,children:[(0,A.jsxs)(j.BV,{children:[(0,A.jsx)(j.qh,{path:"grid",element:(0,A.jsx)(q,{})}),(0,A.jsx)(j.qh,{path:"list",element:(0,A.jsx)(D,{})}),(0,A.jsx)(j.qh,{path:"grid-group",element:(0,A.jsx)(E,{})}),(0,A.jsx)(j.qh,{path:"grid-style",element:(0,A.jsx)(B,{})})]}),(0,A.jsx)(r.A,{xs:24,children:(0,A.jsx)("div",{className:"user-card-pagination",children:(0,A.jsx)(d.A,{onChange:e=>{$({...S,page:e})},showSizeChanger:!0,onShowSizeChange:(e,t)=>{$({...S,current:e,pageSize:t})},defaultCurrent:6,total:500})})})]})})})]})}},47041:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9950),n=a(87094),r=a(41988),l=a(34166),i=a(57687),d=a(67482),o=a(29355),c=a(55835),h=a(7906),x=a(44414);const p=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8005)]).then(a.bind(a,48005)))),m=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(304)]).then(a.bind(a,55355)))),j=(0,s.lazy)((()=>a.e(7241).then(a.bind(a,37241)))),u=(0,s.lazy)((()=>a.e(4989).then(a.bind(a,34989))));const g=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.PageHeader,{title:"Widgets Mixed",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Widgets Mixed"}]}),(0,x.jsx)(d.Main,{children:(0,x.jsx)(l.MixedCardWrap,{children:(0,x.jsxs)(n.A,{gutter:25,children:[(0,x.jsx)(r.A,{xxl:8,xl:10,xs:24,children:(0,x.jsx)(o.Cards,{headless:!0,children:(0,x.jsx)(h.default,{subtotal:1200})})}),(0,x.jsxs)(r.A,{xxl:16,xl:14,xs:24,children:[(0,x.jsx)(p,{}),(0,x.jsx)(c.default,{})]}),(0,x.jsx)(r.A,{xxl:8,xs:24,children:(0,x.jsx)(j,{})}),(0,x.jsx)(r.A,{xxl:8,md:12,xs:24,children:(0,x.jsx)(u,{})}),(0,x.jsx)(r.A,{xxl:8,md:12,xs:24,children:(0,x.jsx)(m,{})})]})})})]})}},34166:(e,t,a)=>{a.r(t),a.d(t,{CardChartStyle:()=>n,MixedCardWrap:()=>r,OverviewCard:()=>i,SocialMediaWrapper:()=>l});var s=a(19335);const n=s.Ay.div`
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
`,r=s.Ay.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,l=s.Ay.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,i=s.Ay.div`
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
`},4909:(e,t,a)=>{a.r(t),a.d(t,{cartDelete:()=>g,cartGetData:()=>j,cartUpdateQuantity:()=>u});var s=a(72316),n=a(5213),r=a(77003);const{cartDataBegin:l,cartDataSuccess:i,cartDataErr:d,cartUpdateBegin:o,cartUpdateSuccess:c,cartUpdateErr:h,cartDeleteBegin:x,cartDeleteSuccess:p,cartDeleteErr:m}=s.default,j=()=>async e=>{try{e(l()),e(i(n))}catch(t){(0,r.handleApiError)(t,e,d)}},u=(e,t,a)=>async s=>{try{s(o());const n=a.map((a=>(a.id===e&&(a.quantity=t),a)));s(c(n))}catch(n){s(h(n))}},g=(e,t)=>async a=>{try{a(x());const s=t.filter((t=>t.id!==e));setTimeout((()=>{a(p(s))}),500)}catch(s){(0,r.handleApiError)(s,a,d)}}},81883:(e,t,a)=>{a.r(t),a.d(t,{galleryFilter:()=>d});var s=a(98638),n=a(35155);const{filterGalleryBegin:r,filterGallerySuccess:l,filterGalleryErr:i}=s.default,d=(e,t)=>async a=>{try{a(r()),setTimeout((()=>{const s=n.filter((a=>""!==t?a[e]===t:a));a(l(s))}),500)}catch(s){a(i(s))}}},16358:(e,t,a)=>{a.r(t),a.d(t,{filterByBrand:()=>b,filterByCategory:()=>y,filterByPriceRange:()=>u,filterByRating:()=>g,filterSinglePage:()=>m,sorting:()=>j,updateWishList:()=>f});var s=a(65571),n=a(44199);const{singleProductBegin:r,singleProductSuccess:l,singleProductErr:i,filterProductBegin:d,filterProductSuccess:o,filterProductErr:c,sortingProductBegin:h,sortingProductSuccess:x,sortingProductErr:p}=s.default,m=(e,t)=>async a=>{try{a(r());const s=t.filter((t=>t.id===e));a(l(s))}catch(s){a(i(s))}},j=e=>async t=>{try{t(h()),setTimeout((()=>{const a=n.sort(((t,a)=>a[e]-t[e]));t(x(a))}),100)}catch(a){t(p(a))}},u=e=>async t=>{t(d());try{const a=n.filter((t=>t.price>=e[0]&&t.price<=e[1]));t(o(a))}catch(a){t(c(a))}},g=e=>async t=>{try{t(d()),setTimeout((()=>{const a=n.filter((t=>e[0].length?e[0].includes(t.rate):n));t(o(a))}),100)}catch(a){t(c(a))}},b=e=>async t=>{try{t(d()),setTimeout((()=>{const a=n.filter((t=>e[0].length?e[0].includes(t.brand):n));t(o(a))}),100)}catch(a){t(c(a))}},y=e=>async t=>{try{t(d()),setTimeout((()=>{const a=n.filter((t=>"all"!==e?t.category===e:n));t(o(a))}),100)}catch(a){t(c(a))}},f=e=>async t=>{try{t(d()),n.map((a=>a.id===e?a.popular?a.popular=!1:a.popular=!0:t(o(n))))}catch(a){t(c(a))}}},2721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var s=a(9950),n=a(28429),r=a(44414);const l=(0,s.lazy)((()=>a.e(7900).then(a.bind(a,47900)))),i=(0,s.lazy)((()=>a.e(4287).then(a.bind(a,24287)))),d=(0,s.lazy)((()=>a.e(5218).then(a.bind(a,55218)))),o=(0,s.lazy)((()=>a.e(7681).then(a.bind(a,37681)))),c=(0,s.lazy)((()=>a.e(1808).then(a.bind(a,41808)))),h=(0,s.lazy)((()=>a.e(8188).then(a.bind(a,48188)))),x=(0,s.lazy)((()=>a.e(5389).then(a.bind(a,75389)))),p=(0,s.lazy)((()=>a.e(5424).then(a.bind(a,25424)))),m=(0,s.lazy)((()=>Promise.all([a.e(8573),a.e(6922)]).then(a.bind(a,94326)))),j=(0,s.lazy)((()=>a.e(1469).then(a.bind(a,21469)))),u=(0,s.lazy)((()=>a.e(7954).then(a.bind(a,27954)))),g=(0,s.lazy)((()=>a.e(1259).then(a.bind(a,11259)))),b=(0,s.lazy)((()=>a.e(9900).then(a.bind(a,69900)))),y=(0,s.lazy)((()=>a.e(9086).then(a.bind(a,89086)))),f=(0,s.lazy)((()=>Promise.all([a.e(4380),a.e(6209)]).then(a.bind(a,36209)))),v=(0,s.lazy)((()=>a.e(5423).then(a.bind(a,55423)))),A=(0,s.lazy)((()=>a.e(3693).then(a.bind(a,93693)))),w=(0,s.lazy)((()=>a.e(7553).then(a.bind(a,57553)))),C=(0,s.lazy)((()=>a.e(1663).then(a.bind(a,61663)))),z=(0,s.lazy)((()=>a.e(3827).then(a.bind(a,13827)))),k=(0,s.lazy)((()=>Promise.all([a.e(3780),a.e(1945)]).then(a.bind(a,71945)))),N=(0,s.lazy)((()=>a.e(351).then(a.bind(a,20351)))),S=(0,s.lazy)((()=>Promise.all([a.e(656),a.e(7777)]).then(a.bind(a,21993)))),$=(0,s.lazy)((()=>a.e(5480).then(a.bind(a,75480)))),P=(0,s.lazy)((()=>Promise.all([a.e(8623),a.e(9214)]).then(a.bind(a,9214)))),q=(0,s.lazy)((()=>a.e(5843).then(a.bind(a,55843)))),D=(0,s.lazy)((()=>a.e(2511).then(a.bind(a,32511)))),B=(0,s.lazy)((()=>a.e(8593).then(a.bind(a,28593)))),E=(0,s.lazy)((()=>a.e(9496).then(a.bind(a,29496)))),T=(0,s.lazy)((()=>a.e(8689).then(a.bind(a,48689)))),W=(0,s.lazy)((()=>Promise.all([a.e(5139),a.e(6548)]).then(a.bind(a,56548)))),M=(0,s.lazy)((()=>Promise.all([a.e(8573),a.e(3623)]).then(a.bind(a,16122)))),I=(0,s.lazy)((()=>a.e(9876).then(a.bind(a,59876)))),O=(0,s.lazy)((()=>a.e(9875).then(a.bind(a,29875)))),_=(0,s.lazy)((()=>Promise.all([a.e(777),a.e(680)]).then(a.bind(a,680)))),U=(0,s.lazy)((()=>a.e(8562).then(a.bind(a,38562)))),G=(0,s.lazy)((()=>Promise.all([a.e(8573),a.e(5139),a.e(9131)]).then(a.bind(a,44646)))),H=(0,s.lazy)((()=>a.e(7980).then(a.bind(a,37980)))),L=(0,s.lazy)((()=>a.e(7215).then(a.bind(a,97215)))),F=(0,s.lazy)((()=>a.e(8180).then(a.bind(a,18180)))),R=(0,s.lazy)((()=>a.e(1421).then(a.bind(a,11421)))),V=(0,s.lazy)((()=>a.e(5821).then(a.bind(a,65821)))),K=(0,s.lazy)((()=>a.e(9181).then(a.bind(a,49181)))),Q=(0,s.lazy)((()=>a.e(300).then(a.bind(a,20300)))),X=(0,s.lazy)((()=>a.e(382).then(a.bind(a,90382)))),Z=(0,s.lazy)((()=>a.e(8023).then(a.bind(a,8023)))),J=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1005)]).then(a.bind(a,90984)))),Y=(0,s.lazy)((()=>a.e(3795).then(a.bind(a,93795)))),ee=(0,s.lazy)((()=>a.e(1874).then(a.bind(a,21874))));const te=function(){return(0,r.jsxs)(n.BV,{children:[(0,r.jsx)(n.qh,{path:"button",element:(0,r.jsx)(l,{})}),(0,r.jsx)(n.qh,{path:"alerts",element:(0,r.jsx)(i,{})}),(0,r.jsx)(n.qh,{path:"modals",element:(0,r.jsx)(d,{})}),(0,r.jsx)(n.qh,{path:"cards",element:(0,r.jsx)(o,{})}),(0,r.jsx)(n.qh,{path:"grid",element:(0,r.jsx)(c,{})}),(0,r.jsx)(n.qh,{path:"tabs",element:(0,r.jsx)(h,{})}),(0,r.jsx)(n.qh,{path:"breadcrumb",element:(0,r.jsx)(x,{})}),(0,r.jsx)(n.qh,{path:"list",element:(0,r.jsx)(H,{})}),(0,r.jsx)(n.qh,{path:"pagination",element:(0,r.jsx)(p,{})}),(0,r.jsx)(n.qh,{path:"page-headers",element:(0,r.jsx)(m,{})}),(0,r.jsx)(n.qh,{path:"steps",element:(0,r.jsx)(j,{})}),(0,r.jsx)(n.qh,{path:"comments",element:(0,r.jsx)(u,{})}),(0,r.jsx)(n.qh,{path:"empty",element:(0,r.jsx)(g,{})}),(0,r.jsx)(n.qh,{path:"statistic",element:(0,r.jsx)(b,{})}),(0,r.jsx)(n.qh,{path:"rate",element:(0,r.jsx)(y,{})}),(0,r.jsx)(n.qh,{path:"slider",element:(0,r.jsx)(f,{})}),(0,r.jsx)(n.qh,{path:"progress",element:(0,r.jsx)(v,{})}),(0,r.jsx)(n.qh,{path:"tags",element:(0,r.jsx)(A,{})}),(0,r.jsx)(n.qh,{path:"popover",element:(0,r.jsx)(C,{})}),(0,r.jsx)(n.qh,{path:"timeline",element:(0,r.jsx)(z,{})}),(0,r.jsx)(n.qh,{path:"drawer",element:(0,r.jsx)(k,{})}),(0,r.jsx)(n.qh,{path:"notification",element:(0,r.jsx)(N,{})}),(0,r.jsx)(n.qh,{path:"spiner",element:(0,r.jsx)($,{})}),(0,r.jsx)(n.qh,{path:"carousel",element:(0,r.jsx)(P,{})}),(0,r.jsx)(n.qh,{path:"collapse",element:(0,r.jsx)(q,{})}),(0,r.jsx)(n.qh,{path:"auto-complete",element:(0,r.jsx)(E,{})}),(0,r.jsx)(n.qh,{path:"checkbox",element:(0,r.jsx)(T,{})}),(0,r.jsx)(n.qh,{path:"cascader",element:(0,r.jsx)(W,{})}),(0,r.jsx)(n.qh,{path:"date-picker",element:(0,r.jsx)(M,{})}),(0,r.jsx)(n.qh,{path:"switch",element:(0,r.jsx)(I,{})}),(0,r.jsx)(n.qh,{path:"select",element:(0,r.jsx)(F,{})}),(0,r.jsx)(n.qh,{path:"timePicker",element:(0,r.jsx)(O,{})}),(0,r.jsx)(n.qh,{path:"tree-select",element:(0,r.jsx)(_,{})}),(0,r.jsx)(n.qh,{path:"calendar",element:(0,r.jsx)(U,{})}),(0,r.jsx)(n.qh,{path:"form",element:(0,r.jsx)(G,{})}),(0,r.jsx)(n.qh,{path:"dropdown",element:(0,r.jsx)(w,{})}),(0,r.jsx)(n.qh,{path:"result",element:(0,r.jsx)(S,{})}),(0,r.jsx)(n.qh,{path:"avatar",element:(0,r.jsx)(D,{})}),(0,r.jsx)(n.qh,{path:"badge",element:(0,r.jsx)(B,{})}),(0,r.jsx)(n.qh,{path:"radio",element:(0,r.jsx)(R,{})}),(0,r.jsx)(n.qh,{path:"skeleton",element:(0,r.jsx)(L,{})}),(0,r.jsx)(n.qh,{path:"input",element:(0,r.jsx)(V,{})}),(0,r.jsx)(n.qh,{path:"upload",element:(0,r.jsx)(K,{})}),(0,r.jsx)(n.qh,{path:"message",element:(0,r.jsx)(Q,{})}),(0,r.jsx)(n.qh,{path:"confirm",element:(0,r.jsx)(X,{})}),(0,r.jsx)(n.qh,{path:"menu",element:(0,r.jsx)(Z,{})}),(0,r.jsx)(n.qh,{path:"drag",element:(0,r.jsx)(J,{})}),(0,r.jsx)(n.qh,{exact:!0,path:"base",element:(0,r.jsx)(Y,{})}),(0,r.jsx)(n.qh,{path:"*",element:(0,r.jsx)(ee,{})})]})}},36648:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(9950),n=a(28429),r=a(44414);const l=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2861)]).then(a.bind(a,26294)))),i=(0,s.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2861)]).then(a.bind(a,38238)))),d=(0,s.lazy)((()=>a.e(1874).then(a.bind(a,21874))));const o=function(){return(0,r.jsxs)(n.BV,{children:[(0,r.jsx)(n.qh,{path:"basic",element:(0,r.jsx)(l,{})}),(0,r.jsx)(n.qh,{path:"dataTable",element:(0,r.jsx)(i,{})}),(0,r.jsx)(n.qh,{path:"*",element:(0,r.jsx)(d,{})})]})}},85544:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAW9JREFUOE+tUzFSwlAQfRuGCXRpoTGeQDiB0JlKPIHxBnACuQHcwHADrKBDb+ARsEHL0EAchqzvZwADMWMc3SbzN/vf333vrWBaGwvkGrtQIITGNxBrIEBjny/yVegc9ropMq0T5/9CNW5/C6qKkQhuU90vAQ2gaIjI5VdeHwFxOdHFIZcLCgQs9A+F1qaJ8maOdhhiUg/Mg6r6DO+tlaEvD/SUDL1aCCa1J3bb5z+XfHdhr1r4qPrUY5Cuzx8f2ksXm0J47wRlsFOUNkNsS46INcs0ULRTc5HKElQcOqOH0jZEXJ6RIudPoAmwxneoRGNE1fEOzKVwZ0XH73L84XExRvAWvhGGXvQT0WaOwwde0sC5nGZH2ilt+IS6RnXjbwKcA5ZPN9z/bKmUT7kZSyrtIqp0KMxDsnH2imCMxGK1eaFOefHYp5kz1xEwvHZIk1uI09Pxf3NOON1vyIETM67GHRp8mF6/IsAk+RWVdeMT3eLKgf6IB/oAAAAASUVORK5CYII="},87945:(e,t,a)=>{e.exports=a.p+"static/media/open-message.29a48d087bdf34e15ac1.png"},5213:e=>{e.exports=JSON.parse('[{"id":"1","name":"Montes Scelerisque","size":"Large","color":"Brown","price":"248.66","quantity":"1","img":"static/img/products/1.png","total":"248.66"},{"id":"2","name":"Leo Sodales Varius","size":"Small","color":"Golden","price":"240","quantity":"1","img":"static/img/products/2.png","total":"240"}]')}}]);