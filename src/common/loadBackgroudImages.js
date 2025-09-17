export default function loadBackgroudImages() {
  const backgroudImages = document.querySelectorAll('[data-background]');

  if (backgroudImages.length > 0) {
    backgroudImages.forEach((element) => {
      const raw = element.dataset.background || '';
      const value = raw.includes(',')
        ? raw
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .map((u) => `url('${u}')`)
            .join(', ')
        : `url('${raw.trim()}')`;
      element.style.backgroundImage = value;
    });
  }
}