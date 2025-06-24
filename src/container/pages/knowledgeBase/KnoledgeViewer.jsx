"use client"

import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import "./KnowledgeViewer.css"
import { db } from "../../../firebase/firebaseClient"

import { BiBook, BiBookBookmark, BiSpreadsheet } from "react-icons/bi";
import { FaqSupportBox } from "../style"
import { Cards } from "../../../components/cards/frame/cards-frame"
import { Button, Col, Input } from "antd"
import Heading from "../../../components/heading/heading"
import RemirrorContentViewer from "./RemirrorContentViewer"



const KnowledgeViewer = () => {
  // Estados principales
  const [loading, setLoading] = useState(true)
  const [connectionStatus, setConnectionStatus] = useState("checking")

  // Datos
  const [data, setData] = useState([])
  const [tabs, setTabs] = useState([])

  // Estados de navegación
  const [activeTab, setActiveTab] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubtopic, setSelectedSubtopic] = useState(null)
  const [expandedCategories, setExpandedCategories] = useState(new Set())
  const [expandedTopics, setExpandedTopics] = useState(new Set())

  // Cargar datos
  useEffect(() => {
    const initialize = async () => {
      try {
        setConnectionStatus("checking")

        const [contentSnap, tabsSnap] = await Promise.all([
          getDocs(query(collection(db, "knowledge_content"), orderBy("order"))),
          getDocs(collection(db, "knowledge_tabs")),
        ])

        const contentData = contentSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const tabsData = tabsSnap.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))

        setData(contentData)
        setTabs(tabsData)

        // Seleccionar primer tab por defecto
        if (tabsData.length > 0) {
          setActiveTab(tabsData[0].name)
        }

        setConnectionStatus("connected")
        setLoading(false)
      } catch (error) {
        console.error("❌ Error al cargar datos:", error)
        setConnectionStatus("error")
        setLoading(false)
      }
    }

    initialize()
  }, [])

  // Funciones de utilidad
  const getContentByTab = (tabName) => {
    return data.filter((item) => item.tab === tabName)
  }

  const getCategoriesByTab = (tabName) => {
    const tabContent = getContentByTab(tabName)
    const uniqueCategories = [...new Set(tabContent.map((item) => item.category))]
    return uniqueCategories.filter(Boolean)
  }

  const getTopicsByCategory = (tabName, categoryName) => {
    const tabContent = getContentByTab(tabName)
    const categoryContent = tabContent.filter((item) => item.category === categoryName)
    const uniqueTopics = [...new Set(categoryContent.map((item) => item.topic))]
    return uniqueTopics.filter(Boolean)
  }

  const getSubtopicsByTopic = (tabName, categoryName, topicName) => {
    const tabContent = getContentByTab(tabName)
    const topicContent = tabContent.filter((item) => item.category === categoryName && item.topic === topicName)
    const uniqueSubtopics = [...new Set(topicContent.map((item) => item.subtopic))]
    return uniqueSubtopics.filter(Boolean)
  }

  const getContentBySubtopic = (tabName, categoryName, topicName, subtopicName) => {
    return data.find(
      (item) =>
        item.tab === tabName &&
        item.category === categoryName &&
        item.topic === topicName &&
        item.subtopic === subtopicName,
    )
  }

  const getAllSubtopics = () => {
    const allSubtopics = []
    data.forEach((item) => {
      if (item.subtopic && item.subtopic.toLowerCase().includes(searchTerm.toLowerCase())) {
        allSubtopics.push({
          subtopic: item.subtopic,
          tab: item.tab,
          category: item.category,
          topic: item.topic,
          content: item.content,
        })
      }
    })
    return allSubtopics
  }

  // Handlers
  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    setShowSidebar(false)
    setSelectedCategory(null)
    setSelectedTopic(null)
    setSelectedSubtopic(null)
    setSearchTerm("")
  }

  const handleViewMore = (categoryName) => {
    setShowSidebar(true)
    setSelectedCategory(categoryName)
    setSelectedTopic(null)
    setSelectedSubtopic(null)
  }

  const handleCategoryClick = (categoryName) => {
    const key = `${activeTab}-${categoryName}`
    const newExpanded = new Set(expandedCategories)

    if (expandedCategories.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }

    setExpandedCategories(newExpanded)
    setSelectedCategory(categoryName)
    setSelectedTopic(null)
    setSelectedSubtopic(null)
  }

  const handleTopicClick = (topicName) => {
    const key = `${activeTab}-${selectedCategory}-${topicName}`
    const newExpanded = new Set(expandedTopics)

    if (expandedTopics.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }

    setExpandedTopics(newExpanded)
    setSelectedTopic(topicName)
    setSelectedSubtopic(null)
  }

  const handleSubtopicClick = (subtopicName) => {
    setSelectedSubtopic(subtopicName)
  }

  const handleSearchResultClick = (result) => {
    setActiveTab(result.tab)
    setShowSidebar(true)
    setSelectedCategory(result.category)
    setSelectedTopic(result.topic)
    setSelectedSubtopic(result.subtopic)
    setSearchTerm("")

    // Expandir categorías y temas necesarios
    const categoryKey = `${result.tab}-${result.category}`
    const topicKey = `${result.tab}-${result.category}-${result.topic}`

    setExpandedCategories(new Set([categoryKey]))
    setExpandedTopics(new Set([topicKey]))
  }

  const renderContent = (content) => {
    if (!content) return <div className="empty-content">Sin contenido disponible</div>

    // Si es contenido de Remirror (objeto con estructura JSON)
    if (typeof content === "object" && content.type === "doc" && content.content) {
      return <RemirrorContentViewer content={content} height={400} />
    }

    // Si es string que parece JSON
    if (typeof content === "string") {
      try {
        const parsed = JSON.parse(content)
        if (parsed.type === "doc" && parsed.content) {
          return <RemirrorContentViewer content={parsed} height={400} />
        }
      } catch (e) {
        // Si no es JSON válido, mostrar como texto en el viewer
        const textContent = {
          type: "doc",
          content: [{
            type: "paragraph",
            content: [{
              type: "text",
              text: content
            }]
          }]
        }
        return <RemirrorContentViewer content={textContent} height={400} />
      }
    }

    // Fallback para otros tipos - convertir a formato doc
    const fallbackContent = {
      type: "doc",
      content: [{
        type: "paragraph",
        content: [{
          type: "text",
          text: typeof content === "string" ? content : JSON.stringify(content)
        }]
      }]
    }
    
    return <RemirrorContentViewer content={fallbackContent} height={400} />
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando centro de conocimiento...</p>
      </div>
    )
  }

  if (connectionStatus === "error") {
    return (
      <div className="error-container">
        <div className="error-message">
          <h3>Error de Conexión</h3>
          <p>No se pudo cargar el contenido. Verifica tu conexión e intenta nuevamente.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="knowledge-viewer">
      {/* Header */}
      <div className="header">
        
        <h1 className="main-title"> <BiBookBookmark /> Centro de Conocimiento</h1>

        {/* Buscador */}
        <div className="search-container">
          <Input
            type="text"
            placeholder=" Buscar subtemas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Resultados de búsqueda */}
          {searchTerm && (
            <div className="search-results">
              {getAllSubtopics().map((result, index) => (
                <div key={index} className="search-result-item" onClick={() => handleSearchResultClick(result)}>
                  <div className="search-result-title">{result.subtopic}</div>
                  <div className="search-result-path">
                    {result.tab} → {result.category} → {result.topic}
                  </div>
                </div>
              ))}
              {getAllSubtopics().length === 0 && <div className="no-results">No se encontraron resultados</div>}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="main-content">
        {/* Sidebar */}
        {showSidebar && (
          <div className="sidebar">
            <div className="sidebar-header">
              <h3><BiBookBookmark /> {activeTab}</h3>
              <button className="close-sidebar" onClick={() => setShowSidebar(false)}>
                ✕
              </button>
            </div>

            <div className="sidebar-content">
              {getCategoriesByTab(activeTab).map((category) => {
                const categoryKey = `${activeTab}-${category}`
                const isExpanded = expandedCategories.has(categoryKey)

                return (
                  <div key={category} className="sidebar-item">
                    <div
                      className={`item-header ${selectedCategory === category ? "" : ""}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span className="item-icon"><BiBookBookmark /></span>
                      <span className="item-name">{category}</span>
                      <span className="expand-icon">{isExpanded ? "▼" : "▶"}</span>
                    </div>

                    {isExpanded && (
                      <div className="sub-items">
                        {getTopicsByCategory(activeTab, category).map((topic) => {
                          const topicKey = `${activeTab}-${category}-${topic}`
                          const isTopicExpanded = expandedTopics.has(topicKey)

                          return (
                            <div key={topic} className="sidebar-item">
                              <div
                                className={`item-header sub-item ${selectedTopic === topic ? "" : ""}`}
                                onClick={() => handleTopicClick(topic)}
                              >
                                <span className="item-icon"><BiBook/> </span>
                                <span className="item-name">{topic}</span>
                                <span className="expand-icon">{isTopicExpanded ? "▼" : "▶"}</span>
                              </div>

                              {isTopicExpanded && (
                                <div className="sub-items">
                                  {getSubtopicsByTopic(activeTab, category, topic).map((subtopic) => (
                                    <div
                                      key={subtopic}
                                      className={`item-header sub-sub-item ${
                                        selectedSubtopic === subtopic ? "selected" : ""
                                      }`}
                                      onClick={() => handleSubtopicClick(subtopic)}
                                    >
                                      <span className="item-icon"><BiSpreadsheet /></span>
                                      <span className="item-name">{subtopic}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className={`content-area ${showSidebar ? "with-sidebar" : ""}`}>
          {showSidebar && selectedSubtopic ? (
            <div className="content-display-container">
              <div className="breadcrumb">
                <span>{activeTab}</span>
                <span className="separator">→</span>
                <span>{selectedCategory}</span>
                <span className="separator">→</span>
                <span>{selectedTopic}</span>
                <span className="separator">→</span>
                <span className="current">{selectedSubtopic}</span>
              </div>

              <div className="content-wrapper">
                {renderContent(
                  getContentBySubtopic(activeTab, selectedCategory, selectedTopic, selectedSubtopic)?.content,
                )}
              </div>

              {/* Sección de ayuda */}
               <Col xs={24}>
                <FaqSupportBox>
                  <Cards headless>
                    <figure>
                      <img width={50} height={50} src={new URL('../../../static/img/AQx-IMG/logo-aqualink-240x36px-bgLite-02.svg', import.meta.url).href} alt="Logo AquaLink" />
                    </figure>
                    <figcaption>
                      <Heading as="h5">¿No encuentras la ayuda que necesitas?</Heading>
                      <Button size="default" type="primary">
                        Contacta a soporte
                      </Button>
                    </figcaption>
                  </Cards>
                </FaqSupportBox>
              </Col>
            </div>
          ) : (
            <div className="categories-overview">
              {getCategoriesByTab(activeTab).map((category) => {
                const topics = getTopicsByCategory(activeTab, category)
                const displayTopics = topics.slice(0, 4)
                const hasMore = topics.length > 4

                return (
                  <div key={category} className="category-section">
                    <h3 className="category-title"><BiBookBookmark size={25}/> {category}</h3>

                    <div className="topics-list">
                      {displayTopics.map((topic) => (
                        <div key={topic} className="topic-item">
                          <span className="topic-bullet">•</span>
                          <span className="topic-name">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <Button  size="default" type="primary" onClick={() => handleViewMore(category)}>
                      {hasMore ? `Ver más (${topics.length - 4} adicionales)` : "Ver detalles"}
                    </Button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



export default KnowledgeViewer
