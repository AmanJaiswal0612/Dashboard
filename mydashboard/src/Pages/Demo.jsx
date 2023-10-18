import React, { useState } from "react";
import CustomTable from "../Components/CustomTable";
import SearchBar, { BackBtn, Btn, DashBoardCard, DonatChart, MontlyChart, PageHeader } from "../Components/QbStrap";
import dollar from "../assets/icons/dollar.png";
import balance from "../assets/icons/balance.png";
import order from "../assets/icons/order.png";
import sale from "../assets/icons/sale.png";
import { Card } from "antd";
import { dataSource } from "../data/products";
const Demo = () => {
  const [selectedRowKeys, setSelectedRows] = useState(["1"]);
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
      // filters: [
      //   {
      //     text: "Mike",
      //     value: "Mike",
      //   },
      //   {
      //     text: "John",
      //     value: "John",
      //   },
      // ],
      // filterSearch: true,
      // textSort: true,
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
      //  fixed: "right",
    },
    {
      title: "Price",
      dataIndex: "dealerPrice",
      key: "dealerPrice",
      //  fixed: "right",
    },
  ];



const [data,setData] = useState(dataSource);

const  [filteredData, setFilteredData] = useState(dataSource);

  // const dataSource = [
  //   {
  //     productID: "1",
  //     name: "Nitin",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "2",
  //     name: "Chaithanya",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "3",
  //     name: "Nikhil",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "4",
  //     name: "Akshay",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "5",
  //     name: "Yash",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "6",
  //     name: "Sujeet",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "7",
  //     name: "Nitin",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "8",
  //     name: "Aman",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     productID: "9",
  //     name: "Chaitu",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];
  const onChangeRowSelection = (row, num) => {
    setSelectedRows(row.map((el) => el.productID));
    console.log(row, num, "adnbjahsbdasd");
  };

    const handleSearch = (searchTerm) => {
      // Filter the data based on the search term
      const filteredData = data.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Update the filtered data state
      setFilteredData(filteredData);
    };
  return (
    <div>
      {/* <PageHeader
            margin={"30px 0 40px 0"}
            title={`Home Page`}
            description={
               <div style={{ color: "#7b7f82" }}>
                  List of all the respective Stores.
                  <a href="https://queuebuster.co/help" target="_blank">
                     &nbsp;Need Help?
                  </a>
               </div>
            }
            buttons={[
               <>
                  <BackBtn />
                  <Btn text="Save" style={{ marginLeft: "15px" }} />
               </>,
            ]}
         /> */}

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        <DashBoardCard
          logo={dollar}
          title={"Earning"}
          earning={"$198k"}
          upDown={{ color: "#1DA847", percentage: "+30%", text: "this week" }}
        />

        <DashBoardCard
          logo={order}
          title={"Orders"}
          earning={"$2.4k"}
          upDown={{ color: "#D5235D", percentage: "-2%", text: "this month" }}
        />

        <DashBoardCard
          logo={balance}
          title={"Balance"}
          earning={"$2.4k"}
          upDown={{ color: "#D5235D", percentage: "-2%", text: "this month" }}
        />

        <DashBoardCard
          logo={sale}
          title={"Total sale"}
          earning={"$89"}
          upDown={{ color: "#1DA847", percentage: "+11%", text: "this week" }}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "65% 33%",
          gap: "2%",
        }}
      >
        <MontlyChart />
        <DonatChart />
      </div>

      <Card style={{ marginTop: "30px" }}>
        <div style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
          {" "}
          <p style={{ fontSize: "16px", fontWeight: "700" }}>Product Shell</p>
          <SearchBar onSearch={handleSearch} />
        </div>
        <CustomTable
          data={filteredData}
          columns={columns}
          // onChangeRowSelection={onChangeRowSelection}
          // isRowSelection={true}
          // rowSelectionType="checkbox"
          // selectedRowKeys={selectedRowKeys}
        />
      </Card>
    </div>
  );
};

export default Demo;
