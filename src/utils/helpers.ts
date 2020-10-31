export const convertNumberToPixel = (number: any) => {
  if (isNaN(number)) return number;

  return `${number}px`;
};
