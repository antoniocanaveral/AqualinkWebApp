import React, { useCallback } from 'react';
import { Remirror, ThemeProvider, useRemirror } from "@remirror/react";
import {
  BoldExtension,
  ItalicExtension,
  UnderlineExtension,
  HeadingExtension,
  TableExtension,
  PlaceholderExtension,
  IframeExtension,
  BulletListExtension,
  ListItemExtension,
  OrderedListExtension,
  TaskListExtension,
  ImageExtension,
  DropCursorExtension,
} from "remirror/extensions";
import { FontSizeExtension } from "@remirror/extension-font-size";
import KnowledgeEditorToolbar from './KnowledgeEditorToolBar';
import { ContentReferenceExtension } from './ContentReferenceExtension';

const KnowledgeContentEditor = ({ 
  initialContent, 
  onChange, 
  height = 300,
  placeholder = "Escribe tu contenido aquí..." 
}) => {
  // Procesar contenido inicial
  const processedInitialContent = (() => {
    if (!initialContent) {
      return {
        type: "doc",
        content: [],
      };
    }

    // Si es string, intentar parsear como JSON
    if (typeof initialContent === "string") {
      try {
        const parsed = JSON.parse(initialContent);
        if (Array.isArray(parsed)) {
          return {
            type: "doc",
            content: parsed,
          };
        }
        return parsed;
      } catch (e) {
        // Si no es JSON válido, tratarlo como texto plano
        return {
          type: "doc",
          content: [{
            type: "paragraph",
            content: [{
              type: "text",
              text: initialContent
            }]
          }],
        };
      }
    }

    // Si es array, envolver en doc
    if (Array.isArray(initialContent)) {
      return {
        type: "doc",
        content: initialContent,
      };
    }

    // Si ya es un objeto doc válido
    if (typeof initialContent === "object" && initialContent.type === "doc") {
      return initialContent;
    }

    // Fallback
    return {
      type: "doc",
      content: [],
    };
  })();

  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new UnderlineExtension(),
      new HeadingExtension(),
      new TableExtension(),
      new PlaceholderExtension({ placeholder }),
      new FontSizeExtension({ defaultSize: "16px", unit: "px" }),
      new IframeExtension({ enableResizing: true }),
      new BulletListExtension(),
      new ListItemExtension(),
      new OrderedListExtension(),
      new TaskListExtension(),
      new ImageExtension({ enableResizing: true }),
      new DropCursorExtension(),
      new ContentReferenceExtension(), // Nueva extensión de referencias
    ],
    content: processedInitialContent,
    selection: "end",
    stringHandler: "prosemirror",
  });

  // Manejar pegado de imágenes
  const handlePaste = useCallback(
    (event, { helpers }) => {
      const items = (event.clipboardData || event.originalEvent.clipboardData).items;
      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          event.preventDefault();
          const file = item.getAsFile();
          if (file) {
            const url = URL.createObjectURL(file);
            helpers.insertImage({ src: url, alt: "Imagen pegada" });
            return true;
          }
        }
      }
    },
    []
  );

  // Manejar cambios en el contenido
  const handleChange = useCallback(({ helpers }) => {
    const json = helpers.getJSON();
    if (onChange) {
      onChange(json);
    }
  }, [onChange]);

  const handleError = useCallback((error) => {
    console.error("Editor error:", error);
    return {
      type: "doc",
      content: [],
    };
  }, []);

  return (
    <div className="knowledge-content-editor">
      <style jsx>{`
        .knowledge-content-editor {
          border: 1px solid #d9d9d9;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .editor-wrapper {
          min-height: ${height}px;
          max-height: 600px;
          overflow-y: auto;
        }
        
        .editor-wrapper .remirror-editor {
          padding: 16px;
          min-height: ${height - 32}px;
          outline: none;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .editor-wrapper .remirror-editor p {
          margin: 0 0 8px 0;
        }
        
        .editor-wrapper .remirror-editor:focus {
          outline: none;
        }

        /* Estilos mejorados para las referencias de contenido en el editor */
        .editor-wrapper .content-reference {
          background: linear-gradient(135deg, #1890ff, #40a9ff) !important;
          color: white !important;
          padding: 4px 12px !important;
          border-radius: 16px !important;
          font-size: 12px !important;
          margin: 0 4px !important;
          cursor: pointer !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          transition: all 0.2s ease !important;
          font-weight: 500 !important;
          border: 2px solid rgba(255,255,255,0.2) !important;
          box-shadow: 0 2px 8px rgba(24,144,255,0.3) !important;
          user-select: none !important;
        }

        .editor-wrapper .content-reference:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(24,144,255,0.4) !important;
          background: linear-gradient(135deg, #0372ce, #1890ff) !important;
        }

        .editor-wrapper .content-reference .ref-icon {
          font-size: 10px !important;
        }

        .editor-wrapper .content-reference .ref-title {
          font-weight: 500 !important;
        }

        /* Asegurar que las referencias se muestren correctamente */
        .editor-wrapper span[data-content-ref="true"] {
          background: linear-gradient(135deg, #1890ff, #40a9ff) !important;
          color: white !important;
          padding: 4px 12px !important;
          border-radius: 16px !important;
          font-size: 12px !important;
          margin: 0 4px !important;
          cursor: pointer !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          transition: all 0.2s ease !important;
          font-weight: 500 !important;
          border: 2px solid rgba(255,255,255,0.2) !important;
          box-shadow: 0 2px 8px rgba(24,144,255,0.3) !important;
        }

        .editor-wrapper span[data-content-ref="true"]:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(24,144,255,0.4) !important;
          background: linear-gradient(135deg, #0372ce, #1890ff) !important;
        }
      `}</style>

      <ThemeProvider>
        <div className="editor-wrapper">
          <Remirror
            manager={manager}
            initialContent={state}
            autoFocus={false}
            autoRender="end"
            onChange={handleChange}
            onError={handleError}
            onPaste={handlePaste}
          >
            <KnowledgeEditorToolbar />
          </Remirror>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default KnowledgeContentEditor;