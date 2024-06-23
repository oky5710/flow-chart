
import React from "react";
import EditStep from "./EditStep";
import EditSize from "./EditSize";
import styled from "@emotion/styled";
import {stepType} from "../pages";
const Div = styled.div`
    width:280px;
    padding:20px;
    background-color:#F1F3F5;
`;
type sideBarType = {
    selected: stepType;
    size: {
        width:number;
        height: number;
    }
    changeStep:(field:string, value:string|number)=>void;
    addStep:() => void;
    cancelStep: () => void;
    changeSize: (field:string, value:number) => void;
}
export default function SideBar({selected, size, addStep, changeStep, cancelStep, changeSize}:sideBarType) {
    return <Div >
        <EditStep {...selected} addStep={addStep} changeStep={changeStep} cancelStep={cancelStep}/>
        <EditSize {...size} changeSize={changeSize}/>
    </Div>
}
