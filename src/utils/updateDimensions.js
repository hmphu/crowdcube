/**
 * Calculate & Update state of new dimensions
*/
export const updateDimensions = (window) => {
  let dimensions = {};
  if(window.innerWidth < 500) {
      dimensions.width = 450; 
      dimensions.height= 105;
  } else {
    let updatedWidth = window.innerWidth - 100;
    let updatedHeight = Math.round(updatedWidth / 4.4);
    dimensions.width = updatedWidth;
    dimensions.height = updatedHeight;
  }
  return dimensions;
}