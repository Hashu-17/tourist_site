import PersonIcon from './icons/PersonIcon';
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
  const [vehicleCount, setVehicleCount] = useState('--');
  const [temperature, setTemperature] = useState('--');
  const [humidity, setHumidity] = useState('--');

  // Listen to car count
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'carcount', 'raspberrypi'),
      (docSnap) => {
        if (docSnap.exists()) {
          setVehicleCount(docSnap.data().count);
        } else {
          setVehicleCount('--');
        }
      }
    );
    return () => unsub();
  }, []);

  // Listen to temperature and humidity in LAITLUM/raspberrypi
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'LAITLUM', 'raspberrypi'),
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTemperature(data.temperature ?? '--');
          setHumidity(data.humidity ?? '--');
        } else {
          setTemperature('--');
          setHumidity('--');
        }
      }
    );
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
    { id: 4, title: 'Visitors today', value: '0', description: '', icon: PersonIcon },
  ];

  return (
    <>
      <video
        className="background-video"
        src="/oak.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="container">
        <h1>OAK HALL</h1>
        <div className="card-grid">
          {iotData.map((data) => {
            const Icon = data.icon;
            return (
              <div className="iot-card" key={data.id}>
                <h2>{data.title}</h2>
                <div className="iot-row">
                  <span className="iot-icon"><Icon size={64} /></span>
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
