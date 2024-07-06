import React from 'react'

const Upload = () => {
  return (
    <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Upload Book</h2>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/*1st row*/}
      <div className='flex gap-8'>
            {/*title input */}
            <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Book Title
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name='title'
                type="text"
                required
                placeholder="Book Name"
                />
            </div>
            {/*author input*/}
            <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                Book Author
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                name='author'
                type="text"
                required
                placeholder="Book author name"
                />
            </div>
      </div>
      {/*2nd row*/}
      <div className='flex gap-8'>
            {/*title input */}
            <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Book Title
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name='title'
                type="text"
                required
                placeholder="Book Name"
                />
            </div>
            {/*author input*/}
            <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                Book Author
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                name='author'
                type="text"
                required
                placeholder="Book author name"
                />
            </div>
      </div>
    </form>
    </div>
    
  )
}

export default Upload