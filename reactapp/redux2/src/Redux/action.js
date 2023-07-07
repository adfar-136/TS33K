export const increment = ()=>{
    return {type: 'INCREMENT'}
}
export const decrement = ()=>{
    return {type: 'DECREMENT'}
}
export const addTodo = (todo)=>{
    return {
        type:'ADD_TODO',
        payload:todo,
    }
}
export const removeTodo = (todoId) => {
    return{
        type:"REMOVE_TODO",
        payload:todoId,
    }
}