import { View } from "./view";

export function view<TView extends View>(type: { new (): TView }): TView {
    return new type();
}
