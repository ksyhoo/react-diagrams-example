import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from "@projectstorm/react-diagrams";

export class ActionPortModel extends PortModel {
  constructor(alignment: PortModelAlignment) {
    super({
      type: "action",
      name: alignment,
      alignment: alignment
    });
  }

  createLinkModel(): LinkModel {
    return new DefaultLinkModel();
  }
}
