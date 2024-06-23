import styled from "@emotion/styled";
import StyledForm from "./StyledForm";
import {stepType} from "../pages";
import {useState} from "react";
import Image from "next/image";


const ColorPicker = styled.ul<{x: number; y:number}>`
    padding:10px;
    display:flex;
    width:190px;
    flex-wrap:wrap;
    gap:10px;
    border:1px solid #000;
    position: fixed;
    background-color: #fff;
    top: ${props=> props.y}px;
    left: ${props => props.x}px;
    z-index:10;
`;
const Dim = styled.div`
    height: 100vh;
    width:100%;
    position:absolute;
    top:0;
    left:0;
`;
const ColorButton = styled.button<{ color: string; type:"button" }>`
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    border: 0;
`;
const PrimaryButton = styled.button`
    background-color:#6200EE;
    height:36px;
    border:0;
    padding: 0 12px;
    border-radius:4px;
    color:#fff;
    display: flex;
    align-items: center;
    gap:10px
`;
const SecondaryButton = styled.button`
    margin-left:10px;
    color:#6200EE;
    border: 1px solid #6200EE;
    height:36px;
    padding: 0 10px;
    border-radius:4px;
`;
type editStepType = stepType & {
    changeStep: (field:string, value:string|number)=>void;
    addStep: () => void;
    cancelStep: () => void;
}
export default function EditStep({id, title, addStep, changeStep, content, state, lineColor, background, cancelStep}:editStepType ) {
    const colors = ["#CED4DA", "#868E96", "#FA5252", "#BE4BDB", "#4C6EF5", "#228BE6", "#22B8CF", "#12B886", "#82C91E", "#FCC419"];
    const [clicked, setClicked] = useState<string>(null);
    const [popPosition, setPopPosition] = useState<{x: number; y:number}>({x:0, y:0})
    return <StyledForm>
        <div>
            <PrimaryButton type="button" onClick={()=>addStep()}><Image src={"/img/ic-plus.svg"} alt="" width={14} height={14}/>추가</PrimaryButton>
            <SecondaryButton type="button" onClick={()=>cancelStep()}>취소</SecondaryButton>
        </div>
        {id > -1 && <>
        <div>
            <strong>제목</strong>
            <input type="text"  value={title} onChange={(e)=>{
                changeStep("title", e.target.value)
            }} />
        </div>
        <div>
            <strong>상태</strong>
            <select value={state} onChange={(e)=> changeStep("state", Number(e.target.value))}>
                <option value={0}>대기중</option>
                <option value={1}>진행중</option>
                <option value={2}>완료</option>
            </select>
        </div>
        <div>
            <strong>내용</strong>
            <textarea value={content} onChange={(e)=> changeStep("content", e.target.value)}/>
        </div>
        <div>
            <strong>선 색</strong>
            <ColorButton
              type="button"
              color={lineColor}
              onClick={(e)=>{
                setClicked("lineColor");
                  const {left, top, height} = e.target.getBoundingClientRect();
                  setPopPosition({x: left, y: top + height + 5});
              }}
            ></ColorButton>
        </div>
        <div>
            <strong>바탕 색</strong>
            <ColorButton
              type="button"
              color={background}
              onClick={(e)=>{
                  const {left, top, height} = e.target.getBoundingClientRect();
                  setClicked("background");
                  setPopPosition({x: left, y: top + height + 5});
                }}></ColorButton>
        </div></>}
        {clicked && <>
            <ColorPicker x={popPosition.x} y={popPosition.y}>
                {colors.map((color) => <li key={color}>
                    <ColorButton type={"button"} color={color} onClick={(e) => {
                        changeStep(clicked, color);
                    }}></ColorButton>
                </li>)}
            </ColorPicker>
            <Dim onClick={()=>{
                setClicked(null)
            }} />
        </>}
    </StyledForm>
}