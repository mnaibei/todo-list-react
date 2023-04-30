import styles from '../styles/header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>ToDos</h1>
      <p>Add items to your list</p>
    </header>
  );
};

export default Header;
