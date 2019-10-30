import { TSCustomNodeFactory } from "../custom-node-ts/TSCustomNodeFactory"
import { TSCustomNodeModel } from "../custom-node-ts/TSCustomNodeModel"
import createEngine, { DefaultLinkModel, DiagramModel } from "@projectstorm/react-diagrams"
import { CustomGraphModel } from "../custom-graph/CustomGraphModel"
import { CustomGraphFactory } from "../custom-graph/CustomGraphFactory"
import { useStateValue } from "../store/context"
import * as React from "react"
// create an instance of the engine

export const engine = createEngine()

// register the two engines
engine.getNodeFactories().registerFactory(new TSCustomNodeFactory())
engine.getNodeFactories().registerFactory(new CustomGraphFactory())
// create a diagram model
export const model: DiagramModel = new DiagramModel()

//####################################################
// now create two nodes of each type, and connect them
let nodes = []
const generateNodes = () => {
  for (let i = 0; i < 1000; i++) {
    nodes[i] = new TSCustomNodeModel({ color: "rgb(192,255,0)" })
    nodes[i].setPosition(200 + i, 200 + i)
  }
}
generateNodes()
const node1 = new TSCustomNodeModel({ color: "rgb(192,255,0)" })
node1.setPosition(50, 50)

const node2 = new TSCustomNodeModel({ color: "rgb(0,192,255)" })
node2.setPosition(200, 50)

const node3 = new CustomGraphModel()
node3.setPosition(250, 108)

const link1 = new DefaultLinkModel()
link1.setSourcePort(node1.getPort("out"))
link1.setTargetPort(node2.getPort("in"))

model.addAll(node1, node2, node3, ...nodes, link1)

//####################################################

// install the model into the engine
engine.setModel(model)
