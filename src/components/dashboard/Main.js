import React, {useState, useEffect} from 'react'

import './main.css';


export default function Main() {
  const [apiData, setapiData] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  // uncomment the below useEffect function till stop in order to use the api directly
  // while publishing it to github pages this call was not working coz of http v/s https security issue
  // so I have used a lcoal file json file in order to get the values and work.
  // In general practice, you will have access to the api and one should directly work with api only.

  // useEffect(() => {
  //   async function fetchRecords() {
  //     const response = await fetch("http://starlord.hackerearth.com/bankAccount");
  //     const json = await response.json();
  //     setapiData(json.reverse())
  //     //setapiData(json.sort((a, b) => (parseDate(a.Date) > parseDate(b.Date)) ? -1 : 1))
  //   }
  //   fetchRecords();
  // }, [])

  // This function is using local file to fetch the json data. This was done as while publishing the react app
  // to github, we were not able to fetch the data directly from the api call.
  // Comment it in case you are using the above function for api call. Either of one should be used.
  useEffect(() => {
    async function fetchRecords() {
      const response = require('./api-data.json')
      setapiData(response.reverse())
    }
    fetchRecords();
  }, [])

  function parseDate(d) {
    const months = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
    const p = d.split(' ');
    return new Date(p[2], months[p[1].toLowerCase()], p[0]);
  }

  function handleColumnSort(e, colName){
    const accDetails = apiData
    // accDetails.sort((a, b) => (parseDate(a.Date) > parseDate(b.Date)) ? true : false)
    accDetails.sort((a, b) => (a["Deposit AMT"] > b["Deposit AMT"]) ? true : false)
    setapiData(accDetails)
    console.log('Date col is clicked')
  }

  // const handleColumnSort = useEffect(
  //   () => {
  //     console.log('Date col is clicked')
  //     setapiData(apiData.sort((a, b) => (parseDate(a.Date) > parseDate(b.Date)) ? -1 : 1))
  //   },
  //   [apiData],
  // )

  // apiData.sort(function(a, b)  {
  //   if (a.Date === b.Date){
  //     return -1
  //   }
  //   return parseDate(a.Date) > parseDate(b.Date) ? -1 : 1
  // })

    // get the max page count for paginaiton. We need to keep the max entries per page as 10
    const maxPageNum = Math.ceil(apiData.length / 10);

    var handlePageBtnClick = (pageNav) => {
      if (pageNav === 'prevPage'){
        if (pageNumber > 1){
          setpageNumber(pageNumber - 1)
        }
      } else if(pageNav === 'nextPage'){
        if (pageNumber < maxPageNum){
          setpageNumber(pageNumber + 1)
        }
      }
    }
    var newData = apiData;
  return (
    <div>
      <table>
        <tbody>
          <tr key="header">
            <th onClick={e => handleColumnSort(e, 'Date')}>Date</th>
            <th>Transaction Details</th>
            <th>Trasaction Amount</th>
            <th>Balance Amount</th>
          </tr>
          {
            apiData.slice((pageNumber - 1)*10, pageNumber*10).map((rec, id) => {
              let trancType;
              if(rec["Deposit AMT"]){
                trancType = <td style={{color:"green"}}> + {rec["Deposit AMT"]}</td>
              }else{
                trancType = <td style={{color:"red"}}> - {rec["Withdrawal AMT"]}</td>
              }
              return (
                <tr key={id}>
                  <td>{rec["Date"]}</td>
                  <td>{rec["Transaction Details"]}</td>
                  {trancType}
                  <td>{rec["Balance AMT"]}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='tablePagination' style={{textAlign: "right", margin:"10px"}}>
        <button disabled={pageNumber === 1 ? true : false} onClick={() => handlePageBtnClick('prevPage')}> Prev</button>
        &nbsp;&nbsp; Page : {pageNumber} &nbsp;&nbsp;
        <button disabled={pageNumber === maxPageNum ? true : false} onClick={() => handlePageBtnClick('nextPage')}> Next </button>
      </div>

    </div>
  )
}
