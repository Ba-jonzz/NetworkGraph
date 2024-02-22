import React, { useEffect, useMemo, useState } from 'react';
import Cytoscape from 'cytoscape';

const NetworkGraph = ({ data,onHoverLine,onHoverNode }) => {
  const [contentPopup, setContentPopup] = useState(null);
  const [graphNetwork, setGraphNetwork] = useState(null);

  const handleNodeMouseover = event => {
    if (!!onHoverNode) {
    const position = event.renderedPosition
    const customContent =  onHoverNode(event);
    const content = (<ContainerTooltip style={{top:position.y,left:position.x}}>{customContent}</ContainerTooltip>)
    setContentPopup(content);
    }
  };

  const handleEdgeMouseover = event => {    
    if (!!onHoverLine) {
      const position = event.renderedPosition
      const customContent =  onHoverLine(event);
      const content = (<ContainerTooltip style={{top:position.y,left:position.x}}>{customContent}</ContainerTooltip>)
      setContentPopup(content);
    }

  };

  const handleMouseout = event => {
    setContentPopup(null);
  };

  const positions = useMemo(() => [
    { x: 481, y: 118 },
    { x: 640, y: 126 },
    { x: 587, y: 205 },
    { x: 403, y: 273 },
    { x: 396, y: 165 },
    { x: 726, y: 170 },
    { x: 654, y: 238 },
    { x: 504, y: 348 },
    { x: 314, y: 228 },
    { x: 337, y: 94 },
    { x: 386, y: 28 },
    { x: 624, y: 317 },
    { x: 835, y: 238 },
    { x: 749, y: 305 },
    { x: 572, y: 398 },
    { x: 226, y: 245 },
    { x: 267, y: 75 },
    { x: 753, y: 390 },
    { x: 664, y: 442 },
    { x: 198, y: 149 },
  ], []);

  useEffect(() => {
    if (typeof window !== 'undefined' && data?.length > 0) {
      const elements = data?.map((element, index) => {
        return element.data.source
          ? element
          : {
              ...element,
              position: positions[index],
            };
      });

      const cyInstance = Cytoscape({
        elements,
        container: document.getElementById('graph-network'),
        style: stylesheet,
        layout: { name: 'preset' },
        minZoom: 1,
        maxZoom: 2,
        boxSelectionEnabled: false,
        autoungrabify: true,
      });

      cyInstance.on('mouseover', 'node', handleNodeMouseover);
      cyInstance.on('mouseover', 'edge', handleEdgeMouseover);
      cyInstance.on('mouseout', 'node,edge', handleMouseout);

      setGraphNetwork(cyInstance);
      
      return () => {
        cyInstance?.destroy();
        setGraphNetwork(null)
      };
    }
  }, [data]);

  const handleZoom = factor => {
    if (graphNetwork) {
      graphNetwork.zoom(graphNetwork.zoom() * factor);
    }
  };

  return (
    <div className='container-graph-network'>
      <div id="graph-network" className='graph-network'/>
      <div className='container-control-zoom'>
      <button onClick={() => handleZoom(1.1)}>+</button>
      <button onClick={() => handleZoom(0.9)}>-</button>
      </div>
      
      {contentPopup}
    </div>
  );
};

const stylesheet = [
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      'target-arrow-color': 'data(color)',
      'line-color': 'data(color)',
      width: 'data(size)',
    },
  },
  {
    selector: 'node',
    style: {
      'background-color': 'data(options.bgColor)',
      'border-color': 'data(options.borderColor)',
      'border-width': 0.8,
      width: 'data(options.size)',
      height: 'data(options.size)',
      'border-style': 'solid',
      label: '',
      'font-size': '13px',
      color: '#5A88FF'    },
  },
];


const  ContainerTooltip = ({children,...props}) => {
  return (
    <div className='container-tooltip' {...props}>
       <div className="content-tooltip" >
        {children}
       </div>
    </div>
  )
}

export default NetworkGraph;
