import { Action, State, StateContext } from "@ngxs/store";
import { ScrollTo } from "../action/scroll-action";
import { Injectable } from "@angular/core";
import { ScrollingData } from "../model/scrolling-data";

@State<ScrollingData>({
    name: "ScrollingData"
})
@Injectable()
export class ScrollState {
    @Action(ScrollTo)
    addTodo(ctx: StateContext<ScrollingData>, action: ScrollTo) {
        ctx.setState(
            {
                el: action.el,
                description: action.description
            }
        );
    }
}