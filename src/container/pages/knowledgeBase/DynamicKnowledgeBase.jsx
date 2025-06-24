import React, { useState, useEffect } from 'react';
import { Spin, Alert } from 'antd';
import { Routes, NavLink, Route } from 'react-router-dom';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import DynamicTabContent from './DynamicTabContent';
import { KnowledgebaseArticleWrap, ArticleTabWrap, CtaWrap } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import KnowledgeBaseTop from './overview/Knowledgebase/knowledgeTop';
import { db } from '../../../firebase/firebaseClient';

function DynamicKnowledgeBase() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Knowledge Base',
    },
  ];

  useEffect(() => {
    fetchTabs();
  }, []);

  const fetchTabs = async () => {
    try {
      setLoading(true);
      const tabsQuery = query(collection(db, 'knowledge_tabs'), orderBy('name'));
      const snapshot = await getDocs(tabsQuery);
      const tabsData = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        slug: doc.data().name.toLowerCase().replace(/\s+/g, '-')
      }));
      setTabs(tabsData);
    } catch (err) {
      console.error('Error fetching tabs:', err);
      setError('Error al cargar las pestañas');
    } finally {
      setLoading(false);
    }
  };

  const path = '/admin/knowledge-dynamic';

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ margin: 20 }}
      />
    );
  }

  return (
    <>
      <PageHeader title="Knowledge Base" routes={PageRoutes} />
      <Main>
        <KnowledgeBaseTop />
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <ArticleTabWrap className="ninjadash-article-tab">
              <div className="ninjadash-article-tab__menu">
                <nav>
                  <ul>
                    {tabs.map(tab => (
                      <li key={tab.id}>
                        <NavLink to={`${path}/${tab.slug}`}>
                          {tab.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <Routes>
                  <Route 
                    index 
                    element={
                      tabs.length > 0 ? (
                        <DynamicTabContent tabName={tabs[0].name} />
                      ) : (
                        <div>No hay contenido disponible</div>
                      )
                    } 
                  />
                  {tabs.map(tab => (
                    <Route
                      key={tab.id}
                      path={tab.slug}
                      element={<DynamicTabContent tabName={tab.name} />}
                    />
                  ))}
                </Routes>
              </div>
            </ArticleTabWrap>

            <CtaWrap>
              <div className="ninjadash-knowledgebase-cta">
                <h2 className="ninjadash-knowledgebase-cta__title">
                  ¿Necesitas más ayuda?
                </h2>
                <p>Contáctanos y te responderemos lo antes posible.</p>
                <Button className="btn-rqSubmit" type="primary" size="large">
                  Enviar Solicitud
                </Button>
              </div>
            </CtaWrap>
          </div>
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  );
}

export default DynamicKnowledgeBase;