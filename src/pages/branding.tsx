import React, { FunctionComponent, ReactElement } from "react"

// import { SEO } from '@components';
import {
    Button,
    ButtonGroup,
    Card,
    Div,
    Header,
    Icon,
    Label,
    Link,
    Text,
    TextStyle,
    SelectInput,
} from "@ui-library"
import { PageLayout } from "@layouts"

export const IndexPage = (): ReactElement => {
    return (
        <PageLayout>
            <SelectInput
                name="test select"
                options={[
                    {
                        label: "option 1",
                        value: "option 1",
                        secondaryText: "info",
                    },
                    { label: "option 2", value: "option 2" },
                    { label: "option 3", value: "option 3" },
                    { label: "option 4", value: "option 4" },
                ]}
                onChange={() => {}}
            />
            <Link href="/404">
                click me to go to 404 page without animations
            </Link>
            <Label>label</Label>
            <Header level={1} isTitle>
                Header 1
            </Header>
            <Header level={1}>Header 1</Header>
            <Header level={2} isTitle>
                Header 2
            </Header>
            <Header level={2}>Header 2</Header>
            <Header level={3} isTitle>
                Header 3
            </Header>
            <Header level={3}>Header 3</Header>
            <Header level={4} isTitle>
                Header 4
            </Header>
            <Header level={4}>Header 4</Header>

            <Div flex gap="15px">
                <Card>
                    <Text>Generic Card</Text>
                </Card>
                <Card
                    onClick={() => {
                        console.log("click!")
                    }}
                >
                    <Text>Clickable Card</Text>
                </Card>
                <Card color="high-contrast">
                    <Text>High Constrast Card</Text>
                </Card>
                <Card color="med-contrast">
                    <Text>High Constrast Card</Text>
                </Card>
            </Div>

            <Text size="small">small text</Text>
            <Text size="regular">regular text</Text>
            <Text align="center">centered text</Text>
            <Text align="center">
                <TextStyle color="blue" bold>
                    Blue{" "}
                </TextStyle>
                <TextStyle color="brand" italic>
                    Brand{" "}
                </TextStyle>
                <TextStyle color="low-contrast">Low Contrast </TextStyle>
                <TextStyle color="med-contrast">Med Contrast </TextStyle>
            </Text>
            <Text>
                <TextStyle gradient="mono">Lorem ipsum </TextStyle>
                <TextStyle gradient>Lorem ipsum</TextStyle> dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </Text>

            <Div
                flex
                flexDirection="col"
                justifyContent="evenly"
                padding="16px 0px"
            >
                <Text>flex col 1</Text>
                <Text>flex col 2</Text>
            </Div>
            <Div flex flexDirection="row" gap="3px" margin="16px 0px">
                <Text>flex row 1</Text>
                <Text>flex row 2</Text>
            </Div>
            <Div responsiveness="mobile-only">
                <Text>show on mobile only</Text>
            </Div>
            <Div responsiveness="tablet-only">
                <Text>show on tablet only</Text>
            </Div>
            <Div responsiveness="desktop-only">
                <Text>show on desktop only</Text>
            </Div>
            <Div responsiveness="mobile-hide">
                <Text>do not show on mobile</Text>
            </Div>
            <Div responsiveness="desktop-hide">
                <Text>do no show on desktop</Text>
            </Div>

            <ButtonGroup>
                <Button variant="primary" size="large">
                    Primary
                </Button>
                <Button variant="outline" size="large">
                    Outline
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="primary" size="regular">
                    Primary
                </Button>
                <Button variant="outline" size="regular">
                    Outline
                </Button>
            </ButtonGroup>
            <Button variant="outline" size="regular">
                Outline
            </Button>
            <Button variant="primary" size="regular" fillWidth>
                Outline
            </Button>
            <ButtonGroup>
                <Button variant="primary" disabled>
                    Primary
                </Button>
                <Button variant="outline" disabled>
                    Outline
                </Button>
            </ButtonGroup>
        </PageLayout>
    )
}

export default IndexPage
