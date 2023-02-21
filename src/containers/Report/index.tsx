import React, { useState, useEffect } from "react";
import { read, utils, writeFile } from "xlsx";
import axios from "axios";

const ReportComponent = () => {
  const [excelData, setExcelData] = useState([]);  

    const handleExport = () => {
        const headings = [[
            'Campaign Name',
            'Location',
            'Trade',
            'Advertised Number',
            'Inbound Calls',
            'Unique Inbound Calls',
            'Unique Inbound Calls Booked',
            'Inbound Booking Rate',
            'Total Jobs Booked',
            'Jobs Booked from New Customers',
            'Jobs Booked from Existing Customers',
            'Completed Revenue',
            'Total Sales',
            'Opportunity Conversion Rate',
            'Cost Per Lead',
            'Revenue Per Lead',
            'ROI %',
            'Total Job Average'
        ]];
        const Data = excelData.filter(excel => (
            delete excel['_id']
        ))
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, Data, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'Report.xlsx');
    }

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:8000/companyinfo/',
            headers: { }
        };
        
        axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            setExcelData(response.data);
        })
        .catch(function (error) {
            // console.log(error);
        });
    }, [])

  return (
    <>
      <div className="row m-2 mt-5">
          <div className="row">
            <div className="col-12">
                <div className="input-group">
                    <button onClick={handleExport} className="btn btn-primary float-left">
                        Export
                    </button>
                </div>
            </div>
          </div>
      </div>
      <div className="row m-4 overflow-hidden">
        <div className="w-100 overflow-scroll">
          <table className="table table-hover table-dark">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="text-nowrap">Id</th>
                <th scope="col" className="text-nowrap">Campaign Name</th>
                <th scope="col" className="text-nowrap">Location</th>
                <th scope="col" className="text-nowrap">Trade</th>
                <th scope="col" className="text-nowrap">Advertised Number</th>
                <th scope="col" className="text-nowrap">Inbound Calls</th>
                <th scope="col" className="text-nowrap">Unique Inbound Calls</th>
                <th scope="col" className="text-nowrap">Unique Inbound Calls Booked</th>
                <th scope="col" className="text-nowrap">Inbound Booking Rate</th>
                <th scope="col" className="text-nowrap">Total Jobs Booked</th>
                <th scope="col" className="text-nowrap">Jobs Booked from New Customers</th>
                <th scope="col" className="text-nowrap">Jobs Booked from Existing Customers</th>
                <th scope="col" className="text-nowrap">Completed Revenue</th>
                <th scope="col" className="text-nowrap">Total Sales</th>
                <th scope="col" className="text-nowrap">Opportunity Conversion Rate</th>
                <th scope="col" className="text-nowrap">Cost Per Lead</th>
                <th scope="col" className="text-nowrap">Revenue Per Lead</th>
                <th scope="col" className="text-nowrap">ROI %</th>
                <th scope="col" className="text-nowrap">Total Job Average</th>
              </tr>
            </thead>
            <tbody>
              {excelData.length ? (
                excelData.map((excel: any, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="">{excel['Campaign Name']}</td>
                    <td className="">{excel['Location']}</td>
                    <td className="">{excel['Trade']}</td>
                    <td className="">{excel['Advertised Number']}</td>
                    <td className="">{excel['Inbound Calls']}</td>
                    <td className="">{excel['Unique Inbound Calls']}</td>
                    <td className="">{excel['Unique Inbound Calls Booked']}</td>
                    <td className="">{excel['Inbound Booking Rate']}</td>
                    <td className="">{excel['Total Jobs Booked']}</td>
                    <td className="">{excel['Jobs Booked from New Customers']}</td>
                    <td className="">{excel['Jobs Booked from Existing Customers']}</td>
                    <td className="">{excel['Completed Revenue']}</td>
                    <td className="">{excel['Total Sales']}</td>
                    <td className="">{excel['Opportunity Conversion Rate']}</td>
                    <td className="">{excel['Cost Per Lead']}</td>
                    <td className="">{excel['Revenue Per Lead']}</td>
                    <td className="">{excel['ROI %']}</td>
                    <td className="">{excel['Total Job Average']}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={20} className="text-center">
                    No Data Found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReportComponent;
