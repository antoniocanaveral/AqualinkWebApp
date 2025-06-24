import React, { useMemo } from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function TexturePercentageChart({ textures = [], loading = false }) {
  // Mapear los datos de textures al formato del gráfico
  const data = useMemo(() => {
    return textures.map((texture) => ({
      name: `día ${texture.SM_CampaignItem_ID?.SM_Index || ''}`, // Textura (día + SM_Index)
      duro: texture.SM_TextureGoodPercent, // Porcentaje Duro
      flacido: texture.SM_TextureFlaccidPercent, // Porcentaje Flácido
      mudado: texture.SM_TextureMoltedPercent, // Porcentaje Mudado
    }));
  }, [textures]);

  return (
    <div style={{ width: '100%', height: '300px' }}>
      {loading ? (
        <div>Loading...</div> // Indicador de carga
      ) : (
        <LineChartWithXAxisPadding data={data} />
      )}
    </div>
  );
}

export default TexturePercentageChart;