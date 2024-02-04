import { Selector } from "@ngxs/store";
import { ScreenComponentState } from "../state/screen-component-state";
import { ScreenOption } from "../model/screen-option";

export class ScreenComponentSelectors {

    @Selector([ScreenComponentState])
    static component(state: ScreenOption) {
      return state.screenComponent;
    }

}