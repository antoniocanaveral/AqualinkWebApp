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