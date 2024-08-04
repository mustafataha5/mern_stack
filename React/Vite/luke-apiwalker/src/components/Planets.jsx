import React, { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
  // console.log(result)
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/' + id)
      .then(res => {
        setResult(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("------------<<<<<" + err)
        setResult(undefined);
      });
  }, [id]);

  if (loading) {
    return <div>loading ... </div>
  }
  if (result === undefined) {
    <ErrorMessage></ErrorMessage>
  }
  else {

    return (
      <>
        <div>
          <h2> {result.name} </h2>
          <p> <b>climate:</b> {result.climate} </p>
          <p> <b>terrain:</b> {result.terrain} </p>
          <p> <b>surface_water:</b> {result.surface_water} </p>
          <p> <b>population:</b> {result.population} </p>
        </div>
      </>
    )
  }
}

export default Planets
