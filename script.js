const febHolidays = [
    "Dear anshi Baby,",
    "First of all, I love you❤️",
    "You're my everything",
    "You are my soulmate",
    "And of course...",
    "My future wife🤭",
    "I will always be there for you",
    "aur mereko pta hai mai kbhi kbhi pagal sa hojata hu ",
    "but hu toh mai tera hi maaf krdia kr ",
    "mai bhi apni baby ka baby hu",
    "arey tereko ak baat btao kaan mai you're just perfect.💖",
    "hm logo kitna time hogya sath mai ✨",
    "and I'm so grateful I met you❤️",
    "and tereko kbhi bhi kissi chiz ki jrurat ho tu mereko bta skti hai ",
    "jo bolegi wo lake dunga pkka 🥰",
    "cause I don't want to  you to be sad",
    "And trust me I dont want anyone else",
    "There's no one better than you❤️",
    "i love you baby!!",
    "Or should I say, ishq hai hme aapse ",
    "Wow!! Time flies, we've already been together for so many month",
    "There's some hardships,",
    "but we overcame most of them",
    "and it made me realised how important you are in my life❤️",
    "This for you,",
    "To l'amour",
    "ek mo l'amour",
    "fr 2 liv pomme d'amour❤️",
    "areey yar wo heart tune diya tha wo kitna pyaara tha thank you yaar 💕",
    "pyarri anshi kissi kissi 💋😘",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  