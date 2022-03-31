import React from "react";

const Page = (props) => {
  return (
    <div className="table-wrapper">
      <div className="table-box">
        <div>
          <h1 className="title">High Scores Per Country </h1>
        </div>
        {props.data.CountryScores.sort((a, b) =>
          a.name > b.name ? 1 : -1
        ).map((eachCountry, index) => (
          <table className="table" bordered key={index}>
            <tbody>
              <tr>
                <td>
                  <h1>
                    <span className="table-header">High Scores: </span>
                    <span className="countryName">{eachCountry.name}</span>
                  </h1>
                </td>
              </tr>
              <tr>
                <td className="table">
                  {props.status
                    ? eachCountry.scores
                        .sort((a, b) => (a.s > b.s ? -1 : 1))
                        .map((element, i) => (
                          <table bordered className="table" key={i}>
                            <tbody>
                              <td>
                                {element.n.toUpperCase() + ":aaa " + element.s}
                              </td>
                            </tbody>
                          </table>
                        ))
                    : eachCountry.scores
                        .sort((a, b) => (a.s < b.s ? -1 : 1))
                        .map((element, i) => (
                          <table bordered className="table" key={i}>
                            <tbody>
                              <tr>
                                {element.n.toUpperCase() + ": " + element.s}
                              </tr>
                            </tbody>
                          </table>
                        ))}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Page;
