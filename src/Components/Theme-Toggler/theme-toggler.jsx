import './theme-toggler.css'

export default function ThemeToggler({ theme, setTheme }) {
    return (
        <div className="fixed-theme-toggle">
            <div className={`theme-toggle-btns ${theme}`}>
                <button
                    className={`toggle-btn${theme === 'light' ? ' active' : ''}`}
                    aria-label="Switch to light mode"
                    onClick={() => setTheme('light')}
                >
                    <span role="img" aria-label="Light mode" style={{ fontSize: '1.3em' }}>🌞</span>
                </button>
                <button
                    className={`toggle-btn${theme === 'dark' ? ' active' : ''}`}
                    aria-label="Switch to dark mode"
                    onClick={() => setTheme('dark')}
                >
                    <span role="img" aria-label="Dark mode" style={{ fontSize: '1.3em' }}>🌜</span>
                </button>
            </div>
        </div>
    );
}