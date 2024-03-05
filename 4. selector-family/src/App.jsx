import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { todoAtomFamily } from './atom'


function App() {

  return <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
}

function Todo({id}){

  const todo = useRecoilValue(todoAtomFamily(id))

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App;