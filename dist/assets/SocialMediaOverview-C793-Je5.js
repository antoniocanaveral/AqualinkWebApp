import{s as r,j as i,H as x,ay as o,X as d,e as p,f as s}from"./index-B54C9UsK.js";import{S as u}from"./Style-BgJ0K5AD.js";import{F as g}from"./index-dukHIMAM.js";const b=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 18px 0;
  h1{
    font-size: 22px;
    font-weight: 600;
    padding-top: 5px;
    margin: 0;
  }
  p{
    margin: 0;
    color: #868EAE;
  }
  .social-icon{
    span{
      font-size: 20px;
    }
  }
`,j=r.div`
  width: 50px;
  height: 50px;
  background: ${({bgColor:t})=>t};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;function e(t){const{icon:l,bgColor:n,title:c,subTitle:a}=t;return i.jsxs(b,{children:[i.jsx(j,{className:"social-icon",bgColor:n,children:i.jsx(g,{className:"super-crazy-colors",name:l,size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}})}),i.jsx(x,{as:"h1",children:c}),i.jsx("p",{children:a})]})}e.propTypes={icon:o.string.isRequired,bgColor:o.string.isRequired,title:o.string.isRequired,subTitle:o.string.isRequired};function w(){return i.jsx(u,{children:i.jsx(d,{title:"Social Media Overview",size:"large",children:i.jsxs(p,{gutter:25,children:[i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"facebook",bgColor:"#2366B8",title:"5,461",subTitle:"Likes"})}),i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"twitter",bgColor:"#00ABE4",title:"5,461",subTitle:"Followers"})}),i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"instagram",bgColor:"linear-gradient(to top, #ffc107 0%,#f44336 31%,#9c27b0 65%,#9c27b0 100%)",title:"5,461",subTitle:"Followers"})}),i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"youtube-play",bgColor:"#E32212",title:"5,461",subTitle:"Subscribers"})}),i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"pinterest-p",bgColor:"#E32212",title:"5,461",subTitle:"Followers"})}),i.jsx(s,{xxl:8,md:4,xs:8,children:i.jsx(e,{icon:"linkedin",bgColor:"#007CBC",title:"5,461",subTitle:"Followers"})})]})})})}export{w as default};
