import Image from "next/image"
import styles from "@/styles/Pokemon.module.css"

export const getStaticPaths = async () => {

    const maxPokemons = 251

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json()

    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context: any) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data }
    }

}

export default function Pokemon({ pokemon }: any) {
    return (
        <div className={styles.pokemon_container}>
            <h1 className={`${styles.title} ${styles['type_' + pokemon.types[0].type.name]}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} # {pokemon.id}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={'200'}
                height={'200'}
                alt={pokemon.name}
            />
            <div className={styles.types_container}>
                <h3>
                    Tipo:
                </h3>
                <p>
                    {pokemon.types.map((types: any, index: number) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + types.type.name]}`}>{types.type.name}</span>
                    ))}
                </p>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h3>
                        Altura:
                    </h3>
                    <p>
                        {pokemon.height * 10} cm
                    </p>
                </div>
                <div className={styles.data_weight}>
                    <h3>
                        Peso:
                    </h3>
                    <p>
                        {pokemon.weight / 10} kg
                    </p>
                </div>
            </div>
        </div>
    )
}