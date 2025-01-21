# GetSetCode: CodeChef_BU Website

Welcome to the repository for **GetSetCode: CodeChef_BU**, a dynamic and interactive website designed for the university-based CodeChef chapter. This project showcases engaging animations, multimedia integration, and a creative UI/UX experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Overview
The website highlights the CodeChef BU chapter's mission to promote programming and computer science among students. With an aesthetically pleasing interface and smooth animations, the website delivers an immersive browsing experience.

## Features
- **Hero Section**: Animated video transitions and scroll-triggered effects.
- **About Section**: Details about the chapter and its purpose.
- **Features Section**:
  - Team introduction using Bento Box-style cards.
  - Interactive tilt animations.
- **Footer**: Social media links and contact information.
- **Preloader Animation**: Loading animation displayed during asset preparation.

### Key Highlights
- **GSAP Animations**: 
  - Smooth video transitions.
  - Scroll-based animations.
- **Responsive Design**: Ensures compatibility with all screen sizes.
- **Lottie Animations**: Adds interactive flair with pre-made JSON animations.
- **Dynamic Video and Image Handling**: Handles both videos and images dynamically within cards.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/getsetcode-codechef-bu.git
   ```

2. Navigate to the project directory:
   ```bash
   cd getsetcode-codechef-bu
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
- Explore the sections by scrolling.
- Hover over cards for tilt animations.
- Click on mini-video previews to change the video in the Hero section.

## Technologies Used
- **React.js**: Frontend framework.
- **Tailwind CSS**: For styling.
- **GSAP (GreenSock Animation Platform)**: For animations.
- **Lottie-React**: For JSON-based animations.
- **React Icons**: For scalable and customizable icons.

## Folder Structure
```plaintext
src/
├── components/
│   ├── Hero.jsx          # Hero section component
│   ├── About.jsx         # About section component
│   ├── Features.jsx      # Features section component with BentoBox cards
│   ├── Footer.jsx        # Footer with social links
│   ├── Button.jsx        # Reusable button component
├── animation/            # Lottie animation JSON files
├── videos/               # Video assets for Hero and Features sections
├── App.jsx               # Main application file
├── index.css             # Global CSS
```

## Contribution Guidelines
We welcome contributions! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

### Author
**Skund Kumar**  
Multimedia and Design Head, CodeChef_BU

For inquiries, reach out via [Instagram](https://www.instagram.com/codechef_bu).
