import { useState } from 'react'
import styles from './RatingCard.module.css'

const RatingCard = () => {
  const [rating, setRating] = useState<number>()
  const [isSubmited, setIsSubmited] = useState<boolean>(false)

  function handleSetRating(rating: number) {
    setRating(rating)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmited(true)
  }

  if (isSubmited) {
    return (
      <div className={styles.card} style={{alignItems: 'center'}}>
        <div>
          <img src="/illustration-thank-you.svg" alt="celular" />
        </div>
      <div className={styles.pill}>
        <p>You selected {rating} out of 5</p>
      </div>
      <div  className={styles.textCenter}>
      <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.description}>We apprecieted you taking the time to give a rating. if you need more support, don't hesitate to get in touch!</p>
      </div>
     
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div>
        <img className={styles.star} src="/icon-star.svg" alt="estrela" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>Please let me us know we did with your support request.
          all feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className={styles.buttonGroup}>
        {[1, 2, 3, 4, 5].map((rating,index) => (
          <button key={index} type='button' onClick={() => handleSetRating(rating)} className={styles.ratingButton}>{rating}</button>
        ))}
      </div>
      <button type='submit' className={styles.submit}>Submit</button>
    </form>
  )
}

export default RatingCard