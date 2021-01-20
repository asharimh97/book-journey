export const convertNumberToPixel = (number: number): string | number => {
  if (isNaN(number)) return number;

  return `${number}px`;
};

export const handleErrorImage = (e: Event) => {
  // @ts-ignore
  e.target.onerror = null;
  // @ts-ignore
  e.target.src = "/image-placeholder.jpg";
};

export const generateRandomNumber = (range: number): number => {
  return Math.round(Math.random() * range);
};
