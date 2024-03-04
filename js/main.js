//Account List
const account_1 = {
  movemnet: [100, 300, -1000, -5000, 10000, 50, -10, 555, -50, 10, -30, 50],
  userName: `Satou San`,
  passWord: 11111,
  intersestRate: 1.1,
  movementsDates: [
    "2023-09-18T21:31:17.178Z",
    "2023-10-18T21:31:17.178Z",
    "2023-11-18T21:31:17.178Z",
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-12-28T09:15:04.904Z",
    "2024-01-01T10:17:24.185Z",
    "2024-02-08T14:11:59.604Z",
    "2024-02-27T17:01:17.194Z",
    "2024-02-28T23:36:17.929Z",
    "2024-03-01T10:51:36.790Z",
    "2024-03-02T10:51:36.790Z",
  ],
  currency: "GBP",
  locale: "en-GB",
};
const account_2 = {
  movemnet: [-5000, 10000, 50, -10, 555, -500, 10, -330, 520],
  userName: `Yari Yari Dazi`,
  passWord: 22222,
  intersestRate: 0.8,
  movementsDates: [
    "2023-11-01T13:15:33.035Z",
    "2023-11-30T09:48:16.867Z",
    "2023-12-25T06:04:23.907Z",
    "2024-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-03-10T14:43:26.374Z",
    "2024-03-25T18:49:59.371Z",
    "2024-05-26T12:01:20.894Z",
    "2024-06-27T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account_3 = {
  movemnet: [300, -1000, -500, 2500, 50, -120, 5, 130, -230, 59],
  userName: `baka San Des`,
  passWord: 33333,
  intersestRate: 2.2,
  movementsDates: [
    "2023-08-01T13:15:33.035Z",
    "2023-10-01T13:15:33.035Z",
    "2023-11-01T13:15:33.035Z",
    "2023-11-30T09:48:16.867Z",
    "2023-12-25T06:04:23.907Z",
    "2024-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-03-10T14:43:26.374Z",
    "2024-03-25T18:49:59.371Z",
    "2024-05-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "en-GB",
};
const account_4 = {
  movemnet: [-1020, 3500, 1000, -25, -220, 532, -15, 600, -750, 110, 450],
  userName: `Oni Chan Baka`,
  passWord: 44444,
  intersestRate: 1.5,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-10-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-12-28T09:15:04.904Z",
    "2024-01-01T10:17:24.185Z",
    "2024-02-08T14:11:59.604Z",
    "2024-03-27T17:01:17.194Z",
    "2024-03-11T23:36:17.929Z",
    "2024-05-12T10:51:36.790Z",
    "2024-06-12T10:51:36.790Z",
    "2024-07-12T10:51:36.790Z",
  ],
  currency: "JPY", //¥
  locale: "ja-JP", // de-DE
};
const accounts = [account_1, account_2, account_3, account_4];
//Selecting iteam
const input_username = document.querySelector(".input_username");
const input_password = document.querySelector(".input_password");
const btn_login = document.querySelector(".btn_login");
const loging_name = document.querySelector(".loging_name");
const balanceContainer = document.querySelector(".balance");
const current_date = document.querySelector(".date");
const balance_movements = document.querySelector(".balance_movements");
const appContainer = document.querySelector(".app");
const select_d_w = document.querySelector(".select_d_w");
const currentBalance = document.querySelector(".balance_value");
const summaryValueIn = document.querySelector(".in_value");
const summaryValueOut = document.querySelector(".out_value");
const summaryValueInterest = document.querySelector(".interest_value");
const date_logout = document.querySelectorAll(`.date_logout span`)[0];
//
const form_input_to = document.querySelector(".form_input_to");
const form_input_amount = document.querySelector(".form_input_amount");
const form_input_loan = document.querySelector(".form_input_loan");
const form_input_close = document.querySelector(".form_input_close");
const form_input_password_close = document.querySelector(
  ".form_input_password_close"
);
//
const btn_sort = document.querySelector(".sort");
const btn_form_trasfer = document.querySelector(".btn_form_trasfer");
const btn_form_loan = document.querySelector(".btn_form_loan");
const btn_form_close = document.querySelector(".btn_form_close");
//
const log_icon_account = document.querySelector(".log_icon-acc");
const log_in_form = document.querySelector(".log_in_form");

//Log In from Toggle
log_icon_account.addEventListener("click", (e) => {
  e.stopPropagation();
  log_in_form.style.display = "flex";
});
log_in_form.addEventListener("click", (event) => {
  // Prevent the click event from propagating to the body
  event.stopPropagation();
});
document.addEventListener("click", (e) => {
  log_in_form.style.display = "none";
  // Check if the clicked element is not the login form or its child elements
  /* if (!log_in_form.contains(e.target) && e.target !== log_icon_account) {
    log_in_form.style.display = "none";
  } */
});

///////////////////////////////////////////////
//Create Selection filter
const createFliter = function () {
  const allDiv = Array.from(
    document.querySelectorAll(".balance_movements .movements_container")
  );

  select_d_w.addEventListener("change", function (e) {
    allDiv.forEach((divs) => {
      const findclassName = divs.className
        .split(" ")
        .find((ee) => ee === e.target.value);
      divs.style.display = "none";
      if (e.target.value === findclassName) {
        divs.style.display = "flex";
      } else if (e.target.value === findclassName) {
        divs.style.display = "flex";
      }
    });
  });
};
//
//
const formtedDate = (displayDate, locale) => {
  const daysPass = (day_1, day_2) =>
    Math.round(Math.abs(day_2 - day_1) / (1000 * 60 * 60 * 24));

  const calcDaysPass = daysPass(new Date(), displayDate);
  if (calcDaysPass === 0) return `Today`;
  if (calcDaysPass === 1) return `Yesterday`;
  if (calcDaysPass <= 7) return `${calcDaysPass} days ago`;

  /*  const day = `${displayDate.getDate()}`.padStart(2, 0);
  const month = `${displayDate.getMonth() + 1}`.padStart(2, 0);
  const year = displayDate.getFullYear();

  return `${day}/${month}/${year}`; */
  return new Intl.DateTimeFormat(locale).format(displayDate);
};

///////////////////////////////////////////////

const formattedCurrency = (value, locale, currency) => {
  return (currencyFormatt = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value));
};
///////////////////////////////////////////////
//creat balance_movements
const creatbalance_movements = function (account, sort = false) {
  balance_movements.innerHTML = "";

  const movs = sort
    ? account.movemnet.slice().sort((a, b) => a - b)
    : account.movemnet;
  //
  movs.forEach((mov, i) => {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    //
    const displayDate = new Date(account.movementsDates[i]);
    const displayFullDate = formtedDate(displayDate, account.locale);
    //

    const html = `
    <div class="movements_container all_money ${type}">
    <div class="movements_type movements_type-${type}">${i + 1} ${type}</div>
    <div class="movements_date">${displayFullDate}</div>
    <div class="movements_value">${formattedCurrency(
      mov,
      account.locale,
      account.currency
    )}</div>
  </div>
    `;
    balance_movements.insertAdjacentHTML("afterbegin", html);
  });
  createFliter();
};

