"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[9131],{69143:(e,r,t)=>{t.r(r),t.d(r,{CalendarButtonPageHeader:()=>i});var a=t(67636),n=(t(9950),t(80303)),d=t(43713),s=t(72449),o=t(44414);function i(){const e=(0,o.jsx)(n.DateRangePickerOne,{});return(0,o.jsx)(d.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover",children:(0,o.jsxs)(s.Button,{size:"small",type:"white",children:[(0,o.jsx)(a.A,{}),"Calendar"]})})}},79523:(e,r,t)=>{t.r(r),t.d(r,{ExportButtonPageHeader:()=>u});var a=t(77638),n=t(49038),d=t(49806),s=t(1560),o=t(64005),i=t(67128),l=(t(9950),t(42074)),h=t(43713),c=t(72449),p=t(44414);function u(){const e=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(o.A,{}),(0,p.jsx)("span",{children:"Printer"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(a.A,{}),(0,p.jsx)("span",{children:"PDF"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(s.A,{}),(0,p.jsx)("span",{children:"Google Sheets"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(i.A,{}),(0,p.jsx)("span",{children:"Excel (XLSX)"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(d.A,{}),(0,p.jsx)("span",{children:"CSV"})]})]});return(0,p.jsx)(h.Popover,{placement:"bottomLeft",content:e,trigger:"click",children:(0,p.jsxs)(c.Button,{size:"small",type:"white",children:[(0,p.jsx)(n.A,{}),"Export"]})})}},48989:(e,r,t)=>{t.r(r),t.d(r,{ShareButtonPageHeader:()=>u});var a=t(90743),n=t(41006),d=t(82498),s=t(90434),o=t(25955),i=t(64833),l=(t(9950),t(42074)),h=t(43713),c=t(72449),p=t(44414);function u(){const e=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(a.A,{}),(0,p.jsx)("span",{children:"Facebook"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(i.A,{}),(0,p.jsx)("span",{children:"Twitter"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(s.A,{}),(0,p.jsx)("span",{children:"Feed"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(d.A,{}),(0,p.jsx)("span",{children:"Linkedin"})]}),(0,p.jsxs)(l.k2,{to:"#",children:[(0,p.jsx)(n.A,{}),(0,p.jsx)("span",{children:"Instagram"})]})]});return(0,p.jsx)(h.Popover,{placement:"bottomLeft",content:e,trigger:"click",children:(0,p.jsxs)(c.Button,{size:"small",type:"white",children:[(0,p.jsx)(o.A,{}),"Share"]},"3")})}},95771:(e,r,t)=>{t.r(r),t.d(r,{Cascader:()=>s});var a=t(9950),n=t(97794),d=t(44414);function s(e){const{data:r,defaultValue:t,trigger:s,onChange:o,isShowSearch:i,loading:l,placeholder:h}=e,c=r,[p,u]=(0,a.useState)({options:c});return(0,d.jsx)(n.CascaderStyle,{options:c,expandTrigger:s,defaultValue:t,onChange:l?(e,r)=>{o(e,r)}:e=>{o(e)},showSearch:i&&{filter:(e,r)=>r.some((r=>r.label.toLowerCase().indexOf(e.toLowerCase())>-1))},loadData:e=>{const r=e[e.length-1];r.loading=!0,setTimeout((()=>{r.loading=!1,r.children=[{label:`${r.label} Dynamic 1`,value:"dynamic1"},{label:`${r.label} Dynamic 2`,value:"dynamic2"}],u({options:[...p.options]})}),1e3)},placeholder:h,changeOnSelect:!!l})}s.defaultProps={data:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],defaultValue:[],trigger:"click",placeholder:"Please select"}},97794:(e,r,t)=>{t.r(r),t.d(r,{CascaderStyle:()=>n});var a=t(75139);const n=(0,t(19335).Ay)(a.A)`
    .ant-input{
        padding: 5.5px 20px;
    }
    .anticon svg{
        width: 10px;
        height: 8.5px;
    }
`},80303:(e,r,t)=>{t.r(r),t.d(r,{CustomDateRange:()=>c,DateRangePickerOne:()=>h});var a=t(477),n=t(56712),d=t(9950),s=t(20162),o=(t(39890),t(34779),t(21968)),i=t(72449),l=t(44414);function h(){const[e,r]=(0,d.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:(0,n.default)(new Date,7),key:"selection"}}}),{dateRangePicker:t}=e,a=t.selection.startDate.toString().split(" "),h=t.selection.endDate.toString().split(" ");return(0,l.jsxs)(o.ItemWraper,{children:[(0,l.jsx)(s.Ur,{onChange:t=>{r({...e,dateRangePicker:{...e.dateRangePicker,...t}})},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[t.selection],direction:"horizontal"}),(0,l.jsxs)(o.ButtonGroup,{children:[(0,l.jsx)("p",{children:`${a[1]} ${a[2]} ${a[3]} - ${h[1]} ${h[2]} ${h[3]}`}),(0,l.jsx)(i.Button,{size:"small",type:"primary",children:"Apply"}),(0,l.jsx)(i.Button,{size:"small",type:"white",outlined:!0,children:"Cancel"})]})]})}class c extends d.Component{constructor(){super(...arguments),this.state={startValue:null,endValue:null,endOpen:!1},this.disabledStartDate=e=>{const{endValue:r}=this.state;return!(!e||!r)&&e.valueOf()>r.valueOf()},this.disabledEndDate=e=>{const{startValue:r}=this.state;return!(!e||!r)&&e.valueOf()<=r.valueOf()},this.onChange=(e,r)=>{this.setState({[e]:r})},this.onStartChange=e=>{this.onChange("startValue",e)},this.onEndChange=e=>{this.onChange("endValue",e)},this.handleStartOpenChange=e=>{e||this.setState({endOpen:!0})},this.handleEndOpenChange=e=>{this.setState({endOpen:e})}}render(){const{startValue:e,endValue:r,endOpen:t}=this.state;return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.A,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:e,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),(0,l.jsx)(a.A,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:r,placeholder:"End",onChange:this.onEndChange,open:t,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}})]})}}},21968:(e,r,t)=>{t.r(r),t.d(r,{ButtonGroup:()=>d,ItemWraper:()=>n});var a=t(19335);const n=a.Ay.div`
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
`,d=a.Ay.div`
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
`},44646:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var a=t(9950),n=t(99674),d=t(55902),s=t(87827),o=t(87094),i=t(41988),l=t(40577),h=t(78732),c=t(57687),p=t(67482),u=t(29355),m=t(95771),x=t(72449),g=t(48989),y=t(79523),D=t(69143),j=t(44414);const{Option:f}=n.A,{TextArea:b}=d.A;const v=function(){const[e]=s.A.useForm(),[r,t]=(0,a.useState)({values:{},cascaderItem:[]});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.PageHeader,{ghost:!0,title:"Form",buttons:[(0,j.jsxs)("div",{className:"page-header-actions",children:[(0,j.jsx)(D.CalendarButtonPageHeader,{}),(0,j.jsx)(y.ExportButtonPageHeader,{}),(0,j.jsx)(g.ShareButtonPageHeader,{}),(0,j.jsxs)(x.Button,{size:"small",type:"primary",children:[(0,j.jsx)(h.A,{}),"Add New"]})]},"1")]}),(0,j.jsx)(p.Main,{children:(0,j.jsx)(o.A,{gutter:25,children:(0,j.jsx)(i.A,{md:12,sm:24,xs:24,children:(0,j.jsx)(u.Cards,{title:"Elements of Form",caption:"The simplest use of Form",children:(0,j.jsx)(p.BasicFormWrapper,{children:(0,j.jsxs)(s.A,{layout:"vertical",form:e,name:"basicforms",onFinish:e=>{t({...r,values:e})},children:[(0,j.jsx)(s.A.Item,{label:"Username",name:"username",children:(0,j.jsx)(d.A,{placeholder:"Username"})}),(0,j.jsx)(s.A.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:(0,j.jsx)(d.A,{placeholder:"Email"})}),(0,j.jsx)(s.A.Item,{label:"Age",name:"age",rules:[{required:!0,message:"Please input your age!",type:"number"}],children:(0,j.jsx)(l.A,{})}),(0,j.jsx)(s.A.Item,{label:"Website",name:"website",children:(0,j.jsx)(d.A,{placeholder:"http://website.com"})}),(0,j.jsx)(s.A.Item,{label:"Textarea",name:"textarea",children:(0,j.jsx)(b,{})}),(0,j.jsxs)("div",{className:"form-item",children:[(0,j.jsx)("label",{children:"Cascades"}),(0,j.jsx)(m.Cascader,{onChange:e=>{t({...r,cascaderItem:e})},defaultValue:["zhejiang","hangzhou","xihu"]})]}),(0,j.jsx)(s.A.Item,{label:"Select",name:"Select",children:(0,j.jsxs)(n.A,{showSearch:!0,placeholder:"Please Slelect",optionFilterProp:"children",filterOption:(e,r)=>r.props.children.toLowerCase().indexOf(e.toLowerCase())>=0,children:[(0,j.jsx)(f,{value:"",children:"Please Select"}),(0,j.jsx)(f,{value:"jack",children:"Jack"}),(0,j.jsx)(f,{value:"lucy",children:"Lucy"}),(0,j.jsx)(f,{value:"tom",children:"Tom"})]})}),(0,j.jsx)(s.A.Item,{children:(0,j.jsx)(x.Button,{htmlType:"submit",size:"default",type:"primary",children:"Submit"})})]})})})})})})]})}}}]);