declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeRedstone" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeRedstone extends $ItemUpgrade {
readonly "type": $EnumUpgradeRedstone
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumUpgradeRedstone$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRedstone$Type = ($ItemUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRedstone_ = $ItemUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawerPuller" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawerPuller extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getDescription"(): $Component
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerPuller$Type = ($ItemDrawerPuller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerPuller_ = $ItemDrawerPuller$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockController extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock, $IFramedSourceBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "togglePersonal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: string): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityController
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Item$Type): boolean
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $EnumKeyType$Type): void
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockController$Type = ($BlockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockController_ = $BlockController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFramedMaterials, $IFramedMaterials$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials"

export class $MaterialData extends $BlockEntityDataShim implements $IFramedMaterials {

constructor(arg0: $IFramedMaterials$Type)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type)
constructor()

public "clear"(): void
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getHostBlock"(): $ItemStack
public "getMaterial"(arg0: $FrameMaterial$Type): $ItemStack
public "getFrameBase"(): $ItemStack
public "getEffectiveSide"(): $ItemStack
public "getEffectiveFront"(): $ItemStack
public "getEffectiveTrim"(): $ItemStack
public "setFrameBase"(arg0: $ItemStack$Type): void
public "setHostBlock"(arg0: $ItemStack$Type): void
public "setMaterial"(arg0: $FrameMaterial$Type, arg1: $ItemStack$Type): void
public "setSide"(arg0: $ItemStack$Type): void
public "getSide"(): $ItemStack
public "getFront"(): $ItemStack
public "getTrim"(): $ItemStack
public "setFront"(arg0: $ItemStack$Type): void
public "setTrim"(arg0: $ItemStack$Type): void
get "empty"(): boolean
get "hostBlock"(): $ItemStack
get "frameBase"(): $ItemStack
get "effectiveSide"(): $ItemStack
get "effectiveFront"(): $ItemStack
get "effectiveTrim"(): $ItemStack
set "frameBase"(value: $ItemStack$Type)
set "hostBlock"(value: $ItemStack$Type)
set "side"(value: $ItemStack$Type)
get "side"(): $ItemStack
get "front"(): $ItemStack
get "trim"(): $ItemStack
set "front"(value: $ItemStack$Type)
set "trim"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialData$Type = ($MaterialData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialData_ = $MaterialData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedOpen" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSizedOpen extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$Type = ($BlockMetaFacingSizedOpen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedOpen_ = $BlockMetaFacingSizedOpen$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradePortability" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradePortability extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradePortability$Type = ($ItemUpgradePortability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradePortability_ = $ItemUpgradePortability$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeBalance" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeBalance extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeBalance$Type = ($ItemUpgradeBalance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeBalance_ = $ItemUpgradeBalance$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemFramedTrim" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemTrim, $ItemTrim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemTrim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFramedTrim extends $ItemTrim {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedTrim$Type = ($ItemFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedTrim_ = $ItemFramedTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ControllerData, $ControllerData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData"
import {$MaterialData, $MaterialData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"

export class $BlockEntitySlave extends $BaseBlockEntity implements $IDrawerGroup, $IControlGroup, $IFramedBlockEntity {
readonly "controllerData": $ControllerData
readonly "materialData": $MaterialData
 "worldPosition": $BlockPos

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "invalidateRemoteNode"(arg0: $INetworked$Type): void
public "addRemoteNode"(arg0: $INetworked$Type): boolean
public "isGroupValid"(): boolean
public "getAccessibleDrawerSlots"(): (integer)[]
public "getDrawerGroup"(): $IDrawerGroup
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "validateRemoteNode"(arg0: $INetworked$Type): void
public "getDrawerCount"(): integer
public "bindController"(arg0: $BlockPos$Type): void
public "getBoundControlGroup"(): $IControlGroup
public "getControllerPos"(): $BlockPos
public "getController"(): $BlockEntityController
public "getModelData"(): $ModelData
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "setChanged"(): void
public "material"(): $MaterialData
public "getDrawer"(arg0: integer): $IDrawer
public "hasMissingDrawers"(): boolean
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "drawerGroup"(): $IDrawerGroup
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerCount"(): integer
get "boundControlGroup"(): $IControlGroup
get "controllerPos"(): $BlockPos
get "controller"(): $BlockEntityController
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySlave$Type = ($BlockEntitySlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySlave_ = $BlockEntitySlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IDrawerGeometry, $IDrawerGeometry$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumCompDrawer extends $Enum<($EnumCompDrawer)> implements $IDrawerGeometry, $StringRepresentable {
static readonly "OPEN1": $EnumCompDrawer
static readonly "OPEN2": $EnumCompDrawer
static readonly "OPEN3": $EnumCompDrawer


public "toString"(): string
public static "values"(): ($EnumCompDrawer)[]
public static "valueOf"(arg0: string): $EnumCompDrawer
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "getOpenSlots"(): integer
public "getMetadata"(): integer
public static "byOpenSlots"(arg0: integer): $EnumCompDrawer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumCompDrawer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "openSlots"(): integer
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCompDrawer$Type = (("open1") | ("open2") | ("open3")) | ($EnumCompDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumCompDrawer_ = $EnumCompDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockMetaFacing, $BlockMetaFacing$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacing"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockMetaFacingSized extends $BlockMetaFacing {
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSized$Type = ($BlockMetaFacingSized);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSized_ = $BlockMetaFacingSized$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MaterialData, $MaterialData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UpgradeData, $UpgradeData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CustomNameData, $CustomNameData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$CustomNameData"
import {$IProtectable, $IProtectable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityDrawers extends $BaseBlockEntity implements $IDrawerGroup, $IProtectable, $INetworked, $IFramedBlockEntity {
static "DRAWER_GROUP_CAPABILITY": $Capability<($IDrawerGroup)>
 "worldPosition": $BlockPos


public "setOwner"(arg0: $UUID$Type): boolean
public "getOwner"(): $UUID
public "supportsDirectControllerLink"(): boolean
public "dataPacketRequiresRenderUpdate"(): boolean
public "interactPutCurrentItemIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "interactPutCurrentInventoryIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "getDrawerAttributes"(): $IDrawerAttributes
public "isGroupValid"(): boolean
public "getDrawerCapacity"(): integer
public "getSecurityProvider"(): $ISecurityProvider
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: integer): integer
public "clientUpdateCount"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "getAccessibleDrawerSlots"(): (integer)[]
/**
 * 
 * @deprecated
 */
public "getDrawerCount"(): integer
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "setSecurityProvider"(arg0: $ISecurityProvider$Type): boolean
public "getRedstoneLevel"(): integer
public "validateBoundController"(): void
public "readPortable"(arg0: $CompoundTag$Type): void
public "interactPutItemsIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "takeItemsFromSlot"(arg0: integer, arg1: integer): $ItemStack
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getEffectiveDrawerCapacity"(): integer
public "getModelData"(): $ModelData
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "customName"(): $CustomNameData
public "setChanged"(): void
public "getGroup"(): $IDrawerGroup
public "material"(): $MaterialData
public "upgrades"(): $UpgradeData
/**
 * 
 * @deprecated
 */
public "getDrawer"(arg0: integer): $IDrawer
public "isRedstone"(): boolean
public "hasMissingDrawers"(): boolean
set "owner"(value: $UUID$Type)
get "owner"(): $UUID
get "drawerAttributes"(): $IDrawerAttributes
get "groupValid"(): boolean
get "drawerCapacity"(): integer
get "securityProvider"(): $ISecurityProvider
get "accessibleDrawerSlots"(): (integer)[]
get "drawerCount"(): integer
get "boundControlGroup"(): $IControlGroup
set "securityProvider"(value: $ISecurityProvider$Type)
get "redstoneLevel"(): integer
get "effectiveDrawerCapacity"(): integer
get "modelData"(): $ModelData
get "group"(): $IDrawerGroup
get "redstone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDrawers$Type = ($BlockEntityDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDrawers_ = $BlockEntityDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumKeyType extends $Enum<($EnumKeyType)> implements $StringRepresentable {
static readonly "DRAWER": $EnumKeyType
static readonly "CONCEALMENT": $EnumKeyType
static readonly "PERSONAL": $EnumKeyType
static readonly "QUANTIFY": $EnumKeyType


public "toString"(): string
public static "values"(): ($EnumKeyType)[]
public static "valueOf"(arg0: string): $EnumKeyType
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumKeyType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumKeyType$Type = (("quantify") | ("concealment") | ("drawer") | ("personal")) | ($EnumKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumKeyType_ = $EnumKeyType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerGeometry {

 "isHalfDepth"(): boolean
 "getDrawerCount"(): integer
}

export namespace $IDrawerGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGeometry$Type = ($IDrawerGeometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGeometry_ = $IDrawerGeometry$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedCompDrawers" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockCompDrawers, $BlockCompDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockCompDrawers"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedCompDrawers extends $BlockCompDrawers implements $IFramedBlock {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedCompDrawers$Type = ($BlockFramedCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedCompDrawers_ = $BlockFramedCompDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"

export interface $IControlGroup {

 "invalidateRemoteNode"(arg0: $INetworked$Type): void
 "addRemoteNode"(arg0: $INetworked$Type): boolean
 "getDrawerGroup"(): $IDrawerGroup
 "getBoundRemoteNodes"(): $List<($INetworked)>
 "validateRemoteNode"(arg0: $INetworked$Type): void
 "getBoundControlGroup"(): $IControlGroup
}

export namespace $IControlGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControlGroup$Type = ($IControlGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControlGroup_ = $IControlGroup$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedController" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockController, $BlockController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedController extends $BlockController implements $IFramedBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedController$Type = ($BlockFramedController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedController_ = $BlockFramedController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked" {
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"

export interface $INetworked {

 "supportsDirectControllerLink"(): boolean
 "getBoundControlGroup"(): $IControlGroup
 "canRecurseSearch"(): boolean
 "unbindControlGroup"(): void
}

export namespace $INetworked {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworked$Type = ($INetworked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworked_ = $INetworked$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeFillLevel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeFillLevel extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeFillLevel$Type = ($ItemUpgradeFillLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeFillLevel_ = $ItemUpgradeFillLevel$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeVoid" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeVoid extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeVoid$Type = ($ItemUpgradeVoid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeVoid_ = $ItemUpgradeVoid$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LockAttribute extends $Enum<($LockAttribute)> {
static readonly "LOCK_POPULATED": $LockAttribute
static readonly "LOCK_EMPTY": $LockAttribute


public static "values"(): ($LockAttribute)[]
public static "valueOf"(arg0: string): $LockAttribute
public "getFlagValue"(): integer
public static "getBitfield"(arg0: $EnumSet$Type<($LockAttribute$Type)>): integer
public static "getEnumSet"(arg0: integer): $EnumSet<($LockAttribute)>
get "flagValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockAttribute$Type = (("lock_populated") | ("lock_empty")) | ($LockAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockAttribute_ = $LockAttribute$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockFramingTable" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DoubleBlockCombiner$BlockType, $DoubleBlockCombiner$BlockType$Type} from "packages/net/minecraft/world/level/block/$DoubleBlockCombiner$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EnumFramingTablePart, $EnumFramingTablePart$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumFramingTablePart"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockFramingTable extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "PART": $EnumProperty<($EnumFramingTablePart)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getTableDirection"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Direction
public static "getBlockType"(arg0: $BlockState$Type): $DoubleBlockCombiner$BlockType
public static "getConnectedDirection"(arg0: $BlockState$Type): $Direction
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramingTable$Type = ($BlockFramingTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramingTable_ = $BlockFramingTable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedSlotted" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSizedSlotted extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerProperty
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Type = ($BlockMetaFacingSizedSlotted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedSlotted_ = $BlockMetaFacingSizedSlotted$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawerKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawerKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerKey$Type = ($ItemDrawerKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerKey_ = $ItemDrawerKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IDrawerGroup extends $ICapabilityProvider {

 "isGroupValid"(): boolean
 "getAccessibleDrawerSlots"(): (integer)[]
 "getDrawerCount"(): integer
 "hasMissingDrawers"(): boolean
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getDrawer"(arg0: integer): $IDrawer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IDrawerGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGroup$Type = ($IDrawerGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGroup_ = $IDrawerGroup$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemPersonalKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPersonalKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: string, arg1: $Item$Properties$Type)

public "getSecurityProviderKey"(): string
public "getDescription"(): $Component
get "securityProviderKey"(): string
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPersonalKey$Type = ($ItemPersonalKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPersonalKey_ = $ItemPersonalKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerData extends $BlockEntityDataShim {

constructor()

public "bind"(arg0: $BlockEntityController$Type): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getController"(arg0: $BlockEntity$Type): $BlockEntityController
public "bindCoord"(arg0: $BlockPos$Type): boolean
public "getCoord"(): $BlockPos
get "coord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerData$Type = ($ControllerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerData_ = $ControllerData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockCompDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockCompDrawers extends $BlockDrawers implements $INetworked, $IFramedSourceBlock {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompDrawers$Type = ($BlockCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCompDrawers_ = $BlockCompDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedTrim" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockTrim, $BlockTrim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockTrim"

export class $BlockFramedTrim extends $BlockTrim implements $EntityBlock, $IFramedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "canUseForRetrim"(): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedTrim$Type = ($BlockFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedTrim_ = $BlockFramedTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FaceSlotBlock extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties


public "rightAction"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): $InteractionResult
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "getFaceSlot"(arg0: $BlockState$Type, arg1: $BlockHitResult$Type): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "leftAction"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): $InteractionResult
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$Type = ($FaceSlotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock_ = $FaceSlotBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPortable {

 "isHeavy"(arg0: $ItemStack$Type): boolean

(arg0: $ItemStack$Type): boolean
}

export namespace $IPortable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortable$Type = ($IPortable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPortable_ = $IPortable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock" {
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFramedBlock {

 "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
 "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
}

export namespace $IFramedBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlock$Type = ($IFramedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlock_ = $IFramedBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IItemRepository$ItemRecord, $IItemRepository$ItemRecord$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemRepository {

 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getRemainingItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$Type): integer
 "getItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getItemCapacity"(arg0: $ItemStack$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getStoredItemCount"(arg0: $ItemStack$Type): integer
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}

export namespace $IItemRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$Type = ($IItemRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository_ = $IItemRepository$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"
import {$IItemRepository, $IItemRepository$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository"

export class $BlockEntityController extends $BaseBlockEntity implements $IDrawerGroup, $IControlGroup, $IFramedBlockEntity {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
 "worldPosition": $BlockPos

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "interactPutItemsIntoInventory"(arg0: $Player$Type): integer
public "dataPacketRequiresRenderUpdate"(): boolean
public "invalidateRemoteNode"(arg0: $INetworked$Type): void
public "addRemoteNode"(arg0: $INetworked$Type): boolean
public "isGroupValid"(): boolean
public "getAccessibleDrawerSlots"(): (integer)[]
public "getDrawerGroup"(): $IDrawerGroup
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "validateRemoteNode"(arg0: $INetworked$Type): void
public "getDrawerCount"(): integer
public "getGroupForDrawerSlot"(arg0: integer): $IDrawerGroup
public "getItemRepository"(): $IItemRepository
public "isValidSlave"(arg0: $BlockPos$Type): boolean
public "toggleShroud"(arg0: $Player$Type): void
public "toggleQuantified"(arg0: $Player$Type): void
public "toggleProtection"(arg0: $GameProfile$Type, arg1: $ISecurityProvider$Type): void
public "updateCache"(): void
public "getBoundControlGroup"(): $IControlGroup
public "printDebugInfo"(): void
public "getModelData"(): $ModelData
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "setRemoved"(): void
public "clearRemoved"(): void
public "readFixed"(arg0: $CompoundTag$Type): void
public "getDrawer"(arg0: integer): $IDrawer
public "toggleLock"(arg0: $EnumSet$Type<($LockAttribute$Type)>, arg1: $LockAttribute$Type, arg2: $Player$Type): void
public "hasMissingDrawers"(): boolean
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "drawerGroup"(): $IDrawerGroup
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerCount"(): integer
get "itemRepository"(): $IItemRepository
get "boundControlGroup"(): $IControlGroup
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityController$Type = ($BlockEntityController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityController_ = $BlockEntityController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawers" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPortable, $IPortable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawers extends $BlockItem implements $IPortable {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isHeavy"(arg0: $ItemStack$Type): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawers$Type = ($ItemDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawers_ = $ItemDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BlockType extends $Enum<($BlockType)> {
static readonly "Drawers": $BlockType
static readonly "Trim": $BlockType


public static "values"(): ($BlockType)[]
public static "valueOf"(arg0: string): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = (("drawers") | ("trim")) | ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$CustomNameData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $CustomNameData extends $BlockEntityDataShim {

constructor()

public "getDisplayName"(): $Component
public "getName"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "setName"(arg0: $Component$Type): void
public "hasCustomName"(): boolean
get "displayName"(): $Component
get "name"(): string
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomNameData$Type = ($CustomNameData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomNameData_ = $CustomNameData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKey extends $Item {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKey$Type = ($ItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKey_ = $ItemKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemShroudKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemShroudKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShroudKey$Type = ($ItemShroudKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShroudKey_ = $ItemShroudKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFramedMaterials extends $INBTSerializable<($CompoundTag)> {

 "getHostBlock"(): $ItemStack
 "getMaterial"(arg0: $FrameMaterial$Type): $ItemStack
 "setHostBlock"(arg0: $ItemStack$Type): void
 "setMaterial"(arg0: $FrameMaterial$Type, arg1: $ItemStack$Type): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IFramedMaterials {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedMaterials$Type = ($IFramedMaterials);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedMaterials_ = $IFramedMaterials$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IItemRepository$ItemRecord {
readonly "itemPrototype": $ItemStack
readonly "count": integer

constructor(arg0: $ItemStack$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$ItemRecord$Type = ($IItemRepository$ItemRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository$ItemRecord_ = $IItemRepository$ItemRecord$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockMeta extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMeta$Type = ($BlockMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMeta_ = $BlockMeta$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockStandardDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStandardDrawers extends $BlockDrawers implements $IFramedSourceBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)

public "getNameMatKey"(): string
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "retrimBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "repartitionBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "setMatKey"(arg0: $ResourceLocation$Type): $BlockStandardDrawers
public "setMatKey"(arg0: string): $BlockStandardDrawers
public "getMatKey"(): string
get "nameMatKey"(): string
set "matKey"(value: $ResourceLocation$Type)
set "matKey"(value: string)
get "matKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStandardDrawers$Type = ($BlockStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStandardDrawers_ = $BlockStandardDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumFramingTablePart" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumFramingTablePart extends $Enum<($EnumFramingTablePart)> implements $StringRepresentable {
static readonly "LEFT": $EnumFramingTablePart
static readonly "RIGHT": $EnumFramingTablePart


public "toString"(): string
public static "values"(): ($EnumFramingTablePart)[]
public static "valueOf"(arg0: string): $EnumFramingTablePart
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFramingTablePart$Type = (("left") | ("right")) | ($EnumFramingTablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFramingTablePart_ = $EnumFramingTablePart$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKeyring" {
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKeyring extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $RegistryObject$Type<($ItemKey$Type)>, arg1: $Item$Properties$Type)

public static "add"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "getKey"(): $ItemStack
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public static "getKeyring"(arg0: $ItemStack$Type): $ItemStack
get "key"(): $ItemStack
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKeyring$Type = ($ItemKeyring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKeyring_ = $ItemKeyring$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDetachedDrawer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPortable, $IPortable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDetachedDrawer extends $Item implements $IPortable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(): string
public "isHeavy"(arg0: $ItemStack$Type): boolean
get "description"(): $Component
get "defaultInstance"(): $ItemStack
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetachedDrawer$Type = ($ItemDetachedDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDetachedDrawer_ = $ItemDetachedDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes" {
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributes {

 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "hasFillLevel"(): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isShowingQuantity"(): boolean
 "isConcealed"(): boolean
}

export namespace $IDrawerAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributes$Type = ($IDrawerAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributes_ = $IDrawerAttributes$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FaceSlotBlock, $FaceSlotBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock"

export class $BlockDrawers extends $FaceSlotBlock implements $INetworked, $EntityBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)

public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "interactPullDrawer"(arg0: $FaceSlotBlock$InteractContext$Type): boolean
public "interactReturnDrawer"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: $ItemStack$Type): boolean
public "retrimBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "repartitionBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getStorageUnits"(): integer
public "getNameTypeKey"(): string
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "retrimType"(): $BlockType
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "storageUnits"(): integer
get "nameTypeKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDrawers$Type = ($BlockDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDrawers_ = $BlockDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFramedSourceBlock {

 "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
}

export namespace $IFramedSourceBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedSourceBlock$Type = ($IFramedSourceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedSourceBlock_ = $IFramedSourceBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedStandardDrawers" {
import {$BlockStandardDrawers, $BlockStandardDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockStandardDrawers"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockType, $BlockType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedStandardDrawers extends $BlockStandardDrawers implements $IFramedBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "retrimType"(): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedStandardDrawers$Type = ($BlockFramedStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedStandardDrawers_ = $BlockFramedStandardDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $BlockEntityDataShim implements $INBTSerializable<($CompoundTag)> {

constructor()

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "invalidateCaps"(): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDataShim$Type = ($BlockEntityDataShim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDataShim_ = $BlockEntityDataShim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IProtectable {

 "setOwner"(arg0: $UUID$Type): boolean
 "getOwner"(): $UUID
 "getSecurityProvider"(): $ISecurityProvider
 "setSecurityProvider"(arg0: $ISecurityProvider$Type): boolean
}

export namespace $IProtectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProtectable$Type = ($IProtectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProtectable_ = $IProtectable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlockEntity extends $BlockEntity {
 "worldPosition": $BlockPos

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "read"(arg0: $CompoundTag$Type): void
public "dataPacketRequiresRenderUpdate"(): boolean
public "hasDataPacket"(): boolean
public "injectPortableData"(arg0: $BlockEntityDataShim$Type): void
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "markBlockForUpdate"(): void
public "markBlockForUpdateClient"(): void
public "markBlockForRenderUpdate"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "readPortable"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "invalidateCaps"(): void
public "getUpdateTag"(): $CompoundTag
public "load"(arg0: $CompoundTag$Type): void
public "injectData"(arg0: $BlockEntityDataShim$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeStorage extends $Enum<($EnumUpgradeStorage)> implements $StringRepresentable {
static readonly "OBSIDIAN": $EnumUpgradeStorage
static readonly "IRON": $EnumUpgradeStorage
static readonly "GOLD": $EnumUpgradeStorage
static readonly "DIAMOND": $EnumUpgradeStorage
static readonly "EMERALD": $EnumUpgradeStorage


public "toString"(): string
public static "values"(): ($EnumUpgradeStorage)[]
public static "valueOf"(arg0: string): $EnumUpgradeStorage
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getLevel"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeStorage
public static "byLevel"(arg0: integer): $EnumUpgradeStorage
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "unlocalizedName"(): string
get "metadata"(): integer
get "level"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeStorage$Type = (("gold") | ("obsidian") | ("diamond") | ("iron") | ("emerald")) | ($EnumUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeStorage_ = $EnumUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockTrim" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"

export class $BlockTrim extends $Block implements $INetworked, $IFramedSourceBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getNameMatKey"(): string
public "canUseForRetrim"(): boolean
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "getNameTypeKey"(): string
public "setMatKey"(arg0: $ResourceLocation$Type): $BlockTrim
public "setMatKey"(arg0: string): $BlockTrim
public "getMatKey"(): string
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
get "nameMatKey"(): string
get "nameTypeKey"(): string
set "matKey"(value: $ResourceLocation$Type)
set "matKey"(value: string)
get "matKey"(): string
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrim$Type = ($BlockTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrim_ = $BlockTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemQuantifyKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemQuantifyKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuantifyKey$Type = ($ItemQuantifyKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemQuantifyKey_ = $ItemQuantifyKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeRedstone extends $Enum<($EnumUpgradeRedstone)> implements $StringRepresentable {
static readonly "COMBINED": $EnumUpgradeRedstone
static readonly "MAX": $EnumUpgradeRedstone
static readonly "MIN": $EnumUpgradeRedstone


public "toString"(): string
public static "values"(): ($EnumUpgradeRedstone)[]
public static "valueOf"(arg0: string): $EnumUpgradeRedstone
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeRedstone
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "unlocalizedName"(): string
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeRedstone$Type = (("min") | ("max") | ("combined")) | ($EnumUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeRedstone_ = $EnumUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgrade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
public "setAllowMultiple"(arg0: boolean): void
public "getAllowMultiple"(): boolean
public "getUpgradeGroup"(): integer
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
set "allowMultiple"(value: boolean)
get "allowMultiple"(): boolean
get "upgradeGroup"(): integer
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemPriorityKey" {
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPriorityKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: integer, arg2: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getNextKey"(): $ItemPriorityKey
get "nextKey"(): $ItemPriorityKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPriorityKey$Type = ($ItemPriorityKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPriorityKey_ = $ItemPriorityKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemFramedDrawers" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemDrawers, $ItemDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawers"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFramedDrawers extends $ItemDrawers {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedDrawers$Type = ($ItemFramedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedDrawers_ = $ItemFramedDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockSlave" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockController, $BlockController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockEntitySlave, $BlockEntitySlave$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave"

export class $BlockSlave extends $Block implements $INetworked, $EntityBlock, $IFramedSourceBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntitySlave
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "getController"(arg0: $Level$Type, arg1: $BlockPos$Type): $BlockController
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSlave$Type = ($BlockSlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSlave_ = $BlockSlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeRemote" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeRemote extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: boolean, arg1: boolean, arg2: $Item$Properties$Type)

public "isEnabled"(): boolean
public "isGroupUpgrade"(): boolean
public static "copyControllerBinding"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public static "getBoundController"(arg0: $ItemStack$Type, arg1: $LevelAccessor$Type): $BlockEntityController
public static "validateInventory"(arg0: $Inventory$Type, arg1: $Level$Type): void
public static "getBoundPosition"(arg0: $ItemStack$Type): $BlockPos
public static "setBoundController"(arg0: $ItemStack$Type, arg1: $BlockEntityController$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isBound"(): boolean
public static "setUnbound"(arg0: $ItemStack$Type): $ItemStack
get "enabled"(): boolean
get "groupUpgrade"(): boolean
get "bound"(): boolean
set "unbound"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRemote$Type = ($ItemUpgradeRemote);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRemote_ = $ItemUpgradeRemote$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeStorage" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnumUpgradeStorage, $EnumUpgradeStorage$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeStorage extends $ItemUpgrade {
readonly "level": $EnumUpgradeStorage
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumUpgradeStorage$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeStorage$Type = ($ItemUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeStorage_ = $ItemUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider" {
import {$IProtectable, $IProtectable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"

export interface $ISecurityProvider {

 "getProviderID"(): string
 "hasOwnership"(arg0: $GameProfile$Type, arg1: $IProtectable$Type): boolean
 "hasAccess"(arg0: $Player$Type, arg1: $IProtectable$Type): boolean
}

export namespace $ISecurityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityProvider$Type = ($ISecurityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityProvider_ = $ISecurityProvider$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FrameMaterial extends $Enum<($FrameMaterial)> implements $StringRepresentable {
static readonly "SIDE": $FrameMaterial
static readonly "TRIM": $FrameMaterial
static readonly "FRONT": $FrameMaterial


public static "values"(): ($FrameMaterial)[]
public static "valueOf"(arg0: string): $FrameMaterial
public "getSerializedName"(): string
public "getTagKey"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "tagKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameMaterial$Type = (("side") | ("trim") | ("front")) | ($FrameMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameMaterial_ = $FrameMaterial$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity" {
import {$IFramedMaterials, $IFramedMaterials$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials"

export interface $IFramedBlockEntity {

 "material"(): $IFramedMaterials

(): $IFramedMaterials
}

export namespace $IFramedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlockEntity$Type = ($IFramedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlockEntity_ = $IFramedBlockEntity$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDrawer {

 "isEnabled"(): boolean
 "isEmpty"(): boolean
 "getAcceptingRemainingCapacity"(): integer
 "adjustStoredItemCount"(arg0: integer): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$Type): integer
 "canItemBeExtracted"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "canItemBeExtracted"(arg0: $ItemStack$Type): boolean
 "getMaxCapacity"(arg0: $ItemStack$Type): integer
 "getMaxCapacity"(): integer
 "setStoredItemCount"(arg0: integer): void
 "canItemBeStored"(arg0: $ItemStack$Type): boolean
 "canItemBeStored"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "getRemainingCapacity"(): integer
 "getStoredItemPrototype"(): $ItemStack
 "getStoredItemCount"(): integer
 "setStoredItem"(arg0: $ItemStack$Type, arg1: integer): $IDrawer
 "setStoredItem"(arg0: $ItemStack$Type): $IDrawer
 "getStoredItemStackSize"(): integer
 "setDetached"(arg0: boolean): void
 "isMissing"(): boolean
 "canDetach"(): boolean
}

export namespace $IDrawer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawer$Type = ($IDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawer_ = $IDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FaceSlotBlock$InteractContext {
 "state": $BlockState
 "level": $Level
 "pos": $BlockPos
 "player": $Player
 "hit": $BlockHitResult
 "slot": integer

constructor(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: integer)

public "getCheckedEntity"<BE extends $BlockEntity>(arg0: $Class$Type<(BE)>): BE
public "getCheckedEntity"<BE extends $BlockEntity, B extends $Block>(arg0: $Class$Type<(BE)>, arg1: $Class$Type<(B)>): BE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$InteractContext$Type = ($FaceSlotBlock$InteractContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock$InteractContext_ = $FaceSlotBlock$InteractContext$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedControllerIO" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockSlave, $BlockSlave$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockSlave"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFramedControllerIO extends $BlockSlave implements $IFramedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedControllerIO$Type = ($BlockFramedControllerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedControllerIO_ = $BlockFramedControllerIO$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$IDrawerAttributesModifiable, $IDrawerAttributesModifiable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable"

export class $UpgradeData extends $BlockEntityDataShim {

constructor(arg0: integer)

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "hasEmptySlot"(): boolean
public "canRemoveUpgrade"(arg0: integer): boolean
public "canSwapUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "hasUnlimitedUpgrade"(): boolean
public "hasConversionUpgrade"(): boolean
public "setDrawerAttributes"(arg0: $IDrawerAttributesModifiable$Type): void
public "getRemoteUpgrade"(): $ItemStack
public "unbindRemoteUpgrade"(): void
public "hasOneStackUpgrade"(): boolean
public "getRedstoneType"(): $EnumUpgradeRedstone
public "hasbalancedFillUpgrade"(): boolean
public "hasVendingUpgrade"(): boolean
public "hasIlluminationUpgrade"(): boolean
public "getSlotCount"(): integer
public "hasRemoteUpgrade"(): boolean
public "updateRemoteUpgradeBinding"(arg0: $ItemStack$Type): void
public "canAddUpgrade"(arg0: $ItemStack$Type): boolean
public "getStorageMultiplier"(): integer
public "hasPortabilityUpgrade"(): boolean
public "addUpgrade"(arg0: $ItemStack$Type): boolean
public "setUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getUpgrade"(arg0: integer): $ItemStack
set "drawerAttributes"(value: $IDrawerAttributesModifiable$Type)
get "remoteUpgrade"(): $ItemStack
get "redstoneType"(): $EnumUpgradeRedstone
get "slotCount"(): integer
get "storageMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable" {
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributesModifiable extends $IDrawerAttributes {

 "setPriority"(arg0: integer): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsBalancedFill"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$Type, arg1: boolean): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "hasFillLevel"(): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isShowingQuantity"(): boolean
 "isConcealed"(): boolean
}

export namespace $IDrawerAttributesModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesModifiable$Type = ($IDrawerAttributesModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesModifiable_ = $IDrawerAttributesModifiable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemTrim" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTrim extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTrim$Type = ($ItemTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTrim_ = $ItemTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockKeyButton" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$FaceAttachedHorizontalDirectionalBlock"

export class $BlockKeyButton extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $EnumKeyType$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "press"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyButton$Type = ($BlockKeyButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKeyButton_ = $BlockKeyButton$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeIllumination" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeIllumination extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeIllumination$Type = ($ItemUpgradeIllumination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeIllumination_ = $ItemUpgradeIllumination$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacing" {
import {$BlockMeta, $BlockMeta$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacing extends $BlockMeta {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacing$Type = ($BlockMetaFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacing_ = $BlockMetaFacing$Type;
}}
