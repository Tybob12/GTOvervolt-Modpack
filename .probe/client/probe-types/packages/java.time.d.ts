declare module "packages/java/time/format/$ResolverStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ResolverStyle extends $Enum<($ResolverStyle)> {
static readonly "STRICT": $ResolverStyle
static readonly "SMART": $ResolverStyle
static readonly "LENIENT": $ResolverStyle


public static "values"(): ($ResolverStyle)[]
public static "valueOf"(arg0: string): $ResolverStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolverStyle$Type = (("strict") | ("smart") | ("lenient")) | ($ResolverStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolverStyle_ = $ResolverStyle$Type;
}}
declare module "packages/java/time/$Clock" {
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$InstantSource, $InstantSource$Type} from "packages/java/time/$InstantSource"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export class $Clock implements $InstantSource {


public "instant"(): $Instant
public "getZone"(): $ZoneId
public static "systemDefaultZone"(): $Clock
public static "tickMillis"(arg0: $ZoneId$Type): $Clock
public static "tickSeconds"(arg0: $ZoneId$Type): $Clock
public static "tickMinutes"(arg0: $ZoneId$Type): $Clock
public static "tick"(arg0: $Clock$Type, arg1: $Duration$Type): $Clock
public "withZone"(arg0: $ZoneId$Type): $Clock
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "offset"(arg0: $Clock$Type, arg1: $Duration$Type): $Clock
public "millis"(): long
public static "system"(arg0: $ZoneId$Type): $Clock
public static "fixed"(arg0: $Instant$Type, arg1: $ZoneId$Type): $Clock
public static "systemUTC"(): $Clock
public static "tick"(arg0: $InstantSource$Type, arg1: $Duration$Type): $InstantSource
public static "offset"(arg0: $InstantSource$Type, arg1: $Duration$Type): $InstantSource
public static "system"(): $InstantSource
public static "fixed"(arg0: $Instant$Type): $InstantSource
get "zone"(): $ZoneId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clock$Type = ($Clock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clock_ = $Clock$Type;
}}
declare module "packages/java/time/$Instant" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$ZonedDateTime, $ZonedDateTime$Type} from "packages/java/time/$ZonedDateTime"
import {$OffsetDateTime, $OffsetDateTime$Type} from "packages/java/time/$OffsetDateTime"

export class $Instant implements $Temporal, $TemporalAdjuster, $Comparable<($Instant)>, $Serializable {
static readonly "EPOCH": $Instant
static readonly "MIN": $Instant
static readonly "MAX": $Instant


public static "parse"(arg0: charseq): $Instant
public static "ofEpochMilli"(arg0: long): $Instant
public "getNano"(): integer
public "getEpochSecond"(): long
public static "ofEpochSecond"(arg0: long): $Instant
public static "ofEpochSecond"(arg0: long, arg1: long): $Instant
public static "now"(): $Instant
public static "now"(arg0: $Clock$Type): $Instant
public "toEpochMilli"(): long
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "truncatedTo"(arg0: $TemporalUnit$Type): $Instant
public "plusNanos"(arg0: long): $Instant
public "plusSeconds"(arg0: long): $Instant
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $Instant$Type): boolean
public "isBefore"(arg0: $Instant$Type): boolean
public "atZone"(arg0: $ZoneId$Type): $ZonedDateTime
public "minusSeconds"(arg0: long): $Instant
public "minusNanos"(arg0: long): $Instant
public "atOffset"(arg0: $ZoneOffset$Type): $OffsetDateTime
public "plusMillis"(arg0: long): $Instant
public "minusMillis"(arg0: long): $Instant
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Instant$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public static "from"(arg0: $TemporalAccessor$Type): $Instant
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "nano"(): integer
get "epochSecond"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instant$Type = ($Instant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instant_ = $Instant$Type;
}}
declare module "packages/java/time/temporal/$ChronoField" {
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChronoField extends $Enum<($ChronoField)> implements $TemporalField {
static readonly "NANO_OF_SECOND": $ChronoField
static readonly "NANO_OF_DAY": $ChronoField
static readonly "MICRO_OF_SECOND": $ChronoField
static readonly "MICRO_OF_DAY": $ChronoField
static readonly "MILLI_OF_SECOND": $ChronoField
static readonly "MILLI_OF_DAY": $ChronoField
static readonly "SECOND_OF_MINUTE": $ChronoField
static readonly "SECOND_OF_DAY": $ChronoField
static readonly "MINUTE_OF_HOUR": $ChronoField
static readonly "MINUTE_OF_DAY": $ChronoField
static readonly "HOUR_OF_AMPM": $ChronoField
static readonly "CLOCK_HOUR_OF_AMPM": $ChronoField
static readonly "HOUR_OF_DAY": $ChronoField
static readonly "CLOCK_HOUR_OF_DAY": $ChronoField
static readonly "AMPM_OF_DAY": $ChronoField
static readonly "DAY_OF_WEEK": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_MONTH": $ChronoField
static readonly "ALIGNED_DAY_OF_WEEK_IN_YEAR": $ChronoField
static readonly "DAY_OF_MONTH": $ChronoField
static readonly "DAY_OF_YEAR": $ChronoField
static readonly "EPOCH_DAY": $ChronoField
static readonly "ALIGNED_WEEK_OF_MONTH": $ChronoField
static readonly "ALIGNED_WEEK_OF_YEAR": $ChronoField
static readonly "MONTH_OF_YEAR": $ChronoField
static readonly "PROLEPTIC_MONTH": $ChronoField
static readonly "YEAR_OF_ERA": $ChronoField
static readonly "YEAR": $ChronoField
static readonly "ERA": $ChronoField
static readonly "INSTANT_SECONDS": $ChronoField
static readonly "OFFSET_SECONDS": $ChronoField


public "getDisplayName"(arg0: $Locale$Type): string
public "range"(): $ValueRange
public "checkValidValue"(arg0: long): long
public "isDateBased"(): boolean
public "isTimeBased"(): boolean
public "isSupportedBy"(arg0: $TemporalAccessor$Type): boolean
public "rangeRefinedBy"(arg0: $TemporalAccessor$Type): $ValueRange
public "getFrom"(arg0: $TemporalAccessor$Type): long
public "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
public "checkValidIntValue"(arg0: long): integer
public "getBaseUnit"(): $TemporalUnit
public "getRangeUnit"(): $TemporalUnit
public "toString"(): string
public static "values"(): ($ChronoField)[]
public static "valueOf"(arg0: string): $ChronoField
public "resolve"(arg0: $Map$Type<($TemporalField$Type), (long)>, arg1: $TemporalAccessor$Type, arg2: $ResolverStyle$Type): $TemporalAccessor
get "dateBased"(): boolean
get "timeBased"(): boolean
get "baseUnit"(): $TemporalUnit
get "rangeUnit"(): $TemporalUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoField$Type = (("year_of_era") | ("micro_of_second") | ("year") | ("minute_of_day") | ("minute_of_hour") | ("epoch_day") | ("day_of_month") | ("hour_of_ampm") | ("offset_seconds") | ("milli_of_second") | ("nano_of_second") | ("proleptic_month") | ("era") | ("second_of_minute") | ("aligned_day_of_week_in_year") | ("micro_of_day") | ("nano_of_day") | ("hour_of_day") | ("day_of_week") | ("second_of_day") | ("day_of_year") | ("month_of_year") | ("ampm_of_day") | ("milli_of_day") | ("aligned_week_of_month") | ("instant_seconds") | ("aligned_day_of_week_in_month") | ("aligned_week_of_year") | ("clock_hour_of_day") | ("clock_hour_of_ampm")) | ($ChronoField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoField_ = $ChronoField$Type;
}}
declare module "packages/java/time/$ZoneId" {
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ZoneRules, $ZoneRules$Type} from "packages/java/time/zone/$ZoneRules"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $ZoneId implements $Serializable {
static readonly "SHORT_IDS": $Map<(string), (string)>


public static "systemDefault"(): $ZoneId
public "getRules"(): $ZoneRules
public "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
public "normalized"(): $ZoneId
public static "getAvailableZoneIds"(): $Set<(string)>
public static "ofOffset"(arg0: string, arg1: $ZoneOffset$Type): $ZoneId
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: string, arg1: $Map$Type<(string), (string)>): $ZoneId
public static "of"(arg0: string): $ZoneId
public static "from"(arg0: $TemporalAccessor$Type): $ZoneId
public "getId"(): string
get "rules"(): $ZoneRules
get "availableZoneIds"(): $Set<(string)>
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneId$Type = ($ZoneId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneId_ = $ZoneId$Type;
}}
declare module "packages/java/time/$OffsetDateTime" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$DayOfWeek, $DayOfWeek$Type} from "packages/java/time/$DayOfWeek"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Month, $Month$Type} from "packages/java/time/$Month"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZonedDateTime, $ZonedDateTime$Type} from "packages/java/time/$ZonedDateTime"
import {$OffsetTime, $OffsetTime$Type} from "packages/java/time/$OffsetTime"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"

