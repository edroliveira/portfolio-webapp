import { ScreenOption } from "../model/screen-option";

export class SetScreenComponent {
    static readonly type = "[ScreenComponent] Set ScreenComponent";
    constructor(public screenOption: ScreenOption) { }
}