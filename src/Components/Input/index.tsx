import styles from './styles.module.scss'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FormEvent } from 'react';

interface IInput {
  value: string;
  setValue: (data: string) => void;
  fetchData: (event: FormEvent) => Promise<void>;
}

export function Input({ value, setValue, fetchData }: IInput) {
  return (
    <form className={styles.container} onSubmit={fetchData}>
      <input placeholder='Search for any IP address or domain' type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">
        <MdOutlineKeyboardArrowRight color="#fff" size="26" />
      </button>
    </form>
  );
}
