const FontSizeStrongTitle = (props) => {
  const defaultSize = '1.5em'

  return (
    <>
      <span className={'style'}>{props.children}</span>
      <style jsx>{`
        .style {
          font-size: ${props.fontSize ? props.fontSize : defaultSize};
          font-weight: 600;
          display: ${props.isLineFeed ? 'block' : 'inline'};
          color: ${props.fontColor ? props.fontColor : 'black'};
        }
      `}</style>
    </>
  )
}

export default FontSizeStrongTitle
