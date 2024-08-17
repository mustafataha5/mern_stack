import React, { useEffect, useState } from 'react';

const PlayerForm = ({ text, onPlayerAdd, initialName = '', initialPosition = '', errors = {} }) => {
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);
  const [error, setError] = useState(true); // Initialize error state as true

  useEffect(() => {
    // Disable the submit button if there are any errors
    setError(Object.keys(errors).length > 0);
  }, [errors]);

  const submitHandle = (e) => {
    e.preventDefault();
    if (!error) {
      onPlayerAdd({ name, position });
      setName('');
      setPosition('');
    }
  };

  const nameChange = (newName) => {
    if (newName.length < 3) {
      setError(true);
    } else {
      if(position.length>=2){
        setError(false);
      }
      
    }
    setName(newName);
  };

  const positionChange = (newPosition) => {
    if (newPosition.length < 2) {
      setError(true);
    } else {
      if(name.length>=3){
        setError(false);
      }
    }
    setPosition(newPosition);
  };

  return (
    <div className="px-3 m-5 border border-2 border-dark">
      <h4 className="m-3 text-start">{text} Player:</h4>
      <form onSubmit={submitHandle}>
        <table className="table ">
          <tbody>
            <tr>
              <td className="text-end">
                <h6>Name:</h6>
              </td>
              <td>
                <input
                  className="w-100"
                  type="text"
                  value={name}
                  onChange={(e) => nameChange(e.target.value)}
                />
              </td>
            </tr>
            {errors.name && (
              <tr>
                <td></td>
                <td>
                  <small className="text-danger">{errors.name}</small>
                </td>
              </tr>
            )}
            <tr>
              <td className="text-end">
                <h6>Position:</h6>
              </td>
              <td>
                <input
                  className="w-100"
                  type="text"
                  value={position}
                  onChange={(e) => positionChange(e.target.value)}
                />
              </td>
            </tr>
            {errors.position && (
              <tr>
                <td></td>
                <td>
                  <small className="text-danger">{errors.position}</small>
                </td>
              </tr>
            )}
            <tr>
              <td></td>
              <td>
                <button type="submit" disabled={error} className="btn btn-success w-100">{text}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default PlayerForm;
