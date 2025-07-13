// Challenge data (simulating JSON files)
const challengeData = [
  {
    "id": "smoke",
    "name": "Quit Smoking",
    "startDate": "2025-07-08",
    "endDate": "2025-08-08",
    "description": "Break free from nicotine by staying smoke-free for 30 days. Replace the urge with deep breathing, water, and healthy snacks."
  },
  {
    "id": "adult",
    "name": "Avoid Adult Content",
    "startDate": "2025-07-08",
    "endDate": "2025-08-08",
    "description": "Train your mind by steering clear of explicit media for 30 days. Spend the extra time on hobbies, friends, or learning."
  },
  {
    "id": "alcohol",
    "name": "No Alcohol",
    "startDate": "2025-07-08",
    "endDate": "2025-08-08",
    "description": "Reset your body by avoiding alcoholic drinks for 30 straight days. Hydrate, move, and notice improved sleep and energy."
  }
];

const participantsData = [
  {"id":"u1","name":"Aymen","photo":"https://randomuser.me/api/portraits/men/31.jpg","joinDate":"2025-07-08","challengeId":"smoke"},
  {"id":"u2","name":"Lina","photo":"https://randomuser.me/api/portraits/women/44.jpg","joinDate":"2025-07-10","challengeId":"smoke"},
  {"id":"u3","name":"Youssef","photo":"https://randomuser.me/api/portraits/men/75.jpg","joinDate":"2025-07-12","challengeId":"adult"},
  {"id":"u4","name":"Sara","photo":"https://randomuser.me/api/portraits/women/65.jpg","joinDate":"2025-07-08","challengeId":"adult"},
  {"id":"u5","name":"Omar","photo":"https://randomuser.me/api/portraits/men/15.jpg","joinDate":"2025-07-14","challengeId":"alcohol"},
  {"id":"u6","name":"Maya","photo":"https://randomuser.me/api/portraits/women/21.jpg","joinDate":"2025-07-09","challengeId":"alcohol"}
];

// Utility functions
function dateDiffInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  return Math.round((secondDate - firstDate) / oneDay);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric'
  });
}

// Challenge colors
const challengeColors = ['#ff9f1c', '#2ec4b6', '#8b5cf6'];

// Current date for progress calculation
const currentDate = new Date('2025-07-13');

// Main application
class ChallengeApp {
  constructor() {
    this.challengesContainer = document.getElementById('challenges');
    this.challenges = [];
    this.participants = [];
    this.init();
  }

  async init() {
    try {
      // Simulate fetching data
      await this.loadData();
      this.createChallengeGrid();
      this.renderChallenges();
      this.setupIntersectionObserver();
      this.setupScrolling();
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async loadData() {
    // Simulate async data loading
    return new Promise((resolve) => {
      setTimeout(() => {
        this.challenges = challengeData;
        this.participants = participantsData;
        resolve();
      }, 100);
    });
  }

  createChallengeGrid() {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'challenge-grid';
    this.challengesContainer.appendChild(gridContainer);
    this.gridContainer = gridContainer;
  }

  renderChallenges() {
    this.challenges.forEach((challenge, index) => {
      const challengeCard = this.createChallengeCard(challenge, index);
      this.gridContainer.appendChild(challengeCard);
    });
  }

  createChallengeCard(challenge, index) {
    const startDate = new Date(challenge.startDate);
    const endDate = new Date(challenge.endDate);
    const totalDays = dateDiffInDays(startDate, endDate);
    const daysPassed = Math.max(0, dateDiffInDays(startDate, currentDate));
    const progress = clamp(daysPassed / totalDays, 0, 1);
    const currentDay = Math.min(daysPassed + 1, totalDays + 1);

    const card = document.createElement('div');
    card.className = 'challenge-card';
    card.innerHTML = `
      <div class="challenge-header">
        <h2 class="challenge-title">${challenge.name}</h2>
        <div class="challenge-dates">
          ${formatDate(challenge.startDate)} - ${formatDate(challenge.endDate)}
        </div>
        <p class="challenge-description">${challenge.description}</p>
        <div class="challenge-progress">Day ${currentDay} of ${totalDays + 1}</div>
      </div>
      <div class="challenge-body">
        <div class="timeline-wrapper">
          <div class="timeline-container">
            <div class="progress-track">
              <div class="progress-fill" style="--w: ${progress * 100}%; background-color: ${challengeColors[index % challengeColors.length]}"></div>
            </div>
            ${this.createDayMarkers(totalDays + 1)}
            ${this.createParticipantAvatars(challenge.id, startDate, endDate)}
          </div>
        </div>
        <div class="scroll-hint">← Scroll to see all 30 days →</div>
      </div>
    `;

    return card;
  }

  createDayMarkers(totalDays) {
    const markers = [];
    for (let day = 1; day <= totalDays; day++) {
      const position = ((day - 1) / (totalDays - 1)) * 100;
      const isHighlighted = day % 5 === 0 || day === 1 || day === totalDays;
      markers.push(`
        <div class="day-marker ${isHighlighted ? 'highlighted' : ''}" 
             style="left: ${position}%"
             data-day="${day}">
        </div>
      `);
    }
    return `<div class="timeline-days">${markers.join('')}</div>`;
  }

  createParticipantAvatars(challengeId, startDate, endDate) {
    const challengeParticipants = this.participants.filter(p => p.challengeId === challengeId);
    const totalDays = dateDiffInDays(startDate, endDate);
    
    return challengeParticipants.map(participant => {
      const joinDate = new Date(participant.joinDate);
      const daysFromStart = dateDiffInDays(startDate, joinDate);
      const position = clamp(daysFromStart / totalDays, 0, 1) * 100;
      
      return `
        <div class="avatar" style="left: calc(${position}% - 20px)" aria-label="${participant.name}">
          <img src="${participant.photo}" alt="${participant.name}" width="40" height="40" style="border-radius: 50%; width: 100%; height: 100%; object-fit: cover;">
          <div class="avatar-tooltip">
            ${participant.name}<br>
            Joined: ${formatDate(participant.joinDate)}
          </div>
        </div>
      `;
    }).join('');
  }

  setupScrolling() {
    // Add smooth scrolling for timeline containers
    const timelineWrappers = document.querySelectorAll('.timeline-wrapper');
    timelineWrappers.forEach((wrapper, index) => {
      // Add wheel scrolling support
      wrapper.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          wrapper.scrollLeft += e.deltaY;
        }
      });

      // Add touch scrolling support
      let isScrolling = false;
      let startX = 0;
      let scrollLeft = 0;

      wrapper.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
      });

