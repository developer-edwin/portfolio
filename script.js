/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
function blurBody() {
  document.querySelector('#logo').classList.toggle('blur');
  const sections = document.querySelectorAll('section');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].classList.toggle('blur');
  }
  document.querySelector('body').classList.toggle('noScroll');
}

function toggleManu() {
  document.querySelector('nav').classList.toggle('displayMenu');
  blurBody();
}

document.querySelector('#hamburgerMenu').addEventListener('click', () => {
  toggleManu();
});

document.querySelector('#hamburgerMenuClose').addEventListener('click', () => {
  toggleManu();
});

if (screen.width < 768) {
  const navLinks = document.querySelectorAll('.navLink');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', () => {
      toggleManu();
    });
  }
}

const projectsData = [
  {
    project_name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/snapshot1.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project1',
    source_link: 'https://www.github.com/rominana/tonic',
  },

  {
    project_name: 'Multi Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/snapshot2.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project2',
    source_link: 'https://www.github.com/rominana/multi-post-stories',
  },

  {
    project_name: 'Facebook 360',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/snapshot3.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project3',
    source_link: 'https://www.github.com/rominana/facebook360',
  },

  {
    project_name: 'Uber Navigation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/snapshot4.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project4',
    source_link: 'https://www.github.com/rominana/uber-navigation',
  },
];

let cardTemplate = '';

for (let i = 0; i < projectsData.length; i += 1) {
  cardTemplate = `
  <div class="card">
    <div class="card_picture">
      <img src="${projectsData[i].featured_image}" alt="Snapshot 1" />
    </div>
    <div class="card_content">
      <div class="card_title">
        <h1>${projectsData[i].project_name}</h1>
      </div>
      <div class="card_date">
        <ul>
          <li class="card_date-active">CANOPY</li>
          <li><img src="images/bullet.png" alt="bullet" /></li>
          <li>Back End Dev</li>
          <li><img src="images/bullet.png" alt="bullet" /></li>
          <li>2015</li>
        </ul>
      </div>
      <div class="card_info">
        <p>
          ${projectsData[i].short_description}
        </p>
      </div>
      <div class="card_lenguajes">
        <ul>
          <li><span>html</span></li>
          <li><span>css</span></li>
          <li><span>javaScript</span></li>
        </ul>
      </div>
      <button class="card_button" onClick="showPopUp(${i})">See Project</button>
    </div>
  </div>`;

  document.getElementById('cards-section').innerHTML += cardTemplate;
}

function popUpTechnologies(projectNumber) {
  let codingSkills = '';
  for (let i = 0; i < projectsData[projectNumber].technologies.length; i += 1) {
    codingSkills += `<li><span>${projectsData[projectNumber].technologies[i]}</span></li>`;
  }
  return codingSkills;
}

function showPopUp(cardNumber) {
  let paragraphDescription = '';

  if (window.screen.width >= 768) {
    paragraphDescription = projectsData[cardNumber].description;
  } else {
    paragraphDescription = projectsData[cardNumber].short_description;
  }

  const codingSkills = popUpTechnologies(cardNumber);

  const popUpHtml = `
  <div class="card">
  <div class="card_content">
    <div class="card_title">
      <h1>${projectsData[cardNumber].project_name} <i class="fa-solid fa-xmark" id="closePopUp"></i></h1>
    </div>
    <div class="card_date">
      <ul>
        <li class="card_date-active">CANOPY</li>
        <li><img src="images/bullet.png" alt="bullet" /></li>
        <li>Back End Dev</li>
        <li><img src="images/bullet.png" alt="bullet" /></li>
        <li>2015</li>
      </ul>
    </div>
    <div class="card_picture" style="background: url(${projectsData[cardNumber].featured_image}) no-repeat center; background-size: calc(87vw);"></div>
    <div class="card_info">
      <p>
        ${paragraphDescription}
      </p>
    </div>
    <div class="card_lenguajes">
      <ul>
        <li><span>html</span></li>
        ${codingSkills}
      </ul>
    </div>
    <div class="pop-up-buttons">
      <div class="project-button">
        <button class="card_button" type="button">
          See Live
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
      <div class="project-button">
        <button class="card_button" type="button">
          See Source
          <i class="fa-brands fa-github"></i>
        </button>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById('popUpMain').innerHTML = popUpHtml;
  document.getElementById('popUpMain').classList.toggle('hide');
  blurBody();
  document.querySelector('#closePopUp').addEventListener('click', () => {
    document.getElementById('popUpMain').classList.toggle('hide');
    blurBody();
  });
}
