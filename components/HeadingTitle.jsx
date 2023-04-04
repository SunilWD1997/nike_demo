import styles from '@/styles/HeadingTitle.module.css';

const HeadingTitle = (props) => {
  return (
    <div className={styles.main}>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default HeadingTitle;