export class $OffsetDateTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetDateTime)>, $Serializable {
static readonly "MIN": $OffsetDateTime
static readonly "MAX": $OffsetDateTime


public static "parse"(arg0: charseq): $OffsetDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $OffsetDateTime
public "isEqual"(arg0: $OffsetDateTime$Type): boolean
public "toEpochSecond"(): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $OffsetDateTime
public "getNano"(): integer
public "toInstant"(): $Instant
public "plus"(arg0: long, arg1: $TemporalUnit$Type): $OffsetDateTime
public "plus"(arg0: $TemporalAmount$Type): $OffsetDateTime
public static "now"(arg0: $Clock$Type): $OffsetDateTime
public static "now"(arg0: $ZoneId$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "toZonedDateTime"(): $ZonedDateTime
public "toLocalDateTime"(): $LocalDateTime
public "with"(arg0: $TemporalAdjuster$Type): $OffsetDateTime
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "withYear"(arg0: integer): $OffsetDateTime
public "withMonth"(arg0: integer): $OffsetDateTime
public "withDayOfMonth"(arg0: integer): $OffsetDateTime
public "withDayOfYear"(arg0: integer): $OffsetDateTime
public "withHour"(arg0: integer): $OffsetDateTime
public "withMinute"(arg0: integer): $OffsetDateTime
public "withSecond"(arg0: integer): $OffsetDateTime
public "withNano"(arg0: integer): $OffsetDateTime
public "truncatedTo"(arg0: $TemporalUnit$Type): $OffsetDateTime
public "plusNanos"(arg0: long): $OffsetDateTime
public "plusDays"(arg0: long): $OffsetDateTime
public "plusSeconds"(arg0: long): $OffsetDateTime
public "plusMinutes"(arg0: long): $OffsetDateTime
public "plusHours"(arg0: long): $OffsetDateTime
public "plusYears"(arg0: long): $OffsetDateTime
public "plusMonths"(arg0: long): $OffsetDateTime
public "plusWeeks"(arg0: long): $OffsetDateTime
public "minus"(arg0: long, arg1: $TemporalUnit$Type): $OffsetDateTime
public "minus"(arg0: $TemporalAmount$Type): $OffsetDateTime
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $OffsetDateTime$Type): boolean
public "isBefore"(arg0: $OffsetDateTime$Type): boolean
public "minusDays"(arg0: long): $OffsetDateTime
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "minusYears"(arg0: long): $OffsetDateTime
public "minusMonths"(arg0: long): $OffsetDateTime
public "minusWeeks"(arg0: long): $OffsetDateTime
public "minusHours"(arg0: long): $OffsetDateTime
public "minusMinutes"(arg0: long): $OffsetDateTime
public "minusSeconds"(arg0: long): $OffsetDateTime
public "minusNanos"(arg0: long): $OffsetDateTime
public static "timeLineOrder"(): $Comparator<($OffsetDateTime)>
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $OffsetDateTime$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$Type): $OffsetDateTime
public static "of"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type): $OffsetDateTime
public static "of"(arg0: $LocalDate$Type, arg1: $LocalTime$Type, arg2: $ZoneOffset$Type): $OffsetDateTime
public static "from"(arg0: $TemporalAccessor$Type): $OffsetDateTime
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "withOffsetSameInstant"(arg0: $ZoneOffset$Type): $OffsetDateTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$Type): $OffsetDateTime
public "atZoneSameInstant"(arg0: $ZoneId$Type): $ZonedDateTime
public "atZoneSimilarLocal"(arg0: $ZoneId$Type): $ZonedDateTime
public "toOffsetTime"(): $OffsetTime
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "nano"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "offset"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetDateTime$Type = ($OffsetDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetDateTime_ = $OffsetDateTime$Type;
}}
declare module "packages/java/time/zone/$ZoneOffsetTransitionRule" {
import {$ZoneOffsetTransitionRule$TimeDefinition, $ZoneOffsetTransitionRule$TimeDefinition$Type} from "packages/java/time/zone/$ZoneOffsetTransitionRule$TimeDefinition"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Month, $Month$Type} from "packages/java/time/$Month"
import {$DayOfWeek, $DayOfWeek$Type} from "packages/java/time/$DayOfWeek"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$Type} from "packages/java/time/zone/$ZoneOffsetTransition"

export class $ZoneOffsetTransitionRule implements $Serializable {


public "createTransition"(arg0: integer): $ZoneOffsetTransition
public "getDayOfMonthIndicator"(): integer
public "getLocalTime"(): $LocalTime
public "isMidnightEndOfDay"(): boolean
public "getTimeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getStandardOffset"(): $ZoneOffset
public "getOffsetAfter"(): $ZoneOffset
public "getOffsetBefore"(): $ZoneOffset
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Month$Type, arg1: integer, arg2: $DayOfWeek$Type, arg3: $LocalTime$Type, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition$Type, arg6: $ZoneOffset$Type, arg7: $ZoneOffset$Type, arg8: $ZoneOffset$Type): $ZoneOffsetTransitionRule
get "dayOfMonthIndicator"(): integer
get "localTime"(): $LocalTime
get "midnightEndOfDay"(): boolean
get "timeDefinition"(): $ZoneOffsetTransitionRule$TimeDefinition
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "standardOffset"(): $ZoneOffset
get "offsetAfter"(): $ZoneOffset
get "offsetBefore"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransitionRule$Type = ($ZoneOffsetTransitionRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransitionRule_ = $ZoneOffsetTransitionRule$Type;
}}
declare module "packages/java/time/$LocalDate" {
import {$DayOfWeek, $DayOfWeek$Type} from "packages/java/time/$DayOfWeek"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$IsoEra, $IsoEra$Type} from "packages/java/time/chrono/$IsoEra"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$OffsetDateTime, $OffsetDateTime$Type} from "packages/java/time/$OffsetDateTime"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Month, $Month$Type} from "packages/java/time/$Month"
import {$Period, $Period$Type} from "packages/java/time/$Period"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZonedDateTime, $ZonedDateTime$Type} from "packages/java/time/$ZonedDateTime"
import {$OffsetTime, $OffsetTime$Type} from "packages/java/time/$OffsetTime"

export class $LocalDate implements $Temporal, $TemporalAdjuster, $ChronoLocalDate, $Serializable {
static readonly "MIN": $LocalDate
static readonly "MAX": $LocalDate
static readonly "EPOCH": $LocalDate


public static "parse"(arg0: charseq): $LocalDate
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $LocalDate
public "isEqual"(arg0: $ChronoLocalDate$Type): boolean
public "toEpochSecond"(arg0: $LocalTime$Type, arg1: $ZoneOffset$Type): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $LocalDate
public "plus"(arg0: $TemporalAmount$Type): $LocalDate
public static "now"(): $LocalDate
public static "now"(arg0: $ZoneId$Type): $LocalDate
public static "now"(arg0: $Clock$Type): $LocalDate
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "isLeapYear"(): boolean
public "getDayOfYear"(): integer
public "getEra"(): $IsoEra
public static "ofEpochDay"(arg0: long): $LocalDate
public "with"(arg0: $TemporalAdjuster$Type): $LocalDate
public "with"(arg0: $TemporalField$Type, arg1: long): $LocalDate
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "withYear"(arg0: integer): $LocalDate
public "withMonth"(arg0: integer): $LocalDate
public "withDayOfMonth"(arg0: integer): $LocalDate
public "withDayOfYear"(arg0: integer): $LocalDate
public "plusDays"(arg0: long): $LocalDate
public "plusYears"(arg0: long): $LocalDate
public "plusMonths"(arg0: long): $LocalDate
public "plusWeeks"(arg0: long): $LocalDate
public "until"(arg0: $ChronoLocalDate$Type): $Period
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $ChronoLocalDate$Type): boolean
public "isBefore"(arg0: $ChronoLocalDate$Type): boolean
public "minusDays"(arg0: long): $LocalDate
public "minusYears"(arg0: long): $LocalDate
public "minusMonths"(arg0: long): $LocalDate
public "minusWeeks"(arg0: long): $LocalDate
public "toEpochDay"(): long
public "lengthOfMonth"(): integer
public "lengthOfYear"(): integer
public static "ofYearDay"(arg0: integer, arg1: integer): $LocalDate
public "atTime"(arg0: $OffsetTime$Type): $OffsetDateTime
public "atTime"(arg0: integer, arg1: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer): $LocalDateTime
public "datesUntil"(arg0: $LocalDate$Type, arg1: $Period$Type): $Stream<($LocalDate)>
public "datesUntil"(arg0: $LocalDate$Type): $Stream<($LocalDate)>
public "atStartOfDay"(arg0: $ZoneId$Type): $ZonedDateTime
public "atStartOfDay"(): $LocalDateTime
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDate$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: integer, arg1: $Month$Type, arg2: integer): $LocalDate
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public static "from"(arg0: $TemporalAccessor$Type): $LocalDate
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
public static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "leapYear"(): boolean
get "dayOfYear"(): integer
get "era"(): $IsoEra
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDate$Type = ($LocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDate_ = $LocalDate$Type;
}}
declare module "packages/java/time/zone/$ZoneOffsetTransitionRule$TimeDefinition" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"

