import { useRouter } from 'next/router';
import styles from '../styles/login.module.css'
export default function Login() {
    const router = useRouter();
    return (
        <div>
            <div className={styles.container}>
                <h2>LOGIN</h2>
                <form>
                    <div>
                        <input className={styles.input} type="text" id="login" name="login" placeholder="login" />
                        <input className={styles.input} type="text" id="password" name="login" placeholder="password" />
                    </div>
                    <div>
                        <button type="button" class={styles.button} onClick={() => router.push('/')}>Log In</button>
                    </div>

                </form>
            </div>
        </div>
    )
}