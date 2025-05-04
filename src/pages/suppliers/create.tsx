import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import { DisabledValue, EnabledOptions } from "../../consts";
import type { ISettlementType } from "../../interfaces";
import React from "react";

export const SupplierCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: settlementTypeSelectProps } = useSelect<ISettlementType>({
    resource: "settlement_types",
    optionLabel: "name",
    optionValue: "id",
    queryOptions: { },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          rules={[
            {},
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"File Code"}
          name="file_code"
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
          name="credit_code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Contact Person"}
          name="contact_person"
          rules={[
            {},
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Contact Number"}
          name="contact_number"
          rules={[
            {},
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Settlement Type"}
          name={"settlement_type_id"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...settlementTypeSelectProps} />
        </Form.Item>
        <Form.Item
          label={"Enabled"}
          name={["enabled"]}
          initialValue={DisabledValue}
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
    </Create>
  );
};
