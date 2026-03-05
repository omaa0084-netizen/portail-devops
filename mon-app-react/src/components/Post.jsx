import "./Card.css"

function Post({titre, contenu}) {
  return (
    <div className="card">
      <h3>{titre}</h3>
      <p>{contenu}</p>
    </div>
  )
}

export default Post