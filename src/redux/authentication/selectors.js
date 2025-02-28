// src/redux/authentication/selectors.js

export const selectFarmsOrgs = (state) => state.auth.farmsOrgs;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
export const selectCustodyOrgs = (state) => state.auth.custodyOrgs

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

