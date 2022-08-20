import { useState } from "react"
import Firstpage from "./components/First/Firstpage";
import Secondpage from "./components/Second/Secondpage";
import Third from "./components/Third/Third";

function App() {
  const [First, setFirst] = useState(true)
  const onFirst =()=>{
    setFirst(false)
    setSecond(true)
  }
  const [Second, setSecond] = useState(false)
  const [ThirdShow, setThirdShow] = useState(false)
  const onSecond =()=>{
    setSecond(false)
    setThirdShow(true)
  }

    
  return (
    <div>
      {First&&  <Firstpage onClick={onFirst} />}
      {Second&& <Secondpage onClick={onSecond} />}
      {ThirdShow && <Third />}
    </div>
  );
}

export default App;
