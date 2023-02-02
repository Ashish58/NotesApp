let uniqueId = 0;

const getId = () => {
  uniqueId = uniqueId + 1;
  return uniqueId;
};
export default getId;
