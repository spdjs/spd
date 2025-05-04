import type { ResourceProps } from "@refinedev/core";

export const TopMenuNames = {
  demo: "Demo"
}

export enum ResourceKeys {
  suppliers = "suppliers",
  settlement_types = "settlement_types"
}

export const Resources: ResourceProps[] = [{
  name: TopMenuNames.demo,
},{
  name: ResourceKeys.suppliers,
  list: "/suppliers",
  create: "/suppliers/create",
  edit: "/suppliers/edit/:id",
  show: "/suppliers/show/:id",
  meta: {
    parent: TopMenuNames.demo,
    canDelete: true,
  },
}, {
    name: ResourceKeys.settlement_types,
    list: "/settlement-types",
    create: "/settlement-types/create",
    edit: "/settlement-types/edit/:id",
    show: "/settlement-types/show/:id",
    meta: {
      parent: TopMenuNames.demo,
      canDelete: true,
    },
  }]