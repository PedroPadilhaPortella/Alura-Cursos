import Image from "next/image";

import styles from "./Avatar.module.css";

const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image src={imageSrc} width={32} height={32} alt={`${name} avatar`} />
      </li>
      <li>@{name}</li>
    </ul>
  );
};

export default Avatar;
