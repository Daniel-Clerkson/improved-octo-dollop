# Onims Agro

A modern agricultural technology platform designed to revolutionize farming practices and agricultural management.

## 🌱 About

Onims Agro is a web-based agricultural platform that provides farmers and agricultural professionals with digital tools and solutions to optimize farming operations, improve crop yields, and make data-driven decisions.

## 🚀 Live Demo

Visit the live application: [https://otims.vercel.app/](https://otims.vercel.app/)

## ✨ Features

- **Digital Farm Management**: Comprehensive tools for managing agricultural operations
- **Crop Monitoring**: Real-time tracking and monitoring of crop health and growth
- **Weather Integration**: Weather data and forecasting for informed farming decisions
- **Resource Management**: Efficient management of agricultural resources and inputs
- **Analytics Dashboard**: Data visualization and insights for farm performance
- **Mobile Responsive**: Optimized for both desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: React.js / Next.js
- **Styling**: CSS3 / Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm/yarn

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/onims-agro.git
cd onims-agro
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
DATABASE_URL=your_database_url
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
onims-agro/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── dashboard/
│   │   └── forms/
│   ├── pages/
│   │   ├── dashboard/
│   │   ├── crops/
│   │   └── analytics/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   └── api/
├── package.json
└── README.md
```

## 🚀 Deployment

The application is automatically deployed to Vercel. To deploy your own version:

1. Fork this repository
2. Connect your fork to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy to Vercel
vercel --prod
```

## 📱 API Integration

The application integrates with various APIs for enhanced functionality:

- **Weather API**: For real-time weather data and forecasting
- **Agricultural Data API**: For crop information and farming best practices
- **Geolocation API**: For location-based services and mapping

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `NEXT_PUBLIC_WEATHER_API_KEY` | Weather service API key | Yes |
| `DATABASE_URL` | Database connection string | Yes |
| `NEXTAUTH_SECRET` | Authentication secret | Yes |

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you encounter any bugs or issues, please create an issue on GitHub with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/device information

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Email: support@onimsagro.com
- Documentation: [docs.onimsagro.com](https://docs.onimsagro.com)

## 🗺️ Roadmap

- [ ] AI-powered crop disease detection
- [ ] IoT sensor integration
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Mobile application
- [ ] Marketplace integration
