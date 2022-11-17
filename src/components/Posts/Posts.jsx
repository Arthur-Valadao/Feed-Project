import styles from "./Posts.module.css";

export function Posts() {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/Arthur-Valadao.png" />
          <div className={styles.authorInfo}>
            <strong>Arthur Valadão</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Novembro às 23:07" dateTime="2022-11-16 23:07:15">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
