import React, { useState } from 'react';
import { Row, Col, Table, Modal, Button } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';

function AnalyticReportFarm() {
    // Datos de la tabla principal

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const stickyRows = [
        {
            key: 'fecha_inicio',
            descripcion: 'Fecha inicio',
            ciclo1: '1',
            ciclo2: '1',
            ciclo3: '1',
            ciclo4: '1',
            ciclo5: '1',
        },
        {
            key: 'fecha_cosecha',
            descripcion: 'Fecha cosecha',
            ciclo1: '',
            ciclo2: '',
            ciclo3: '',
            ciclo4: '',
            ciclo5: '',
        },
        {
            key: 'lote_id',
            descripcion: 'Lote ID',
            ciclo1: 'ID',
            ciclo2: '',
            ciclo3: '',
            ciclo4: '',
            ciclo5: '',
        },
    ];

    const feeding_detail = [
        {
            key: 'marca_alimento',
            descripcion: 'Detalles de Alimentación',
            ciclo1: 'AQUALINK OPT',
            ciclo2: 'CARGILL',
            ciclo3: 'CARGILL / WAYNE',
            ciclo4: 'WAYNE',
            ciclo5: 'SKRETTING',
        },
        {
            key: 'tipo_alimento_pre_cria',
            descripcion: 'Tipo de alimento Pre Cría',
            ciclo1: '45E',
            ciclo2: '42E',
            ciclo3: '40E',
            ciclo4: '40E',
            ciclo5: '45E',
        },
        {
            key: 'sistema_alimentacion_pre_cria',
            descripcion: 'Sistema de Alimentación Pre Cría',
            ciclo1: 'manual',
            ciclo2: 'manual',
            ciclo3: 'manual',
            ciclo4: 'manual',
            ciclo5: 'manual',
        },
        {
            key: 'tipo_alimento_pre_engorde',
            descripcion: 'Tipo de alimento Pre Engorde',
            ciclo1: '38M',
            ciclo2: '38M',
            ciclo3: '38C',
            ciclo4: '35G',
            ciclo5: '40E',
        },
        {
            key: 'tipo_alimento_engorde',
            descripcion: 'Tipo de alimento Engorde',
            ciclo1: '35P',
            ciclo2: '35E',
            ciclo3: '35E',
            ciclo4: '30P',
            ciclo5: '35C',
        },
        {
            key: 'sistema_alimentacion_pre_engorde_engorde',
            descripcion: 'Sistema de Alimentación Pre Engorde & Engorde',
            ciclo1: 'automático',
            ciclo2: 'automático',
            ciclo3: 'automático',
            ciclo4: 'automático',
            ciclo5: 'automático',
        },
    ]

    const mainTableData = [
        {
            key: 'marca_alimento',
            descripcion: 'Detalles de Alimentación',
            ciclo1: 'AQUALINK OPT',
            ciclo2: 'CARGILL',
            ciclo3: 'CARGILL / WAYNE',
            ciclo4: 'WAYNE',
            ciclo5: 'SKRETTING',
        },

        {
            key: 'tipo_siembra',
            descripcion: 'Tipo de Siembra',
            ciclo1: 'Bifásico',
            ciclo2: 'Bifásico',
            ciclo3: 'Bifásico',
            ciclo4: 'Bifásico',
            ciclo5: 'Bifásico',
        },
        {
            key: 'densidad_siembra_ha',
            descripcion: 'Densidad de Siembra / Ha',
            ciclo1: '110.000',
            ciclo2: '110.000',
            ciclo3: '130.000',
            ciclo4: '150.000',
            ciclo5: '110.000',
        },
        {
            key: 'piscina_num',
            descripcion: 'Piscina #',
            ciclo1: '4',
            ciclo2: '4',
            ciclo3: '4',
            ciclo4: '4',
            ciclo5: '4',
        },
        {
            key: 'area_precria',
            descripcion: 'Área de Precría (Ha.)',
            ciclo1: '1,50',
            ciclo2: '1,50',
            ciclo3: '1,50',
            ciclo4: '1,50',
            ciclo5: '1,50',
        },
        {
            key: 'area_engorde',
            descripcion: 'Área de Engorde (Ha.)',
            ciclo1: '12,00',
            ciclo2: '12,00',
            ciclo3: '12,00',
            ciclo4: '12,00',
            ciclo5: '12,00',
        },
        {
            key: 'area_total',
            descripcion: 'Área Total (Ha.)',
            ciclo1: '13,5',
            ciclo2: '13,5',
            ciclo3: '13,5',
            ciclo4: '13,5',
            ciclo5: '13,5',
        },
        // Variables de producción Precría
        {
            key: 'variables_produccion_precria',
            descripcion: 'VARIABLES DE PRODUCCIÓN PRECRÍA',
        },

        {
            key: 'densidad_siembra_precria',
            descripcion: 'Densidad de siembra (Precría)',
            ciclo1: '1.200.000',
            ciclo2: '1.400.000',
            ciclo3: '1.600.000',
            ciclo4: '1.800.000',
            ciclo5: '1.600.000',
        },
        {
            key: 'densidad_por_ha_precria',
            descripcion: 'Densidad por Ha (Pre cría)',
            ciclo1: '800.000',
            ciclo2: '933.333',
            ciclo3: '1.066.667',
            ciclo4: '1.200.000',
            ciclo5: '1.066.667',
        },
        {
            key: 'sobrevivencia',
            descripcion: 'Sobrevivencia',
            ciclo1: '91%',
            ciclo2: '87%',
            ciclo3: '85%',
            ciclo4: '97%',
            ciclo5: '87%',
        },
        {
            key: 'peso_inicial_siembra',
            descripcion: 'Peso Inicial (siembra)',
            ciclo1: '0,0024',
            ciclo2: '0,0024',
            ciclo3: '0,0024',
            ciclo4: '0,0024',
            ciclo5: '0,0024',
        },
        {
            key: 'peso_final_transferencia',
            descripcion: 'Peso Final (a transferencia)',
            ciclo1: '0,65',
            ciclo2: '0,55',
            ciclo3: '0,45',
            ciclo4: '0,33',
            ciclo5: '0,45',
        },
        {
            key: 'dias_precria',
            descripcion: 'Días de Precría',
            ciclo1: '21',
            ciclo2: '21',
            ciclo3: '21',
            ciclo4: '21',
            ciclo5: '21',
        },
        {
            key: 'crecimiento_diario_promedio',
            descripcion: 'Crecimiento diario (promedio)',
            ciclo1: '0,0310',
            ciclo2: '0,0262',
            ciclo3: '0,0214',
            ciclo4: '0,0157',
            ciclo5: '0,0214',
        },
        {
            key: 'biomasa_total_transferencia',
            descripcion: 'Biomasa Total (lb) (a transferencia)',
            ciclo1: '1.563',
            ciclo2: '1.476',
            ciclo3: '1.348',
            ciclo4: '1.269',
            ciclo5: '1.380',
        },
        {
            key: 'alimento_total_kg',
            descripcion: 'Alimento Total (kg)',
            ciclo1: '125',
            ciclo2: '154',
            ciclo3: '175',
            ciclo4: '225',
            ciclo5: '175',
        },
        {
            key: 'fca',
            descripcion: 'FCA',
            ciclo1: '0,18',
            ciclo2: '0,23',
            ciclo3: '0,29',
            ciclo4: '0,39',
            ciclo5: '0,28',
        },
        // Costos de producción pre cría
        {
            key: 'costos_produccion_precria',
            descripcion: 'COSTOS DE PRODUCCIÓN PRECRÍA',
        },

        {
            key: 'costo_larva_millar',
            descripcion: 'Costo Larva x Millar',
            ciclo1: '$1,80',
            ciclo2: '$1,85',
            ciclo3: '$1,90',
            ciclo4: '$1,80',
            ciclo5: '$1,85',
        },
        {
            key: 'costo_ponderado_alimento_precria',
            descripcion: 'Costo ponderado x Kg Alimento (pre cría)',
            ciclo1: '$1,57',
            ciclo2: '$1,57',
            ciclo3: '$1,57',
            ciclo4: '$1,57',
            ciclo5: '$1,57',
        },
        {
            key: 'costo_alimento',
            descripcion: 'Costo Alimento',
            ciclo1: '$196,25',
            ciclo2: '$241,78',
            ciclo3: '$274,75',
            ciclo4: '$353,25',
            ciclo5: '$274,75',
        },
        {
            key: 'costo_insumos',
            descripcion: 'Costo Insumos',
            ciclo1: '$49,06',
            ciclo2: '$60,45',
            ciclo3: '$68,69',
            ciclo4: '$88,31',
            ciclo5: '$68,69',
        },
        {
            key: 'costo_indirecto_ha_dia_precria',
            descripcion: 'Costo indirecto Ha/día (Precría)',
            ciclo1: '$6,54',
            ciclo2: '$6,54',
            ciclo3: '$6,54',
            ciclo4: '$6,54',
            ciclo5: '$6,54',
        },
        {
            key: 'costo_total_precria',
            descripcion: 'Costo Total Precría',
            ciclo1: '$5.871,68',
            ciclo2: '$2.110,03',
            ciclo3: '$2.369,67',
            ciclo4: '$2.987,85',
            ciclo5: '$2.369,67',
        },
        {
            key: 'costo_produccion_millar',
            descripcion: 'Costo de producción x Millar',
            ciclo1: '$9,33',
            ciclo2: '$5,91',
            ciclo3: '$6,08',
            ciclo4: '$5,57',
            ciclo5: '$5,88',
        },
        {
            key: 'costo_larva',
            descripcion: 'Costo de la Larva',
            ciclo1: '$2.160,00',
            ciclo2: '$2.590,00',
            ciclo3: '$3.040,00',
            ciclo4: '$3.240,00',
            ciclo5: '$2.960,00',
        },
        {
            key: 'costo_precia',
            descripcion: 'Costo de Precría',
            ciclo1: '$6.067,93',
            ciclo2: '$2.351,81',
            ciclo3: '$2.644,42',
            ciclo4: '$3.341,10',
            ciclo5: '$2.644,42',
        },
        {
            key: 'costo_total_precia',
            descripcion: 'Costo Total de Precría',
            ciclo1: '$8.227,93',
            ciclo2: '$4.941,81',
            ciclo3: '$5.684,42',
            ciclo4: '$6.581,10',
            ciclo5: '$5.604,42',
        },
        // Variables de producción Fase Engorde
        {
            key: 'variables_produccion_engorde',
            descripcion: 'VARIABLES DE PRODUCCIÓN FASE ENGORDA',
        },

        {
            key: 'densidad_transferencia',
            descripcion: 'Densidad de transferencia',
            ciclo1: '1.092.000',
            ciclo2: '1.218.000',
            ciclo3: '1.360.000',
            ciclo4: '1.746.000',
            ciclo5: '1.392.000',
        },
        {
            key: 'densidad_transferencia_ha',
            descripcion: 'Densidad de transferencia (por Ha)',
            ciclo1: '91.000',
            ciclo2: '101.500',
            ciclo3: '113.333',
            ciclo4: '145.500',
            ciclo5: '116.000',
        },
        {
            key: 'dias_cultivo',
            descripcion: 'Días de cultivo',
            ciclo1: '70',
            ciclo2: '84',
            ciclo3: '84',
            ciclo4: '84',
            ciclo5: '77',
        },
        {
            key: 'dias_secado_piscina',
            descripcion: 'Días de secado de piscina',
            ciclo1: '7',
            ciclo2: '7',
            ciclo3: '7',
            ciclo4: '7',
            ciclo5: '7',
        },
        {
            key: 'dias_totales',
            descripcion: 'Días Totales',
            ciclo1: '77',
            ciclo2: '91',
            ciclo3: '91',
            ciclo4: '91',
            ciclo5: '84',
        },
        {
            key: 'peso_raleo_g',
            descripcion: 'Peso Raleo (g)',
            ciclo1: '0',
            ciclo2: '0',
            ciclo3: '0',
            ciclo4: '12',
            ciclo5: '0',
        },
        {
            key: 'peso_cosecha_g',
            descripcion: 'Peso Cosecha (g)',
            ciclo1: '19,0',
            ciclo2: '17,0',
            ciclo3: '22,0',
            ciclo4: '23,0',
            ciclo5: '21,0',
        },
        {
            key: 'crecimiento_semanal_g',
            descripcion: 'Crecimiento semanal (g)',
            ciclo1: '1,90',
            ciclo2: '1,42',
            ciclo3: '1,83',
            ciclo4: '1,92',
            ciclo5: '1,91',
        },
        {
            key: 'biomasa_raleo_lb',
            descripcion: 'Biomasa Raleo (lb)',
            ciclo1: '0',
            ciclo2: '0',
            ciclo3: '0',
            ciclo4: '13.200',
            ciclo5: '13.200',
        },
        {
            key: 'biomasa_cosecha_lb',
            descripcion: 'Biomasa Cosecha (lb)',
            ciclo1: '36.700',
            ciclo2: '33.200',
            ciclo3: '42.500',
            ciclo4: '31.000',
            ciclo5: '26.000',
        },
        {
            key: 'biomasa_total_cosechada_lb',
            descripcion: 'Biomasa Total cosechada (lb)',
            ciclo1: '36.700',
            ciclo2: '33.200',
            ciclo3: '42.500',
            ciclo4: '44.200',
            ciclo5: '39.200',
        },
        {
            key: 'biomasa_total_lb_ha',
            descripcion: 'Biomasa Total (lb/Ha)',
            ciclo1: '3.058',
            ciclo2: '2.767',
            ciclo3: '3.542',
            ciclo4: '3.683',
            ciclo5: '3.267',
        },
        {
            key: 'supervivencia_engorde',
            descripcion: '% Supervivencia engorde',
            ciclo1: '80%',
            ciclo2: '73%',
            ciclo3: '65%',
            ciclo4: '50%',
            ciclo5: '61%',
        },
        {
            key: 'supervivencia_total',
            descripcion: '% Supervivencia Total',
            ciclo1: '73%',
            ciclo2: '63%',
            ciclo3: '55%',
            ciclo4: '49%',
            ciclo5: '53%',
        },
        {
            key: 'alimento_total_segunda_fase_kg',
            descripcion: 'Alimento Total Segunda Fase (kg)',
            ciclo1: '19.400',
            ciclo2: '22.600',
            ciclo3: '26.500',
            ciclo4: '31.200',
            ciclo5: '24.200',
        },
        {
            key: 'alimento_total',
            descripcion: 'Alimento Total',
            ciclo1: '19.525',
            ciclo2: '22.754',
            ciclo3: '26.675',
            ciclo4: '31.425',
            ciclo5: '24.375',
        },
        {
            key: 'fca_total',
            descripcion: 'FCA',
            ciclo1: '1,17',
            ciclo2: '1,50',
            ciclo3: '1,37',
            ciclo4: '1,56',
            ciclo5: '1,36',
        },
        // Costos de producción
        {
            key: 'costos_produccion',
            descripcion: 'COSTOS DE PRODUCCIÓN',
        },

        {
            key: 'costo_ponderado_alimento_kg',
            descripcion: 'Costo ponderado alimento ($ por Kg)',
            ciclo1: '1,04',
            ciclo2: '1,15',
            ciclo3: '1,15',
            ciclo4: '1,15',
            ciclo5: '1,15',
        },
        {
            key: 'costo_total_alimento',
            descripcion: 'Costo Total del alimento ($)',
            ciclo1: '20.098',
            ciclo2: '25.990',
            ciclo3: '30.475',
            ciclo4: '35.880',
            ciclo5: '27.830',
        },
        {
            key: 'costo_alimento_ha_dia',
            descripcion: 'Costo Alimento/ha/día',
            ciclo1: '19',
            ciclo2: '21',
            ciclo3: '25',
            ciclo4: '29',
            ciclo5: '25',
        },
        {
            key: 'costo_indirecto_ha_dia',
            descripcion: 'Costo indirecto /ha/día',
            ciclo1: '17,14',
            ciclo2: '17,14',
            ciclo3: '17,14',
            ciclo4: '17,14',
            ciclo5: '17,14',
        },
        {
            key: 'costo_fijo_total',
            descripcion: 'Costo Fijo Total',
            ciclo1: '15.837',
            ciclo2: '18.717',
            ciclo3: '18.717',
            ciclo4: '18.717',
            ciclo5: '17.277',
        },
        {
            key: 'costo_total_produccion_segunda_fase',
            descripcion: 'Costo Total de Producción Segunda Fase',
            ciclo1: '35.936',
            ciclo2: '44.707',
            ciclo3: '49.192',
            ciclo4: '54.597',
            ciclo5: '45.107',
        },
        {
            key: 'costo_total_produccion_ha',
            descripcion: 'Costo Total de Producción/Ha',
            ciclo1: '2.995',
            ciclo2: '3.726',
            ciclo3: '4.099',
            ciclo4: '4.550',
            ciclo5: '3.759',
        },
        {
            key: 'costo_total_bifasico',
            descripcion: 'Costo Total Bifásico',
            ciclo1: '44.164',
            ciclo2: '49.649',
            ciclo3: '54.876',
            ciclo4: '61.178',
            ciclo5: '50.712',
        },
        {
            key: 'costo_libra_camarón',
            descripcion: 'Costo/libra de Camarón',
            ciclo1: '1,20',
            ciclo2: '1,50',
            ciclo3: '1,29',
            ciclo4: '1,38',
            ciclo5: '1,29',
        },
    ];

    // Datos de la tabla de resultados
    const resultsTableData = [
        {
            key: 'ingreso_ventas',
            descripcion: 'INGRESO POR VENTAS',
        },
        {
            key: 'precio_camarón_raleo',
            descripcion: 'Precio de camarón raleo (g)',
            ciclo1: '1,00',
            ciclo2: '1,00',
            ciclo3: '1,00',
            ciclo4: '1,25',
            ciclo5: '1,25',
        },
        {
            key: 'precio_camarón_final',
            descripcion: 'Precio de camarón final ($/lb)',
            ciclo1: '1,75',
            ciclo2: '1,54',
            ciclo3: '2,10',
            ciclo4: '2,10',
            ciclo5: '2,25',
        },
        {
            key: 'Ingreso_ventas_total',
            descripcion: 'Ingreso ventas total ($)',
            ciclo1: '1,75',
            ciclo2: '1,54',
            ciclo3: '2,10',
            ciclo4: '2,10',
            ciclo5: '2,25',
        }, {
            key: 'Ingreso_total_ha',
            descripcion: 'Ingreso total por ha ($)',
            ciclo1: '1,75',
            ciclo2: '1,54',
            ciclo3: '2,10',
            ciclo4: '2,10',
            ciclo5: '2,25',
        },
        {
            key: 'rendimiento_produccion',
            descripcion: 'RENDIMIENTO DE PRODUCCIÓN',
        },
        {
            key: 'EIP',
            descripcion: 'EIP',
            ciclo1: '1,19',
            ciclo2: '0,60',
            ciclo3: '0,73',
            ciclo4: '0,60',
            ciclo5: '0,74',
        },
        {
            key: 'rendimiento_produccion_piscina',
            descripcion: 'Rendimiento de producción por piscina ($)',
            ciclo1: '20.061',
            ciclo2: '1.479',
            ciclo3: '34.374',
            ciclo4: '20.422',
            ciclo5: '24.288',
        },
        {
            key: 'rendimiento_produccion_ha',
            descripcion: 'Rendimiento de producción / Ha ($)',
            ciclo1: '1.486',
            ciclo2: '110',
            ciclo3: '2.546',
            ciclo4: '1.513',
            ciclo5: '1.799',
        },
        {
            key: 'rendimiento_produccion_ha_dia',
            descripcion: 'Rendimiento de producción / Ha / día ($)',
            ciclo1: '24',
            ciclo2: '1',
            ciclo3: '34',
            ciclo4: '20',
            ciclo5: '26',
        }
    ];

    // Definición de columnas
    const columns = [
        {
            title: '',
            dataIndex: 'descripcion',
            key: 'descripcion',
            fixed: 'left',
            width: 200,

        },
        {
            title: 'Ciclo 1',
            dataIndex: 'ciclo1',
            key: 'ciclo1',
            width: 100,
        },
        {
            title: 'Ciclo 2',
            dataIndex: 'ciclo2',
            key: 'ciclo2',
            width: 100,
        },
        {
            title: 'Ciclo 3',
            dataIndex: 'ciclo3',
            key: 'ciclo3',
            width: 100,
        },
        {
            title: 'Ciclo 4',
            dataIndex: 'ciclo4',
            key: 'ciclo4',
            width: 100,
        },
        {
            title: 'Ciclo 5',
            dataIndex: 'ciclo5',
            key: 'ciclo5',
            width: 100,
        },
    ];

    const columns2 = [
        {
            title: '',
            dataIndex: 'descripcion',
            key: 'descripcion',
            fixed: 'left',
            width: 203,

            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <strong>{text}</strong>
                } else if (record.key === 'variables_produccion_precria') {
                    return <strong>{text}</strong>
                } else if (record.key === 'costos_produccion_precria') {
                    return <strong>{text}</strong>
                } else if (record.key === 'variables_produccion_engorde') {
                    return <strong>{text}</strong>
                } else if (record.key === 'costos_produccion') {
                    return <strong>{text}</strong>
                } else if (record.key === 'fca') {
                    return <span>{text}</span>
                } else if (record.key === 'rendimiento_produccion') {
                    return <strong>{text}</strong>
                }

                return text;

            }
        },
        {
            title: 'Ciclo 1',
            dataIndex: 'ciclo1',
            key: 'ciclo1',
            width: 100,
            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <a href='#cycle1' style={{ textAlign: "initial" }} onClick={() => showDetails('ciclo1')}>{text}</a>
                }
                return text;

            }
        },
        {
            title: 'Ciclo 2',
            dataIndex: 'ciclo2',
            key: 'ciclo2',
            width: 102,
            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <a href='#cycle2' style={{ textAlign: "initial" }} onClick={() => showDetails('ciclo2')}>{text}</a>
                }
                return text;

            }
        },
        {
            title: 'Ciclo 3',
            dataIndex: 'ciclo3',
            key: 'ciclo3',
            width: 102,
            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <a href='#cycle3' style={{ textAlign: "initial" }} onClick={() => showDetails('ciclo3')}>{text}</a>
                }
                return text;

            }
        },
        {
            title: 'Ciclo 4',
            dataIndex: 'ciclo4',
            key: 'ciclo4',
            width: 100,
            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <a href='#cycle4' style={{ textAlign: "initial" }} onClick={() => showDetails('ciclo4')}>{text}</a>
                }
                return text;

            }
        },
        {
            title: 'Ciclo 5',
            dataIndex: 'ciclo5',
            key: 'ciclo5',
            width: 92,
            render: (text, record) => {
                if (record.key === 'marca_alimento') {
                    return <a href='#cycle5' style={{ textAlign: "initial" }} onClick={() => showDetails('ciclo5')}>{text}</a>
                }
                return text;

            }
        },
    ];

    const showDetails = (cycle) => {

        // Construimos el objeto basado en el ciclo seleccionado
        const item = {
            marca_alimento: feeding_detail.find((detail) => detail.key === 'marca_alimento')[cycle],
            tipo_alimento_pre_cria: feeding_detail.find((detail) => detail.key === 'tipo_alimento_pre_cria')[cycle],
            sistema_alimentacion_pre_cria: feeding_detail.find((detail) => detail.key === 'sistema_alimentacion_pre_cria')[cycle],
            tipo_alimento_pre_engorde: feeding_detail.find((detail) => detail.key === 'tipo_alimento_pre_engorde')[cycle],
            tipo_alimento_engorde: feeding_detail.find((detail) => detail.key === 'tipo_alimento_engorde')[cycle],
            sistema_alimentacion_pre_engorde_engorde: feeding_detail.find((detail) => detail.key === 'sistema_alimentacion_pre_engorde_engorde')[cycle],
        };
        console.log('item', item);  // Verificación del item seleccionado
        setSelectedItem(item);  // Establecemos el item seleccionado
        setIsModalVisible(true);  // Mostramos el modal
    };


    // Cerrar el modal
    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedItem(null);
    };
    return (
        <>
            <PageHeader
                highlightText="Aqualink Camaroneras"
                title="Analytics"
                selectOptions={[
                    ['Camaronera 1', 'Camaronera 2', 'Camaronera 3'],
                    ['Sector 1', 'Sector 2', 'Sector 3'],
                    ['Piscina 1', 'Piscina 2', 'Piscina 3'],
                ]}
            />
            <Main>
                <Row gutter={25}>
                    {/* Contenedor principal con tabla fija y tabla desplazable */}
                    <Col xxl={24} xs={24}>
                        {/* Tabla fija con filas sticky */}
                        <Table
                            columns={columns}
                            dataSource={stickyRows}
                            pagination={false}
                            bordered
                            showHeader={true}
                            rowKey="key"
                            className="custom-table-padding-table-1 table-responsive"
                            tableLayout="fixed" // Asegura que las columnas respeten los anchos definidos
                        />
                        {/* Contenedor con scroll vertical para la tabla desplazable */}
                        <div
                            style={{
                                height: '210px',
                                overflowY: 'auto',
                                overflowX: 'hidden',
                            }}
                        >
                            <Table
                                columns={columns2}
                                dataSource={mainTableData}
                                pagination={false}
                                bordered
                                showHeader={false}
                                rowKey="key"
                                className="custom-table-padding-table-1 table-responsive"
                                tableLayout="fixed"
                                rowClassName={(record) => {
                                    if (
                                        record.key === 'variables_produccion_precria' ||
                                        record.key === 'costos_produccion_precria' ||
                                        record.key === 'variables_produccion_engorde' ||
                                        record.key === 'costos_produccion' ||
                                        record.key === 'rendimiento_produccion') {
                                        return 'custom-black-row';  // Aplica clase CSS para estos registros
                                    } 
                                    return ''; // Si no coincide con ninguna clave, no aplicamos ninguna clase
                                }}
                            />

                        </div>
                    </Col>
                </Row>
                {/* Segunda tabla fija */}
                <Row gutter={25} style={{ marginTop: '20px' }}>
                    <Col xxl={24} xs={24}>
                        <Table
                            columns={columns}
                            dataSource={resultsTableData}
                            pagination={false}
                            bordered
                            rowKey="key"
                            className="custom-table-padding table-responsive"

                        />
                    </Col>
                </Row>
            </Main>

            {/* Modal para mostrar detalles adicionales */}
            <Modal
                title="Detalles del Producto"
                visible={isModalVisible}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="close" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                ]}
                width={800} // Aumenta el ancho del modal para mejor visualización
            >
                {selectedItem && (
                    <div className="content-row">
                        <div style={{ flex: '1 1 40%' }}>
                            <div className="information-grid">
                                <div className="info-item">
                                    <span className="info-label">Marca de Alimento</span>
                                    <span className="info-value">{selectedItem.marca_alimento || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Tipo de Alimento Pre Cría</span>
                                    <span className="info-value">{selectedItem.tipo_alimento_pre_cria || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Sistema de Alimentación Pre Cría</span>
                                    <span className="info-value">{selectedItem.sistema_alimentacion_pre_cria || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Tipo de Alimento Pre Engorde</span>
                                    <span className="info-value">{selectedItem.tipo_alimento_pre_engorde || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Tipo de Alimento Engorde</span>
                                    <span className="info-value">{selectedItem.tipo_alimento_engorde || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Sistema de Alimentación Pre Engorde y Engorde</span>
                                    <span className="info-value">{selectedItem.sistema_alimentacion_pre_engorde_engorde || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </Modal>
        </>
    );
}

export default AnalyticReportFarm;