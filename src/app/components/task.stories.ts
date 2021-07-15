import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { action } from "@storybook/addon-actions";

import { CommonModule } from "@angular/common";

import { TaskComponent } from "./task.component";

export default {
    component: TaskComponent,
    decorators: [
        moduleMetadata({
            declarations: [TaskComponent],
            imports: [CommonModule]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Task'
} as Meta;

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

const Template: Story<TaskComponent> = args => ({
    props: {
        ...args,
        onPinTask: actionsData.onPinTask,
        onArchiveTask: actionsData.onArchiveTask
    },
});

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2021, 6, 15, 8, 2)
    }
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    }
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    }
};

