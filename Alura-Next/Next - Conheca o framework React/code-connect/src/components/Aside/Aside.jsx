import Image from 'next/image';
import Link from 'next/link';

import styles from './Aside.module.css';
import logo from './logo.png';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href='/' className={styles.link}>
        <Image src={logo} alt="Logo da Code Connect" />
      </Link>
    </aside>
  );
};

export default Aside;
