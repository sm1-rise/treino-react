import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    
    `
export const Form = styled.form`
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    width:410px;
    max-width:100%;
    padding: 30px 45px;
    box-shadow: 3px 5px 5px rgb(210, 210, 210);
    input{
        padding: 10px 20px;
        color: #000;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        width: 310px;
        height: 30px;
        flex-shrink: 0;
        text-align: center;
        font-size: 14px;
    }
    p{
        font-weight: bold;
        padding-bottom:0;
        font-size:14px
    }
   
`