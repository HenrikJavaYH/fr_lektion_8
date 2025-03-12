import type { Product } from "~/types/Product";

export function ProductCard(props: Product) {
    return <div>
        <img src={props.image} alt="image" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.id}</p>

        <footer>
            <p>{props.category}</p>
            <p>{props.rating.rate}</p>
        </footer>
    </div>
}