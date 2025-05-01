import React, { useState } from 'react';
import { Row, Col, Collapse, Button } from 'antd';
import { Cards } from '../components/cards/frame/cards-frame';
import Heading from '../components/heading/heading';
import { Main } from './styled';
import { Badge, FaqCategoryBox, FaqSupportBox, FaqWrapper } from './pages/style';
import { PageHeader } from '../components/page-headers/page-headers';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { KnowledgeBaseCardWrap } from './dashboard/Style';

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 5,
  marginBottom: 5,
};

const faqContent = {
  'Descripción QMS': [
    {
      question: '',
      answer: 'AquaLink QMS (Quality Management System Software) o software de sistema de gestión de calidad es la solución informática para la industria camaronera que ofrece las herramientas y recursos necesarios para optimizar los procesos de la organización, priorizando el cumplimiento y los resultados.',
    },
  ],
  'Preguntas Generales': [
    {
      question: '¿Para qué se utiliza esta app/web app?',
      answer: 'La app está diseñada para ayudar a los acuicultores a gestionar sus operaciones de acuicultura de manera eficiente, brindándoles herramientas para monitorear la calidad del agua, controlar el uso de alimento, gestionar el inventario local de cada unidad de producción y mucho más.',
    },
    {
      question: '¿Quién puede beneficiarse del uso de esta app?',
      answer: 'Acuicultores camaroneros, profesionales del sector acuícola, investigadores y empresas y organizaciones involucradas en la cadena de valor de la industria acuícola.',
    },
    {
      question: '¿Es esta app adecuada para todos los tipos de acuicultura (por ejemplo, agua dulce, agua salada)?',
      answer: 'Sí, la app está diseñada para adaptarse tanto a acuicultura de agua dulce como de agua salada, con características personalizables para diferentes protocolos de producción y entornos.',
    },
  ],
  'Cuenta, Registro y equipos': [
    {
      question: '¿Cómo creo una cuenta?',
      answer: 'El registro de una cuenta (cliente) y On boarding es parte de nuestro servicio inicial. Este servicio está enfocado para una experiencia de inicio de uso de la plataforma sin inconvenientes. Nuestro equipo está enfocado en darle el mejor servicio y crear la cuenta por usted.',
    },
    {
      question: '¿Cómo creo un Usuario?',
      answer: 'El registro de usuarios dentro de la cuenta de un cliente y su respectivo registro es parte de nuestro servicio inicial. Este servicio está enfocado para una correcta asignación de usuarios y permisos de uso de los diferentes módulos del ecosistema.',
    },
    {
      question: '¿Cómo activo o desactivo los permisos de Usuarios?',
      answer: 'La activación y desactivación de permisos de los usuarios se gestiona de forma segura a través de un solo Usuario con capacidad para hacerlo (Coordinador Web app).',
    },
    {
      question: 'Olvidé mi contraseña. ¿Cómo la restablezco?',
      answer: 'Tanto en AquaLink app como en AquaLink Web app haz clic en el enlace "Olvidé mi contraseña" en la pantalla de inicio de sesión y escribe tu dirección de correo electrónico. Te enviaremos un enlace para restablecerla.',
    },
    {
      question: '¿Puedo tener múltiples cuentas para diferentes granjas?',
      answer: 'Sí, el Ecosistema AquaLink permite gestionar múltiples granjas desde una sola cuenta corporativa mediante un sistema de enlace (ROOT) que agrupa a todas las granjas para una gestión unificada en el Web app. Puedes alternar entre ellas fácilmente desde tu panel de control.',
    },
    {
      question: '¿En qué equipos funciona AquaLink App?',
      answer: 'AquaLink App corre de forma exclusiva en la Tablet de 8 pulgadas que hemos configurado para nuestros clientes, esta estrategia permite que el equipo esté dedicado exclusivamente a la gestión de nuestra plataforma y a los enlaces inalámbricos IoT en la granja.',
    },
    {
      question: '¿Cuántos tablets AquaLink necesito para gestionar?',
      answer: 'Idealmente cada equipo puede operar con 7 piscinas de engorde y sus respectivas pre crías. Es un asunto de capacidad de operación del equipo ya que una misma Tablet no puede estar en dos sitios al mismo tiempo el mismo día.',
    },
    {
      question: '¿En qué equipos puedo gestionar AquaLink Web app?',
      answer: 'El ecosistema AquaLink.app en su versión web puede desplegarse en Desktops, Laptops, tablets (diferentes a la Tablet AquaLink) y teléfonos inteligentes. Nuestra plataforma es completamente responsive y se despliega de forma segura y dinámica en cualquiera de estos dispositivos. Es necesaria una conexión de internet segura.',
    },
  ],
  'Características y Funcionalidad': [
    {
      question: '¿Qué características ofrece AquaLink app?',
      answer: 'La app de campo incluye herramientas para capturar datos de forma sincrónica y asincrónica, monitorear la calidad del agua, gestionar procesos operativos de campo, horarios de alimentación, realizar un seguimiento de la salud de la especie, gestionar el inventario y generar reportes de rendimiento.',
    },
    {
      question: '¿Puedo monitorear la calidad del agua y suelo en tiempo real?',
      answer: 'Sí, la app te permite conectar sensores de calidad del agua (WaterLink) y monitorear parámetros de calidad de agua y suelo como son temperatura, pH, alcalinidad, niveles de oxígeno (BLE 9100) y salinidad en tiempo real. Además se pueden registrar los datos de muestreos de calidad de agua y suelo de fuentes externas.',
    },
    {
      question: '¿Cómo puedo realizar un seguimiento del uso de alimento y optimizar los horarios de alimentación?',
      answer: 'Al registrar los parámetros de un ciclo de producción, AquaLink hace un seguimiento del consumo y establece horarios de alimentación según las necesidades de la especie. La app también sugiere cantidades óptimas de alimento en función del crecimiento y comportamiento de la especie. AquaLink mediante su IA optimiza los regímenes de alimentación combinando todas las variables de producción diaria.',
    },
    {
      question: '¿Puedo realizar un seguimiento del crecimiento del cultivo y establecer potenciales fechas de cosecha?',
      answer: 'Sí, la app te permite monitorear el crecimiento de la especie y configurar recordatorios de cosecha según las necesidades de tu granja.',
    },
    {
      question: '¿Qué otros reportes genera AquaLink?',
      answer: 'AquaLink genera más de 20 reportes que agrupan métricas de producción, gestión y rendimiento. Todos estos reportes están disponibles en tiempo real.',
    },
    {
      question: '¿Qué otros reportes genera AquaLink app?',
      answer: 'AquaLink en su aplicativo de campo genera reportes de consumo local (solo en el equipo) permitiendo que las acciones y decisiones de operación en campo sean más ágiles y precisas. Estos reportes son de visualización única. Por lo que no pueden ser ni exportados ni impresos.',
    },
  ],
  'Datos y Análisis': [
    {
      question: '¿AquaLink Web app ofrece reportes y análisis?',
      answer: 'Sí, la app genera más de 20 reportes detallados sobre la calidad del agua, el uso de alimento, el crecimiento del stock y otros parámetros para ayudar a tomar decisiones informadas en tiempo real.',
    },
    {
      question: '¿Puedo exportar los datos para análisis offline?',
      answer: 'Sí, desde AquaLink Web app puedes exportar los datos en formato CSV o PDF para realizar un análisis más detallado o para mantener registros fuera de línea.',
    },
    {
      question: '¿Existe una forma de analizar tendencias a lo largo del tiempo?',
      answer: 'La app ofrece herramientas de análisis de tendencias que visualizan los cambios en la calidad del agua, las tasas de crecimiento y otros parámetros a lo largo del tiempo, ayudando a optimizar la gestión de la granja. Nuestro equipo de data science trabaja permanentemente para tener la mejor IA de la industria acuícola camaronera.',
    },
  ],
  'Integración y Conectividad': [
    {
      question: '¿Puedo integrar la app con otros dispositivos o equipos?',
      answer: 'Sí, la app se puede integrar con varios sensores acuícolas, monitores de calidad del agua y dispositivos IoT para la recopilación de datos en tiempo real.',
    },
    {
      question: '¿La app funciona sin conexión a internet?',
      answer: 'Sí. La mayoría de las características de captura de datos se pueden realizar sin conexión a internet, sin embargo, hay actividades específicas que requieren una conexión a internet. La sincronización con el servidor ocurre de forma automática una vez que la Tablet AquaLink se conecte nuevamente a internet.',
    },
    {
      question: '¿La app se puede conectar a un sistema de gestión de granja basado en la nube?',
      answer: 'Sí, AquaLink es una plataforma en la nube, por lo que la app también soporta integración con plataformas basadas en la nube para el almacenamiento de datos y acceso remoto a la información de la granja.',
    },
  ],
  'Suscripción y Precios': [
    {
      question: '¿La app es gratuita?',
      answer: 'No. Es un servicio empresarial valorado. La versión DEMO proporciona funcionalidades básicas, mientras que la versión premium desbloquea herramientas y análisis completos.',
    },
    {
      question: '¿Cómo puedo actualizar a la versión premium?',
      answer: 'Puedes actualizar a la versión premium a través de la contratación y configuración de la app y web. Esto solo podemos hacer desde nuestros servidores y personal. No se lo realiza en línea.',
    },
    {
      question: '¿Existen cargos ocultos o tarifas adicionales?',
      answer: 'No, todos los costos están claramente indicados durante el proceso de contratación y registro. No hay cargos ocultos.',
    },
  ],
  'Seguridad y Privacidad': [
    {
      question: '¿Están seguros mis datos en AquaLink?',
      answer: 'Sí, utilizamos encriptación de nivel industrial para proteger tus datos y garantizar tu privacidad. La información se almacena de manera segura en cumplimiento con las leyes de protección de datos vigentes.',
    },
    {
      question: '¿Puedo controlar quién tiene acceso a los datos de mi granja?',
      answer: 'Sí, puedes establecer permisos para los miembros de tu equipo, otorgándoles acceso a datos y funciones específicas según tus preferencias.',
    },
  ],
  'Preguntas Específicas de la App Móvil': [
    {
      question: '¿Puedo usar la app en dispositivos Android e iOS?',
      answer: 'No, la app está disponible solo para el equipo Tablet AquaLink. La versión Web App puede gestionarse tanto para Android como para iOS.',
    },
    {
      question: '¿La app funciona en tabletas y teléfonos inteligentes?',
      answer: 'Sí, la Web app está optimizada tanto para tabletas como para teléfonos inteligentes, ofreciendo una experiencia fluida en todos los dispositivos.',
    },
  ],
  'Actualizaciones y Nuevas Funciones': [
    {
      question: '¿Cómo me mantengo actualizado sobre nuevas funciones?',
      answer: 'Enviamos notificaciones sobre nuevas actualizaciones y funciones a través de la app y web app, además de publicar notas de la versión en nuestro sitio web.',
    },
    {
      question: '¿La app se actualiza automáticamente?',
      answer: 'Sí, la app se actualizará automáticamente cuando se publique una nueva versión. También puedes comprobar manualmente si hay actualizaciones en las notificaciones que se envían a los usuarios y coordinador de AquaLink.app de tu organización.',
    },
  ],
};

