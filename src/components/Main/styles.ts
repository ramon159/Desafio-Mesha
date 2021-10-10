import styled from 'styled-components'

// export const Wrapper = styled.main`
//   color: #fff;
//   width: 100%;
//   height: 100%;

// `
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

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto;
`
export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`
export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background: #cb208e;
  color: white;
  border: 0;
  padding: 0 1.25rem;
  margin-left: 0.5rem;
`
