import styles from './Button.module.css';

function Button() {
  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  return (
    <button className={styles}>Click me!</button>
  );
}

export default Button;