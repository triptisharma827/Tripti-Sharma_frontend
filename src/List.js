import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected === index ? "green" : "red", marginBottom:"10px", width:"200px" , heigth :"100px", padding:"10px", borderRadius:"10px"}} 
      onClick={() => onClickHandler(index)} // Passed a function that calls 'onClickHandler' with 'index'
    >
      {text}
    </li>
  );
});

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.number.isRequired, // Added: Require 'index' prop
  onClickHandler: PropTypes.func.isRequired, // Changed to 'number' instead of 'bool'
  text: PropTypes.string.isRequired,
};

// List Component
const WrappedListComponent = memo(({ items }) => {
  // Used separate useState calls for setter and getter
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left"}}>
      {items.map((item, index) => (
        <WrappedSingleListItem
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
  );
});

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
     text: PropTypes.string.isRequired,  // Used 'arrayOf' and 'shapeOf' instead of 'array' and 'shape'
    })
  ).isRequired,
};

export default WrappedListComponent;