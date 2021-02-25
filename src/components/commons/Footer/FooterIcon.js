export const FooterIcon = (props) => {
  return (
    <a href={`https://${props.icon}.com/${props.icon === 'linkedIn'? 'in/' : ''}${props.user}`} target="_blank">
      <img src={`/images/${props.icon}Icon.svg`} />
    </a>
  )
}