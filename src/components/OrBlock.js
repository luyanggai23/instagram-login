import { 
  OrBlockContainer,
  OrBlockDashes,
  OrBlock
} from './StyledComponentsLibrary'

export default function OrBlockComponent() {
  return (
    <OrBlockContainer>
      <OrBlockDashes/>
      <OrBlock>or</OrBlock>
      <OrBlockDashes/>
    </OrBlockContainer>
  )
}