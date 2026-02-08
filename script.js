function yes() {
  document.getElementById("reply").innerHTML =
    "Hehehe 😍❤️ I love you Nazeer. Happy 2nd Valentine to us 💕";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
