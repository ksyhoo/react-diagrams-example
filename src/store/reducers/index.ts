export const reducer = (state, action) => {
  switch (action.type) {
    case "addElem":
      return {
        ...state,
        nodes: [...state.nodes, action.payload]
      };
    case "addEngine":
      return {
        ...state,
        engine: action.payload
      };
    case "addModel":
      return {
        ...state,
        model: action.payload
      };
    default:
      return state;
  }
};
