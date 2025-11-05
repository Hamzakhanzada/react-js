const Card = (props) => {
  return (
    <div className="card-parent">  
      <div className="card" role="region" aria-label="Profile card">
        <img
          className="avatar"
          src={props.img}
        />

        <div className="name">{props.name}</div>
        <div className="role">{props.role}</div>

        <button
          className="btn"
         
        >
          Say hi
        </button>

        <div className="info">{props.info}</div>
      </div>
    </div>
  );
};

export default Card;
