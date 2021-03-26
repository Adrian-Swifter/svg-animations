const svg = document.getElementById("triangles");

svg.addEventListener("click", (e) => {
  const coolors = ["blue", "yellow", "pink", "purple", "green"];
  const randomCoolor = () =>
    coolors[Math.floor(Math.random() * coolors.length)];
  document.documentElement.style.cssText = `
    --primary-color: ${randomCoolor()};
    --secondary-color: ${randomCoolor()}
    `;
  console.log("yeahh");
});