export class $ZoneOffsetTransitionRule$TimeDefinition extends $Enum<($ZoneOffsetTransitionRule$TimeDefinition)> {
static readonly "UTC": $ZoneOffsetTransitionRule$TimeDefinition
static readonly "WALL": $ZoneOffsetTransitionRule$TimeDefinition
static readonly "STANDARD": $ZoneOffsetTransitionRule$TimeDefinition


public "createDateTime"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type, arg2: $ZoneOffset$Type): $LocalDateTime
public static "values"(): ($ZoneOffsetTransitionRule$TimeDefinition)[]
public static "valueOf"(arg0: string): $ZoneOffsetTransitionRule$TimeDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransitionRule$TimeDefinition$Type = (("standard") | ("utc") | ("wall")) | ($ZoneOffsetTransitionRule$TimeDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransitionRule$TimeDefinition_ = $ZoneOffsetTransitionRule$TimeDefinition$Type;
}}
declare module "packages/java/time/zone/$ZoneOffsetTransition" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export class $ZoneOffsetTransition implements $Comparable<($ZoneOffsetTransition)>, $Serializable {


public "toEpochSecond"(): long
public "isValidOffset"(arg0: $ZoneOffset$Type): boolean
public "getInstant"(): $Instant
public "isOverlap"(): boolean
public "isGap"(): boolean
public "getDateTimeAfter"(): $LocalDateTime
public "getDuration"(): $Duration
public "getOffsetAfter"(): $ZoneOffset
public "getDateTimeBefore"(): $LocalDateTime
public "getOffsetBefore"(): $ZoneOffset
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffsetTransition$Type): integer
public static "of"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type, arg2: $ZoneOffset$Type): $ZoneOffsetTransition
get "instant"(): $Instant
get "overlap"(): boolean
get "gap"(): boolean
get "dateTimeAfter"(): $LocalDateTime
get "duration"(): $Duration
get "offsetAfter"(): $ZoneOffset
get "dateTimeBefore"(): $LocalDateTime
get "offsetBefore"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffsetTransition$Type = ($ZoneOffsetTransition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffsetTransition_ = $ZoneOffsetTransition$Type;
}}
declare module "packages/java/time/$ZoneOffset" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$ZoneRules, $ZoneRules$Type} from "packages/java/time/zone/$ZoneRules"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor, $TemporalAdjuster, $Comparable<($ZoneOffset)>, $Serializable {
static readonly "UTC": $ZoneOffset
static readonly "MIN": $ZoneOffset
static readonly "MAX": $ZoneOffset
static readonly "SHORT_IDS": $Map<(string), (string)>


public "getRules"(): $ZoneRules
public static "ofHoursMinutesSeconds"(arg0: integer, arg1: integer, arg2: integer): $ZoneOffset
public static "ofHoursMinutes"(arg0: integer, arg1: integer): $ZoneOffset
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "getTotalSeconds"(): integer
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public static "ofHours"(arg0: integer): $ZoneOffset
public static "ofTotalSeconds"(arg0: integer): $ZoneOffset
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ZoneOffset$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public static "of"(arg0: string): $ZoneOffset
public static "from"(arg0: $TemporalAccessor$Type): $ZoneOffset
public "getId"(): string
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "rules"(): $ZoneRules
get "totalSeconds"(): integer
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffset$Type = ($ZoneOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneOffset_ = $ZoneOffset$Type;
}}
declare module "packages/java/time/temporal/$TemporalUnit" {
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export interface $TemporalUnit {

 "between"(arg0: $Temporal$Type, arg1: $Temporal$Type): long
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $Temporal$Type): boolean
 "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
 "getDuration"(): $Duration
 "isDurationEstimated"(): boolean
 "toString"(): string
}

export namespace $TemporalUnit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalUnit$Type = ($TemporalUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalUnit_ = $TemporalUnit$Type;
}}
declare module "packages/java/time/$OffsetTime" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$OffsetDateTime, $OffsetDateTime$Type} from "packages/java/time/$OffsetDateTime"

export class $OffsetTime implements $Temporal, $TemporalAdjuster, $Comparable<($OffsetTime)>, $Serializable {
static readonly "MIN": $OffsetTime
static readonly "MAX": $OffsetTime


public static "parse"(arg0: charseq): $OffsetTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $OffsetTime
public "isEqual"(arg0: $OffsetTime$Type): boolean
public "toEpochSecond"(arg0: $LocalDate$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $OffsetTime
public "getNano"(): integer
public "plus"(arg0: long, arg1: $TemporalUnit$Type): $OffsetTime
public static "now"(): $OffsetTime
public static "now"(arg0: $Clock$Type): $OffsetTime
public static "now"(arg0: $ZoneId$Type): $OffsetTime
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "withHour"(arg0: integer): $OffsetTime
public "withMinute"(arg0: integer): $OffsetTime
public "withSecond"(arg0: integer): $OffsetTime
public "withNano"(arg0: integer): $OffsetTime
public "truncatedTo"(arg0: $TemporalUnit$Type): $OffsetTime
public "plusNanos"(arg0: long): $OffsetTime
public "plusSeconds"(arg0: long): $OffsetTime
public "plusMinutes"(arg0: long): $OffsetTime
public "plusHours"(arg0: long): $OffsetTime
public "minus"(arg0: $TemporalAmount$Type): $OffsetTime
public "minus"(arg0: long, arg1: $TemporalUnit$Type): $OffsetTime
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $OffsetTime$Type): boolean
public "isBefore"(arg0: $OffsetTime$Type): boolean
public "toLocalTime"(): $LocalTime
public "minusHours"(arg0: long): $OffsetTime
public "minusMinutes"(arg0: long): $OffsetTime
public "minusSeconds"(arg0: long): $OffsetTime
public "minusNanos"(arg0: long): $OffsetTime
public "atDate"(arg0: $LocalDate$Type): $OffsetDateTime
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $OffsetTime$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: $LocalTime$Type, arg1: $ZoneOffset$Type): $OffsetTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ZoneOffset$Type): $OffsetTime
public static "from"(arg0: $TemporalAccessor$Type): $OffsetTime
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "withOffsetSameInstant"(arg0: $ZoneOffset$Type): $OffsetTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$Type): $OffsetTime
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "nano"(): integer
get "offset"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetTime$Type = ($OffsetTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetTime_ = $OffsetTime$Type;
}}
declare module "packages/java/time/$Month" {
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $Month extends $Enum<($Month)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "JANUARY": $Month
static readonly "FEBRUARY": $Month
static readonly "MARCH": $Month
static readonly "APRIL": $Month
static readonly "MAY": $Month
static readonly "JUNE": $Month
static readonly "JULY": $Month
static readonly "AUGUST": $Month
static readonly "SEPTEMBER": $Month
static readonly "OCTOBER": $Month
static readonly "NOVEMBER": $Month
static readonly "DECEMBER": $Month


public "maxLength"(): integer
public "firstMonthOfQuarter"(): $Month
public "plus"(arg0: long): $Month
public "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "minus"(arg0: long): $Month
public "minLength"(): integer
public "firstDayOfYear"(arg0: boolean): integer
public "get"(arg0: $TemporalField$Type): integer
public "length"(arg0: boolean): integer
public static "values"(): ($Month)[]
public "getLong"(arg0: $TemporalField$Type): long
public static "valueOf"(arg0: string): $Month
public "getValue"(): integer
public static "of"(arg0: integer): $Month
public static "from"(arg0: $TemporalAccessor$Type): $Month
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Month$Type = (("november") | ("june") | ("september") | ("may") | ("august") | ("january") | ("february") | ("july") | ("december") | ("october") | ("april") | ("march")) | ($Month);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Month_ = $Month$Type;
}}
declare module "packages/java/time/$LocalDateTime" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$DayOfWeek, $DayOfWeek$Type} from "packages/java/time/$DayOfWeek"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Month, $Month$Type} from "packages/java/time/$Month"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZonedDateTime, $ZonedDateTime$Type} from "packages/java/time/$ZonedDateTime"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$OffsetDateTime, $OffsetDateTime$Type} from "packages/java/time/$OffsetDateTime"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$Type} from "packages/java/time/chrono/$ChronoLocalDateTime"

