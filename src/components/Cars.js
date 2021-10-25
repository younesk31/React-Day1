import React from "react";
import style from "../App.css";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: props.list,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <table className={style.tablestyle}>
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((ele) => (
              <tr>
                <td>{ele.model}</td>
                <td>{ele.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Cars;

function CarsFunctional(props) {
  return (
    <div>
      <table className={style.tablestyle}>
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((ele) => (
            <tr>
              <td>{ele.model}</td>
              <td>{ele.year + 1}</td>
              <td> -- Proof of context</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { CarsFunctional };
