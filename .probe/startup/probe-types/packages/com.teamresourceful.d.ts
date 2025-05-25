declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CodecRecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor(recipeType: $RecipeType$Type<(R)>, codec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)
constructor(recipeType: $RecipeType$Type<(R)>, jsonCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>, networkCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)

public "type"(): $RecipeType<(R)>
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): R
public "fromNetwork"(id: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): R
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$Type<R> = ($CodecRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeSerializer_<R> = $CodecRecipeSerializer$Type<(R)>;
}}
