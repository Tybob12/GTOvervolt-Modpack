declare module "packages/mrtjp/projectred/expansion/item/$TubePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$TubeType, $TubeType$Type} from "packages/mrtjp/projectred/expansion/$TubeType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TubePartItem extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TubeType$Type)

public "getType"(): $TubeType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $TubeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubePartItem$Type = ($TubePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubePartItem_ = $TubePartItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$RecipePlanItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipePlanItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "loadPlanInputsToGrid"(arg0: $Container$Type, arg1: $ItemStack$Type): void
public static "hasRecipeInside"(arg0: $ItemStack$Type): boolean
public static "loadPlanOutput"(arg0: $ItemStack$Type): $ItemStack
public static "loadPlanInputs"(arg0: $ItemStack$Type): ($ItemStack)[]
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "savePlan"(arg0: $ItemStack$Type, arg1: ($ItemStack$Type)[], arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipePlanItem$Type = ($RecipePlanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipePlanItem_ = $RecipePlanItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/part/$BaseTubePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$NormalOcclusionPart, $NormalOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$NormalOcclusionPart"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlottedPart, $SlottedPart$Type} from "packages/codechicken/multipart/api/part/$SlottedPart"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TubeType, $TubeType$Type} from "packages/mrtjp/projectred/expansion/$TubeType"
import {$IConnectableCenterPart, $IConnectableCenterPart$Type} from "packages/mrtjp/projectred/core/part/$IConnectableCenterPart"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SlottedHollowConnect, $SlottedHollowConnect$Type} from "packages/codechicken/microblock/api/$SlottedHollowConnect"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BaseTubePart extends $BaseMultipart implements $IConnectableCenterPart, $NormalOcclusionPart, $SlottedPart, $SlottedHollowConnect {
static readonly "fOBounds": ($Cuboid6)[]
static readonly "fOShapes": ($VoxelShape)[]
static readonly "fOShapeStates": ($VoxelShape)[]
static "expandBounds": integer

constructor(arg0: $TubeType$Type)

public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "getMaterial"(): $MicroMaterial
public "getBlockSupportShape"(): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "onPartChanged"(arg0: $MultiPart$Type): void
public "packedConnMap"(): integer
public "useStaticRenderer"(): boolean
public "preparePlacement"(arg0: $MultipartPlaceContext$Type): boolean
public "maskChangeEvent"(arg0: boolean, arg1: boolean): void
public "discoverOpen"(arg0: integer): boolean
public "getSlotMask"(): integer
public "getHoleSize"(arg0: integer): integer
public "getOcclusionShape"(): $VoxelShape
public "getPipeType"(): $TubeType
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "onAdded"(): void
public "getDrops"(): $Iterable<($ItemStack)>
public "readUpdate"(arg0: $MCDataInput$Type): void
public "getIcon"(): $TextureAtlasSprite
public "onRemoved"(): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "getConnMap"(): integer
public "setConnMap"(arg0: integer): void
public "getInternal"(arg0: integer): $IConnectable
public "posOfStraight"(arg0: integer): $BlockPos
public "notifyStraight"(arg0: integer): void
public "maskConnects"(arg0: integer): boolean
public "notifyExternals"(arg0: integer): void
public "getStraight"(arg0: integer): $IConnectable
public "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
public "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "discoverStraight"(arg0: integer): boolean
public "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
public "canConnectCorner"(arg0: integer): boolean
public "notifyAllExternals"(): void
public "discoverStraightOverride"(arg0: integer): boolean
public "discoverInternal"(arg0: integer): boolean
public "discoverInternalOverride"(arg0: integer): boolean
public "updateOpenConns"(): boolean
public "updateExternalConns"(): boolean
public "updateInternalConns"(): boolean
public "maskConnectsOut"(arg0: integer): boolean
public "maskConnectsIn"(arg0: integer): boolean
public "maskOpen"(arg0: integer): boolean
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public "updateOutward"(): void
public "updateOutside"(): void
public "updateInsideAndOutside"(): void
get "type"(): $MultipartType<(any)>
get "material"(): $MicroMaterial
get "blockSupportShape"(): $VoxelShape
get "slotMask"(): integer
get "occlusionShape"(): $VoxelShape
get "pipeType"(): $TubeType
get "drops"(): $Iterable<($ItemStack)>
get "icon"(): $TextureAtlasSprite
get "connMap"(): integer
set "connMap"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTubePart$Type = ($BaseTubePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTubePart_ = $BaseTubePart$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IConnectableCenterPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IConnectablePart, $IConnectablePart$Type} from "packages/mrtjp/projectred/core/part/$IConnectablePart"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IConnectableCenterPart extends $MultiPart, $IConnectablePart {

 "getInternal"(arg0: integer): $IConnectable
 "posOfStraight"(arg0: integer): $BlockPos
 "notifyStraight"(arg0: integer): void
 "maskConnects"(arg0: integer): boolean
 "notifyExternals"(arg0: integer): void
 "getStraight"(arg0: integer): $IConnectable
 "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "discoverStraight"(arg0: integer): boolean
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "canConnectCorner"(arg0: integer): boolean
 "notifyAllExternals"(): void
 "discoverOpen"(arg0: integer): boolean
 "discoverStraightOverride"(arg0: integer): boolean
 "discoverInternal"(arg0: integer): boolean
 "discoverInternalOverride"(arg0: integer): boolean
 "updateOpenConns"(): boolean
 "updateExternalConns"(): boolean
 "updateInternalConns"(): boolean
 "maskConnectsOut"(arg0: integer): boolean
 "maskConnectsIn"(arg0: integer): boolean
 "maskOpen"(arg0: integer): boolean
 "level"(): $Level
 "getShape"(arg0: $CollisionContext$Type): $VoxelShape
 "readDesc"(arg0: $MCDataInput$Type): void
 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $MultipartType<(any)>
 "pos"(): $BlockPos
 "getRenderOcclusionShape"(): $VoxelShape
 "getInteractionShape"(): $VoxelShape
 "getBlockSupportShape"(): $VoxelShape
 "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
 "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
 "onWorldJoin"(): void
 "onWorldSeparate"(): void
 "onConverted"(): void
 "invalidateConvertedTile"(): void
 "onEntityStanding"(arg0: $Entity$Type): void
 "onPartChanged"(arg0: $MultiPart$Type): void
 "scheduledTick"(): void
 "scheduleTick"(arg0: integer): void
 "getRenderBounds"(): $Cuboid6
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "onChunkUnload"(): void
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
 "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
 "getExplosionResistance"(arg0: $Explosion$Type): float
 "getLightEmission"(): integer
 "onChunkLoad"(arg0: $LevelChunk$Type): void
 "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
 "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
 "onAdded"(): void
 "tile"(): $TileMultipart
 "getDrops"(): $Iterable<($ItemStack)>
 "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
 "readUpdate"(arg0: $MCDataInput$Type): void
 "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
 "onRemoved"(): void
 "onMoved"(): void
 "writeDesc"(arg0: $MCDataOutput$Type): void
 "hasTile"(): boolean
 "hasLevel"(): boolean
 "capCache"(): $CapabilityCache
 "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
 "preRemove"(): void
 "updateOutward"(): void
 "updateOutside"(): void
 "updateInsideAndOutside"(): void
 "maskChangeEvent"(arg0: boolean, arg1: boolean): void
 "getConnMap"(): integer
 "setConnMap"(arg0: integer): void
}

export namespace $IConnectableCenterPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectableCenterPart$Type = ($IConnectableCenterPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectableCenterPart_ = $IConnectableCenterPart$Type;
}}
declare module "packages/mrtjp/projectred/integration/item/$BaseGatePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseGatePartItem extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $GateType$Type)

public "getGateType"(): $GateType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "gateType"(): $GateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGatePartItem$Type = ($BaseGatePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGatePartItem_ = $BaseGatePartItem$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IOrientableFacePart" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"

export interface $IOrientableFacePart {

 "setRotation"(arg0: integer): void
 "absoluteDir"(arg0: integer): integer
 "absoluteRot"(arg0: integer): integer
 "onOrientationChange"(): void
 "toInternalMask"(arg0: integer): integer
 "toAbsoluteMask"(arg0: integer): integer
 "getRotation"(): integer
 "setSide"(arg0: integer): void
 "getSide"(): integer
 "toInternal"(arg0: integer): integer
 "rotationT"(): $Transformation
 "toAbsolute"(arg0: integer): integer
}

export namespace $IOrientableFacePart {
function shiftMask(arg0: integer, arg1: integer): integer
function flipMaskZ(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientableFacePart$Type = ($IOrientableFacePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientableFacePart_ = $IOrientableFacePart$Type;
}}
declare module "packages/mrtjp/projectred/illumination/part/$MultipartLightPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IconHitEffectsPart, $IconHitEffectsPart$Type} from "packages/codechicken/multipart/api/part/$IconHitEffectsPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$NormalOcclusionPart, $NormalOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$NormalOcclusionPart"
import {$RedstonePart, $RedstonePart$Type} from "packages/codechicken/multipart/api/part/redstone/$RedstonePart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlottedPart, $SlottedPart$Type} from "packages/codechicken/multipart/api/part/$SlottedPart"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MultipartLightProperties, $MultipartLightProperties$Type} from "packages/mrtjp/projectred/illumination/$MultipartLightProperties"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $MultipartLightPart extends $BaseMultipart implements $SlottedPart, $NormalOcclusionPart, $RedstonePart, $IconHitEffectsPart {

constructor(arg0: $MultipartType$Type<(any)>, arg1: $MultipartLightProperties$Type, arg2: integer, arg3: boolean)

public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getBounds"(): $Cuboid6
public "getProperties"(): $MultipartLightProperties
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "getBlockSupportShape"(): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "strongPowerLevel"(arg0: integer): integer
public "weakPowerLevel"(arg0: integer): integer
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "onPartChanged"(arg0: $MultiPart$Type): void
public "preparePlacement"(arg0: integer): void
public "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
public "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
public "getSlotMask"(): integer
public "getOcclusionShape"(): $VoxelShape
public static "canPlaceLight"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "canConnectRedstone"(arg0: integer): boolean
public "getLightEmission"(): integer
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "getSide"(): integer
public "getColor"(): integer
public "onAdded"(): void
public "getDrops"(): $Iterable<($ItemStack)>
public "isLightOn"(): boolean
public "isInverted"(): boolean
public "readUpdate"(arg0: $MCDataInput$Type): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public static "addHitEffects"(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
get "bounds"(): $Cuboid6
get "properties"(): $MultipartLightProperties
get "type"(): $MultipartType<(any)>
get "blockSupportShape"(): $VoxelShape
get "slotMask"(): integer
get "occlusionShape"(): $VoxelShape
get "lightEmission"(): integer
get "side"(): integer
get "color"(): integer
get "drops"(): $Iterable<($ItemStack)>
get "lightOn"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartLightPart$Type = ($MultipartLightPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartLightPart_ = $MultipartLightPart$Type;
}}
declare module "packages/mrtjp/projectred/exploration/item/$DamageableCraftingContainerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DamageableCraftingContainerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageableCraftingContainerItem$Type = ($DamageableCraftingContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageableCraftingContainerItem_ = $DamageableCraftingContainerItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/$GateType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GatePart, $GatePart$Type} from "packages/mrtjp/projectred/integration/part/$GatePart"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $GateType extends $Enum<($GateType)> {
static readonly "OR": $GateType
static readonly "NOR": $GateType
static readonly "NOT": $GateType
static readonly "AND": $GateType
static readonly "NAND": $GateType
static readonly "XOR": $GateType
static readonly "XNOR": $GateType
static readonly "BUFFER": $GateType
static readonly "MULTIPLEXER": $GateType
static readonly "PULSE": $GateType
static readonly "REPEATER": $GateType
static readonly "RANDOMIZER": $GateType
static readonly "SR_LATCH": $GateType
static readonly "TOGGLE_LATCH": $GateType
static readonly "TRANSPARENT_LATCH": $GateType
static readonly "LIGHT_SENSOR": $GateType
static readonly "RAIN_SENSOR": $GateType
static readonly "TIMER": $GateType
static readonly "SEQUENCER": $GateType
static readonly "COUNTER": $GateType
static readonly "STATE_CELL": $GateType
static readonly "SYNCHRONIZER": $GateType
static readonly "BUS_TRANSCEIVER": $GateType
static readonly "NULL_CELL": $GateType
static readonly "INVERT_CELL": $GateType
static readonly "BUFFER_CELL": $GateType
static readonly "COMPARATOR": $GateType
static readonly "AND_CELL": $GateType
static readonly "BUS_RANDOMIZER": $GateType
static readonly "BUS_CONVERTER": $GateType
static readonly "BUS_INPUT_PANEL": $GateType
static readonly "TRANSPARENT_LATCH_CELL": $GateType
static readonly "SEGMENT_DISPLAY": $GateType
static readonly "DEC_RANDOMIZER": $GateType
static readonly "FABRICATED_GATE": $GateType


public "getItem"(): $Item
public static "values"(): ($GateType)[]
public static "valueOf"(arg0: string): $GateType
public "getUnlocalizedName"(): string
public "isExternalGate"(): boolean
public "registerParts"(arg0: $DeferredRegister$Type<($MultipartType$Type<(any)>)>, arg1: $DeferredRegister$Type<($Item$Type)>): void
public "getItemRegistryObject"(): $RegistryObject<(any)>
public "getPartType"(): $MultipartType<($GatePart)>
public "inject"(arg0: string, arg1: $Function$Type<($GateType$Type), ($GatePart$Type)>, arg2: $RegistryObject$Type<(any)>, arg3: $RegistryObject$Type<($MultipartType$Type<($GatePart$Type)>)>): void
public "newPart"(): $GatePart
public "makeStack"(): $ItemStack
get "item"(): $Item
get "unlocalizedName"(): string
get "externalGate"(): boolean
get "itemRegistryObject"(): $RegistryObject<(any)>
get "partType"(): $MultipartType<($GatePart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GateType$Type = (("and_cell") | ("transparent_latch") | ("sr_latch") | ("randomizer") | ("sequencer") | ("nor") | ("timer") | ("not") | ("light_sensor") | ("multiplexer") | ("transparent_latch_cell") | ("and") | ("toggle_latch") | ("nand") | ("xor") | ("segment_display") | ("fabricated_gate") | ("buffer") | ("bus_converter") | ("bus_transceiver") | ("xnor") | ("buffer_cell") | ("or") | ("bus_randomizer") | ("rain_sensor") | ("counter") | ("dec_randomizer") | ("comparator") | ("bus_input_panel") | ("invert_cell") | ("state_cell") | ("synchronizer") | ("pulse") | ("null_cell") | ("repeater")) | ($GateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GateType_ = $GateType$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$DeployerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BaseDeviceBlock, $BaseDeviceBlock$Type} from "packages/mrtjp/projectred/expansion/block/$BaseDeviceBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DeployerBlock extends $BaseDeviceBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerBlock$Type = ($DeployerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeployerBlock_ = $DeployerBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/block/$ICWorkbenchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ICWorkbenchBlock extends $ProjectRedBlock {
static readonly "BLUEPRINT_PROPERTY": $BooleanProperty
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICWorkbenchBlock$Type = ($ICWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICWorkbenchBlock_ = $ICWorkbenchBlock$Type;
}}
declare module "packages/mrtjp/projectred/exploration/item/$BackpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BackpackItem extends $Item {
static readonly "TAG_INVENTORY": string
static readonly "TAG_IS_OPENED": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer)

public static "isBackpackOpened"(arg0: $ItemStack$Type): boolean
public static "getBackpackItemCount"(arg0: $ItemStack$Type): integer
public "getDyeColor"(): $DyeColor
public static "hasBackpackInventory"(arg0: $ItemStack$Type): boolean
public static "getBackpackInventoryTag"(arg0: $ItemStack$Type): $CompoundTag
public static "saveBackpackInventory"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public static "deleteBackpackInventory"(arg0: $ItemStack$Type): void
public static "setBackpackOpenedFlag"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isItemAllowedInBackpack"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "isBackpack"(arg0: $ItemStack$Type): boolean
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$Type;
}}
declare module "packages/mrtjp/projectred/core/block/$ProjectRedBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ProjectRedBlock extends $Block implements $EntityBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectRedBlock$Type = ($ProjectRedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectRedBlock_ = $ProjectRedBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$FireStarterBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BaseDeviceBlock, $BaseDeviceBlock$Type} from "packages/mrtjp/projectred/expansion/block/$BaseDeviceBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FireStarterBlock extends $BaseDeviceBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireStarterBlock$Type = ($FireStarterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireStarterBlock_ = $FireStarterBlock$Type;
}}
declare module "packages/mrtjp/projectred/transmission/item/$FaceWirePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FaceWirePartItem extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WireType$Type)

