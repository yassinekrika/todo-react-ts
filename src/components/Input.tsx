
const Input = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white">Enter your net task:</label>
        <input type="text" className="p-1 rounded-sm" />
      </div>
      <button
        type="button"
        className="bg-green100 rounded-lg hover:bg-green-200 [-1"
      >
        Add task
      </button>
    </form>
  )
}

export default Input