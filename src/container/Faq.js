import React, { useState } from 'react';
import { Row, Col, Collapse, Button } from 'antd';
import { Cards } from '../components/cards/frame/cards-frame';
import Heading from '../components/heading/heading';
import { Main } from './styled';
import { Badge, FaqCategoryBox, FaqSupportBox, FaqWrapper } from './pages/style';
import { PageHeader } from '../components/page-headers/page-headers';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 5,
  marginBottom: 5,
};

function FaqComponent() {
  const [selectedSubmenu, setSelectedSubmenu] = useState('QMS explanation');

  // Contenido de las preguntas frecuentes basado en el submenú
  const faqContent = {
    'QMS explanation': [
      {
        question: '¿Para qué se utiliza esta app/web app?',
        answer: 'La app está diseñada para ayudar a los acuicultores a gestionar sus operaciones de acuicultura de manera eficiente, brindándole herramientas para monitorear la calidad del agua, controlar el uso de alimento, gestionar el inventario local de cada unidad de producción y mucho más.',
      },
      {
        question: '¿Quién puede beneficiarse del uso de esta app?',
        answer: 'Acuicultores camaroneros, profesionales del sector acuícola, investigadores y empresas involucradas en la industria acuícola.',
      },
      {
        question: '¿Es esta app adecuada para todos los tipos de acuicultura (por ejemplo, agua dulce, agua salada)?',
        answer: 'Sí, la app está diseñada para adaptarse tanto a acuicultura de agua dulce como de agua salada, con características personalizables para diferentes protocolos de producción y entornos.',
      },
    ],
    'Preguntas Generales': [
      {
        question: '¿Cómo creo una cuenta?',
        answer: 'El registro de una cuenta (cliente) es parte de nuestro servicio inicial. Este servicio está enfocado en darle el mejor servicio, creando la cuenta por usted.',
      },
      {
        question: '¿Cómo creo un Usuario?',
        answer: 'El registro de usuarios dentro de la cuenta de un cliente es parte de nuestro servicio inicial, asegurando una correcta asignación de usuarios y permisos.',
      },
      {
        question: '¿Cómo activo o desactivo los permisos de Usuarios?',
        answer: 'La activación y desactivación de permisos de los usuarios se gestiona de forma segura a través de un solo Usuario con capacidad para hacerlo (Coordinador Web app).',
      },
    ],
    'Cuenta y Registro': [
      {
        question: '¿Cómo creo una cuenta?',
        answer: 'El registro de una cuenta (cliente) y Onboarding es parte de nuestro servicio inicial. Este servicio está enfocado en darle el mejor servicio y crear la cuenta por usted.',
      },
      {
        question: '¿Puedo tener múltiples cuentas para diferentes granjas?',
        answer: 'Sí, el Ecosistema AquaLink permite gestionar múltiples granjas desde una sola cuenta corporativa mediante un sistema de enlace (ROOT) que agrupa todas las granjas para una gestión unificada.',
      },
      {
        question: '¿En qué equipos funciona AquaLink App?',
        answer: 'AquaLink App corre exclusivamente en la Tablet de 8 pulgadas configurada para nuestros clientes, garantizando que el equipo esté dedicado a la gestión de nuestra plataforma.',
      },
    ],
  };

  // Maneja la selección del submenú
  const handleSubmenuClick = (submenu) => {
    setSelectedSubmenu(submenu);
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Soporte"
        className="ninjadash-page-header-main"
        title="Faqs"
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} sm={11}>
            <Row>
              <Col xs={24}>
                <FaqCategoryBox>
                  <Cards headless>
                    <Badge className="faq-badge" type="light">
                      Browse by Topic
                    </Badge>
                    <Collapse defaultActiveKey={['1']} bordered={false}>
                      <Panel header="AquaLink Smart Aquaculture Ecosystem" key="1" style={customPanelStyle}>
                        <ul>
                          <li>
                            <Link
                              className={selectedSubmenu === 'QMS explanation' ? 'active primary' : 'secondary'}
                              onClick={() => handleSubmenuClick('QMS explanation')}
                              to="#"
                            >
                              QMS explanation
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={selectedSubmenu === 'Preguntas Generales' ? 'active primary' : 'secondary'}
                              onClick={() => handleSubmenuClick('Preguntas Generales')}
                              to="#"
                            >
                              Preguntas Generales
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={selectedSubmenu === 'Cuenta y Registro' ? 'active primary' : 'secondary'}
                              onClick={() => handleSubmenuClick('Cuenta y Registro')}
                              to="#"
                            >
                              Cuenta y Registro
                            </Link>
                          </li>
                        </ul>
                      </Panel>
                    </Collapse>
                  </Cards>
                </FaqCategoryBox>
              </Col>

              <Col xs={24}>
                <FaqSupportBox>
                  <Cards headless>
                    <figure>
                      <img src={require('../static/img/AQx-IMG/logo-aqualink-240x36px-bgLite-02.svg').default} alt="" />
                    </figure>
                    <figcaption>
                      <Heading as="h5">¿No encuentras la ayuda que necesitas?</Heading>
                      <Button size="default" type="primary">
                        Contacta a soporte
                      </Button>
                    </figcaption>
                  </Cards>
                </FaqSupportBox>
              </Col>
            </Row>
          </Col>

          <Col xxl={18} lg={16} md={14} sm={13}>
            <FaqWrapper>
              <Cards headless title="FAQ Content">
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                >
                  {faqContent[selectedSubmenu].map((item, index) => (
                    <Panel header={item.question} key={index} style={customPanelStyle}>
                      <p>{item.answer}</p>
                     
                    </Panel>
                  ))}
                </Collapse>
              </Cards>
            </FaqWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default FaqComponent;
