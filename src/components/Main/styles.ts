import styled from 'styled-components'

export const BACKGROUND_COLOR = '#1a1b28'
export const TITLE_COLOR = '#00fe57'
export const MODE_TEXT_COLOR = '#f6f7f9'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BACKGROUND_COLOR};
`

export const Title = styled.h1`
  color: ${TITLE_COLOR};
  font-size: 3rem;
  font-weight: 700;
`

export const Mode = styled.p`
  color: ${MODE_TEXT_COLOR};
  font-size: 1.5rem;
  margin-top: 1rem;
`
