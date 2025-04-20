"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[2866,356,9665,6013,1976,3405,6851],{50989:(e,a,t)=>{t.r(a),t.d(a,{chartLinearGradient:()=>n,customTooltips:()=>s,textRefactor:()=>r});const r=(e,a)=>`${e.split(" ").slice(0,a).join(" ")}...`,n=(e,a,t)=>{const r=e.getContext("2d").createLinearGradient(0,0,0,a);return r.addColorStop(0,`${t.start}`),r.addColorStop(1,`${t.end}`),r},s=function(e){let a=document.querySelector(".chartjs-tooltip");const t=this._chart.canvas.closest(".ninjadash-chart-container");if(t&&!t.contains(a)&&(a=document.createElement("div"),a.className="chartjs-tooltip",a.innerHTML="<table></table>",document.querySelectorAll(".ninjadash-chart-container").forEach((e=>{e.contains(a)&&a.remove()})),t.appendChild(a)),null!==a){const t=e.tooltip;if(0===t.opacity)return void(a.style.opacity=0);if(a.classList.remove("above","below","no-transform"),t.yAlign?a.classList.add(t.yAlign):a.classList.add("no-transform"),t.body){const e=t.title||[],r=t.body.map((function(e){return e.lines}));let n="<thead>";e.forEach((function(e){n+=`<div class='tooltip-title'>${e}</div>`})),n+="</thead><tbody>",r.forEach((function(e,a){const r=t.labelColors[a];let s=`background:${r.backgroundColor}`;s+=`; border-color:${r.borderColor}`,s+="; border-width: 2px",s+="; border-radius: 30px";n+=`<tr><td>${`<span class="chartjs-tooltip-key" style="${s}"></span>`}${e}</td></tr>`})),n+="</tbody>";a.querySelector("table").innerHTML=n}const r=this._chart.canvas.offsetTop,n=this._chart.canvas.offsetLeft,s=document.querySelector(".chartjs-tooltip").clientHeight;a.style.opacity=1,a.style.left=`${n+t.caretX}px`,a.style.top=r+t.caretY-(t.caretY>10?s>100?s+5:s+15:70)+"px",a.style.fontFamily=t.options.bodyFontFamily,a.style.fontSize=`${t.options.bodyFontSize}px`,a.style.fontStyle=t.options.bodyFontStyle,a.style.padding=`${t.yPadding}px ${t.xPadding}px`}}},71976:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});var r=t(9950),n=t(42074),s=t(62976),o=t(29989),i=t(29355),l=t(63348),d=t(50989),c=t(67482),h=t(35999),x=t(94360),p=t(44414);const{userOverviewData:u}=x,j=r.memo((()=>{const[e,a]=(0,r.useState)("today"),t=e=>{a(e)},x=[{data:u[e].target,backgroundColor:"#0372CE80",hoverBackgroundColor:"#0372CE",label:"target",maxBarThickness:10,barThickness:16},{data:u[e].gained,backgroundColor:"#00AAFF80",hoverBackgroundColor:"#00AAFF",label:"gained",maxBarThickness:10,barThickness:16}];return(0,p.jsx)(p.Fragment,{children:null!==u[e]&&(0,p.jsx)(c.BorderLessHeading,{children:(0,p.jsx)(h.UserOverviewStyle,{children:(0,p.jsx)(h.ChartContainer,{children:(0,p.jsx)(i.Cards,{isbutton:(0,p.jsx)("div",{className:"ninjadash-card-nav",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{className:"today"===e?"ninjadash-active":"ninjadash-today",children:(0,p.jsx)(n.N_,{onClick:e=>t("today"),to:"#",children:"Today"})}),(0,p.jsx)("li",{className:"week"===e?"ninjadash-active":"ninjadash-week",children:(0,p.jsx)(n.N_,{onClick:e=>t("week"),to:"#",children:"Week"})}),(0,p.jsx)("li",{className:"month"===e?"ninjadash-active":"ninjadash-month",children:(0,p.jsx)(n.N_,{onClick:e=>t("month"),to:"#",children:"Month"})})]})}),title:"User Overview",size:"large",children:(0,p.jsxs)(h.CardBarChart,{className:"ninjadash-chart-container ninjadash-chart-container-overview",children:[(0,p.jsxs)("div",{className:"ninjadash-chart-top",children:[(0,p.jsxs)("div",{className:"ninjadash-chart-top__item ninjadash-chart-top__item-target",children:[(0,p.jsxs)("span",{className:"ninjadash-chart-top__item--label",children:[(0,p.jsx)("span",{className:"ninjadash-chart-top__item--tika",style:{backgroundColor:x[0].hoverBackgroundColor}}),"Target"]}),(0,p.jsx)("span",{className:"ninjadash-chart-top__item--amount",children:"$8,550"}),(0,p.jsxs)("span",{className:"ninjadash-chart-top__item--status status-growth",children:[(0,p.jsx)(o.A,{}),"25%"]})]}),(0,p.jsxs)("div",{className:"ninjadash-chart-top__item ninjadash-chart-top__item-gained",children:[(0,p.jsxs)("span",{className:"ninjadash-chart-top__item--label",children:[(0,p.jsx)("span",{className:"ninjadash-chart-top__item--tika",style:{backgroundColor:x[1].hoverBackgroundColor}}),"Gained"]}),(0,p.jsx)("span",{className:"ninjadash-chart-top__item--amount",children:"$5,550"}),(0,p.jsxs)("span",{className:"ninjadash-chart-top__item--status status-down",children:[(0,p.jsx)(s.A,{}),"15%"]})]})]}),(0,p.jsx)(l.default,{labels:u[e].labels,datasets:x,barpercentage:"0.5",height:window.innerWidth<=575?180:128,layout:{padding:{top:20}},type:"bar",scales:{y:{grid:{color:"#485e9029",zeroLineColor:"#485e9029",borderDash:[3,3],zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:12,color:"#8C90A4",max:Math.max(...u[e].gained),stepSize:Math.floor(Math.max(...u[e].gained)/5),callback:e=>`${e}k`}},x:{grid:{display:!0,zeroLineWidth:2,zeroLineColor:"#fff",color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:12,color:"#8C90A4"}}},tooltip:{external:d.customTooltips,callbacks:{label(e){const a=e.dataset.label,{formattedValue:t}=e;return` ${a}:${t}k`},labelColor:e=>({backgroundColor:e.dataset.hoverBackgroundColor,borderColor:"transparent"})}}})]})})})})})})}))},29665:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var r=t(9950),n=t(42074),s=t(50989),o=t(29355),i=t(63348),l=t(35999),d=t(67482),c=t(94360),h=t(44414);const{earnings:x}=c,p=r.memo((e=>{let{title:a}=e;const[t,c]=(0,r.useState)("today"),p=(e,a)=>{a.preventDefault(),c(e)},u=null!==x&&[{data:x[t].users,borderColor:"#0372CE",borderWidth:3,fill:!0,backgroundColor:()=>(0,s.chartLinearGradient)(document.getElementById("ninjadash-earning-revenue"),300,{start:"#0372CE40",end:"#ffffff05"}),label:"Current period",pointStyle:"circle",pointRadius:"0",hoverRadius:"9",pointBorderColor:"#fff",pointBackgroundColor:"#0372CE",hoverBorderWidth:5,amount:"$7,596",amountClass:"current-amount"}];return(0,h.jsx)(l.SalesRevenueWrapper,{children:null!==u&&(0,h.jsx)(d.BorderLessHeading,{children:(0,h.jsx)(l.ChartContainer,{children:(0,h.jsx)(o.Cards,{isbutton:(0,h.jsx)("div",{className:"ninjadash-card-nav",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{className:"today"===t?"ninjadash-active":"ninjadash-today",children:(0,h.jsx)(n.N_,{onClick:e=>p("today",e),to:"#",children:"Today"})}),(0,h.jsx)("li",{className:"week"===t?"ninjadash-active":"ninjadash-week",children:(0,h.jsx)(n.N_,{onClick:e=>p("week",e),to:"#",children:"Week"})}),(0,h.jsx)("li",{className:"month"===t?"ninjadash-active":"ninjadash-month",children:(0,h.jsx)(n.N_,{onClick:e=>p("month",e),to:"#",children:"Month"})})]})}),title:a,size:"large",children:(0,h.jsx)("div",{className:"ninjadash-chart-container ninjadash-sales-revenue-lineChart",children:(0,h.jsx)(i.default,{id:"ninjadash-earning-revenue",labels:x[t].labels,datasets:u,tooltip:{custom:s.customTooltips,callbacks:{title:()=>"Total Revenue",label(e){const{formattedValue:a,dataset:t}=e;return`${a}k ${t.label}`}}},height:window.innerWidth<=767?200:90})})})})})})}));p.defaultProps={title:"Monthly Earning"};const u=p},6013:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var r=t(62976),n=t(29989),s=t(90650),o=t(9950),i=t(29355),l=t(63348),d=t(67482),c=t(35999),h=t(94360),x=t(44414);const p=o.memo((()=>{const e=h.profitGrowth,a=[{data:e.orders,backgroundColor:"#00AAFF50",hoverBackgroundColor:"#00AAFF",label:"Orders",average:"50.8",maxBarThickness:10,barThickness:12,percent:49},{data:e.sales,backgroundColor:"#0372CE50",hoverBackgroundColor:"#0372CE",label:"Sales",average:"$28k",maxBarThickness:10,barThickness:12,percent:60}];return(0,x.jsx)(d.BorderLessHeading,{children:(0,x.jsx)(i.Cards,{title:(0,x.jsxs)("div",{className:"ninjadash-card-title-wrap",children:[(0,x.jsx)("span",{className:"ninjadash-card-title-text",children:e.title}),(0,x.jsxs)("span",{className:"ninjadash-card-title-extra-text",children:[(0,x.jsx)("span",{className:"ninjadash-total-chart-total",children:e.total}),(0,x.jsxs)("span",{className:"down"===e.growthStatus?"ninjadash-total-chart-status ninjadash-total-chart-status-down":"ninjadash-total-chart-status ninjadash-total-chart-status-up",children:["growth"===e.growthStatus?(0,x.jsx)(n.A,{}):(0,x.jsx)(r.A,{}),"25.36%"]})]})]}),children:e?(0,x.jsxs)(c.CardBarChart,{className:"ninjadash-profitGroth-barCHar-wrap",children:[(0,x.jsx)("div",{className:"profitGrowth-barChart",children:(0,x.jsx)("div",{className:"card-bar-top",children:(0,x.jsx)("ul",{className:"profitGrowth-list",children:a&&a.map(((e,a)=>(0,x.jsxs)("li",{className:"custom-label",children:[(0,x.jsx)("span",{style:{backgroundColor:e.hoverBackgroundColor}}),e.label]},a+1)))})})}),(0,x.jsx)(c.ChartContainer,{children:(0,x.jsx)("div",{className:"ninjadash-chart-container",children:(0,x.jsx)(l.default,{id:"ninjadash-profit-growth",labels:e.labels,datasets:a,type:"bar",layout:{padding:{top:20}},tooltip:{callbacks:{label(e){const a=e.dataset.label,{formattedValue:t}=e;return`  ${t} ${a}`},labelColor:e=>({backgroundColor:e.dataset.hoverBackgroundColor,borderColor:"transparent"})}},scales:{y:{grid:{color:"#485e9029",borderDash:[3,3],zeroLineColor:"#485e9029",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49",max:Math.max(...e.orders),stepSize:Math.max(...e.orders)/5,display:!0,min:0,padding:10}},x:{grid:{display:!0,zeroLineWidth:2,zeroLineColor:"#fff",color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49",min:0}}},height:window.innerWidth<=575?200:178})})})]}):(0,x.jsx)("div",{className:"sd-spin",children:(0,x.jsx)(s.A,{})})})})}))},43405:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var r=t(9950),n=t(42074),s=t(29355),o=t(63348),i=t(50989),l=t(67482),d=t(35999),c=t(44414);const h={today:{users:[0,30,25,50,40,55,40,75,35,40,35,58],labels:["2(h)","4(h)","6(h)","8(h)","10(h)","12(h)","14(h)","16(h)","18(h)","20(h)","22(h)","24(h)"]},week:{users:[25,30,35,20,25,40,35],labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},month:{users:[20,36,25,50,40,55,40,75,35,40,35,58],labels:["Jan","Feb","Mar","App","May","Jun","Jul","Aug","Sep","Nov","Oct","Dec"]}},x=r.memo((e=>{let{title:a}=e;const[t,x]=(0,r.useState)("today"),p=e=>{x(e)},u=[{data:h[t].users,borderColor:"#0372CE",borderWidth:3,fill:!0,backgroundColor:()=>(0,i.chartLinearGradient)(document.getElementById("ninjadash-sales-revenue"),300,{start:"#0372CE40",end:"#ffffff05"}),label:"Current period",pointStyle:"circle",pointRadius:"0",hoverRadius:"9",pointBorderColor:"#fff",pointBackgroundColor:"#0372CE",hoverBorderWidth:5,amount:"$7,596",amountClass:"current-amount",lineTension:.5}];return(0,c.jsx)(d.SalesRevenueWrapper,{children:h[t]&&(0,c.jsx)(l.BorderLessHeading,{children:(0,c.jsx)(d.ChartContainer,{children:(0,c.jsx)(s.Cards,{isbutton:(0,c.jsx)("div",{className:"ninjadash-card-nav",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"today"===t?"ninjadash-active":"ninjadash-today",children:(0,c.jsx)(n.N_,{onClick:()=>p("today"),to:"#",children:"Today"})}),(0,c.jsx)("li",{className:"week"===t?"ninjadash-active":"ninjadash-week",children:(0,c.jsx)(n.N_,{onClick:()=>p("week"),to:"#",children:"Week"})}),(0,c.jsx)("li",{className:"month"===t?"ninjadash-active":"ninjadash-month",children:(0,c.jsx)(n.N_,{onClick:()=>p("month"),to:"#",children:"Month"})})]})}),title:a,size:"large",children:(0,c.jsx)("div",{className:"ninjadash-chart-container ninjadash-sales-revenue-lineChart",children:(0,c.jsx)(o.default,{type:"line",id:"ninjadash-sales-revenue",labels:h[t].labels,datasets:u,scales:{y:{grid:{color:"#485e9029",borderDash:[3,3],zeroLineColor:"#485e9029",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:13,color:"#8C90A4",suggestedMin:50,suggestedMax:80,stepSize:20,callback:e=>`${e}k`}},x:{grid:{display:!0,zeroLineWidth:1,zeroLineColor:"transparent",color:"transparent",z:1,tickMarkLength:0},ticks:{color:"#8C90A4",padding:10}}},tooltip:{custom:i.customTooltips,callbacks:{title:()=>"Total Revenue",label(e){const{formattedValue:a,dataset:t}=e;return`${a}k ${t.label}`}}},height:window.innerWidth<=575?175:136})})})})})})}));x.defaultProps={title:"Sale Revenue"};const p=x},50356:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var r=t(9950),n=t(73878),s=t(37781),o=t(64005),i=t(77638),l=t(1560),d=t(49806),c=t(67128),h=t(42074),x=t(29355),p=t(35999),u=t(9633),j=t(44414);const m=r.memo((()=>{const{mainContent:e}=(0,n.d4)((e=>({mainContent:e.ChangeLayoutMode.mode}))),a=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h.k2,{to:"#",children:[(0,j.jsx)(o.A,{}),(0,j.jsx)("span",{children:"Printer"})]}),(0,j.jsxs)(h.k2,{to:"#",children:[(0,j.jsx)(i.A,{}),(0,j.jsx)("span",{children:"PDF"})]}),(0,j.jsxs)(h.k2,{to:"#",children:[(0,j.jsx)(l.A,{}),(0,j.jsx)("span",{children:"Google Sheets"})]}),(0,j.jsxs)(h.k2,{to:"#",children:[(0,j.jsx)(c.A,{}),(0,j.jsx)("span",{children:"Excel (XLSX)"})]}),(0,j.jsxs)(h.k2,{to:"#",children:[(0,j.jsx)(d.A,{}),(0,j.jsx)("span",{children:"CSV"})]})]});return(0,j.jsx)(p.SalesOverviewStyleWrap,{children:(0,j.jsx)(x.Cards,{title:"Sales Overview",more:a,children:(0,j.jsxs)("div",{className:"ninjadash-sales-inner",children:[(0,j.jsx)(s.A,{type:"circle",width:230,percent:75,strokeColor:"#0372CE",trailColor:"lightMode"===e?"#E6D5F6":"#322035"}),(0,j.jsx)("div",{className:"ninjadash-sales-content d-flex",children:u.map(((e,a)=>(0,j.jsxs)("div",{className:"ninjadash-sales-content__item",children:[(0,j.jsx)("span",{className:"ninjadash-sales-content__item--label",children:e.status}),(0,j.jsx)("h4",{className:"ninjadash-sales-content__item--total",children:e.salesCount})]},a)))})]})})})}))},26851:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var r=t(9950),n=t(87094),s=t(41988),o=t(29989),i=t(62976),l=t(29355),d=t(63348),c=t(35999),h=t(20156),x=t(44414);const p=r.memo((()=>(0,x.jsx)(n.A,{gutter:25,children:h.map(((e,a)=>(0,x.jsx)(s.A,{xxl:8,md:2===a?24:12,sm:24,xs:24,children:(0,x.jsx)(c.TotalChartStyleWrap,{children:(0,x.jsx)("div",{className:"ninjaDash-total-chart",children:(0,x.jsx)(c.ChartContainer,{children:(0,x.jsx)(l.Cards,{title:(0,x.jsxs)("div",{className:"ninjadash-card-title-wrap",children:[(0,x.jsxs)("span",{className:"ninjadash-card-title-text",children:["Total ",e.title,(0,x.jsxs)("span",{className:"ninjadash-card-subtitile",children:["(Last",e.period,")"]})]}),(0,x.jsxs)("span",{className:"ninjadash-card-title-extra-text",children:[(0,x.jsx)("span",{className:"ninjadash-total-chart-total",children:"$8550"}),(0,x.jsxs)("span",{className:`ninjadash-total-chart-status ninjadash-total-chart-status-${e.status}`,children:["growth"===e.status?(0,x.jsx)(o.A,{}):(0,x.jsx)(i.A,{}),"25.36%"]})]})]}),children:(0,x.jsx)("div",{className:"ninjadash-chart-container",children:(0,x.jsx)(d.default,{labels:e.labels,id:`id_${a}`,datasets:[{data:e.data,borderColor:e.lineColor,borderWidth:3,fill:!1,pointBackgroundColor:"#FA8B0C",pointBorderColor:"#fff",pointHoverBorderColor:"#fff",pointBorderWidth:0,pointHoverBorderWidth:0,pointHoverRadius:0,z:5}],height:window.innerWidth<=575?200:180,tooltip:{custom(e){e&&(e.displayColors=!1)},callbacks:{title(e){const{label:a}=e[0];return`${a}`},label(a){const{formattedValue:t}=a;return`  ${e.title}: ${t}k`},labelColor:()=>({backgroundColor:e.lineColor,borderColor:"transparent"})}}})})})})})})},a)))})))},12866:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});t(9950);var r=t(87094),n=t(41988),s=t(34166),o=t(57687),i=t(67482),l=t(71976),d=t(26851),c=t(50356),h=t(43405),x=t(6013),p=t(29665),u=t(44414);const j=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.PageHeader,{title:"Widgets Charts",routes:[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Widgets Charts"}]}),(0,u.jsx)(i.Main,{children:(0,u.jsx)(s.CardChartStyle,{children:(0,u.jsxs)(r.A,{gutter:25,children:[(0,u.jsx)(n.A,{xs:24,children:(0,u.jsx)(l.default,{})}),(0,u.jsx)(n.A,{xs:24,children:(0,u.jsx)(d.default,{})}),(0,u.jsx)(n.A,{xxl:9,xs:24,children:(0,u.jsx)(c.default,{})}),(0,u.jsx)(n.A,{xxl:15,xs:24,children:(0,u.jsx)(h.default,{})}),(0,u.jsx)(n.A,{xxl:16,xs:24,children:(0,u.jsx)(p.default,{})}),(0,u.jsx)(n.A,{xxl:8,xs:24,children:(0,u.jsx)(x.default,{})})]})})})]})}},34166:(e,a,t)=>{t.r(a),t.d(a,{CardChartStyle:()=>n,MixedCardWrap:()=>s,OverviewCard:()=>i,SocialMediaWrapper:()=>o});var r=t(19335);const n=r.Ay.div`
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
`,s=r.Ay.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`,o=r.Ay.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`,i=r.Ay.div`
    background: ${e=>{let{theme:a}=e;return a[a.mainContent]["white-background"]}};
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${e=>{let{theme:a}=e;return a.topMenu?"min-height: 595px":"min-height: auto"}};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${e=>{let{theme:a}=e;return a["secondary-color"]}}, ${e=>{let{theme:a}=e;return a["warning-color"]}});
  ${e=>{let{theme:a}=e;return a.rtl?"right":"left"}}:0;
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
                color: ${e=>{let{theme:a}=e;return a["light-color"]}};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${e=>{let{theme:a}=e;return a.rtl?"margin-right":"margin-left"}}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${e=>{let{theme:a}=e;return a["success-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${e=>{let{theme:a}=e;return a["light-gray-color"]}};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${e=>{let{theme:a}=e;return a["danger-color"]}};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${e=>{let{theme:a}=e;return a["light-gray-color"]}};
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
                ${e=>{let{theme:a}=e;return a.rtl?"margin-right":"margin-left"}}: 8px;
            }
        }
    }
`},20156:e=>{e.exports=JSON.parse('[{"title":"Sales","labels":["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct"],"data":[20,38,30,42,38,78,60,65,50,80],"lineColor":"#760DFF","period":"10 Months","total":"8,550","status":"growth","statusRate":"25.36"},{"title":"Orders","labels":["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],"data":[32,20,45,35,58,56,65],"lineColor":"#01B81A","period":"7 Days","total":"950","status":"growth","statusRate":"25.36"},{"title":"Subscribes","labels":["2014","2015","2016","2017","2018","2019","2020","2021"],"data":[40,45,38,45,35,65,55,60],"lineColor":"#FA8B0C","period":"8 Years","total":"8,550","status":"down","statusRate":"25.36"}]')},9633:e=>{e.exports=JSON.parse('[{"id":1,"salesCount":"123,456","status":"Completed"},{"id":2,"salesCount":"12,498","status":"In Progress"}]')}}]);