import React, { ReactElement } from "react"
import { Disclosure as UiDisclosure } from "@headlessui/react"
import styled, { css } from "styled-components"

import { Text, Div, Icon, Header } from "@ui-library"

type DisclosureProps = {
    summary: string
    details: string
}
export const Disclosure = ({
    summary,
    details,
}: DisclosureProps): ReactElement => {
    return (
        <div className="disclosure">
            <UiDisclosure>
                {({ open }) => (
                    <>
                        <UiDisclosure.Button className="w-full py-4">
                            <Div
                                flex
                                alignItems="center"
                                gap="0.75rem"
                                justifyContent="between"
                            >
                                <Header level={4}>{summary}</Header>
                                <Icon
                                    large
                                    icon="plus"
                                    color={open ? "brand" : "med-contrast"}
                                />
                            </Div>
                        </UiDisclosure.Button>
                        <UiDisclosure.Panel className="pt-4">
                            <Text>{details}</Text>
                        </UiDisclosure.Panel>
                    </>
                )}
            </UiDisclosure>
        </div>
    )
}

type DisclosureSeriesProps = {
    info: DisclosureProps[]
    bordered?: boolean
}
export const DisclosureSeries = ({
    info,
    bordered,
}: DisclosureSeriesProps): ReactElement => {
    return (
        <DisclosureList bordered={bordered}>
            {info.map(({ summary, details }) => (
                <Disclosure key={summary} summary={summary} details={details} />
            ))}
        </DisclosureList>
    )
}

const DisclosureList = styled.div<{ bordered?: boolean }>`
    ${({ bordered }) =>
        bordered === true &&
        css`
            border: solid 3px ${({ theme }) => theme.colors.cardLightOutline};
            padding: 15px 24px;
        `}

    .disclosure + .disclosure {
        border-top: 1px solid;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-color: ${({ theme }) => theme.colors.cardLightOutline};
    }
`