      wrapper.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2;
        wrapper.scrollLeft = scrollLeft - walk;
      });

      wrapper.addEventListener('touchend', () => {
        isScrolling = false;
      });

      // Auto-scroll to current progress on load
      setTimeout(() => {
        const progress = this.getCurrentProgress();
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        wrapper.scrollLeft = maxScroll * progress * 0.5; // Scroll to middle of progress
      }, 500 + (index * 200));
    });
  }

  getCurrentProgress() {
    const startDate = new Date('2025-07-08');
    const endDate = new Date('2025-08-08');
    const totalDays = dateDiffInDays(startDate, endDate);
    const daysPassed = Math.max(0, dateDiffInDays(startDate, currentDate));
    return clamp(daysPassed / totalDays, 0, 1);
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => observer.observe(card));
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChallengeApp();
});

// Add keyboard navigation for avatars
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const avatars = document.querySelectorAll('.avatar');
      avatars.forEach(avatar => {
        avatar.tabIndex = 0;
      });
    }
  });

  // Add focus styles for avatars
  const style = document.createElement('style');
  style.textContent = `
    .avatar:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
    .avatar:focus .avatar-tooltip {
      opacity: 1;
    }
    .day-marker.highlighted {
      height: 30px;
      opacity: 1;
      background: var(--color-primary);
    }
  `;
  document.head.appendChild(style);
});

// Add some motivational messages that change based on progress
function getMotivationalMessage(progress) {
  if (progress < 0.2) return "Great start! Every journey begins with a single step.";
  if (progress < 0.5) return "You're building momentum! Keep going strong.";
  if (progress < 0.8) return "Amazing progress! You're more than halfway there.";
  return "You're so close to the finish line! Don't give up now.";
}

// Update footer with dynamic motivation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const footerMotivation = document.querySelector('.footer-motivation');
    if (footerMotivation) {
      const avgProgress = 0.17; // Based on current date (Day 6 of 30)
      const message = getMotivationalMessage(avgProgress);
      footerMotivation.textContent = `✨ ${message} ✨`;
    }
  }, 1000);
});

// Add click to scroll functionality
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const scrollHints = document.querySelectorAll('.scroll-hint');
    scrollHints.forEach(hint => {
      hint.style.cursor = 'pointer';
      hint.addEventListener('click', () => {
        const timelineWrapper = hint.parentElement.querySelector('.timeline-wrapper');
        const maxScroll = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;
        timelineWrapper.scrollTo({
          left: maxScroll * 0.5,
          behavior: 'smooth'
        });
      });
    });
  }, 1000);
});