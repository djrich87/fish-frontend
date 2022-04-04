import { useState } from "react"

function AddFish(props) {

  const [formData, setFormData] =useState({
    name: '',
    breed: '',
    age: 0
  })

	return (
		<>
			<h1>Add Fish</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Fish's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Fish's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
            value={formData.breed}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Fish's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
            value={formData.age}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Fish
					</button>
				</div>
			</form>
		</>
	)
}

export default AddFish