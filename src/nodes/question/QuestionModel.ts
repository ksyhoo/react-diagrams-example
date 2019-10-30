import { NodeModel, NodeModelGenerics, PortModelAlignment } from "@projectstorm/react-diagrams";
import { ActionPortModel } from "./QuestionPortModel";

export interface QuestionModel {
  PORT: QuestionModel;
  size: any;
}

export class QuestionModel extends NodeModel<NodeModelGenerics & QuestionModel> {
  constructor() {
    super({
      type: "question"
    });
    this.addPort(new ActionPortModel(PortModelAlignment.LEFT));
    this.addPort(new ActionPortModel(PortModelAlignment.TOP));
    this.addPort(new ActionPortModel(PortModelAlignment.RIGHT));
    this.addPort(new ActionPortModel(PortModelAlignment.BOTTOM));
  }
}
