declare module "packages/java/net/$Proxy" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$Proxy$Type, $Proxy$Type$Type} from "packages/java/net/$Proxy$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(arg0: $Proxy$Type$Type, arg1: $SocketAddress$Type)

public "type"(): $Proxy$Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$Type;
}}
declare module "packages/java/net/$DatagramSocketImpl" {
import {$SocketOptions, $SocketOptions$Type} from "packages/java/net/$SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocketImpl implements $SocketOptions {

constructor()

public "getOption"(arg0: integer): any
public "setOption"(arg0: integer, arg1: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocketImpl$Type = ($DatagramSocketImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramSocketImpl_ = $DatagramSocketImpl$Type;
}}
declare module "packages/java/net/$SocketImpl" {
import {$SocketOptions, $SocketOptions$Type} from "packages/java/net/$SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketImpl implements $SocketOptions {

constructor()

public "toString"(): string
public "getOption"(arg0: integer): any
public "setOption"(arg0: integer, arg1: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImpl$Type = ($SocketImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImpl_ = $SocketImpl$Type;
}}
declare module "packages/java/net/$SocketAddress" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketAddress implements $Serializable {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketAddress$Type = ($SocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketAddress_ = $SocketAddress$Type;
}}
declare module "packages/java/net/$InetSocketAddress" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetSocketAddress extends $SocketAddress {

constructor(arg0: $InetAddress$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: string, arg1: integer)

public "getHostString"(): string
public static "createUnresolved"(arg0: string, arg1: integer): $InetSocketAddress
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getPort"(): integer
public "isUnresolved"(): boolean
public "getHostName"(): string
get "hostString"(): string
get "address"(): $InetAddress
get "port"(): integer
get "unresolved"(): boolean
get "hostName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetSocketAddress$Type = ($InetSocketAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetSocketAddress_ = $InetSocketAddress$Type;
}}
declare module "packages/java/net/$DatagramPacket" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramPacket {

constructor(arg0: (byte)[], arg1: integer, arg2: $InetAddress$Type, arg3: integer)
constructor(arg0: (byte)[], arg1: integer, arg2: $SocketAddress$Type)
constructor(arg0: (byte)[], arg1: integer, arg2: integer)
constructor(arg0: (byte)[], arg1: integer)
constructor(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $InetAddress$Type, arg4: integer)
constructor(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $SocketAddress$Type)

public "getData"(): (byte)[]
public "getLength"(): integer
public "setLength"(arg0: integer): void
public "getAddress"(): $InetAddress
public "getPort"(): integer
public "getOffset"(): integer
public "setAddress"(arg0: $InetAddress$Type): void
public "setSocketAddress"(arg0: $SocketAddress$Type): void
public "getSocketAddress"(): $SocketAddress
public "setData"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "setData"(arg0: (byte)[]): void
public "setPort"(arg0: integer): void
get "data"(): (byte)[]
get "length"(): integer
set "length"(value: integer)
get "address"(): $InetAddress
get "port"(): integer
get "offset"(): integer
set "address"(value: $InetAddress$Type)
set "socketAddress"(value: $SocketAddress$Type)
get "socketAddress"(): $SocketAddress
set "data"(value: (byte)[])
set "port"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramPacket$Type = ($DatagramPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramPacket_ = $DatagramPacket$Type;
}}
declare module "packages/java/net/$URLStreamHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLStreamHandler {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandler$Type = ($URLStreamHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandler_ = $URLStreamHandler$Type;
}}
declare module "packages/java/net/$URLStreamHandlerFactory" {
import {$URLStreamHandler, $URLStreamHandler$Type} from "packages/java/net/$URLStreamHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $URLStreamHandlerFactory {

 "createURLStreamHandler"(arg0: string): $URLStreamHandler

(arg0: string): $URLStreamHandler
}

export namespace $URLStreamHandlerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLStreamHandlerFactory$Type = ($URLStreamHandlerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLStreamHandlerFactory_ = $URLStreamHandlerFactory$Type;
}}
declare module "packages/java/net/$DatagramSocketImplFactory" {
import {$DatagramSocketImpl, $DatagramSocketImpl$Type} from "packages/java/net/$DatagramSocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DatagramSocketImplFactory {

