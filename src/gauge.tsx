import * as React from "react";
import useDimensions from "react-cool-dimensions";
const needle ='url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDYuOTc1IiBoZWlnaHQ9Ijk1Ljk0OCIgdmlld0JveD0iMCAwIDQ2Ljk3NSA5NS45NDgiPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iUGF0aF8xMzY2OSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ2Ljk3NSIgaGVpZ2h0PSI5NS45NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZU9mZnNldCBkeD0iNCIgaW5wdXQ9IlNvdXJjZUFscGhhIi8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuNSIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAuMjI0Ii8+CiAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iaW4iIGluMj0iYmx1ciIvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfNDA2NyIgZGF0YS1uYW1lPSJHcm91cCA0MDY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTE2Ljg3NSAtODE2LjAxNSkiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgOTE2Ljg4LCA4MTYuMDIpIiBmaWx0ZXI9InVybCgjUGF0aF8xMzY2OSkiPgogICAgICA8ZyBpZD0iUGF0aF8xMzY2OS0yIiBkYXRhLW5hbWU9IlBhdGggMTM2NjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNSA5Mi45MSkiIGZpbGw9IiM4ZThlOGUiPgogICAgICAgIDxwYXRoIGQ9Ik05Ljk4OC03OS40MTJzOS45ODgsNTMuNDQ1LDkuOTg4LDU4Ljk2MWE5Ljk4OCw5Ljk4OCwwLDAsMS05Ljk4OCw5Ljk4OEE5Ljk4OCw5Ljk4OCwwLDAsMSwwLTIwLjQ1MUMwLTI1Ljk2Nyw5Ljk4OC03OS40MTIsOS45ODgtNzkuNDEyWiIgc3Ryb2tlPSJub25lIi8+CiAgICAgICAgPHBhdGggZD0iTSA5Ljk4NzUyMTE3MTU2OTgyNCAtNzMuOTI1NDgzNzAzNjEzMjggQyA3LjQ3MTUxNjYwOTE5MTg5NSAtNjAuMjg5MjA3NDU4NDk2MDkgMS4wMDAwMDE5MDczNDg2MzMgLTI0Ljc5MjIyMTA2OTMzNTk0IDEuMDAwMDAxOTA3MzQ4NjMzIC0yMC40NTEyNzEwNTcxMjg5MSBDIDEuMDAwMDAxOTA3MzQ4NjMzIC0xNS40OTU1MjkxNzQ4MDQ2OSA1LjAzMTc4MTE5NjU5NDIzOCAtMTEuNDYzNzUyNzQ2NTgyMDMgOS45ODc1MjExNzE1Njk4MjQgLTExLjQ2Mzc1Mjc0NjU4MjAzIEMgMTQuOTQzMjYxMTQ2NTQ1NDEgLTExLjQ2Mzc1Mjc0NjU4MjAzIDE4Ljk3NTA0MDQzNTc5MTAyIC0xNS40OTU1MjkxNzQ4MDQ2OSAxOC45NzUwNDA0MzU3OTEwMiAtMjAuNDUxMjcxMDU3MTI4OTEgQyAxOC45NzUwNDA0MzU3OTEwMiAtMjQuNzkyMjIxMDY5MzM1OTQgMTIuNTAzNTI2Njg3NjIyMDcgLTYwLjI4OTIwNzQ1ODQ5NjA5IDkuOTg3NTIxMTcxNTY5ODI0IC03My45MjU0ODM3MDM2MTMyOCBNIDkuOTg3NTIxMTcxNTY5ODI0IC03OS40MTIxMDkzNzUgQyA5Ljk4NzUyMTE3MTU2OTgyNCAtNzkuNDEyMTA5Mzc1IDE5Ljk3NTA0MDQzNTc5MTAyIC0yNS45NjcyMzE3NTA0ODgyOCAxOS45NzUwNDA0MzU3OTEwMiAtMjAuNDUxMjcxMDU3MTI4OTEgQyAxOS45NzUwNDA0MzU3OTEwMiAtMTQuOTM1MzE3OTkzMTY0MDYgMTUuNTAzNDcxMzc0NTExNzIgLTEwLjQ2Mzc1Mjc0NjU4MjAzIDkuOTg3NTIxMTcxNTY5ODI0IC0xMC40NjM3NTI3NDY1ODIwMyBDIDQuNDcxNTYxNDMxODg0NzY2IC0xMC40NjM3NTI3NDY1ODIwMyAxLjkwNzM0ODYzMjgxMjVlLTA2IC0xNC45MzUzMTc5OTMxNjQwNiAxLjkwNzM0ODYzMjgxMjVlLTA2IC0yMC40NTEyNzEwNTcxMjg5MSBDIDEuOTA3MzQ4NjMyODEyNWUtMDYgLTI1Ljk2NzIzMTc1MDQ4ODI4IDkuOTg3NTIxMTcxNTY5ODI0IC03OS40MTIxMDkzNzUgOS45ODc1MjExNzE1Njk4MjQgLTc5LjQxMjEwOTM3NSBaIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYmEoMTEyLDExMiwxMTIsMC4xNikiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xNjEiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNjEiIGN4PSI2LjIyNiIgY3k9IjYuMjI2IiByPSI2LjIyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMwLjEzNyA4ODEuOTAyKSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==)';
interface IGaugeProps {
    margin?:number;
    marginPercentage?: number;
    colors?:string[];
    value: number;
    min:number;
    max:number; 
}
export const Gauge:React.FunctionComponent<IGaugeProps> = (props) => {
    const svgPadding = props.margin || 20;

    let min = props.min || 0.0;
    let max = props.max || 1.0
    let value = Number(props.value);
    value = Math.min(Math.max(value,min),max);
    let percentage = (value - min)/(max  - min);
    const { ref, width, height, entry, unobserve, observe } = useDimensions({
        onResize: (p:any) => {
          // Triggered whenever the size of the target is changed
        },
      });
      let svgWidth = width;
      let svgHeight = svgWidth*0.5;
      if (height*2 < width) {
          svgHeight = height;
          svgWidth = svgHeight*2;
      }
    //   let svgSize = width;
    //   if (height < width) {
        //   svgSize = height;
    //   }
      svgWidth = svgWidth - svgPadding*0.5*2;
      svgHeight = svgHeight - svgPadding*0.5;


    //   svgSize = svgSize - svgPadding*2;
      let  strokeWidth = svgHeight*0.1;
      let circumference = 2*Math.PI*(svgHeight - strokeWidth*0.5)*0.5;
      let emptyWeight = 0.05;
      let ratio = 8+7*emptyWeight;
      let coloredWedge = circumference/ratio;
      let emptyWedge = emptyWeight*circumference/ratio;
      let needleHeight = svgHeight*0.75;
      let needleWidth = needleHeight/2;

      let colors = props.colors?.length ? props.colors:['blue','red'];

    return <div style={{position:'absolute',left:0,right:0,top:0,bottom:0}} ref={ref as any}>
        <svg 
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{width:svgWidth,height:svgHeight,position:'relative',left:0 + (width-svgWidth)*0.5,top:0 + (height-svgHeight)*0.5}} 
        >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                {
                    colors.map((c:string,i:number) =>  <stop offset={`${100*i/(colors.length-1)}%`} stopColor={c}/>)
                }
           
            <stop offset="100%" stopColor='red' />
    </linearGradient>
            <path fill={'transparent'} stroke={'url(#grad1)'} strokeDasharray={`${coloredWedge} ${emptyWedge}`} strokeWidth={strokeWidth} 
            d={`M ${strokeWidth*0.5} ${svgHeight } A ${svgHeight - strokeWidth} ${svgHeight - strokeWidth} 0 0 1 ${svgWidth - strokeWidth*0.5} ${svgHeight }`} />
        </svg>
        <div style={{backgroundImage:needle,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'absolute',left:`50%` ,top:`50%`,transformOrigin:'50% 80%',transform:`translate(-50%,-20%) rotate(${180*percentage  - 90}deg)` ,width:`${needleWidth}px` ,height:`${needleHeight}px`}} ></div>
    </div>;
}