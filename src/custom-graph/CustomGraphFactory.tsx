import { CustomGraphWidget } from "./CustomGraphWidget"
import { CustomGraphModel } from "./CustomGraphModel"
import * as React from "react"
import { AbstractReactFactory } from "@projectstorm/react-canvas-core"
import { DiagramEngine } from "@projectstorm/react-diagrams-core"

export class CustomGraphFactory extends AbstractReactFactory<CustomGraphModel, DiagramEngine> {
  constructor() {
    super("custom")
  }

  generateReactWidget(event): JSX.Element {
    return <CustomGraphWidget engine={this.engine} size={100} node={event.model} />
  }

  generateModel(event) {
    return new CustomGraphModel()
  }
}