 "createDatagramSocketImpl"(): $DatagramSocketImpl

(): $DatagramSocketImpl
}

export namespace $DatagramSocketImplFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocketImplFactory$Type = ($DatagramSocketImplFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramSocketImplFactory_ = $DatagramSocketImplFactory$Type;
}}
declare module "packages/java/net/$SocketOption" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOption<T> {

 "name"(): string
 "type"(): $Class<(T)>
}

export namespace $SocketOption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketOption$Type<T> = ($SocketOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketOption_<T> = $SocketOption$Type<(T)>;
}}
declare module "packages/java/net/$ContentHandlerFactory" {
import {$ContentHandler, $ContentHandler$Type} from "packages/java/net/$ContentHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ContentHandlerFactory {

 "createContentHandler"(arg0: string): $ContentHandler

(arg0: string): $ContentHandler
}

export namespace $ContentHandlerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandlerFactory$Type = ($ContentHandlerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandlerFactory_ = $ContentHandlerFactory$Type;
}}
declare module "packages/java/net/$NetworkInterface" {
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InterfaceAddress, $InterfaceAddress$Type} from "packages/java/net/$InterfaceAddress"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkInterface {


public static "networkInterfaces"(): $Stream<($NetworkInterface)>
public "inetAddresses"(): $Stream<($InetAddress)>
public "getDisplayName"(): string
public "isVirtual"(): boolean
public "getInterfaceAddresses"(): $List<($InterfaceAddress)>
public "getSubInterfaces"(): $Enumeration<($NetworkInterface)>
public "subInterfaces"(): $Stream<($NetworkInterface)>
public static "getByIndex"(arg0: integer): $NetworkInterface
public "isPointToPoint"(): boolean
public "supportsMulticast"(): boolean
public "getMTU"(): integer
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getParent"(): $NetworkInterface
public static "getByName"(arg0: string): $NetworkInterface
public "getIndex"(): integer
public static "getNetworkInterfaces"(): $Enumeration<($NetworkInterface)>
public "getInetAddresses"(): $Enumeration<($InetAddress)>
public static "getByInetAddress"(arg0: $InetAddress$Type): $NetworkInterface
public "getHardwareAddress"(): (byte)[]
public "isLoopback"(): boolean
public "isUp"(): boolean
get "displayName"(): string
get "virtual"(): boolean
get "interfaceAddresses"(): $List<($InterfaceAddress)>
get "pointToPoint"(): boolean
get "mTU"(): integer
get "name"(): string
get "parent"(): $NetworkInterface
get "index"(): integer
get "hardwareAddress"(): (byte)[]
get "loopback"(): boolean
get "up"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInterface$Type = ($NetworkInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInterface_ = $NetworkInterface$Type;
}}
declare module "packages/java/net/$ServerSocket" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$SocketImplFactory, $SocketImplFactory$Type} from "packages/java/net/$SocketImplFactory"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$ServerSocketChannel, $ServerSocketChannel$Type} from "packages/java/nio/channels/$ServerSocketChannel"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Socket, $Socket$Type} from "packages/java/net/$Socket"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"
import {$SocketOption, $SocketOption$Type} from "packages/java/net/$SocketOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocket implements $Closeable {

constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: $InetAddress$Type)

public "getChannel"(): $ServerSocketChannel
public "bind"(arg0: $SocketAddress$Type, arg1: integer): void
public "bind"(arg0: $SocketAddress$Type): void
public "getOption"<T>(arg0: $SocketOption$Type<(T)>): T
public "setOption"<T>(arg0: $SocketOption$Type<(T)>, arg1: T): $ServerSocket
public "toString"(): string
public "accept"(): $Socket
public "close"(): void
public "getInetAddress"(): $InetAddress
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
/**
 * 
 * @deprecated
 */
