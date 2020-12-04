import React from "react";
import "../Components/Burger.css";
import "./Ingredients/Lettuce.css";
class Burger extends React.Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
    specielSuace: 0,
  };
  HandleAddRemove = (action, ingredient) => {
    let { lettuce, tomato, cheese, meat, specielSuace } = this.state;
    let stateValue;
    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "meat": {
        stateValue = meat;
        break;
      }
      case "specielSuace": {
        stateValue = specielSuace;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }

    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
  };

  render() {
    let { lettuce, tomato, cheese, meat, specielSuace } = this.state;
    let status;
    if (lettuce >= 3) {
      status = "Damn, Eating healthy today ?";
    } else if (tomato >= 3) {
      status = "Wow you like tomato? I like your style";
    } else if (cheese >= 3 && lettuce < 5) {
      status = "Might wanna slow down with the cheese ?";
    } else if (meat >= 3 && meat < 6) {
      status = "Tripple ???!!!";
    } else if (meat >= 6 && meat < 10) {
      status = "Bro You Need Help";
    } else if (specielSuace >= 3) {
      status = "I get it our sauce is great but no";
    } else if (meat >= 10) {
      status = "Disappointed But Not Surprised ;-;";
    }

    let burger = [];

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div className="Lettuce"></div>);
    }
    for (let i = 0; i < tomato; i++) {
      burger.push(
        <>
          <div className="Tomatos">
            <div className="Tomato"></div>
            <div className="Tomato"></div>
            <div className="Tomato"></div>
          </div>
        </>
      );
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div className="Cheese"></div>);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div className="Meat"></div>);
    }
    for (let i = 0; i < specielSuace; i++) {
      burger.push(<div className="specielSuace"></div>);
    }
    return (
      <>
        <div className="flexer">
          <div className="container">
            <div className="add-remove">
              Lettuce 🥬
              <div className="ingredient">
                <button onClick={() => this.HandleAddRemove("add", "lettuce")}>
                  +
                </button>
                <button
                  onClick={() => this.HandleAddRemove("remove", "lettuce")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="add-remove">
              Tomato 🍅
              <div className="ingredient">
                <button onClick={() => this.HandleAddRemove("add", "tomato")}>
                  +
                </button>
                <button
                  onClick={() => this.HandleAddRemove("remove", "tomato")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="add-remove">
              Cheese 🧀
              <div className="ingredient">
                <button onClick={() => this.HandleAddRemove("add", "cheese")}>
                  +
                </button>
                <button
                  onClick={() => this.HandleAddRemove("remove", "cheese")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="add-remove">
              Patty 🥩
              <div className="ingredient">
                <button onClick={() => this.HandleAddRemove("add", "meat")}>
                  +
                </button>
                <button onClick={() => this.HandleAddRemove("remove", "meat")}>
                  -
                </button>
              </div>
            </div>
            <div className="add-remove">
              Sauce 🥫
              <div className="ingredient">
                <button
                  onClick={() => this.HandleAddRemove("add", "specielSuace")}
                >
                  +
                </button>
                <button
                  onClick={() => this.HandleAddRemove("remove", "specielSuace")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <span className="status"> {status}</span>
          <div className="The-burger">
            <div className="top-bun"></div>
            {burger}
            <div className="bottom-bun"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Burger;
