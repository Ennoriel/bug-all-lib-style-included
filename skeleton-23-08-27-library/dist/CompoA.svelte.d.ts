/** @typedef {typeof __propDef.props}  CompoAProps */
/** @typedef {typeof __propDef.events}  CompoAEvents */
/** @typedef {typeof __propDef.slots}  CompoASlots */
export default class CompoA extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CompoAProps = typeof __propDef.props;
export type CompoAEvents = typeof __propDef.events;
export type CompoASlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
