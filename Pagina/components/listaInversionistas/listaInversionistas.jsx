import React from "react";

import MYNAVBAR from "../../componentsResources/MyNavbar";

import {
  Table,
  Popover,
  Whisper,
  Checkbox,
  Dropdown,
  IconButton,
  Progress,
  Row,
  Col,
} from "rsuite";
import MoreIcon from "@rsuite/icons/legacy/More";
import { Navbar } from "react-bootstrap";
//import { mockUsers } from "./mock";

const { Column, HeaderCell, Cell } = Table;

const testData = [
  {
    id: 1,
    avatar:
      "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    name: "Amazon",
    gender: "Male",
    city: "New York",
    street: "123 Street",
    progress: 80,
    rating: 4,
    amount: 35,
  },
  {
    id: 2,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    name: "Elon Musk",
    gender: "Female",
    city: "Los Angeles",
    street: "456 Avenue",
    progress: 90,
    rating: 1,
    amount: 1,
  },
  {
    id: 3,
    avatar:
      "https://c0.klipartz.com/pngpicture/454/857/gratis-png-mickey-mouse-logo-de-minnie-mouse-mano-de-mickey-s.png",
    name: "Disney",
    gender: "Female",
    city: "Los Angeles",
    street: "456 Avenue",
    progress: 90,
    rating: 3,
    amount: 70000,
  },
  {
    id: 4,
    avatar: "url_to_avatar_2",
    name: "Sony",
    gender: "Female",
    city: "Los Angeles",
    street: "456 Avenue",
    progress: 90,
    rating: 2,
    amount: 7000,
  },
  {
    id: 5,
    avatar: "url_to_avatar_2",
    name: "Facebook",
    gender: "Female",
    city: "Los Angeles",
    street: "456 Avenue",
    progress: 90,
    rating: 4,
    amount: 7000,
  },
  {
    id: 6,
    avatar: "url_to_avatar_2",
    name: "Twitter",
    gender: "Female",
    city: "Los Angeles",
    street: "456 Avenue",
    progress: 90,
    rating: 4,
    amount: 7000,
  },
  // Add more test data objects as needed
];
const data = testData;

const NameCell = ({ rowData, dataKey, ...props }) => {
  const speaker = (
    <Popover title="Descripcion">
      <p>
        <b>Nombre:</b> {rowData.name}
      </p>

      <p>
        <b>Ciudad:</b> {rowData.city}
      </p>

      <Link to="/otra-pagina">
        {" "}
        {/* Aquí especifica la ruta de la otra página */}
        <button>Ver</button>
      </Link>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper
        placement="top"
        trigger="hover"
        controlId="control-id-hover-enterable"
        speaker={speaker}
        enterable>
        <a>{rowData[dataKey]}</a>
      </Whisper>
    </Cell>
  );
};

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: "#f5f5f5",
        borderRadius: 6,
        marginTop: 2,
        overflow: "hidden",
        display: "inline-block",
      }}>
      <img src={rowData.avatar} width="40" />
    </div>
  </Cell>
);

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: "46px" }}>
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some((item) => item === rowData[dataKey])}
      />
    </div>
  </Cell>
);

const renderMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={1}>Seguir</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Patrocinar</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Añadir a Amigos</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Ver Proyecto</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Bloquear</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const ActionCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper
        placement="autoVerticalStart"
        trigger="click"
        speaker={renderMenu}>
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};

const listaInversionistas = () => {
  const [checkedKeys, setCheckedKeys] = React.useState([]);
  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (value, checked) => {
    const keys = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value, checked) => {
    const keys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
  };

  return (
    <Table height={900} data={data} id="table">
      <Column width={95} align="center">
        <HeaderCell style={{ padding: 0 }}>
          <div style={{ lineHeight: "40px" }}>
            <Checkbox
              inline
              checked={checked}
              indeterminate={indeterminate}
              onChange={handleCheckAll}
            />
          </div>
        </HeaderCell>
        <CheckCell
          dataKey="id"
          checkedKeys={checkedKeys}
          onChange={handleCheck}
        />
      </Column>
      <Column width={80} align="center">
        <HeaderCell>Avatar</HeaderCell>
        <ImageCell dataKey="avartar" />
      </Column>

      <Column width={160}>
        <HeaderCell>Nombre</HeaderCell>
        <NameCell dataKey="name" />
      </Column>

      <Column width={230}>
        <HeaderCell>Progreso</HeaderCell>
        <Cell style={{ padding: "10px 0" }}>
          {(rowData) => (
            <Progress percent={rowData.progress} showInfo={false} />
          )}
        </Cell>
      </Column>

      <Column width={100}>
        <HeaderCell>Calficiacion</HeaderCell>
        <Cell>
          {(rowData) =>
            Array.from({ length: rowData.rating }).map((_, i) => (
              <span key={i}>⭐️</span>
            ))
          }
        </Cell>
      </Column>

      <Column width={100}>
        <HeaderCell>Ingreso</HeaderCell>
        <Cell>{(rowData) => `$${rowData.amount}`}</Cell>
      </Column>

      <Column width={120}>
        <HeaderCell>
          <MoreIcon />
        </HeaderCell>
        <ActionCell dataKey="id" />
      </Column>
    </Table>
  );
};

export default listaInversionistas;
