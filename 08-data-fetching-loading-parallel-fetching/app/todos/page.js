import React from 'react'
async function fetchData(url){
    const res= await fetch(url)
    return res.json()
}

export default async function Page(props) {
    const start = Date.now();
const [todos,res1,res2]=await Promise.all([fetchData('https://jsonplaceholder.typicode.com/todos?_limit=10'),
fetchData('https://procodrr.vercel.app/?sleep=1000'),
fetchData('https://procodrr.vercel.app/?sleep=2000')
])

const duration = Date.now() - start;
console.log("Time taken:", duration);
    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <strong>{todo.id}.</strong> {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                </p>
            ))}
                <p>{res1.message}</p>
                <p>{res2.message}</p>
        </>
    )
}
