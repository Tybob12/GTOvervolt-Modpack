declare module "packages/ca/teamdman/sfm/common/block/$CableFacadeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FacadeTransparency, $FacadeTransparency$Type} from "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableBlock, $CableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$CableBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$IFacadableBlock, $IFacadableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$IFacadableBlock"

export class $CableFacadeBlock extends $CableBlock implements $EntityBlock, $IFacadableBlock {
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

public "getStateForPlacementByFacadePlan"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $FacadeTransparency$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getNonFacadeBlock"(): $IFacadableBlock
public "getFacadeBlock"(): $IFacadableBlock
get "nonFacadeBlock"(): $IFacadableBlock
get "facadeBlock"(): $IFacadableBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableFacadeBlock$Type = ($CableFacadeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableFacadeBlock_ = $CableFacadeBlock$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanRedstoneContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$SFMLParser$ComparisonOpContext, $SFMLParser$ComparisonOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ComparisonOpContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$List, $List$Type} from "packages/java/util/$List"

export class $SFMLParser$BooleanRedstoneContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "number"(): $SFMLParser$NumberContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "comparisonOp"(): $SFMLParser$ComparisonOpContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "REDSTONE"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanRedstoneContext$Type = ($SFMLParser$BooleanRedstoneContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanRedstoneContext_ = $SFMLParser$BooleanRedstoneContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$LabelAccess" {
import {$DirectionQualifier, $DirectionQualifier$Type} from "packages/ca/teamdman/sfml/ast/$DirectionQualifier"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$LabelPositionHolder, $LabelPositionHolder$Type} from "packages/ca/teamdman/sfm/common/program/$LabelPositionHolder"
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$NumberRangeSet, $NumberRangeSet$Type} from "packages/ca/teamdman/sfml/ast/$NumberRangeSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$RoundRobin, $RoundRobin$Type} from "packages/ca/teamdman/sfml/ast/$RoundRobin"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LabelAccess extends $Record implements $ASTNode {

constructor(labels: $List$Type<($Label$Type)>, directions: $DirectionQualifier$Type, slots: $NumberRangeSet$Type, roundRobin: $RoundRobin$Type)

