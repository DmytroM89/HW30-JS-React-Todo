import axios from "axios";

const TODO_URL = 'http://localhost:3000/todos';

export async function getTodos() {
    const res = await axios.get(TODO_URL);
    return res.data;
}

export async function createTodoApi(todo) {
    const res = await axios.post(TODO_URL, { ...todo });
    return res.data;
}

export async function updateTodoApi(id, todo) {
    const res = await axios.put(`${TODO_URL}/${id}`, { ...todo });
    return res.data;
}

export async function deleteTodoApi(id) {
    const res = await axios.delete(`${TODO_URL}/${id}`);
    return res.data;
}
