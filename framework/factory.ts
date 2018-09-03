import { View } from "./view";

export function view<TView extends View>(type: { new (): TView }): Promise<TView> {
    return Promise.resolve(new type());
}
