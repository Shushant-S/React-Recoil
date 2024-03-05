import { RecoilRoot, useRecoilValueLoadable } from 'recoil'
import './App.css'
import { todoAtomFamily } from './atom'



function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>      
    </>
  )
}


function Todo({id}){

  const todo = useRecoilValueLoadable(todoAtomFamily(id))

  // useRecoilValueLoadable gives you two values
  // {
  //   content = can access inside content
  //   state = it gives us some state such as: loading, hasValue, hasError
  // }

  if(todo.state === "loading"){
    return <div>
      loading...
    </div>
  }
  else
    return (
      <div>
        {todo.contents.title}
        <br />
        {todo.contents.description}
      </div>
    )
}

export default App
