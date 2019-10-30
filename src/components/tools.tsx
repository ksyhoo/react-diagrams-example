import * as React from "react"
import { useStateValue } from "../store/context"
import { ActionModel } from "./../nodes/action/ActionModel"
import { ActionFactory } from "./../nodes/action/ActionFactory"
const Tools = () => {
  const [state, dispatch] = useStateValue()
  const handleClick = () => {
    state.engine.getNodeFactories().registerFactory(new ActionFactory())
    const node1 = new ActionModel()
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
