import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";
import { EnabledValueLabelMap } from "../../consts";
import React from "react";

const { Title } = Typography;

export const SupplierShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, settlement_types(id,name)",
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: settlementTypeData, isLoading: settlementTypeIsLoading } = useOne({
    resource: "settlement_types",
    id: record?.settlement_types?.id || "",
    queryOptions: {
      // enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"Address"}</Title>
      <MarkdownField value={record?.address} />
      <Title level={5}>{"File Code"}</Title>
      <TextField value={record?.file_code} />
      <Title level={5}>{"Credit Code"}</Title>
      <TextField value={record?.credit_code} />
      <Title level={5}>{"Settlement Type"}</Title>
      <TextField
        value={
          settlementTypeIsLoading ? <>Loading...</> : <>{settlementTypeData?.data?.name}</>
        }
      />
      <Title level={5}>{"Enabled"}</Title>
      <TextField value={
          EnabledValueLabelMap[
            String(record?.enabled) as keyof typeof EnabledValueLabelMap
          ]
        } />
      <Title level={5}>{"CreatedAt"}</Title>
      <DateField value={record?.created_at} />
    </Show>
  );
};
