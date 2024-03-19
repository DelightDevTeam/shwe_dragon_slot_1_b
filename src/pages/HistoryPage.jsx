import React from 'react'
import { Form, Tab, Table, Tabs } from 'react-bootstrap'
import '../assets/css/history.css'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'
const HistoryPage = () => {
    const {data: logs, loading, error} = useFetch(BASE_URL+"/transactions");
    // console.log(logs);

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
        <div className='py-4 container'>
            <h1 className="mb-5 text-center text-light">History</h1>
            <form className='mb-4'>
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Start Date</label>
                            <input type="date" name="" id="" className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">End Date</label>
                            <input type="date" name="" id="" className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label"></label>
                            <button className="btn btn-warning d-block" type="submit" style={{ marginTop: "7px" }}>Filter</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="table-responsive text-center">
                <table className="table table-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            {/* <th>ဂိမ်းအခြေအနေ</th> */}
                            <th>အပိတ်လက်ကျန်</th>
                            <th>အမျိုးအစား</th>
                            <th>ပမာဏ (ကျပ်)</th>
                            <th>အချိန်</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            loading && (
                                <div className="text-center text-white mt-3">
                                    loading....
                                </div>
                            
                            )
                        }
                        {logs && logs.map((log, index)=>(
                            <tr key={index}>
                                <td>{++index}</td>
                                {/* <td className={`${log.status == "win" ? "text-success" : "text-danger"}`}>{log.status.toUpperCase()}</td> */}
                                <td>{log.closing_balance.toLocaleString()}</td>
                                <td className={`${log.type == "deposit" ? "text-success" : "text-danger"}`}>{log.type}</td>
                                <td>{parseFloat(log.amount).toLocaleString()}</td>
                                <td>{log.datetime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <Form className='row mb-4'>
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


            </Tabs> */}
        </div>
    )
}

export default HistoryPage
