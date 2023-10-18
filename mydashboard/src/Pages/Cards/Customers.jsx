import React from 'react'
import { useNavigate } from 'react-router-dom';
import { customers } from '../../data/customers';
import { Btn, PageHeader } from '../../Components/QbStrap';
import CustomTable from '../../Components/CustomTable';
import { Card } from 'antd';

const Customers = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "custID",
      key: "custID",
    },
    {
      title: "Csutomer Name",
      dataIndex: "firstName",
      key: "firstName",
      filterSearch: true,
      textSort: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sort: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      filterSearch: true,
    },
  ];

  return (
    <div>
      <PageHeader
        margin={"30px 0 40px 0"}
        title={`Customers`}
        description={
          <div>
            List of all Customers.
            <a style={{ color: "#040440" }} href="#" target="_blank">
              &nbsp;Need Help?
            </a>
          </div>
        }
        buttons={[
          <>
            <Btn
              text="Create Customer"
              style={{ marginLeft: "15px" }}
              onClick={() => {
                navigate("/customers/create");
              }}
            />
          </>,
        ]}
      />
      <Card>
        <CustomTable data={customers} columns={columns} />
      </Card>
    </div>
  );
}

export default Customers;