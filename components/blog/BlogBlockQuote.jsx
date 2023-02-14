const BlogBlockQuote = (props) => {
  return (
    <>
      <div>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          {props.figcaption && (
            <figcaption>
              {props.figcaption}, <cite>{props.cite}</cite>
            </figcaption>
          )}
        </figure>
      </div>
      <style jsx>{`
        blockquote {
          font-style: normal;
          margin: 0;
        }

        blockquote p {
          padding: 15px;
          background: #eee;
          border-radius: 5px;
        }

        blockquote p::before {
          content: '"';
          font-family: Georgia;
        }

        blockquote p::after {
          content: '"';
        }
      `}</style>
    </>
  )
}

export default BlogBlockQuote
