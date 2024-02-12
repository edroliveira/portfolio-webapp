import { Action, State, StateContext } from "@ngxs/store";
import { SetScrollTo } from "../action/scroll-action";
import { Injectable } from "@angular/core";
import { ScrollingData } from "../model/scrolling-data";
import { ScrollingPositionEnum } from "../model/enum/scrolling-position.enum";

@State<ScrollingData>({
    name: "ScrollingData",
    defaults: {
        el: document.createElement('div'),
        position: ScrollingPositionEnum.TOP
    }
})
@Injectable()
export class ScrollState {
    @Action(SetScrollTo)
    scrollTo(ctx: StateContext<ScrollingData>, action: SetScrollTo) {
        ctx.setState(action.scrollingData);
        action.scrollingData.el.scrollIntoView({behavior: 'smooth'});
    }
}