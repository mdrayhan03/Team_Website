// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// nav bar
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
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
    expertize: "Research methodology design, Public Health Informatics, Campaign Management, STEM Education Outreach",
    acheivement: "ICCCAD Research Grant winner 2025, World Champion Team in the FIRST Global Challenge (Lead Programmer, FIRST Global Challenge (FGC)), Ashoka Youth Fellow",
    img: "assets/media/sujoy.jpeg",
    email: "sujoymahmud02@gmail.com",
    linkedin: "https://www.linkedin.com/in/sujoy-mahmud/",
    protfolio: "",
  },
  {
    name: "Md Rayhan Hossain",
    expertize: "Fullstack Engineer, Research, Prototyping",
    acheivement: "Cisco IoT Hackathon winner, Hult Prize at IUB awarde",
    img: "assets/media/rayhan.jpeg",
    email: "mostafaizurrahman2021@gmail.com",
    linkedin: "https://www.linkedin.com/in/mdrayhan03/",
    protfolio: "",
  },
  {
    name: "Rahat Al Mamun",
    expertize: "Project Management, Digital solution design, STEM Education Outreach",
    acheivement: "Orange Corner Ideation Challenge winner, Global Qualifier at NASA Human Exploration Rover Challenge, Not-A-Boring Competition Finalist ",
    img: "assets/media/rahat.jpeg",
    email: "rahatalmamun20@gmail.com",
    linkedin: "https://www.linkedin.com/in/ramamun/",
    protfolio: "",
  },
  {
    name: "Rahat Hasan Shihab",
    expertize: "Rapid prototyping, Fullstack IoT Developer, Product management",
    acheivement: "MIT Solve Awardee, Gates Foundation Awardee, SAUVC Finalist",
    img: "assets/media/shihab.jpeg",
    email: "shihab.hasan3322@gmail.com ",
    linkedin: "https://www.linkedin.com/in/rhshihab/",
    protfolio: "https://rhshihab.com/",
  },
  {
    name: "Sumaiya Islam",
    expertize: "Data recording and analysis, ",
    acheivement: "N/A",
    img: "assets/media/sumaiya.jpeg",
    email: "2211104@iub.edu.bd",
    linkedin: "https://www.linkedin.com/in/sumaiya-islam-765b45271/",
    protfolio: "",
  },
  {
    name: "Tanfia Khan Disha",
    expertize: "Research, Project design & documentation, International collaboration",
    acheivement: "GCYLP Fellowship 2025 by ITU & Huawei, Gold Standard of Duke of Edinburgh International Award",
    img: "assets/media/tanfia.jpeg",
    email: "sujoymahmud02@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanfiadisha/",
    protfolio: "",
  },
  {
    name: "Rakib Hossain",
    expertize: "Documentation & Reporting, Laboratory Technics(Biochem & Biotech), Critical & Experimental Thinking",
    acheivement: "N/A",
    img: "assets/media/rakib.jpeg",
    email: "rakib17.bd.hasan0@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakib-hossain-ba1a13353/",
    protfolio: "",
  },  
];

// Container
const memberContainer = document.querySelector(".member-cards");

// Render members
members.forEach((member) => {
  const card = document.createElement("div");
  card.classList.add("member-card");
  card.setAttribute("data-name", member.name);
  card.setAttribute("data-expertize", member.expertize);
  card.setAttribute("data-acheivement", member.acheivement);
  card.setAttribute("data-email", member.email);
  card.setAttribute("data-linkedin", member.linkedin);
  card.setAttribute("data-protfolio", member.protfolio);

  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}" />
    <h3>${member.name}</h3>
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
const expandExpertize = document.getElementById("expandExpertize");
const expandAcheivement = document.getElementById("expandAcheivement");
const expandEmail = document.getElementById("expandEmail");
const expandLinkedin = document.getElementById("expandLinkedin");
const expandProtfolio = document.getElementById("expandProtfolio");

// Global variables to hold current email/linkedin
let currentEmail = "";
let currentLinkedin = "";
let currentProtfolio = "";

// When clicking a member card
memberCards.forEach((card) => {
  card.addEventListener("click", () => {
    expandImg.src = card.querySelector("img").src;
    expandName.textContent = card.dataset.name;
    expandExpertize.textContent = card.dataset.expertize;
    expandAcheivement.textContent = card.dataset.acheivement;  

    // store values for current card
    currentEmail = card.dataset.email;
    currentLinkedin = card.dataset.linkedin;
    currentProtfolio = card.dataset.protfolio;

    console.log(currentProtfolio);

    if (currentProtfolio && currentProtfolio.trim() !== "") {
      expandProtfolio.textContent = "Protfolio";
    } else {
      expandProtfolio.textContent = "";
    }

    expandEmail.href = currentEmail;
    expandLinkedin.href = currentLinkedin;
    expandProtfolio.href = currentProtfolio;

    expandCard.classList.add("active");
  });
});

// Attach click listeners only ONCE
expandEmail.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(currentEmail).then(() => {
    alert("Email copied to clipboard!");
  });
});

