<!-- <a href="https://www.linkedin.com/in/rpsohagwdd/" target="_blank"><img width="100%" height="auto" src="https://i.ibb.co.com/FQ69tD4/Dpy-YOs-OZe2.png" height="175px"/></a>
<img src="/public/weather-client.jpg" >
 -->
<a href='https://postimg.cc/bZ6d5JZ4' target='_blank'><img src='https://i.postimg.cc/bZ6d5JZ4/weather-clinet.jpg' border='0' alt='weather-clinet'/></a>

# weather-client
## Summary
weather-client is a React application that lets users search for and view current weather
information by city. It uses the OpenWeatherMap API for real-time data and Axios for HTTP
requests. Bootstrapped with Create React App, it features a responsive design, error
handling, and environment-based configuration.
## Features
- **City Search:** Type any city name to fetch current weather data (OpenWeatherMap)
- **Real-Time Conditions:** Displays temperature, humidity, wind speed, and descriptive
weather icons from OpenWeatherMap’s icon set
- **Responsive UI:** Adapts to desktop and mobile using modern CSS techniques
(FreeCodeCamp)
- **Error Handling:** Alerts users on invalid cities or network failures using Axios
interceptors (Axios)
## Tech Stack
- **React** (bootstrapped via Create React App)
- **Create React App** for zero-config builds
- **Axios** for promise-based HTTP requests
- **OpenWeatherMap API** for weather data
- **CSS3 & HTML5** for layout and styling (FreeCodeCamp)
## Installation
```bash
git clone https://github.com/iftykhar/weather-client.git
cd weather-client
npm install
```
## Configuration
Create a `.env` file in the project root with your OpenWeatherMap API key:
```bash
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```
Create React App automatically loads any variable prefixed with `REACT_APP_` into
`process.env`.
## Available Scripts
- `npm start`
Starts the development server at http://localhost:3000 with live reloading (Create React
App)
- `npm test`
Launches the test runner in watch mode. Learn more in the Create React App docs (GitHub)
- `npm run build`
Bundles the app for production into the `build` folder with optimized performance
(Create React App)
- `npm run eject`
**Note:** this is a one-way operation. Ejects all configs so you can fully customize
build setup (Create React App)
## Folder Structure
```

weather-client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── services/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

```
## Contributing
1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m "Add YourFeature"
```
4. Push to your fork and open a Pull Request
```bash
git push origin main
git pull main
```

## 🤝 Contributing

Contributions are welcome! If you'd like to:

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

Please ensure any pull request describes your changes and why they're needed.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
