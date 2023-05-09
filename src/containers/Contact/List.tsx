import React, { useState } from "react";
import { useGetContactList } from "../../api/react-query/contact";
import type { ColumnsType } from "antd/es/table";
import type { Contact } from "../../api/mockData";
import { Button, Input, Table } from "antd";
import { useNavigate } from "react-router-dom";

function ListContact(): JSX.Element {
  const [searchText, setSearchText] = useState<string | undefined>("");
  const navigate = useNavigate();
  const contactList = useGetContactList(searchText);

  const columns: ColumnsType<Contact> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          // Button to navigate user to detail page
          <Button onClick={() => navigate(`/contact/${record.id}`)}>Detail</Button>
      ),
    },
  ];

  return (
    <>
      {/* Search input */}
      <Input placeholder="Search by name" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="mb-4" />
      <Table<Contact>
        columns={columns}
        loading={contactList.isFetching}
        dataSource={contactList.data?.map((contact) => ({key: contact.id, ...contact}))}
        pagination={{ position: ["bottomCenter"] }}
      />
    </>
  )
}

export default ListContact;
