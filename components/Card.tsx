import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Card.module.css'


export default function Card({ pokemon }: any) {
    return (
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={'120'}
                height={'120'}
                alt={pokemon.name}
            />
            <p className={styles.id}>
                # {pokemon.id}
            </p>
            <h3 className={styles.title}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
            <Link
                href={`/pokemon/${pokemon.id}`}
            >
                <a className={styles.btn}>
                    Detalhes
                </a>
            </Link>
        </div>
    )
}  