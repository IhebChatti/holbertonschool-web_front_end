function changeMode(size, weight, transform, background, color) {
  return () => {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style["color"] = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkmode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let p = document.createElement("p");
  p.innerHTML = "Welcome Holberton!";
  document.body.appendChild(p);

  let spookyButton = document.createElement("button");
  spookyButton.innerHTML = "Spooky";
  spookyButton.onclick = () => {
    spooky();
  };
  document.body.appendChild(spookyButton);

  let darkButton = document.createElement("button");
  darkButton.innerHTML = "Dark mode";
  darkButton.onclick = () => {
    darkmode();
  };
  document.body.appendChild(darkButton);

  let screamButton = document.createElement("button");
  screamButton.innerHTML = "Scream mode";
  screamButton.onclick = () => {
    screamMode();
  };
  document.body.appendChild(screamButton);
}

main();
