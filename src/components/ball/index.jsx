import styles from "./style.module.css"
import React, { useState } from "react";

const answers = [
  "Да",
  "Кажется сработает",
  "Не в этот раз",
  "Разумеется",
  "Нет",
  "Надо подождать",
  "Скорее всего",
  "Плохая идея",
  "Однозначно",
  "Перепроверь и действуй",
  "Встряхни шар ещё раз",
  "Рискованно",
  "Измени вопрос",
  "Действуй",
  "Все не так просто",
  "Возможно",
  "Естественно"
];

const Ball = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return  <div className={styles.body}>
    
    <form onSubmit={getAnswer}>
      <div>
        <label className={styles.name}>Напишите вопрос</label>
        <input 
          className={styles.input}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className={styles.circle}>
        <p className={styles.p}>{answer}</p>
      </div>
      <button className={styles.btn} type="submit">Получить ответ</button>
    </form>
    <div className={styles.main}></div>
  </div>
}

export default Ball;