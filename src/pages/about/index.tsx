import Image from 'next/image'
import styles from '@/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.MainContainer}>
            <h1>Sobre o projeto</h1>
            <p>Esse projeto foi desenvolvido com o foco na prática e apendizado no desenvolvimento WEB com NextJS.</p>
            <Image
                src={'/images/charizard.png'}
                width={'300'}
                height={'300'}
                alt={'Charizard'}
            />
        </div>
    )
}