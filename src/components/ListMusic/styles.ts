import styled from 'styled-components'
export const Container = styled.div`
  min-width: 400px;
  width: 90vw;
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 3rem auto;
  padding: 3rem;
`

export const List = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  list-style: none;
  width: 100%;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & + li {
      border-top: 1px solid #eee;
    }
  }
`

export const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  small {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`

export const Title = styled.h1``

export const StyledLink = styled.a`
  cursor: pointer;
  color: #6c14cf;
  text-decoration: none;
`
