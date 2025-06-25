import{s as p,fv as g,j as t,fw as T,ay as i,P as x,M as A,e as u,f as a}from"./index-zxEALkft.js";const{TabPane:C}=g,D=p(g)`
  margin-bottom: 30px !important;
  .ant-tabs-nav-wrap{
    .ant-tabs-tab{
      &.ant-tabs-tab-active{
        .ant-tabs-tab-btn{
          color: ${({theme:e})=>e[e.mainContent]["menu-active"]};
        }
        span{
          color: ${({theme:e})=>e[e.mainContent]["white-text"]};
        }
      }
    }
    .ant-tabs-tab-btn{
      color: ${({theme:e})=>e[e.mainContent]["gray-text"]};
    }
    .ant-tabs-ink-bar{
      background-color: ${({theme:e})=>e[e.mainContent]["menu-active"]};
    }
  }
  .ant-tabs-content-holder{
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      color: ${({theme:e})=>e[e.mainContent]["dark-text"]};
    }
    p{
      color: ${({theme:e})=>e[e.mainContent]["gray-text"]};
    }
  }
  &.ninjadash-tab-primary{
    .ant-tabs-nav{
      .ant-tabs-tab{
        &.ant-tabs-tab-active{
          color: #fff;
          border-radius: 3px;
          background-color: ${({theme:e})=>e[e.mainContent]["primary-background"]};
          span{
            color: #fff;
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${({theme:e})=>e[e.mainContent]["primary-background"]};
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
          color: ${({theme:e})=>e[e.mainContent]["menu-active"]};
          border-radius: 3px;
          background-color: ${({theme:e})=>e[e.mainContent]["white-background"]};
          span{
            color: ${({theme:e})=>e[e.mainContent]["menu-active"]};
          }
        }
      }
    }
    .ant-tabs-content{
      padding: 15px;
      background-color: ${({theme:e})=>e[e.mainContent]["white-background"]};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        color: ${({theme:e})=>e[e.mainContent]["gray-text"]};
      }
      p{
        color: ${({theme:e})=>e[e.mainContent]["dark-text"]};
      }
    }
  }
`,y=p(C)` 
    
`;function n(e){const{data:q,tabPosition:o,type:b,color:s}=e;let l=0;return t.jsx(D,{className:`ninjadash-tab-${b}`,color:s&&s,defaultActiveKey:"1",tabPosition:o!==void 0?o:"top",children:q.map(v=>{const{title:j,content:h,icon:c,tabTitle:r}=v,f=T[c];return l+=1,t.jsxs(y,{color:s&&s,tab:c===void 0?r:t.jsxs("span",{children:[t.jsx(f,{}),r]}),children:[t.jsx("h2",{children:j}),t.jsx("p",{children:h})]},l)})})}n.propTypes={color:i.string,type:i.string,tabPosition:i.string,data:i.arrayOf(i.object)};const I=[{id:1,title:"Tab one",tabTitle:"Tab one",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:2,title:"Tab two",tabTitle:"Tab two",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:3,title:"Tab three",tabTitle:"Tab three",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:4,title:"Tab four",tabTitle:"Tab four",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:5,title:"Tab five",tabTitle:"Tab Five",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],$=[{id:1,title:"Tab one",tabTitle:"Tab one",icon:"UilSmile",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:2,title:"Tab two",tabTitle:"Tab two",icon:"UilCamera",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:3,title:"Tab three",tabTitle:"Tab three",icon:"UilAt",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:4,title:"Tab four",tabTitle:"Tab four",icon:"UilHome",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:5,title:"Tab five",tabTitle:"Tab five",icon:"UilAirplay",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],N=[{id:1,title:"Tab one",icon:"UilSmile",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:2,title:"Tab two",icon:"UilCamera",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:3,title:"Tab three",icon:"UilAt",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:4,title:"Tab four",icon:"UilHome",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},{id:5,title:"Tab five",icon:"UilAirplay",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque penatibus et magnis neque dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}],L={data:I,dataIcon:$,icon:N},{data:m,dataIcon:d,icon:w}=L;function U(){const e=[{path:"/admin",breadcrumbName:"Dashboard"},{path:"",breadcrumbName:"Tabs"}];return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Tabs",routes:e}),t.jsxs(A,{children:[t.jsxs(u,{gutter:25,children:[t.jsx(a,{md:12,xs:24,children:t.jsx(n,{data:m})}),t.jsx(a,{md:12,xs:24,children:t.jsx(n,{data:m,color:"default"})})]}),t.jsxs(u,{gutter:15,children:[t.jsx(a,{md:12,xs:24,children:t.jsx(n,{data:d,type:"primary",color:"#FB3586"})}),t.jsx(a,{md:12,xs:24,children:t.jsx(n,{data:w,type:"primary",color:"#FB3586"})})]}),t.jsx(u,{gutter:15,children:t.jsx(a,{md:12,xs:24,children:t.jsx(n,{data:d,type:"white",color:"#ffffff"})})})]})]})}export{U as default};
