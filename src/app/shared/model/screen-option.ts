import { ScreenComponentEnum } from "./enum/screen-component.enum";

export class ScreenOption {
    constructor(
        public displayText: string,
        public screenComponent: ScreenComponentEnum
    ) { }
}