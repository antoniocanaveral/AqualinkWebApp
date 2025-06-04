"use client"
import { Typography, Button, Row } from "antd"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Cards } from "../../../components/cards/frame/cards-frame"

const ScenarioCard = ({ scenario, index, onDelete, onApply, scenariosLength, selectedScenario, onSelect }) => {
  const isAqualinkScenario = index === 3
  const isSelected = selectedScenario === index
  const isOtherSelected = selectedScenario !== null && selectedScenario !== index && !isAqualinkScenario

  const cardContent = (
    <div style={{ marginBottom: "10px" }}>
      <Row gutter={[12, 12]}>
        {/* Header section with enhanced styling for Aqualink - FIXED ALIGNMENT */}
        {isAqualinkScenario && (
          <div
            style={{
              width: "calc(100% + 18px)",
              background: "linear-gradient(135deg, #01b81a 0%, #00a015 100%)",
              margin: "-24px -16px 15px -9px",
              padding: "16px",
              borderRadius: "0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "80px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                transform: "translate(25px, -25px)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <Typography.Text
                style={{
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                OPTIMIZACIÓN AVANZADA
              </Typography.Text>
              <div
                style={{
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  marginTop: "2px",
                }}
              >
                Configuración recomendada basada en análisis inteligente
              </div>
            </div>
          </div>
        )}

        {/* Compact data rows with smaller fonts */}
        <div className="flex-row_space-between" style={{ width: "100%" }}>
          <Typography.Text strong style={{ fontSize: "0.85rem" }}>
            Densidad
          </Typography.Text>
          <Typography.Text style={{ fontSize: "0.85rem" }}>{scenario.inputs.density}</Typography.Text>
        </div>
        <hr style={{ width: "100%", border: "0.1px solid #ddd", margin: "-4px 0" }} />

        <div className="flex-row_space-between" style={{ width: "100%" }}>
          
          <Typography.Text strong style={{ fontSize: "0.85rem" }}>
            Peso estimado
          </Typography.Text>
          <Typography.Text style={{ fontSize: "0.85rem" }}>{scenario.inputs.stimated_weight}g</Typography.Text>
        </div>
        <hr style={{ width: "100%", border: "0.1px solid #ddd", margin: "-4px 0" }} />

        <div className="flex-row_space-between" style={{ width: "100%" }}>
          <Typography.Text strong style={{ fontSize: "0.85rem" }}>
            Días de ciclo
          </Typography.Text>
          <Typography.Text style={{ fontSize: "0.85rem" }}>{scenario.inputs.days_to_harvest}</Typography.Text>
        </div>
        <hr style={{ width: "100%", border: "0.1px solid #ddd", margin: "-4px 0" }} />

        <div className="flex-row_space-between" style={{ width: "100%" }}>
          <Typography.Text strong style={{ fontSize: "0.85rem" }}>
            Supervivencia estimada
          </Typography.Text>
          <Typography.Text style={{ fontSize: "0.85rem" }}>
            {typeof scenario.inputs.estimated_survival === "number"
              ? `${(scenario.inputs.estimated_survival * 100).toFixed(1)}%`
              : "N/A"}
          </Typography.Text>
        </div>
        <hr style={{ width: "100%", border: "0.1px solid #ddd", margin: "-4px 0" }} />

        {/* Compact Biomasa section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "6px",
            background: isAqualinkScenario
              ? "linear-gradient(135deg, #01b81a 0%, #00a015 100%)"
              : index === 3
                ? "#01b81a"
                : scenario.estimated_production_lb === 0
                  ? "#ff4d4f"
                  : scenario.estimated_production_lb > 10
                    ? "#258fdb"
                    : "#ffffff",
            fontSize: "1em",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            boxShadow: isAqualinkScenario ? "0 6px 20px rgba(1, 184, 26, 0.3)" : "0 2px 6px rgba(0, 0, 0, 0.1)",
            margin: "8px 0",
          }}
        >
          <Typography.Text
            strong
            style={{
              color: "white",
              position: "relative",
              zIndex: 2,
              fontSize: isAqualinkScenario ? "0.95em" : "0.9em",
            }}
          >
            BIOMASA {isAqualinkScenario && "• OPTIMIZADA"}
          </Typography.Text>
          <Typography.Text
            style={{
              color: "white",
              position: "relative",
              zIndex: 2,
              fontSize: isAqualinkScenario ? "1.1em" : "1em",
              fontWeight: isAqualinkScenario ? "bold" : "normal",
            }}
          >
            {scenario.estimated_production_lb}lb
          </Typography.Text>
        </div>

        {/* UTILIDAD HA - More compact and with CLEAR selection indicator */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            padding: "10px 5px",
            background: isSelected
              ? "linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)"
              : isAqualinkScenario
                ? "rgba(1, 184, 26, 0.05)"
                : "rgba(24, 144, 255, 0.05)",
            borderRadius: "8px",
            border: isSelected
              ? "3px solid #1890ff"
              : isAqualinkScenario
                ? "1px solid rgba(1, 184, 26, 0.2)"
                : "1px solid rgba(24, 144, 255, 0.2)",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: isSelected ? "0 6px 20px rgba(24, 144, 255, 0.4)" : "none",
          }}
          onClick={() => onSelect(index)}
        >
          {/* CLEAR selection indicator */}
          {isSelected && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1890ff",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "15px",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  boxShadow: "0 3px 10px rgba(24, 144, 255, 0.5)",
                  zIndex: 10,
                }}
              >
                ✓ SELECCIONADO
              </div>
              {/* Glow effect around the card */}
              <div
                style={{
                  position: "absolute",
                  top: "-3px",
                  left: "-3px",
                  right: "-3px",
                  bottom: "-3px",
                  background: "linear-gradient(45deg, #1890ff, #40a9ff, #1890ff)",
                  borderRadius: "12px",
                  zIndex: -1,
                  opacity: 0.3,
                }}
              />
            </>
          )}
          <Typography.Text
            strong
            style={{
              display: "block",
              fontSize: "0.95rem", // Reduced from 1.2rem
              color: isSelected ? "white" : isAqualinkScenario ? "#01b81a" : "#2c3e50",
              marginBottom: "6px",
            }}
          >
            UTILIDAD HA
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: "1.6rem", // Reduced from 2.2rem
              fontWeight: "bold",
              color: isSelected ? "white" : isAqualinkScenario ? "#01b81a" : "#2c3e50",
              display: "block",
              lineHeight: "1",
            }}
          >
            {scenario.profit_hectare_day > 0 ? `$${scenario.profit_hectare_day.toFixed(2)}` : "N/A"}
          </Typography.Text>
        </div>

        {/* Compact Cost and Income section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "6px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography.Text
              style={{
                fontSize: "1.2em", // Reduced from 1.5em
                fontWeight: "bold",
                color: "#73879c",
              }}
            >
              ${scenario.total_cost}
            </Typography.Text>
            <Typography.Text
              style={{
                display: "block",
                color: "#73879c",
                fontSize: "0.8rem", // Smaller label
              }}
            >
              Costo Estimado
            </Typography.Text>
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography.Text
              style={{
                fontSize: "1.2em", // Reduced from 1.5em
                fontWeight: "bold",
                color: "#73879c",
              }}
            >
              ${scenario.total_income}
            </Typography.Text>
            <Typography.Text
              style={{
                display: "block",
                color: "#73879c",
                fontSize: "0.8rem", // Smaller label
              }}
            >
              Venta Estimada
            </Typography.Text>
          </div>
        </div>

        <hr style={{ width: "100%", border: "0.5px solid #ddd", marginTop: "-10px" }} />

        {/* Compact buttons section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "12px",
            gap: "6px",
          }}
        >
          <Button type="default" onClick={() => onDelete(index)} size="small">
            Eliminar
          </Button>
          {scenario.estimated_production_lb > 0 ? (
            <Button
              type={isAqualinkScenario ? "primary" : "default"}
              onClick={() => onApply(index)}
              disabled={scenariosLength !== 3}
              size="small"
              style={{
                background: isAqualinkScenario ? "linear-gradient(135deg, #01b81a 0%, #00a015 100%)" : undefined,
                borderColor: isAqualinkScenario ? "#01b81a" : "#1890ff",
                color: isAqualinkScenario ? "white" : !isAqualinkScenario ? "#1890ff" : undefined,
                fontWeight: isAqualinkScenario ? "bold" : "normal",
                boxShadow: isAqualinkScenario ? "0 3px 8px rgba(1, 184, 26, 0.3)" : undefined,
              }}
            >
              {isAqualinkScenario ? "Aplicar a planificación" : "Seleccionar"}
            </Button>
          ) : (
            <Button type="default" danger size="small">
              Cancelar
            </Button>
          )}
        </div>
      </Row>
    </div>
  )

  if (isAqualinkScenario) {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ y: -2 }}
      >
        <Cards
          image={new URL(`../../../static/img/AQx-IMG/shrimp16.svg`, import.meta.url).href}
          title="Escenario Aqualink"
          size="large"
          style={{
            border: isSelected ? "4px solid #1890ff" : "2px solid #01b81a",
            boxShadow: isSelected
              ? "0 15px 40px rgba(24, 144, 255, 0.4), 0 0 0 4px rgba(24, 144, 255, 0.2)"
              : "0 8px 25px rgba(1, 184, 26, 0.15)",
            background: isSelected ? "#f0f9ff" : "white",
            position: "relative",
            overflow: "hidden",
            transform: isSelected ? "scale(1.03)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: isSelected
                ? "linear-gradient(90deg, #1890ff 0%, #40a9ff 100%)"
                : "linear-gradient(90deg, #01b81a 0%, #00a015 100%)",
            }}
          />
          {cardContent}
        </Cards>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: isOtherSelected ? 0.25 : 1, // Even more opacity when other is selected
      }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Cards
        image={new URL(`../../../static/img/AQx-IMG/shrimp16.svg`, import.meta.url).href}
        title={`Escenario ${index + 1}`}
        size="large"
        style={{
          border: isSelected ? "4px solid #1890ff" : "1px solid #d9d9d9",
          boxShadow: isSelected
            ? "0 15px 40px rgba(24, 144, 255, 0.4), 0 0 0 4px rgba(24, 144, 255, 0.2)"
            : "0 2px 8px rgba(0, 0, 0, 0.1)",
          transform: isSelected ? "scale(1.03)" : "scale(1)",
          transition: "all 0.3s ease",
          background: isSelected ? "#f0f9ff" : "white",
          position: "relative",
        }}
      >
        {cardContent}
      </Cards>
    </motion.div>
  )
}

ScenarioCard.propTypes = {
  scenario: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  scenariosLength: PropTypes.number.isRequired,
  selectedScenario: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
}

export default ScenarioCard
