import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Input,
  Space,
  Form,
  Select,
  Card,
  Row,
  Col,
  Typography,
} from "antd";
import backIcon from "../assets/icons/back.svg";
import styles from "../css/QbStrap.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Chart } from "react-google-charts";
import { useState } from "react";
const {  Paragraph, Text } = Typography;

export const BreadcrumbNav = ({ path, style }) => {
  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
        fontSize: "16px",
        fontWeight: "500",
        ...style,
      }}
    >
      {path &&
        path.map((el, idx) => {
          return (
            <Breadcrumb.Item key={Math.random * idx * Math.random}>
              {style?.color ? (
                <p style={{ ...style, fontSize: "25px" }}>{el.title}</p>
              ) : (
                el.title
              )}
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
};

export const TextInput = (props) => {
  let rules = [
    {
      required: props.required,
      message: props.validationMessage,
    },
  ];
  if (props.rules) {
    rules = [...props.rules, ...rules];
  }
  if (props.validator instanceof Function) {
    rules.push({ validator: props.validator });
  }

  return (
    <>
      <Form.Item name={props.name} label={props.label} rules={rules}>
        <Input
          name={props.name}
          placeholder={props.placeholder}
          prefix={props.prefix ? props.prefix : ""}
          suffix={props.suffix ? props.suffix : ""}
          classNames={props.classNames}
          disabled={props.disabled}
          style={{ height: "36px", ...props.styles }}
          type={props?.type ? props.type : "text"}
          onChange={
            props.onChange instanceof Function ? props.onChange : () => {}
          }
          onBlur={props.onBlur instanceof Function ? props.onBlur : () => {}}
          value={props.value !== undefined ? props.value : ""}
        />
      </Form.Item>
    </>
  );
};

export const PasswordInput = (props) => {
  // const validatePassword = (_, value) => {
  //    if (!value) {
  //       return Promise.resolve(); // Resolved promise for empty value (no validation required)
  //    }
  //    // Regular expression to validate password
  //    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //    if (!regex.test(value)) {
  //       return Promise.reject(
  //          "Password must be at least 8 characters long and contain at least one alphabet, one number, and one special character."
  //       );
  //    }
  //    return Promise.resolve();
  // };

  const rules = [
    {
      required: true,
      message: "Please Enter Password",
    },
  ];
  return (
    <Form.Item name={props.name} label={props.label} rules={rules}>
      <Input.Password
        name={props.name}
        placeholder={props.placeholder}
        classNames={props.classNames}
        style={{ height: "36px", ...props.styles }}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        onChange={
          props.onChange instanceof Function ? props.onChange : () => {}
        }
        value={props.value !== undefined ? props.value : ""}
      />
    </Form.Item>
  );
};

export const BackBtn = () => {
  return (
    <Button className={styles.backBtn}>
      <img src={backIcon} alt="back" />
      <span style={{ marginLeft: "5px" }}>Back</span>
    </Button>
  );
};

export const Btn = (props) => {
  return (
    <Button
      className={styles.saveBtn}
      style={{ ...props.style }}
      onClick={props.onClick instanceof Function ? props.onClick : () => {}}
      type="primary"
    >
      {props?.text}
    </Button>
  );
};

export const PageHeader = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: props.margin !== undefined ? props.margin : 0,
      }}
    >
      <div style={{ width: "50%" }}>
        <div
          style={{
            margin: "0 0 8px 0",
            color: "black",
            fontSize: "20px",
            fontWeight: 500,
            ...props.titleStyles,
          }}
        >
          {props.title}
        </div>
        <div style={{ margin: 0, color: "#7b7f82", fontSize: "14px" }}>
          {props.description}
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {props.buttons !== undefined ? props.buttons : null}
      </div>
    </div>
  );
};

export const DropDownInput = (props) => {
  let rules = [
    {
      required: props.required,
      message: props.validationMessage,
    },
  ];
  if (props.rules) {
    rules = [...props.rules, ...rules];
  }
  return (
    <Form.Item name={props.name} label={props.label} rules={rules}>
      <Select
        mode={props.multiSelect ? "multiple" : ""}
        allowClear
        style={{
          width: "100%",
          ...props.style,
        }}
        placeholder={props.placeholder ? props.placeholder : "Please select"}
        defaultValue={props.defaultValue ? props.defaultValue : []}
        onChange={
          props.onChange instanceof Function ? props.onChange : () => {}
        }
        options={props.options ? props.options : []}
      />
    </Form.Item>
  );
};

export const DashBoardCard = (props) => {
  return (
    <Card style={{ width: 300 }}>
      <Row gutter={16} style={{ alignItems: "center" }}>
        <Col span={8}>
          <img
            src={props.logo} // Replace with the path to your logo image
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col span={16}>
         
            <Text level={2} style={{ color: "lightgray", lineHeight: "0px" }}>
              {props.title}
            </Text>
            <p
              style={{ fontSize: "25px", fontWeight: "800", lineHeight: "0px" }}
            >
              {props.earning}
            </p>
            <p style={{ lineHeight: "0px" }}>
              <span style={{ color: props.upDown.color }}>
                {props.upDown?.percentage} &nbsp;
              </span>
              {props.upDown.text}
            </p>
        </Col>
      </Row>
    </Card>
  );
};




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const MontlyChart = (props) => {
    const options = {
     responsive: true,
     plugins: {
       legend: {
         position: "top",
       },
       title: {},
     },
     scales: {
       x: {
         grid: {
           display: false,
         },
       },

       y: {
         grid: {
           display: false,
           //   color: "rgba(217,143,7,0.1)",
         },
         ticks: {
           display: false,
           border: "none",
         },
       },
     },
   };

   const labels = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec",
   ];

    const data = {
     labels,
     datasets: [
       {
         label: "",
         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
         backgroundColor: "#F2EFFF",
         borderRadius: "10",
       },
     ],
   };
  return (
    <Card>
      <Bar options={options} data={data} />
    </Card>
  )
};






export function DonatChart() {

    const data = [
     ["Task", "Hours per Day"],
     ["Work", 11],
     ["Eat", 2],
     ["Commute", 2],
     ["Watch TV", 2],
     ["Sleep", 7], // CSS-style declaration
   ];

    const options = {
      //   title: "My Daily Activities",
      title: { display: false },
      // legend: { display: false },
      pieHole: 0.6,
      is3D: false,
      legend: {
        display: true,
        position: "none",
        labels: {
          fontSize:  30,
          padding: 40,
        },
      },
    };
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}


export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search "
        value={searchTerm}
        onChange={handleSearch}
        style={{border:'1px solid lightgray',borderRadius:'5px',height:'25px',width:'200px'}}
      />
    </div>
  );
};

export default SearchBar;

