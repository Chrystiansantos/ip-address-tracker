
import styles from './styles.module.scss'
import { Header } from "../Components/Header";
import { LocationDetail } from '../Components/LocationDetails';
import { Map } from '../Components/Map';
import { FormEvent, useState } from 'react';

export interface IIpData {
  ip_address: string;
  location: string;
  timezone: string;
  isp: string;
  latitude: number;
  longitude: number;
  markerVisible: boolean;
}

export function Home() {
  const [ip, setIp] = useState('');
  const [dataIp, setDataIp] = useState<IIpData>({
    ip_address: '',
    location: '',
    timezone: '',
    isp: '',
    latitude: -19.481657,
    longitude: -46.552095
  } as IIpData);

  const fecthData = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await (await fetch(`https://ipapi.co/${ip}/json`)).json()

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
      console.log(error)
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
    </div>
  )
}
