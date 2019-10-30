import { ActionWidget } from "./ActionWidget"
import { ActionModel } from "./ActionModel"
import * as React from "react"
import { AbstractReactFactory } from "@projectstorm/react-canvas-core"
import { DiagramEngine } from "@projectstorm/react-diagrams-core"

export class ActionFactory extends AbstractReactFactory<ActionModel, DiagramEngine> {
  constructor() {
    super("action")
  }

  generateReactWidget(event): JSX.Element {
    return <ActionWidget engine={this.engine} height={100} width={200} node={event.model} />
  }

  generateModel(event) {
    return new ActionModel()
  }
}
