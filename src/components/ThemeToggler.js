import './ThemeToggler.css'

export default function ThemeToggler() {
    return (
        <label className="theme-toggler">
            <input type="checkbox" />
            <span className="theme-toggler-slider" />
        </label>
    )
}