public "getType"(): $WireType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceWirePartItem$Type = ($FaceWirePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceWirePartItem_ = $FaceWirePartItem$Type;
}}
declare module "packages/mrtjp/projectred/exploration/item/$SickleItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SickleItem extends $DiggerItem {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SickleItem$Type = ($SickleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SickleItem_ = $SickleItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/block/$FabricationMachineBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FabricationMachineBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricationMachineBlock$Type = ($FabricationMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricationMachineBlock_ = $FabricationMachineBlock$Type;
}}
declare module "packages/mrtjp/projectred/api/$IConnectable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConnectable {

 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectable$Type = ($IConnectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectable_ = $IConnectable$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$AutoCrafterBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseMachineBlock, $BaseMachineBlock$Type} from "packages/mrtjp/projectred/expansion/block/$BaseMachineBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoCrafterBlock extends $BaseMachineBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCrafterBlock$Type = ($AutoCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCrafterBlock_ = $AutoCrafterBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$InvalidDieItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InvalidDieItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvalidDieItem$Type = ($InvalidDieItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvalidDieItem_ = $InvalidDieItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$ProjectBenchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ProjectBenchBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectBenchBlock$Type = ($ProjectBenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectBenchBlock_ = $ProjectBenchBlock$Type;
}}
declare module "packages/mrtjp/projectred/exploration/item/$WoolGinItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageableCraftingContainerItem, $DamageableCraftingContainerItem$Type} from "packages/mrtjp/projectred/exploration/item/$DamageableCraftingContainerItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoolGinItem extends $DamageableCraftingContainerItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoolGinItem$Type = ($WoolGinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoolGinItem_ = $WoolGinItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$BaseSiliconWaferItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WaferType, $WaferType$Type} from "packages/mrtjp/projectred/fabrication/lithography/$WaferType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseSiliconWaferItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WaferType$Type)

