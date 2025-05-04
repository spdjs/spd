
export const EnabledValueLabelMap = {
    true: 'Enabled',
    false: 'Disabled',
}

export const DisabledValue = 'false';
export const EnabledValue = 'true';

export const EnabledOptions = Object.keys(EnabledValueLabelMap).map((key) => ({
    value: key,
    label: EnabledValueLabelMap[key as keyof typeof EnabledValueLabelMap],
}));