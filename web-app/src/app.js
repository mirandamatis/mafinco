const root = document.documentElement;

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  root.style.setProperty("--tilt-x", `${x.toFixed(2)}px`);
  root.style.setProperty("--tilt-y", `${y.toFixed(2)}px`);
});
