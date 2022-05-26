import { IIpData } from '../../page/Home';
import styles from './styles.module.scss';

interface ILocationDetail {
  dataIp: Omit<IIpData, 'latitude' | 'longitude'>
}


export function LocationDetail({ dataIp }: ILocationDetail) {
  return (
    <main className={styles.container}>
      <div>
        <span>IP Address</span>
        <strong>{dataIp.ip_address}</strong>
      </div>
      <div>
        <span>Location</span>
        <strong>{dataIp.location}</strong>
      </div>
      <div>
        <span>Timezone</span>
        <strong>{dataIp.timezone && `utc${dataIp.timezone}`}</strong>
      </div>
      <div>
        <span>Isp</span>
        <strong>{dataIp.isp}</strong>
      </div>
    </main>
  )
}