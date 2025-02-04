/** This file helps to parse the JSON data into the typescript format */
export interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }
  
export interface ProductData {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: { customer: string; review: string; score: number }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: SalesData[];
}

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}
  
