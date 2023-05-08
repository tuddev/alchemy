export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const moveAt = (
  event: MouseEvent,
  itemRef: HTMLDivElement,
  containerRef: HTMLDivElement
) => {
  const bounds = containerRef.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;

  if (x < 20 && y < 20) return;
  itemRef.style.left = x + 'px';
  itemRef.style.top = y + 'px';
};
