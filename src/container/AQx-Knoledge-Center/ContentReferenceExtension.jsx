import { NodeExtension } from '@remirror/core';

export class ContentReferenceExtension extends NodeExtension {
  get name() {
    return 'contentReference';
  }

  createNodeSpec() {
    return {
      attrs: {
        id: { default: null },
        title: { default: '' },
        topic: { default: '' },
        path: { default: '' }
      },
      inline: true,
      group: 'inline',
      draggable: false,
      parseDOM: [
        {
          tag: 'span[data-content-ref]',
          getAttrs: (node) => ({
            id: node.getAttribute('data-ref-id'),
            title: node.getAttribute('data-ref-title'),
            topic: node.getAttribute('data-ref-topic'),
            path: node.getAttribute('data-ref-path')
          })
        }
      ],
      toDOM: (node) => {
        const title = node.attrs.title || 'Contenido';
        const topic = node.attrs.topic || '';
        const displayText = topic ? `${topic}/${title}` : title;
        
        return [
          'span',
          {
            'data-content-ref': 'true',
            'data-ref-id': node.attrs.id,
            'data-ref-title': node.attrs.title,
            'data-ref-topic': node.attrs.topic,
            'data-ref-path': node.attrs.path,
            class: 'content-reference',
            contenteditable: 'false',
            style: 'background: linear-gradient(135deg, #1890ff, #40a9ff); color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; margin: 0 4px; cursor: pointer; text-decoration: none; display: inline-block; font-weight: 500; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 2px 8px rgba(24,144,255,0.3); user-select: none;'
          },
          `🔗 Ver "${displayText}"`
        ];
      }
    };
  }

  createCommands() {
    return {
      insertContentReference: (attrs) => ({ tr, dispatch, state }) => {
        console.log("=== EJECUTANDO COMANDO insertContentReference ===");
        console.log("Atributos recibidos:", attrs);
        console.log("¿Hay dispatch?:", !!dispatch);
        
        // Siempre retornar true para enabled, pero solo ejecutar si hay dispatch
        if (!dispatch) {
          console.log("Comando habilitado pero no ejecutado (sin dispatch)");
          return true;
        }

        try {
          const { from, to } = tr.selection;
          console.log("Posición de inserción:", { from, to });
          
          const node = this.type.create(attrs);
          console.log("Nodo creado:", node);
          
          // Insertar el nodo en la posición del cursor
          tr.replaceWith(from, to, node);
          
          // Mover el cursor después del nodo insertado
          tr.setSelection(tr.mapping.map(to + 1));
          
          console.log("✅ Nodo insertado correctamente");
          return true;
        } catch (error) {
          console.error("❌ Error en insertContentReference:", error);
          return false;
        }
      }
    };
  }

  // Métodos requeridos
  createNodeViews() {
    return {};
  }

  createPasteRules() {
    return [];
  }

  createInputRules() {
    return [];
  }

  static disableExtraAttributes = true;
}