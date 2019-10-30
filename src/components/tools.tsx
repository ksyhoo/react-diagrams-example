import * as React from "react"
import { useStateValue } from "../store/context"
import { TSCustomNodeModel } from "../custom-node-ts/TSCustomNodeModel"
import { TSCustomNodeFactory } from "../custom-node-ts/TSCustomNodeFactory"
const Tools = () => {
  const [state, dispatch] = useStateValue()
  const handleClick = () => {
    state.engine.getNodeFactories().registerFactory(new TSCustomNodeFactory())
    const node1 = new TSCustomNodeModel({ color: "rgb(192,255,0)" })
    node1.setPosition(50, 50)
    state.model.addAll(node1)
    state.engine.setModel(state.model)
  }
  return (
    <div style={{ height: "50px", display: "flex", flex: "1 100%" }}>
      <button style={{ width: "100%" }} onClick={handleClick}>
        ADD ELEM
      </button>
    </div>
  )
}

export default Tools
