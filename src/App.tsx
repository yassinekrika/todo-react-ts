import { useState } from "react"
import Container from "./components/Container"
import Input from "./components/Input"
import Summary from "./components/Summary/Summary"
import Tasks from "./components/Tasks/Tasks"

const App = () => {
  return (
    <div className='flex justify-center m5'>
      <div className="felx flex-col items-center">
        <div className="sm:w-[640px] border shadown p-10 flex flex-col gap-10">
          <Container title={'Summary'}>
            <Summary />
          </Container>
          <Container>
            <Input />
          </Container>
          <Container title={'Tasks'}>
            <Tasks />
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App