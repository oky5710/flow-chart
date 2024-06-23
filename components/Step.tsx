import styled from "@emotion/styled";
import {stepType} from "../pages";
import Image from "next/image";
import {remove} from "next/dist/build/webpack/loaders/resolve-url-loader/lib/file-protocol";

const Rect = styled.div<{color:string; height:number; width: number; isSelected: boolean}>`
    border:1px solid ${props => props.color};
    width:${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 13px;
    box-shadow: ${props=> props.isSelected? "0 0 30px #00F0FF": "none"};
    transition: 0.3s;
`;
const Title = styled.div<{background:string}>`
    background-color: ${props=> props.background};
    height:48px;
    border-radius: 13px 13px 0 0;
    display: flex;
    align-items: center;
    padding:0 10px;
    gap:10px;
    h4 {
        font-size: 13px;
        font-weight: bold;
        flex: auto;
    }
    button {
        border:0;
        background-color: transparent;
    }
`;
const Content = styled.p`
    line-height: 1.6;
    padding:10px;
    font-size: 12px;
`;

type stepComponentType = stepType & {
  width: number;
  height: number;
  setSelectedId: (id: number) => void;
  isSelected: boolean;
  removeStep: (id: number)=>void;
}
export default function Step({id, state,title, content, background, lineColor, width, height, setSelectedId, isSelected, removeStep}:stepComponentType){
  return <Rect color={lineColor} width={width} height={height} onClick={()=>setSelectedId(id)} isSelected={isSelected}>
    <Title background={background}>
      <Image
        src={`/img/ic-${state===0? "waiting" : state===1? "proceeding" : "complete"}.svg`}
        alt={state===0? "대기중" : state===1? "진행중" : "완료"}
        width={20}
        height={20}
      />
      <h4>{title}</h4>
      <button
        type="button"
        onClick={()=>{removeStep(id)}}>
        <Image src={"/img/ic-close.svg"} alt={"닫기"} width={14} height={14}/>
      </button>
    </Title>
    <Content>{content}</Content>
  </Rect>
}