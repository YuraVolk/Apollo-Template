var sections = Array.prototype.slice.call(document.querySelectorAll('.accordion'));
const widths = [];
console.log('yay');


Array.prototype.slice.call(document.querySelectorAll('.navigation')).forEach(el => {
  widths.push(el.offsetHeight);
});

sections.forEach(el => {
  el.classList.add("hidden");
  el.style.maxHeight = "";
});

function switchAccordion(target) {
  if (target.classList[1] === "hidden") {
    sections.forEach(el => {
      el.classList.add("hidden");
      el.style.maxHeight = "";
      el.style.cursor = "pointer";
    });
    target.childNodes[1].style.cursor = "n-resize";
    target.style.maxHeight = widths[sections.indexOf(target)] + 40 + 'px';
    target.classList.remove("hidden");
  } else {
    target.style.maxHeight = "";
    target.childNodes[1].style.cursor = "pointer";
    target.classList.add("hidden");
  }
}

document.addEventListener('click', event => {
  if (event.target.classList[0] === "header__menu") {
    switchAccordion(document.querySelector('.accordion'));
  }
});
