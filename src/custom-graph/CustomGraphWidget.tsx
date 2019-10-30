import * as React from "react"
import { CustomGraphModel } from "./CustomGraphModel"
import { DiagramEngine, PortModelAlignment, PortWidget } from "@projectstorm/react-diagrams"
import styled from "@emotion/styled"

export interface CustomGraphWidgetProps {
  node: CustomGraphModel
  engine: DiagramEngine
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
}

/**
 * @author Dylan Vorster
 */
export class CustomGraphWidget extends React.Component<CustomGraphWidgetProps> {
  render() {
    return (
      <div
        className={"custom-node"}
        style={{
          position: "relative",
          width: this.props.size,
          height: this.props.size
        }}
      >
        <div>asd</div>
        <svg
          width={this.props.size}
          height={this.props.size}
          dangerouslySetInnerHTML={{
            __html: `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />`
          }}
        />
        <PortWidget
          style={{
            top: this.props.size / 2 - 8,
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
            left: this.props.size / 2 - 8,
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
            top: this.props.size / 2 - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
        <PortWidget
          style={{
            left: this.props.size / 2 - 8,
            top: this.props.size - 8,
            position: "absolute"
          }}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
          engine={this.props.engine}
        >
          <S.Port />
        </PortWidget>
      </div>
    )
  }
}
