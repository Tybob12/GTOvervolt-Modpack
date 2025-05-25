declare module "packages/codechicken/translocators/part/$FluidTranslocatorPart$MovingLiquid" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidTranslocatorPart, $FluidTranslocatorPart$Type} from "packages/codechicken/translocators/part/$FluidTranslocatorPart"

export class $FluidTranslocatorPart$MovingLiquid {
 "dst": integer
 "liquid": $FluidStack
 "a_start": double
 "b_start": double
 "a_end": double
 "b_end": double
 "fast": boolean

constructor(arg0: $FluidTranslocatorPart$Type, arg1: integer, arg2: $FluidStack$Type)

public "finish"(): void
public "update"(): boolean
public "addLiquid"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTranslocatorPart$MovingLiquid$Type = ($FluidTranslocatorPart$MovingLiquid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTranslocatorPart$MovingLiquid_ = $FluidTranslocatorPart$MovingLiquid$Type;
}}
declare module "packages/codechicken/translocators/part/$ItemTranslocatorPart$MovingItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemTranslocatorPart$MovingItem {
 "dst": integer
 "stack": $ItemStack
 "a_progress": double
 "b_progress": double

constructor(arg0: integer, arg1: $ItemStack$Type)

public "update"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTranslocatorPart$MovingItem$Type = ($ItemTranslocatorPart$MovingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTranslocatorPart$MovingItem_ = $ItemTranslocatorPart$MovingItem$Type;
}}
declare module "packages/codechicken/translocators/item/$ItemTranslocatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemTranslocatorPart, $ItemTranslocatorPart$Type} from "packages/codechicken/translocators/part/$ItemTranslocatorPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TranslocatorItem, $TranslocatorItem$Type} from "packages/codechicken/translocators/item/$TranslocatorItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $ItemTranslocatorItem extends $TranslocatorItem<($ItemTranslocatorPart)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getType"(): $MultipartType<($ItemTranslocatorPart)>
public "getTargetCapability"(): $Capability<(any)>
get "type"(): $MultipartType<($ItemTranslocatorPart)>
get "targetCapability"(): $Capability<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTranslocatorItem$Type = ($ItemTranslocatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTranslocatorItem_ = $ItemTranslocatorItem$Type;
}}
declare module "packages/codechicken/translocators/item/$TranslocatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$TranslocatorPart, $TranslocatorPart$Type} from "packages/codechicken/translocators/part/$TranslocatorPart"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $TranslocatorItem<T extends $TranslocatorPart> extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getType"(): $MultipartType<(T)>
public "getTargetCapability"(): $Capability<(any)>
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $MultipartType<(T)>
get "targetCapability"(): $Capability<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslocatorItem$Type<T> = ($TranslocatorItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslocatorItem_<T> = $TranslocatorItem$Type<(T)>;
}}
declare module "packages/codechicken/translocators/block/$BlockCraftingGrid" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockCraftingGrid extends $Block implements $EntityBlock {
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

constructor()

public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "placeBlock"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCraftingGrid$Type = ($BlockCraftingGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCraftingGrid_ = $BlockCraftingGrid$Type;
}}
declare module "packages/codechicken/translocators/part/$FluidTranslocatorPart" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TranslocatorPart, $TranslocatorPart$Type} from "packages/codechicken/translocators/part/$TranslocatorPart"
import {$FluidTranslocatorPart$MovingLiquid, $FluidTranslocatorPart$MovingLiquid$Type} from "packages/codechicken/translocators/part/$FluidTranslocatorPart$MovingLiquid"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $FluidTranslocatorPart extends $TranslocatorPart {
 "movingLiquids": $List<($FluidTranslocatorPart$MovingLiquid)>
 "exitingLiquids": $List<($FluidTranslocatorPart$MovingLiquid)>
static readonly "PLACEMENT_SOUND": $SoundType
static "base": $Cuboid6
static "boxes": ($Cuboid6)[]
static "base_parts": (($Cuboid6)[])[]
static "baseShape": $VoxelShape
static "boxShapes": ($VoxelShape)[]
static "basePartShapes": (($VoxelShape)[])[]
static "basePartsJoined": ($VoxelShape)[]
static "HIT_BASE": integer
static "HIT_INSERT": integer
 "side": byte
 "a_eject": boolean
 "b_eject": boolean
 "redstone": boolean
 "invert_redstone": boolean
 "fast": boolean
 "a_insertpos": double
 "b_insertpos": double

constructor()

public "getItem"(): $ItemStack
public "tick"(): void
public "getType"(): $MultipartType<(any)>
public "readIncUpdate"(arg0: $MCDataInput$Type): void
public "getMovingLiquids"(): $List<($FluidTranslocatorPart$MovingLiquid)>
public "getOutputs"(): (integer)[]
public "canStay"(): boolean
public "getTType"(): integer
get "item"(): $ItemStack
get "type"(): $MultipartType<(any)>
get "movingLiquids"(): $List<($FluidTranslocatorPart$MovingLiquid)>
get "outputs"(): (integer)[]
get "tType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTranslocatorPart$Type = ($FluidTranslocatorPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTranslocatorPart_ = $FluidTranslocatorPart$Type;
}}
declare module "packages/codechicken/translocators/part/$TranslocatorPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NormalOcclusionPart, $NormalOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$NormalOcclusionPart"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$FacePart, $FacePart$Type} from "packages/codechicken/multipart/api/part/$FacePart"
import {$TickablePart, $TickablePart$Type} from "packages/codechicken/multipart/api/part/$TickablePart"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TranslocatorPart extends $BaseMultipart implements $FacePart, $NormalOcclusionPart, $TickablePart {
static readonly "PLACEMENT_SOUND": $SoundType
static "base": $Cuboid6
static "boxes": ($Cuboid6)[]
static "base_parts": (($Cuboid6)[])[]
static "baseShape": $VoxelShape
static "boxShapes": ($VoxelShape)[]
static "basePartShapes": (($VoxelShape)[])[]
static "basePartsJoined": ($VoxelShape)[]
static "HIT_BASE": integer
static "HIT_INSERT": integer
 "side": byte
 "a_eject": boolean
 "b_eject": boolean
 "redstone": boolean
 "invert_redstone": boolean
 "fast": boolean
 "a_insertpos": double
 "b_insertpos": double

constructor()

public "getItem"(): $ItemStack
public "drop"(): void
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "tick"(): void
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "readIncUpdate"(arg0: $MCDataInput$Type): void
public "sendFlagsUpdate"(): void
public "sendIncUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "getInsertBounds"(): $Cuboid6
public "stripModifiers"(): void
public "getIconIndex"(): integer
public "getInteractionShape"(): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "onPartChanged"(arg0: $MultiPart$Type): void
public "getRenderBounds"(): $Cuboid6
public "dropIfCantStay"(): boolean
public "getSlotMask"(): integer
public "redstoneConductionMap"(): integer
public "getOcclusionShape"(): $VoxelShape
public "setupPlacement"(arg0: $Player$Type, arg1: $Direction$Type): $TranslocatorPart
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "openGui"(arg0: $Player$Type): void
public "canInsert"(arg0: integer): boolean
public "readUpdate"(arg0: $MCDataInput$Type): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "canStay"(): boolean
public "canConnect"(arg0: integer): boolean
public "getTType"(): integer
public "markUpdate"(): void
public "canEject"(): boolean
public "getOther"<T>(arg0: integer): T
public "occlusionTest"(arg0: $MultiPart$Type): boolean
get "item"(): $ItemStack
get "insertBounds"(): $Cuboid6
get "iconIndex"(): integer
get "interactionShape"(): $VoxelShape
get "renderBounds"(): $Cuboid6
get "slotMask"(): integer
get "occlusionShape"(): $VoxelShape
get "tType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslocatorPart$Type = ($TranslocatorPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslocatorPart_ = $TranslocatorPart$Type;
}}
declare module "packages/codechicken/translocators/item/$FluidTranslocatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidTranslocatorPart, $FluidTranslocatorPart$Type} from "packages/codechicken/translocators/part/$FluidTranslocatorPart"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TranslocatorItem, $TranslocatorItem$Type} from "packages/codechicken/translocators/item/$TranslocatorItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $FluidTranslocatorItem extends $TranslocatorItem<($FluidTranslocatorPart)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getType"(): $MultipartType<($FluidTranslocatorPart)>
public "getTargetCapability"(): $Capability<(any)>
get "type"(): $MultipartType<($FluidTranslocatorPart)>
get "targetCapability"(): $Capability<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTranslocatorItem$Type = ($FluidTranslocatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTranslocatorItem_ = $FluidTranslocatorItem$Type;
}}
declare module "packages/codechicken/translocators/part/$ItemTranslocatorPart" {
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RedstonePart, $RedstonePart$Type} from "packages/codechicken/multipart/api/part/redstone/$RedstonePart"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemTranslocatorPart$MovingItem, $ItemTranslocatorPart$MovingItem$Type} from "packages/codechicken/translocators/part/$ItemTranslocatorPart$MovingItem"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$TranslocatorPart, $TranslocatorPart$Type} from "packages/codechicken/translocators/part/$TranslocatorPart"

