declare module "packages/codechicken/multipart/api/part/redstone/$RedstonePart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $RedstonePart extends $MultiPart {

 "strongPowerLevel"(arg0: integer): integer
 "weakPowerLevel"(arg0: integer): integer
 "canConnectRedstone"(arg0: integer): boolean
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
}

export namespace $RedstonePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstonePart$Type = ($RedstonePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstonePart_ = $RedstonePart$Type;
}}
declare module "packages/codechicken/multipart/api/part/$PartialOcclusionPart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $PartialOcclusionPart extends $MultiPart {

 "allowCompleteOcclusion"(): boolean
 "getPartialOcclusionShape"(): $VoxelShape
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
}

export namespace $PartialOcclusionPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialOcclusionPart$Type = ($PartialOcclusionPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartialOcclusionPart_ = $PartialOcclusionPart$Type;
}}
declare module "packages/codechicken/multipart/api/part/$MultiPart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $MultiPart {

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
}

export namespace $MultiPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPart$Type = ($MultiPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPart_ = $MultiPart$Type;
}}
declare module "packages/codechicken/multipart/api/$MultipartType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MultipartType<T extends $MultiPart> {
static readonly "MULTIPART_TYPES": $ResourceLocation

constructor()

public "createPartServer"(arg0: $CompoundTag$Type): T
public "createPartClient"(arg0: $MCDataInput$Type): T
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartType$Type<T> = ($MultipartType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartType_<T> = $MultipartType$Type<(T)>;
}}
declare module "packages/codechicken/multipart/api/part/$NormalOcclusionPart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $NormalOcclusionPart extends $MultiPart {

 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getOcclusionShape"(): $VoxelShape
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
}

export namespace $NormalOcclusionPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalOcclusionPart$Type = ($NormalOcclusionPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NormalOcclusionPart_ = $NormalOcclusionPart$Type;
}}
declare module "packages/codechicken/multipart/util/$MultipartPlaceContext" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MultipartPlaceContext extends $BlockPlaceContext {

constructor(arg0: $UseOnContext$Type)
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockHitResult$Type)

public "getHitDepth"(): double
public "canPlacePart"(arg0: $MultiPart$Type): boolean
public "applyOffset"(): $MultipartPlaceContext
public "getClickedPos"(): $BlockPos
public "isOffset"(): boolean
get "hitDepth"(): double
get "clickedPos"(): $BlockPos
get "offset"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartPlaceContext$Type = ($MultipartPlaceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartPlaceContext_ = $MultipartPlaceContext$Type;
}}
declare module "packages/codechicken/multipart/api/part/$TickablePart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickablePart {

 "tick"(): void

(): void
}

