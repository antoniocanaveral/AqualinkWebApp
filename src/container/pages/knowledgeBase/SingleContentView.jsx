// SingleContentView.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spin, Alert, Breadcrumb, Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { doc, getDoc } from 'firebase/firestore';
import ContentRenderer from './overview/ContentRenderer';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { db } from '../../../firebase/firebaseClient';

function SingleContentView() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchContent();
    }
  }, [id]);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, 'knowledge_content', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent({ id: docSnap.id, ...docSnap.data() });
      } else {
        setError('Contenido no encontrado');
      }
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Error al cargar el contenido en single');
    } finally {
      setLoading(false);
    }
  };

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'knowledge-dynamic',
      breadcrumbName: 'Knowledge Base',
    },
    {
      path: '',
      breadcrumbName: content?.subtopic || 'Contenido',
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <Alert
        message="Error"
        description={error || 'Contenido no encontrado'}
        type="error"
        showIcon
        style={{ margin: 20 }}
      />
    );
  }

  return (
    <>
      <PageHeader title={content.subtopic} routes={PageRoutes} />
      <Main>
        <div style={{ padding: 24 }}>
          <div style={{ marginBottom: 16 }}>
            <Link to="/admin/knowledge-dynamic">
              <Button icon={<ArrowLeftOutlined />}>
                Volver al Knowledge Base
              </Button>
            </Link>
          </div>

          <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>{content.tab}</Breadcrumb.Item>
            <Breadcrumb.Item>{content.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{content.topic}</Breadcrumb.Item>
            <Breadcrumb.Item>{content.subtopic}</Breadcrumb.Item>
          </Breadcrumb>

          <Card>
            <ContentRenderer content={content.content} preview={false} />
          </Card>
        </div>
      </Main>
    </>
  );
}

export default SingleContentView;