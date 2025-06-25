import{j as e,L as i,s as l,ay as m,B as k,Q as y,dA as q,X as h,aQ as u,bV as j,r as U,c1 as J,t as R,P,M as $,e as x,f as a,dB as N,dC as C,w as H,V as T}from"./index-zxEALkft.js";import W from"./TeamCard-C3BX6y6J.js";import L from"./UserCard-DTZ59cmX.js";import O from"./GridCard-DiOBHyO0.js";import{P as z}from"./ProductCards-B5OoLEgz.js";import{P as D}from"./ProductCardList-BGREkLVw.js";import Z from"./GalleryCard-1ilPJwLj.js";import{C as G}from"./ContactCard-EQ_RTubQ.js";import{c as F,B as M}from"./sampleCards-IA1bdWVR.js";import{F as f}from"./FileListCard-3zVEL2Ge.js";import"./index-BnNXauMb.js";import"./utilities-DrZkDkFt.js";import"./style-D1fm3I6z.js";import"./Style-tNfHVfwY.js";import"./actionCreator-BikwtO8i.js";import"./index-fhUc5lt0.js";import"./StarFilled-CNXh7EtN.js";import"./style-B-Xn4eUk.js";import"./actionCreator-BSev84vd.js";const K=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 0;
  figcaption {
    h2 {
      margin: 18px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    }
    p {
      line-height: 1.79;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    a {
      color: ${({theme:t})=>t["primary-color"]};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;function Q({item:t}){const{content:s,title:n,img:o}=t;return e.jsxs(K,{children:[e.jsx("img",{src:require(`../../../${o}`),alt:""}),e.jsxs("figcaption",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:s}),e.jsx(i,{to:"#",children:"Learn More"})]})]})}Q.propTypes={item:m.object};Q.defaultProps={item:{id:1,title:"Creative Planning",content:"Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled and typesetting industry.",img:"static/img/icon/strategy.svg"}};const V=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  border-radius: 10px;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h2 {
      margin: 0px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    }
    p {
      line-height: 1.79;
      margin-bottom: 15px;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    button {
      background: ${({theme:t})=>t["primary-color"]}15;
      color: ${({theme:t})=>t["primary-color"]};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;function v({item:t}){const{content:s,title:n,img:o}=t;return e.jsxs(V,{children:[e.jsx("img",{src:require(`../../../${o}`),alt:""}),e.jsxs("figcaption",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:s}),e.jsx(k,{type:"primary",size:"large",children:"View More"})]})]})}v.propTypes={item:m.object};v.defaultProps={item:{id:1,title:"Technology Change the World",content:"Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled",img:"static/img/sampleCards/1.png"}};const Y=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  margin: 0;
  figcaption {
    h2 {
      margin: 24px 0 10px 0;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    }
    p {
      line-height: 1.79;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
  }
`;function A({item:t}){const{content:s,title:n,img:o}=t;return e.jsxs(Y,{children:[e.jsx("img",{src:require(`../../../${o}`),alt:""}),e.jsxs("figcaption",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:s})]})]})}A.propTypes={item:m.object};A.defaultProps={item:{id:1,title:"User Friendly",content:"Lorem Ipsum is simply dummy text of the",img:"static/img/sampleCards/1.svg"}};const X=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h4 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        font-weight: 500;
        color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
      }
    }
    h2 {
      margin: 6px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    }
    p {
      line-height: 1.79;
      color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
    }
    button {
      background: ${({theme:t})=>t["primary-color"]}15;
      color: ${({theme:t})=>t["primary-color"]};
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
      .author {
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        img {
          width: 50px;
          border-radius: 50%;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"} : 10px;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
      .feedback {
        span {
          font-size: 13px;
          ${({theme:t})=>t.rtl?"margin-right":"margin-left"} : 10px;
          color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
          display: inline-flex;
          align-items: center;
          svg {
            width: 16px;
            height: 16px;
            margin: 0 5px;
            cursor: pointer;
            color: ${({theme:t})=>t[t.mainContent]["gray-light-text"]};
          }
        }
      }
    }
  }
`;function I({item:t}){const{content:s,title:n,img:o}=t;return e.jsxs(X,{children:[e.jsx("img",{src:require(`../../../${o}`),alt:""}),e.jsxs("figcaption",{children:[e.jsxs("h4",{children:[e.jsx("span",{children:"Web Development"}),e.jsx("span",{children:"01 July 2020 "})]}),e.jsx("h2",{children:n}),e.jsx("p",{children:s}),e.jsxs("div",{className:"feedbackSection",children:[e.jsxs("div",{className:"author",children:[e.jsx("img",{src:new URL("data:image/jpeg;base64,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",import.meta.url).href,alt:""}),e.jsx("span",{children:"Burns Marks"})]}),e.jsxs("div",{className:"feedback",children:[e.jsxs("span",{className:"like",children:[e.jsx(y,{}),"70"]}),e.jsxs("span",{className:"view",children:[e.jsx(q,{}),"120"]})]})]})]})]})}I.propTypes={item:m.object};I.defaultProps={item:{id:1,title:"How to Use Apples Products",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",img:"static/img/sampleCards/6.png"}};const ee=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 25px;
    background: ${({theme:t})=>t[t.mainContent]["dark-text"]}50;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: #fff;
      margin: 0px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      line-height: 25px;
      font-size: 13px;
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .author {
        color: #fff;
        img {
          width: 50px;
          border-radius: 50%;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"} : 10px;
        }
        span {
          font-weight: 500;
          font-size: 13px;
        }
      }
    }
  }
`;function E({item:t}){const{content:s,title:n,img:o,auth:c}=t;return e.jsxs(ee,{children:[e.jsx("img",{src:require(`../../../${o}`),alt:""}),e.jsxs("figcaption",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:s}),e.jsx("div",{className:"feedbackSection",children:e.jsxs("div",{className:"author",children:[e.jsx("img",{src:require(`../../../${c}`),alt:""}),e.jsx("span",{children:"Burns Marks"})]})})]})]})}E.propTypes={item:m.object};E.defaultProps={item:{id:1,title:"How to Use Apples Products",content:"Lorem Ipsum is simply dummy text of the printing ",img:"static/img/sampleCards/6.png"}};const te=l.figure`
  display: flex;
  margin: 0;
  position: relative;
  h2,
  p {
    margin: 0;
  }
  figcaption {
    .more {
      position: absolute;
      top: 0px;
      ${({theme:t})=>t.rtl?"left":"right"}: 0;
      a {
        color: ${({theme:t})=>t["extra-light-color"]};
      }
    }
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: ${({theme:t})=>t["light-color"]};
    }
  }
