import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ProductData, SalesData } from "../types";
import data from "../assets/stackline_frontend_assessment_data_2021.json";


const StacklineTable: React.FC = () => {
  const productData: ProductData = data[0];
  const salesData: SalesData[] = productData.sales; 

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Week Ending Date</TableCell>
            <TableCell>Retail Sales</TableCell>
            <TableCell>Wholesale Sales</TableCell>
            <TableCell>Units Sold</TableCell>
            <TableCell>Retailer Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesData.map((sale, index) => (
            <TableRow key={index}>
              <TableCell>{sale.weekEnding}</TableCell>
              <TableCell>{sale.retailSales.toLocaleString()}</TableCell>
              <TableCell>{sale.wholesaleSales.toLocaleString()}</TableCell>
              <TableCell>{sale.unitsSold}</TableCell>
              <TableCell>{sale.retailerMargin.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StacklineTable;