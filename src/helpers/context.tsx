// import * as React from 'react'

// const Context = React.createContext({})

// export const ContextProvider = ({reducer, initialState, children}) =>(
//     <Context.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </Context.Provider>
//   );
// export const ContextComsumer = Context.Consumer
// export const useStateValue = () => React.useContext(Context);
// export default Context
import  {createContext, useContext, useReducer} from 'react';
import * as React from 'react'

export const StateContext = createContext(null);
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);