import styled from 'styled-components'

export const Button = styled.button<{backgroundColor: string, color: string}>`
  border-radius: 3px;
  border: 1px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`