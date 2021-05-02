import React from 'react';
import { FloatingLabelInputContainer, FloatingLabelInputSpacingContainer } from './StyledComponentsLibrary';

export default function FloatingLabelInput(props) {

  const onChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <FloatingLabelInputSpacingContainer>
      <FloatingLabelInputContainer>
        {/* <FloatingLabel className='label'>{props.label}</FloatingLabel> */}
        <input type={props.type} onChange={onChange}  value={props.value}/>
      </FloatingLabelInputContainer>
    </FloatingLabelInputSpacingContainer>
  )
}