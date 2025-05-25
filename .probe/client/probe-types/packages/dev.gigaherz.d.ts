declare module "packages/dev/gigaherz/graph3/$Mergeable$Dummy" {
import {$Mergeable, $Mergeable$Type} from "packages/dev/gigaherz/graph3/$Mergeable"

export class $Mergeable$Dummy implements $Mergeable<($Mergeable$Dummy)> {


public "mergeWith"(arg0: $Mergeable$Dummy$Type): $Mergeable$Dummy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$Dummy$Type = ($Mergeable$Dummy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable$Dummy_ = $Mergeable$Dummy$Type;
}}
declare module "packages/dev/gigaherz/graph3/$ContextDataFactory" {
import {$Mergeable, $Mergeable$Type} from "packages/dev/gigaherz/graph3/$Mergeable"
import {$Graph, $Graph$Type} from "packages/dev/gigaherz/graph3/$Graph"

export interface $ContextDataFactory<T extends $Mergeable<(T)>> {

 "create"(arg0: $Graph$Type<(T)>): T

(arg0: $Graph$Type<(T)>): T
}

export namespace $ContextDataFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextDataFactory$Type<T> = ($ContextDataFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextDataFactory_<T> = $ContextDataFactory$Type<(T)>;
}}
declare module "packages/dev/gigaherz/graph3/$Graph" {
import {$Mergeable, $Mergeable$Type} from "packages/dev/gigaherz/graph3/$Mergeable"
import {$ContextDataFactory, $ContextDataFactory$Type} from "packages/dev/gigaherz/graph3/$ContextDataFactory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GraphObject, $GraphObject$Type} from "packages/dev/gigaherz/graph3/$GraphObject"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $Graph<T extends $Mergeable<(T)>> {

constructor()

public "getObjects"(): $Collection<($GraphObject<(T)>)>
public "remove"(arg0: $GraphObject$Type<(T)>): void
public "contains"(arg0: $GraphObject$Type<(T)>): boolean
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>, arg2: $Supplier$Type<($Graph$Type<(T)>)>, arg3: $ContextDataFactory$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>, arg2: $ContextDataFactory$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>): void
public "removeNonDirectionalSingleEdge"(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>): void
public "getNonDirectionalNeighbours"(arg0: $GraphObject$Type<(T)>): $Collection<($GraphObject<(T)>)>
public "getNeighbours"(arg0: $GraphObject$Type<(T)>): $Collection<($GraphObject<(T)>)>
public "addNodeAndEdges"(arg0: $GraphObject$Type<(T)>, arg1: $Iterable$Type<($GraphObject$Type<(T)>)>): void
public "addDirectedEdges"(arg0: $GraphObject$Type<(T)>, arg1: $Iterable$Type<($GraphObject$Type<(T)>)>): void
public "addSingleEdge"(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>): void
public "removeSingleEdge"(arg0: $GraphObject$Type<(T)>, arg1: $GraphObject$Type<(T)>): void
public "acquireObjects"(): $Collection<($GraphObject<(T)>)>
public "releaseObjects"(): void
public "getContextData"(): T
public "setContextData"(arg0: T): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $List$Type<($GraphObject$Type<(T)>)>, arg2: $ContextDataFactory$Type<(T)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $List$Type<($GraphObject$Type<(T)>)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$Type<(T)>, arg1: $List$Type<($GraphObject$Type<(T)>)>, arg2: $Supplier$Type<($Graph$Type<(T)>)>, arg3: $ContextDataFactory$Type<(T)>): void
get "objects"(): $Collection<($GraphObject<(T)>)>
get "contextData"(): T
set "contextData"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graph$Type<T> = ($Graph<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graph_<T> = $Graph$Type<(T)>;
}}
declare module "packages/dev/gigaherz/graph3/$Mergeable" {
import {$Mergeable$Dummy, $Mergeable$Dummy$Type} from "packages/dev/gigaherz/graph3/$Mergeable$Dummy"

export interface $Mergeable<T extends $Mergeable<(T)>> {

 "copy"(): T
 "mergeWith"(arg0: T): T
}

export namespace $Mergeable {
const DUMMY: $Mergeable$Dummy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$Type<T> = ($Mergeable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable_<T> = $Mergeable$Type<(T)>;
}}
declare module "packages/dev/gigaherz/graph3/$GraphObject" {
import {$Mergeable, $Mergeable$Type} from "packages/dev/gigaherz/graph3/$Mergeable"
import {$Graph, $Graph$Type} from "packages/dev/gigaherz/graph3/$Graph"

export interface $GraphObject<T extends $Mergeable<(T)>> {

 "getGraph"(): $Graph<(T)>
 "setGraph"(arg0: $Graph$Type<(T)>): void
}

export namespace $GraphObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphObject$Type<T> = ($GraphObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphObject_<T> = $GraphObject$Type<(T)>;
}}
