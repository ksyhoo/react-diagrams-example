import { NodeModel, NodeModelGenerics, PortModelAlignment } from "@projectstorm/react-diagrams";
import { CustomGraphPortModel } from "./CustomGraphPortModel";

export interface CustomGraphModel {
  PORT: CustomGraphModel;
}

export class CustomGraphModel extends NodeModel<NodeModelGenerics & CustomGraphModel> {
  constructor() {
    super({
      type: "custom"
    });
    this.addPort(new CustomGraphPortModel(PortModelAlignment.TOP));
    this.addPort(new CustomGraphPortModel(PortModelAlignment.LEFT));
    this.addPort(new CustomGraphPortModel(PortModelAlignment.BOTTOM));
    this.addPort(new CustomGraphPortModel(PortModelAlignment.RIGHT));
  }
}
