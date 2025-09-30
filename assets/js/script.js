// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact form handling
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "✅ Thank you! Your message has been sent.";
  form.reset();
});

// members
// Dataset of members
const members = [
  {
    name: "Sujoy Mahmud",
    role: "Lead Researcher",
    info: "Expert in AI and HCI with 10+ years of experience.",
    img: "https://i.pravatar.cc/200?img=1",
  },
  {
    name: "Md Rayhan Hossain",
    role: "Software Engineer",
    info: "Specialist in web, AI, and embedded systems.",
    img: "assets/media/rayhan.jpeg",
  },
  {
    name: "Rahat Al Mamun",
    role: "Data Analyst",
    info: "Focused on data-driven insights and visualization.",
    img: "https://i.pravatar.cc/200?img=3",
  },
  {
    name: "Rahat Hasan Shihab",
    role: "Data Analyst",
    info: "Focused on data-driven insights and visualization.",
    img: "https://i.pravatar.cc/200?img=4",
  },
  {
    name: "Sumaiya Islam",
    role: "Data Analyst",
    info: "Focused on data-driven insights and visualization.",
    img: "https://i.pravatar.cc/200?img=5",
  },
];

// Container
const memberContainer = document.querySelector(".member-cards");

// Render members
members.forEach((member) => {
  const card = document.createElement("div");
  card.classList.add("member-card");
  card.setAttribute("data-name", member.name);
  card.setAttribute("data-role", member.role);
  card.setAttribute("data-info", member.info);

  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  `;

  memberContainer.appendChild(card);
});

// Expand card logic
const memberCards = document.querySelectorAll(".member-card");
const expandCard = document.getElementById("expandCard");
const closeCard = document.getElementById("closeCard");

// Elements inside expand card
const expandImg = document.getElementById("expandImg");
const expandName = document.getElementById("expandName");
const expandRole = document.getElementById("expandRole");
const expandInfo = document.getElementById("expandInfo");

// When clicking a member card
memberCards.forEach((card) => {
  card.addEventListener("click", () => {
    expandImg.src = card.querySelector("img").src;
    expandName.textContent = card.dataset.name;
    expandRole.textContent = card.dataset.role;
    expandInfo.textContent = card.dataset.info;

    expandCard.classList.add("active");
  });
});

// Close button
closeCard.addEventListener("click", () => {
  expandCard.classList.remove("active");
});

// projects
const projects = [
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot for customer support. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure aliquam nobis voluptates, cumque rem non quas quis quia accusamus in repellendus natus eaque saepe animi aspernatur numquam iste labore est veniam dolorem, expedita possimus. Non exercitationem cumque aliquid dignissimos ipsum, maiores tenetur expedita itaque similique ad officiis facere quae.",
    thumbImg: "https://i.pravatar.cc/200?img=1",
    imgList: [
      "https://i.pravatar.cc/200?img=1",
      "https://i.pravatar.cc/200?img=1",
    ],
    memberList: [0, 1],
  },
  {
    title: "Health Tracker",
    description:
      "An app to track daily health metrics. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure aliquam nobis voluptates, cumque rem non quas quis quia accusamus in repellendus natus eaque saepe animi aspernatur numquam iste labore est veniam dolorem, expedita possimus. Non exercitationem cumque aliquid dignissimos ipsum, maiores tenetur expedita itaque similique ad officiis facere quae.",
    thumbImg: "assets/media/rayhan.jpeg",
    imgList: [
      "https://i.pravatar.cc/200?img=1",
      "https://i.pravatar.cc/200?img=1",
    ],
    memberList: [0, 1],
  },
  {
    title: "Smart Home System",
    description:
      "Automation system for home appliances. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure aliquam nobis voluptates, cumque rem non quas quis quia accusamus in repellendus natus eaque saepe animi aspernatur numquam iste labore est veniam dolorem, expedita possimus. Non exercitationem cumque aliquid dignissimos ipsum, maiores tenetur expedita itaque similique ad officiis facere quae.",
    thumbImg: "https://i.pravatar.cc/200?img=3",
    imgList: [
      "https://i.pravatar.cc/200?img=1",
      "https://i.pravatar.cc/200?img=1",
    ],
    memberList: [0, 1],
  },
  {
    title: "E-Learning Platform",
    description:
      "A platform for online courses and quizzes. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure aliquam nobis voluptates, cumque rem non quas quis quia accusamus in repellendus natus eaque saepe animi aspernatur numquam iste labore est veniam dolorem, expedita possimus. Non exercitationem cumque aliquid dignissimos ipsum, maiores tenetur expedita itaque similique ad officiis facere quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure aliquam nobis voluptates, cumque rem non quas quis quia accusamus in repellendus natus eaque saepe animi aspernatur numquam iste labore est veniam dolorem, expedita possimus. Non exercitationem cumque aliquid dignissimos ipsum, maiores tenetur expedita itaque similique ad officiis facere quae.",
    thumbImg: "https://i.pravatar.cc/200?img=14",
    imgList: [
      "https://i.pravatar.cc/200?img=1",
      "ihttps://i.pravatar.cc/200?img=1",
    ],
    memberList: [1, 3],
  },
];

const projectContainer = document.getElementById("projectsContainer");
const expandProjectCard = document.getElementById("expandCardProject");
const expandTitle = document.getElementById("expandProjectTitle");
const expandDescription = document.getElementById("expandProjectDescription");
const expandImgs = document.getElementById("expandProjectImgs");
const closeBtn = document.getElementById("closeCardProject");
const memberProjectContainer = document.querySelector(
  ".expand-project-members"
);

// Render project cards
projects.forEach((project, index) => {
  const cardClass =
    index % 2 === 0 ? "project-card-left" : "project-card-right";

  const card = document.createElement("div");
  card.classList.add(cardClass, "project-card");

  card.innerHTML = `
    <img src="${project.thumbImg}" alt="${project.title}">
    <div class="project-info">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
  `;

  projectContainer.appendChild(card);

  // Click event to open expanded card
  card.addEventListener("click", () => {
    expandTitle.textContent = project.title;
    expandDescription.textContent = project.description;

    // Clear previous images
    expandImgs.innerHTML = "";

    // Add project images
    project.imgList.forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.src = img;
      imgEl.alt = project.title;
      imgEl.style.width = "100%";
      imgEl.style.marginBottom = "10px";
      imgEl.style.borderRadius = "6px";
      expandImgs.appendChild(imgEl);
    });

    project.memberList.forEach((index) => {
      const member = members[index];
      if (!member) return;

      const card = document.createElement("div");
      card.classList.add("member-project-card");

      card.innerHTML = `
        <img src="${member.img}" alt="${member.name}" />
        <h3>${member.name}</h3>
      `;

      memberProjectContainer.appendChild(card);
    });

    // Show the overlay
    expandProjectCard.classList.add("active"); // assuming flex centering
  });
});

// Close button
closeBtn.addEventListener("click", () => {
  expandProjectCard.style.display = "none";
});

// Optional: close when clicking outside content
expandProjectCard.addEventListener("click", (e) => {
  if (e.target === expandProjectCard) {
    expandProjectCard.style.display = "none";
  }
});
