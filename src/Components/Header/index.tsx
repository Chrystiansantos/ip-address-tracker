import { FormEvent } from 'react';
import { Id } from 'react-toastify';
import { Input } from '../Input'
import styles from './styles.module.scss'

interface IHeader {
  value: string;
  setValue: (data: string) => void;
  fetchData: (event: FormEvent) => Promise<void | Id>;
}

export function Header({ fetchData, setValue, value }: IHeader) {
  return (
    <div className={styles.container}>
      <h1>IP Address Tracker</h1>
      <Input value={value} setValue={setValue} fetchData={fetchData} />
    </div>
  )
}