import React, { useEffect, useState } from 'react'
import { Form, Spinner, Tab, Table, Tabs } from 'react-bootstrap'
import '../assets/css/history.css'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'
import { useNavigate } from 'react-router-dom'

const GameLogPage = () => {
    let auth = localStorage.getItem("authToken");
    let navigate = useNavigate();
    useEffect(() => {
        if (!auth) {
          navigate("/login");
        }
      }, [navigate]);
    
    const [url, setUrl] = useState("/wager-logs?type=");
    const [param, setParam] = useState("today");
    const {data: logs, loading, error} = useFetch(BASE_URL+url+param);
    // console.log(logs);

    return (
        <div className='container py-4'>
            <h1 className="mb-5 text-center text-light">Game Logs</h1>
            {/* <form className='mb-4'>
                <div className="d-flex justify-content-start">
                    <div className="">
                        <div className="">
                            <label htmlFor="" className="form-label">Start Date</label>
                            <input type="date" name="" id="" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="">
                            <label htmlFor="" className="form-label">End Date</label>
                            <input type="date" name="" id="" className='form-control form-control-sm' />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="" className="form-label"></label>
                            <button className="btn btn-sm btn-warning d-block" type="submit" style={{ marginTop: "7px" }}>Filter</button>
                        </div>
                    </div>
                </div>
            </form> */}
            <div className="d-flex mb-3">
                <button 
                className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "today" ? "active" : ""}`}
                onClick={()=>setParam("today")}
                >Today</button>
                <button 
                className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "yesterday" ? "active" : ""}`}
                onClick={()=>setParam("yesterday")}
                >Yesterday</button>
                <button 
                className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "this_week" ? "active" : ""}`}
                onClick={()=>setParam("this_week")}
                >This Week</button>
                <button 
                className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "last_week" ? "active" : ""}`}
                onClick={()=>setParam("last_week")}
                >Last Week</button>
            </div>

            {logs && (
            <div className="table-responsive text-center">
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            <th>ဂိမ်းအခြေအနေ</th>
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
                                <td>{parseFloat(log.amount).toLocaleString()}</td>
                                <td>{log.datetime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {logs.length == 0 && (
                    <p className='text-center text-danger'>Data များ မရှိသေးပါ။</p>
                )}
            </div>
            )}
        </div>
    )
}

export default GameLogPage
