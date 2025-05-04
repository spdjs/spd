import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import { EnabledOptions } from "../../consts";
import React from "react";

export const SupplierEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
    meta: {
      select: "*, settlement_types(id,name)",
    },
  });

  const supplierData = queryResult?.data?.data;

  const { selectProps: senttlementTypeSelectProps } = useSelect({
    resource: "settlement_types",
    optionLabel: "name",
    optionValue: "id",
    // queryOptions: {
    // },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Address"}
          name="address"
          rules={[]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"File Code"}
          name={["file_code"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Credit Code"}
          name={["credit_code"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Senttlement Type"}
          name={['settlement_type_id']}
          initialValue={formProps.initialValues?.settlement_type_id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...senttlementTypeSelectProps} style={{ width: 120 }} />
        </Form.Item>
        <Form.Item
          label={"Enabled"}
          name={['enabled']}
          initialValue={formProps?.initialValues?.enabled}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={EnabledOptions}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
