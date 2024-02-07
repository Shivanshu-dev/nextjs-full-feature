import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Header from './header';

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			this is a link
			<Link href={'/test'}>test Page</Link>
		</main>
	);
}
