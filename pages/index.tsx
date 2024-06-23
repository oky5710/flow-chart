import type { NextPage } from 'next'
import Head from 'next/head';
import SideBar from "../components/SideBar";
import React, {useEffect, useMemo, useState} from "react";
import WorkSite from "../components/WorkSite";
import styled from "@emotion/styled";
const Root = styled.section`
    height:100vh;
    overflow:hidden;
    header {
        height:50px;
        border-bottom: 1px solid #868E96;
        font-size:20px;
        font-weight:bold;
        display: flex;
        align-items: center;
        padding-left:30px;
    }
    main {
        display:flex;
        height:calc(100% - 50px);
    }
`;
export type stepType = {
    id: number;
    title: string;
    content: string;
    state: 0 | 1 | 2;
    background: string;
    lineColor: string;
}
const Home: NextPage = () => {

  const [steps, setSteps] = useState<stepType[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [size, setSize] = useState<{width: number; height: number;}>({width:200, height:130})
  const [number, setNumber] = useState<number>(0);
  const changeStep = (field, value) => {
      setSteps(
          steps.map((step)=>{
              return step.id === selectedId ? {
                  ...step,
                  [field]: value
              } : step
          })
      )
  }
  const newStep: stepType = {
    id: -1,
    title: "",
    content: "",
    state: 0,
    background: "#CED4DA",
    lineColor: "#868E96",
  };
  const addStep = () => {
    setSteps([...steps, {
      ...newStep,
      id: number,
    }]);
    setSelectedId(number);
    setNumber(number + 1)
  }
  const removeStep = (id) => {
    setSteps(steps.filter((step)=>step.id !== id))
  }
  const selected = useMemo<stepType>(()=>{
    const selectedStep = steps.find((step)=> step.id === selectedId);
    return selectedStep ?? newStep;
  },[selectedId, steps]);
  const cancelStep = () => {
    setSteps(
      steps.map((step)=>{
        return step.id === selectedId ? {
          ...newStep,
          id: step.id
        } : step
      })
    )
  }
  const changeSize = (field, value) => {
    setSize({
      ...size,
      [field]: value
    })
  }
  return (
    <Root>
      <Head>
        <title>JASON</title>
      </Head>
      <header>
        <h1>흐름도 만들기</h1>
      </header>
      <main>
        <SideBar selected={selected} size={size} changeSize={changeSize} addStep={addStep} changeStep={changeStep} cancelStep={cancelStep} />
        <WorkSite steps={steps} size={size} selectedId={selectedId} setSelectedId={setSelectedId} removeStep={removeStep}/>
      </main>
    </Root>
  )
}

export default Home
