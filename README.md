# 💪 AI Fitness Coach

AI-powered fitness coach that generates personalized workout plans, custom diet recommendations, and daily motivational quotes based on your goals, fitness level, and preferences. Built with Next.js and Claude AI.

## ✨ Features

- **Personalized Workout Plans** - Custom exercise routines tailored to your fitness level, goals, and workout location (home, gym, or outdoor)
- **Custom Diet Recommendations** - Nutrition plans based on your dietary preferences (veg, non-veg, vegan, keto) and fitness goals
- **Daily Motivation Quotes** - AI-generated motivational quotes to keep you inspired
- **Comprehensive User Profiling** - Considers age, gender, height, weight, stress levels, and medical history
- **Goal-Oriented Plans** - Supports multiple fitness goals: weight loss, muscle gain, endurance, and flexibility
- **Adaptive Recommendations** - Plans adjust based on your fitness level: beginner, intermediate, or advanced

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/vigneshgbe/ai-fitness-coach.git
cd ai-fitness-coach
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Project Structure

```
ai-fitness-coach/
├── app/
│   ├── page.tsx          # Home/Form page
│   ├── plan/             # Generated plan page
│   └── layout.tsx        # Root layout
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── UserForm.tsx      # Main form component
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
└── styles/              # Global styles
```

## 📝 Usage

1. **Fill Out Your Profile**
   - Enter personal information (name, age, gender)
   - Add physical metrics (height, weight)
   - Select fitness goals and current level
   - Choose workout location preference
   - Specify dietary preferences
   - Optionally add stress level and medical history

2. **Generate Your Plan**
   - Click "Generate My Plan 💪"
   - AI processes your information
   - Receive personalized workout and diet plan

3. **Follow Your Plan**
   - Review your custom workout routine
   - Follow the nutrition recommendations
   - Get motivated with daily quotes

## 🎯 Fitness Goals Supported

- **Weight Loss** - Cardio-focused workouts with calorie deficit nutrition
- **Muscle Gain** - Strength training with high-protein diet plans
- **Endurance** - Stamina-building exercises with balanced nutrition
- **Flexibility** - Stretching and mobility workouts with recovery-focused diet

## 🍽️ Dietary Preferences

- Vegetarian
- Non-Vegetarian
- Vegan
- Keto

## 🏋️ Workout Locations

- Home (bodyweight and minimal equipment)
- Gym (full equipment access)
- Outdoor (running, parks, outdoor activities)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Vignesh G**

- Portfolio: [vigneshgbe.neocities.org](https://vigneshgbe.neocities.org/)
- LinkedIn: [@vigneshgbe](https://www.linkedin.com/in/vigneshgbe)
- GitHub: [@vigneshgbe](https://github.com/vigneshgbe)

## ⚠️ Disclaimer

This AI fitness coach provides general fitness and nutrition recommendations. Always consult with healthcare professionals before starting any new fitness or diet program, especially if you have existing medical conditions.

---

Made with ❤️ for fitness enthusiasts
