import React from "react";

interface GuardarButtonProps {
  onSubmit: () => void;
}

const GuardarButton: React.FC<GuardarButtonProps> = ({ onSubmit }) => {
  return (
    <button type="button" onClick={onSubmit}>
      Guardar
    </button>
  );
};

export default GuardarButton;
