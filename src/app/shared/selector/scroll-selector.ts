import { Selector } from "@ngxs/store";
import { ScrollState } from "../state/scroll-state";
import { ScrollingData } from "../model/scrolling-data";

export class ScrollToSelector {

    @Selector([ScrollState])
    static position(state: ScrollingData) {
      return state.position;
    }

}