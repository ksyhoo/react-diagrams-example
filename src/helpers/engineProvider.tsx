import { TSCustomNodeFactory } from "../custom-node-ts/TSCustomNodeFactory"
import { TSCustomNodeModel } from "../custom-node-ts/TSCustomNodeModel"
import createEngine, { DefaultLinkModel, DiagramModel, DiagramEngine } from "@projectstorm/react-diagrams"
import { CustomGraphModel } from "../custom-graph/CustomGraphModel"
import { CustomGraphFactory } from "../custom-graph/CustomGraphFactory"
import { useStateValue } from "../store/context"
import * as React from "react"
import BodyWidget from "./BodyWidget"
import { useEffect } from "react"
import { ActionFactory } from "./../nodes/action/ActionFactory"
import { ActionModel } from "./../nodes/action/ActionModel"
import { QuestionModel } from "./../nodes/question/QuestionModel"
import { QuestionFactory } from "./../nodes/question/QuestionFactory"
import { ActionLinkFactory } from "./../nodes/action/ActionPortModel"

export const EngineProvider = () => {
  const [state, dispatch] = useStateValue()

  const { engine, model } = state

  engine.getNodeFactories().registerFactory(new ActionFactory())
  engine.getNodeFactories().registerFactory(new QuestionFactory())
  engine.getLinkFactories().registerFactory(new ActionLinkFactory())

  const node4 = new ActionModel()
  node4.setPosition(250, 108)
  const node5 = new QuestionModel()
  node5.setPosition(250, 100)

  model.addAll(node5, node4)
  engine.setModel(model)

  return <BodyWidget engine={engine}></BodyWidget>
}
