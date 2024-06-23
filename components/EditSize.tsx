import StyledForm from "./StyledForm";
type editSizeType = {
    width: number;
    height: number;
    changeSize: (field:string, value:number)=>void;
}
export default function EditSize({changeSize, width, height}) {
    return <StyledForm>
        <h3>크기</h3>
        <div>
            <strong>넓이</strong>
            <input type="number" value={width} onChange={(e)=>{changeSize("width", e.target.value)}}/>
        </div>
        <div>
            <strong>높이</strong>
            <input
              type="number"
              value={height}
              onChange={(e) => {
                changeSize("height", e.target.value)
            }}/>
        </div>
    </StyledForm>
}
