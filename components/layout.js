import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name ='Super Sly Designs by MJ';
export const siteTitle = 'Super Sly Designs by MJ';

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
		<header className={styles.header}>
		{home ? (
			<>
			<Image
			priority
			src="/images/profile.png"
			className={utilStyles.borderCircle}
			height={108}
			width={108}
			alt=""
			/>
			<h1 className={utilStyles.heading2Xl}>{name}</h1>
			</>
		) : (
			<>
			<Image
			priority
			src="/images/profile.png"
			className={utilStyles.borderCircle}
			height={108}
			width={108}
			alt=""
			/>
			<h2 className={utilStyles.headingLg}>
				<Link href="/" className={utilStyles.colorInherit}>
					{name}
				</Link>
			</h2>
			
			</>
		)
		}
		</header>
		<main>{children}</main>
		{!home && (
			<div className={styles.backToHome}>
				<Link href="/">Back to home</Link>
			</div>
		)}
		</div>
	);
}
