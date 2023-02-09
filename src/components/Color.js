import StarRating from "./StarRating";
import { useColors } from "./color-hooks";


export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors()
    return (
        <section>
            <h1 style={{ textTransform: 'capitalize' }} >{title}</h1>
            <button onClick={() => removeColor(id)}>
                X
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </section>
    )
}