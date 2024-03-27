import React, { useEffect ,useMemo,useState} from 'react';
import "./App.css";
import NetworkGraph from './NetworkGraph';
const MyApp = () => {
  return (
    <div className="App">
      <NetworkGraph data={dataElements} onHoverLine={(event) =>event.target.data('label') } onHoverNode={(event) => event.target.data('label')}  />
    </div>
  );
}

export default MyApp;


const colorNode = {
  primary:{
    bg:"#E7EAEE",
    border:"#919AAB"
  },
  secondary:{
    bg:"#D1E1FF",
    border:"#2F80ED"
  }
}

const colorEdge = {
  green:"#44DA86",
  black:"#000"
}


const sizeNode = {
  sm:15,
  md:22,
  lg:25,
  xl:32
}

const sizeEdge = {
  xs:{
    size:0.25,
    scale:0.7
  },
  sm:{
    size:1.2,
    scale:0.9
  },
  md:{
    size:1.6,
    scale:1.1
  },
  lg:{
    size:2.1,
    scale:1.1
  },
}




const dataElements = [
  { data: { id: 'one', label: "Node 1" , title: "other 1", fullname: "John Smith" ,options:{bgColor:colorNode.secondary.bg,borderColor:colorNode.secondary.border, size:sizeNode.xl}}},
  { data: { id: 'two', label: 'Node 2', title: "other 2", fullname: "John Smith",options:{bgColor:colorNode.secondary.bg,borderColor:colorNode.secondary.border, size:sizeNode.lg}}},
  { data: { id: 'three', label: 'Node 3' , title: "other 3", fullname: "John Smith",options:{bgColor:colorNode.secondary.bg,borderColor:colorNode.secondary.border, size:sizeNode.lg}} },
  { data: { id: 'four', label: 'Node 4' , title: "other 4", fullname: "John Smith",options:{bgColor:colorNode.secondary.bg,borderColor:colorNode.secondary.border, size:sizeNode.lg}} },
   { data: { id: 'five', label: 'Node 5' , title: "other 5", fullname: "John Smith",options:{bgColor:colorNode.secondary.bg,borderColor:colorNode.secondary.border, size:sizeNode.lg}} },
  { data: { id: 'six', label: 'Node 6' , title: "other 6", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.lg}}},
  { data: { id: 'seven', label: 'Node 7' , title: "other 7", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.lg}}},
  { data: { id: 'eight', label: 'Node 8' , title: "other 8", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}} },
  { data: { id: 'nine', label: 'Node 9' , title: "other 9", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}}},
  { data: { id: 'ten', label: 'Node 10' , title: "other 10", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}} },
  { data: { id: 'eleven', label: 'Node 11' , title: "other 11", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}}},
  { data: { id: 'twelve', label: 'Node 12' , title: "other 12", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}}},
  { data: { id:'thirteen',label:'Node 13', title: "other 13", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.md}}},
  //{ data: { id:'fourteen',label:'Node 14', title: "other 14", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
//  { data: { id:'fifteen',label:'Node 15', title: "other 15", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
  { data: { id:'sixteen',label:'Node 16', title: "other 16", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
 // { data: { id:'seventeen',label:'Node 17', title: "other 17", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
  //{ data: { id:'eighteen',label:'Node 18', title: "other 18", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
  { data: { id:'nineteen',label:'Node 19', title: "other 19", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},
  { data: { id:'twenty',title: "other 20", fullname: "John Smith",options:{bgColor:colorNode.primary.bg,borderColor:colorNode.primary.border, size:sizeNode.sm}}},

  { data: {  id: '1', source: 'one', target: 'two', label: 'Edge from Node1 to Node2' ,...sizeEdge.xs, color:colorEdge.black }},
  { data: {  id: '2',source: 'two', target: 'three', label: 'Edge from Node2 to Node3' ,...sizeEdge.sm ,color:colorEdge.black }},
  { data: {  id: '3',source: 'three', target: 'four', label: 'Edge from Node3 to Node4' ,...sizeEdge.md,color:colorEdge.black }},
  { data: {  id: '4',source: 'four', target: 'five', label: 'Edge from Node4 to Node5' ,...sizeEdge.lg ,color:colorEdge.black }},
  { data: {  id: '5',source: 'five', target: 'six', label: 'Edge from Node5 to Node6' ,...sizeEdge.xs ,color:colorEdge.black }},
  { data: {  id: '6',source: 'six', target: 'seven', label: 'Edge from Node6 to Node7' ,...sizeEdge.sm,color:colorEdge.black }},
  { data: {  id: '7',source: 'seven', target: 'eight', label: 'Edge from Node7 to Node8' ,...sizeEdge.sm,color:colorEdge.green }},
  { data: {  id: '8',source: 'eight', target: 'nine', label: 'Edge from Node8 to Node9' ,...sizeEdge.sm,color:colorEdge.green }},
  { data: {  id: '9',source: 'nine', target: 'ten', label: 'Edge from Node9 to Node10' ,...sizeEdge.sm,color:colorEdge.green }},
  { data: {  id: '10',source: 'ten', target: 'eleven', label: 'Edge from Node10 to Node11' ,...sizeEdge.md,color:colorEdge.green }},
  { data: {  id: '11',source: 'eleven', target: 'twelve', label: 'Edge from Node11 to Node12' ,...sizeEdge.md,color:colorEdge.green }},
  { data: {  id: '13',source: 'one', target: 'four', label: 'Edge from Node12 to Node1' ,...sizeEdge.md,color:colorEdge.green}},
  { data: {  id: '14',source: 'four', target: 'seven', label: 'Edge from Node13 to Node4' ,...sizeEdge.md,color:colorEdge.green}},
  { data: {  id: '15',source: 'seven', target: 'ten', label: 'Edge from Node14 to Node7' ,...sizeEdge.lg,color:colorEdge.green}},
  { data: {  id: '16',source: 'ten', target: 'thirteen', label: 'Edge from Node15 to Node10' ,...sizeEdge.lg,color:colorEdge.green}},
  { data: {  id: '17',source: 'thirteen', target: 'sixteen', label: 'Edge from Node16 to Node13' ,...sizeEdge.lg,color:colorEdge.green}},
  { data: {  id: '18',source: 'sixteen', target: 'nineteen', label: 'Edge from Node17 to Node16' ,...sizeEdge.lg,color:colorEdge.green}},
  { data: {  id: '19',source: 'nineteen', target: 'twenty', label: 'Edge from Node18 to Node19' ,...sizeEdge.lg,color:colorEdge.green}},
  { data: {  id: '20',source: 'twenty', target: 'one', label: 'Edge from Node19 to Node20' ,...sizeEdge.lg,color:colorEdge.green}},
   
];



