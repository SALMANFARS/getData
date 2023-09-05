
import './App.css'
import { getTodos } from './api/async'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { TTodo } from './reducers/todoSlice'
import  { useEffect} from "react"

function App() {
  
  const dispatch = useAppDispatch()
  const list = useAppSelector<TTodo[]>((state) => state.todo.list)
  
  

  
  useEffect(() => {
    dispatch(getTodos())
  },[dispatch])
  return <>
    {
      list.map((elem: any) => {
        return (
          <div key={elem.id}>
            <h1 className="text-center">{elem.title}</h1>
            <p>{elem.description}</p>
            <p style={{fontFamily: "bold"}}>{elem.price}</p>
            <img src={elem.images[1]} alt="" />
          </div>
        );
    })
  }
  </>
}

export default App
