import Link from 'next/link';
import styles from './layout.module.css'
function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/login'>
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}
export default Layout;