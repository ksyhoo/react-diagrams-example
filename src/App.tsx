import * as React from 'react';
import {BodyWidget} from './BodyWidget'
import './main.css';
import {engine} from './helpers/engine'
import {model} from './helpers/engine'
import Tools from './components/tools';
import { StateProvider, useStateValue } from './helpers/context';
import {EngineProvider} from './helpers/enginePrivider'

import createEngine, {DiagramModel, DiagramModelGenerics, DiagramEngine} from '@projectstorm/react-diagrams';

export const App = () => {
    const initialState: {model : DiagramModel<DiagramModelGenerics>, engine :DiagramEngine, nodes: []}= {
        nodes: [],
        engine: createEngine(),
        model: new DiagramModel()
    }

    const reducer = (state, action) => {
        switch (action.type) {
          case 'addElem':
            return {
              ...state,
              nodes: [...state.nodes, action.payload]
            };
          case 'addEngine':
            return {
              ...state,
              engine: action.payload
            };
          case 'addModel':
            return {
              ...state,
              model: action.payload
            };
          default:
            return state;
        }
      };
    //   const [state, dispatch] = useStateValue();
    //   console.log(state)

    return (
    <div>
        <StateProvider initialState={initialState} reducer={reducer}>
            <Tools/>
            {/* <BodyWidget engine={engine}></BodyWidget> */}
            <EngineProvider />
        </StateProvider>
    </div>
    ) 
    

}


