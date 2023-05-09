export const moveAt = (
  event: MouseEvent,
  itemElement: HTMLDivElement,
  containerElement: HTMLDivElement
) => {
  const { x, y } = getXYCoorsOfMovedItem(event, containerElement);
  itemElement.style.left = x + 'px';
  itemElement.style.top = y + 'px';
};

export const getXYCoorsOfMovedItem = (
  event: MouseEvent,
  containerElement: HTMLDivElement | null
) => {
  if (!containerElement) return { x: 0, y: 0 };
  const bounds = containerElement.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;

  return { x, y };
};
