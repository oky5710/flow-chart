import styled from "@emotion/styled";
import {stepType} from "../pages";
import Step from "./Step";

const Center = styled.div`
    display:flex;
    align-items: center;
    padding: 50px;
    overflow: auto;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
`;
const Flow = styled.div`
    display:flex;
`
type workSiteType = {
    steps:stepType[];
    size: {width:number; height:number};
    setSelectedId: (id: number)=>void;
    selectedId: number;
    removeStep: (id: number)=>void;
}
const Arrow = styled.span`
    width:63px;
    height:2px;
    background-color: #000;
    position: relative;
    &::before {
        content:"";
        position: absolute;
        right:0;
        transform: translate(0, -50%) rotate(45deg);
        width:10px;
        height:10px;
        border-top:2px solid #000;
        border-right:2px solid #000;
    }
`;

export default function WorkSite({steps, size, setSelectedId, selectedId, removeStep}:workSiteType) {
    return <Center>
        <Flow>
            {steps.map((step, index)=>(
              <Container key={step.id}>
                  <Step {...step} width={size.width} height={size.height} setSelectedId={setSelectedId} isSelected={selectedId === step.id} removeStep={removeStep}></Step>
                  {index < steps.length-1 && <Arrow/>}
              </Container>
             ))}
        </Flow>
    </Center>
}
