let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  if (count > 10) {
    countEl.style.color = "red";
  }
}

function save() {
  let countStr = count + " ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  countEl.style.color = "white";
  count = 0;
}
