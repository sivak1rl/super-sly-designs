import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';

const name ='Super Sly Designs by MJ';
export const siteTitle = 'Super Sly Designs by MJ';
// Indicate the website is made by Rich Sivak
export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
		<Head>
		<link rel="icon" href="/favicon.ico" />
		<meta name="description"
		content="Super Sly Designs by MJ LLC."
		/>
		<meta property="og:image"
		content={`https://og-image.vercel.app/${encodeURI(
			siteTitle,
		)}.png?theme=light&md=9&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fuplaod%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		/>
		<meta name="og:title" content={siteTitle} />
		<meta name="twitter:card" content="summary_large_image" />
		</Head>
		<Header></Header>
		<main className={styles.main}>{children}</main>
		{!home && (
			<div className={styles.backToHome}>
				<Link href="/">Back to home</Link>
			</div>
		)}
		<Footer></Footer>
		</div>
	);
}