expandLinkedin.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(currentLinkedin).then(() => {
    alert("LinkedIn link copied to clipboard!");
  });
});

// Close button
closeCard.addEventListener("click", () => {
  expandCard.classList.remove("active");
});

// projects
const projects = [
  {
    title: "UNICEF's WASH project",
    description:
      "During the COVID-19 lockdown in 2020, I had the privilege of contributing to UNICEF’s Water, Sanitation, and Hygiene (WASH) project in partnership with BRAC and Field Ready. The project focused on reducing cross-contamination risks in the Rohingya refugee camps, where overcrowding and limited infrastructure posed severe health challenges. With the pandemic intensifying concerns about hygiene and water access, our primary objective was to implement practical, sustainable, and community-friendly solutions that could minimize the spread of infectious diseases. One of the key initiatives I was directly involved in was the deployment of 50 foot-operated handwashing taps throughout different areas of the camp. These taps were designed as a low-cost but highly effective innovation, enabling individuals to wash their hands without directly touching any handles or surfaces. By replacing traditional hand-operated taps with foot pedals, we drastically reduced the risk of cross-contamination—a crucial step in safeguarding vulnerable populations against COVID-19 and other communicable diseases. I was responsible for supervising the installation, training community members in usage, and monitoring feedback to ensure the taps were user-friendly and durable under high-frequency use. Beyond this immediate intervention, I also worked on a prototype for a smart handwashing station equipped with LoRa and IoT-based sensors. This innovation was intended to address a critical challenge in the camps: the uneven distribution of water. Many areas experienced shortages, while others consumed resources inefficiently. By integrating flow sensors, pressure meters, and connectivity through LoRa (Long Range communication technology), the prototype could collect real-time data on water consumption in each block of the refugee camps. This data-driven approach allowed humanitarian organizations to visualize water usage patterns, predict shortages, and optimize distribution schedules. Developing the prototype required applying my technical expertise in embedded systems, IoT, and sensor integration. I designed the system to be low-power, resilient in harsh environments, and easy to maintain with locally available resources. Furthermore, I collaborated with engineers, field staff, and community workers to ensure the design was practical and adaptable. One of the challenges was ensuring reliable data transmission in areas with limited infrastructure, which we addressed by carefully tuning LoRa settings to maximize range and efficiency. The significance of this work extended beyond the immediate pandemic response. While the foot-operated taps addressed urgent hygiene needs, the sensor-based prototype offered a long-term framework for sustainable water management. In humanitarian settings like refugee camps, resources are often stretched thin, and data-driven insights can help reduce waste, improve equity, and ultimately enhance community resilience. Working on this project gave me invaluable experience in humanitarian technology deployment, community-driven design, and interdisciplinary collaboration. It was a unique opportunity to combine engineering innovation with social impact, applying modern technologies to some of the world’s most pressing challenges. More importantly, it reinforced the lesson that solutions must be not only technically sound but also accessible, culturally appropriate, and sustainable for the people who rely on them. In summary, my involvement in UNICEF’s WASH project during the COVID-19 lockdown allowed me to contribute meaningfully to both immediate pandemic mitigation and long-term infrastructure development. By deploying 50 foot-operated taps and developing a LoRa-enabled water monitoring system, I was able to support efforts that directly improved hygiene practices and resource management in one of the most vulnerable communities in the world.",
    thumbImg: "assets/media/wash1.jpg",
    imgList: [
      "assets/media/wash1.jpg",
      "assets/media/wash2.jpg",
      "assets/media/wash3.jpg",
      "assets/media/wash4.jpg",
    ],
    memberList: [0, 1, 2, 4],
  },
  {
    title: "Research Project On Identifying adaptations in healthcare seeking behavior of vulnerable women in climate-affected regions in river islands of Gaibandha",
    description:
      "Climate Change is a major problem for Bangladesh, causing significant migration in vulnerable Regions (Fernández et al., 2024). In these regions, environmental effects such as heat waves have been shown to have detrimental effects on health, leading to increased illness and mortality rates. The UN estimates that the majority of people displaced by climate change are women, highlighting the disproportionate impact on women and girls (UNICEF, 2009). Conducting a study on the healthcare-seeking behaviour of women in climate-vulnerable regions in Gaibandha will give important insights into the problems they face while seeking healthcare services. This research aims to study specific adaptations in the healthcare-seeking behaviour of women in these ‘chars’ and find out how climate events impact this behaviour. This research is funded under a research grant offered to students of Independent University, Bangladesh (IUB) through the project ‘Capacity Strengthening of Multi-Actors to Limit Climate Change Impacts and Enhance Resilience (CAP-RES),’ funded by the Swedish International Development Agency (Sida) and implemented by ICCCAD, IUB.",
    thumbImg: "assets/media/gaibandha3.jpeg",
    imgList: [
      // "assets/media/gaibandha1.jpeg",
      // "assets/media/gaibandha2.jpeg",
      "assets/media/gaibandha3.jpeg",
      "assets/media/gaibandha4.jpeg",
    ],
    memberList: [0, 1, 2, 4],
  },
  {
    title: "Cerebral Palsy",
    description:
      "Cerebral palsy (CP) is one of the most common motor disabilities in children worldwide, and in Bangladesh, thousands of individuals are affected by its life-long challenges. Among the many difficulties they face, impaired motor control and speech disabilities are particularly significant, as these limit their ability to communicate effectively with caregivers, teachers, and healthcare professionals. Communication is the foundation of human interaction, learning, and care, and the lack of accessible tools can severely reduce the quality of life for individuals with CP. To address this pressing issue, a gesture-based mouse communication device integrated with an Augmentative and Alternative Communication (AAC) interface has been developed. This innovation combines assistive technology, accessibility-focused design, and locally relevant solutions to empower individuals with CP in Bangladesh. The device functions as an air-mouse system, where small, controlled hand or arm gestures are translated into cursor movements on a screen. Unlike conventional computer mice or touchpads, which require fine motor control, this system uses motion sensors such as the MPU6050 to capture movement data. The signals are transmitted wirelessly to a computer or tablet, where they are processed into smooth cursor actions. By minimizing the need for precise physical input, the device significantly lowers the barrier for users with motor impairments to interact with digital interfaces. Complementing the gesture-based mouse is an AAC interface, which provides a structured, visual, and easy-to-use platform for communication. Through the interface, users can select symbols, icons, or text to express their needs, emotions, and responses. For instance, with a few cursor movements, a user can indicate hunger, request assistance, or express discomfort. More advanced features allow the AAC system to generate speech output, enabling direct verbal communication with caregivers and healthcare workers. This integration bridges the gap between motor limitations and speech impairments, offering individuals with CP a more independent voice in their daily interactions. The project holds particular significance in the context of Bangladesh. Many existing AAC solutions and gesture-based technologies are costly, complex, or not designed with local contexts in mind. Families of individuals with CP often cannot afford high-end imported devices, leaving them with very few options. This system, however, emphasizes affordability, simplicity, and adaptability. The hardware is built from cost-effective components, while the software is customizable for Bangla and English communication, ensuring cultural and linguistic relevance. Moreover, the system contributes to the broader goal of inclusive healthcare and education. With the device, caregivers and healthcare professionals can better understand patients needs, improving diagnosis, therapy, and overall care. In schools or learning environments, students with CP can participate more actively, expressing ideas and engaging with teachers and peers. This has the potential to reduce isolation, boost confidence, and foster inclusion in society. In conclusion, the gesture-based mouse communication device and AAC interface is not only an innovation in assistive technology but also a step toward equity and dignity for individuals with cerebral palsy in Bangladesh. By providing them with an accessible means to communicate and interact, the project enhances independence, strengthens relationships with caregivers, and improves overall quality of life. Its locally focused, affordable, and user-friendly design ensures that it can be a practical solution for many families, offering hope and empowerment to a community that has long been underserved.",
    thumbImg: "assets/media/cp1.png",
    imgList: [
      "assets/media/cp1.png",
      "assets/media/cp2.jpeg",
    ],
    memberList: [0, 1, 2, 4],
  },
  {
    title: "Production Yield Estimation with NDVI",
    description:
      "Yield estimation is poised to revolutionize the agricultural finance sector, providing financial institutions and agri-fintech companies with powerful tools to make smarter, data-driven decisions. Traditionally, financing in agriculture has been fraught with uncertainty, as lenders often rely on historical experience, incomplete information, or generalized market trends to assess risk. This approach can lead to misjudgments, higher default rates, and reduced financial inclusion for farmers. By leveraging advanced yield estimation techniques, institutions can now gain a deeper understanding of both farm-level and regional agricultural performance, creating opportunities for more precise credit allocation, risk management, and financial planning. At its core, yield estimation combines historical data, real-time analytics, and predictive modeling to generate accurate forecasts of crop productivity. This process typically involves the collection and analysis of multiple data streams, including soil health, weather patterns, crop variety, irrigation practices, and prior yield records. Machine learning algorithms and statistical models are applied to these datasets to identify patterns, correlations, and risk factors that may affect crop output. The resulting insights allow financial institutions to move beyond intuition-based decision-making toward a quantitative, evidence-based approach that reduces uncertainty and increases confidence in lending decisions. One of the primary benefits of yield estimation is its ability to assess a farmer's track record and land performance. By evaluating historical yields, farming practices, and land conditions, lenders can differentiate between high-performing and risk-prone farms. This information enables more tailored financial solutions, such as adjusting loan amounts, interest rates, or repayment schedules according to predicted productivity. For agri-fintech companies, this translates into better portfolio management, reduced default rates, and the ability to extend credit to previously underserved farmers who demonstrate strong potential. Moreover, yield estimation supports predictive risk analysis, helping financial institutions anticipate challenges before they occur. For instance, by integrating weather forecasts, pest outbreaks, and soil degradation trends into predictive models, lenders can estimate the likelihood of a poor harvest and proactively adjust financing strategies. This forward-looking capability not only safeguards the interests of lenders but also helps farmers plan effectively, optimize inputs, and mitigate losses. Over time, such predictive insights foster a more resilient agricultural ecosystem where risks are shared, managed, and minimized. Another critical advantage is the enhancement of financial inclusion and sustainability. Smallholder farmers, who often struggle to access credit due to perceived high risk, can now benefit from data-backed assessments of their productivity. Yield estimation empowers these farmers to demonstrate their potential reliably, enabling them to access loans, insurance, and investment opportunities that were previously out of reach. Simultaneously, lenders can channel resources more efficiently, promoting sustainable agricultural practices by incentivizing high-performing, environmentally responsible farming techniques. In conclusion, yield estimation is more than just a technological innovation—it is a strategic enabler for smarter agriculture financing. By harnessing the power of data and predictive modeling, financial institutions and agri-fintech companies can improve decision-making, reduce risk, and foster inclusive, sustainable growth in the agricultural sector. As the adoption of yield estimation grows, it promises to transform the relationship between farmers and financial institutions, paving the way for a more secure, efficient, and prosperous agricultural economy.",
    thumbImg: "assets/media/ndvi1.png",
    imgList: [
      "assets/media/ndvi1.png",
      "assets/media/ndvi2.png",
    ],
    memberList: [1, 2, 4],
  },  
];

const projectContainer = document.getElementById("projectsContainer");
const expandProjectCard = document.getElementById("expandCardProject");
const expandTitle = document.getElementById("expandProjectTitle");
const expandDescription = document.getElementById("expandProjectDescription");
const expandImgs = document.getElementById("expandProjectImgs");
const closeBtn = document.getElementById("closeCardProject");
const memberProjectContainer = document.querySelector(".expand-project-members");

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
      <p>${project.description.slice(0, 1000)}...</p>
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
  expandProjectCard.classList.remove("active");
});

// Optional: close when clicking outside content
expandProjectCard.addEventListener("click", (e) => {
  if (e.target === expandProjectCard) {
    expandProjectCard.classList.remove("active");
  }
});
