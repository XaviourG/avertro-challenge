interface Props {
  size: string,
}

const PlusIcon = ({
  size,
}: Props) => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: size,
  height: size,
}}>
  <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="9" fill="#25397D"/>
    <rect x="8.5" y="5" width="1" height="8" fill="#25397D" stroke="white"/>
    <rect x="13" y="8.5" width="1" height="8" transform="rotate(90 13 8.5)" fill="#25397D" stroke="white"/>
  </svg>
</div>

export default PlusIcon;

