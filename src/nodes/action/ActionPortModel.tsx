import {
  DefaultLinkModel,
  PortModelAlignment,
  DefaultPortModel,
  DefaultLinkFactory
} from "@projectstorm/react-diagrams"
import * as React from "react"

export class ActionLinkModel extends DefaultLinkModel {
  constructor() {
    super({
      type: "action-link"
    })
  }
}

export class ActionPortModel extends DefaultPortModel {
  constructor(alignment: PortModelAlignment) {
    super({
      type: "action",
      name: alignment,
      alignment: alignment
    })
  }
  createLinkModel(): ActionLinkModel | null {
    return new ActionLinkModel()
  }
}

export class ActionLinkSegment extends React.Component<{ model: ActionLinkModel; path: string }> {
  path: SVGPathElement

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <path fill="none" strokeWidth={this.props.model.getOptions().width} stroke="#30c2a5" d={this.props.path} />
      </>
    )
  }
}

export class ActionLinkFactory extends DefaultLinkFactory {
  constructor() {
    super("action-link")
  }

  generateModel(): ActionLinkModel {
    return new ActionLinkModel()
  }

  generateLinkSegment(model: ActionLinkModel, selected: boolean, path: string) {
    return (
      <g>
        <ActionLinkSegment model={model} path={path} />
      </g>
    )
  }
}
