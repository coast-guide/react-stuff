//   <div id="parent">
//     <div id="child1">
//       <h1>Heading1</h1>
//       <h2>Heading2</h2>
//     </div>
//     <div id="child2">
//       <h1>Heading1</h1>
//       <h2>Heading2</h2>
//     </div>
//   </div>
const h1 = React.createElement("h1", {}, "Heading1");
const h2 = React.createElement("h2", {}, "Heading2");
const child1 = React.createElement("div", { id: "child1" }, [h1, h2]);
const child2 = React.createElement("div", { id: "child2" }, [h1, h2]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
