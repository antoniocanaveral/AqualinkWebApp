import { useRef } from "react";
import TankCard from "./TankCard";

const TankCarouselCustody = ({ tankData }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
      <div style={{ position: "relative", width: "100%" }}>
        {/* Botón Izquierdo */}
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {"<"}
        </button>

        {/* Contenedor del Carrusel */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            padding: "20px",
            whiteSpace: "nowrap",
          }}
        >
          {tankData.map((tank, index) => (
            <TankCard data={tank} key={index} />
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {">"}
        </button>
      </div>
    );
  };


export default TankCarouselCustody;