public "labels"(): $List<($Label)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slots"(): $NumberRangeSet
public "getLabelledPositions"(arg0: $LabelPositionHolder$Type): $ArrayList<($Pair<($Label), ($BlockPos)>)>
public "directions"(): $DirectionQualifier
public "roundRobin"(): $RoundRobin
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelAccess$Type = ($LabelAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelAccess_ = $LabelAccess$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$PrintingPressBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PrintingPressBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintingPressBlockItem$Type = ($PrintingPressBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintingPressBlockItem_ = $PrintingPressBlockItem$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanDisjunctionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanDisjunctionContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "OR"(): $TerminalNode
public "boolexpr"(arg0: integer): $SFMLParser$BoolexprContext
public "boolexpr"(): $List<($SFMLParser$BoolexprContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanDisjunctionContext$Type = ($SFMLParser$BooleanDisjunctionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanDisjunctionContext_ = $SFMLParser$BooleanDisjunctionContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$SFMLParser$ResourceLimitContext, $SFMLParser$ResourceLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitContext"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ResourceLimitListContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceLimit"(): $List<($SFMLParser$ResourceLimitContext)>
public "resourceLimit"(arg0: integer): $SFMLParser$ResourceLimitContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(): $List<($TerminalNode)>
public "COMMA"(arg0: integer): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceLimitListContext$Type = ($SFMLParser$ResourceLimitListContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceLimitListContext_ = $SFMLParser$ResourceLimitListContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$NetworkToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $NetworkToolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getCapabilityProviderPositions"(arg0: $ItemStack$Type): $Set<($BlockPos)>
public static "setCapabilityProviderPositions"(arg0: $ItemStack$Type, arg1: $Set$Type<($BlockPos$Type)>): void
public static "getOverlayEnabled"(arg0: $ItemStack$Type): boolean
public static "setOverlayEnabled"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getCablePositions"(arg0: $ItemStack$Type): $Set<($BlockPos)>
public static "setCablePositions"(arg0: $ItemStack$Type, arg1: $Set$Type<($BlockPos$Type)>): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolItem$Type = ($NetworkToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkToolItem_ = $NetworkToolItem$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$CableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ICableBlock, $ICableBlock$Type} from "packages/ca/teamdman/sfm/common/cablenetwork/$ICableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FacadeTransparency, $FacadeTransparency$Type} from "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IFacadableBlock, $IFacadableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$IFacadableBlock"

export class $CableBlock extends $Block implements $ICableBlock, $IFacadableBlock {
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

public "getStateForPlacementByFacadePlan"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $FacadeTransparency$Type): $BlockState
public "getNonFacadeBlock"(): $IFacadableBlock
public "getFacadeBlock"(): $IFacadableBlock
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
get "nonFacadeBlock"(): $IFacadableBlock
get "facadeBlock"(): $IFacadableBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlock$Type = ($CableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlock_ = $CableBlock$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithClauseContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$WithClauseContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithClauseContext$Type = ($SFMLParser$WithClauseContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithClauseContext_ = $SFMLParser$WithClauseContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanHasContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$SFMLParser$ComparisonOpContext, $SFMLParser$ComparisonOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ComparisonOpContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$ResourceIdDisjunctionContext, $SFMLParser$ResourceIdDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdDisjunctionContext"
import {$SFMLParser$SetOpContext, $SFMLParser$SetOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SetOpContext"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$WithContext, $SFMLParser$WithContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithContext"
import {$SFMLParser$ResourceIdListContext, $SFMLParser$ResourceIdListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdListContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"

export class $SFMLParser$BooleanHasContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "number"(): $SFMLParser$NumberContext
public "with"(): $SFMLParser$WithContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "comparisonOp"(): $SFMLParser$ComparisonOpContext
public "resourceIdDisjunction"(): $SFMLParser$ResourceIdDisjunctionContext
public "resourceIdList"(): $SFMLParser$ResourceIdListContext
public "labelAccess"(): $SFMLParser$LabelAccessContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "setOp"(): $SFMLParser$SetOpContext
public "EXCEPT"(): $TerminalNode
public "HAS"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanHasContext$Type = ($SFMLParser$BooleanHasContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanHasContext_ = $SFMLParser$BooleanHasContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BlockContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$StatementContext, $SFMLParser$StatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StatementContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BlockContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "statement"(): $List<($SFMLParser$StatementContext)>
public "statement"(arg0: integer): $SFMLParser$StatementContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BlockContext$Type = ($SFMLParser$BlockContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BlockContext_ = $SFMLParser$BlockContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/recipe/$NotContainer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $NotContainer extends $Container {

 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "setChanged"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "clearContent"(): void
 "getMaxStackSize"(): integer
 "stillValid"(arg0: $Player$Type): boolean
 "startOpen"(arg0: $Player$Type): void
 "stopOpen"(arg0: $Player$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "countItem"(arg0: $Item$Type): integer
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
}

export namespace $NotContainer {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotContainer$Type = ($NotContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotContainer_ = $NotContainer$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceQuantity$IdExpansionBehaviour" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ResourceQuantity$IdExpansionBehaviour extends $Enum<($ResourceQuantity$IdExpansionBehaviour)> {
static readonly "EXPAND": $ResourceQuantity$IdExpansionBehaviour
static readonly "NO_EXPAND": $ResourceQuantity$IdExpansionBehaviour


public static "values"(): ($ResourceQuantity$IdExpansionBehaviour)[]
public static "valueOf"(arg0: string): $ResourceQuantity$IdExpansionBehaviour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceQuantity$IdExpansionBehaviour$Type = (("expand") | ("no_expand")) | ($ResourceQuantity$IdExpansionBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceQuantity$IdExpansionBehaviour_ = $ResourceQuantity$IdExpansionBehaviour$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ComparisonOpContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ComparisonOpContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "LE"(): $TerminalNode
public "EQ"(): $TerminalNode
public "LT"(): $TerminalNode
public "GT"(): $TerminalNode
public "GE"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "GT_SYMBOL"(): $TerminalNode
public "LT_SYMBOL"(): $TerminalNode
public "EQ_SYMBOL"(): $TerminalNode
public "LE_SYMBOL"(): $TerminalNode
public "GE_SYMBOL"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ComparisonOpContext$Type = ($SFMLParser$ComparisonOpContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ComparisonOpContext_ = $SFMLParser$ComparisonOpContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$LimitedOutputSlot" {
import {$LimitedSlot, $LimitedSlot$Type} from "packages/ca/teamdman/sfm/common/program/$LimitedSlot"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IOutputResourceTracker, $IOutputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IOutputResourceTracker"

export class $LimitedOutputSlot<STACK, ITEM, CAP> implements $LimitedSlot<(STACK), (ITEM), (CAP)> {
 "type": $ResourceType<(STACK), (ITEM), (CAP)>
 "handler": CAP
 "pos": $BlockPos
 "label": $Label
 "slot": integer
 "freed": boolean
 "tracker": $IOutputResourceTracker
 "direction": $Direction

constructor(arg0: $Label$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: integer, arg4: CAP, arg5: $IOutputResourceTracker$Type, arg6: STACK, arg7: $ResourceType$Type<(STACK), (ITEM), (CAP)>)

public "getHandler"(): CAP
public "getLabel"(): $Label
public "toString"(): string
public "insert"(arg0: STACK, arg1: boolean): STACK
public "init"(arg0: CAP, arg1: $Label$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: integer, arg5: $IOutputResourceTracker$Type, arg6: STACK, arg7: $ResourceType$Type<(STACK), (ITEM), (CAP)>): void
public "getType"(): $ResourceType<(STACK), (ITEM), (CAP)>
public "getSlot"(): integer
public "getDirection"(): $Direction
public "getStackInSlot"(): STACK
public "isDone"(): boolean
public "getPos"(): $BlockPos
get "handler"(): CAP
get "label"(): $Label
get "type"(): $ResourceType<(STACK), (ITEM), (CAP)>
get "slot"(): integer
get "direction"(): $Direction
get "stackInSlot"(): STACK
get "done"(): boolean
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedOutputSlot$Type<STACK, ITEM, CAP> = ($LimitedOutputSlot<(STACK), (ITEM), (CAP)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimitedOutputSlot_<STACK, ITEM, CAP> = $LimitedOutputSlot$Type<(STACK), (ITEM), (CAP)>;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$LabelContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$LabelContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$LabelContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$LabelContext$Type = ($SFMLParser$LabelContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$LabelContext_ = $SFMLParser$LabelContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceIdContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ResourceIdContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$ResourceIdContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceIdContext$Type = ($SFMLParser$ResourceIdContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceIdContext_ = $SFMLParser$ResourceIdContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceQuantity" {
import {$ResourceQuantity$IdExpansionBehaviour, $ResourceQuantity$IdExpansionBehaviour$Type} from "packages/ca/teamdman/sfml/ast/$ResourceQuantity$IdExpansionBehaviour"
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$Number, $Number$Type} from "packages/ca/teamdman/sfml/ast/$Number"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $ResourceQuantity extends $Record implements $ASTNode {
static readonly "UNSET": $ResourceQuantity
static readonly "MAX_QUANTITY": $ResourceQuantity

constructor(number: $Number$Type, idExpansionBehaviour: $ResourceQuantity$IdExpansionBehaviour$Type)

public "number"(): $Number
public "add"(arg0: $ResourceQuantity$Type): $ResourceQuantity
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "idExpansionBehaviour"(): $ResourceQuantity$IdExpansionBehaviour
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceQuantity$Type = ($ResourceQuantity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceQuantity_ = $ResourceQuantity$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$QuantityContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$QuantityContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "number"(): $SFMLParser$NumberContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "EACH"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$QuantityContext$Type = ($SFMLParser$QuantityContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$QuantityContext_ = $SFMLParser$QuantityContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$DirectionQualifier" {
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Side, $Side$Type} from "packages/ca/teamdman/sfml/ast/$Side"
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $DirectionQualifier extends $Record implements $ASTNode, $Iterable<($Direction)> {
static readonly "NULL_DIRECTION": $DirectionQualifier
static readonly "EVERY_DIRECTION": $DirectionQualifier

constructor(directions: $EnumSet$Type<($Direction$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<($Direction)>
public "stream"(): $Stream<($Direction)>
public static "lookup"(arg0: $Side$Type): $Direction
public static "directionToString"(arg0: $Direction$Type): string
public "directions"(): $EnumSet<($Direction)>
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "spliterator"(): $Spliterator<($Direction)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Direction>;
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionQualifier$Type = ($DirectionQualifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionQualifier_ = $DirectionQualifier$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$FancyCableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FacadeTransparency, $FacadeTransparency$Type} from "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableBlock, $CableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$CableBlock"
import {$IFacadableBlock, $IFacadableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$IFacadableBlock"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FancyCableBlock extends $CableBlock implements $IFacadableBlock {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE_CORE": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "SHAPE_UP": $VoxelShape
static readonly "SHAPE_DOWN": $VoxelShape
static readonly "DIRECTION_PROPERTIES": $Map<($Direction), ($BooleanProperty)>
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

public "getStateForPlacementByFacadePlan"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $FacadeTransparency$Type): $BlockState
public "getNonFacadeBlock"(): $IFacadableBlock
public "getFacadeBlock"(): $IFacadableBlock
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
get "nonFacadeBlock"(): $IFacadableBlock
get "facadeBlock"(): $IFacadableBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyCableBlock$Type = ($FancyCableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyCableBlock_ = $FancyCableBlock$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$LimitedSlot" {
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LimitedSlot<STACK, ITEM, CAP> {

 "getHandler"(): CAP
 "getLabel"(): $Label
 "getType"(): $ResourceType<(STACK), (ITEM), (CAP)>
 "getSlot"(): integer
 "getDirection"(): $Direction
 "getPos"(): $BlockPos
}

export namespace $LimitedSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedSlot$Type<STACK, ITEM, CAP> = ($LimitedSlot<(STACK), (ITEM), (CAP)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimitedSlot_<STACK, ITEM, CAP> = $LimitedSlot$Type<(STACK), (ITEM), (CAP)>;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$StringLabelContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$LabelContext, $SFMLParser$LabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelContext"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"

export class $SFMLParser$StringLabelContext extends $SFMLParser$LabelContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$LabelContext$Type)

public "string"(): $SFMLParser$StringContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$StringLabelContext$Type = ($SFMLParser$StringLabelContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$StringLabelContext_ = $SFMLParser$StringLabelContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Statement" {
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $Statement extends $ASTNode {

 "tick"(arg0: $ProgramContext$Type): void
 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
 "getStatements"(): $List<($Statement)>

(arg0: $ProgramContext$Type): void
}

export namespace $Statement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Statement$Type = ($Statement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Statement_ = $Statement$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$ProgramBehaviour" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProgramBehaviour {

 "fork"(): $ProgramBehaviour

(): $ProgramBehaviour
}

export namespace $ProgramBehaviour {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramBehaviour$Type = ($ProgramBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgramBehaviour_ = $ProgramBehaviour$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$StringContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$StringContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "STRING"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$StringContext$Type = ($SFMLParser$StringContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$StringContext_ = $SFMLParser$StringContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$WithTag" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TagMatcher, $TagMatcher$Type} from "packages/ca/teamdman/sfml/ast/$TagMatcher"
import {$WithClause, $WithClause$Type} from "packages/ca/teamdman/sfml/ast/$WithClause"

export class $WithTag extends $Record implements $ASTNode, $WithClause, $ToStringPretty {

constructor(tagMatcher: $TagMatcher$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matchesStack"<STACK>(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
public "tagMatcher"(): $TagMatcher
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "toStringPretty"(): string
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithTag$Type = ($WithTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithTag_ = $WithTag$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$LabelPositionHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LabelPositionHolder extends $Record {

constructor(labels: $Map$Type<(string), ($HashSet$Type<($BlockPos$Type)>)>)

public "labels"(): $Map<(string), ($HashSet<($BlockPos)>)>
public "getLabels"(arg0: $BlockPos$Type): $Set<(string)>
public static "deserialize"(arg0: $CompoundTag$Type): $LabelPositionHolder
public "add"(arg0: string, arg1: $BlockPos$Type): $LabelPositionHolder
public "remove"(arg0: string, arg1: $BlockPos$Type): $LabelPositionHolder
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clear"(): $LabelPositionHolder
public static "clear"(arg0: $ItemStack$Type): void
public "isEmpty"(): boolean
public "contains"(arg0: string, arg1: $BlockPos$Type): boolean
public static "from"(arg0: $ItemStack$Type): $LabelPositionHolder
public "addAll"(arg0: string, arg1: $Collection$Type<($BlockPos$Type)>): $LabelPositionHolder
public static "empty"(): $LabelPositionHolder
public "forEach"(arg0: $BiConsumer$Type<(string), ($BlockPos$Type)>): $LabelPositionHolder
public "save"(arg0: $ItemStack$Type): $LabelPositionHolder
public "removeIf"(arg0: $BiPredicate$Type<(string), ($BlockPos$Type)>): $LabelPositionHolder
public "removeIf"(arg0: $Predicate$Type<(string)>): $LabelPositionHolder
public "removeAll"(arg0: $BlockPos$Type): $LabelPositionHolder
public "getPositionsMut"(arg0: string): $Set<($BlockPos)>
public "toDebugString"(): string
public "asHoverText"(): $List<($Component)>
public "getPositions"(arg0: string): $Set<($BlockPos)>
public "addReferencedLabel"(arg0: string): $LabelPositionHolder
public "serialize"(): $CompoundTag
public "prune"(): $LabelPositionHolder
public "toggle"(arg0: string, arg1: $BlockPos$Type): $LabelPositionHolder
public "toOwned"(): $LabelPositionHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelPositionHolder$Type = ($LabelPositionHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelPositionHolder_ = $LabelPositionHolder$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$PrintingPressBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PrintingPressBlock extends $BaseEntityBlock implements $EntityBlock {
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintingPressBlock$Type = ($PrintingPressBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintingPressBlock_ = $PrintingPressBlock$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPath" {
import {$SimulateExploreAllPathsProgramBehaviour$Branch, $SimulateExploreAllPathsProgramBehaviour$Branch$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$Branch"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement, $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement"

export class $SimulateExploreAllPathsProgramBehaviour$ExecutionPath extends $Record {

constructor()
constructor(history: $List$Type<($SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stream"(): $Stream<($SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement)>
public "fork"(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath
public "history"(): $List<($SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement)>
public "streamBranches"(): $Stream<($SimulateExploreAllPathsProgramBehaviour$Branch)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPath$Type = ($SimulateExploreAllPathsProgramBehaviour$ExecutionPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPath_ = $SimulateExploreAllPathsProgramBehaviour$ExecutionPath$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$LabelGunItem" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LabelGunItem$LabelGunViewMode, $LabelGunItem$LabelGunViewMode$Type} from "packages/ca/teamdman/sfm/common/item/$LabelGunItem$LabelGunViewMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LabelGunItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getActiveLabel"(arg0: $ItemStack$Type): string
public static "clearActiveLabel"(arg0: $ItemStack$Type): void
public static "setActiveLabel"(arg0: $ItemStack$Type, arg1: string): void
public static "getViewMode"(arg0: $ItemStack$Type): $LabelGunItem$LabelGunViewMode
public static "cycleViewMode"(arg0: $ItemStack$Type): void
public static "setViewMode"(arg0: $ItemStack$Type, arg1: $LabelGunItem$LabelGunViewMode$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getNextLabel"(arg0: $ItemStack$Type, arg1: integer): string
public static "clearAll"(arg0: $ItemStack$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelGunItem$Type = ($LabelGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelGunItem_ = $LabelGunItem$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$RoundRobin" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$RoundRobin$Behaviour, $RoundRobin$Behaviour$Type} from "packages/ca/teamdman/sfml/ast/$RoundRobin$Behaviour"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LabelPositionHolder, $LabelPositionHolder$Type} from "packages/ca/teamdman/sfm/common/program/$LabelPositionHolder"

export class $RoundRobin implements $ASTNode {

constructor(arg0: $RoundRobin$Behaviour$Type)

public "isEnabled"(): boolean
public "toString"(): string
public "next"(arg0: integer): integer
public "getBehaviour"(): $RoundRobin$Behaviour
public "getPositionsForLabels"(arg0: $List$Type<($Label$Type)>, arg1: $LabelPositionHolder$Type): $ArrayList<($Pair<($Label), ($BlockPos)>)>
public static "disabled"(): $RoundRobin
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "enabled"(): boolean
get "behaviour"(): $RoundRobin$Behaviour
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoundRobin$Type = ($RoundRobin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoundRobin_ = $RoundRobin$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$IFacadableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$FacadeTransparency, $FacadeTransparency$Type} from "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFacadableBlock {

 "getStateForPlacementByFacadePlan"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $FacadeTransparency$Type): $BlockState
 "getNonFacadeBlock"(): $IFacadableBlock
 "getFacadeBlock"(): $IFacadableBlock
}

export namespace $IFacadableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadableBlock$Type = ($IFacadableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadableBlock_ = $IFacadableBlock$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$WithClause" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $WithClause extends $ASTNode, $ToStringPretty {

 "matchesStack"<STACK>(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
 "getStatements"(): $List<($Statement)>
 "toStringPretty"(): string

(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
}

export namespace $WithClause {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithClause$Type = ($WithClause);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithClause_ = $WithClause$Type;
}}
declare module "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType" {
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$DirectionQualifier, $DirectionQualifier$Type} from "packages/ca/teamdman/sfml/ast/$DirectionQualifier"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LabelAccess, $LabelAccess$Type} from "packages/ca/teamdman/sfml/ast/$LabelAccess"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$NumberRangeSet, $NumberRangeSet$Type} from "packages/ca/teamdman/sfml/ast/$NumberRangeSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$CapabilityConsumer, $CapabilityConsumer$Type} from "packages/ca/teamdman/sfm/common/program/$CapabilityConsumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ResourceType<STACK, ITEM, CAP> {
readonly "CAPABILITY_KIND": $Capability<(CAP)>

constructor(arg0: $Capability$Type<(CAP)>)

public "getItem"(arg0: STACK): ITEM
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "extract"(arg0: CAP, arg1: integer, arg2: long, arg3: boolean): STACK
public "insert"(arg0: CAP, arg1: integer, arg2: STACK, arg3: boolean): STACK
public "isEmpty"(arg0: STACK): boolean
public "copy"(arg0: STACK): STACK
public "forEachDirectionalCapability"(arg0: $ProgramContext$Type, arg1: $DirectionQualifier$Type, arg2: $BlockPos$Type, arg3: $BiConsumer$Type<($Direction$Type), (CAP)>): void
public "getAmountDifference"(arg0: STACK, arg1: STACK): long
public "getMaxStackSizeForSlot"(arg0: CAP, arg1: integer): long
public "getEmptyStack"(): STACK
public "matchesStackType"(arg0: any): boolean
public "matchesStack"(arg0: $ResourceIdentifier$Type<(STACK), (ITEM), (CAP)>, arg1: any): boolean
public "getRegistryKeyForStack"(arg0: STACK): $ResourceLocation
public "matchesCapabilityType"(arg0: any): boolean
public "forEachCapability"(arg0: $ProgramContext$Type, arg1: $LabelAccess$Type, arg2: $CapabilityConsumer$Type<(CAP)>): void
public "getTagsForStack"(arg0: STACK): $Stream<($ResourceLocation)>
public "getStacksInSlots"(arg0: CAP, arg1: $NumberRangeSet$Type): $Stream<(STACK)>
public "registryKeyExists"(arg0: $ResourceLocation$Type): boolean
public "getRegistryKeyForItem"(arg0: ITEM): $ResourceLocation
public "getItemFromRegistryKey"(arg0: $ResourceLocation$Type): ITEM
public "getRegistryKeys"(): $Set<($ResourceLocation)>
public "displayAsCode"(): string
public "displayAsCapabilityClass"(): string
public "getMaxStackSize"(arg0: STACK): long
public "getStackInSlot"(arg0: CAP, arg1: integer): STACK
public "getAmount"(arg0: STACK): long
public "getSlots"(arg0: CAP): integer
public "getItems"(): $Collection<(ITEM)>
public "withCount"(arg0: STACK, arg1: long): STACK
get "emptyStack"(): STACK
get "registryKeys"(): $Set<($ResourceLocation)>
get "items"(): $Collection<(ITEM)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceType$Type<STACK, ITEM, CAP> = ($ResourceType<(STACK), (ITEM), (CAP)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceType_<STACK, ITEM, CAP> = $ResourceType$Type<(STACK), (ITEM), (CAP)>;
}}
declare module "packages/ca/teamdman/sfm/common/recipe/$PrintingPressRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PrintingPressRecipe, $PrintingPressRecipe$Type} from "packages/ca/teamdman/sfm/common/recipe/$PrintingPressRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PrintingPressRecipe$Serializer implements $RecipeSerializer<($PrintingPressRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PrintingPressRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PrintingPressRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PrintingPressRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PrintingPressRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintingPressRecipe$Serializer$Type = ($PrintingPressRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintingPressRecipe$Serializer_ = $PrintingPressRecipe$Serializer$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$InputStatement" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceLimits, $ResourceLimits$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimits"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$IOStatement, $IOStatement$Type} from "packages/ca/teamdman/sfml/ast/$IOStatement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$LimitedInputSlot, $LimitedInputSlot$Type} from "packages/ca/teamdman/sfm/common/program/$LimitedInputSlot"
import {$LabelAccess, $LabelAccess$Type} from "packages/ca/teamdman/sfml/ast/$LabelAccess"

export class $InputStatement implements $IOStatement {

constructor(arg0: $LabelAccess$Type, arg1: $ResourceLimits$Type, arg2: boolean)

public "tick"(arg0: $ProgramContext$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "each"(): boolean
public "transferSlotsTo"(arg0: $InputStatement$Type): void
public "freeSlotsIf"(arg0: $Predicate$Type<($LimitedInputSlot$Type<(any), (any), (any)>)>): void
public "gatherSlots"(arg0: $ProgramContext$Type, arg1: $Consumer$Type<($LimitedInputSlot$Type<(any), (any), (any)>)>): void
public "resourceLimits"(): $ResourceLimits
public "labelAccess"(): $LabelAccess
public "toStringPretty"(): string
public "freeSlots"(): void
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputStatement$Type = ($InputStatement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputStatement_ = $InputStatement$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$IdentifierContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "SECONDS"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "SECOND"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "REDSTONE"(): $TerminalNode
public "IDENTIFIER"(): $TerminalNode
public "GLOBAL"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$IdentifierContext$Type = ($SFMLParser$IdentifierContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$IdentifierContext_ = $SFMLParser$IdentifierContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "WITH"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "withClause"(): $SFMLParser$WithClauseContext
public "WITHOUT"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithContext$Type = ($SFMLParser$WithContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithContext_ = $SFMLParser$WithContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$FormItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FormItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getReference"(arg0: $ItemStack$Type): $ItemStack
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getForm"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormItem$Type = ($FormItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormItem_ = $FormItem$Type;
}}
declare module "packages/ca/teamdman/sfm/common/cablenetwork/$CableNetwork" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$TranslatableLogger, $TranslatableLogger$Type} from "packages/ca/teamdman/sfm/common/logging/$TranslatableLogger"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CableNetwork {

constructor(arg0: $Level$Type)

public "toString"(): string
public "isEmpty"(): boolean
public "getCapabilityProviderPositions"(): $Stream<($BlockPos)>
public "mergeNetwork"(arg0: $CableNetwork$Type): void
public "rebuildNetwork"(arg0: $BlockPos$Type): void
public "getCablePositions"(): $Stream<($BlockPos)>
public static "discoverCables"(arg0: $Level$Type, arg1: $BlockPos$Type): $Stream<($BlockPos)>
public "rebuildNetworkFromCache"(arg0: $BlockPos$Type, arg1: $CableNetwork$Type): void
public "bustCacheForChunk"(arg0: $ChunkAccess$Type): void
public "containsCablePosition"(arg0: $BlockPos$Type): boolean
public "getCableCount"(): integer
public "isAdjacentToCable"(arg0: $BlockPos$Type): boolean
public "getCablePositionsRaw"(): $LongSet
public "getCapability"<CAP>(arg0: $Capability$Type<(CAP)>, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $TranslatableLogger$Type): $LazyOptional<(CAP)>
public "getLevel"(): $Level
public static "isCable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "addCable"(arg0: $BlockPos$Type): void
get "empty"(): boolean
get "capabilityProviderPositions"(): $Stream<($BlockPos)>
get "cablePositions"(): $Stream<($BlockPos)>
get "cableCount"(): integer
get "cablePositionsRaw"(): $LongSet
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableNetwork$Type = ($CableNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableNetwork_ = $CableNetwork$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$NumberRangeSet" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$NumberRange, $NumberRange$Type} from "packages/ca/teamdman/sfml/ast/$NumberRange"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $NumberRangeSet extends $Record implements $ASTNode {
static readonly "MAX_RANGE": $NumberRangeSet

constructor(ranges: ($NumberRange$Type)[])

public "ranges"(): ($NumberRange)[]
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "contains"(arg0: integer): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberRangeSet$Type = ($NumberRangeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberRangeSet_ = $NumberRangeSet$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Program" {
import {$Trigger, $Trigger$Type} from "packages/ca/teamdman/sfml/ast/$Trigger"
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$ASTBuilder, $ASTBuilder$Type} from "packages/ca/teamdman/sfml/ast/$ASTBuilder"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ManagerBlockEntity, $ManagerBlockEntity$Type} from "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity"
import {$IfStatement, $IfStatement$Type} from "packages/ca/teamdman/sfml/ast/$IfStatement"
import {$OutputStatement, $OutputStatement$Type} from "packages/ca/teamdman/sfml/ast/$OutputStatement"

export class $Program extends $Record implements $Statement {
static readonly "MAX_PROGRAM_LENGTH": integer
static readonly "MAX_LABEL_LENGTH": integer

constructor(astBuilder: $ASTBuilder$Type, name: string, triggers: $List$Type<($Trigger$Type)>, referencedLabels: $Set$Type<(string)>, referencedResources: $Set$Type<($ResourceIdentifier$Type<(any), (any), (any)>)>)

public "tick"(arg0: $ProgramContext$Type): void
public "tick"(arg0: $ManagerBlockEntity$Type): boolean
public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "compile"(arg0: string, arg1: $Consumer$Type<($Program$Type)>, arg2: $Consumer$Type<($List$Type<($TranslatableContents$Type)>)>): void
public "getConditionIndex"(arg0: $IfStatement$Type): integer
public "replaceOutputStatement"(arg0: $OutputStatement$Type, arg1: $OutputStatement$Type): void
public "referencedResources"(): $Set<($ResourceIdentifier<(any), (any), (any)>)>
public "referencedLabels"(): $Set<(string)>
public "getStatements"(): $List<($Statement)>
public "astBuilder"(): $ASTBuilder
public "triggers"(): $List<($Trigger)>
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$Type = ($Program);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Program_ = $Program$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$With" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$With$WithMode, $With$WithMode$Type} from "packages/ca/teamdman/sfml/ast/$With$WithMode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$WithClause, $WithClause$Type} from "packages/ca/teamdman/sfml/ast/$WithClause"

export class $With extends $Record implements $WithClause, $ToStringPretty {
static readonly "ALWAYS_TRUE": $With

constructor(condition: $WithClause$Type, mode: $With$WithMode$Type)

public "condition"(): $WithClause
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mode"(): $With$WithMode
public "matchesStack"<STACK>(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
public "toStringPretty"(): string
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $With$Type = ($With);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $With_ = $With$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$TestBarrelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BarrelBlock, $BarrelBlock$Type} from "packages/net/minecraft/world/level/block/$BarrelBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TestBarrelBlock extends $BarrelBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
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

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestBarrelBlock$Type = ($TestBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestBarrelBlock_ = $TestBarrelBlock$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$ManagerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ICableBlock, $ICableBlock$Type} from "packages/ca/teamdman/sfm/common/cablenetwork/$ICableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ManagerBlock extends $BaseEntityBlock implements $EntityBlock, $ICableBlock {
static readonly "TRIGGERED": $BooleanProperty
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagerBlock$Type = ($ManagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagerBlock_ = $ManagerBlock$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RangesetContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$SFMLParser$RangeContext, $SFMLParser$RangeContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangeContext"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$RangesetContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "range"(): $List<($SFMLParser$RangeContext)>
public "range"(arg0: integer): $SFMLParser$RangeContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(): $List<($TerminalNode)>
public "COMMA"(arg0: integer): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RangesetContext$Type = ($SFMLParser$RangesetContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RangesetContext_ = $SFMLParser$RangesetContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$OutputStatement" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceLimits, $ResourceLimits$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimits"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$IOStatement, $IOStatement$Type} from "packages/ca/teamdman/sfml/ast/$IOStatement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LimitedOutputSlot, $LimitedOutputSlot$Type} from "packages/ca/teamdman/sfm/common/program/$LimitedOutputSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$LimitedInputSlot, $LimitedInputSlot$Type} from "packages/ca/teamdman/sfm/common/program/$LimitedInputSlot"
import {$LabelAccess, $LabelAccess$Type} from "packages/ca/teamdman/sfml/ast/$LabelAccess"

export class $OutputStatement implements $IOStatement {

constructor(arg0: $LabelAccess$Type, arg1: $ResourceLimits$Type, arg2: boolean)

public "tick"(arg0: $ProgramContext$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "each"(): boolean
public "gatherSlots"(arg0: $ProgramContext$Type, arg1: $Consumer$Type<($LimitedOutputSlot$Type<(any), (any), (any)>)>): void
public "resourceLimits"(): $ResourceLimits
public "labelAccess"(): $LabelAccess
public "toStringPretty"(): string
public static "moveTo"<STACK, ITEM, CAP>(arg0: $ProgramContext$Type, arg1: $LimitedInputSlot$Type<(STACK), (ITEM), (CAP)>, arg2: $LimitedOutputSlot$Type<(STACK), (ITEM), (CAP)>): void
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStatement$Type = ($OutputStatement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputStatement_ = $OutputStatement$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLBaseVisitor" {
import {$SFMLParser$QuantityLimitContext, $SFMLParser$QuantityLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityLimitContext"
import {$SFMLParser$TagMatcherContext, $SFMLParser$TagMatcherContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TagMatcherContext"
import {$SFMLParser$InputStatementContext, $SFMLParser$InputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputStatementContext"
import {$SFMLParser$ResourceContext, $SFMLParser$ResourceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceContext"
import {$SFMLParser$BooleanHasContext, $SFMLParser$BooleanHasContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanHasContext"
import {$SFMLParser$SideContext, $SFMLParser$SideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SideContext"
import {$SFMLParser$ResourceIdDisjunctionContext, $SFMLParser$ResourceIdDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdDisjunctionContext"
import {$SFMLParser$SetOpContext, $SFMLParser$SetOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SetOpContext"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$SFMLParser$RangesetContext, $SFMLParser$RangesetContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangesetContext"
import {$SFMLParser$BooleanTrueContext, $SFMLParser$BooleanTrueContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanTrueContext"
import {$SFMLParser$SlotqualifierContext, $SFMLParser$SlotqualifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SlotqualifierContext"
import {$SFMLParser$ComparisonOpContext, $SFMLParser$ComparisonOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ComparisonOpContext"
import {$SFMLVisitor, $SFMLVisitor$Type} from "packages/ca/teamdman/langs/$SFMLVisitor"
import {$SFMLParser$EachSideContext, $SFMLParser$EachSideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$EachSideContext"
import {$SFMLParser$BooleanParenContext, $SFMLParser$BooleanParenContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanParenContext"
import {$SFMLParser$ResourceLimitContext, $SFMLParser$ResourceLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitContext"
import {$SFMLParser$StringLabelContext, $SFMLParser$StringLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringLabelContext"
import {$SFMLParser$WithConjunctionContext, $SFMLParser$WithConjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithConjunctionContext"
import {$SFMLParser$IntervalNoSpaceContext, $SFMLParser$IntervalNoSpaceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalNoSpaceContext"
import {$SFMLParser$OutputResourceLimitsContext, $SFMLParser$OutputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputResourceLimitsContext"
import {$SFMLParser$RoundrobinContext, $SFMLParser$RoundrobinContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RoundrobinContext"
import {$SFMLParser$WithParenContext, $SFMLParser$WithParenContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithParenContext"
import {$SFMLParser$BooleanFalseContext, $SFMLParser$BooleanFalseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanFalseContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"
import {$SFMLParser$IdentifierContext, $SFMLParser$IdentifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext"
import {$SFMLParser$TimerTriggerContext, $SFMLParser$TimerTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TimerTriggerContext"
import {$SFMLParser$BooleanConjunctionContext, $SFMLParser$BooleanConjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanConjunctionContext"
import {$SFMLParser$ForgetStatementContext, $SFMLParser$ForgetStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ForgetStatementContext"
import {$SFMLParser$PulseTriggerContext, $SFMLParser$PulseTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$PulseTriggerContext"
import {$SFMLParser$BooleanDisjunctionContext, $SFMLParser$BooleanDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanDisjunctionContext"
import {$SFMLParser$WithNegationContext, $SFMLParser$WithNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithNegationContext"
import {$SFMLParser$WithDisjunctionContext, $SFMLParser$WithDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithDisjunctionContext"
import {$SFMLParser$BooleanNegationContext, $SFMLParser$BooleanNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanNegationContext"
import {$SFMLParser$InputResourceLimitsContext, $SFMLParser$InputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputResourceLimitsContext"
import {$SFMLParser$ProgramContext, $SFMLParser$ProgramContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ProgramContext"
import {$SFMLParser$WithTagContext, $SFMLParser$WithTagContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithTagContext"
import {$SFMLParser$OutputStatementContext, $SFMLParser$OutputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputStatementContext"
import {$SFMLParser$RetentionLimitContext, $SFMLParser$RetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionLimitContext"
import {$SFMLParser$RetentionContext, $SFMLParser$RetentionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionContext"
import {$SFMLParser$WithContext, $SFMLParser$WithContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithContext"
import {$SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceExclusionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext"
import {$SFMLParser$NameContext, $SFMLParser$NameContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NameContext"
import {$SFMLParser$ResourceIdListContext, $SFMLParser$ResourceIdListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdListContext"
import {$SFMLParser$QuantityRetentionLimitContext, $SFMLParser$QuantityRetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityRetentionLimitContext"
import {$SFMLParser$ResourceLimitListContext, $SFMLParser$ResourceLimitListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext"
import {$SFMLParser$StringResourceContext, $SFMLParser$StringResourceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringResourceContext"
import {$SFMLParser$ListedSidesContext, $SFMLParser$ListedSidesContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ListedSidesContext"
import {$SFMLParser$BooleanRedstoneContext, $SFMLParser$BooleanRedstoneContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanRedstoneContext"
import {$SFMLParser$QuantityContext, $SFMLParser$QuantityContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityContext"
import {$SFMLParser$IntervalSpaceContext, $SFMLParser$IntervalSpaceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalSpaceContext"
import {$SFMLParser$StatementContext, $SFMLParser$StatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StatementContext"
import {$SFMLParser$RangeContext, $SFMLParser$RangeContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangeContext"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"
import {$SFMLParser$RawLabelContext, $SFMLParser$RawLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RawLabelContext"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"
import {$AbstractParseTreeVisitor, $AbstractParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$AbstractParseTreeVisitor"
import {$SFMLParser$IfStatementContext, $SFMLParser$IfStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IfStatementContext"

export class $SFMLBaseVisitor<T> extends $AbstractParseTreeVisitor<(T)> implements $SFMLVisitor<(T)> {

constructor()

public "visitProgram"(arg0: $SFMLParser$ProgramContext$Type): T
public "visitTimerTrigger"(arg0: $SFMLParser$TimerTriggerContext$Type): T
public "visitPulseTrigger"(arg0: $SFMLParser$PulseTriggerContext$Type): T
public "visitIntervalSpace"(arg0: $SFMLParser$IntervalSpaceContext$Type): T
public "visitIntervalNoSpace"(arg0: $SFMLParser$IntervalNoSpaceContext$Type): T
public "visitForgetStatement"(arg0: $SFMLParser$ForgetStatementContext$Type): T
public "visitInputStatement"(arg0: $SFMLParser$InputStatementContext$Type): T
public "visitOutputStatement"(arg0: $SFMLParser$OutputStatementContext$Type): T
public "visitInputResourceLimits"(arg0: $SFMLParser$InputResourceLimitsContext$Type): T
public "visitOutputResourceLimits"(arg0: $SFMLParser$OutputResourceLimitsContext$Type): T
public "visitResourceLimitList"(arg0: $SFMLParser$ResourceLimitListContext$Type): T
public "visitResourceLimit"(arg0: $SFMLParser$ResourceLimitContext$Type): T
public "visitRetentionLimit"(arg0: $SFMLParser$RetentionLimitContext$Type): T
public "visitQuantityLimit"(arg0: $SFMLParser$QuantityLimitContext$Type): T
public "visitQuantity"(arg0: $SFMLParser$QuantityContext$Type): T
public "visitRetention"(arg0: $SFMLParser$RetentionContext$Type): T
public "visitResourceExclusion"(arg0: $SFMLParser$ResourceExclusionContext$Type): T
public "visitResource"(arg0: $SFMLParser$ResourceContext$Type): T
public "visitStringResource"(arg0: $SFMLParser$StringResourceContext$Type): T
public "visitResourceIdList"(arg0: $SFMLParser$ResourceIdListContext$Type): T
public "visitResourceIdDisjunction"(arg0: $SFMLParser$ResourceIdDisjunctionContext$Type): T
public "visitWithConjunction"(arg0: $SFMLParser$WithConjunctionContext$Type): T
public "visitWithParen"(arg0: $SFMLParser$WithParenContext$Type): T
public "visitWithNegation"(arg0: $SFMLParser$WithNegationContext$Type): T
public "visitWithTag"(arg0: $SFMLParser$WithTagContext$Type): T
public "visitWithDisjunction"(arg0: $SFMLParser$WithDisjunctionContext$Type): T
public "visitTagMatcher"(arg0: $SFMLParser$TagMatcherContext$Type): T
public "visitEachSide"(arg0: $SFMLParser$EachSideContext$Type): T
public "visitListedSides"(arg0: $SFMLParser$ListedSidesContext$Type): T
public "visitSlotqualifier"(arg0: $SFMLParser$SlotqualifierContext$Type): T
public "visitRangeset"(arg0: $SFMLParser$RangesetContext$Type): T
public "visitIfStatement"(arg0: $SFMLParser$IfStatementContext$Type): T
public "visitBooleanHas"(arg0: $SFMLParser$BooleanHasContext$Type): T
public "visitBooleanConjunction"(arg0: $SFMLParser$BooleanConjunctionContext$Type): T
public "visitBooleanRedstone"(arg0: $SFMLParser$BooleanRedstoneContext$Type): T
public "visitBooleanDisjunction"(arg0: $SFMLParser$BooleanDisjunctionContext$Type): T
public "visitBooleanFalse"(arg0: $SFMLParser$BooleanFalseContext$Type): T
public "visitBooleanParen"(arg0: $SFMLParser$BooleanParenContext$Type): T
public "visitBooleanNegation"(arg0: $SFMLParser$BooleanNegationContext$Type): T
public "visitBooleanTrue"(arg0: $SFMLParser$BooleanTrueContext$Type): T
public "visitComparisonOp"(arg0: $SFMLParser$ComparisonOpContext$Type): T
public "visitLabelAccess"(arg0: $SFMLParser$LabelAccessContext$Type): T
public "visitRoundrobin"(arg0: $SFMLParser$RoundrobinContext$Type): T
public "visitRawLabel"(arg0: $SFMLParser$RawLabelContext$Type): T
public "visitStringLabel"(arg0: $SFMLParser$StringLabelContext$Type): T
public "visitIdentifier"(arg0: $SFMLParser$IdentifierContext$Type): T
public "visitNumber"(arg0: $SFMLParser$NumberContext$Type): T
public "visitStatement"(arg0: $SFMLParser$StatementContext$Type): T
public "visitString"(arg0: $SFMLParser$StringContext$Type): T
public "visitQuantityRetentionLimit"(arg0: $SFMLParser$QuantityRetentionLimitContext$Type): T
public "visitName"(arg0: $SFMLParser$NameContext$Type): T
public "visitBlock"(arg0: $SFMLParser$BlockContext$Type): T
public "visitWith"(arg0: $SFMLParser$WithContext$Type): T
public "visitSide"(arg0: $SFMLParser$SideContext$Type): T
public "visitRange"(arg0: $SFMLParser$RangeContext$Type): T
public "visitSetOp"(arg0: $SFMLParser$SetOpContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLBaseVisitor$Type<T> = ($SFMLBaseVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLBaseVisitor_<T> = $SFMLBaseVisitor$Type<(T)>;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$NameContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"

export class $SFMLParser$NameContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "string"(): $SFMLParser$StringContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "NAME"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$NameContext$Type = ($SFMLParser$NameContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$NameContext_ = $SFMLParser$NameContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$TagMatcherContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$IdentifierContext, $SFMLParser$IdentifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext"

export class $SFMLParser$TagMatcherContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "identifier"(): $List<($SFMLParser$IdentifierContext)>
public "identifier"(arg0: integer): $SFMLParser$IdentifierContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COLON"(): $TerminalNode
public "SLASH"(arg0: integer): $TerminalNode
public "SLASH"(): $List<($TerminalNode)>
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$TagMatcherContext$Type = ($SFMLParser$TagMatcherContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$TagMatcherContext_ = $SFMLParser$TagMatcherContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$LocalizationEntry, $LocalizationEntry$Type} from "packages/ca/teamdman/sfm/common/localization/$LocalizationEntry"

export class $ManagerBlockEntity$State extends $Enum<($ManagerBlockEntity$State)> {
static readonly "NO_PROGRAM": $ManagerBlockEntity$State
static readonly "NO_DISK": $ManagerBlockEntity$State
static readonly "RUNNING": $ManagerBlockEntity$State
static readonly "INVALID_PROGRAM": $ManagerBlockEntity$State
readonly "COLOR": $ChatFormatting
readonly "LOC": $LocalizationEntry


public static "values"(): ($ManagerBlockEntity$State)[]
public static "valueOf"(arg0: string): $ManagerBlockEntity$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagerBlockEntity$State$Type = (("running") | ("invalid_program") | ("no_disk") | ("no_program")) | ($ManagerBlockEntity$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagerBlockEntity$State_ = $ManagerBlockEntity$State$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Trigger" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Block, $Block$Type} from "packages/ca/teamdman/sfml/ast/$Block"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IfStatement, $IfStatement$Type} from "packages/ca/teamdman/sfml/ast/$IfStatement"

export interface $Trigger extends $Statement {

 "getBlock"(): $Block
 "getConditionCount"(): integer
 "getConditionIndex"(arg0: $IfStatement$Type): integer
 "getStatements"(): $List<($Statement)>
 "shouldTick"(arg0: $ProgramContext$Type): boolean
 "tick"(arg0: $ProgramContext$Type): void
 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
}

export namespace $Trigger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trigger$Type = ($Trigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trigger_ = $Trigger$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$TriggerContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$TriggerContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$TriggerContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$TriggerContext$Type = ($SFMLParser$TriggerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$TriggerContext_ = $SFMLParser$TriggerContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$WithConjunction" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$WithClause, $WithClause$Type} from "packages/ca/teamdman/sfml/ast/$WithClause"

export class $WithConjunction extends $Record implements $ASTNode, $WithClause, $ToStringPretty {

constructor(left: $WithClause$Type, right: $WithClause$Type)

public "left"(): $WithClause
public "right"(): $WithClause
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matchesStack"<STACK>(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "toStringPretty"(): string
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithConjunction$Type = ($WithConjunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithConjunction_ = $WithConjunction$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$BoolExpr" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $BoolExpr extends $Predicate<($ProgramContext)>, $ASTNode, $ToStringPretty {

 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ProgramContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ProgramContext)>
 "negate"(): $Predicate<($ProgramContext)>
 "test"(arg0: $ProgramContext$Type): boolean
 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
 "getStatements"(): $List<($Statement)>
 "toStringPretty"(): string

(arg0: any): $Predicate<($ProgramContext)>
}

export namespace $BoolExpr {
function isEqual<T>(arg0: any): $Predicate<($ProgramContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ProgramContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoolExpr$Type = ($BoolExpr);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoolExpr_ = $BoolExpr$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$SetOperator" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $SetOperator extends $Enum<($SetOperator)> implements $ASTNode, $BiPredicate<(boolean), ($List<(boolean)>)>, $ToStringPretty {
static readonly "OVERALL": $SetOperator
static readonly "SOME": $SetOperator
static readonly "EVERY": $SetOperator
static readonly "ONE": $SetOperator
static readonly "LONE": $SetOperator


public "toString"(): string
public static "values"(): ($SetOperator)[]
public "test"(arg0: boolean, arg1: $List$Type<(boolean)>): boolean
public static "valueOf"(arg0: string): $SetOperator
public static "from"(arg0: string): $SetOperator
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(boolean), ($List<(boolean)>)>
public "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<(boolean), ($List<(boolean)>)>
public "negate"(): $BiPredicate<(boolean), ($List<(boolean)>)>
public "toStringPretty"(): string
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetOperator$Type = (("some") | ("one") | ("lone") | ("overall") | ("every")) | ($SetOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetOperator_ = $SetOperator$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanConjunctionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanConjunctionContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "AND"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "boolexpr"(): $List<($SFMLParser$BoolexprContext)>
public "boolexpr"(arg0: integer): $SFMLParser$BoolexprContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanConjunctionContext$Type = ($SFMLParser$BooleanConjunctionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanConjunctionContext_ = $SFMLParser$BooleanConjunctionContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceIdSet" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceIdSet implements $ASTNode {
static readonly "EMPTY": $ResourceIdSet
static readonly "MATCH_ALL": $ResourceIdSet

constructor(arg0: ($ResourceIdentifier$Type<(any), (any), (any)>)[])
constructor(arg0: $Collection$Type<($ResourceIdentifier$Type<(any), (any), (any)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "stream"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getReferencedResourceTypes"(): ($ResourceType<(any), (any), (any)>)[]
public "noneMatchStack"(arg0: any): boolean
public "getMatchingFromStack"(arg0: any): $ResourceIdentifier<(any), (any), (any)>
public "toStringCondensed"(): string
public "couldMatchMoreThanOne"(): boolean
public "anyMatchResourceLocation"(arg0: $ResourceLocation$Type): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "empty"(): boolean
get "referencedResourceTypes"(): ($ResourceType<(any), (any), (any)>)[]
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceIdSet$Type = ($ResourceIdSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceIdSet_ = $ResourceIdSet$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$InputStatementContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$SFMLParser$InputResourceLimitsContext, $SFMLParser$InputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputResourceLimitsContext"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceExclusionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"

export class $SFMLParser$InputStatementContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "inputResourceLimits"(): $SFMLParser$InputResourceLimitsContext
public "resourceExclusion"(): $SFMLParser$ResourceExclusionContext
public "labelAccess"(): $SFMLParser$LabelAccessContext
public "getRuleIndex"(): integer
public "INPUT"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "FROM"(): $TerminalNode
public "EACH"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$InputStatementContext$Type = ($SFMLParser$InputStatementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$InputStatementContext_ = $SFMLParser$InputStatementContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$With$WithMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $With$WithMode extends $Enum<($With$WithMode)> {
static readonly "WITH": $With$WithMode
static readonly "WITHOUT": $With$WithMode


public static "values"(): ($With$WithMode)[]
public static "valueOf"(arg0: string): $With$WithMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $With$WithMode$Type = (("with") | ("without")) | ($With$WithMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $With$WithMode_ = $With$WithMode$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$SideContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$SideContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "TOP"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "WEST"(): $TerminalNode
public "EAST"(): $TerminalNode
public "NORTH"(): $TerminalNode
public "SOUTH"(): $TerminalNode
public "BOTTOM"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$SideContext$Type = ($SFMLParser$SideContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$SideContext_ = $SFMLParser$SideContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$SidequalifierContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$SidequalifierContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$SidequalifierContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$SidequalifierContext$Type = ($SFMLParser$SidequalifierContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$SidequalifierContext_ = $SFMLParser$SidequalifierContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$OutputStatementContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceExclusionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext"
import {$SFMLParser$OutputResourceLimitsContext, $SFMLParser$OutputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputResourceLimitsContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"

export class $SFMLParser$OutputStatementContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceExclusion"(): $SFMLParser$ResourceExclusionContext
public "outputResourceLimits"(): $SFMLParser$OutputResourceLimitsContext
public "labelAccess"(): $SFMLParser$LabelAccessContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "OUTPUT"(): $TerminalNode
public "TO"(): $TerminalNode
public "EACH"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$OutputStatementContext$Type = ($SFMLParser$OutputStatementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$OutputStatementContext_ = $SFMLParser$OutputStatementContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RetentionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$RetentionContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "number"(): $SFMLParser$NumberContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "RETAIN"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "EACH"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RetentionContext$Type = ($SFMLParser$RetentionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RetentionContext_ = $SFMLParser$RetentionContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$QuantityRetentionLimitContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$LimitContext, $SFMLParser$LimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LimitContext"
import {$SFMLParser$RetentionContext, $SFMLParser$RetentionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionContext"
import {$SFMLParser$QuantityContext, $SFMLParser$QuantityContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$QuantityRetentionLimitContext extends $SFMLParser$LimitContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$LimitContext$Type)

public "retention"(): $SFMLParser$RetentionContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "quantity"(): $SFMLParser$QuantityContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$QuantityRetentionLimitContext$Type = ($SFMLParser$QuantityRetentionLimitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$QuantityRetentionLimitContext_ = $SFMLParser$QuantityRetentionLimitContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$LabelGunItem$LabelGunViewMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LabelGunItem$LabelGunViewMode extends $Enum<($LabelGunItem$LabelGunViewMode)> {
static readonly "SHOW_ALL": $LabelGunItem$LabelGunViewMode
static readonly "SHOW_ONLY_ACTIVE_LABEL_AND_TARGETED_BLOCK": $LabelGunItem$LabelGunViewMode
static readonly "SHOW_ONLY_TARGETED_BLOCK": $LabelGunItem$LabelGunViewMode


public static "values"(): ($LabelGunItem$LabelGunViewMode)[]
public static "valueOf"(arg0: string): $LabelGunItem$LabelGunViewMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelGunItem$LabelGunViewMode$Type = (("show_only_targeted_block") | ("show_only_active_label_and_targeted_block") | ("show_all")) | ($LabelGunItem$LabelGunViewMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelGunItem$LabelGunViewMode_ = $LabelGunItem$LabelGunViewMode$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanNegationContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanNegationContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "NOT"(): $TerminalNode
public "boolexpr"(): $SFMLParser$BoolexprContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanNegationContext$Type = ($SFMLParser$BooleanNegationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanNegationContext_ = $SFMLParser$BooleanNegationContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceIdContext, $SFMLParser$ResourceIdContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$IdentifierContext, $SFMLParser$IdentifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext"

export class $SFMLParser$ResourceContext extends $SFMLParser$ResourceIdContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$ResourceIdContext$Type)

public "identifier"(): $List<($SFMLParser$IdentifierContext)>
public "identifier"(arg0: integer): $SFMLParser$IdentifierContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COLON"(): $List<($TerminalNode)>
public "COLON"(arg0: integer): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceContext$Type = ($SFMLParser$ResourceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceContext_ = $SFMLParser$ResourceContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$EachSideContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$SFMLParser$SidequalifierContext, $SFMLParser$SidequalifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SidequalifierContext"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$EachSideContext extends $SFMLParser$SidequalifierContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$SidequalifierContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "SIDE"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "EACH"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$EachSideContext$Type = ($SFMLParser$EachSideContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$EachSideContext_ = $SFMLParser$EachSideContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceIdDisjunctionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceIdContext, $SFMLParser$ResourceIdContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ResourceIdDisjunctionContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "OR"(): $List<($TerminalNode)>
public "OR"(arg0: integer): $TerminalNode
public "resourceId"(arg0: integer): $SFMLParser$ResourceIdContext
public "resourceId"(): $List<($SFMLParser$ResourceIdContext)>
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceIdDisjunctionContext$Type = ($SFMLParser$ResourceIdDisjunctionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceIdDisjunctionContext_ = $SFMLParser$ResourceIdDisjunctionContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithParenContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithParenContext extends $SFMLParser$WithClauseContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$WithClauseContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "LPAREN"(): $TerminalNode
public "RPAREN"(): $TerminalNode
public "withClause"(): $SFMLParser$WithClauseContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithParenContext$Type = ($SFMLParser$WithParenContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithParenContext_ = $SFMLParser$WithParenContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithNegationContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithNegationContext extends $SFMLParser$WithClauseContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$WithClauseContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "NOT"(): $TerminalNode
public "withClause"(): $SFMLParser$WithClauseContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithNegationContext$Type = ($SFMLParser$WithNegationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithNegationContext_ = $SFMLParser$WithNegationContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ProgramContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$TriggerContext, $SFMLParser$TriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TriggerContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$SFMLParser$NameContext, $SFMLParser$NameContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NameContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ProgramContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "EOF"(): $TerminalNode
public "name"(): $SFMLParser$NameContext
public "trigger"(): $List<($SFMLParser$TriggerContext)>
public "trigger"(arg0: integer): $SFMLParser$TriggerContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ProgramContext$Type = ($SFMLParser$ProgramContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ProgramContext_ = $SFMLParser$ProgramContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$LimitedInputSlot" {
import {$LimitedSlot, $LimitedSlot$Type} from "packages/ca/teamdman/sfm/common/program/$LimitedSlot"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IInputResourceTracker, $IInputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IInputResourceTracker"

export class $LimitedInputSlot<STACK, ITEM, CAP> implements $LimitedSlot<(STACK), (ITEM), (CAP)> {
 "type": $ResourceType<(STACK), (ITEM), (CAP)>
 "handler": CAP
 "pos": $BlockPos
 "label": $Label
 "direction": $Direction
 "slot": integer
 "freed": boolean
 "tracker": $IInputResourceTracker

constructor(arg0: $Label$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: integer, arg4: CAP, arg5: $IInputResourceTracker$Type, arg6: STACK, arg7: $ResourceType$Type<(STACK), (ITEM), (CAP)>)

public "getHandler"(): CAP
public "getLabel"(): $Label
public "toString"(): string
public "extract"(arg0: long): STACK
public "init"(arg0: CAP, arg1: $Label$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: integer, arg5: $IInputResourceTracker$Type, arg6: STACK, arg7: $ResourceType$Type<(STACK), (ITEM), (CAP)>): void
public "getType"(): $ResourceType<(STACK), (ITEM), (CAP)>
public "getSlot"(): integer
public "setDone"(): void
public "peekExtractPotential"(): STACK
public "getDirection"(): $Direction
public "isDone"(): boolean
public "getPos"(): $BlockPos
get "handler"(): CAP
get "label"(): $Label
get "type"(): $ResourceType<(STACK), (ITEM), (CAP)>
get "slot"(): integer
get "direction"(): $Direction
get "done"(): boolean
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedInputSlot$Type<STACK, ITEM, CAP> = ($LimitedInputSlot<(STACK), (ITEM), (CAP)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimitedInputSlot_<STACK, ITEM, CAP> = $LimitedInputSlot$Type<(STACK), (ITEM), (CAP)>;
}}
declare module "packages/ca/teamdman/sfm/common/item/$ExperienceGoopItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExperienceGoopItem extends $Item {
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
export type $ExperienceGoopItem$Type = ($ExperienceGoopItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceGoopItem_ = $ExperienceGoopItem$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$LimitContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$LimitContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$LimitContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$LimitContext$Type = ($SFMLParser$LimitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$LimitContext_ = $SFMLParser$LimitContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$IntervalNoSpaceContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$IntervalContext, $SFMLParser$IntervalContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$IntervalNoSpaceContext extends $SFMLParser$IntervalContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$IntervalContext$Type)

public "PLUS"(): $TerminalNode
public "SECONDS"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "NUMBER_WITH_G_SUFFIX"(): $TerminalNode
public "NUMBER"(): $TerminalNode
public "SECOND"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "TICK"(): $TerminalNode
public "TICKS"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$IntervalNoSpaceContext$Type = ($SFMLParser$IntervalNoSpaceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$IntervalNoSpaceContext_ = $SFMLParser$IntervalNoSpaceContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanFalseContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanFalseContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "FALSE"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanFalseContext$Type = ($SFMLParser$BooleanFalseContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanFalseContext_ = $SFMLParser$BooleanFalseContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ForgetStatementContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$LabelContext, $SFMLParser$LabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelContext"

export class $SFMLParser$ForgetStatementContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "label"(arg0: integer): $SFMLParser$LabelContext
public "label"(): $List<($SFMLParser$LabelContext)>
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(arg0: integer): $TerminalNode
public "COMMA"(): $List<($TerminalNode)>
public "FORGET"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ForgetStatementContext$Type = ($SFMLParser$ForgetStatementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ForgetStatementContext_ = $SFMLParser$ForgetStatementContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Label" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $Label extends $Record implements $ASTNode {

constructor(name: string)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "needsQuotes"(arg0: string): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Label$Type = ($Label);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Label_ = $Label$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RetentionLimitContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$LimitContext, $SFMLParser$LimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LimitContext"
import {$SFMLParser$RetentionContext, $SFMLParser$RetentionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$RetentionLimitContext extends $SFMLParser$LimitContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$LimitContext$Type)

public "retention"(): $SFMLParser$RetentionContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RetentionLimitContext$Type = ($SFMLParser$RetentionLimitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RetentionLimitContext_ = $SFMLParser$RetentionLimitContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RangeContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$RangeContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "number"(): $List<($SFMLParser$NumberContext)>
public "number"(arg0: integer): $SFMLParser$NumberContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "DASH"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RangeContext$Type = ($SFMLParser$RangeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RangeContext_ = $SFMLParser$RangeContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$StatementContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$SFMLParser$ForgetStatementContext, $SFMLParser$ForgetStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ForgetStatementContext"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$InputStatementContext, $SFMLParser$InputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputStatementContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$OutputStatementContext, $SFMLParser$OutputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputStatementContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$IfStatementContext, $SFMLParser$IfStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IfStatementContext"

export class $SFMLParser$StatementContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "outputStatement"(): $SFMLParser$OutputStatementContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "inputStatement"(): $SFMLParser$InputStatementContext
public "getRuleIndex"(): integer
public "ifStatement"(): $SFMLParser$IfStatementContext
public "forgetStatement"(): $SFMLParser$ForgetStatementContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$StatementContext$Type = ($SFMLParser$StatementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$StatementContext_ = $SFMLParser$StatementContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$IfStatementContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$IfStatementContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "block"(arg0: integer): $SFMLParser$BlockContext
public "block"(): $List<($SFMLParser$BlockContext)>
public "getRuleIndex"(): integer
public "END"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "ELSE"(arg0: integer): $TerminalNode
public "ELSE"(): $List<($TerminalNode)>
public "IF"(arg0: integer): $TerminalNode
public "IF"(): $List<($TerminalNode)>
public "boolexpr"(): $List<($SFMLParser$BoolexprContext)>
public "boolexpr"(arg0: integer): $SFMLParser$BoolexprContext
public "THEN"(arg0: integer): $TerminalNode
public "THEN"(): $List<($TerminalNode)>
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$IfStatementContext$Type = ($SFMLParser$IfStatementContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$IfStatementContext_ = $SFMLParser$IfStatementContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {

}

export namespace $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type = ($SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement_ = $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$Branch" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement, $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement"
import {$IfStatement, $IfStatement$Type} from "packages/ca/teamdman/sfml/ast/$IfStatement"

export class $SimulateExploreAllPathsProgramBehaviour$Branch extends $Record implements $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {

constructor(ifStatement: $IfStatement$Type, wasTrue: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "ifStatement"(): $IfStatement
public "wasTrue"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulateExploreAllPathsProgramBehaviour$Branch$Type = ($SimulateExploreAllPathsProgramBehaviour$Branch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulateExploreAllPathsProgramBehaviour$Branch_ = $SimulateExploreAllPathsProgramBehaviour$Branch$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$PulseTriggerContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$TriggerContext, $SFMLParser$TriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TriggerContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$PulseTriggerContext extends $SFMLParser$TriggerContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$TriggerContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "block"(): $SFMLParser$BlockContext
public "END"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "DO"(): $TerminalNode
public "REDSTONE"(): $TerminalNode
public "PULSE"(): $TerminalNode
public "EVERY"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$PulseTriggerContext$Type = ($SFMLParser$PulseTriggerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$PulseTriggerContext_ = $SFMLParser$PulseTriggerContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$IOStatement" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceLimits, $ResourceLimits$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimits"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$LabelAccess, $LabelAccess$Type} from "packages/ca/teamdman/sfml/ast/$LabelAccess"

export interface $IOStatement extends $Statement, $ToStringPretty {

 "each"(): boolean
 "resourceLimits"(): $ResourceLimits
 "labelAccess"(): $LabelAccess
 "tick"(arg0: $ProgramContext$Type): void
 "toStringPretty"(): string
 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
 "getStatements"(): $List<($Statement)>
}

export namespace $IOStatement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOStatement$Type = ($IOStatement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOStatement_ = $IOStatement$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour" {
import {$Trigger, $Trigger$Type} from "packages/ca/teamdman/sfml/ast/$Trigger"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ProgramBehaviour, $ProgramBehaviour$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramBehaviour"
import {$SimulateExploreAllPathsProgramBehaviour$ExecutionPath, $SimulateExploreAllPathsProgramBehaviour$ExecutionPath$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPath"
import {$AtomicReference, $AtomicReference$Type} from "packages/java/util/concurrent/atomic/$AtomicReference"
import {$InputStatement, $InputStatement$Type} from "packages/ca/teamdman/sfml/ast/$InputStatement"
import {$Program, $Program$Type} from "packages/ca/teamdman/sfml/ast/$Program"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement, $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement"
import {$OutputStatement, $OutputStatement$Type} from "packages/ca/teamdman/sfml/ast/$OutputStatement"

export class $SimulateExploreAllPathsProgramBehaviour implements $ProgramBehaviour {

constructor()
constructor(arg0: $List$Type<($SimulateExploreAllPathsProgramBehaviour$ExecutionPath$Type)>, arg1: $SimulateExploreAllPathsProgramBehaviour$ExecutionPath$Type, arg2: $AtomicReference$Type<($BigInteger$Type)>)

public "fork"(): $ProgramBehaviour
public "onInputStatementForgetTransform"(arg0: $ProgramContext$Type, arg1: $InputStatement$Type, arg2: $InputStatement$Type): void
public "getSeenIOStatementCountForEachPath"(): (integer)[]
public "terminatePathAndBeginAnew"(): void
public "getTriggerPathCount"(): $BigInteger
public "prepareNextTrigger"(): void
public "pushPathElement"(arg0: $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement$Type): void
public "getLatestPathElement"(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement
public "getPathElementForNode"(arg0: $ASTNode$Type): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement
public "onOutputStatementExecution"(arg0: $ProgramContext$Type, arg1: $OutputStatement$Type): void
public "onInputStatementExecution"(arg0: $ProgramContext$Type, arg1: $InputStatement$Type): void
public "onInputStatementDropped"(arg0: $ProgramContext$Type, arg1: $InputStatement$Type): void
public "onTriggerDropped"(arg0: $ProgramContext$Type, arg1: $Trigger$Type): void
public "getCurrentPath"(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath
public "getSeenPaths"(): $List<($SimulateExploreAllPathsProgramBehaviour$ExecutionPath)>
public "onProgramFinished"(arg0: $ProgramContext$Type, arg1: $Program$Type): void
get "seenIOStatementCountForEachPath"(): (integer)[]
get "triggerPathCount"(): $BigInteger
get "latestPathElement"(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement
get "currentPath"(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath
get "seenPaths"(): $List<($SimulateExploreAllPathsProgramBehaviour$ExecutionPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulateExploreAllPathsProgramBehaviour$Type = ($SimulateExploreAllPathsProgramBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimulateExploreAllPathsProgramBehaviour_ = $SimulateExploreAllPathsProgramBehaviour$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$NumberContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$NumberContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "NUMBER"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$NumberContext$Type = ($SFMLParser$NumberContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$NumberContext_ = $SFMLParser$NumberContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithDisjunctionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithDisjunctionContext extends $SFMLParser$WithClauseContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$WithClauseContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "OR"(): $TerminalNode
public "withClause"(arg0: integer): $SFMLParser$WithClauseContext
public "withClause"(): $List<($SFMLParser$WithClauseContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithDisjunctionContext$Type = ($SFMLParser$WithDisjunctionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithDisjunctionContext_ = $SFMLParser$WithDisjunctionContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$InputResourceLimitsContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$SFMLParser$ResourceLimitListContext, $SFMLParser$ResourceLimitListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$InputResourceLimitsContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceLimitList"(): $SFMLParser$ResourceLimitListContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$InputResourceLimitsContext$Type = ($SFMLParser$InputResourceLimitsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$InputResourceLimitsContext_ = $SFMLParser$InputResourceLimitsContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceLimit" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ResourceIdSet, $ResourceIdSet$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdSet"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Limit, $Limit$Type} from "packages/ca/teamdman/sfml/ast/$Limit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$With, $With$Type} from "packages/ca/teamdman/sfml/ast/$With"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IInputResourceTracker, $IInputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IInputResourceTracker"
import {$IOutputResourceTracker, $IOutputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IOutputResourceTracker"

export class $ResourceLimit extends $Record implements $ASTNode {
static readonly "TAKE_ALL_LEAVE_NONE": $ResourceLimit
static readonly "ACCEPT_ALL_WITHOUT_RESTRAINT": $ResourceLimit

constructor(resourceIds: $ResourceIdSet$Type, limit: $Limit$Type, arg2: $With$Type)

public "with"(): $With
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "limit"(): $Limit
public "withDefaultLimit"(arg0: $Limit$Type): $ResourceLimit
public "createInputTracker"(arg0: $ResourceIdSet$Type): $IInputResourceTracker
public "createOutputTracker"(arg0: $ResourceIdSet$Type): $IOutputResourceTracker
public "toStringCondensed"(arg0: $Limit$Type): string
public "matchesStack"(arg0: any): boolean
public "resourceIds"(): $ResourceIdSet
public "withLimit"(arg0: $Limit$Type): $ResourceLimit
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLimit$Type = ($ResourceLimit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLimit_ = $ResourceLimit$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceIdentifier" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ToStringCondensed, $ToStringCondensed$Type} from "packages/ca/teamdman/sfml/ast/$ToStringCondensed"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceIdentifier<STACK, ITEM, CAP> implements $ASTNode, $ToStringCondensed {
static readonly "MATCH_ALL": $ResourceIdentifier<(any), (any), (any)>
readonly "resourceTypeNamespace": string
readonly "resourceTypeName": string
readonly "resourceNamespace": string
readonly "resourceName": string

constructor(arg0: $ResourceKey$Type<($ResourceType$Type<(STACK), (ITEM), (CAP)>)>, arg1: $ResourceKey$Type<(any)>)
constructor(arg0: string)
constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: string, arg2: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: string)
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $ResourceKey$Type<($ResourceType$Type<(STACK), (ITEM), (CAP)>)>, arg1: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLocation"(): $Optional<($ResourceLocation)>
public "expand"(): $List<($ResourceIdentifier<(STACK), (ITEM), (CAP)>)>
public "assertValid"(): void
public "setResourceTypeCache"(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>): void
public "getResourceTypeId"(): $ResourceLocation
public "toStringCondensed"(): string
public "matchesStack"(arg0: any): boolean
public "matchesResourceLocation"(arg0: $ResourceLocation$Type): boolean
public "getResourceType"(): $ResourceType<(STACK), (ITEM), (CAP)>
public static "fromString"<STACK, ITEM, CAP>(arg0: string): $ResourceIdentifier<(STACK), (ITEM), (CAP)>
public "usesRegex"(): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "location"(): $Optional<($ResourceLocation)>
set "resourceTypeCache"(value: $ResourceType$Type<(STACK), (ITEM), (CAP)>)
get "resourceTypeId"(): $ResourceLocation
get "resourceType"(): $ResourceType<(STACK), (ITEM), (CAP)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceIdentifier$Type<STACK, ITEM, CAP> = ($ResourceIdentifier<(STACK), (ITEM), (CAP)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceIdentifier_<STACK, ITEM, CAP> = $ResourceIdentifier$Type<(STACK), (ITEM), (CAP)>;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$ResourceIdDisjunctionContext, $SFMLParser$ResourceIdDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdDisjunctionContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$LimitContext, $SFMLParser$LimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LimitContext"
import {$SFMLParser$WithContext, $SFMLParser$WithContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ResourceLimitContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "with"(): $SFMLParser$WithContext
public "limit"(): $SFMLParser$LimitContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceIdDisjunction"(): $SFMLParser$ResourceIdDisjunctionContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceLimitContext$Type = ($SFMLParser$ResourceLimitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceLimitContext_ = $SFMLParser$ResourceLimitContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$OutputResourceLimitsContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$SFMLParser$ResourceLimitListContext, $SFMLParser$ResourceLimitListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$OutputResourceLimitsContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceLimitList"(): $SFMLParser$ResourceLimitListContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$OutputResourceLimitsContext$Type = ($SFMLParser$OutputResourceLimitsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$OutputResourceLimitsContext_ = $SFMLParser$OutputResourceLimitsContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$IfStatement" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ToStringCondensed, $ToStringCondensed$Type} from "packages/ca/teamdman/sfml/ast/$ToStringCondensed"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Block, $Block$Type} from "packages/ca/teamdman/sfml/ast/$Block"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BoolExpr, $BoolExpr$Type} from "packages/ca/teamdman/sfml/ast/$BoolExpr"

export class $IfStatement extends $Record implements $ASTNode, $Statement, $ToStringCondensed {

constructor(condition: $BoolExpr$Type, trueBlock: $Block$Type, falseBlock: $Block$Type)

public "tick"(arg0: $ProgramContext$Type): void
public "condition"(): $BoolExpr
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "toStringCondensed"(): string
public "getStatements"(): $List<($Statement)>
public "trueBlock"(): $Block
public "falseBlock"(): $Block
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IfStatement$Type = ($IfStatement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IfStatement_ = $IfStatement$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ResourceLimits" {
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ResourceIdSet, $ResourceIdSet$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdSet"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$IOutputResourceTracker, $IOutputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IOutputResourceTracker"
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$Limit, $Limit$Type} from "packages/ca/teamdman/sfml/ast/$Limit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLimit, $ResourceLimit$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimit"
import {$IInputResourceTracker, $IInputResourceTracker$Type} from "packages/ca/teamdman/sfm/common/program/$IInputResourceTracker"

export class $ResourceLimits implements $ASTNode, $ToStringPretty {

constructor(arg0: $List$Type<($ResourceLimit$Type)>, arg1: $ResourceIdSet$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "createOutputTrackers"(): $List<($IOutputResourceTracker)>
public "getReferencedResourceTypes"(): ($ResourceType<(any), (any), (any)>)[]
public "withExclusions"(arg0: $ResourceIdSet$Type): $ResourceLimits
public "withDefaultLimit"(arg0: $Limit$Type): $ResourceLimits
public "createInputTrackers"(): $List<($IInputResourceTracker)>
public "toStringCondensed"(arg0: $Limit$Type): string
public "resourceLimitList"(): $List<($ResourceLimit)>
public "exclusions"(): $ResourceIdSet
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "toStringPretty"(): string
get "referencedResourceTypes"(): ($ResourceType<(any), (any), (any)>)[]
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLimits$Type = ($ResourceLimits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLimits_ = $ResourceLimits$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanTrueContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanTrueContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "TRUE"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanTrueContext$Type = ($SFMLParser$BooleanTrueContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanTrueContext_ = $SFMLParser$BooleanTrueContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/cablenetwork/$ICableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICableBlock {

}

export namespace $ICableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBlock$Type = ($ICableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBlock_ = $ICableBlock$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$TestBarrelTankBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TestBarrelTankBlock extends $BaseEntityBlock {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestBarrelTankBlock$Type = ($TestBarrelTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestBarrelTankBlock_ = $TestBarrelTankBlock$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Block" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $Block extends $Record implements $Statement {

constructor(statements: $List$Type<($Statement$Type)>)

public "tick"(arg0: $ProgramContext$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getStatements"(): $List<($Statement)>
public "statements"(): $List<($Statement)>
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Block$Type = ($Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Block_ = $Block$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BoolexprContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$BoolexprContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BoolexprContext$Type = ($SFMLParser$BoolexprContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BoolexprContext_ = $SFMLParser$BoolexprContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$SetOpContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$SetOpContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "ONE"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "SOME"(): $TerminalNode
public "EVERY"(): $TerminalNode
public "LONE"(): $TerminalNode
public "EACH"(): $TerminalNode
public "OVERALL"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$SetOpContext$Type = ($SFMLParser$SetOpContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$SetOpContext_ = $SFMLParser$SetOpContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$StringHolder" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $StringHolder extends $Record implements $ASTNode {

constructor(value: string)

public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringHolder$Type = ($StringHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringHolder_ = $StringHolder$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ASTBuilder" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$ResourceLimits, $ResourceLimits$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimits"
import {$SFMLParser$QuantityLimitContext, $SFMLParser$QuantityLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityLimitContext"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$SFMLParser$TagMatcherContext, $SFMLParser$TagMatcherContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TagMatcherContext"
import {$StringHolder, $StringHolder$Type} from "packages/ca/teamdman/sfml/ast/$StringHolder"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$TagMatcher, $TagMatcher$Type} from "packages/ca/teamdman/sfml/ast/$TagMatcher"
import {$SFMLParser$ResourceContext, $SFMLParser$ResourceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceContext"
import {$SFMLParser$SetOpContext, $SFMLParser$SetOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SetOpContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RoundRobin, $RoundRobin$Type} from "packages/ca/teamdman/sfml/ast/$RoundRobin"
import {$SFMLParser$BooleanTrueContext, $SFMLParser$BooleanTrueContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanTrueContext"
import {$DirectionQualifier, $DirectionQualifier$Type} from "packages/ca/teamdman/sfml/ast/$DirectionQualifier"
import {$SFMLParser$SlotqualifierContext, $SFMLParser$SlotqualifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SlotqualifierContext"
import {$SetOperator, $SetOperator$Type} from "packages/ca/teamdman/sfml/ast/$SetOperator"
import {$SFMLBaseVisitor, $SFMLBaseVisitor$Type} from "packages/ca/teamdman/langs/$SFMLBaseVisitor"
import {$WithTag, $WithTag$Type} from "packages/ca/teamdman/sfml/ast/$WithTag"
import {$SFMLParser$EachSideContext, $SFMLParser$EachSideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$EachSideContext"
import {$SFMLParser$BooleanParenContext, $SFMLParser$BooleanParenContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanParenContext"
import {$NumberRangeSet, $NumberRangeSet$Type} from "packages/ca/teamdman/sfml/ast/$NumberRangeSet"
import {$SFMLParser$StringLabelContext, $SFMLParser$StringLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringLabelContext"
import {$SFMLParser$WithConjunctionContext, $SFMLParser$WithConjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithConjunctionContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ForgetStatement, $ForgetStatement$Type} from "packages/ca/teamdman/sfml/ast/$ForgetStatement"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$SFMLParser$OutputResourceLimitsContext, $SFMLParser$OutputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputResourceLimitsContext"
import {$WithConjunction, $WithConjunction$Type} from "packages/ca/teamdman/sfml/ast/$WithConjunction"
import {$SFMLParser$RoundrobinContext, $SFMLParser$RoundrobinContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RoundrobinContext"
import {$SFMLParser$BooleanFalseContext, $SFMLParser$BooleanFalseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanFalseContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"
import {$SFMLParser$TimerTriggerContext, $SFMLParser$TimerTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TimerTriggerContext"
import {$ResourceIdSet, $ResourceIdSet$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdSet"
import {$SFMLParser$ForgetStatementContext, $SFMLParser$ForgetStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ForgetStatementContext"
import {$SFMLParser$PulseTriggerContext, $SFMLParser$PulseTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$PulseTriggerContext"
import {$SFMLParser$WithNegationContext, $SFMLParser$WithNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithNegationContext"
import {$SFMLParser$BooleanNegationContext, $SFMLParser$BooleanNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanNegationContext"
import {$SFMLParser$InputResourceLimitsContext, $SFMLParser$InputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputResourceLimitsContext"
import {$WithNegation, $WithNegation$Type} from "packages/ca/teamdman/sfml/ast/$WithNegation"
import {$SFMLParser$ProgramContext, $SFMLParser$ProgramContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ProgramContext"
import {$SFMLParser$WithTagContext, $SFMLParser$WithTagContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithTagContext"
import {$SFMLParser$OutputStatementContext, $SFMLParser$OutputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputStatementContext"
import {$Limit, $Limit$Type} from "packages/ca/teamdman/sfml/ast/$Limit"
import {$SFMLParser$RetentionLimitContext, $SFMLParser$RetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionLimitContext"
import {$Block, $Block$Type} from "packages/ca/teamdman/sfml/ast/$Block"
import {$SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceExclusionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext"
import {$OutputStatement, $OutputStatement$Type} from "packages/ca/teamdman/sfml/ast/$OutputStatement"
import {$SFMLParser$QuantityRetentionLimitContext, $SFMLParser$QuantityRetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityRetentionLimitContext"
import {$SFMLParser$ResourceLimitListContext, $SFMLParser$ResourceLimitListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext"
import {$SFMLParser$ListedSidesContext, $SFMLParser$ListedSidesContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ListedSidesContext"
import {$BoolExpr, $BoolExpr$Type} from "packages/ca/teamdman/sfml/ast/$BoolExpr"
import {$LabelAccess, $LabelAccess$Type} from "packages/ca/teamdman/sfml/ast/$LabelAccess"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"
import {$Program, $Program$Type} from "packages/ca/teamdman/sfml/ast/$Program"
import {$SFMLParser$RawLabelContext, $SFMLParser$RawLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RawLabelContext"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"

export class $ASTBuilder extends $SFMLBaseVisitor<($ASTNode)> {

constructor()

public "visitProgram"(arg0: $SFMLParser$ProgramContext$Type): $Program
public "visitTimerTrigger"(arg0: $SFMLParser$TimerTriggerContext$Type): $ASTNode
public "visitPulseTrigger"(arg0: $SFMLParser$PulseTriggerContext$Type): $ASTNode
public "visitForgetStatement"(arg0: $SFMLParser$ForgetStatementContext$Type): $ForgetStatement
public "visitOutputStatement"(arg0: $SFMLParser$OutputStatementContext$Type): $OutputStatement
public "visitInputResourceLimits"(arg0: $SFMLParser$InputResourceLimitsContext$Type): $ResourceLimits
public "visitOutputResourceLimits"(arg0: $SFMLParser$OutputResourceLimitsContext$Type): $ResourceLimits
public "visitResourceLimitList"(arg0: $SFMLParser$ResourceLimitListContext$Type): $ResourceLimits
public "visitRetentionLimit"(arg0: $SFMLParser$RetentionLimitContext$Type): $Limit
public "visitQuantityLimit"(arg0: $SFMLParser$QuantityLimitContext$Type): $Limit
public "visitResourceExclusion"(arg0: $SFMLParser$ResourceExclusionContext$Type): $ResourceIdSet
public "visitResource"(arg0: $SFMLParser$ResourceContext$Type): $ASTNode
public "visitWithConjunction"(arg0: $SFMLParser$WithConjunctionContext$Type): $WithConjunction
public "visitWithNegation"(arg0: $SFMLParser$WithNegationContext$Type): $WithNegation
public "visitWithTag"(arg0: $SFMLParser$WithTagContext$Type): $WithTag
public "visitTagMatcher"(arg0: $SFMLParser$TagMatcherContext$Type): $TagMatcher
public "visitEachSide"(arg0: $SFMLParser$EachSideContext$Type): $DirectionQualifier
public "visitListedSides"(arg0: $SFMLParser$ListedSidesContext$Type): $DirectionQualifier
public "visitSlotqualifier"(arg0: $SFMLParser$SlotqualifierContext$Type): $NumberRangeSet
public "visitBooleanFalse"(arg0: $SFMLParser$BooleanFalseContext$Type): $BoolExpr
public "visitBooleanParen"(arg0: $SFMLParser$BooleanParenContext$Type): $BoolExpr
public "visitBooleanNegation"(arg0: $SFMLParser$BooleanNegationContext$Type): $BoolExpr
public "visitBooleanTrue"(arg0: $SFMLParser$BooleanTrueContext$Type): $BoolExpr
public "visitLabelAccess"(arg0: $SFMLParser$LabelAccessContext$Type): $LabelAccess
public "visitRoundrobin"(arg0: $SFMLParser$RoundrobinContext$Type): $RoundRobin
public "visitRawLabel"(arg0: $SFMLParser$RawLabelContext$Type): $Label
public "visitStringLabel"(arg0: $SFMLParser$StringLabelContext$Type): $Label
public "getNodesUnderCursor"(arg0: integer): $List<($Pair<($ASTNode), ($ParserRuleContext)>)>
public "setLocationFromOtherNode"(arg0: $ASTNode$Type, arg1: $ASTNode$Type): void
public "getIndexForNode"(arg0: $ASTNode$Type): integer
public "getContextForNode"(arg0: $ASTNode$Type): $Optional<($ParserRuleContext)>
public "getNodeAtIndex"(arg0: integer): $Optional<($ASTNode)>
public "getLineColumnForNode"(arg0: $ASTNode$Type): string
public "visitString"(arg0: $SFMLParser$StringContext$Type): $StringHolder
public "visitQuantityRetentionLimit"(arg0: $SFMLParser$QuantityRetentionLimitContext$Type): $Limit
public "visitBlock"(arg0: $SFMLParser$BlockContext$Type): $Block
public "visitSetOp"(arg0: $SFMLParser$SetOpContext$Type): $SetOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ASTBuilder$Type = ($ASTBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ASTBuilder_ = $ASTBuilder$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$CapabilityConsumer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CapabilityConsumer<T> {

 "accept"(arg0: $Label$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: T): void

(arg0: $Label$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: T): void
}

export namespace $CapabilityConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityConsumer$Type<T> = ($CapabilityConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityConsumer_<T> = $CapabilityConsumer$Type<(T)>;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$TimerTriggerContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$TriggerContext, $SFMLParser$TriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TriggerContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$IntervalContext, $SFMLParser$IntervalContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"

export class $SFMLParser$TimerTriggerContext extends $SFMLParser$TriggerContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$TriggerContext$Type)

public "interval"(): $SFMLParser$IntervalContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "block"(): $SFMLParser$BlockContext
public "END"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "DO"(): $TerminalNode
public "EVERY"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$TimerTriggerContext$Type = ($SFMLParser$TimerTriggerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$TimerTriggerContext_ = $SFMLParser$TimerTriggerContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ASTNode" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $ASTNode {

 "getDescendantStatements"(): $Stream<($Statement)>
 "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
 "getStatements"(): $List<($Statement)>
}

export namespace $ASTNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ASTNode$Type = ($ASTNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ASTNode_ = $ASTNode$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$SlotqualifierContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$SFMLParser$RangesetContext, $SFMLParser$RangesetContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangesetContext"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$SlotqualifierContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "SLOTS"(): $TerminalNode
public "rangeset"(): $SFMLParser$RangesetContext
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$SlotqualifierContext$Type = ($SFMLParser$SlotqualifierContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$SlotqualifierContext_ = $SFMLParser$SlotqualifierContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/logging/$TranslatableLogger" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$ArrayDeque, $ArrayDeque$Type} from "packages/java/util/$ArrayDeque"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Instant, $Instant$Type} from "packages/org/apache/logging/log4j/core/time/$Instant"
import {$Level, $Level$Type} from "packages/org/apache/logging/log4j/$Level"
import {$TranslatableLogEvent, $TranslatableLogEvent$Type} from "packages/ca/teamdman/sfm/common/logging/$TranslatableLogEvent"

export class $TranslatableLogger {

constructor(arg0: string)

public "error"(arg0: $Consumer$Type<($Consumer$Type<($TranslatableContents$Type)>)>): void
public "error"(arg0: $TranslatableContents$Type): void
public "warn"(arg0: $Consumer$Type<($Consumer$Type<($TranslatableContents$Type)>)>): void
public "warn"(arg0: $TranslatableContents$Type): void
public "clear"(): void
public static "decode"(arg0: $FriendlyByteBuf$Type): $ArrayDeque<($TranslatableLogEvent)>
public "info"(arg0: $Consumer$Type<($Consumer$Type<($TranslatableContents$Type)>)>): void
public "info"(arg0: $TranslatableContents$Type): void
public "trace"(arg0: $Consumer$Type<($Consumer$Type<($TranslatableContents$Type)>)>): void
public "trace"(arg0: $TranslatableContents$Type): void
public "debug"(arg0: $TranslatableContents$Type): void
public "debug"(arg0: $Consumer$Type<($Consumer$Type<($TranslatableContents$Type)>)>): void
public static "encodeAndDrain"(arg0: $Collection$Type<($TranslatableLogEvent$Type)>, arg1: $FriendlyByteBuf$Type): void
public "getLogsAfter"(arg0: $Instant$Type): $ArrayDeque<($TranslatableLogEvent)>
public "pruneSoWeDontEatAllTheRam"(): void
public "getLogLevel"(): $Level
public "setLogLevel"(arg0: $Level$Type): void
public "getLogs"(): $ArrayDeque<($TranslatableLogEvent)>
public static "comesAfter"(arg0: $Instant$Type, arg1: $Instant$Type): boolean
get "logLevel"(): $Level
set "logLevel"(value: $Level$Type)
get "logs"(): $ArrayDeque<($TranslatableLogEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslatableLogger$Type = ($TranslatableLogger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslatableLogger_ = $TranslatableLogger$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$WithNegation" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$ToStringPretty, $ToStringPretty$Type} from "packages/ca/teamdman/sfml/ast/$ToStringPretty"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$WithClause, $WithClause$Type} from "packages/ca/teamdman/sfml/ast/$WithClause"

export class $WithNegation extends $Record implements $ASTNode, $WithClause, $ToStringPretty {

constructor(inner: $WithClause$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matchesStack"<STACK>(arg0: $ResourceType$Type<(STACK), (any), (any)>, arg1: STACK): boolean
public "inner"(): $WithClause
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
public "toStringPretty"(): string
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithNegation$Type = ($WithNegation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithNegation_ = $WithNegation$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$ProgramContext" {
import {$Program, $Program$Type} from "packages/ca/teamdman/sfml/ast/$Program"
import {$ProgramBehaviour, $ProgramBehaviour$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramBehaviour"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CableNetwork, $CableNetwork$Type} from "packages/ca/teamdman/sfm/common/cablenetwork/$CableNetwork"
import {$TranslatableLogger, $TranslatableLogger$Type} from "packages/ca/teamdman/sfm/common/logging/$TranslatableLogger"
import {$ManagerBlockEntity, $ManagerBlockEntity$Type} from "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity"
import {$LabelPositionHolder, $LabelPositionHolder$Type} from "packages/ca/teamdman/sfm/common/program/$LabelPositionHolder"
import {$SimulateExploreAllPathsProgramBehaviour, $SimulateExploreAllPathsProgramBehaviour$Type} from "packages/ca/teamdman/sfm/common/program/$SimulateExploreAllPathsProgramBehaviour"
import {$InputStatement, $InputStatement$Type} from "packages/ca/teamdman/sfml/ast/$InputStatement"

export class $ProgramContext {

constructor(arg0: $Program$Type, arg1: $ManagerBlockEntity$Type, arg2: $ProgramBehaviour$Type)

public "free"(): void
public "getInputs"(): $List<($InputStatement)>
public "toString"(): string
public "getLogger"(): $TranslatableLogger
public "fork"(): $ProgramContext
public "getRedstonePulses"(): integer
public "setDidSomething"(arg0: boolean): void
public static "createSimulationContext"(arg0: $Program$Type, arg1: $LabelPositionHolder$Type, arg2: integer, arg3: $SimulateExploreAllPathsProgramBehaviour$Type): $ProgramContext
public "getLabelPositionHolder"(): $LabelPositionHolder
public "getBehaviour"(): $ProgramBehaviour
public "didSomething"(): boolean
public "getManager"(): $ManagerBlockEntity
public "getProgram"(): $Program
public "getNetwork"(): $CableNetwork
public "addInput"(arg0: $InputStatement$Type): void
get "inputs"(): $List<($InputStatement)>
get "logger"(): $TranslatableLogger
get "redstonePulses"(): integer
get "labelPositionHolder"(): $LabelPositionHolder
get "behaviour"(): $ProgramBehaviour
get "manager"(): $ManagerBlockEntity
get "program"(): $Program
get "network"(): $CableNetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramContext$Type = ($ProgramContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgramContext_ = $ProgramContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$SFMLParser$SlotqualifierContext, $SFMLParser$SlotqualifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SlotqualifierContext"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$SidequalifierContext, $SFMLParser$SidequalifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SidequalifierContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$RoundrobinContext, $SFMLParser$RoundrobinContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RoundrobinContext"
import {$SFMLParser$LabelContext, $SFMLParser$LabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelContext"

export class $SFMLParser$LabelAccessContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "label"(): $List<($SFMLParser$LabelContext)>
public "label"(arg0: integer): $SFMLParser$LabelContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "sidequalifier"(): $SFMLParser$SidequalifierContext
public "slotqualifier"(): $SFMLParser$SlotqualifierContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(): $List<($TerminalNode)>
public "COMMA"(arg0: integer): $TerminalNode
public "roundrobin"(): $SFMLParser$RoundrobinContext
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$LabelAccessContext$Type = ($SFMLParser$LabelAccessContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$LabelAccessContext_ = $SFMLParser$LabelAccessContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$TagMatcher" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TagMatcher implements $Predicate<(any)>, $ASTNode {
readonly "namespacePattern": string
readonly "pathElementPatterns": $List<(string)>


public "toString"(): string
public "test"(arg0: any): boolean
public "testResourceLocation"(arg0: $ResourceLocation$Type): boolean
public static "fromNamespaceAndPath"(arg0: string, arg1: $Collection$Type<(string)>): $TagMatcher
public static "fromPath"(arg0: $Collection$Type<(string)>): $TagMatcher
public "testString"(arg0: string): boolean
public static "isEqual"<T>(arg0: any): $Predicate<(any)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "negate"(): $Predicate<(any)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagMatcher$Type = ($TagMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagMatcher_ = $TagMatcher$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$IInputResourceTracker" {
import {$ResourceIdSet, $ResourceIdSet$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdSet"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$ResourceLimit, $ResourceLimit$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimit"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IInputResourceTracker {

 "getRemainingRetentionObligation"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): long
 "trackRetentionObligation"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK, arg2: integer, arg3: $BlockPos$Type, arg4: long): void
 "getMaxTransferable"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): long
 "trackTransfer"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK, arg2: long): void
 "getExclusions"(): $ResourceIdSet
 "getResourceLimit"(): $ResourceLimit
 "matchesStack"(arg0: any): boolean
 "matchesCapabilityType"(arg0: any): boolean
 "isDone"<STACK, CAP, ITEM>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): boolean
 "getRetentionObligationForSlot"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK, arg2: $BlockPos$Type, arg3: integer): long
}

export namespace $IInputResourceTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInputResourceTracker$Type = ($IInputResourceTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInputResourceTracker_ = $IInputResourceTracker$Type;
}}
declare module "packages/ca/teamdman/sfm/common/program/$IOutputResourceTracker" {
import {$ResourceIdSet, $ResourceIdSet$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdSet"
import {$ResourceType, $ResourceType$Type} from "packages/ca/teamdman/sfm/common/resourcetype/$ResourceType"
import {$ResourceLimit, $ResourceLimit$Type} from "packages/ca/teamdman/sfml/ast/$ResourceLimit"

export interface $IOutputResourceTracker {

 "getMaxTransferable"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): long
 "trackTransfer"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK, arg2: long): void
 "updateRetentionObservation"<STACK, ITEM, CAP>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): void
 "getExclusions"(): $ResourceIdSet
 "getResourceLimit"(): $ResourceLimit
 "matchesStack"(arg0: any): boolean
 "matchesCapabilityType"(arg0: any): boolean
 "isDone"<STACK, CAP, ITEM>(arg0: $ResourceType$Type<(STACK), (ITEM), (CAP)>, arg1: STACK): boolean
}

export namespace $IOutputResourceTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOutputResourceTracker$Type = ($IOutputResourceTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOutputResourceTracker_ = $IOutputResourceTracker$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$NumberRange" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $NumberRange extends $Record implements $ASTNode {
static readonly "MAX_RANGE": $NumberRange

constructor(start: long, end: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "start"(): long
public "end"(): long
public "contains"(arg0: integer): boolean
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberRange$Type = ($NumberRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberRange_ = $NumberRange$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ForgetStatement" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ProgramContext, $ProgramContext$Type} from "packages/ca/teamdman/sfm/common/program/$ProgramContext"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Label, $Label$Type} from "packages/ca/teamdman/sfml/ast/$Label"

export class $ForgetStatement extends $Record implements $Statement {

constructor(labelToForget: $Set$Type<($Label$Type)>)

public "tick"(arg0: $ProgramContext$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "labelToForget"(): $Set<($Label)>
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgetStatement$Type = ($ForgetStatement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgetStatement_ = $ForgetStatement$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$QuantityLimitContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$LimitContext, $SFMLParser$LimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LimitContext"
import {$SFMLParser$QuantityContext, $SFMLParser$QuantityContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$QuantityLimitContext extends $SFMLParser$LimitContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$LimitContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "quantity"(): $SFMLParser$QuantityContext
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$QuantityLimitContext$Type = ($SFMLParser$QuantityLimitContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$QuantityLimitContext_ = $SFMLParser$QuantityLimitContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$ResourceIdListContext, $SFMLParser$ResourceIdListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdListContext"

export class $SFMLParser$ResourceExclusionContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "resourceIdList"(): $SFMLParser$ResourceIdListContext
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "EXCEPT"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceExclusionContext$Type = ($SFMLParser$ResourceExclusionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceExclusionContext_ = $SFMLParser$ResourceExclusionContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$FancyCableFacadeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IFacadableBlock, $IFacadableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$IFacadableBlock"
import {$FancyCableBlock, $FancyCableBlock$Type} from "packages/ca/teamdman/sfm/common/block/$FancyCableBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FacadeTransparency, $FacadeTransparency$Type} from "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FancyCableFacadeBlock extends $FancyCableBlock implements $EntityBlock, $IFacadableBlock {
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "SHAPE_CORE": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "SHAPE_UP": $VoxelShape
static readonly "SHAPE_DOWN": $VoxelShape
static readonly "DIRECTION_PROPERTIES": $Map<($Direction), ($BooleanProperty)>
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

public "getStateForPlacementByFacadePlan"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $FacadeTransparency$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getNonFacadeBlock"(): $IFacadableBlock
public "getFacadeBlock"(): $IFacadableBlock
get "nonFacadeBlock"(): $IFacadableBlock
get "facadeBlock"(): $IFacadableBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyCableFacadeBlock$Type = ($FancyCableFacadeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyCableFacadeBlock_ = $FancyCableFacadeBlock$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$IntervalSpaceContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$IntervalContext, $SFMLParser$IntervalContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$IntervalSpaceContext extends $SFMLParser$IntervalContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$IntervalContext$Type)

public "PLUS"(): $TerminalNode
public "SECONDS"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "NUMBER"(arg0: integer): $TerminalNode
public "NUMBER"(): $List<($TerminalNode)>
public "SECOND"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "TICK"(): $TerminalNode
public "TICKS"(): $TerminalNode
public "GLOBAL"(): $TerminalNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$IntervalSpaceContext$Type = ($SFMLParser$IntervalSpaceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$IntervalSpaceContext_ = $SFMLParser$IntervalSpaceContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$StringResourceContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceIdContext, $SFMLParser$ResourceIdContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdContext"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"

export class $SFMLParser$StringResourceContext extends $SFMLParser$ResourceIdContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$ResourceIdContext$Type)

public "string"(): $SFMLParser$StringContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$StringResourceContext$Type = ($SFMLParser$StringResourceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$StringResourceContext_ = $SFMLParser$StringResourceContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/block/$WaterTankBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WaterTankBlock extends $BaseEntityBlock implements $EntityBlock, $BucketPickup, $LiquidBlockContainer {
static readonly "IN_WATER": $BooleanProperty
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

public "hasWaterNeighbours"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterTankBlock$Type = ($WaterTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterTankBlock_ = $WaterTankBlock$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithConjunctionContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithConjunctionContext extends $SFMLParser$WithClauseContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$WithClauseContext$Type)

public "AND"(): $TerminalNode
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "withClause"(): $List<($SFMLParser$WithClauseContext)>
public "withClause"(arg0: integer): $SFMLParser$WithClauseContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithConjunctionContext$Type = ($SFMLParser$WithConjunctionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithConjunctionContext_ = $SFMLParser$WithConjunctionContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$RoundRobin$Behaviour" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RoundRobin$Behaviour extends $Enum<($RoundRobin$Behaviour)> {
static readonly "UNMODIFIED": $RoundRobin$Behaviour
static readonly "BY_BLOCK": $RoundRobin$Behaviour
static readonly "BY_LABEL": $RoundRobin$Behaviour


public static "values"(): ($RoundRobin$Behaviour)[]
public static "valueOf"(arg0: string): $RoundRobin$Behaviour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoundRobin$Behaviour$Type = (("unmodified") | ("by_block") | ("by_label")) | ($RoundRobin$Behaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoundRobin$Behaviour_ = $RoundRobin$Behaviour$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Limit" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceQuantity, $ResourceQuantity$Type} from "packages/ca/teamdman/sfml/ast/$ResourceQuantity"

export class $Limit extends $Record implements $ASTNode {
static readonly "MAX_QUANTITY_NO_RETENTION": $Limit
static readonly "MAX_QUANTITY_MAX_RETENTION": $Limit
static readonly "UNSET": $Limit

constructor(quantity: $ResourceQuantity$Type, retention: $ResourceQuantity$Type)

public "retention"(): $ResourceQuantity
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "withDefaults"(arg0: $Limit$Type): $Limit
public "toStringCondensed"(arg0: $Limit$Type): string
public "quantity"(): $ResourceQuantity
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Limit$Type = ($Limit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Limit_ = $Limit$Type;
}}
declare module "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TranslatableLogger, $TranslatableLogger$Type} from "packages/ca/teamdman/sfm/common/logging/$TranslatableLogger"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Program, $Program$Type} from "packages/ca/teamdman/sfml/ast/$Program"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ManagerBlockEntity$State, $ManagerBlockEntity$State$Type} from "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity$State"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$Level as $Level$0, $Level$Type as $Level$0$Type} from "packages/org/apache/logging/log4j/$Level"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $ManagerBlockEntity extends $BaseContainerBlockEntity {
static readonly "TICK_TIME_HISTORY_SIZE": integer
readonly "logger": $TranslatableLogger
 "lockKey": $LockCode
 "worldPosition": $BlockPos

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "toString"(): string
public "getState"(): $ManagerBlockEntity$State
public "reset"(): void
public "trackRedstonePulseUnprocessed"(): void
public "rebuildProgramAndUpdateDisk"(): void
public "getUnprocessedRedstonePulseCount"(): integer
public "getProgramStringOrEmptyIfNull"(): string
public "enableRebuildProgramLock"(): void
public "sendUpdatePacket"(): void
public "setLogLevel"(arg0: $Level$0$Type): void
public "clearRedstonePulseQueue"(): void
public "getProgramString"(): string
public "getReferencedLabels"(): $Set<(string)>
public "getTickTimeNanos"(): (long)[]
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getProgram"(): $Program
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "fillCrashReportCategory"(arg0: $CrashReportCategory$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ManagerBlockEntity$Type): void
public "getDisk"(): $ItemStack
public "getTick"(): integer
public "setProgram"(arg0: string): void
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "state"(): $ManagerBlockEntity$State
get "unprocessedRedstonePulseCount"(): integer
get "programStringOrEmptyIfNull"(): string
set "logLevel"(value: $Level$0$Type)
get "programString"(): string
get "referencedLabels"(): $Set<(string)>
get "tickTimeNanos"(): (long)[]
get "containerSize"(): integer
get "program"(): $Program
get "empty"(): boolean
get "maxStackSize"(): integer
get "disk"(): $ItemStack
get "tick"(): integer
set "program"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagerBlockEntity$Type = ($ManagerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagerBlockEntity_ = $ManagerBlockEntity$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Side" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $Side extends $Enum<($Side)> implements $ASTNode {
static readonly "TOP": $Side
static readonly "BOTTOM": $Side
static readonly "NORTH": $Side
static readonly "SOUTH": $Side
static readonly "EAST": $Side
static readonly "WEST": $Side


public static "values"(): ($Side)[]
public static "valueOf"(arg0: string): $Side
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Side$Type = (("east") | ("top") | ("south") | ("bottom") | ("north") | ("west")) | ($Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Side_ = $Side$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLVisitor" {
import {$SFMLParser$QuantityLimitContext, $SFMLParser$QuantityLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityLimitContext"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$SFMLParser$TagMatcherContext, $SFMLParser$TagMatcherContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TagMatcherContext"
import {$SFMLParser$InputStatementContext, $SFMLParser$InputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputStatementContext"
import {$SFMLParser$ResourceContext, $SFMLParser$ResourceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceContext"
import {$SFMLParser$BooleanHasContext, $SFMLParser$BooleanHasContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanHasContext"
import {$SFMLParser$SideContext, $SFMLParser$SideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SideContext"
import {$SFMLParser$ResourceIdDisjunctionContext, $SFMLParser$ResourceIdDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdDisjunctionContext"
import {$SFMLParser$SetOpContext, $SFMLParser$SetOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SetOpContext"
import {$SFMLParser$NumberContext, $SFMLParser$NumberContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NumberContext"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$SFMLParser$RangesetContext, $SFMLParser$RangesetContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangesetContext"
import {$SFMLParser$BooleanTrueContext, $SFMLParser$BooleanTrueContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanTrueContext"
import {$SFMLParser$SlotqualifierContext, $SFMLParser$SlotqualifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SlotqualifierContext"
import {$SFMLParser$ComparisonOpContext, $SFMLParser$ComparisonOpContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ComparisonOpContext"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$SFMLParser$EachSideContext, $SFMLParser$EachSideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$EachSideContext"
import {$SFMLParser$BooleanParenContext, $SFMLParser$BooleanParenContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanParenContext"
import {$SFMLParser$ResourceLimitContext, $SFMLParser$ResourceLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitContext"
import {$SFMLParser$StringLabelContext, $SFMLParser$StringLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringLabelContext"
import {$SFMLParser$WithConjunctionContext, $SFMLParser$WithConjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithConjunctionContext"
import {$SFMLParser$IntervalNoSpaceContext, $SFMLParser$IntervalNoSpaceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalNoSpaceContext"
import {$SFMLParser$OutputResourceLimitsContext, $SFMLParser$OutputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputResourceLimitsContext"
import {$SFMLParser$RoundrobinContext, $SFMLParser$RoundrobinContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RoundrobinContext"
import {$SFMLParser$WithParenContext, $SFMLParser$WithParenContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithParenContext"
import {$SFMLParser$BooleanFalseContext, $SFMLParser$BooleanFalseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanFalseContext"
import {$SFMLParser$LabelAccessContext, $SFMLParser$LabelAccessContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelAccessContext"
import {$SFMLParser$IdentifierContext, $SFMLParser$IdentifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext"
import {$SFMLParser$TimerTriggerContext, $SFMLParser$TimerTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TimerTriggerContext"
import {$SFMLParser$BooleanConjunctionContext, $SFMLParser$BooleanConjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanConjunctionContext"
import {$SFMLParser$ForgetStatementContext, $SFMLParser$ForgetStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ForgetStatementContext"
import {$SFMLParser$PulseTriggerContext, $SFMLParser$PulseTriggerContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$PulseTriggerContext"
import {$SFMLParser$BooleanDisjunctionContext, $SFMLParser$BooleanDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanDisjunctionContext"
import {$SFMLParser$WithNegationContext, $SFMLParser$WithNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithNegationContext"
import {$SFMLParser$WithDisjunctionContext, $SFMLParser$WithDisjunctionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithDisjunctionContext"
import {$SFMLParser$BooleanNegationContext, $SFMLParser$BooleanNegationContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanNegationContext"
import {$SFMLParser$InputResourceLimitsContext, $SFMLParser$InputResourceLimitsContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$InputResourceLimitsContext"
import {$SFMLParser$ProgramContext, $SFMLParser$ProgramContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ProgramContext"
import {$SFMLParser$WithTagContext, $SFMLParser$WithTagContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithTagContext"
import {$SFMLParser$OutputStatementContext, $SFMLParser$OutputStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$OutputStatementContext"
import {$SFMLParser$RetentionLimitContext, $SFMLParser$RetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionLimitContext"
import {$SFMLParser$RetentionContext, $SFMLParser$RetentionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RetentionContext"
import {$SFMLParser$WithContext, $SFMLParser$WithContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithContext"
import {$SFMLParser$ResourceExclusionContext, $SFMLParser$ResourceExclusionContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceExclusionContext"
import {$SFMLParser$NameContext, $SFMLParser$NameContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$NameContext"
import {$SFMLParser$ResourceIdListContext, $SFMLParser$ResourceIdListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdListContext"
import {$SFMLParser$QuantityRetentionLimitContext, $SFMLParser$QuantityRetentionLimitContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityRetentionLimitContext"
import {$RuleNode, $RuleNode$Type} from "packages/org/antlr/v4/runtime/tree/$RuleNode"
import {$SFMLParser$ResourceLimitListContext, $SFMLParser$ResourceLimitListContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceLimitListContext"
import {$SFMLParser$StringResourceContext, $SFMLParser$StringResourceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringResourceContext"
import {$SFMLParser$ListedSidesContext, $SFMLParser$ListedSidesContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ListedSidesContext"
import {$SFMLParser$BooleanRedstoneContext, $SFMLParser$BooleanRedstoneContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BooleanRedstoneContext"
import {$SFMLParser$QuantityContext, $SFMLParser$QuantityContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$QuantityContext"
import {$SFMLParser$IntervalSpaceContext, $SFMLParser$IntervalSpaceContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IntervalSpaceContext"
import {$SFMLParser$StatementContext, $SFMLParser$StatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StatementContext"
import {$SFMLParser$RangeContext, $SFMLParser$RangeContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RangeContext"
import {$SFMLParser$StringContext, $SFMLParser$StringContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$StringContext"
import {$SFMLParser$RawLabelContext, $SFMLParser$RawLabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$RawLabelContext"
import {$SFMLParser$BlockContext, $SFMLParser$BlockContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BlockContext"
import {$SFMLParser$IfStatementContext, $SFMLParser$IfStatementContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IfStatementContext"

export interface $SFMLVisitor<T> extends $ParseTreeVisitor<(T)> {

 "visitProgram"(arg0: $SFMLParser$ProgramContext$Type): T
 "visitTimerTrigger"(arg0: $SFMLParser$TimerTriggerContext$Type): T
 "visitPulseTrigger"(arg0: $SFMLParser$PulseTriggerContext$Type): T
 "visitIntervalSpace"(arg0: $SFMLParser$IntervalSpaceContext$Type): T
 "visitIntervalNoSpace"(arg0: $SFMLParser$IntervalNoSpaceContext$Type): T
 "visitForgetStatement"(arg0: $SFMLParser$ForgetStatementContext$Type): T
 "visitInputStatement"(arg0: $SFMLParser$InputStatementContext$Type): T
 "visitOutputStatement"(arg0: $SFMLParser$OutputStatementContext$Type): T
 "visitInputResourceLimits"(arg0: $SFMLParser$InputResourceLimitsContext$Type): T
 "visitOutputResourceLimits"(arg0: $SFMLParser$OutputResourceLimitsContext$Type): T
 "visitResourceLimitList"(arg0: $SFMLParser$ResourceLimitListContext$Type): T
 "visitResourceLimit"(arg0: $SFMLParser$ResourceLimitContext$Type): T
 "visitRetentionLimit"(arg0: $SFMLParser$RetentionLimitContext$Type): T
 "visitQuantityLimit"(arg0: $SFMLParser$QuantityLimitContext$Type): T
 "visitQuantity"(arg0: $SFMLParser$QuantityContext$Type): T
 "visitRetention"(arg0: $SFMLParser$RetentionContext$Type): T
 "visitResourceExclusion"(arg0: $SFMLParser$ResourceExclusionContext$Type): T
 "visitResource"(arg0: $SFMLParser$ResourceContext$Type): T
 "visitStringResource"(arg0: $SFMLParser$StringResourceContext$Type): T
 "visitResourceIdList"(arg0: $SFMLParser$ResourceIdListContext$Type): T
 "visitResourceIdDisjunction"(arg0: $SFMLParser$ResourceIdDisjunctionContext$Type): T
 "visitWithConjunction"(arg0: $SFMLParser$WithConjunctionContext$Type): T
 "visitWithParen"(arg0: $SFMLParser$WithParenContext$Type): T
 "visitWithNegation"(arg0: $SFMLParser$WithNegationContext$Type): T
 "visitWithTag"(arg0: $SFMLParser$WithTagContext$Type): T
 "visitWithDisjunction"(arg0: $SFMLParser$WithDisjunctionContext$Type): T
 "visitTagMatcher"(arg0: $SFMLParser$TagMatcherContext$Type): T
 "visitEachSide"(arg0: $SFMLParser$EachSideContext$Type): T
 "visitListedSides"(arg0: $SFMLParser$ListedSidesContext$Type): T
 "visitSlotqualifier"(arg0: $SFMLParser$SlotqualifierContext$Type): T
 "visitRangeset"(arg0: $SFMLParser$RangesetContext$Type): T
 "visitIfStatement"(arg0: $SFMLParser$IfStatementContext$Type): T
 "visitBooleanHas"(arg0: $SFMLParser$BooleanHasContext$Type): T
 "visitBooleanConjunction"(arg0: $SFMLParser$BooleanConjunctionContext$Type): T
 "visitBooleanRedstone"(arg0: $SFMLParser$BooleanRedstoneContext$Type): T
 "visitBooleanDisjunction"(arg0: $SFMLParser$BooleanDisjunctionContext$Type): T
 "visitBooleanFalse"(arg0: $SFMLParser$BooleanFalseContext$Type): T
 "visitBooleanParen"(arg0: $SFMLParser$BooleanParenContext$Type): T
 "visitBooleanNegation"(arg0: $SFMLParser$BooleanNegationContext$Type): T
 "visitBooleanTrue"(arg0: $SFMLParser$BooleanTrueContext$Type): T
 "visitComparisonOp"(arg0: $SFMLParser$ComparisonOpContext$Type): T
 "visitLabelAccess"(arg0: $SFMLParser$LabelAccessContext$Type): T
 "visitRoundrobin"(arg0: $SFMLParser$RoundrobinContext$Type): T
 "visitRawLabel"(arg0: $SFMLParser$RawLabelContext$Type): T
 "visitStringLabel"(arg0: $SFMLParser$StringLabelContext$Type): T
 "visitIdentifier"(arg0: $SFMLParser$IdentifierContext$Type): T
 "visitNumber"(arg0: $SFMLParser$NumberContext$Type): T
 "visitStatement"(arg0: $SFMLParser$StatementContext$Type): T
 "visitString"(arg0: $SFMLParser$StringContext$Type): T
 "visitQuantityRetentionLimit"(arg0: $SFMLParser$QuantityRetentionLimitContext$Type): T
 "visitName"(arg0: $SFMLParser$NameContext$Type): T
 "visitBlock"(arg0: $SFMLParser$BlockContext$Type): T
 "visitWith"(arg0: $SFMLParser$WithContext$Type): T
 "visitSide"(arg0: $SFMLParser$SideContext$Type): T
 "visitRange"(arg0: $SFMLParser$RangeContext$Type): T
 "visitSetOp"(arg0: $SFMLParser$SetOpContext$Type): T
 "visit"(arg0: $ParseTree$Type): T
 "visitChildren"(arg0: $RuleNode$Type): T
 "visitTerminal"(arg0: $TerminalNode$Type): T
 "visitErrorNode"(arg0: $ErrorNode$Type): T
}

export namespace $SFMLVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLVisitor$Type<T> = ($SFMLVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLVisitor_<T> = $SFMLVisitor$Type<(T)>;
}}
declare module "packages/ca/teamdman/sfm/common/item/$DiskItem" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Program, $Program$Type} from "packages/ca/teamdman/sfml/ast/$Program"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ManagerBlockEntity, $ManagerBlockEntity$Type} from "packages/ca/teamdman/sfm/common/blockentity/$ManagerBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiskItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "compileAndUpdateErrorsAndWarnings"(arg0: $ItemStack$Type, arg1: $ManagerBlockEntity$Type): $Program
public static "pruneIfDefault"(arg0: $ItemStack$Type): void
public static "getProgramName"(arg0: $ItemStack$Type): string
public static "setProgramName"(arg0: $ItemStack$Type, arg1: string): void
public static "setWarnings"(arg0: $ItemStack$Type, arg1: $List$Type<($TranslatableContents$Type)>): void
public static "getWarnings"(arg0: $ItemStack$Type): $List<($TranslatableContents)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "getProgram"(arg0: $ItemStack$Type): string
public static "getErrors"(arg0: $ItemStack$Type): $List<($TranslatableContents)>
public static "setProgram"(arg0: $ItemStack$Type, arg1: string): void
public static "setErrors"(arg0: $ItemStack$Type, arg1: $List$Type<($TranslatableContents$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskItem$Type = ($DiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskItem_ = $DiskItem$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$WithTagContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$SFMLParser$WithClauseContext, $SFMLParser$WithClauseContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$WithClauseContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$TagMatcherContext, $SFMLParser$TagMatcherContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$TagMatcherContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$WithTagContext extends $SFMLParser$WithClauseContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$WithClauseContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "TAG"(): $TerminalNode
public "HASHTAG"(): $TerminalNode
public "tagMatcher"(): $SFMLParser$TagMatcherContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$WithTagContext$Type = ($SFMLParser$WithTagContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$WithTagContext_ = $SFMLParser$WithTagContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ToStringPretty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToStringPretty {

 "toStringPretty"(): string
}

export namespace $ToStringPretty {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToStringPretty$Type = ($ToStringPretty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToStringPretty_ = $ToStringPretty$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$BooleanParenContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$SFMLParser$BoolexprContext, $SFMLParser$BoolexprContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$BoolexprContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$BooleanParenContext extends $SFMLParser$BoolexprContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$BoolexprContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "LPAREN"(): $TerminalNode
public "RPAREN"(): $TerminalNode
public "boolexpr"(): $SFMLParser$BoolexprContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$BooleanParenContext$Type = ($SFMLParser$BooleanParenContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$BooleanParenContext_ = $SFMLParser$BooleanParenContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$IntervalContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$IntervalContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)
constructor()

public "copyFrom"(arg0: $SFMLParser$IntervalContext$Type): void
public "getRuleIndex"(): integer
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$IntervalContext$Type = ($SFMLParser$IntervalContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$IntervalContext_ = $SFMLParser$IntervalContext$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$Number" {
import {$Statement, $Statement$Type} from "packages/ca/teamdman/sfml/ast/$Statement"
import {$ResourceIdentifier, $ResourceIdentifier$Type} from "packages/ca/teamdman/sfml/ast/$ResourceIdentifier"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ASTNode, $ASTNode$Type} from "packages/ca/teamdman/sfml/ast/$ASTNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $Number extends $Record implements $ASTNode {

constructor(value: long)

public "add"(arg0: $Number$Type): $Number
public "value"(): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getDescendantStatements"(): $Stream<($Statement)>
public "getReferencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
public "getStatements"(): $List<($Statement)>
get "descendantStatements"(): $Stream<($Statement)>
get "referencedIOResourceIds"(): $Stream<($ResourceIdentifier<(any), (any), (any)>)>
get "statements"(): $List<($Statement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Number$Type = ($Number);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Number_ = $Number$Type;
}}
declare module "packages/ca/teamdman/sfml/ast/$ToStringCondensed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToStringCondensed {

 "toStringCondensed"(): string

(): string
}

export namespace $ToStringCondensed {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToStringCondensed$Type = ($ToStringCondensed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToStringCondensed_ = $ToStringCondensed$Type;
}}
declare module "packages/ca/teamdman/sfm/common/facade/$FacadeTransparency" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FacadeTransparency extends $Enum<($FacadeTransparency)> implements $StringRepresentable {
static readonly "OPAQUE": $FacadeTransparency
static readonly "TRANSLUCENT": $FacadeTransparency
static readonly "FACADE_TRANSPARENCY_PROPERTY": $EnumProperty<($FacadeTransparency)>


public static "values"(): ($FacadeTransparency)[]
public static "valueOf"(arg0: string): $FacadeTransparency
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
export type $FacadeTransparency$Type = (("translucent") | ("opaque")) | ($FacadeTransparency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeTransparency_ = $FacadeTransparency$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RawLabelContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$LabelContext, $SFMLParser$LabelContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$LabelContext"
import {$SFMLParser$IdentifierContext, $SFMLParser$IdentifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$IdentifierContext"

export class $SFMLParser$RawLabelContext extends $SFMLParser$LabelContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$LabelContext$Type)

public "identifier"(): $SFMLParser$IdentifierContext
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RawLabelContext$Type = ($SFMLParser$RawLabelContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RawLabelContext_ = $SFMLParser$RawLabelContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/recipe/$PrintingPressRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$PrintingPressBlockEntity, $PrintingPressBlockEntity$Type} from "packages/ca/teamdman/sfm/common/blockentity/$PrintingPressBlockEntity"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $PrintingPressRecipe implements $Recipe<($PrintingPressBlockEntity)> {
readonly "ID": $ResourceLocation
readonly "FORM": $Ingredient
readonly "INK": $Ingredient
readonly "PAPER": $Ingredient

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $PrintingPressBlockEntity$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "assemble"(arg0: $PrintingPressBlockEntity$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $PrintingPressBlockEntity$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintingPressRecipe$Type = ($PrintingPressRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintingPressRecipe_ = $PrintingPressRecipe$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$RoundrobinContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$RoundrobinContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "LABEL"(): $TerminalNode
public "BY"(): $TerminalNode
public "BLOCK"(): $TerminalNode
public "ROUND"(): $TerminalNode
public "ROBIN"(): $TerminalNode
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$RoundrobinContext$Type = ($SFMLParser$RoundrobinContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$RoundrobinContext_ = $SFMLParser$RoundrobinContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/item/$ExperienceShardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExperienceShardItem extends $Item {
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
export type $ExperienceShardItem$Type = ($ExperienceShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceShardItem_ = $ExperienceShardItem$Type;
}}
declare module "packages/ca/teamdman/sfm/common/logging/$TranslatableLogEvent" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Instant, $Instant$Type} from "packages/org/apache/logging/log4j/core/time/$Instant"
import {$Level, $Level$Type} from "packages/org/apache/logging/log4j/$Level"

export class $TranslatableLogEvent extends $Record {

constructor(level: $Level$Type, instant: $Instant$Type, contents: $TranslatableContents$Type)

public "level"(): $Level
public "instant"(): $Instant
public "contents"(): $TranslatableContents
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: $FriendlyByteBuf$Type): $TranslatableLogEvent
public "encode"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslatableLogEvent$Type = ($TranslatableLogEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslatableLogEvent_ = $TranslatableLogEvent$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ResourceIdListContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SFMLParser$ResourceIdContext, $SFMLParser$ResourceIdContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$ResourceIdContext"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SFMLParser$ResourceIdListContext extends $ParserRuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "getRuleIndex"(): integer
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(): $List<($TerminalNode)>
public "COMMA"(arg0: integer): $TerminalNode
public "resourceId"(arg0: integer): $SFMLParser$ResourceIdContext
public "resourceId"(): $List<($SFMLParser$ResourceIdContext)>
get "ruleIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ResourceIdListContext$Type = ($SFMLParser$ResourceIdListContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ResourceIdListContext_ = $SFMLParser$ResourceIdListContext$Type;
}}
declare module "packages/ca/teamdman/langs/$SFMLParser$ListedSidesContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$SFMLParser$SidequalifierContext, $SFMLParser$SidequalifierContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SidequalifierContext"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$SFMLParser$SideContext, $SFMLParser$SideContext$Type} from "packages/ca/teamdman/langs/$SFMLParser$SideContext"

export class $SFMLParser$ListedSidesContext extends $SFMLParser$SidequalifierContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor(arg0: $SFMLParser$SidequalifierContext$Type)

public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "side"(): $List<($SFMLParser$SideContext)>
public "side"(arg0: integer): $SFMLParser$SideContext
public "SIDE"(): $TerminalNode
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
public "COMMA"(arg0: integer): $TerminalNode
public "COMMA"(): $List<($TerminalNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SFMLParser$ListedSidesContext$Type = ($SFMLParser$ListedSidesContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SFMLParser$ListedSidesContext_ = $SFMLParser$ListedSidesContext$Type;
}}
declare module "packages/ca/teamdman/sfm/common/blockentity/$PrintingPressBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NotContainer, $NotContainer$Type} from "packages/ca/teamdman/sfm/common/recipe/$NotContainer"

export class $PrintingPressBlockEntity extends $BlockEntity implements $NotContainer {
 "worldPosition": $BlockPos

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "performPrint"(): void
public "acceptStack"(arg0: $ItemStack$Type): $ItemStack
public "getStacksToDrop"(): ($ItemStack)[]
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "load"(arg0: $CompoundTag$Type): void
public "getForm"(): $ItemStack
public "getPaper"(): $ItemStack
public "getInk"(): $ItemStack
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
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
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
get "stacksToDrop"(): ($ItemStack)[]
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
get "form"(): $ItemStack
get "paper"(): $ItemStack
get "ink"(): $ItemStack
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
export type $PrintingPressBlockEntity$Type = ($PrintingPressBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintingPressBlockEntity_ = $PrintingPressBlockEntity$Type;
}}
declare module "packages/ca/teamdman/sfm/common/localization/$LocalizationEntry" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $LocalizationEntry extends $Record {

constructor(arg0: string, arg1: string)
constructor(key: $Supplier$Type<(string)>, value: $Supplier$Type<(string)>)

public "getString"(): string
public "getString"(...arg0: (any)[]): string
public "get"(): $TranslatableContents
public "get"(...arg0: (any)[]): $TranslatableContents
public "value"(): $Supplier<(string)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $Supplier<(string)>
public "getComponent"(...arg0: (any)[]): $MutableComponent
public "getComponent"(): $MutableComponent
public "getStub"(): string
get "string"(): string
get "component"(): $MutableComponent
get "stub"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalizationEntry$Type = ($LocalizationEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalizationEntry_ = $LocalizationEntry$Type;
}}
