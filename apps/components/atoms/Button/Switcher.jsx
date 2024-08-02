import useDarkSide from "apps/hooks/useDarkSide"
import { Fragment, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState(false)
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <Fragment>
            <DarkModeSwitch className={colorTheme === "dark" ? "bg-indigo-600 rounded-full" : "dark:text-slate-100"} checked={darkSide} onChange={toggleDarkMode} size={32} />
        </Fragment>
    )
}

export default Switcher