export class $LocalDateTime implements $Temporal, $TemporalAdjuster, $ChronoLocalDateTime<($LocalDate)>, $Serializable {
static readonly "MIN": $LocalDateTime
static readonly "MAX": $LocalDateTime


public static "parse"(arg0: charseq): $LocalDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $LocalDateTime
public "getNano"(): integer
public static "ofEpochSecond"(arg0: long, arg1: integer, arg2: $ZoneOffset$Type): $LocalDateTime
public "plus"(arg0: $TemporalAmount$Type): $LocalDateTime
public "plus"(arg0: long, arg1: $TemporalUnit$Type): $LocalDateTime
public static "now"(arg0: $Clock$Type): $LocalDateTime
public static "now"(): $LocalDateTime
public static "now"(arg0: $ZoneId$Type): $LocalDateTime
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "with"(arg0: $TemporalField$Type, arg1: long): $LocalDateTime
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "withYear"(arg0: integer): $LocalDateTime
public "withMonth"(arg0: integer): $LocalDateTime
public "withDayOfMonth"(arg0: integer): $LocalDateTime
public "withDayOfYear"(arg0: integer): $LocalDateTime
public "withHour"(arg0: integer): $LocalDateTime
public "withMinute"(arg0: integer): $LocalDateTime
public "withSecond"(arg0: integer): $LocalDateTime
public "withNano"(arg0: integer): $LocalDateTime
public "truncatedTo"(arg0: $TemporalUnit$Type): $LocalDateTime
public "plusNanos"(arg0: long): $LocalDateTime
public "plusDays"(arg0: long): $LocalDateTime
public "plusSeconds"(arg0: long): $LocalDateTime
public "plusMinutes"(arg0: long): $LocalDateTime
public "plusHours"(arg0: long): $LocalDateTime
public "plusYears"(arg0: long): $LocalDateTime
public "plusMonths"(arg0: long): $LocalDateTime
public "plusWeeks"(arg0: long): $LocalDateTime
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
public "minusDays"(arg0: long): $LocalDateTime
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "atZone"(arg0: $ZoneId$Type): $ZonedDateTime
public "minusYears"(arg0: long): $LocalDateTime
public "minusMonths"(arg0: long): $LocalDateTime
public "minusWeeks"(arg0: long): $LocalDateTime
public "minusHours"(arg0: long): $LocalDateTime
public "minusMinutes"(arg0: long): $LocalDateTime
public "minusSeconds"(arg0: long): $LocalDateTime
public "minusNanos"(arg0: long): $LocalDateTime
public "atOffset"(arg0: $ZoneOffset$Type): $OffsetDateTime
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDateTime$Type<(any)>): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$Type, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: $LocalDate$Type, arg1: $LocalTime$Type): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "from"(arg0: $TemporalAccessor$Type): $LocalDateTime
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
public "toEpochSecond"(arg0: $ZoneOffset$Type): long
public "toInstant"(arg0: $ZoneOffset$Type): $Instant
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(any)>)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "nano"(): integer
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDateTime$Type = ($LocalDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalDateTime_ = $LocalDateTime$Type;
}}
declare module "packages/java/time/chrono/$IsoChronology" {
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$ChronoField, $ChronoField$Type} from "packages/java/time/temporal/$ChronoField"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$IsoEra, $IsoEra$Type} from "packages/java/time/chrono/$IsoEra"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$AbstractChronology, $AbstractChronology$Type} from "packages/java/time/chrono/$AbstractChronology"
import {$Era, $Era$Type} from "packages/java/time/chrono/$Era"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ZonedDateTime, $ZonedDateTime$Type} from "packages/java/time/$ZonedDateTime"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IsoChronology extends $AbstractChronology implements $Serializable {
static readonly "INSTANCE": $IsoChronology


public "prolepticYear"(arg0: $Era$Type, arg1: integer): integer
public "dateYearDay"(arg0: $Era$Type, arg1: integer, arg2: integer): $LocalDate
public "dateYearDay"(arg0: integer, arg1: integer): $LocalDate
public "dateNow"(): $LocalDate
public "resolveDate"(arg0: $Map$Type<($TemporalField$Type), (long)>, arg1: $ResolverStyle$Type): $LocalDate
public "zonedDateTime"(arg0: $Instant$Type, arg1: $ZoneId$Type): $ZonedDateTime
public "zonedDateTime"(arg0: $TemporalAccessor$Type): $ZonedDateTime
public "eras"(): $List<($Era)>
public "date"(arg0: $Era$Type, arg1: integer, arg2: integer, arg3: integer): $LocalDate
public "date"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public "range"(arg0: $ChronoField$Type): $ValueRange
public "getCalendarType"(): string
public "isLeapYear"(arg0: long): boolean
public "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$Type): long
public "localDateTime"(arg0: $TemporalAccessor$Type): $LocalDateTime
public "eraOf"(arg0: integer): $IsoEra
public "getId"(): string
public static "ofLocale"(arg0: $Locale$Type): $Chronology
public static "getAvailableChronologies"(): $Set<($Chronology)>
public static "of"(arg0: string): $Chronology
public static "from"(arg0: $TemporalAccessor$Type): $Chronology
get "calendarType"(): string
get "id"(): string
get "availableChronologies"(): $Set<($Chronology)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsoChronology$Type = ($IsoChronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsoChronology_ = $IsoChronology$Type;
}}
declare module "packages/java/time/$Duration" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Duration implements $TemporalAmount, $Comparable<($Duration)>, $Serializable {
static readonly "ZERO": $Duration


public static "parse"(arg0: charseq): $Duration
public static "between"(arg0: $Temporal$Type, arg1: $Temporal$Type): $Duration
public "toSeconds"(): long
public "getSeconds"(): long
public "getNano"(): integer
public "toMinutes"(): long
public "toHours"(): long
public "toDays"(): long
public "isNegative"(): boolean
public "plus"(arg0: long, arg1: $TemporalUnit$Type): $Duration
public "plus"(arg0: $Duration$Type): $Duration
public "isZero"(): boolean
public "truncatedTo"(arg0: $TemporalUnit$Type): $Duration
public "addTo"(arg0: $Temporal$Type): $Temporal
public "plusNanos"(arg0: long): $Duration
public "plusDays"(arg0: long): $Duration
public "plusSeconds"(arg0: long): $Duration
public "plusMinutes"(arg0: long): $Duration
public "plusHours"(arg0: long): $Duration
public "minus"(arg0: $Duration$Type): $Duration
public "minus"(arg0: long, arg1: $TemporalUnit$Type): $Duration
public "subtractFrom"(arg0: $Temporal$Type): $Temporal
public "minusDays"(arg0: long): $Duration
public "toNanos"(): long
public "minusHours"(arg0: long): $Duration
public "minusMinutes"(arg0: long): $Duration
public "minusSeconds"(arg0: long): $Duration
public "minusNanos"(arg0: long): $Duration
public static "ofNanos"(arg0: long): $Duration
public static "ofSeconds"(arg0: long): $Duration
public static "ofSeconds"(arg0: long, arg1: long): $Duration
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Duration
public "plusMillis"(arg0: long): $Duration
public "multipliedBy"(arg0: long): $Duration
public static "ofDays"(arg0: long): $Duration
public static "ofHours"(arg0: long): $Duration
public static "ofMinutes"(arg0: long): $Duration
public static "ofMillis"(arg0: long): $Duration
public "withSeconds"(arg0: long): $Duration
public "withNanos"(arg0: integer): $Duration
public "minusMillis"(arg0: long): $Duration
public "dividedBy"(arg0: long): $Duration
public "dividedBy"(arg0: $Duration$Type): long
public "toDaysPart"(): long
public "toHoursPart"(): integer
public "toMinutesPart"(): integer
public "toSecondsPart"(): integer
public "toMillisPart"(): integer
public "toNanosPart"(): integer
public "get"(arg0: $TemporalUnit$Type): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $Duration
public "compareTo"(arg0: $Duration$Type): integer
public static "of"(arg0: long, arg1: $TemporalUnit$Type): $Duration
public static "from"(arg0: $TemporalAmount$Type): $Duration
public "toMillis"(): long
get "seconds"(): long
get "nano"(): integer
get "negative"(): boolean
get "zero"(): boolean
get "units"(): $List<($TemporalUnit)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Duration$Type = ($TemporalAmount$Type) | ($Duration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Duration_ = $Duration$Type;
}}
declare module "packages/java/time/temporal/$TemporalField" {
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $TemporalField {

 "getDisplayName"(arg0: $Locale$Type): string
 "range"(): $ValueRange
 "isDateBased"(): boolean
 "isTimeBased"(): boolean
 "isSupportedBy"(arg0: $TemporalAccessor$Type): boolean
 "rangeRefinedBy"(arg0: $TemporalAccessor$Type): $ValueRange
 "getFrom"(arg0: $TemporalAccessor$Type): long
 "adjustInto"<R extends $Temporal>(arg0: R, arg1: long): R
 "getBaseUnit"(): $TemporalUnit
 "getRangeUnit"(): $TemporalUnit
 "toString"(): string
 "resolve"(arg0: $Map$Type<($TemporalField$Type), (long)>, arg1: $TemporalAccessor$Type, arg2: $ResolverStyle$Type): $TemporalAccessor
}

export namespace $TemporalField {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalField$Type = ($TemporalField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalField_ = $TemporalField$Type;
}}
declare module "packages/java/time/chrono/$AbstractChronology" {
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$Type} from "packages/java/time/chrono/$ChronoZonedDateTime"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ChronoField, $ChronoField$Type} from "packages/java/time/temporal/$ChronoField"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$Era, $Era$Type} from "packages/java/time/chrono/$Era"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChronoPeriod, $ChronoPeriod$Type} from "packages/java/time/chrono/$ChronoPeriod"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$Type} from "packages/java/time/chrono/$ChronoLocalDateTime"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractChronology implements $Chronology {


public "resolveDate"(arg0: $Map$Type<($TemporalField$Type), (long)>, arg1: $ResolverStyle$Type): $ChronoLocalDate
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Chronology$Type): integer
public "prolepticYear"(arg0: $Era$Type, arg1: integer): integer
public "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
public "dateYearDay"(arg0: $Era$Type, arg1: integer, arg2: integer): $ChronoLocalDate
public "dateNow"(arg0: $Clock$Type): $ChronoLocalDate
public "dateNow"(arg0: $ZoneId$Type): $ChronoLocalDate
public "dateNow"(): $ChronoLocalDate
public "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
public "zonedDateTime"(arg0: $Instant$Type, arg1: $ZoneId$Type): $ChronoZonedDateTime<(any)>
public "zonedDateTime"(arg0: $TemporalAccessor$Type): $ChronoZonedDateTime<(any)>
public "dateEpochDay"(arg0: long): $ChronoLocalDate
public "eras"(): $List<($Era)>
public static "ofLocale"(arg0: $Locale$Type): $Chronology
public static "getAvailableChronologies"(): $Set<($Chronology)>
public "date"(arg0: $TemporalAccessor$Type): $ChronoLocalDate
public "date"(arg0: $Era$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
public "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
public "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
public "range"(arg0: $ChronoField$Type): $ValueRange
public "getCalendarType"(): string
public "isLeapYear"(arg0: long): boolean
public "epochSecond"(arg0: $Era$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$Type): long
public "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$Type): long
public "localDateTime"(arg0: $TemporalAccessor$Type): $ChronoLocalDateTime<(any)>
public "eraOf"(arg0: integer): $Era
public static "of"(arg0: string): $Chronology
public static "from"(arg0: $TemporalAccessor$Type): $Chronology
public "getId"(): string
get "availableChronologies"(): $Set<($Chronology)>
get "calendarType"(): string
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChronology$Type = ($AbstractChronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChronology_ = $AbstractChronology$Type;
}}
declare module "packages/java/time/chrono/$IsoEra" {
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Era, $Era$Type} from "packages/java/time/chrono/$Era"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $IsoEra extends $Enum<($IsoEra)> implements $Era {
static readonly "BCE": $IsoEra
static readonly "CE": $IsoEra


public static "values"(): ($IsoEra)[]
public static "valueOf"(arg0: string): $IsoEra
public "getValue"(): integer
public static "of"(arg0: integer): $IsoEra
public "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "get"(arg0: $TemporalField$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsoEra$Type = (("ce") | ("bce")) | ($IsoEra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsoEra_ = $IsoEra$Type;
}}
declare module "packages/java/time/temporal/$TemporalAmount" {
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TemporalAmount {

 "addTo"(arg0: $Temporal$Type): $Temporal
 "subtractFrom"(arg0: $Temporal$Type): $Temporal
 "getUnits"(): $List<($TemporalUnit)>
 "get"(arg0: $TemporalUnit$Type): long
}

export namespace $TemporalAmount {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAmount$Type = (string) | (number) | ($TemporalAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAmount_ = $TemporalAmount$Type;
}}
declare module "packages/java/time/temporal/$TemporalAccessor" {
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"

export interface $TemporalAccessor {

