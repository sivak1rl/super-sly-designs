import styles from './footer.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={utilStyles.hasTextCentered}>
                <p>
                    <Link href="/">
                        Super Sly Designs
                    </Link> by MJ LLC.
                </p>
            </div>
        </footer>
    )
}