// overview/DynamicTabContent.jsx
import React, { useState, useEffect } from 'react';
import { Spin, Alert, Collapse, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import ContentRenderer from './ContentRenderer';
import { db } from '../../../firebase/firebaseClient';

const { Panel } = Collapse;
const { Title, Text } = Typography;

function DynamicTabContent({ tabName }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupedContent, setGroupedContent] = useState({});

  useEffect(() => {
    if (tabName) {
      fetchContent();
    }
  }, [tabName]);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const contentQuery = query(
        collection(db, 'knowledge_content'),
        where('tab', '==', tabName),
        orderBy('order')
      );
      
      const snapshot = await getDocs(contentQuery);
      const contentData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setContent(contentData);
      groupContentByCategory(contentData);
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Error al cargar el contenido');
    } finally {
      setLoading(false);
    }
  };

  const groupContentByCategory = (data) => {
    const grouped = data.reduce((acc, item) => {
      const category = item.category || 'Sin categoría';
      if (!acc[category]) {
        acc[category] = {};
      }
      
      const topic = item.topic || 'Sin tema';
      if (!acc[category][topic]) {
        acc[category][topic] = [];
      }
      
      acc[category][topic].push(item);
      return acc;
    }, {});
    
    setGroupedContent(grouped);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>
          <Text>Cargando contenido...</Text>
        </div>
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

  if (content.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <Text type="secondary">
          No hay contenido disponible para {tabName}
        </Text>
      </div>
    );
  }

  return (
    <div className="dynamic-tab-content">
      {Object.entries(groupedContent).map(([category, topics]) => (
        <div key={category} className="category-section" style={{ marginBottom: 32 }}>
          <Title level={3} style={{ color: '#1890ff', marginBottom: 16 }}>
            {category}
          </Title>
          
          {Object.entries(topics).map(([topic, items]) => (
            <div key={topic} className="topic-section" style={{ marginBottom: 24 }}>
              <Title level={4} style={{ color: '#52c41a', marginBottom: 12 }}>
                {topic}
              </Title>
              
              <Collapse ghost>
                {items.map((item, index) => (
                  <Panel
                    header={
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 500 }}>
                          {item.subtopic || `Elemento ${index + 1}`}
                        </span>
                        <Link 
                          to={`/admin/knowledge-view/${item.id}`}
                          style={{ fontSize: 12, color: '#1890ff' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver completo →
                        </Link>
                      </div>
                    }
                    key={item.id}
                  >
                    <ContentRenderer content={item.content} preview={true} />
                  </Panel>
                ))}
              </Collapse>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DynamicTabContent;