import * as React from 'react';
import useInput from '../UserForm/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="FirstName">FirstName</label>
        <input type="text" className="form-control" {...bindFirstName} />
      </div>
      <div className="form-group">
        <label htmlFor="LastName">LastName</label>
        <input type="text" className="form-control" {...bindLastName} />
      </div>
      <div className="form-group">
        <button type="submit" className="form-control">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
