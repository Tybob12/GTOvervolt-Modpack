declare module "packages/dev/ftb/mods/ftblibrary/icon/$Color4I" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$MutableColor4I, $MutableColor4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$MutableColor4I"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Color4I extends $Icon {
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "rgb"(col: integer): $Color4I
public static "rgb"(color: $Vec3$Type): $Color4I
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public "rgb"(): integer
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$Type): $Color4I
public "whiteIfEmpty"(): $Color4I
public "addBrightness"(percent: float): $Color4I
public "createPixelBuffer"(): $PixelBuffer
public "hasPixelBuffer"(): boolean
public "redf"(): float
public "greenf"(): float
public "bluef"(): float
public "draw"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public static "fromJson"(element: $JsonElement$Type): $Color4I
public static "fromString"(s: string): $Color4I
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "lerp"(col: $Color4I$Type, m: float): $Color4I
public "withTint"(col: $Color4I$Type): $Color4I
public "withColor"(color: $Color4I$Type): $Icon
public "redi"(): integer
public "greeni"(): integer
public "bluei"(): integer
public static "get256"(id: integer): $Color4I
public "alphai"(): integer
public "alphaf"(): float
public "withAlphaf"(alpha: float): $Color4I
public "toStyle"(): $Style
public "getJson"(): $JsonElement
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public "withAlpha"(a: integer): $Color4I
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public static "hsb"(h: float, s: float, b: float): $Color4I
public static "rgba"(col: integer): $Color4I
public "rgba"(): integer
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4I$Type = ($Color4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color4I_ = $Color4I$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "parse"(arg0: $Consumer$Type<(T)>, arg1: string): boolean
public "getStringFromValue"(v: T): string
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
public "getStringForGUI"(v: T): $Component
public "canScroll"(): boolean
public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFromString$Type<T> = ($ConfigFromString<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFromString_<T> = $ConfigFromString$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TeamPropertyArgument implements $ArgumentType<($TeamProperty<(any)>)> {


public static "get"(context: $CommandContext$Type<($CommandSourceStack$Type)>, name: string): $TeamProperty<(any)>
public static "create"(): $TeamPropertyArgument
public "listSuggestions"<S>(context: $CommandContext$Type<(S)>, builder: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Type = ($TeamPropertyArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument_ = $TeamPropertyArgument$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigFromString, $ConfigFromString$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString"

export class $NumberConfig<T extends number> extends $ConfigFromString<(T)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: T, mx: T)

public "getStringForGUI"(v: T): $Component
public "withScrollIncrement"(increment: T): $NumberConfig<(T)>
public "getColor"(v: T): $Color4I
public "canScroll"(): boolean
public "fader"(v: boolean): $NumberConfig<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberConfig$Type<T> = ($NumberConfig<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberConfig_<T> = $NumberConfig$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout$Padding" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $WidgetLayout$Padding extends $Record {

constructor(vertical: integer, horizontal: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "horizontal"(): integer
public "vertical"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$Padding$Type = ($WidgetLayout$Padding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout$Padding_ = $WidgetLayout$Padding$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$ImageIcon" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$IResourceIcon, $IResourceIcon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$IResourceIcon"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ImageIcon extends $Icon implements $IResourceIcon {
static readonly "MISSING_IMAGE": $ResourceLocation
readonly "texture": $ResourceLocation
 "minU": float
 "minV": float
 "maxU": float
 "maxV": float
 "tileSize": double
 "color": $Color4I

constructor(tex: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $ImageIcon
public "bindTexture"(): void
public "getResourceLocation"(): $ResourceLocation
public "aspectRatio"(): double
public "createPixelBuffer"(): $PixelBuffer
public "hasPixelBuffer"(): boolean
public "draw"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "withUV"(u0: float, v0: float, u1: float, v1: float): $ImageIcon
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageIcon$Type = ($ImageIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageIcon_ = $ImageIcon$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ImageResourceConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
public "setAllowEmpty"(allowEmpty: boolean): void
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setResource"(selectedStack: $SelectableResource$Type<($ResourceLocation$Type)>): boolean
public static "getResourceLocation"(icon: $Icon$Type): $ResourceLocation
public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "canHaveNBT"(): boolean
public "addInfo"(list: $TooltipList$Type): void
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
set "allowEmpty"(value: boolean)
set "resource"(value: $SelectableResource$Type<($ResourceLocation$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageResourceConfig$Type = ($ImageResourceConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageResourceConfig_ = $ImageResourceConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$Drawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $Drawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw3D"(graphics: $GuiGraphics$Type): void
 "drawStatic"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $Drawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawable$Type = ($Drawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drawable_ = $Drawable$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TeamPropertyArgument, $TeamPropertyArgument$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument"
import {$TeamPropertyArgument$Info, $TeamPropertyArgument$Info$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TeamPropertyArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamPropertyArgument)> {

constructor(this$0: $TeamPropertyArgument$Info$Type)

public "instantiate"(commandBuildContext: $CommandBuildContext$Type): $TeamPropertyArgument
public "type"(): $ArgumentTypeInfo<($TeamPropertyArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Template$Type = ($TeamPropertyArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info$Template_ = $TeamPropertyArgument$Info$Template$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$FluidConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setResource"(selectedStack: $SelectableResource$Type<($FluidStack$Type)>): boolean
public "getStringForGUI"(v: $FluidStack$Type): $Component
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "showAmount"(show: boolean): $FluidConfig
get "empty"(): boolean
get "resource"(): $SelectableResource<($FluidStack)>
set "resource"(value: $SelectableResource$Type<($FluidStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConfig$Type = ($FluidConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConfig_ = $FluidConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$LongConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $LongConfig extends $NumberConfig<(long)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: long, mx: long)

public "parse"(callback: $Consumer$Type<(long)>, string: string): boolean
public "scrollValue"(currentValue: long, forward: boolean): $Optional<(long)>
public "addInfo"(list: $TooltipList$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfig$Type = ($LongConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConfig_ = $LongConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument" {
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TeamArgumentProvider, $TeamArgumentProvider$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgumentProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TeamArgument implements $ArgumentType<($TeamArgumentProvider)> {
static readonly "ALREADY_IN_PARTY": $SimpleCommandExceptionType
static readonly "PLAYER_IN_PARTY": $DynamicCommandExceptionType
static readonly "NOT_IN_PARTY": $SimpleCommandExceptionType
static readonly "TEAM_NOT_FOUND": $DynamicCommandExceptionType
static readonly "CANT_EDIT": $DynamicCommandExceptionType
static readonly "NOT_MEMBER": $Dynamic2CommandExceptionType
static readonly "NOT_OFFICER": $Dynamic2CommandExceptionType
static readonly "NOT_INVITED": $DynamicCommandExceptionType
static readonly "OWNER_CANT_LEAVE": $SimpleCommandExceptionType
static readonly "CANT_KICK_OWNER": $SimpleCommandExceptionType
static readonly "API_OVERRIDE": $SimpleCommandExceptionType
static readonly "NAME_TOO_SHORT": $SimpleCommandExceptionType
static readonly "NO_PERMISSION": $SimpleCommandExceptionType


public static "get"(context: $CommandContext$Type<($CommandSourceStack$Type)>, name: string): $Team
public static "create"(): $TeamArgument
public "listSuggestions"<S>(commandContext: $CommandContext$Type<(S)>, builder: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Type = ($TeamArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument_ = $TeamArgument$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModalPanel, $ModalPanel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ContextMenu, $ContextMenu$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/dev/ftb/mods/ftblibrary/util/$BooleanConsumer"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ContextMenuItem, $ContextMenuItem$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $BaseScreen extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor()

public "getY"(): integer
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawForeground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "isMouseOver"(widget: $Widget$Type): boolean
public "mouseReleased"(button: $MouseButton$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "mousePressed"(button: $MouseButton$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "closeContextMenu"(): void
public "addMouseOverText"(list: $TooltipList$Type): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "shouldAddMouseOverText"(): boolean
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public "shouldCloseOnEsc"(): boolean
public "pushModalPanel"(modalPanel: $ModalPanel$Type): void
public "popModalPanel"(): $ModalPanel
public "closeModalPanel"(panel: $ModalPanel$Type): void
public "anyModalPanelOpen"(): boolean
public "getPrevScreen"(): $Screen
public "onClosedByKey"(key: $Key$Type): boolean
public "doesGuiPauseGame"(): boolean
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openContextMenu"(menuItems: $List$Type<($ContextMenuItem$Type)>): $ContextMenu
public "openContextMenu"(newContextMenu: $ContextMenu$Type): void
public "drawDefaultBackground"(graphics: $GuiGraphics$Type): boolean
public "openYesNoFull"(title: $Component$Type, desc: $Component$Type, callback: $BooleanConsumer$Type): void
public "setFocusedWidget"(widget: $Widget$Type): void
public "getPartialTicks"(): float
public "handleClick"(scheme: string, path: string): boolean
public "alignWidgets"(): void
public "refreshWidgets"(): void
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "onInit"(): boolean
public "getX"(): integer
public "getScreen"(): $Window
public "keyPressed"(key: $Key$Type): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "openGui"(): void
public "getGui"(): $BaseScreen
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public "onClosed"(): void
public "closeGui"(openPrevScreen: boolean): void
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollX"(): double
public "getScrollY"(): double
public "initGui"(): void
public "onPostInit"(): void
public "getTheme"(): $Theme
public "onBack"(): void
public "updateGui"(mx: integer, my: integer, pt: float): void
public "openYesNo"(title: $Component$Type, desc: $Component$Type, callback: $Runnable$Type): void
get "y"(): integer
get "prevScreen"(): $Screen
get "contextMenu"(): $Optional<($ModalPanel)>
set "focusedWidget"(value: $Widget$Type)
get "partialTicks"(): float
get "x"(): integer
get "screen"(): $Window
get "mouseX"(): integer
get "mouseY"(): integer
get "gui"(): $BaseScreen
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollX"(): double
get "scrollY"(): double
get "theme"(): $Theme
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreen$Type = ($BaseScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseScreen_ = $BaseScreen$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NameMap$Builder" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"

export class $NameMap$Builder<T> {


public "name"(p: $Function$Type<(T), ($Component$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$Type<(T), (string)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "color"(p: $Function$Type<(T), ($Color4I$Type)>): $NameMap$Builder<(T)>
public "baseNameKey"(key: string): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$Type<(T), (string)>): $NameMap$Builder<(T)>
public "icon"(p: $Function$Type<(T), ($Icon$Type)>): $NameMap$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Builder$Type<T> = ($NameMap$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap$Builder_<T> = $NameMap$Builder$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbchunks/core/$BiomeFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeFTBC {

 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
}

export namespace $BiomeFTBC {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeFTBC$Type = ($BiomeFTBC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeFTBC_ = $BiomeFTBC$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Widget$DrawLayer" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Widget$DrawLayer extends $Enum<($Widget$DrawLayer)> {
static readonly "BACKGROUND": $Widget$DrawLayer
static readonly "FOREGROUND": $Widget$DrawLayer


public static "values"(): ($Widget$DrawLayer)[]
public static "valueOf"(name: string): $Widget$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$DrawLayer$Type = (("background") | ("foreground")) | ($Widget$DrawLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget$DrawLayer_ = $Widget$DrawLayer$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty" {
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$TeamPropertyType, $TeamPropertyType$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TeamPropertyValue, $TeamPropertyValue$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TeamProperty<T> {


public "readValue"(buf: $FriendlyByteBuf$Type): T
public "equals"(o: any): boolean
public "toString"(): string
public "toString"(value: T): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "getDefaultValue"(): T
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "createValueFromNetwork"(buf: $FriendlyByteBuf$Type): $TeamPropertyValue<(T)>
public "createValueFromNBT"(tag: $Tag$Type): $TeamPropertyValue<(T)>
public "getTranslationKey"(prefix: string): string
public "config"(config: $ConfigGroup$Type, value: $TeamPropertyValue$Type<(T)>): void
public "fromString"(arg0: string): $Optional<(T)>
public "writeValue"(buf: $FriendlyByteBuf$Type, value: T): void
public "fromNBT"(tag: $Tag$Type): $Optional<(T)>
public "toNBT"(value: T): $Tag
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamProperty$Type<T> = ($TeamProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamProperty_<T> = $TeamProperty$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ConfigWithVariants<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getIteration"(arg0: T, arg1: boolean): T
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWithVariants$Type<T> = ($ConfigWithVariants<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWithVariants_<T> = $ConfigWithVariants$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$MutableColor4I" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"

export class $MutableColor4I extends $Color4I {
static readonly "TEMP": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I


public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$Type, a: integer): $Color4I
public "set"(col: $Color4I$Type): $Color4I
public "set"(col: integer, a: integer): $Color4I
public "set"(col: integer): $Color4I
public "addBrightness"(b: integer): $Color4I
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "setAlpha"(a: integer): $Color4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
public "getJson"(): $JsonElement
set "alpha"(value: integer)
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor4I$Type = ($MutableColor4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableColor4I_ = $MutableColor4I$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ConfigGroup, $ConfigGroup$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $ConfigValue<T> implements $Comparable<($ConfigValue<(T)>)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "isEqual"(v1: T, v2: T): boolean
public "getName"(): string
public "compareTo"(o: $ConfigValue$Type<(T)>): integer
public "getValue"(): T
public static "info"(key: string, value: any): $Component
public "init"(group: $ConfigGroup$Type, id: string, value: T, setter: $Consumer$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "getDefaultValue"(): T
public "getPath"(): string
public "setCurrentValue"(v: T): boolean
public "getStringForGUI"(v: T): $Component
public "getStringForGUI"(): $Component
public "setDefaultValue"(defaultValue: T): void
public "getNameKey"(): string
public "getColor"(): $Color4I
public "getColor"(v: T): $Color4I
public "getGroup"(): $ConfigGroup
public "getTooltip"(): string
public "onClicked"(arg0: $Widget$Type, arg1: $MouseButton$Type, arg2: $ConfigCallback$Type): void
public "getIcon"(v: T): $Icon
public "getIcon"(): $Icon
public "setIcon"(i: $Icon$Type): $ConfigValue<(T)>
public "addInfo"(list: $TooltipList$Type): void
public "setNameKey"(key: string): $ConfigValue<(T)>
public "setOrder"(o: integer): $ConfigValue<(T)>
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "getCanEdit"(): boolean
public "applyValue"(): void
get "name"(): string
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "path"(): string
set "currentValue"(value: T)
get "stringForGUI"(): $Component
set "defaultValue"(value: T)
get "nameKey"(): string
get "color"(): $Color4I
get "group"(): $ConfigGroup
get "tooltip"(): string
get "icon"(): $Icon
set "icon"(value: $Icon$Type)
set "nameKey"(value: string)
set "order"(value: integer)
set "canEdit"(value: boolean)
get "canEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValue$Type<T> = ($ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValue_<T> = $ConfigValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"

export class $ModalPanel extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type)

public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getExtraZlevel"(): integer
public "setExtraZlevel"(extraZlevel: integer): void
get "extraZlevel"(): integer
set "extraZlevel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModalPanel$Type = ($ModalPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModalPanel_ = $ModalPanel$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$TeamMessage" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $TeamMessage {

 "date"(): long
 "text"(): $Component
 "sender"(): $UUID
}

export namespace $TeamMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamMessage$Type = ($TeamMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamMessage_ = $TeamMessage$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$EnumConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$ConfigWithVariants, $ConfigWithVariants$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants"

export class $EnumConfig<E> extends $ConfigWithVariants<(E)> {
readonly "nameMap": $NameMap<(E)>
static readonly "NULL_TEXT": $Component
 "id": string

constructor(nm: $NameMap$Type<(E)>)

public "getStringForGUI"(v: E): $Component
public "getIteration"(currentValue: E, next: boolean): E
public "getColor"(v: E): $Color4I
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "getIcon"(v: E): $Icon
public "addInfo"(list: $TooltipList$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfig$Type<E> = ($EnumConfig<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumConfig_<E> = $EnumConfig$Type<(E)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$DoubleConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $DoubleConfig extends $NumberConfig<(double)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: double, mx: double)

public "parse"(callback: $Consumer$Type<(double)>, string: string): boolean
public "getStringFromValue"(v: double): string
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
public "addInfo"(list: $TooltipList$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfig$Type = ($DoubleConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConfig_ = $DoubleConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback {

 "save"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ConfigCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCallback$Type = ($ConfigCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCallback_ = $ConfigCallback$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyType" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PrivacyMode, $PrivacyMode$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$PrivacyMode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"

export class $TeamPropertyType<T> {
static readonly "BOOLEAN": $TeamPropertyType<(boolean)>
static readonly "STRING": $TeamPropertyType<(string)>
static readonly "STRING_LIST": $TeamPropertyType<($List<(string)>)>
static readonly "INT": $TeamPropertyType<(integer)>
static readonly "DOUBLE": $TeamPropertyType<(double)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "ENUM": $TeamPropertyType<(string)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>


public static "write"(buf: $FriendlyByteBuf$Type, p: $TeamProperty$Type<(any)>): void
public static "read"(buf: $FriendlyByteBuf$Type): $TeamProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$Type<T> = ($TeamPropertyType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyType_<T> = $TeamPropertyType$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue" {
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"

export class $TeamPropertyValue<T> {

constructor(property: $TeamProperty$Type<(T)>, value: T)
constructor(k: $TeamProperty$Type<(T)>)

public "getProperty"(): $TeamProperty<(T)>
public "toString"(): string
public "getValue"(): T
public "setValue"(value: T): void
public "copy"(): $TeamPropertyValue<(T)>
get "property"(): $TeamProperty<(T)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyValue$Type<T> = ($TeamPropertyValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyValue_<T> = $TeamPropertyValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Panel" {
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$WidgetLayout, $WidgetLayout$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $Panel extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type)

public "tick"(): void
public "add"(widget: $Widget$Type): void
public "addAll"(list: $Iterable$Type<(any)>): void
public "setOffset"(flag: boolean): void
public "getY"(): integer
public "getOnlyInteractWithWidgetsInside"(): boolean
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "mouseReleased"(button: $MouseButton$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "mousePressed"(button: $MouseButton$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "addMouseOverText"(list: $TooltipList$Type): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public "isMouseOverAnyWidget"(): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getOnlyRenderWidgetsInside"(): boolean
public "alignWidgets"(): void
public "clearWidgets"(): void
public "refreshWidgets"(): void
public "getContentWidth"(): integer
public "getContentHeight"(): integer
public "drawOffsetBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "scrollPanel"(scroll: double): boolean
public "isDefaultScrollVertical"(): boolean
public "getScrollStep"(): double
public "movePanelScroll"(dx: double, dy: double): boolean
public "setScrollStep"(s: double): void
public "getWidgets"(): $List<($Widget)>
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$Type): integer
public "getCursor"(): $CursorType
public "getX"(): integer
public "addWidgets"(): void
public "keyPressed"(key: $Key$Type): boolean
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public "onClosed"(): void
public "isOffset"(): boolean
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollX"(): double
public "getScrollY"(): double
public "drawWidget"(graphics: $GuiGraphics$Type, theme: $Theme$Type, widget: $Widget$Type, x: integer, y: integer, w: integer, h: integer): void
public "getWidget"(index: integer): $Widget
set "offset"(value: boolean)
get "y"(): integer
get "onlyInteractWithWidgetsInside"(): boolean
set "onlyInteractWithWidgetsInside"(value: boolean)
set "onlyRenderWidgetsInside"(value: boolean)
get "mouseOverAnyWidget"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "onlyRenderWidgetsInside"(): boolean
get "contentWidth"(): integer
get "contentHeight"(): integer
get "defaultScrollVertical"(): boolean
get "scrollStep"(): double
set "scrollStep"(value: double)
get "widgets"(): $List<($Widget)>
get "cursor"(): $CursorType
get "x"(): integer
get "offset"(): boolean
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollX"(): double
get "scrollY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Panel$Type = ($Panel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Panel_ = $Panel$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TeamArgument, $TeamArgument$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument"
import {$TeamArgument$Info$Template, $TeamArgument$Info$Template$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $TeamArgument$Info implements $ArgumentTypeInfo<($TeamArgument), ($TeamArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(template: $TeamArgument$Info$Template$Type, friendlyByteBuf: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): $TeamArgument$Info$Template
public "serializeToJson"(template: $TeamArgument$Info$Template$Type, jsonObject: $JsonObject$Type): void
public "unpack"(argumentType: $TeamArgument$Type): $TeamArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Type = ($TeamArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info_ = $TeamArgument$Info$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$IResourceIcon" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IResourceIcon {

 "getResourceLocation"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IResourceIcon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResourceIcon$Type = ($IResourceIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResourceIcon_ = $IResourceIcon$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "control"(): boolean
public "start"(): boolean
public "shift"(): boolean
public "alt"(): boolean
public "onlyControl"(): boolean
public "numLock"(): boolean
public "capsLock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifiers$Type = ($KeyModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifiers_ = $KeyModifiers$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ContextMenu, $ContextMenu$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$Button, $Button$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Button"

export class $ContextMenuItem implements $Comparable<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$Type, icon: $Icon$Type, callback: $Consumer$Type<($Button$Type)>)

public "isEnabled"(): boolean
public "compareTo"(o: $ContextMenuItem$Type): integer
public static "separator"(): $ContextMenuItem
public "isClickable"(): boolean
public "addMouseOverText"(list: $TooltipList$Type): void
public "createWidget"(panel: $ContextMenu$Type): $Widget
public static "title"(title: $Component$Type): $ContextMenuItem
public "getTitle"(): $Component
public "setCloseMenu"(v: boolean): $ContextMenuItem
public "getYesNoText"(): $Component
public "setYesNoText"(s: $Component$Type): $ContextMenuItem
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "onClicked"(button: $Button$Type, panel: $Panel$Type, mouseButton: $MouseButton$Type): void
public "getIcon"(): $Icon
public static "subMenu"(title: $Component$Type, icon: $Icon$Type, subItems: $List$Type<($ContextMenuItem$Type)>): $ContextMenuItem
public "drawIcon"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
get "enabled"(): boolean
get "clickable"(): boolean
set "closeMenu"(value: boolean)
get "yesNoText"(): $Component
set "yesNoText"(value: $Component$Type)
set "enabled"(value: boolean)
get "icon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenuItem$Type = ($ContextMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenuItem_ = $ContextMenuItem$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$StringConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigFromString, $ConfigFromString$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigFromString"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $StringConfig extends $ConfigFromString<(string)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
static readonly "NULL_TEXT": $Component
 "id": string

constructor(p: $Pattern$Type)
constructor()

public "parse"(callback: $Consumer$Type<(string)>, string: string): boolean
public "getStringForGUI"(v: string): $Component
public "getColor"(v: string): $Color4I
public "addInfo"(list: $TooltipList$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfig$Type = ($StringConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringConfig_ = $StringConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftbchunks/core/$BlockStateFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFTBC {

 "getFTBCIsWater"(): boolean

(): boolean
}

export namespace $BlockStateFTBC {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFTBC$Type = ($BlockStateFTBC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFTBC_ = $BlockStateFTBC$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/icon/$Icon" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Drawable, $Drawable$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Drawable"
import {$PixelBuffer, $PixelBuffer$Type} from "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Icon implements $Drawable {

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public "withPadding"(padding: integer): $Icon
public "getIngredient"(): any
public "getPixelBufferFrameCount"(): integer
public "aspectRatio"(): double
public "combineWith"(...icons: ($Icon$Type)[]): $Icon
public "combineWith"(icon: $Icon$Type): $Icon
public "createPixelBuffer"(): $PixelBuffer
public "hasPixelBuffer"(): boolean
public static "getIcon"(id: $ResourceLocation$Type): $Icon
public static "getIcon"(json: $JsonElement$Type): $Icon
public static "getIcon"(id: string): $Icon
public "withTint"(color: $Color4I$Type): $Icon
public "withBorder"(color: $Color4I$Type, roundEdges: boolean): $Icon
public "withColor"(color: $Color4I$Type): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "getJson"(): $JsonElement
public "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "draw3D"(graphics: $GuiGraphics$Type): void
public "drawStatic"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
get "ingredient"(): any
get "pixelBufferFrameCount"(): integer
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$Type = ($Icon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$IScreenWrapper" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BaseScreen, $BaseScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen"
import {$IOpenableScreen, $IOpenableScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$IOpenableScreen"

export interface $IScreenWrapper extends $IOpenableScreen {

 "openGui"(): void
 "getGui"(): $BaseScreen
 "closeGui"(openPrevScreen: boolean): void
 "run"(): void
 "openGuiLater"(): void
 "closeContextMenu"(): void
 "closeGui"(): void
 "openAfter"(runnable: $Runnable$Type): $Runnable

(): void
}

export namespace $IScreenWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenWrapper$Type = ($IScreenWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenWrapper_ = $IScreenWrapper$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ColorConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getStringForGUI"(v: $Color4I$Type): $Component
public "withAlphaEditing"(): $ColorConfig
public "isAllowAlphaEdit"(): boolean
public "onClicked"(clicked: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
get "allowAlphaEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorConfig$Type = ($ColorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorConfig_ = $ColorConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setResource"(arg0: $SelectableResource$Type<(T)>): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
public "canHaveNBT"(): boolean
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
set "resource"(value: $SelectableResource$Type<(T)>)
set "allowNBTEdit"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConfigValue$Type<T> = ($ResourceConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConfigValue_<T> = $ResourceConfigValue$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/$TooltipList" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TooltipList {
 "zOffset": integer
 "zOffsetItemTooltip": integer
 "backgroundColor": integer
 "borderColorStart": integer
 "borderColorEnd": integer
 "maxWidth": integer
 "xOffset": integer
 "yOffset": integer

constructor()

public "string"(text: string): void
public "add"(component: $Component$Type): void
public "reset"(): void
public "shouldRender"(): boolean
public "styledString"(text: string, color: $ChatFormatting$Type): void
public "styledString"(text: string, style: $Style$Type): void
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, screenWidth: integer, screenHeight: integer, font: $Font$Type): void
public "getLines"(): $List<($Component)>
public "translate"(key: string, ...objects: (any)[]): void
public "styledTranslate"(key: string, style: $Style$Type, ...objects: (any)[]): void
public "blankLine"(): void
get "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipList$Type = ($TooltipList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipList_ = $TooltipList$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$Team" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TeamRank, $TeamRank$Type} from "packages/dev/ftb/mods/ftbteams/api/$TeamRank"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TeamMessage, $TeamMessage$Type} from "packages/dev/ftb/mods/ftbteams/api/$TeamMessage"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TeamPropertyCollection, $TeamPropertyCollection$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyCollection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Team {

 "getOwner"(): $UUID
 "isValid"(): boolean
 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getMembers"(): $Set<($UUID)>
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "getPlayersByRank"(arg0: $TeamRank$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): string
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "createParty"(arg0: string, arg1: $Color4I$Type): $Team
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "sendMessage"(arg0: $UUID$Type, arg1: string): void
 "getExtraData"(): $CompoundTag
 "getRankForPlayer"(arg0: $UUID$Type): $TeamRank
 "getMessageHistory"(): $List<($TeamMessage)>
 "getShortName"(): string
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "getTeamId"(): $UUID
 "markDirty"(): void
}

export namespace $Team {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$Type = ($Team);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Team_ = $Team$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "NORMAL": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "DISABLED": $WidgetType


public static "values"(): ($WidgetType)[]
public static "valueOf"(name: string): $WidgetType
public static "mouseOver"(mouseOver: boolean): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$Type = (("normal") | ("mouse_over") | ("disabled")) | ($WidgetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetType_ = $WidgetType$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenu" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$ModalPanel, $ModalPanel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ModalPanel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ContextMenuItem, $ContextMenuItem$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$ContextMenuItem"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ContextMenu extends $ModalPanel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type, i: $List$Type<($ContextMenuItem$Type)>)

public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$Type): boolean
public "alignWidgets"(): void
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "setMaxRows"(maxRows: integer): void
set "drawVerticalSeparators"(value: boolean)
set "maxRows"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenu$Type = ($ContextMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenu_ = $ContextMenu$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Button" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Button extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$Type, t: $Component$Type, i: $Icon$Type)
constructor(panel: $Panel$Type)

public "drawBackground"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "onClicked"(arg0: $MouseButton$Type): void
public "setIcon"(i: $Icon$Type): $Button
public "setTitle"(s: $Component$Type): $Button
public "drawIcon"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "title"(): $Component
get "cursor"(): $CursorType
set "icon"(value: $Icon$Type)
set "title"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$Type = ($Button);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Button_ = $Button$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/math/$PixelBuffer" {
import {$BufferedImage, $BufferedImage$Type} from "packages/java/awt/image/$BufferedImage"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $PixelBuffer {

constructor(w: integer, h: integer)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public "fill"(col: integer): void
public static "from"(img: $BufferedImage$Type): $PixelBuffer
public static "from"(stream: $InputStream$Type): $PixelBuffer
public "copy"(): $PixelBuffer
public "getPixels"(): (integer)[]
public "setPixels"(p: (integer)[]): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$Type): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: (integer)[]): void
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "getWidth"(): integer
public "getHeight"(): integer
public "getRGB"(x: integer, y: integer): integer
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: (integer)[]): (integer)[]
public "toImage"(type: integer): $BufferedImage
get "pixels"(): (integer)[]
set "pixels"(value: (integer)[])
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PixelBuffer$Type = ($PixelBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PixelBuffer_ = $PixelBuffer$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/$BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer {

 "accept"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConsumer$Type = ($BooleanConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConsumer_ = $BooleanConsumer$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyCollection" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TeamProperty, $TeamProperty$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamProperty"
import {$TeamPropertyValue, $TeamPropertyValue$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyValue"

export interface $TeamPropertyCollection {

 "get"<T>(arg0: $TeamProperty$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$Type<(T)>, arg1: T): void
 "write"(arg0: $FriendlyByteBuf$Type): void
 "read"(arg0: $FriendlyByteBuf$Type): void
 "forEach"<T>(arg0: $BiConsumer$Type<($TeamProperty$Type<(T)>), ($TeamPropertyValue$Type<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$Type): void
}

export namespace $TeamPropertyCollection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyCollection$Type = ($TeamPropertyCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyCollection_ = $TeamPropertyCollection$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$NameMap" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$NameMap$Builder, $NameMap$Builder$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NameMap<E> implements $Iterable<(E)> {
readonly "defaultValue": E
readonly "map": $Map<(string), (E)>
readonly "keys": $List<(string)>
readonly "values": $List<(E)>


public "getDisplayName"(value: E): $Component
public "getName"(value: E): string
public "get"(s: string): E
public "get"(index: integer): E
public "size"(): integer
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: $List$Type<(T)>): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$Type, object: E): void
public "read"(data: $FriendlyByteBuf$Type): E
public "getIndex"(e: E): integer
public "getNext"(value: E): E
public "getRandom"(rand: $Random$Type): E
public "getNullable"(s: string): E
public "getStringIndex"(s: string): integer
public "withDefault"(def: E): $NameMap<(E)>
public "getPrevious"(value: E): E
public "getColor"(value: E): $Color4I
public "getIcon"(v: E): $Icon
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Type<E> = ($NameMap<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap_<E> = $NameMap$Type<(E)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$CursorType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CursorType extends $Enum<($CursorType)> {
static readonly "ARROW": $CursorType
static readonly "IBEAM": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "HAND": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "VRESIZE": $CursorType


public static "values"(): ($CursorType)[]
public static "valueOf"(name: string): $CursorType
public static "set"(type: $CursorType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorType$Type = (("crosshair") | ("arrow") | ("vresize") | ("hresize") | ("ibeam") | ("hand")) | ($CursorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorType_ = $CursorType$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$Tristate" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"

export class $Tristate extends $Enum<($Tristate)> {
static readonly "FALSE": $Tristate
static readonly "TRUE": $Tristate
static readonly "DEFAULT": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "name": string
readonly "displayName": string
readonly "result": $InteractionResult
readonly "color": $Color4I
readonly "icon": $Icon


public "get"(def: boolean): boolean
public "toString"(): string
public static "values"(): ($Tristate)[]
public static "valueOf"(name: string): $Tristate
public "write"(buffer: $FriendlyByteBuf$Type): void
public "write"(nbt: $CompoundTag$Type, key: string): void
public static "read"(nbt: $CompoundTag$Type, key: string): $Tristate
public static "read"(buffer: $FriendlyByteBuf$Type): $Tristate
public "isDefault"(): boolean
public "getOpposite"(): $Tristate
public "isTrue"(): boolean
public "isFalse"(): boolean
get "default"(): boolean
get "opposite"(): $Tristate
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tristate$Type = (("default") | ("false") | ("true")) | ($Tristate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tristate_ = $Tristate$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TeamPropertyArgument, $TeamPropertyArgument$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument"
import {$TeamPropertyArgument$Info$Template, $TeamPropertyArgument$Info$Template$Type} from "packages/dev/ftb/mods/ftbteams/api/property/$TeamPropertyArgument$Info$Template"

export class $TeamPropertyArgument$Info implements $ArgumentTypeInfo<($TeamPropertyArgument), ($TeamPropertyArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(template: $TeamPropertyArgument$Info$Template$Type, friendlyByteBuf: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): $TeamPropertyArgument$Info$Template
public "serializeToJson"(template: $TeamPropertyArgument$Info$Template$Type, jsonObject: $JsonObject$Type): void
public "unpack"(argumentType: $TeamPropertyArgument$Type): $TeamPropertyArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Type = ($TeamPropertyArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info_ = $TeamPropertyArgument$Info$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info$Template" {
import {$TeamArgument, $TeamArgument$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TeamArgument$Info, $TeamArgument$Info$Type} from "packages/dev/ftb/mods/ftbteams/data/$TeamArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TeamArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamArgument)> {

constructor(this$0: $TeamArgument$Info$Type)

public "instantiate"(commandBuildContext: $CommandBuildContext$Type): $TeamArgument
public "type"(): $ArgumentTypeInfo<($TeamArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Template$Type = ($TeamArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info$Template_ = $TeamArgument$Info$Template$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"

export interface $SelectableResource<T> {

 "getTag"(): $CompoundTag
 "getCount"(): long
 "getName"(): $Component
 "isEmpty"(): boolean
 "stack"(): T
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "setCount"(arg0: integer): void
 "setTag"(arg0: $CompoundTag$Type): void
 "getIcon"(): $Icon
}

export namespace $SelectableResource {
function item(stack: $ItemStack$Type): $SelectableResource<($ItemStack)>
function fluid(stack: $FluidStack$Type): $SelectableResource<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableResource$Type<T> = ($SelectableResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableResource_<T> = $SelectableResource$Type<(T)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$BooleanConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$ConfigWithVariants, $ConfigWithVariants$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigWithVariants"

export class $BooleanConfig extends $ConfigWithVariants<(boolean)> {
static readonly "TRUE_TEXT": $Component
static readonly "FALSE_TEXT": $Component
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getStringForGUI"(v: boolean): $Component
public "getIteration"(currentValue: boolean, next: boolean): boolean
public "getColor"(v: boolean): $Color4I
public "getIcon"(v: boolean): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfig$Type = ($BooleanConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConfig_ = $BooleanConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout" {
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$WidgetLayout$Padding, $WidgetLayout$Padding$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetLayout$Padding"

export interface $WidgetLayout {

 "getLayoutPadding"(): $WidgetLayout$Padding
 "align"(arg0: $Panel$Type): integer

(): $WidgetLayout$Padding
}

export namespace $WidgetLayout {
const NO_PADDING: $WidgetLayout$Padding
const NONE: $WidgetLayout
const VERTICAL: $WidgetLayout
const HORIZONTAL: $WidgetLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$Type = ($WidgetLayout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout_ = $WidgetLayout$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Widget" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Panel, $Panel$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Panel"
import {$PositionedIngredient, $PositionedIngredient$Type} from "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget$DrawLayer, $Widget$DrawLayer$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget$DrawLayer"
import {$CursorType, $CursorType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$CursorType"
import {$Key, $Key$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$Key"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$IScreenWrapper, $IScreenWrapper$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$IScreenWrapper"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BaseScreen, $BaseScreen$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$BaseScreen"
import {$WidgetType, $WidgetType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType"
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Theme, $Theme$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Theme"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"

export class $Widget implements $IScreenWrapper, $Comparable<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$Type)

public "setSize"(w: integer, h: integer): void
public "isEnabled"(): boolean
public "tick"(): void
public "toString"(): string
public "compareTo"(widget: $Widget$Type): integer
public "getParent"(): $Panel
public "getY"(): integer
public "isMouseOver"(): boolean
public "mouseReleased"(button: $MouseButton$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "mousePressed"(button: $MouseButton$Type): boolean
public "keyReleased"(key: $Key$Type): void
public "addMouseOverText"(list: $TooltipList$Type): void
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "shouldAddMouseOverText"(): boolean
public "mouseDoubleClicked"(button: $MouseButton$Type): boolean
public static "isShiftKeyDown"(): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$Type): void
public "getPartialTicks"(): float
public "handleClick"(scheme: string, path: string): boolean
public "handleClick"(click: string): boolean
public "isGhostIngredientTarget"(ingredient: any): boolean
public "acceptGhostIngredient"(ingredient: any): void
public static "isMouseButtonDown"(button: $MouseButton$Type): boolean
public static "getClipboardString"(): string
public static "setClipboardString"(string: string): void
public static "isCtrlKeyDown"(): boolean
public "playClickSound"(): void
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "getWidgetType"(): $WidgetType
public "getTitle"(): $Component
public "getWidth"(): integer
public "getHeight"(): integer
public "draw"(graphics: $GuiGraphics$Type, theme: $Theme$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "setPos"(x: integer, y: integer): void
public "getX"(): integer
public "getPosX"(): integer
public "getPosY"(): integer
public "getScreen"(): $Window
public "setHeight"(v: integer): void
public "keyPressed"(key: $Key$Type): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "setX"(v: integer): void
public "setY"(v: integer): void
public "getGui"(): $BaseScreen
public "charTyped"(c: character, modifiers: $KeyModifiers$Type): boolean
public static "isKeyDown"(key: integer): boolean
public "onClosed"(): void
public "setWidth"(v: integer): void
public "shouldDraw"(): boolean
public "openGui"(): void
public "closeGui"(openPrevScreen: boolean): void
public "run"(): void
public "openGuiLater"(): void
public "closeContextMenu"(): void
public "closeGui"(): void
public "openAfter"(runnable: $Runnable$Type): $Runnable
get "enabled"(): boolean
get "parent"(): $Panel
get "y"(): integer
get "mouseOver"(): boolean
get "shiftKeyDown"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$Type)
get "partialTicks"(): float
get "clipboardString"(): string
set "clipboardString"(value: string)
get "ctrlKeyDown"(): boolean
get "widgetType"(): $WidgetType
get "title"(): $Component
get "width"(): integer
get "height"(): integer
get "cursor"(): $CursorType
get "x"(): integer
get "posX"(): integer
get "posY"(): integer
get "screen"(): $Window
set "height"(value: integer)
get "mouseX"(): integer
get "mouseY"(): integer
set "x"(value: integer)
set "y"(value: integer)
get "gui"(): $BaseScreen
set "width"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$IntConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NumberConfig, $NumberConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NumberConfig"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $IntConfig extends $NumberConfig<(integer)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
 "fader": boolean
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: integer, mx: integer)

public "parse"(callback: $Consumer$Type<(integer)>, string: string): boolean
public "scrollValue"(currentValue: integer, forward: boolean): $Optional<(integer)>
public "addInfo"(list: $TooltipList$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfig$Type = ($IntConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConfig_ = $IntConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/core/$DisplayInfoFTBL" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DisplayInfoFTBL {

 "getIconStackFTBL"(): $ItemStack

(): $ItemStack
}

export namespace $DisplayInfoFTBL {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayInfoFTBL$Type = ($DisplayInfoFTBL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayInfoFTBL_ = $DisplayInfoFTBL$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$IOpenableScreen" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IOpenableScreen extends $Runnable {

 "run"(): void
 "openGuiLater"(): void
 "closeContextMenu"(): void
 "openGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "openAfter"(runnable: $Runnable$Type): $Runnable

(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenableScreen$Type = ($IOpenableScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenableScreen_ = $IOpenableScreen$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/$TeamRank" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Icon, $Icon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Icon"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TeamRank extends $Enum<($TeamRank)> implements $StringRepresentable {
static readonly "ENEMY": $TeamRank
static readonly "NONE": $TeamRank
static readonly "ALLY": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "MEMBER": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "OWNER": $TeamRank
static readonly "NAME_MAP": $NameMap<($TeamRank)>


public "getDisplayName"(): $Component
public static "values"(): ($TeamRank)[]
public static "valueOf"(name: string): $TeamRank
public "isEnemyOrWorse"(): boolean
public "isNoneOrBetter"(): boolean
public "isInvitedOrBetter"(): boolean
public "isAllyOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isAtLeast"(rank: $TeamRank$Type): boolean
public "getSerializedName"(): string
public "getIcon"(): $Optional<($Icon)>
public "getPower"(): integer
public "isOwner"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "displayName"(): $Component
get "enemyOrWorse"(): boolean
get "noneOrBetter"(): boolean
get "invitedOrBetter"(): boolean
get "allyOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "serializedName"(): string
get "icon"(): $Optional<($Icon)>
get "power"(): integer
get "owner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamRank$Type = (("owner") | ("ally") | ("officer") | ("invited") | ("member") | ("enemy") | ("none")) | ($TeamRank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamRank_ = $TeamRank$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/data/$TeamArgumentProvider" {
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Team, $Team$Type} from "packages/dev/ftb/mods/ftbteams/api/$Team"

export interface $TeamArgumentProvider {

 "getTeam"(arg0: $CommandSourceStack$Type): $Team

(arg0: $CommandSourceStack$Type): $Team
}

export namespace $TeamArgumentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgumentProvider$Type = ($TeamArgumentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgumentProvider_ = $TeamArgumentProvider$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ListConfig" {
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$TooltipList, $TooltipList$Type} from "packages/dev/ftb/mods/ftblibrary/util/$TooltipList"

export class $ListConfig<E, CV extends $ConfigValue<(E)>> extends $ConfigValue<($List<(E)>)> {
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component
static readonly "COLOR": $Color4I
static readonly "NULL_TEXT": $Component
 "id": string

constructor(t: CV)

public "getType"(): CV
public "copy"(v: $List$Type<(E)>): $List<(E)>
public "getStringForGUI"(v: $List$Type<(E)>): $Component
public "getColor"(v: $List$Type<(E)>): $Color4I
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
public "addInfo"(l: $TooltipList$Type): void
get "type"(): CV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfig$Type<E, CV> = ($ListConfig<(E), (CV)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListConfig_<E, CV> = $ListConfig$Type<(E), (CV)>;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$Key" {
import {$KeyModifiers, $KeyModifiers$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$KeyModifiers"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $Key {
readonly "keyCode": integer
readonly "scanCode": integer
readonly "modifiers": $KeyModifiers

constructor(k: integer, s: integer, m: integer)

public "copy"(): boolean
public "is"(k: integer): boolean
public "escOrInventory"(): boolean
public "enter"(): boolean
public "getInputMapping"(): $InputConstants$Key
public "deselectAll"(): boolean
public "cut"(): boolean
public "esc"(): boolean
public "backspace"(): boolean
public "selectAll"(): boolean
public "paste"(): boolean
get "inputMapping"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$Type = ($Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_ = $Key$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/$Theme" {
import {$ImageIcon, $ImageIcon$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$ImageIcon"
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$WidgetType, $WidgetType$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$WidgetType"

export class $Theme {
static readonly "DEFAULT": $Theme
static "renderDebugBoxes": boolean
static readonly "DARK": integer
static readonly "SHADOW": integer
static readonly "CENTERED": integer
static readonly "UNICODE": integer
static readonly "MOUSE_OVER": integer
static readonly "CENTERED_V": integer
static readonly "BACKGROUND_SQUARES": $ImageIcon

constructor()

public "drawPanelBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawScrollBar"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type, vertical: boolean): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "trimStringToWidth"(text: $FormattedText$Type, width: integer): $FormattedText
public "trimStringToWidth"(text: string, width: integer): string
public "drawTextBox"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "getContentColor"(type: $WidgetType$Type): $Color4I
public "getFontHeight"(): integer
public "drawContextMenuBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "getStringWidth"(text: $FormattedCharSequence$Type): integer
public "getStringWidth"(text: $FormattedText$Type): integer
public "getStringWidth"(text: string): integer
public "getInvertedContentColor"(): $Color4I
public "drawContainerSlot"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawCheckbox"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type, selected: boolean, radioButton: boolean): void
public "drawHorizontalTab"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "trimStringToWidthReverse"(text: string, width: integer): string
public "listFormattedStringToWidth"(text: $FormattedText$Type, width: integer): $List<($FormattedText)>
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer, color: $Color4I$Type, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$Type, text: any, x: integer, y: integer): integer
public "getFont"(): $Font
public "drawWidget"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawSlot"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawGui"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
public "drawButton"(graphics: $GuiGraphics$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$Type): void
get "fontHeight"(): integer
get "invertedContentColor"(): $Color4I
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$Type = ($Theme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Theme_ = $Theme$Type;
}}
declare module "packages/dev/ftb/mods/ftbteams/api/property/$PrivacyMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PrivacyMode extends $Enum<($PrivacyMode)> implements $StringRepresentable {
static readonly "ALLIES": $PrivacyMode
static readonly "PRIVATE": $PrivacyMode
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": ($PrivacyMode)[]
static readonly "NAME_MAP": $NameMap<($PrivacyMode)>
readonly "name": string


public static "values"(): ($PrivacyMode)[]
public static "valueOf"(name: string): $PrivacyMode
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
export type $PrivacyMode$Type = (("private") | ("public") | ("allies")) | ($PrivacyMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivacyMode_ = $PrivacyMode$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ItemStackConfig" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$MouseButton, $MouseButton$Type} from "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton"
import {$ResourceConfigValue, $ResourceConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ResourceConfigValue"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SelectableResource, $SelectableResource$Type} from "packages/dev/ftb/mods/ftblibrary/config/ui/$SelectableResource"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "getValue"(): $ItemStack
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(value: $ItemStack$Type): $ItemStack
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setResource"(selectedStack: $SelectableResource$Type<($ItemStack$Type)>): boolean
public "getStringForGUI"(v: $ItemStack$Type): $Component
public "onClicked"(clickedWidget: $Widget$Type, button: $MouseButton$Type, callback: $ConfigCallback$Type): void
get "value"(): $ItemStack
get "empty"(): boolean
get "resource"(): $SelectableResource<($ItemStack)>
set "resource"(value: $SelectableResource$Type<($ItemStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackConfig$Type = ($ItemStackConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackConfig_ = $ItemStackConfig$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/ui/input/$MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "LEFT": $MouseButton
static readonly "RIGHT": $MouseButton
static readonly "MIDDLE": $MouseButton
static readonly "BACK": $MouseButton
static readonly "NEXT": $MouseButton
readonly "id": integer


public static "get"(i: integer): $MouseButton
public "hashCode"(): integer
public "getId"(): integer
public "isLeft"(): boolean
public "isRight"(): boolean
public "isMiddle"(): boolean
get "id"(): integer
get "left"(): boolean
get "right"(): boolean
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseButton$Type = ($MouseButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseButton_ = $MouseButton$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/core/$ItemFTBL" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ItemFTBL {

 "setCraftingRemainingItemFTBL"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $ItemFTBL {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$Type = ($ItemFTBL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFTBL_ = $ItemFTBL$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/config/$ConfigGroup" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigCallback, $ConfigCallback$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigCallback"
import {$StringConfig, $StringConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$StringConfig"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BooleanConfig, $BooleanConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$BooleanConfig"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LongConfig, $LongConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$LongConfig"
import {$Tristate, $Tristate$Type} from "packages/dev/ftb/mods/ftblibrary/config/$Tristate"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ImageResourceConfig, $ImageResourceConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ImageResourceConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleConfig, $DoubleConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$DoubleConfig"
import {$ItemStackConfig, $ItemStackConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ItemStackConfig"
import {$Color4I, $Color4I$Type} from "packages/dev/ftb/mods/ftblibrary/icon/$Color4I"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConfigValue, $ConfigValue$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ConfigValue"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$ListConfig, $ListConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ListConfig"
import {$NameMap, $NameMap$Type} from "packages/dev/ftb/mods/ftblibrary/config/$NameMap"
import {$FluidConfig, $FluidConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$FluidConfig"
import {$EnumConfig, $EnumConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$EnumConfig"
import {$ColorConfig, $ColorConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$ColorConfig"
import {$IntConfig, $IntConfig$Type} from "packages/dev/ftb/mods/ftblibrary/config/$IntConfig"

export class $ConfigGroup implements $Comparable<($ConfigGroup)> {

constructor(id: string, savedCallback: $ConfigCallback$Type)
constructor(id: string)

public "getName"(): $Component
public "add"<T, CV extends $ConfigValue<(T)>>(id: string, type: CV, value: T, setter: $Consumer$Type<(T)>, defaultValue: T): CV
public "compareTo"(o: $ConfigGroup$Type): integer
public "getParent"(): $ConfigGroup
public "getId"(): string
public "save"(accepted: boolean): void
public "getPath"(): string
public "addTristate"(id: string, value: $Tristate$Type, setter: $Consumer$Type<($Tristate$Type)>, def: $Tristate$Type): $EnumConfig<($Tristate)>
public "addTristate"(id: string, value: $Tristate$Type, setter: $Consumer$Type<($Tristate$Type)>): $EnumConfig<($Tristate)>
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "addFluidStack"(id: string, value: $FluidStack$Type, setter: $Consumer$Type<($FluidStack$Type)>, def: $FluidStack$Type, allowEmpty: boolean): $FluidConfig
public "addFluidStack"(id: string, value: $FluidStack$Type, setter: $Consumer$Type<($FluidStack$Type)>, def: $FluidStack$Type, fixedSize: long): $FluidConfig
public "getOrCreateSubgroup"(id: string): $ConfigGroup
public "getOrCreateSubgroup"(id: string, displayOrder: integer): $ConfigGroup
public "addItemStack"(id: string, value: $ItemStack$Type, setter: $Consumer$Type<($ItemStack$Type)>, def: $ItemStack$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addItemStack"(id: string, value: $ItemStack$Type, setter: $Consumer$Type<($ItemStack$Type)>, def: $ItemStack$Type, fixedSize: integer): $ItemStackConfig
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$Type<(E)>, type: CV, setter: $Consumer$Type<($List$Type<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, c: $List$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "getNameKey"(): string
public "getValues"(): $Collection<($ConfigValue<(any)>)>
public "getTooltip"(): $Component
public "addString"(id: string, value: string, setter: $Consumer$Type<(string)>, def: string, pattern: $Pattern$Type): $StringConfig
public "addString"(id: string, value: string, setter: $Consumer$Type<(string)>, def: string): $StringConfig
public "addInt"(id: string, value: integer, setter: $Consumer$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public "addDouble"(id: string, value: double, setter: $Consumer$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addEnum"<E>(id: string, value: E, setter: $Consumer$Type<(E)>, nameMap: $NameMap$Type<(E)>, def: E): $EnumConfig<(E)>
public "addEnum"<E>(id: string, value: E, setter: $Consumer$Type<(E)>, nameMap: $NameMap$Type<(E)>): $EnumConfig<(E)>
public "addLong"(id: string, value: long, setter: $Consumer$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addBool"(id: string, value: boolean, setter: $Consumer$Type<(boolean)>, def: boolean): $BooleanConfig
public "addColor"(id: string, value: $Color4I$Type, setter: $Consumer$Type<($Color4I$Type)>, def: $Color4I$Type): $ColorConfig
public "setNameKey"(key: string): $ConfigGroup
public "addImage"(id: string, value: $ResourceLocation$Type, setter: $Consumer$Type<($ResourceLocation$Type)>, def: $ResourceLocation$Type): $ImageResourceConfig
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): string
get "path"(): string
get "subgroups"(): $Collection<($ConfigGroup)>
get "nameKey"(): string
get "values"(): $Collection<($ConfigValue<(any)>)>
get "tooltip"(): $Component
set "nameKey"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigGroup$Type = ($ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigGroup_ = $ConfigGroup$Type;
}}
declare module "packages/dev/ftb/mods/ftblibrary/util/client/$PositionedIngredient" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Widget, $Widget$Type} from "packages/dev/ftb/mods/ftblibrary/ui/$Widget"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $PositionedIngredient extends $Record {

constructor(ingredient: any, area: $Rect2i$Type, tooltip: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$Type): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public "tooltip"(): boolean
public "ingredient"(): any
public "area"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$Type = ($PositionedIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedIngredient_ = $PositionedIngredient$Type;
}}
