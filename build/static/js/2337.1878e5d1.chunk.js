"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2337,5102,6632,6648,7037,4395,1128,5776,6770,1448,340,1001,3806,8745,7041,7906,2681,5810,8724],{91:(e,t,a)=>{a.r(t),a.d(t,{AutoComplete:()=>h});var n=a(60767),r=a(55902),i=a(48538),s=a(9950),l=a(73878),o=a(3783),d=a(44414);const c=()=>{},x=(e,t)=>({value:e,label:(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),h=s.memo((e=>{const{rtl:t}=(0,l.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:a,patterns:s,patternButtons:h,width:m,onSearch:p,options:u,placeholder:j}=e,g=(null===u||void 0===u?void 0:u.length)>0&&u.map((e=>{const{title:t,count:a}=e;return{label:t,options:[x(t,(0,d.jsxs)("span",{className:"certain-search-item-count",children:[a," people"]}))]}})),b=e=>{p(e)};return a?(0,d.jsx)(o.AutoCompleteStyled,{options:u,style:{width:m},onSelect:c,onSearch:b,children:a}):s?(0,d.jsx)(o.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:m},options:g,placeholder:j,onSearch:b,children:(0,d.jsx)(r.A,{suffix:h?(0,d.jsx)(i.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,d.jsx)(n.A,{})}):(0,d.jsx)(n.A,{})})}):(0,d.jsx)(o.AutoCompleteStyled,{options:u,style:{width:m},onSelect:c,onSearch:b,placeholder:j})}));h.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,a)=>{a.r(t),a.d(t,{AutoCompleteStyled:()=>y});var n=a(58168),r=a(82284),i=a(5544),s=a(48738),l=a.n(s),o=a(50604),d=a(15207),c=a(9950),x=a(5741),h=a(99674),m=a(39156),p=h.A.Option;function u(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var j=function(e,t){var a,s=e.prefixCls,j=e.className,g=e.popupClassName,b=e.dropdownClassName,y=e.children,f=e.dataSource,w=(0,o.A)(y);if(1===w.length&&(0,m.zO)(w[0])&&!u(w[0])){var A=(0,i.A)(w,1);a=A[0]}var v,C=a?function(){return a}:void 0;return v=w.length&&u(w[0])?y:f?f.map((function(e){if((0,m.zO)(e))return e;switch((0,r.A)(e)){case"string":return c.createElement(p,{key:e,value:e},e);case"object":var t=e.value;return c.createElement(p,{key:t,value:t},e.text);default:return}})):[],c.createElement(x.TG,null,(function(a){var r=(0,a.getPrefixCls)("select",s);return c.createElement(h.A,(0,n.A)({ref:t},(0,d.A)(e,["dataSource"]),{prefixCls:r,popupClassName:g||b,className:l()("".concat(r,"-auto-complete"),j),mode:h.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:C}),v)}))},g=c.forwardRef(j);g.Option=p;const b=g;const y=(0,a(19335).Ay)(b)`
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
`},55835:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(9950);var n=a(28423),r=a(72449),i=a(44414);const s=function(){return(0,i.jsxs)(n.NewsletterStyle,{children:[(0,i.jsx)("figcaption",{children:(0,i.jsxs)("form",{action:"",children:[(0,i.jsx)("h4",{children:"Subscribe To Our Newsletter"}),(0,i.jsx)("p",{children:"We notify you once any post is published"}),(0,i.jsx)(r.Button,{size:"small",type:"primary",children:"Subscribe"})]})}),(0,i.jsx)("img",{src:a(87945),alt:""})]})}},74395:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(29355),o=a(18450),d=a(67482),c=a(59537),x=a(66260),h=a(44414);const m=(0,n.lazy)((()=>Promise.all([a.e(4360),a.e(1976)]).then(a.bind(a,71976)))),p=(0,n.lazy)((()=>Promise.all([a.e(6279),a.e(3917),a.e(8316)]).then(a.bind(a,18316)))),u=(0,n.lazy)((()=>a.e(693).then(a.bind(a,23074)))),j=(0,n.lazy)((()=>a.e(7175).then(a.bind(a,27175)))),g=(0,n.lazy)((()=>a.e(9195).then(a.bind(a,49195)))),b=(0,n.lazy)((()=>a.e(5303).then(a.bind(a,55303)))),y=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(3917),a.e(3548),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8370)]).then(a.bind(a,44234)))),{BlogCardData:f}=x;const w=function(){return(0,h.jsx)(d.Main,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(c.PageHeaderBanner,{type:"corporate",title:"Hey Danial! Welcome to the Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available,\r\nut the majority have suffered passages of Lorem Ipsum available alteration in some form"})})}),(0,h.jsx)(i.A,{xxl:16,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(m,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(p,{})})}),(0,h.jsx)(i.A,{xxl:12,xl:14,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(u,{})})}),(0,h.jsx)(i.A,{xl:12,lg:24,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(j,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(g,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(b,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,h.jsx)(i.A,{xxl:8,sm:12,xs:24,children:(0,h.jsx)(o.default,{item:e})},e.id)))]})})}},21128:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(29355),o=a(18450),d=a(67482),c=a(59537),x=a(66260),h=a(44414);const m=(0,n.lazy)((()=>Promise.all([a.e(4360),a.e(1976)]).then(a.bind(a,71976)))),p=(0,n.lazy)((()=>Promise.all([a.e(6279),a.e(3917),a.e(8316)]).then(a.bind(a,18316)))),u=(0,n.lazy)((()=>a.e(693).then(a.bind(a,23074)))),j=(0,n.lazy)((()=>a.e(7175).then(a.bind(a,27175)))),g=(0,n.lazy)((()=>a.e(9195).then(a.bind(a,49195)))),b=(0,n.lazy)((()=>a.e(5303).then(a.bind(a,55303)))),y=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(3917),a.e(3548),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(4901)]).then(a.bind(a,44234)))),{BlogCardData:f}=x;const w=function(){return(0,h.jsx)(d.Main,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(c.PageHeaderBanner,{title:"Welcome To Demo Dashboard",subtitle:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"})})}),(0,h.jsx)(i.A,{xxl:16,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(m,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(p,{})})}),(0,h.jsx)(i.A,{xxl:12,xl:14,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(u,{})})}),(0,h.jsx)(i.A,{xl:12,lg:24,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(j,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(g,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,lg:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(b,{})})}),(0,h.jsx)(i.A,{xxl:8,xl:12,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(l.Cards,{headless:!0,children:(0,h.jsx)(s.A,{active:!0})}),children:(0,h.jsx)(y,{})})}),f.slice(0,3).map(((e,t)=>t<=3&&(0,h.jsx)(i.A,{xxl:8,sm:12,xs:24,children:(0,h.jsx)(o.default,{item:e})},e.id)))]})})}},26770:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(28429),o=a(73878),d=a(57687),c=a(67482),x=a(29355),h=a(4909),m=a(44414);const p=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8439)]).then(a.bind(a,73802)))),u=(0,n.lazy)((()=>Promise.all([a.e(4503),a.e(7906)]).then(a.bind(a,7906))));const j=function(){const e=(0,o.wA)(),{cartData:t}=(0,o.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,n.useEffect)((()=>{h.cartGetData&&e((0,h.cartGetData)())}),[e]);let a=0;return null!==t&&t.map((e=>{const{quantity:t,price:n}=e;return a+=parseInt(t,10)*parseInt(n,10),a})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,m.jsx)(c.Main,{children:(0,m.jsx)("div",{className:"cartWraper",children:(0,m.jsx)(r.A,{gutter:15,children:(0,m.jsx)(i.A,{md:24,children:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsxs)(r.A,{gutter:30,children:[(0,m.jsx)(i.A,{xxl:17,xs:24,children:(0,m.jsx)(n.Suspense,{fallback:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsx)(s.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(l.BV,{children:(0,m.jsx)(l.qh,{index:!0,element:(0,m.jsx)(p,{})})})})}),(0,m.jsx)(i.A,{xxl:7,xs:24,children:(0,m.jsx)(n.Suspense,{fallback:(0,m.jsx)(x.Cards,{headless:!0,children:(0,m.jsx)(s.A,{paragraph:{rows:10},active:!0})}),children:(0,m.jsx)(u,{subtotal:a,checkout:!1})})})]})})})})})})]})}},61448:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(28429),o=a(73878),d=a(57687),c=a(67482),x=a(29355),h=a(4909),m=a(12144),p=a(44414);const u=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(4421)]).then(a.bind(a,75521)))),j=(0,n.lazy)((()=>Promise.all([a.e(4503),a.e(7906)]).then(a.bind(a,7906))));const g=function(){const e=(0,o.wA)(),{cartData:t}=(0,o.d4)((e=>({cartData:e.cart.data,rtl:e.ChangeLayoutMode.rtlData})));(0,n.useEffect)((()=>{h.cartGetData&&e((0,h.cartGetData)())}),[e]);let a=0;return null!==t&&t.map((e=>{const{quantity:t,price:n}=e;return a+=parseInt(t,10)*parseInt(n,10),a})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.PageHeader,{title:"Shopping Cart",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Shopping Cart"}]}),(0,p.jsx)(c.Main,{children:(0,p.jsx)("div",{className:"checkoutWraper",children:(0,p.jsx)(r.A,{gutter:15,children:(0,p.jsx)(i.A,{md:24,children:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsxs)(r.A,{gutter:30,children:[(0,p.jsx)(i.A,{xxl:17,xs:24,children:(0,p.jsx)(m.WizardWrapper,{children:(0,p.jsx)(n.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(s.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(l.BV,{children:(0,p.jsx)(l.qh,{index:!0,element:(0,p.jsx)(u,{})})})})})}),(0,p.jsx)(i.A,{xxl:7,xs:24,children:(0,p.jsx)(n.Suspense,{fallback:(0,p.jsx)(x.Cards,{headless:!0,children:(0,p.jsx)(s.A,{paragraph:{rows:10},active:!0})}),children:(0,p.jsx)(j,{subtotal:a,checkout:!0})})})]})})})})})})]})}},7906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(9950),r=a(87827),i=a(99674),s=a(55902),l=a(94999),o=a(37782),d=a(42074),c=a(73878),x=a(34503),h=a(29355),m=a(42017),p=a(72449),u=a(4909),j=a(44414);const g=function(e){let{subtotal:t,checkout:g}=e;const b=(0,c.wA)(),{rtl:y}=(0,c.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),[f]=r.A.useForm(),[w,A]=(0,n.useState)({coupon:0,promo:0,current:0});(0,n.useEffect)((()=>{u.cartGetData&&b((0,u.cartGetData)())}),[b]);const{Option:v}=i.A;return(0,j.jsx)(h.Cards,{bodyStyle:{borderRadius:"20px"},className:"ninjadash-order-summery",headless:!0,children:(0,j.jsxs)(x.OrderSummary,{children:[(0,j.jsx)(m.default,{className:"summary-table-title",as:"h4",children:"Order Summary"}),(0,j.jsx)(h.Cards,{bodyStyle:{borderRadius:"10px"},headless:!0,children:(0,j.jsxs)("div",{className:"order-summary-inner",children:[(0,j.jsxs)("ul",{className:"summary-list",children:[(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"summary-list-title",children:"Subtotal :"}),(0,j.jsx)("span",{className:"summary-list-text",children:`$${t}`})]}),(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"summary-list-title",children:"Discount :"}),(0,j.jsx)("span",{className:"summary-list-text",children:"$-20"})]}),(0,j.jsxs)("li",{children:[(0,j.jsx)("span",{className:"summary-list-title",children:"Shipping Charge :"}),(0,j.jsx)("span",{className:"summary-list-text",children:"$30"})]})]}),(0,j.jsxs)(r.A,{form:f,name:"promo",onFinish:e=>{A({...w,promo:e})},children:[(0,j.jsx)(r.A.Item,{name:"couponType",initialValue:"",label:"",children:(0,j.jsxs)(i.A,{style:{width:"100%"},children:[(0,j.jsxs)(v,{value:"",children:[(0,j.jsx)("img",{src:a(85544),alt:""})," Select Coupon"]}),(0,j.jsxs)(v,{value:"one",children:[(0,j.jsx)("img",{src:a(85544),alt:""})," Coupon one"]}),(0,j.jsxs)(v,{value:"tow",children:[(0,j.jsx)("img",{src:a(85544),alt:""})," Coupon tow"]})]})}),(0,j.jsxs)("div",{className:"promo-apply-form",children:[(0,j.jsx)(r.A.Item,{name:"promoCode",label:"Promo Code",children:(0,j.jsx)(s.A,{placeholder:"Promo Code"})}),(0,j.jsx)(r.A.Item,{children:(0,j.jsx)(p.Button,{htmlType:"submit",size:"default",type:"success",outlined:!0,children:"Apply"})})]})]}),(0,j.jsxs)(m.default,{className:"summary-total",as:"h4",children:[(0,j.jsx)("span",{className:"summary-total-label",children:"Total : "}),(0,j.jsx)("span",{className:"summary-total-amount",children:"$"+(t+30-20)})]}),!g&&(0,j.jsx)(p.Button,{className:"btn-proceed",type:"secondary",size:"large",children:(0,j.jsxs)(d.N_,{to:"/admin/ecommerce/checkout",children:["Proceed To Checkout",y?(0,j.jsx)(l.A,{}):(0,j.jsx)(o.A,{})]})}),3===w.current&&(0,j.jsx)(p.Button,{onClick:()=>{document.querySelectorAll("button span").forEach((e=>{"Done"===e.innerHTML&&e.click()}))},className:"btn-proceed",type:"secondary",size:"large",children:(0,j.jsx)(d.N_,{to:"#",children:"Place Order"})})]})})]})})}},75776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(9950),r=a(73878),i=a(87094),s=a(41988),l=a(32212),o=a(24893),d=a(90650),c=a(42074),x=a(28429),h=a(10356),m=a(58072),p=a(57687),u=a(67482),j=a(91),g=a(34503),b=a(16358),y=a(29355),f=a(44414);const w=(0,n.lazy)((()=>Promise.all([a.e(4380),a.e(8719)]).then(a.bind(a,58719)))),A=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(3149)]).then(a.bind(a,10742)))),v=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(3149)]).then(a.bind(a,36550))));const C=function(){const e=(0,r.wA)(),t=(0,r.d4)((e=>e.headerSearchData)),[a,C]=(0,n.useState)({notData:t,active:"active"}),{notData:k}=a;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.PageHeader,{title:"Shop",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"products"}]}),(0,f.jsx)(u.Main,{children:(0,f.jsxs)(i.A,{gutter:30,children:[(0,f.jsx)(s.A,{className:"product-sidebar-col",xxl:5,xl:7,lg:7,md:10,xs:24,children:(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(y.Cards,{headless:!0,children:(0,f.jsx)(l.A,{paragraph:{rows:22},active:!0})}),children:(0,f.jsx)(w,{})})}),(0,f.jsxs)(s.A,{className:"product-content-col",xxl:19,lg:17,md:14,xs:24,children:[(0,f.jsx)(g.TopToolBox,{children:(0,f.jsxs)(i.A,{gutter:0,children:[(0,f.jsx)(s.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)(j.AutoComplete,{onSearch:e=>{const n=t.filter((t=>t.title.toUpperCase().startsWith(e.toUpperCase())));C({...a,notData:n})},dataSource:k,placeholder:"Search",width:"100%",patterns:!0})}),(0,f.jsx)(s.A,{xxl:7,lg:12,xs:24,children:(0,f.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),(0,f.jsx)(s.A,{xxl:10,xs:24,children:(0,f.jsxs)("div",{className:"product-list-action d-flex justify-content-between align-items-center",children:[(0,f.jsxs)("div",{className:"product-list-action__tab",children:[(0,f.jsx)("span",{className:"toolbox-menu-title",children:"Sort by:"}),(0,f.jsxs)(o.Ay.Group,{onChange:t=>{e((0,b.sorting)(t.target.value))},defaultValue:"rate",children:[(0,f.jsx)(o.Ay.Button,{value:"rate",children:"Top Rated"}),(0,f.jsx)(o.Ay.Button,{value:"popular",children:"Popular"}),(0,f.jsx)(o.Ay.Button,{value:"time",children:"Newest"}),(0,f.jsx)(o.Ay.Button,{value:"price",children:"Price"})]})]}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,f.jsxs)("div",{className:"product-list-action__viewmode",children:[(0,f.jsx)(c.k2,{to:"./grid",children:(0,f.jsx)(h.A,{})}),(0,f.jsx)(c.k2,{to:"./list",children:(0,f.jsx)(m.A,{})})]})]})})]})}),(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)("div",{className:"spin d-flex align-center-v",children:(0,f.jsx)(d.A,{})}),children:(0,f.jsxs)(x.BV,{children:[(0,f.jsx)(x.qh,{index:!0,element:(0,f.jsx)(A,{})}),(0,f.jsx)(x.qh,{path:"grid",element:(0,f.jsx)(A,{})}),(0,f.jsx)(x.qh,{path:"list",element:(0,f.jsx)(v,{})})]})})]})]})})]})}},51186:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(9950),r=a(87094),i=a(41988),s=a(90650),l=a(28429),o=a(78732),d=a(67128),c=a(72777),x=a(15408),h=a(64508),m=a(39644),p=a(20133),u=a(57687),j=a(29355),g=a(67482),b=a(72449),y=a(44414);const f=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,6004)))),w=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,2336)))),A=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,24381)))),v=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,41059)))),C=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,95834)))),k=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(4891)]).then(a.bind(a,10107)))),z=(0,n.lazy)((()=>a.e(7633).then(a.bind(a,27633))));const $=function(){const[e,t]=(0,n.useState)(!1),[a,$]=(0,n.useState)({responsive:0,collapsed:!1}),{responsive:S,collapsed:N}=a;(0,n.useLayoutEffect)((()=>{function e(){const e=window.innerWidth;$({responsive:e})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const P=()=>{$({...a,collapsed:!N})},_=()=>{t(!e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.PageHeader,{title:"Dashboard",routes:[{path:"/admin",breadcrumbName:"Email"},{path:"",breadcrumbName:"Email"}]}),e&&(0,y.jsx)(m.default,{close:()=>{t(!1)}}),(0,y.jsx)(g.Main,{children:(0,y.jsx)(p.EmailWrapper,{children:(0,y.jsxs)(r.A,{gutter:25,children:[(0,y.jsxs)(i.A,{className:"trigger-col",xxl:5,xl:7,lg:8,xs:24,children:[S<=991&&(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger",style:{marginTop:0},onClick:P,children:N?(0,y.jsx)(c.A,{}):(0,y.jsx)(x.A,{})}),S>991?(0,y.jsx)("div",{className:"mail-sideabr",children:(0,y.jsxs)(j.Cards,{headless:!0,children:[(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsxs)(b.Button,{onClick:_,shape:"round",type:"primary",size:"default",block:!0,children:[(0,y.jsx)(o.A,{})," Compose"]})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(h.default,{})})]})}):(0,y.jsx)(p.MailSideBar,{className:N?"mail-sideabr show":"mail-sideabr hide",children:(0,y.jsxs)(j.Cards,{headless:!0,children:[(0,y.jsx)(b.Button,{type:"link",className:"mail-sidebar-trigger trigger-close",style:{marginTop:0},onClick:P,children:(0,y.jsx)(d.A,{})}),(0,y.jsx)("div",{className:"mail-sidebar-top",children:(0,y.jsx)(b.Button,{onClick:_,shape:"round",type:"primary",size:"default",block:!0,children:"+ Compose"})}),(0,y.jsx)("div",{className:"mail-sidebar-bottom",children:(0,y.jsx)(h.default,{toggleCollapsed:P})})]})})]}),(0,y.jsx)(i.A,{xxl:19,xl:17,lg:16,children:(0,y.jsx)(n.Suspense,{fallback:(0,y.jsx)("div",{className:"spin",children:(0,y.jsx)(s.A,{})}),children:(0,y.jsxs)(l.BV,{children:[(0,y.jsx)(l.qh,{path:"inbox",element:(0,y.jsx)(f,{})}),(0,y.jsx)(l.qh,{path:"sent",element:(0,y.jsx)(w,{})}),(0,y.jsx)(l.qh,{path:"drafts",element:(0,y.jsx)(A,{})}),(0,y.jsx)(l.qh,{path:"starred",element:(0,y.jsx)(v,{})}),(0,y.jsx)(l.qh,{path:"spam",element:(0,y.jsx)(k,{})}),(0,y.jsx)(l.qh,{path:"trash",element:(0,y.jsx)(C,{})}),(0,y.jsx)(l.qh,{path:"single/:id/*",element:(0,y.jsx)(z,{})})]})})})]})})})]})}},64508:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(9950),r=a(42074),i=a(87827),s=a(55902),l=a(84962),o=a(42140),d=a(34189),c=a(78732),x=a(90556),h=a(70233),m=a(34574),p=a(58072),u=a(20133),j=a(72449),g=a(42017),b=a(44414);const y=n.memo((e=>{let{toggleCollapsed:t}=e;const[a,y]=(0,n.useState)({labels:["personal","social","promotions"],newLabel:"",addNewDisplay:!1}),{labels:f,newLabel:w,addNewDisplay:A}=a,v=e=>{e.preventDefault(),y({...a,addNewDisplay:!0})},C=e=>{e.preventDefault(),e.stopPropagation(),""!==w?y({...a,labels:[...f,w],newLabel:""}):alert("Please Give a label...")};return(0,b.jsxs)(u.EmailNav,{children:[(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./inbox",onClick:t,children:[(0,b.jsx)(l.A,{}),(0,b.jsxs)("span",{className:"nav-text",children:[(0,b.jsx)("span",{children:"Inbox"}),(0,b.jsx)("span",{className:"badge badge-primary",children:"3"})]})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./starred",onClick:t,children:[(0,b.jsx)(o.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Starred"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./sent",onClick:t,children:[(0,b.jsx)(d.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Sent"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./drafts",onClick:t,children:[(0,b.jsx)(x.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Drafts"})}),(0,b.jsx)("span",{className:"badge badge-primary",children:"12"})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./spam",onClick:t,children:[(0,b.jsx)(h.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Spam"})})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(r.k2,{to:"./trash",onClick:t,children:[(0,b.jsx)(m.A,{}),(0,b.jsx)("span",{className:"nav-text",children:(0,b.jsx)("span",{children:"Trash"})})]})})]}),(0,b.jsxs)("div",{className:"nav-labels",children:[(0,b.jsx)("p",{children:"Labels"}),(0,b.jsxs)("ul",{children:[f.map((e=>(0,b.jsx)("li",{children:(0,b.jsxs)(r.N_,{to:"#",children:[(0,b.jsx)(p.A,{})," ",e]})},e))),(0,b.jsxs)("li",{className:"add-label-btn",onKeyPress:()=>{},onClick:v,role:"menuitem",children:[(0,b.jsxs)(r.k2,{onClick:v,to:"./newLabels",children:[(0,b.jsx)(c.A,{})," Add New Label"]}),A&&(0,b.jsx)("div",{className:"add-label",children:(0,b.jsxs)(i.A,{onSubmit:C,children:[(0,b.jsx)(g.default,{label:3,children:"Add New Label"}),(0,b.jsx)(s.A,{onChange:e=>{y({...a,newLabel:e.target.value})},value:w,name:w,type:"text",placeholder:"Enter label name"}),(0,b.jsxs)("div",{className:"btn-group",children:[(0,b.jsx)(j.Button,{size:"default",onClick:C,type:"primary",children:"Add Label"}),(0,b.jsx)(j.Button,{onClick:e=>{e.preventDefault(),e.stopPropagation(),y({...a,addNewDisplay:!1})},type:"default",children:"Cancel"})]})]})})]})]})]})]})}))},29418:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(9950),r=a(73878),i=a(55902),s=a(87094),l=a(41988),o=a(32212),d=a(99674),c=a(90650),x=a(42074),h=a(28429),m=a(10356),p=a(58072),u=a(28320),j=a(28280),g=a(68724),b=a(57687),y=a(67482),f=a(65167),w=a(72449),A=a(29355),v=a(44414);const C=(0,n.lazy)((()=>Promise.all([a.e(4380),a.e(9422)]).then(a.bind(a,59422)))),k=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(66)]).then(a.bind(a,61701)))),z=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(66)]).then(a.bind(a,79153))));const $=function(){const{jobs:e}=(0,r.d4)((e=>({jobs:e.jobs.jobs}))),t=(0,r.wA)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.PageHeader,{title:"Job Search ",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"job",breadcrumbName:"Job Search"}]}),(0,v.jsx)(y.Main,{children:(0,v.jsxs)(g.JobLandingStyle,{children:[(0,v.jsxs)("div",{className:"ninjadash-joblanding-top align-center-v",children:[(0,v.jsx)(i.A,{size:"large",prefix:(0,v.jsx)(u.A,{}),className:"ninjadash-title-search",id:"title",placeholder:"Job title, skills, or company"}),(0,v.jsx)(i.A,{id:"location",size:"large",className:"ninjadash-location-search",prefix:(0,v.jsx)(j.A,{}),placeholder:"Location"}),(0,v.jsxs)(w.Button,{onClick:()=>{const a=document.getElementById("title").value,n=document.getElementById("location").value;t((0,f.filterWithTitleLocation)(a,n,e))},size:"large",type:"primary",children:[(0,v.jsx)(u.A,{})," Search"]})]}),(0,v.jsxs)(s.A,{gutter:25,children:[(0,v.jsx)(l.A,{xxl:6,lg:8,md:10,xs:24,children:(0,v.jsx)(n.Suspense,{fallback:(0,v.jsx)(A.Cards,{headless:!0,children:(0,v.jsx)(o.A,{paragraph:{rows:22},active:!0})}),children:(0,v.jsx)(C,{})})}),(0,v.jsxs)(l.A,{xxl:18,lg:16,md:14,xs:24,children:[(0,v.jsx)(y.TopToolBox,{children:(0,v.jsxs)("div",{className:"ninjadash-showcase-top d-flex justify-content-between align-items-center",children:[(0,v.jsx)("div",{className:"ninjadash-showcase-top__text",children:(0,v.jsx)("p",{className:"search-result",children:"Showing 1\u20138 of 86 results"})}),window.innerWidth<=991&&window.innerWidth>=768||window.innerWidth>575&&(0,v.jsxs)("div",{className:"ninjadash-showcase-top__action",children:[(0,v.jsxs)("div",{className:"ninjadash-showcase-top__action--filter",children:[(0,v.jsx)("span",{className:"toolbox-menu-title",children:" Sort By:"}),(0,v.jsxs)(d.A,{onChange:a=>{t((0,f.sorting)(a,e))},style:{width:"150px"},defaultValue:"latest",children:[(0,v.jsx)(d.A.Option,{value:"Latest",children:"Latest"}),(0,v.jsx)(d.A.Option,{value:"Old",children:"Old"})]})]}),(0,v.jsxs)("div",{className:"ninjadash-showcase-top__action--viewmode",children:[(0,v.jsx)(x.k2,{to:"./grid",children:(0,v.jsx)(m.A,{})}),(0,v.jsx)(x.k2,{to:"./list",children:(0,v.jsx)(p.A,{})})]})]})]})}),(0,v.jsx)(n.Suspense,{fallback:(0,v.jsx)("div",{className:"spin d-flex align-center-v",children:(0,v.jsx)(c.A,{})}),children:(0,v.jsxs)(h.BV,{children:[(0,v.jsx)(h.qh,{index:!0,element:(0,v.jsx)(k,{})}),(0,v.jsx)(h.qh,{path:"grid",element:(0,v.jsx)(k,{})}),(0,v.jsx)(h.qh,{path:"list",element:(0,v.jsx)(z,{})})]})})]})]})]})})]})}},68724:(e,t,a)=>{a.r(t),a.d(t,{AddProductForm:()=>u,AdditionalInfoStyle:()=>x,FigureCart:()=>i,JobApplicationWrap:()=>h,JobDetailsWrap:()=>c,JobLandingStyle:()=>r,JobsCard:()=>d,NotFoundWrapper:()=>l,PaginationWrapper:()=>m,ProductDetailsWrapper:()=>p,Sidebar:()=>s,SidebarSingle:()=>o});var n=a(19335);const r=n.Ay.div`
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
`,i=n.Ay.figure`

    display: inline-flex;
    img {
        ${e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}}: 15px;
    }
