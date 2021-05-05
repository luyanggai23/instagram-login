import React from 'react';
import { 
  FloatingLabelInputContainer, 
  FloatingLabelInputSpacingContainer,
  FloatingLabelInputLabel,
  FloatingLabelInputSpan,
  FloatingLabelInputInput
} from './StyledComponentsLibrary';

export default function FloatingLabelInput(props) {

  const onChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <FloatingLabelInputSpacingContainer>
      <FloatingLabelInputContainer>
        <FloatingLabelInputLabel>
          <FloatingLabelInputSpan float={props.value.length > 0}>
            { props.label }
          </FloatingLabelInputSpan>
          <FloatingLabelInputInput type={props.type} onChange={onChange}  value={props.value}/>
        </FloatingLabelInputLabel>
      </FloatingLabelInputContainer>
    </FloatingLabelInputSpacingContainer>
  )
}