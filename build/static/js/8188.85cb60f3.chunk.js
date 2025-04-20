"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[8188],{10146:(e,t,n)=>{n.r(t),n.d(t,{Child:()=>o,TabBasic:()=>s});var i=n(10384),a=n(19335);const{TabPane:u}=i.A,s=(0,a.Ay)(i.A)`
  margin-bottom: 30px !important;
  .ant-tabs-nav-wrap{
    .ant-tabs-tab{
      &.ant-tabs-tab-active{
        .ant-tabs-tab-btn{
          color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
        }
        span{
          color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-text"]}};
        }
      }
    }
    .ant-tabs-tab-btn{
      color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
    }
    .ant-tabs-ink-bar{
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
    }
  }
  .ant-tabs-content-holder{
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
    }
    p{
      color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
    }
  }
  &.ninjadash-tab-primary{
    .ant-tabs-nav{
      .ant-tabs-tab{
        &.ant-tabs-tab-active{
          color: #fff;
          border-radius: 3px;
          background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["primary-background"]}};
          span{
            color: #fff;
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["primary-background"]}};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p{
        color: #fff;
      }
    }
  }
  &.ninjadash-tab-white{
    .ant-tabs-nav{
      .ant-tabs-tab{
        &.ant-tabs-tab-active{
          color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
          border-radius: 3px;
          background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
          span{
            color: ${e=>{let{theme:t}=e;return t[t.mainContent]["menu-active"]}};
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${e=>{let{theme:t}=e;return t[t.mainContent]["white-background"]}};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["gray-text"]}};
      }
      p{
        color: ${e=>{let{theme:t}=e;return t[t.mainContent]["dark-text"]}};
      }
    }
  }
`,o=(0,a.Ay)(u)` 
    
`},53927:(e,t,n)=>{n.r(t),n.d(t,{Tab:()=>s});var i=n(99716),a=(n(9950),n(10146)),u=n(44414);function s(e){const{data:t,tabPosition:n,type:s,color:o}=e;let l=0;return(0,u.jsx)(a.TabBasic,{className:`ninjadash-tab-${s}`,color:o&&o,defaultActiveKey:"1",tabPosition:void 0!==n?n:"top",children:t.map((e=>{const{title:t,content:n,icon:s,tabTitle:r}=e,c=i[s];return l+=1,(0,u.jsxs)(a.Child,{color:o&&o,tab:void 0===s?r:(0,u.jsxs)("span",{children:[(0,u.jsx)(c,{}),r]}),children:[(0,u.jsx)("h2",{children:t}),(0,u.jsx)("p",{children:n})]},l)}))})}},48188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(9950);var i=n(87094),a=n(41988),u=n(57687),s=n(67482),o=n(53927),l=n(97133),r=n(44414);const{data:c,dataIcon:m,icon:d}=l;const p=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.PageHeader,{title:"Tabs",routes:[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Tabs"}]}),(0,r.jsxs)(s.Main,{children:[(0,r.jsxs)(i.A,{gutter:25,children:[(0,r.jsx)(a.A,{md:12,xs:24,children:(0,r.jsx)(o.Tab,{data:c})}),(0,r.jsx)(a.A,{md:12,xs:24,children:(0,r.jsx)(o.Tab,{data:c,color:"default"})})]}),(0,r.jsxs)(i.A,{gutter:15,children:[(0,r.jsx)(a.A,{md:12,xs:24,children:(0,r.jsx)(o.Tab,{data:m,type:"primary",color:"#FB3586"})}),(0,r.jsx)(a.A,{md:12,xs:24,children:(0,r.jsx)(o.Tab,{data:d,type:"primary",color:"#FB3586"})})]}),(0,r.jsx)(i.A,{gutter:15,children:(0,r.jsx)(a.A,{md:12,xs:24,children:(0,r.jsx)(o.Tab,{data:m,type:"white",color:"#ffffff"})})})]})]})}},97133:e=>{e.exports=JSON.parse('{"data":[{"id":1,"title":"Tab one","tabTitle":"Tab one","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","tabTitle":"Tab two","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","tabTitle":"Tab three","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","tabTitle":"Tab four","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","tabTitle":"Tab Five","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],"dataIcon":[{"id":1,"title":"Tab one","tabTitle":"Tab one","icon":"UilSmile","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","tabTitle":"Tab two","icon":"UilCamera","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","tabTitle":"Tab three","icon":"UilAt","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","tabTitle":"Tab four","icon":"UilHome","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","tabTitle":"Tab five","icon":"UilAirplay","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],"icon":[{"id":1,"title":"Tab one","icon":"UilSmile","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":2,"title":"Tab two","icon":"UilCamera","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":3,"title":"Tab three","icon":"UilAt","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":4,"title":"Tab four","icon":"UilHome","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{"id":5,"title":"Tab five","icon":"UilAirplay","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}]}')}}]);