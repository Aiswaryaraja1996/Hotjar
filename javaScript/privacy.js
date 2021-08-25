var count = 0;

function paragraph_01() {
  if (count % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_01");
    var divele = document.getElementById("append_01");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "Nobody wants to waste their time on a website that is confusing and hard to navigate.";
    para_02.textContent =
      "You know it, we know it, and website owners know it too—which is why they turn to Hotjar.";
    para_03.textContent =
      "Website owners use Hotjar to better understand user behavior: what actions people take on a website, what elements of a page they click or ignore, what they enjoy, where they struggle. With this insight, website owners can then make changes that improve the overall experience for all website users. And that includes you.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[0].style.backgroundColor =
      "#f2f9ff";

    var moreLess = document.getElementById("more-less");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[0]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[0]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_01")
      .removeChild(document.getElementById("append_01").childNodes[5]);
    document.getElementsByClassName("child-div")[0].style.backgroundColor = null;

    var moreLess = document.getElementById("more-less");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[0]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[0]
      .setAttribute("style", "display:none;");
  }

  count++;
}

var sum = 0;

function paragraph_02() {
  if (sum % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_02");
    var divele = document.getElementById("append_02");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "When you browse  collect data about your interactions (e.g. where you click, scroll your mouse, move in between pages) . Website owners get these insights without tracking IP/MAC addresses-- the stuff that relates to the device you use.";
    para_02.textContent =
      "When you browse a website that has Hotjar installed, we collect data about your interactions Some Hotjar tools, like session recordings, one  .";
    para_03.textContent =
      "For more information, head over to our Privacy FAQs.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[1].style.backgroundColor =
      "#feffc8";

    var moreLess = document.getElementById("more-les");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[1]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[1]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_02")
      .removeChild(document.getElementById("append_02").childNodes[5]);
    document.getElementsByClassName("child-div")[1].style.backgroundColor = null;

    var moreLess = document.getElementById("more-les");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[1]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[1]
      .setAttribute("style", "display:none;");
  }

  sum++;
}

var add = 0;

function paragraph_03() {
  if (add % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_03");
    var divele = document.getElementById("append_03");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "Nobody here at Hotjar likes the idea of tools following us around different websites or companies sharing and selling our data without our permission. We are committed to making sure this doesn’t happen to you, either.";
    para_02.textContent =
      "Hotjar is designed to help make websites easier to use, and the data we track about your website visit  (for example, what and where you click) is only used for this purpose. We don’t follow you around the Internet: website owners who use Hotjar cannot see or find out about your activity on sites they don’t own. ";
    para_03.textContent =
      "To learn more about data privacy, head over to our Privacy FAQs.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[2].style.backgroundColor =
      "#fee1e6";

    var moreLess = document.getElementById("more-le");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[2]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[2]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_03")
      .removeChild(document.getElementById("append_03").childNodes[5]);
    document.getElementsByClassName("child-div")[2].style.backgroundColor = null;

    var moreLess = document.getElementById("more-le");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[2]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[2]
      .setAttribute("style", "display:none;");
  }

  add++;
}

var david = 0;

function paragraph_04() {
  if (david % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_04");
    var divele = document.getElementById("append_04");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "As a website visitor, you have the right to request access to the personal identifiable information a website owner collected and stored about you. You also have the right to request that this information is deleted.";
    para_02.textContent =
      "At any time, you can request a website owner who uses Hotjar to give you access to your data. They can run a search for personal data from inside the Hotjar dashboard; the system will then generate and email you a report that lets you view, and delete, any data connected with you. ";
    para_03.textContent =
      "To learn more about data privacy and accessing your data, head over to our Privacy FAQs.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[3].style.backgroundColor =
      "#d1fffa";

    var moreLess = document.getElementById("more-l");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[3]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[3]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_04")
      .removeChild(document.getElementById("append_04").childNodes[5]);
    document.getElementsByClassName("child-div")[3].style.backgroundColor= null;
    var moreLess = document.getElementById("more-l");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[3]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[3]
      .setAttribute("style", "display:none;");
  }

  david++;
}

var sonu = 0;

function paragraph_05() {
  if (sonu % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_05");
    var divele = document.getElementById("append_05");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "If you prefer websites not to track data about your visit, we can help.";
    para_02.textContent =
      "If you want to stop a website using Hotjar from collecting data about your visit, you should know that the website owner is responsible for getting your consent to collect and process data about your visit (and must allow you to withdraw that consent as well).";
    para_03.textContent =
      "For more information about this take a look at our guide on how ‘Do Not Track’ in your browser works.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[4].style.backgroundColor =
      "#ffe1d0";

    var moreLess = document.getElementById("more");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[4]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[4]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_05")
      .removeChild(document.getElementById("append_05").childNodes[5]);
    document.getElementsByClassName("child-div")[4].style.backgroundColor = null;
    var moreLess = document.getElementById("more");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[4]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[4]
      .setAttribute("style", "display:none;");
  }

  sonu++;
}

var raja = 0;

function paragraph_06() {
  if (raja % 2 == 0) {
    var div = document.createElement("div");

    var btn = document.getElementById("btn_06");
    var divele = document.getElementById("append_06");

    var para_01 = document.createElement("p");
    var para_02 = document.createElement("p");
    var para_03 = document.createElement("p");

    para_01.textContent =
      "We have followed a ‘privacy by design’ acts and regulations like the General Data Protection Regulation (GDPR), the California Consumer Privacy";
    para_02.textContent =
      "We have built the necessary use Hotjar can do it in a compliant manner. Plus, our legal team is fully committed to keeping up-to-date with any changes in the law and making sure they are reflected in our product.";
    para_03.textContent =
      "You can read more about GDPR, CCPA, LGPD, and our other commitments over in our Compliance resources.";

    div.appendChild(para_01);
    div.appendChild(para_02);
    div.appendChild(para_03);

    divele.insertBefore(div, btn);

    document.getElementsByClassName("child-div")[5].style.backgroundColor =
      "#feffc8";

    var moreLess = document.getElementById("mor");
    moreLess.textContent = "Show less";
    document
      .getElementsByClassName("arrow")[5]
      .setAttribute("style", "display:none;");
    document
      .getElementsByClassName("cross")[5]
      .setAttribute("style", "display:block;");
  } else {
    document
      .getElementById("append_06")
      .removeChild(document.getElementById("append_06").childNodes[5]);
    document.getElementsByClassName("child-div")[5].style.backgroundColor = null;

    var moreLess = document.getElementById("mor");
    moreLess.textContent = "More";
    document
      .getElementsByClassName("arrow")[5]
      .setAttribute("style", "display:block;");
    document
      .getElementsByClassName("cross")[5]
      .setAttribute("style", "display:none;");
  }

  raja++;
}
