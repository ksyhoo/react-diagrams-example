import { NodeModel, NodeModelGenerics, PortModelAlignment } from "@projectstorm/react-diagrams";
import { ActionPortModel } from "./ActionPortModel";

export interface ActionModel {
  PORT: ActionModel;
  size: any;
}

export class ActionModel extends NodeModel<NodeModelGenerics & ActionModel> {
  constructor() {
    super({
      type: "action"
    });
    this.addPort(new ActionPortModel(PortModelAlignment.TOP));
    this.addPort(new ActionPortModel(PortModelAlignment.LEFT));
    this.addPort(new ActionPortModel(PortModelAlignment.BOTTOM));
    this.addPort(new ActionPortModel(PortModelAlignment.RIGHT));
  }
}
