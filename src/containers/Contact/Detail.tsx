import React from "react";
import { useParams } from "react-router-dom";
import { useGetContactDetail } from "../../api/react-query/contact";
import { Descriptions, Spin } from "antd";

function ListDetail(): JSX.Element {
  const { id: contactId } = useParams<{ id?: string }>();
  if (!contactId) throw new Error("Contact ID missing");
  const { data: contact, isFetching, isError, error, isSuccess, isFetched } = useGetContactDetail(parseInt(contactId, 10));
  if (isError) {
    if (typeof error === "string") {
      throw new Error(error);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unexpected Error");
    }
  }
  return (
    <>
      {isFetching && (<Spin className="h-full w-full flex justify-center items-center" />)}
      {isFetched && isSuccess && contact &&(
        <Descriptions title="Contact Info" bordered>
          <Descriptions.Item label="Name" span={1}>{contact.name}</Descriptions.Item>
          <Descriptions.Item label="Gender" span={1}>{contact.gender}</Descriptions.Item>
          <Descriptions.Item label="Role" span={1}>{contact.role}</Descriptions.Item>
          <Descriptions.Item label="Telephone" span={3}>{contact.phone}</Descriptions.Item>
          <Descriptions.Item label="Email" span={3}>{contact.email}</Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>{contact.address}</Descriptions.Item>
        </Descriptions>
      )}
    </>
  )
}

export default ListDetail;
