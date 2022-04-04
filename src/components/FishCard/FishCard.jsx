import { Link } from 'react-router-dom'


function FishCard({fish, randFishImgId}) {
  return(
    <div className="card">
    <img 
      src={`https://picsum.photos/id/${randFishImgId}/640/480`} 
      alt="A happy fish"
      className="card-img-top" 
      />

      <div className="card-body">
        <h2 className="card-text">{fish.name}</h2>
        <p className="card-text">A {fish.age}-year-old {fish.breed}</p>
      </div>
    </div>
  )
}

export default FishCard