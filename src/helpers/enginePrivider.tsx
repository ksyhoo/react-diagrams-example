import { TSCustomNodeFactory } from '../custom-node-ts/TSCustomNodeFactory';
import { TSCustomNodeModel } from '../custom-node-ts/TSCustomNodeModel';
import createEngine, { DefaultLinkModel, DiagramModel, DiagramEngine } from '@projectstorm/react-diagrams';
import {CustomGraphModel} from '../custom-graph/CustomGraphModel';
import {CustomGraphFactory} from '../custom-graph/CustomGraphFactory';
import {useStateValue} from './context';
import * as React from 'react'
import {BodyWidget} from "../BodyWidget"
import {useEffect} from 'react';
import {ENGINE_METHOD_NONE} from 'constants';

export const EngineProvider = () => {
    const [state, dispatch] = useStateValue();
    // const [engine, setEngine] = React.useState<DiagramEngine>()
    // const [model, setModel] = React.useState<DiagramModel>()

    const {engine, model} = state;


    useEffect(() => {
 
    }, [])
    engine.getNodeFactories().registerFactory(new TSCustomNodeFactory())
    engine.getNodeFactories().registerFactory(new CustomGraphFactory())

        let nodes = []
        const generateNodes = () => {
            for(let i = 0; i < 1000; i++) {
                nodes[i] = new TSCustomNodeModel({ color: 'rgb(192,255,0)' });
                nodes[i].setPosition(200 +i, 200+ i);
        }

        }
        generateNodes()
        const node1 = new TSCustomNodeModel({ color: 'rgb(192,255,0)' });
        node1.setPosition(50, 50);

        const node2 = new TSCustomNodeModel({ color: 'rgb(0,192,255)' });
        node2.setPosition(200, 50);

        const node3 = new CustomGraphModel();
        node3.setPosition(250, 108);

        const link1 = new DefaultLinkModel();
        link1.setSourcePort(node1.getPort('out'));
        link1.setTargetPort(node2.getPort('in'));

        model.addAll(node1, node2, node3, ...nodes, link1);
        // dispatch({
        //     type: 'addModel',
        //     payload: model
        // })

        engine.setModel(model);
        // dispatch({
        //     type: 'addEngine',
        //     payload: a
        // })
        // setEngine(initEngine)
        // setModel(initModel)


    



    return <BodyWidget engine={engine}></BodyWidget>
    return <div>asd</div>
}