// ObtenerButton.tsx
import React from "react";

interface ObtenerButtonProps {
  onFetch: () => void;
}

const ObtenerButton: React.FC<ObtenerButtonProps> = ({ onFetch }) => {
  return (
    <button className="obtener" onClick={onFetch}>
      Obtener Cursos
    </button>
  );
};

export default ObtenerButton;