 "range"(arg0: $TemporalField$Type): $ValueRange
 "isSupported"(arg0: $TemporalField$Type): boolean
 "get"(arg0: $TemporalField$Type): integer
 "getLong"(arg0: $TemporalField$Type): long
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
}

export namespace $TemporalAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAccessor$Type = ($TemporalAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAccessor_ = $TemporalAccessor$Type;
}}
declare module "packages/java/time/temporal/$TemporalQuery" {
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"

export interface $TemporalQuery<R> {

 "queryFrom"(arg0: $TemporalAccessor$Type): R

(arg0: $TemporalAccessor$Type): R
}

export namespace $TemporalQuery {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalQuery$Type<R> = ($TemporalQuery<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalQuery_<R> = $TemporalQuery$Type<(R)>;
}}
declare module "packages/java/time/temporal/$ValueRange" {
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $ValueRange implements $Serializable {


public "getMinimum"(): long
public "getMaximum"(): long
public "checkValidValue"(arg0: long, arg1: $TemporalField$Type): long
public "isIntValue"(): boolean
public "isValidValue"(arg0: long): boolean
public "checkValidIntValue"(arg0: long, arg1: $TemporalField$Type): integer
public "isValidIntValue"(arg0: long): boolean
public "isFixed"(): boolean
public "getLargestMinimum"(): long
public "getSmallestMaximum"(): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: long, arg1: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long): $ValueRange
public static "of"(arg0: long, arg1: long, arg2: long, arg3: long): $ValueRange
get "minimum"(): long
get "maximum"(): long
get "intValue"(): boolean
get "fixed"(): boolean
get "largestMinimum"(): long
get "smallestMaximum"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueRange$Type = ($ValueRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueRange_ = $ValueRange$Type;
}}
declare module "packages/java/time/chrono/$Chronology" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$Type} from "packages/java/time/chrono/$ChronoZonedDateTime"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ChronoField, $ChronoField$Type} from "packages/java/time/temporal/$ChronoField"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$Era, $Era$Type} from "packages/java/time/chrono/$Era"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChronoPeriod, $ChronoPeriod$Type} from "packages/java/time/chrono/$ChronoPeriod"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$Type} from "packages/java/time/chrono/$ChronoLocalDateTime"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Chronology extends $Comparable<($Chronology)> {

 "prolepticYear"(arg0: $Era$Type, arg1: integer): integer
 "dateYearDay"(arg0: integer, arg1: integer): $ChronoLocalDate
 "dateYearDay"(arg0: $Era$Type, arg1: integer, arg2: integer): $ChronoLocalDate
 "dateNow"(arg0: $Clock$Type): $ChronoLocalDate
 "dateNow"(arg0: $ZoneId$Type): $ChronoLocalDate
 "dateNow"(): $ChronoLocalDate
 "resolveDate"(arg0: $Map$Type<($TemporalField$Type), (long)>, arg1: $ResolverStyle$Type): $ChronoLocalDate
 "period"(arg0: integer, arg1: integer, arg2: integer): $ChronoPeriod
 "zonedDateTime"(arg0: $Instant$Type, arg1: $ZoneId$Type): $ChronoZonedDateTime<(any)>
 "zonedDateTime"(arg0: $TemporalAccessor$Type): $ChronoZonedDateTime<(any)>
 "dateEpochDay"(arg0: long): $ChronoLocalDate
 "eras"(): $List<($Era)>
 "date"(arg0: $TemporalAccessor$Type): $ChronoLocalDate
 "date"(arg0: $Era$Type, arg1: integer, arg2: integer, arg3: integer): $ChronoLocalDate
 "date"(arg0: integer, arg1: integer, arg2: integer): $ChronoLocalDate
 "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
 "range"(arg0: $ChronoField$Type): $ValueRange
 "getCalendarType"(): string
 "isLeapYear"(arg0: long): boolean
 "epochSecond"(arg0: $Era$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$Type): long
 "epochSecond"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ZoneOffset$Type): long
 "localDateTime"(arg0: $TemporalAccessor$Type): $ChronoLocalDateTime<(any)>
 "eraOf"(arg0: integer): $Era
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $Chronology$Type): integer
 "getId"(): string
}

export namespace $Chronology {
function ofLocale(arg0: $Locale$Type): $Chronology
function getAvailableChronologies(): $Set<($Chronology)>
function of(arg0: string): $Chronology
function from(arg0: $TemporalAccessor$Type): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chronology$Type = ($Chronology);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chronology_ = $Chronology$Type;
}}
declare module "packages/java/time/chrono/$ChronoLocalDate" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Era, $Era$Type} from "packages/java/time/chrono/$Era"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ChronoPeriod, $ChronoPeriod$Type} from "packages/java/time/chrono/$ChronoPeriod"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$Type} from "packages/java/time/chrono/$ChronoLocalDateTime"

export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDate)> {

 "isEqual"(arg0: $ChronoLocalDate$Type): boolean
 "plus"(arg0: long, arg1: $TemporalUnit$Type): $ChronoLocalDate
 "isSupported"(arg0: $TemporalUnit$Type): boolean
 "isSupported"(arg0: $TemporalField$Type): boolean
 "isLeapYear"(): boolean
 "getEra"(): $Era
 "with"(arg0: $TemporalField$Type, arg1: long): $ChronoLocalDate
 "adjustInto"(arg0: $Temporal$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$Type): $ChronoLocalDate
 "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
 "until"(arg0: $ChronoLocalDate$Type): $ChronoPeriod
 "isAfter"(arg0: $ChronoLocalDate$Type): boolean
 "isBefore"(arg0: $ChronoLocalDate$Type): boolean
 "getChronology"(): $Chronology
 "toEpochDay"(): long
 "lengthOfMonth"(): integer
 "lengthOfYear"(): integer
 "atTime"(arg0: $LocalTime$Type): $ChronoLocalDateTime<(any)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDate$Type): integer
 "format"(arg0: $DateTimeFormatter$Type): string
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
 "range"(arg0: $TemporalField$Type): $ValueRange
 "get"(arg0: $TemporalField$Type): integer
 "getLong"(arg0: $TemporalField$Type): long
}

export namespace $ChronoLocalDate {
function timeLineOrder(): $Comparator<($ChronoLocalDate)>
function from(arg0: $TemporalAccessor$Type): $ChronoLocalDate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDate$Type = ($ChronoLocalDate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDate_ = $ChronoLocalDate$Type;
}}
declare module "packages/java/time/format/$DateTimeFormatter" {
import {$FormatStyle, $FormatStyle$Type} from "packages/java/time/format/$FormatStyle"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$DecimalStyle, $DecimalStyle$Type} from "packages/java/time/format/$DecimalStyle"
import {$Appendable, $Appendable$Type} from "packages/java/lang/$Appendable"
import {$Format, $Format$Type} from "packages/java/text/$Format"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Period, $Period$Type} from "packages/java/time/$Period"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"
import {$ResolverStyle, $ResolverStyle$Type} from "packages/java/time/format/$ResolverStyle"

