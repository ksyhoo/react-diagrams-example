import * as React from "react"
import { QuestionModel } from "./QuestionModel"
import { DiagramEngine, PortModelAlignment, PortWidget } from "@projectstorm/react-diagrams"
import styled from "@emotion/styled"

export interface QuestionWidgetProps {
  node?: QuestionModel
  engine?: DiagramEngine
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
  export const Question = styled.div<QuestionWidgetProps>`
    width: 0;
    height: 0;
    border: ${props => props.size}px solid transparent;
    border-bottom: ${props => props.size - props.size / 2.5}px solid #8870ab;
    position: relative;
    top: ${props => props.size}px;
    &:after {
      content: "";
      position: absolute;
      left: ${props => -Math.abs(props.size)}px;
      top: ${props => props.size - props.size / 2.5}px;
      width: 0;
      height: 0;
      border: ${props => props.size}px solid transparent;
      border-top: ${props => props.size - props.size / 2.5}px solid #8870ab;
    }
  `
  export const Label = styled.input`
    color: #ffffff;
    background: #8870ab;
    border: none;
    outline: 1px dashed gray;
    text-align: center;
    &:active,
    :focus {
      outline: 3px solid gray;
    }
  `
}

export class QuestionWidget extends React.Component<QuestionWidgetProps> {
  handleLabelChange = () => {
    //TODO: label set logic
  }
  render() {
    return (
      <S.Question className={"question-node"} size={this.props.size}>
        {/* <S.Label onChange={this.handleLabelChange} /> */}
        <PortWidget
          style={{
            top: this.props.size / 2,
            left: -this.props.size - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.LEFT)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: -8,
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
            left: this.props.size - 8,
            top: this.props.size / 2,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: -8,
            top: this.props.size - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
      </S.Question>
    )
  }
}
