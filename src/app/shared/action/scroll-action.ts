import { ScrollingData } from "../model/scrolling-data";

export class SetScrollTo {
    static readonly type = "[ScrollTo] Set ScrollTo";
    constructor(public scrollingData: ScrollingData) { }
}