export class $DateTimeFormatter {
static readonly "ISO_LOCAL_DATE": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE": $DateTimeFormatter
static readonly "ISO_DATE": $DateTimeFormatter
static readonly "ISO_LOCAL_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_TIME": $DateTimeFormatter
static readonly "ISO_TIME": $DateTimeFormatter
static readonly "ISO_LOCAL_DATE_TIME": $DateTimeFormatter
static readonly "ISO_OFFSET_DATE_TIME": $DateTimeFormatter
static readonly "ISO_ZONED_DATE_TIME": $DateTimeFormatter
static readonly "ISO_DATE_TIME": $DateTimeFormatter
static readonly "ISO_ORDINAL_DATE": $DateTimeFormatter
static readonly "ISO_WEEK_DATE": $DateTimeFormatter
static readonly "ISO_INSTANT": $DateTimeFormatter
static readonly "BASIC_ISO_DATE": $DateTimeFormatter
static readonly "RFC_1123_DATE_TIME": $DateTimeFormatter


public "parse"(arg0: charseq, arg1: $ParsePosition$Type): $TemporalAccessor
public "parse"(arg0: charseq): $TemporalAccessor
public "parse"<T>(arg0: charseq, arg1: $TemporalQuery$Type<(T)>): T
public static "ofLocalizedDate"(arg0: $FormatStyle$Type): $DateTimeFormatter
public static "ofLocalizedTime"(arg0: $FormatStyle$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$Type): $DateTimeFormatter
public static "ofLocalizedDateTime"(arg0: $FormatStyle$Type, arg1: $FormatStyle$Type): $DateTimeFormatter
public static "parsedExcessDays"(): $TemporalQuery<($Period)>
public static "parsedLeapSecond"(): $TemporalQuery<(boolean)>
public "withLocale"(arg0: $Locale$Type): $DateTimeFormatter
public "localizedBy"(arg0: $Locale$Type): $DateTimeFormatter
public "getDecimalStyle"(): $DecimalStyle
public "withDecimalStyle"(arg0: $DecimalStyle$Type): $DateTimeFormatter
public "withChronology"(arg0: $Chronology$Type): $DateTimeFormatter
public "getResolverStyle"(): $ResolverStyle
public "withResolverStyle"(arg0: $ResolverStyle$Type): $DateTimeFormatter
public "getResolverFields"(): $Set<($TemporalField)>
public "withResolverFields"(arg0: $Set$Type<($TemporalField$Type)>): $DateTimeFormatter
public "withResolverFields"(...arg0: ($TemporalField$Type)[]): $DateTimeFormatter
public "parseBest"(arg0: charseq, ...arg1: ($TemporalQuery$Type<(any)>)[]): $TemporalAccessor
public "parseUnresolved"(arg0: charseq, arg1: $ParsePosition$Type): $TemporalAccessor
public "toFormat"(): $Format
public "toFormat"(arg0: $TemporalQuery$Type<(any)>): $Format
public "getZone"(): $ZoneId
public "withZone"(arg0: $ZoneId$Type): $DateTimeFormatter
public "getChronology"(): $Chronology
public "toString"(): string
public "format"(arg0: $TemporalAccessor$Type): string
public static "ofPattern"(arg0: string, arg1: $Locale$Type): $DateTimeFormatter
public static "ofPattern"(arg0: string): $DateTimeFormatter
public "getLocale"(): $Locale
public "formatTo"(arg0: $TemporalAccessor$Type, arg1: $Appendable$Type): void
get "decimalStyle"(): $DecimalStyle
get "resolverStyle"(): $ResolverStyle
get "resolverFields"(): $Set<($TemporalField)>
get "zone"(): $ZoneId
get "chronology"(): $Chronology
get "locale"(): $Locale
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateTimeFormatter$Type = ($DateTimeFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateTimeFormatter_ = $DateTimeFormatter$Type;
}}
declare module "packages/java/time/chrono/$ChronoLocalDateTime" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$Type} from "packages/java/time/chrono/$ChronoZonedDateTime"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"

export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<($ChronoLocalDateTime<(any)>)> {

 "isEqual"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
 "toEpochSecond"(arg0: $ZoneOffset$Type): long
 "toInstant"(arg0: $ZoneOffset$Type): $Instant
 "plus"(arg0: long, arg1: $TemporalUnit$Type): $ChronoLocalDateTime<(D)>
 "isSupported"(arg0: $TemporalField$Type): boolean
 "isSupported"(arg0: $TemporalUnit$Type): boolean
 "with"(arg0: $TemporalField$Type, arg1: long): $ChronoLocalDateTime<(D)>
 "adjustInto"(arg0: $Temporal$Type): $Temporal
 "isAfter"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoLocalDateTime$Type<(any)>): boolean
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "atZone"(arg0: $ZoneId$Type): $ChronoZonedDateTime<(D)>
 "getChronology"(): $Chronology
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoLocalDateTime$Type<(any)>): integer
 "format"(arg0: $DateTimeFormatter$Type): string
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
 "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
 "range"(arg0: $TemporalField$Type): $ValueRange
 "get"(arg0: $TemporalField$Type): integer
 "getLong"(arg0: $TemporalField$Type): long
}

export namespace $ChronoLocalDateTime {
function timeLineOrder(): $Comparator<($ChronoLocalDateTime<(any)>)>
function from(arg0: $TemporalAccessor$Type): $ChronoLocalDateTime<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoLocalDateTime$Type<D> = ($ChronoLocalDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoLocalDateTime_<D> = $ChronoLocalDateTime$Type<(D)>;
}}
declare module "packages/java/time/$Period" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$IsoChronology, $IsoChronology$Type} from "packages/java/time/chrono/$IsoChronology"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChronoPeriod, $ChronoPeriod$Type} from "packages/java/time/chrono/$ChronoPeriod"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"

export class $Period implements $ChronoPeriod, $Serializable {
static readonly "ZERO": $Period


public static "parse"(arg0: charseq): $Period
public static "between"(arg0: $LocalDate$Type, arg1: $LocalDate$Type): $Period
public "isNegative"(): boolean
public "plus"(arg0: $TemporalAmount$Type): $Period
public "isZero"(): boolean
public "getMonths"(): integer
public "addTo"(arg0: $Temporal$Type): $Temporal
public "plusDays"(arg0: long): $Period
public "plusYears"(arg0: long): $Period
public "plusMonths"(arg0: long): $Period
public "subtractFrom"(arg0: $Temporal$Type): $Temporal
public "minusDays"(arg0: long): $Period
public "minusYears"(arg0: long): $Period
public "minusMonths"(arg0: long): $Period
public "getChronology"(): $IsoChronology
public "toTotalMonths"(): long
public "getDays"(): integer
public "getUnits"(): $List<($TemporalUnit)>
public "multipliedBy"(arg0: integer): $Period
public static "ofDays"(arg0: integer): $Period
public "get"(arg0: $TemporalUnit$Type): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "from"(arg0: $TemporalAmount$Type): $Period
public "getYears"(): integer
public static "ofYears"(arg0: integer): $Period
public static "ofMonths"(arg0: integer): $Period
public static "ofWeeks"(arg0: integer): $Period
public "withYears"(arg0: integer): $Period
public "withMonths"(arg0: integer): $Period
public "withDays"(arg0: integer): $Period
public static "between"(arg0: $ChronoLocalDate$Type, arg1: $ChronoLocalDate$Type): $ChronoPeriod
get "negative"(): boolean
get "zero"(): boolean
get "months"(): integer
get "chronology"(): $IsoChronology
get "days"(): integer
get "units"(): $List<($TemporalUnit)>
get "years"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Period$Type = ($Period);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Period_ = $Period$Type;
}}
declare module "packages/java/time/temporal/$TemporalAdjuster" {
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"

export interface $TemporalAdjuster {

 "adjustInto"(arg0: $Temporal$Type): $Temporal

(arg0: $Temporal$Type): $Temporal
}

export namespace $TemporalAdjuster {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalAdjuster$Type = ($TemporalAdjuster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalAdjuster_ = $TemporalAdjuster$Type;
}}
declare module "packages/java/time/zone/$ZoneRules" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ZoneOffsetTransitionRule, $ZoneOffsetTransitionRule$Type} from "packages/java/time/zone/$ZoneOffsetTransitionRule"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$ZoneOffsetTransition, $ZoneOffsetTransition$Type} from "packages/java/time/zone/$ZoneOffsetTransition"

export class $ZoneRules implements $Serializable {


public "getValidOffsets"(arg0: $LocalDateTime$Type): $List<($ZoneOffset)>
public "getDaylightSavings"(arg0: $Instant$Type): $Duration
public "isDaylightSavings"(arg0: $Instant$Type): boolean
public "isValidOffset"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type): boolean
public "nextTransition"(arg0: $Instant$Type): $ZoneOffsetTransition
public "previousTransition"(arg0: $Instant$Type): $ZoneOffsetTransition
public "getTransitions"(): $List<($ZoneOffsetTransition)>
public "getTransitionRules"(): $List<($ZoneOffsetTransitionRule)>
public "getTransition"(arg0: $LocalDateTime$Type): $ZoneOffsetTransition
public "isFixedOffset"(): boolean
public "getStandardOffset"(arg0: $Instant$Type): $ZoneOffset
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ZoneOffset$Type, arg1: $ZoneOffset$Type, arg2: $List$Type<($ZoneOffsetTransition$Type)>, arg3: $List$Type<($ZoneOffsetTransition$Type)>, arg4: $List$Type<($ZoneOffsetTransitionRule$Type)>): $ZoneRules
public static "of"(arg0: $ZoneOffset$Type): $ZoneRules
public "getOffset"(arg0: $LocalDateTime$Type): $ZoneOffset
public "getOffset"(arg0: $Instant$Type): $ZoneOffset
get "transitions"(): $List<($ZoneOffsetTransition)>
get "transitionRules"(): $List<($ZoneOffsetTransitionRule)>
get "fixedOffset"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneRules$Type = ($ZoneRules);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoneRules_ = $ZoneRules$Type;
}}
declare module "packages/java/time/chrono/$ChronoZonedDateTime" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$Type} from "packages/java/time/chrono/$ChronoLocalDateTime"

