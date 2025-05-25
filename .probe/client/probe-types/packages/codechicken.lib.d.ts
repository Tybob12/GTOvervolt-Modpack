declare module "packages/codechicken/lib/gui/modular/lib/$ElementEvents" {
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ElementEvents {

 "getChildren"(): $List<($GuiElement<(any)>)>
 "blockMouseEvents"(): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: boolean): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "charTyped"(arg0: character, arg1: integer): boolean
 "charTyped"(arg0: character, arg1: integer, arg2: boolean): boolean

(): $List<($GuiElement<(any)>)>
}

export namespace $ElementEvents {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementEvents$Type = ($ElementEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementEvents_ = $ElementEvents$Type;
}}
declare module "packages/codechicken/lib/vec/$Translation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Translation extends $Transformation {
static readonly "CENTER": $Translation
 "vec": $Vector3
static readonly "operationIndex": integer

constructor(arg0: $Translation$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3i$Type)
constructor(arg0: $Vector3$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "at"(arg0: $Vector3$Type): $Transformation
public "isRedundant"(): boolean
public "inverse"(): $Transformation
public "applyN"(arg0: $Vector3$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translation$Type = ($Translation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translation_ = $Translation$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export class $GeoParam extends $Enum<($GeoParam)> {
static readonly "LEFT": $GeoParam
static readonly "RIGHT": $GeoParam
static readonly "WIDTH": $GeoParam
static readonly "TOP": $GeoParam
static readonly "BOTTOM": $GeoParam
static readonly "HEIGHT": $GeoParam
readonly "axis": $Axis


public static "values"(): ($GeoParam)[]
public static "valueOf"(arg0: string): $GeoParam
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoParam$Type = (("top") | ("left") | ("bottom") | ("width") | ("right") | ("height")) | ($GeoParam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoParam_ = $GeoParam$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/container/$SlotGroup" {
import {$ModularSlot, $ModularSlot$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularSlot"
import {$ModularGuiContainerMenu, $ModularGuiContainerMenu$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $SlotGroup {
readonly "zone": integer
readonly "quickMoveTo": $List<(integer)>

constructor(arg0: $ModularGuiContainerMenu$Type, arg1: integer, ...arg2: (integer)[])

public "indexOf"(arg0: $Slot$Type): integer
public "size"(): integer
public "getSlot"(arg0: integer): $ModularSlot
public "slots"(): $List<($ModularSlot)>
public "addPlayerMain"(arg0: $Inventory$Type): void
public "addPlayerBar"(arg0: $Inventory$Type): void
public "addPlayerArmor"(arg0: $Inventory$Type): void
public "addPlayerOffhand"(arg0: $Inventory$Type): void
public "addAllSlots"(arg0: $Container$Type): void
public "addAllSlots"(arg0: $Container$Type, arg1: $BiFunction$Type<($Container$Type), (integer), ($ModularSlot$Type)>): void
public "addSlot"(arg0: $ModularSlot$Type): $ModularSlot
public "addSlots"(arg0: integer, arg1: integer, arg2: $Function$Type<(integer), ($ModularSlot$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotGroup$Type = ($SlotGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotGroup_ = $SlotGroup$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export interface $Constraint {

 "get"(): double
 "axis"(): $Axis
 "markDirty"(): void
}

export namespace $Constraint {
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
function between(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
function literal(arg0: double): $ConstraintImpl$Literal
function relative(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
function relative(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
function match(arg0: $GeoRef$Type): $ConstraintImpl$Relative
function dynamic(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
function midPoint(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraint$Type = ($Constraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constraint_ = $Constraint$Type;
}}
declare module "packages/codechicken/lib/packet/$PacketCustom" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$MCDataByteBuf, $MCDataByteBuf$Type} from "packages/codechicken/lib/data/$MCDataByteBuf"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketCustom extends $MCDataByteBuf {

constructor(arg0: $ByteBuf$Type)
constructor(arg0: $ResourceLocation$Type, arg1: integer)

public "writeString"(arg0: string, arg1: integer): $PacketCustom
public "writeString"(arg0: string): $PacketCustom
public "writeBoolean"(arg0: boolean): $PacketCustom
public "writeByte"(arg0: integer): $PacketCustom
public "writeDouble"(arg0: double): $PacketCustom
public "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $PacketCustom
public "getChannel"(): $ResourceLocation
public "writeChar"(arg0: integer): $PacketCustom
public "getType"(): integer
public "writeBooleans"(arg0: (boolean)[]): $PacketCustom
public "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $PacketCustom
public "writeDoubles"(arg0: (double)[]): $PacketCustom
public "writeVarInt"(arg0: integer): $PacketCustom
public "sendToChunk"(arg0: $Level$Type, arg1: $ChunkPos$Type): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: integer, arg3: integer): void
public static "sendToChunk"(arg0: $Packet$Type<(any)>, arg1: $Level$Type, arg2: $ChunkPos$Type): void
public "sendToChunk"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "sendToChunk"(arg0: $BlockEntity$Type): void
public "sendToChunk"(arg0: $Level$Type, arg1: integer, arg2: integer): void
public "writeVector"(arg0: $Vector3$Type): $PacketCustom
public "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $PacketCustom
public "writeVarLong"(arg0: long): $PacketCustom
public "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $PacketCustom
public "writeByteBuffer"(arg0: $ByteBuffer$Type): $PacketCustom
public "writeCharBuffer"(arg0: $CharBuffer$Type): $PacketCustom
public "writeShortBuffer"(arg0: $ShortBuffer$Type): $PacketCustom
public "writeIntBuffer"(arg0: $IntBuffer$Type): $PacketCustom
public static "sendToClients"(arg0: $Packet$Type<(any)>): void
public "sendToClients"(): void
public "sendPacketToAllAround"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
public "sendPacketToAllAround"(arg0: $BlockPos$Type, arg1: double, arg2: $ResourceKey$Type<($Level$Type)>): void
public static "sendToAllAround"(arg0: $Packet$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>): void
public "sendToDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
public static "sendToDimension"(arg0: $Packet$Type<(any)>, arg1: $ResourceKey$Type<($Level$Type)>): void
public static "sendToServer"(arg0: $Packet$Type<(any)>): void
public "sendToServer"(): void
public "writeItemStack"(arg0: $ItemStack$Type): $PacketCustom
public "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $PacketCustom
public "writeFluidStack"(arg0: $FluidStack$Type): $PacketCustom
public static "sendToPlayer"(arg0: $Packet$Type<(any)>, arg1: $ServerPlayer$Type): void
public "sendToPlayer"(arg0: $ServerPlayer$Type): void
public "incoming"(): boolean
public "toPacket"(arg0: $NetworkDirection$Type): $Packet<(any)>
public "toPacket"(arg0: $NetworkDirection$Type, arg1: integer): $Packet<(any)>
public "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $PacketCustom
public "writeEnum"(arg0: $Enum$Type<(any)>): $PacketCustom
public static "sendToOps"(arg0: $Packet$Type<(any)>): void
public "sendToOps"(): void
public "writeUUID"(arg0: $UUID$Type): $PacketCustom
public "writeVec3i"(arg0: $Vec3i$Type): $PacketCustom
public "writeVec3d"(arg0: $Vec3$Type): $PacketCustom
get "channel"(): $ResourceLocation
get "type"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketCustom$Type = ($PacketCustom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketCustom_ = $PacketCustom$Type;
}}
declare module "packages/codechicken/lib/vec/$Transformation" {
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$TransformationList, $TransformationList$Type} from "packages/codechicken/lib/vec/$TransformationList"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Transformation extends $ITransformation<($Vector3), ($Transformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "with"(arg0: $Transformation$Type): $TransformationList
public "load"(arg0: $CCRenderState$Type): boolean
public "apply"(arg0: $Matrix4$Type): void
public "at"(arg0: $Vector3$Type): $Transformation
public "operationID"(): integer
public "applyN"(arg0: $Vector3$Type): void
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transformation$Type = ($Transformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transformation_ = $Transformation$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexSource" {
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export interface $IVertexSource {

 "getAttribute"<T>(arg0: $AttributeKey$Type<(T)>): T
 "hasAttribute"(arg0: $AttributeKey$Type<(any)>): boolean
 "getVertices"(): ($Vertex5)[]
 "prepareVertex"(arg0: $CCRenderState$Type): void
 "getVertexCount"(): integer
}

export namespace $IVertexSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexSource$Type = ($IVertexSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexSource_ = $IVertexSource$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

/**
 * 
 * @deprecated
 */
export class $CCRenderPipeline$PipelineBuilder {

constructor(arg0: $CCRenderPipeline$Type, arg1: $CCRenderState$Type)

public "build"(): void
public "add"(...arg0: ($IVertexOperation$Type)[]): $CCRenderPipeline$PipelineBuilder
public "add"(arg0: $IVertexOperation$Type): $CCRenderPipeline$PipelineBuilder
public "render"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$PipelineBuilder$Type = ($CCRenderPipeline$PipelineBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline$PipelineBuilder_ = $CCRenderPipeline$PipelineBuilder$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Literal extends $ConstraintImpl<($ConstraintImpl$Literal)> {

constructor(arg0: double)

public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Literal$Type = ($ConstraintImpl$Literal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Literal_ = $ConstraintImpl$Literal$Type;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $ICCLContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
 "create"(arg0: integer, arg1: $Inventory$Type): T

(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
}

export namespace $ICCLContainerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerFactory$Type<T> = ($ICCLContainerFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerFactory_<T> = $ICCLContainerFactory$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$CCRenderPipeline$PipelineBuilder, $CCRenderPipeline$PipelineBuilder$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder"

export class $CCRenderPipeline {
/**
 * 
 * @deprecated
 */
 "forceFormatAttributes": boolean

constructor(arg0: $CCRenderState$Type)

public "addAttribute"(arg0: $VertexAttribute$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "builder"(): $CCRenderPipeline$PipelineBuilder
public "reset"(): void
public "addRequirement"(arg0: integer): void
public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
public "addDependency"(arg0: $VertexAttribute$Type<(any)>): void
public "rebuild"(): void
public "operate"(): void
set "pipeline"(value: ($IVertexOperation$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$Type = ($CCRenderPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline_ = $CCRenderPipeline$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Borders" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Borders {
 "top": double
 "left": double
 "bottom": double
 "right": double

constructor(arg0: double, arg1: double, arg2: double, arg3: double)

public "left"(arg0: double): $Borders
public "left"(): double
public "right"(): double
public "right"(arg0: double): $Borders
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "top"(): double
public "top"(arg0: double): $Borders
public static "create"(arg0: double): $Borders
public static "create"(arg0: double, arg1: double): $Borders
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Borders
public "bottom"(arg0: double): $Borders
public "bottom"(): double
public "setTopBottom"(arg0: double): $Borders
public "setLeftRight"(arg0: double): $Borders
public "setBorders"(arg0: double, arg1: double, arg2: double, arg3: double): $Borders
public "setBorders"(arg0: double, arg1: double): $Borders
public "setBorders"(arg0: double): $Borders
set "topBottom"(value: double)
set "leftRight"(value: double)
set "borders"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Borders$Type = ($Borders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Borders_ = $Borders$Type;
}}
declare module "packages/codechicken/lib/raytracer/$SubHitBlockHitResult" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SubHitBlockHitResult extends $BlockHitResult implements $Comparable<($SubHitBlockHitResult)> {
readonly "dist": double
readonly "hitInfo": any
readonly "subHit": integer

constructor(arg0: $Vec3$Type, arg1: $Direction$Type, arg2: $BlockPos$Type, arg3: boolean, arg4: any, arg5: double)
constructor(arg0: $Vector3$Type, arg1: $Direction$Type, arg2: $BlockPos$Type, arg3: boolean, arg4: any, arg5: double)

public "toString"(): string
public "compareTo"(arg0: $SubHitBlockHitResult$Type): integer
public "withDirection"(arg0: $Direction$Type): $SubHitBlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubHitBlockHitResult$Type = ($SubHitBlockHitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubHitBlockHitResult_ = $SubHitBlockHitResult$Type;
}}
declare module "packages/codechicken/lib/inventory/container/modular/$ModularSlot" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$SlotItemHandler, $SlotItemHandler$Type} from "packages/net/minecraftforge/items/$SlotItemHandler"

export class $ModularSlot extends $SlotItemHandler {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer)
constructor(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $IItemHandler$Type, arg1: integer)
constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "output"(): $ModularSlot
public "noCheck"(): $ModularSlot
public "setCanRemove"(arg0: $BiPredicate$Type<($Player$Type), ($ItemStack$Type)>): $ModularSlot
public "setStackLimit"(arg0: $Function$Type<($ItemStack$Type), (integer)>): $ModularSlot
public "setValidator"(arg0: $Predicate$Type<($ItemStack$Type)>): $ModularSlot
public "setEnabled"(arg0: $Supplier$Type<(boolean)>): $ModularSlot
public "setEnabled"(arg0: boolean): $ModularSlot
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "mayPickup"(arg0: $Player$Type): boolean
public "set"(arg0: $ItemStack$Type): void
public "isActive"(): boolean
public "onSet"(arg0: $BiConsumer$Type<($ItemStack$Type), ($ItemStack$Type)>): $ModularSlot
set "canRemove"(value: $BiPredicate$Type<($Player$Type), ($ItemStack$Type)>)
set "stackLimit"(value: $Function$Type<($ItemStack$Type), (integer)>)
set "validator"(value: $Predicate$Type<($ItemStack$Type)>)
set "enabled"(value: $Supplier$Type<(boolean)>)
set "enabled"(value: boolean)
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSlot$Type = ($ModularSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSlot_ = $ModularSlot$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef" {
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GeoRef implements $Supplier<(double)> {
readonly "geometry": $GuiParent<(any)>
readonly "parameter": $GeoParam

constructor(arg0: $GuiParent$Type<(any)>, arg1: $GeoParam$Type)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRef$Type = ($GeoRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRef_ = $GeoRef$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexOperation" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"

export interface $IVertexOperation {

 "load"(arg0: $CCRenderState$Type): boolean
 "operationID"(): integer
 "operate"(arg0: $CCRenderState$Type): void
}

export namespace $IVertexOperation {
function registerOperation(): integer
function operationCount(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexOperation$Type = ($IVertexOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexOperation_ = $IVertexOperation$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UV" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $UV implements $Copyable<($UV)> {
 "u": double
 "v": double
 "tex": integer

constructor()
constructor(arg0: $UV$Type)
constructor(arg0: double, arg1: double, arg2: integer)
constructor(arg0: double, arg1: double)

public "multiply"(arg0: double): $UV
public "add"(arg0: $UV$Type): $UV
public "equals"(arg0: any): boolean
public "toString"(): string
public "apply"(arg0: $UVTransformation$Type): $UV
public "set"(arg0: double, arg1: double): $UV
public "set"(arg0: double, arg1: double, arg2: integer): $UV
public "set"(arg0: (double)[]): $UV
public "set"(arg0: (float)[]): $UV
public "set"(arg0: $UV$Type): $UV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UV$Type = ($UV);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UV_ = $UV$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LightModel" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$LightModel$Light, $LightModel$Light$Type} from "packages/codechicken/lib/render/lighting/$LightModel$Light"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$PlanarLightModel, $PlanarLightModel$Type} from "packages/codechicken/lib/render/lighting/$PlanarLightModel"

export class $LightModel implements $IVertexOperation {
static readonly "operationIndex": integer
static "standardLightModel": $LightModel

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "apply"(arg0: integer, arg1: $Vector3$Type): integer
public "reducePlanar"(): $PlanarLightModel
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public "addLight"(arg0: $LightModel$Light$Type): $LightModel
public "setAmbient"(arg0: $Vector3$Type): $LightModel
public static "registerOperation"(): integer
public static "operationCount"(): integer
set "ambient"(value: $Vector3$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightModel$Type = ($LightModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightModel_ = $LightModel$Type;
}}
declare module "packages/codechicken/lib/render/model/$ModelMaterial" {
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $ModelMaterial implements $Copyable<($ModelMaterial)> {
static readonly "MATERIAL_KEY": $AttributeKey<($ModelMaterial)>
 "name": string
 "ambientColour": $Colour
 "ambientColourMap": string
 "diffuseColour": $Colour
 "diffuseColourMap": string
 "specularColour": $Colour
 "specularHighlight": float
 "specularColourMap": string
 "dissolve": float
 "illumination": float

constructor()
constructor(arg0: $ModelMaterial$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelMaterial$Type = ($ModelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelMaterial_ = $ModelMaterial$Type;
}}
declare module "packages/codechicken/lib/vec/$TransformationList" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $TransformationList extends $Transformation {
static readonly "operationIndex": integer

constructor(...arg0: ($Transformation$Type)[])
constructor(arg0: $List$Type<($Transformation$Type)>)
constructor(arg0: $TransformationList$Type)

public "prepend"(arg0: $Transformation$Type): $TransformationList
public "with"(arg0: $Transformation$Type): $TransformationList
public "toString"(): string
public "compile"(): $Matrix4
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "copy"(): $TransformationList
public "isRedundant"(): boolean
public "reverseCompile"(): $Matrix4
public "applyN"(arg0: $Vector3$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationList$Type = ($TransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationList_ = $TransformationList$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Constraint, $Constraint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl<T extends $ConstraintImpl<(any)>> implements $Constraint {

constructor()

public "get"(): double
public "axis"(): $Axis
public "markDirty"(): void
public "precise"(): T
public "isPrecise"(): boolean
public "setAxis"(arg0: $Axis$Type): T
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Type<T> = ($ConstraintImpl<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl_<T> = $ConstraintImpl$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Position" {
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export interface $Position {

 "get"(arg0: $Axis$Type): double
 "offset"(arg0: double, arg1: double): $Position
 "x"(): double
 "y"(): double
}

export namespace $Position {
function create(arg0: $GuiParent$Type<(any)>): $Position
function create(arg0: double, arg1: double): $Position
function create(arg0: $Supplier$Type<(double)>, arg1: $Supplier$Type<(double)>): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/codechicken/lib/gui/modular/sprite/$Material" {
import {$Material as $Material$0, $Material$Type as $Material$0$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $Material {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ResourceLocation$Type), ($TextureAtlasSprite$Type)>)

public "buffer"(arg0: $MultiBufferSource$Type, arg1: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>): $VertexConsumer
public "getVanillaMat"(): $Material$0
public static "fromRawTexture"(arg0: $ResourceLocation$Type): $Material
public "atlasLocation"(): $ResourceLocation
public "texture"(): $ResourceLocation
public "renderType"(arg0: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>): $RenderType
public "sprite"(): $TextureAtlasSprite
public static "fromAtlas"(arg0: $ResourceLocation$Type, arg1: string): $Material
public static "fromSprite"(arg0: $TextureAtlasSprite$Type): $Material
get "vanillaMat"(): $Material$0
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$Type = ($Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Material_ = $Material$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Relative extends $ConstraintImpl<($ConstraintImpl$Relative)> {

constructor(arg0: $GeoRef$Type, arg1: double)

public "getOffset"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "offset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Relative$Type = ($ConstraintImpl$Relative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Relative_ = $ConstraintImpl$Relative$Type;
}}
declare module "packages/codechicken/lib/vec/$Cuboid6" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Cuboid6 implements $Copyable<($Cuboid6)> {
static "full": $Cuboid6
 "min": $Vector3
 "max": $Vector3

constructor(arg0: $AABB$Type)
constructor(arg0: $Vec3i$Type, arg1: $Vec3i$Type)
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type)
constructor()
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: $Cuboid6$Type)
constructor(arg0: $CompoundTag$Type)

public "shape"(): $VoxelShape
public "intersects"(arg0: $Cuboid6$Type): boolean
public "subtract"(arg0: $Vec3$Type): $Cuboid6
public "subtract"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "subtract"(arg0: $BlockPos$Type): $Cuboid6
public "subtract"(arg0: double): $Cuboid6
public "subtract"(arg0: $Vec3i$Type): $Cuboid6
public "subtract"(arg0: $Vector3$Type): $Cuboid6
public "add"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "add"(arg0: $BlockPos$Type): $Cuboid6
public "add"(arg0: $Vec3i$Type): $Cuboid6
public "add"(arg0: $Vector3$Type): $Cuboid6
public "add"(arg0: double): $Cuboid6
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $Transformation$Type): $Cuboid6
public "offset"(arg0: $Cuboid6$Type): $Cuboid6
public "contains"(arg0: $Vector3$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double): boolean
public "set"(arg0: $AABB$Type): $Cuboid6
public "set"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Cuboid6
public "set"(arg0: $Cuboid6$Type): $Cuboid6
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "set"(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Cuboid6
public "copy"(): $Cuboid6
public "expand"(arg0: double): $Cuboid6
public "expand"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "expand"(arg0: $Vector3$Type): $Cuboid6
public "getSideSize"(arg0: $Direction$Type): double
public "setSide"(arg0: integer, arg1: double): $Cuboid6
public "setSide"(arg0: $Direction$Type, arg1: double): $Cuboid6
public "getSide"(arg0: $Direction$Type): double
public "getSide"(arg0: integer): double
public "center"(): $Vector3
public "aabb"(): $AABB
public "volume"(): double
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "expandSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "shrinkSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "enclose"(arg0: $Cuboid6$Type): $Cuboid6
public "enclose"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "enclose"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "enclose"(arg0: $Vector3$Type): $Cuboid6
public "equalsT"(arg0: $Cuboid6$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cuboid6$Type = ($Cuboid6);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cuboid6_ = $Cuboid6$Type;
}}
declare module "packages/codechicken/lib/vec/$Quat" {
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quaterniond, $Quaterniond$Type} from "packages/org/joml/$Quaterniond"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Quat implements $Copyable<($Quat)> {
 "x": double
 "y": double
 "z": double
 "s": double

constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor()
constructor(arg0: $Quaternionf$Type)
constructor(arg0: $Quat$Type)
constructor(arg0: $Quaterniond$Type)

public "rotate"(arg0: $Vector3$Type): void
public "multiply"(arg0: $Quat$Type): $Quat
public "toString"(): string
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "set"(arg0: $Quat$Type): $Quat
public "normalize"(): $Quat
public "mag"(): double
public "setAroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "setAroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public "rightMultiply"(arg0: $Quat$Type): $Quat
public "toQuaternionF"(): $Quaternionf
public "toQuaternionD"(): $Quaterniond
public "rotation"(): $Rotation
public static "aroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public static "aroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quat$Type = ($Quat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quat_ = $Quat$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Axis" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Axis extends $Enum<($Axis)> {
static readonly "X": $Axis
static readonly "Y": $Axis


public static "values"(): ($Axis)[]
public static "valueOf"(arg0: string): $Axis
public "opposite"(): $Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Axis$Type = (("x") | ("y")) | ($Axis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Axis_ = $Axis$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Immutable" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Rectangle$Immutable extends $Record implements $Rectangle {

constructor(position: $Position$Type, xSize: double, ySize: double)

public "xSize"(): double
public "ySize"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $Position
public "pos"(): $Position
public "width"(): double
public "height"(): double
public "setSize"(arg0: double, arg1: double): $Rectangle
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle$Type): boolean
public "min"(arg0: $Axis$Type): double
public "max"(arg0: $Axis$Type): double
public "size"(arg0: $Axis$Type): double
public "x"(): double
public "contains"(arg0: double, arg1: double): boolean
public "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
public static "create"(arg0: $GuiParent$Type<(any)>): $Rectangle
public static "create"(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
public static "create"(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
public "y"(): double
public "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
public "intersect"(arg0: $Rectangle$Type): $Rectangle
public "setPos"(arg0: double, arg1: double): $Rectangle
public "mutable"(): $Rectangle$Mutable
public "offsetPos"(arg0: double, arg1: double): $Rectangle
public "xMax"(): double
public "yMax"(): double
public "offsetSize"(arg0: double, arg1: double): $Rectangle
public "toRect2i"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Immutable$Type = ($Rectangle$Immutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle$Immutable_ = $Rectangle$Immutable$Type;
}}
declare module "packages/codechicken/lib/world/$IChunkLoadTile" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"

export interface $IChunkLoadTile {

 "onChunkLoad"(arg0: $LevelChunk$Type): void

(arg0: $LevelChunk$Type): void
}

export namespace $IChunkLoadTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkLoadTile$Type = ($IChunkLoadTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkLoadTile_ = $IChunkLoadTile$Type;
}}
declare module "packages/codechicken/lib/vec/$ITransformation" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $ITransformation<Vector, Transformation extends $ITransformation<(Vector), (Transformation)>> implements $Copyable<(Transformation)> {

constructor()

public "with"(arg0: Transformation): Transformation
public "apply"(arg0: Vector): void
public "merge"(arg0: Transformation): Transformation
public "at"(arg0: Vector): Transformation
public "isRedundant"(): boolean
public "inverse"(): Transformation
public "$plus$plus"(arg0: Transformation): Transformation
public "copy"(): Transformation
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITransformation$Type<Vector, Transformation> = ($ITransformation<(Vector), (Transformation)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITransformation_<Vector, Transformation> = $ITransformation$Type<(Vector), (Transformation)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"

export interface $GuiParent<T extends $GuiParent<(any)>> {

 "getChildren"(): $List<($GuiElement<(any)>)>
 "removeChild"(arg0: $GuiElement$Type<(any)>): void
 "xSize"(): double
 "ySize"(): double
 "get"(arg0: $GeoParam$Type): $GeoRef
 "getValue"(arg0: $GeoParam$Type): double
 "mc"(): $Minecraft
 "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
 "scaledScreenWidth"(): integer
 "scaledScreenHeight"(): integer
 "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
 "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
 "getModularGui"(): $ModularGui
 "font"(): $Font
 "addChild"(arg0: $GuiElement$Type<(any)>): void
 "addChild"(arg0: $Consumer$Type<(T)>): T
 "yMin"(): double
 "xMax"(): double
 "xMin"(): double
 "yMax"(): double
 "adoptChild"(arg0: $GuiElement$Type<(any)>): void
}

export namespace $GuiParent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiParent$Type<T> = ($GuiParent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiParent_<T> = $GuiParent$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$BetweenDynamic extends $ConstraintImpl<($ConstraintImpl$BetweenDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>)

public "clamp"(): $ConstraintImpl$BetweenDynamic
public "getStart"(): double
public "getPos"(): double
public "getEnd"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "start"(): double
get "pos"(): double
get "end"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$BetweenDynamic$Type = ($ConstraintImpl$BetweenDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$BetweenDynamic_ = $ConstraintImpl$BetweenDynamic$Type;
}}
declare module "packages/codechicken/lib/vec/$Line3" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Line3 implements $Copyable<($Line3)> {
static readonly "tol": double
 "pt1": $Vector3
 "pt2": $Vector3

constructor(arg0: $Line3$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type)

public "copy"(): $Line3
public static "intersection2D"(arg0: $Line3$Type, arg1: $Line3$Type, arg2: $Vector3$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Line3$Type = ($Line3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Line3_ = $Line3$Type;
}}
declare module "packages/codechicken/lib/gui/modular/$ModularGui" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$TriConsumer, $TriConsumer$Type} from "packages/org/apache/logging/log4j/util/$TriConsumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiProvider, $GuiProvider$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiProvider"

export class $ModularGui implements $GuiParent<($ModularGui)> {

constructor(arg0: $GuiProvider$Type)
constructor(arg0: $GuiProvider$Type, arg1: $Screen$Type)

public "onClose"(arg0: $Runnable$Type): void
public "getChildren"(): $List<($GuiElement<(any)>)>
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "xSize"(): double
public "ySize"(): double
public "getProvider"(): $GuiProvider
public "tick"(): void
public "mc"(): $Minecraft
public "getRoot"(): $GuiElement<(any)>
public "doesFloatingItemDisableToolTips"(): boolean
public "getDirectRoot"(): $GuiElement<(any)>
public "vanillaSlotRendering"(): boolean
public "getSlotHandler"(arg0: $Slot$Type): $GuiElement<(any)>
public "initFullscreenGui"(): $ModularGui
public "initStandardGui"(arg0: integer, arg1: integer): $ModularGui
public "renderScreenBackground"(arg0: boolean): void
public "getGuiTitle"(): $Component
public "closeOnEscape"(): boolean
public "setGuiTitle"(arg0: $Component$Type): void
public "getJeiHighlightTime"(): integer
public "computeMouseX"(): double
public "computeMouseY"(): double
public "scaledScreenWidth"(): integer
public "scaledScreenHeight"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "renderBackground"(): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isPauseScreen"(): boolean
public "getModularGui"(): $ModularGui
public "renderOverlay"(arg0: $GuiRender$Type, arg1: float): boolean
public "font"(): $Font
public "render"(arg0: $GuiRender$Type, arg1: float): void
public "setFloatingItemDisablesToolTips"(arg0: boolean): void
public "setPauseScreen"(arg0: boolean): void
public "setCloseOnEscape"(arg0: boolean): void
public "setVanillaSlotRendering"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "createRender"(arg0: $MultiBufferSource$BufferSource$Type): $GuiRender
public "setSlotHandler"(arg0: $Slot$Type, arg1: $GuiElement$Type<(any)>): void
public "getParentScreen"(): $Screen
public "getJeiExclusions"(): $List<($GuiElement<(any)>)>
public "getJeiDropTargets"(): $List<($GuiElement<(any)>)>
public "setJeiHighlightTime"(arg0: integer): void
public "onMouseClickPre"(arg0: $TriConsumer$Type<(double), (double), (integer)>): void
public "onKeyPressPre"(arg0: $TriConsumer$Type<(integer), (integer), (integer)>): void
public "onMouseClickPost"(arg0: $TriConsumer$Type<(double), (double), (integer)>): void
public "onKeyPressPost"(arg0: $TriConsumer$Type<(integer), (integer), (integer)>): void
public "setCursor"(arg0: $ResourceLocation$Type): void
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "addChild"(arg0: $Consumer$Type<($ModularGui$Type)>): $ModularGui
public "onTick"(arg0: $Runnable$Type): void
public "getScreen"(): $Screen
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setScreen"(arg0: $Screen$Type): void
public "yMin"(): double
public "mouseMoved"(arg0: double, arg1: double): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "xMax"(): double
public "xMin"(): double
public "yMax"(): double
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
public "onGuiClose"(): void
public "onResize"(arg0: $Runnable$Type): void
public "get"(arg0: $GeoParam$Type): $GeoRef
public "getValue"(arg0: $GeoParam$Type): double
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
get "children"(): $List<($GuiElement<(any)>)>
get "provider"(): $GuiProvider
get "root"(): $GuiElement<(any)>
get "directRoot"(): $GuiElement<(any)>
get "guiTitle"(): $Component
set "guiTitle"(value: $Component$Type)
get "jeiHighlightTime"(): integer
get "pauseScreen"(): boolean
get "modularGui"(): $ModularGui
set "floatingItemDisablesToolTips"(value: boolean)
set "pauseScreen"(value: boolean)
get "parentScreen"(): $Screen
get "jeiExclusions"(): $List<($GuiElement<(any)>)>
get "jeiDropTargets"(): $List<($GuiElement<(any)>)>
set "jeiHighlightTime"(value: integer)
set "cursor"(value: $ResourceLocation$Type)
get "screen"(): $Screen
set "screen"(value: $Screen$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGui$Type = ($ModularGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularGui_ = $ModularGui$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$VertexAttribute" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export class $VertexAttribute<T> implements $IVertexOperation {
 "active": boolean

constructor(arg0: $AttributeKey$Type<(T)>)

public "operationID"(): integer
public "load"(arg0: $CCRenderState$Type): boolean
public static "registerOperation"(): integer
public static "operationCount"(): integer
public "operate"(arg0: $CCRenderState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexAttribute$Type<T> = ($VertexAttribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexAttribute_<T> = $VertexAttribute$Type<(T)>;
}}
declare module "packages/codechicken/lib/capability/$CapabilityCache" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityCache {

constructor()
constructor(arg0: $Level$Type, arg1: $BlockPos$Type)

public "tick"(): void
public "clear"(): void
public "setWaitTicks"(arg0: integer): void
public "getCapabilityOr"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type, arg2: T): T
public "getCapabilityOr"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type, arg2: $NonNullSupplier$Type<(T)>): T
public "setWorldPos"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onNeighborChanged"(arg0: $BlockPos$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
set "waitTicks"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCache$Type = ($CapabilityCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityCache_ = $CapabilityCache$Type;
}}
declare module "packages/codechicken/lib/render/$CCRenderState" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$IVertexSource, $IVertexSource$Type} from "packages/codechicken/lib/render/pipeline/$IVertexSource"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$LightMatrix, $LightMatrix$Type} from "packages/codechicken/lib/render/lighting/$LightMatrix"
import {$CachedFormat, $CachedFormat$Type} from "packages/codechicken/lib/model/$CachedFormat"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$LC, $LC$Type} from "packages/codechicken/lib/render/lighting/$LC"
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$ColourRGBA, $ColourRGBA$Type} from "packages/codechicken/lib/colour/$ColourRGBA"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $CCRenderState {
readonly "normalAttrib": $VertexAttribute<(($Vector3)[])>
readonly "colourAttrib": $VertexAttribute<((integer)[])>
readonly "lightingAttrib": $VertexAttribute<((integer)[])>
readonly "sideAttrib": $VertexAttribute<((integer)[])>
readonly "lightCoordAttrib": $VertexAttribute<(($LC)[])>
 "model": $IVertexSource
 "firstVertexIndex": integer
 "lastVertexIndex": integer
 "vertexIndex": integer
 "pipeline": $CCRenderPipeline
 "r": $VertexConsumer
 "fmt": $VertexFormat
 "cFmt": $CachedFormat
 "baseColour": integer
 "alphaOverride": integer
 "computeLighting": boolean
 "lightMatrix": $LightMatrix
readonly "vert": $Vertex5
readonly "normal": $Vector3
 "colour": integer
 "brightness": integer
 "overlay": integer
 "side": integer
 "lc": $LC
 "sprite": $TextureAtlasSprite


public static "instance"(): $CCRenderState
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $PoseStack$Type): void
public "bind"(arg0: $VertexConsumer$Type, arg1: $VertexFormat$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type): void
public "bind"(arg0: $BufferBuilder$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $Matrix4$Type): void
public "reset"(): void
public "setVertexRange"(arg0: integer, arg1: integer): void
public "preRenderWorld"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "setFluidColour"(arg0: $FluidStack$Type): void
public "setFluidColour"(arg0: $FluidStack$Type, arg1: integer): void
public "runPipeline"(): void
public "setBrightness"(arg0: $Entity$Type, arg1: float): void
public "setBrightness"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type, arg2: $BufferBuilder$Type): $BufferBuilder
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): $BufferBuilder
public "getVertexFormat"(): $VertexFormat
public "getConsumer"(): $VertexConsumer
public "setPipeline"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer, ...arg3: ($IVertexOperation$Type)[]): void
public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
public "render"(...arg0: ($IVertexOperation$Type)[]): void
public "render"(): void
public "draw"(): void
public "getColour"(): $ColourRGBA
public "setModel"(arg0: $IVertexSource$Type): void
public "setModel"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer): void
public "writeVert"(): void
public "setColour"(arg0: $Colour$Type): void
public "bindModel"(arg0: $IVertexSource$Type): void
set "fluidColour"(value: $FluidStack$Type)
get "vertexFormat"(): $VertexFormat
get "consumer"(): $VertexConsumer
set "pipeline"(value: ($IVertexOperation$Type)[])
get "colour"(): $ColourRGBA
set "model"(value: $IVertexSource$Type)
set "colour"(value: $Colour$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderState$Type = ($CCRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderState_ = $CCRenderState$Type;
}}
declare module "packages/codechicken/lib/colour/$ColourRGBA" {
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"

export class $ColourRGBA extends $Colour {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: $ColourRGBA$Type)
constructor(arg0: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: (float)[])

public "pack"(): integer
public static "pack"(arg0: $Colour$Type): integer
public static "multiply"(arg0: integer, arg1: integer): integer
public "set"(arg0: integer): $Colour
public "copy"(): $Colour
public static "multiplyC"(arg0: integer, arg1: float): integer
public "packArray"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColourRGBA$Type = ($ColourRGBA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColourRGBA_ = $ColourRGBA$Type;
}}
declare module "packages/codechicken/lib/colour/$Colour" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Colour implements $Copyable<($Colour)> {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Colour$Type)

public "sub"(arg0: $Colour$Type): $Colour
public static "pack"(arg0: (integer)[]): integer
public "pack"(): integer
public "multiply"(arg0: $Colour$Type): $Colour
public "add"(arg0: $Colour$Type): $Colour
public "equals"(arg0: any): boolean
public "equals"(arg0: $Colour$Type): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Colour
public "b"(): integer
public "a"(): integer
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Colour
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): $Colour
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Colour
public "set"(arg0: (double)[]): $Colour
public "set"(arg0: $Colour$Type): $Colour
public "set"(arg0: integer): $Colour
public "set"(arg0: (float)[]): $Colour
public "g"(): integer
public "r"(): integer
public "rgb"(): integer
public "interpolate"(arg0: $Colour$Type, arg1: double): $Colour
public static "unpack"(arg0: integer): (integer)[]
public "invert"(): $Colour
public "aF"(): float
public "aF"(arg0: float): $Colour
public "aF"(arg0: integer): $Colour
public "argb"(): integer
public "rF"(arg0: integer): $Colour
public "rF"(): float
public "rF"(arg0: float): $Colour
public "gF"(arg0: float): $Colour
public "gF"(arg0: integer): $Colour
public "gF"(): float
public "bF"(arg0: float): $Colour
public "bF"(): float
public "bF"(arg0: integer): $Colour
public "multiplyC"(arg0: double): $Colour
public static "flipABGR"(arg0: integer): integer
public "getRGBA"(): (float)[]
public "getARGB"(): (float)[]
public static "packRGBA"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "packRGBA"(arg0: (float)[]): integer
public static "packRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packRGBA"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packARGB"(arg0: (float)[]): integer
public static "packARGB"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packARGB"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public "packArray"(): (float)[]
public "rgba"(): integer
get "rGBA"(): (float)[]
get "aRGB"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$Type = ($Colour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstrainedGeometry" {
import {$GeoParam, $GeoParam$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoParam"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Constraints$LayoutPos, $Constraints$LayoutPos$Type} from "packages/codechicken/lib/gui/modular/lib/$Constraints$LayoutPos"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"
import {$Constraint, $Constraint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Constraint"

export class $ConstrainedGeometry<T extends $ConstrainedGeometry<(T)>> implements $GuiParent<(T)> {

constructor()

public "setSize"(arg0: double, arg1: double): T
public "getPosition"(): $Position
public "xSize"(): double
public "ySize"(): double
public "get"(arg0: $GeoParam$Type): $GeoRef
public "validate"(): void
public "getParent"(): $GuiParent<(any)>
public "getParent"(arg0: $GeoParam$Type): $GeoRef
public "placeInside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type, arg2: double, arg3: double): T
public "placeInside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type): T
public "getRectangle"(): $Rectangle
public "clearConstraints"(): T
public "clearGeometryCache"(): void
public "getEnclosingRect"(): $Rectangle$Mutable
public "addBoundsToRect"(arg0: $Rectangle$Mutable$Type): $Rectangle$Mutable
public "getChildBounds"(): $Rectangle$Mutable
public "placeOutside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type): T
public "placeOutside"(arg0: $ConstrainedGeometry$Type<(any)>, arg1: $Constraints$LayoutPos$Type, arg2: double, arg3: double): T
public "setPos"(arg0: double, arg1: double): T
public "strictMode"(arg0: boolean): T
public "setHeight"(arg0: double): T
public "yMin"(): double
public "setWidth"(arg0: double): T
public "xMax"(): double
public "xMin"(): double
public "yMax"(): double
public "constrain"(arg0: $GeoParam$Type, arg1: $Constraint$Type): T
public "setXPos"(arg0: double): T
public "setYPos"(arg0: double): T
public "xCenter"(): double
public "yCenter"(): double
public "getChildren"(): $List<($GuiElement<(any)>)>
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "getValue"(arg0: $GeoParam$Type): double
public "mc"(): $Minecraft
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
public "scaledScreenWidth"(): integer
public "scaledScreenHeight"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
public "getModularGui"(): $ModularGui
public "font"(): $Font
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "addChild"(arg0: $Consumer$Type<(T)>): T
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
get "position"(): $Position
get "parent"(): $GuiParent<(any)>
get "rectangle"(): $Rectangle
get "enclosingRect"(): $Rectangle$Mutable
get "childBounds"(): $Rectangle$Mutable
set "height"(value: double)
set "width"(value: double)
set "xPos"(value: double)
set "yPos"(value: double)
get "children"(): $List<($GuiElement<(any)>)>
get "modularGui"(): $ModularGui
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstrainedGeometry$Type<T> = ($ConstrainedGeometry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstrainedGeometry_<T> = $ConstrainedGeometry$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey" {
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"

export class $AttributeKey<T> {
readonly "attributeKeyIndex": integer
readonly "operationIndex": integer

constructor(arg0: string)

public "copy"(arg0: T, arg1: integer): T
public static "create"<T>(arg0: string, arg1: $IntFunction$Type<(T)>): $AttributeKey<(T)>
public "createDefault"(arg0: integer): T
public "copyRange"(arg0: T, arg1: integer, arg2: T, arg3: integer, arg4: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiRender$RenderWrapper" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiRender$RenderWrapper extends $GuiGraphics {
static readonly "MAX_GUI_Z": float
static readonly "MIN_GUI_Z": float
 "minecraft": $Minecraft
 "pose": $PoseStack
 "bufferSource": $MultiBufferSource$BufferSource
 "tooltipStack": $ItemStack


public "drawManaged"(arg0: $Runnable$Type): void
public "flush"(): void
public "flushIfUnmanaged"(): void
public "flushIfManaged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRender$RenderWrapper$Type = ($GuiRender$RenderWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiRender$RenderWrapper_ = $GuiRender$RenderWrapper$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Mutable, $Rectangle$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Rectangle {

 "setSize"(arg0: double, arg1: double): $Rectangle
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "intersects"(arg0: $Rectangle$Type): boolean
 "min"(arg0: $Axis$Type): double
 "max"(arg0: $Axis$Type): double
 "size"(arg0: $Axis$Type): double
 "x"(): double
 "contains"(arg0: double, arg1: double): boolean
 "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
 "pos"(): $Position
 "y"(): double
 "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
 "intersect"(arg0: $Rectangle$Type): $Rectangle
 "width"(): double
 "height"(): double
 "setPos"(arg0: double, arg1: double): $Rectangle
 "mutable"(): $Rectangle$Mutable
 "offsetPos"(arg0: double, arg1: double): $Rectangle
 "xMax"(): double
 "yMax"(): double
 "offsetSize"(arg0: double, arg1: double): $Rectangle
 "toRect2i"(): $Rect2i
}

export namespace $Rectangle {
function create(arg0: $GuiParent$Type<(any)>): $Rectangle
function create(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
function create(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
function create(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Type = ($Rectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle_ = $Rectangle$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$Constraints$LayoutPos" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Constraints$LayoutPos extends $Enum<($Constraints$LayoutPos)> {
static readonly "TOP_LEFT": $Constraints$LayoutPos
static readonly "TOP_CENTER": $Constraints$LayoutPos
static readonly "TOP_RIGHT": $Constraints$LayoutPos
static readonly "MIDDLE_RIGHT": $Constraints$LayoutPos
static readonly "MIDDLE_LEFT": $Constraints$LayoutPos
static readonly "BOTTOM_RIGHT": $Constraints$LayoutPos
static readonly "BOTTOM_CENTER": $Constraints$LayoutPos
static readonly "BOTTOM_LEFT": $Constraints$LayoutPos


public static "values"(): ($Constraints$LayoutPos)[]
public static "valueOf"(arg0: string): $Constraints$LayoutPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraints$LayoutPos$Type = (("top_right") | ("top_center") | ("middle_right") | ("top_left") | ("middle_left") | ("bottom_right") | ("bottom_left") | ("bottom_center")) | ($Constraints$LayoutPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constraints$LayoutPos_ = $Constraints$LayoutPos$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformationList" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"

export class $UVTransformationList extends $UVTransformation {
static readonly "operationIndex": integer

constructor(...arg0: ($UVTransformation$Type)[])
constructor(arg0: $UVTransformationList$Type)

public "prepend"(arg0: $UVTransformation$Type): $UVTransformationList
public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "toString"(): string
public "apply"(arg0: $UV$Type): void
public "copy"(): $UVTransformation
public "isRedundant"(): boolean
public "inverse"(): $UVTransformation
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformationList$Type = ($UVTransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformationList_ = $UVTransformationList$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataByteBuf" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $MCDataByteBuf implements $MCDataInput, $MCDataOutput {

constructor()
constructor(arg0: $ByteBuf$Type)

public "writeFloat"(arg0: float): $MCDataOutput
public "readFloat"(): float
public "readLong"(): long
public "writeLong"(arg0: long): $MCDataOutput
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $MCDataOutput
public "writeByte"(arg0: integer): $MCDataOutput
public "writeShort"(arg0: integer): $MCDataOutput
public "writeDouble"(arg0: double): $MCDataOutput
public "writeChar"(arg0: integer): $MCDataOutput
public "readChar"(): character
public "writeInt"(arg0: integer): $MCDataOutput
public "readInt"(): integer
public "toPacketBuffer"(): $FriendlyByteBuf
public static "readFromNBT"(arg0: $CompoundTag$Type, arg1: string): $MCDataByteBuf
public "writeToNBT"(arg0: $CompoundTag$Type, arg1: string): $CompoundTag
public "toTag"(): $Tag
public static "fromTag"(arg0: $Tag$Type): $MCDataByteBuf
public "readUByte"(): short
public "readUShort"(): integer
public "readString"(): string
public "toInputStream"(): $InputStream
public "readBytes"(): (byte)[]
public "readEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
public "readInts"(): (integer)[]
public "readLongs"(): (long)[]
public "readFloats"(): (float)[]
public "readDoubles"(): (double)[]
public "readShorts"(): (short)[]
public "readChars"(): (character)[]
public "readBooleans"(): (boolean)[]
public "readVarLong"(): long
public "readSignedVarInt"(): integer
public "readSignedVarLong"(): long
public "readVarInts"(): (integer)[]
public "readVarLongs"(): (long)[]
public "readSignedVarInts"(): (integer)[]
public "readSignedVarLongs"(): (long)[]
public "readByteBuffer"(): $ByteBuffer
public "readCharBuffer"(): $CharBuffer
public "readShortBuffer"(): $ShortBuffer
public "readIntBuffer"(): $IntBuffer
public "readLongBuffer"(): $LongBuffer
public "readFloatBuffer"(): $FloatBuffer
public "readDoubleBuffer"(): $DoubleBuffer
public "readResourceLocation"(): $ResourceLocation
public "readDirection"(): $Direction
public "readCompoundNBT"(): $CompoundTag
public "readItemStack"(): $ItemStack
public "readByteBuf"(): $ByteBuf
public "toDataInput"(): $DataInput
public "readRegistryId"<T>(): T
public "readFluidStack"(): $FluidStack
public "readTextComponent"(): $MutableComponent
public "readRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>): T
public "readVarInt"(): integer
public "readVec3i"(): $Vec3i
public "readVec3d"(): $Vec3
public "readPos"(): $BlockPos
public "readVector"(): $Vector3
public "readCuboid"(): $Cuboid6
public "readUUID"(): $UUID
public "readVec3f"(): $Vector3f
public "writeString"(arg0: string): $MCDataOutput
public "writeString"(arg0: string, arg1: integer): $MCDataOutput
public "writeChars"(arg0: (character)[]): $MCDataOutput
public "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeBytes"(arg0: (byte)[]): $MCDataOutput
public "append"(arg0: $ByteBuf$Type): $MCDataOutput
public "append"(arg0: (byte)[]): $MCDataOutput
public "writeBooleans"(arg0: (boolean)[]): $MCDataOutput
public "writeBooleans"(arg0: (boolean)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeDoubles"(arg0: (double)[]): $MCDataOutput
public "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeVarInt"(arg0: integer): $MCDataOutput
public "writeTextComponent"(arg0: $Component$Type): $MCDataOutput
public "writeVector"(arg0: $Vector3$Type): $MCDataOutput
public "writeResourceLocation"(arg0: $ResourceLocation$Type): $MCDataOutput
public "writeShorts"(arg0: (short)[]): $MCDataOutput
public "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeFloats"(arg0: (float)[]): $MCDataOutput
public "writeVarLong"(arg0: long): $MCDataOutput
public "writeSignedVarInt"(arg0: integer): $MCDataOutput
public "writeSignedVarLong"(arg0: long): $MCDataOutput
public "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeVarInts"(arg0: (integer)[]): $MCDataOutput
public "writeVarLongs"(arg0: (long)[]): $MCDataOutput
public "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeSignedVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeSignedVarInts"(arg0: (integer)[]): $MCDataOutput
public "writeSignedVarLongs"(arg0: (long)[]): $MCDataOutput
public "writeSignedVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeByteBuffer"(arg0: $ByteBuffer$Type): $MCDataOutput
public "writeCharBuffer"(arg0: $CharBuffer$Type): $MCDataOutput
public "writeShortBuffer"(arg0: $ShortBuffer$Type): $MCDataOutput
public "writeIntBuffer"(arg0: $IntBuffer$Type): $MCDataOutput
public "writeLongBuffer"(arg0: $LongBuffer$Type): $MCDataOutput
public "writeFloatBuffer"(arg0: $FloatBuffer$Type): $MCDataOutput
public "writeDoubleBuffer"(arg0: $DoubleBuffer$Type): $MCDataOutput
public "writeCuboid"(arg0: $Cuboid6$Type): $MCDataOutput
public "writeDirection"(arg0: $Direction$Type): $MCDataOutput
public "writeCompoundNBT"(arg0: $CompoundTag$Type): $MCDataOutput
public "toDataOutput"(): $DataOutput
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
public "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
public "writeByteBuf"(arg0: $ByteBuf$Type): $MCDataOutput
public "toOutputStream"(): $OutputStream
public "writeItemStack"(arg0: $ItemStack$Type): $MCDataOutput
public "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $MCDataOutput
public "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
public "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
public "writeFluidStack"(arg0: $FluidStack$Type): $MCDataOutput
public "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeInts"(arg0: (integer)[]): $MCDataOutput
public "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
public "writeLongs"(arg0: (long)[]): $MCDataOutput
public "writeEnum"(arg0: $Enum$Type<(any)>): $MCDataOutput
public "writePos"(arg0: $BlockPos$Type): $MCDataOutput
public "writeUUID"(arg0: $UUID$Type): $MCDataOutput
public "writeVec3f"(arg0: $Vector3f$Type): $MCDataOutput
public "writeVec3i"(arg0: $Vec3i$Type): $MCDataOutput
public "writeVec3d"(arg0: $Vec3$Type): $MCDataOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataByteBuf$Type = ($MCDataByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataByteBuf_ = $MCDataByteBuf$Type;
}}
declare module "packages/codechicken/lib/model/$CachedFormat" {
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $CachedFormat {
static readonly "BLOCK": $CachedFormat
readonly "format": $VertexFormat
readonly "hasPosition": boolean
readonly "hasNormal": boolean
readonly "hasColor": boolean
readonly "hasUV": boolean
readonly "hasOverlay": boolean
readonly "hasLightMap": boolean
readonly "positionIndex": integer
readonly "normalIndex": integer
readonly "colorIndex": integer
readonly "uvIndex": integer
readonly "overlayIndex": integer
readonly "lightMapIndex": integer
readonly "elementCount": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "lookup"(arg0: $VertexFormat$Type): $CachedFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedFormat$Type = ($CachedFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedFormat_ = $CachedFormat$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$PlanarLightModel" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

export class $PlanarLightModel implements $IVertexOperation {
static "standardLightModel": $PlanarLightModel
 "colours": (integer)[]

constructor(arg0: (integer)[])

public "load"(arg0: $CCRenderState$Type): boolean
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarLightModel$Type = ($PlanarLightModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanarLightModel_ = $PlanarLightModel$Type;
}}
declare module "packages/codechicken/lib/inventory/container/data/$AbstractDataStore" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $AbstractDataStore<T> {

constructor(arg0: T)

public "get"(): T
public "toBytes"(arg0: $MCDataOutput$Type): void
public "set"(arg0: T): void
public "isSameValue"(arg0: T): boolean
public "fromBytes"(arg0: $MCDataInput$Type): void
public "markDirty"(): void
public "toTag"(): $Tag
public "fromTag"(arg0: $Tag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDataStore$Type<T> = ($AbstractDataStore<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDataStore_<T> = $AbstractDataStore$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$TooltipHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"

export interface $TooltipHandler<T extends $TooltipHandler<(T)>> {

 "getTooltipDelay"(): integer
 "setTooltipDelay"(arg0: integer): T
 "setTooltipSingle"(arg0: $Component$Type): T
 "setTooltipSingle"(arg0: $Supplier$Type<($Component$Type)>): T
 "renderTooltip"(arg0: $GuiRender$Type, arg1: double, arg2: double): boolean
 "getTooltip"(): $Supplier<($List<($Component)>)>
 "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>): T
 "setTooltip"(...arg0: ($Component$Type)[]): T
 "setTooltip"(arg0: $List$Type<($Component$Type)>): T
 "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>, arg1: integer): T
}

export namespace $TooltipHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipHandler$Type<T> = ($TooltipHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipHandler_<T> = $TooltipHandler$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/lighting/$LightModel$Light" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"

export class $LightModel$Light {
 "ambient": $Vector3
 "diffuse": $Vector3
 "position": $Vector3

constructor(arg0: $Vector3$Type)

public "setAmbient"(arg0: $Vector3$Type): $LightModel$Light
public "setDiffuse"(arg0: $Vector3$Type): $LightModel$Light
set "ambient"(value: $Vector3$Type)
set "diffuse"(value: $Vector3$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightModel$Light$Type = ($LightModel$Light);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightModel$Light_ = $LightModel$Light$Type;
}}
declare module "packages/codechicken/lib/gui/modular/elements/$GuiElement" {
import {$ElementEvents, $ElementEvents$Type} from "packages/codechicken/lib/gui/modular/lib/$ElementEvents"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConstrainedGeometry, $ConstrainedGeometry$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstrainedGeometry"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipHandler, $TooltipHandler$Type} from "packages/codechicken/lib/gui/modular/lib/$TooltipHandler"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GuiElement<T extends $GuiElement<(T)>> extends $ConstrainedGeometry<(T)> implements $ElementEvents, $TooltipHandler<(T)> {
 "initialized": boolean

constructor(arg0: $GuiParent$Type<(any)>)

public "getChildren"(): $List<($GuiElement<(any)>)>
public "isEnabled"(): boolean
public "removeChild"(arg0: $GuiElement$Type<(any)>): void
public "tick"(arg0: double, arg1: double): void
public "toString"(): string
public "getParent"(): $GuiParent<(any)>
public "mc"(): $Minecraft
public "setOpaque"(arg0: boolean): T
public "isOpaque"(): boolean
public "isJeiExcluded"(): boolean
public "initElement"(arg0: $GuiParent$Type<(any)>): void
public "bringChildToForeground"(arg0: $GuiElement$Type<(any)>): void
public "sendChildToIndex"(arg0: $GuiElement$Type<(any)>, arg1: integer): void
public "sendChildToBackground"(arg0: $GuiElement$Type<(any)>): void
public "setEnableToolTip"(arg0: $Supplier$Type<(boolean)>): T
public "isTooltipEnabled"(): boolean
public "blockMouseEvents"(): boolean
public "setRenderCull"(arg0: $Rectangle$Type): T
public "setZStacking"(arg0: boolean): T
public "getCombinedElementDepth"(): double
public "showToolTip"(): boolean
public "getTooltipDelay"(): integer
public "setTooltipDelay"(arg0: integer): T
public "setJeiExcluded"(arg0: boolean): T
public "setJeiDropTarget"(arg0: $Consumer$Type<($ItemStack$Type)>, arg1: boolean): T
public "getJeiDropConsumer"(): $Consumer<($ItemStack)>
public "isJeiDropTarget"(): boolean
public "addJeiExclusions"(arg0: $List$Type<($GuiElement$Type<(any)>)>): $List<($GuiElement<(any)>)>
public "addJeiDropTargets"(arg0: $List$Type<($GuiElement$Type<(any)>)>): $List<($GuiElement<(any)>)>
public "isDescendantOf"(arg0: $GuiElement$Type<(any)>): boolean
public "scaledScreenWidth"(): integer
public "scaledScreenHeight"(): integer
public "onScreenInit"(arg0: $Minecraft$Type, arg1: $Font$Type, arg2: integer, arg3: integer): void
public "blockMouseOver"(arg0: $GuiElement$Type<(any)>, arg1: double, arg2: double): boolean
public "isMouseOver"(): boolean
public "getModularGui"(): $ModularGui
public "updateMouseOver"(arg0: double, arg1: double, arg2: boolean): boolean
public "renderOverlay"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: float, arg4: boolean): boolean
public "font"(): $Font
public "render"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: float): void
public "addChild"(arg0: $GuiElement$Type<(any)>): void
public "isRemoved"(): boolean
public "setEnabled"(arg0: $Supplier$Type<(boolean)>): T
public "setEnabled"(arg0: boolean): T
public "getTooltip"(): $Supplier<($List<($Component)>)>
public "adoptChild"(arg0: $GuiElement$Type<(any)>): void
public "jeiExclude"(): T
public "hoverTime"(): integer
public "zStacking"(): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer, arg3: boolean): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: boolean): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "charTyped"(arg0: character, arg1: integer, arg2: boolean): boolean
public "setTooltipSingle"(arg0: $Component$Type): T
public "setTooltipSingle"(arg0: $Supplier$Type<($Component$Type)>): T
public "renderTooltip"(arg0: $GuiRender$Type, arg1: double, arg2: double): boolean
public "setTooltip"(...arg0: ($Component$Type)[]): T
public "setTooltip"(arg0: $List$Type<($Component$Type)>): T
public "setTooltip"(arg0: $Supplier$Type<($List$Type<($Component$Type)>)>, arg1: integer): T
get "children"(): $List<($GuiElement<(any)>)>
get "enabled"(): boolean
get "parent"(): $GuiParent<(any)>
set "opaque"(value: boolean)
get "opaque"(): boolean
get "jeiExcluded"(): boolean
set "enableToolTip"(value: $Supplier$Type<(boolean)>)
get "tooltipEnabled"(): boolean
set "renderCull"(value: $Rectangle$Type)
get "combinedElementDepth"(): double
get "tooltipDelay"(): integer
set "tooltipDelay"(value: integer)
set "jeiExcluded"(value: boolean)
get "jeiDropConsumer"(): $Consumer<($ItemStack)>
get "jeiDropTarget"(): boolean
get "mouseOver"(): boolean
get "modularGui"(): $ModularGui
get "removed"(): boolean
set "enabled"(value: $Supplier$Type<(boolean)>)
set "enabled"(value: boolean)
get "tooltip"(): $Supplier<($List<($Component)>)>
set "tooltipSingle"(value: $Component$Type)
set "tooltipSingle"(value: $Supplier$Type<($Component$Type)>)
set "tooltip"(value: ($Component$Type)[])
set "tooltip"(value: $List$Type<($Component$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiElement$Type<T> = ($GuiElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiElement_<T> = $GuiElement$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Position$Mutable" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"

export class $Position$Mutable implements $Position {

constructor(arg0: double, arg1: double)

public "toString"(): string
public "offset"(arg0: double, arg1: double): $Position
public "x"(): double
public "set"(arg0: double, arg1: double): $Position
public "y"(): double
public "get"(arg0: $Axis$Type): double
public static "create"(arg0: $GuiParent$Type<(any)>): $Position
public static "create"(arg0: double, arg1: double): $Position
public static "create"(arg0: $Supplier$Type<(double)>, arg1: $Supplier$Type<(double)>): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Mutable$Type = ($Position$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position$Mutable_ = $Position$Mutable$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$MidPointDynamic extends $ConstraintImpl<($ConstraintImpl$MidPointDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>)

public "getOffset"(): double
public "getStart"(): double
public "getEnd"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "offset"(): double
get "start"(): double
get "end"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$MidPointDynamic$Type = ($ConstraintImpl$MidPointDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$MidPointDynamic_ = $ConstraintImpl$MidPointDynamic$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LightMatrix" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $LightMatrix implements $IVertexOperation {
static readonly "operationIndex": integer
 "computed": integer
 "ao": ((float)[])[]
 "brightness": ((integer)[])[]
 "access": $BlockAndTintGetter
 "pos": $BlockPos
static readonly "ssamplem": ((integer)[])[]
static readonly "qsamplem": ((integer)[])[]
static readonly "sideao": (float)[]

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "ao"(arg0: integer): (float)[]
public static "interpBrightness"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "operationID"(): integer
public "locate"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "brightness"(arg0: integer): (integer)[]
public "sample"(arg0: integer): void
public "operate"(arg0: $CCRenderState$Type): void
public "sideSample"(arg0: integer): void
public static "interpAO"(arg0: float, arg1: float, arg2: float, arg3: float): float
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightMatrix$Type = ($LightMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightMatrix_ = $LightMatrix$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LC" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $LC implements $Copyable<($LC)> {
 "side": integer
 "fa": float
 "fb": float
 "fc": float
 "fd": float

constructor()
constructor(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float)

public "compute"(arg0: $Vector3$Type, arg1: $Vector3$Type): $LC
public "compute"(arg0: $Vector3$Type, arg1: integer): $LC
public "set"(arg0: $LC$Type): $LC
public "set"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float): $LC
public "copy"(): $LC
public "computeO"(arg0: $Vector3$Type, arg1: integer): $LC
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LC$Type = ($LC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LC_ = $LC$Type;
}}
declare module "packages/codechicken/lib/vec/$Rotation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Rotation extends $Transformation {
static "quarterRotations": ($Transformation)[]
static "sideRotations": ($Transformation)[]
static "axes": ($Vector3)[]
static "sideRotMap": (integer)[]
static "rotSideMap": (integer)[]
static "sideRotOffsets": (integer)[]
 "angle": double
 "axis": $Vector3
static readonly "operationIndex": integer

constructor(arg0: double, arg1: $Vector3$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: $Quat$Type)
constructor(arg0: $Rotation$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "copy"(): $Rotation
public static "getSidedRotation"(arg0: $Player$Type, arg1: integer): integer
public static "sideOrientation"(arg0: integer, arg1: integer): $Transformation
public "isRedundant"(): boolean
public static "getSideFromLookAngle"(arg0: $LivingEntity$Type): integer
public "inverse"(): $Transformation
public static "rotationTo"(arg0: integer, arg1: integer): integer
public "applyN"(arg0: $Vector3$Type): void
public static "rotateSide"(arg0: integer, arg1: integer): integer
public "toQuat"(): $Quat
public static "registerOperation"(): integer
public static "operationCount"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/container/$DataSync" {
import {$ModularGuiContainerMenu, $ModularGuiContainerMenu$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractDataStore, $AbstractDataStore$Type} from "packages/codechicken/lib/inventory/container/data/$AbstractDataStore"

export class $DataSync<T> {
static readonly "PKT_SEND_CHANGES": integer

constructor(arg0: $ModularGuiContainerMenu$Type, arg1: $AbstractDataStore$Type<(T)>, arg2: $Supplier$Type<(T)>)

public "get"(): T
public "handleSyncPacket"(arg0: $MCDataInput$Type): void
public "detectAndSend"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSync$Type<T> = ($DataSync<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataSync_<T> = $DataSync$Type<(T)>;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerType$CCLContainerType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$ICCLContainerType, $ICCLContainerType$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerType"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"
import {$ICCLContainerFactory, $ICCLContainerFactory$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerFactory"
import {$FeatureFlag, $FeatureFlag$Type} from "packages/net/minecraft/world/flag/$FeatureFlag"

export class $ICCLContainerType$CCLContainerType<T extends $AbstractContainerMenu> extends $MenuType<(T)> implements $ICCLContainerType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>

constructor(arg0: $MenuType$MenuSupplier$Type<(T)>, arg1: $FeatureFlagSet$Type)

public "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
public static "create"<T extends $AbstractContainerMenu>(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
public static "create"<T extends $AbstractContainerMenu>(arg0: $ICCLContainerFactory$Type<(T)>, ...arg1: ($FeatureFlag$Type)[]): $MenuType<(T)>
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerType$CCLContainerType$Type<T> = ($ICCLContainerType$CCLContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerType$CCLContainerType_<T> = $ICCLContainerType$CCLContainerType$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"

export class $ConstraintImpl$RelativeDynamic extends $ConstraintImpl<($ConstraintImpl$RelativeDynamic)> {

constructor(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>)

public "getOffset"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "offset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$RelativeDynamic$Type = ($ConstraintImpl$RelativeDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$RelativeDynamic_ = $ConstraintImpl$RelativeDynamic$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiRender" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$Borders, $Borders$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Borders"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$Type} from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiRender$RenderWrapper, $GuiRender$RenderWrapper$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender$RenderWrapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Material, $Material$Type} from "packages/codechicken/lib/gui/modular/sprite/$Material"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GuiRender {
static readonly "SOLID": $RenderType

constructor(arg0: $Minecraft$Type, arg1: $MultiBufferSource$BufferSource$Type)
constructor(arg0: $Minecraft$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$BufferSource$Type)

public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "buffers"(): $MultiBufferSource$BufferSource
public static "convert"(arg0: $GuiGraphics$Type): $GuiRender
public "flush"(): void
public "fill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "fill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "mc"(): $Minecraft
public "rect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "rect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer): void
public "rect"(arg0: $Rectangle$Type, arg1: integer): void
public "rect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "overrideFont"(arg0: $Font$Type): void
/**
 * 
 * @deprecated
 */
public "guiGraphicsWrapper"(): $GuiRender$RenderWrapper
public "gradientFillV"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "gradientFillV"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer): void
public "gradientFillH"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "gradientFillH"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer): void
public "shadedFillInternal"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "partialSpriteTex"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: double, arg7: double, arg8: double, arg9: double, arg10: float, arg11: float, arg12: float, arg13: float): void
public "partialSpriteTex"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: double, arg7: double, arg8: double, arg9: double, arg10: integer): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: boolean): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer): void
public "drawWordWrap"(arg0: $FormattedText$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: boolean, arg6: double): void
public "renderComponentHoverEffect"(arg0: $Style$Type, arg1: integer, arg2: integer): void
public "renderFakeItem"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderFakeItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "drawCenteredString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public "drawCenteredString"(arg0: string, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: string, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public "drawCenteredString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer): void
public "drawCenteredString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: double, arg3: double): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: $ItemStack$Type, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "toolTipWithImage"(arg0: $List$Type<($Component$Type)>, arg1: $Optional$Type<($TooltipComponent$Type)>, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ItemStack$Type): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double): void
public "componentTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: $ItemStack$Type): void
public "componentTooltip"(arg0: $List$Type<($Component$Type)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "pushScissorRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "pushScissorRect"(arg0: $Rectangle$Type): void
public "drawScrollingString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: boolean): void
public "drawScrollingString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: boolean, arg6: boolean): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: string): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: string): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "toolTipBackground"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer): void
public "partialSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float): void
public "partialSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: integer): void
public "pushScissor"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $Component$Type, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>, arg1: $ClientTooltipPositioner$Type, arg2: double, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "renderTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "renderTooltip"(arg0: $List$Type<(any)>, arg1: double, arg2: double): void
public "renderTooltip"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "font"(): $Font
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: float, arg8: float): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "tex"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
public "tex"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double): void
public "pose"(): $PoseStack
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer): integer
public "drawString"(arg0: string, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: string, arg1: double, arg2: double, arg3: integer): integer
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer): integer
public "drawString"(arg0: $Component$Type, arg1: double, arg2: double, arg3: integer, arg4: boolean): integer
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: float, arg8: float, arg9: float, arg10: float): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: integer): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "sprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $Level$Type, arg2: $ItemStack$Type, arg3: double, arg4: double, arg5: double, arg6: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double, arg4: integer): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double, arg3: double): void
public "renderItem"(arg0: $ItemStack$Type, arg1: double, arg2: double): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "renderItem"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double, arg3: double, arg4: integer): void
public "popScissor"(): void
public static "texColType"(arg0: $ResourceLocation$Type): $RenderType
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type): void
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: float, arg8: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type, arg3: integer): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: $Rectangle$Type): void
public "texRect"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "texRect"(arg0: $Material$Type, arg1: integer, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer): void
public "texRect"(arg0: $Material$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
public "guiHeight"(): integer
public static "mixColours"(arg0: integer, arg1: integer): integer
public static "mixColours"(arg0: integer, arg1: integer, arg2: boolean): integer
public "borderRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "borderRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer): void
public "borderRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer): void
public "borderRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: double, arg3: integer, arg4: integer): void
public static "isInRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
public static "isInRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "shadedRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer, arg4: integer): void
public "shadedRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer): void
public "shadedRect"(arg0: $Rectangle$Type, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "shadedRect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "shadedRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: $Borders$Type, arg3: integer): void
public "dynamicTex"(arg0: $Material$Type, arg1: $Rectangle$Type, arg2: $Borders$Type): void
public static "midColour"(arg0: integer, arg1: integer): integer
public "batchDraw"(arg0: $Runnable$Type): void
public "guiWidth"(): integer
public "borderFill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer): void
public "borderFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer): void
public "shadedFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "shadedFill"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer): void
public "shadedFill"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type, arg4: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: integer, arg3: $TextureAtlasSprite$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer, arg6: $TextureAtlasSprite$Type, arg7: float, arg8: float, arg9: float, arg10: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type, arg3: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: $Rectangle$Type, arg2: $TextureAtlasSprite$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public "spriteRect"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer, arg7: integer, arg8: integer): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "tileSprite"(arg0: $RenderType$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $TextureAtlasSprite$Type, arg6: integer): void
public static "texType"(arg0: $ResourceLocation$Type): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRender$Type = ($GuiRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiRender_ = $GuiRender$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataOutput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataOutput {

 "writeFloat"(arg0: float): $MCDataOutput
 "writeString"(arg0: string): $MCDataOutput
 "writeString"(arg0: string, arg1: integer): $MCDataOutput
 "writeLong"(arg0: long): $MCDataOutput
 "writeBoolean"(arg0: boolean): $MCDataOutput
 "writeByte"(arg0: integer): $MCDataOutput
 "writeShort"(arg0: integer): $MCDataOutput
 "writeDouble"(arg0: double): $MCDataOutput
 "writeChars"(arg0: (character)[]): $MCDataOutput
 "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBytes"(arg0: (byte)[]): $MCDataOutput
 "writeChar"(arg0: integer): $MCDataOutput
 "append"(arg0: $ByteBuf$Type): $MCDataOutput
 "append"(arg0: (byte)[]): $MCDataOutput
 "writeInt"(arg0: integer): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[]): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeDoubles"(arg0: (double)[]): $MCDataOutput
 "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarInt"(arg0: integer): $MCDataOutput
 "writeTextComponent"(arg0: $Component$Type): $MCDataOutput
 "writeVector"(arg0: $Vector3$Type): $MCDataOutput
 "writeResourceLocation"(arg0: $ResourceLocation$Type): $MCDataOutput
 "writeShorts"(arg0: (short)[]): $MCDataOutput
 "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeFloats"(arg0: (float)[]): $MCDataOutput
 "writeVarLong"(arg0: long): $MCDataOutput
 "writeSignedVarInt"(arg0: integer): $MCDataOutput
 "writeSignedVarLong"(arg0: long): $MCDataOutput
 "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeByteBuffer"(arg0: $ByteBuffer$Type): $MCDataOutput
 "writeCharBuffer"(arg0: $CharBuffer$Type): $MCDataOutput
 "writeShortBuffer"(arg0: $ShortBuffer$Type): $MCDataOutput
 "writeIntBuffer"(arg0: $IntBuffer$Type): $MCDataOutput
 "writeLongBuffer"(arg0: $LongBuffer$Type): $MCDataOutput
 "writeFloatBuffer"(arg0: $FloatBuffer$Type): $MCDataOutput
 "writeDoubleBuffer"(arg0: $DoubleBuffer$Type): $MCDataOutput
 "writeCuboid"(arg0: $Cuboid6$Type): $MCDataOutput
 "writeDirection"(arg0: $Direction$Type): $MCDataOutput
 "writeCompoundNBT"(arg0: $CompoundTag$Type): $MCDataOutput
 "toDataOutput"(): $DataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeByteBuf"(arg0: $ByteBuf$Type): $MCDataOutput
 "toOutputStream"(): $OutputStream
 "writeItemStack"(arg0: $ItemStack$Type): $MCDataOutput
 "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeFluidStack"(arg0: $FluidStack$Type): $MCDataOutput
 "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeInts"(arg0: (integer)[]): $MCDataOutput
 "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeLongs"(arg0: (long)[]): $MCDataOutput
 "writeEnum"(arg0: $Enum$Type<(any)>): $MCDataOutput
 "writePos"(arg0: $BlockPos$Type): $MCDataOutput
 "writeUUID"(arg0: $UUID$Type): $MCDataOutput
 "writeVec3f"(arg0: $Vector3f$Type): $MCDataOutput
 "writeVec3i"(arg0: $Vec3i$Type): $MCDataOutput
 "writeVec3d"(arg0: $Vec3$Type): $MCDataOutput
}

export namespace $MCDataOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataOutput$Type = ($MCDataOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataOutput_ = $MCDataOutput$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Mutable" {
import {$Position, $Position$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position"
import {$Position$Mutable, $Position$Mutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Position$Mutable"
import {$Rectangle, $Rectangle$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle"
import {$GuiParent, $GuiParent$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GuiParent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rectangle$Immutable, $Rectangle$Immutable$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Rectangle$Immutable"
import {$Axis, $Axis$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$Axis"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Rectangle$Mutable implements $Rectangle {

constructor(arg0: $Position$Mutable$Type, arg1: double, arg2: double)

public "setSize"(arg0: double, arg1: double): $Rectangle
public "set"(arg0: $Rectangle$Type): void
public "combine"(...arg0: ($Rectangle$Type)[]): $Rectangle
public "pos"(): $Position
public "intersect"(arg0: $Rectangle$Type): $Rectangle
public "immutable"(): $Rectangle$Immutable
public "width"(): double
public "height"(): double
public "setPos"(arg0: double, arg1: double): $Rectangle
public "offsetPos"(arg0: double, arg1: double): $Rectangle
public "offsetSize"(arg0: double, arg1: double): $Rectangle
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle$Type): boolean
public "min"(arg0: $Axis$Type): double
public "max"(arg0: $Axis$Type): double
public "size"(arg0: $Axis$Type): double
public "x"(): double
public "contains"(arg0: double, arg1: double): boolean
public static "create"(arg0: $GuiParent$Type<(any)>): $Rectangle
public static "create"(arg0: $Position$Type, arg1: double, arg2: double): $Rectangle
public static "create"(arg0: $Position$Type, arg1: $Supplier$Type<(double)>, arg2: $Supplier$Type<(double)>): $Rectangle
public static "create"(arg0: double, arg1: double, arg2: double, arg3: double): $Rectangle
public "y"(): double
public "distance"(arg0: $Axis$Type, arg1: $Position$Type): double
public "mutable"(): $Rectangle$Mutable
public "xMax"(): double
public "yMax"(): double
public "toRect2i"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Mutable$Type = ($Rectangle$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle$Mutable_ = $Rectangle$Mutable$Type;
}}
declare module "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$SlotGroup, $SlotGroup$Type} from "packages/codechicken/lib/gui/modular/lib/container/$SlotGroup"
import {$DataSync, $DataSync$Type} from "packages/codechicken/lib/gui/modular/lib/container/$DataSync"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$DataSlot, $DataSlot$Type} from "packages/net/minecraft/world/inventory/$DataSlot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularGuiContainerMenu extends $AbstractContainerMenu {
readonly "inventory": $Inventory
readonly "slotGroups": $List<($SlotGroup)>
readonly "slotGroupMap": $Map<($Slot), ($SlotGroup)>
readonly "zonedSlots": $Map<(integer), ($List<($Slot)>)>
readonly "dataSyncs": $List<($DataSync<(any)>)>
static readonly "LOGGER": $Logger
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
readonly "dataSlots": $List<($DataSlot)>
 "carried": $ItemStack
 "remoteSlots": $NonNullList<($ItemStack)>
readonly "remoteDataSlots": $IntList
 "remoteCarried": $ItemStack
 "stateId": integer
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean


public static "canStacksMerge"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "handlePacketFromClient"(arg0: $Player$Type, arg1: integer, arg2: $MCDataInput$Type): void
public static "handlePacketFromClient"(arg0: $Player$Type, arg1: $MCDataInput$Type): void
public "sendPacketToClient"(arg0: integer, arg1: $Consumer$Type<($MCDataOutput$Type)>): void
public "sendPacketToServer"(arg0: integer, arg1: $Consumer$Type<($MCDataOutput$Type)>): void
public static "handlePacketFromServer"(arg0: $Player$Type, arg1: $MCDataInput$Type): void
public "handlePacketFromServer"(arg0: $Player$Type, arg1: integer, arg2: $MCDataInput$Type): void
public "broadcastChanges"(): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "mapSlot"(arg0: $Slot$Type, arg1: $SlotGroup$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGuiContainerMenu$Type = ($ModularGuiContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularGuiContainerMenu_ = $ModularGuiContainerMenu$Type;
}}
declare module "packages/codechicken/lib/util/$Copyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Copyable<T> {

 "copy"(): T

(): T
}

export namespace $Copyable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Copyable$Type<T> = ($Copyable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Copyable_<T> = $Copyable$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Dynamic extends $ConstraintImpl<($ConstraintImpl$Dynamic)> {

constructor(arg0: $Supplier$Type<(double)>)

public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Dynamic$Type = ($ConstraintImpl$Dynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Dynamic_ = $ConstraintImpl$Dynamic$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/$GuiProvider" {
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$ModularGui, $ModularGui$Type} from "packages/codechicken/lib/gui/modular/$ModularGui"

export interface $GuiProvider {

 "createRootElement"(arg0: $ModularGui$Type): $GuiElement<(any)>
 "buildGui"(arg0: $ModularGui$Type): void

(arg0: $ModularGui$Type): $GuiElement<(any)>
}

export namespace $GuiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiProvider$Type = ($GuiProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiProvider_ = $GuiProvider$Type;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerType" {
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ICCLContainerFactory, $ICCLContainerFactory$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerFactory"
import {$FeatureFlag, $FeatureFlag$Type} from "packages/net/minecraft/world/flag/$FeatureFlag"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $ICCLContainerType<T extends $AbstractContainerMenu> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T

(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
}

export namespace $ICCLContainerType {
function create<T>(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
function create<T>(arg0: $ICCLContainerFactory$Type<(T)>, ...arg1: ($FeatureFlag$Type)[]): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerType$Type<T> = ($ICCLContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerType_<T> = $ICCLContainerType$Type<(T)>;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$BetweenOffset extends $ConstraintImpl$Between {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double)

public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$BetweenOffset$Type = ($ConstraintImpl$BetweenOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$BetweenOffset_ = $ConstraintImpl$BetweenOffset$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataInput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataInput {

 "readFloat"(): float
 "readString"(): string
 "readLong"(): long
 "readBoolean"(): boolean
 "readByte"(): byte
 "readShort"(): short
 "readDouble"(): double
 "toInputStream"(): $InputStream
 "readBytes"(): (byte)[]
 "readChar"(): character
 "readEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
 "readInts"(): (integer)[]
 "readLongs"(): (long)[]
 "readFloats"(): (float)[]
 "readDoubles"(): (double)[]
 "readShorts"(): (short)[]
 "readChars"(): (character)[]
 "readBooleans"(): (boolean)[]
 "readInt"(): integer
 "readVarLong"(): long
 "readSignedVarInt"(): integer
 "readSignedVarLong"(): long
 "readVarInts"(): (integer)[]
 "readVarLongs"(): (long)[]
 "readSignedVarInts"(): (integer)[]
 "readSignedVarLongs"(): (long)[]
 "readByteBuffer"(): $ByteBuffer
 "readCharBuffer"(): $CharBuffer
 "readShortBuffer"(): $ShortBuffer
 "readIntBuffer"(): $IntBuffer
 "readLongBuffer"(): $LongBuffer
 "readFloatBuffer"(): $FloatBuffer
 "readDoubleBuffer"(): $DoubleBuffer
 "readResourceLocation"(): $ResourceLocation
 "readDirection"(): $Direction
 "readCompoundNBT"(): $CompoundTag
 "readItemStack"(): $ItemStack
 "readByteBuf"(): $ByteBuf
 "toDataInput"(): $DataInput
 "readRegistryId"<T>(): T
 "readFluidStack"(): $FluidStack
 "readTextComponent"(): $MutableComponent
 "readRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>): T
 "readVarInt"(): integer
 "readVec3i"(): $Vec3i
 "readVec3d"(): $Vec3
 "readPos"(): $BlockPos
 "readVector"(): $Vector3
 "readUByte"(): short
 "readUShort"(): integer
 "readCuboid"(): $Cuboid6
 "readUUID"(): $UUID
 "readVec3f"(): $Vector3f
}

export namespace $MCDataInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataInput$Type = ($MCDataInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataInput_ = $MCDataInput$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$ColourMultiplier" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

export class $ColourMultiplier implements $IVertexOperation {
static readonly "operationIndex": integer
 "colour": integer

constructor(arg0: integer)

public static "instance"(arg0: integer): $ColourMultiplier
public "load"(arg0: $CCRenderState$Type): boolean
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColourMultiplier$Type = ($ColourMultiplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColourMultiplier_ = $ColourMultiplier$Type;
}}
declare module "packages/codechicken/lib/vec/$Vector3" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Translation, $Translation$Type} from "packages/codechicken/lib/vec/$Translation"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Vector3 implements $Copyable<($Vector3)> {
static readonly "ZERO": $Vector3
static readonly "CENTER": $Vector3
static readonly "ONE": $Vector3
static readonly "X_POS": $Vector3
static readonly "X_NEG": $Vector3
static readonly "Y_POS": $Vector3
static readonly "Y_NEG": $Vector3
static readonly "Z_POS": $Vector3
static readonly "Z_NEG": $Vector3
 "x": double
 "y": double
 "z": double

constructor()
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vector3$Type)
constructor(arg0: (double)[])
constructor(arg0: (float)[])
constructor(arg0: $Vec3$Type)

public "negate"(): $Vector3
public "subtract"(arg0: double, arg1: double, arg2: double): $Vector3
public "subtract"(arg0: $Vec3$Type): $Vector3
public "subtract"(arg0: $BlockPos$Type): $Vector3
public "subtract"(arg0: $Vector3$Type): $Vector3
public "subtract"(arg0: double): $Vector3
public "divide"(arg0: double, arg1: double, arg2: double): $Vector3
public "divide"(arg0: $Vector3$Type): $Vector3
public "divide"(arg0: double): $Vector3
public "divide"(arg0: $BlockPos$Type): $Vector3
public "isZero"(): boolean
public "rotate"(arg0: double, arg1: $Vector3$Type): $Vector3
public "rotate"(arg0: $Quat$Type): $Vector3
public "multiply"(arg0: double, arg1: double, arg2: double): $Vector3
public "multiply"(arg0: $Vector3$Type): $Vector3
public "multiply"(arg0: double): $Vector3
public "add"(arg0: double): $Vector3
public "add"(arg0: $Vector3$Type): $Vector3
public "add"(arg0: double, arg1: double, arg2: double): $Vector3
public "add"(arg0: $BlockPos$Type): $Vector3
public "add"(arg0: $Vec3$Type): $Vector3
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "floor"(): $Vector3
public "ceil"(): $Vector3
public "apply"(arg0: $Transformation$Type): $Vector3
public "set"(arg0: $Vector3$Type): $Vector3
public "set"(arg0: $Vec3i$Type): $Vector3
public "set"(arg0: (float)[]): $Vector3
public "set"(arg0: double): $Vector3
public "set"(arg0: double, arg1: double, arg2: double): $Vector3
public "set"(arg0: (double)[]): $Vector3
public "pos"(): $BlockPos
public "normalize"(): $Vector3
public "mag"(): double
public "distance"(arg0: $Vector3$Type): double
public static "fromBlockPos"(arg0: $BlockPos$Type): $Vector3
public static "fromBlockPosCenter"(arg0: $BlockPos$Type): $Vector3
public static "fromEntityCenter"(arg0: $Entity$Type): $Vector3
public static "fromTileCenter"(arg0: $BlockEntity$Type): $Vector3
public "perpendicular"(): $Vector3
public "zCrossProduct"(): $Vector3
public "xCrossProduct"(): $Vector3
public "yCrossProduct"(): $Vector3
public "scalarProject"(arg0: $Vector3$Type): double
public "YZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "XZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "XYintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "unary_$tilde"(): $Vector3
public "crossProduct"(arg0: $Vector3$Type): $Vector3
public "distanceSquared"(arg0: $Vector3$Type): double
public "translation"(): $Translation
public "setSide"(arg0: integer, arg1: double): $Vector3
public "getSide"(arg0: integer): double
public "vec3"(): $Vec3
public "vector4f"(): $Vector4f
public "vector3f"(): $Vector3f
public "project"(arg0: $Vector3$Type): $Vector3
public "angle"(arg0: $Vector3$Type): double
public static "fromNBT"(arg0: $CompoundTag$Type): $Vector3
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public static "fromVec3i"(arg0: $Vec3i$Type): $Vector3
public "equalsT"(arg0: $Vector3$Type): boolean
public static "fromEntity"(arg0: $Entity$Type): $Vector3
public static "fromTile"(arg0: $BlockEntity$Type): $Vector3
public static "fromAxes"(arg0: (float)[]): $Vector3
public static "fromAxes"(arg0: (double)[]): $Vector3
public static "fromArray"(arg0: (double)[]): $Vector3
public static "fromArray"(arg0: (float)[]): $Vector3
public "toArrayD"(): (double)[]
public "toArrayF"(): (float)[]
public "magSquared"(): double
public "isAxial"(): boolean
public "$tilde"(): $Vector3
public "$plus"(arg0: $Vector3$Type): $Vector3
public "$minus"(arg0: $Vector3$Type): $Vector3
public "$times"(arg0: double): $Vector3
public "$times"(arg0: $Vector3$Type): $Vector3
public "$div"(arg0: double): $Vector3
public "$dot$times"(arg0: $Vector3$Type): double
public "dotProduct"(arg0: $Vector3$Type): double
public "dotProduct"(arg0: double, arg1: double, arg2: double): double
get "zero"(): boolean
get "axial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$Type = ($Vector3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3_ = $Vector3$Type;
}}
declare module "packages/codechicken/lib/vec/$Matrix4" {
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $Matrix4 extends $Transformation {
 "m00": double
 "m01": double
 "m02": double
 "m03": double
 "m10": double
 "m11": double
 "m12": double
 "m13": double
 "m20": double
 "m21": double
 "m22": double
 "m23": double
 "m30": double
 "m31": double
 "m32": double
 "m33": double
static readonly "operationIndex": integer

constructor(arg0: $DoubleBuffer$Type)
constructor(arg0: $Matrix4f$Type)
constructor(arg0: $PoseStack$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double)
constructor()
constructor(arg0: $Matrix4$Type)
constructor(arg0: (float)[])
constructor(arg0: (double)[])
constructor(arg0: $FloatBuffer$Type)

public "rotate"(arg0: double, arg1: $Vector3$Type): $Matrix4
public "rotate"(arg0: $Rotation$Type): $Matrix4
public "multiply"(arg0: $Matrix4$Type): $Matrix4
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double, arg1: double, arg2: double): $Matrix4
public "scale"(arg0: $Vector3$Type): $Matrix4
public "scale"(arg0: double): $Matrix4
public "apply"(arg0: $Matrix4$Type): void
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Transformation$Type): $Matrix4
public "set"(arg0: $DoubleBuffer$Type): $Matrix4
public "set"(arg0: $FloatBuffer$Type): $Matrix4
public "set"(arg0: $PoseStack$Type): $Matrix4
public "set"(arg0: $Matrix4f$Type): $Matrix4
public "set"(arg0: $Matrix4$Type): $Matrix4
public "set"(arg0: (float)[]): $Matrix4
public "set"(arg0: (double)[]): $Matrix4
public "save"(arg0: $DoubleBuffer$Type): void
public "save"(arg0: $FloatBuffer$Type): void
public "setIdentity"(): $Matrix4
public "leftMultiply"(arg0: $Matrix4$Type): $Matrix4
public "toFloatBuffer"(): $FloatBuffer
public "toDoubleBuffer"(): $DoubleBuffer
public "translate"(arg0: $Vector3$Type): $Matrix4
public "translate"(arg0: $Vec3i$Type): $Matrix4
public "translate"(arg0: double, arg1: double, arg2: double): $Matrix4
public "transpose"(): $Matrix4
public "inverse"(): $Transformation
public "toArrayD"(): (double)[]
public "toArrayF"(): (float)[]
public "applyN"(arg0: $Vector3$Type): void
public "multMatrix"(arg0: $Vector4f$Type): void
public "toMatrix4f"(): $Matrix4f
public static "gluProject"(arg0: $Vector3$Type, arg1: $Matrix4$Type, arg2: $Matrix4$Type, arg3: $IntBuffer$Type): $Vector3
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix4$Type = ($Matrix4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix4_ = $Matrix4$Type;
}}
declare module "packages/codechicken/lib/render/$CCModel" {
import {$LightModel, $LightModel$Type} from "packages/codechicken/lib/render/lighting/$LightModel"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"
import {$ModelMaterial, $ModelMaterial$Type} from "packages/codechicken/lib/render/model/$ModelMaterial"
import {$IVertexSource, $IVertexSource$Type} from "packages/codechicken/lib/render/pipeline/$IVertexSource"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $CCModel implements $IVertexSource, $Copyable<($CCModel)> {
readonly "vertexMode": $VertexFormat$Mode
readonly "vp": integer
 "verts": ($Vertex5)[]
 "attributes": $ArrayList<(any)>


public "getAttribute"<T>(arg0: $AttributeKey$Type<(T)>): T
public "setAttribute"<T>(arg0: $AttributeKey$Type<(T)>, arg1: T): void
public "hasAttribute"(arg0: $AttributeKey$Type<(any)>): boolean
public "apply"(arg0: $UVTransformation$Type): $CCModel
public "apply"(arg0: $Transformation$Type): $CCModel
public "apply"(arg0: $Transformation$Type, arg1: integer, arg2: integer, arg3: integer): $CCModel
public "bounds"(): $Cuboid6
public static "combine"(arg0: $Collection$Type<($CCModel$Type)>): $CCModel
public "copy"(): $CCModel
public static "copy"(arg0: $CCModel$Type, arg1: integer, arg2: $CCModel$Type, arg3: integer, arg4: integer): void
public "expand"(arg0: integer): $CCModel
public static "generateSidedModels"(arg0: ($CCModel$Type)[], arg1: integer, arg2: $Vector3$Type): void
public "getOrAllocate"<T>(arg0: $AttributeKey$Type<(T)>): T
public "generateBox"(arg0: integer, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double): $CCModel
public "smoothNormals"(): $CCModel
public static "createModel"(arg0: $List$Type<($Vector3$Type)>, arg1: $List$Type<($Vector3$Type)>, arg2: $List$Type<($Vector3$Type)>, arg3: $VertexFormat$Mode$Type, arg4: $List$Type<((integer)[])>): $CCModel
public static "generateSidedModelsH"(arg0: ($CCModel$Type)[], arg1: integer, arg2: $Vector3$Type): void
public static "generateBackface"(arg0: $CCModel$Type, arg1: integer, arg2: $CCModel$Type, arg3: integer, arg4: integer): $CCModel
public "generateSidedParts"(arg0: integer, arg1: $Vector3$Type): $CCModel
public "generateSidedPart"(arg0: integer, arg1: integer, arg2: $Vector3$Type, arg3: integer, arg4: integer, arg5: integer): $CCModel
public "generateSidedPartsH"(arg0: integer, arg1: $Vector3$Type): $CCModel
public "twoFacedCopy"(): $CCModel
public "generateBlock"(arg0: integer, arg1: $Cuboid6$Type, arg2: integer): $CCModel
public "generateBlock"(arg0: integer, arg1: $Cuboid6$Type): $CCModel
public "generateBlock"(arg0: integer, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: integer): $CCModel
public "generateBlock"(arg0: integer, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $CCModel
public "backfacedCopy"(): $CCModel
public "getVertices"(): ($Vertex5)[]
public "prepareVertex"(arg0: $CCRenderState$Type): void
public "computeNormals"(arg0: integer, arg1: integer): $CCModel
public "computeNormals"(): $CCModel
public "computeLighting"(arg0: $LightModel$Type): $CCModel
public "computeLightCoords"(): $CCModel
public "render"(arg0: $CCRenderState$Type, arg1: double, arg2: double, arg3: double, arg4: $UVTransformation$Type): void
public "render"(arg0: $CCRenderState$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "render"(arg0: $CCRenderState$Type, arg1: integer, arg2: integer, ...arg3: ($IVertexOperation$Type)[]): void
public "render"(arg0: $CCRenderState$Type, ...arg1: ($IVertexOperation$Type)[]): void
public "render"(arg0: $CCRenderState$Type, arg1: $Transformation$Type, arg2: double, arg3: double): void
public "material"(): $ModelMaterial
public "zOffset"(arg0: $Cuboid6$Type): $CCModel
public static "newModel"(arg0: $VertexFormat$Mode$Type, arg1: integer): $CCModel
public static "newModel"(arg0: $VertexFormat$Mode$Type): $CCModel
public "collapse"(): $Vector3
public "shrinkUVs"(arg0: double): $CCModel
public static "quadModel"(arg0: integer): $CCModel
public "setTex"(arg0: integer): $CCModel
public static "triModel"(arg0: integer): $CCModel
public "sidedCopy"(arg0: integer, arg1: integer, arg2: $Vector3$Type): $CCModel
public "setColour"(arg0: integer): $CCModel
public "normals"(): ($Vector3)[]
public "getVertexCount"(): integer
get "vertices"(): ($Vertex5)[]
set "tex"(value: integer)
set "colour"(value: integer)
get "vertexCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCModel$Type = ($CCModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCModel_ = $CCModel$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between" {
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$MidPoint, $ConstraintImpl$MidPoint$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$Between extends $ConstraintImpl<($ConstraintImpl$Between)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double)

public "clamp"(): $ConstraintImpl$Between
public "getStart"(): double
public "getPos"(): double
public "getEnd"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "start"(): double
get "pos"(): double
get "end"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$Between$Type = ($ConstraintImpl$Between);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$Between_ = $ConstraintImpl$Between$Type;
}}
declare module "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPoint" {
import {$ConstraintImpl$Between, $ConstraintImpl$Between$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Between"
import {$ConstraintImpl$MidPointDynamic, $ConstraintImpl$MidPointDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$MidPointDynamic"
import {$ConstraintImpl$BetweenOffset, $ConstraintImpl$BetweenOffset$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenOffset"
import {$ConstraintImpl$Literal, $ConstraintImpl$Literal$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Literal"
import {$ConstraintImpl$Relative, $ConstraintImpl$Relative$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Relative"
import {$ConstraintImpl$Dynamic, $ConstraintImpl$Dynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$Dynamic"
import {$ConstraintImpl, $ConstraintImpl$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl"
import {$GeoRef, $GeoRef$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$GeoRef"
import {$ConstraintImpl$BetweenDynamic, $ConstraintImpl$BetweenDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$BetweenDynamic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConstraintImpl$RelativeDynamic, $ConstraintImpl$RelativeDynamic$Type} from "packages/codechicken/lib/gui/modular/lib/geometry/$ConstraintImpl$RelativeDynamic"

export class $ConstraintImpl$MidPoint extends $ConstraintImpl<($ConstraintImpl$MidPoint)> {

constructor(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double)

public "getOffset"(): double
public "getStart"(): double
public "getEnd"(): double
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$Between
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>, arg3: $Supplier$Type<(double)>): $ConstraintImpl$BetweenDynamic
public static "between"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double, arg3: double): $ConstraintImpl$BetweenOffset
public static "literal"(arg0: double): $ConstraintImpl$Literal
public static "relative"(arg0: $GeoRef$Type, arg1: double): $ConstraintImpl$Relative
public static "relative"(arg0: $GeoRef$Type, arg1: $Supplier$Type<(double)>): $ConstraintImpl$RelativeDynamic
public static "match"(arg0: $GeoRef$Type): $ConstraintImpl$Relative
public static "dynamic"(arg0: $Supplier$Type<(double)>): $ConstraintImpl$Dynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: $Supplier$Type<(double)>): $ConstraintImpl$MidPointDynamic
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type, arg2: double): $ConstraintImpl$MidPoint
public static "midPoint"(arg0: $GeoRef$Type, arg1: $GeoRef$Type): $ConstraintImpl$MidPoint
get "offset"(): double
get "start"(): double
get "end"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstraintImpl$MidPoint$Type = ($ConstraintImpl$MidPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstraintImpl$MidPoint_ = $ConstraintImpl$MidPoint$Type;
}}
declare module "packages/codechicken/lib/vec/$Vertex5" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Vertex5 implements $Copyable<($Vertex5)> {
 "vec": $Vector3
 "uv": $UV

constructor(arg0: $Vertex5$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $UV$Type)
constructor(arg0: $Vector3$Type, arg1: double, arg2: double)

public "toString"(): string
public "apply"(arg0: $Transformation$Type): $Vertex5
public "apply"(arg0: $UVTransformation$Type): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): $Vertex5
public "set"(arg0: $Vector3$Type, arg1: double, arg2: double): $Vertex5
public "set"(arg0: $Vertex5$Type): $Vertex5
public "copy"(): $Vertex5
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vertex5$Type = ($Vertex5);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vertex5_ = $Vertex5$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformation" {
import {$UVTransformationList, $UVTransformationList$Type} from "packages/codechicken/lib/vec/uv/$UVTransformationList"
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

export class $UVTransformation extends $ITransformation<($UV), ($UVTransformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "load"(arg0: $CCRenderState$Type): boolean
public "at"(arg0: $UV$Type): $UVTransformation
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
public static "operationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformation$Type = ($UVTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformation_ = $UVTransformation$Type;
}}
declare module "packages/codechicken/lib/colour/$EnumColour" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$ColourRGBA, $ColourRGBA$Type} from "packages/codechicken/lib/colour/$ColourRGBA"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnumColour extends $Enum<($EnumColour)> implements $StringRepresentable {
static readonly "WHITE": $EnumColour
static readonly "ORANGE": $EnumColour
static readonly "MAGENTA": $EnumColour
static readonly "LIGHT_BLUE": $EnumColour
static readonly "YELLOW": $EnumColour
static readonly "LIME": $EnumColour
static readonly "PINK": $EnumColour
static readonly "GRAY": $EnumColour
static readonly "LIGHT_GRAY": $EnumColour
static readonly "CYAN": $EnumColour
static readonly "PURPLE": $EnumColour
static readonly "BLUE": $EnumColour
static readonly "BROWN": $EnumColour
static readonly "GREEN": $EnumColour
static readonly "RED": $EnumColour
static readonly "BLACK": $EnumColour


public "mix"(arg0: $EnumColour$Type): $EnumColour
public static "mix"(arg0: $EnumColour$Type, arg1: $EnumColour$Type): $EnumColour
public static "values"(): ($EnumColour)[]
public static "valueOf"(arg0: string): $EnumColour
public "getLocalizedName"(): string
public "rgb"(): integer
public "getUnlocalizedName"(): string
public static "fromDyeStack"(arg0: $ItemStack$Type): $EnumColour
public "getDyeTagName"(): $ResourceLocation
public "getWoolTagName"(): $ResourceLocation
public "getWoolMeta"(): integer
public static "fromWoolMeta"(arg0: integer): $EnumColour
public static "fromDyeMeta"(arg0: integer): $EnumColour
public static "fromWoolTag"(arg0: $ResourceLocation$Type): $EnumColour
public static "fromWoolStack"(arg0: $ItemStack$Type): $EnumColour
public "argb"(arg0: integer): integer
public "argb"(): integer
public "getSerializedName"(): string
public "rF"(): float
public "gF"(): float
public "bF"(): float
public "getDyeMeta"(): integer
public static "fromDyeTag"(arg0: $ResourceLocation$Type): $EnumColour
public "getColour"(): $ColourRGBA
public "getColour"(arg0: integer): $ColourRGBA
public static "fromName"(arg0: string): $EnumColour
public "rgba"(): integer
public "rgba"(arg0: integer): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "localizedName"(): string
get "unlocalizedName"(): string
get "dyeTagName"(): $ResourceLocation
get "woolTagName"(): $ResourceLocation
get "woolMeta"(): integer
get "serializedName"(): string
get "dyeMeta"(): integer
get "colour"(): $ColourRGBA
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumColour$Type = (("magenta") | ("pink") | ("green") | ("lime") | ("light_gray") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("orange") | ("red") | ("gray") | ("white") | ("blue") | ("purple")) | ($EnumColour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumColour_ = $EnumColour$Type;
}}
