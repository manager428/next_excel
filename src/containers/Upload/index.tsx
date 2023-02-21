import React, { useState } from "react";
import { read, utils } from "xlsx";
import styles from '@/styles/Excel.module.scss'
import axios from "axios";

const UploadContainer = () => {
  const [excelData, setExcelData] = useState([]);
  const handleImport = ($event: any) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows: any = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setExcelData(rows);
          const data = JSON.stringify(rows);
          var config = {
            method: "post",
            url: `${process.env.NEXT_PUBLIC_BACKEDN_URL}/companyinfo/`,
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <div className="row m-2 mt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="input-group">
                  <div className={styles.fileUploadWrapper} data-text="Select your file!">
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="inputGroupFile"
                      required
                      onChange={handleImport}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile">
                      Choose file
                    </label>
                  </div>
                </div>
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

export default UploadContainer;
