
export default function  Student(props) {
  return(
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img src={props.headShot} className="w-10 py-2" ></img>
        </div>
        <div className="col-10">
        {props.fullName}<br/>
        Programing Experiance {props.programingExp} years
        </div>
      </div>
    </div>
  )
  }

//{`https://ui-avatars.com/api/?name=${props.fullName}`}