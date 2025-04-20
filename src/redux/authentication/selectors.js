

export const selectFarmsOrgs = (state) => state.auth.farmsOrgs;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
export const selectCustodyOrgs = (state) => state.auth.custodyOrgs

export const selectLabOrgs = (state) => state.auth.labsOrgs
export const selectOrgToAudit = (state) => state.auth.orgToAudit;


export const selectFarmsOrgsWithPools = (state) => {
  const farmsOrgs = selectFarmsOrgs(state);
  return farmsOrgs.map(org => ({
    ...org,
    pools: org.pools || [], 
  }));
};


export const selectCustodyOrgsWithWarehouses = (state) => {
  const custodyOrgs = selectCustodyOrgs(state);
  return custodyOrgs.map(org => ({
    ...org,
    pools: org.pools || [], 
  }));
};



export const selectLabOrgsWithWarehouses = (state) => {
  const labOrgs = selectLabOrgs(state);
  console.log("de selector", labOrgs)
  return labOrgs?.map(org => ({
    ...org,
    pools: org.pools || [], 
  }));
};

