const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child0"}, [
        React.createElement("h1", {id: "heading1"}, "I am heading 1"), 
        React.createElement("h2", {id: "heading2"}, "I am heading 2")
    ]),
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "heading3"}, "I am heading 1"), 
        React.createElement("h2", {id: "heading4"}, "I am heading 2")
    ]) 
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)