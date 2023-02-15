const PatternTitleHeader = (props) => {
  return (
    <>
      <span className={'pattern_no font_style'}>{props.patternNo}</span>
      <span className={'title_text font_style'}> {props.titleText}</span>
      <style jsx>{`
        .font_style {
          font-size: 1.5em;
          font-weight: 600;
        }

        .pattern_no {
          color: hotpink;
        }

        .title_text {
          //color: rgb(245, 245, 245);
        }
      `}</style>
    </>
  )
}

export default PatternTitleHeader
