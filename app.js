/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Zellerite";

const CARDS = [
  {
    name: "Gmail",
    emoji:"📧",
    image:"gmail",
    icon: "",
    link: "https://mail.google.com/mail/u/0/#inbox",
    img: "/icons/a_1_1_1_1.png"
  },
  {
    name: "Calendar",
    emoji:"🗓",
    image:"calendar",
    icon: "",
    link: "https://calendar.google.com/calendar/u/0/r/week?tab=mc&pli=1",
    img: ""
  },
  {
    name: "Google Meet",
    emoji:"📸",
    image:"calendar",
    icon: "",
    link: "https://meet.google.com",
    img: ""
  },

  {
    name: "Cards of Interest",
    emoji:"🎴",
    image:"confluence",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1413808314/Cards+of+Interest",
    img: ""
  },
  {
    name: "Product Confluence",
    emoji:"📄",
    image:"confluence",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/overview?homepageId=48529540",
    img: ""
  },
    {
    name: "Zeller Dev",
    emoji:"❤️",
    image:"jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/software/c/projects/ZD/boards/20/backlog?issueLimit=100",
    img: ""
  },
  {
    name: "Jira",
    emoji:"💎",
    image:"jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/jira/projects",
    img: ""
  },
  {
    name: "JIRA Issue Search",
    emoji:"🔍",
    image:"jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/issues/?jql=",
    img: ""
  },
  {
    name: "Sprint Planning",
    emoji:"🏃‍♂️",
    image:"jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1203666949/Sprint+Planning",
    img: ""
  },
  {
    name: "Releases",
    emoji:"🚆",
    image:"jira",
    icon: "",
    link: "https://npco-dev.atlassian.net/wiki/spaces/PROD/pages/1266122826/Release+Planning",
    img: ""
  },
  {
    name: "Hubspot",
    emoji:"📇",
    image:"jira",
    icon: "",
    link: "https://app.hubspot.com/",
    img: ""
  },
  {
    name: "Zeller Dev",
    emoji:"⚙️",
    image:"cash_app_alt",
    icon: "",
    link: "https://dashboard.myzeller.dev/portal/overview",
    img: ""
  },
  {
    name: "Zeller Prod",
    emoji:"🚀",
    image:"cash_app",
    icon: "",
    link: "https://dashboard.myzeller.com/portal/overview",
    img: ""
  },
  {
    name: "Figma",
    emoji:"🎨",
    image:"figma",
    icon: "",
    link: "https://www.figma.com/files/team/948006490956154607/Zeller?fuid=988591908120225735",
    img: ""
  },
  {
    name: "Hotjar",
    emoji:"🔥",
    image:"flashify",
    icon: "",
    link: "https://insights.hotjar.com/",
    img: ""
  },
  {
    name: "Trello",
    emoji:"📥",
    image:"trello",
    icon: "",
    link: "https://trello.com/b/OgDVzuu2/zeller-development",
    img: ""
  },
  {
    name: "Excalidraw",
    emoji:"🗡",
    image:"tinder_alt",
    icon: "",
    link: "https://excalidraw.com/",
    img: ""
  },
  {
    name: "Productboard",
    emoji:"🍱",
    image:"clip_stack",
    icon: "",
    link: "https://zeller.productboard.com",
    img: ""
  },
  {
    name: "Periscope Data",
    emoji:"📈",
    image:"clip_stack",
    icon: "",
    link: "https://app.periscopedata.com/app/myzeller/",
    img: ""
  },  
  {
    name: "Lever",
    emoji:"📨",
    image:"clip_stack",
    icon: "",
    link: "https://hire.lever.co/",
    img: ""
  },  
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};


/******************/
/* ICON CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon;

    if (card.icon === "") {
      currentCardIcon = document.createElement("img");
      var useElem = document.createElement("img");
      useElem.setAttribute("src", card.img);

      currentCardIcon.appendChild(useElem);     
    } else {
   //   currentCardIcon = document.createElement("i");
   //   currentCardIcon.classList.add(card.icon);
    }


    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

///******************/
///* CARDS FUNCTION */
///******************/
//
//const printCards = () => {
//  for (const card of CARDS) {
//    let currentCard = document.createElement("a");
//    let currentCardImage = document.createElement("img");
//    currentCardImage.appendChild(document.createTextNode(card.image));
//    let currentCardText = document.createElement("p");
//    currentCardText.appendChild(document.createTextNode(card.name));
//    let currentCardEmoji = document.createElement("p");
//    currentCardEmoji.appendChild(document.createTextNode(card.emoji));
//    //currentCardEmoji.classList.add(card.emoji);
//    //let currentCardIcon = document.createElement("i");
//    //currentCardIcon.classList.add(card.icon);
//
//    // Style the Card Element
//    currentCard.classList.add("card");
//    currentCard.href = card.link;
//
//    // Style the Card Image
//    currentCardImage.classList.add("card__image");
//    currentCardImage.src = card.image;
//
//    // Style the Emoji
//    currentCardEmoji.classList.add("card__emoji");    
//
//    // Style the Icon
//    //currentCardIcon.classList.add("card__icon");
//
//    // Style the Text
//    currentCardText.classList.add("card__name");
//
//    //currentCard.append(currentCardIcon);
//    currentCard.append(currentCardEmoji);
//    currentCard.append(currentCardText);
//    cardContainer.appendChild(currentCard);
//  }
//};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
