import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, notification } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { PageHeader } from '../../../components/page-headers/page-headers';
import StatusBox from './StatusBox';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAccess } from '../../../redux/authentication/actionCreator';
import Cookies from 'js-cookie';
import { FaGavel } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaShrimp } from "react-icons/fa6";
function DashboardMonitoring() {
    const dispatch = useDispatch();
    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

    useEffect(() => {
        dispatch(loadUserAccess());
    }, [dispatch]);
    console.log("asd")

    const orgToAudit = useSelector((state) => state.auth.orgToAudit) || [];
    const activeOrgs = [orgToAudit];
    const auditType = Cookies.get('orgAuditType');


    console.log("Organización activa:", orgToAudit);
    console.log("Organización activa:", auditType);

    console.log(orgToAudit)
    return (
        <>
            <PageHeader
                highlightText="Aqualink Monitoreo"
                title=""
            />
            <Main>
                <Row gutter={25}>
                    <Col xs={24} sm={12} md={6}>
                        <StatusBox
                            icon={FaGavel}
                            percentage={80}
                            label="Legal"
                            color="#8B4513" // Marrón
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <StatusBox
                            icon={FaShrimp}
                            percentage={60}
                            label="Health & WellFare"
                            color="#FA8C16" // Naranja
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <StatusBox
                            icon={FaLeaf}
                            percentage={90}
                            label="Ambiental"
                            color="#52C41A" // Verde
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <StatusBox
                            icon={FaMapMarkedAlt}
                            percentage={40}
                            label="Tracking"
                            color="#1E90FF" // Azul tipo DodgerBlue
                        />
                    </Col>
                </Row>
                <br />
                <Row gutter={25}>
                    <Col xl={10} xs={24} xxl={10} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <AqualinkMaps
                                width={'100%'}
                                height={
                                    window.innerWidth >= 2000 ? '600px' :
                                        '305px'
                                }
                                selectedOrg={selectedOrg}
                                selectedSector={selectedSector}
                                selectedPool={selectedPool}
                                farmsOrgsWithPools={activeOrgs}
                            />
                        </Suspense>
                    </Col>
                    <Col xl={14} xs={24} xxl={14} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Resumen" size="large">
                                <div style={{ textAlign: 'center', position: 'relative' }}>
                                    <div style={{ marginTop: '40px' }}>
                                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
                                            Bienvenid@
                                            {auditType === "FARM" ? "a la Finca" :
                                                auditType === "LAB" ? "al Laboratorio"
                                                    : "a la Empacadora"
                                            } {orgToAudit.Name || ""}
                                        </h1>
                                        <br />
                                        <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#333' }}>
                                            AquaLink Smart Aquaculture Ecosystem Member
                                        </h2>
                                        <br />
                                        <h3 style={{ fontSize: '20px', color: '#666' }}>{orgToAudit.Value}</h3>
                                        <img
                                            src={require('./global_dialogue.svg').default}
                                            alt="Finca Eccsa Manabi"

                                        />
                                    </div>



                                </div>


                            </Cards>
                        </Suspense>
                    </Col>
                </Row>

            </Main>
        </>
    );
}

export default DashboardMonitoring;