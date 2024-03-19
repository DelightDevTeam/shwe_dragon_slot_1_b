import React from 'react'
import { Form, Spinner, Tab, Table, Tabs } from 'react-bootstrap'
import '../assets/css/history.css'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

const GameLogPage = () => {

    const {data: logs, loading, error} = useFetch(BASE_URL+"/wager-logs");
    // console.log(logs);

    return (
        <div className='container py-4'>
            <h1 className="mb-5 text-center text-light">Game Logs</h1>
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
                <table className="table bg-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            <th>ဂိမ်းအခြေအနေ</th>
                            {/* <th>အပိတ်လက်ကျန်</th> */}
                            {/* <th>အမျိုးအစား</th> */}
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
                                <td className={`${log.status == "win" ? "text-success" : "text-danger"}`}>{log.status.toUpperCase()}</td>
                                {/* <td>{log.closing_balance.toLocaleString()}</td> */}
                                {/* <td>{log.type}</td> */}
                                <td>{parseFloat(log.amount).toLocaleString()}</td>
                                <td>{log.datetime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameLogPage
