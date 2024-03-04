import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
//import Destination from "./Destination";
import { useDeleteDestinationMutation } from "../api/destinationApi";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  const [deleteDestination] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} -{" "}
              {destination.daysNeeded} days
              <button
                className="btn  form-control btn-danger"
                onClick={() => deleteDestination({ id: destination.id })}
              >
                Delete
              </button>
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