public "getWaferType"(): $WaferType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "waferType"(): $WaferType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSiliconWaferItem$Type = ($BaseSiliconWaferItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSiliconWaferItem_ = $BaseSiliconWaferItem$Type;
}}
declare module "packages/mrtjp/projectred/exploration/block/$ElectrotineOreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DropExperienceBlock, $DropExperienceBlock$Type} from "packages/net/minecraft/world/level/block/$DropExperienceBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IntProvider, $IntProvider$Type} from "packages/net/minecraft/util/valueproviders/$IntProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DustParticleOptions, $DustParticleOptions$Type} from "packages/net/minecraft/core/particles/$DustParticleOptions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElectrotineOreBlock extends $DropExperienceBlock {
static readonly "LIT": $BooleanProperty
static readonly "ELECTROTINE_PARTICLE": $DustParticleOptions
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $IntProvider$Type)

public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $Random$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrotineOreBlock$Type = ($ElectrotineOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrotineOreBlock_ = $ElectrotineOreBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/$TubeType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseTubePart, $BaseTubePart$Type} from "packages/mrtjp/projectred/expansion/part/$BaseTubePart"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $TubeType extends $Enum<($TubeType)> {
static readonly "PNEUMATIC_TUBE": $TubeType


public "getItem"(): $Item
public static "values"(): ($TubeType)[]
public static "valueOf"(arg0: string): $TubeType
public "getUnlocalizedName"(): string
public "registerParts"(arg0: $DeferredRegister$Type<($MultipartType$Type<(any)>)>, arg1: $DeferredRegister$Type<($Item$Type)>): void
public "getItemRegistryObject"(): $RegistryObject<($Item)>
public "getPartType"(): $MultipartType<($BaseTubePart)>
public "onTextureStitchEvent"(arg0: $TextureStitchEvent$Post$Type): void
public "getTextures"(): $List<($TextureAtlasSprite)>
public "newPart"(): $BaseTubePart
public "makeStack"(): $ItemStack
get "item"(): $Item
get "unlocalizedName"(): string
get "itemRegistryObject"(): $RegistryObject<($Item)>
get "partType"(): $MultipartType<($BaseTubePart)>
get "textures"(): $List<($TextureAtlasSprite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeType$Type = (("pneumatic_tube")) | ($TubeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeType_ = $TubeType$Type;
}}
declare module "packages/mrtjp/projectred/transmission/part/$BaseWirePart" {
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IconHitEffectsPart, $IconHitEffectsPart$Type} from "packages/codechicken/multipart/api/part/$IconHitEffectsPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BaseWirePart extends $BaseMultipart implements $IconHitEffectsPart {

constructor(arg0: $WireType$Type)

public "getBounds"(): $Cuboid6
public "getType"(): $MultipartType<(any)>
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "getWireType"(): $WireType
public "getRenderHue"(): integer
public "useStaticRenderer"(): boolean
public "preparePlacement"(arg0: $Direction$Type): void
public "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
public "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
public "getDrops"(): $Iterable<($ItemStack)>
public "readUpdate"(arg0: $MCDataInput$Type): void
public "getIcon"(): $TextureAtlasSprite
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public static "addHitEffects"(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
get "bounds"(): $Cuboid6
get "type"(): $MultipartType<(any)>
get "wireType"(): $WireType
get "renderHue"(): integer
get "drops"(): $Iterable<($ItemStack)>
get "icon"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseWirePart$Type = ($BaseWirePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseWirePart_ = $BaseWirePart$Type;
}}
declare module "packages/mrtjp/projectred/illumination/block/$IllumarLampBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$RedstoneConnectorBlock, $RedstoneConnectorBlock$Type} from "packages/codechicken/multipart/api/$RedstoneConnectorBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $IllumarLampBlock extends $Block implements $EntityBlock, $RedstoneConnectorBlock {
static readonly "LIT": $BooleanProperty
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

constructor(arg0: integer, arg1: boolean)

public "weakPowerLevel"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): integer
public "getConnectionMask"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getColor"(): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isInverted"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "color"(): integer
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllumarLampBlock$Type = ($IllumarLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IllumarLampBlock_ = $IllumarLampBlock$Type;
}}
declare module "packages/mrtjp/projectred/illumination/block/$IllumarSmartLampBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $IllumarSmartLampBlock extends $ProjectRedBlock implements $EntityBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "LIGHT_EMISSION": $ToIntFunction<($BlockState)>
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllumarSmartLampBlock$Type = ($IllumarSmartLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IllumarSmartLampBlock_ = $IllumarSmartLampBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$BatteryItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IRechargableBattery, $IRechargableBattery$Type} from "packages/mrtjp/projectred/expansion/item/$IRechargableBattery"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BatteryItem extends $Item implements $IRechargableBattery {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getChargedVariant"(): $Item
public "getEmptyVariant"(): $Item
public "canApplyElectricEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "isFullyCharged"(arg0: $ItemStack$Type): boolean
public "getStoredPower"(arg0: $ItemStack$Type): integer
public "addPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
public "drawPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
get "chargedVariant"(): $Item
get "emptyVariant"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryItem$Type = ($BatteryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryItem_ = $BatteryItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$BaseMachineBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BaseMachineBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMachineBlock$Type = ($BaseMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMachineBlock_ = $BaseMachineBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$FrameBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Frame, $Frame$Type} from "packages/mrtjp/projectred/api/$Frame"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FrameBlock extends $Block implements $Frame {
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

public static "getOrGenerateShape"(arg0: integer): $VoxelShape
public "canBeGrabbed"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canGrab"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getAdditionalSticks"(): $Set<($BlockPos)>
get "additionalSticks"(): $Set<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$Type = ($FrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameBlock_ = $FrameBlock$Type;
}}
declare module "packages/mrtjp/projectred/api/$IScrewdriver" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IScrewdriver {

 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "damageScrewdriver"(arg0: $Player$Type, arg1: $ItemStack$Type): void
}

export namespace $IScrewdriver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrewdriver$Type = ($IScrewdriver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrewdriver_ = $IScrewdriver$Type;
}}
declare module "packages/mrtjp/projectred/api/$Frame" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Frame {

 "getAdditionalSticks"(): $Set<($BlockPos)>
 "canBeGrabbed"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "canGrab"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
}

export namespace $Frame {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frame$Type = ($Frame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frame_ = $Frame$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$CraftingDamageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingDamageItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingDamageItem$Type = ($CraftingDamageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingDamageItem_ = $CraftingDamageItem$Type;
}}
declare module "packages/mrtjp/projectred/exploration/item/$AthameItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AthameItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Tier$Type, arg1: integer, arg2: float)

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AthameItem$Type = ($AthameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AthameItem_ = $AthameItem$Type;
}}
declare module "packages/mrtjp/projectred/illumination/$MultipartLightProperties" {
import {$ColourMultiplier, $ColourMultiplier$Type} from "packages/codechicken/lib/render/pipeline/$ColourMultiplier"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MultipartLightPart, $MultipartLightPart$Type} from "packages/mrtjp/projectred/illumination/part/$MultipartLightPart"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CCModel, $CCModel$Type} from "packages/codechicken/lib/render/$CCModel"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $MultipartLightProperties {

constructor()

public "getShape"(arg0: integer): $VoxelShape
public "getBounds"(arg0: integer): $Cuboid6
public "partFactory"(arg0: integer, arg1: boolean): $MultipartLightPart
public "onTextureStitchEvent"(arg0: $TextureStitchEvent$Post$Type): void
public "getGlowBounds"(arg0: integer): $Cuboid6
public "getBulbModel"(arg0: integer): $CCModel
public "getChasisModel"(arg0: integer): $CCModel
public "getInventoryBulbModel"(): $CCModel
public "getInventoryChassisModel"(): $CCModel
public "getInventoryGlowBounds"(): $Cuboid6
public "getColourMultiplier"(arg0: integer, arg1: boolean): $ColourMultiplier
public "getItemRendererClass"(): $Class<(any)>
public static "boxesToShapes"(arg0: ($Cuboid6$Type)[]): ($VoxelShape)[]
public "renderInventory"(arg0: integer, arg1: boolean, arg2: $Vector3$Type, arg3: $CCRenderState$Type): void
public static "parseCorrectedModel"(arg0: string): $Map<(string), ($CCModel)>
public static "finishModel"(arg0: $CCModel$Type): $CCModel
public "render"(arg0: $MultipartLightPart$Type, arg1: $Vector3$Type, arg2: $CCRenderState$Type): void
public "getIcon"(arg0: integer): $TextureAtlasSprite
public "makeStack"(arg0: integer, arg1: boolean): $ItemStack
public static "bakeCopy"(arg0: integer, arg1: $CCModel$Type): $CCModel
public "canFloat"(): boolean
public static "sidedBoxes"(arg0: $Cuboid6$Type): ($Cuboid6)[]
get "inventoryBulbModel"(): $CCModel
get "inventoryChassisModel"(): $CCModel
get "inventoryGlowBounds"(): $Cuboid6
get "itemRendererClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartLightProperties$Type = ($MultipartLightProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartLightProperties_ = $MultipartLightProperties$Type;
}}
declare module "packages/mrtjp/projectred/integration/part/$GatePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IconHitEffectsPart, $IconHitEffectsPart$Type} from "packages/codechicken/multipart/api/part/$IconHitEffectsPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$NormalOcclusionPart, $NormalOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$NormalOcclusionPart"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$FacePart, $FacePart$Type} from "packages/codechicken/multipart/api/part/$FacePart"
import {$IConnectableFacePart, $IConnectableFacePart$Type} from "packages/mrtjp/projectred/core/part/$IConnectableFacePart"
import {$IGateRenderData, $IGateRenderData$Type} from "packages/mrtjp/projectred/integration/part/$IGateRenderData"
import {$TickablePart, $TickablePart$Type} from "packages/codechicken/multipart/api/part/$TickablePart"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IOrientableFacePart, $IOrientableFacePart$Type} from "packages/mrtjp/projectred/core/part/$IOrientableFacePart"
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GatePart extends $BaseMultipart implements $IConnectableFacePart, $IOrientableFacePart, $TickablePart, $FacePart, $NormalOcclusionPart, $IconHitEffectsPart, $IGateRenderData {

constructor(arg0: $GateType$Type)

public "shape"(): integer
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "tick"(): void
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getBounds"(): $Cuboid6
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "getBlockSupportShape"(): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "onPartChanged"(arg0: $MultiPart$Type): void
public "scheduledTick"(): void
public "scheduleTick"(arg0: integer): void
public "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
public "canConnectCorner"(arg0: integer): boolean
public "preparePlacement"(arg0: $MultipartPlaceContext$Type): boolean
public "setRotation"(arg0: integer): void
public "getGateType"(): $GateType
public "getRenderIndex"(): integer
public "maskChangeEvent"(arg0: boolean, arg1: boolean): void
public "isTickScheduled"(): boolean
public "setRenderFlag"(arg0: $IConnectable$Type): boolean
public "discoverOpen"(arg0: integer): boolean
public "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
public "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
public "getSlotMask"(): integer
public "getOcclusionShape"(): $VoxelShape
public "getOrientation"(): integer
public "getRotation"(): integer
public "getLightEmission"(): integer
public "onChunkLoad"(arg0: $LevelChunk$Type): void
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "setSide"(arg0: integer): void
public "getSide"(): integer
public "onAdded"(): void
public "getDrops"(): $Iterable<($ItemStack)>
public "readUpdate"(arg0: $MCDataInput$Type): void
public "onRemoved"(): void
public "setShape"(arg0: integer): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "getConnMap"(): integer
public "setConnMap"(arg0: integer): void
public "getInternal"(arg0: integer): $IConnectable
public "posOfStraight"(arg0: integer): $BlockPos
public "posOfCorner"(arg0: integer): $BlockPos
public "rotFromStraight"(arg0: integer): integer
public "rotFromCorner"(arg0: integer): integer
public "notifyStraight"(arg0: integer): void
public "notifyCorner"(arg0: integer): void
public "maskConnects"(arg0: integer): boolean
public "notifyExternals"(arg0: integer): void
public "getStraight"(arg0: integer): $IConnectable
public "maskConnectsStraight"(arg0: integer): boolean
public "maskConnectsCorner"(arg0: integer): boolean
public "outsideCornerEdgeOpen"(arg0: integer): boolean
public "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "discoverStraight"(arg0: integer): boolean
public "discoverCorner"(arg0: integer): integer
public "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
public "notifyAllExternals"(): void
public static "absoluteDir"(arg0: $IConnectableFacePart$Type, arg1: integer): integer
public static "absoluteRot"(arg0: $IConnectableFacePart$Type, arg1: integer): integer
public "rotFromInternal"(arg0: integer): integer
public "maskConnectsInside"(arg0: integer): boolean
public "maskConnectsCenter"(): boolean
public "insideCornerEdgeOpen"(arg0: integer): boolean
public "discoverCornerOverride"(arg0: integer): boolean
public "discoverStraightOverride"(arg0: integer): boolean
public "discoverInternal"(arg0: integer): boolean
public "discoverInternalOverride"(arg0: integer): boolean
public "discoverCenter"(): boolean
public "shouldDiscoverCenter"(): boolean
public "updateOpenConns"(): boolean
public "updateExternalConns"(): boolean
public "updateInternalConns"(): boolean
public "getCorner"(arg0: integer): $IConnectable
public "getCenter"(): $IConnectable
public "maskOpen"(arg0: integer): boolean
public "absoluteDir"(arg0: integer): integer
public "absoluteRot"(arg0: integer): integer
public "onOrientationChange"(): void
public "toInternalMask"(arg0: integer): integer
public "toAbsoluteMask"(arg0: integer): integer
public "toInternal"(arg0: integer): integer
public "rotationT"(): $Transformation
public "toAbsolute"(arg0: integer): integer
public static "shiftMask"(arg0: integer, arg1: integer): integer
public static "flipMaskZ"(arg0: integer): integer
public "redstoneConductionMap"(): integer
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public static "addHitEffects"(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "state"(): integer
public "isPointerStarted"(): boolean
public "pointerValue"(): integer
public "segmentColour"(): byte
public "bottomSignal"(): byte
public "topSignalConnMask"(): integer
public "getGateName"(): string
public "hasRuntimeError"(): boolean
public "state2"(): integer
public "worldPos"(): $BlockPos
public "pointerMax"(): integer
public "bOutput0"(): short
public "bOutput1"(): short
public "bOutput2"(): short
public "bOutput3"(): short
public "bInput0"(): short
public "bInput1"(): short
public "bInput2"(): short
public "bInput3"(): short
public "rsIO"(): integer
public "bInHigh"(): integer
public "topSignal"(): byte
public "updateOutward"(): void
public "updateOutside"(): void
public "updateInsideAndOutside"(): void
get "bounds"(): $Cuboid6
get "type"(): $MultipartType<(any)>
get "blockSupportShape"(): $VoxelShape
set "rotation"(value: integer)
get "gateType"(): $GateType
get "renderIndex"(): integer
get "tickScheduled"(): boolean
set "renderFlag"(value: $IConnectable$Type)
get "slotMask"(): integer
get "occlusionShape"(): $VoxelShape
get "orientation"(): integer
get "rotation"(): integer
get "lightEmission"(): integer
set "side"(value: integer)
get "side"(): integer
get "drops"(): $Iterable<($ItemStack)>
get "connMap"(): integer
set "connMap"(value: integer)
get "center"(): $IConnectable
get "pointerStarted"(): boolean
get "gateName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatePart$Type = ($GatePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatePart_ = $GatePart$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$ChargingBenchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ChargingBenchBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingBenchBlock$Type = ($ChargingBenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingBenchBlock_ = $ChargingBenchBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/block/$LithographyTableBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FabricationMachineBlock, $FabricationMachineBlock$Type} from "packages/mrtjp/projectred/fabrication/block/$FabricationMachineBlock"

export class $LithographyTableBlock extends $FabricationMachineBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithographyTableBlock$Type = ($LithographyTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithographyTableBlock_ = $LithographyTableBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$IChargable" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IChargable {

 "canApplyElectricEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "isFullyCharged"(arg0: $ItemStack$Type): boolean
 "getChargedVariant"(): $Item
 "getEmptyVariant"(): $Item
 "getStoredPower"(arg0: $ItemStack$Type): integer
 "addPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
 "drawPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
}

export namespace $IChargable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChargable$Type = ($IChargable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChargable_ = $IChargable$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$FrameActuatorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FrameActuatorBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameActuatorBlock$Type = ($FrameActuatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameActuatorBlock_ = $FrameActuatorBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$PhotomaskSetItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotomaskSetItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "createDieStack"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotomaskSetItem$Type = ($PhotomaskSetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotomaskSetItem_ = $PhotomaskSetItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$ElectricScrewdriverItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IScrewdriver, $IScrewdriver$Type} from "packages/mrtjp/projectred/api/$IScrewdriver"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IChargable, $IChargable$Type} from "packages/mrtjp/projectred/expansion/item/$IChargable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElectricScrewdriverItem extends $Item implements $IScrewdriver, $IChargable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "damageScrewdriver"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getChargedVariant"(): $Item
public "getEmptyVariant"(): $Item
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canApplyElectricEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "isFullyCharged"(arg0: $ItemStack$Type): boolean
public "getStoredPower"(arg0: $ItemStack$Type): integer
public "addPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
public "drawPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
get "chargedVariant"(): $Item
get "emptyVariant"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricScrewdriverItem$Type = ($ElectricScrewdriverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricScrewdriverItem_ = $ElectricScrewdriverItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/item/$GatePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$BaseGatePartItem, $BaseGatePartItem$Type} from "packages/mrtjp/projectred/integration/item/$BaseGatePartItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GatePartItem extends $BaseGatePartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $GateType$Type)

public "getGateType"(): $GateType
get "gateType"(): $GateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatePartItem$Type = ($GatePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatePartItem_ = $GatePartItem$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$ScrewdriverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScrewdriver, $IScrewdriver$Type} from "packages/mrtjp/projectred/api/$IScrewdriver"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrewdriverItem extends $Item implements $IScrewdriver {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "damageScrewdriver"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewdriverItem$Type = ($ScrewdriverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrewdriverItem_ = $ScrewdriverItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$BatteryBoxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BatteryBoxBlock extends $ProjectRedBlock {
static readonly "CHARGE_LEVEL": $IntegerProperty
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryBoxBlock$Type = ($BatteryBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryBoxBlock_ = $BatteryBoxBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$EmptyBatteryItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IRechargableBattery, $IRechargableBattery$Type} from "packages/mrtjp/projectred/expansion/item/$IRechargableBattery"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyBatteryItem extends $Item implements $IRechargableBattery {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getChargedVariant"(): $Item
public "getEmptyVariant"(): $Item
public "canApplyElectricEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "isFullyCharged"(arg0: $ItemStack$Type): boolean
public "getStoredPower"(arg0: $ItemStack$Type): integer
public "addPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
public "drawPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
get "chargedVariant"(): $Item
get "emptyVariant"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyBatteryItem$Type = ($EmptyBatteryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyBatteryItem_ = $EmptyBatteryItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/part/$IGateRenderData" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IGateRenderData {

 "shape"(): integer
 "state"(): integer
 "isPointerStarted"(): boolean
 "pointerValue"(): integer
 "segmentColour"(): byte
 "bottomSignal"(): byte
 "topSignalConnMask"(): integer
 "getGateName"(): string
 "hasRuntimeError"(): boolean
 "getRenderIndex"(): integer
 "getOrientation"(): integer
 "state2"(): integer
 "worldPos"(): $BlockPos
 "pointerMax"(): integer
 "bOutput0"(): short
 "bOutput1"(): short
 "bOutput2"(): short
 "bOutput3"(): short
 "bInput0"(): short
 "bInput1"(): short
 "bInput2"(): short
 "bInput3"(): short
 "rsIO"(): integer
 "bInHigh"(): integer
 "topSignal"(): byte
}

export namespace $IGateRenderData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGateRenderData$Type = ($IGateRenderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGateRenderData_ = $IGateRenderData$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$DrawPlateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CraftingDamageItem, $CraftingDamageItem$Type} from "packages/mrtjp/projectred/core/item/$CraftingDamageItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrawPlateItem extends $CraftingDamageItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawPlateItem$Type = ($DrawPlateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawPlateItem_ = $DrawPlateItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$ICBlueprintItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ICBlueprintItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "createPhotomaskStack"(arg0: $ItemStack$Type): $ItemStack
public static "buildTooltip"(arg0: $CompoundTag$Type, arg1: $List$Type<($Component$Type)>): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICBlueprintItem$Type = ($ICBlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICBlueprintItem_ = $ICBlueprintItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/item/$IRechargableBattery" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IChargable, $IChargable$Type} from "packages/mrtjp/projectred/expansion/item/$IChargable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IRechargableBattery extends $IChargable {

 "canApplyElectricEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "isFullyCharged"(arg0: $ItemStack$Type): boolean
 "getChargedVariant"(): $Item
 "getEmptyVariant"(): $Item
 "getStoredPower"(arg0: $ItemStack$Type): integer
 "addPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
 "drawPower"(arg0: $ItemStack$Type, arg1: integer): $Tuple<($ItemStack), (integer)>
}

export namespace $IRechargableBattery {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRechargableBattery$Type = ($IRechargableBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRechargableBattery_ = $IRechargableBattery$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/block/$PlottingTableBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FabricationMachineBlock, $FabricationMachineBlock$Type} from "packages/mrtjp/projectred/fabrication/block/$FabricationMachineBlock"

export class $PlottingTableBlock extends $FabricationMachineBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlottingTableBlock$Type = ($PlottingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlottingTableBlock_ = $PlottingTableBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$EtchedSiliconWaferItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EtchedSiliconWaferItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "createFromPhotomaskSet"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: double): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchedSiliconWaferItem$Type = ($EtchedSiliconWaferItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtchedSiliconWaferItem_ = $EtchedSiliconWaferItem$Type;
}}
declare module "packages/mrtjp/projectred/exploration/world/gen/$MarbleCaveWorldCarver" {
import {$WorldCarver, $WorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import {$CanyonCarverConfiguration, $CanyonCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration"
import {$CaveCarverConfiguration, $CaveCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration"
import {$CaveWorldCarver, $CaveWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CaveWorldCarver"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $MarbleCaveWorldCarver extends $CaveWorldCarver {
static readonly "CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "NETHER_CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "CANYON": $WorldCarver<($CanyonCarverConfiguration)>

constructor(arg0: $Codec$Type<($CaveCarverConfiguration$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarbleCaveWorldCarver$Type = ($MarbleCaveWorldCarver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarbleCaveWorldCarver_ = $MarbleCaveWorldCarver$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$TransposerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BaseDeviceBlock, $BaseDeviceBlock$Type} from "packages/mrtjp/projectred/expansion/block/$BaseDeviceBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TransposerBlock extends $BaseDeviceBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransposerBlock$Type = ($TransposerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransposerBlock_ = $TransposerBlock$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$MultimeterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultimeterItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultimeterItem$Type = ($MultimeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultimeterItem_ = $MultimeterItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$ValidDieItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ValidDieItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "createGatePart"(arg0: $ItemStack$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidDieItem$Type = ($ValidDieItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidDieItem_ = $ValidDieItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/block/$PackagingTableBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FabricationMachineBlock, $FabricationMachineBlock$Type} from "packages/mrtjp/projectred/fabrication/block/$FabricationMachineBlock"

export class $PackagingTableBlock extends $FabricationMachineBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackagingTableBlock$Type = ($PackagingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackagingTableBlock_ = $PackagingTableBlock$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$BlockBreakerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BaseDeviceBlock, $BaseDeviceBlock$Type} from "packages/mrtjp/projectred/expansion/block/$BaseDeviceBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockBreakerBlock extends $BaseDeviceBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerBlock$Type = ($BlockBreakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBreakerBlock_ = $BlockBreakerBlock$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IConnectableFacePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IConnectablePart, $IConnectablePart$Type} from "packages/mrtjp/projectred/core/part/$IConnectablePart"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IConnectableFacePart extends $MultiPart, $IConnectablePart {

 "getInternal"(arg0: integer): $IConnectable
 "posOfStraight"(arg0: integer): $BlockPos
 "posOfCorner"(arg0: integer): $BlockPos
 "rotFromStraight"(arg0: integer): integer
 "rotFromCorner"(arg0: integer): integer
 "notifyStraight"(arg0: integer): void
 "notifyCorner"(arg0: integer): void
 "maskConnects"(arg0: integer): boolean
 "notifyExternals"(arg0: integer): void
 "getStraight"(arg0: integer): $IConnectable
 "maskConnectsStraight"(arg0: integer): boolean
 "maskConnectsCorner"(arg0: integer): boolean
 "outsideCornerEdgeOpen"(arg0: integer): boolean
 "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "discoverStraight"(arg0: integer): boolean
 "discoverCorner"(arg0: integer): integer
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "notifyAllExternals"(): void
 "setRenderFlag"(arg0: $IConnectable$Type): boolean
 "discoverOpen"(arg0: integer): boolean
 "rotFromInternal"(arg0: integer): integer
 "maskConnectsInside"(arg0: integer): boolean
 "maskConnectsCenter"(): boolean
 "insideCornerEdgeOpen"(arg0: integer): boolean
 "discoverCornerOverride"(arg0: integer): boolean
 "discoverStraightOverride"(arg0: integer): boolean
 "discoverInternal"(arg0: integer): boolean
 "discoverInternalOverride"(arg0: integer): boolean
 "discoverCenter"(): boolean
 "shouldDiscoverCenter"(): boolean
 "updateOpenConns"(): boolean
 "updateExternalConns"(): boolean
 "updateInternalConns"(): boolean
 "getSide"(): integer
 "getCorner"(arg0: integer): $IConnectable
 "getCenter"(): $IConnectable
 "maskOpen"(arg0: integer): boolean
 "level"(): $Level
 "getShape"(arg0: $CollisionContext$Type): $VoxelShape
 "readDesc"(arg0: $MCDataInput$Type): void
 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $MultipartType<(any)>
 "pos"(): $BlockPos
 "getRenderOcclusionShape"(): $VoxelShape
 "getInteractionShape"(): $VoxelShape
 "getBlockSupportShape"(): $VoxelShape
 "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
 "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
 "onWorldJoin"(): void
 "onWorldSeparate"(): void
 "onConverted"(): void
 "invalidateConvertedTile"(): void
 "onEntityStanding"(arg0: $Entity$Type): void
 "onPartChanged"(arg0: $MultiPart$Type): void
 "scheduledTick"(): void
 "scheduleTick"(arg0: integer): void
 "getRenderBounds"(): $Cuboid6
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "onChunkUnload"(): void
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
 "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
 "getExplosionResistance"(arg0: $Explosion$Type): float
 "getLightEmission"(): integer
 "onChunkLoad"(arg0: $LevelChunk$Type): void
 "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
 "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
 "onAdded"(): void
 "tile"(): $TileMultipart
 "getDrops"(): $Iterable<($ItemStack)>
 "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
 "readUpdate"(arg0: $MCDataInput$Type): void
 "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
 "onRemoved"(): void
 "onMoved"(): void
 "writeDesc"(arg0: $MCDataOutput$Type): void
 "hasTile"(): boolean
 "hasLevel"(): boolean
 "capCache"(): $CapabilityCache
 "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
 "preRemove"(): void
 "updateOutward"(): void
 "updateOutside"(): void
 "updateInsideAndOutside"(): void
 "maskChangeEvent"(arg0: boolean, arg1: boolean): void
 "getConnMap"(): integer
 "setConnMap"(arg0: integer): void
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectableFacePart {
function absoluteDir(arg0: $IConnectableFacePart$Type, arg1: integer): integer
function absoluteRot(arg0: $IConnectableFacePart$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectableFacePart$Type = ($IConnectableFacePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectableFacePart_ = $IConnectableFacePart$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$RoughSiliconWaferItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseSiliconWaferItem, $BaseSiliconWaferItem$Type} from "packages/mrtjp/projectred/fabrication/item/$BaseSiliconWaferItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RoughSiliconWaferItem extends $BaseSiliconWaferItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoughSiliconWaferItem$Type = ($RoughSiliconWaferItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoughSiliconWaferItem_ = $RoughSiliconWaferItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$FabricatedGatePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseGatePartItem, $BaseGatePartItem$Type} from "packages/mrtjp/projectred/integration/item/$BaseGatePartItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FabricatedGatePartItem extends $BaseGatePartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $GateType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricatedGatePartItem$Type = ($FabricatedGatePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricatedGatePartItem_ = $FabricatedGatePartItem$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$BaseDeviceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BaseDeviceBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseDeviceBlock$Type = ($BaseDeviceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseDeviceBlock_ = $BaseDeviceBlock$Type;
}}
declare module "packages/mrtjp/projectred/transmission/item/$CenterWirePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CenterWirePartItem extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WireType$Type)

public "getType"(): $WireType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CenterWirePartItem$Type = ($CenterWirePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CenterWirePartItem_ = $CenterWirePartItem$Type;
}}
declare module "packages/mrtjp/projectred/core/block/$ElectrotineGeneratorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ElectrotineGeneratorBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrotineGeneratorBlock$Type = ($ElectrotineGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrotineGeneratorBlock_ = $ElectrotineGeneratorBlock$Type;
}}
declare module "packages/mrtjp/projectred/illumination/item/$MultipartLightPartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$MultipartLightProperties, $MultipartLightProperties$Type} from "packages/mrtjp/projectred/illumination/$MultipartLightProperties"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultipartLightPartItem extends $ItemMultipart {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $MultipartLightProperties$Type, arg1: integer, arg2: boolean)

public "getLightProperties"(): $MultipartLightProperties
public "getColor"(): integer
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
public "isInverted"(): boolean
get "lightProperties"(): $MultipartLightProperties
get "color"(): integer
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartLightPartItem$Type = ($MultipartLightPartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartLightPartItem_ = $MultipartLightPartItem$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/lithography/$WaferType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaferType extends $Enum<($WaferType)> {
static readonly "ROUGH_WAFER": $WaferType
static readonly "PURIFIED_WAFER": $WaferType
static readonly "POLISHED_WAFER": $WaferType


public static "values"(): ($WaferType)[]
public static "valueOf"(arg0: string): $WaferType
public "getWaferArea"(): integer
public "getUnlocalizedName"(): string
public "getWaferWidth"(): integer
public "getWaferHeight"(): integer
public "getDefectRatePerUnitArea"(): double
get "waferArea"(): integer
get "unlocalizedName"(): string
get "waferWidth"(): integer
get "waferHeight"(): integer
get "defectRatePerUnitArea"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaferType$Type = (("polished_wafer") | ("purified_wafer") | ("rough_wafer")) | ($WaferType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaferType_ = $WaferType$Type;
}}
declare module "packages/mrtjp/projectred/expansion/block/$FrameMotorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FrameMotorBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_MACHINE_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_MACHINE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameMotorBlock$Type = ($FrameMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameMotorBlock_ = $FrameMotorBlock$Type;
}}
declare module "packages/mrtjp/projectred/fabrication/item/$BlankPhotomaskItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlankPhotomaskItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankPhotomaskItem$Type = ($BlankPhotomaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankPhotomaskItem_ = $BlankPhotomaskItem$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IConnectablePart" {
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"

export interface $IConnectablePart extends $IConnectable {

 "updateOutward"(): void
 "updateOutside"(): void
 "updateInsideAndOutside"(): void
 "notifyAllExternals"(): void
 "maskChangeEvent"(arg0: boolean, arg1: boolean): void
 "updateOpenConns"(): boolean
 "updateExternalConns"(): boolean
 "updateInternalConns"(): boolean
 "getConnMap"(): integer
 "setConnMap"(arg0: integer): void
 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectablePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectablePart$Type = ($IConnectablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectablePart_ = $IConnectablePart$Type;
}}
declare module "packages/mrtjp/projectred/transmission/$WireType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseWirePart, $BaseWirePart$Type} from "packages/mrtjp/projectred/transmission/part/$BaseWirePart"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$EnumColour, $EnumColour$Type} from "packages/codechicken/lib/colour/$EnumColour"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $WireType extends $Enum<($WireType)> {
static readonly "RED_ALLOY": $WireType
static readonly "INSULATED_WHITE": $WireType
static readonly "INSULATED_ORANGE": $WireType
static readonly "INSULATED_MAGENTA": $WireType
static readonly "INSULATED_LIGHT_BLUE": $WireType
static readonly "INSULATED_YELLOW": $WireType
static readonly "INSULATED_LIME": $WireType
static readonly "INSULATED_PINK": $WireType
static readonly "INSULATED_GRAY": $WireType
static readonly "INSULATED_LIGHT_GRAY": $WireType
static readonly "INSULATED_CYAN": $WireType
static readonly "INSULATED_PURPLE": $WireType
static readonly "INSULATED_BLUE": $WireType
static readonly "INSULATED_BROWN": $WireType
static readonly "INSULATED_GREEN": $WireType
static readonly "INSULATED_RED": $WireType
static readonly "INSULATED_BLACK": $WireType
static readonly "BUNDLED_NEUTRAL": $WireType
static readonly "BUNDLED_WHITE": $WireType
static readonly "BUNDLED_ORANGE": $WireType
static readonly "BUNDLED_MAGENTA": $WireType
static readonly "BUNDLED_LIGHT_BLUE": $WireType
static readonly "BUNDLED_YELLOW": $WireType
static readonly "BUNDLED_LIME": $WireType
static readonly "BUNDLED_PINK": $WireType
static readonly "BUNDLED_GRAY": $WireType
static readonly "BUNDLED_LIGHT_GRAY": $WireType
static readonly "BUNDLED_CYAN": $WireType
static readonly "BUNDLED_PURPLE": $WireType
static readonly "BUNDLED_BLUE": $WireType
static readonly "BUNDLED_BROWN": $WireType
static readonly "BUNDLED_GREEN": $WireType
static readonly "BUNDLED_RED": $WireType
static readonly "BUNDLED_BLACK": $WireType
static readonly "POWER_LOWLOAD": $WireType
static readonly "FRAMED_RED_ALLOY": $WireType
static readonly "FRAMED_INSULATED_WHITE": $WireType
static readonly "FRAMED_INSULATED_ORANGE": $WireType
static readonly "FRAMED_INSULATED_MAGENTA": $WireType
static readonly "FRAMED_INSULATED_LIGHT_BLUE": $WireType
static readonly "FRAMED_INSULATED_YELLOW": $WireType
static readonly "FRAMED_INSULATED_LIME": $WireType
static readonly "FRAMED_INSULATED_PINK": $WireType
static readonly "FRAMED_INSULATED_GRAY": $WireType
static readonly "FRAMED_INSULATED_LIGHT_GRAY": $WireType
static readonly "FRAMED_INSULATED_CYAN": $WireType
static readonly "FRAMED_INSULATED_PURPLE": $WireType
static readonly "FRAMED_INSULATED_BLUE": $WireType
static readonly "FRAMED_INSULATED_BROWN": $WireType
static readonly "FRAMED_INSULATED_GREEN": $WireType
static readonly "FRAMED_INSULATED_RED": $WireType
static readonly "FRAMED_INSULATED_BLACK": $WireType
static readonly "FRAMED_BUNDLED_NEUTRAL": $WireType
static readonly "FRAMED_BUNDLED_WHITE": $WireType
static readonly "FRAMED_BUNDLED_ORANGE": $WireType
static readonly "FRAMED_BUNDLED_MAGENTA": $WireType
static readonly "FRAMED_BUNDLED_LIGHT_BLUE": $WireType
static readonly "FRAMED_BUNDLED_YELLOW": $WireType
static readonly "FRAMED_BUNDLED_LIME": $WireType
static readonly "FRAMED_BUNDLED_PINK": $WireType
static readonly "FRAMED_BUNDLED_GRAY": $WireType
static readonly "FRAMED_BUNDLED_LIGHT_GRAY": $WireType
static readonly "FRAMED_BUNDLED_CYAN": $WireType
static readonly "FRAMED_BUNDLED_PURPLE": $WireType
static readonly "FRAMED_BUNDLED_BLUE": $WireType
static readonly "FRAMED_BUNDLED_BROWN": $WireType
static readonly "FRAMED_BUNDLED_GREEN": $WireType
static readonly "FRAMED_BUNDLED_RED": $WireType
static readonly "FRAMED_BUNDLED_BLACK": $WireType
static readonly "FRAMED_POWER_LOWLOAD": $WireType
static readonly "INSULATED_WIRES": ($WireType)[]
static readonly "COLOURED_BUNDLED_WIRES": ($WireType)[]
static readonly "FRAMED_INSULATED_WIRES": ($WireType)[]
static readonly "FRAMED_COLOURED_BUNDLED_WIRES": ($WireType)[]


public "getItem"(): $Item
public static "values"(): ($WireType)[]
public static "valueOf"(arg0: string): $WireType
public "getUnlocalizedName"(): string
public "registerParts"(arg0: $DeferredRegister$Type<($MultipartType$Type<(any)>)>, arg1: $DeferredRegister$Type<($Item$Type)>): void
public "getItemRegistryObject"(): $RegistryObject<($Item)>
public "getPartType"(): $MultipartType<($BaseWirePart)>
public "isCenterPart"(): boolean
public "getColourIdx"(): integer
public "getThickness"(): integer
public "getItemColour"(): integer
public "onTextureStitchEvent"(arg0: $TextureStitchEvent$Post$Type): void
public "getTextures"(): $List<($TextureAtlasSprite)>
public "newPart"(): $BaseWirePart
public "getColour"(): $EnumColour
public "makeStack"(): $ItemStack
get "item"(): $Item
get "unlocalizedName"(): string
get "itemRegistryObject"(): $RegistryObject<($Item)>
get "partType"(): $MultipartType<($BaseWirePart)>
get "centerPart"(): boolean
get "colourIdx"(): integer
get "thickness"(): integer
get "itemColour"(): integer
get "textures"(): $List<($TextureAtlasSprite)>
get "colour"(): $EnumColour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$Type = (("bundled_white") | ("insulated_red") | ("bundled_black") | ("framed_insulated_green") | ("framed_bundled_green") | ("framed_bundled_neutral") | ("insulated_lime") | ("framed_bundled_cyan") | ("bundled_neutral") | ("bundled_cyan") | ("framed_bundled_purple") | ("insulated_orange") | ("framed_insulated_brown") | ("framed_insulated_purple") | ("framed_bundled_brown") | ("bundled_yellow") | ("framed_power_lowload") | ("insulated_cyan") | ("framed_bundled_lime") | ("framed_bundled_blue") | ("insulated_brown") | ("framed_insulated_lime") | ("insulated_magenta") | ("framed_bundled_light_blue") | ("framed_insulated_blue") | ("framed_insulated_red") | ("framed_bundled_light_gray") | ("framed_insulated_light_gray") | ("insulated_green") | ("bundled_magenta") | ("framed_insulated_gray") | ("framed_insulated_light_blue") | ("insulated_yellow") | ("framed_bundled_pink") | ("bundled_light_gray") | ("insulated_white") | ("framed_insulated_pink") | ("bundled_green") | ("framed_insulated_yellow") | ("bundled_pink") | ("bundled_light_blue") | ("framed_red_alloy") | ("insulated_purple") | ("framed_insulated_white") | ("framed_insulated_orange") | ("framed_bundled_black") | ("framed_bundled_gray") | ("bundled_gray") | ("bundled_red") | ("bundled_orange") | ("framed_bundled_orange") | ("framed_insulated_black") | ("bundled_purple") | ("insulated_gray") | ("bundled_lime") | ("bundled_blue") | ("insulated_light_blue") | ("framed_bundled_magenta") | ("insulated_pink") | ("insulated_blue") | ("framed_insulated_magenta") | ("bundled_brown") | ("insulated_black") | ("power_lowload") | ("framed_bundled_white") | ("framed_bundled_yellow") | ("red_alloy") | ("framed_bundled_red") | ("insulated_light_gray") | ("framed_insulated_cyan")) | ($WireType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$Type;
}}
