import logo from './logo.svg';
import './App.css';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center text-2xl md:text-3xl font-bold mt-6 md:mt-10'>
        🌤️ Weather Dashboard
      </h1>
      <WeatherForm />
    </div>
  );
}

export default App;
