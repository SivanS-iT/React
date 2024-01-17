export default function  Students() {
    const fullName = "Chris Pattern";
    const programingExp = 2;
  return(
    <div className="container p-4">
      <div className="row">Students enroled</div>
      <div className="row border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${fullName}`} className="w-10"></img>
        </div>
        <div className="col-10">
        {fullName}<br/>
        Programing Experiance {programingExp} years
        </div>
      </div>
    </div>
  )
  }

