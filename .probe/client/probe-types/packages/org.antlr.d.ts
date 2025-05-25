declare module "packages/org/antlr/v4/runtime/atn/$TokensStartState" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$DecisionState, $DecisionState$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionState"

export class $TokensStartState extends $DecisionState {
 "decision": integer
 "nonGreedy": boolean
static readonly "INITIAL_NUM_TRANSITIONS": integer
static readonly "INVALID_TYPE": integer
static readonly "BASIC": integer
static readonly "RULE_START": integer
static readonly "BLOCK_START": integer
static readonly "PLUS_BLOCK_START": integer
static readonly "STAR_BLOCK_START": integer
static readonly "TOKEN_START": integer
static readonly "RULE_STOP": integer
static readonly "BLOCK_END": integer
static readonly "STAR_LOOP_BACK": integer
static readonly "STAR_LOOP_ENTRY": integer
static readonly "PLUS_LOOP_BACK": integer
static readonly "LOOP_END": integer
static readonly "serializationNames": $List<(string)>
static readonly "INVALID_STATE_NUMBER": integer
 "atn": $ATN
 "stateNumber": integer
 "ruleIndex": integer
 "epsilonOnlyTransitions": boolean
 "nextTokenWithinRule": $IntervalSet

constructor()

public "getStateType"(): integer
get "stateType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokensStartState$Type = ($TokensStartState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokensStartState_ = $TokensStartState$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$AbstractEqualityComparator" {
import {$EqualityComparator, $EqualityComparator$Type} from "packages/org/antlr/v4/runtime/misc/$EqualityComparator"

export class $AbstractEqualityComparator<T> implements $EqualityComparator<(T)> {

constructor()

public "equals"(arg0: T, arg1: T): boolean
public "hashCode"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEqualityComparator$Type<T> = ($AbstractEqualityComparator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEqualityComparator_<T> = $AbstractEqualityComparator$Type<(T)>;
}}
declare module "packages/org/antlr/v4/runtime/atn/$DecisionInfo" {
import {$PredicateEvalInfo, $PredicateEvalInfo$Type} from "packages/org/antlr/v4/runtime/atn/$PredicateEvalInfo"
import {$LookaheadEventInfo, $LookaheadEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$LookaheadEventInfo"
import {$ErrorInfo, $ErrorInfo$Type} from "packages/org/antlr/v4/runtime/atn/$ErrorInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AmbiguityInfo, $AmbiguityInfo$Type} from "packages/org/antlr/v4/runtime/atn/$AmbiguityInfo"
import {$ContextSensitivityInfo, $ContextSensitivityInfo$Type} from "packages/org/antlr/v4/runtime/atn/$ContextSensitivityInfo"

export class $DecisionInfo {
readonly "decision": integer
 "invocations": long
 "timeInPrediction": long
 "SLL_TotalLook": long
 "SLL_MinLook": long
 "SLL_MaxLook": long
 "SLL_MaxLookEvent": $LookaheadEventInfo
 "LL_TotalLook": long
 "LL_MinLook": long
 "LL_MaxLook": long
 "LL_MaxLookEvent": $LookaheadEventInfo
readonly "contextSensitivities": $List<($ContextSensitivityInfo)>
readonly "errors": $List<($ErrorInfo)>
readonly "ambiguities": $List<($AmbiguityInfo)>
readonly "predicateEvals": $List<($PredicateEvalInfo)>
 "SLL_ATNTransitions": long
 "SLL_DFATransitions": long
 "LL_Fallback": long
 "LL_ATNTransitions": long
 "LL_DFATransitions": long

constructor(arg0: integer)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecisionInfo$Type = ($DecisionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecisionInfo_ = $DecisionInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ProfilingATNSimulator" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$DecisionInfo, $DecisionInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionInfo"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DFAState, $DFAState$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$DFA, $DFA$Type} from "packages/org/antlr/v4/runtime/dfa/$DFA"
import {$ParserATNSimulator, $ParserATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ParserATNSimulator"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export class $ProfilingATNSimulator extends $ParserATNSimulator {
static readonly "debug": boolean
static readonly "debug_list_atn_decisions": boolean
static readonly "dfa_debug": boolean
static readonly "retry_debug": boolean
static readonly "TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT": boolean
readonly "decisionToDFA": ($DFA)[]
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_VERSION": integer
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_UUID": $UUID
static readonly "ERROR": $DFAState
readonly "atn": $ATN

constructor(arg0: $Parser$Type)

public "adaptivePredict"(arg0: $TokenStream$Type, arg1: integer, arg2: $ParserRuleContext$Type): integer
public "getDecisionInfo"(): ($DecisionInfo)[]
public "getCurrentState"(): $DFAState
get "decisionInfo"(): ($DecisionInfo)[]
get "currentState"(): $DFAState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfilingATNSimulator$Type = ($ProfilingATNSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProfilingATNSimulator_ = $ProfilingATNSimulator$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo" {
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $DecisionEventInfo {
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $ATNConfigSet$Type, arg2: $TokenStream$Type, arg3: integer, arg4: integer, arg5: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecisionEventInfo$Type = ($DecisionEventInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecisionEventInfo_ = $DecisionEventInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ParseInfo" {
import {$DecisionInfo, $DecisionInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ProfilingATNSimulator, $ProfilingATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ProfilingATNSimulator"

export class $ParseInfo {

constructor(arg0: $ProfilingATNSimulator$Type)

public "getDecisionInfo"(): ($DecisionInfo)[]
public "getLLDecisions"(): $List<(integer)>
public "getTotalTimeInPrediction"(): long
public "getTotalSLLLookaheadOps"(): long
public "getTotalLLLookaheadOps"(): long
public "getTotalSLLATNLookaheadOps"(): long
public "getTotalLLATNLookaheadOps"(): long
public "getTotalATNLookaheadOps"(): long
public "getDFASize"(): integer
public "getDFASize"(arg0: integer): integer
get "decisionInfo"(): ($DecisionInfo)[]
get "lLDecisions"(): $List<(integer)>
get "totalTimeInPrediction"(): long
get "totalSLLLookaheadOps"(): long
get "totalLLLookaheadOps"(): long
get "totalSLLATNLookaheadOps"(): long
get "totalLLATNLookaheadOps"(): long
get "totalATNLookaheadOps"(): long
get "dFASize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseInfo$Type = ($ParseInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseInfo_ = $ParseInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/$TokenStream" {
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$TokenSource, $TokenSource$Type} from "packages/org/antlr/v4/runtime/$TokenSource"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"

export interface $TokenStream extends $IntStream {

 "LT"(arg0: integer): $Token
 "get"(arg0: integer): $Token
 "getTokenSource"(): $TokenSource
 "getText"(arg0: $Token$Type, arg1: $Token$Type): string
 "getText"(arg0: $RuleContext$Type): string
 "getText"(): string
 "getText"(arg0: $Interval$Type): string
 "seek"(arg0: integer): void
 "consume"(): void
 "index"(): integer
 "size"(): integer
 "mark"(): integer
 "release"(arg0: integer): void
 "getSourceName"(): string
 "LA"(arg0: integer): integer
}

export namespace $TokenStream {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenStream$Type = ($TokenStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenStream_ = $TokenStream$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$LexerActionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LexerActionType extends $Enum<($LexerActionType)> {
static readonly "CHANNEL": $LexerActionType
static readonly "CUSTOM": $LexerActionType
static readonly "MODE": $LexerActionType
static readonly "MORE": $LexerActionType
static readonly "POP_MODE": $LexerActionType
static readonly "PUSH_MODE": $LexerActionType
static readonly "SKIP": $LexerActionType
static readonly "TYPE": $LexerActionType


public static "values"(): ($LexerActionType)[]
public static "valueOf"(arg0: string): $LexerActionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LexerActionType$Type = (("mode") | ("push_mode") | ("pop_mode") | ("more") | ("custom") | ("channel") | ("skip") | ("type")) | ($LexerActionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LexerActionType_ = $LexerActionType$Type;
}}
declare module "packages/org/antlr/v4/runtime/$ANTLRErrorListener" {
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$DFA, $DFA$Type} from "packages/org/antlr/v4/runtime/dfa/$DFA"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export interface $ANTLRErrorListener {

 "reportAttemptingFullContext"(arg0: $Parser$Type, arg1: $DFA$Type, arg2: integer, arg3: integer, arg4: $BitSet$Type, arg5: $ATNConfigSet$Type): void
 "reportAmbiguity"(arg0: $Parser$Type, arg1: $DFA$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $BitSet$Type, arg6: $ATNConfigSet$Type): void
 "reportContextSensitivity"(arg0: $Parser$Type, arg1: $DFA$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $ATNConfigSet$Type): void
 "syntaxError"(arg0: $Recognizer$Type<(any), (any)>, arg1: any, arg2: integer, arg3: integer, arg4: string, arg5: $RecognitionException$Type): void
}

export namespace $ANTLRErrorListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ANTLRErrorListener$Type = ($ANTLRErrorListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ANTLRErrorListener_ = $ANTLRErrorListener$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNConfigSet$AbstractConfigHashSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Array2DHashSet, $Array2DHashSet$Type} from "packages/org/antlr/v4/runtime/misc/$Array2DHashSet"
import {$ATNConfig, $ATNConfig$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfig"
import {$AbstractEqualityComparator, $AbstractEqualityComparator$Type} from "packages/org/antlr/v4/runtime/misc/$AbstractEqualityComparator"

export class $ATNConfigSet$AbstractConfigHashSet extends $Array2DHashSet<($ATNConfig)> {
static readonly "INITAL_CAPACITY": integer
static readonly "INITAL_BUCKET_CAPACITY": integer
static readonly "LOAD_FACTOR": double

constructor(arg0: $AbstractEqualityComparator$Type<(any)>)
constructor(arg0: $AbstractEqualityComparator$Type<(any)>, arg1: integer, arg2: integer)

public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNConfigSet$AbstractConfigHashSet$Type = ($ATNConfigSet$AbstractConfigHashSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNConfigSet$AbstractConfigHashSet_ = $ATNConfigSet$AbstractConfigHashSet$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ParserATNSimulator" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$ATNSimulator, $ATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ATNSimulator"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DFAState, $DFAState$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState"
import {$ATNConfig, $ATNConfig$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfig"
import {$NoViableAltException, $NoViableAltException$Type} from "packages/org/antlr/v4/runtime/$NoViableAltException"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$DFA, $DFA$Type} from "packages/org/antlr/v4/runtime/dfa/$DFA"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$PrecedencePredicateTransition, $PrecedencePredicateTransition$Type} from "packages/org/antlr/v4/runtime/atn/$PrecedencePredicateTransition"
import {$PredictionContextCache, $PredictionContextCache$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContextCache"
import {$PredictionMode, $PredictionMode$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionMode"

export class $ParserATNSimulator extends $ATNSimulator {
static readonly "debug": boolean
static readonly "debug_list_atn_decisions": boolean
static readonly "dfa_debug": boolean
static readonly "retry_debug": boolean
static readonly "TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT": boolean
readonly "decisionToDFA": ($DFA)[]
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_VERSION": integer
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_UUID": $UUID
static readonly "ERROR": $DFAState
readonly "atn": $ATN

constructor(arg0: $ATN$Type, arg1: ($DFA$Type)[], arg2: $PredictionContextCache$Type)
constructor(arg0: $Parser$Type, arg1: $ATN$Type, arg2: ($DFA$Type)[], arg3: $PredictionContextCache$Type)

public "reset"(): void
public "adaptivePredict"(arg0: $TokenStream$Type, arg1: integer, arg2: $ParserRuleContext$Type): integer
public "getTokenName"(arg0: integer): string
public "getPredictionMode"(): $PredictionMode
public "setPredictionMode"(arg0: $PredictionMode$Type): void
public "getRuleName"(arg0: integer): string
public "precedenceTransition"(arg0: $ATNConfig$Type, arg1: $PrecedencePredicateTransition$Type, arg2: boolean, arg3: boolean, arg4: boolean): $ATNConfig
public "getLookaheadName"(arg0: $TokenStream$Type): string
public "dumpDeadEndConfigs"(arg0: $NoViableAltException$Type): void
public "getParser"(): $Parser
public static "getSafeEnv"(arg0: string): string
public "clearDFA"(): void
get "predictionMode"(): $PredictionMode
set "predictionMode"(value: $PredictionMode$Type)
get "parser"(): $Parser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParserATNSimulator$Type = ($ParserATNSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParserATNSimulator_ = $ParserATNSimulator$Type;
}}
declare module "packages/org/antlr/v4/runtime/$Vocabulary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Vocabulary {

 "getDisplayName"(arg0: integer): string
 "getLiteralName"(arg0: integer): string
 "getSymbolicName"(arg0: integer): string
 "getMaxTokenType"(): integer
}

export namespace $Vocabulary {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vocabulary$Type = ($Vocabulary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vocabulary_ = $Vocabulary$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$Pair" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Pair<A, B> implements $Serializable {
readonly "a": A
readonly "b": B

constructor(arg0: A, arg1: B)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<A, B> = ($Pair<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<A, B> = $Pair$Type<(A), (B)>;
}}
declare module "packages/org/antlr/v4/runtime/tree/$ErrorNode" {
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export interface $ErrorNode extends $TerminalNode {

 "getSymbol"(): $Token
 "getChild"(arg0: integer): $ParseTree
 "getParent"(): $ParseTree
 "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
 "setParent"(arg0: $RuleContext$Type): void
 "toStringTree"(arg0: $Parser$Type): string
 "getText"(): string
 "getSourceInterval"(): $Interval
 "getChildCount"(): integer
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $ErrorNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorNode$Type = ($ErrorNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorNode_ = $ErrorNode$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$Interval" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Interval {
static readonly "INTERVAL_POOL_MAX_VALUE": integer
static readonly "INVALID": $Interval
 "a": integer
 "b": integer
static "creates": integer
static "misses": integer
static "hits": integer
static "outOfRange": integer

constructor(arg0: integer, arg1: integer)

public "union"(arg0: $Interval$Type): $Interval
public "disjoint"(arg0: $Interval$Type): boolean
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer): $Interval
public "differenceNotProperlyContained"(arg0: $Interval$Type): $Interval
public "startsBeforeDisjoint"(arg0: $Interval$Type): boolean
public "properlyContains"(arg0: $Interval$Type): boolean
public "startsAfterNonDisjoint"(arg0: $Interval$Type): boolean
public "startsBeforeNonDisjoint"(arg0: $Interval$Type): boolean
public "startsAfter"(arg0: $Interval$Type): boolean
public "startsAfterDisjoint"(arg0: $Interval$Type): boolean
public "intersection"(arg0: $Interval$Type): $Interval
public "adjacent"(arg0: $Interval$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interval$Type = ($Interval);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Interval_ = $Interval$Type;
}}
declare module "packages/org/antlr/v4/runtime/dfa/$DFA" {
import {$DFAState, $DFAState$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState"
import {$Vocabulary, $Vocabulary$Type} from "packages/org/antlr/v4/runtime/$Vocabulary"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DecisionState, $DecisionState$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DFA {
readonly "states": $Map<($DFAState), ($DFAState)>
 "s0": $DFAState
readonly "decision": integer
readonly "atnStartState": $DecisionState

constructor(arg0: $DecisionState$Type)
constructor(arg0: $DecisionState$Type, arg1: integer)

public "toString"(arg0: $Vocabulary$Type): string
public "toString"(): string
/**
 * 
 * @deprecated
 */
public "toString"(arg0: (string)[]): string
public "isPrecedenceDfa"(): boolean
public "getPrecedenceStartState"(arg0: integer): $DFAState
public "setPrecedenceStartState"(arg0: integer, arg1: $DFAState$Type): void
/**
 * 
 * @deprecated
 */
public "setPrecedenceDfa"(arg0: boolean): void
public "toLexerString"(): string
public "getStates"(): $List<($DFAState)>
get "precedenceDfa"(): boolean
set "precedenceDfa"(value: boolean)
get "states"(): $List<($DFAState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DFA$Type = ($DFA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DFA_ = $DFA$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$MultiMap" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/org/antlr/v4/runtime/misc/$Pair"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MultiMap<K, V> extends $LinkedHashMap<(K), ($List<(V)>)> {

constructor()

public "map"(arg0: K, arg1: V): void
public "getPairs"(): $List<($Pair<(K), (V)>)>
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "size"(): integer
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
get "pairs"(): $List<($Pair<(K), (V)>)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiMap$Type<K, V> = ($MultiMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiMap_<K, V> = $MultiMap$Type<(K), (V)>;
}}
declare module "packages/org/antlr/v4/runtime/tree/$ParseTree" {
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$SyntaxTree, $SyntaxTree$Type} from "packages/org/antlr/v4/runtime/tree/$SyntaxTree"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export interface $ParseTree extends $SyntaxTree {

 "getChild"(arg0: integer): $ParseTree
 "getParent"(): $ParseTree
 "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
 "setParent"(arg0: $RuleContext$Type): void
 "toStringTree"(arg0: $Parser$Type): string
 "getText"(): string
 "getSourceInterval"(): $Interval
 "getChildCount"(): integer
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $ParseTree {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTree$Type = ($ParseTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTree_ = $ParseTree$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$RuleStartState" {
import {$RuleStopState, $RuleStopState$Type} from "packages/org/antlr/v4/runtime/atn/$RuleStopState"
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"

export class $RuleStartState extends $ATNState {
 "stopState": $RuleStopState
 "isLeftRecursiveRule": boolean
static readonly "INITIAL_NUM_TRANSITIONS": integer
static readonly "INVALID_TYPE": integer
static readonly "BASIC": integer
static readonly "RULE_START": integer
static readonly "BLOCK_START": integer
static readonly "PLUS_BLOCK_START": integer
static readonly "STAR_BLOCK_START": integer
static readonly "TOKEN_START": integer
static readonly "RULE_STOP": integer
static readonly "BLOCK_END": integer
static readonly "STAR_LOOP_BACK": integer
static readonly "STAR_LOOP_ENTRY": integer
static readonly "PLUS_LOOP_BACK": integer
static readonly "LOOP_END": integer
static readonly "serializationNames": $List<(string)>
static readonly "INVALID_STATE_NUMBER": integer
 "atn": $ATN
 "stateNumber": integer
 "ruleIndex": integer
 "epsilonOnlyTransitions": boolean
 "nextTokenWithinRule": $IntervalSet

constructor()

public "getStateType"(): integer
get "stateType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleStartState$Type = ($RuleStartState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleStartState_ = $RuleStartState$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ArrayPredictionContext" {
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$SingletonPredictionContext, $SingletonPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$SingletonPredictionContext"
import {$EmptyPredictionContext, $EmptyPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$EmptyPredictionContext"

export class $ArrayPredictionContext extends $PredictionContext {
readonly "parents": ($PredictionContext)[]
readonly "returnStates": (integer)[]
static readonly "EMPTY": $EmptyPredictionContext
static readonly "EMPTY_RETURN_STATE": integer
static "globalNodeCount": integer
readonly "id": integer
readonly "cachedHashCode": integer

constructor(arg0: $SingletonPredictionContext$Type)
constructor(arg0: ($PredictionContext$Type)[], arg1: (integer)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "isEmpty"(): boolean
public "size"(): integer
public "getParent"(arg0: integer): $PredictionContext
public "getReturnState"(arg0: integer): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayPredictionContext$Type = ($ArrayPredictionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayPredictionContext_ = $ArrayPredictionContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor" {
import {$RuleNode, $RuleNode$Type} from "packages/org/antlr/v4/runtime/tree/$RuleNode"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"

export interface $ParseTreeVisitor<T> {

 "visit"(arg0: $ParseTree$Type): T
 "visitChildren"(arg0: $RuleNode$Type): T
 "visitTerminal"(arg0: $TerminalNode$Type): T
 "visitErrorNode"(arg0: $ErrorNode$Type): T
}

export namespace $ParseTreeVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTreeVisitor$Type<T> = ($ParseTreeVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTreeVisitor_<T> = $ParseTreeVisitor$Type<(T)>;
}}
declare module "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePattern" {
import {$ParseTreeMatch, $ParseTreeMatch$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreeMatch"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$ParseTreePatternMatcher, $ParseTreePatternMatcher$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePatternMatcher"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ParseTreePattern {

constructor(arg0: $ParseTreePatternMatcher$Type, arg1: string, arg2: integer, arg3: $ParseTree$Type)

public "findAll"(arg0: $ParseTree$Type, arg1: string): $List<($ParseTreeMatch)>
public "getPattern"(): string
public "matches"(arg0: $ParseTree$Type): boolean
public "match"(arg0: $ParseTree$Type): $ParseTreeMatch
public "getPatternRuleIndex"(): integer
public "getPatternTree"(): $ParseTree
public "getMatcher"(): $ParseTreePatternMatcher
get "pattern"(): string
get "patternRuleIndex"(): integer
get "patternTree"(): $ParseTree
get "matcher"(): $ParseTreePatternMatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTreePattern$Type = ($ParseTreePattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTreePattern_ = $ParseTreePattern$Type;
}}
declare module "packages/org/antlr/v4/runtime/$TokenSource" {
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$TokenFactory, $TokenFactory$Type} from "packages/org/antlr/v4/runtime/$TokenFactory"

export interface $TokenSource {

 "nextToken"(): $Token
 "getInputStream"(): $CharStream
 "getCharPositionInLine"(): integer
 "getSourceName"(): string
 "setTokenFactory"(arg0: $TokenFactory$Type<(any)>): void
 "getTokenFactory"(): $TokenFactory<(any)>
 "getLine"(): integer
}

export namespace $TokenSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenSource$Type = ($TokenSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenSource_ = $TokenSource$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$LexerATNSimulator" {
import {$ATNSimulator, $ATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ATNSimulator"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DFAState, $DFAState$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$DFA, $DFA$Type} from "packages/org/antlr/v4/runtime/dfa/$DFA"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"
import {$PredictionContextCache, $PredictionContextCache$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContextCache"

export class $LexerATNSimulator extends $ATNSimulator {
static readonly "debug": boolean
static readonly "dfa_debug": boolean
static readonly "MIN_DFA_EDGE": integer
static readonly "MAX_DFA_EDGE": integer
readonly "decisionToDFA": ($DFA)[]
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_VERSION": integer
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_UUID": $UUID
static readonly "ERROR": $DFAState
readonly "atn": $ATN

constructor(arg0: $ATN$Type, arg1: ($DFA$Type)[], arg2: $PredictionContextCache$Type)
constructor(arg0: $Lexer$Type, arg1: $ATN$Type, arg2: ($DFA$Type)[], arg3: $PredictionContextCache$Type)

public "consume"(arg0: $CharStream$Type): void
public "match"(arg0: $CharStream$Type, arg1: integer): integer
public "reset"(): void
public "getCharPositionInLine"(): integer
public "setCharPositionInLine"(arg0: integer): void
public "getTokenName"(arg0: integer): string
public "getLine"(): integer
public "getText"(arg0: $CharStream$Type): string
public "setLine"(arg0: integer): void
public "clearDFA"(): void
public "copyState"(arg0: $LexerATNSimulator$Type): void
public "getDFA"(arg0: integer): $DFA
get "charPositionInLine"(): integer
set "charPositionInLine"(value: integer)
get "line"(): integer
set "line"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LexerATNSimulator$Type = ($LexerATNSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LexerATNSimulator_ = $LexerATNSimulator$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$EmptyPredictionContext" {
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$SingletonPredictionContext, $SingletonPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$SingletonPredictionContext"

export class $EmptyPredictionContext extends $SingletonPredictionContext {
readonly "parent": $PredictionContext
readonly "returnState": integer
static readonly "EMPTY": $EmptyPredictionContext
static readonly "EMPTY_RETURN_STATE": integer
static "globalNodeCount": integer
readonly "id": integer
readonly "cachedHashCode": integer

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "isEmpty"(): boolean
public "size"(): integer
public "getParent"(arg0: integer): $PredictionContext
public "getReturnState"(arg0: integer): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyPredictionContext$Type = ($EmptyPredictionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyPredictionContext_ = $EmptyPredictionContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$LookaheadEventInfo" {
import {$DecisionEventInfo, $DecisionEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $LookaheadEventInfo extends $DecisionEventInfo {
 "predictedAlt": integer
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $ATNConfigSet$Type, arg2: integer, arg3: $TokenStream$Type, arg4: integer, arg5: integer, arg6: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LookaheadEventInfo$Type = ($LookaheadEventInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LookaheadEventInfo_ = $LookaheadEventInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/$ParserRuleContext" {
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $ParserRuleContext extends $RuleContext {
 "children": $List<($ParseTree)>
 "start": $Token
 "stop": $Token
 "exception": $RecognitionException
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor()
constructor(arg0: $ParserRuleContext$Type, arg1: integer)

public "getToken"(arg0: integer, arg1: integer): $TerminalNode
public "getChildCount"(): integer
public "getChild"(arg0: integer): $ParseTree
public "getChild"<T extends $ParseTree>(arg0: $Class$Type<(any)>, arg1: integer): T
public "copyFrom"(arg0: $ParserRuleContext$Type): void
public "getParent"(): $ParserRuleContext
public "getRuleContext"<T extends $ParserRuleContext>(arg0: $Class$Type<(any)>, arg1: integer): T
public "getSourceInterval"(): $Interval
/**
 * 
 * @deprecated
 */
public "addErrorNode"(arg0: $Token$Type): $ErrorNode
public "addErrorNode"(arg0: $ErrorNode$Type): $ErrorNode
public "removeLastChild"(): void
public "addAnyChild"<T extends $ParseTree>(arg0: T): T
public "getRuleContexts"<T extends $ParserRuleContext>(arg0: $Class$Type<(any)>): $List<(T)>
public "toInfoString"(arg0: $Parser$Type): string
public "getStart"(): $Token
public "getTokens"(arg0: integer): $List<($TerminalNode)>
public "enterRule"(arg0: $ParseTreeListener$Type): void
public "exitRule"(arg0: $ParseTreeListener$Type): void
/**
 * 
 * @deprecated
 */
public "addChild"(arg0: $Token$Type): $TerminalNode
public "addChild"(arg0: $TerminalNode$Type): $TerminalNode
public "addChild"(arg0: $RuleContext$Type): $RuleContext
public "getStop"(): $Token
get "childCount"(): integer
get "parent"(): $ParserRuleContext
get "sourceInterval"(): $Interval
get "start"(): $Token
get "stop"(): $Token
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParserRuleContext$Type = ($ParserRuleContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParserRuleContext_ = $ParserRuleContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$TerminalNode" {
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export interface $TerminalNode extends $ParseTree {

 "getSymbol"(): $Token
 "getChild"(arg0: integer): $ParseTree
 "getParent"(): $ParseTree
 "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
 "setParent"(arg0: $RuleContext$Type): void
 "toStringTree"(arg0: $Parser$Type): string
 "getText"(): string
 "getSourceInterval"(): $Interval
 "getChildCount"(): integer
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $TerminalNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalNode$Type = ($TerminalNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalNode_ = $TerminalNode$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$SemanticContext$PrecedencePredicate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$SemanticContext, $SemanticContext$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SemanticContext$PrecedencePredicate extends $SemanticContext implements $Comparable<($SemanticContext$PrecedencePredicate)> {
readonly "precedence": integer
static readonly "NONE": $SemanticContext

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $SemanticContext$PrecedencePredicate$Type): integer
public "evalPrecedence"(arg0: $Recognizer$Type<(any), (any)>, arg1: $RuleContext$Type): $SemanticContext
public "eval"(arg0: $Recognizer$Type<(any), (any)>, arg1: $RuleContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemanticContext$PrecedencePredicate$Type = ($SemanticContext$PrecedencePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemanticContext$PrecedencePredicate_ = $SemanticContext$PrecedencePredicate$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$ParseTreeListener" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"

export interface $ParseTreeListener {

 "visitTerminal"(arg0: $TerminalNode$Type): void
 "visitErrorNode"(arg0: $ErrorNode$Type): void
 "enterEveryRule"(arg0: $ParserRuleContext$Type): void
 "exitEveryRule"(arg0: $ParserRuleContext$Type): void
}

export namespace $ParseTreeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTreeListener$Type = ($ParseTreeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTreeListener_ = $ParseTreeListener$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePatternMatcher" {
import {$Chunk, $Chunk$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$Chunk"
import {$ParseTreeMatch, $ParseTreeMatch$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreeMatch"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$ParseTreePattern, $ParseTreePattern$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePattern"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export class $ParseTreePatternMatcher {

constructor(arg0: $Lexer$Type, arg1: $Parser$Type)

public "matches"(arg0: $ParseTree$Type, arg1: $ParseTreePattern$Type): boolean
public "matches"(arg0: $ParseTree$Type, arg1: string, arg2: integer): boolean
public "compile"(arg0: string, arg1: integer): $ParseTreePattern
public "split"(arg0: string): $List<($Chunk)>
public "match"(arg0: $ParseTree$Type, arg1: string, arg2: integer): $ParseTreeMatch
public "match"(arg0: $ParseTree$Type, arg1: $ParseTreePattern$Type): $ParseTreeMatch
public "getParser"(): $Parser
public "tokenize"(arg0: string): $List<(any)>
public "setDelimiters"(arg0: string, arg1: string, arg2: string): void
public "getLexer"(): $Lexer
get "parser"(): $Parser
get "lexer"(): $Lexer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTreePatternMatcher$Type = ($ParseTreePatternMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTreePatternMatcher_ = $ParseTreePatternMatcher$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$AmbiguityInfo" {
import {$DecisionEventInfo, $DecisionEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $AmbiguityInfo extends $DecisionEventInfo {
 "ambigAlts": $BitSet
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $ATNConfigSet$Type, arg2: $BitSet$Type, arg3: $TokenStream$Type, arg4: integer, arg5: integer, arg6: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbiguityInfo$Type = ($AmbiguityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmbiguityInfo_ = $AmbiguityInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$PredicateEvalInfo" {
import {$SemanticContext, $SemanticContext$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext"
import {$DecisionEventInfo, $DecisionEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $PredicateEvalInfo extends $DecisionEventInfo {
readonly "semctx": $SemanticContext
readonly "predictedAlt": integer
readonly "evalResult": boolean
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $TokenStream$Type, arg2: integer, arg3: integer, arg4: $SemanticContext$Type, arg5: boolean, arg6: integer, arg7: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PredicateEvalInfo$Type = ($PredicateEvalInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PredicateEvalInfo_ = $PredicateEvalInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ATNType extends $Enum<($ATNType)> {
static readonly "LEXER": $ATNType
static readonly "PARSER": $ATNType


public static "values"(): ($ATNType)[]
public static "valueOf"(arg0: string): $ATNType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNType$Type = (("parser") | ("lexer")) | ($ATNType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNType_ = $ATNType$Type;
}}
declare module "packages/org/antlr/v4/runtime/$Lexer" {
import {$LexerNoViableAltException, $LexerNoViableAltException$Type} from "packages/org/antlr/v4/runtime/$LexerNoViableAltException"
import {$LexerATNSimulator, $LexerATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$LexerATNSimulator"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TokenSource, $TokenSource$Type} from "packages/org/antlr/v4/runtime/$TokenSource"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$TokenFactory, $TokenFactory$Type} from "packages/org/antlr/v4/runtime/$TokenFactory"
import {$IntegerStack, $IntegerStack$Type} from "packages/org/antlr/v4/runtime/misc/$IntegerStack"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"

export class $Lexer extends $Recognizer<(integer), ($LexerATNSimulator)> implements $TokenSource {
static readonly "DEFAULT_MODE": integer
static readonly "MORE": integer
static readonly "SKIP": integer
static readonly "DEFAULT_TOKEN_CHANNEL": integer
static readonly "HIDDEN": integer
static readonly "MIN_CHAR_VALUE": integer
static readonly "MAX_CHAR_VALUE": integer
 "_input": $CharStream
 "_token": $Token
 "_tokenStartCharIndex": integer
 "_tokenStartLine": integer
 "_tokenStartCharPositionInLine": integer
 "_hitEOF": boolean
 "_channel": integer
 "_type": integer
readonly "_modeStack": $IntegerStack
 "_mode": integer
 "_text": string
static readonly "EOF": integer

constructor()
constructor(arg0: $CharStream$Type)

public "getToken"(): $Token
public "more"(): void
public "getChannel"(): integer
public "setText"(arg0: string): void
public "setType"(arg0: integer): void
public "nextToken"(): $Token
public "getType"(): integer
public "mode"(arg0: integer): void
public "skip"(): void
public "reset"(): void
public "emit"(arg0: $Token$Type): void
public "emit"(): $Token
public "getCharPositionInLine"(): integer
public "getSourceName"(): string
public "setTokenFactory"(arg0: $TokenFactory$Type<(any)>): void
public "getTokenFactory"(): $TokenFactory<(any)>
/**
 * 
 * @deprecated
 */
public "getTokenNames"(): (string)[]
public "getChannelNames"(): (string)[]
public "getModeNames"(): (string)[]
public "setInputStream"(arg0: $IntStream$Type): void
public "setCharPositionInLine"(arg0: integer): void
public "getCharIndex"(): integer
public "getAllTokens"(): $List<(any)>
public "notifyListeners"(arg0: $LexerNoViableAltException$Type): void
public "getErrorDisplay"(arg0: integer): string
public "getErrorDisplay"(arg0: string): string
public "getCharErrorDisplay"(arg0: integer): string
public "getLine"(): integer
public "getText"(): string
public "pushMode"(arg0: integer): void
public "popMode"(): integer
public "emitEOF"(): $Token
public "setLine"(arg0: integer): void
public "setToken"(arg0: $Token$Type): void
public "setChannel"(arg0: integer): void
public "recover"(arg0: $RecognitionException$Type): void
public "recover"(arg0: $LexerNoViableAltException$Type): void
get "token"(): $Token
get "channel"(): integer
set "text"(value: string)
set "type"(value: integer)
get "type"(): integer
get "charPositionInLine"(): integer
get "sourceName"(): string
set "tokenFactory"(value: $TokenFactory$Type<(any)>)
get "tokenFactory"(): $TokenFactory<(any)>
get "tokenNames"(): (string)[]
get "channelNames"(): (string)[]
get "modeNames"(): (string)[]
set "inputStream"(value: $IntStream$Type)
set "charPositionInLine"(value: integer)
get "charIndex"(): integer
get "allTokens"(): $List<(any)>
get "line"(): integer
get "text"(): string
set "line"(value: integer)
set "token"(value: $Token$Type)
set "channel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lexer$Type = ($Lexer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lexer_ = $Lexer$Type;
}}
declare module "packages/org/antlr/v4/runtime/$LexerNoViableAltException" {
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $LexerNoViableAltException extends $RecognitionException {

constructor(arg0: $Lexer$Type, arg1: $CharStream$Type, arg2: integer, arg3: $ATNConfigSet$Type)

public "toString"(): string
public "getStartIndex"(): integer
public "getDeadEndConfigs"(): $ATNConfigSet
get "startIndex"(): integer
get "deadEndConfigs"(): $ATNConfigSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LexerNoViableAltException$Type = ($LexerNoViableAltException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LexerNoViableAltException_ = $LexerNoViableAltException$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$SingletonPredictionContext" {
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$EmptyPredictionContext, $EmptyPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$EmptyPredictionContext"

export class $SingletonPredictionContext extends $PredictionContext {
readonly "parent": $PredictionContext
readonly "returnState": integer
static readonly "EMPTY": $EmptyPredictionContext
static readonly "EMPTY_RETURN_STATE": integer
static "globalNodeCount": integer
readonly "id": integer
readonly "cachedHashCode": integer


public "equals"(arg0: any): boolean
public "toString"(): string
public "size"(): integer
public "getParent"(arg0: integer): $PredictionContext
public static "create"(arg0: $PredictionContext$Type, arg1: integer): $SingletonPredictionContext
public "getReturnState"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonPredictionContext$Type = ($SingletonPredictionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonPredictionContext_ = $SingletonPredictionContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$PredictionMode" {
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PredictionMode extends $Enum<($PredictionMode)> {
static readonly "SLL": $PredictionMode
static readonly "LL": $PredictionMode
static readonly "LL_EXACT_AMBIG_DETECTION": $PredictionMode


public static "values"(): ($PredictionMode)[]
public static "valueOf"(arg0: string): $PredictionMode
public static "hasSLLConflictTerminatingPrediction"(arg0: $PredictionMode$Type, arg1: $ATNConfigSet$Type): boolean
public static "hasStateAssociatedWithOneAlt"(arg0: $ATNConfigSet$Type): boolean
public static "getUniqueAlt"(arg0: $Collection$Type<($BitSet$Type)>): integer
public static "getConflictingAltSubsets"(arg0: $ATNConfigSet$Type): $Collection<($BitSet)>
public static "resolvesToJustOneViableAlt"(arg0: $Collection$Type<($BitSet$Type)>): integer
public static "allSubsetsConflict"(arg0: $Collection$Type<($BitSet$Type)>): boolean
public static "allSubsetsEqual"(arg0: $Collection$Type<($BitSet$Type)>): boolean
public static "getSingleViableAlt"(arg0: $Collection$Type<($BitSet$Type)>): integer
public static "hasConfigInRuleStopState"(arg0: $ATNConfigSet$Type): boolean
public static "allConfigsInRuleStopStates"(arg0: $ATNConfigSet$Type): boolean
public static "hasNonConflictingAltSet"(arg0: $Collection$Type<($BitSet$Type)>): boolean
public static "hasConflictingAltSet"(arg0: $Collection$Type<($BitSet$Type)>): boolean
public static "getStateToAltMap"(arg0: $ATNConfigSet$Type): $Map<($ATNState), ($BitSet)>
public static "getAlts"(arg0: $ATNConfigSet$Type): $BitSet
public static "getAlts"(arg0: $Collection$Type<($BitSet$Type)>): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PredictionMode$Type = (("ll") | ("sll") | ("ll_exact_ambig_detection")) | ($PredictionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PredictionMode_ = $PredictionMode$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreeMatch" {
import {$MultiMap, $MultiMap$Type} from "packages/org/antlr/v4/runtime/misc/$MultiMap"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$ParseTreePattern, $ParseTreePattern$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePattern"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ParseTreeMatch {

constructor(arg0: $ParseTree$Type, arg1: $ParseTreePattern$Type, arg2: $MultiMap$Type<(string), ($ParseTree$Type)>, arg3: $ParseTree$Type)

public "getPattern"(): $ParseTreePattern
public "getLabels"(): $MultiMap<(string), ($ParseTree)>
public "getAll"(arg0: string): $List<($ParseTree)>
public "get"(arg0: string): $ParseTree
public "toString"(): string
public "getTree"(): $ParseTree
public "getMismatchedNode"(): $ParseTree
public "succeeded"(): boolean
get "pattern"(): $ParseTreePattern
get "labels"(): $MultiMap<(string), ($ParseTree)>
get "tree"(): $ParseTree
get "mismatchedNode"(): $ParseTree
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseTreeMatch$Type = ($ParseTreeMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseTreeMatch_ = $ParseTreeMatch$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNConfig" {
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$SemanticContext, $SemanticContext$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"

export class $ATNConfig {
readonly "state": $ATNState
readonly "alt": integer
 "context": $PredictionContext
 "reachesIntoOuterContext": integer
readonly "semanticContext": $SemanticContext

constructor(arg0: $ATNConfig$Type, arg1: $ATNState$Type, arg2: $SemanticContext$Type)
constructor(arg0: $ATNConfig$Type, arg1: $SemanticContext$Type)
constructor(arg0: $ATNConfig$Type, arg1: $ATNState$Type, arg2: $PredictionContext$Type)
constructor(arg0: $ATNConfig$Type, arg1: $ATNState$Type, arg2: $PredictionContext$Type, arg3: $SemanticContext$Type)
constructor(arg0: $ATNConfig$Type)
constructor(arg0: $ATNState$Type, arg1: integer, arg2: $PredictionContext$Type)
constructor(arg0: $ATNState$Type, arg1: integer, arg2: $PredictionContext$Type, arg3: $SemanticContext$Type)
constructor(arg0: $ATNConfig$Type, arg1: $ATNState$Type)

public "equals"(arg0: $ATNConfig$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: $Recognizer$Type<(any), (any)>, arg1: boolean): string
public "hashCode"(): integer
public "isPrecedenceFilterSuppressed"(): boolean
public "setPrecedenceFilterSuppressed"(arg0: boolean): void
public "getOuterContextDepth"(): integer
get "precedenceFilterSuppressed"(): boolean
set "precedenceFilterSuppressed"(value: boolean)
get "outerContextDepth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNConfig$Type = ($ATNConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNConfig_ = $ATNConfig$Type;
}}
declare module "packages/org/antlr/v4/runtime/$NoViableAltException" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export class $NoViableAltException extends $RecognitionException {

constructor(arg0: $Parser$Type)
constructor(arg0: $Parser$Type, arg1: $TokenStream$Type, arg2: $Token$Type, arg3: $Token$Type, arg4: $ATNConfigSet$Type, arg5: $ParserRuleContext$Type)

public "getDeadEndConfigs"(): $ATNConfigSet
public "getStartToken"(): $Token
get "deadEndConfigs"(): $ATNConfigSet
get "startToken"(): $Token
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoViableAltException$Type = ($NoViableAltException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoViableAltException_ = $NoViableAltException$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/pattern/$Chunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Chunk {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chunk$Type = ($Chunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chunk_ = $Chunk$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$EqualityComparator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EqualityComparator<T> {

 "equals"(arg0: T, arg1: T): boolean
 "hashCode"(arg0: T): integer
}

export namespace $EqualityComparator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EqualityComparator$Type<T> = ($EqualityComparator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EqualityComparator_<T> = $EqualityComparator$Type<(T)>;
}}
declare module "packages/org/antlr/v4/runtime/$Recognizer" {
import {$ParseInfo, $ParseInfo$Type} from "packages/org/antlr/v4/runtime/atn/$ParseInfo"
import {$ATNSimulator, $ATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ATNSimulator"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$ANTLRErrorListener, $ANTLRErrorListener$Type} from "packages/org/antlr/v4/runtime/$ANTLRErrorListener"
import {$Vocabulary, $Vocabulary$Type} from "packages/org/antlr/v4/runtime/$Vocabulary"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$TokenFactory, $TokenFactory$Type} from "packages/org/antlr/v4/runtime/$TokenFactory"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Recognizer<Symbol, ATNInterpreter extends $ATNSimulator> {
static readonly "EOF": integer

constructor()

public "setState"(arg0: integer): void
public "action"(arg0: $RuleContext$Type, arg1: integer, arg2: integer): void
public "getState"(): integer
public "getInputStream"(): $IntStream
public "addErrorListener"(arg0: $ANTLRErrorListener$Type): void
public "setTokenFactory"(arg0: $TokenFactory$Type<(any)>): void
public "getTokenFactory"(): $TokenFactory<(any)>
/**
 * 
 * @deprecated
 */
public "getTokenNames"(): (string)[]
public "getVocabulary"(): $Vocabulary
public "getGrammarFileName"(): string
public "getRuleNames"(): (string)[]
public "getSerializedATN"(): string
public "setInputStream"(arg0: $IntStream$Type): void
public "getInterpreter"(): ATNInterpreter
public "getErrorListenerDispatch"(): $ANTLRErrorListener
public "getTokenTypeMap"(): $Map<(string), (integer)>
public "getRuleIndexMap"(): $Map<(string), (integer)>
public "getTokenType"(arg0: string): integer
public "getParseInfo"(): $ParseInfo
public "setInterpreter"(arg0: ATNInterpreter): void
public "getErrorHeader"(arg0: $RecognitionException$Type): string
/**
 * 
 * @deprecated
 */
public "getTokenErrorDisplay"(arg0: $Token$Type): string
public "removeErrorListener"(arg0: $ANTLRErrorListener$Type): void
public "removeErrorListeners"(): void
public "getErrorListeners"(): $List<(any)>
public "getATN"(): $ATN
public "sempred"(arg0: $RuleContext$Type, arg1: integer, arg2: integer): boolean
public "precpred"(arg0: $RuleContext$Type, arg1: integer): boolean
set "state"(value: integer)
get "state"(): integer
get "inputStream"(): $IntStream
set "tokenFactory"(value: $TokenFactory$Type<(any)>)
get "tokenFactory"(): $TokenFactory<(any)>
get "tokenNames"(): (string)[]
get "vocabulary"(): $Vocabulary
get "grammarFileName"(): string
get "ruleNames"(): (string)[]
get "serializedATN"(): string
set "inputStream"(value: $IntStream$Type)
get "interpreter"(): ATNInterpreter
get "errorListenerDispatch"(): $ANTLRErrorListener
get "tokenTypeMap"(): $Map<(string), (integer)>
get "ruleIndexMap"(): $Map<(string), (integer)>
get "parseInfo"(): $ParseInfo
set "interpreter"(value: ATNInterpreter)
get "errorListeners"(): $List<(any)>
get "aTN"(): $ATN
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Recognizer$Type<Symbol, ATNInterpreter> = ($Recognizer<(Symbol), (ATNInterpreter)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Recognizer_<Symbol, ATNInterpreter> = $Recognizer$Type<(Symbol), (ATNInterpreter)>;
}}
declare module "packages/org/antlr/v4/runtime/misc/$IntervalSet" {
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Vocabulary, $Vocabulary$Type} from "packages/org/antlr/v4/runtime/$Vocabulary"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntegerList, $IntegerList$Type} from "packages/org/antlr/v4/runtime/misc/$IntegerList"
import {$IntSet, $IntSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntSet"

export class $IntervalSet implements $IntSet {
static readonly "COMPLETE_CHAR_SET": $IntervalSet
static readonly "EMPTY_SET": $IntervalSet

constructor(arg0: $List$Type<($Interval$Type)>)
constructor(arg0: $IntervalSet$Type)
constructor(...arg0: (integer)[])

public static "or"(arg0: ($IntervalSet$Type)[]): $IntervalSet
public "or"(arg0: $IntSet$Type): $IntervalSet
public "and"(arg0: $IntSet$Type): $IntervalSet
public "subtract"(arg0: $IntSet$Type): $IntervalSet
public static "subtract"(arg0: $IntervalSet$Type, arg1: $IntervalSet$Type): $IntervalSet
public "add"(arg0: integer, arg1: integer): void
public "add"(arg0: integer): void
public "remove"(arg0: integer): void
public "get"(arg0: integer): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: boolean): string
/**
 * 
 * @deprecated
 */
public "toString"(arg0: (string)[]): string
public "toString"(arg0: $Vocabulary$Type): string
public "hashCode"(): integer
public "clear"(): void
public "size"(): integer
public "toArray"(): (integer)[]
public "toList"(): $List<(integer)>
public static "of"(arg0: integer, arg1: integer): $IntervalSet
public static "of"(arg0: integer): $IntervalSet
public "contains"(arg0: integer): boolean
public "toSet"(): $Set<(integer)>
public "complement"(arg0: integer, arg1: integer): $IntervalSet
public "getMaxElement"(): integer
public "getMinElement"(): integer
public "getIntervals"(): $List<($Interval)>
public "toIntegerList"(): $IntegerList
public "setReadonly"(arg0: boolean): void
public "isNil"(): boolean
public "isReadonly"(): boolean
get "maxElement"(): integer
get "minElement"(): integer
get "intervals"(): $List<($Interval)>
set "readonly"(value: boolean)
get "nil"(): boolean
get "readonly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalSet$Type = ($IntervalSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalSet_ = $IntervalSet$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$IntegerStack" {
import {$IntegerList, $IntegerList$Type} from "packages/org/antlr/v4/runtime/misc/$IntegerList"

export class $IntegerStack extends $IntegerList {

constructor()
constructor(arg0: $IntegerStack$Type)
constructor(arg0: integer)

public "push"(arg0: integer): void
public "pop"(): integer
public "peek"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerStack$Type = ($IntegerStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerStack_ = $IntegerStack$Type;
}}
declare module "packages/org/antlr/v4/runtime/dfa/$DFAState" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DFAState$PredPrediction, $DFAState$PredPrediction$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState$PredPrediction"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"
import {$LexerActionExecutor, $LexerActionExecutor$Type} from "packages/org/antlr/v4/runtime/atn/$LexerActionExecutor"

export class $DFAState {
 "stateNumber": integer
 "configs": $ATNConfigSet
 "edges": ($DFAState)[]
 "isAcceptState": boolean
 "prediction": integer
 "lexerActionExecutor": $LexerActionExecutor
 "requiresFullContext": boolean
 "predicates": ($DFAState$PredPrediction)[]

constructor(arg0: $ATNConfigSet$Type)
constructor(arg0: integer)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAltSet"(): $Set<(integer)>
get "altSet"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DFAState$Type = ($DFAState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DFAState_ = $DFAState$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNSimulator" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DFAState, $DFAState$Type} from "packages/org/antlr/v4/runtime/dfa/$DFAState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$Transition, $Transition$Type} from "packages/org/antlr/v4/runtime/atn/$Transition"
import {$PredictionContextCache, $PredictionContextCache$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContextCache"

export class $ATNSimulator {
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_VERSION": integer
/**
 * 
 * @deprecated
 */
static readonly "SERIALIZED_UUID": $UUID
static readonly "ERROR": $DFAState
readonly "atn": $ATN

constructor(arg0: $ATN$Type, arg1: $PredictionContextCache$Type)

/**
 * 
 * @deprecated
 */
public static "toLong"(arg0: (character)[], arg1: integer): long
/**
 * 
 * @deprecated
 */
public static "deserialize"(arg0: (character)[]): $ATN
public "reset"(): void
public "getSharedContextCache"(): $PredictionContextCache
public "getCachedContext"(arg0: $PredictionContext$Type): $PredictionContext
/**
 * 
 * @deprecated
 */
public static "checkCondition"(arg0: boolean, arg1: string): void
/**
 * 
 * @deprecated
 */
public static "checkCondition"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public static "edgeFactory"(arg0: $ATN$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $List$Type<($IntervalSet$Type)>): $Transition
/**
 * 
 * @deprecated
 */
public static "stateFactory"(arg0: integer, arg1: integer): $ATNState
/**
 * 
 * @deprecated
 */
public static "toInt"(arg0: character): integer
/**
 * 
 * @deprecated
 */
public static "toInt32"(arg0: (character)[], arg1: integer): integer
public "clearDFA"(): void
/**
 * 
 * @deprecated
 */
public static "toUUID"(arg0: (character)[], arg1: integer): $UUID
get "sharedContextCache"(): $PredictionContextCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNSimulator$Type = ($ATNSimulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNSimulator_ = $ATNSimulator$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$DoubleKeyMap" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DoubleKeyMap<Key1, Key2, Value> {

constructor()

public "get"(arg0: Key1): $Map<(Key2), (Value)>
public "get"(arg0: Key1, arg1: Key2): Value
public "put"(arg0: Key1, arg1: Key2, arg2: Value): Value
public "values"(arg0: Key1): $Collection<(Value)>
public "keySet"(arg0: Key1): $Set<(Key2)>
public "keySet"(): $Set<(Key1)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleKeyMap$Type<Key1, Key2, Value> = ($DoubleKeyMap<(Key1), (Key2), (Value)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleKeyMap_<Key1, Key2, Value> = $DoubleKeyMap$Type<(Key1), (Key2), (Value)>;
}}
declare module "packages/org/antlr/v4/runtime/misc/$IntSet" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IntSet {

 "or"(arg0: $IntSet$Type): $IntSet
 "and"(arg0: $IntSet$Type): $IntSet
 "subtract"(arg0: $IntSet$Type): $IntSet
 "add"(arg0: integer): void
 "remove"(arg0: integer): void
 "equals"(arg0: any): boolean
 "toString"(): string
 "size"(): integer
 "toList"(): $List<(integer)>
 "contains"(arg0: integer): boolean
 "addAll"(arg0: $IntSet$Type): $IntSet
 "complement"(arg0: $IntSet$Type): $IntSet
 "isNil"(): boolean
}

export namespace $IntSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSet$Type = ($IntSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSet_ = $IntSet$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNState" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$Transition, $Transition$Type} from "packages/org/antlr/v4/runtime/atn/$Transition"

export class $ATNState {
static readonly "INITIAL_NUM_TRANSITIONS": integer
static readonly "INVALID_TYPE": integer
static readonly "BASIC": integer
static readonly "RULE_START": integer
static readonly "BLOCK_START": integer
static readonly "PLUS_BLOCK_START": integer
static readonly "STAR_BLOCK_START": integer
static readonly "TOKEN_START": integer
static readonly "RULE_STOP": integer
static readonly "BLOCK_END": integer
static readonly "STAR_LOOP_BACK": integer
static readonly "STAR_LOOP_ENTRY": integer
static readonly "PLUS_LOOP_BACK": integer
static readonly "LOOP_END": integer
static readonly "serializationNames": $List<(string)>
static readonly "INVALID_STATE_NUMBER": integer
 "atn": $ATN
 "stateNumber": integer
 "ruleIndex": integer
 "epsilonOnlyTransitions": boolean
 "nextTokenWithinRule": $IntervalSet

constructor()

public "getTransitions"(): ($Transition)[]
public "transition"(arg0: integer): $Transition
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getNumberOfTransitions"(): integer
public "onlyHasEpsilonTransitions"(): boolean
public "addTransition"(arg0: integer, arg1: $Transition$Type): void
public "addTransition"(arg0: $Transition$Type): void
public "setTransition"(arg0: integer, arg1: $Transition$Type): void
public "removeTransition"(arg0: integer): $Transition
public "isNonGreedyExitState"(): boolean
public "getStateType"(): integer
public "setRuleIndex"(arg0: integer): void
get "transitions"(): ($Transition)[]
get "numberOfTransitions"(): integer
get "nonGreedyExitState"(): boolean
get "stateType"(): integer
set "ruleIndex"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNState$Type = ($ATNState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNState_ = $ATNState$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$PrecedencePredicateTransition" {
import {$SemanticContext$PrecedencePredicate, $SemanticContext$PrecedencePredicate$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext$PrecedencePredicate"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$AbstractPredicateTransition, $AbstractPredicateTransition$Type} from "packages/org/antlr/v4/runtime/atn/$AbstractPredicateTransition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PrecedencePredicateTransition extends $AbstractPredicateTransition {
readonly "precedence": integer
static readonly "EPSILON": integer
static readonly "RANGE": integer
static readonly "RULE": integer
static readonly "PREDICATE": integer
static readonly "ATOM": integer
static readonly "ACTION": integer
static readonly "SET": integer
static readonly "NOT_SET": integer
static readonly "WILDCARD": integer
static readonly "PRECEDENCE": integer
static readonly "serializationNames": $List<(string)>
static readonly "serializationTypes": $Map<($Class<(any)>), (integer)>
 "target": $ATNState

constructor(arg0: $ATNState$Type, arg1: integer)

public "toString"(): string
public "matches"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getSerializationType"(): integer
public "getPredicate"(): $SemanticContext$PrecedencePredicate
public "isEpsilon"(): boolean
get "serializationType"(): integer
get "predicate"(): $SemanticContext$PrecedencePredicate
get "epsilon"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrecedencePredicateTransition$Type = ($PrecedencePredicateTransition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrecedencePredicateTransition_ = $PrecedencePredicateTransition$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$Transition" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Transition {
static readonly "EPSILON": integer
static readonly "RANGE": integer
static readonly "RULE": integer
static readonly "PREDICATE": integer
static readonly "ATOM": integer
static readonly "ACTION": integer
static readonly "SET": integer
static readonly "NOT_SET": integer
static readonly "WILDCARD": integer
static readonly "PRECEDENCE": integer
static readonly "serializationNames": $List<(string)>
static readonly "serializationTypes": $Map<($Class<(any)>), (integer)>
 "target": $ATNState


public "label"(): $IntervalSet
public "matches"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getSerializationType"(): integer
public "isEpsilon"(): boolean
get "serializationType"(): integer
get "epsilon"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transition$Type = ($Transition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transition_ = $Transition$Type;
}}
declare module "packages/org/antlr/v4/runtime/$Parser" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$ParseInfo, $ParseInfo$Type} from "packages/org/antlr/v4/runtime/atn/$ParseInfo"
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$ParseTreePattern, $ParseTreePattern$Type} from "packages/org/antlr/v4/runtime/tree/pattern/$ParseTreePattern"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"
import {$ParseTreeListener, $ParseTreeListener$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeListener"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$ANTLRErrorStrategy, $ANTLRErrorStrategy$Type} from "packages/org/antlr/v4/runtime/$ANTLRErrorStrategy"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$ParserATNSimulator, $ParserATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ParserATNSimulator"
import {$TokenFactory, $TokenFactory$Type} from "packages/org/antlr/v4/runtime/$TokenFactory"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"

export class $Parser extends $Recognizer<($Token), ($ParserATNSimulator)> {
static readonly "EOF": integer

constructor(arg0: $TokenStream$Type)

public "consume"(): $Token
public "setErrorHandler"(arg0: $ANTLRErrorStrategy$Type): void
public "getErrorHandler"(): $ANTLRErrorStrategy
public "match"(arg0: integer): $Token
public "getContext"(): $ParserRuleContext
public "reset"(): void
public "getExpectedTokensWithinCurrentRule"(): $IntervalSet
public "getSourceName"(): string
public "setTokenFactory"(arg0: $TokenFactory$Type<(any)>): void
public "getTokenFactory"(): $TokenFactory<(any)>
public "getRuleInvocationStack"(arg0: $RuleContext$Type): $List<(string)>
public "getRuleInvocationStack"(): $List<(string)>
public "getDFAStrings"(): $List<(string)>
public "getRuleContext"(): $ParserRuleContext
public "enterOuterAlt"(arg0: $ParserRuleContext$Type, arg1: integer): void
public "matchWildcard"(): $Token
public "setBuildParseTree"(arg0: boolean): void
public "getBuildParseTree"(): boolean
public "setTrimParseTree"(arg0: boolean): void
public "getTrimParseTree"(): boolean
public "getParseListeners"(): $List<($ParseTreeListener)>
public "addParseListener"(arg0: $ParseTreeListener$Type): void
public "removeParseListener"(arg0: $ParseTreeListener$Type): void
public "removeParseListeners"(): void
public "getNumberOfSyntaxErrors"(): integer
public "getATNWithBypassAlts"(): $ATN
public "compileParseTreePattern"(arg0: string, arg1: integer): $ParseTreePattern
public "compileParseTreePattern"(arg0: string, arg1: integer, arg2: $Lexer$Type): $ParseTreePattern
public "getTokenStream"(): $TokenStream
public "setTokenStream"(arg0: $TokenStream$Type): void
public "getCurrentToken"(): $Token
public "notifyErrorListeners"(arg0: string): void
public "notifyErrorListeners"(arg0: $Token$Type, arg1: string, arg2: $RecognitionException$Type): void
public "createTerminalNode"(arg0: $ParserRuleContext$Type, arg1: $Token$Type): $TerminalNode
public "createErrorNode"(arg0: $ParserRuleContext$Type, arg1: $Token$Type): $ErrorNode
public "getPrecedence"(): integer
public "enterRecursionRule"(arg0: $ParserRuleContext$Type, arg1: integer, arg2: integer, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "enterRecursionRule"(arg0: $ParserRuleContext$Type, arg1: integer): void
public "pushNewRecursionContext"(arg0: $ParserRuleContext$Type, arg1: integer, arg2: integer): void
public "unrollRecursionContexts"(arg0: $ParserRuleContext$Type): void
public "getInvokingContext"(arg0: integer): $ParserRuleContext
public "isExpectedToken"(arg0: integer): boolean
public "isMatchedEOF"(): boolean
public "getRuleIndex"(arg0: string): integer
public "setInputStream"(arg0: $IntStream$Type): void
public "getParseInfo"(): $ParseInfo
public "getExpectedTokens"(): $IntervalSet
public "setContext"(arg0: $ParserRuleContext$Type): void
public "isTrace"(): boolean
public "enterRule"(arg0: $ParserRuleContext$Type, arg1: integer, arg2: integer): void
public "exitRule"(): void
public "inContext"(arg0: string): boolean
public "dumpDFA"(): void
public "setProfile"(arg0: boolean): void
public "setTrace"(arg0: boolean): void
public "precpred"(arg0: $RuleContext$Type, arg1: integer): boolean
set "errorHandler"(value: $ANTLRErrorStrategy$Type)
get "errorHandler"(): $ANTLRErrorStrategy
get "context"(): $ParserRuleContext
get "expectedTokensWithinCurrentRule"(): $IntervalSet
get "sourceName"(): string
set "tokenFactory"(value: $TokenFactory$Type<(any)>)
get "tokenFactory"(): $TokenFactory<(any)>
get "ruleInvocationStack"(): $List<(string)>
get "dFAStrings"(): $List<(string)>
get "ruleContext"(): $ParserRuleContext
set "buildParseTree"(value: boolean)
get "buildParseTree"(): boolean
set "trimParseTree"(value: boolean)
get "trimParseTree"(): boolean
get "parseListeners"(): $List<($ParseTreeListener)>
get "numberOfSyntaxErrors"(): integer
get "aTNWithBypassAlts"(): $ATN
get "tokenStream"(): $TokenStream
set "tokenStream"(value: $TokenStream$Type)
get "currentToken"(): $Token
get "precedence"(): integer
get "matchedEOF"(): boolean
set "inputStream"(value: $IntStream$Type)
get "parseInfo"(): $ParseInfo
get "expectedTokens"(): $IntervalSet
set "context"(value: $ParserRuleContext$Type)
get "trace"(): boolean
set "profile"(value: boolean)
set "trace"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parser$Type = ($Parser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parser_ = $Parser$Type;
}}
declare module "packages/org/antlr/v4/runtime/dfa/$DFAState$PredPrediction" {
import {$SemanticContext, $SemanticContext$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext"

export class $DFAState$PredPrediction {
 "pred": $SemanticContext
 "alt": integer

constructor(arg0: $SemanticContext$Type, arg1: integer)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DFAState$PredPrediction$Type = ($DFAState$PredPrediction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DFAState$PredPrediction_ = $DFAState$PredPrediction$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$DecisionState" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"

export class $DecisionState extends $ATNState {
 "decision": integer
 "nonGreedy": boolean
static readonly "INITIAL_NUM_TRANSITIONS": integer
static readonly "INVALID_TYPE": integer
static readonly "BASIC": integer
static readonly "RULE_START": integer
static readonly "BLOCK_START": integer
static readonly "PLUS_BLOCK_START": integer
static readonly "STAR_BLOCK_START": integer
static readonly "TOKEN_START": integer
static readonly "RULE_STOP": integer
static readonly "BLOCK_END": integer
static readonly "STAR_LOOP_BACK": integer
static readonly "STAR_LOOP_ENTRY": integer
static readonly "PLUS_LOOP_BACK": integer
static readonly "LOOP_END": integer
static readonly "serializationNames": $List<(string)>
static readonly "INVALID_STATE_NUMBER": integer
 "atn": $ATN
 "stateNumber": integer
 "ruleIndex": integer
 "epsilonOnlyTransitions": boolean
 "nextTokenWithinRule": $IntervalSet

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecisionState$Type = ($DecisionState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecisionState_ = $DecisionState$Type;
}}
declare module "packages/org/antlr/v4/runtime/$IntStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntStream {

 "seek"(arg0: integer): void
 "consume"(): void
 "index"(): integer
 "size"(): integer
 "mark"(): integer
 "release"(arg0: integer): void
 "getSourceName"(): string
 "LA"(arg0: integer): integer
}

export namespace $IntStream {
const EOF: integer
const UNKNOWN_SOURCE_NAME: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$Type = ($IntStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream_ = $IntStream$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$IntegerList" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $IntegerList {

constructor()
constructor(arg0: integer)
constructor(arg0: $IntegerList$Type)
constructor(arg0: $Collection$Type<(integer)>)

public "binarySearch"(arg0: integer, arg1: integer, arg2: integer): integer
public "binarySearch"(arg0: integer): integer
public "removeAt"(arg0: integer): integer
public "add"(arg0: integer): void
public "get"(arg0: integer): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (integer)[]
public "toCharArray"(): (character)[]
public "contains"(arg0: integer): boolean
public "addAll"(arg0: $Collection$Type<(integer)>): void
public "addAll"(arg0: (integer)[]): void
public "addAll"(arg0: $IntegerList$Type): void
public "set"(arg0: integer, arg1: integer): integer
public "trimToSize"(): void
public "sort"(): void
public "removeRange"(arg0: integer, arg1: integer): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerList$Type = ($IntegerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerList_ = $IntegerList$Type;
}}
declare module "packages/org/antlr/v4/runtime/$RuleContext" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$RuleNode, $RuleNode$Type} from "packages/org/antlr/v4/runtime/tree/$RuleNode"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export class $RuleContext implements $RuleNode {
static readonly "EMPTY": $ParserRuleContext
 "parent": $RuleContext
 "invokingState": integer

constructor()
constructor(arg0: $RuleContext$Type, arg1: integer)

public "getChildCount"(): integer
public "getChild"(arg0: integer): $ParseTree
public "toString"(arg0: $Recognizer$Type<(any), (any)>, arg1: $RuleContext$Type): string
public "toString"(arg0: $Recognizer$Type<(any), (any)>): string
public "toString"(arg0: $List$Type<(string)>, arg1: $RuleContext$Type): string
public "toString"(): string
public "toString"(arg0: $List$Type<(string)>): string
public "isEmpty"(): boolean
public "depth"(): integer
public "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
public "setParent"(arg0: $RuleContext$Type): void
public "getRuleContext"(): $RuleContext
public "getSourceInterval"(): $Interval
public "getRuleIndex"(): integer
public "setAltNumber"(arg0: integer): void
public "getAltNumber"(): integer
public "toStringTree"(arg0: $Parser$Type): string
public "toStringTree"(): string
public "toStringTree"(arg0: $List$Type<(string)>): string
public "getText"(): string
get "childCount"(): integer
get "empty"(): boolean
set "parent"(value: $RuleContext$Type)
get "ruleContext"(): $RuleContext
get "sourceInterval"(): $Interval
get "ruleIndex"(): integer
set "altNumber"(value: integer)
get "altNumber"(): integer
get "text"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleContext$Type = ($RuleContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleContext_ = $RuleContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$RuleNode" {
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export interface $RuleNode extends $ParseTree {

 "getRuleContext"(): $RuleContext
 "getChild"(arg0: integer): $ParseTree
 "getParent"(): $ParseTree
 "accept"<T>(arg0: $ParseTreeVisitor$Type<(any)>): T
 "setParent"(arg0: $RuleContext$Type): void
 "toStringTree"(arg0: $Parser$Type): string
 "getText"(): string
 "getSourceInterval"(): $Interval
 "getChildCount"(): integer
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $RuleNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleNode$Type = ($RuleNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleNode_ = $RuleNode$Type;
}}
declare module "packages/org/antlr/v4/runtime/$CharStream" {
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"

export interface $CharStream extends $IntStream {

 "getText"(arg0: $Interval$Type): string
 "seek"(arg0: integer): void
 "consume"(): void
 "index"(): integer
 "size"(): integer
 "mark"(): integer
 "release"(arg0: integer): void
 "getSourceName"(): string
 "LA"(arg0: integer): integer
}

export namespace $CharStream {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharStream$Type = ($CharStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharStream_ = $CharStream$Type;
}}
declare module "packages/org/antlr/v4/runtime/$Token" {
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$TokenSource, $TokenSource$Type} from "packages/org/antlr/v4/runtime/$TokenSource"

export interface $Token {

 "getChannel"(): integer
 "getType"(): integer
 "getInputStream"(): $CharStream
 "getCharPositionInLine"(): integer
 "getTokenSource"(): $TokenSource
 "getTokenIndex"(): integer
 "getStopIndex"(): integer
 "getStartIndex"(): integer
 "getLine"(): integer
 "getText"(): string
}

export namespace $Token {
const INVALID_TYPE: integer
const EPSILON: integer
const MIN_USER_TOKEN_TYPE: integer
const EOF: integer
const DEFAULT_CHANNEL: integer
const HIDDEN_CHANNEL: integer
const MIN_USER_CHANNEL_VALUE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Token$Type = ($Token);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Token_ = $Token$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$LexerAction" {
import {$LexerActionType, $LexerActionType$Type} from "packages/org/antlr/v4/runtime/atn/$LexerActionType"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"

export interface $LexerAction {

 "execute"(arg0: $Lexer$Type): void
 "getActionType"(): $LexerActionType
 "isPositionDependent"(): boolean
}

export namespace $LexerAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LexerAction$Type = ($LexerAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LexerAction_ = $LexerAction$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$AbstractPredicateTransition" {
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Transition, $Transition$Type} from "packages/org/antlr/v4/runtime/atn/$Transition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractPredicateTransition extends $Transition {
static readonly "EPSILON": integer
static readonly "RANGE": integer
static readonly "RULE": integer
static readonly "PREDICATE": integer
static readonly "ATOM": integer
static readonly "ACTION": integer
static readonly "SET": integer
static readonly "NOT_SET": integer
static readonly "WILDCARD": integer
static readonly "PRECEDENCE": integer
static readonly "serializationNames": $List<(string)>
static readonly "serializationTypes": $Map<($Class<(any)>), (integer)>
 "target": $ATNState

constructor(arg0: $ATNState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPredicateTransition$Type = ($AbstractPredicateTransition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPredicateTransition_ = $AbstractPredicateTransition$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$Tree" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tree {

 "getChildCount"(): integer
 "getChild"(arg0: integer): $Tree
 "getParent"(): $Tree
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $Tree {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tree$Type = ($Tree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tree_ = $Tree$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ContextSensitivityInfo" {
import {$DecisionEventInfo, $DecisionEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $ContextSensitivityInfo extends $DecisionEventInfo {
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $ATNConfigSet$Type, arg2: $TokenStream$Type, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextSensitivityInfo$Type = ($ContextSensitivityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextSensitivityInfo_ = $ContextSensitivityInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/misc/$Array2DHashSet" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$AbstractEqualityComparator, $AbstractEqualityComparator$Type} from "packages/org/antlr/v4/runtime/misc/$AbstractEqualityComparator"

export class $Array2DHashSet<T> implements $Set<(T)> {
static readonly "INITAL_CAPACITY": integer
static readonly "INITAL_BUCKET_CAPACITY": integer
static readonly "LOAD_FACTOR": double

constructor(arg0: $AbstractEqualityComparator$Type<(any)>, arg1: integer, arg2: integer)
constructor(arg0: $AbstractEqualityComparator$Type<(any)>)
constructor()

public "add"(arg0: T): boolean
public "remove"(arg0: any): boolean
public "get"(arg0: T): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (T)[]
public "toArray"<U>(arg0: (U)[]): (U)[]
public "iterator"(): $Iterator<(T)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "containsFast"(arg0: T): boolean
public "toTableString"(): string
public "getOrAdd"(arg0: T): T
public "removeFast"(arg0: T): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T): $Set<(T)>
public static "of"<E>(arg0: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T, arg9: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T, arg8: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, arg7: T): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T): $Set<(T)>
public static "of"<E>(...arg0: (T)[]): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T, arg2: T): $Set<(T)>
public static "of"<E>(): $Set<(T)>
public static "of"<E>(arg0: T, arg1: T): $Set<(T)>
public "spliterator"(): $Spliterator<(T)>
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(T)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<T>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Array2DHashSet$Type<T> = ($Array2DHashSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Array2DHashSet_<T> = $Array2DHashSet$Type<(T)>;
}}
declare module "packages/org/antlr/v4/runtime/$RecognitionException" {
import {$ParserRuleContext, $ParserRuleContext$Type} from "packages/org/antlr/v4/runtime/$ParserRuleContext"
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"
import {$IntStream, $IntStream$Type} from "packages/org/antlr/v4/runtime/$IntStream"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $RecognitionException extends $RuntimeException {

constructor(arg0: $Recognizer$Type<(any), (any)>, arg1: $IntStream$Type, arg2: $ParserRuleContext$Type)
constructor(arg0: string, arg1: $Recognizer$Type<(any), (any)>, arg2: $IntStream$Type, arg3: $ParserRuleContext$Type)

public "getInputStream"(): $IntStream
public "getOffendingToken"(): $Token
public "getOffendingState"(): integer
public "getExpectedTokens"(): $IntervalSet
public "getRecognizer"(): $Recognizer<(any), (any)>
public "getCtx"(): $RuleContext
get "inputStream"(): $IntStream
get "offendingToken"(): $Token
get "offendingState"(): integer
get "expectedTokens"(): $IntervalSet
get "recognizer"(): $Recognizer<(any), (any)>
get "ctx"(): $RuleContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecognitionException$Type = ($RecognitionException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecognitionException_ = $RecognitionException$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$RuleStopState" {
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"

export class $RuleStopState extends $ATNState {
static readonly "INITIAL_NUM_TRANSITIONS": integer
static readonly "INVALID_TYPE": integer
static readonly "BASIC": integer
static readonly "RULE_START": integer
static readonly "BLOCK_START": integer
static readonly "PLUS_BLOCK_START": integer
static readonly "STAR_BLOCK_START": integer
static readonly "TOKEN_START": integer
static readonly "RULE_STOP": integer
static readonly "BLOCK_END": integer
static readonly "STAR_LOOP_BACK": integer
static readonly "STAR_LOOP_ENTRY": integer
static readonly "PLUS_LOOP_BACK": integer
static readonly "LOOP_END": integer
static readonly "serializationNames": $List<(string)>
static readonly "INVALID_STATE_NUMBER": integer
 "atn": $ATN
 "stateNumber": integer
 "ruleIndex": integer
 "epsilonOnlyTransitions": boolean
 "nextTokenWithinRule": $IntervalSet

constructor()

public "getStateType"(): integer
get "stateType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleStopState$Type = ($RuleStopState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleStopState_ = $RuleStopState$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$SemanticContext" {
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $SemanticContext {
static readonly "NONE": $SemanticContext

constructor()

public static "or"(arg0: $SemanticContext$Type, arg1: $SemanticContext$Type): $SemanticContext
public static "and"(arg0: $SemanticContext$Type, arg1: $SemanticContext$Type): $SemanticContext
public "evalPrecedence"(arg0: $Recognizer$Type<(any), (any)>, arg1: $RuleContext$Type): $SemanticContext
public "eval"(arg0: $Recognizer$Type<(any), (any)>, arg1: $RuleContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemanticContext$Type = ($SemanticContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemanticContext_ = $SemanticContext$Type;
}}
declare module "packages/org/antlr/v4/runtime/$TokenFactory" {
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$TokenSource, $TokenSource$Type} from "packages/org/antlr/v4/runtime/$TokenSource"
import {$Pair, $Pair$Type} from "packages/org/antlr/v4/runtime/misc/$Pair"

export interface $TokenFactory<Symbol extends $Token> {

 "create"(arg0: $Pair$Type<($TokenSource$Type), ($CharStream$Type)>, arg1: integer, arg2: string, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): Symbol
 "create"(arg0: integer, arg1: string): Symbol
}

export namespace $TokenFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenFactory$Type<Symbol> = ($TokenFactory<(Symbol)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenFactory_<Symbol> = $TokenFactory$Type<(Symbol)>;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ErrorInfo" {
import {$DecisionEventInfo, $DecisionEventInfo$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionEventInfo"
import {$TokenStream, $TokenStream$Type} from "packages/org/antlr/v4/runtime/$TokenStream"
import {$ATNConfigSet, $ATNConfigSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet"

export class $ErrorInfo extends $DecisionEventInfo {
readonly "decision": integer
readonly "configs": $ATNConfigSet
readonly "input": $TokenStream
readonly "startIndex": integer
readonly "stopIndex": integer
readonly "fullCtx": boolean

constructor(arg0: integer, arg1: $ATNConfigSet$Type, arg2: $TokenStream$Type, arg3: integer, arg4: integer, arg5: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorInfo$Type = ($ErrorInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorInfo_ = $ErrorInfo$Type;
}}
declare module "packages/org/antlr/v4/runtime/$ANTLRErrorStrategy" {
import {$RecognitionException, $RecognitionException$Type} from "packages/org/antlr/v4/runtime/$RecognitionException"
import {$Token, $Token$Type} from "packages/org/antlr/v4/runtime/$Token"
import {$Parser, $Parser$Type} from "packages/org/antlr/v4/runtime/$Parser"

export interface $ANTLRErrorStrategy {

 "sync"(arg0: $Parser$Type): void
 "reset"(arg0: $Parser$Type): void
 "reportError"(arg0: $Parser$Type, arg1: $RecognitionException$Type): void
 "reportMatch"(arg0: $Parser$Type): void
 "recoverInline"(arg0: $Parser$Type): $Token
 "inErrorRecoveryMode"(arg0: $Parser$Type): boolean
 "recover"(arg0: $Parser$Type, arg1: $RecognitionException$Type): void
}

export namespace $ANTLRErrorStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ANTLRErrorStrategy$Type = ($ANTLRErrorStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ANTLRErrorStrategy_ = $ANTLRErrorStrategy$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$LexerActionExecutor" {
import {$LexerAction, $LexerAction$Type} from "packages/org/antlr/v4/runtime/atn/$LexerAction"
import {$CharStream, $CharStream$Type} from "packages/org/antlr/v4/runtime/$CharStream"
import {$Lexer, $Lexer$Type} from "packages/org/antlr/v4/runtime/$Lexer"

export class $LexerActionExecutor {

constructor(arg0: ($LexerAction$Type)[])

public "equals"(arg0: any): boolean
public static "append"(arg0: $LexerActionExecutor$Type, arg1: $LexerAction$Type): $LexerActionExecutor
public "hashCode"(): integer
public "execute"(arg0: $Lexer$Type, arg1: $CharStream$Type, arg2: integer): void
public "fixOffsetBeforeMatch"(arg0: integer): $LexerActionExecutor
public "getLexerActions"(): ($LexerAction)[]
get "lexerActions"(): ($LexerAction)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LexerActionExecutor$Type = ($LexerActionExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LexerActionExecutor_ = $LexerActionExecutor$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$SyntaxTree" {
import {$Interval, $Interval$Type} from "packages/org/antlr/v4/runtime/misc/$Interval"
import {$Tree, $Tree$Type} from "packages/org/antlr/v4/runtime/tree/$Tree"

export interface $SyntaxTree extends $Tree {

 "getSourceInterval"(): $Interval
 "getChildCount"(): integer
 "getChild"(arg0: integer): $Tree
 "getParent"(): $Tree
 "getPayload"(): any
 "toStringTree"(): string
}

export namespace $SyntaxTree {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyntaxTree$Type = ($SyntaxTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyntaxTree_ = $SyntaxTree$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATNConfigSet" {
import {$ATNSimulator, $ATNSimulator$Type} from "packages/org/antlr/v4/runtime/atn/$ATNSimulator"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$SemanticContext, $SemanticContext$Type} from "packages/org/antlr/v4/runtime/atn/$SemanticContext"
import {$ATNConfigSet$AbstractConfigHashSet, $ATNConfigSet$AbstractConfigHashSet$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfigSet$AbstractConfigHashSet"
import {$DoubleKeyMap, $DoubleKeyMap$Type} from "packages/org/antlr/v4/runtime/misc/$DoubleKeyMap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ATNConfig, $ATNConfig$Type} from "packages/org/antlr/v4/runtime/atn/$ATNConfig"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ATNConfigSet implements $Set<($ATNConfig)> {
 "configLookup": $ATNConfigSet$AbstractConfigHashSet
readonly "configs": $ArrayList<($ATNConfig)>
 "uniqueAlt": integer
 "hasSemanticContext": boolean
 "dipsIntoOuterContext": boolean
readonly "fullCtx": boolean

constructor(arg0: $ATNConfigSet$Type)
constructor()
constructor(arg0: boolean)

public "add"(arg0: $ATNConfig$Type, arg1: $DoubleKeyMap$Type<($PredictionContext$Type), ($PredictionContext$Type), ($PredictionContext$Type)>): boolean
public "add"(arg0: $ATNConfig$Type): boolean
public "remove"(arg0: any): boolean
public "get"(arg0: integer): $ATNConfig
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): ($ATNConfig)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<($ATNConfig)>
public "contains"(arg0: any): boolean
public "elements"(): $List<($ATNConfig)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "getPredicates"(): $List<($SemanticContext)>
public "optimizeConfigs"(arg0: $ATNSimulator$Type): void
public "containsFast"(arg0: $ATNConfig$Type): boolean
public "setReadonly"(arg0: boolean): void
public "isReadonly"(): boolean
public "getStates"(): $Set<($ATNState)>
public "getAlts"(): $BitSet
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type, arg5: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type, arg5: $ATNConfig$Type, arg6: $ATNConfig$Type, arg7: $ATNConfig$Type, arg8: $ATNConfig$Type, arg9: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type, arg5: $ATNConfig$Type, arg6: $ATNConfig$Type, arg7: $ATNConfig$Type, arg8: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type, arg5: $ATNConfig$Type, arg6: $ATNConfig$Type, arg7: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type, arg3: $ATNConfig$Type, arg4: $ATNConfig$Type, arg5: $ATNConfig$Type, arg6: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(...arg0: ($ATNConfig$Type)[]): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type, arg2: $ATNConfig$Type): $Set<($ATNConfig)>
public static "of"<E>(): $Set<($ATNConfig)>
public static "of"<E>(arg0: $ATNConfig$Type, arg1: $ATNConfig$Type): $Set<($ATNConfig)>
public "spliterator"(): $Spliterator<($ATNConfig)>
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<($ATNConfig)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<($ATNConfig)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ATNConfig>;
get "empty"(): boolean
get "predicates"(): $List<($SemanticContext)>
set "readonly"(value: boolean)
get "readonly"(): boolean
get "states"(): $Set<($ATNState)>
get "alts"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATNConfigSet$Type = ($ATNConfigSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATNConfigSet_ = $ATNConfigSet$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$PredictionContextCache" {
import {$PredictionContext, $PredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContext"

export class $PredictionContextCache {

constructor()

public "add"(arg0: $PredictionContext$Type): $PredictionContext
public "get"(arg0: $PredictionContext$Type): $PredictionContext
public "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PredictionContextCache$Type = ($PredictionContextCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PredictionContextCache_ = $PredictionContextCache$Type;
}}
declare module "packages/org/antlr/v4/runtime/tree/$AbstractParseTreeVisitor" {
import {$RuleNode, $RuleNode$Type} from "packages/org/antlr/v4/runtime/tree/$RuleNode"
import {$ParseTreeVisitor, $ParseTreeVisitor$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTreeVisitor"
import {$ErrorNode, $ErrorNode$Type} from "packages/org/antlr/v4/runtime/tree/$ErrorNode"
import {$ParseTree, $ParseTree$Type} from "packages/org/antlr/v4/runtime/tree/$ParseTree"
import {$TerminalNode, $TerminalNode$Type} from "packages/org/antlr/v4/runtime/tree/$TerminalNode"

export class $AbstractParseTreeVisitor<T> implements $ParseTreeVisitor<(T)> {

constructor()

public "visit"(arg0: $ParseTree$Type): T
public "visitChildren"(arg0: $RuleNode$Type): T
public "visitTerminal"(arg0: $TerminalNode$Type): T
public "visitErrorNode"(arg0: $ErrorNode$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractParseTreeVisitor$Type<T> = ($AbstractParseTreeVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractParseTreeVisitor_<T> = $AbstractParseTreeVisitor$Type<(T)>;
}}
declare module "packages/org/antlr/v4/runtime/atn/$ATN" {
import {$RuleStopState, $RuleStopState$Type} from "packages/org/antlr/v4/runtime/atn/$RuleStopState"
import {$LexerAction, $LexerAction$Type} from "packages/org/antlr/v4/runtime/atn/$LexerAction"
import {$IntervalSet, $IntervalSet$Type} from "packages/org/antlr/v4/runtime/misc/$IntervalSet"
import {$ATNState, $ATNState$Type} from "packages/org/antlr/v4/runtime/atn/$ATNState"
import {$TokensStartState, $TokensStartState$Type} from "packages/org/antlr/v4/runtime/atn/$TokensStartState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RuleStartState, $RuleStartState$Type} from "packages/org/antlr/v4/runtime/atn/$RuleStartState"
import {$ATNType, $ATNType$Type} from "packages/org/antlr/v4/runtime/atn/$ATNType"
import {$DecisionState, $DecisionState$Type} from "packages/org/antlr/v4/runtime/atn/$DecisionState"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"

export class $ATN {
static readonly "INVALID_ALT_NUMBER": integer
readonly "states": $List<($ATNState)>
readonly "decisionToState": $List<($DecisionState)>
 "ruleToStartState": ($RuleStartState)[]
 "ruleToStopState": ($RuleStopState)[]
readonly "modeNameToStartState": $Map<(string), ($TokensStartState)>
readonly "grammarType": $ATNType
readonly "maxTokenType": integer
 "ruleToTokenType": (integer)[]
 "lexerActions": ($LexerAction)[]
readonly "modeToStartState": $List<($TokensStartState)>

constructor(arg0: $ATNType$Type, arg1: integer)

public "removeState"(arg0: $ATNState$Type): void
public "getNumberOfDecisions"(): integer
public "getDecisionState"(arg0: integer): $DecisionState
public "getExpectedTokens"(arg0: integer, arg1: $RuleContext$Type): $IntervalSet
public "defineDecisionState"(arg0: $DecisionState$Type): integer
public "nextTokens"(arg0: $ATNState$Type, arg1: $RuleContext$Type): $IntervalSet
public "nextTokens"(arg0: $ATNState$Type): $IntervalSet
public "addState"(arg0: $ATNState$Type): void
get "numberOfDecisions"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATN$Type = ($ATN);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATN_ = $ATN$Type;
}}
declare module "packages/org/antlr/v4/runtime/atn/$PredictionContext" {
import {$DoubleKeyMap, $DoubleKeyMap$Type} from "packages/org/antlr/v4/runtime/misc/$DoubleKeyMap"
import {$ArrayPredictionContext, $ArrayPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$ArrayPredictionContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Recognizer, $Recognizer$Type} from "packages/org/antlr/v4/runtime/$Recognizer"
import {$ATN, $ATN$Type} from "packages/org/antlr/v4/runtime/atn/$ATN"
import {$IdentityHashMap, $IdentityHashMap$Type} from "packages/java/util/$IdentityHashMap"
import {$SingletonPredictionContext, $SingletonPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$SingletonPredictionContext"
import {$EmptyPredictionContext, $EmptyPredictionContext$Type} from "packages/org/antlr/v4/runtime/atn/$EmptyPredictionContext"
import {$PredictionContextCache, $PredictionContextCache$Type} from "packages/org/antlr/v4/runtime/atn/$PredictionContextCache"
import {$RuleContext, $RuleContext$Type} from "packages/org/antlr/v4/runtime/$RuleContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PredictionContext {
static readonly "EMPTY": $EmptyPredictionContext
static readonly "EMPTY_RETURN_STATE": integer
static "globalNodeCount": integer
readonly "id": integer
readonly "cachedHashCode": integer


public "equals"(arg0: any): boolean
public "toString"(arg0: $Recognizer$Type<(any), (any)>): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public static "merge"(arg0: $PredictionContext$Type, arg1: $PredictionContext$Type, arg2: boolean, arg3: $DoubleKeyMap$Type<($PredictionContext$Type), ($PredictionContext$Type), ($PredictionContext$Type)>): $PredictionContext
public "getParent"(arg0: integer): $PredictionContext
public static "getCachedContext"(arg0: $PredictionContext$Type, arg1: $PredictionContextCache$Type, arg2: $IdentityHashMap$Type<($PredictionContext$Type), ($PredictionContext$Type)>): $PredictionContext
public "hasEmptyPath"(): boolean
public "getReturnState"(arg0: integer): integer
public static "fromRuleContext"(arg0: $ATN$Type, arg1: $RuleContext$Type): $PredictionContext
public static "mergeSingletons"(arg0: $SingletonPredictionContext$Type, arg1: $SingletonPredictionContext$Type, arg2: boolean, arg3: $DoubleKeyMap$Type<($PredictionContext$Type), ($PredictionContext$Type), ($PredictionContext$Type)>): $PredictionContext
public static "mergeArrays"(arg0: $ArrayPredictionContext$Type, arg1: $ArrayPredictionContext$Type, arg2: boolean, arg3: $DoubleKeyMap$Type<($PredictionContext$Type), ($PredictionContext$Type), ($PredictionContext$Type)>): $PredictionContext
public static "toDOTString"(arg0: $PredictionContext$Type): string
public static "getAllContextNodes"(arg0: $PredictionContext$Type): $List<($PredictionContext)>
public static "getAllContextNodes_"(arg0: $PredictionContext$Type, arg1: $List$Type<($PredictionContext$Type)>, arg2: $Map$Type<($PredictionContext$Type), ($PredictionContext$Type)>): void
public static "mergeRoot"(arg0: $SingletonPredictionContext$Type, arg1: $SingletonPredictionContext$Type, arg2: boolean): $PredictionContext
public "toStrings"(arg0: $Recognizer$Type<(any), (any)>, arg1: $PredictionContext$Type, arg2: integer): (string)[]
public "toStrings"(arg0: $Recognizer$Type<(any), (any)>, arg1: integer): (string)[]
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PredictionContext$Type = ($PredictionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PredictionContext_ = $PredictionContext$Type;
}}