export namespace $TickablePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickablePart$Type = ($TickablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickablePart_ = $TickablePart$Type;
}}
declare module "packages/codechicken/multipart/block/$TileMultipart" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IChunkLoadTile, $IChunkLoadTile$Type} from "packages/codechicken/lib/world/$IChunkLoadTile"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $TileMultipart extends $BlockEntity implements $IChunkLoadTile {
 "worldPosition": $BlockPos

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "use"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $InteractionHand$Type): $InteractionResult
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "copyFrom"(arg0: $TileMultipart$Type): void
public "from"(arg0: $TileMultipart$Type): void
public "getDestroyProgress"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "entityInside"(arg0: $Entity$Type): void
public "getRenderOcclusionShape"(): $VoxelShape
public "getInteractionShape"(): $VoxelShape
public "getBlockSupportShape"(): $VoxelShape
public "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
public "isClientTile"(): boolean
public "harvestPart"(arg0: $PartRayTraceResult$Type, arg1: $Player$Type): void
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "onNeighborTileChange"(arg0: $BlockPos$Type): void
public "getDirectSignal"(arg0: integer): integer
public "getPartList"(): $List<($MultiPart)>
public "getSlottedPart"(arg0: integer): $MultiPart
public "internalPartChange"(arg0: $MultiPart$Type): void
public "notifyTileChange"(): void
public "notifyShapeChange"(): void
public "getCapCache"(): $CapabilityCache
public "occlusionTest"(arg0: $Iterable$Type<($MultiPart$Type)>, arg1: $MultiPart$Type): boolean
public "markShapeChange"(): void
public "canReplacePart"(arg0: $MultiPart$Type, arg1: $MultiPart$Type): boolean
public "addPart_impl"(arg0: $MultiPart$Type): void
public "remPart_impl"(arg0: $MultiPart$Type): $TileMultipart
public "recalcLight"(arg0: boolean, arg1: boolean): void
public "multiPartChange"(arg0: $Collection$Type<($MultiPart$Type)>): void
public "notifyNeighborChange"(arg0: $Direction$Type): void
public "notifyNeighborChange"(arg0: integer): void
public static "canPlacePart"(arg0: $UseOnContext$Type, arg1: $MultiPart$Type): boolean
public static "isUnobstructed"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MultiPart$Type): boolean
public static "handleDescPacket"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MCDataInput$Type): void
public "notifyPartChange"(arg0: $MultiPart$Type): void
public "partRemoved"(arg0: $MultiPart$Type, arg1: integer): void
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "animateTick"(arg0: $RandomSource$Type): void
public static "replaceable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $UseOnContext$Type): boolean
public "onChunkUnloaded"(): void
public "getRenderBoundingBox"(): $AABB
public "canConnectRedstone"(arg0: integer): boolean
public "addRunningEffects"(arg0: $Entity$Type): void
public "addLandingEffects"(arg0: $Vector3$Type, arg1: integer): void
public "getExplosionResistance"(arg0: $Explosion$Type): float
public "getWeakChanges"(): boolean
public "getLightEmission"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onChunkLoad"(arg0: $LevelChunk$Type): void
public "loadFrom"(arg0: $TileMultipart$Type): void
public "attack"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
public "setChanged"(): void
public "getDrops"(): $List<($ItemStack)>
public "setLevel"(arg0: $Level$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public static "fromNBT"(arg0: $CompoundTag$Type, arg1: $BlockPos$Type): $TileMultipart
public static "addPart"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MultiPart$Type): $TileMultipart
public static "dropItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Vector3$Type): void
public "canAddPart"(arg0: $MultiPart$Type): boolean
public "setValid"(arg0: boolean): void
public "onRemoved"(): void
public "stepOn"(arg0: $Entity$Type): void
public "getSignal"(arg0: integer): integer
public "dropItems"(arg0: $Iterable$Type<($ItemStack$Type)>): void
public "onMoved"(): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "bindPart"(arg0: $MultiPart$Type): void
public "markRender"(): void
public "remPart"(arg0: $MultiPart$Type): $TileMultipart
public "operate"(arg0: $Consumer$Type<($MultiPart$Type)>): void
public "loadTo"(arg0: $TileMultipart$Type): void
public "clearParts"(): void
public "partAdded"(arg0: $MultiPart$Type): void
public "addPart_do"(arg0: $MultiPart$Type): void
get "renderOcclusionShape"(): $VoxelShape
get "interactionShape"(): $VoxelShape
get "blockSupportShape"(): $VoxelShape
get "clientTile"(): boolean
get "partList"(): $List<($MultiPart)>
get "capCache"(): $CapabilityCache
get "renderBoundingBox"(): $AABB
get "weakChanges"(): boolean
get "lightEmission"(): integer
get "drops"(): $List<($ItemStack)>
set "level"(value: $Level$Type)
get "updateTag"(): $CompoundTag
set "valid"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileMultipart$Type = ($TileMultipart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileMultipart_ = $TileMultipart$Type;
}}
declare module "packages/codechicken/multipart/block/$BlockMultipart" {
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
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockMultipart extends $Block implements $EntityBlock {
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

public static "getTile"(arg0: $BlockEntity$Type): $TileMultipart
public static "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TileMultipart
public static "retracePart"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $PartRayTraceResult
public static "dropAndDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getPart"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: integer): $MultiPart
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMultipart$Type = ($BlockMultipart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMultipart_ = $BlockMultipart$Type;
}}
declare module "packages/codechicken/multipart/api/$RedstoneConnectorBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $RedstoneConnectorBlock {

 "weakPowerLevel"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): integer
 "getConnectionMask"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: integer): integer
}

