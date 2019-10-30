import { QuestionWidget } from "./QuestionWidget"
import { QuestionModel } from "./QuestionModel"
import * as React from "react"
import { AbstractReactFactory } from "@projectstorm/react-canvas-core"
import { DiagramEngine } from "@projectstorm/react-diagrams-core"

export class QuestionFactory extends AbstractReactFactory<QuestionModel, DiagramEngine> {
  constructor() {
    super("question")
  }

  generateReactWidget(event): JSX.Element {
    return <QuestionWidget engine={this.engine} size={100} node={event.model} />
  }

  generateModel(event) {
    return new QuestionModel()
  }
}
