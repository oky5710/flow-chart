import styled from "@emotion/styled";

const Div = styled.div`
    & > div + div {
        margin-top: 14px;
    }

    & > div {
        display: flex;

        align-items: center;
    }

    strong {
        font-size: 12px;
        width: 68px;
    }

    strong + input, strong + textarea, strong + select {
        border: 0;
        flex: auto;
        height: 30px;
    }

    strong + textarea {
        height: 50px;
    }
    h3 {
        padding:20px 0;
        margin-top:20px;
        border-top:1px solid #CED4DA;
    }
`;
export default function StyledForm ({children}) {
    return <Div>{children}</Div>
}