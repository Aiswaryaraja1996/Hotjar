var footerTitleList = document.getElementsByClassName("footer-title");
var arrow = document.getElementsByClassName("arrow-hide");

for (const footerTitle of footerTitleList) {
  footerTitle.addEventListener("click", (e) => {
    console.log(e.target.classList[1]);
    onClickFooterTitle(e);
  });
}

onClickFooterTitle = (event) => {
  var footerContentList = document.getElementsByClassName("footer-subnav");
  for (const footerContent of footerContentList) {
    if (event.target.classList[1] === footerContent.classList[1]) {
      var arrowIcon = event.target.childNodes[1];
      arrowIcon.classList.toggle("arrow-hide-rotate");
      footerContent.classList.toggle("footer-item-list-hide");
    }
  }
};

document
  .getElementsByClassName("toggle-menu")[0]
  .addEventListener("click", () => {
    document
      .getElementsByClassName("small-screen-menu")[0]
      .classList.toggle("is-visible");
    document
      .getElementsByClassName("blurr-background")[0]
      .classList.toggle("make-visible");
  });
document
  .getElementsByClassName("closeIcon")[0]
  .addEventListener("click", () => {
    document
      .getElementsByClassName("small-screen-menu")[0]
      .classList.remove("is-visible");
    document
      .getElementsByClassName("blurr-background")[0]
      .classList.remove("make-visible");
  });

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

document.getElementById("drop-down1").addEventListener("click", () => {
  c1++;

  if (c1 === 2) {
    document
      .getElementById("drop-down1")
      .setAttribute("aria-expanded", "false");
    c1 = 0;
  } else {
    document.getElementById("drop-down1").setAttribute("aria-expanded", "true");
  }
});

document.getElementById("drop-down2").addEventListener("click", () => {
  c2++;
  if (c2 === 2) {
    document
      .getElementById("drop-down2")
      .setAttribute("aria-expanded", "false");
    c2 = 0;
  } else {
    document.getElementById("drop-down2").setAttribute("aria-expanded", "true");
  }
});

document.getElementById("drop-down3").addEventListener("click", () => {
  c3++;
  if (c3 === 2) {
    document
      .getElementById("drop-down3")
      .setAttribute("aria-expanded", "false");
    c3 = 0;
  } else {
    document.getElementById("drop-down3").setAttribute("aria-expanded", "true");
  }
});
document.getElementById("drop-down4").addEventListener("click", () => {
  c4++;
  if (c4 === 2) {
    document
      .getElementById("drop-down4")
      .setAttribute("aria-expanded", "false");
    c4 = 0;
  } else {
    document.getElementById("drop-down4").setAttribute("aria-expanded", "true");
  }
});

document
  .getElementById("hot_jar_footer_title")
  .addEventListener("click", () => {
    console.log("clicked");
    document
      .getElementById("hot_jar_footer_list")
      .classList.toggle("footer-item-list-hide");
  });
