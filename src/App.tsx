
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss'

import { FormEvent, useState } from 'react';
import { ToastContainer, toast, Id } from 'react-toastify';

import { Header } from './Components/Header';
import { LocationDetail } from './Components/LocationDetails';
import { Map } from './Components/Map';

export interface IIpData {
  ip_address: string;
  location: string;
  timezone: string;
  isp: string;
  latitude: number;
  longitude: number;
  markerVisible: boolean;
}

export function App() {

  const [ip, setIp] = useState('');
  const [dataIp, setDataIp] = useState<IIpData>({
    ip_address: '',
    location: '',
    timezone: '',
    isp: '',
    latitude: -19.481657,
    longitude: -46.552095
  } as IIpData);

  const fecthData = async (event: FormEvent): Promise<void | Id> => {
    event.preventDefault();
    try {
      const data = await (await fetch(`https://ipapi.co/${ip}/json`)).json()

      if (data.error) {
        return toast.error('Ocorreu um erro, tente novamente mais tarde', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }

      setDataIp({
        ip_address: data.ip,
        location: `${data.city}, ${data.region_code}`,
        timezone: data.utc_offset,
        isp: data.org,
        latitude: data.latitude,
        longitude: data.longitude,
        markerVisible: true,
      })
      setIp('');
    } catch (error) {
      toast.error('Ocorreu um erro, tente novamente mais tarde', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }

  return (
    <div className={styles.container}>
      <Header value={ip} setValue={setIp} fetchData={fecthData} />
      <LocationDetail dataIp={dataIp} />
      <Map
        position={[dataIp.latitude, dataIp.longitude]}
        visibleMarker={dataIp.markerVisible}
      />
      <ToastContainer />
    </div>
  )
}