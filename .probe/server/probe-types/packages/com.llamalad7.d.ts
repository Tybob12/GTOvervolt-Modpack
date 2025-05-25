declare module "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalRef<T> {

 "get"(): T
 "set"(arg0: T): void
}

export namespace $LocalRef {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalRef$Type<T> = ($LocalRef<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalRef_<T> = $LocalRef$Type<(T)>;
}}