export class $ItemTranslocatorPart extends $TranslocatorPart implements $RedstonePart {
 "regulate": boolean
 "signal": boolean
 "a_powering": boolean
 "regulateStack": $ItemStack
 "filters": ($ItemStack)[]
 "movingItems": $List<($ItemTranslocatorPart$MovingItem)>
static readonly "PLACEMENT_SOUND": $SoundType
static "base": $Cuboid6
static "boxes": ($Cuboid6)[]
static "base_parts": (($Cuboid6)[])[]
static "baseShape": $VoxelShape
static "boxShapes": ($VoxelShape)[]
static "basePartShapes": (($VoxelShape)[])[]
static "basePartsJoined": ($VoxelShape)[]
static "HIT_BASE": integer
static "HIT_INSERT": integer
 "side": byte
 "a_eject": boolean
 "b_eject": boolean
 "redstone": boolean
 "invert_redstone": boolean
 "fast": boolean
 "a_insertpos": double
 "b_insertpos": double

constructor()

public "getItem"(): $ItemStack
public "tick"(): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "readIncUpdate"(arg0: $MCDataInput$Type): void
public "stripModifiers"(): void
public "getIconIndex"(): integer
public "setPowering"(arg0: boolean): void
public "strongPowerLevel"(arg0: integer): integer
public "weakPowerLevel"(arg0: integer): integer
public "canConnectRedstone"(arg0: integer): boolean
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "openGui"(arg0: $Player$Type): void
public "canStay"(): boolean
public "getTType"(): integer
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public "tile"(): $TileMultipart
public "hasTile"(): boolean
get "item"(): $ItemStack
get "type"(): $MultipartType<(any)>
get "iconIndex"(): integer
set "powering"(value: boolean)
get "tType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTranslocatorPart$Type = ($ItemTranslocatorPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTranslocatorPart_ = $ItemTranslocatorPart$Type;
}}
