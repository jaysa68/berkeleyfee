export default function Section({ title, description, resources }) {
  return (
    <div>
      <h1>
        {title}
      </h1> 
      <p>
        {description}
      </p>
      <ul>
        {resources}
      </ul>
    </div>
  )
}
