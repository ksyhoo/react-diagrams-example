import {
  DefaultLinkModel,
  PortModelAlignment,
  DefaultPortModel,
  DefaultLinkFactory
} from "@projectstorm/react-diagrams"
import * as React from "react"

export class QuestionLinkModel extends DefaultLinkModel {
  constructor() {
    super({
      type: "question-link"
    })
  }
}

export class QuestionPortModel extends DefaultPortModel {
  constructor(alignment: PortModelAlignment) {
    super({
      type: "question",
      name: alignment,
      alignment: alignment
    })
  }
  createLinkModel(): QuestionLinkModel | null {
    return new QuestionLinkModel()
  }
}

export class QuestionLinkSegment extends React.Component<{ model: QuestionLinkModel; path: string }> {
  path: SVGPathElement

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <path fill="none" strokeWidth={this.props.model.getOptions().width} stroke="#8870ab" d={this.props.path} />
      </>
    )
  }
}

export class QuestionLinkFactory extends DefaultLinkFactory {
  constructor() {
    super("question-link")
  }

  generateModel(): QuestionLinkModel {
    return new QuestionLinkModel()
  }

  generateLinkSegment(model: QuestionLinkModel, selected: boolean, path: string) {
    return (
      <g>
        <QuestionLinkSegment model={model} path={path} />
      </g>
    )
  }
}
