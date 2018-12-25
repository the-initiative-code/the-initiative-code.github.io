import React from "react";
import style from "./style.module.css";

const Showcase = props => (
  <div>
    <img className={style.showcase}  src={props.showcase}/>
    <p className={style.client}>{props.client}</p>
  </div>
);

export default class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <Showcase
          showcase="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          client="The Borring Company, 2018"
        />
        <Showcase
          showcase="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          client="Goggle, 2018"
        />
        <Showcase
          showcase="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          client="Warning Brothers, 2017"
        />
        <Showcase
          showcase="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          client="Harry Pooper, 2017"
        />
      </div>
    );
  }
}
