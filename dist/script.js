function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...   
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`;

marked.setOptions({
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",





    event => {
      this.setState({
        markdown: event.target.value });

    });this.state = { markdown: initialMarkdown };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "top" },
      React.createElement("h3", { className: "editor-heading" }, "Editor"),
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })),

      React.createElement("div", { className: "bottom" },
      React.createElement("h3", { className: "preview-heading" }, "Preview"),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }),

      React.createElement("div", { id: "footer" },
      React.createElement("p", null, "by Aarushi Pandey"))))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));