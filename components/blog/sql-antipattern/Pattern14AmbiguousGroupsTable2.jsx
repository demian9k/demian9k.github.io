const Pattern14AmbiguousGroupsTable2 = (props) => {
  return (
    <>
      <table className="tg" style={props.style}>
        <thead>
          <tr>
            <th className="tg-0pky">product_name</th>
            <th className="tg-0pky">MAX(date_reported)</th>
            <th className="tg-0pky">bug_id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0pky">Open RoundFile</td>
            <td className="tg-0pky">2010-06-01</td>
            <td className="tg-0pky">1234</td>
          </tr>
          <tr>
            <td className="tg-0pky">Visual TurboBuilder</td>
            <td className="tg-0pky">2010-02-16</td>
            <td className="tg-0pky">3456</td>
          </tr>
          <tr>
            <td className="tg-0pky">Reconsider</td>
            <td className="tg-0pky">2010-01-01</td>
            <td className="tg-0pky">5678</td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .tg {
          border-collapse: collapse;
          border-spacing: 0;
        }

        .tg td {
          border-color: black;
          border-style: solid;
          border-width: 1px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          overflow: hidden;
          padding: 10px 5px;
          word-break: normal;
        }

        .tg th {
          border-color: black;
          border-style: solid;
          border-width: 1px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: normal;
          overflow: hidden;
          padding: 10px 5px;
          word-break: normal;
        }

        .tg .tg-0pky {
          border-color: inherit;
          text-align: left;
          vertical-align: top;
        }
      `}</style>
    </>
  )
}

export default Pattern14AmbiguousGroupsTable2
