import { useColors } from "./color-hooks";
import { useIntput } from "./useInput";


export default function AddColorForm({ onNewColor = f => f }) {

    const [titleProps, resetTitle] = useIntput('')
    const [colorProps, resetColor] = useIntput('#000000')
    const { addColor } = useColors()

    const submit = e => {
        e.preventDefault()
        addColor(titleProps.value, colorProps.value)
        resetTitle('')
        resetColor('')
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    )
}