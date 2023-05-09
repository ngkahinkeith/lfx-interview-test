import { useQuery } from "@tanstack/react-query";
import { detailData, listData } from "../mockData";

export const useGetContactList = (
  name?: string,
) => {
  return useQuery(["get-contact-list", name], () =>
  listData(name)
  );
};

export const useGetContactDetail = (contactId: number) => {
  return useQuery(["get-contact-detail", contactId], () =>
    detailData(contactId)
  );
};