/////////////////////////////////////////////////

//Display Current Balance
const displayCurrentBalance = function (accounts) {
  accounts.balance = accounts.movemnet.reduce((ac, au) => ac + au);
  currentBalance.innerHTML = formattedCurrency(
    accounts.balance,
    accounts.locale,
    accounts.currency
  );
};

/////////////////////////////////////////////////
//Value Filter
const displayInOutValue = function (acc) {
  const summaryValueInFilter = acc.movemnet
    .filter((value) => value > 0)
    .reduce((ac, au) => ac + au);
  summaryValueIn.innerHTML = formattedCurrency(
    summaryValueInFilter,
    acc.locale,
    acc.currency
  );
  //
  const summaryValueOutFilter = acc.movemnet
    .filter((value) => value < 0)
    .reduce((ac, au) => ac + au);
  summaryValueOut.innerHTML = formattedCurrency(
    Math.abs(summaryValueOutFilter),
    acc.locale,
    acc.currency
  );
  //
  const valueInterest = acc.movemnet
    .filter((int) => int > 0)
    .map((inter) => (inter * acc.intersestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((ac, cu) => ac + cu, 0);

  summaryValueInterest.textContent = formattedCurrency(
    valueInterest,
    acc.locale,
    acc.currency
  );
};

/////////////////////////////////////////////////
//Create Short User Name
const createShortUserName = function (accs) {
  accs.forEach((acc) => {
    acc.shortUserName = acc.userName
      .toLowerCase()
      .split(" ")
      .map((n) => n[0])
      .join("");
  });
};
createShortUserName(accounts);
//
/////////////////////////////////////////////////
//
const updateUI = function (accs) {
  // Display Movments
  creatbalance_movements(accs);
  // Display balance
  displayCurrentBalance(accs);

  // Display summary
  displayInOutValue(accs);
};
//
let currentAccount, timer;

/////////////////////////////////////////////////
//Timer
const startTimerLogOut = () => {
  let time = 300;
  const timerFunc = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    date_logout.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      loging_name.textContent = `Log in to get started`;

      appContainer.style = ` opacity: 0;`;
      balanceContainer.style = ` opacity:0;`;
    }
    time--;
  };
  timerFunc();
  const timer = setInterval(timerFunc, 1000);
  return timer;
};

