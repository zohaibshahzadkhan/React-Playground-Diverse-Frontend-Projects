import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  const COLORS = ['red', 'green', 'blue', 'orange', 'pink']


  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className="fixed left-20 top-5 flex justify-center space-x-2">

        {

          COLORS.map((color, index) => {
            return (
              <button
                key={index}
                onClick={() => setColor(color)}
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-white border-slate-700 border-2"
                style={{ backgroundColor: color }}
              >
                {color.toUpperCase()}
              </button>
            )

          })
        }
      </div>
    </div>
  )
}

export default App
