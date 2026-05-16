import React from 'react';
import AddAppointment from './components/AddAppointment';

function App() {
  return (
    <div className="App">
      <header style={{ 
        textAlign: 'center', 
        padding: '20px', 
        backgroundColor: '#2c3e50', 
        color: 'white' 
      }}>
        <h1>Student Medical Health System</h1>
      </header>
      <main style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <AddAppointment />
      </main>
    </div>
  );
}

export default App;