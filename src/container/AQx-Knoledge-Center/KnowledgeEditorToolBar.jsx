import React, { useState, useEffect } from "react";
import { useRemirrorContext } from "@remirror/react";
import { 
  Button, 
  Modal, 
  Input, 
  InputNumber, 
  Space, 
  Divider, 
  Dropdown, 
  Tooltip,
  Select,
  Card,
  Typography,
  Tag,
  message
} from 'antd';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  TableOutlined,
  YoutubeOutlined,
  FontSizeOutlined,
  CheckSquareOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseClient";

const { Option } = Select;
const { Text } = Typography;
const KnowledgeEditorToolbar = () => {
  const context = useRemirrorContext();
  console.log("Contexto de Remirror:", context);
  
  const { commands, helpers } = context;
  
  // Verificar que los comandos existan antes de desestructurar
  const {
    toggleBold,
    toggleItalic,
    toggleUnderline,
    createTable,
    setFontSize,
    addIframe,
    toggleBulletList,
    toggleOrderedList,
    toggleTaskList,
    insertContentReference,
    focus,
  } = commands || {};

  console.log("Comando insertContentReference:", insertContentReference);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);

  // Estados para referencias de contenido
  const [referenceModalOpen, setReferenceModalOpen] = useState(false);
  const [availableContent, setAvailableContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContent, setSelectedContent] = useState(null);

  // Cargar contenido disponible
  useEffect(() => {
    const fetchAvailableContent = async () => {
      try {
        const q = query(collection(db, "knowledge_content"), orderBy("order"));
        const snapshot = await getDocs(q);
        const content = snapshot.docs.map((doc) => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setAvailableContent(content);
        setFilteredContent(content);
      } catch (error) {
        console.error("Error al cargar contenido:", error);
      }
    };

    if (referenceModalOpen) {
      fetchAvailableContent();
    }
  }, [referenceModalOpen]);

  // Filtrar contenido por búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredContent(availableContent);
    } else {
      const filtered = availableContent.filter(item => 
        item.tab?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topic?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subtopic?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContent(filtered);
    }
  }, [searchTerm, availableContent]);

  const parseVideoUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const handleInsertVideo = () => {
    if (!videoUrl.trim()) {
      return;
    }
    if (addIframe && addIframe.enabled && addIframe.enabled()) {
      const embedUrl = parseVideoUrl(videoUrl);
      addIframe({ src: embedUrl, width: 560, height: 315 });
      setVideoUrl("");
      setVideoModalOpen(false);
      focus && focus();
    } else {
      message.error("No se puede insertar video en este momento");
    }
  };

  const handleInsertTable = () => {
    if (createTable && createTable.enabled && createTable.enabled() && rows > 0 && cols > 0) {
      createTable({ rowsCount: rows, colsCount: cols });
      setRows(3);
      setCols(3);
      setTableModalOpen(false);
      focus && focus();
    } else {
      message.error("No se puede insertar tabla en este momento");
    }
  };

   const handleInsertReference = () => {
    console.log("=== INSERTANDO REFERENCIA SIMPLE ===");
    
    if (!selectedContent) {
      message.error("Por favor selecciona un contenido");
      return;
    }

    // Crear el texto con tema/título
    const referenceText = `Ver "${selectedContent.topic}/${selectedContent.subtopic || 'Contenido'}"`;
    console.log("Texto a insertar:", referenceText);

    try {
      // Método 1: Usar comando insertText si está disponible
      if (commands && commands.insertText && commands.insertText.enabled()) {
        console.log("Usando comando insertText");
        commands.insertText(referenceText);
        
        setSelectedContent(null);
        setReferenceModalOpen(false);
        setSearchTerm("");
        
        message.success("Referencia insertada");
        return;
      }

      // Método 2: Usar execCommand directamente en el editor
      console.log("Usando execCommand");
      
      // Buscar el elemento del editor
      const editorElement = document.querySelector('.remirror-editor');
      
      if (editorElement) {
        console.log("Editor encontrado");
        
        // Dar foco al editor
        editorElement.focus();
        
        // Crear un span con clase reference
        const span = document.createElement('span');
        span.className = 'reference';
        span.setAttribute('data-content-id', selectedContent.id);
        span.textContent = referenceText;
        span.style.cssText = `
          background: linear-gradient(135deg, #1890ff, #40a9ff);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          margin: 0 2px;
          cursor: pointer;
          display: inline-block;
          font-weight: 500;
        `;
        
        // Obtener la selección actual
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          
          // Insertar el span
          range.deleteContents();
          range.insertNode(span);
          
          // Mover cursor después del span
          range.setStartAfter(span);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
          
          console.log("✅ Span insertado directamente");
        } else {
          // Si no hay selección, insertar al final
          editorElement.appendChild(span);
          console.log("✅ Span agregado al final");
        }
        
        setSelectedContent(null);
        setReferenceModalOpen(false);
        setSearchTerm("");
        
        message.success("Referencia insertada");
        return;
      }

      // Método 3: Fallback con texto simple
      console.log("Usando fallback con texto simple");
      
      if (document.execCommand) {
        document.execCommand('insertText', false, referenceText);
        
        setSelectedContent(null);
        setReferenceModalOpen(false);
        setSearchTerm("");
        
        message.success("Referencia insertada como texto");
      } else {
        throw new Error("No se pudo insertar el texto");
      }

    } catch (error) {
      console.error("Error:", error);
      message.error("Error al insertar referencia: " + error.message);
    }
  };


  const fontSizeItems = [
    { key: '12px', label: 'Muy pequeño (12px)' },
    { key: '14px', label: 'Pequeño (14px)' },
    { key: '16px', label: 'Normal (16px)' },
    { key: '18px', label: 'Mediano (18px)' },
    { key: '20px', label: 'Grande (20px)' },
    { key: '24px', label: 'Muy grande (24px)' },
  ];

  const handleFontSizeChange = ({ key }) => {
    if (setFontSize && setFontSize.enabled && setFontSize.enabled()) {
      setFontSize(key);
      focus && focus();
    }
  };

  // Si no hay comandos disponibles, mostrar mensaje
  if (!commands) {
    return (
      <div className="knowledge-editor-toolbar" style={{ padding: 16, textAlign: 'center' }}>
        <Text type="secondary">Cargando herramientas del editor...</Text>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .knowledge-editor-toolbar {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        .toolbar-group {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        
        .toolbar-divider {
          height: 20px;
          margin: 0 8px;
        }

        .content-item {
          border: 1px solid #f0f0f0;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .content-item:hover {
          border-color: #1890ff;
          background-color: #f6ffed;
        }

        .content-item.selected {
          border-color: #1890ff;
          background-color: #e6f7ff;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
        }
      `}</style>
      
      <div className="knowledge-editor-toolbar">
        {/* Formato de texto */}
        <div className="toolbar-group">
          <Tooltip title="Negrita">
            <Button
              type="text"
              size="small"
              icon={<BoldOutlined />}
              onClick={() => toggleBold && toggleBold()}
              disabled={!toggleBold || !toggleBold.enabled || !toggleBold.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Cursiva">
            <Button
              type="text"
              size="small"
              icon={<ItalicOutlined />}
              onClick={() => toggleItalic && toggleItalic()}
              disabled={!toggleItalic || !toggleItalic.enabled || !toggleItalic.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Subrayado">
            <Button
              type="text"
              size="small"
              icon={<UnderlineOutlined />}
              onClick={() => toggleUnderline && toggleUnderline()}
              disabled={!toggleUnderline || !toggleUnderline.enabled || !toggleUnderline.enabled()}
            />
          </Tooltip>
        </div>

        <Divider type="vertical" className="toolbar-divider" />

        {/* Listas */}
        <div className="toolbar-group">
          <Tooltip title="Lista con viñetas">
            <Button
              type="text"
              size="small"
              icon={<UnorderedListOutlined />}
              onClick={() => toggleBulletList && toggleBulletList()}
              disabled={!toggleBulletList || !toggleBulletList.enabled || !toggleBulletList.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Lista numerada">
            <Button
              type="text"
              size="small"
              icon={<OrderedListOutlined />}
              onClick={() => toggleOrderedList && toggleOrderedList()}
              disabled={!toggleOrderedList || !toggleOrderedList.enabled || !toggleOrderedList.enabled()}
            />
          </Tooltip>
        </div>

        <Divider type="vertical" className="toolbar-divider" />

        {/* Insertar elementos */}
        <div className="toolbar-group">
          <Tooltip title="Insertar tabla">
            <Button
              type="text"
              size="small"
              icon={<TableOutlined />}
              onClick={() => setTableModalOpen(true)}
              disabled={!createTable}
            />
          </Tooltip>
          
          <Tooltip title="Insertar video">
            <Button
              type="text"
              size="small"
              icon={<YoutubeOutlined />}
              onClick={() => setVideoModalOpen(true)}
              disabled={!addIframe}
            />
          </Tooltip>

          <Tooltip title="Referenciar contenido">
            <Button
              type="text"
              size="small"
              icon={<LinkOutlined />}
              onClick={() => setReferenceModalOpen(true)}
              style={{ color: '#1890ff' }}
              disabled={!insertContentReference}
            />
          </Tooltip>
        </div>

        <Divider type="vertical" className="toolbar-divider" />

        {/* Tamaño de fuente */}
        <div className="toolbar-group">
          <Dropdown
            menu={{
              items: fontSizeItems,
              onClick: handleFontSizeChange,
            }}
            placement="bottomLeft"
            disabled={!setFontSize || !setFontSize.enabled || !setFontSize.enabled()}
          >
            <Tooltip title="Tamaño de texto">
              <Button
                type="text"
                size="small"
                icon={<FontSizeOutlined />}
              />
            </Tooltip>
          </Dropdown>
        </div>
      </div>

      {/* Modal para insertar video */}
      <Modal
        title="📹 Insertar Video"
        open={videoModalOpen}
        onOk={handleInsertVideo}
        onCancel={() => {
          setVideoModalOpen(false);
          setVideoUrl("");
        }}
        okText="Insertar"
        cancelText="Cancelar"
        width={500}
      >
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Input
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            prefix={<YoutubeOutlined style={{ color: '#ff4d4f' }} />}
          />
          <div style={{ color: '#666', fontSize: '12px' }}>
            💡 Soporta URLs de YouTube. Se convertirán automáticamente a formato embebido.
          </div>
        </Space>
      </Modal>

      {/* Modal para insertar tabla */}
      <Modal
        title="📊 Insertar Tabla"
        open={tableModalOpen}
        onOk={handleInsertTable}
        onCancel={() => {
          setTableModalOpen(false);
          setRows(3);
          setCols(3);
        }}
        okText="Insertar"
        cancelText="Cancelar"
        width={400}
      >
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Número de filas:
            </label>
            <InputNumber
              min={1}
              max={20}
              value={rows}
              onChange={setRows}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Número de columnas:
            </label>
            <InputNumber
              min={1}
              max={10}
              value={cols}
              onChange={setCols}
              style={{ width: '100%' }}
            />
          </div>
          
          <div style={{ color: '#666', fontSize: '12px' }}>
            💡 Se creará una tabla de {rows} filas × {cols} columnas
          </div>
        </Space>
      </Modal>

      {/* Modal para referenciar contenido */}
      <Modal
        title="🔗 Referenciar Contenido Existente"
        open={referenceModalOpen}
        onOk={handleInsertReference}
        onCancel={() => {
          setReferenceModalOpen(false);
          setSelectedContent(null);
          setSearchTerm("");
        }}
        okText="Insertar Referencia"
        cancelText="Cancelar"
        width={800}
        okButtonProps={{ disabled: !selectedContent }}
      >
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Input.Search
            placeholder="Buscar por tab, categoría, tema o subtema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            allowClear
          />
          
          <div style={{ 
            maxHeight: 400, 
            overflowY: 'auto', 
            border: '1px solid #f0f0f0', 
            borderRadius: 6, 
            padding: 8 
          }}>
            {filteredContent.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 40, color: '#999' }}>
                No se encontró contenido
              </div>
            ) : (
              filteredContent.map((item) => (
                <div
                  key={item.id}
                  className={`content-item ${selectedContent?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedContent(item)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ marginBottom: 8 }}>
                        <Text strong style={{ fontSize: 14 }}>
                          {item.subtopic || 'Sin título'}
                        </Text>
                      </div>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        <Tag color="blue" size="small">{item.tab}</Tag>
                        <Tag color="green" size="small">{item.category}</Tag>
                        <Tag color="orange" size="small">{item.topic}</Tag>
                      </div>
                    </div>
                    {selectedContent?.id === item.id && (
                      <div style={{ color: '#1890ff', fontSize: 16 }}>✓</div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

        {selectedContent && (
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Text strong>Contenido seleccionado:</Text>
              <div style={{ marginTop: 4 }}>
                <Text>Ver "{selectedContent.topic}/{selectedContent.subtopic}"</Text>
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: '#666' }}>
                {selectedContent.tab} → {selectedContent.category} → {selectedContent.topic}
              </div>
            </Card>
          )}
          
          <div style={{ color: '#666', fontSize: '12px' }}>
            💡 Selecciona un contenido para crear una referencia. Los usuarios podrán hacer clic en la referencia para navegar al contenido seleccionado.
          </div>
        </Space>
      </Modal>
    </>
  );
};

export default KnowledgeEditorToolbar;