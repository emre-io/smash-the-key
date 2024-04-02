import './App.css';

// Counter 
// StartButton


function App() {
  return (
    <div className="App">
        <div className='h-screen flex flex-col justify-center items-center gap-3'>
          <div className='flex flex-row gap-3'>
            <div>
              <p className='bg-sky-500 px-2 py-0.25 my-0.5'> Player 1</p>
            </div>
            <div>
              <p className='bg-sky-500 px-2 py-0.25 my-0.5'> Player 2</p>
            </div>
          </div>
          <div className='container w-40 border-4 '>
            <div className='flex flex-row gap-3 justify-evenly'>
              <div>
                <p className='bg-sky-500 px-2 py-0.25 my-0.5'>Time</p>
              </div>
              <div>
                <p className='bg-sky-500 px-2 py-0.25 my-0.5'>Time</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 justify-evenly'>
              <div>
                <p className='bg-sky-500 px-2 py-0.25 my-0.5'>"S"</p>
              </div>
              <div>
                <p className='bg-sky-500 px-2 py-0.25 my-0.5'>"X"</p>
              </div>
            </div>
          </div>
          <div>
            <button className='bg-sky-500 rounded px-2 py-0.25'> Start </button>
          </div>  
          <div>
            <p className='bg-sky-500 px-2 py-0.25'>Counter</p>
          </div>
        </div>
        
    </div>
  );
}

export default App;
