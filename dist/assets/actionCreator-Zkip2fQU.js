import{e9 as f,cr as t,ea as l,eb as h,cP as c,ec as n,ed as m,cs as i,ee as D,ef as g,aH as _,eg as w,eh as I,ei as O,ej as S,ek as y,el as u,em as $,en as b}from"./index-B54C9UsK.js";const F=()=>async s=>{s(m());try{const e=i.get("orgId");if(!e)throw new Error("Org ID no encontrado en las cookies.");const r=await t.get(`/models/sm_fishingbin?$filter=AD_Org_ID eq ${e}`);if(r.data&&r.data.records){const a=r.data.records.sort((o,d)=>Number(o.Name)-Number(d.Name));s(D(a))}else s(g("No se encontraron bines para esta organización."))}catch(e){s(g(e.message||"Error al cargar los bines.")),_.error(`Error al cargar los bines: ${e.message}`)}},N=s=>async e=>{e(w());try{const r=i.get("orgId");if(!r)throw new Error("Org ID no encontrado en las cookies.");const a=await t.get(`/models/SM_SecurityKits?$filter=AD_Org_ID eq ${r} AND sm_kittype eq '${s}' &$orderby=sm_kitcode`);a.data&&a.data.records?e(I(a.data.records)):e(n("No se encontraron Security Kits para esta organización."))}catch(r){c(r,e,n)}},k=()=>async s=>{s(u());try{const e=i.get("orgId");if(!e)throw new Error("Org ID no encontrado en las cookies.");const r=await t.get(`/models/sm_fishingdrawerstamp?$filter=AD_Org_ID eq ${e}`);r.data&&r.data.records?s($(r.data.records)):s(b("No se encontraron Fishing Drawer Stamps para esta organización."))}catch(e){c(e,s,n)}},C=s=>async e=>{e(f());try{const a=(await t.get(`/models/sm_coordinations_view?$filter=ci_id eq ${s}`)).data.records[0].SM_Fishing_ID.id,o=await t.get(`/models/sm_fishingdrawer_info_v?$filter=SM_Fishing_ID eq ${a}`);o.data&&o.data.records?(console.log(o.data.records),e(l(o.data.records))):e(h("No se encontró información de Fishing Drawer."))}catch(r){c(r,e,n)}},p=()=>async s=>{s(O());try{const e=i.get("selectedClientId");if(!e)throw new Error("Org ID no encontrado en las cookies.");const r=await t.get(`/models/sm_treaters_info_v?$filter=AD_Client_ID eq ${e}`);if(r.data&&r.data.records){const a=r.data.records.map(o=>({label:o.user_name,value:o.AD_User_ID.id}));s(S(a))}else s(y("No se encontraron tratadores en esta organización."))}catch(e){c(e,s,n)}};export{F as a,N as b,p as c,k as d,C as f};
