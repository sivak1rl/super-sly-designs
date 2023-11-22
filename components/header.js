import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';
import superSlyDesigns from '../public/images/super-sly-designs.jpg'

export default function Header({ home }) {
    return (<header className={styles.header}>
		{home ? (
			<>
			<Image
			priority
			src={superSlyDesigns}
			className=""
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
			src={superSlyDesigns}
			className=""
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
    );
}
