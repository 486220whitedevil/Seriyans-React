import { useState } from "react";


const Input = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        const copyTask = [...task]
        copyTask.push({ title, details })

        setTask(copyTask)
        console.log("Title : ", title);
        console.log("Details : ", details)
        setTitle('')
        setDetails('')

    }


    return (

        <div className='w-full min-h-screen bg-black flex'>
            <div className='w-1/2 h-100 p-10 '>
                <form
                    className='flex flex-col items-center'
                    action="">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className='bg-white w-full py-3 px-3 rounded-2xl'
                        type="text"
                        placeholder='Enter title'
                    />
                    <textarea
                        className='bg-white w-full h-50 py-3 px-3 rounded-2xl mt-5'
                        name="description"
                        placeholder='Write Description'
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        className=' w-50 py-3 px-3 rounded-2xl mt-10 cursor-pointer bg-green-800 text-white'>Add note</button>
                </form>

            </div>
            <div className='w-0.5 h-screen bg-white'></div>
            <div className='w-1/2 min-h-screen bg-black p-10 '>
                <h1 className='text-white text-2xl font-bold mb-6'>Recent Notes</h1>
                <div className='flex flex-wrap gap-5'>
                    {task.map((elem, idx) => {
                    return (
                        <div key={idx} className='h-50 w-50 bg-[url(https://images.template.net/122999/note-taking-paper-template-jq5yy.jpg)] bg-cover bg-center rounded-lg text-black p-5'>
                            <h1 className="text-2xl font-bold">{elem.title}</h1>
                            <h3 className="text-gray-800">{elem.details}</h3>
                        </div>
                    )
                })}
                </div>

            </div>
        </div>
    )
}

export default Input