public static "setSocketFactory"(arg0: $SocketImplFactory$Type): void
public "getReceiveBufferSize"(): integer
public "getSoTimeout"(): integer
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "setReceiveBufferSize"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "setSoTimeout"(arg0: integer): void
public "isClosed"(): boolean
public "isBound"(): boolean
get "channel"(): $ServerSocketChannel
get "inetAddress"(): $InetAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
set "socketFactory"(value: $SocketImplFactory$Type)
get "receiveBufferSize"(): integer
get "soTimeout"(): integer
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "soTimeout"(value: integer)
get "closed"(): boolean
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSocket$Type = ($ServerSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSocket_ = $ServerSocket$Type;
}}
declare module "packages/java/net/$DatagramSocket" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$DatagramChannel, $DatagramChannel$Type} from "packages/java/nio/channels/$DatagramChannel"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DatagramSocketImplFactory, $DatagramSocketImplFactory$Type} from "packages/java/net/$DatagramSocketImplFactory"
import {$NetworkInterface, $NetworkInterface$Type} from "packages/java/net/$NetworkInterface"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"
import {$SocketOption, $SocketOption$Type} from "packages/java/net/$SocketOption"
import {$DatagramPacket, $DatagramPacket$Type} from "packages/java/net/$DatagramPacket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocket implements $Closeable {

constructor(arg0: integer, arg1: $InetAddress$Type)
constructor()
constructor(arg0: $SocketAddress$Type)
constructor(arg0: integer)

public "receive"(arg0: $DatagramPacket$Type): void
public "getChannel"(): $DatagramChannel
public "bind"(arg0: $SocketAddress$Type): void
public "getOption"<T>(arg0: $SocketOption$Type<(T)>): T
public "setOption"<T>(arg0: $SocketOption$Type<(T)>, arg1: T): $DatagramSocket
public "connect"(arg0: $InetAddress$Type, arg1: integer): void
public "connect"(arg0: $SocketAddress$Type): void
public "close"(): void
public "getPort"(): integer
public "getLocalAddress"(): $InetAddress
public "getInetAddress"(): $InetAddress
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getReuseAddress"(): boolean
public "disconnect"(): void
public "getBroadcast"(): boolean
public "setBroadcast"(arg0: boolean): void
public "joinGroup"(arg0: $SocketAddress$Type, arg1: $NetworkInterface$Type): void
public "leaveGroup"(arg0: $SocketAddress$Type, arg1: $NetworkInterface$Type): void
/**
 * 
 * @deprecated
 */
public static "setDatagramSocketImplFactory"(arg0: $DatagramSocketImplFactory$Type): void
public "isConnected"(): boolean
public "getReceiveBufferSize"(): integer
public "getSendBufferSize"(): integer
public "getSoTimeout"(): integer
public "getTrafficClass"(): integer
public "setReceiveBufferSize"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "setSendBufferSize"(arg0: integer): void
public "setSoTimeout"(arg0: integer): void
public "setTrafficClass"(arg0: integer): void
public "send"(arg0: $DatagramPacket$Type): void
public "isClosed"(): boolean
public "isBound"(): boolean
get "channel"(): $DatagramChannel
get "port"(): integer
get "localAddress"(): $InetAddress
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "reuseAddress"(): boolean
get "broadcast"(): boolean
set "broadcast"(value: boolean)
set "datagramSocketImplFactory"(value: $DatagramSocketImplFactory$Type)
get "connected"(): boolean
get "receiveBufferSize"(): integer
get "sendBufferSize"(): integer
get "soTimeout"(): integer
get "trafficClass"(): integer
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "trafficClass"(value: integer)
get "closed"(): boolean
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatagramSocket$Type = ($DatagramSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatagramSocket_ = $DatagramSocket$Type;
}}
declare module "packages/java/net/$Proxy$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy$Type extends $Enum<($Proxy$Type)> {
static readonly "DIRECT": $Proxy$Type
static readonly "HTTP": $Proxy$Type
static readonly "SOCKS": $Proxy$Type


