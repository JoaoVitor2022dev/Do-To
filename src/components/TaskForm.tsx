// styles 
import styles from "./TaskForm.module.css"

interface Props {
    btnText: string
} 

const TaskForm = ({ btnText }: Props) => {
    return (
        <form className={styles.form}>
           <div className={styles.inputContainer}>
              <label htmlFor="title">Titulo:</label> 
              <input type="text" name="title" placeholder="Título da tarefa" />
           </div>    
           <div className={styles.inputContainer}>
              <label htmlFor="difficulty">Dificuldade:</label> 
              <input type="text" name="title" placeholder="Dificuldade da tarefa" />
           </div>    
           <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm;

