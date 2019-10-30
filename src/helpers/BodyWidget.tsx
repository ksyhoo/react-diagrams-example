import * as React from "react"
import { DiagramEngine } from "@projectstorm/react-diagrams"
import { CanvasWidget } from "@projectstorm/react-canvas-core"

export interface BodyWidgetProps {
  engine: DiagramEngine
}

const BodyWidget = ({ engine }: BodyWidgetProps) => <CanvasWidget className="diagram-container" engine={engine} />

export default BodyWidget
