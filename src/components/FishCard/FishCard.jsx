
function FishCard({fish}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{fish.name}</h2>
        <p className="card-text">A {fish.age}-year-old {fish.breed}</p>
      </div>
    </div>
  )
}

export default FishCard