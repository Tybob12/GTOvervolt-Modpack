import {$MaterialIconType, $MaterialIconType$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/info/$MaterialIconType"
import {$SceneWidget, $SceneWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget"
import {$NBTIOWrapper, $NBTIOWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper"
import {$PlatformWrapper, $PlatformWrapper$Type} from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$DikeVeinGenerator$DikeBlockDefinition, $DikeVeinGenerator$DikeBlockDefinition$Type} from "packages/com/gregtechceu/gtceu/api/data/worldgen/generator/veins/$DikeVeinGenerator$DikeBlockDefinition"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$GTMedicalConditions, $GTMedicalConditions$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTMedicalConditions"
import {$SelectableWidgetGroup, $SelectableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup"
import {$Blocks, $Blocks$Type} from "packages/net/minecraft/world/level/block/$Blocks"
import {$ItemStackTexture, $ItemStackTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture"
import {$BlockWrapper, $BlockWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper"
import {$GuiTextures, $GuiTextures$Type} from "packages/com/gregtechceu/gtceu/api/gui/$GuiTextures"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$ForgeEventWrapper, $ForgeEventWrapper$Type} from "packages/dev/latvian/mods/kubejs/forge/$ForgeEventWrapper"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$ImageWidget, $ImageWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$Predicates, $Predicates$Type} from "packages/com/gregtechceu/gtceu/api/pattern/$Predicates"
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/gregtechceu/gtceu/api/capability/recipe/$RecipeCapability"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$GTRegistries, $GTRegistries$Type} from "packages/com/gregtechceu/gtceu/api/registry/$GTRegistries"
import {$Stats, $Stats$Type} from "packages/net/minecraft/stats/$Stats"
import {$GTMaterialItems, $GTMaterialItems$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTMaterialItems"
import {$GTRecipeModifiers, $GTRecipeModifiers$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTRecipeModifiers"
import {$GTOres, $GTOres$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTOres"
import {$GTValues, $GTValues$Type} from "packages/com/gregtechceu/gtceu/api/$GTValues"
import {$GuiTextureGroup, $GuiTextureGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup"
import {$JavaWrapper, $JavaWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper"
import {$WorldGenLayers, $WorldGenLayers$Type} from "packages/com/gregtechceu/gtceu/api/data/worldgen/$WorldGenLayers"
import {$GTToolType, $GTToolType$Type} from "packages/com/gregtechceu/gtceu/api/item/tool/$GTToolType"
import {$FluidBuilder, $FluidBuilder$Type} from "packages/com/gregtechceu/gtceu/api/fluids/$FluidBuilder"
import {$Symptom, $Symptom$Type} from "packages/com/gregtechceu/gtceu/api/data/medicalcondition/$Symptom"
import {$RotationAxis, $RotationAxis$Type} from "packages/dev/latvian/mods/kubejs/util/$RotationAxis"
import {$GTItems, $GTItems$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTItems"
import {$PropertyKey, $PropertyKey$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$PropertyKey"
import {$Painter, $Painter$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$FactoryBlockPattern, $FactoryBlockPattern$Type} from "packages/com/gregtechceu/gtceu/api/pattern/$FactoryBlockPattern"
import {$IngredientForgeHelper, $IngredientForgeHelper$Type} from "packages/dev/latvian/mods/kubejs/platform/forge/$IngredientForgeHelper"
import {$GTLayerPattern, $GTLayerPattern$Type} from "packages/com/gregtechceu/gtceu/api/data/worldgen/$GTLayerPattern"
import {$MaterialRegistryManager, $MaterialRegistryManager$Type} from "packages/com/gregtechceu/gtceu/common/unification/material/$MaterialRegistryManager"
import {$MachineConstructors, $MachineConstructors$Type} from "packages/com/gregtechceu/gtceu/integration/kjs/helpers/$MachineConstructors"
import {$ChanceLogic, $ChanceLogic$Type} from "packages/com/gregtechceu/gtceu/api/recipe/chance/logic/$ChanceLogic"
import {$GTOreDefinition, $GTOreDefinition$Type} from "packages/com/gregtechceu/gtceu/api/data/worldgen/$GTOreDefinition"
import {$AnimationTexture, $AnimationTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$UUIDWrapper, $UUIDWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ChemicalHelper, $ChemicalHelper$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/$ChemicalHelper"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$IngredientWrapper, $IngredientWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$PartAbility, $PartAbility$Type} from "packages/com/gregtechceu/gtceu/api/machine/multiblock/$PartAbility"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GTMachines, $GTMachines$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTMachines"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$JsonIO, $JsonIO$Type} from "packages/dev/latvian/mods/kubejs/util/$JsonIO"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"
import {$DirectionWrapper, $DirectionWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper"
import {$HazardProperty, $HazardProperty$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$HazardProperty"
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$OverclockingLogic, $OverclockingLogic$Type} from "packages/com/gregtechceu/gtceu/api/recipe/$OverclockingLogic"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$KMath, $KMath$Type} from "packages/dev/latvian/mods/kubejs/bindings/$KMath"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$ColorWrapper, $ColorWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper"
import {$NBTUtils, $NBTUtils$Type} from "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils"
import {$GTMultiMachines, $GTMultiMachines$Type} from "packages/com/gregtechceu/gtceu/common/data/machines/$GTMultiMachines"
import {$TextBoxWidget, $TextBoxWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GTMaterialBlocks, $GTMaterialBlocks$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTMaterialBlocks"
import {$GTBlocks, $GTBlocks$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTBlocks"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$MachineModifiers, $MachineModifiers$Type} from "packages/com/gregtechceu/gtceu/integration/kjs/helpers/$MachineModifiers"
import {$RotationState, $RotationState$Type} from "packages/com/gregtechceu/gtceu/api/data/$RotationState"
import {$FluidStorageKeys, $FluidStorageKeys$Type} from "packages/com/gregtechceu/gtceu/api/fluids/store/$FluidStorageKeys"
import {$GTMaterials, $GTMaterials$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTMaterials"
import {$TextWrapper, $TextWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Items, $Items$Type} from "packages/net/minecraft/world/item/$Items"
import {$FluidAttributes, $FluidAttributes$Type} from "packages/com/gregtechceu/gtceu/api/fluids/attribute/$FluidAttributes"
import {$TagPrefix, $TagPrefix$Type} from "packages/com/gregtechceu/gtceu/api/data/tag/$TagPrefix"
import {$ColorRectTexture, $ColorRectTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture"
import {$MaterialFlags, $MaterialFlags$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/info/$MaterialFlags"
import {$Math, $Math$Type} from "packages/java/lang/$Math"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$ItemWrapper, $ItemWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper"
import {$ModifierFunction, $ModifierFunction$Type} from "packages/com/gregtechceu/gtceu/api/recipe/modifier/$ModifierFunction"
import {$GTCEu, $GTCEu$Type} from "packages/com/gregtechceu/gtceu/$GTCEu"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$UnificationEntry, $UnificationEntry$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/stack/$UnificationEntry"
import {$CleanroomType, $CleanroomType$Type} from "packages/com/gregtechceu/gtceu/api/machine/multiblock/$CleanroomType"
import {$GTMachineUtils, $GTMachineUtils$Type} from "packages/com/gregtechceu/gtceu/common/data/machines/$GTMachineUtils"
import {$BlockSelectorWidget, $BlockSelectorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget"
import {$FluidAmounts, $FluidAmounts$Type} from "packages/dev/latvian/mods/kubejs/util/$FluidAmounts"
import {$DraggableWidgetGroup, $DraggableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup"
import {$UtilsWrapper, $UtilsWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$MedicalCondition, $MedicalCondition$Type} from "packages/com/gregtechceu/gtceu/api/data/medicalcondition/$MedicalCondition"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"
import {$ProgressWidget, $ProgressWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget"
import {$FluidWrapper, $FluidWrapper$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$TreeListWidget, $TreeListWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget"
import {$MultiblockShapeInfo, $MultiblockShapeInfo$Type} from "packages/com/gregtechceu/gtceu/api/pattern/$MultiblockShapeInfo"
import {$BlockStateProperties, $BlockStateProperties$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GTCEuAPI, $GTCEuAPI$Type} from "packages/com/gregtechceu/gtceu/api/$GTCEuAPI"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$TagPrefix$Conditions, $TagPrefix$Conditions$Type} from "packages/com/gregtechceu/gtceu/api/data/tag/$TagPrefix$Conditions"
import {$AABBWrapper, $AABBWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper"
import {$GCYMMachines, $GCYMMachines$Type} from "packages/com/gregtechceu/gtceu/common/data/machines/$GCYMMachines"
import {$CraftingComponent, $CraftingComponent$Type} from "packages/com/gregtechceu/gtceu/data/recipe/$CraftingComponent"
import {$GCYMBlocks, $GCYMBlocks$Type} from "packages/com/gregtechceu/gtceu/common/data/$GCYMBlocks"
import {$GTSoundEntries, $GTSoundEntries$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTSoundEntries"
import {$ShaderTexture, $ShaderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture"
import {$MaterialIconSet, $MaterialIconSet$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/info/$MaterialIconSet"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$GTElements, $GTElements$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTElements"
import {$PhantomFluidWidget, $PhantomFluidWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget"
import {$GTRecipeCategories, $GTRecipeCategories$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTRecipeCategories"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DraggableScrollableWidgetGroup, $DraggableScrollableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup"
import {$ToolProperty, $ToolProperty$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$ToolProperty"
import {$GTRecipeTypes, $GTRecipeTypes$Type} from "packages/com/gregtechceu/gtceu/common/data/$GTRecipeTypes"
import {$PhantomSlotWidget, $PhantomSlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget"
import {$FluidState, $FluidState$Type} from "packages/com/gregtechceu/gtceu/api/fluids/$FluidState"

declare global {
const GCYMBlocks: typeof $GCYMBlocks
const Platform: typeof $PlatformWrapper
const ProgressTexture: typeof $ProgressTexture
const OutputItem: typeof $OutputItem
const RotationAxis: typeof $RotationAxis
const TextBoxWidget: typeof $TextBoxWidget
const FactoryBlockPattern: typeof $FactoryBlockPattern
const GuiTextureGroup: typeof $GuiTextureGroup
const SlotWidget: typeof $SlotWidget
const GCYMMachines: typeof $GCYMMachines
const ModularUI: typeof $ModularUI
const GTMaterialIconSet: typeof $MaterialIconSet
const ForgeModEvents: $ForgeEventWrapper
const GTBlocks: typeof $GTBlocks
const Painter: $Painter
const ImageWidget: typeof $ImageWidget
const PhantomFluidWidget: typeof $PhantomFluidWidget
const FillDirection: typeof $ProgressTexture$FillDirection
const GTValues: typeof $GTValues
const ResourceBorderTexture: typeof $ResourceBorderTexture
const GTElements: typeof $GTElements
const GTMaterialRegistry: $MaterialRegistryManager
const GTMaterials: typeof $GTMaterials
const Matrix4f: typeof $Matrix4f
const PhantomSlotWidget: typeof $PhantomSlotWidget
const GTDikeBlockDefinition: typeof $DikeVeinGenerator$DikeBlockDefinition
const TabButton: typeof $TabButton
const Vector3f: typeof $Vector3f
const TextFieldWidget: typeof $TextFieldWidget
const JavaMath: typeof $Math
const GTOreVein: typeof $GTOreDefinition
const DraggableScrollableWidgetGroup: typeof $DraggableScrollableWidgetGroup
const UnificationEntry: typeof $UnificationEntry
const GTMaterialIconType: typeof $MaterialIconType
const GTCEu: typeof $GTCEu
const HazardProperty: typeof $HazardProperty
const global: $HashMap<(any), (any)>
const DraggableWidgetGroup: typeof $DraggableWidgetGroup
const IngredientHelper: $IngredientForgeHelper
const Notification: typeof $NotificationBuilder
const ChanceLogic: typeof $ChanceLogic
const AnimationTexture: typeof $AnimationTexture
const Matrix3f: typeof $Matrix3f
const MachineModifiers: typeof $MachineModifiers
const ResourceLocation: typeof $ResourceLocation
const BlockProperties: typeof $BlockStateProperties
const GTMaterialBlocks: typeof $GTMaterialBlocks
const GTRecipeCategories: typeof $GTRecipeCategories
const Symptom: typeof $Symptom
const SceneWidget: typeof $SceneWidget
const Java: $JavaWrapper
const Blocks: typeof $Blocks
const GTWorldGenLayers: typeof $WorldGenLayers
const GTMachineUtils: typeof $GTMachineUtils
const SelectableWidgetGroup: typeof $SelectableWidgetGroup
const GTMaterialItems: typeof $GTMaterialItems
const Quaternionf: typeof $Quaternionf
const ColorRectTexture: typeof $ColorRectTexture
const WidgetGroup: typeof $WidgetGroup
const Text: typeof $TextWrapper
const LabelWidget: typeof $LabelWidget
const PropertyKey: typeof $PropertyKey
const ToolProperty: typeof $ToolProperty
const GTLayerPattern: typeof $GTLayerPattern
const CleanroomType: typeof $CleanroomType
const GTMedicalConditions: typeof $GTMedicalConditions
const TankWidget: typeof $TankWidget
const GTSoundEntries: typeof $GTSoundEntries
const MultiblockShapeInfo: typeof $MultiblockShapeInfo
const GTFluidAttributes: typeof $FluidAttributes
const TabContainer: typeof $TabContainer
const ItemGenerationCondition: typeof $TagPrefix$Conditions
const GTRecipeModifiers: typeof $GTRecipeModifiers
const ProgressWidget: typeof $ProgressWidget
const GTMultiMachines: typeof $GTMultiMachines
const Items: typeof $Items
const MINUTE: double
const BlockPos: typeof $BlockPos
const Client: $Minecraft
const SoundType: typeof $SoundType
const GTCEuAPI: typeof $GTCEuAPI
const Fluid: typeof $FluidWrapper
const Duration: typeof $Duration
const SwitchWidget: typeof $SwitchWidget
const ShaderTexture: typeof $ShaderTexture
const DialogWidget: typeof $DialogWidget
const ButtonWidget: typeof $ButtonWidget
const RotationState: typeof $RotationState
const GTFluidState: typeof $FluidState
const GTOres: typeof $GTOres
const KMath: typeof $KMath
const Stats: typeof $Stats
const Block: typeof $BlockWrapper
const Predicates: typeof $Predicates
const GTMachines: typeof $GTMachines
const RecipeCapability: typeof $RecipeCapability
const GTItems: typeof $GTItems
const CraftingComponent: typeof $CraftingComponent
const GTRecipeTypes: typeof $GTRecipeTypes
const HOUR: double
const GTFluidStorageKeys: typeof $FluidStorageKeys
const MachineConstructors: typeof $MachineConstructors
const GuiSize: typeof $Size
const Vec4f: typeof $Vector4f
const TagPrefix: typeof $TagPrefix
const BlockSelectorWidget: typeof $BlockSelectorWidget
const GuiTextures: typeof $GuiTextures
const TreeListWidget: typeof $TreeListWidget
const TextTexture: typeof $TextTexture
const GTRegistries: typeof $GTRegistries
const Component: typeof $TextWrapper
const GTFluidBuilder: typeof $FluidBuilder
const PartAbility: typeof $PartAbility
const console: $ConsoleJS
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const ItemStackTexture: typeof $ItemStackTexture
const DamageSource: typeof $DamageSource
const ResourceTexture: typeof $ResourceTexture
const ChemicalHelper: typeof $ChemicalHelper
const MedicalCondition: typeof $MedicalCondition
const Vec3f: typeof $Vector3f
const Vec3d: typeof $Vec3
const GTMaterialFlags: typeof $MaterialFlags
const GuiPos: typeof $Position
const GTToolType: typeof $GTToolType
const ForgeEvents: $ForgeEventWrapper
const InputItem: typeof $InputItem
const SECOND: double
export import NBT = $NBTUtils
export import Facing = $DirectionWrapper
export import OverclockingLogic = $OverclockingLogic
export import Color = $ColorWrapper
export import NBTIO = $NBTIOWrapper
export import Direction = $DirectionWrapper
export import Item = $ItemWrapper
export import Utils = $UtilsWrapper
export import Ingredient = $IngredientWrapper
export import ModifierFunction = $ModifierFunction
export import BlockStatePredicate = $BlockStatePredicate
export import UUID = $UUIDWrapper
export import AABB = $AABBWrapper
export import FluidAmounts = $FluidAmounts
}