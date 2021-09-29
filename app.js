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
    icon: "ri-mail-fill",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "Calendar",
    emoji:"🗓",
    image:"calendar",
    icon: "ri-calendar-fill",
    link: "https://calendar.google.com/calendar/u/0/r/week?tab=mc&pli=1",
  },
  {
    name: "Google Meet",
    emoji:"📸",
    image:"calendar",
    icon: "ri-calendar-fill",
    link: "https://meet.google.com",
  },
  {
    name: "Confluence",
    emoji:"📄",
    image:"confluence",
    icon: "ri-file-list-fill",
    link: "https://npco-dev.atlassian.net/wiki/home",
  },
  {
    name: "Jira",
    emoji:"💎",
    image:"jira",
    icon: "ri-task-fill",
    link: "https://npco-dev.atlassian.net/jira/projects",
  },
  {
    name: "Hubspot",
    emoji:"📇",
    image:"jira",
    icon: "ri-task-fill",
    link: "https://app.hubspot.com/",
  },
  {
    name: "Zeller Dev",
    emoji:"⚙️",
    image:"cash_app_alt",
    icon: "ri-dashboard-line",
    link: "https://dashboard.myzeller.dev/portal/overview",
  },
  {
    name: "Zeller Prod",
    emoji:"🚀",
    image:"cash_app",
    icon: "ri-dashboard-fill",
    link: "https://dashboard.myzeller.com/portal/overview",
  },
  {
    name: "Figma",
    emoji:"🎨",
    image:"figma",
    icon: "ri-fire-fill",
    link: "https://www.figma.com/files/team/948006490956154607/Zeller?fuid=988591908120225735",
  },
  {
    name: "Hotjar",
    emoji:"🔥",
    image:"flashify",
    icon: "ri-fire-fill",
    link: "https://insights.hotjar.com/",
  },
  {
    name: "Trello",
    emoji:"📥",
    image:"trello",
    icon: "ri-trello-fill",
    link: "https://trello.com/b/OgDVzuu2/zeller-development",
  },
  {
    name: "Excalidraw",
    emoji:"🗡",
    image:"tinder_alt",
    icon: "ri-quill-pen-fill",
    link: "https://excalidraw.com/",
  },
  {
    name: "Productboard",
    emoji:"🍱",
    image:"clip_stack",
    icon: "ri-list-check-2",
    link: "https://zeller.productboard.com",
  },
  {
    name: "Periscope Data",
    emoji:"📈",
    image:"clip_stack",
    icon: "ri-list-check-2",
    link: "https://app.periscopedata.com/app/myzeller/",
  },  
  {
    name: "Zeller Figma",
    emoji:"🎨",
    image:"clip_stack",
    icon: "ri-list-check-2",
    link: "https://www.figma.com/files/project/37620986/Migrated-Merchant-Portal",
  }, 
  {
    name: "Lever",
    emoji:"📨",
    image:"clip_stack",
    icon: "ri-list-check-2",
    link: "https://hire.lever.co/",
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
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardImage = document.createElement("img");
    currentCardImage.appendChild(document.createTextNode(card.image));
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardEmoji = document.createElement("p");
    currentCardEmoji.appendChild(document.createTextNode(card.emoji));
    //currentCardEmoji.classList.add(card.emoji);
    //let currentCardIcon = document.createElement("i");
    //currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Card Image
    currentCardImage.classList.add("card__image");
    currentCardImage.src = card.image;

    // Style the Emoji
    currentCardEmoji.classList.add("card__emoji");    

    // Style the Icon
    //currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    //currentCard.append(currentCardIcon);
    currentCard.append(currentCardEmoji);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
