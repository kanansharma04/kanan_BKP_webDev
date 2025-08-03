# Hope Foundation NGO Website

A modern, responsive website for a non-profit organization built with React, Bootstrap, and Vite. The website features a clean design with mobile-first responsiveness, accessibility features, and a comprehensive volunteer registration system.

## 🌟 Features

### Core Features
- **🏠 Home Page**: Hero section with compelling call-to-action and mission statement
- **👥 About Us**: Organization history, goals, impact statistics, and team information
- **✍️ Volunteer Form**: Complete registration form with validation and confirmation
- **🔗 Responsive Navigation**: Sticky navbar with mobile hamburger menu
- **📱 Mobile Responsive**: Optimized for desktop, tablet, and mobile devices

### Bonus Features
- **🌙 Dark Mode Toggle**: User preference with localStorage persistence
- **✨ Smooth Scrolling**: Seamless navigation between sections
- **🎨 Animations**: Engaging hover effects and scroll animations
- **♿ Accessibility**: ARIA labels, focus indicators, and semantic HTML
- **📧 Footer**: Contact information and social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hope-foundation-website
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
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Bootstrap 5**: Responsive CSS framework
- **React Bootstrap**: React components for Bootstrap
- **React Icons**: Beautiful icon library
- **CSS3**: Custom animations and styling

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile (320px+)**: Optimized layout with stacked content
- **Tablet (768px+)**: Enhanced layouts with improved spacing
- **Desktop (1024px+)**: Full-featured layout with advanced animations

## 🎨 Design Features

### Color Scheme
- Primary: Bootstrap Blue (#007bff)
- Secondary: Modern grays and whites
- Accent: Warm red (#dc3545) for call-to-action elements

### Typography
- Font Family: Segoe UI system font stack
- Responsive font sizes
- Clear hierarchy with proper headings

### Animations
- Fade-in effects on scroll
- Smooth hover transitions
- Bounce and pulse animations
- Transform effects on cards

## 📋 Form Validation

The volunteer form includes comprehensive validation:

- **Required Fields**: Name, email, phone, interests, availability
- **Email Validation**: Proper email format checking
- **Phone Validation**: International phone number support
- **Real-time Feedback**: Immediate validation messages
- **Success Confirmation**: Thank you message on submission

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Screen reader optimization
- Color contrast compliance

## 🌙 Dark Mode

Toggle between light and dark themes with:
- System preference detection
- Manual toggle button
- localStorage persistence
- Smooth theme transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

The website can be deployed to any static hosting service:

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📝 Customization

### Updating Content
- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Information**: Modify `src/components/About.jsx`
- **Contact Details**: Update `src/components/Footer.jsx`
- **Navigation**: Customize `src/components/Navigation.jsx`

### Styling
- **Global Styles**: `src/index.css`
- **Component Styles**: `src/App.css`
- **Bootstrap Variables**: Create `src/custom.scss`

### Images
Replace placeholder images with your organization's photos:
- Hero background: Update URL in `src/components/Hero.jsx`
- About section: Update URLs in `src/components/About.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please contact:
- Email: support@hopefoundation.org
- Website: [Hope Foundation](https://hopefoundation.org)

## 🙏 Acknowledgments

- **Unsplash**: Hero and about section images
- **React Icons**: Beautiful icon library
- **Bootstrap Team**: Responsive framework
- **Vite Team**: Fast build tool

---

Built with ❤️ for making a difference in communities worldwide.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
