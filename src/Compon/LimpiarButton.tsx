/*import React from "react";

interface LimpiarButtonProps {
  onClear: () => void;
}

const LimpiarButton: React.FC<LimpiarButtonProps> = ({ onClear }) => {
  return (
    <button type="button" onClick={onClear}>
      Limpiar
    </button>
  );
};

export default LimpiarButton;*/

import React from "react";

interface LimpiarButtonProps {
  onClear: () => void;
}

const LimpiarButton: React.FC<LimpiarButtonProps> = ({ onClear }) => {
  return (
    <button className="limpiar" onClick={onClear}>
      Limpiar
    </button>
  );
};

export default LimpiarButton;
