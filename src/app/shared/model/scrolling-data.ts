import { ScrollingPositionEnum } from "./enum/scrolling-position.enum";

export class ScrollingData {
    constructor(
        public el: HTMLElement,
        public position: ScrollingPositionEnum
    ) { }
}