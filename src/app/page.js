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
			<Link href={'/meals'}>Meals</Link>
			<Link href={'/community'}>community</Link>
			<Link href={'/meals/:slug'}>Meal details</Link>
			<Link href={'/meals/share'}>Meal Share</Link>
		</main>
	);
}
