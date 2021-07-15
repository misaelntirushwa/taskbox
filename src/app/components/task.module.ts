import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxsModule } from "@ngxs/store";

import { TaskComponent } from "../components/task.component";
import { TaskListComponent } from "../components/task-list.component";
import { PureTaskListComponent } from "../components/pure-task-list.component";
import { TasksState } from "../state/task.state";

@NgModule({
    imports: [CommonModule, NgxsModule.forFeature([TasksState])],
    declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
    exports: [TaskComponent, TaskListComponent]
})
export class TaskModule {}