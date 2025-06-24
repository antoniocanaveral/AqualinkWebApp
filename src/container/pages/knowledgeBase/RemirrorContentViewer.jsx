import React from 'react';
import 'remirror/styles/all.css';

// Componente para renderizar contenido de Remirror con estilos consistentes
const RemirrorContentViewer = ({ content, height = 400 }) => {
    console.log("Contenido recibido:", content);
    const renderNode = (node, index = 0) => {
        if (!node || !node.type) return null

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
                let styles = {}

                if (node.marks) {
                    node.marks.forEach((mark) => {
                        switch (mark.type) {
                            case "bold":
                                textElement = <strong key={`bold-${index}`}>{textElement}</strong>
                                break
                            case "italic":
                                textElement = <em key={`italic-${index}`}>{textElement}</em>
                                break
                            case "underline":
                                textElement = <u key={`underline-${index}`}>{textElement}</u>
                                break
                            case "fontSize":
                                // Corregido: usar 'size' en lugar de 'fontSize'
                                styles.fontSize = mark.attrs?.size || "inherit"
                                break
                        }
                    })
                }

                return (
                    <span key={index} style={styles}>
                        {textElement}
                    </span>
                )

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
        <div className="" style={{ height: `500px` }}>
            <div className="remirror-theme remirror-content-viewer">
                {content ? renderNode(content) : (
                    <div className="empty-content">
                        <p>Sin contenido disponible</p>
                    </div>
                )}
            </div>

            <style jsx>{`
        .remirror-content-viewer-wrapper {
          border-radius: 6px;
          overflow: hidden;
          background: white;
        }

        .remirror-content-viewer {
          height: 100%;
          overflow-y: auto;
          padding: 16px;
          font-size: 14px;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .remirror-content-viewer::-webkit-scrollbar {
          width: 6px;
        }

        .remirror-content-viewer::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .remirror-content-viewer::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .remirror-content-viewer::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Asegurar que los estilos de Remirror se apliquen correctamente */
        .remirror-content-viewer .ProseMirror {
          outline: none;
          min-height: calc(100% - 32px);
        }

        .remirror-content-viewer .ProseMirror p {
          margin: 0 0 8px 0;
        }

        .remirror-content-viewer .ProseMirror p:last-child {
          margin-bottom: 0;
        }

        /* Estilos específicos para listas */
        .remirror-content-viewer ul[data-list-type="bullet"] {
          list-style-type: disc;
          margin: 8px 0;
          padding-left: 24px;
        }

        .remirror-content-viewer ol[data-list-type="ordered"] {
          list-style-type: decimal;
          margin: 8px 0;
          padding-left: 24px;
        }

        .remirror-content-viewer ul[data-task-list] {
          list-style: none;
          margin: 8px 0;
          padding-left: 0;
        }

        .remirror-content-viewer li[data-task-list-item] {
          margin: 4px 0;
        }

        .remirror-content-viewer li[data-task-list-item] label {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          cursor: default;
        }

        .remirror-content-viewer li[data-task-list-item] input[type="checkbox"] {
          margin-top: 2px;
          cursor: default;
        }

        .remirror-content-viewer li[data-task-list-item][data-checked="true"] span {
          text-decoration: line-through;
          color: #888;
        }

        /* Estilos para tablas */
        .remirror-content-viewer .remirror-table-wrapper {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .remirror-content-viewer .remirror-table-wrapper th {
          background-color: #f5f5f5;
          font-weight: 600;
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
          text-align: left;
        }

        .remirror-content-viewer .remirror-table-wrapper td {
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
        }

        /* Estilos para iframes */
        .remirror-content-viewer .remirror-iframe-wrapper {
          margin: 16px 0;
          border-radius: 4px;
          overflow: hidden;
        }

        .remirror-content-viewer .remirror-iframe-wrapper iframe {
          border: none;
          border-radius: 4px;
        }

        /* Estilos para headings */
        .remirror-content-viewer h1,
        .remirror-content-viewer h2,
        .remirror-content-viewer h3,
        .remirror-content-viewer h4,
        .remirror-content-viewer h5,
        .remirror-content-viewer h6 {
          margin: 16px 0 8px 0;
          font-weight: 600;
          color: #1a1a1a;
        }

        .remirror-content-viewer h1:first-child,
        .remirror-content-viewer h2:first-child,
        .remirror-content-viewer h3:first-child,
        .remirror-content-viewer h4:first-child,
        .remirror-content-viewer h5:first-child,
        .remirror-content-viewer h6:first-child {
          margin-top: 0;
        }

        /* Estilos para imágenes */
        .remirror-content-viewer img {
          display: block;
          margin: 16px 0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Estilos para contenido vacío */
        .remirror-content-viewer .empty-content {
          text-align: center;
          padding: 40px 20px;
          background-color: #f9f9f9;
          border-radius: 4px;
          border: 1px dashed #ddd;
          color: #999;
          font-style: italic;
        }

        .remirror-content-viewer .empty-content p {
          margin: 0;
        }

        /* Estilos para nodos desconocidos */
        .remirror-content-viewer .remirror-unknown-node {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 4px;
          padding: 8px;
          margin: 8px 0;
          color: #856404;
        }

        
        /* Línea horizontal */
        .remirror-content-viewer hr {
          border: none;
          border-top: 1px solid #e0e0e0;
          margin: 16px 0;
        }
      `}</style>
        </div>
    )
}

export default RemirrorContentViewer;