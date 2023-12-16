import React, { ReactElement, useState } from "react"
import styled, { css } from "styled-components"

import { RadioGroup } from "@headlessui/react"
import { Text, Div, TextStyle, Icon, Header } from "@ui-library"

export type RadioOption = {
    name: string
    value: string
    description?: string
} & Record<string, unknown>

type RadioProps = {
    label: string
    options: RadioOption[]
    onSelect: (a: RadioOption) => void
    defaultValue?: RadioOption
    inline?: boolean
}

export const Radio = ({
    label,
    options,
    onSelect,
    defaultValue,
    inline,
}: RadioProps): ReactElement => {
    let [selection, setSelection] = useState<RadioOption | null>(
        defaultValue ?? null
    )

    const onChange = (selected: RadioOption) => {
        setSelection(selected)
        onSelect(selected)
    }

    return (
        <RadioGroup value={selection} onChange={onChange}>
            <RadioGroup.Label>
                <Div margin="16px 0px">
                    <Header
                        level={4}
                        isTitle
                        align={inline ? "center" : "left"}
                    >
                        {label}
                    </Header>
                </Div>
            </RadioGroup.Label>
            <Div
                flex
                flexDirection={inline ? "row" : "col"}
                gap="15px"
                justifyContent="center"
                flexWrap={inline}
            >
                {options.map((option) => (
                    <RadioGroup.Option
                        value={option}
                        key={JSON.stringify(option)}
                    >
                        {({ checked }) => (
                            <RadioOptionCard
                                active={checked || option === selection}
                                inline={inline}
                            >
                                <Div flex justifyContent="between">
                                    <Div flex flexDirection="col" gap="0px">
                                        <Text>
                                            <TextStyle
                                                forceSingleLine
                                                thinFont={inline}
                                                color={
                                                    checked ||
                                                    option === selection
                                                        ? "brand"
                                                        : undefined
                                                }
                                                gradient={
                                                    checked ||
                                                    option === selection
                                                        ? "brand"
                                                        : undefined
                                                }
                                            >
                                                {option.name}
                                            </TextStyle>
                                        </Text>
                                        {!inline && (
                                            <Text size="small">
                                                {option.description}
                                            </Text>
                                        )}
                                    </Div>
                                    <IconContainer>
                                        {(checked || option === selection) && (
                                            <Icon
                                                icon="checkmark-circle"
                                                color="brand"
                                            />
                                        )}
                                    </IconContainer>
                                </Div>
                            </RadioOptionCard>
                        )}
                    </RadioGroup.Option>
                ))}
            </Div>
        </RadioGroup>
    )
}

const RadioOptionCard = styled.div<{ active?: boolean; inline?: boolean }>`
    border: solid 1px ${({ theme }) => theme.colors.cardLightOutline};
    border-radius: ${({ theme }) => theme.radii};
    cursor: pointer;

    ${({ inline }) =>
        inline
            ? css`
                  display: inline-block;
                  padding: 8px 18px;
              `
            : css`
                  background-color: ${({ theme }) =>
                      theme.colors.cardLowContrastBackground};
                  padding: 16px;
              `}
`

const IconContainer = styled.div`
    width: 10px;
    position: relative;

    & > * {
        position: absolute;
        margin-right: 5px;
        padding-top: 5px;
        padding-left: 3px;
    }
`
