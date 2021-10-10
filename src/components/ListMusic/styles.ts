import styled from 'styled-components'

export const Container = styled.div``

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

export const StyledLink = styled.a`
  text-decoration: none;
`

export const Title = styled.h1``
