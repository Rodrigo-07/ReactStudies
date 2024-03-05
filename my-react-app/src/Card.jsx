import profilePic from './assets/RodrigoSantos.jpg'

function Card(){

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Rodrigo Sales</h2>
            <p className='card-text'>I am a student</p>
        </div>
    );
}

export default Card;