public static "values"(): ($Proxy$Type)[]
public static "valueOf"(arg0: string): $Proxy$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$Type$Type = (("socks") | ("direct") | ("http")) | ($Proxy$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy$Type_ = $Proxy$Type$Type;
}}
declare module "packages/java/net/$URLConnection" {
import {$FileNameMap, $FileNameMap$Type} from "packages/java/net/$FileNameMap"
import {$ContentHandlerFactory, $ContentHandlerFactory$Type} from "packages/java/net/$ContentHandlerFactory"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Permission, $Permission$Type} from "packages/java/security/$Permission"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLConnection {


public "setRequestProperty"(arg0: string, arg1: string): void
public "getURL"(): $URL
public "setUseCaches"(arg0: boolean): void
public "getContentLength"(): integer
public "getPermission"(): $Permission
public "getUseCaches"(): boolean
public "getContentLengthLong"(): long
public static "guessContentTypeFromStream"(arg0: $InputStream$Type): string
public static "guessContentTypeFromName"(arg0: string): string
public "getHeaderField"(arg0: string): string
public "getHeaderField"(arg0: integer): string
public "getRequestProperty"(arg0: string): string
public "addRequestProperty"(arg0: string, arg1: string): void
public "getRequestProperties"(): $Map<(string), ($List<(string)>)>
public "setAllowUserInteraction"(arg0: boolean): void
public "getAllowUserInteraction"(): boolean
public "setIfModifiedSince"(arg0: long): void
public static "setDefaultUseCaches"(arg0: string, arg1: boolean): void
public "setDefaultUseCaches"(arg0: boolean): void
public "getDefaultUseCaches"(): boolean
public static "getDefaultUseCaches"(arg0: string): boolean
public "getContentType"(): string
public "getHeaderFieldLong"(arg0: string, arg1: long): long
public "getHeaderFieldDate"(arg0: string, arg1: long): long
public static "getFileNameMap"(): $FileNameMap
public static "setFileNameMap"(arg0: $FileNameMap$Type): void
public "setConnectTimeout"(arg0: integer): void
public "getConnectTimeout"(): integer
public "setReadTimeout"(arg0: integer): void
public "getReadTimeout"(): integer
public "getContentEncoding"(): string
public "getExpiration"(): long
public "getDate"(): long
public "getLastModified"(): long
public "getHeaderFields"(): $Map<(string), ($List<(string)>)>
public "getHeaderFieldInt"(arg0: string, arg1: integer): integer
public "getHeaderFieldKey"(arg0: integer): string
public "getOutputStream"(): $OutputStream
public "setDoInput"(arg0: boolean): void
public "getDoInput"(): boolean
public "setDoOutput"(arg0: boolean): void
public "getDoOutput"(): boolean
public static "setDefaultAllowUserInteraction"(arg0: boolean): void
public static "getDefaultAllowUserInteraction"(): boolean
public "getIfModifiedSince"(): long
/**
 * 
 * @deprecated
 */
public static "setDefaultRequestProperty"(arg0: string, arg1: string): void
/**
 * 
 * @deprecated
 */
public static "getDefaultRequestProperty"(arg0: string): string
public static "setContentHandlerFactory"(arg0: $ContentHandlerFactory$Type): void
public "toString"(): string
public "connect"(): void
public "getInputStream"(): $InputStream
public "getContent"(): any
public "getContent"(arg0: ($Class$Type<(any)>)[]): any
get "uRL"(): $URL
set "useCaches"(value: boolean)
get "contentLength"(): integer
get "permission"(): $Permission
get "useCaches"(): boolean
get "contentLengthLong"(): long
get "requestProperties"(): $Map<(string), ($List<(string)>)>
set "allowUserInteraction"(value: boolean)
get "allowUserInteraction"(): boolean
set "ifModifiedSince"(value: long)
set "defaultUseCaches"(value: boolean)
get "defaultUseCaches"(): boolean
get "contentType"(): string
get "fileNameMap"(): $FileNameMap
set "fileNameMap"(value: $FileNameMap$Type)
set "connectTimeout"(value: integer)
get "connectTimeout"(): integer
set "readTimeout"(value: integer)
get "readTimeout"(): integer
get "contentEncoding"(): string
get "expiration"(): long
get "date"(): long
get "lastModified"(): long
get "headerFields"(): $Map<(string), ($List<(string)>)>
get "outputStream"(): $OutputStream
set "doInput"(value: boolean)
get "doInput"(): boolean
set "doOutput"(value: boolean)
get "doOutput"(): boolean
set "defaultAllowUserInteraction"(value: boolean)
get "defaultAllowUserInteraction"(): boolean
get "ifModifiedSince"(): long
set "contentHandlerFactory"(value: $ContentHandlerFactory$Type)
get "inputStream"(): $InputStream
get "content"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URLConnection$Type = ($URLConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URLConnection_ = $URLConnection$Type;
}}
declare module "packages/java/net/$URI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$URL, $URL$Type} from "packages/java/net/$URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URI implements $Comparable<($URI)>, $Serializable {

constructor(arg0: string)
constructor(arg0: string, arg1: string, arg2: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
constructor(arg0: string, arg1: string, arg2: string, arg3: integer, arg4: string, arg5: string, arg6: string)

public "getRawAuthority"(): string
public "relativize"(arg0: $URI$Type): $URI
public "getRawSchemeSpecificPart"(): string
public "parseServerAuthority"(): $URI
public "getSchemeSpecificPart"(): string
public "getRawUserInfo"(): string
public "getFragment"(): string
public "toASCIIString"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $URI$Type): integer
public "isAbsolute"(): boolean
public "resolve"(arg0: $URI$Type): $URI
public "resolve"(arg0: string): $URI
public "normalize"(): $URI
public "getScheme"(): string
public "isOpaque"(): boolean
public "getRawFragment"(): string
public "getRawQuery"(): string
public "getRawPath"(): string
public "getHost"(): string
public "getPort"(): integer
public static "create"(arg0: string): $URI
public "getAuthority"(): string
public "getQuery"(): string
public "getPath"(): string
public "getUserInfo"(): string
public "toURL"(): $URL
get "rawAuthority"(): string
get "rawSchemeSpecificPart"(): string
get "schemeSpecificPart"(): string
get "rawUserInfo"(): string
get "fragment"(): string
get "absolute"(): boolean
get "scheme"(): string
get "opaque"(): boolean
get "rawFragment"(): string
get "rawQuery"(): string
get "rawPath"(): string
get "host"(): string
get "port"(): integer
get "authority"(): string
get "query"(): string
get "path"(): string
get "userInfo"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URI$Type = ($URI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URI_ = $URI$Type;
}}
declare module "packages/java/net/$URL" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$URLStreamHandler, $URLStreamHandler$Type} from "packages/java/net/$URLStreamHandler"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$URI, $URI$Type} from "packages/java/net/$URI"
import {$URLConnection, $URLConnection$Type} from "packages/java/net/$URLConnection"
import {$URLStreamHandlerFactory, $URLStreamHandlerFactory$Type} from "packages/java/net/$URLStreamHandlerFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URL implements $Serializable {

