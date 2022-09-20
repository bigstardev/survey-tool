export const swapArrayItem = (array, currentItem, delta) => {
  const newArray = [...array];
  const currentIndex = newArray.indexOf(currentItem);
  const moveAvailable =
    (delta === 1 && currentIndex < newArray.length - 1) ||
    (delta === -1 && currentIndex !== 0);

  if (moveAvailable) {
    newArray.splice(currentIndex, 1);
    newArray.splice(currentIndex + delta, 0, currentItem);
    return newArray;
  }
  return null;
};
