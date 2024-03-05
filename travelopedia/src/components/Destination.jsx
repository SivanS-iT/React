import React from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";
import { useState } from "react";

function Destination({ destination }) {
  const [deleteDestination] = useDeleteDestinationMutation();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [updateDestination] = useUpdateDestinationMutation();

  const handleUpdate = () =>
  {
        let cityOnEdit = "";
        let countryOnEdit = "";

        if(newCity === ""){
            cityOnEdit = destination.city;
        }
        else {
            cityOnEdit  = newCity;
        }

        if(newCountry === ""){
            countryOnEdit = destination.country;
        }
        else {
            countryOnEdit  = newCountry;
        }

        updateDestination({
            id: destination.id,
            city: cityOnEdit,
            country: countryOnEdit,
            daysNeeded: destination.daysNeeded,
          });
      
          setNewCity("");
          setNewCountry("");
          setIsUpdating(!isUpdating);
  }

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="city..."
                className="form-control"
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              />
            ) : (
              <span>{destination.city}</span>
            )}
          </div>

          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="country..."
                className="form-control"
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              />
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>

      <div className="col-1 text-warning">{destination.daysNeeded} days</div>

      <div className="col-3">
        <button
          className="btn btn-warning m-1"
          onClick={() => {
            setIsUpdating(!isUpdating);
          }}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>

        {isUpdating ? (
          <button
            className="btn btn-success m-1"
            onClick={() => {handleUpdate()}}
          >
            Update
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
