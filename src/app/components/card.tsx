import styles from './styles.module.css';

interface Props {
    hi?: string;
    paragraphs: string[];
}

export default function Card({ hi = 'Hey there!', paragraphs }: Props) {
    return (
        <main className={styles.container}>
            <div className={styles.floating}>
                <div className={styles.envelope}>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className="text-3xl">{hi}</h1>
                            {paragraphs.map((content, index) => <p key={index}>{content}</p>)}
                            <p className="text-right">Lean</p>
                        </div>
                    </div>
                </div>
                <div className={styles.front}></div>
            </div>
        </main>
    );
}
