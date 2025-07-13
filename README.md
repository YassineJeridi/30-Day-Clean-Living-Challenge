# 30-Day Clean Living Challenge 🌟

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Transform your life in 30 days with our comprehensive clean living challenge tracker

## 🎯 Overview

The **30-Day Clean Living Challenge** is a web application designed to help users commit to healthier lifestyle choices over a 30-day period. The challenge focuses on three key areas:

- 🚭 **Stop Smoking** - Break free from nicotine addiction
- 🙈 **Avoid Explicit Content** - Build healthier digital habits
- 🚫 **Stop Drinking Alcohol** - Choose clarity and wellness

## ✨ Features

### 📊 Progress Tracking
- **Real-time progress bar** with animated completion percentage
- **Day-by-day tracking** from July 8 - August 8, 2025
- **Visual progress indicators** with smooth animations
- **Days remaining counter** for motivation

### 🎯 Goal Management
- **Three main goals** with dedicated tracking cards
- **Color-coded goal categories** for easy identification
- **Motivational descriptions** for each goal
- **Interactive goal cards** with hover effects

### 👥 Participant Management
- **Participant gallery** with avatar display
- **Join date tracking** for each participant
- **Horizontal scrolling interface** for easy navigation
- **Tooltip information** showing join dates
- **Responsive participant rail** with touch support

### 🎨 Design Features
- **Modern, clean interface** with professional styling
- **Responsive design** that works on all devices
- **Dark/Light mode support** with automatic detection
- **Smooth animations** and transitions
- **Accessibility features** with proper ARIA labels
- **Custom design system** with consistent theming

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/30-day-clean-living-challenge.git
   cd 30-day-clean-living-challenge
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local web server for development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. **Navigate to the application**
   - Open your browser and go to `http://localhost:8000` (if using a server)
   - Or double-click `index.html` to open directly

## 📁 Project Structure

```
30-day-clean-living-challenge/
├── index.html          # Main HTML file
├── style.css           # Comprehensive CSS with design system
├── app.js             # JavaScript application logic
├── README.md          # Project documentation
└── assets/            # (Optional) Images and other assets
```

## 🛠️ Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Accessibility-first approach
- Meta tags for responsive design
- Google Fonts integration (Poppins)

### CSS Features
- **Custom CSS Design System** with CSS variables
- **Responsive Grid Layout** for goal cards
- **Flexbox** for participant management
- **CSS Animations** for progress bars and interactions
- **Dark/Light mode support** with media queries
- **Custom scrollbar styling** for better UX

### JavaScript Functionality
- **Async data loading** simulation
- **Progress calculation** based on dates
- **DOM manipulation** for dynamic content
- **Event listeners** for user interactions
- **Horizontal scrolling** with mouse and touch support
- **Keyboard navigation** for accessibility

## 🎨 Design System

The project includes a comprehensive design system with:

### Color Palette
- **Primary**: Blue tones (#3b82f6, #60a5fa, #2563eb)
- **Goal-specific colors**: Red for smoking, Orange for nudity, Purple for alcohol
- **Neutral colors**: Grays and whites for backgrounds and text

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Fallback**: System fonts for reliability
- **Font sizes**: Responsive scaling from 11px to 30px

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Primary and secondary variants
- **Progress bars**: Animated with shimmer effects
- **Tooltips**: Contextual information display

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Adapted grid layouts
- **Mobile**: Optimized touch interactions and layouts

### Breakpoints
- Mobile: `< 480px`
- Tablet: `481px - 768px`
- Desktop: `> 768px`

## 🎯 Challenge Timeline

- **Start Date**: July 8, 2025
- **End Date**: August 8, 2025
- **Duration**: 30 days
- **Progress Tracking**: Daily updates with percentage completion

## 👥 Participant Features

### Avatar System
- **Profile photos** with fallback to initials
- **Placeholder avatars** for users without photos
- **Hover effects** for better interaction

### Join Date Tracking
- **Individual join dates** for each participant
- **Tooltip display** showing join information
- **Chronological organization** of participants

## 🔧 Customization

### Adding New Goals
1. Update the `challengeData.goals` array in `app.js`
2. Add corresponding CSS classes in `style.css`
3. Update the `getGoalIcon()` and `getGoalClass()` functions

### Changing Challenge Dates
Update the `challengeData` object in `app.js`:
```javascript
const challengeData = {
  "startDate": "2025-07-08",
  "endDate": "2025-08-08",
  // ... other properties
};
```

### Adding Participants
Add new user objects to the `usersData` array in `app.js`:
```javascript
{
  "name": "Your Name",
  "photo": "path/to/photo.jpg",
  "joinDate": "2025-07-08"
}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex functionality
- Test on multiple browsers and devices
- Ensure accessibility compliance

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (limited support)

## 🐛 Known Issues

- Image loading may be slow on poor connections
- Some animations may not work on older browsers
- Touch scrolling sensitivity may vary on different devices

## 🔮 Future Enhancements

- [ ] **Backend Integration** - User authentication and data persistence
- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **Social Features** - Comments, likes, and sharing
- [ ] **Progress Analytics** - Detailed statistics and insights
- [ ] **Customizable Challenges** - User-created challenge types
- [ ] **Notification System** - Daily reminders and motivation
- [ ] **Achievement System** - Badges and rewards for milestones

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design inspiration**: Modern web design principles
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Poppins
- **Icons**: Emoji icons for cross-platform compatibility
- **Color scheme**: Carefully selected for accessibility and aesthetics

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/30-day-clean-living-challenge/issues) page
2. Create a new issue with detailed description
3. Join our community discussions

---

<div align="center">
  <p><strong>Ready to transform your life?</strong></p>
  <p>Start your 30-day clean living journey today! 🌟</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/yourusername/30-day-clean-living-challenge?style=social)](https://github.com/yourusername/30-day-clean-living-challenge/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/yourusername/30-day-clean-living-challenge?style=social)](https://github.com/yourusername/30-day-clean-living-challenge/network/members)
</div>

---

*Made with ❤️ for a healthier lifestyle*