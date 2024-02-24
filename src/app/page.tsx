import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.floating}>
                <div className={styles.envelope}>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className="text-3xl">Hey there!</h1>
                            <p>Thank you very much for trusting me</p>
                            <p>Let&apos;s keep growing together.</p>
                            <p className="text-right">Lean</p>
                        </div>
                    </div>
                </div>
                <div className={styles.front}></div>
            </div>
        </div>
    );
}
