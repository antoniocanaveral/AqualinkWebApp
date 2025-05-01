"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[4357],{69143:(e,r,t)=>{t.r(r),t.d(r,{CalendarButtonPageHeader:()=>d});var n=t(67636),a=(t(9950),t(80303)),o=t(43713),s=t(72449),i=t(44414);function d(){const e=(0,i.jsx)(a.DateRangePickerOne,{});return(0,i.jsx)(o.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover",children:(0,i.jsxs)(s.Button,{size:"small",type:"white",children:[(0,i.jsx)(n.A,{}),"Calendar"]})})}},79523:(e,r,t)=>{t.r(r),t.d(r,{ExportButtonPageHeader:()=>p});var n=t(77638),a=t(49038),o=t(49806),s=t(1560),i=t(64005),d=t(67128),l=(t(9950),t(42074)),c=t(43713),u=t(72449),h=t(44414);function p(){const e=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(i.A,{}),(0,h.jsx)("span",{children:"Printer"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(n.A,{}),(0,h.jsx)("span",{children:"PDF"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(s.A,{}),(0,h.jsx)("span",{children:"Google Sheets"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(d.A,{}),(0,h.jsx)("span",{children:"Excel (XLSX)"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(o.A,{}),(0,h.jsx)("span",{children:"CSV"})]})]});return(0,h.jsx)(c.Popover,{placement:"bottomLeft",content:e,trigger:"click",children:(0,h.jsxs)(u.Button,{size:"small",type:"white",children:[(0,h.jsx)(a.A,{}),"Export"]})})}},48989:(e,r,t)=>{t.r(r),t.d(r,{ShareButtonPageHeader:()=>p});var n=t(90743),a=t(41006),o=t(82498),s=t(90434),i=t(25955),d=t(64833),l=(t(9950),t(42074)),c=t(43713),u=t(72449),h=t(44414);function p(){const e=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(n.A,{}),(0,h.jsx)("span",{children:"Facebook"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(d.A,{}),(0,h.jsx)("span",{children:"Twitter"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(s.A,{}),(0,h.jsx)("span",{children:"Feed"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(o.A,{}),(0,h.jsx)("span",{children:"Linkedin"})]}),(0,h.jsxs)(l.k2,{to:"#",children:[(0,h.jsx)(a.A,{}),(0,h.jsx)("span",{children:"Instagram"})]})]});return(0,h.jsx)(c.Popover,{placement:"bottomLeft",content:e,trigger:"click",children:(0,h.jsxs)(u.Button,{size:"small",type:"white",children:[(0,h.jsx)(i.A,{}),"Share"]},"3")})}},80303:(e,r,t)=>{t.r(r),t.d(r,{CustomDateRange:()=>u,DateRangePickerOne:()=>c});var n=t(477),a=t(56712),o=t(9950),s=t(20162),i=(t(39890),t(34779),t(21968)),d=t(72449),l=t(44414);function c(){const[e,r]=(0,o.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:(0,a.default)(new Date,7),key:"selection"}}}),{dateRangePicker:t}=e,n=t.selection.startDate.toString().split(" "),c=t.selection.endDate.toString().split(" ");return(0,l.jsxs)(i.ItemWraper,{children:[(0,l.jsx)(s.Ur,{onChange:t=>{r({...e,dateRangePicker:{...e.dateRangePicker,...t}})},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[t.selection],direction:"horizontal"}),(0,l.jsxs)(i.ButtonGroup,{children:[(0,l.jsx)("p",{children:`${n[1]} ${n[2]} ${n[3]} - ${c[1]} ${c[2]} ${c[3]}`}),(0,l.jsx)(d.Button,{size:"small",type:"primary",children:"Apply"}),(0,l.jsx)(d.Button,{size:"small",type:"white",outlined:!0,children:"Cancel"})]})]})}class u extends o.Component{constructor(){super(...arguments),this.state={startValue:null,endValue:null,endOpen:!1},this.disabledStartDate=e=>{const{endValue:r}=this.state;return!(!e||!r)&&e.valueOf()>r.valueOf()},this.disabledEndDate=e=>{const{startValue:r}=this.state;return!(!e||!r)&&e.valueOf()<=r.valueOf()},this.onChange=(e,r)=>{this.setState({[e]:r})},this.onStartChange=e=>{this.onChange("startValue",e)},this.onEndChange=e=>{this.onChange("endValue",e)},this.handleStartOpenChange=e=>{e||this.setState({endOpen:!0})},this.handleEndOpenChange=e=>{this.setState({endOpen:e})}}render(){const{startValue:e,endValue:r,endOpen:t}=this.state;return(0,l.jsxs)("div",{children:[(0,l.jsx)(n.A,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:e,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),(0,l.jsx)(n.A,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:r,placeholder:"End",onChange:this.onEndChange,open:t,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}})]})}}},21968:(e,r,t)=>{t.r(r),t.d(r,{ButtonGroup:()=>o,ItemWraper:()=>a});var n=t(19335);const a=n.Ay.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrMonth {
        position: relative;
        max-width: 272px;
    }
    .rdrMonthName {
        text-align: center;
        font-size: 18px;
        position: absolute;
        top: -50px;
        ${e=>{let{theme:r}=e;return r.rtl?"right":"left"}}: 100px;
        font-weight: 400;
    }
    .rdrDefinedRangesWrapper{
        .rdrStaticRanges{
            .rdrStaticRange{
                border-bottom: 0 none;
                &:hover,
                &.rdrStaticRangeSelected{
                    span{
                        font-weight: 400;
                        color: ${e=>{let{theme:r}=e;return r["primary-color"]}};
                        background-color: #FFEAF3;
                    }
                }
                .rdrStaticRangeLabel{
                    padding: 9px 10px;
                }
            }
        }
    }
    .rdrCalendarWrapper{
        .rdrPprevButton,
        .rdrNextButton{
            padding: 0;
            background: transparent;
        }
        .rdrMonthsHorizontal{
            .rdrMonth{
                .rdrMonthName{
                    font-size: 13px;
                    font-weight: 500;
                    color: ${e=>{let{theme:r}=e;return r["dark-color"]}};
                }
            }
            .rdrDays{
                .rdrSelected, 
                .rdrInRange{                    
                    background-color: #EFEFFE;
                    left: 0 !important;
                    right: 0 !important;
                }
                .rdrStartEdge{
                    right: 0 !important;
                    left: 0 !important;
                    ${e=>{let{theme:r}=e;return r.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}};
                    ${e=>{let{theme:r}=e;return r.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}};
                }
                .rdrEndEdge{
                    ${e=>{let{theme:r}=e;return r.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}};
                    ${e=>{let{theme:r}=e;return r.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}};
                }
                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
                    border-radius: 0px;
                }
                
                .rdrDayEndOfWeek .rdrDayStartPreview,
                .rdrDayEndOfWeek .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview,
                .rdrDayEndOfMonth .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrInRange, 
                .rdrDayEndOfWeek .rdrInRange, 
                .rdrDayEndOfWeek .rdrStartEdge
                .rdrDayStartOfMonth .rdrInRange, 
                .rdrDayStartOfWeek .rdrInRange{
                    border-radius: 0;
                }

                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{
                    border-radius: 1.042em;
                    color: #fff !important;
                }
                
                .rdrDayEndPreview,
                .rdrDayStartPreview,
                .rdrDayInPreview{
                    border: 0 none;
                    background-color: #EFEFFE;
                    color: ${e=>{let{theme:r}=e;return r["dark-color"]}} !importtant;
                    top: 0;
                    bottom: 0;
                }
                
                .rdrStartEdge, 
                .rdrEndEdge,
                .rdrDayStartPreview,
                .rdrDayEndPreview{
                    background-color: ${e=>{let{theme:r}=e;return r["primary-color"]}};
                }

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
                    color: ${e=>{let{theme:r}=e;return r["dark-color"]}} !important;
                }
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{
                    color: #fff !important;
                }
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{
                    color: #fff;
                }
                .rdrDay{
                    margin-bottom: 3px;
                    .rdrSelected, 
                    .rdrInRange, 
                    .rdrStartEdge, 
                    .rdrEndEdge{
                        top: 0;
                        bottom: 0;

                    }
                    .rdrDayNumber{
                        z-index: 10;
                    }
                    &.rdrDayToday{
                        background-color: ${e=>{let{theme:r}=e;return r["primary-color"]}};
                        color: #fff;
                        border-radius: 50%;
                        .rdrDayNumber{
                            span{
                                color: #fff;
                                &:after{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,o=n.Ay.div`
    border-top: 1px solid #EEEFF2;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: -4px -4px -15px;
    p{
        font-size: 13px;
    margin: ${e=>{let{theme:r}=e;return r.rtl?"0 0 0 20px":"0 20px 0 0"}};
        font-weight: 500;
        color: ${e=>{let{theme:r}=e;return r["gray-color"]}};
    }
    button {
        font-size: 12px;
        margin: 4px;
        height: 32px;
        padding: 0px 13.26px;
    }
`},2188:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var n=t(9950),a=t(73878),o=t(78732),s=t(87094),i=t(41988),d=t(42074),l=t(31208),c=t(8603),u=t(67482),h=t(57687),p=t(81883),m=t(72449),y=t(48989),g=t(79523),f=t(69143),D=t(44414);const x=function(){const e=(0,a.wA)(),[r,t]=(0,n.useState)({activeClass:""}),x=n=>{e((0,p.galleryFilter)("category",n)),t({...r,activeClass:n})};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h.PageHeader,{ghost:!0,title:"Gallery",buttons:[(0,D.jsxs)("div",{className:"page-header-actions",children:[(0,D.jsx)(f.CalendarButtonPageHeader,{}),(0,D.jsx)(g.ExportButtonPageHeader,{}),(0,D.jsx)(y.ShareButtonPageHeader,{}),(0,D.jsxs)(m.Button,{size:"small",type:"primary",children:[(0,D.jsx)(o.A,{}),"Add New"]})]},"1")]}),(0,D.jsx)(u.Main,{children:(0,D.jsxs)(s.A,{gutter:25,children:[(0,D.jsx)(i.A,{xs:24,children:(0,D.jsx)(c.GalleryNav,{children:(0,D.jsxs)("ul",{children:[(0,D.jsx)("li",{children:(0,D.jsx)(d.N_,{className:""===r.activeClass?"active":"deactivate",onClick:()=>x(""),to:"#",children:"All"})}),(0,D.jsx)("li",{children:(0,D.jsx)(d.N_,{className:"webDesign"===r.activeClass?"active":"deactivate",onClick:()=>x("webDesign"),to:"#",children:"Web Design"})}),(0,D.jsx)("li",{children:(0,D.jsx)(d.N_,{className:"uiDesign"===r.activeClass?"active":"deactivate",onClick:()=>x("uiDesign"),to:"#",children:"UI Design"})}),(0,D.jsx)("li",{children:(0,D.jsx)(d.N_,{className:"wireframe"===r.activeClass?"active":"deactivate",onClick:()=>x("wireframe"),to:"#",children:"Wireframe"})}),(0,D.jsx)("li",{children:(0,D.jsx)(d.N_,{className:"Presentation"===r.activeClass?"active":"deactivate",onClick:()=>x("Presentation"),to:"#",children:"Presentation"})})]})})}),(0,D.jsx)(l.A,{breakpointCols:4,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"})]})})]})}},81883:(e,r,t)=>{t.r(r),t.d(r,{galleryFilter:()=>d});var n=t(98638),a=t(35155);const{filterGalleryBegin:o,filterGallerySuccess:s,filterGalleryErr:i}=n.default,d=(e,r)=>async t=>{try{t(o()),setTimeout((()=>{const n=a.filter((t=>""!==r?t[e]===r:t));t(s(n))}),500)}catch(n){t(i(n))}}},31208:(e,r,t)=>{t.d(r,{A:()=>u});var n=t(9950);function a(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const l={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class c extends n.Component{constructor(e){let r;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),r=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:r}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let r=this.props.breakpointCols;"object"!==typeof r&&(r={default:parseInt(r)||2});let t=1/0,n=r.default||2;for(let a in r){const o=parseInt(a);o>0&&e<=o&&o<t&&(t=o,n=r[a])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}itemsInColumns(){const e=this.state.columnCount,r=new Array(e),t=n.Children.toArray(this.props.children);for(let n=0;n<t.length;n++){const a=n%e;r[a]||(r[a]=[]),r[a].push(t[n])}return r}renderColumns(){const{column:e,columnAttrs:r={},columnClassName:t}=this.props,a=this.itemsInColumns(),s=100/a.length+"%";let d=t;d&&"string"!==typeof d&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof d&&(d="my-masonry-grid_column"));const l=i(i(i({},e),r),{},{style:i(i({},r.style),{},{width:s}),className:d});return a.map(((e,r)=>n.createElement("div",o({},l,{key:r}),e)))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:r,breakpointCols:t,columnClassName:s,columnAttrs:i,column:d,className:l}=e,c=a(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let u=l;return"string"!==typeof l&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof l&&(u="my-masonry-grid")),n.createElement("div",o({},c,{className:u}),this.renderColumns())}}c.defaultProps=l;const u=c}}]);