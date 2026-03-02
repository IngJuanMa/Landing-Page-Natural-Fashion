import React, { useEffect } from "react";
import "./Inicio.css";
import lodo from "/logo.png"; // ajusta la ruta si cambia

const Inicio = ({ onFinish, duration = 2800 }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish?.();
    }, duration);

    return () => clearTimeout(t);
  }, [onFinish, duration]);

  return (
    <div className="inicio-bg">
      <div className="inicio-card">
        {/* decoraciones */}
        <span className="inicio-circle inicio-circle--top" aria-hidden="true" />
        <span className="inicio-circle inicio-circle--bottom" aria-hidden="true" />

        {/* contenido */}
        <div className="inicio-content">
          <img className="inicio-logo" src={lodo} alt="Logo" />
          <p className="inicio-texto"> 
            Realza tu belleza con lo mejor de Natural Fashion.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Inicio;
