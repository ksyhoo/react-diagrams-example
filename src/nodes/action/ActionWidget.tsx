import * as React from "react"
import { ActionModel } from "./ActionModel"
import { DiagramEngine, PortModelAlignment, PortWidget } from "@projectstorm/react-diagrams"
import styled from "@emotion/styled"

export interface ActionWidgetProps {
  node: ActionModel
  engine: DiagramEngine
  height?: number
  width?: number
  size?: number
}

namespace S {
  export const Port = styled.div`
    width: 16px;
    height: 16px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 1);
    }
  `
  export const Action = styled.div`
    background: #30c2a5;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* min-width: 200px;
    min-height: 20px; */
  `
  export const Label = styled.input`
    color: #ffffff;
    background: #30c2a5;
    border: none;
    outline: 1px dashed gray;
    text-align: center;
    &:active,
    :focus {
      outline: 3px solid gray;
    }
  `
}

export class ActionWidget extends React.Component<ActionWidgetProps> {
  handleLabelChange = () => {
    //TODO: lable set logic
  }
  render() {
    return (
      <S.Action
        className={"action-node"}
        style={{
          position: "relative",
          width: this.props.width,
          height: this.props.height
        }}
      >
        <S.Label onChange={this.handleLabelChange} />
        <PortWidget
          style={{
            top: this.props.height / 2 - 8,
            left: -8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.LEFT)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.width / 2 - 8,
            top: -8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.TOP)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.width - 8,
            top: this.props.height / 2 - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.width / 2 - 8,
            top: this.props.height - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
      </S.Action>
    )
  }
}
