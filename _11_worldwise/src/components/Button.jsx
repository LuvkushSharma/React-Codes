import styles from './Button.module.css'

// ${styles[type] <--- we are sending the CSS class in type

function Button({children , onClick, type}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
