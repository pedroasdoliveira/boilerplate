import { Story, Meta } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text("title", "React avançado")}
    description={text(
      "Description",
      "React, Typescript, Next e Styled-Components"
    )}
  />
);
