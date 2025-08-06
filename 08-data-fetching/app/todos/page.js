import React from 'react'

export default async function Page(props) {
const data=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
const todos = await data.json()
    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <strong>{todo.id}.</strong> {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                </p>
            ))}
        </>
    )
}
