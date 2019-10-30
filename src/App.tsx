import * as React from "react"
import "./main.css"
import Tools from "./components/tools"
import { StateProvider, useStateValue } from "./store/context"
import { EngineProvider } from "./helpers/engineProvider"
import createEngine, { DiagramModel, DiagramModelGenerics, DiagramEngine } from "@projectstorm/react-diagrams"
import { reducer } from "./store/reducers"

export const App = () => {
  const initialState: { model: DiagramModel<DiagramModelGenerics>; engine: DiagramEngine; nodes: [] } = {
    nodes: [],
    engine: createEngine(),
    model: new DiagramModel()
  }

  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Tools />
        <EngineProvider />
      </StateProvider>
    </>
  )
}
