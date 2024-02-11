export class ScrollTo {
    static readonly type = "[Scroll] Scroll To";
    constructor(public el: HTMLElement, public description: string) { }
}