///////////////////////////////////////////////
//Event Handlere
btn_login.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) =>
      acc.shortUserName.toLowerCase() ===
      input_username.value.toLowerCase().trim()
  );
  if (currentAccount?.passWord === Number(input_password.value)) {
    // Display UI and message
    loging_name.textContent = `Welcome back, ${currentAccount.userName}`;
    // Display Movments

    appContainer.style = `  opacity: 1;
    height: auto;
    visibility: visible;
    transition: opacity 2s , height 0s , visibility 0s;`;
    balanceContainer.style = ` opacity: 1;`;
    document.querySelector(".overlay").style = `display:none`;
    //
    /////////////////////////////////////////////////
    //Get Date Current Balance
    const optionsGetDate = {
      hour: "numeric",
      minute: "numeric",
      //second: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };

    function updateDateTime() {
      const getDate = new Date();
      current_date.textContent = new Intl.DateTimeFormat(
        navigator.language,
        optionsGetDate
      ).format(getDate);
    }

    // Update the date and time immediately
    updateDateTime();

    // Update the date and time every second
    setInterval(updateDateTime, 1000);
    /* 
const getDate = new Date();
const month = `${getDate.getMonth() + 1}`.padStart(2, 0);
const day = `${getDate.getDate()}`.padStart(2, 0);
const year = getDate.getFullYear();
const hour = `${getDate.getHours()}`.padStart(2, 0);
const minutes = `${getDate.getMinutes()}`.padStart(2, 0);

current_date.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
 */

    //Clear input field
    input_password.value = input_username.value = ``;
    input_password.blur();
    log_in_form.style.display = "none";
    //Timer
    if (timer) clearInterval(timer);
    timer = startTimerLogOut();
    document.querySelector(".error_log").style = `
    display:none;`;
    updateUI(currentAccount);
    ////Rest Time
    document.body.addEventListener("click", () => {
      clearInterval(timer);
      timer = startTimerLogOut();
    });
  } else {
    document.querySelector(".error_log").style = `
    top: 10px;`;
    setTimeout(() => {
      document.querySelector(".error_log").style = `
    top: -80px;`;
    }, 3000);
  }
});

/////////////////////////////////////////////////
//Trasfer money
btn_form_trasfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(form_input_amount.value);
  const recieverAccount = accounts.find(
    (acc) => acc.shortUserName === form_input_to.value
  );

  form_input_amount.value = form_input_to.value = ``;
  form_input_to.blur();
  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.shortUserName !== currentAccount.shortUserName
  ) {
    //Doing the Trasnfer
    currentAccount.movemnet.push(-amount);
    recieverAccount.movemnet.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAccount.movementsDates.push(new Date().toISOString());
    //Update UI
    updateUI(currentAccount);
  }
});

///////////////////////////////////////////////
//Request a Loan
btn_form_loan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(form_input_loan.value);

  if (
    amount > 0 &&
    currentAccount.movemnet.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movemnet.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2000);
  }
  form_input_loan.value = ``;
  form_input_loan.blur();
  //
});

///////////////////////////////////////////////
//Close Account
btn_form_close.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    form_input_close.value === currentAccount.shortUserName &&
    Number(form_input_password_close.value) === currentAccount.passWord
  ) {
    const index = accounts.findIndex(
      (acc) => acc.shortUserName === currentAccount.shortUserName
    );
    console.log(index);
    accounts.splice(index, 1);
    // Display Movments

    appContainer.style = `display: none;`;
    balanceContainer.style = `display: none;`;

    //Clear input field
    form_input_close.value = form_input_password_close.value = ``;
    form_input_password_close.blur();
    loging_name.textContent = `Log in to get started`;
    document.querySelector(".overlay").style = `display:block`;
  }
});
let sorting = false;
btn_sort.addEventListener("click", (e) => {
  e.preventDefault();
  creatbalance_movements(currentAccount, !sorting);
  sorting = !sorting;
});
