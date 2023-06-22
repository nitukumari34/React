
// nested div using html
{/* <div id="parent">
    <div id="child">
        <h1>i am an html tag</h1>
        <h2>i am h2 tag</h2>
    </div>
     <div id="child2">
        <h1>i am an html tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div> */}

// ReactElement(object)=HTML(Browser understand)

// nested div using react



const parent = React.createElement('div',
    { id: 'parent' },
    [
        React.createElement('div', { id: 'child' }, [
            React.createElement('h1', {}, "i am h1 tag"),
            React.createElement('h2', {}, "i am h2 tag")
        ]),
        React.createElement('div', { id: 'child2' }, [
            React.createElement('h3', {}, "i am h3 tag"),
            React.createElement('h4', {}, "i am h4 tag")
        ])
    ]);
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);