constructor(arg0: $URL$Type, arg1: string, arg2: $URLStreamHandler$Type)
constructor(arg0: $URL$Type, arg1: string)
constructor(arg0: string)
constructor(arg0: string, arg1: string, arg2: integer, arg3: string)
constructor(arg0: string, arg1: string, arg2: string)
constructor(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: $URLStreamHandler$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "openStream"(): $InputStream
public "getHost"(): string
public "getPort"(): integer
public "getDefaultPort"(): integer
public "sameFile"(arg0: $URL$Type): boolean
public "toExternalForm"(): string
public "openConnection"(): $URLConnection
public "openConnection"(arg0: $Proxy$Type): $URLConnection
public "getContent"(): any
public "getContent"(arg0: ($Class$Type<(any)>)[]): any
public "getProtocol"(): string
public "getAuthority"(): string
public "getFile"(): string
public "getRef"(): string
public "getQuery"(): string
public "getPath"(): string
public "getUserInfo"(): string
public "toURI"(): $URI
public static "setURLStreamHandlerFactory"(arg0: $URLStreamHandlerFactory$Type): void
get "host"(): string
get "port"(): integer
get "defaultPort"(): integer
get "content"(): any
get "protocol"(): string
get "authority"(): string
get "file"(): string
get "ref"(): string
get "query"(): string
get "path"(): string
get "userInfo"(): string
set "uRLStreamHandlerFactory"(value: $URLStreamHandlerFactory$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $URL$Type = ($URL);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $URL_ = $URL$Type;
}}
declare module "packages/java/net/$SocketImplFactory" {
import {$SocketImpl, $SocketImpl$Type} from "packages/java/net/$SocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketImplFactory {

 "createSocketImpl"(): $SocketImpl

(): $SocketImpl
}

