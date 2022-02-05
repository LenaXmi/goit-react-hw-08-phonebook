import styled from "styled-components";

export const Wrapper = styled.div`


`

export const Title = styled.h1`
margin-bottom:20px;
text-align:center;
color:#7B68EE;
`

export const Form = styled.form`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;

 

`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom:20px;
  

  `

export const Input = styled.input`
 display: block;
  width: 300px;
  padding: 5px;

  outline: 0;
    background: transparent;
  color: #212529;
  background-color: #fff;
  border:0;
  border-bottom: 2px solid #483D8B;
  
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
   
  `


export const FormBtn = styled.button`
  display: inline-block;
  padding:5px 8px;
                    outline: none;
                    cursor: pointer;
                    font-size: 10px;
                    line-height: 1;
                    border-radius: 200px;
                    transition-property: background-color,border-color,color,box-shadow,filter;
                    transition-duration: .3s;
                    border: 1px solid transparent;
                    letter-spacing: 2px;
                    min-width: 100px;
                    text-transform: uppercase;
                    white-space: normal;
                    font-weight: 700;
                    text-align: center;
                   
                     color: white;
                    background-color: #7B68EE;
                    height: 28px;
                    :hover{
                        background-color: #483D8B;
                       
                    }
`