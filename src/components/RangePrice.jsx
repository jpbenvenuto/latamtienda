import { useState } from 'react';
import { Form } from 'react-bootstrap';

const MySlider = ({ onPriceChange }) => {
  const [value, setValue] = useState(10);

  const handleSliderChange = (e) => {
    console.log("Slider Value:", e.target.value);
    setValue(e.target.value);
    onPriceChange(e.target.value); // Llama a la función proporcionada en las props
  };

  const formatCurrency = (amount) => {
    return `$${Math.round(amount)}`; // Redondea y muestra solo números enteros
  };

  const calculateBackgroundGradient = () => {
    const percentage = (value / 100) * 100;
    return `linear-gradient(to right, blue ${percentage}%, #ccc ${percentage}%)`;
  };

  const sliderStyles = {
    background: calculateBackgroundGradient(),
    border: 'none',
    height: '10px',
  };

  return (
    <Form>
      <Form.Group controlId="p_precioRange">
        <Form.Label>{formatCurrency(value)}</Form.Label>
        <Form.Control
          type="range"
          custom="true"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleSliderChange}
          style={sliderStyles}
        />
      </Form.Group>
    </Form>
  );
};

export default MySlider;
