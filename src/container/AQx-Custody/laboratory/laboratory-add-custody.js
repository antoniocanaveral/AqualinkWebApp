import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Select, Input, Button, Modal, message, Steps } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParameters, registerLabanalysis } from '../../../redux/labanalysis/actionCreator';
import { loadCustodyCoordinations } from '../../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import { PageHeader } from '../../../components/page-headers/page-headers';

const { Step } = Steps;
const { Option } = Select;

function LaboratoryAddCustody() {
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
    const [lotId, setLotId] = useState(null); // Estado para almacenar el LOTE ID seleccionado

    const PageRoutes = [
        {
            path: '/custody',
            breadcrumbName: selectedOrg,
        },
        {
            path: 'first',
            breadcrumbName: 'Coordinaciones',
        },
    ];

    // Obtener datos desde Redux
    const { parameters, loading } = useSelector((state) => state.labanalysis);
    const organizations = useSelector((state) => state.auth.custodyOrgs);
    const coordinations = useSelector((state) => state.custody.coordinations);

    useEffect(() => {
        dispatch(fetchParameters());
    }, [dispatch]);


    const handleOrgChange = (orgId) => {
        setSelectedOrg(orgId);
        const selectedOrg = organizations.find(org => org.orgId === orgId);
        const orgEmail = selectedOrg ? selectedOrg.orgEmail : '';
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };


    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: organizations.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];
    const combinedSelectOptions = [...farmsSelectOptions];
    
    console.log(coordinations)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLotChange = (value) => {
        setLotId(value); // Guardar el LOTE ID seleccionado en el estado

        // Buscar la coordinación asociada en `coordinations`
        const selectedCoordination = coordinations.find(coord => coord.SM_FishingNotification === value);

        if (selectedCoordination) {
            setFormData(prevData => ({
                ...prevData,
                Sm_Coordination_ID: selectedCoordination.SM_Coordination_ID.id // Guardar el ID correcto
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                Sm_Coordination_ID: null // Si no hay, dejarlo en null
            }));
        }
    };

    const onNext = async () => {
        try {
            await form.validateFields();
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Error en validación:', error);
        }
    };

    const onPrev = () => setCurrentStep((prev) => prev - 1);

    const handleFinalizar = async () => {
        try {
            const adClientId = Cookies.get('selectedClientId');
            const adOrgId = Cookies.get('orgId');

            if (!adClientId || !adOrgId) {
                message.error('Faltan AD_Client_ID y AD_Org_ID');
                return;
            }

            if (!lotId) {
                message.error('Debe seleccionar un LOTE ID antes de guardar');
                return;
            }

            // **Crear registros para cada parámetro**
            const labanalysisData = Object.keys(formData).map((paramName) => {
                const param = parameters.find(p => p.sm_parametername === paramName);
                return param ? {
                    SM_FishingNotification: lotId,  // LOTE ID obtenido del estado
                    SM_Coordination_ID: formData.Sm_Coordination_ID || null,  // Relación con Coordinaciones
                    sm_parameter_id: param.id,  // ID del parámetro evaluado
                    sm_value: formData[paramName],  // Valor ingresado
                } : null;
            }).filter(entry => entry !== null); // Eliminar valores nulos

            // **Enviar los datos a Redux**
            await dispatch(registerLabanalysis(labanalysisData));

            setModalVisible(false);
        } catch (error) {
            console.error('Error al guardar:', error);
            message.error('Error al registrar los datos');
        }
    };
    const order = ["Test Cocción.", "Organoléptico.", "Sulfitos.", "Microbiológico.", "Químico."];

    const groupedParameters = parameters.reduce((acc, item) => {
        if (!acc[item.sm_typeanalysis]) acc[item.sm_typeanalysis] = [];
        acc[item.sm_typeanalysis].push(item);
        return acc;
    }, {});

    // Convertir el objeto en un array ordenado según el orden específico
    const sortedGroupedParameters = Object.fromEntries(
        order
            .filter(key => groupedParameters[key]) // Filtrar solo las claves existentes en groupedParameters
            .map(key => [key, groupedParameters[key]]) // Convertirlo en pares clave-valor
    );

    console.log(sortedGroupedParameters);

    // **2. Generar Steps dinámicamente**
    const steps = [
        {
            title: 'Selector de LOTE ID',
            content: (
                <Form layout="vertical">
                    <Form.Item
                        label="Seleccione el LOTE ID"
                        name="sm_FishingNotification"
                        rules={[{ required: true, message: 'Debe seleccionar un LOTE ID' }]}
                    >
                        <Select
                            placeholder="Seleccione un LOTE ID"
                            onChange={handleLotChange} // Capturar el LOTE ID
                            value={lotId} // Asignar el valor actual del estado
                        >
                            {coordinations && coordinations.length > 0 ? (
                                coordinations.map((coord) => (
                                    <Option key={coord.SM_FishingNotification} value={coord.SM_FishingNotification}>
                                        {coord.SM_FishingNotification || 'Sin Lote ID'}
                                    </Option>
                                ))
                            ) : (
                                <Option value="none" disabled>No hay coordinaciones disponibles</Option>
                            )}
                        </Select>
                    </Form.Item>
                </Form>
            ),
        },
        ...Object.keys(sortedGroupedParameters).map((type) => ({
            title: type,
            content: (
                <Form layout="vertical">
                    <Row gutter={16}>
                        {groupedParameters[type].map((param) => {
                            const isNumeric = param.sm_acceptablerange && /\d/.test(param.sm_acceptablerange);

                            return (
                                <Col key={param.id} span={8}>
                                    <Form.Item label={param.sm_parametername}>
                                        <Input
                                            name={param.sm_parametername}
                                            value={formData[param.sm_parametername] || ''}
                                            onChange={handleChange}
                                            type={isNumeric ? "number" : "text"}
                                            step="any"
                                        />
                                    </Form.Item>
                                    {param.sm_acceptablerange && param.sm_acceptablerange !== "-" && (
                                        <div style={{ fontSize: "12px", color: "#888", marginBottom: "10px" }}>
                                            <strong>Rango Aceptable:</strong> {param.sm_acceptablerange}
                                        </div>
                                    )}
                                </Col>
                            );
                        })}
                    </Row>
                </Form>
            ),
        }))
    ];

    return (
        <>
            <PageHeader
                highlightText="Aqualink"
                title="Coordinaciones Pesca"
                organizations={organizations}
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Col span={24}>
                        <Cards>
                            <Steps current={currentStep}>
                                {steps.map((step, index) => (
                                    <Step key={index} title={step.title} />
                                ))}
                            </Steps>
                            <div style={{ marginTop: 20 }}>{steps[currentStep]?.content}</div>
                            <div style={{ marginTop: 20, textAlign: 'right' }}>
                                {currentStep > 0 && <Button style={{ marginRight: 8 }} onClick={onPrev}>Atrás</Button>}
                                {currentStep < steps.length - 1 && <Button type="primary" onClick={onNext}>Siguiente</Button>}
                                {currentStep === steps.length - 1 && <Button type="primary" onClick={() => setModalVisible(true)}>Finalizar Registro</Button>}
                            </div>
                        </Cards>
                    </Col>
                </Row>
            </Main>

            <Modal title="Registro Finalizado" visible={modalVisible} onCancel={() => setModalVisible(false)} footer={[<Button key="guardar" onClick={handleFinalizar}>Guardar</Button>]}><p>¿Desea guardar los datos?</p></Modal>
        </>
    );
}

export default LaboratoryAddCustody;
