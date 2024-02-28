//RangeRating.jsx

/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "react-bootstrap";

const MySlider2 = ({ onRatingChange }) => {
  const [rating, setRating] = useState(3);

  const handleSliderChange = (e) => {
    const newRating = parseInt(e.target.value, 10);
    console.log("Slider Value:", newRating);
    setRating(newRating);
    onRatingChange(newRating); // Llama a la función proporcionada en las props
  };

  const calculateBackgroundGradient = () => {
    const percentage = (rating / 5) * 100;
    return `linear-gradient(to right, blue ${percentage}%, #ccc ${percentage}%)`;
  };

  const sliderStyles = {
    background: calculateBackgroundGradient(),
    border: "none",
    height: "10px",
  };

  return (
    <Form>
      <
Form.Group
 controlId='ratingRange'>
        <Form.Label>{rating}</Form.Label>
        <Form.Control
          type='range'
          custom="true"
          min='1'
          max='5'
          step='1'
          value={rating}
          onChange={handleSliderChange}
          style={sliderStyles}
        />
      </Form.Group>
    </Form>
  );
};

export default MySlider2; 
