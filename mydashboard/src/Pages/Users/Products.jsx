import React from "react";
import { useNavigate } from "react-router-dom";
import { Btn, PageHeader } from "../../Components/QbStrap";
import { dataSource } from "../../data/products";
import CustomTable from "../../Components/CustomTable";
import { Card } from "antd";


const Products = () => {
   const navigate = useNavigate();
     const columns = [
       {
         title: "",
         dataIndex: "",
         render: (col) => (
           <img
             height={50}
             width={50}
             src={col.imageLocation}
             alt="productimage"
           />
         ),
         key: "imageLocation",
       },
       {
         title: "Product Name",
         dataIndex: "productName",
         key: "productName",
         filters: [
           {
             text: "Mike",
             value: "Mike",
           },
           {
             text: "John",
             value: "John",
           },
         ],
         filterSearch: true,
         textSort: true,
       },
       {
         title: "Barcode",
         dataIndex: "barcodes",
         key: "barcodes",
         sort: true,
       },
       {
         title: "SKU",
         dataIndex: "skus",
         key: "skus",
         filterSearch: true,
       },
       {
         title: "Price",
         dataIndex: "dealerPrice",
         key: "dealerPrice",
       },
     ];

   return (
     <div>
       <PageHeader
         margin={"30px 0 40px 0"}
         title={`Products`}
         description={
           <div>
             List of all Products.
             <a
               style={{ color: "#040440" }}
               href="#"
               target="_blank"
             >
               &nbsp;Need Help?
             </a>
           </div>
         }
         buttons={[
           <>
             <Btn
               text="Create Product"
               style={{ marginLeft: "15px" }}
               onClick={() => {
                 navigate("/products/create");
               }}
             />
           </>,
         ]}
       />
       <Card>
         <CustomTable data={dataSource} columns={columns} />
       </Card>
     </div>
   );
};

export default Products;
