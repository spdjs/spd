import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";
import { EnabledValueLabelMap } from "../../consts";
import React from "react";

export const SupplierList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, settlement_types(id,name)",
    },
  });

  const { data: settlementTypeData, isLoading: settlementTypeIsLoading } = useMany({
    resource: "settlement_types",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.settlement_types?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      // enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column
          dataIndex="address"
          title={"Address"}
          render={(value: any) => {
            if (!value) return "-";
            return <MarkdownField value={value.slice(0, 80) + "..."} />;
          }}
        />
        <Table.Column dataIndex="file_code" title={"File Code"} />
        <Table.Column dataIndex="credit_code" title={"Credit Code"} />
        <Table.Column
          dataIndex={"settlement_types"}
          title={"Settlement Type"}
          render={(value) =>
            settlementTypeIsLoading ? (
              <>Loading...</>
            ) : (
              settlementTypeData?.data?.find((item) => item.id === value?.id)?.name
            )
          }
        />
        <Table.Column dataIndex="enabled" title={"Enabled"} render={(value) =>
            (
              EnabledValueLabelMap[
                String(value) as keyof typeof EnabledValueLabelMap
              ]
            )
          } />
        <Table.Column
          dataIndex={["created_at"]}
          title={"Created at"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
