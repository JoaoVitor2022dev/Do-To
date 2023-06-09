// styles 
import styles from "./TaskForm.module.css"

// hooks 
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Interface 
import { ITask } from '../interfaces/Task';

interface Props {
    btnText: string
} 

const TaskForm = ({ btnText }: Props) => {
 
    const [id, setId] = useState<number>(0); 
    const [title, setTitle] = useState<String>(""); 
    const [difficulty, setDifficulty] = useState<number>(0);


    const handleSubmit = () => {
       
    } 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "title") {
         setTitle(e.target.value) 
      } else {
         setDifficulty(parseInt(e.target.value));
      }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
           <div className={styles.inputContainer}>
              <label htmlFor="title">Titulo:</label> 
              <input type="text" 
              name="title" 
              placeholder="Título da tarefa" 
              onChange={handleChange}
              />
           </div>    
           <div className={styles.inputContainer}>
              <label htmlFor="difficulty">Dificuldade:</label> 
              <input type="text" 
              name="title" 
              placeholder="Dificuldade da tarefa"
              onChange={handleChange}
              />
           </div>    
           <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm;