`,re=l.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:t,className:s})=>t[`${s}-color`]};
  ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
`;function B({item:t}){const{content:s,title:n,img:o,className:c}=t;return e.jsx(h,{headless:!0,children:e.jsxs(te,{children:[e.jsx(re,{className:c,children:e.jsx("img",{src:require(`../../../${o}`),alt:""})}),e.jsxs("figcaption",{children:[e.jsx("div",{className:"more",children:e.jsx(u,{action:["click"],className:"wide-dropdwon",content:e.jsxs(e.Fragment,{children:[e.jsx(i,{to:"#",children:"Edit"}),e.jsx(i,{to:"#",children:"Delete"}),e.jsx(i,{to:"#",children:"View"})]}),children:e.jsx(i,{to:"#",children:e.jsx(j,{})})})}),e.jsx("h2",{children:n}),e.jsx("p",{children:s})]})]})})}B.propTypes={item:m.object};B.defaultProps={item:{id:1,title:"47",content:"Total tasks",img:"static/img/icon/1.svg",className:"primary"}};const ae=l.figure`
  background: ${({theme:t})=>t[t.mainContent]["white-background"]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  .card-short {
    .card-short__title {
      padding: 25px 25px 0;
    }
    .card-short__content {
      padding: 0 25px;
      p {
        color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
      }
    }
    .card-short__title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 18px;
      color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
      img {
        max-width: 50px;
        ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 20px;
      }
    }
    .card-short__bottom {
      border-top: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      padding: 20px 25px 25px;
      .card-short-actions {
        .ant-btn-circle {
          border-radius: 42px;
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 16px;
          svg,
          img,
          i {
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
          }
        }
        .content-action {
          display: flex;
          align-items: center;
          .ant-dropdown-trigger {
            svg,
            img,
            i {
              color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
            }
          }
        }
      }
      .card-short-checkbox {
        display: none;
      }
      .content-installed {
        display: none !important;
      }
      .content-not-installed.content-action {
        justify-content: flex-end;
      }
      &.installed {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-not-installed {
          display: none;
        }
        .content-installed {
          display: flex !important;
          .more {
            line-height: 1;
          }
        }
        .card-short-checkbox {
          display: block !important;
          .ant-checkbox {
            &:hover {
              .ant-checkbox-inner {
                border-color: #01b81a;
              }
            }
          }
          .ant-checkbox-checked {
            &:after {
              border-color: ${({theme:t})=>t["success-color"]};
            }
            .ant-checkbox-inner {
              border-color: ${({theme:t})=>t["success-color"]};
              background: ${({theme:t})=>t["success-color"]};
              &:hover {
                border-color: ${({theme:t})=>t["success-color"]};
                background: ${({theme:t})=>t["success-color"]};
                color: #fff;
              }
            }
          }
          span {
            color: ${({theme:t})=>t["success-color"]};
          }
        }
      }
    }
  }
`;function _({item:t}){const{installed:s,content:n,title:o,img:c}=t,[g,p]=U.useState({checked:!1}),r=b=>{p({...g,checked:b})};return e.jsx(ae,{children:e.jsxs("div",{className:"card-short",children:[e.jsxs("h4",{className:"card-short__title align-v-center",children:[e.jsx("img",{src:require(`../../../${c}`),alt:""}),e.jsx("span",{children:o})]}),e.jsx("div",{className:"card-short__content",children:e.jsx("p",{children:n})}),e.jsxs("div",{className:s?"card-short__bottom installed":"card-short__bottom",children:[e.jsx("div",{className:"card-short-checkbox",children:e.jsx(J,{checked:g.checked,onChange:r,children:"Installed"})}),e.jsxs("div",{className:"card-short-actions",children:[e.jsxs("div",{className:"content-installed content-action",children:[e.jsx(k,{type:"primary",size:"small",shape:"circle",outlined:!0,children:"Open"}),e.jsx("div",{className:"more",children:e.jsx(u,{action:["click"],className:"wide-dropdwon",content:e.jsxs(e.Fragment,{children:[e.jsx(i,{to:"#",children:"Edit"}),e.jsx(i,{to:"#",children:"Delete"}),e.jsx(i,{to:"#",children:"View"})]}),children:e.jsx(i,{to:"#",children:e.jsx(j,{})})})})]}),e.jsxs("div",{className:"content-not-installed content-action",children:[e.jsx(k,{type:"primary",size:"small",shape:"circle",raised:!0,children:"Install"}),e.jsx("div",{className:"more",children:e.jsx(u,{action:["click"],className:"wide-dropdwon",content:e.jsxs(e.Fragment,{children:[e.jsx(i,{to:"#",children:"Edit"}),e.jsx(i,{to:"#",children:"Delete"}),e.jsx(i,{to:"#",children:"View"})]}),children:e.jsx(i,{to:"#",children:e.jsx(j,{})})})})]})]})]})]})})}_.propTypes={item:m.object};_.defaultProps={item:{id:1,title:"Adobe CC",installed:!0,content:"Lorem Ipsum is simply dummy text of the and the typesetting industry.",img:"static/img/icon/adobe.svg"}};const ie="/aqualinkdemo/assets/1-D8DuUu3Q.png",se="/aqualinkdemo/assets/1-B8KosZls.svg",ne="/aqualinkdemo/assets/1-D8DuUu3Q.png",oe="/aqualinkdemo/assets/1-D8DuUu3Q.png",le="/aqualinkdemo/assets/1-D8DuUu3Q.png",ce="/aqualinkdemo/assets/2-BZ-H53Nk.png",de="/aqualinkdemo/assets/2-BZ-H53Nk.png",me="/aqualinkdemo/assets/2-D1LoHt0O.svg",ge="/aqualinkdemo/assets/1-D8DuUu3Q.png",pe="/aqualinkdemo/assets/3-HfLecR0l.svg",xe="/aqualinkdemo/assets/1-D8DuUu3Q.png",he="/aqualinkdemo/assets/4-Bl4bsv_-.svg",ue="/aqualinkdemo/assets/1-D8DuUu3Q.png",je="/aqualinkdemo/assets/1-D8DuUu3Q.png",be="/aqualinkdemo/assets/2-BZ-H53Nk.png",Ce="/aqualinkdemo/assets/2-BZ-H53Nk.png",fe="/aqualinkdemo/assets/1-D8DuUu3Q.png",ke="/aqualinkdemo/assets/card-bg-Vm_vPyxQ.png",ye=l.figure`
  margin-bottom: 0;
  .banner-card {
    padding: 20px 25px 25px 25px;
    border-radius: 10px;
    &.banner-card-primary {
      background-color: ${({theme:t})=>t["primary-color"]};
    }
    &.banner-card-dark {
      background-color: ${({theme:t})=>t[t.mainContent]["dark-text"]};
    }
    &.banner-card-border {
      border: 1px solid ${({theme:t})=>t[t.mainContent]["border-color-default"]};
      .banner-card__title {
        color: ${({theme:t})=>t[t.mainContent]["dark-text"]} !important;
      }
      .banner-card__body {
        p {
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
      }
      .banner-card__bottom {
        .author-name {
          color: ${({theme:t})=>t[t.mainContent]["gray-text"]};
        }
        .card-meta {
          li {
            span {
              color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
            }
          }
        }
      }
    }
    .banner-card__top {
      .banner-card__title {
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        color: #fff;
        margin-bottom: 14px;
        img,
        svg,
        i {
          ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
        }
      }
      .banner-card__action {
        .ant-dropdown-trigger {
          svg,
          i {
            color: ${({theme:t})=>t[t.mainContent]["extra-light-text"]};
          }
        }
      }
    }
  }
  .banner-card__body {
    p {
      margin-bottom: 20px;
      line-height: 1.786;
      color: #ffffff90;
    }
  }
  .banner-card__bottom {
    .card-author {
      img {
        max-width: 30px;
        border-radius: 50%;
      }
      .author-name {
        ${({theme:t})=>t.rtl?"margin-right":"margin-left"}: 15px;
        font-weight: 500;
        color: #ffffff90;
      }
    }
    .card-meta {
      ul {
        display: flex;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          &:not(:last-child) {
            margin-right: 10px;
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 10px;
          }
          svg,
          img {
            color: ${({theme:t})=>t["extra-light-color"]};
            margin-right: 6px;
            ${({theme:t})=>t.rtl?"margin-left":"margin-right"}: 6px;
            width: 16px;
          }
          span {
            font-size: 13px;
            color: #fff;
          }
        }
      }
    }
  }
`,Qe=l.div`
  ${({bgUrl:t})=>t&&`background-image: url(${new URL(Object.assign({"../../static/img/sampleCards/1.png":ie,"../../static/img/sampleCards/1.svg":se,"../../static/img/sampleCards/10.png":ne,"../../static/img/sampleCards/11.png":oe,"../../static/img/sampleCards/12.png":le,"../../static/img/sampleCards/13.png":ce,"../../static/img/sampleCards/2.png":de,"../../static/img/sampleCards/2.svg":me,"../../static/img/sampleCards/3.png":ge,"../../static/img/sampleCards/3.svg":pe,"../../static/img/sampleCards/4.png":xe,"../../static/img/sampleCards/4.svg":he,"../../static/img/sampleCards/5.png":ue,"../../static/img/sampleCards/6.png":je,"../../static/img/sampleCards/7.png":be,"../../static/img/sampleCards/8.png":Ce,"../../static/img/sampleCards/9.png":fe,"../../static/img/sampleCards/card-bg.png":ke})[`../../static/img/sampleCards/${t}`],import.meta.url).href})`};
  background-size: cover;
  background-repeat: no-reapet;
  background-position: center center;
`;function d({item:t}){const{content:s,icon:n,title:o,authorName:c,authorImg:g,type:p,bgImage:r}=t;return e.jsx(ye,{children:e.jsxs(Qe,{className:`banner-card banner-card-${p}`,bgUrl:r,children:[e.jsxs("div",{className:"banner-card__top align-center-v justify-content-between",children:[e.jsxs("h4",{className:"banner-card__title",children:[e.jsx("img",{src:require(`../../static/img/icon/${n}`),alt:"StrikingDash Banner"}),e.jsx("span",{children:o})]}),e.jsx("div",{className:"banner-card__action",children:e.jsx("div",{className:"more",children:e.jsx(u,{action:["click"],className:"wide-dropdwon",content:e.jsxs(e.Fragment,{children:[e.jsx(i,{to:"#",children:"Edit"}),e.jsx(i,{to:"#",children:"Delete"}),e.jsx(i,{to:"#",children:"View"})]}),children:e.jsx(i,{to:"#",children:e.jsx(j,{})})})})})]}),e.jsx("div",{className:"banner-card__body",children:e.jsx("p",{children:s})}),e.jsxs("div",{className:"banner-card__bottom  align-center-v justify-content-between",children:[e.jsxs("div",{className:"card-author",children:[e.jsx("img",{src:require(`../../static/img/users/${g}`),alt:""}),e.jsx("span",{className:"author-name",children:c})]}),e.jsx("div",{className:"card-meta",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(y,{}),e.jsx("span",{className:"view-count",children:"70"})]}),e.jsxs("li",{children:[e.jsx(q,{}),e.jsx("span",{className:"view-count",children:"70"})]})]})})]})]})})}d.propTypes={item:m.object};d.defaultProps={item:{id:1,type:"primary",icon:"water-fall.svg",bgImage:"",title:"Primary Color",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Chris Doe",authorImg:"10.png"}};const{cardOne:S,cardTwo:ve,cardThree:Ae,cardFive:Ie,cardSix:Ee,cardSeven:Be,BlogCardData:_e}=F,w=e.jsxs(e.Fragment,{children:[e.jsxs(i,{to:"#",children:[e.jsx(y,{}),e.jsx("span",{children:"View"})]}),e.jsxs(i,{to:"#",children:[e.jsx(H,{}),e.jsx("span",{children:"Edit"})]}),e.jsxs(i,{to:"#",children:[e.jsx(T,{}),e.jsx("span",{children:"Delete"})]})]});function Me(){const t=[{path:"index",breadcrumbName:"Dashboard"},{path:"first",breadcrumbName:"Widgets Cards"}],{products:s,projects:n,users:o,team:c,gallery:g,contactUsers:p}=R(r=>({products:r.products.data,projects:r.projects.data,users:r.users,team:r.team.data,gallery:r.gallery.data,contactUsers:r.Contact.data}));return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Widgets Cards",routes:t}),e.jsx($,{children:e.jsxs(x,{gutter:25,children:[n.map(r=>r.id<=3&&e.jsx(a,{lg:8,xs:24,children:e.jsx(O,{value:r})},r.id)),o.map(r=>r.id<=4&&e.jsx(a,{xxl:6,md:12,sm:12,xs:24,children:e.jsx(L,{user:r})},r.id)),s.map((r,b)=>b<=3&&e.jsx(a,{xxl:6,sm:12,xs:24,children:e.jsx(z,{product:r})},r.id)),c.map(r=>r.id<=4&&e.jsx(a,{xxl:6,md:12,sm:12,xs:24,children:e.jsx(W,{actions:w,user:r})},r.id)),g.map(r=>r.id<=4&&e.jsx(a,{xxl:6,md:12,sm:12,xs:24,children:e.jsx(Z,{actions:w,item:r})},r.id)),p.map(r=>r.id<=4&&e.jsx(a,{xxl:6,md:12,sm:12,xs:24,children:e.jsx(h,{headless:!0,children:e.jsx(G,{user:r})})},r.id)),S.map(r=>e.jsx(a,{xxl:6,md:12,sm:12,xs:24,className:"mb-25",children:e.jsx(v,{item:r})},r.id)),ve.map(r=>e.jsx(a,{xxl:6,md:12,sm:12,xs:24,className:"mb-25",children:e.jsx(Q,{item:r})},r.id)),Ae.map(r=>e.jsx(a,{xxl:6,md:12,sm:12,xs:24,className:"mb-25",children:e.jsx(A,{item:r})},r.id)),S.map(r=>e.jsx(a,{xxl:6,md:12,xs:24,className:"mb-25",children:e.jsx(I,{item:r})},r.id)),_e.slice(0,3).map(r=>e.jsx(a,{xxl:8,md:12,xs:24,className:"mb-25",children:e.jsx(M,{item:r})},r.id)),Ie.map(r=>e.jsx(a,{xxl:6,md:12,xs:24,className:"mb-25",children:e.jsx(E,{item:r})},r.id)),Ee.map(r=>e.jsx(a,{xxl:6,md:12,sm:12,xs:24,children:e.jsx(B,{item:r})},r.id)),Be.map(r=>e.jsx(a,{xxl:6,md:12,sm:12,xs:24,className:"mb-25",children:e.jsx(_,{item:r})},r.id)),e.jsx(a,{xs:24,children:e.jsx(N,{children:e.jsx(h,{headless:!0,children:e.jsxs(x,{gutter:"25",children:[e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{item:{id:2,type:"border",icon:"layers.svg",title:"Dark Color",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Barbara Marion",authorImg:"10.png"}})}),e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{item:{id:2,type:"border",icon:"cloud.svg",title:"Dark Color",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Barbara Marion",authorImg:"10.png"}})}),e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{item:{id:3,type:"border",bgImage:"",icon:"camera.svg",title:"Image",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Garry Sobars",authorImg:"10.png"}})})]})})})}),e.jsxs(a,{xs:24,children:[e.jsx(N,{children:e.jsx(h,{headless:!0,children:e.jsxs(x,{gutter:"25",children:[e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{})}),e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{item:{id:2,type:"dark",icon:"water-fall.svg",title:"Dark Color",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Barbara Marion",authorImg:"10.png"}})}),e.jsx(a,{xxl:8,md:12,className:"mb-25",children:e.jsx(d,{item:{id:3,type:"Image",bgImage:"card-bg.png",icon:"image.svg",title:"Image",content:"Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.",authorName:"Garry Sobars",authorImg:"10.png"}})})]})})}),e.jsxs(x,{gutter:"25",children:[e.jsx(a,{lg:8,xs:24,children:e.jsx(C,{children:e.jsx(f,{})})}),e.jsx(a,{lg:8,xs:24,children:e.jsx(C,{children:e.jsx(f,{})})}),e.jsx(a,{lg:8,xs:24,children:e.jsx(C,{children:e.jsx(f,{})})})]})]}),e.jsx(a,{xxl:18,xs:24,children:e.jsx(D,{product:{id:1,name:"Montes Scelerisque",rate:5,time:1586372610052,price:250,oldPrice:650,popular:105,brand:"chair",category:"furniture",img:"static/img/products/1.png",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."}})})]})})]})}export{Me as default};