export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<($ChronoZonedDateTime<(any)>)> {

 "isEqual"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
 "toEpochSecond"(): long
 "toInstant"(): $Instant
 "plus"(arg0: $TemporalAmount$Type): $ChronoZonedDateTime<(D)>
 "range"(arg0: $TemporalField$Type): $ValueRange
 "isSupported"(arg0: $TemporalUnit$Type): boolean
 "isSupported"(arg0: $TemporalField$Type): boolean
 "getZone"(): $ZoneId
 "toLocalDateTime"(): $ChronoLocalDateTime<(D)>
 "with"(arg0: $TemporalField$Type, arg1: long): $ChronoZonedDateTime<(D)>
 "minus"(arg0: $TemporalAmount$Type): $ChronoZonedDateTime<(D)>
 "minus"(arg0: long, arg1: $TemporalUnit$Type): $ChronoZonedDateTime<(D)>
 "isAfter"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
 "isBefore"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
 "toLocalDate"(): D
 "toLocalTime"(): $LocalTime
 "getChronology"(): $Chronology
 "withZoneSameInstant"(arg0: $ZoneId$Type): $ChronoZonedDateTime<(D)>
 "withZoneSameLocal"(arg0: $ZoneId$Type): $ChronoZonedDateTime<(D)>
 "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "withEarlierOffsetAtOverlap"(): $ChronoZonedDateTime<(D)>
 "get"(arg0: $TemporalField$Type): integer
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "compareTo"(arg0: $ChronoZonedDateTime$Type<(any)>): integer
 "getLong"(arg0: $TemporalField$Type): long
 "format"(arg0: $DateTimeFormatter$Type): string
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
 "getOffset"(): $ZoneOffset
 "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
}

export namespace $ChronoZonedDateTime {
function timeLineOrder(): $Comparator<($ChronoZonedDateTime<(any)>)>
function from(arg0: $TemporalAccessor$Type): $ChronoZonedDateTime<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoZonedDateTime$Type<D> = ($ChronoZonedDateTime<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoZonedDateTime_<D> = $ChronoZonedDateTime$Type<(D)>;
}}
declare module "packages/java/time/format/$DecimalStyle" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $DecimalStyle {
static readonly "STANDARD": $DecimalStyle


public "getPositiveSign"(): character
public "getNegativeSign"(): character
public static "ofDefaultLocale"(): $DecimalStyle
public "withZeroDigit"(arg0: character): $DecimalStyle
public "withPositiveSign"(arg0: character): $DecimalStyle
public "withNegativeSign"(arg0: character): $DecimalStyle
public "withDecimalSeparator"(arg0: character): $DecimalStyle
public static "getAvailableLocales"(): $Set<($Locale)>
public "getZeroDigit"(): character
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Locale$Type): $DecimalStyle
public "getDecimalSeparator"(): character
get "positiveSign"(): character
get "negativeSign"(): character
get "availableLocales"(): $Set<($Locale)>
get "zeroDigit"(): character
get "decimalSeparator"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalStyle$Type = ($DecimalStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalStyle_ = $DecimalStyle$Type;
}}
declare module "packages/java/time/chrono/$Era" {
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export interface $Era extends $TemporalAccessor, $TemporalAdjuster {

 "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
 "range"(arg0: $TemporalField$Type): $ValueRange
 "isSupported"(arg0: $TemporalField$Type): boolean
 "adjustInto"(arg0: $Temporal$Type): $Temporal
 "get"(arg0: $TemporalField$Type): integer
 "getLong"(arg0: $TemporalField$Type): long
 "getValue"(): integer
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R

(arg0: $TextStyle$Type, arg1: $Locale$Type): string
}

export namespace $Era {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Era$Type = ($Era);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Era_ = $Era$Type;
}}
declare module "packages/java/time/chrono/$ChronoPeriod" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChronoLocalDate, $ChronoLocalDate$Type} from "packages/java/time/chrono/$ChronoLocalDate"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"

export interface $ChronoPeriod extends $TemporalAmount {

 "isNegative"(): boolean
 "plus"(arg0: $TemporalAmount$Type): $ChronoPeriod
 "isZero"(): boolean
 "addTo"(arg0: $Temporal$Type): $Temporal
 "minus"(arg0: $TemporalAmount$Type): $ChronoPeriod
 "subtractFrom"(arg0: $Temporal$Type): $Temporal
 "normalized"(): $ChronoPeriod
 "getChronology"(): $Chronology
 "getUnits"(): $List<($TemporalUnit)>
 "negated"(): $ChronoPeriod
 "multipliedBy"(arg0: integer): $ChronoPeriod
 "get"(arg0: $TemporalUnit$Type): long
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
}

export namespace $ChronoPeriod {
function between(arg0: $ChronoLocalDate$Type, arg1: $ChronoLocalDate$Type): $ChronoPeriod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoPeriod$Type = ($ChronoPeriod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoPeriod_ = $ChronoPeriod$Type;
}}
declare module "packages/java/time/format/$TextStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextStyle extends $Enum<($TextStyle)> {
static readonly "FULL": $TextStyle
static readonly "FULL_STANDALONE": $TextStyle
static readonly "SHORT": $TextStyle
static readonly "SHORT_STANDALONE": $TextStyle
static readonly "NARROW": $TextStyle
static readonly "NARROW_STANDALONE": $TextStyle


public "asStandalone"(): $TextStyle
public "asNormal"(): $TextStyle
public "isStandalone"(): boolean
public static "values"(): ($TextStyle)[]
public static "valueOf"(arg0: string): $TextStyle
get "standalone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextStyle$Type = (("short_standalone") | ("narrow_standalone") | ("short") | ("narrow") | ("full_standalone") | ("full")) | ($TextStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextStyle_ = $TextStyle$Type;
}}
declare module "packages/java/time/temporal/$ChronoUnit" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export class $ChronoUnit extends $Enum<($ChronoUnit)> implements $TemporalUnit {
static readonly "NANOS": $ChronoUnit
static readonly "MICROS": $ChronoUnit
static readonly "MILLIS": $ChronoUnit
static readonly "SECONDS": $ChronoUnit
static readonly "MINUTES": $ChronoUnit
static readonly "HOURS": $ChronoUnit
static readonly "HALF_DAYS": $ChronoUnit
static readonly "DAYS": $ChronoUnit
static readonly "WEEKS": $ChronoUnit
static readonly "MONTHS": $ChronoUnit
static readonly "YEARS": $ChronoUnit
static readonly "DECADES": $ChronoUnit
static readonly "CENTURIES": $ChronoUnit
static readonly "MILLENNIA": $ChronoUnit
static readonly "ERAS": $ChronoUnit
static readonly "FOREVER": $ChronoUnit


public "between"(arg0: $Temporal$Type, arg1: $Temporal$Type): long
public "isDateBased"(): boolean
public "isTimeBased"(): boolean
public "isSupportedBy"(arg0: $Temporal$Type): boolean
public "addTo"<R extends $Temporal>(arg0: R, arg1: long): R
public "getDuration"(): $Duration
public "isDurationEstimated"(): boolean
public "toString"(): string
public static "values"(): ($ChronoUnit)[]
public static "valueOf"(arg0: string): $ChronoUnit
get "dateBased"(): boolean
get "timeBased"(): boolean
get "duration"(): $Duration
get "durationEstimated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChronoUnit$Type = (("centuries") | ("hours") | ("weeks") | ("months") | ("nanos") | ("minutes") | ("millennia") | ("years") | ("eras") | ("seconds") | ("micros") | ("days") | ("decades") | ("half_days") | ("millis") | ("forever")) | ($ChronoUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChronoUnit_ = $ChronoUnit$Type;
}}
declare module "packages/java/time/$LocalTime" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$OffsetTime, $OffsetTime$Type} from "packages/java/time/$OffsetTime"

export class $LocalTime implements $Temporal, $TemporalAdjuster, $Comparable<($LocalTime)>, $Serializable {
static readonly "MIN": $LocalTime
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime
static readonly "NOON": $LocalTime


public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $LocalTime
public static "parse"(arg0: charseq): $LocalTime
public "toEpochSecond"(arg0: $LocalDate$Type, arg1: $ZoneOffset$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $LocalTime
public "getNano"(): integer
public "plus"(arg0: long, arg1: $TemporalUnit$Type): $LocalTime
public static "now"(arg0: $ZoneId$Type): $LocalTime
public static "now"(arg0: $Clock$Type): $LocalTime
public static "now"(): $LocalTime
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public static "ofNanoOfDay"(arg0: long): $LocalTime
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "withHour"(arg0: integer): $LocalTime
public "withMinute"(arg0: integer): $LocalTime
public "withSecond"(arg0: integer): $LocalTime
public "withNano"(arg0: integer): $LocalTime
public "truncatedTo"(arg0: $TemporalUnit$Type): $LocalTime
public "plusNanos"(arg0: long): $LocalTime
public "plusSeconds"(arg0: long): $LocalTime
public "plusMinutes"(arg0: long): $LocalTime
public "plusHours"(arg0: long): $LocalTime
public "minus"(arg0: long, arg1: $TemporalUnit$Type): $LocalTime
public "minus"(arg0: $TemporalAmount$Type): $LocalTime
public "toNanoOfDay"(): long
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "isAfter"(arg0: $LocalTime$Type): boolean
public "isBefore"(arg0: $LocalTime$Type): boolean
public "minusHours"(arg0: long): $LocalTime
public "minusMinutes"(arg0: long): $LocalTime
public "minusSeconds"(arg0: long): $LocalTime
public "minusNanos"(arg0: long): $LocalTime
public "atOffset"(arg0: $ZoneOffset$Type): $OffsetTime
public "toSecondOfDay"(): integer
public static "ofSecondOfDay"(arg0: long): $LocalTime
public "atDate"(arg0: $LocalDate$Type): $LocalDateTime
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $LocalTime$Type): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer): $LocalTime
public static "from"(arg0: $TemporalAccessor$Type): $LocalTime
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "nano"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalTime$Type = ($LocalTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalTime_ = $LocalTime$Type;
}}
declare module "packages/java/time/$DayOfWeek" {
import {$TextStyle, $TextStyle$Type} from "packages/java/time/format/$TextStyle"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $DayOfWeek extends $Enum<($DayOfWeek)> implements $TemporalAccessor, $TemporalAdjuster {
static readonly "MONDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "WEDNESDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "FRIDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek


public "plus"(arg0: long): $DayOfWeek
public "getDisplayName"(arg0: $TextStyle$Type, arg1: $Locale$Type): string
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalField$Type): boolean
public "adjustInto"(arg0: $Temporal$Type): $Temporal
public "minus"(arg0: long): $DayOfWeek
public "get"(arg0: $TemporalField$Type): integer
public static "values"(): ($DayOfWeek)[]
public "getLong"(arg0: $TemporalField$Type): long
public static "valueOf"(arg0: string): $DayOfWeek
public "getValue"(): integer
public static "of"(arg0: integer): $DayOfWeek
public static "from"(arg0: $TemporalAccessor$Type): $DayOfWeek
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayOfWeek$Type = (("sunday") | ("saturday") | ("tuesday") | ("wednesday") | ("thursday") | ("friday") | ("monday")) | ($DayOfWeek);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DayOfWeek_ = $DayOfWeek$Type;
}}
declare module "packages/java/time/$ZonedDateTime" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$Type} from "packages/java/time/chrono/$ChronoZonedDateTime"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$LocalDate, $LocalDate$Type} from "packages/java/time/$LocalDate"
import {$ZoneOffset, $ZoneOffset$Type} from "packages/java/time/$ZoneOffset"
import {$DayOfWeek, $DayOfWeek$Type} from "packages/java/time/$DayOfWeek"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$LocalDateTime, $LocalDateTime$Type} from "packages/java/time/$LocalDateTime"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"
import {$Chronology, $Chronology$Type} from "packages/java/time/chrono/$Chronology"
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$Month, $Month$Type} from "packages/java/time/$Month"
import {$DateTimeFormatter, $DateTimeFormatter$Type} from "packages/java/time/format/$DateTimeFormatter"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Temporal, $Temporal$Type} from "packages/java/time/temporal/$Temporal"
import {$LocalTime, $LocalTime$Type} from "packages/java/time/$LocalTime"
import {$OffsetDateTime, $OffsetDateTime$Type} from "packages/java/time/$OffsetDateTime"

