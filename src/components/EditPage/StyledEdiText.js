import EdiText from "react-editext";
import styled from "styled-components";

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
  }
  button[editext="edit-button"] {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
  }
  button[editext="save-button"] {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button[editext="cancel-button"] {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input,
  textarea {
    border-radius: 5px;
    height: 2rem;
  }
  div[editext="view-container"],
  div[editext="edit-container"] {
    border-radius: 5px;
    height: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledEdiText;
