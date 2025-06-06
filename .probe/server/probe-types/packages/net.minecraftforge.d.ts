declare module "packages/net/minecraftforge/forgespi/language/$IConfigurable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IConfigurable {

 "getConfigElement"<T>(...arg0: (string)[]): $Optional<(T)>
 "getConfigList"(...arg0: (string)[]): $List<(any)>
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {

constructor()

public "getCancellationResult"(): $InteractionResult
public "setCancellationResult"(arg0: $InteractionResult$Type): void
public "getItemStack"(): $ItemStack
public "getListenerList"(): $ListenerList
public "getSide"(): $LogicalSide
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getHand"(): $InteractionHand
public "getFace"(): $Direction
get "cancellationResult"(): $InteractionResult
set "cancellationResult"(value: $InteractionResult$Type)
get "itemStack"(): $ItemStack
get "listenerList"(): $ListenerList
get "side"(): $LogicalSide
get "level"(): $Level
get "pos"(): $BlockPos
get "hand"(): $InteractionHand
get "face"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$Type = ($PlayerInteractEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent_ = $PlayerInteractEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePlayer" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgePlayer {

 "getEntityReach"(): double
 "getBlockReach"(): double
 "isCloseEnough"(arg0: $Entity$Type, arg1: double): boolean
 "canReach"(arg0: $Entity$Type, arg1: double): boolean
 "canReach"(arg0: $BlockPos$Type, arg1: double): boolean
 "canReach"(arg0: $Vec3$Type, arg1: double): boolean
}

export namespace $IForgePlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePlayer$Type = ($IForgePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePlayer_ = $IForgePlayer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$INBTSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $INBTSerializable<T extends $Tag> {

 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IForgeShearable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeShearable {

 "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
}

export namespace $IForgeShearable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeShearable$Type = ($IForgeShearable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeShearable_ = $IForgeShearable$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Type extends $Enum<($TickEvent$Type)> {
static readonly "LEVEL": $TickEvent$Type
static readonly "PLAYER": $TickEvent$Type
static readonly "CLIENT": $TickEvent$Type
static readonly "SERVER": $TickEvent$Type
static readonly "RENDER": $TickEvent$Type


public static "values"(): ($TickEvent$Type)[]
public static "valueOf"(arg0: string): $TickEvent$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type$Type = (("server") | ("level") | ("client") | ("render") | ("player")) | ($TickEvent$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Type_ = $TickEvent$Type$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeSpawnEggItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpawnEggItem, $SpawnEggItem$Type} from "packages/net/minecraft/world/item/$SpawnEggItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeSpawnEggItem extends $SpawnEggItem {
static readonly "BY_ID": $Map<($EntityType<(any)>), ($SpawnEggItem)>
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Supplier$Type<(any)>, arg1: integer, arg2: integer, arg3: $Item$Properties$Type)

public static "fromEntityType"(arg0: $EntityType$Type<(any)>): $SpawnEggItem
public "getType"(arg0: $CompoundTag$Type): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeSpawnEggItem$Type = ($ForgeSpawnEggItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeSpawnEggItem_ = $ForgeSpawnEggItem$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FogShape, $FogShape$Type} from "packages/com/mojang/blaze3d/shaders/$FogShape"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$Type} from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IClientFluidTypeExtensions {

 "getRenderOverlayTexture"(arg0: $Minecraft$Type): $ResourceLocation
 "getTintColor"(): integer
 "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getTintColor"(arg0: $FluidStack$Type): integer
 "getStillTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getStillTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "modifyFogColor"(arg0: $Camera$Type, arg1: float, arg2: $ClientLevel$Type, arg3: integer, arg4: float, arg5: $Vector3f$Type): $Vector3f
 "modifyFogRender"(arg0: $Camera$Type, arg1: $FogRenderer$FogMode$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$Type): void
 "getOverlayTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "renderOverlay"(arg0: $Minecraft$Type, arg1: $PoseStack$Type): void
}

export namespace $IClientFluidTypeExtensions {
const DEFAULT: $IClientFluidTypeExtensions
function of(arg0: $FluidState$Type): $IClientFluidTypeExtensions
function of(arg0: $FluidType$Type): $IClientFluidTypeExtensions
function of(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientFluidTypeExtensions$Type = ($IClientFluidTypeExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientFluidTypeExtensions_ = $IClientFluidTypeExtensions$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryObject" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryObject<T> implements $Supplier<(T)> {


public "orElseGet"(arg0: $Supplier$Type<(any)>): T
public "ifPresent"(arg0: $Consumer$Type<(any)>): void
public "get"(): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "map"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public "filter"(arg0: $Predicate$Type<(any)>): $RegistryObject<(T)>
public "getKey"(): $ResourceKey<(T)>
public "flatMap"<U>(arg0: $Function$Type<(any), ($Optional$Type<(U)>)>): $Optional<(U)>
public "isPresent"(): boolean
public "getId"(): $ResourceLocation
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): T
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $IForgeRegistry$Type<(T)>): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public "getHolder"(): $Optional<($Holder<(T)>)>
public "lazyMap"<U>(arg0: $Function$Type<(any), (any)>): $Supplier<(U)>
get "key"(): $ResourceKey<(T)>
get "present"(): boolean
get "id"(): $ResourceLocation
get "holder"(): $Optional<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryObject$Type<T> = ($RegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryObject_<T> = $RegistryObject$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModInfo" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModInfo {

 "getVersion"(): $ArtifactVersion
 "getDisplayName"(): string
 "getDescription"(): string
 "getNamespace"(): string
 "getOwningFile"(): $IModFileInfo
 "getDependencies"(): $List<(any)>
 "getForgeFeatures"(): $List<(any)>
 "getModProperties"(): $Map<(string), (any)>
 "getUpdateURL"(): $Optional<($URL)>
 "getLogoFile"(): $Optional<(string)>
 "getLogoBlur"(): boolean
 "getConfig"(): $IConfigurable
 "getModId"(): string
 "getModURL"(): $Optional<($URL)>
}

export namespace $IModInfo {
const UNBOUNDED: $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$Type = ($IModInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo_ = $IModInfo$Type;
}}
declare module "packages/net/minecraftforge/energy/$EnergyStorage" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<($Tag)> {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "deserializeNBT"(arg0: $Tag$Type): void
public "serializeNBT"(): $Tag
public "canReceive"(): boolean
public "canExtract"(): boolean
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorage$Type = ($EnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyStorage_ = $EnergyStorage$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistry<V> extends $Iterable<(V)> {

 "tags"(): $ITagManager<(V)>
 "getKeys"(): $Set<($ResourceLocation)>
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: string, arg1: V): void
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getRegistryName"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$Type<V> = ($IForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry_<V> = $IForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullSupplier<T> {

 "get"(): T

(): T
}

export namespace $NonNullSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$Type<T> = ($NonNullSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullSupplier_<T> = $NonNullSupplier$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $ChunkEvent extends $LevelEvent {

constructor()
constructor(arg0: $ChunkAccess$Type, arg1: $LevelAccessor$Type)
constructor(arg0: $ChunkAccess$Type)

public "getListenerList"(): $ListenerList
public "getChunk"(): $ChunkAccess
get "listenerList"(): $ListenerList
get "chunk"(): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Type = ($ChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent_ = $ChunkEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelDataManager" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkEvent$Unload, $ChunkEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent$Unload"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AppearanceHelper$ModelDataAccessor, $AppearanceHelper$ModelDataAccessor$Type} from "packages/xfacthd/framedblocks/api/block/render/$AppearanceHelper$ModelDataAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelDataManager implements $AppearanceHelper$ModelDataAccessor {

constructor(arg0: $Level$Type)

public static "onChunkUnload"(arg0: $ChunkEvent$Unload$Type): void
public "framedblocks$getCachedAt"(arg0: $BlockPos$Type): $ModelData
public "requestRefresh"(arg0: $BlockEntity$Type): void
public "getAt"(arg0: $ChunkPos$Type): $Map<($BlockPos), ($ModelData)>
public "getAt"(arg0: $BlockPos$Type): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataManager$Type = ($ModelDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataManager_ = $ModelDataManager$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$EventPriority" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EventPriority extends $Enum<($EventPriority)> implements $IEventListener {
static readonly "HIGHEST": $EventPriority
static readonly "HIGH": $EventPriority
static readonly "NORMAL": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority


public "invoke"(arg0: $Event$Type): void
public static "values"(): ($EventPriority)[]
public static "valueOf"(arg0: string): $EventPriority
public "listenerName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventPriority$Type = (("normal") | ("high") | ("highest") | ("low") | ("lowest")) | ($EventPriority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventPriority_ = $EventPriority$Type;
}}
declare module "packages/net/minecraftforge/common/$ToolAction" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $ToolAction {


public "name"(): string
public static "get"(arg0: string): $ToolAction
public "toString"(): string
public static "getActions"(): $Collection<($ToolAction)>
get "actions"(): $Collection<($ToolAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolAction$Type = ($ToolAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolAction_ = $ToolAction$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBlockGetter {

 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $IForgeBlockGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockGetter$Type = ($IForgeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockGetter_ = $IForgeBlockGetter$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup, $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder$PartBuilder {
 "models": $BlockStateProvider$ConfiguredModelList
 "useOr": boolean
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>


public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder
public "end"(): $MultiPartBlockStateBuilder
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder
public "canApplyTo"(arg0: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$Type = ($MultiPartBlockStateBuilder$PartBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder_ = $MultiPartBlockStateBuilder$PartBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeIntrinsicHolderTagAppender" {
import {$IForgeTagAppender, $IForgeTagAppender$Type} from "packages/net/minecraftforge/common/extensions/$IForgeTagAppender"
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeIntrinsicHolderTagAppender<T> extends $IForgeTagAppender<(T)> {

 "remove"(arg0: $TagKey$Type<(T)>, ...arg1: ($TagKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T, ...arg1: (T)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "replace"(arg0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "getKey"(arg0: T): $ResourceKey<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>

(arg0: $TagKey$Type<(T)>, ...arg1: ($TagKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
}

export namespace $IForgeIntrinsicHolderTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeIntrinsicHolderTagAppender$Type<T> = ($IForgeIntrinsicHolderTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeIntrinsicHolderTagAppender_<T> = $IForgeIntrinsicHolderTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluidState" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluidState {

 "move"(arg0: $LivingEntity$Type, arg1: $Vec3$Type, arg2: double): boolean
 "canConvertToSource"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "supportsBoating"(arg0: $Boat$Type): boolean
 "shouldUpdateWhileBoating"(arg0: $Boat$Type, arg1: $Entity$Type): boolean
 "getFluidType"(): $FluidType
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: boolean): $BlockPathTypes
 "canExtinguish"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "canHydrate"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): boolean
}

export namespace $IForgeFluidState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluidState$Type = ($IForgeFluidState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluidState_ = $IForgeFluidState$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions" {
import {$Gui, $Gui$Type} from "packages/net/minecraft/client/gui/$Gui"
import {$EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $IClientMobEffectExtensions {

 "isVisibleInInventory"(arg0: $MobEffectInstance$Type): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$Type): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryText"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderGuiIcon"(arg0: $MobEffectInstance$Type, arg1: $Gui$Type, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
}

export namespace $IClientMobEffectExtensions {
const DEFAULT: $IClientMobEffectExtensions
function of(arg0: $MobEffectInstance$Type): $IClientMobEffectExtensions
function of(arg0: $MobEffect$Type): $IClientMobEffectExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientMobEffectExtensions$Type = ($IClientMobEffectExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientMobEffectExtensions_ = $IClientMobEffectExtensions$Type;
}}
declare module "packages/net/minecraftforge/network/$ICustomPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICustomPacket<T extends $Packet<(any)>> {

 "getName"(): $ResourceLocation
 "getIndex"(): integer
 "getInternalData"(): $FriendlyByteBuf
 "getDirection"(): $NetworkDirection
 "getThis"(): T
}

export namespace $ICustomPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomPacket$Type<T> = ($ICustomPacket<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomPacket_<T> = $ICustomPacket$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IForgeRecipeSerializer<T extends $Recipe<(any)>> {

 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}

export namespace $IForgeRecipeSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRecipeSerializer$Type<T> = ($IForgeRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRecipeSerializer_<T> = $IForgeRecipeSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$EventHandlerImplCommon$LevelEventAttachment, $EventHandlerImplCommon$LevelEventAttachment$Type} from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {

constructor()
constructor(arg0: $LevelAccessor$Type)

public "architectury$getAttachedLevel"(): $LevelAccessor
public "architectury$attachLevel"(level: $LevelAccessor$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getLevel"(): $LevelAccessor
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "level"(): $LevelAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Type = ($LevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent_ = $LevelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRawTagBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TagEntry, $TagEntry$Type} from "packages/net/minecraft/tags/$TagEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"

export interface $IForgeRawTagBuilder {

 "removeElement"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
 "remove"(arg0: $TagEntry$Type, arg1: string): $TagBuilder
 "getRawBuilder"(): $TagBuilder
/**
 * 
 * @deprecated
 */
 "serializeTagAdditions"(arg0: $JsonObject$Type): void
 "removeTag"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
}

export namespace $IForgeRawTagBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRawTagBuilder$Type = ($IForgeRawTagBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRawTagBuilder_ = $IForgeRawTagBuilder$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider" {
import {$ILifecycleEvent, $ILifecycleEvent$Type} from "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

export interface $IModLanguageProvider {

 "name"(): string
 "consumeLifecycleEvent"<R extends $ILifecycleEvent<(R)>>(arg0: $Supplier$Type<(R)>): void
 "getFileVisitor"(): $Consumer<($ModFileScanData)>
}

export namespace $IModLanguageProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModLanguageProvider$Type = ($IModLanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModLanguageProvider_ = $IModLanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffectInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffectInstance {

 "getCurativeItems"(): $List<($ItemStack)>
 "writeCurativeItems"(arg0: $CompoundTag$Type): void
 "setCurativeItems"(arg0: $List$Type<($ItemStack$Type)>): void
 "addCurativeItem"(arg0: $ItemStack$Type): void
 "isCurativeItem"(arg0: $ItemStack$Type): boolean
}

export namespace $IForgeMobEffectInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffectInstance$Type = ($IForgeMobEffectInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffectInstance_ = $IForgeMobEffectInstance$Type;
}}
declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"

export class $TextureStitchEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $TextureAtlas$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getAtlas"(): $TextureAtlas
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "atlas"(): $TextureAtlas
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureStitchEvent$Type = ($TextureStitchEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureStitchEvent_ = $TextureStitchEvent$Type;
}}
declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$TextureStitchEvent, $TextureStitchEvent$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent"

export class $TextureStitchEvent$Post extends $TextureStitchEvent {

constructor(arg0: $TextureAtlas$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureStitchEvent$Post$Type = ($TextureStitchEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureStitchEvent$Post_ = $TextureStitchEvent$Post$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $IGeneratedBlockState {

 "toJson"(): $JsonObject

(): $JsonObject
}

export namespace $IGeneratedBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeneratedBlockState$Type = ($IGeneratedBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeneratedBlockState_ = $IGeneratedBlockState$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTransformation" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"

export interface $IForgeTransformation {

 "isIdentity"(): boolean
 "transformNormal"(arg0: $Vector3f$Type): void
 "rotateTransform"(arg0: $Direction$Type): $Direction
 "blockCenterToCorner"(): $Transformation
 "applyOrigin"(arg0: $Vector3f$Type): $Transformation
 "blockCornerToCenter"(): $Transformation
 "transformPosition"(arg0: $Vector4f$Type): void
}

export namespace $IForgeTransformation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTransformation$Type = ($IForgeTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTransformation_ = $IForgeTransformation$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlock {

 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
 "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
 "canBeHydrated"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type, arg4: $BlockPos$Type): boolean
 "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isScaffolding"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
 "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
 "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
 "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
 "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
 "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
 "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
 "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "isStickyBlock"(arg0: $BlockState$Type): boolean
 "isSlimeBlock"(arg0: $BlockState$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
 "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
 "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
 "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
 "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean

(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
}

export namespace $IForgeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlock$Type = ($IForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlock_ = $IForgeBlock$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IModFile$Type extends $Enum<($IModFile$Type)> {
static readonly "MOD": $IModFile$Type
static readonly "LIBRARY": $IModFile$Type
static readonly "LANGPROVIDER": $IModFile$Type
static readonly "GAMELIBRARY": $IModFile$Type


public static "values"(): ($IModFile$Type)[]
public static "valueOf"(arg0: string): $IModFile$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type$Type = (("gamelibrary") | ("mod") | ("library") | ("langprovider")) | ($IModFile$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile$Type_ = $IModFile$Type$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IExtensionPoint$DisplayTest extends $Record implements $IExtensionPoint<($IExtensionPoint$DisplayTest)> {
static readonly "IGNORESERVERONLY": string
static readonly "IGNORE_SERVER_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>
static readonly "IGNORE_ALL_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>

constructor(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>)
constructor(suppliedVersion: $Supplier$Type<(string)>, remoteVersionTest: $BiPredicate$Type<(string), (boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "remoteVersionTest"(): $BiPredicate<(string), (boolean)>
public "suppliedVersion"(): $Supplier<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$DisplayTest$Type = ($IExtensionPoint$DisplayTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint$DisplayTest_ = $IExtensionPoint$DisplayTest$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$DoubleValue extends $ForgeConfigSpec$ConfigValue<(double)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$DoubleValue$Type = ($ForgeConfigSpec$DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$DoubleValue_ = $ForgeConfigSpec$DoubleValue$Type;
}}
declare module "packages/net/minecraftforge/fml/$DeferredWorkQueue" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {

constructor(arg0: $ModLoadingStage$Type)

public static "lookup"(arg0: $Optional$Type<($ModLoadingStage$Type)>): $Optional<($DeferredWorkQueue)>
public "enqueueWork"<T>(arg0: $ModContainer$Type, arg1: $Supplier$Type<(T)>): $CompletableFuture<(T)>
public "enqueueWork"(arg0: $ModContainer$Type, arg1: $Runnable$Type): $CompletableFuture<(void)>
public "runTasks"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredWorkQueue$Type = ($DeferredWorkQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredWorkQueue_ = $DeferredWorkQueue$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IIngredientSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IIngredientSerializer<T extends $Ingredient> {

 "parse"(arg0: $FriendlyByteBuf$Type): T
 "parse"(arg0: $JsonObject$Type): T
 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $IIngredientSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSerializer$Type<T> = ($IIngredientSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSerializer_<T> = $IIngredientSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec" {
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ConfigSpec$CorrectionListener, $ConfigSpec$CorrectionListener$Type} from "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UnmodifiableConfigWrapper, $UnmodifiableConfigWrapper$Type} from "packages/com/electronwill/nightconfig/core/utils/$UnmodifiableConfigWrapper"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export class $ForgeConfigSpec extends $UnmodifiableConfigWrapper<($UnmodifiableConfig)> implements $IConfigSpec<($ForgeConfigSpec)> {


public "isLoaded"(): boolean
public "save"(): void
public "getLevelComment"(arg0: $List$Type<(string)>): string
public "getLevelTranslationKey"(arg0: $List$Type<(string)>): string
public "isCorrecting"(): boolean
public "acceptConfig"(arg0: $CommentedConfig$Type): void
public "afterReload"(): void
public "setConfig"(arg0: $CommentedConfig$Type): void
public "isCorrect"(arg0: $CommentedConfig$Type): boolean
public "correct"(arg0: $CommentedConfig$Type): integer
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type): integer
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type, arg2: $ConfigSpec$CorrectionListener$Type): integer
public "getValues"(): $UnmodifiableConfig
public "getSpec"(): $UnmodifiableConfig
public "self"(): $ForgeConfigSpec
get "loaded"(): boolean
get "correcting"(): boolean
set "config"(value: $CommentedConfig$Type)
get "values"(): $UnmodifiableConfig
get "spec"(): $UnmodifiableConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Type = ($ForgeConfigSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec_ = $ForgeConfigSpec$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFriendlyByteBuf" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeFriendlyByteBuf {

 "writeRegistryIdUnsafe"(arg0: $IForgeRegistry$Type<(any)>, arg1: $ResourceLocation$Type): void
 "writeRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "readRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>): T
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "readRegistryId"<T>(): T
 "readRegistryIdSafe"<T>(arg0: $Class$Type<(any)>): T
 "writeFluidStack"(arg0: $FluidStack$Type): void
 "readFluidStack"(): $FluidStack
}

export namespace $IForgeFriendlyByteBuf {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFriendlyByteBuf$Type = ($IForgeFriendlyByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFriendlyByteBuf_ = $IForgeFriendlyByteBuf$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NetworkEvent$PacketDispatcher {


public "sendPacket"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$PacketDispatcher$Type = ($NetworkEvent$PacketDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$PacketDispatcher_ = $NetworkEvent$PacketDispatcher$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityProvider, $CapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProviderImpl<B extends $ICapabilityProviderImpl<(B)>> extends $ICapabilityProvider {

 "invalidateCaps"(): void
 "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
 "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
 "reviveCaps"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $ICapabilityProviderImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProviderImpl$Type<B> = ($ICapabilityProviderImpl<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProviderImpl_<B> = $ICapabilityProviderImpl$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$ExistingFileHelper$IResourceType, $ExistingFileHelper$IResourceType$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExistingFileHelper {

constructor(arg0: $Collection$Type<($Path$Type)>, arg1: $Set$Type<(string)>, arg2: boolean, arg3: string, arg4: $File$Type)

public "isEnabled"(): boolean
public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): $Resource
public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $Resource
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): boolean
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): void
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): void
public "getResourceStack"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $List<($Resource)>
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$Type = ($ExistingFileHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper_ = $ExistingFileHelper$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TransformationHelper$TransformOrigin extends $Enum<($TransformationHelper$TransformOrigin)> implements $StringRepresentable {
static readonly "CENTER": $TransformationHelper$TransformOrigin
static readonly "CORNER": $TransformationHelper$TransformOrigin
static readonly "OPPOSING_CORNER": $TransformationHelper$TransformOrigin


public static "values"(): ($TransformationHelper$TransformOrigin)[]
public static "valueOf"(arg0: string): $TransformationHelper$TransformOrigin
public static "fromString"(arg0: string): $TransformationHelper$TransformOrigin
public "getSerializedName"(): string
public "getVector"(): $Vector3f
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "vector"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationHelper$TransformOrigin$Type = (("corner") | ("center") | ("opposing_corner")) | ($TransformationHelper$TransformOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationHelper$TransformOrigin_ = $TransformationHelper$TransformOrigin$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBoat" {
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeBoat {

 "shouldUpdateFluidWhileRiding"(arg0: $FluidState$Type, arg1: $Entity$Type): boolean
 "canBoatInFluid"(arg0: $FluidState$Type): boolean
 "canBoatInFluid"(arg0: $FluidType$Type): boolean
}

export namespace $IForgeBoat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBoat$Type = ($IForgeBoat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBoat_ = $IForgeBoat$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder" {
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$RotationBuilder {

constructor(arg0: $ModelBuilder$ElementBuilder$Type)

public "origin"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "end"(): $ModelBuilder$ElementBuilder<>
public "angle"(arg0: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "axis"(arg0: $Direction$Axis$Type): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "rescale"(arg0: boolean): $ModelBuilder$ElementBuilder$RotationBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$RotationBuilder$Type = ($ModelBuilder$ElementBuilder$RotationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$RotationBuilder_ = $ModelBuilder$ElementBuilder$RotationBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$IntValue extends $ForgeConfigSpec$ConfigValue<(integer)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$IntValue$Type = ($ForgeConfigSpec$IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$IntValue_ = $ForgeConfigSpec$IntValue$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeFont" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"

export interface $IForgeFont {

 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$Type, arg1: integer): $FormattedText

(): $Font
}

export namespace $IForgeFont {
const ELLIPSIS: $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFont$Type = ($IForgeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFont_ = $IForgeFont$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeKeyMapping" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$KeyModifier, $KeyModifier$Type} from "packages/net/minecraftforge/client/settings/$KeyModifier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IForgeKeyMapping {

 "getKey"(): $InputConstants$Key
 "isConflictContextAndModifierActive"(): boolean
 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
 "getKeyConflictContext"(): $IKeyConflictContext
 "getKeyModifier"(): $KeyModifier
 "getDefaultKeyModifier"(): $KeyModifier
 "setKeyConflictContext"(arg0: $IKeyConflictContext$Type): void
 "setKeyModifierAndCode"(arg0: $KeyModifier$Type, arg1: $InputConstants$Key$Type): void
 "hasKeyModifierConflict"(arg0: $KeyMapping$Type): boolean
 "setToDefault"(): void
}

export namespace $IForgeKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeKeyMapping$Type = ($IForgeKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeKeyMapping_ = $IForgeKeyMapping$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItem {

 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getDamage"(arg0: $ItemStack$Type): integer
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer

(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
}

export namespace $IForgeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItem$Type = ($IForgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItem_ = $IForgeItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<(T)>> {

 "getConfigurableComponentNames"(): $Set<(string)>
 "resolveParents"(arg0: $Function$Type<($ResourceLocation$Type), ($UnbakedModel$Type)>, arg1: $IGeometryBakingContext$Type): void
 "bake"(arg0: $IGeometryBakingContext$Type, arg1: $ModelBaker$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg3: $ModelState$Type, arg4: $ItemOverrides$Type, arg5: $ResourceLocation$Type): $BakedModel

(): $Set<(string)>
}

export namespace $IUnbakedGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnbakedGeometry$Type<T> = ($IUnbakedGeometry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUnbakedGeometry_<T> = $IUnbakedGeometry$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fluids/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FluidStack {
static readonly "EMPTY": $FluidStack
static readonly "CODEC": $Codec<($FluidStack)>

constructor(arg0: $Fluid$Type, arg1: integer)
constructor(arg0: $Fluid$Type, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $FluidStack$Type, arg1: integer)

public "getTag"(): $CompoundTag
public "getDisplayName"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "copy"(): $FluidStack
public "grow"(arg0: integer): void
public "getTranslationKey"(): string
public "getRawFluid"(): $Fluid
public "isFluidStackIdentical"(arg0: $FluidStack$Type): boolean
public "containsFluid"(arg0: $FluidStack$Type): boolean
public static "areFluidStackTagsEqual"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): boolean
public "removeChildTag"(arg0: string): void
public "getOrCreateChildTag"(arg0: string): $CompoundTag
public "getChildTag"(arg0: string): $CompoundTag
public "getOrCreateTag"(): $CompoundTag
public static "loadFluidStackFromNBT"(arg0: $CompoundTag$Type): $FluidStack
public "isFluidEqual"(arg0: $ItemStack$Type): boolean
public "isFluidEqual"(arg0: $FluidStack$Type): boolean
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $FluidStack
public "getAmount"(): integer
public "shrink"(arg0: integer): void
public "setTag"(arg0: $CompoundTag$Type): void
public "getFluid"(): $Fluid
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "hasTag"(): boolean
public "setAmount"(arg0: integer): void
get "tag"(): $CompoundTag
get "displayName"(): $Component
get "empty"(): boolean
get "translationKey"(): string
get "rawFluid"(): $Fluid
get "orCreateTag"(): $CompoundTag
get "amount"(): integer
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {

constructor()

public "copyFrom"(arg0: $BlockGeometryBakingContext$VisibilityData$Type): void
public "hasCustomVisibility"(arg0: string): boolean
public "setVisibilityState"(arg0: string, arg1: boolean): void
public "isVisible"(arg0: string, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$VisibilityData$Type = ($BlockGeometryBakingContext$VisibilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext$VisibilityData_ = $BlockGeometryBakingContext$VisibilityData$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet" {
import {$IForgeHolderSet$SerializationType, $IForgeHolderSet$SerializationType$Type} from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeHolderSet<T> {

 "serializationType"(): $IForgeHolderSet$SerializationType
 "addInvalidationListener"(arg0: $Runnable$Type): void
}

export namespace $IForgeHolderSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$Type<T> = ($IForgeHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet_<T> = $IForgeHolderSet$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTagAppender" {
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeTagAppender<T> {

 "remove"(arg0: $ResourceKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type, ...arg1: ($ResourceLocation$Type)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $TagKey$Type<(T)>, ...arg1: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "replace"(arg0: boolean): $TagsProvider$TagAppender<(T)>
 "replace"(): $TagsProvider$TagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
}

export namespace $IForgeTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTagAppender$Type<T> = ($IForgeTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTagAppender_<T> = $IForgeTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$Lazy" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Lazy<T> extends $Supplier<(T)> {

 "get"(): T

(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}

export namespace $Lazy {
function of<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
function concurrentOf<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$Type<T> = ($Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lazy_<T> = $Lazy$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IdMappingEvent$IdRemapping extends $Record {

constructor(currId: integer, newId: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newId"(): integer
public "currId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$IdRemapping$Type = ($IdMappingEvent$IdRemapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdMappingEvent$IdRemapping_ = $IdMappingEvent$IdRemapping$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ModelBuilder$TransformsBuilder$TransformVecBuilder, $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$TransformsBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "transform"(arg0: $ItemDisplayContext$Type): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$Type = ($ModelBuilder$TransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder_ = $ModelBuilder$TransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IShapedRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IShapedRecipe<T extends $Container> extends $Recipe<(T)> {

 "getRecipeWidth"(): integer
 "getRecipeHeight"(): integer
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: T, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: T, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getType"(): $ResourceLocation
 "getMod"(): string
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
}

export namespace $IShapedRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShapedRecipe$Type<T> = ($IShapedRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShapedRecipe_<T> = $IShapedRecipe$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegisterEvent$RegisterHelper, $RegisterEvent$RegisterHelper$Type} from "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegisterEvent extends $Event implements $IModBusEvent {

constructor()

public "toString"(): string
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $Consumer$Type<($RegisterEvent$RegisterHelper$Type<(T)>)>): void
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $ResourceLocation$Type, arg2: $Supplier$Type<(T)>): void
public "getListenerList"(): $ListenerList
public "getForgeRegistry"<T>(): $IForgeRegistry<(T)>
public "getVanillaRegistry"<T>(): $Registry<(T)>
public "isCancelable"(): boolean
public "getRegistryKey"(): $ResourceKey<(any)>
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "forgeRegistry"(): $IForgeRegistry<(T)>
get "vanillaRegistry"(): $Registry<(T)>
get "cancelable"(): boolean
get "registryKey"(): $ResourceKey<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$Type = ($RegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent_ = $RegisterEvent$Type;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"

export interface $ExistingFileHelper$IResourceType {

 "getSuffix"(): string
 "getPackType"(): $PackType
 "getPrefix"(): string
}

export namespace $ExistingFileHelper$IResourceType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$IResourceType$Type = ($ExistingFileHelper$IResourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper$IResourceType_ = $ExistingFileHelper$IResourceType$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModFileScanData$AnnotationData, $ModFileScanData$AnnotationData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$ModFileScanData$ClassData, $ModFileScanData$ClassData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"

export class $ModFileScanData {

constructor()

public "getClasses"(): $Set<($ModFileScanData$ClassData)>
public "getAnnotations"(): $Set<($ModFileScanData$AnnotationData)>
public "addLanguageLoader"(arg0: $Map$Type<(string), (any)>): void
public "getIModInfoData"(): $List<($IModFileInfo)>
public static "interestingAnnotations"(): $Predicate<($Type)>
public "addModFileInfo"(arg0: $IModFileInfo$Type): void
public "getTargets"(): $Map<(string), (any)>
get "classes"(): $Set<($ModFileScanData$ClassData)>
get "annotations"(): $Set<($ModFileScanData$AnnotationData)>
get "iModInfoData"(): $List<($IModFileInfo)>
get "targets"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$Type = ($ModFileScanData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData_ = $ModFileScanData$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModelProvider extends $ModelProvider<($ItemModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "getName"(): string
public "basicItem"(arg0: $Item$Type): $ItemModelBuilder
public "basicItem"(arg0: $ResourceLocation$Type): $ItemModelBuilder
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelProvider$Type = ($ItemModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelProvider_ = $ItemModelProvider$Type;
}}
declare module "packages/net/minecraftforge/energy/$IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage {

 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "canExtract"(): boolean
}

export namespace $IEnergyStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$Type = ($IEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorage_ = $IEnergyStorage$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$ClearCallback<V> {

 "onClear"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$ClearCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ClearCallback$Type<V> = ($IForgeRegistry$ClearCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ClearCallback_<V> = $IForgeRegistry$ClearCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IGenericEvent" {
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $IGenericEvent<T> {

 "getGenericType"(): $Type

(): $Type
}

export namespace $IGenericEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericEvent$Type<T> = ($IGenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenericEvent_<T> = $IGenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/$AnvilUpdateEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AnvilUpdateEvent extends $Event {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: string, arg3: integer, arg4: $Player$Type)
constructor()

public "getName"(): string
public "setMaterialCost"(arg0: integer): void
public "getMaterialCost"(): integer
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getLeft"(): $ItemStack
public "getRight"(): $ItemStack
public "hasResult"(): boolean
public "getPlayer"(): $Player
public "setOutput"(arg0: $ItemStack$Type): void
public "getOutput"(): $ItemStack
public "getCost"(): integer
public "setCost"(arg0: integer): void
get "name"(): string
set "materialCost"(value: integer)
get "materialCost"(): integer
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "left"(): $ItemStack
get "right"(): $ItemStack
get "player"(): $Player
set "output"(value: $ItemStack$Type)
get "output"(): $ItemStack
get "cost"(): integer
set "cost"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpdateEvent$Type = ($AnvilUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpdateEvent_ = $AnvilUpdateEvent$Type;
}}
declare module "packages/net/minecraftforge/common/util/$LazyOptional" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$NonNullPredicate, $NonNullPredicate$Type} from "packages/net/minecraftforge/common/util/$NonNullPredicate"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"

export class $LazyOptional<T> {


public "orElseGet"(arg0: $NonNullSupplier$Type<(any)>): T
public "invalidate"(): void
public "ifPresent"(arg0: $NonNullConsumer$Type<(any)>): void
public "cast"<X>(): $LazyOptional<(X)>
public "map"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $Optional<(U)>
public static "of"<T>(arg0: $NonNullSupplier$Type<(T)>): $LazyOptional<(T)>
public "filter"(arg0: $NonNullPredicate$Type<(any)>): $Optional<(T)>
public static "empty"<T>(): $LazyOptional<(T)>
public "resolve"(): $Optional<(T)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $NonNullSupplier$Type<(any)>): T
public "removeListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
public "addListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
public "lazyMap"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $LazyOptional<(U)>
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyOptional$Type<T> = ($LazyOptional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyOptional_<T> = $LazyOptional$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModStateTransition$EventGenerator<T extends ($Event) & ($IModBusEvent)> extends $Function<($ModContainer), (T)> {

 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($ModContainer)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ModContainer), (V)>
 "apply"(arg0: $ModContainer$Type): $ModContainer

(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
}

export namespace $IModStateTransition$EventGenerator {
function fromFunction<FN>(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
function identity<T>(): $Function<($ModContainer), ($ModContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModStateTransition$EventGenerator$Type<T> = ($IModStateTransition$EventGenerator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModStateTransition$EventGenerator_<T> = $IModStateTransition$EventGenerator$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$ConfigFileTypeHandler, $ConfigFileTypeHandler$Type} from "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler"
import {$ModConfig$Type, $ModConfig$Type$Type} from "packages/net/minecraftforge/fml/config/$ModConfig$Type"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {

constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type, arg3: string)
constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type)

public "getHandler"(): $ConfigFileTypeHandler
public "save"(): void
public "getType"(): $ModConfig$Type
public "getFileName"(): string
public "getConfigData"(): $CommentedConfig
public "getFullPath"(): $Path
public "acceptSyncedConfig"(arg0: (byte)[]): void
public "getModId"(): string
public "getSpec"<T extends $IConfigSpec<(T)>>(): $IConfigSpec<(T)>
get "handler"(): $ConfigFileTypeHandler
get "type"(): $ModConfig$Type
get "fileName"(): string
get "configData"(): $CommentedConfig
get "fullPath"(): $Path
get "modId"(): string
get "spec"(): $IConfigSpec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type = ($ModConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig_ = $ModConfig$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$ICondition" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICondition {

 "getID"(): $ResourceLocation
 "test"(arg0: $ICondition$IContext$Type): boolean
}

export namespace $ICondition {
function shouldRegisterEntry(arg0: $JsonElement$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$Type = ($ICondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition_ = $ICondition$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
public "getDescription"(arg0: $FluidStack$Type): $Component
public "getDescription"(): $Component
public "toString"(): string
public "getRenderPropertiesInternal"(): any
public "getStateForPlacement"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): $FluidState
public "getDescriptionId"(arg0: $FluidStack$Type): string
public "getDescriptionId"(): string
public "getLightLevel"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getLightLevel"(arg0: $FluidStack$Type): integer
public "getLightLevel"(): integer
public "setItemMovement"(arg0: $ItemEntity$Type): void
public "canConvertToSource"(arg0: $FluidStack$Type): boolean
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
public "supportsBoating"(arg0: $Boat$Type): boolean
public "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
public "getTemperature"(): integer
public "getTemperature"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getTemperature"(arg0: $FluidStack$Type): integer
public "isVaporizedOnPlacement"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
public "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public "getViscosity"(arg0: $FluidStack$Type): integer
public "getViscosity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getViscosity"(): integer
public "getBlockForFluidState"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): $BlockState
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
public "isLighterThanAir"(): boolean
public "canRideVehicleUnder"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "canExtinguish"(arg0: $Entity$Type): boolean
public "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "canPushEntity"(arg0: $Entity$Type): boolean
public "motionScale"(arg0: $Entity$Type): double
public "getFallDistanceModifier"(arg0: $Entity$Type): float
public "isAir"(): boolean
public "getSound"(arg0: $Player$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $FluidStack$Type, arg1: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $Entity$Type, arg1: $SoundAction$Type): $SoundEvent
public "canHydrate"(arg0: $Entity$Type): boolean
public "canHydrate"(arg0: $FluidStack$Type): boolean
public "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
public "isVanilla"(): boolean
public "canSwim"(arg0: $Entity$Type): boolean
public "canDrownIn"(arg0: $LivingEntity$Type): boolean
public "getBucket"(arg0: $FluidStack$Type): $ItemStack
public "onVaporize"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $FluidStack$Type): void
public "getDensity"(arg0: $FluidStack$Type): integer
public "getDensity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getDensity"(): integer
public "getRarity"(): $Rarity
public "getRarity"(arg0: $FluidStack$Type): $Rarity
get "description"(): $Component
get "renderPropertiesInternal"(): any
get "descriptionId"(): string
get "lightLevel"(): integer
set "itemMovement"(value: $ItemEntity$Type)
get "temperature"(): integer
get "viscosity"(): integer
get "lighterThanAir"(): boolean
get "air"(): boolean
get "vanilla"(): boolean
get "density"(): integer
get "rarity"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Type = ($FluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<($BlockState)> {


public "with"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, arg1: T): $VariantBlockStateBuilder$PartialBlockstate
public "getOwner"(): $Block
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $BlockState$Type): boolean
public static "comparingByProperties"(): $Comparator<($VariantBlockStateBuilder$PartialBlockstate)>
public "modelForState"(): $ConfiguredModel$Builder<($VariantBlockStateBuilder)>
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "getSetStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
public "setModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "addModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder$PartialBlockstate
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
get "owner"(): $Block
get "setStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
set "models"(value: ($ConfiguredModel$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$PartialBlockstate$Type = ($VariantBlockStateBuilder$PartialBlockstate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder$PartialBlockstate_ = $VariantBlockStateBuilder$PartialBlockstate$Type;
}}
declare module "packages/net/minecraftforge/entity/$PartEntity" {
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PartEntity<T extends $Entity> extends $Entity {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "invulnerableTime": integer
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "parent"(): T
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$Type<T> = ($PartEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartEntity_<T> = $PartEntity$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import {$StructureSpawnOverride, $StructureSpawnOverride$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride$BoundingBoxType"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {


public "build"(): $StructureSpawnOverride
public static "copyOf"(arg0: $StructureSpawnOverride$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "setBoundingBox"(arg0: $StructureSpawnOverride$BoundingBoxType$Type): void
public "removeSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "addSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "getSpawns"(): $List<($MobSpawnSettings$SpawnerData)>
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$Type)
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
get "spawns"(): $List<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type = ($StructureSettingsBuilder$StructureSpawnOverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder_ = $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$Range, $ForgeConfigSpec$Range$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Range"

export class $ForgeConfigSpec$ValueSpec {


public "getComment"(): string
public "getClazz"(): $Class<(any)>
public "test"(arg0: any): boolean
public "getDefault"(): any
public "getRange"<V extends $Comparable<(any)>>(): $ForgeConfigSpec$Range<(V)>
public "getTranslationKey"(): string
public "needsWorldRestart"(): boolean
public "correct"(arg0: any): any
get "comment"(): string
get "clazz"(): $Class<(any)>
get "default"(): any
get "range"(): $ForgeConfigSpec$Range<(V)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ValueSpec$Type = ($ForgeConfigSpec$ValueSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ValueSpec_ = $ForgeConfigSpec$ValueSpec$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent$DataGeneratorConfig, $GatherDataEvent$DataGeneratorConfig$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export class $GatherDataEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $ModContainer$Type, arg1: $DataGenerator$Type, arg2: $GatherDataEvent$DataGeneratorConfig$Type, arg3: $ExistingFileHelper$Type)

public "getGenerator"(): $DataGenerator
public "getInputs"(): $Collection<($Path)>
public "validate"(): boolean
public "includeServer"(): boolean
public "getLookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "getExistingFileHelper"(): $ExistingFileHelper
public "includeClient"(): boolean
public "getModContainer"(): $ModContainer
public "includeReports"(): boolean
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "includeDev"(): boolean
get "generator"(): $DataGenerator
get "inputs"(): $Collection<($Path)>
get "lookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "existingFileHelper"(): $ExistingFileHelper
get "modContainer"(): $ModContainer
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$Type = ($GatherDataEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent_ = $GatherDataEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$ChunkRenderTypeSet" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderTypeSet implements $Iterable<($RenderType)> {


public static "union"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "union"(arg0: $Iterable$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "union"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "all"(): $ChunkRenderTypeSet
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($RenderType)>
public static "of"(arg0: $Collection$Type<($RenderType$Type)>): $ChunkRenderTypeSet
public static "of"(...arg0: ($RenderType$Type)[]): $ChunkRenderTypeSet
public "contains"(arg0: $RenderType$Type): boolean
public "asList"(): $List<($RenderType)>
public static "intersection"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "intersection"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "intersection"(arg0: $Iterable$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "none"(): $ChunkRenderTypeSet
public "spliterator"(): $Spliterator<($RenderType)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$RenderType>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSet$Type = ($ChunkRenderTypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderTypeSet_ = $ChunkRenderTypeSet$Type;
}}
declare module "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ModLifecycleEvent, $ModLifecycleEvent$Type} from "packages/net/minecraftforge/fml/event/lifecycle/$ModLifecycleEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ParallelDispatchEvent extends $ModLifecycleEvent {

constructor()
constructor(arg0: $ModContainer$Type, arg1: $ModLoadingStage$Type)

public "enqueueWork"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public "enqueueWork"<T>(arg0: $Supplier$Type<(T)>): $CompletableFuture<(T)>
public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParallelDispatchEvent$Type = ($ParallelDispatchEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParallelDispatchEvent_ = $ParallelDispatchEvent$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeFlowingFluid$Properties {

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Supplier$Type<(any)>)

public "block"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "bucket"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "slopeFindDistance"(arg0: integer): $ForgeFlowingFluid$Properties
public "levelDecreasePerBlock"(arg0: integer): $ForgeFlowingFluid$Properties
public "explosionResistance"(arg0: float): $ForgeFlowingFluid$Properties
public "tickRate"(arg0: integer): $ForgeFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Properties$Type = ($ForgeFlowingFluid$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Properties_ = $ForgeFlowingFluid$Properties$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$IReverseTag" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IReverseTag<V> {

 "containsTag"(arg0: $TagKey$Type<(V)>): boolean
 "containsTag"(arg0: $ITag$Type<(V)>): boolean
 "getTagKeys"(): $Stream<($TagKey<(V)>)>
}

export namespace $IReverseTag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReverseTag$Type<V> = ($IReverseTag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReverseTag_<V> = $IReverseTag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$MissingMappingsEvent$Mapping, $MissingMappingsEvent$Mapping$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MissingMappingsEvent extends $Event {

constructor(arg0: $ResourceKey$Type<(any)>, arg1: $IForgeRegistry$Type<(any)>, arg2: $Collection$Type<($MissingMappingsEvent$Mapping$Type<(any)>)>)
constructor()

public "getKey"(): $ResourceKey<(any)>
public "getRegistry"(): $IForgeRegistry<(any)>
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getMappings"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string): $List<($MissingMappingsEvent$Mapping<(T)>)>
public "getAllMappings"<T>(arg0: $ResourceKey$Type<(any)>): $List<($MissingMappingsEvent$Mapping<(T)>)>
public "hasResult"(): boolean
get "key"(): $ResourceKey<(any)>
get "registry"(): $IForgeRegistry<(any)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Type = ($MissingMappingsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent_ = $MissingMappingsEvent$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICondition$IContext {

 "getTag"<T>(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$Type<(any)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>

(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
}

export namespace $ICondition$IContext {
const EMPTY: $ICondition$IContext
const TAGS_INVALID: $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$IContext$Type = ($ICondition$IContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition$IContext_ = $ICondition$IContext$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullPredicate<T> {

 "test"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $NonNullPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullPredicate$Type<T> = ($NonNullPredicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullPredicate_<T> = $NonNullPredicate$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullConsumer<T> {

 "accept"(arg0: T): void

(arg0: T): void
}

export namespace $NonNullConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$Type<T> = ($NonNullConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullConsumer_<T> = $NonNullConsumer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILifecycleEvent<R extends $ILifecycleEvent<(any)>> {

 "concrete"(): R
}

export namespace $ILifecycleEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILifecycleEvent$Type<R> = ($ILifecycleEvent<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILifecycleEvent_<R> = $ILifecycleEvent$Type<(R)>;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile" {
import {$SecureJar, $SecureJar$Type} from "packages/cpw/mods/jarhandling/$SecureJar"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IModFile$Type, $IModFile$Type$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile$Type"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$IModLanguageProvider, $IModLanguageProvider$Type} from "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModProvider, $IModProvider$Type} from "packages/net/minecraftforge/forgespi/locating/$IModProvider"
import {$SecureJar$Status, $SecureJar$Status$Type} from "packages/cpw/mods/jarhandling/$SecureJar$Status"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFile {

 "getProvider"(): $IModProvider
 "findResource"(...arg0: (string)[]): $Path
 "getType"(): $IModFile$Type
 "getFileName"(): string
 "getSubstitutionMap"(): $Supplier<($Map<(string), (any)>)>
 "getSecureJar"(): $SecureJar
 "setSecurityStatus"(arg0: $SecureJar$Status$Type): void
 "getModInfos"(): $List<($IModInfo)>
 "getScanResult"(): $ModFileScanData
 "getModFileInfo"(): $IModFileInfo
 "getFilePath"(): $Path
 "getLoaders"(): $List<($IModLanguageProvider)>
}

export namespace $IModFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type = ($IModFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile_ = $IModFile$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext {

 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$Type): boolean
}

export namespace $IKeyConflictContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyConflictContext$Type = ($IKeyConflictContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyConflictContext_ = $IKeyConflictContext$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$Context" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$NetworkEvent$PacketDispatcher, $NetworkEvent$PacketDispatcher$Type} from "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher"
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"

export class $NetworkEvent$Context {


public "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
public "enqueueWork"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public "setPacketHandled"(arg0: boolean): void
public "getNetworkManager"(): $Connection
public "getPacketHandled"(): boolean
public "getPacketDispatcher"(): $NetworkEvent$PacketDispatcher
public "getDirection"(): $NetworkDirection
public "getSender"(): $ServerPlayer
set "packetHandled"(value: boolean)
get "networkManager"(): $Connection
get "packetHandled"(): boolean
get "packetDispatcher"(): $NetworkEvent$PacketDispatcher
get "direction"(): $NetworkDirection
get "sender"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Context$Type = ($NetworkEvent$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$Context_ = $NetworkEvent$Context$Type;
}}
declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLCommonSetupEvent" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$ParallelDispatchEvent, $ParallelDispatchEvent$Type} from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {

constructor(arg0: $ModContainer$Type, arg1: $ModLoadingStage$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FMLCommonSetupEvent$Type = ($FMLCommonSetupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FMLCommonSetupEvent_ = $FMLCommonSetupEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityEvent extends $Event {

constructor()
constructor(arg0: $Entity$Type)

public "getEntity"(): $Entity
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "entity"(): $Entity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Type = ($EntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent_ = $EntityEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/$InterModComms$IMCMessage" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModComms$IMCMessage extends $Record {

constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "method"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getMethod"(): string
public "messageSupplier"(): $Supplier<(any)>
/**
 * 
 * @deprecated
 */
public "getMessageSupplier"<T>(): $Supplier<(T)>
/**
 * 
 * @deprecated
 */
public "getSenderModId"(): string
public "senderModId"(): string
public "modId"(): string
/**
 * 
 * @deprecated
 */
public "getModId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterModComms$IMCMessage$Type = ($InterModComms$IMCMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterModComms$IMCMessage_ = $InterModComms$IMCMessage$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelProperty" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $ModelProperty<T> implements $Predicate<(T)> {

constructor()
constructor(arg0: $Predicate$Type<(T)>)

public "test"(arg0: T): boolean
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public "negate"(): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperty$Type<T> = ($ModelProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperty_<T> = $ModelProperty$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message$MessageType extends $Enum<($Message$MessageType)> {
static readonly "MC": $Message$MessageType
static readonly "ML": $Message$MessageType
static readonly "LOC": $Message$MessageType
static readonly "MOD": $Message$MessageType


public static "values"(): ($Message$MessageType)[]
public static "valueOf"(arg0: string): $Message$MessageType
public "colour"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$MessageType$Type = (("loc") | ("mod") | ("mc") | ("ml")) | ($Message$MessageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message$MessageType_ = $Message$MessageType$Type;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export class $HandshakeMessages$LoginIndexedMessage implements $IntSupplier {


public "getAsInt"(): integer
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$LoginIndexedMessage$Type = ($HandshakeMessages$LoginIndexedMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$LoginIndexedMessage_ = $HandshakeMessages$LoginIndexedMessage$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$EnumArgument$Info$Template, $EnumArgument$Info$Template$Type} from "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template"

export class $EnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($EnumArgument<(T)>), ($EnumArgument$Info$Template<>)> {

constructor()

public "serializeToNetwork"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $EnumArgument$Info$Template<>
public "serializeToJson"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $JsonObject$Type): void
public "unpack"(arg0: $EnumArgument$Type<(T)>): $EnumArgument$Info$Template<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Type<T> = ($EnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info_<T> = $EnumArgument$Info$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeCommandSourceStack" {
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeCommandSourceStack {

 "getUnsidedLevel"(): $Level
 "getScoreboard"(): $Scoreboard
 "getRecipeManager"(): $RecipeManager
 "getAdvancement"(arg0: $ResourceLocation$Type): $Advancement
}

export namespace $IForgeCommandSourceStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeCommandSourceStack$Type = ($IForgeCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeCommandSourceStack_ = $IForgeCommandSourceStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>
 "useOr": boolean

constructor(arg0: $MultiPartBlockStateBuilder$PartBuilder$Type)

public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "end"(): $MultiPartBlockStateBuilder$PartBuilder
public "endNestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type = ($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup_ = $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEvent extends $EntityEvent {

constructor()
constructor(arg0: $LivingEntity$Type)

public "getEntity"(): $LivingEntity
public "getListenerList"(): $ListenerList
get "entity"(): $LivingEntity
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$Type = ($LivingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent_ = $LivingEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockModelProvider extends $ModelProvider<($BlockModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelProvider$Type = ($BlockModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelProvider_ = $BlockModelProvider$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BlockSnapshot" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockSnapshot {


public "getTag"(): $CompoundTag
public "getFlag"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): $BlockSnapshot
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockSnapshot
public "restore"(arg0: boolean, arg1: boolean): boolean
public "restore"(arg0: boolean): boolean
public "restore"(): boolean
public "getReplacedBlock"(): $BlockState
public "restoreToLocation"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: boolean): boolean
public "getBlockEntity"(): $BlockEntity
public "getCurrentBlock"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "tag"(): $CompoundTag
get "flag"(): integer
get "replacedBlock"(): $BlockState
get "blockEntity"(): $BlockEntity
get "currentBlock"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSnapshot$Type = ($BlockSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSnapshot_ = $BlockSnapshot$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BiomeModifier$Phase extends $Enum<($BiomeModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase
static readonly "ADD": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase


public static "values"(): ($BiomeModifier$Phase)[]
public static "valueOf"(arg0: string): $BiomeModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($BiomeModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier$Phase_ = $BiomeModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/eventbus/$ListenerList" {
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $ListenerList {

constructor()
constructor(arg0: $ListenerList$Type)

public "unregister"(arg0: integer, arg1: $IEventListener$Type): void
public "register"(arg0: integer, arg1: $EventPriority$Type, arg2: $IEventListener$Type): void
public static "unregisterAll"(arg0: integer, arg1: $IEventListener$Type): void
public "getListeners"(arg0: integer): ($IEventListener)[]
public static "clearBusID"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerList$Type = ($ListenerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListenerList_ = $ListenerList$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IFluidHandler$FluidAction extends $Enum<($IFluidHandler$FluidAction)> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction


public static "values"(): ($IFluidHandler$FluidAction)[]
public static "valueOf"(arg0: string): $IFluidHandler$FluidAction
public "execute"(): boolean
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$FluidAction$Type = (("execute") | ("simulate")) | ($IFluidHandler$FluidAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler$FluidAction_ = $IFluidHandler$FluidAction$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkDirection" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$NetworkEvent, $NetworkEvent$Type} from "packages/net/minecraftforge/network/$NetworkEvent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICustomPacket, $ICustomPacket$Type} from "packages/net/minecraftforge/network/$ICustomPacket"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $NetworkDirection extends $Enum<($NetworkDirection)> {
static readonly "PLAY_TO_SERVER": $NetworkDirection
static readonly "PLAY_TO_CLIENT": $NetworkDirection
static readonly "LOGIN_TO_SERVER": $NetworkDirection
static readonly "LOGIN_TO_CLIENT": $NetworkDirection


public static "values"(): ($NetworkDirection)[]
public static "valueOf"(arg0: string): $NetworkDirection
public "buildPacket"<T extends $Packet<(any)>>(arg0: $Pair$Type<($FriendlyByteBuf$Type), (integer)>, arg1: $ResourceLocation$Type): $ICustomPacket<(T)>
public "getReceptionSide"(): $LogicalSide
public static "directionFor"<T extends $ICustomPacket<(any)>>(arg0: $Class$Type<(T)>): $NetworkDirection
public "getOriginationSide"(): $LogicalSide
public "reply"(): $NetworkDirection
public "getEvent"(arg0: $ICustomPacket$Type<(any)>, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): $NetworkEvent
get "receptionSide"(): $LogicalSide
get "originationSide"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDirection$Type = (("play_to_server") | ("login_to_client") | ("play_to_client") | ("login_to_server")) | ($NetworkDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDirection_ = $NetworkDirection$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITagManager" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$IReverseTag, $IReverseTag$Type} from "packages/net/minecraftforge/registries/tags/$IReverseTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITagManager<V> extends $Iterable<($ITag<(V)>)> {

 "getTag"(arg0: $TagKey$Type<(V)>): $ITag<(V)>
 "stream"(): $Stream<($ITag<(V)>)>
 "addOptionalTagDefaults"(arg0: $TagKey$Type<(V)>, arg1: $Set$Type<(any)>): void
 "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(V)>
 "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(V)>
 "getTagNames"(): $Stream<($TagKey<(V)>)>
 "isKnownTagName"(arg0: $TagKey$Type<(V)>): boolean
 "getReverseTag"(arg0: V): $Optional<($IReverseTag<(V)>)>
 "iterator"(): $Iterator<($ITag<(V)>)>
 "spliterator"(): $Spliterator<($ITag<(V)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITagManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagManager$Type<V> = ($ITagManager<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagManager_<V> = $ITagManager$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel" {
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ConfiguredModel {
static readonly "DEFAULT_WEIGHT": integer
readonly "model": $ModelFile
readonly "rotationX": integer
readonly "rotationY": integer
readonly "uvLock": boolean
readonly "weight": integer

constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: $ModelFile$Type)
constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: integer)

public static "builder"(): $ConfiguredModel$Builder<(any)>
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean, arg3: integer): ($ConfiguredModel)[]
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean): ($ConfiguredModel)[]
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean): ($ConfiguredModel)[]
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean, arg2: integer): ($ConfiguredModel)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Type = ($ConfiguredModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel_ = $ConfiguredModel$Type;
}}
declare module "packages/net/minecraftforge/fml/$ModLoadingStage" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DeferredWorkQueue, $DeferredWorkQueue$Type} from "packages/net/minecraftforge/fml/$DeferredWorkQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingStage extends $Enum<($ModLoadingStage)> {
static readonly "ERROR": $ModLoadingStage
static readonly "VALIDATE": $ModLoadingStage
static readonly "CONSTRUCT": $ModLoadingStage
static readonly "COMMON_SETUP": $ModLoadingStage
static readonly "SIDED_SETUP": $ModLoadingStage
static readonly "ENQUEUE_IMC": $ModLoadingStage
static readonly "PROCESS_IMC": $ModLoadingStage
static readonly "COMPLETE": $ModLoadingStage
static readonly "DONE": $ModLoadingStage


public static "values"(): ($ModLoadingStage)[]
public static "valueOf"(arg0: string): $ModLoadingStage
public "getDeferredWorkQueue"(): $DeferredWorkQueue
public "currentState"(arg0: $Throwable$Type): $ModLoadingStage
get "deferredWorkQueue"(): $DeferredWorkQueue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLoadingStage$Type = (("sided_setup") | ("enqueue_imc") | ("process_imc") | ("construct") | ("error") | ("common_setup") | ("complete") | ("done") | ("validate")) | ($ModLoadingStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLoadingStage_ = $ModLoadingStage$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile" {
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ModelFile$ExistingModelFile extends $ModelFile {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$ExistingModelFile$Type = ($ModelFile$ExistingModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$ExistingModelFile_ = $ModelFile$ExistingModelFile$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$AdvancementEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export class $AdvancementEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $Advancement$Type)

public "getAdvancement"(): $Advancement
public "getListenerList"(): $ListenerList
get "advancement"(): $Advancement
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$Type = ($AdvancementEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementEvent_ = $AdvancementEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MissingMappingsEvent$Mapping<T> implements $Comparable<($MissingMappingsEvent$Mapping<(T)>)> {

constructor(arg0: $IForgeRegistry$Type<(T)>, arg1: $IForgeRegistry$Type<(T)>, arg2: $ResourceLocation$Type, arg3: integer)

public "warn"(): void
public "compareTo"(arg0: $MissingMappingsEvent$Mapping$Type<(T)>): integer
public "getKey"(): $ResourceLocation
public "getId"(): integer
public "fail"(): void
public "ignore"(): void
public "getRegistry"(): $IForgeRegistry<(T)>
public "remap"(arg0: T): void
get "key"(): $ResourceLocation
get "id"(): integer
get "registry"(): $IForgeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Mapping$Type<T> = ($MissingMappingsEvent$Mapping<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent$Mapping_<T> = $MissingMappingsEvent$Mapping$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter" {
import {$Message, $Message$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ProgressMeter {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $Message$Type)

public "steps"(): integer
public "complete"(): void
public "label"(): $Message
public "label"(arg0: string): void
public "name"(): string
public "increment"(): void
public "current"(): integer
public "progress"(): float
public "setAbsolute"(arg0: integer): void
set "absolute"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMeter$Type = ($ProgressMeter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressMeter_ = $ProgressMeter$Type;
}}
declare module "packages/net/minecraftforge/fml/$LogicalSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<($LogicalSide)> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide


public static "values"(): ($LogicalSide)[]
public static "valueOf"(arg0: string): $LogicalSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalSide$Type = (("server") | ("client")) | ($LogicalSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicalSide_ = $LogicalSide$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"

export class $GatherDataEvent$DataGeneratorConfig {

constructor(arg0: $Set$Type<(string)>, arg1: $Path$Type, arg2: $Collection$Type<($Path$Type)>, arg3: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean)

public "getInputs"(): $Collection<($Path)>
public "makeGenerator"(arg0: $Function$Type<($Path$Type), ($Path$Type)>, arg1: boolean): $DataGenerator
public "getMods"(): $Set<(string)>
public "isFlat"(): boolean
public "runAll"(): void
get "inputs"(): $Collection<($Path)>
get "mods"(): $Set<(string)>
get "flat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataGeneratorConfig$Type = ($GatherDataEvent$DataGeneratorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent$DataGeneratorConfig_ = $GatherDataEvent$DataGeneratorConfig$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegisterEvent$RegisterHelper<T> {

 "register"(arg0: string, arg1: T): void
 "register"(arg0: $ResourceKey$Type<(T)>, arg1: T): void
 "register"(arg0: $ResourceLocation$Type, arg1: T): void

(arg0: string, arg1: T): void
}

export namespace $RegisterEvent$RegisterHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$RegisterHelper$Type<T> = ($RegisterEvent$RegisterHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent$RegisterHelper_<T> = $RegisterEvent$RegisterHelper$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry" {
import {$HandshakeMessages$LoginIndexedMessage, $HandshakeMessages$LoginIndexedMessage$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HandshakeMessages$S2CRegistry extends $HandshakeMessages$LoginIndexedMessage {

constructor(arg0: $ResourceLocation$Type, arg1: $ForgeRegistry$Snapshot$Type)

public static "decode"(arg0: $FriendlyByteBuf$Type): $HandshakeMessages$S2CRegistry
public "getSnapshot"(): $ForgeRegistry$Snapshot
public "getRegistryName"(): $ResourceLocation
public "hasSnapshot"(): boolean
get "snapshot"(): $ForgeRegistry$Snapshot
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$S2CRegistry$Type = ($HandshakeMessages$S2CRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$S2CRegistry_ = $HandshakeMessages$S2CRegistry$Type;
}}
declare module "packages/net/minecraftforge/client/$RenderTypeGroup" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$Type, entity: $RenderType$Type, entityFabulous: $RenderType$Type)
constructor(arg0: $RenderType$Type, arg1: $RenderType$Type)

public "entity"(): $RenderType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "block"(): $RenderType
public "entityFabulous"(): $RenderType
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeGroup$Type = ($RenderTypeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeGroup_ = $RenderTypeGroup$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ModelBuilder$FaceRotation extends $Enum<($ModelBuilder$FaceRotation)> {
static readonly "ZERO": $ModelBuilder$FaceRotation
static readonly "CLOCKWISE_90": $ModelBuilder$FaceRotation
static readonly "UPSIDE_DOWN": $ModelBuilder$FaceRotation
static readonly "COUNTERCLOCKWISE_90": $ModelBuilder$FaceRotation


public static "values"(): ($ModelBuilder$FaceRotation)[]
public static "valueOf"(arg0: string): $ModelBuilder$FaceRotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$FaceRotation$Type = (("zero") | ("clockwise_90") | ("counterclockwise_90") | ("upside_down")) | ($ModelBuilder$FaceRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$FaceRotation_ = $ModelBuilder$FaceRotation$Type;
}}
declare module "packages/net/minecraftforge/network/$IContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
 "create"(arg0: integer, arg1: $Inventory$Type): T

(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
}

export namespace $IContainerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerFactory$Type<T> = ($IContainerFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerFactory_<T> = $IContainerFactory$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $CustomLoaderBuilder<T extends $ModelBuilder<(T)>> {


public "end"(): T
public "toJson"(arg0: $JsonObject$Type): $JsonObject
public "visibility"(arg0: string, arg1: boolean): $CustomLoaderBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomLoaderBuilder$Type<T> = ($CustomLoaderBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomLoaderBuilder_<T> = $CustomLoaderBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventListener" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export interface $IEventListener {

 "invoke"(arg0: $Event$Type): void
 "listenerName"(): string

(arg0: $Event$Type): void
}

export namespace $IEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventListener$Type = ($IEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventListener_ = $IEventListener$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData$Builder" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $ModelData$Builder {


public "with"<T>(arg0: $ModelProperty$Type<(T)>, arg1: T): $ModelData$Builder
public "build"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Builder$Type = ($ModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData$Builder_ = $ModelData$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder" {
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $ConfiguredModel$Builder<T> {


public "build"(): ($ConfiguredModel)[]
public "weight"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "rotationX"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "rotationY"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "uvLock"(arg0: boolean): $ConfiguredModel$Builder<(T)>
public "addModel"(): T
public "modelFile"(arg0: $ModelFile$Type): $ConfiguredModel$Builder<(T)>
public "nextModel"(): $ConfiguredModel$Builder<(T)>
public "buildLast"(): $ConfiguredModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Builder$Type<T> = ($ConfiguredModel$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel$Builder_<T> = $ConfiguredModel$Builder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IMinecartCollisionHandler" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMinecartCollisionHandler {

 "getBoundingBox"(arg0: $AbstractMinecart$Type): $AABB
 "getCollisionBox"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): $AABB
 "getMinecartCollisionBox"(arg0: $AbstractMinecart$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): void
}

export namespace $IMinecartCollisionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecartCollisionHandler$Type = ($IMinecartCollisionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecartCollisionHandler_ = $IMinecartCollisionHandler$Type;
}}
declare module "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MobSpawnSettings$Builder, $MobSpawnSettings$Builder$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
readonly "spawners": $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
readonly "mobSpawnCosts": $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
 "creatureGenerationProbability": float

constructor(arg0: $MobSpawnSettings$Type)

public "getProbability"(): float
public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
public "getSpawnerTypes"(): $Set<($MobCategory)>
public "getEntityTypes"(): $Set<($EntityType<(any)>)>
public "getSpawner"(arg0: $MobCategory$Type): $List<($MobSpawnSettings$SpawnerData)>
public "getCost"(arg0: $EntityType$Type<(any)>): $MobSpawnSettings$MobSpawnCost
get "probability"(): float
get "spawnerTypes"(): $Set<($MobCategory)>
get "entityTypes"(): $Set<($EntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilder$Type = ($MobSpawnSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilder_ = $MobSpawnSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"

export interface $IEventBusInvokeDispatcher {

 "invoke"(arg0: $IEventListener$Type, arg1: $Event$Type): void

(arg0: $IEventListener$Type, arg1: $Event$Type): void
}

export namespace $IEventBusInvokeDispatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBusInvokeDispatcher$Type = ($IEventBusInvokeDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBusInvokeDispatcher_ = $IEventBusInvokeDispatcher$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint<T extends $Record> {

}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$Type<T> = ($IExtensionPoint<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint_<T> = $IExtensionPoint$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ServerStatusPing$ChannelData extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing$ChannelData)>

constructor(res: $ResourceLocation$Type, version: string, required: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): string
public "hashCode"(): integer
public "res"(): $ResourceLocation
public "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$ChannelData$Type = ($ServerStatusPing$ChannelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing$ChannelData_ = $ServerStatusPing$ChannelData$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAbstractMinecart" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeAbstractMinecart {

 "getCurrentCartSpeedCapOnRail"(): float
 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "getComparatorLevel"(): integer
 "getMaxCartSpeedOnRail"(): float
 "canBeRidden"(): boolean
 "getMaxSpeedAirLateral"(): float
 "getMaxSpeedAirVertical"(): float
 "getSlopeAdjustment"(): double
 "shouldDoRailFunctions"(): boolean
 "moveMinecartOnRail"(arg0: $BlockPos$Type): void
 "isPoweredCart"(): boolean
 "setCanUseRail"(arg0: boolean): void
 "setMaxSpeedAirLateral"(arg0: float): void
 "setMaxSpeedAirVertical"(arg0: float): void
 "getMaxSpeedWithRail"(): double
 "getCurrentRailPosition"(): $BlockPos
 "canUseRail"(): boolean
 "getDragAir"(): double
 "setDragAir"(arg0: double): void
}

export namespace $IForgeAbstractMinecart {
const DEFAULT_MAX_SPEED_AIR_LATERAL: float
const DEFAULT_MAX_SPEED_AIR_VERTICAL: float
const DEFAULT_AIR_DRAG: double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAbstractMinecart$Type = ($IForgeAbstractMinecart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAbstractMinecart_ = $IForgeAbstractMinecart$Type;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent$Unload" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Unload extends $LevelEvent {

constructor(arg0: $LevelAccessor$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Unload$Type = ($LevelEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent$Unload_ = $LevelEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/registries/$DeferredRegister" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RegistryBuilder, $RegistryBuilder$Type} from "packages/net/minecraftforge/registries/$RegistryBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $DeferredRegister<T> {


public "register"<I extends T>(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<(I)>
public "register"(arg0: $IEventBus$Type): void
public static "create"<B>(arg0: $IForgeRegistry$Type<(B)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
public "getEntries"(): $Collection<($RegistryObject<(T)>)>
public "makeRegistry"(arg0: $Supplier$Type<($RegistryBuilder$Type<(T)>)>): $Supplier<($IForgeRegistry<(T)>)>
public "addOptionalTagDefaults"(arg0: $TagKey$Type<(T)>, arg1: $Set$Type<(any)>): void
public "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "createOptionalTagKey"(arg0: string, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(T)>
public "createTagKey"(arg0: string): $TagKey<(T)>
public "getRegistryName"(): $ResourceLocation
public "getRegistryKey"(): $ResourceKey<(any)>
public static "createOptional"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public static "createOptional"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
get "entries"(): $Collection<($RegistryObject<(T)>)>
get "registryName"(): $ResourceLocation
get "registryKey"(): $ResourceKey<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Type<T> = ($DeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister_<T> = $DeferredRegister$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLevelSummary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeLevelSummary {

 "isLifecycleExperimental"(): boolean
}

export namespace $IForgeLevelSummary {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLevelSummary$Type = ($IForgeLevelSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLevelSummary_ = $IForgeLevelSummary$Type;
}}
declare module "packages/net/minecraftforge/items/$SlotItemHandler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $SlotItemHandler extends $Slot {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: integer)

public "initialize"(arg0: $ItemStack$Type): void
public "getItemHandler"(): $IItemHandler
public "remove"(arg0: integer): $ItemStack
public "getItem"(): $ItemStack
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "mayPickup"(arg0: $Player$Type): boolean
public "set"(arg0: $ItemStack$Type): void
public "getMaxStackSize"(): integer
public "onQuickCraft"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
get "itemHandler"(): $IItemHandler
get "item"(): $ItemStack
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotItemHandler$Type = ($SlotItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotItemHandler_ = $SlotItemHandler$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry$Snapshot {
readonly "ids": $Object2IntMap<($ResourceLocation)>
readonly "aliases": $Map<($ResourceLocation), ($ResourceLocation)>
readonly "blocked": $IntSet
readonly "overrides": $Map<($ResourceLocation), (string)>

constructor()

public "write"(): $CompoundTag
public static "read"(arg0: $FriendlyByteBuf$Type): $ForgeRegistry$Snapshot
public static "read"(arg0: $CompoundTag$Type): $ForgeRegistry$Snapshot
public "getPacketData"(): $FriendlyByteBuf
get "packetData"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Snapshot$Type = ($ForgeRegistry$Snapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry$Snapshot_ = $ForgeRegistry$Snapshot$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo" {
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModFileInfo$LanguageSpec, $IModFileInfo$LanguageSpec$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFileInfo {

 "moduleName"(): string
 "getFile"(): $IModFile
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "versionString"(): string
 "getFileProperties"(): $Map<(string), (any)>
 "showAsResourcePack"(): boolean
 "usesServices"(): $List<(string)>
 "getConfig"(): $IConfigurable
 "getMods"(): $List<($IModInfo)>
 "getLicense"(): string
}

export namespace $IModFileInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$Type = ($IModFileInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo_ = $IModFileInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$MissingFactory<V> {

 "createMissing"(arg0: $ResourceLocation$Type, arg1: boolean): V

(arg0: $ResourceLocation$Type, arg1: boolean): V
}

export namespace $IForgeRegistry$MissingFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$MissingFactory$Type<V> = ($IForgeRegistry$MissingFactory<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$MissingFactory_<V> = $IForgeRegistry$MissingFactory$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CommentedFileConfig, $CommentedFileConfig$Type} from "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfig"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConfigFileTypeHandler {

constructor()

public "unload"(arg0: $Path$Type, arg1: $ModConfig$Type): void
public "reader"(arg0: $Path$Type): $Function<($ModConfig), ($CommentedFileConfig)>
public static "backUpConfig"(arg0: $CommentedFileConfig$Type, arg1: integer): void
public static "backUpConfig"(arg0: $CommentedFileConfig$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFileTypeHandler$Type = ($ConfigFileTypeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFileTypeHandler_ = $ConfigFileTypeHandler$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMenuType" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IForgeMenuType<T> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T

(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}

export namespace $IForgeMenuType {
function create<T>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMenuType$Type<T> = ($IForgeMenuType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMenuType_<T> = $IForgeMenuType$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureModifier, $StructureModifier$Type} from "packages/net/minecraftforge/common/world/$StructureModifier"

export class $ModifiableStructureInfo {

constructor(arg0: $ModifiableStructureInfo$StructureInfo$Type)

public "get"(): $ModifiableStructureInfo$StructureInfo
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "applyStructureModifiers"(arg0: $Holder$Type<($Structure$Type)>, arg1: $List$Type<($StructureModifier$Type)>): void
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$Type = ($ModifiableStructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo_ = $ModifiableStructureInfo$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $FluidType$Properties {


public static "create"(): $FluidType$Properties
public "adjacentPathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "fallDistanceModifier"(arg0: float): $FluidType$Properties
public "canConvertToSource"(arg0: boolean): $FluidType$Properties
public "supportsBoating"(arg0: boolean): $FluidType$Properties
public "temperature"(arg0: integer): $FluidType$Properties
public "descriptionId"(arg0: string): $FluidType$Properties
public "canExtinguish"(arg0: boolean): $FluidType$Properties
public "canPushEntity"(arg0: boolean): $FluidType$Properties
public "motionScale"(arg0: double): $FluidType$Properties
public "canHydrate"(arg0: boolean): $FluidType$Properties
public "canSwim"(arg0: boolean): $FluidType$Properties
public "rarity"(arg0: $Rarity$Type): $FluidType$Properties
public "sound"(arg0: $SoundAction$Type, arg1: $SoundEvent$Type): $FluidType$Properties
public "lightLevel"(arg0: integer): $FluidType$Properties
public "viscosity"(arg0: integer): $FluidType$Properties
public "canDrown"(arg0: boolean): $FluidType$Properties
public "pathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "density"(arg0: integer): $FluidType$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Properties$Type = ($FluidType$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType$Properties_ = $FluidType$Properties$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$VariantBlockStateBuilder$PartialBlockstate, $VariantBlockStateBuilder$PartialBlockstate$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VariantBlockStateBuilder implements $IGeneratedBlockState {


public "getOwner"(): $Block
public "forAllStates"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>): $VariantBlockStateBuilder
public "forAllStatesExcept"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>, ...arg1: ($Property$Type<(any)>)[]): $VariantBlockStateBuilder
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "toJson"(): $JsonObject
public "getModels"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
public "setModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "addModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
get "owner"(): $Block
get "models"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$Type = ($VariantBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder_ = $VariantBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader" {
import {$ForgeTextureMetadata, $ForgeTextureMetadata$Type} from "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata"
import {$AnimationMetadataSection, $AnimationMetadataSection$Type} from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FrameSize, $FrameSize$Type} from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ITextureAtlasSpriteLoader {

 "loadContents"(arg0: $ResourceLocation$Type, arg1: $Resource$Type, arg2: $FrameSize$Type, arg3: $NativeImage$Type, arg4: $AnimationMetadataSection$Type, arg5: $ForgeTextureMetadata$Type): $SpriteContents
 "makeSprite"(arg0: $ResourceLocation$Type, arg1: $SpriteContents$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $TextureAtlasSprite
}

export namespace $ITextureAtlasSpriteLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextureAtlasSpriteLoader$Type = ($ITextureAtlasSpriteLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextureAtlasSpriteLoader_ = $ITextureAtlasSpriteLoader$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeVertexConsumer {

 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
 "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}

export namespace $IForgeVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeVertexConsumer$Type = ($IForgeVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeVertexConsumer_ = $IForgeVertexConsumer$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$BooleanValue extends $ForgeConfigSpec$ConfigValue<(boolean)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$BooleanValue$Type = ($ForgeConfigSpec$BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$BooleanValue_ = $ForgeConfigSpec$BooleanValue$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$GenericEvent" {
import {$IGenericEvent, $IGenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$IGenericEvent"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $GenericEvent<T> extends $Event implements $IGenericEvent<(T)> {

constructor()

public "getGenericType"(): $Type
get "genericType"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericEvent$Type<T> = ($GenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericEvent_<T> = $GenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLevel" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLevel extends $ICapabilityProvider {

 "increaseMaxEntityRadius"(arg0: double): double
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLevel$Type = ($IForgeLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLevel_ = $IForgeLevel$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IForgeHolderSet$SerializationType extends $Enum<($IForgeHolderSet$SerializationType)> {
static readonly "UNKNOWN": $IForgeHolderSet$SerializationType
static readonly "STRING": $IForgeHolderSet$SerializationType
static readonly "LIST": $IForgeHolderSet$SerializationType
static readonly "OBJECT": $IForgeHolderSet$SerializationType


public static "values"(): ($IForgeHolderSet$SerializationType)[]
public static "valueOf"(arg0: string): $IForgeHolderSet$SerializationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$SerializationType$Type = (("string") | ("list") | ("unknown") | ("object")) | ($IForgeHolderSet$SerializationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet$SerializationType_ = $IForgeHolderSet$SerializationType$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryInternal" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryInternal<V> extends $IForgeRegistry<(V)> {

 "getValue"(arg0: integer): V
 "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
 "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
 "tags"(): $ITagManager<(V)>
 "getKeys"(): $Set<($ResourceLocation)>
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: string, arg1: V): void
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getRegistryName"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryInternal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryInternal$Type<V> = ($IForgeRegistryInternal<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryInternal_<V> = $IForgeRegistryInternal$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight"
import {$ModelBuilder$RootTransformsBuilder, $ModelBuilder$RootTransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$CustomLoaderBuilder, $CustomLoaderBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"

export class $ModelBuilder<T extends $ModelBuilder<(T)>> extends $ModelFile {


public "parent"(arg0: $ModelFile$Type): T
public "ao"(arg0: boolean): T
public "element"(): $ModelBuilder$ElementBuilder<>
public "element"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "transforms"(): $ModelBuilder$TransformsBuilder<>
public "customLoader"<L extends $CustomLoaderBuilder<(T)>>(arg0: $BiFunction$Type<(T), ($ExistingFileHelper$Type), (L)>): L
public "rootTransforms"(): $ModelBuilder$RootTransformsBuilder<>
public "getElementCount"(): integer
public "texture"(arg0: string, arg1: $ResourceLocation$Type): T
public "texture"(arg0: string, arg1: string): T
public "toJson"(): $JsonObject
public "renderType"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): T
public "renderType"(arg0: $ResourceLocation$Type): T
public "renderType"(arg0: string): T
public "renderType"(arg0: string, arg1: string): T
public "guiLight"(arg0: $BlockModel$GuiLight$Type): T
get "elementCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$Type<T> = ($ModelBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder_<T> = $ModelBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidHandler {

 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
}

export namespace $IFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$Type = ($IFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler_ = $IFluidHandler$Type;
}}
declare module "packages/net/minecraftforge/items/$IItemHandler" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IItemHandler extends $InventoryKJS {

 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
}

export namespace $IItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$Type = ($IItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandler_ = $IItemHandler$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $EnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "parse"(arg0: $StringReader$Type): T
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $EnumArgument<(R)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Type<T> = ($EnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument_<T> = $EnumArgument$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$ModelFile$ExistingModelFile, $ModelFile$ExistingModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelProvider<T extends $ModelBuilder<(T)>> implements $DataProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $Function$Type<($ResourceLocation$Type), (T)>, arg4: $ExistingFileHelper$Type)
constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $BiFunction$Type<($ResourceLocation$Type), ($ExistingFileHelper$Type), (T)>, arg4: $ExistingFileHelper$Type)

public "sign"(arg0: string, arg1: $ResourceLocation$Type): T
public "nested"(): T
public "getExistingFile"(arg0: $ResourceLocation$Type): $ModelFile$ExistingModelFile
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: string, arg3: $ResourceLocation$Type): T
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "cubeBottomTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cubeColumnHorizontal"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "orientableVertical"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "orientableWithBottom"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): T
public "stairsOuter"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "stairsInner"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "buttonPressed"(arg0: string, arg1: $ResourceLocation$Type): T
public "buttonInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "pressurePlate"(arg0: string, arg1: $ResourceLocation$Type): T
public "pressurePlateDown"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateWallOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSideTall"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "paneSideAlt"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneNoSideAlt"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "trapdoorBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "withExistingParent"(arg0: string, arg1: $ResourceLocation$Type): T
public "withExistingParent"(arg0: string, arg1: string): T
public "getBuilder"(arg0: string): T
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "button"(arg0: string, arg1: $ResourceLocation$Type): T
public "leaves"(arg0: string, arg1: $ResourceLocation$Type): T
public "torch"(arg0: string, arg1: $ResourceLocation$Type): T
public "cross"(arg0: string, arg1: $ResourceLocation$Type): T
public "stairs"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cubeAll"(arg0: string, arg1: $ResourceLocation$Type): T
public "slabTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cube"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type, arg6: $ResourceLocation$Type): T
public "mcLoc"(arg0: string): $ResourceLocation
public "modLoc"(arg0: string): $ResourceLocation
public "cubeTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "cubeColumn"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "orientable"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "crop"(arg0: string, arg1: $ResourceLocation$Type): T
public "slab"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "fencePost"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGate"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallPost"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "panePost"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneSide"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneNoSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "torchWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "carpet"(arg0: string, arg1: $ResourceLocation$Type): T
public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProvider$Type<T> = ($ModelProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProvider_<T> = $ModelProvider$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$ConfigValue<T> implements $Supplier<(T)> {


public "get"(): T
public "next"(): $ForgeConfigSpec$Builder
public "getDefault"(): T
public "set"(arg0: T): void
public "save"(): void
public "getPath"(): $List<(string)>
public "clearCache"(): void
get "default"(): T
get "path"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ConfigValue$Type<T> = ($ForgeConfigSpec$ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ConfigValue_<T> = $ForgeConfigSpec$ConfigValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigSpec" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec<T extends $IConfigSpec<(T)>> extends $UnmodifiableConfig {

 "self"(): T
 "isCorrecting"(): boolean
 "acceptConfig"(arg0: $CommentedConfig$Type): void
 "afterReload"(): void
 "isCorrect"(arg0: $CommentedConfig$Type): boolean
 "correct"(arg0: $CommentedConfig$Type): integer
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$Type<(string)>): T
 "getByte"(arg0: $List$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$Type<(string)>): integer
 "getLong"(arg0: string): long
 "getLong"(arg0: $List$Type<(string)>): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: $List$Type<(string)>): boolean
 "contains"(arg0: string): boolean
 "entrySet"(): $Set<(any)>
 "isNull"(arg0: $List$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "configFormat"(): $ConfigFormat<(any)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: string): $OptionalInt
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getOptionalLong"(arg0: string): $OptionalLong
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getShortOrElse"(arg0: string, arg1: short): short
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "getCharOrElse"(arg0: string, arg1: character): character
 "valueMap"(): $Map<(string), (any)>
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$Type<T> = ($IConfigSpec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigSpec_<T> = $IConfigSpec$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IPlantable" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPlantable {

 "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
 "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
}

export namespace $IPlantable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlantable$Type = ($IPlantable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlantable_ = $IPlantable$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ElementType, $ElementType$Type} from "packages/java/lang/annotation/$ElementType"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModFileScanData$AnnotationData extends $Record {

constructor(annotationType: $Type$Type, targetType: $ElementType$Type, clazz: $Type$Type, memberName: string, annotationData: $Map$Type<(string), (any)>)

public "clazz"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotationData"(): $Map<(string), (any)>
public "annotationType"(): $Type
public "targetType"(): $ElementType
public "memberName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$AnnotationData$Type = ($ModFileScanData$AnnotationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$AnnotationData_ = $ModFileScanData$AnnotationData$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeDimensionSpecialEffects" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$LightTexture, $LightTexture$Type} from "packages/net/minecraft/client/renderer/$LightTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeDimensionSpecialEffects {

 "adjustLightmapColors"(arg0: $ClientLevel$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$Type): void
 "renderClouds"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$Type): boolean
 "renderSnowAndRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $LightTexture$Type, arg4: double, arg5: double, arg6: double): boolean
 "renderSky"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: $Camera$Type, arg5: $Matrix4f$Type, arg6: boolean, arg7: $Runnable$Type): boolean
 "tickRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: $Camera$Type): boolean
}

export namespace $IForgeDimensionSpecialEffects {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDimensionSpecialEffects$Type = ($IForgeDimensionSpecialEffects);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDimensionSpecialEffects_ = $IForgeDimensionSpecialEffects$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ModelData$Builder, $ModelData$Builder$Type} from "packages/net/minecraftforge/client/model/data/$ModelData$Builder"

export class $ModelData {
static readonly "EMPTY": $ModelData


public "get"<T>(arg0: $ModelProperty$Type<(T)>): T
public static "builder"(): $ModelData$Builder
public "getProperties"(): $Set<($ModelProperty<(any)>)>
public "has"(arg0: $ModelProperty$Type<(any)>): boolean
public "derive"(): $ModelData$Builder
get "properties"(): $Set<($ModelProperty<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Type = ($ModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData_ = $ModelData$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type)

public "getUseBlock"(): $Event$Result
public "setUseBlock"(arg0: $Event$Result$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "setCanceled"(arg0: boolean): void
public "getUseItem"(): $Event$Result
public "getHitVec"(): $BlockHitResult
public "setUseItem"(arg0: $Event$Result$Type): void
get "useBlock"(): $Event$Result
set "useBlock"(value: $Event$Result$Type)
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
set "canceled"(value: boolean)
get "useItem"(): $Event$Result
get "hitVec"(): $BlockHitResult
set "useItem"(value: $Event$Result$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickBlock$Type = ($PlayerInteractEvent$RightClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$RightClickBlock_ = $PlayerInteractEvent$RightClickBlock$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeDispensibleContainerItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeDispensibleContainerItem {

 "emptyContents"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type, arg4: $ItemStack$Type): boolean
}

export namespace $IForgeDispensibleContainerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDispensibleContainerItem$Type = ($IForgeDispensibleContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDispensibleContainerItem_ = $IForgeDispensibleContainerItem$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<T, U, V> {

 "or"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>
 "and"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>
 "negate"(): $TriPredicate<(T), (U), (V)>
 "test"(arg0: T, arg1: U, arg2: V): boolean

(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>
}

export namespace $TriPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$Type<T, U, V> = ($TriPredicate<(T), (U), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<T, U, V> = $TriPredicate$Type<(T), (U), (V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeGuiGraphics" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeGuiGraphics {

 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
}

export namespace $IForgeGuiGraphics {
const DEFAULT_BACKGROUND_COLOR: integer
const DEFAULT_BORDER_COLOR_START: integer
const DEFAULT_BORDER_COLOR_END: integer
const UNDO_CHAR: string
const RESET_CHAR: string
const VALID: string
const INVALID: string
const TEXT_COLOR_CODES: (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeGuiGraphics$Type = ($IForgeGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeGuiGraphics_ = $IForgeGuiGraphics$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent extends $Event {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Type$Type, arg1: $LogicalSide$Type, arg2: $TickEvent$Phase$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type = ($TickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent_ = $TickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$EnumValue<T extends $Enum<(T)>> extends $ForgeConfigSpec$ConfigValue<(T)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$EnumValue$Type<T> = ($ForgeConfigSpec$EnumValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$EnumValue_<T> = $ForgeConfigSpec$EnumValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/$ModContainer" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ProgressMeter, $ProgressMeter$Type} from "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IExtensionPoint$DisplayTest, $IExtensionPoint$DisplayTest$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IModStateTransition$EventGenerator, $IModStateTransition$EventGenerator$Type} from "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {

constructor(arg0: $IModInfo$Type)

public "matches"(arg0: any): boolean
public "getNamespace"(): string
public "dispatchConfigEvent"(arg0: $IConfigEvent$Type): void
public "registerExtensionPoint"<T extends ($Record) & ($IExtensionPoint<(T)>)>(arg0: $Class$Type<(any)>, arg1: $Supplier$Type<(T)>): void
public "registerDisplayTest"(arg0: $Supplier$Type<($IExtensionPoint$DisplayTest$Type)>): void
public "registerDisplayTest"(arg0: $IExtensionPoint$DisplayTest$Type): void
public "registerDisplayTest"(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "registerDisplayTest"(arg0: $Supplier$Type<(string)>, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "getCustomExtension"<T extends $Record>(arg0: $Class$Type<(any)>): $Optional<(T)>
public "getCurrentState"(): $ModLoadingStage
public static "buildTransitionHandler"<T extends ($Event) & ($IModBusEvent)>(arg0: $ModContainer$Type, arg1: $IModStateTransition$EventGenerator$Type<(T)>, arg2: $ProgressMeter$Type, arg3: $BiFunction$Type<($ModLoadingStage$Type), ($Throwable$Type), ($ModLoadingStage$Type)>, arg4: $Executor$Type): $CompletableFuture<(void)>
public "addConfig"(arg0: $ModConfig$Type): void
public "getModId"(): string
public "getModInfo"(): $IModInfo
public "getMod"(): any
get "namespace"(): string
get "currentState"(): $ModLoadingStage
get "modId"(): string
get "modInfo"(): $IModInfo
get "mod"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainer$Type = ($ModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModContainer_ = $ModContainer$Type;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$TerrainAdjustment, $TerrainAdjustment$Type} from "packages/net/minecraft/world/level/levelgen/structure/$TerrainAdjustment"
import {$StructureSettingsBuilder$StructureSpawnOverrideBuilder, $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $StructureSettingsBuilder {


public "build"(): $Structure$StructureSettings
public static "copyOf"(arg0: $Structure$StructureSettings$Type): $StructureSettingsBuilder
public "removeSpawnOverrides"(arg0: $MobCategory$Type): void
public "getOrAddSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "setDecorationStep"(arg0: $GenerationStep$Decoration$Type): void
public "getDecorationStep"(): $GenerationStep$Decoration
public "getSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getTerrainAdaptation"(): $TerrainAdjustment
public "setTerrainAdaptation"(arg0: $TerrainAdjustment$Type): void
public "getBiomes"(): $HolderSet<($Biome)>
public "setBiomes"(arg0: $HolderSet$Type<($Biome$Type)>): void
set "decorationStep"(value: $GenerationStep$Decoration$Type)
get "decorationStep"(): $GenerationStep$Decoration
get "terrainAdaptation"(): $TerrainAdjustment
set "terrainAdaptation"(value: $TerrainAdjustment$Type)
get "biomes"(): $HolderSet<($Biome)>
set "biomes"(value: $HolderSet$Type<($Biome$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$Type = ($StructureSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder_ = $StructureSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEnchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export interface $IForgeEnchantment {

 "getDamageBonus"(arg0: integer, arg1: $MobType$Type, arg2: $ItemStack$Type): float
 "allowedInCreativeTab"(arg0: $Item$Type, arg1: $Set$Type<($EnchantmentCategory$Type)>): boolean
}

export namespace $IForgeEnchantment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEnchantment$Type = ($IForgeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEnchantment_ = $IForgeEnchantment$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$Capability" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $Capability<T> {


public "getName"(): string
public "isRegistered"(): boolean
public "addListener"(arg0: $Consumer$Type<($Capability$Type<(T)>)>): $Capability<(T)>
public "orEmpty"<R>(arg0: $Capability$Type<(R)>, arg1: $LazyOptional$Type<(T)>): $LazyOptional<(R)>
get "name"(): string
get "registered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Capability$Type<T> = ($Capability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Capability_<T> = $Capability$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $BlockStateProvider$ConfiguredModelList {

constructor(...arg0: ($ConfiguredModel$Type)[])
constructor(arg0: $ConfiguredModel$Type)

public "append"(...arg0: ($ConfiguredModel$Type)[]): $BlockStateProvider$ConfiguredModelList
public "toJSON"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$ConfiguredModelList$Type = ($BlockStateProvider$ConfiguredModelList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider$ConfiguredModelList_ = $BlockStateProvider$ConfiguredModelList$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureSettingsBuilder, $StructureSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {


public "build"(): $ModifiableStructureInfo$StructureInfo
public static "copyOf"(arg0: $ModifiableStructureInfo$StructureInfo$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "getStructureSettings"(): $StructureSettingsBuilder
get "structureSettings"(): $StructureSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$Type = ($ModifiableStructureInfo$StructureInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo$Builder_ = $ModifiableStructureInfo$StructureInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IClientBlockExtensions {

 "addHitEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $HitResult$Type, arg3: $ParticleEngine$Type): boolean
 "addDestroyEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ParticleEngine$Type): boolean
 "getFogColor"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: $Vector3d$Type, arg5: float): $Vector3d
 "areBreakingParticlesTinted"(arg0: $BlockState$Type, arg1: $ClientLevel$Type, arg2: $BlockPos$Type): boolean
}

export namespace $IClientBlockExtensions {
const DEFAULT: $IClientBlockExtensions
function of(arg0: $BlockState$Type): $IClientBlockExtensions
function of(arg0: $Block$Type): $IClientBlockExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientBlockExtensions$Type = ($IClientBlockExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientBlockExtensions_ = $IClientBlockExtensions$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$AdvancementEvent$AdvancementEarnEvent" {
import {$AdvancementEvent, $AdvancementEvent$Type} from "packages/net/minecraftforge/event/entity/player/$AdvancementEvent"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $Advancement$Type)

public "getAdvancement"(): $Advancement
public "getListenerList"(): $ListenerList
get "advancement"(): $Advancement
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$AdvancementEarnEvent$Type = ($AdvancementEvent$AdvancementEarnEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementEvent$AdvancementEarnEvent_ = $AdvancementEvent$AdvancementEarnEvent$Type;
}}
declare module "packages/net/minecraftforge/common/data/$LanguageProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LanguageProvider implements $DataProvider {

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string)

public "addItem"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "add"(arg0: $ItemStack$Type, arg1: string): void
public "add"(arg0: $Item$Type, arg1: string): void
public "add"(arg0: string, arg1: string): void
public "add"(arg0: $EntityType$Type<(any)>, arg1: string): void
public "add"(arg0: $Enchantment$Type, arg1: string): void
public "add"(arg0: $MobEffect$Type, arg1: string): void
public "add"(arg0: $Block$Type, arg1: string): void
public "addItemStack"(arg0: $Supplier$Type<($ItemStack$Type)>, arg1: string): void
public "addEnchantment"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addEntityType"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "getName"(): string
public "addEffect"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addBlock"(arg0: $Supplier$Type<(any)>, arg1: string): void
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageProvider$Type = ($LanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanguageProvider_ = $LanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"

export class $ModFileScanData$ClassData extends $Record {

constructor(clazz: $Type$Type, parent: $Type$Type, interfaces: $Set$Type<($Type$Type)>)

public "clazz"(): $Type
public "parent"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "interfaces"(): $Set<($Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$ClassData$Type = ($ModFileScanData$ClassData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$ClassData_ = $ModFileScanData$ClassData$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$ICapabilityProviderImpl, $ICapabilityProviderImpl$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityProvider<B extends $ICapabilityProviderImpl<(B)>> implements $ICapabilityProviderImpl<(B)> {


public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
public "reviveCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityProvider$Type<B> = ($CapabilityProvider<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityProvider_<B> = $CapabilityProvider$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItemStack extends $ICapabilitySerializable<($CompoundTag)> {

 "equals"(arg0: $ItemStack$Type, arg1: boolean): boolean
 "isNotReplaceableByPickAction"(arg0: $Player$Type, arg1: integer): boolean
 "getEntityLifespan"(arg0: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
 "getSweepHitBox"(arg0: $Player$Type, arg1: $Entity$Type): $AABB
 "isRepairable"(): boolean
 "onDroppedByPlayer"(arg0: $Player$Type): boolean
 "getHighlightTip"(arg0: $Component$Type): $Component
 "onItemUseFirst"(arg0: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$Type): boolean
 "getXpRepairRatio"(): float
 "getShareTag"(): $CompoundTag
 "readShareTag"(arg0: $CompoundTag$Type): void
 "onBlockStartBreak"(arg0: $BlockPos$Type, arg1: $Player$Type): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "hasCraftingRemainingItem"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $Level$Type, arg1: $Player$Type): void
 "onInventoryTick"(arg0: $Level$Type, arg1: $Player$Type, arg2: integer, arg3: integer): void
 "isBookEnchantable"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(): integer
 "canApplyAtEnchantingTable"(arg0: $Enchantment$Type): boolean
 "getAllEnchantments"(): $Map<($Enchantment), (integer)>
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type): boolean
 "getBurnTime"(arg0: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $Level$Type, arg1: $Mob$Type): void
 "isEnderMask"(arg0: $Player$Type, arg1: $EnderMan$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(): boolean
 "areShareTagsEqual"(arg0: $ItemStack$Type): boolean
 "canPerformAction"(arg0: $ToolAction$Type): boolean
 "getEnchantmentLevel"(arg0: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $LivingEntity$Type, arg1: integer): boolean
 "canElytraFly"(arg0: $LivingEntity$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$Type, arg1: integer): void
 "getFoodProperties"(arg0: $LivingEntity$Type): $FoodProperties
 "getEquipmentSlot"(): $EquipmentSlot
 "serializeNBT"(): $CompoundTag
 "onEntitySwing"(arg0: $LivingEntity$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$Type, arg1: $Entity$Type): boolean
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IForgeItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItemStack$Type = ($IForgeItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItemStack_ = $IForgeItemStack$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAdvancementBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeAdvancementBuilder {

 "save"(arg0: $Consumer$Type<($Advancement$Type)>, arg1: $ResourceLocation$Type, arg2: $ExistingFileHelper$Type): $Advancement
}

export namespace $IForgeAdvancementBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAdvancementBuilder$Type = ($IForgeAdvancementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAdvancementBuilder_ = $IForgeAdvancementBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$Type} from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {


public "build"(): $Biome$ClimateSettings
public static "copyOf"(arg0: $Biome$ClimateSettings$Type): $ClimateSettingsBuilder
public static "create"(arg0: boolean, arg1: float, arg2: $Biome$TemperatureModifier$Type, arg3: float): $ClimateSettingsBuilder
public "setDownfall"(arg0: float): void
public "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$Type): void
public "getDownfall"(): float
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "setHasPrecipitation"(arg0: boolean): void
public "setTemperature"(arg0: float): void
public "getTemperature"(): float
public "hasPrecipitation"(): boolean
set "downfall"(value: float)
set "temperatureModifier"(value: $Biome$TemperatureModifier$Type)
get "downfall"(): float
get "temperatureModifier"(): $Biome$TemperatureModifier
set "temperature"(value: float)
get "temperature"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsBuilder$Type = ($ClimateSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateSettingsBuilder_ = $ClimateSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export class $ModifiableBiomeInfo {

constructor(arg0: $ModifiableBiomeInfo$BiomeInfo$Type)

public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "applyBiomeModifiers"(arg0: $Holder$Type<($Biome$Type)>, arg1: $List$Type<($BiomeModifier$Type)>): void
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$Type = ($ModifiableBiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo_ = $ModifiableBiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/common/$IExtensibleEnum" {
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $IExtensibleEnum {

/**
 * 
 * @deprecated
 */
 "init"(): void
}

export namespace $IExtensibleEnum {
function createCodecForExtensibleEnum<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensibleEnum$Type = ($IExtensibleEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensibleEnum_ = $IExtensibleEnum$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockState" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlockState {

 "rotate"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type): $BlockState
 "getCloneItemStack"(arg0: $HitResult$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): $ItemStack
 "canRedstoneConnectTo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getAppearance"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): $BlockState
 "canBeHydrated"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $BlockPos$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "isScaffolding"(arg0: $LivingEntity$Type): boolean
 "canDropFromExplosion"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): boolean
 "canEntityDestroy"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "isFireSource"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getToolModifiedState"(arg0: $UseOnContext$Type, arg1: $ToolAction$Type, arg2: boolean): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "onBlockExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
 "shouldCheckWeakPower"(arg0: $SignalGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "onNeighborChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "getFireSpreadSpeed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "getEnchantPowerBonus"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): float
 "isPortalFrame"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "isConduitFrame"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
 "addRunningEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "addLandingEffects"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: integer): boolean
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "getBedDirection"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $Direction
 "setBedOccupied"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: boolean): void
 "isValidSpawn"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $SpawnPlacements$Type$Type, arg3: $EntityType$Type<(any)>): boolean
 "getRespawnPosition"(arg0: $EntityType$Type<(any)>, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: float, arg4: $LivingEntity$Type): $Optional<($Vec3)>
 "onCaughtFire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $LivingEntity$Type): void
 "isFlammable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getFlammability"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "isStickyBlock"(): boolean
 "isSlimeBlock"(): boolean
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
 "getBeaconColorMultiplier"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): (float)[]
 "getSoundType"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): $SoundType
 "getStateAtViewpoint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): $BlockState
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type): $BlockPathTypes
 "getWeakChanges"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "onDestroyedByPlayer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: boolean, arg4: $FluidState$Type): boolean
 "supportsExternalFaceHiding"(): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
 "canSustainPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $IPlantable$Type): boolean
 "getFriction"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): float
 "getLightEmission"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): integer
 "canHarvestBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "isLadder"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "isBurning"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "isBed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "onTreeGrow"(arg0: $LevelReader$Type, arg1: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $TreeConfiguration$Type): boolean
 "isFertile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $LevelReader$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): integer
 "canStickTo"(arg0: $BlockState$Type): boolean
}

export namespace $IForgeBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockState$Type = ($IForgeBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockState_ = $IForgeBlockState$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/templates/$FluidTank" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"

export class $FluidTank implements $IFluidHandler, $IFluidTank {

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Predicate$Type<($FluidStack$Type)>)

public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getSpace"(): integer
public "getCapacity"(): integer
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "setCapacity"(arg0: integer): $FluidTank
public "readFromNBT"(arg0: $CompoundTag$Type): $FluidTank
public "getFluidAmount"(): integer
public "setValidator"(arg0: $Predicate$Type<($FluidStack$Type)>): $FluidTank
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: $FluidStack$Type): boolean
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getFluid"(): $FluidStack
public "getTanks"(): integer
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "setFluid"(arg0: $FluidStack$Type): void
get "space"(): integer
get "capacity"(): integer
get "empty"(): boolean
set "capacity"(value: integer)
get "fluidAmount"(): integer
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "fluid"(): $FluidStack
get "tanks"(): integer
set "fluid"(value: $FluidStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$Type = ($FluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTank_ = $FluidTank$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilitySerializable<T extends $Tag> extends $ICapabilityProvider, $INBTSerializable<(T)> {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $ICapabilitySerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilitySerializable$Type<T> = ($ICapabilitySerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilitySerializable_<T> = $ICapabilitySerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StructureModifier$Phase extends $Enum<($StructureModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase
static readonly "ADD": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase


public static "values"(): ($StructureModifier$Phase)[]
public static "valueOf"(arg0: string): $StructureModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($StructureModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier$Phase_ = $StructureModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/common/$PlantType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PlantType {
static readonly "PLAINS": $PlantType
static readonly "DESERT": $PlantType
static readonly "BEACH": $PlantType
static readonly "CAVE": $PlantType
static readonly "WATER": $PlantType
static readonly "NETHER": $PlantType
static readonly "CROP": $PlantType


public "getName"(): string
public static "get"(arg0: string): $PlantType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantType$Type = ($PlantType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantType_ = $PlantType$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$LongValue extends $ForgeConfigSpec$ConfigValue<(long)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$LongValue$Type = ($ForgeConfigSpec$LongValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$LongValue_ = $ForgeConfigSpec$LongValue$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeMinecraft" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export interface $IForgeMinecraft {

 "pushGuiLayer"(arg0: $Screen$Type): void
 "popGuiLayer"(): void
 "getLocale"(): $Locale
}

export namespace $IForgeMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMinecraft$Type = ($IForgeMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMinecraft_ = $IForgeMinecraft$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$BlockGeometryBakingContext$VisibilityData, $BlockGeometryBakingContext$VisibilityData$Type} from "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$IUnbakedGeometry, $IUnbakedGeometry$Type} from "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(arg0: $BlockModel$Type)

public "copyFrom"(arg0: $BlockGeometryBakingContext$Type): void
public "getTransforms"(): $ItemTransforms
public "hasCustomGeometry"(): boolean
public "getCustomGeometry"(): $IUnbakedGeometry<(any)>
public "getModelName"(): string
public "hasMaterial"(arg0: string): boolean
public "getRootTransform"(): $Transformation
public "getRenderTypeHint"(): $ResourceLocation
public "getRenderTypeFastHint"(): $ResourceLocation
public "isComponentVisible"(arg0: string, arg1: boolean): boolean
public "setCustomGeometry"(arg0: $IUnbakedGeometry$Type<(any)>): void
public "setRootTransform"(arg0: $Transformation$Type): void
public "setRenderTypeHint"(arg0: $ResourceLocation$Type): void
public "setRenderTypeFastHint"(arg0: $ResourceLocation$Type): void
public "getMaterial"(arg0: string): $Material
public "useBlockLight"(): boolean
public "useAmbientOcclusion"(): boolean
public "bake"(arg0: $ModelBaker$Type, arg1: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg2: $ModelState$Type, arg3: $ItemOverrides$Type, arg4: $ResourceLocation$Type): $BakedModel
public "isGui3d"(): boolean
public "setGui3d"(arg0: boolean): void
public "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
get "transforms"(): $ItemTransforms
get "customGeometry"(): $IUnbakedGeometry<(any)>
get "modelName"(): string
get "rootTransform"(): $Transformation
get "renderTypeHint"(): $ResourceLocation
get "renderTypeFastHint"(): $ResourceLocation
set "customGeometry"(value: $IUnbakedGeometry$Type<(any)>)
set "rootTransform"(value: $Transformation$Type)
set "renderTypeHint"(value: $ResourceLocation$Type)
set "renderTypeFastHint"(value: $ResourceLocation$Type)
get "gui3d"(): boolean
set "gui3d"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$Type = ($BlockGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext_ = $BlockGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing" {
import {$ServerStatusPing$ChannelData, $ServerStatusPing$ChannelData$Type} from "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ServerStatusPing extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing)>

constructor()
constructor(channels: $Map$Type<($ResourceLocation$Type), ($ServerStatusPing$ChannelData$Type)>, mods: $Map$Type<(string), (string)>, fmlNetworkVer: integer, truncated: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mods"(): $Map<(string), (string)>
public "fmlNetworkVer"(): integer
public "getRemoteModData"(): $Map<(string), (string)>
public "isTruncated"(): boolean
public "getFMLNetworkVersion"(): integer
public "getRemoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "channels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "truncated"(): boolean
public "toBuf"(): $ByteBuf
get "remoteModData"(): $Map<(string), (string)>
get "fMLNetworkVersion"(): integer
get "remoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$Type = ($ServerStatusPing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing_ = $ServerStatusPing$Type;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$ModifiableStructureInfo$StructureInfo$Builder, $ModifiableStructureInfo$StructureInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder"
import {$StructureModifier$Phase, $StructureModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$StructureModifier$Phase"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $StructureModifier {

 "modify"(arg0: $Holder$Type<($Structure$Type)>, arg1: $StructureModifier$Phase$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $StructureModifier {
const DIRECT_CODEC: $Codec<($StructureModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($StructureModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($StructureModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Type = ($StructureModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier_ = $StructureModifier$Type;
}}
declare module "packages/net/minecraftforge/fml/event/$IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {

}

export namespace $IModBusEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBusEvent$Type = ($IModBusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModBusEvent_ = $IModBusEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBaseRailBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBaseRailBlock {

 "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
 "isFlexibleRail"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "canMakeSlopes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getRailMaxSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): float
 "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
 "isValidRailShape"(arg0: $RailShape$Type): boolean
}

export namespace $IForgeBaseRailBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBaseRailBlock$Type = ($IForgeBaseRailBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBaseRailBlock_ = $IForgeBaseRailBlock$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata" {
import {$ITextureAtlasSpriteLoader, $ITextureAtlasSpriteLoader$Type} from "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$Type} from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"

export class $ForgeTextureMetadata {
static readonly "EMPTY": $ForgeTextureMetadata
static readonly "SERIALIZER": $MetadataSectionSerializer<($ForgeTextureMetadata)>

constructor(arg0: $ITextureAtlasSpriteLoader$Type)

public "getLoader"(): $ITextureAtlasSpriteLoader
public static "forResource"(arg0: $Resource$Type): $ForgeTextureMetadata
get "loader"(): $ITextureAtlasSpriteLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTextureMetadata$Type = ($ForgeTextureMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTextureMetadata_ = $ForgeTextureMetadata$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBlockAndTintGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeBlockAndTintGetter {

 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}

export namespace $IForgeBlockAndTintGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockAndTintGetter$Type = ($IForgeBlockAndTintGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockAndTintGetter_ = $IForgeBlockAndTintGetter$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLivingEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IForgeEntity, $IForgeEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeEntity"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLivingEntity extends $IForgeEntity {

 "self"(): $LivingEntity
 "moveInFluid"(arg0: $FluidState$Type, arg1: $Vec3$Type, arg2: double): boolean
 "jumpInFluid"(arg0: $FluidType$Type): void
 "canDrownInFluidType"(arg0: $FluidType$Type): boolean
 "sinkInFluid"(arg0: $FluidType$Type): void
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "canStartSwimming"(): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "getStepHeight"(): float
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "isAddedToWorld"(): boolean
 "getPersistentData"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onAddedToWorld"(): void
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "getMaxHeightFluidType"(): $FluidType
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "isMultipartEntity"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "onRemovedFromWorld"(): void
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "getParts"(): ($PartEntity<(any)>)[]
 "canUpdate"(): boolean
 "canUpdate"(arg0: boolean): void
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "revive"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLivingEntity$Type = ($IForgeLivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLivingEntity_ = $IForgeLivingEntity$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$ElementBuilder$FaceBuilder, $ModelBuilder$ElementBuilder$FaceBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder"
import {$ModelBuilder$ElementBuilder$RotationBuilder, $ModelBuilder$ElementBuilder$RotationBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$ElementBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "to"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "from"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder<>
public "shade"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "face"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "rotation"(): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "faces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder<>
public "cube"(arg0: string): $ModelBuilder$ElementBuilder<>
public "textureAll"(arg0: string): $ModelBuilder$ElementBuilder<>
public "allFaces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$Type = ($ModelBuilder$ElementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder_ = $ModelBuilder$ElementBuilder$Type;
}}
declare module "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayMessages$SpawnEntity {


public static "decode"(arg0: $FriendlyByteBuf$Type): $PlayMessages$SpawnEntity
public static "encode"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "getEntity"(): $Entity
public "getAdditionalData"(): $FriendlyByteBuf
public "getEntityId"(): integer
public "getUuid"(): $UUID
public "getYaw"(): byte
public "getPitch"(): byte
public "getTypeId"(): integer
public "getPosX"(): double
public "getPosY"(): double
public "getPosZ"(): double
public "getHeadYaw"(): byte
public "getVelX"(): integer
public "getVelY"(): integer
public "getVelZ"(): integer
get "entity"(): $Entity
get "additionalData"(): $FriendlyByteBuf
get "entityId"(): integer
get "uuid"(): $UUID
get "yaw"(): byte
get "pitch"(): byte
get "typeId"(): integer
get "posX"(): double
get "posY"(): double
get "posZ"(): double
get "headYaw"(): byte
get "velX"(): integer
get "velY"(): integer
get "velZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayMessages$SpawnEntity$Type = ($PlayMessages$SpawnEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayMessages$SpawnEntity_ = $PlayMessages$SpawnEntity$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidHandlerItem extends $IFluidHandler {

 "getContainer"(): $ItemStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTanks"(): integer
}

export namespace $IFluidHandlerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerItem$Type = ($IFluidHandlerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerItem_ = $IFluidHandlerItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {

constructor(arg0: $Block$Type)

public "part"(): $ConfiguredModel$Builder<($MultiPartBlockStateBuilder$PartBuilder)>
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$Type = ($MultiPartBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder_ = $MultiPartBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export interface $IConditionSerializer<T extends $ICondition> {

 "getID"(): $ResourceLocation
 "write"(arg0: $JsonObject$Type, arg1: T): void
 "read"(arg0: $JsonObject$Type): T
 "getJson"(arg0: T): $JsonObject
}

export namespace $IConditionSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConditionSerializer$Type<T> = ($IConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConditionSerializer_<T> = $IConditionSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo" {
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {

constructor(climateSettings: $Biome$ClimateSettings$Type, effects: $BiomeSpecialEffects$Type, generationSettings: $BiomeGenerationSettings$Type, mobSpawnSettings: $MobSpawnSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mobSpawnSettings"(): $MobSpawnSettings
public "generationSettings"(): $BiomeGenerationSettings
public "climateSettings"(): $Biome$ClimateSettings
public "effects"(): $BiomeSpecialEffects
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Type = ($ModifiableBiomeInfo$BiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo_ = $ModifiableBiomeInfo$BiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryBuilder" {
import {$IForgeRegistry$MissingFactory, $IForgeRegistry$MissingFactory$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory"
import {$IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import {$IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import {$IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"
import {$IForgeRegistry$ValidateCallback, $IForgeRegistry$ValidateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryBuilder<T> {

constructor()

public "add"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "getDefault"(): $ResourceLocation
public static "of"<T>(): $RegistryBuilder<(T)>
public static "of"<T>(arg0: string): $RegistryBuilder<(T)>
public static "of"<T>(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "set"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "setName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "addCallback"(arg0: any): $RegistryBuilder<(T)>
public "disableSaving"(): $RegistryBuilder<(T)>
public "disableSync"(): $RegistryBuilder<(T)>
public "disableOverrides"(): $RegistryBuilder<(T)>
public "setDefaultKey"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "allowModification"(): $RegistryBuilder<(T)>
public "getSaveToDisc"(): boolean
public "getLegacyNames"(): $Set<($ResourceLocation)>
public "getAllowOverrides"(): boolean
public "getAllowModifications"(): boolean
public "getMissingFactory"(): $IForgeRegistry$MissingFactory<(T)>
public "getValidate"(): $IForgeRegistry$ValidateCallback<(T)>
public "missing"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "legacyName"(arg0: string): $RegistryBuilder<(T)>
public "legacyName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "onValidate"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "setMaxID"(arg0: integer): $RegistryBuilder<(T)>
public "onAdd"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "setIDRange"(arg0: integer, arg1: integer): $RegistryBuilder<(T)>
public "getMinId"(): integer
public "getMaxId"(): integer
public "getCreate"(): $IForgeRegistry$CreateCallback<(T)>
public "getAdd"(): $IForgeRegistry$AddCallback<(T)>
public "getClear"(): $IForgeRegistry$ClearCallback<(T)>
public "getBake"(): $IForgeRegistry$BakeCallback<(T)>
public "onCreate"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "onBake"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "onClear"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "hasTags"(): $RegistryBuilder<(T)>
public "getSync"(): boolean
get "default"(): $ResourceLocation
set "name"(value: $ResourceLocation$Type)
set "defaultKey"(value: $ResourceLocation$Type)
get "saveToDisc"(): boolean
get "legacyNames"(): $Set<($ResourceLocation)>
get "allowOverrides"(): boolean
get "allowModifications"(): boolean
get "missingFactory"(): $IForgeRegistry$MissingFactory<(T)>
get "validate"(): $IForgeRegistry$ValidateCallback<(T)>
set "maxID"(value: integer)
get "minId"(): integer
get "maxId"(): integer
get "create"(): $IForgeRegistry$CreateCallback<(T)>
get "clear"(): $IForgeRegistry$ClearCallback<(T)>
get "bake"(): $IForgeRegistry$BakeCallback<(T)>
get "sync"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder" {
import {$ModelBuilder$FaceRotation, $ModelBuilder$FaceRotation$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$FaceBuilder {


public "end"(): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "rotation"(arg0: $ModelBuilder$FaceRotation$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "cullface"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "tintindex"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "uvs"(arg0: float, arg1: float, arg2: float, arg3: float): $ModelBuilder$ElementBuilder$FaceBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$FaceBuilder$Type = ($ModelBuilder$ElementBuilder$FaceBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$FaceBuilder_ = $ModelBuilder$ElementBuilder$FaceBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProvider {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>

(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityDispatcher implements $INBTSerializable<($CompoundTag)>, $ICapabilityProvider {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>)
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>, arg2: $ICapabilityProvider$Type)

public "invalidate"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "areCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityDispatcher$Type = ($CapabilityDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityDispatcher_ = $CapabilityDispatcher$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Phase extends $Enum<($TickEvent$Phase)> {
static readonly "START": $TickEvent$Phase
static readonly "END": $TickEvent$Phase


public static "values"(): ($TickEvent$Phase)[]
public static "valueOf"(arg0: string): $TickEvent$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Phase$Type = (("start") | ("end")) | ($TickEvent$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Phase_ = $TickEvent$Phase$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerDestroyItemEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerDestroyItemEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type)

public "getOriginal"(): $ItemStack
public "getListenerList"(): $ListenerList
public "getHand"(): $InteractionHand
get "original"(): $ItemStack
get "listenerList"(): $ListenerList
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDestroyItemEvent$Type = ($PlayerDestroyItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDestroyItemEvent_ = $PlayerDestroyItemEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$IArmPoseTransformer" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IArmPoseTransformer {

 "applyTransform"(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void

(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void
}

export namespace $IArmPoseTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArmPoseTransformer$Type = ($IArmPoseTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArmPoseTransformer_ = $IArmPoseTransformer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BrainBuilder" {
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import {$Brain$Provider, $Brain$Provider$Type} from "packages/net/minecraft/world/entity/ai/$Brain$Provider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$MemoryStatus, $MemoryStatus$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrainBuilder<E extends $LivingEntity> {

constructor(arg0: $Brain$Type<(E)>)

public "provider"(): $Brain$Provider<(E)>
public "getMemoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
public "getSensorTypes"(): $Collection<($SensorType<(any)>)>
public "setSchedule"(arg0: $Schedule$Type): void
public "getCoreActivities"(): $Set<($Activity)>
public "setDefaultActivity"(arg0: $Activity$Type): void
public "setActiveActivites"(arg0: $Set$Type<($Activity$Type)>): void
public "addActivityRequirementsTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "getDefaultActivity"(): $Activity
public "getActiveActivites"(): $Set<($Activity)>
public "getActivityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
public "addRequirementsToActivity"(arg0: $Activity$Type, arg1: $Collection$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>): void
public "getSchedule"(): $Schedule
public "addMemoriesToEraseWhenActivityStopped"(arg0: $Activity$Type, arg1: $Collection$Type<($MemoryModuleType$Type<(any)>)>): void
public "addBehaviorToActivityByPriority"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>): void
public "getActivityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
public "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
public "addActivityMemoriesToEraseWhenStoppedTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addActivityMemoriesToEraseWhenStoppedFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addAvailableBehaviorsByPriorityTo"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addAvailableBehaviorsByPriorityFrom"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addActivityRequirementsFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "makeBrain"(arg0: $Dynamic$Type<(any)>): $Brain<(E)>
get "memoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
get "sensorTypes"(): $Collection<($SensorType<(any)>)>
set "schedule"(value: $Schedule$Type)
get "coreActivities"(): $Set<($Activity)>
set "defaultActivity"(value: $Activity$Type)
set "activeActivites"(value: $Set$Type<($Activity$Type)>)
get "defaultActivity"(): $Activity
get "activeActivites"(): $Set<($Activity)>
get "activityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
get "schedule"(): $Schedule
get "activityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
get "availableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBuilder$Type<E> = ($BrainBuilder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBuilder_<E> = $BrainBuilder$Type<(E)>;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent$Unload" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$ChunkEvent, $ChunkEvent$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {

constructor(arg0: $ChunkAccess$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Unload$Type = ($ChunkEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent$Unload_ = $ChunkEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Flowing extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Flowing$Type = ($ForgeFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Flowing_ = $ForgeFlowingFluid$Flowing$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NetworkEvent extends $Event {

constructor()
constructor(arg0: $Supplier$Type<($NetworkEvent$Context$Type)>)

public "getSource"(): $Supplier<($NetworkEvent$Context)>
public "getPayload"(): $FriendlyByteBuf
public "getLoginIndex"(): integer
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "source"(): $Supplier<($NetworkEvent$Context)>
get "payload"(): $FriendlyByteBuf
get "loginIndex"(): integer
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Type = ($NetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent_ = $NetworkEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent$ConfigConfig, $IConfigEvent$ConfigConfig$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigEvent {

 "self"<T extends ($Event) & ($IConfigEvent)>(): T
 "getConfig"(): $ModConfig

(): T
}

export namespace $IConfigEvent {
const CONFIGCONFIG: $IConfigEvent$ConfigConfig
function reloading(arg0: $ModConfig$Type): $IConfigEvent
function unloading(arg0: $ModConfig$Type): $IConfigEvent
function loading(arg0: $ModConfig$Type): $IConfigEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$Type = ($IConfigEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent_ = $IConfigEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$ExtendedServerListData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ExtendedServerListData extends $Record {

constructor(arg0: string, arg1: boolean, arg2: integer, arg3: string)
constructor(type: string, isCompatible: boolean, numberOfMods: integer, extraReason: string, truncated: boolean)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isCompatible"(): boolean
public "numberOfMods"(): integer
public "extraReason"(): string
public "truncated"(): boolean
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedServerListData$Type = ($ExtendedServerListData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedServerListData_ = $ExtendedServerListData$Type;
}}
declare module "packages/net/minecraftforge/items/$ItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>)
constructor(arg0: integer)
constructor()

public "setSize"(arg0: integer): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
set "size"(value: integer)
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$Type = ($ItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHandler_ = $ItemStackHandler$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"

export interface $IGeometryBakingContext {

 "getTransforms"(): $ItemTransforms
 "getModelName"(): string
 "hasMaterial"(arg0: string): boolean
 "getRootTransform"(): $Transformation
 "getRenderTypeHint"(): $ResourceLocation
 "getRenderTypeFastHint"(): $ResourceLocation
 "isComponentVisible"(arg0: string, arg1: boolean): boolean
 "getMaterial"(arg0: string): $Material
 "useBlockLight"(): boolean
 "useAmbientOcclusion"(): boolean
 "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
 "isGui3d"(): boolean
}

export namespace $IGeometryBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryBakingContext$Type = ($IGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeometryBakingContext_ = $IGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry" {
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MissingMappingsEvent, $MissingMappingsEvent$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IdMappingEvent$IdRemapping, $IdMappingEvent$IdRemapping$Type} from "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Marker, $Marker$Type} from "packages/org/apache/logging/log4j/$Marker"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$IForgeRegistryModifiable, $IForgeRegistryModifiable$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryModifiable"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry<V> implements $IForgeRegistryInternal<(V)>, $IForgeRegistryModifiable<(V)> {
static readonly "REGISTRIES": $Marker


public "tags"(): $ITagManager<(V)>
public "getKeys"(): $Set<($ResourceLocation)>
public "getID"(arg0: $ResourceLocation$Type): integer
public "getID"(arg0: V): integer
public "isLocked"(): boolean
public "addAlias"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): void
public "remove"(arg0: $ResourceLocation$Type): V
public "clear"(): void
public "getValue"(arg0: integer): V
public "getValue"(arg0: $ResourceLocation$Type): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<(V)>
public "getKey"(arg0: integer): $ResourceKey<(V)>
public "getKey"(arg0: V): $ResourceLocation
public "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
public "register"(arg0: $ResourceLocation$Type, arg1: V): void
public "register"(arg0: string, arg1: V): void
public "containsKey"(arg0: $ResourceLocation$Type): boolean
public "containsValue"(arg0: V): boolean
public "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
public "freeze"(): void
public "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
public "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
public "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
public "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
public "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
public "getDefaultKey"(): $ResourceLocation
public "getRegistryName"(): $ResourceLocation
public "makeSnapshot"(): $ForgeRegistry$Snapshot
public "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
public "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
public "getMissingEvent"(arg0: $ResourceLocation$Type, arg1: $Object2IntMap$Type<($ResourceLocation$Type)>): $MissingMappingsEvent
public "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
public "getRaw"(arg0: $ResourceLocation$Type): V
public "unfreeze"(): void
public "loadIds"(arg0: $Object2IntMap$Type<($ResourceLocation$Type)>, arg1: $Map$Type<($ResourceLocation$Type), (string)>, arg2: $Object2IntMap$Type<($ResourceLocation$Type)>, arg3: $Map$Type<($ResourceLocation$Type), ($IdMappingEvent$IdRemapping$Type)>, arg4: $ForgeRegistry$Type<(V)>, arg5: $ResourceLocation$Type): void
public "bake"(): void
public "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
public "getValues"(): $Collection<(V)>
public "getCodec"(): $Codec<(V)>
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "keys"(): $Set<($ResourceLocation)>
get "locked"(): boolean
get "empty"(): boolean
get "entries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
get "defaultKey"(): $ResourceLocation
get "registryName"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(V)>)>
get "values"(): $Collection<(V)>
get "codec"(): $Codec<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Type<V> = ($ForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry_<V> = $ForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IForgeRegistry$AddCallback<V> {

 "onAdd"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void
}

export namespace $IForgeRegistry$AddCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$AddCallback$Type<V> = ($IForgeRegistry$AddCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$AddCallback_<V> = $IForgeRegistry$AddCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgePoseStack" {
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"

export interface $IForgePoseStack {

 "pushTransformation"(arg0: $Transformation$Type): void
}

export namespace $IForgePoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePoseStack$Type = ($IForgePoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePoseStack_ = $IForgePoseStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$ItemModelProvider, $ItemModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CrossCollisionBlock, $CrossCollisionBlock$Type} from "packages/net/minecraft/world/level/block/$CrossCollisionBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$IronBarsBlock, $IronBarsBlock$Type} from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$BlockModelProvider, $BlockModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelProvider"

export class $BlockStateProvider implements $DataProvider {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "wallBlockWithRenderTypeAndFast"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "wallBlockWithRenderTypeAndFast"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: string): void
public "wallBlockWithRenderTypeAndFast"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "wallBlockWithRenderTypeAndFast"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlockWithRenderTypeAndFast"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "paneBlockWithRenderTypeAndFast"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "paneBlockWithRenderTypeAndFast"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string, arg5: string): void
public "paneBlockWithRenderTypeAndFast"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "doorBlockWithRenderTypeAndFast"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "doorBlockWithRenderTypeAndFast"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string, arg5: string): void
public "doorBlockWithRenderTypeAndFast"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "doorBlockWithRenderTypeAndFast"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderTypeAndFast"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderTypeAndFast"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: string, arg5: string): void
public "trapdoorBlockWithRenderTypeAndFast"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderTypeAndFast"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: string, arg4: string): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "fenceGateBlockWithRenderTypeAndFast"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderTypeAndFast"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderTypeAndFast"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "fenceGateBlockWithRenderTypeAndFast"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: string): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: string, arg2: string): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "axisBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: string): void
public "logBlockWithRenderTypeAndFast"(arg0: $RotatedPillarBlock$Type, arg1: string, arg2: string): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: string, arg6: string): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: string): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string, arg5: string): void
public "stairsBlockWithRenderTypeAndFast"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type, arg6: $ResourceLocation$Type): void
public "fenceBlockWithRenderTypeAndFast"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceBlockWithRenderTypeAndFast"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "fenceBlockWithRenderTypeAndFast"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: string): void
public "fenceBlockWithRenderTypeAndFast"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string, arg4: string): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "fourWayBlock"(arg0: $CrossCollisionBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "fourWayMultipart"(arg0: $MultiPartBlockStateBuilder$Type, arg1: $ModelFile$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "getVariantBuilder"(arg0: $Block$Type): $VariantBlockStateBuilder
public "getMultipartBuilder"(arg0: $Block$Type): $MultiPartBlockStateBuilder
public "blockTexture"(arg0: $Block$Type): $ResourceLocation
public "simpleBlock"(arg0: $Block$Type, ...arg1: ($ConfiguredModel$Type)[]): void
public "simpleBlock"(arg0: $Block$Type, arg1: $Function$Type<($ModelFile$Type), (($ConfiguredModel$Type)[])>): void
public "simpleBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "simpleBlock"(arg0: $Block$Type): void
public "simpleBlockItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "simpleBlockWithItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "getName"(): string
public "models"(): $BlockModelProvider
public "cubeAll"(arg0: $Block$Type): $ModelFile
public "mcLoc"(arg0: string): $ResourceLocation
public "modLoc"(arg0: string): $ResourceLocation
public "itemModels"(): $ItemModelProvider
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "logBlock"(arg0: $RotatedPillarBlock$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ResourceLocation$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ModelFile$Type): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type, arg6: $ModelFile$Type, arg7: $ModelFile$Type, arg8: $ModelFile$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$Type = ($BlockStateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider_ = $BlockStateProvider$Type;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message" {
import {$Message$MessageType, $Message$MessageType$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message {

constructor(arg0: string, arg1: $Message$MessageType$Type)

public "getTypeColour"(): (float)[]
public "getText"(): string
get "typeColour"(): (float)[]
get "text"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffect {

 "getCurativeItems"(): $List<($ItemStack)>
 "getSortOrder"(arg0: $MobEffectInstance$Type): integer
}

export namespace $IForgeMobEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffect$Type = ($IForgeMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffect_ = $IForgeMobEffect$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template" {
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument<(T)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $EnumArgument<(T)>
public "type"(): $ArgumentTypeInfo<($EnumArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Template$Type = ($EnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info$Template_ = $EnumArgument$Info$Template$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $PlayerEvent extends $LivingEvent {

constructor()
constructor(arg0: $Player$Type)

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$Type = ($PlayerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent_ = $PlayerEvent$Type;
}}
declare module "packages/net/minecraftforge/items/$IItemHandlerModifiable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerModifiable extends $IItemHandler {

 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$Type = ($IItemHandlerModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerModifiable_ = $IItemHandlerModifiable$Type;
}}
declare module "packages/net/minecraftforge/common/util/$ITeleporter" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PortalInfo, $PortalInfo$Type} from "packages/net/minecraft/world/level/portal/$PortalInfo"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITeleporter {

 "playTeleportSound"(arg0: $ServerPlayer$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type): boolean
 "placeEntity"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type, arg3: float, arg4: $Function$Type<(boolean), ($Entity$Type)>): $Entity
 "getPortalInfo"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $Function$Type<($ServerLevel$Type), ($PortalInfo$Type)>): $PortalInfo
 "isVanilla"(): boolean
}

export namespace $ITeleporter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeleporter$Type = ($ITeleporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeleporter_ = $ITeleporter$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelFile {


public "getLocation"(): $ResourceLocation
public "getUncheckedLocation"(): $ResourceLocation
public "assertExistence"(): void
get "location"(): $ResourceLocation
get "uncheckedLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Type = ($ModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile_ = $ModelFile$Type;
}}
declare module "packages/net/minecraftforge/client/model/$ForgeFaceData" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ForgeFaceData extends $Record {
static readonly "DEFAULT": $ForgeFaceData
static readonly "COLOR": $Codec<(integer)>
static readonly "CODEC": $Codec<($ForgeFaceData)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: boolean)
constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean, calculateNormals: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "read"(arg0: $JsonElement$Type, arg1: $ForgeFaceData$Type): $ForgeFaceData
public "color"(): integer
public "ambientOcclusion"(): boolean
public "calculateNormals"(): boolean
public "skyLight"(): integer
public "blockLight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFaceData$Type = ($ForgeFaceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFaceData_ = $ForgeFaceData$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings$PlainBuilder$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings$PlainBuilder"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$GenerationStep$Carving, $GenerationStep$Carving$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
readonly "features": $List<($List<($Holder<($PlacedFeature)>)>)>

constructor(arg0: $BiomeGenerationSettings$Type)

public "getFeatures"(arg0: $GenerationStep$Decoration$Type): $List<($Holder<($PlacedFeature)>)>
public "getCarvers"(arg0: $GenerationStep$Carving$Type): $List<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGenerationSettingsBuilder$Type = ($BiomeGenerationSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGenerationSettingsBuilder_ = $BiomeGenerationSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBus" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$GenericEvent, $GenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$GenericEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEventBusInvokeDispatcher, $IEventBusInvokeDispatcher$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export interface $IEventBus {

 "unregister"(arg0: any): void
 "shutdown"(): void
 "start"(): void
 "register"(arg0: any): void
 "post"(arg0: $Event$Type): boolean
 "post"(arg0: $Event$Type, arg1: $IEventBusInvokeDispatcher$Type): boolean
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Class$Type<(T)>, arg4: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Class$Type<(T)>, arg3: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Consumer$Type<(T)>): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBus$Type = ($IEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBus_ = $IEventBus$Type;
}}
declare module "packages/net/minecraftforge/fluids/$IFluidTank" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidTank {

 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "getCapacity"(): integer
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "getFluidAmount"(): integer
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "getFluid"(): $FluidStack
}

export namespace $IFluidTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTank$Type = ($IFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTank_ = $IFluidTank$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RenderHighlightEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export class $RenderHighlightEvent extends $Event {

constructor()

public "getTarget"(): $HitResult
public "getPoseStack"(): $PoseStack
public "getMultiBufferSource"(): $MultiBufferSource
public "getLevelRenderer"(): $LevelRenderer
public "getPartialTick"(): float
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getCamera"(): $Camera
get "target"(): $HitResult
get "poseStack"(): $PoseStack
get "multiBufferSource"(): $MultiBufferSource
get "levelRenderer"(): $LevelRenderer
get "partialTick"(): float
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "camera"(): $Camera
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHighlightEvent$Type = ($RenderHighlightEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderHighlightEvent_ = $RenderHighlightEvent$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Event$Result extends $Enum<($Event$Result)> {
static readonly "DENY": $Event$Result
static readonly "DEFAULT": $Event$Result
static readonly "ALLOW": $Event$Result


public static "values"(): ($Event$Result)[]
public static "valueOf"(arg0: string): $Event$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Result$Type = (("allow") | ("deny") | ("default")) | ($Event$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event$Result_ = $Event$Result$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$KeyModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $KeyModifier extends $Enum<($KeyModifier)> {
static readonly "CONTROL": $KeyModifier
static readonly "SHIFT": $KeyModifier
static readonly "ALT": $KeyModifier
static readonly "NONE": $KeyModifier
/**
 * 
 * @deprecated
 */
static readonly "MODIFIER_VALUES": ($KeyModifier)[]


public static "values"(): ($KeyModifier)[]
public static "valueOf"(arg0: string): $KeyModifier
public "matches"(arg0: $InputConstants$Key$Type): boolean
public "isActive"(arg0: $IKeyConflictContext$Type): boolean
public "getCombinedName"(arg0: $InputConstants$Key$Type, arg1: $Supplier$Type<($Component$Type)>): $Component
public static "getModifier"(arg0: $InputConstants$Key$Type): $KeyModifier
public static "isKeyCodeModifier"(arg0: $InputConstants$Key$Type): boolean
public static "valueFromString"(arg0: string): $KeyModifier
/**
 * 
 * @deprecated
 */
public static "getActiveModifier"(): $KeyModifier
public static "getValues"(arg0: boolean): $List<($KeyModifier)>
get "activeModifier"(): $KeyModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifier$Type = (("shift") | ("alt") | ("control") | ("none")) | ($KeyModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifier_ = $KeyModifier$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryModifiable" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryModifiable<V> extends $IForgeRegistry<(V)> {

 "isLocked"(): boolean
 "remove"(arg0: $ResourceLocation$Type): V
 "clear"(): void
 "tags"(): $ITagManager<(V)>
 "getKeys"(): $Set<($ResourceLocation)>
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: string, arg1: V): void
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getRegistryName"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryModifiable$Type<V> = ($IForgeRegistryModifiable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryModifiable_<V> = $IForgeRegistryModifiable$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$TransformationHelper$TransformOrigin, $TransformationHelper$TransformOrigin$Type} from "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$RootTransformsBuilder {


public "origin"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(arg0: $TransformationHelper$TransformOrigin$Type): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "end"(): $ModelBuilder<(T)>
public "transform"(arg0: $Transformation$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "toJson"(): $JsonObject
public "leftRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$RootTransformsBuilder$Type = ($ModelBuilder$RootTransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$RootTransformsBuilder_ = $ModelBuilder$RootTransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IModFileInfo$LanguageSpec extends $Record {

constructor(languageName: string, acceptedVersions: $VersionRange$Type)

public "languageName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "acceptedVersions"(): $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$LanguageSpec$Type = ($IModFileInfo$LanguageSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo$LanguageSpec_ = $IModFileInfo$LanguageSpec$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBucketPickup" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IForgeBucketPickup {

 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IForgeBucketPickup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBucketPickup$Type = ($IForgeBucketPickup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBucketPickup_ = $IForgeBucketPickup$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePotion" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgePotion {

 "isFoil"(arg0: $ItemStack$Type): boolean
}

export namespace $IForgePotion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePotion$Type = ($IForgePotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePotion_ = $IForgePotion$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Source extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Source$Type = ($ForgeFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Source_ = $ForgeFlowingFluid$Source$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $NonNullFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$Type<T, R> = ($NonNullFunction<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullFunction_<T, R> = $NonNullFunction$Type<(T), (R)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$ValidateCallback<V> {

 "onValidate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void
}

export namespace $IForgeRegistry$ValidateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ValidateCallback$Type<V> = ($IForgeRegistry$ValidateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ValidateCallback_<V> = $IForgeRegistry$ValidateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IForgeBlockEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "requestModelDataUpdate"(): void
 "onChunkUnloaded"(): void
 "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
 "handleUpdateTag"(arg0: $CompoundTag$Type): void
 "getRenderBoundingBox"(): $AABB
 "getModelData"(): $ModelData
 "getPersistentData"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "onLoad"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeBlockEntity {
const INFINITE_EXTENT_AABB: $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockEntity$Type = ($IForgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockEntity_ = $IForgeBlockEntity$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModProvider" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModProvider {

 "isValid"(arg0: $IModFile$Type): boolean
 "name"(): string
 "initArguments"(arg0: $Map$Type<(string), (any)>): void
 "scanFile"(arg0: $IModFile$Type, arg1: $Consumer$Type<($Path$Type)>): void
}

export namespace $IModProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModProvider$Type = ($IModProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModProvider_ = $IModProvider$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$ValueSpec, $ForgeConfigSpec$ValueSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec"
import {$ForgeConfigSpec$LongValue, $ForgeConfigSpec$LongValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue"
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$Builder {

constructor()

public "push"(arg0: string): $ForgeConfigSpec$Builder
public "push"(arg0: $List$Type<(string)>): $ForgeConfigSpec$Builder
public "pop"(arg0: integer): $ForgeConfigSpec$Builder
public "pop"(): $ForgeConfigSpec$Builder
public "configure"<T>(arg0: $Function$Type<($ForgeConfigSpec$Builder$Type), (T)>): $Pair<(T), ($ForgeConfigSpec)>
public "build"(): $ForgeConfigSpec
public "comment"(arg0: string): $ForgeConfigSpec$Builder
public "comment"(...arg0: (string)[]): $ForgeConfigSpec$Builder
public "defineListAllowEmpty"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "worldRestart"(): $ForgeConfigSpec$Builder
public "translation"(arg0: string): $ForgeConfigSpec$Builder
public "defineInList"<T>(arg0: string, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: string, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: string, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: string, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: $List$Type<(string)>, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $ForgeConfigSpec$ValueSpec$Type, arg2: $Supplier$Type<(T)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"(arg0: $List$Type<(string)>, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "define"(arg0: string, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Builder$Type = ($ForgeConfigSpec$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Builder_ = $ForgeConfigSpec$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBakedModel" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$Type} from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeBakedModel {

 "useAmbientOcclusion"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
 "useAmbientOcclusion"(arg0: $BlockState$Type): boolean
 "getParticleIcon"(arg0: $ModelData$Type): $TextureAtlasSprite
 "getRenderTypes"(arg0: $BlockState$Type, arg1: $RandomSource$Type, arg2: $ModelData$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$Type, arg1: boolean): $List<($RenderType)>
 "getRenderPasses"(arg0: $ItemStack$Type, arg1: boolean): $List<($BakedModel)>
 "getModelData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ModelData$Type): $ModelData
 "applyTransform"(arg0: $ItemDisplayContext$Type, arg1: $PoseStack$Type, arg2: boolean): $BakedModel
 "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type, arg3: $ModelData$Type, arg4: $RenderType$Type): $List<($BakedQuad)>
}

export namespace $IForgeBakedModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBakedModel$Type = ($IForgeBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBakedModel_ = $IForgeBakedModel$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $BlockModelBuilder extends $ModelBuilder<($BlockModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelBuilder$Type = ($BlockModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelBuilder_ = $BlockModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RenderHighlightEvent$Block" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$RenderHighlightEvent, $RenderHighlightEvent$Type} from "packages/net/minecraftforge/client/event/$RenderHighlightEvent"

export class $RenderHighlightEvent$Block extends $RenderHighlightEvent {

constructor()
constructor(arg0: $LevelRenderer$Type, arg1: $Camera$Type, arg2: $BlockHitResult$Type, arg3: float, arg4: $PoseStack$Type, arg5: $MultiBufferSource$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHighlightEvent$Block$Type = ($RenderHighlightEvent$Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderHighlightEvent$Block_ = $RenderHighlightEvent$Block$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeModelBaker" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IForgeModelBaker {

 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "bake"(arg0: $ResourceLocation$Type, arg1: $ModelState$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>): $BakedModel
}

export namespace $IForgeModelBaker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeModelBaker$Type = ($IForgeModelBaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeModelBaker_ = $IForgeModelBaker$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$ClimateSettingsBuilder, $ClimateSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder"
import {$MobSpawnSettingsBuilder, $MobSpawnSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder"
import {$BiomeGenerationSettingsBuilder, $BiomeGenerationSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder"
import {$BiomeSpecialEffectsBuilder, $BiomeSpecialEffectsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {


public "build"(): $ModifiableBiomeInfo$BiomeInfo
public static "copyOf"(arg0: $ModifiableBiomeInfo$BiomeInfo$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "getClimateSettings"(): $ClimateSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$Type = ($ModifiableBiomeInfo$BiomeInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo$Builder_ = $ModifiableBiomeInfo$BiomeInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$BakeCallback<V> {

 "onBake"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$BakeCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$BakeCallback$Type<V> = ($IForgeRegistry$BakeCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$BakeCallback_<V> = $IForgeRegistry$BakeCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteractSpecific" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Entity$Type, arg3: $Vec3$Type)

public "getTarget"(): $Entity
public "getLocalPos"(): $Vec3
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "target"(): $Entity
get "localPos"(): $Vec3
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$Type = ($PlayerInteractEvent$EntityInteractSpecific);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteractSpecific_ = $PlayerInteractEvent$EntityInteractSpecific$Type;
}}
declare module "packages/net/minecraftforge/fml/event/lifecycle/$ModLifecycleEvent" {
import {$InterModComms$IMCMessage, $InterModComms$IMCMessage$Type} from "packages/net/minecraftforge/fml/$InterModComms$IMCMessage"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLifecycleEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $ModContainer$Type)

public "description"(): string
public "toString"(): string
public "getIMCStream"(arg0: $Predicate$Type<(string)>): $Stream<($InterModComms$IMCMessage)>
public "getIMCStream"(): $Stream<($InterModComms$IMCMessage)>
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "iMCStream"(): $Stream<($InterModComms$IMCMessage)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLifecycleEvent$Type = ($ModLifecycleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLifecycleEvent_ = $ModLifecycleEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder" {
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ItemModelBuilder$OverrideBuilder {

constructor(arg0: $ItemModelBuilder$Type)

public "predicate"(arg0: $ResourceLocation$Type, arg1: float): $ItemModelBuilder$OverrideBuilder
public "model"(arg0: $ModelFile$Type): $ItemModelBuilder$OverrideBuilder
public "end"(): $ItemModelBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$OverrideBuilder$Type = ($ItemModelBuilder$OverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder$OverrideBuilder_ = $ItemModelBuilder$OverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Range" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ForgeConfigSpec$Range<V extends $Comparable<(any)>> implements $Predicate<(any)> {


public "getClazz"(): $Class<(any)>
public "toString"(): string
public "test"(arg0: any): boolean
public "getMax"(): V
public "getMin"(): V
public "correct"(arg0: any, arg1: any): any
public static "isEqual"<T>(arg0: any): $Predicate<(any)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "negate"(): $Predicate<(any)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
get "clazz"(): $Class<(any)>
get "max"(): V
get "min"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Range$Type<V> = ($ForgeConfigSpec$Range<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Range_<V> = $ForgeConfigSpec$Range$Type<(V)>;
}}
declare module "packages/net/minecraftforge/items/wrapper/$RecipeWrapper" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $RecipeWrapper implements $Container {

constructor(arg0: $IItemHandlerModifiable$Type)

public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "clear"(): void
public static "tryClear"(arg0: any): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "containerSize"(): integer
get "empty"(): boolean
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapper$Type = ($RecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapper_ = $RecipeWrapper$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $BiomeModifier {

 "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $BiomeModifier {
const DIRECT_CODEC: $Codec<($BiomeModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($BiomeModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($BiomeModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Type = ($BiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier_ = $BiomeModifier$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $Event {

constructor()

public "getResult"(): $Event$Result
public "setResult"(arg0: $Event$Result$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "setCanceled"(arg0: boolean): void
public "getPhase"(): $EventPriority
public "hasResult"(): boolean
public "isCanceled"(): boolean
public "setPhase"(arg0: $EventPriority$Type): void
get "result"(): $Event$Result
set "result"(value: $Event$Result$Type)
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
set "canceled"(value: boolean)
get "phase"(): $EventPriority
get "canceled"(): boolean
set "phase"(value: $EventPriority$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type = ($Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_ = $Event$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent$ServerTickEvent extends $TickEvent {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Phase$Type, arg1: $BooleanSupplier$Type, arg2: $MinecraftServer$Type)

public "getListenerList"(): $ListenerList
public "getServer"(): $MinecraftServer
public "haveTime"(): boolean
get "listenerList"(): $ListenerList
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$ServerTickEvent$Type = ($TickEvent$ServerTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$ServerTickEvent_ = $TickEvent$ServerTickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {


public "name"(): string
public static "get"(arg0: string): $SoundAction
public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundAction$Type = ($SoundAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundAction_ = $SoundAction$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<($ModConfig$Type)> {
static readonly "COMMON": $ModConfig$Type
static readonly "CLIENT": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type


public static "values"(): ($ModConfig$Type)[]
public static "valueOf"(arg0: string): $ModConfig$Type
public "extension"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type$Type = (("server") | ("common") | ("client")) | ($ModConfig$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig$Type_ = $ModConfig$Type$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$BiomeSpecialEffects$Builder, $BiomeSpecialEffects$Builder$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$Builder"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
 "fogColor": $OptionalInt
 "waterColor": $OptionalInt
 "waterFogColor": $OptionalInt
 "skyColor": $OptionalInt
 "foliageColorOverride": $Optional<(integer)>
 "grassColorOverride": $Optional<(integer)>
 "grassColorModifier": $BiomeSpecialEffects$GrassColorModifier
 "ambientParticle": $Optional<($AmbientParticleSettings)>
 "ambientLoopSoundEvent": $Optional<($Holder<($SoundEvent)>)>
 "ambientMoodSettings": $Optional<($AmbientMoodSettings)>
 "ambientAdditionsSettings": $Optional<($AmbientAdditionsSettings)>
 "backgroundMusic": $Optional<($Music)>


public static "copyOf"(arg0: $BiomeSpecialEffects$Type): $BiomeSpecialEffectsBuilder
public static "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BiomeSpecialEffectsBuilder
public "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
public "getBackgroundMusic"(): $Optional<($Music)>
public "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
public "getGrassColorOverride"(): $Optional<(integer)>
public "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
public "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
public "getSkyColor"(): integer
public "getWaterFogColor"(): integer
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getFoliageColorOverride"(): $Optional<(integer)>
public "getFogColor"(): integer
public "waterColor"(): integer
get "ambientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
get "backgroundMusic"(): $Optional<($Music)>
get "ambientParticle"(): $Optional<($AmbientParticleSettings)>
get "grassColorOverride"(): $Optional<(integer)>
get "ambientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
get "ambientMoodSound"(): $Optional<($AmbientMoodSettings)>
get "skyColor"(): integer
get "waterFogColor"(): integer
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "foliageColorOverride"(): $Optional<(integer)>
get "fogColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilder$Type = ($BiomeSpecialEffectsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilder_ = $BiomeSpecialEffectsBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder" {
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"

export class $ModelBuilder$TransformsBuilder$TransformVecBuilder {


public "scale"(arg0: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "end"(): $ModelBuilder$TransformsBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "leftRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type = ($ModelBuilder$TransformsBuilder$TransformVecBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder_ = $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$ConditionalRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ConditionalRecipe$Serializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipe$Serializer$Type<T> = ($ConditionalRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipe$Serializer_<T> = $ConditionalRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePackResources" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"

export interface $IForgePackResources {

 "getChildren"(): $Collection<($PackResources)>
 "isHidden"(): boolean
}

export namespace $IForgePackResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePackResources$Type = ($IForgePackResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePackResources_ = $IForgePackResources$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITag" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITag<V> extends $Iterable<(V)> {

 "isEmpty"(): boolean
 "size"(): integer
 "stream"(): $Stream<(V)>
 "contains"(arg0: V): boolean
 "getKey"(): $TagKey<(V)>
 "getRandomElement"(arg0: $RandomSource$Type): $Optional<(V)>
 "isBound"(): boolean
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITag$Type<V> = ($ITag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITag_<V> = $ITag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IClientItemExtensions$FontContext extends $Enum<($IClientItemExtensions$FontContext)> {
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext
static readonly "TOOLTIP": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext


public static "values"(): ($IClientItemExtensions$FontContext)[]
public static "valueOf"(arg0: string): $IClientItemExtensions$FontContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$FontContext$Type = (("item_count") | ("selected_item_name") | ("tooltip")) | ($IClientItemExtensions$FontContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions$FontContext_ = $IClientItemExtensions$FontContext$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryManager" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$ForgeRegistry, $ForgeRegistry$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HandshakeMessages$S2CRegistry, $HandshakeMessages$S2CRegistry$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RegistryManager {
static readonly "ACTIVE": $RegistryManager
static readonly "VANILLA": $RegistryManager
static readonly "FROZEN": $RegistryManager

constructor(arg0: string)

public "getName"<V>(arg0: $IForgeRegistry$Type<(V)>): $ResourceLocation
public "getName"(): string
public "clean"(): void
public "takeSnapshot"(arg0: boolean): $Map<($ResourceLocation), ($ForgeRegistry$Snapshot)>
public static "getRegistryNamesForSyncToClient"(): $List<($ResourceLocation)>
public static "generateRegistryPackets"(arg0: boolean): $List<($Pair<(string), ($HandshakeMessages$S2CRegistry)>)>
public static "postNewRegistryEvent"(): void
public "getRegistry"<V>(arg0: $ResourceKey$Type<(any)>): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type, arg1: $RegistryManager$Type): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type): $ForgeRegistry<(V)>
public "updateLegacyName"<V>(arg0: $ResourceLocation$Type): $ResourceLocation
public static "getVanillaRegistryKeys"(): $Set<($ResourceLocation)>
get "name"(): string
get "registryNamesForSyncToClient"(): $List<($ResourceLocation)>
get "vanillaRegistryKeys"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryManager$Type = ($RegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryManager_ = $RegistryManager$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ItemModelBuilder$OverrideBuilder, $ItemModelBuilder$OverrideBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ItemModelBuilder extends $ModelBuilder<($ItemModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "override"(arg0: integer): $ItemModelBuilder$OverrideBuilder
public "override"(): $ItemModelBuilder$OverrideBuilder
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$Type = ($ItemModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder_ = $ItemModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $ModifiableStructureInfo$StructureInfo extends $Record {

constructor(structureSettings: $Structure$StructureSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "structureSettings"(): $Structure$StructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Type = ($ModifiableStructureInfo$StructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo_ = $ModifiableStructureInfo$StructureInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$CreateCallback<V> {

 "onCreate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$CreateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$CreateCallback$Type<V> = ($IForgeRegistry$CreateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$CreateCallback_<V> = $IForgeRegistry$CreateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $ForgeFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getFluidType"(): $FluidType
public "isSame"(arg0: $Fluid$Type): boolean
public "getBucket"(): $Item
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Type = ($ForgeFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid_ = $ForgeFlowingFluid$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IConfigEvent$ConfigConfig extends $Record {

constructor(loading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, reloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, unloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reloading"(): $Function<($ModConfig), ($IConfigEvent)>
public "unloading"(): $Function<($ModConfig), ($IConfigEvent)>
public "loading"(): $Function<($ModConfig), ($IConfigEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$ConfigConfig$Type = ($IConfigEvent$ConfigConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent$ConfigConfig_ = $IConfigEvent$ConfigConfig$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDropsEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $Collection$Type<($ItemEntity$Type)>, arg3: integer, arg4: boolean)
constructor()

public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getLootingLevel"(): integer
public "getDrops"(): $Collection<($ItemEntity)>
get "source"(): $DamageSource
get "recentlyHit"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "lootingLevel"(): integer
get "drops"(): $Collection<($ItemEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDropsEvent$Type = ($LivingDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDropsEvent_ = $LivingDropsEvent$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions" {
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$Type} from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientItemExtensions$FontContext, $IClientItemExtensions$FontContext$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Model, $Model$Type} from "packages/net/minecraft/client/model/$Model"

export interface $IClientItemExtensions {

 "applyForgeHandTransform"(arg0: $PoseStack$Type, arg1: $LocalPlayer$Type, arg2: $HumanoidArm$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
 "getHumanoidArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $HumanoidModel<(any)>
 "getGenericArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $Model
 "renderHelmetOverlay"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer, arg3: integer, arg4: float): void
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
 "getFont"(arg0: $ItemStack$Type, arg1: $IClientItemExtensions$FontContext$Type): $Font
 "getArmPose"(arg0: $LivingEntity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): $HumanoidModel$ArmPose
}

export namespace $IClientItemExtensions {
const DEFAULT: $IClientItemExtensions
function of(arg0: $ItemStack$Type): $IClientItemExtensions
function of(arg0: $Item$Type): $IClientItemExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$Type = ($IClientItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions_ = $IClientItemExtensions$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "canStartSwimming"(): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "getStepHeight"(): float
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "isAddedToWorld"(): boolean
 "getPersistentData"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "onAddedToWorld"(): void
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "getMaxHeightFluidType"(): $FluidType
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "isMultipartEntity"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "onRemovedFromWorld"(): void
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "getParts"(): ($PartEntity<(any)>)[]
 "canUpdate"(): boolean
 "canUpdate"(arg0: boolean): void
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "revive"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEntity$Type = ($IForgeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEntity_ = $IForgeEntity$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluid" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluid {

 "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
 "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
 "getFluidType"(): $FluidType
 "getExplosionResistance"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
 "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean

(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
}

export namespace $IForgeFluid {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluid$Type = ($IForgeFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluid_ = $IForgeFluid$Type;
}}
