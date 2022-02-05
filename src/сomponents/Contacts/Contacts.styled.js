import styled from "styled-components";


export const Title = styled.h1`
margin-bottom:20px;
text-align:center;
color:#7B68EE;
`  

export const List = styled.ul`
width:400px;
margin-left:auto;
margin-right:auto;

 

`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height:45px;
  border-bottom:1px solid #483D8B;


  &:not(:last-child) {
  margin-bottom: 10px;

}
  `

export const Content = styled.p`
  font-weight: bold;
  margin-right: 20px;
  color: #777;
  `

export const Btn = styled.button`
   display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-size: 10px;
                    line-height: 1;
                    border-radius: 200px;
                    transition-property: background-color,border-color,color,box-shadow,filter;
                    transition-duration: .3s;
                    border: 1px solid transparent;
                    letter-spacing: 2px;
                    min-width: 80px;
                    text-transform: uppercase;
                    white-space: normal;
                    font-weight: 700;
                    text-align: center;
                   
                     color: white;
                    background-color: #7B68EE;
                    height: 28px;
                    :hover{
                        background-color: #483D8B;
                       
                    }`