export class $ZonedDateTime implements $Temporal, $ChronoZonedDateTime<($LocalDate)>, $Serializable {


public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$Type): $ZonedDateTime
public static "parse"(arg0: charseq): $ZonedDateTime
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$Type, arg1: $ZoneId$Type): $ZonedDateTime
public static "ofInstant"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type, arg2: $ZoneId$Type): $ZonedDateTime
public "getNano"(): integer
public "plus"(arg0: $TemporalAmount$Type): $ZonedDateTime
public static "now"(): $ZonedDateTime
public static "now"(arg0: $ZoneId$Type): $ZonedDateTime
public static "now"(arg0: $Clock$Type): $ZonedDateTime
public "range"(arg0: $TemporalField$Type): $ValueRange
public "isSupported"(arg0: $TemporalUnit$Type): boolean
public "isSupported"(arg0: $TemporalField$Type): boolean
public "getZone"(): $ZoneId
public "getMonth"(): $Month
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "toLocalDateTime"(): $LocalDateTime
public "withYear"(arg0: integer): $ZonedDateTime
public "withMonth"(arg0: integer): $ZonedDateTime
public "withDayOfMonth"(arg0: integer): $ZonedDateTime
public "withDayOfYear"(arg0: integer): $ZonedDateTime
public "withHour"(arg0: integer): $ZonedDateTime
public "withMinute"(arg0: integer): $ZonedDateTime
public "withSecond"(arg0: integer): $ZonedDateTime
public "withNano"(arg0: integer): $ZonedDateTime
public "truncatedTo"(arg0: $TemporalUnit$Type): $ZonedDateTime
public "plusNanos"(arg0: long): $ZonedDateTime
public "plusDays"(arg0: long): $ZonedDateTime
public "plusSeconds"(arg0: long): $ZonedDateTime
public "plusMinutes"(arg0: long): $ZonedDateTime
public "plusHours"(arg0: long): $ZonedDateTime
public "plusYears"(arg0: long): $ZonedDateTime
public "plusMonths"(arg0: long): $ZonedDateTime
public "plusWeeks"(arg0: long): $ZonedDateTime
public "minus"(arg0: $TemporalAmount$Type): $ZonedDateTime
public "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
public "minusDays"(arg0: long): $ZonedDateTime
public "toLocalTime"(): $LocalTime
public "minusYears"(arg0: long): $ZonedDateTime
public "minusMonths"(arg0: long): $ZonedDateTime
public "minusWeeks"(arg0: long): $ZonedDateTime
public "minusHours"(arg0: long): $ZonedDateTime
public "minusMinutes"(arg0: long): $ZonedDateTime
public "minusSeconds"(arg0: long): $ZonedDateTime
public "minusNanos"(arg0: long): $ZonedDateTime
public static "ofLocal"(arg0: $LocalDateTime$Type, arg1: $ZoneId$Type, arg2: $ZoneOffset$Type): $ZonedDateTime
public "withZoneSameInstant"(arg0: $ZoneId$Type): $ZonedDateTime
public "toOffsetDateTime"(): $OffsetDateTime
public "withZoneSameLocal"(arg0: $ZoneId$Type): $ZonedDateTime
public static "ofStrict"(arg0: $LocalDateTime$Type, arg1: $ZoneOffset$Type, arg2: $ZoneId$Type): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "get"(arg0: $TemporalField$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLong"(arg0: $TemporalField$Type): long
public "format"(arg0: $DateTimeFormatter$Type): string
public static "of"(arg0: $LocalDateTime$Type, arg1: $ZoneId$Type): $ZonedDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneId$Type): $ZonedDateTime
public static "of"(arg0: $LocalDate$Type, arg1: $LocalTime$Type, arg2: $ZoneId$Type): $ZonedDateTime
public static "from"(arg0: $TemporalAccessor$Type): $ZonedDateTime
public "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "isEqual"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
public "toEpochSecond"(): long
public "toInstant"(): $Instant
public "isAfter"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
public "isBefore"(arg0: $ChronoZonedDateTime$Type<(any)>): boolean
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(any)>)>
public "compareTo"(arg0: $ChronoZonedDateTime$Type<(any)>): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "nano"(): integer
get "zone"(): $ZoneId
get "month"(): $Month
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "offset"(): $ZoneOffset
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZonedDateTime$Type = ($ZonedDateTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZonedDateTime_ = $ZonedDateTime$Type;
}}
declare module "packages/java/time/format/$FormatStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FormatStyle extends $Enum<($FormatStyle)> {
static readonly "FULL": $FormatStyle
static readonly "LONG": $FormatStyle
static readonly "MEDIUM": $FormatStyle
static readonly "SHORT": $FormatStyle


public static "values"(): ($FormatStyle)[]
public static "valueOf"(arg0: string): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatStyle$Type = (("short") | ("medium") | ("long") | ("full")) | ($FormatStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatStyle_ = $FormatStyle$Type;
}}
declare module "packages/java/time/$InstantSource" {
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ZoneId, $ZoneId$Type} from "packages/java/time/$ZoneId"
import {$Clock, $Clock$Type} from "packages/java/time/$Clock"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export interface $InstantSource {

 "instant"(): $Instant
 "withZone"(arg0: $ZoneId$Type): $Clock
 "millis"(): long

(): $Instant
}

export namespace $InstantSource {
function tick(arg0: $InstantSource$Type, arg1: $Duration$Type): $InstantSource
function offset(arg0: $InstantSource$Type, arg1: $Duration$Type): $InstantSource
function system(): $InstantSource
function fixed(arg0: $Instant$Type): $InstantSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantSource$Type = ($InstantSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstantSource_ = $InstantSource$Type;
}}
declare module "packages/java/time/temporal/$Temporal" {
import {$TemporalAmount, $TemporalAmount$Type} from "packages/java/time/temporal/$TemporalAmount"
import {$TemporalQuery, $TemporalQuery$Type} from "packages/java/time/temporal/$TemporalQuery"
import {$TemporalField, $TemporalField$Type} from "packages/java/time/temporal/$TemporalField"
import {$TemporalAdjuster, $TemporalAdjuster$Type} from "packages/java/time/temporal/$TemporalAdjuster"
import {$TemporalUnit, $TemporalUnit$Type} from "packages/java/time/temporal/$TemporalUnit"
import {$TemporalAccessor, $TemporalAccessor$Type} from "packages/java/time/temporal/$TemporalAccessor"
import {$ValueRange, $ValueRange$Type} from "packages/java/time/temporal/$ValueRange"

export interface $Temporal extends $TemporalAccessor {

 "plus"(arg0: long, arg1: $TemporalUnit$Type): $Temporal
 "plus"(arg0: $TemporalAmount$Type): $Temporal
 "isSupported"(arg0: $TemporalUnit$Type): boolean
 "with"(arg0: $TemporalField$Type, arg1: long): $Temporal
 "with"(arg0: $TemporalAdjuster$Type): $Temporal
 "minus"(arg0: long, arg1: $TemporalUnit$Type): $Temporal
 "minus"(arg0: $TemporalAmount$Type): $Temporal
 "until"(arg0: $Temporal$Type, arg1: $TemporalUnit$Type): long
 "range"(arg0: $TemporalField$Type): $ValueRange
 "isSupported"(arg0: $TemporalField$Type): boolean
 "get"(arg0: $TemporalField$Type): integer
 "getLong"(arg0: $TemporalField$Type): long
 "query"<R>(arg0: $TemporalQuery$Type<(R)>): R
}

export namespace $Temporal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temporal$Type = ($Temporal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Temporal_ = $Temporal$Type;
}}
