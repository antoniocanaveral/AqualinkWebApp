// overview/ContentRenderer.jsx
import React from 'react';
import { Typography } from 'antd';

const { Text, Paragraph } = Typography;

function ContentRenderer({ content, preview = false }) {
  // Si el contenido es un objeto (contenido enriquecido del editor)
  if (typeof content === 'object' && content !== null) {
    return (
      <div className="rich-content">
        {renderRichContent(content, preview)}
      </div>
    );
  }

  // Si el contenido es texto plano
  if (typeof content === 'string') {
    const displayContent = preview && content.length > 200 
      ? content.substring(0, 200) + '...' 
      : content;
    
    return (
      <Paragraph style={{ marginBottom: 0 }}>
        {displayContent}
      </Paragraph>
    );
  }

  return (
    <Text type="secondary" italic>
      Contenido no disponible
    </Text>
  );
}

function renderRichContent(content, preview = false) {
  // Esta función maneja el contenido del editor enriquecido
  // Ajusta según el formato que uses en tu KnowledgeContentEditor
  
  if (content.blocks) {
    // Si usas Draft.js o similar
    return content.blocks.map((block, index) => {
      if (preview && index > 2) return null; // Limitar en vista previa
      
      switch (block.type) {
        case 'header-one':
          return <h1 key={index}>{block.text}</h1>;
        case 'header-two':
          return <h2 key={index}>{block.text}</h2>;
        case 'header-three':
          return <h3 key={index}>{block.text}</h3>;
        case 'unstyled':
        default:
          return <p key={index}>{block.text}</p>;
      }
    });
  }

  if (content.content) {
    // Si usas TipTap o similar
    return renderTipTapContent(content.content, preview);
  }

  // Fallback para otros formatos
  return <div dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }} />;
}

function renderTipTapContent(content, preview = false) {
  if (!Array.isArray(content)) return null;

  return content.map((node, index) => {
    if (preview && index > 3) return null; // Limitar en vista previa

    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index}>
            {node.content?.map((textNode, textIndex) => (
              <span key={textIndex}>{textNode.text}</span>
            ))}
          </p>
        );
      case 'heading':
        const HeadingTag = `h${node.attrs?.level || 1}`;
        return (
          <HeadingTag key={index}>
            {node.content?.map((textNode, textIndex) => (
              <span key={textIndex}>{textNode.text}</span>
            ))}
          </HeadingTag>
        );
      case 'bulletList':
        return (
          <ul key={index}>
            {node.content?.map((listItem, listIndex) => (
              <li key={listIndex}>
                {listItem.content?.map((para, paraIndex) => (
                  <span key={paraIndex}>
                    {para.content?.map((textNode, textIndex) => (
                      <span key={textIndex}>{textNode.text}</span>
                    ))}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default ContentRenderer;