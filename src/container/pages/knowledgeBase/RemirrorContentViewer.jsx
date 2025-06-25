import React from 'react';
import 'remirror/styles/all.css';

// Componente para renderizar contenido de Remirror con estilos consistentes
const RemirrorContentViewer = ({ content, height = 400, onReferenceClick }) => {
    console.log("Contenido recibido en viewer:", content);
    
    const renderNode = (node, index = 0) => {
        if (!node || !node.type) return null

        console.log(`Renderizando nodo tipo: ${node.type}`, node);

        switch (node.type) {
            case "doc":
                return (
                    <div key={index} className="ProseMirror">
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </div>
                )

            case "paragraph":
                return (
                    <p key={index}>
                        {node.content?.map((child, i) => renderNode(child, i)) || ""}
                    </p>
                )

            case "heading":
                const HeadingTag = `h${node.attrs?.level || 1}`
                return React.createElement(
                    HeadingTag,
                    { key: index },
                    node.content?.map((child, i) => renderNode(child, i))
                )

           case "text":
                let textElement = node.text || ""
                
                // Verificar si el texto es una referencia (con tema/título)
                const isReference = textElement.match(/^Ver "(.+)\/(.+)"$/) || textElement.match(/^Ver "(.+)"$/);
                
                if (isReference) {
                    // Extraer tema y título si están disponibles
                    const fullMatch = textElement.match(/^Ver "(.+)\/(.+)"$/);
                    let referencedTopic = '';
                    let referencedTitle = '';
                    
                    if (fullMatch) {
                        // Formato: Ver "tema/título"
                        referencedTopic = fullMatch[1];
                        referencedTitle = fullMatch[2];
                    } else {
                        // Formato: Ver "título" (sin tema)
                        const simpleMatch = textElement.match(/^Ver "(.+)"$/);
                        referencedTitle = simpleMatch[1];
                    }
                    
                    return (
                        <span
                            key={index}
                            className="content-reference-link"
                            onClick={() => {
                                console.log('Haciendo clic en referencia:', { topic: referencedTopic, title: referencedTitle });
                                if (onReferenceClick) {
                                    onReferenceClick({ 
                                        topic: referencedTopic,
                                        title: referencedTitle,
                                        fullTitle: textElement 
                                    });
                                }
                            }}
                            style={{
                                color: '#1890ff',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontWeight: '500',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#40a9ff';
                                e.target.style.textDecoration = 'underline';
                                e.target.style.backgroundColor = '#f0f8ff';
                                e.target.style.padding = '2px 4px';
                                e.target.style.borderRadius = '4px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1890ff';
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.padding = '0';
                            }}
                        >
                            {textElement}
                        </span>
                    );
                }
            // Función para manejar referencias de contenido (por si usamos la extensión)
            case "contentReference":
                console.log("Renderizando referencia de contenido en viewer:", node.attrs);
                const { id, title, topic, path } = node.attrs || {};
                const displayText = topic ? `${topic}/${title}` : title;
                
                return (
                    <span
                        key={index}
                        className="content-reference-viewer"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('Haciendo clic en referencia:', { id, title, topic, path });
                            if (onReferenceClick) {
                                onReferenceClick({ id, title, topic, path });
                            }
                        }}
                        title={`Ir a: ${path || displayText}`}
                        style={{
                            color: '#1890ff',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Ver "{displayText}"
                    </span>
                );
            case "bulletList":
                return (
                    <ul key={index} data-list-type="bullet">
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </ul>
                )

            case "orderedList":
                return (
                    <ol key={index} data-list-type="ordered">
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </ol>
                )

            case "listItem":
                return (
                    <li key={index}>
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </li>
                )

            case "taskList":
                return (
                    <ul key={index} data-task-list>
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </ul>
                )

            case "taskListItem":
                const isChecked = node.attrs?.checked || false
                return (
                    <li key={index} data-task-list-item data-checked={isChecked}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                disabled
                                readOnly
                            />
                            <span>
                                {node.content?.map((child, i) => renderNode(child, i))}
                            </span>
                        </label>
                    </li>
                )

            case "image":
                return (
                    <img
                        key={index}
                        src={node.attrs?.src || "/placeholder.svg"}
                        alt={node.attrs?.alt || "Imagen"}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            ...(node.attrs?.width && { width: node.attrs.width }),
                            ...(node.attrs?.height && { height: node.attrs.height })
                        }}
                    />
                )

            case "table":
                return (
                    <table key={index} className="remirror-table-wrapper">
                        <tbody>{node.content?.map((child, i) => renderNode(child, i))}</tbody>
                    </table>
                )

            case "tableRow":
                return <tr key={index}>{node.content?.map((child, i) => renderNode(child, i))}</tr>

            case "tableCell":
                return (
                    <td key={index} {...(node.attrs || {})}>
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </td>
                )

            case "tableHeader":
                return (
                    <th key={index} {...(node.attrs || {})}>
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </th>
                )

            case "iframe":
                return (
                    <div key={index} className="remirror-iframe-wrapper">
                        <iframe
                            src={node.attrs?.src}
                            width={node.attrs?.width || "100%"}
                            height={node.attrs?.height || "315"}
                            frameBorder="0"
                            allowFullScreen
                            title={node.attrs?.title || "Contenido embebido"}
                        />
                    </div>
                )

            case "hardBreak":
                return <br key={index} />

            case "horizontalRule":
                return <hr key={index} />

            default:
                console.warn(`Tipo de nodo no soportado: ${node.type}`)
                return (
                    <div key={index} className="remirror-unknown-node">
                        {node.content?.map((child, i) => renderNode(child, i))}
                    </div>
                )
        }
    }

    return (
        <div className="remirror-content-viewer-container" style={{ height: `${height}px` }}>
            <div className="remirror-theme remirror-content-viewer">
                {content ? renderNode(content) : (
                    <div className="empty-content">
                        <p>Sin contenido disponible</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .remirror-content-viewer-container {
                    overflow-y: auto;
                    overflow-x: hidden;
                    width: 100%;
                }

                .remirror-content-viewer {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: transparent;
                    padding: 20px;
                    border: none;
                    min-height: 100%;
                }

                .remirror-content-viewer .content-reference-link:hover {
                    color: #40a9ff !important;
                    background-color: #f0f8ff !important;
                    padding: 2px 4px !important;
                    border-radius: 4px !important;
                }

                .remirror-content-viewer .content-reference-viewer:hover {
                    color: #40a9ff !important;
                    background-color: #f0f8ff !important;
                    padding: 2px 4px !important;
                    border-radius: 4px !important;
                }

                .remirror-content-viewer p {
                    margin: 0 0 16px 0;
                    font-size: 14px;
                }

                .remirror-content-viewer h1 {
                    font-size: 28px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                    color: #262626;
                    border-bottom: 2px solid #f0f0f0;
                    padding-bottom: 10px;
                }

                .remirror-content-viewer h2 {
                    font-size: 24px;
                    font-weight: 600;
                    margin: 24px 0 16px 0;
                    color: #262626;
                }

                .remirror-content-viewer h3 {
                    font-size: 20px;
                    font-weight: 600;
                    margin: 20px 0 12px 0;
                    color: #262626;
                }

                .remirror-content-viewer h4,
                .remirror-content-viewer h5,
                .remirror-content-viewer h6 {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 16px 0 8px 0;
                    color: #262626;
                }

                .remirror-content-viewer ul[data-list-type="bullet"] {
                    list-style-type: disc;
                    margin: 16px 0;
                    padding-left: 24px;
                }

                .remirror-content-viewer ol[data-list-type="ordered"] {
                    list-style-type: decimal;
                    margin: 16px 0;
                    padding-left: 24px;
                }

                .remirror-content-viewer li {
                    margin: 4px 0;
                    font-size: 14px;
                }

                .remirror-content-viewer ul[data-task-list] {
                    list-style: none;
                    padding-left: 0;
                    margin: 16px 0;
                }

                .remirror-content-viewer li[data-task-list-item] {
                    display: flex;
                    align-items: flex-start;
                    margin: 8px 0;
                }

                .remirror-content-viewer li[data-task-list-item] label {
                    display: flex;
                    align-items: flex-start;
                    cursor: default;
                    width: 100%;
                }

                .remirror-content-viewer li[data-task-list-item] input[type="checkbox"] {
                    margin: 0 8px 0 0;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .remirror-content-viewer .remirror-table-wrapper {
                    width: 100%;
                    margin: 16px 0;
                    border-collapse: collapse;
                    border: 1px solid #e8e8e8;
                    border-radius: 6px;
                    overflow: hidden;
                }

                .remirror-content-viewer .remirror-table-wrapper th,
                .remirror-content-viewer .remirror-table-wrapper td {
                    border: 1px solid #e8e8e8;
                    padding: 8px 12px;
                    text-align: left;
                    font-size: 14px;
                }

                .remirror-content-viewer .remirror-table-wrapper th {
                    background-color: #fafafa;
                    font-weight: 600;
                    color: #262626;
                }

                .remirror-content-viewer .remirror-iframe-wrapper {
                    margin: 16px 0;
                    text-align: center;
                }

                .remirror-content-viewer .remirror-iframe-wrapper iframe {
                    max-width: 100%;
                    border-radius: 6px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .remirror-content-viewer img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 6px;
                    margin: 16px 0;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .remirror-content-viewer strong {
                    font-weight: 600;
                    color: #262626;
                }

                .remirror-content-viewer em {
                    font-style: italic;
                }

                .remirror-content-viewer u {
                    text-decoration: underline;
                }

                .remirror-content-viewer hr {
                    border: none;
                    border-top: 1px solid #e8e8e8;
                    margin: 24px 0;
                }

                .remirror-content-viewer .empty-content {
                    text-align: center;
                    color: #8c8c8c;
                    font-style: italic;
                    padding: 40px 20px;
                }

                .remirror-content-viewer .remirror-unknown-node {
                    border: 1px dashed #ff4d4f;
                    padding: 8px;
                    border-radius: 4px;
                    background-color: #fff2f0;
                    color: #a8071a;
                    font-size: 12px;
                    margin: 8px 0;
                }

                /* Estilos personalizados para el scrollbar */
                .remirror-content-viewer-container::-webkit-scrollbar {
                    width: 6px;
                }

                .remirror-content-viewer-container::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 3px;
                }

                .remirror-content-viewer-container::-webkit-scrollbar-thumb {
                    background: #c1c1c1;
                    border-radius: 3px;
                }

                .remirror-content-viewer-container::-webkit-scrollbar-thumb:hover {
                    background: #a8a8a8;
                }
            `}</style>
        </div>
    )
}

export default RemirrorContentViewer;