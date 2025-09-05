# Global Relation Provisional Fund - Financial Dashboard

A beautiful, responsive financial dashboard for Global Relation Provisional Fund built with React, TypeScript, and Tailwind CSS. Features English and Nepali localization.

## Features

- 📊 **Financial Overview**: Display total capital, profits, expenses, and savings for GRPF
- 🌍 **Bilingual Support**: Switch between English and Nepali languages
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

## Financial Data Displayed

1. **Total Capital as of Now**: ₹7,196,529
2. **Profit for Distribution (Gross)**: ₹604,608
3. **Expenses**: ₹26,000 (Salary of Utsav 12 months @ ₹2000)
4. **Profit for Distribution (Net)**: ₹578,608
5. **Net Capital**: ₹6,617,921
6. **Per Person Saving as of 31st Ashad 82**: ₹162,005

## Technologies Used

- **React 19** with TypeScript
- **Vite** for build tool and development server
- **Tailwind CSS** for styling
- **react-i18next** for internationalization
- **Lucide React** for icons
- **GitHub Pages** for deployment

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/family-finance.git
   cd family-finance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

### Deployment to GitHub Pages

1. Update the `base` property in `vite.config.ts` to match your repository name
2. Push to the main branch
3. The GitHub Action will automatically build and deploy to GitHub Pages

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard component
│   ├── FinanceCard.tsx  # Individual finance card component
│   └── LanguageSwitcher.tsx # Language toggle component
├── i18n/               # Internationalization setup
├── locales/            # Translation files
│   ├── en.json         # English translations
│   └── ne.json         # Nepali translations
├── types/              # TypeScript type definitions
└── index.css           # Global styles
```

## Customization

### Updating Financial Data

Edit the `financeData` object in `src/components/Dashboard.tsx`:

```typescript
const financeData: FinanceData = {
  totalCapital: 7196529,
  grossProfit: 604608,
  expenses: 26000,
  netProfit: 578608,
  netCapital: 6617921,
  perPersonSaving: 162005,
  salaryAmount: 2000,
  salaryMonths: 12
};
```

### Adding New Languages

1. Create a new translation file in `src/locales/`
2. Add the language to `src/i18n/index.ts`
3. Update the language switcher component

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.