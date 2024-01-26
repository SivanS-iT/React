
export default function Students(props) {
  return(
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img src={props.headShot} className="w-10 py-2" ></img>
        </div>
        <div className="col-8">
        {props.fullName}<br/>
        Programing Experiance {props.programingExp} years
        </div>
        <div className="col-2">
          {props.children}
        </div>
      </div>
    </div>
  )
  }

//{`https://ui-avatars.com/api/?name=${props.fullName}`}