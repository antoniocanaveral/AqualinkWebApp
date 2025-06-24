import { useState } from 'react';
import Cookies from 'js-cookie';

const usePageHeaderSelectors = ({
  orgsSelector, // Selector de Redux para organizaciones (farmsOrgs, labsOrgs, custodyOrgs, etc.)
  poolsSelector, // Selector de Redux para organizaciones con piscinas (farmsOrgsWithPools, labsOrgsWithWarehouses, etc.)
  includeSector = true, // Indica si se incluye el selector de sector
  includePool = true, // Indica si se incluye el selector de piscina
  poolTypeFilter = null, // Filtro opcional para piscinas (e.g., 'PC' para precria)
  orgType = 'Farm', // Placeholder por defecto para el selector de organización
}) => {
  // Estados
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);
  const [selectedPoolSize, setSelectedPoolSize] = useState(null); // Nuevo estado para poolSize

  // Selectores de Redux
  const organizations = orgsSelector();
  const farmsOrgsWithPools = poolsSelector();

  // Manejadores de cambios
  const handleOrgChange = (orgId, orgEmail = '') => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedPoolSize(null); // Reset poolSize
    if (includeSector) setSelectedSector(null);
  };

  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
    setSelectedPoolSize(null); // Reset poolSize
  };

  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
    // Buscar el poolSize correspondiente
    const selectedPoolOption = poolsOptions.find(pool => pool.value === poolId);
    setSelectedPoolSize(selectedPoolOption?.poolSize || null);
  };

  // Opciones para el selector de organizaciones
  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: organizations.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: `Seleccione una ${orgType}`,
      value: selectedOrg || undefined,
    },
  ] : [];

  // Opciones para el selector de sectores
  const sectorsOptions = selectedOrg && includeSector
    ? farmsOrgsWithPools
        .find(org => org.orgId === selectedOrg)?.pools
        ?.reduce((acc, pool) => {
          if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
            acc.push({
              value: pool.salesRegion.id,
              label: pool.salesRegion.name,
            });
          }
          return acc;
        }, []) || []
    : [];

  const sectorSelectOptions = selectedOrg && includeSector ? [
    {
      options: sectorsOptions,
      onChange: handleSectorChange,
      placeholder: 'Seleccione un Sector',
      value: selectedSector || undefined,
    },
  ] : [];

  // Opciones para el selector de piscinas
  const poolsOptions = selectedSector && includePool
    ? farmsOrgsWithPools
        .find(org => org.orgId === selectedOrg)?.pools
        ?.filter(pool => {
          const matchesSector = pool.salesRegion && pool.salesRegion.id === selectedSector;
          const matchesType = poolTypeFilter ? pool.poolType?.id === poolTypeFilter : true;
          return matchesSector && matchesType;
        })
        .map(pool => ({
          value: pool.poolId,
          label: pool.poolName,
          poolSize: pool.poolSize,
        })) || []
    : selectedOrg && includePool && !includeSector
    ? farmsOrgsWithPools
        .find(org => org.orgId === selectedOrg)?.pools
        ?.filter(pool => (poolTypeFilter ? pool.poolType?.id === poolTypeFilter : true))
        .map(pool => ({
          value: pool.poolId,
          label: pool.poolName,
          poolSize: pool.poolSize,
        })) || []
    : [];

  const poolsSelectOptions = (selectedSector || (selectedOrg && !includeSector)) && includePool ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Piscina',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  // Combinar opciones
  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];

  return {
    selectedOrg,
    selectedSector,
    selectedPool,
    selectedPoolSize, // Incluir poolSize en el retorno
    combinedSelectOptions,
  };
};

export default usePageHeaderSelectors;