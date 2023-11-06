const emails = [
  {
    from: "beetlejuice@gmail.com",
    msg: "Hi Subramanian,Here are some of the latest opportunities matching your preferences. Apply now!",
  },
  {
    from: "richardtheretard@gmail.com",
    msg: "College students can taste placement success with this course!",
  },
  {
    from: "dumbass@email.com",
    msg: "“software engineer”: ADSMN - HTML CSS JS - Frontend Developer and more",
  },
  {
    from: "noone@gmail.com",
    msg: "Invitation to participate in the first pilot of Central Bank Digital Currency - Retail (Digital Rupee - e₹) / SBI CBDC",
  },
  {
    from: "bb12372@gmail.com",
    msg: "Reminder: Verify your email to continue to Proton",
  },
  {
    from: "wakali@gmail.com",
    msg: "Get Tech Placed | Join the 20X Programming Bundle",
  },
  {
    from: "captainalex@email.com",
    msg: "Subramanian, new internships in DataSkience OPC, Hooman Digital LLP & more",
  },
  {
    from: "jamaalbee@rediff.com",
    msg: "Subramanian, new internships in DataSkience OPC, Hooman Digital LLP & more",
  },
  {
    from: "niggatron@gmail.com",
    msg: "Wanna know how 'typography' affects the human mind? 🤯 Register to know more!",
  },
];
const clickedEmail = {};
const visitedEmails = [];
let navBtns = "Inbox";
let selectedEmail;
const left = document.getElementById("left");
const right = document.getElementById("right");
const fromDiv = document.getElementById("from");
const emailBodyText = document.getElementById("emailbody");

function clickedNav() {
  const navs = document.querySelectorAll(".nav-box");
  navs.forEach((k) => {
    k.addEventListener("click", clickedNavFn);
  });
}
function clickedNavFn() {
  const val = this.innerText;
  navBtns = val;
  left.innerHTML = "";
  checkNavBtns();
}
clickedNav();
function checkNavBtns() {
  switch (navBtns) {
    case "Inbox": {
      inbox();
      break;
    }
    case "Favourites": {
      favourites();
      break;
    }
    default: {
      break;
    }
  }
}
function inbox() {
  emails.map((k) => {
    const emailBox = document.createElement("div");
    const emailFrom = document.createElement("div");
    const emailBody = document.createElement("div");
    if (navBtns === "Inbox") {
      emailBox.classList.add("email-box");
      emailFrom.classList.add("email-from");
      emailBody.classList.add("email-body");
      emailFrom.innerText = k.from;
      emailBody.innerText = k.msg;
      emailBox.appendChild(emailFrom);
      emailBox.appendChild(emailBody);
      left.appendChild(emailBox);
      emailBox.addEventListener("click", () => rightfn(k, emailBox));
    } else {
      left.removeChild(emailBody);
    }
  });
}
function rightfn(k, e) {
  visitedEmails.push(k);
  fromDiv.innerText = k.from;
  emailBodyText.innerText = k.msg;
  e.classList.add("darkgray");
}

function favourites() {
  if (navBtns === "Favourites") {
    emails.map((k) => {
      const emailBox = document.createElement("div");
      const emailFrom = document.createElement("div");
      const emailBody = document.createElement("div");

      emailBox.classList.add("email-box");
      emailFrom.classList.add("email-from");
      emailBody.classList.add("email-body");
      emailFrom.innerText = k.from;
      emailBody.innerText = k.msg;
      // emailBox.appendChild(emailFrom)
      // emailBox.appendChild(emailBody)
      left.appendChild(emailBox);
      emailBox.addEventListener("click", () => rightfn(k, emailBox));
    });
  }
}
