import React from "react";
import { useParams } from "react-router-dom";
import { useGetContactDetail } from "../../api/react-query/contact";
import { Descriptions } from "antd";

function ListDetail(): JSX.Element {
  const { id: contactId } = useParams<{ id?: string }>();
  if (!contactId) throw new Error("Contact ID missing");
  const { data: contact, isError } = useGetContactDetail(parseInt(contactId, 10));
  return (
    <>
      {isError && <div>Contact not found</div>}
      {!isError && (
        <Descriptions title="Contact Info" bordered>
          <Descriptions.Item label="Name">{contact?.name}</Descriptions.Item>
          <Descriptions.Item label="Employment ID">{contact?.id.toString().padStart(3, "0")}</Descriptions.Item>
          <Descriptions.Item label="Gender">{contact?.gender}</Descriptions.Item>
          <Descriptions.Item label="Role">{contact?.role}</Descriptions.Item>
          <Descriptions.Item label="Telephone" span={3}>{contact?.phone}</Descriptions.Item>
          <Descriptions.Item label="Email" span={3}>{contact?.email}</Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>{contact?.address}</Descriptions.Item>
        </Descriptions>
      )}
    </>
  )
}

export default ListDetail;
