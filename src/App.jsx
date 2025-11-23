import RainIcon from './icons/RainIcon';
import CarIcon from './icons/CarIcon';
import TemperatureIcon from './icons/TemperatureIcon';
import HumidityIcon from './icons/HumidityIcon';
import LightIcon from './icons/LightIcon';
import CO2Icon from './icons/CO2Icon';

import { useEffect, useState } from 'react';
import { db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import './App.css';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = (() => {
    const weekday = dateTime.toLocaleDateString(undefined, { weekday: 'long' });
    const rest = dateTime.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
    });
    return `${weekday}, ${rest}`;
  })();

  let formattedTime = dateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  formattedTime = formattedTime.replace(/am|pm/i, (match) => match.toUpperCase());

  const [vehicleCount, setVehicleCount] = useState('--');
  const [temperature, setTemperature] = useState('--');
  const [humidity, setHumidity] = useState('--');
  const [rainCondition, setRainCondition] = useState('--');

  // Rain condition
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'LAITLUM', 'rainsensor'), (docSnap) => {
      if (docSnap.exists()) {
        let cond = docSnap.data().condition;
        if (cond === 'Intermediate') cond = 'Dry';
        setRainCondition(cond);
      } else {
        setRainCondition('--');
      }
    });
    return () => unsub();
  }, []);

  // Vehicle count
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'carcount', 'raspberrypi'), (docSnap) => {
      if (docSnap.exists()) {
        setVehicleCount(docSnap.data().count);
      } else {
        setVehicleCount('--');
      }
    });
    return () => unsub();
  }, []);

  // Temperature & humidity
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'LAITLUM', 'raspberrypi'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTemperature(data.temperature ?? '--');
        setHumidity(data.humidity ?? '--');
      } else {
        setTemperature('--');
        setHumidity('--');
      }
    });
    return () => unsub();
  }, []);

  const formattedTemp =
    temperature !== '--' && temperature !== undefined && temperature !== null
      ? `${temperature}°C`
      : '--';

  const formattedHumidity =
    humidity !== '--' && humidity !== undefined && humidity !== null
      ? `${Math.round(Number(humidity))}%`
      : '--';

  const iotData = [
    { id: 1, title: 'Temperature', value: formattedTemp, description: '', icon: TemperatureIcon },
    { id: 2, title: 'Humidity', value: formattedHumidity, description: '', icon: HumidityIcon },
    { id: 3, title: 'Vehicles', value: vehicleCount, description: '', icon: CarIcon },
    { id: 4, title: 'Rain', value: rainCondition, description: '', icon: RainIcon },
  ];

  return (
    <>
      <div className="header-row">
        <h1 className="oak-title">OAK HALL</h1>

        {/* Date + time in a card on the top-right */}
        <div className="datetime-card">
          <div className="datetime">
            <div>{formattedDate}</div>
            <div className="time-bold">{formattedTime}</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-grid">
          {iotData.map((data) => {
            const Icon = data.icon;
            return (
              <div className="iot-card" key={data.id}>
                <h2>{data.title}</h2>
                <div className="iot-row">
                  <span className="iot-icon">
                    <Icon size={64} />
                  </span>
                  <div className="iot-data-block">
                    <p className="iot-value">{data.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
