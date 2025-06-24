import React, { useState } from "react";
import { useRemirrorContext } from "@remirror/react";
import { 
  Button, 
  Modal, 
  Input, 
  InputNumber, 
  Space, 
  Divider, 
  Dropdown, 
  Tooltip 
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
} from '@ant-design/icons';

const KnowledgeEditorToolbar = () => {
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
    focus,
  } = useRemirrorContext().commands;

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);

  const parseVideoUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const handleInsertVideo = () => {
    if (!videoUrl.trim()) {
      return;
    }
    if (addIframe.enabled()) {
      const embedUrl = parseVideoUrl(videoUrl);
      addIframe({ src: embedUrl, width: 560, height: 315 });
      setVideoUrl("");
      setVideoModalOpen(false);
      focus();
    }
  };

  const handleInsertTable = () => {
    if (createTable.enabled() && rows > 0 && cols > 0) {
      createTable({ rowsCount: rows, colsCount: cols });
      setRows(3);
      setCols(3);
      setTableModalOpen(false);
      focus();
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
    if (setFontSize.enabled()) {
      setFontSize(key);
      focus();
    }
  };

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
      `}</style>
      
      <div className="knowledge-editor-toolbar">
        {/* Formato de texto */}
        <div className="toolbar-group">
          <Tooltip title="Negrita">
            <Button
              type="text"
              size="small"
              icon={<BoldOutlined />}
              onClick={() => toggleBold()}
              disabled={!toggleBold.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Cursiva">
            <Button
              type="text"
              size="small"
              icon={<ItalicOutlined />}
              onClick={() => toggleItalic()}
              disabled={!toggleItalic.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Subrayado">
            <Button
              type="text"
              size="small"
              icon={<UnderlineOutlined />}
              onClick={() => toggleUnderline()}
              disabled={!toggleUnderline.enabled()}
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
              onClick={() => toggleBulletList()}
              disabled={!toggleBulletList.enabled()}
            />
          </Tooltip>
          
          <Tooltip title="Lista numerada">
            <Button
              type="text"
              size="small"
              icon={<OrderedListOutlined />}
              onClick={() => toggleOrderedList()}
              disabled={!toggleOrderedList.enabled()}
            />
          </Tooltip>
          
         
        </div>

        <Divider type="vertical" className="toolbar-divider" />

        {/* Insertar elementos */}
        <div className="toolbar-group">
         
          
          <Tooltip title="Insertar video">
            <Button
              type="text"
              size="small"
              icon={<YoutubeOutlined />}
              onClick={() => setVideoModalOpen(true)}
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
            disabled={!setFontSize.enabled()}
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
    </>
  );
};

export default KnowledgeEditorToolbar;