// nested div using html
// ReactElement(object)=HTML(Browser understand)
// nested div using react
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h3", {}, "i am h3 tag"),
        React.createElement("h4", {}, "i am h4 tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
