import { FaStar } from "react-icons/fa";


export default function StarRating({ style = {}, totalStars = 5, selectedStars = 0, onRate = f => f }) {

    const Star = ({ selected = false, onSelect = f => f }) => (
        <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
    )
    const createArray = length => [...Array(length)]

    return (
        <div style={{ padding: '5px', ...style }}>
            {
                createArray(totalStars).map((n, i) =>
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => onRate(i + 1)}
                    />)
            }
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}
