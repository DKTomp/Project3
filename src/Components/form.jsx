import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Table} from 'react-bootstrap';
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

    function handleSubmit(event) {
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
        setTableData(tasksUpdate)
        setFormData({
            taskDate: '',
            taskName: '',
        })
    }

    function handleComplete(event) {
        
        settasks(
            tasks.map((task) =>
            parseInt(event.target.value) === task.id ? {...task, isComplete: !task.isComplete} : task)
        )

        setTableData(
            tasks.map((task) =>
            parseInt(event.target.value) === task.id ? {...task, isComplete: !task.isComplete} : task)
        )
    }

    function handleDelete(event, taskIndex) {
        const newtasks = tasks.filter((task,index) => index!==taskIndex)
        settasks(newtasks)
        setTableData(newtasks)
    }
    
    const [tableData, setTableData] = useState(tasks)
    const showAll = () => {
        setTableData(tasks)
    }
    
    const showCompleted = () => {
        const completedTasks = tasks.filter((task) => task.isComplete === true)
        setTableData(completedTasks)
        console.log(tasks)
    }

    const showUncompleted = () => {
        const uncompletedTasks = tasks.filter((task) => task.isComplete !== true)
        setTableData(uncompletedTasks)
    }

    return (
        <>
            <Form className='form_style' onSubmit={handleSubmit}>
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

                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className='radio-buttons'>
                <div>
                    <input
                        className='radio-but'
                        type='radio'
                        id='alltasks'
                        name='display-selector'
                        onChange={showAll}
                    />
                    <label>All Tasks</label>
                </div>

                <div>
                    <input
                        className='radio-but'
                        type='radio'
                        id='completed'
                        name='display-selector'
                        onChange={showCompleted}
                    />
                    <label>Completed Tasks</label>
                </div>

                <div>
                    <input
                        className='radio-but'
                        type='radio'
                        id='uncompleted'
                        name='display-selector'
                        onChange={showUncompleted}
                    />
                    <label>Uncompleted Tasks</label>
                </div>
            </div>

            <Table striped bordered className='table-style'>
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
                    {tableData.map ((task, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{task.task}</td>
                        <td className={task.isComplete ? 'completed' : 'uncompleted'}>{task.isComplete ? "Completed" : "Not Completed"}</td>
                        <td>{task.comDate}</td>
                        <td>{task.curDate}</td>
                        <td>
                            <Button 
                            className='complete-button'
                            variant="success"
                            value={task.id}
                            onClick={(event, value) => (handleComplete (event))}>
                                {task.isComplete ? "Not Completed" : "Completed"}
                            </Button>&nbsp;
                            <Button 
                            variant="danger"
                            onClick={(event)=>(handleDelete (event,index))}>
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