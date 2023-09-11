import React from 'react'

const Edu = () => {
  return (
    <main>
    <div class="p-6 w-60 h-full mx-auto my-10 bg-blue-100 rounded-xl shadow-lg block items-center space-x-4">
        <div class="shrink-0 text-3xl text-center font-bold ">
            Education
        </div>
        <div className='p-5 text-xl font-medium text-black flex-1'>
          <ul>
            <li>
            <div><h1 className='text-lg '>BCA</h1>
                <p>Ignou </p>
          </div>
          </li>
          <li>
          <div><h1>HSC</h1>
                <p>UP BOARD </p>
          </div>
          </li>
          <li>
          <div><h1>SSC</h1>
                <p>CBSE </p>
          </div>
          </li>
          </ul>

        </div>
    </div>
</main>
  )
}

export default Edu