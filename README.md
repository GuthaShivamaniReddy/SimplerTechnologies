# Frontend Tasks - React Demo

A modern React application showcasing three main frontend components built with Vite, featuring responsive design, animations, and best practices.

## 🚀 Features

### 1. Sign-Up Form

- **Modern Design**: Clean, gradient-based styling with smooth animations
- **Form Validation**: Real-time validation for all fields
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **User Feedback**: Success messages and error handling
- **Accessibility**: Proper labels, focus states, and keyboard navigation

### 2. Navigation Bar

- **Responsive Design**: Adapts to all screen sizes
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS transitions and hover effects
- **Fixed Position**: Stays at the top while scrolling
- **Modern Styling**: Glassmorphism effect with backdrop blur

### 3. UserCard Component

- **Dynamic Avatars**: Auto-generated initials with consistent colors
- **Interactive Elements**: Hover effects and action buttons
- **Status Indicators**: Online status with animated pulse
- **Responsive Layout**: Adapts to different screen sizes
- **Props-based**: Accepts name and email as props

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with animations and responsive design
- **ES6+** - Modern JavaScript features

## 📁 Project Structure

```
frontend-tasks/
├── src/
│   ├── components/
│   │   ├── SignUpForm.jsx          # Task 1: Sign-up form component
│   │   ├── SignUpForm.css          # Sign-up form styles
│   │   ├── Navigation.jsx          # Task 2: Navigation bar component
│   │   ├── Navigation.css          # Navigation styles
│   │   ├── UserCard.jsx            # Task 3: User card component
│   │   └── UserCard.css            # User card styles
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Main app styles
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd frontend-tasks
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Modern UI/UX

- **Gradient Backgrounds**: Beautiful color transitions
- **Card-based Layout**: Clean, organized content presentation
- **Smooth Animations**: CSS transitions and keyframe animations
- **Hover Effects**: Interactive feedback on user actions
- **Glassmorphism**: Modern blur effects and transparency

### Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Breakpoint System**: Consistent responsive breakpoints
- **Touch-Friendly**: Optimized for touch interactions

### Accessibility

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Proper ARIA labels and descriptions

## 🔧 Customization

### Adding New Users

To add more users to the UserCard demo, modify the `sampleUsers` array in `App.jsx`:

```javascript
const sampleUsers = [
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Smith", email: "jane.smith@example.com" },
  // Add more users here
];
```

### Styling Customization

All components use CSS custom properties and modern CSS features. You can easily customize colors, spacing, and animations by modifying the respective CSS files.

### Form Validation

The sign-up form includes comprehensive validation. You can extend the validation rules in `SignUpForm.jsx` by modifying the `validateForm` function.

## 🌟 Key Features Demonstrated

1. **React Hooks**: useState for state management
2. **Component Composition**: Reusable, modular components
3. **Props System**: Data passing between components
4. **Event Handling**: Form submissions and user interactions
5. **Conditional Rendering**: Dynamic content based on state
6. **CSS-in-JS**: Dynamic styling with JavaScript
7. **Responsive Design**: Mobile-first approach
8. **Modern CSS**: Grid, Flexbox, animations, and gradients

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
---

**Built with ❤️ using React and Vite**
