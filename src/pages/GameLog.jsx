import React from 'react'
import { Form, Tab, Table, Tabs } from 'react-bootstrap'
import '../assets/css/history.css'
const GameLogPage = () => {

    return (
        <div className='py-4 px-2 px-sm-3 px-md-5'>
            <h1 className="mb-5 text-center text-light">Game Log Page</h1>
            <Form className='row mb-4'>
                <Form.Group className="mb-3 col-6 col-sm-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="date" placeholder=" " />
                </Form.Group>
                <span className='d-none d-sm-inline col-sm-1 text-light text-center' >~</span>
                <Form.Group className="mb-3 col-6 col-sm-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="date" placeholder=" " />
                </Form.Group>
                <button style={{ height: '100%' }} className="mx-auto ms-5 btn btn-primary col-6 col-sm-2">Submit</button>

            </Form>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Game</th>
                        <th>Win/Lose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Win</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Lose</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default GameLogPage
