import { Action, State, StateContext } from "@ngxs/store";
import { ScreenOption } from "../model/screen-option";
import { Injectable } from "@angular/core";
import { ScreenComponentEnum } from "../model/enum/screen-component.enum";
import { SetScreenComponent } from "../action/screen-component-action";

@State<ScreenOption>({
    name: "screenOption",
    defaults: {
        displayText: 'SOBRE MEU TRABALHO',
        screenComponent: ScreenComponentEnum.WORK_INFO
    },
})
@Injectable()
export class ScreenComponentState {
    @Action(SetScreenComponent)
    addTodo(ctx: StateContext<ScreenOption>, action: SetScreenComponent) {
        ctx.setState(
            {
                displayText: action.screenOption.displayText,
                screenComponent: action.screenOption.screenComponent
            }
        );
    }
}