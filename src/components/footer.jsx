import styles from '../styles/Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer className={styles.footer}>{`Copyright © Mucha Naibei ${year}`}</footer>
    )
}

export default Footer