import { useEffect, useState } from "react"
import {
  Typography,
  Button,
  Table,
  Form,
  Input,
  Select,
  Modal,
  Space,
  Popconfirm,
  message,
  Row,
  Col,
  Card,
  Divider,
  Tag,
  Tooltip,
  Spin,
  Alert,
} from "antd"
import { PlusOutlined, EditOutlined, DeleteOutlined, ReloadOutlined, CheckCircleOutlined } from "@ant-design/icons"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore"
import { db } from "../../firebase/firebaseClient"
import "./Editor.css"
import KnowledgeContentEditor from "./KnoledgeContentEditor"

const { Title, Text } = Typography
const { Option } = Select

const KnowledgeCenter = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  // Form fields
  const [tabs, setTabs] = useState([])
  const [categories, setCategories] = useState([])
  const [topics, setTopics] = useState([])
  const [subtopics, setSubtopics] = useState([])

  // New items
  const [newTab, setNewTab] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newTopic, setNewTopic] = useState("")
  const [newSubtopic, setNewSubtopic] = useState("")

  // Estados adicionales para controlar la carga
  const [creatingOption, setCreatingOption] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState("checking")

  // Función para verificar conexión a Firestore
  const checkFirestoreConnection = async () => {
    try {
      console.log("🔍 Verificando conexión a Firestore...")
      setConnectionStatus("checking")

      const testQuery = query(collection(db, "knowledge_tabs"))
      const snapshot = await getDocs(testQuery)

      console.log("✅ Conexión a Firestore exitosa")
      console.log("📊 Firestore configurado correctamente, docs encontrados:", snapshot.size)
      setConnectionStatus("connected")
      return true
    } catch (error) {
      console.error("❌ Error de conexión a Firestore:", error)
      setConnectionStatus("error")

      if (error.code === "permission-denied") {
        message.error("Error de permisos: Verifica las reglas de seguridad de Firestore")
      } else if (error.code === "unavailable") {
        message.error("Firestore no disponible: Verifica tu conexión a internet")
      } else {
        message.error(`Error de conexión: ${error.message}`)
      }
      return false
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      console.log("📋 Cargando contenido principal...")
      const q = query(collection(db, "knowledge_content"), orderBy("order"))
      const snapshot = await getDocs(q)
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setData(items)
      console.log("✅ Contenido cargado:", items.length, "elementos")
    } catch (error) {
      console.error("❌ Error al cargar contenido:", error)
      message.error("Error al cargar contenido: " + error.message)
    }
    setLoading(false)
  }

  const fetchDropdowns = async () => {
    try {
      console.log("📥 Cargando dropdowns...")
      const [tabsSnap, catsSnap, topicsSnap, subsSnap] = await Promise.all([
        getDocs(collection(db, "knowledge_tabs")),
        getDocs(collection(db, "knowledge_categories")),
        getDocs(collection(db, "knowledge_topics")),
        getDocs(collection(db, "knowledge_subtopics")),
      ])

      console.log("📊 Resultados de dropdowns:")
      console.log("  - Tabs:", tabsSnap.size)
      console.log("  - Categorías:", catsSnap.size)
      console.log("  - Temas:", topicsSnap.size)
      console.log("  - Subtemas:", subsSnap.size)

      setTabs(tabsSnap.docs.map((doc) => ({ id: doc.id, name: doc.data().name })))
      setCategories(catsSnap.docs.map((doc) => ({ id: doc.id, name: doc.data().name })))
      setTopics(topicsSnap.docs.map((doc) => ({ id: doc.id, name: doc.data().name })))
      setSubtopics(subsSnap.docs.map((doc) => ({ id: doc.id, name: doc.data().name })))

      console.log("✅ Dropdowns cargados correctamente")
    } catch (error) {
      console.error("❌ Error al cargar opciones:", error)
      message.error("Error al cargar opciones: " + error.message)
    }
  }

  useEffect(() => {
    const initialize = async () => {
      const isConnected = await checkFirestoreConnection()
      if (isConnected) {
        await fetchData()
        await fetchDropdowns()
      }
    }
    initialize()
  }, [])

  const addNewOption = async (collectionName, name, setter, currentArray, optionType) => {
    if (!name || !name.trim()) {
      message.warning(`Por favor ingresa un nombre para el ${optionType}`)
      return false
    }

    const trimmedName = name.trim()

    const exists = currentArray.some((item) => item.name.toLowerCase() === trimmedName.toLowerCase())

    if (exists) {
      message.warning(`El ${optionType} "${trimmedName}" ya existe`)
      return false
    }

    if (connectionStatus !== "connected") {
      message.error("Sin conexión a la base de datos. Verifica tu conexión.")
      return false
    }

    setCreatingOption(true)

    try {
      console.log(`🔥 Iniciando creación de ${optionType}...`)
      console.log(`📂 Colección: ${collectionName}`)
      console.log(`📝 Nombre: "${trimmedName}"`)

      const docRef = await addDoc(collection(db, collectionName), {
        name: trimmedName,
        createdAt: new Date(),
        active: true,
      })

      console.log("✅ Documento creado exitosamente con ID:", docRef.id)

      const newItem = { id: docRef.id, name: trimmedName }
      setter((prev) => [...prev, newItem])

      message.success(`${optionType} "${trimmedName}" creado correctamente`)
      return true
    } catch (error) {
      console.error("❌ Error completo al crear:", error)

      let errorMessage = "Error desconocido"

      if (error.code === "permission-denied") {
        errorMessage = "Permisos denegados. Verifica las reglas de Firestore."

        Modal.error({
          title: "🚫 Error de Permisos de Firestore",
          content: (
            <div>
              <p>
                <strong>Las reglas de Firestore están bloqueando las escrituras.</strong>
              </p>
              <p>Para solucionarlo:</p>
              <ol>
                <li>
                  Ve a <strong>Firebase Console</strong>
                </li>
                <li>Selecciona tu proyecto</li>
                <li>
                  Ve a <strong>Firestore Database Rules</strong>
                </li>
                <li>Actualiza las reglas de seguridad</li>
                <li>
                  Haz clic en <strong>Publish</strong>
                </li>
              </ol>
              <p>
                <em>⚠️ Configura reglas apropiadas para tu entorno</em>
              </p>
            </div>
          ),
          width: 600,
        })
      } else if (error.code === "unavailable") {
        errorMessage = "Base de datos no disponible. Verifica tu conexión."
      } else if (error.code === "unauthenticated") {
        errorMessage = "No autenticado. Verifica tu sesión."
      } else if (error.message) {
        errorMessage = error.message
      }

      message.error(`Error al crear ${optionType}: ${errorMessage}`)

      if (error.code === "unavailable") {
        setConnectionStatus("error")
      }

      return false
    } finally {
      setCreatingOption(false)
    }
  }

  const deleteOption = async (collectionName, id, setter, currentArray, optionType, optionName) => {
    if (connectionStatus !== "connected") {
      message.error("Sin conexión a la base de datos")
      return
    }

    try {
      console.log(`🗑️ Eliminando ${optionType}: ${optionName} (ID: ${id})`)
      await deleteDoc(doc(db, collectionName, id))
      setter(currentArray.filter((item) => item.id !== id))
      message.success(`${optionType} "${optionName}" eliminado correctamente`)
    } catch (error) {
      console.error("❌ Error al eliminar:", error)
      message.error(`Error al eliminar el ${optionType}: ${error.message}`)
    }
  }

  const handleSave = async (values) => {
    console.log('Guardando contenido con valores:', values);
    if (connectionStatus !== 'connected') {
      message.error('Sin conexión a la base de datos');
      return;
    }

    try {
      // Ensure content is saved as JSON
      const contentToSave = values.contentValue;
      const saveValues = { ...values, content: contentToSave };
      delete saveValues.contentValue; // Remove temporary field

      if (editing) {
        await updateDoc(doc(db, 'knowledge_content', editing.id), saveValues);
        message.success('Contenido actualizado');
      } else {
        await addDoc(collection(db, 'knowledge_content'), {
          ...saveValues,
          order: data.length + 1,
          createdAt: new Date(),
        });
        message.success('Contenido creado');
      }
      setModalVisible(false);
      setEditing(null);
      form.resetFields();
      resetNewItems();
      fetchData();
    } catch (error) {
      console.error('❌ Error al guardar:', error);
      message.error('Error al guardar: ' + error.message);
    }
  };

  const handleEdit = (record) => {
    console.log('Editing record:', record);
    form.setFieldsValue({
      ...record,
      contentValue: record.content || '', // Fallback to empty string
    });
    setEditing(record);
    setModalVisible(true);
  };
  const handleDelete = async (id) => {
    if (connectionStatus !== "connected") {
      message.error("Sin conexión a la base de datos")
      return
    }

    try {
      await deleteDoc(doc(db, "knowledge_content", id))
      message.success("Eliminado")
      fetchData()
    } catch (error) {
      console.error("❌ Error al eliminar:", error)
      message.error("Error al eliminar: " + error.message)
    }
  }

  const resetNewItems = () => {
    setNewTab("")
    setNewCategory("")
    setNewTopic("")
    setNewSubtopic("")
  }

  const handleModalClose = () => {
    setModalVisible(false)
    form.resetFields()
    setEditing(null)
    resetNewItems()
  }

  const handleReconnect = async () => {
    const isConnected = await checkFirestoreConnection()
    if (isConnected) {
      await fetchData()
      await fetchDropdowns()
    }
  }

  const renderConnectionStatus = () => {
    switch (connectionStatus) {
      case "checking":
        return (
          <div style={{ textAlign: "center", padding: 40 }}>
            <Spin size="large" />
            <div style={{ marginTop: 16 }}>
              <Text>Verificando conexión a la base de datos...</Text>
            </div>
          </div>
        )
      case "error":
        return (
          <div style={{ textAlign: "center", padding: 40 }}>
            <Alert
              message="Error de Conexión"
              description="No se pudo conectar a la base de datos. Verifica tu conexión e intenta nuevamente."
              type="error"
              showIcon
              style={{ marginBottom: 16 }}
            />
            <Button type="primary" icon={<ReloadOutlined />} onClick={handleReconnect} size="large">
              Reconectar
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  const renderOptionManager = (title, options, newValue, setNewValue, collectionName, setter, icon, color) => (
    <Card
      size="small"
      title={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={{ fontWeight: 600 }}>{title}</span>
          </div>
          <Tag color={color} style={{ fontSize: 11, fontWeight: 500 }}>
            {options.length}
          </Tag>
        </div>
      }
      style={{ marginBottom: 12 }}
      bodyStyle={{ padding: 16 }}
      headStyle={{ backgroundColor: "#fafafa", borderBottom: "1px solid #f0f0f0" }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        {/* Lista de opciones existentes */}
        <div style={{ minHeight: 60, maxHeight: 120, overflowY: "auto", padding: "0 8px" }}>
          {options.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {options.map((option) => (
                <Tag
                  key={option.id}
                  closable
                  onClose={() =>
                    deleteOption(collectionName, option.id, setter, options, title.toLowerCase(), option.name)
                  }
                  color={color}
                  style={{
                    marginBottom: 6,
                    padding: "4px 8px",
                    fontSize: 12,
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  className="hover:shadow-sm"
                >
                  {option.name}
                </Tag>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                border: "2px dashed #e8e8e8",
                borderRadius: 8,
                backgroundColor: "#fafafa",
                color: "#999",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>📝</div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  No hay {title.toLowerCase()}
                </Text>
              </div>
            </div>
          )}
        </div>

        {/* Input para agregar nueva opción */}
        <div
          style={{
            display: "flex",
            padding: 12,
            backgroundColor: "#f8f9fa",
            borderRadius: 8,
            border: "1px solid #e9ecef",
          }}
        >
          <Input.Group compact style={{ display: "flex", width: "100%" }}>
            <Input
              style={{
                width: "calc(100% - 44px)",
                borderRadius: "6px 0 0 6px",
                borderRight: "none",
              }}
              placeholder={`➕ Nuevo ${title.toLowerCase()}...`}
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              onPressEnter={async () => {
                if (!creatingOption && newValue.trim()) {
                  const success = await addNewOption(collectionName, newValue, setter, options, title.toLowerCase())
                  if (success) setNewValue("")
                }
              }}
              disabled={creatingOption || connectionStatus !== "connected"}
              size="small"
            />
            <Button
              type="primary"
              onClick={async () => {
                if (!creatingOption && newValue.trim()) {
                  const success = await addNewOption(collectionName, newValue, setter, options, title.toLowerCase())
                  if (success) setNewValue("")
                }
              }}
              loading={creatingOption}
              disabled={creatingOption || !newValue.trim() || connectionStatus !== "connected"}
              size="middle"
              style={{
                width: 44,
                borderRadius: "0 6px 6px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlusOutlined />
            </Button>
          </Input.Group>
        </div>
      </Space>
    </Card>
  )

  const columns = [
    {
      title: "Tab",
      dataIndex: "tab",
      key: "tab",
      width: 150,
      render: (text) => (
        <Tag color="blue" style={{ fontSize: 12, padding: "4px 8px" }}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Categoría",
      dataIndex: "category",
      key: "category",
      width: 160,
      render: (text) => (
        <Tag color="green" style={{ fontSize: 12, padding: "4px 8px" }}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Tema",
      dataIndex: "topic",
      key: "topic",
      width: 160,
      render: (text) => (
        <Tag color="orange" style={{ fontSize: 12, padding: "4px 8px" }}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Subtema",
      dataIndex: "subtopic",
      key: "subtopic",
      width: 160,
      render: (text) => (
        <Tag color="purple" style={{ fontSize: 12, padding: "4px 8px" }}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Contenido",
      dataIndex: "content",
      key: "content",
      width: 200,
      ellipsis: true,
      render: (text) => (
        <Tooltip title={typeof text === "object" ? JSON.stringify(text) : text} placement="topLeft">
          <Text ellipsis style={{ maxWidth: 180, display: "block", fontSize: 12, color: "#666" }}>
            {typeof text === "object" ? "[Contenido enriquecido]" : text}
          </Text>
        </Tooltip>
      ),
    },
    {
      title: "Orden",
      dataIndex: "order",
      key: "order",
      width: 80,
      align: "center",
      render: (text) => (
        <Tag color="default" style={{ fontSize: 11 }}>
          {text || "-"}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      width: 120,
      align: "center",
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Editar">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
              size="small"
              disabled={connectionStatus !== "connected"}
              style={{ color: "#1890ff" }}
            />
          </Tooltip>
          <Popconfirm
            title="¿Eliminar este contenido?"
            description="Esta acción no se puede deshacer"
            onConfirm={() => handleDelete(record.id)}
            okText="Eliminar"
            cancelText="Cancelar"
            disabled={connectionStatus !== "connected"}
            okType="danger"
          >
            <Tooltip title="Eliminar">
              <Button
                type="text"
                icon={<DeleteOutlined />}
                danger
                size="small"
                disabled={connectionStatus !== "connected"}
              />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  if (connectionStatus !== "connected") {
    return (
      <div style={{ padding: 24, minHeight: "60vh" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Centro de Conocimiento
        </Title>
        {renderConnectionStatus()}
      </div>
    )
  }

  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title level={2} style={{ margin: 0, marginRight: 12 }}>
            Centro de Conocimiento
          </Title>
          <Tag color="" icon={<CheckCircleOutlined />} style={{ fontSize: 12 }}>
            Conectado
          </Tag>
        </div>
        <Space size="middle">
          <Button icon={<ReloadOutlined />} onClick={handleReconnect} title="Actualizar datos">
            Actualizar
          </Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)} size="large">
            Nuevo Contenido
          </Button>
        </Space>
      </div>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: 18, color: "#1890ff" }}>
              {data.length}
            </Text>
            <div>
              <Text type="secondary">Total Contenidos</Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: 18, color: "#52c41a" }}>
              {tabs.length}
            </Text>
            <div>
              <Text type="secondary">Tabs</Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: 18, color: "#fa8c16" }}>
              {categories.length}
            </Text>
            <div>
              <Text type="secondary">Categorías</Text>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: 18, color: "#722ed1" }}>
              {topics.length}
            </Text>
            <div>
              <Text type="secondary">Temas</Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} de ${total} elementos`,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
          scroll={{ x: 1200 }}
          size="middle"
          rowClassName={(record, index) => (index % 2 === 0 ? "table-row-light" : "table-row-dark")}
        />
      </Card>

     <Modal
  open={modalVisible}
  onCancel={handleModalClose}
  onOk={() => form.submit()}
  title={
    <div style={{ fontSize: 18, fontWeight: 600 }}>{editing ? "✏️ Editar Contenido" : "➕ Nuevo Contenido"}</div>
  }
  width={1400}
  style={{ top: 20 }}
  okText="Guardar"
  cancelText="Cancelar"
  confirmLoading={creatingOption}
  destroyOnClose
>
  <Divider style={{ margin: "16px 0" }} />

  {/* Single Form wrapping all fields */}
  <Form layout="vertical" form={form} onFinish={handleSave} size="middle">
    <Row gutter={16}>
      {/* PRIMERA COLUMNA: Gestión de Opciones */}
      <Col span={6}>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #f0f0f0",
            height: "600px",
            overflowY: "auto",
          }}
        >
          <Title level={5} style={{ marginBottom: 16, color: "#595959" }}>
            🏷️ Gestionar Opciones
          </Title>
          {renderOptionManager("Tabs", tabs, newTab, setNewTab, "knowledge_tabs", setTabs, "🏷️", "blue")}
          {renderOptionManager("Categorías", categories, newCategory, setNewCategory, "knowledge_categories", setCategories, "📁", "green")}
          {renderOptionManager("Temas", topics, newTopic, setNewTopic, "knowledge_topics", setTopics, "📚", "orange")}
          {renderOptionManager("Subtemas", subtopics, newSubtopic, setNewSubtopic, "knowledge_subtopics", setSubtopics, "📖", "purple")}
        </div>
      </Col>

      {/* SEGUNDA COLUMNA: Información Básica */}
      <Col span={6}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #f0f0f0",
            height: "600px",
          }}
        >
          <Title level={5} style={{ marginBottom: 16, color: "#595959" }}>
            📋 Información Básica
          </Title>
          <Form.Item name="tab" label="Tab" rules={[{ required: true, message: "Selecciona un tab" }]}>
            <Select placeholder="Selecciona un tab" size="large">
              {tabs.map((t) => (
                <Option key={t.id} value={t.name}>{t.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="category" label="Categoría" rules={[{ required: true, message: "Selecciona una categoría" }]}>
            <Select placeholder="Selecciona una categoría" size="large">
              {categories.map((c) => (
                <Option key={c.id} value={c.name}>{c.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="topic" label="Tema" rules={[{ required: true, message: "Selecciona un tema" }]}>
            <Select placeholder="Selecciona un tema" size="large">
              {topics.map((t) => (
                <Option key={t.id} value={t.name}>{t.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="subtopic" label="Subtema" rules={[{ required: true, message: "Selecciona un subtema" }]}>
            <Select placeholder="Selecciona un subtema" size="large">
              {subtopics.map((s) => (
                <Option key={s.id} value={s.name}>{s.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="order" label="Orden de visualización">
            <Input type="number" placeholder="Ej: 1, 2, 3..." size="large" min={1} />
          </Form.Item>
        </div>
      </Col>

      {/* TERCERA COLUMNA: Editor de Contenido */}
      <Col span={12}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 8,
            border: "1px solid #f0f0f0",
            height: "600px",
          }}
        >
          <Title level={5} style={{ marginBottom: 16, color: "#595959" }}>
            ✍️ Editor de Contenido
          </Title>
          <Form.Item
            name="contentValue"
            rules={[
              {
                required: true,
                message: "Ingresa el contenido",
                validator: (_, value) => {
                  if (!value) {
                    return Promise.reject(new Error("El contenido no puede estar vacío"));
                  }
                  if (typeof value === "object" && (!value.content || value.content.length === 0)) {
                    return Promise.reject(new Error("El contenido no puede estar vacío"));
                  }
                  if (typeof value === "string" && value.trim() === "") {
                    return Promise.reject(new Error("El contenido no puede estar vacío"));
                  }
                  return Promise.resolve();
                },
              },
            ]}
            style={{ height: "calc(100% - 60px)" }}
          >
            <KnowledgeContentEditor
              initialContent={editing?.content || ""}
              height={300} // Reduced height to match second version
              placeholder="Escribe aquí el contenido del conocimiento..."
              onChange={(content) => {
                console.log("Content from KnowledgeContentEditor:", content);
                form.setFieldsValue({ contentValue: content });
                form.validateFields(["contentValue"]).catch((error) => {
                  console.log("Validation error:", error);
                });
              }}
            />
          </Form.Item>
        </div>
      </Col>
    </Row>
  </Form>
</Modal>
    </div>
  )
}

export default KnowledgeCenter
