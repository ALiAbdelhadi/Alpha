import CodeView from '../CodeView'

const CodeBlock = () => {
   return (
      <CodeView
         language="tsx"
         code={`
function MyComponent(props) {
  return (
     <div>
        <h1>Hello, {props.name}!</h1>
        <p>This is an example React component.</p>
     </div>
)};
`}
      />
   )
}

export default CodeBlock