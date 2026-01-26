import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './form.css'

function Form1() {

    const [formData, setFormData] = useState (
        {taskName: "",
        taskDate: "",
        isComplete: false,
        }
    )

    const [tasks, settasks] = useState ([])

    function handleChange (event) {
        const {name, value} = event.target
        setFormData ({...formData,[name]:value})
    }

    function todayDate() {
        const today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()

        const formattedDate = `${month}/${day}/${year}`
        return formattedDate
    }

    function handleClick(event) {
        event.preventDefault()
        let date = todayDate()
        let newTask = {
            id: tasks.length,
            task : formData.taskName,
            comDate : formData.taskDate,
            curDate : date,
            isComplete: false
            }
        let tasksUpdate = [...tasks, newTask]
        settasks (tasksUpdate)
        setFormData({
            taskDate: '',
            taskName: '',
        })   
    }

    function handleComplete(id) {
        //console.log(id)
        console.log(tasks[id])
        settasks(
            tasks.map((task) =>
            task.id=== id ? {...task, isComplete: !tasks[id].isComplete} : task
            ),
        )
    }

    return (
        <>
            <Form className='form_style' onSubmit={handleClick}>
                <h2>Create Task</h2>
                <Form.Group className="mb-3" controlId="newTask">
                    <Form.Label>New Task</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="taskName"
                        value={formData.taskName}
                        onChange={handleChange} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="newDate">
                    <Form.Label>Date to be completed by</Form.Label>
                    <Form.Control 
                        type="text"
                        name="taskDate"
                        value= {formData.taskDate} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Todo</th>
                        <th>Completed</th>
                        <th>Target Date</th>
                        <th>Date Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map ((task, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{task.task}</td>
                        <td className={task.isComplete ? 'completed' : ''}>{task.isComplete ? "Completed" : "Not Completed"}</td>
                        <td>{task.comDate}</td>
                        <td>{task.curDate}</td>
                        <td>
                            <Button 
                            className='complete-button'
                            variant="success" 
                            onClick={() => handleComplete(index)}>
                                {task.isComplete ? "Not Completed" : "Completed"}
                            </Button>&nbsp;
                            <Button variant="danger">
                                Delete
                            </Button>
                        </td>
                    </tr>  
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default Form1