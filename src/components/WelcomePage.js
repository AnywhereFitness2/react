import React from "react";

const WelcomePage = props => {
  return (
    <div>
      <div>
        <h1>Anywhere Fitness</h1>
        <h3>Workout AnyWhere</h3>
        <button
          className='welcomeBtn'
          onClick={() => props.history.push("/register")}
        >
          Register
        </button>
        <p>Already Have an Account?</p>
        <button
          className='welcomeLogBtn2'
          onClick={() => props.history.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