export namespace $SocketImplFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketImplFactory$Type = ($SocketImplFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketImplFactory_ = $SocketImplFactory$Type;
}}
declare module "packages/java/net/$ContentHandler" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$URLConnection, $URLConnection$Type} from "packages/java/net/$URLConnection"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ContentHandler {

constructor()

public "getContent"(arg0: $URLConnection$Type): any
public "getContent"(arg0: $URLConnection$Type, arg1: ($Class$Type<(any)>)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentHandler$Type = ($ContentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentHandler_ = $ContentHandler$Type;
}}
declare module "packages/java/net/$Socket" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$SocketImplFactory, $SocketImplFactory$Type} from "packages/java/net/$SocketImplFactory"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$SocketChannel, $SocketChannel$Type} from "packages/java/nio/channels/$SocketChannel"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"
import {$SocketOption, $SocketOption$Type} from "packages/java/net/$SocketOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Socket implements $Closeable {

constructor()
constructor(arg0: string, arg1: integer)
constructor(arg0: $Proxy$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $InetAddress$Type, arg1: integer, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: integer, arg2: boolean)
constructor(arg0: $InetAddress$Type, arg1: integer)
constructor(arg0: string, arg1: integer, arg2: $InetAddress$Type, arg3: integer)
constructor(arg0: $InetAddress$Type, arg1: integer, arg2: $InetAddress$Type, arg3: integer)

public "getOutputStream"(): $OutputStream
/**
 * 
 * @deprecated
 */
public static "setSocketImplFactory"(arg0: $SocketImplFactory$Type): void
public "getChannel"(): $SocketChannel
public "bind"(arg0: $SocketAddress$Type): void
public "getOption"<T>(arg0: $SocketOption$Type<(T)>): T
public "setOption"<T>(arg0: $SocketOption$Type<(T)>, arg1: T): $Socket
public "toString"(): string
public "connect"(arg0: $SocketAddress$Type): void
public "connect"(arg0: $SocketAddress$Type, arg1: integer): void
public "close"(): void
public "getPort"(): integer
public "getInputStream"(): $InputStream
public "getLocalAddress"(): $InetAddress
public "isOutputShutdown"(): boolean
public "isInputShutdown"(): boolean
public "shutdownOutput"(): void
public "shutdownInput"(): void
public "getInetAddress"(): $InetAddress
public "supportedOptions"(): $Set<($SocketOption<(any)>)>
public "getRemoteSocketAddress"(): $SocketAddress
public "getLocalSocketAddress"(): $SocketAddress
public "getLocalPort"(): integer
public "getTcpNoDelay"(): boolean
public "getKeepAlive"(): boolean
public "getReuseAddress"(): boolean
public "sendUrgentData"(arg0: integer): void
public "getOOBInline"(): boolean
public "isConnected"(): boolean
public "getReceiveBufferSize"(): integer
public "getSendBufferSize"(): integer
public "getSoLinger"(): integer
public "getSoTimeout"(): integer
public "getTrafficClass"(): integer
public "setKeepAlive"(arg0: boolean): void
public "setPerformancePreferences"(arg0: integer, arg1: integer, arg2: integer): void
public "setReceiveBufferSize"(arg0: integer): void
public "setReuseAddress"(arg0: boolean): void
public "setSendBufferSize"(arg0: integer): void
public "setSoLinger"(arg0: boolean, arg1: integer): void
public "setSoTimeout"(arg0: integer): void
public "setTcpNoDelay"(arg0: boolean): void
public "setTrafficClass"(arg0: integer): void
public "setOOBInline"(arg0: boolean): void
public "isClosed"(): boolean
public "isBound"(): boolean
get "outputStream"(): $OutputStream
set "socketImplFactory"(value: $SocketImplFactory$Type)
get "channel"(): $SocketChannel
get "port"(): integer
get "inputStream"(): $InputStream
get "localAddress"(): $InetAddress
get "outputShutdown"(): boolean
get "inputShutdown"(): boolean
get "inetAddress"(): $InetAddress
get "remoteSocketAddress"(): $SocketAddress
get "localSocketAddress"(): $SocketAddress
get "localPort"(): integer
get "tcpNoDelay"(): boolean
get "keepAlive"(): boolean
get "reuseAddress"(): boolean
get "oOBInline"(): boolean
get "connected"(): boolean
get "receiveBufferSize"(): integer
get "sendBufferSize"(): integer
get "soLinger"(): integer
get "soTimeout"(): integer
get "trafficClass"(): integer
set "keepAlive"(value: boolean)
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "tcpNoDelay"(value: boolean)
set "trafficClass"(value: integer)
set "oOBInline"(value: boolean)
get "closed"(): boolean
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Socket$Type = ($Socket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Socket_ = $Socket$Type;
}}
declare module "packages/java/net/$FileNameMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileNameMap {

 "getContentTypeFor"(arg0: string): string

