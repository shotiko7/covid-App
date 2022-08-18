import { useState } from "react"
import Firstpage from "./components/First/Firstpage";
import Secondpage from "./components/Second/Secondpage";

function App() {
  const [First, setFirst] = useState(true)
  const onFirst =()=>{
    setFirst(false)
    setSecond(true)
  }
  const [Second, setSecond] = useState(false)
  const onSecond =()=>{
    setSecond(true)
  }
  return (
    <div>
      {First&&<Firstpage onClick={onFirst} />}
      {Second&&<Secondpage />}
    </div>
  );
}

export default App;
