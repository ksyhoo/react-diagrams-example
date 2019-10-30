import { NodeModel, NodeModelGenerics, PortModelAlignment } from "@projectstorm/react-diagrams";
import { QuestionPortModel } from "./QuestionPortModel";

export interface QuestionModel {
  PORT: QuestionModel;
  size: any;
}

export class QuestionModel extends NodeModel<NodeModelGenerics & QuestionModel> {
  constructor() {
    super({
      type: "question"
    });
    this.addPort(new QuestionPortModel(PortModelAlignment.LEFT));
    this.addPort(new QuestionPortModel(PortModelAlignment.TOP));
    this.addPort(new QuestionPortModel(PortModelAlignment.RIGHT));
    this.addPort(new QuestionPortModel(PortModelAlignment.BOTTOM));
  }
}
