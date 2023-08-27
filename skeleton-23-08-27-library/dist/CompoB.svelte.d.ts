/** @typedef {typeof __propDef.props}  CompoBProps */
/** @typedef {typeof __propDef.events}  CompoBEvents */
/** @typedef {typeof __propDef.slots}  CompoBSlots */
export default class CompoB extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CompoBProps = typeof __propDef.props;
export type CompoBEvents = typeof __propDef.events;
export type CompoBSlots = typeof __propDef.slots;
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
