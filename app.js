/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Zellerite";

const CARDS = [
  {
    name: "Gmail",
    icon: "ri-mail-fill",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "Calendar",
    icon: "ri-calendar-fill",
    link: "https://calendar.google.com/calendar/u/0/r/week?tab=mc&pli=1",
  },
  {
    name: "Confluence",
    icon: "ri-file-list-fill",
    link: "https://npco-dev.atlassian.net/wiki/home",
  },
  {
    name: "Jira",
    icon: "ri-task-fill",
    link: "https://npco-dev.atlassian.net/jira/projects",
  },
  {
    name: "Zeller Dashboard",
    icon: "ri-dashboard-fill",
    link: "https://dashboard.myzeller.dev/portal/overview",
  },
  {
    name: "Hotjar",
    icon: "ri-fire-fill",
    link: "https://insights.hotjar.com/",
  },
  {
    name: "Trello",
    icon: "ri-trello-fill",
    link: "https://trello.com/b/OgDVzuu2/zeller-development",
  },
  {
    name: "Excalidraw",
    icon: "ri-quill-pen-fill",
    link: "https://excalidraw.com/",
  },
  {
    name: "Productboard",
    icon: "ri-list-check-2-fill",
    link: "https://zeller.productboard.com",
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
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

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

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
