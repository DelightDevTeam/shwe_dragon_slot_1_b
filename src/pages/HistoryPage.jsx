import React from 'react'
import { Form, Tab, Table, Tabs } from 'react-bootstrap'
import '../assets/css/history.css'
const HistoryPage = () => {
    const historyData = [
        {
            id: 'today',
            title: 'Today',
            data: ''
        },
        {
            id: 'yesterday',
            title: 'Yesterday',
            data: ''
        }, {
            id: 'thisweek',
            title: 'This Week',
            data: ''
        }, {
            id: 'lastweek',
            title: 'Last Week',
            data: ''
        },
    ]
    return (
        <div className='py-4 px-2 px-sm-3 px-md-5'>
            <h1 className="mb-5 text-center text-light">History</h1>
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
            <Tabs
                defaultActiveKey="today"
                id="uncontrolled-tab-example"
                className="mb-3 customTabs"

            >

                {historyData.map((item) => {
                    return <Tab eventKey={item.id} title={item.title}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Amount</th>
                                    <th>New Balance</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td >Harry</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                })}


            </Tabs>
        </div>
    )
}

export default HistoryPage
