import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
		<Head>
		<title>{siteTitle}</title>
		</Head>
		<section className={utilStyles.headingMd}>
		<p>Welcome to Super Sly Designs by MJ</p>
		<p>
		This website is currently under construction. Check back soon for new content!
		</p>
		</section>
		</Layout>
	);
}
