import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: {control:'select',options:['normal','h1','h2','h3']},
        color:{control:'select', option:['primary', 'secondary','tertiary']}
    }

} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    size:'normal',
    allCaps: false,
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size:'h1',
    allCaps: true
}
export const Secondary = Template.bind({})
Secondary.args = {
    size:'h3',
    color: 'secondary'
}
export const Tertiary = Template.bind({})
Tertiary.args = {
    size:'normal',
    color:'tertiary'
}
export const CustomColorFont = Template.bind({})
CustomColorFont.args = {
    size:'normal',
    customFontColor:'orange'
}