`,s=n.Ay.div`
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
`,l=n.Ay.div`
    text-align: center;
    margin-top: 60px;
    h1{
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
        border-top: 1px solid ${e=>{let{theme:t}=e;return t[t.mainContent]["border-color-secondary"]}};
        padding: 15px 0 20px;
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
`,o=n.Ay.div`
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
`,d=n.Ay.div`
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
`,c=n.Ay.div`
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
`,x=n.Ay.div`
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
`,h=n.Ay.div`
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
`,m=n.Ay.div`
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
    
`,p=n.Ay.div`
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
`,u=n.Ay.div`
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
`},90340:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(9950),r=a(73878),i=a(87094),s=a(41988),l=a(90650),o=a(32212),d=a(42074),c=a(8603),x=a(67482),h=a(57687),m=a(81883),p=a(29355),u=a(44414);const j=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2525)]).then(a.bind(a,34672))));const g=function(){const e=(0,r.wA)(),{gallery:t,isLoading:a}=(0,r.d4)((e=>({gallery:e.gallery.data,isLoading:e.gallery.loading}))),[g,b]=(0,n.useState)({activeClass:""}),y=t=>{e((0,m.galleryFilter)("category",t)),b({...g,activeClass:t})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.PageHeader,{title:"Gallery",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Gallery"}]}),(0,u.jsx)(x.Main,{children:(0,u.jsxs)(i.A,{gutter:25,children:[(0,u.jsx)(s.A,{xs:24,children:(0,u.jsx)(c.GalleryNav,{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(d.N_,{className:""===g.activeClass?"active":"deactivate",onClick:()=>y(""),to:"#",children:"All"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.N_,{className:"webDesign"===g.activeClass?"active":"deactivate",onClick:()=>y("webDesign"),to:"#",children:"Web Design"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.N_,{className:"uiDesign"===g.activeClass?"active":"deactivate",onClick:()=>y("uiDesign"),to:"#",children:"UI Design"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.N_,{className:"wireframe"===g.activeClass?"active":"deactivate",onClick:()=>y("wireframe"),to:"#",children:"Wireframe"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.N_,{className:"Presentation"===g.activeClass?"active":"deactivate",onClick:()=>y("Presentation"),to:"#",children:"Presentation"})})]})})}),a?(0,u.jsx)(s.A,{xs:24,children:(0,u.jsx)("div",{className:"spin",children:(0,u.jsx)(l.A,{})})}):t.map((e=>{const{id:t}=e;return(0,u.jsx)(s.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(p.Cards,{headless:!0,children:(0,u.jsx)(o.A,{active:!0})}),children:(0,u.jsx)(j,{item:e})})},t)}))]})})]})}},71001:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(28429),o=a(12144),d=a(57687),c=a(67482),x=a(29355),h=a(44414);const m=(0,n.lazy)((()=>a.e(2681).then(a.bind(a,12681)))),p=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,23035)))),u=(0,n.lazy)((()=>a.e(3393).then(a.bind(a,73393)))),j=(0,n.lazy)((()=>a.e(6561).then(a.bind(a,36561)))),g=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,26201)))),b=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6920)]).then(a.bind(a,96257))));const y=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.PageHeader,{title:"Wizards",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Wizards"}]}),(0,h.jsx)(c.Main,{children:(0,h.jsx)(r.A,{gutter:25,children:(0,h.jsx)(i.A,{sm:24,xs:24,children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(s.A,{paragraph:{rows:20},active:!0})}),children:(0,h.jsx)(o.WizardBlock,{children:(0,h.jsx)(x.Cards,{headless:!0,children:(0,h.jsx)(r.A,{justify:"center",children:(0,h.jsx)(i.A,{xxl:20,xs:24,children:(0,h.jsxs)(l.BV,{children:[(0,h.jsx)(l.qh,{path:"one",element:(0,h.jsx)(m,{})}),(0,h.jsx)(l.qh,{path:"two",element:(0,h.jsx)(p,{})}),(0,h.jsx)(l.qh,{path:"three",element:(0,h.jsx)(u,{})}),(0,h.jsx)(l.qh,{path:"four",element:(0,h.jsx)(j,{})}),(0,h.jsx)(l.qh,{path:"five",element:(0,h.jsx)(g,{})}),(0,h.jsx)(l.qh,{path:"six",element:(0,h.jsx)(b,{})})]})})})})})})})})})]})}},12681:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(9950),r=a(12144),i=a(44414);const s=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(8464)]).then(a.bind(a,75521))));const l=function(){return(0,i.jsx)(r.WizardWrapper,{className:"ninjadash-wizard-page",children:(0,i.jsx)(s,{})})}},55810:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(9950),r=a(87094),i=a(41988),s=a(32212),l=a(29355),o=a(44414);const d=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(6247)]).then(a.bind(a,70489)))),c=(0,n.lazy)((()=>a.e(7937).then(a.bind(a,87937))));const x=function(){return(0,o.jsxs)(r.A,{gutter:25,children:[(0,o.jsx)(i.A,{md:16,xs:24,children:(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(l.Cards,{headless:!0,children:(0,o.jsx)(s.A,{active:!0,paragraph:{rows:10}})}),children:(0,o.jsx)(c,{})})}),(0,o.jsx)(i.A,{md:8,children:(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(l.Cards,{headless:!0,children:(0,o.jsx)(s.A,{active:!0,paragraph:{rows:10}})}),children:(0,o.jsx)(d,{})})})]})}},28745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(9950),r=a(73878),i=a(87094),s=a(41988),l=a(32212),o=a(78732),d=a(83587),c=a(90556),x=a(34574),h=a(42074),m=a(57687),p=a(67482),u=a(91),j=a(29355),g=a(44414);const b=function(){const{searchData:e,team:t}=(0,r.d4)((e=>({searchData:e.headerSearchData,team:e.team.data}))),[b,y]=(0,n.useState)({notData:e}),{notData:f}=b,w=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(h.N_,{to:"#",children:[(0,g.jsx)(d.A,{}),(0,g.jsx)("span",{children:"View"})]}),(0,g.jsxs)(h.N_,{to:"#",children:[(0,g.jsx)(c.A,{}),(0,g.jsx)("span",{children:"Edit"})]}),(0,g.jsxs)(h.N_,{to:"#",children:[(0,g.jsx)(x.A,{}),(0,g.jsx)("span",{children:"Delete"})]})]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.CardToolbox,{children:(0,g.jsx)(m.PageHeader,{backIcon:!1,title:"Team Members",subTitle:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{className:"title-counter",children:"274 Users"}),(0,g.jsx)(u.AutoComplete,{onSearch:t=>{const a=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));y({...b,notData:a})},dataSource:f,width:"100%",placeholder:"Search by Name",patterns:!0})]}),buttons:[(0,g.jsxs)(h.N_,{to:"/admin/users/add-user/info",className:"btn-add_new",children:[(0,g.jsx)(o.A,{})," Add New Member"]})]})}),(0,g.jsx)(p.Main,{children:(0,g.jsx)(i.A,{gutter:25,children:t.map((e=>{const t=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(5052)]).then(a.bind(a,89025)))),{id:r}=e;return(0,g.jsx)(s.A,{xxl:6,lg:8,sm:12,xs:24,children:(0,g.jsx)(n.Suspense,{fallback:(0,g.jsx)(j.Cards,{headless:!0,children:(0,g.jsx)(l.A,{avatar:!0,active:!0})}),children:(0,g.jsx)(t,{actions:w,user:e})})},r)}))})})]})}},63806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(9950),r=a(73878),i=a(41988),s=a(32212),l=a(87094),o=a(7037),d=a(78732),c=a(10356),x=a(58072),h=a(11876),m=a(96457),p=a(42074),u=a(28429),j=a(8603),g=a(57687),b=a(67482),y=a(91),f=a(72449),w=a(29355),A=a(44414);const v=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,82259)))),C=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,60698)))),k=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,35099)))),z=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1313)]).then(a.bind(a,30684))));const $=function(){const{searchData:e,users:t,userGroup:a}=(0,r.d4)((e=>({searchData:e.headerSearchData,users:e.users,userGroup:e.userGroup}))),$=".",[S,N]=(0,n.useState)({notData:e,current:0,pageSize:0,page:0}),{notData:P}=S,_=n.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(i.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(n.Suspense,{fallback:(0,A.jsx)(w.Cards,{headless:!0,children:(0,A.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(v,{user:e})})},t)})))),D=n.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(i.A,{xxl:12,xl:12,sm:24,xs:24,children:(0,A.jsx)(n.Suspense,{fallback:(0,A.jsx)(w.Cards,{headless:!0,children:(0,A.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(k,{user:e})})},t)})))),q=n.memo((()=>t.map((e=>{const{id:t}=e;return(0,A.jsx)(i.A,{xxl:6,xl:8,sm:12,xs:24,children:(0,A.jsx)(n.Suspense,{fallback:(0,A.jsx)(w.Cards,{headless:!0,children:(0,A.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(C,{user:e})})},t)})))),B=n.memo((()=>a.map((e=>{const{id:t}=e;return(0,A.jsx)(i.A,{xxl:8,md:12,sm:24,xs:24,children:(0,A.jsx)(n.Suspense,{fallback:(0,A.jsx)(w.Cards,{headless:!0,children:(0,A.jsx)(s.A,{avatar:!0,active:!0})}),children:(0,A.jsx)(z,{user:e})})},t)}))));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b.CardToolbox,{children:(0,A.jsx)(j.UserCarrdTop,{children:(0,A.jsx)(g.PageHeader,{ghost:!0,title:"Users Card",subTitle:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("span",{className:"title-counter",children:"274 Users "}),(0,A.jsx)(y.AutoComplete,{onSearch:t=>{const a=e.filter((e=>e.title.toUpperCase().startsWith(t.toUpperCase())));N({...S,notData:a})},dataSource:P,placeholder:"Search by Name",width:"100%",patterns:!0})]}),buttons:[(0,A.jsx)(f.Button,{className:"btn-add_new",size:"default",type:"primary",children:(0,A.jsxs)(p.N_,{to:"/admin/users/add-user/info",children:[(0,A.jsx)(d.A,{})," Add New User"]})},"1"),(0,A.jsx)(p.k2,{className:"action-btn",to:`${$}/grid`,children:(0,A.jsx)(c.A,{})},"2"),(0,A.jsx)(p.k2,{className:"action-btn",to:`${$}/list`,children:(0,A.jsx)(x.A,{})},"3"),(0,A.jsx)(p.k2,{className:"action-btn",to:`${$}/grid-style`,children:(0,A.jsx)(m.A,{})},"4"),(0,A.jsx)(p.k2,{className:"action-btn",to:`${$}/grid-group`,children:(0,A.jsx)(h.A,{})},"5")]})})}),(0,A.jsx)(b.Main,{children:(0,A.jsx)(j.UsercardWrapper,{children:(0,A.jsxs)(l.A,{gutter:25,children:[(0,A.jsxs)(u.BV,{children:[(0,A.jsx)(u.qh,{path:"grid",element:(0,A.jsx)(_,{})}),(0,A.jsx)(u.qh,{path:"list",element:(0,A.jsx)(D,{})}),(0,A.jsx)(u.qh,{path:"grid-group",element:(0,A.jsx)(B,{})}),(0,A.jsx)(u.qh,{path:"grid-style",element:(0,A.jsx)(q,{})})]}),(0,A.jsx)(i.A,{xs:24,children:(0,A.jsx)("div",{className:"user-card-pagination",children:(0,A.jsx)(o.A,{onChange:e=>{N({...S,page:e})},showSizeChanger:!0,onShowSizeChange:(e,t)=>{N({...S,current:e,pageSize:t})},defaultCurrent:6,total:500})})})]})})})]})}},47041:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(9950),r=a(87094),i=a(41988),s=a(34166),l=a(57687),o=a(67482),d=a(29355),c=a(55835),x=a(7906),h=a(44414);const m=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8005)]).then(a.bind(a,48005)))),p=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(304)]).then(a.bind(a,55355)))),u=(0,n.lazy)((()=>a.e(7241).then(a.bind(a,37241)))),j=(0,n.lazy)((()=>a.e(4989).then(a.bind(a,34989))));const g=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.PageHeader,{title:"Widgets Mixed",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Widgets Mixed"}]}),(0,h.jsx)(o.Main,{children:(0,h.jsx)(s.MixedCardWrap,{children:(0,h.jsxs)(r.A,{gutter:25,children:[(0,h.jsx)(i.A,{xxl:8,xl:10,xs:24,children:(0,h.jsx)(d.Cards,{headless:!0,children:(0,h.jsx)(x.default,{subtotal:1200})})}),(0,h.jsxs)(i.A,{xxl:16,xl:14,xs:24,children:[(0,h.jsx)(m,{}),(0,h.jsx)(c.default,{})]}),(0,h.jsx)(i.A,{xxl:8,xs:24,children:(0,h.jsx)(u,{})}),(0,h.jsx)(i.A,{xxl:8,md:12,xs:24,children:(0,h.jsx)(j,{})}),(0,h.jsx)(i.A,{xxl:8,md:12,xs:24,children:(0,h.jsx)(p,{})})]})})})]})}},34166:(e,t,a)=>{a.r(t),a.d(t,{CardChartStyle:()=>r,MixedCardWrap:()=>i,OverviewCard:()=>l,SocialMediaWrapper:()=>s});var n=a(19335);const r=n.Ay.div`
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
`,i=n.Ay.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,s=n.Ay.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,l=n.Ay.div`
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
`},4909:(e,t,a)=>{a.r(t),a.d(t,{cartDelete:()=>g,cartGetData:()=>u,cartUpdateQuantity:()=>j});var n=a(72316),r=a(5213),i=a(77003);const{cartDataBegin:s,cartDataSuccess:l,cartDataErr:o,cartUpdateBegin:d,cartUpdateSuccess:c,cartUpdateErr:x,cartDeleteBegin:h,cartDeleteSuccess:m,cartDeleteErr:p}=n.default,u=()=>async e=>{try{e(s()),e(l(r))}catch(t){(0,i.handleApiError)(t,e,o)}},j=(e,t,a)=>async n=>{try{n(d());const r=a.map((a=>(a.id===e&&(a.quantity=t),a)));n(c(r))}catch(r){n(x(r))}},g=(e,t)=>async a=>{try{a(h());const n=t.filter((t=>t.id!==e));setTimeout((()=>{a(m(n))}),500)}catch(n){(0,i.handleApiError)(n,a,o)}}},81883:(e,t,a)=>{a.r(t),a.d(t,{galleryFilter:()=>o});var n=a(98638),r=a(35155);const{filterGalleryBegin:i,filterGallerySuccess:s,filterGalleryErr:l}=n.default,o=(e,t)=>async a=>{try{a(i()),setTimeout((()=>{const n=r.filter((a=>""!==t?a[e]===t:a));a(s(n))}),500)}catch(n){a(l(n))}}},65167:(e,t,a)=>{a.r(t),a.d(t,{filterWithTitleLocation:()=>u,jobsReadData:()=>x,jobsUpdateData:()=>h,jobsUpdateSearch:()=>m,singlePageReade:()=>j,sorting:()=>p});var n=a(46906),r=a(68279);const{jobsReadBegin:i,jobsReadSuccess:s,jobsReadErr:l,filterSinglePageReadBegin:o,filterSinglePageReadSuccess:d,filterSinglePageReadErr:c}=n.default,x=()=>async e=>{try{e(i()),e(s(r))}catch(t){e(l(t))}},h=e=>async t=>{try{t(i()),t(s(e))}catch(a){t(l(a))}},m=(e,t)=>async a=>{try{a(i());const n=r.filter((a=>a[t].startsWith(e)));a(s(n))}catch(n){a(l(n))}},p=(e,t)=>async a=>{try{a(i()),setTimeout((()=>{const n=t.sort(((t,a)=>"Old"===e?a.id-t.id:t.id-a.id));a(s(n))}),100)}catch(n){a(l(n))}},u=(e,t)=>async a=>{try{a(i()),setTimeout((()=>{const n=r.filter((a=>a.title.toLowerCase().indexOf(e.toLowerCase())>=0&&a.location.toLowerCase().indexOf(t.toLowerCase())>=0));a(s(n))}),100)}catch(n){a(l(n))}},j=e=>async t=>{try{t(o());const a=r.filter((t=>parseInt(t.id,10)===parseInt(e,10)));t(d(a))}catch(a){t(c(a))}}},16358:(e,t,a)=>{a.r(t),a.d(t,{filterByBrand:()=>b,filterByCategory:()=>y,filterByPriceRange:()=>j,filterByRating:()=>g,filterSinglePage:()=>p,sorting:()=>u,updateWishList:()=>f});var n=a(65571),r=a(44199);const{singleProductBegin:i,singleProductSuccess:s,singleProductErr:l,filterProductBegin:o,filterProductSuccess:d,filterProductErr:c,sortingProductBegin:x,sortingProductSuccess:h,sortingProductErr:m}=n.default,p=(e,t)=>async a=>{try{a(i());const n=t.filter((t=>t.id===e));a(s(n))}catch(n){a(l(n))}},u=e=>async t=>{try{t(x()),setTimeout((()=>{const a=r.sort(((t,a)=>a[e]-t[e]));t(h(a))}),100)}catch(a){t(m(a))}},j=e=>async t=>{t(o());try{const a=r.filter((t=>t.price>=e[0]&&t.price<=e[1]));t(d(a))}catch(a){t(c(a))}},g=e=>async t=>{try{t(o()),setTimeout((()=>{const a=r.filter((t=>e[0].length?e[0].includes(t.rate):r));t(d(a))}),100)}catch(a){t(c(a))}},b=e=>async t=>{try{t(o()),setTimeout((()=>{const a=r.filter((t=>e[0].length?e[0].includes(t.brand):r));t(d(a))}),100)}catch(a){t(c(a))}},y=e=>async t=>{try{t(o()),setTimeout((()=>{const a=r.filter((t=>"all"!==e?t.category===e:r));t(d(a))}),100)}catch(a){t(c(a))}},f=e=>async t=>{try{t(o()),r.map((a=>a.id===e?a.popular?a.popular=!1:a.popular=!0:t(d(r))))}catch(a){t(c(a))}}},2721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var n=a(9950),r=a(28429),i=a(44414);const s=(0,n.lazy)((()=>a.e(7900).then(a.bind(a,47900)))),l=(0,n.lazy)((()=>a.e(4287).then(a.bind(a,24287)))),o=(0,n.lazy)((()=>a.e(5218).then(a.bind(a,55218)))),d=(0,n.lazy)((()=>a.e(7681).then(a.bind(a,37681)))),c=(0,n.lazy)((()=>a.e(1808).then(a.bind(a,41808)))),x=(0,n.lazy)((()=>a.e(8188).then(a.bind(a,48188)))),h=(0,n.lazy)((()=>a.e(5389).then(a.bind(a,75389)))),m=(0,n.lazy)((()=>a.e(5424).then(a.bind(a,25424)))),p=(0,n.lazy)((()=>Promise.all([a.e(8573),a.e(6922)]).then(a.bind(a,94326)))),u=(0,n.lazy)((()=>a.e(1469).then(a.bind(a,21469)))),j=(0,n.lazy)((()=>a.e(7954).then(a.bind(a,27954)))),g=(0,n.lazy)((()=>a.e(1259).then(a.bind(a,11259)))),b=(0,n.lazy)((()=>a.e(9900).then(a.bind(a,69900)))),y=(0,n.lazy)((()=>a.e(9086).then(a.bind(a,89086)))),f=(0,n.lazy)((()=>Promise.all([a.e(4380),a.e(6209)]).then(a.bind(a,36209)))),w=(0,n.lazy)((()=>a.e(5423).then(a.bind(a,55423)))),A=(0,n.lazy)((()=>a.e(3693).then(a.bind(a,93693)))),v=(0,n.lazy)((()=>a.e(7553).then(a.bind(a,57553)))),C=(0,n.lazy)((()=>a.e(1663).then(a.bind(a,61663)))),k=(0,n.lazy)((()=>a.e(3827).then(a.bind(a,13827)))),z=(0,n.lazy)((()=>Promise.all([a.e(3780),a.e(1945)]).then(a.bind(a,71945)))),$=(0,n.lazy)((()=>a.e(351).then(a.bind(a,20351)))),S=(0,n.lazy)((()=>Promise.all([a.e(656),a.e(7777)]).then(a.bind(a,21993)))),N=(0,n.lazy)((()=>a.e(5480).then(a.bind(a,75480)))),P=(0,n.lazy)((()=>Promise.all([a.e(8623),a.e(9214)]).then(a.bind(a,9214)))),_=(0,n.lazy)((()=>a.e(5843).then(a.bind(a,55843)))),D=(0,n.lazy)((()=>a.e(2511).then(a.bind(a,32511)))),q=(0,n.lazy)((()=>a.e(8593).then(a.bind(a,28593)))),B=(0,n.lazy)((()=>a.e(9496).then(a.bind(a,29496)))),T=(0,n.lazy)((()=>a.e(8689).then(a.bind(a,48689)))),W=(0,n.lazy)((()=>Promise.all([a.e(5139),a.e(6548)]).then(a.bind(a,56548)))),E=(0,n.lazy)((()=>Promise.all([a.e(8573),a.e(3623)]).then(a.bind(a,16122)))),L=(0,n.lazy)((()=>a.e(9876).then(a.bind(a,59876)))),O=(0,n.lazy)((()=>a.e(9875).then(a.bind(a,29875)))),U=(0,n.lazy)((()=>Promise.all([a.e(777),a.e(680)]).then(a.bind(a,680)))),I=(0,n.lazy)((()=>a.e(8562).then(a.bind(a,38562)))),F=(0,n.lazy)((()=>Promise.all([a.e(8573),a.e(5139),a.e(9131)]).then(a.bind(a,44646)))),M=(0,n.lazy)((()=>a.e(7980).then(a.bind(a,37980)))),G=(0,n.lazy)((()=>a.e(7215).then(a.bind(a,97215)))),H=(0,n.lazy)((()=>a.e(8180).then(a.bind(a,18180)))),R=(0,n.lazy)((()=>a.e(1421).then(a.bind(a,11421)))),V=(0,n.lazy)((()=>a.e(5821).then(a.bind(a,65821)))),J=(0,n.lazy)((()=>a.e(9181).then(a.bind(a,49181)))),K=(0,n.lazy)((()=>a.e(300).then(a.bind(a,20300)))),Q=(0,n.lazy)((()=>a.e(382).then(a.bind(a,90382)))),X=(0,n.lazy)((()=>a.e(8023).then(a.bind(a,8023)))),Y=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(1005)]).then(a.bind(a,90984)))),Z=(0,n.lazy)((()=>a.e(3795).then(a.bind(a,93795)))),ee=(0,n.lazy)((()=>a.e(1874).then(a.bind(a,21874))));const te=function(){return(0,i.jsxs)(r.BV,{children:[(0,i.jsx)(r.qh,{path:"button",element:(0,i.jsx)(s,{})}),(0,i.jsx)(r.qh,{path:"alerts",element:(0,i.jsx)(l,{})}),(0,i.jsx)(r.qh,{path:"modals",element:(0,i.jsx)(o,{})}),(0,i.jsx)(r.qh,{path:"cards",element:(0,i.jsx)(d,{})}),(0,i.jsx)(r.qh,{path:"grid",element:(0,i.jsx)(c,{})}),(0,i.jsx)(r.qh,{path:"tabs",element:(0,i.jsx)(x,{})}),(0,i.jsx)(r.qh,{path:"breadcrumb",element:(0,i.jsx)(h,{})}),(0,i.jsx)(r.qh,{path:"list",element:(0,i.jsx)(M,{})}),(0,i.jsx)(r.qh,{path:"pagination",element:(0,i.jsx)(m,{})}),(0,i.jsx)(r.qh,{path:"page-headers",element:(0,i.jsx)(p,{})}),(0,i.jsx)(r.qh,{path:"steps",element:(0,i.jsx)(u,{})}),(0,i.jsx)(r.qh,{path:"comments",element:(0,i.jsx)(j,{})}),(0,i.jsx)(r.qh,{path:"empty",element:(0,i.jsx)(g,{})}),(0,i.jsx)(r.qh,{path:"statistic",element:(0,i.jsx)(b,{})}),(0,i.jsx)(r.qh,{path:"rate",element:(0,i.jsx)(y,{})}),(0,i.jsx)(r.qh,{path:"slider",element:(0,i.jsx)(f,{})}),(0,i.jsx)(r.qh,{path:"progress",element:(0,i.jsx)(w,{})}),(0,i.jsx)(r.qh,{path:"tags",element:(0,i.jsx)(A,{})}),(0,i.jsx)(r.qh,{path:"popover",element:(0,i.jsx)(C,{})}),(0,i.jsx)(r.qh,{path:"timeline",element:(0,i.jsx)(k,{})}),(0,i.jsx)(r.qh,{path:"drawer",element:(0,i.jsx)(z,{})}),(0,i.jsx)(r.qh,{path:"notification",element:(0,i.jsx)($,{})}),(0,i.jsx)(r.qh,{path:"spiner",element:(0,i.jsx)(N,{})}),(0,i.jsx)(r.qh,{path:"carousel",element:(0,i.jsx)(P,{})}),(0,i.jsx)(r.qh,{path:"collapse",element:(0,i.jsx)(_,{})}),(0,i.jsx)(r.qh,{path:"auto-complete",element:(0,i.jsx)(B,{})}),(0,i.jsx)(r.qh,{path:"checkbox",element:(0,i.jsx)(T,{})}),(0,i.jsx)(r.qh,{path:"cascader",element:(0,i.jsx)(W,{})}),(0,i.jsx)(r.qh,{path:"date-picker",element:(0,i.jsx)(E,{})}),(0,i.jsx)(r.qh,{path:"switch",element:(0,i.jsx)(L,{})}),(0,i.jsx)(r.qh,{path:"select",element:(0,i.jsx)(H,{})}),(0,i.jsx)(r.qh,{path:"timePicker",element:(0,i.jsx)(O,{})}),(0,i.jsx)(r.qh,{path:"tree-select",element:(0,i.jsx)(U,{})}),(0,i.jsx)(r.qh,{path:"calendar",element:(0,i.jsx)(I,{})}),(0,i.jsx)(r.qh,{path:"form",element:(0,i.jsx)(F,{})}),(0,i.jsx)(r.qh,{path:"dropdown",element:(0,i.jsx)(v,{})}),(0,i.jsx)(r.qh,{path:"result",element:(0,i.jsx)(S,{})}),(0,i.jsx)(r.qh,{path:"avatar",element:(0,i.jsx)(D,{})}),(0,i.jsx)(r.qh,{path:"badge",element:(0,i.jsx)(q,{})}),(0,i.jsx)(r.qh,{path:"radio",element:(0,i.jsx)(R,{})}),(0,i.jsx)(r.qh,{path:"skeleton",element:(0,i.jsx)(G,{})}),(0,i.jsx)(r.qh,{path:"input",element:(0,i.jsx)(V,{})}),(0,i.jsx)(r.qh,{path:"upload",element:(0,i.jsx)(J,{})}),(0,i.jsx)(r.qh,{path:"message",element:(0,i.jsx)(K,{})}),(0,i.jsx)(r.qh,{path:"confirm",element:(0,i.jsx)(Q,{})}),(0,i.jsx)(r.qh,{path:"menu",element:(0,i.jsx)(X,{})}),(0,i.jsx)(r.qh,{path:"drag",element:(0,i.jsx)(Y,{})}),(0,i.jsx)(r.qh,{exact:!0,path:"base",element:(0,i.jsx)(Z,{})}),(0,i.jsx)(r.qh,{path:"*",element:(0,i.jsx)(ee,{})})]})}},36648:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(9950),r=a(28429),i=a(44414);const s=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2861)]).then(a.bind(a,26294)))),l=(0,n.lazy)((()=>Promise.all([a.e(5059),a.e(8045),a.e(8573),a.e(4380),a.e(7848),a.e(7149),a.e(6279),a.e(8623),a.e(5139),a.e(6934),a.e(1741),a.e(9696),a.e(8143),a.e(656),a.e(777),a.e(884),a.e(538),a.e(2671),a.e(1717),a.e(3780),a.e(9556),a.e(37),a.e(4185),a.e(290),a.e(4360),a.e(7291),a.e(4503),a.e(6233),a.e(3917),a.e(3548),a.e(9537),a.e(5267),a.e(2661),a.e(5727),a.e(9644),a.e(2861)]).then(a.bind(a,38238)))),o=(0,n.lazy)((()=>a.e(1874).then(a.bind(a,21874))));const d=function(){return(0,i.jsxs)(r.BV,{children:[(0,i.jsx)(r.qh,{path:"basic",element:(0,i.jsx)(s,{})}),(0,i.jsx)(r.qh,{path:"dataTable",element:(0,i.jsx)(l,{})}),(0,i.jsx)(r.qh,{path:"*",element:(0,i.jsx)(o,{})})]})}},85544:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAW9JREFUOE+tUzFSwlAQfRuGCXRpoTGeQDiB0JlKPIHxBnACuQHcwHADrKBDb+ARsEHL0EAchqzvZwADMWMc3SbzN/vf333vrWBaGwvkGrtQIITGNxBrIEBjny/yVegc9ropMq0T5/9CNW5/C6qKkQhuU90vAQ2gaIjI5VdeHwFxOdHFIZcLCgQs9A+F1qaJ8maOdhhiUg/Mg6r6DO+tlaEvD/SUDL1aCCa1J3bb5z+XfHdhr1r4qPrUY5Cuzx8f2ksXm0J47wRlsFOUNkNsS46INcs0ULRTc5HKElQcOqOH0jZEXJ6RIudPoAmwxneoRGNE1fEOzKVwZ0XH73L84XExRvAWvhGGXvQT0WaOwwde0sC5nGZH2ilt+IS6RnXjbwKcA5ZPN9z/bKmUT7kZSyrtIqp0KMxDsnH2imCMxGK1eaFOefHYp5kz1xEwvHZIk1uI09Pxf3NOON1vyIETM67GHRp8mF6/IsAk+RWVdeMT3eLKgf6IB/oAAAAASUVORK5CYII="},87945:(e,t,a)=>{e.exports=a.p+"static/media/open-message.29a48d087bdf34e15ac1.png"},5213:e=>{e.exports=JSON.parse('[{"id":"1","name":"Montes Scelerisque","size":"Large","color":"Brown","price":"248.66","quantity":"1","img":"static/img/products/1.png","total":"248.66"},{"id":"2","name":"Leo Sodales Varius","size":"Small","color":"Golden","price":"240","quantity":"1","img":"static/img/products/2.png","total":"240"}]')},68279:e=>{e.exports=JSON.parse('[{"id":1,"title":"WordPress Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":2,"title":"JavaScript Developer","location":"Sydney, Aus","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/chrome.svg"},{"id":3,"title":"Senior UI/UX Designer","location":"London,UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/dribble.svg"},{"id":4,"title":"Frontend Developer","location":"Manchester City, UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/slack.svg"},{"id":5,"title":"Senior Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":6,"title":"Visual Graphic Designer","location":"London, UK","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/tags.svg"},{"id":7,"title":"Support Engineer","location":"California, USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/firefox.svg"},{"id":8,"title":"Junior WordPress Developer","location":"Dhaka,BD","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":9,"title":"WordPress Theme Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/stats.svg"},{"id":10,"title":"WordPress Plugins Developer","location":"New York,USA","deadline":"31 may 2021","jobType":"Full Time","salary":"$70-$150 per month","icon":"static/img/jobs/chrome.svg"}]')}}]);