export namespace $RedstoneConnectorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConnectorBlock$Type = ($RedstoneConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneConnectorBlock_ = $RedstoneConnectorBlock$Type;
}}
declare module "packages/codechicken/multipart/api/part/$FacePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlottedPart, $SlottedPart$Type} from "packages/codechicken/multipart/api/part/$SlottedPart"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $FacePart extends $SlottedPart {

 "redstoneConductionMap"(): integer
 "getSlotMask"(): integer
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
}

export namespace $FacePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacePart$Type = ($FacePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacePart_ = $FacePart$Type;
}}
declare module "packages/codechicken/multipart/api/part/$SlottedPart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $SlottedPart extends $MultiPart {

 "getSlotMask"(): integer
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
}

export namespace $SlottedPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlottedPart$Type = ($SlottedPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlottedPart_ = $SlottedPart$Type;
}}
declare module "packages/codechicken/multipart/util/$PartRayTraceResult" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SubHitBlockHitResult, $SubHitBlockHitResult$Type} from "packages/codechicken/lib/raytracer/$SubHitBlockHitResult"

export class $PartRayTraceResult extends $SubHitBlockHitResult {
readonly "part": $MultiPart
readonly "dist": double
readonly "hitInfo": any
readonly "subHit": integer

constructor(arg0: $MultiPart$Type, arg1: $BlockHitResult$Type, arg2: $Vec3$Type)
constructor(arg0: $MultiPart$Type, arg1: $SubHitBlockHitResult$Type)
constructor(arg0: $MultiPart$Type, arg1: $Vector3$Type, arg2: $Direction$Type, arg3: $BlockPos$Type, arg4: boolean, arg5: any, arg6: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartRayTraceResult$Type = ($PartRayTraceResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartRayTraceResult_ = $PartRayTraceResult$Type;
}}
declare module "packages/codechicken/multipart/api/part/$IconHitEffectsPart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IconHitEffectsPart extends $MultiPart {

 "getBounds"(): $Cuboid6
 "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
 "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
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
}

export namespace $IconHitEffectsPart {
function addHitEffects(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
function addDestroyEffects(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
function addDestroyEffects(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconHitEffectsPart$Type = ($IconHitEffectsPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconHitEffectsPart_ = $IconHitEffectsPart$Type;
}}
declare module "packages/codechicken/multipart/api/part/$BaseMultipart" {
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
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $BaseMultipart implements $MultiPart {

constructor()

public "bind"(arg0: $TileMultipart$Type): void
public "tile"(): $TileMultipart
public "hasTile"(): boolean
public "level"(): $Level
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "pos"(): $BlockPos
public "getRenderOcclusionShape"(): $VoxelShape
public "getInteractionShape"(): $VoxelShape
public "getBlockSupportShape"(): $VoxelShape
public "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "onWorldJoin"(): void
public "onWorldSeparate"(): void
public "onConverted"(): void
public "invalidateConvertedTile"(): void
public "onEntityStanding"(arg0: $Entity$Type): void
public "onPartChanged"(arg0: $MultiPart$Type): void
public "scheduledTick"(): void
public "scheduleTick"(arg0: integer): void
public "getRenderBounds"(): $Cuboid6
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "onChunkUnload"(): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
public "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
public "getExplosionResistance"(arg0: $Explosion$Type): float
public "getLightEmission"(): integer
public "onChunkLoad"(arg0: $LevelChunk$Type): void
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "onAdded"(): void
public "getDrops"(): $Iterable<($ItemStack)>
public "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
public "readUpdate"(arg0: $MCDataInput$Type): void
public "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
public "onRemoved"(): void
public "onMoved"(): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "hasLevel"(): boolean
public "capCache"(): $CapabilityCache
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "preRemove"(): void
get "type"(): $MultipartType<(any)>
get "renderOcclusionShape"(): $VoxelShape
get "interactionShape"(): $VoxelShape
get "blockSupportShape"(): $VoxelShape
get "renderBounds"(): $Cuboid6
get "lightEmission"(): integer
get "drops"(): $Iterable<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMultipart$Type = ($BaseMultipart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMultipart_ = $BaseMultipart$Type;
}}
declare module "packages/codechicken/multipart/api/$ItemMultipart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMultipart extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMultipart$Type = ($ItemMultipart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMultipart_ = $ItemMultipart$Type;
}}
