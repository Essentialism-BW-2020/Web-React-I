import React from 'react';

//components
import RegisterForm  from './components/registerForm';

function App() {
  return (
    <div>

      <h1>Essentialism 2020</h1>
      <p>In a world with everything shouting for attention, the disciplined pursuit of less has never been more needed</p>
      <br/>
      <p>Enter Essentialism: doing less but better so that you can make the highest possible contribution</p>

      <div>
        <RegisterForm />
      </div>

    </div>
  );
}

export default App;
