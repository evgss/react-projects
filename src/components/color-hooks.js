import {createContext, useContext, useState } from 'react'
import colorData from './color-data.json'
import { v4 } from 'uuid'


const ColorContext = createContext()
export const useColors = () => useContext(ColorContext)

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData)

    const removeColor = id => {
        const newColors = colors.filter(i => i.id !== id)
        setColors(newColors)
    }
    const rateColor = (id, rating) => {
        const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
        setColors(newColors)
    }

    const addColor = (title, color) => {
        const newColors = [...colors, { id: v4(), rating: 0, title, color }]
        setColors(newColors)
    }


    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    )
}

