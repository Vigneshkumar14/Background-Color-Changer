let btn = document.getElementById("button");

let rchange = () => {
  document.getElementById("canvas").style.backgroundColor = change();
};

let change = () => {
  let randoms = "123456789ABCDEF";
  let ash = "#";

  for (let i = 0; i < 6; i++) {
    ash = ash + randoms[Math.floor(Math.random() * 16)];
  }

  return ash;
};

btn.addEventListener("click", rchange);