(arg0: string): string
}

export namespace $FileNameMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNameMap$Type = ($FileNameMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNameMap_ = $FileNameMap$Type;
}}
declare module "packages/java/net/$SocketOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOptions {

 "getOption"(arg0: integer): any
 "setOption"(arg0: integer, arg1: any): void
}

export namespace $SocketOptions {
const TCP_NODELAY: integer
const SO_BINDADDR: integer
const SO_REUSEADDR: integer
const SO_REUSEPORT: integer
const SO_BROADCAST: integer
const IP_MULTICAST_IF: integer
const IP_MULTICAST_IF2: integer
const IP_MULTICAST_LOOP: integer
const IP_TOS: integer
const SO_LINGER: integer
const SO_TIMEOUT: integer
const SO_SNDBUF: integer
const SO_RCVBUF: integer
const SO_KEEPALIVE: integer
const SO_OOBINLINE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SocketOptions$Type = ($SocketOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SocketOptions_ = $SocketOptions$Type;
}}
declare module "packages/java/net/$ProtocolFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProtocolFamily {

 "name"(): string

(): string
}

export namespace $ProtocolFamily {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtocolFamily$Type = ($ProtocolFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtocolFamily_ = $ProtocolFamily$Type;
}}
declare module "packages/java/net/$InterfaceAddress" {
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterfaceAddress {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAddress"(): $InetAddress
public "getBroadcast"(): $InetAddress
public "getNetworkPrefixLength"(): short
get "address"(): $InetAddress
get "broadcast"(): $InetAddress
get "networkPrefixLength"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceAddress$Type = ($InterfaceAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceAddress_ = $InterfaceAddress$Type;
}}
declare module "packages/java/net/$InetAddress" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$NetworkInterface, $NetworkInterface$Type} from "packages/java/net/$NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetAddress implements $Serializable {


public "isLinkLocalAddress"(): boolean
public "isReachable"(arg0: integer): boolean
public "isReachable"(arg0: $NetworkInterface$Type, arg1: integer, arg2: integer): boolean
public static "getAllByName"(arg0: string): ($InetAddress)[]
public static "getByAddress"(arg0: string, arg1: (byte)[]): $InetAddress
public static "getByAddress"(arg0: (byte)[]): $InetAddress
public "isMulticastAddress"(): boolean
public "isAnyLocalAddress"(): boolean
public "isLoopbackAddress"(): boolean
public "isSiteLocalAddress"(): boolean
public "isMCGlobal"(): boolean
public "isMCNodeLocal"(): boolean
public "isMCLinkLocal"(): boolean
public "isMCSiteLocal"(): boolean
public "isMCOrgLocal"(): boolean
public "getCanonicalHostName"(): string
public static "getLoopbackAddress"(): $InetAddress
public static "getLocalHost"(): $InetAddress
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getHostAddress"(): string
public "getAddress"(): (byte)[]
public static "getByName"(arg0: string): $InetAddress
public "getHostName"(): string
get "linkLocalAddress"(): boolean
get "multicastAddress"(): boolean
get "anyLocalAddress"(): boolean
get "loopbackAddress"(): boolean
get "siteLocalAddress"(): boolean
get "mCGlobal"(): boolean
get "mCNodeLocal"(): boolean
get "mCLinkLocal"(): boolean
get "mCSiteLocal"(): boolean
get "mCOrgLocal"(): boolean
get "canonicalHostName"(): string
get "loopbackAddress"(): $InetAddress
get "localHost"(): $InetAddress
get "hostAddress"(): string
get "address"(): (byte)[]
get "hostName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InetAddress$Type = ($InetAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InetAddress_ = $InetAddress$Type;
}}