function FaqComponent() {
  const [selectedSubmenu, setSelectedSubmenu] = useState('Descripción QMS');


  const handleSubmenuClick = (submenu) => {
    setSelectedSubmenu(submenu);
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Soporte"

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
                      Buscar por contenido
                    </Badge>
                    <ul>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Descripción QMS' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Descripción QMS')}
                          to="#"
                        >
                          Descripción ¿Qué es AquaqLink.app QMS?
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
                          className={selectedSubmenu === 'Cuenta, Registro y equipos' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Cuenta, Registro y equipos')}
                          to="#"
                        >
                          Cuenta, Registro y equipos (hardware)
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Características y Funcionalidad' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Características y Funcionalidad')}
                          to="#"
                        >
                          Características y Funcionalidad
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Datos y Análisis' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Datos y Análisis')}
                          to="#"
                        >
                          Datos y Análisis
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Integración y Conectividad' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Integración y Conectividad')}
                          to="#"
                        >
                          Integración y Conectividad
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Suscripción y Precios' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Suscripción y Precios')}
                          to="#"
                        >
                          Suscripción y Precios
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Seguridad y Privacidad' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Seguridad y Privacidad')}
                          to="#"
                        >
                          Seguridad y Privacidad
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Preguntas Específicas de la App Móvil' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Preguntas Específicas de la App Móvil')}
                          to="#"
                        >
                          Preguntas Específicas de la App Móvil
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={selectedSubmenu === 'Actualizaciones y Nuevas Funciones' ? 'active primary' : 'secondary'}
                          onClick={() => handleSubmenuClick('Actualizaciones y Nuevas Funciones')}
                          to="#"
                        >
                          Actualizaciones y Nuevas Funciones
                        </Link>
                      </li>
                    </ul>
                  </Cards>
                </FaqCategoryBox>
              </Col>

              <Col xs={24}>
                <FaqSupportBox>
                  <Cards headless>
                    <figure>
                      <img src={require('../static/img/AQx-IMG/logo-aqualink-240x36px-bgLite-02.svg').default} alt="Logo AquaLink" />
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
              <Cards headless title="FAQ Contenido">
                <Collapse
                  bordered={false}



                  expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                >
                  {faqContent[selectedSubmenu].map((item, index) => (
                    <Panel header={item.question || 'Descripción'} key={index} style={customPanelStyle}>
                      <p>{item.answer}</p>
                    </Panel>
                  ))}
                </Collapse>
              </Cards>
            </FaqWrapper>
          </Col>
        </Row>
        <KnowledgeBaseCardWrap />
      </Main>
    </>
  );
}

export default FaqComponent;
