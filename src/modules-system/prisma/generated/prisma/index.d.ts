
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>
/**
 * Model giaothong
 * 
 */
export type giaothong = $Result.DefaultSelection<Prisma.$giaothongPayload>
/**
 * Model timduong
 * 
 */
export type timduong = $Result.DefaultSelection<Prisma.$timduongPayload>
/**
 * Model benthanh
 * 
 */
export type benthanh = $Result.DefaultSelection<Prisma.$benthanhPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Spatial_ref_sys
 * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Spatial_ref_sys
   * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giaothong`: Exposes CRUD operations for the **giaothong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Giaothongs
    * const giaothongs = await prisma.giaothong.findMany()
    * ```
    */
  get giaothong(): Prisma.giaothongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timduong`: Exposes CRUD operations for the **timduong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timduongs
    * const timduongs = await prisma.timduong.findMany()
    * ```
    */
  get timduong(): Prisma.timduongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benthanh`: Exposes CRUD operations for the **benthanh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benthanhs
    * const benthanhs = await prisma.benthanh.findMany()
    * ```
    */
  get benthanh(): Prisma.benthanhDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    spatial_ref_sys: 'spatial_ref_sys',
    giaothong: 'giaothong',
    timduong: 'timduong',
    benthanh: 'benthanh',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "spatial_ref_sys" | "giaothong" | "timduong" | "benthanh" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      giaothong: {
        payload: Prisma.$giaothongPayload<ExtArgs>
        fields: Prisma.giaothongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.giaothongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.giaothongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          findFirst: {
            args: Prisma.giaothongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.giaothongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          findMany: {
            args: Prisma.giaothongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>[]
          }
          create: {
            args: Prisma.giaothongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          createMany: {
            args: Prisma.giaothongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.giaothongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>[]
          }
          delete: {
            args: Prisma.giaothongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          update: {
            args: Prisma.giaothongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          deleteMany: {
            args: Prisma.giaothongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.giaothongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.giaothongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>[]
          }
          upsert: {
            args: Prisma.giaothongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giaothongPayload>
          }
          aggregate: {
            args: Prisma.GiaothongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiaothong>
          }
          groupBy: {
            args: Prisma.giaothongGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiaothongGroupByOutputType>[]
          }
          count: {
            args: Prisma.giaothongCountArgs<ExtArgs>
            result: $Utils.Optional<GiaothongCountAggregateOutputType> | number
          }
        }
      }
      timduong: {
        payload: Prisma.$timduongPayload<ExtArgs>
        fields: Prisma.timduongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timduongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timduongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          findFirst: {
            args: Prisma.timduongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timduongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          findMany: {
            args: Prisma.timduongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>[]
          }
          create: {
            args: Prisma.timduongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          createMany: {
            args: Prisma.timduongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.timduongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>[]
          }
          delete: {
            args: Prisma.timduongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          update: {
            args: Prisma.timduongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          deleteMany: {
            args: Prisma.timduongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timduongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.timduongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>[]
          }
          upsert: {
            args: Prisma.timduongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timduongPayload>
          }
          aggregate: {
            args: Prisma.TimduongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimduong>
          }
          groupBy: {
            args: Prisma.timduongGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimduongGroupByOutputType>[]
          }
          count: {
            args: Prisma.timduongCountArgs<ExtArgs>
            result: $Utils.Optional<TimduongCountAggregateOutputType> | number
          }
        }
      }
      benthanh: {
        payload: Prisma.$benthanhPayload<ExtArgs>
        fields: Prisma.benthanhFieldRefs
        operations: {
          findUnique: {
            args: Prisma.benthanhFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.benthanhFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          findFirst: {
            args: Prisma.benthanhFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.benthanhFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          findMany: {
            args: Prisma.benthanhFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>[]
          }
          create: {
            args: Prisma.benthanhCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          createMany: {
            args: Prisma.benthanhCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.benthanhCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>[]
          }
          delete: {
            args: Prisma.benthanhDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          update: {
            args: Prisma.benthanhUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          deleteMany: {
            args: Prisma.benthanhDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.benthanhUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.benthanhUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>[]
          }
          upsert: {
            args: Prisma.benthanhUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$benthanhPayload>
          }
          aggregate: {
            args: Prisma.BenthanhAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenthanh>
          }
          groupBy: {
            args: Prisma.benthanhGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenthanhGroupByOutputType>[]
          }
          count: {
            args: Prisma.benthanhCountArgs<ExtArgs>
            result: $Utils.Optional<BenthanhCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    spatial_ref_sys?: spatial_ref_sysOmit
    giaothong?: giaothongOmit
    timduong?: timduongOmit
    benthanh?: benthanhOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model spatial_ref_sys
   */

  export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number
    auth_name: number
    auth_srid: number
    srtext: number
    proj4text: number
    _all: number
  }


  export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
    _all?: true
  }

  export type Spatial_ref_sysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to aggregate.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spatial_ref_sys
    **/
    _count?: true | Spatial_ref_sysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spatial_ref_sysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spatial_ref_sysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spatial_ref_sysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
        [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
      : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
  }




  export type spatial_ref_sysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spatial_ref_sysWhereInput
    orderBy?: spatial_ref_sysOrderByWithAggregationInput | spatial_ref_sysOrderByWithAggregationInput[]
    by: Spatial_ref_sysScalarFieldEnum[] | Spatial_ref_sysScalarFieldEnum
    having?: spatial_ref_sysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spatial_ref_sysCountAggregateInputType | true
    _avg?: Spatial_ref_sysAvgAggregateInputType
    _sum?: Spatial_ref_sysSumAggregateInputType
    _min?: Spatial_ref_sysMinAggregateInputType
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type Spatial_ref_sysGroupByOutputType = {
    srid: number
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
            : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
        }
      >
    >


  export type spatial_ref_sysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectScalar = {
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }

  export type spatial_ref_sysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"srid" | "auth_name" | "auth_srid" | "srtext" | "proj4text", ExtArgs["result"]["spatial_ref_sys"]>

  export type $spatial_ref_sysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spatial_ref_sys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srid: number
      auth_name: string | null
      auth_srid: number | null
      srtext: string | null
      proj4text: string | null
    }, ExtArgs["result"]["spatial_ref_sys"]>
    composites: {}
  }

  type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = $Result.GetResult<Prisma.$spatial_ref_sysPayload, S>

  type spatial_ref_sysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spatial_ref_sysCountAggregateInputType | true
    }

  export interface spatial_ref_sysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'], meta: { name: 'spatial_ref_sys' } }
    /**
     * Find zero or one Spatial_ref_sys that matches the filter.
     * @param {spatial_ref_sysFindUniqueArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
     * 
     * // Get first 10 Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany({ take: 10 })
     * 
     * // Only select the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.findMany({ select: { srid: true } })
     * 
     */
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spatial_ref_sys.
     * @param {spatial_ref_sysCreateArgs} args - Arguments to create a Spatial_ref_sys.
     * @example
     * // Create one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.create({
     *   data: {
     *     // ... data to create a Spatial_ref_sys
     *   }
     * })
     * 
     */
    create<T extends spatial_ref_sysCreateArgs>(args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spatial_ref_sys.
     * @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spatial_ref_sys and returns the data saved in the database.
     * @param {spatial_ref_sysCreateManyAndReturnArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.createManyAndReturn({
     *   select: { srid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteArgs} args - Arguments to delete one Spatial_ref_sys.
     * @example
     * // Delete one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.delete({
     *   where: {
     *     // ... filter to delete one Spatial_ref_sys
     *   }
     * })
     * 
     */
    delete<T extends spatial_ref_sysDeleteArgs>(args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpdateArgs} args - Arguments to update one Spatial_ref_sys.
     * @example
     * // Update one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spatial_ref_sysUpdateArgs>(args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteManyArgs} args - Arguments to filter Spatial_ref_sys to delete.
     * @example
     * // Delete a few Spatial_ref_sys
     * const { count } = await prisma.spatial_ref_sys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys and returns the data updated in the database.
     * @param {spatial_ref_sysUpdateManyAndReturnArgs} args - Arguments to update many Spatial_ref_sys.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   select: { srid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends spatial_ref_sysUpdateManyAndReturnArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpsertArgs} args - Arguments to update or create a Spatial_ref_sys.
     * @example
     * // Update or create a Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.upsert({
     *   create: {
     *     // ... data to create a Spatial_ref_sys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to update
     *   }
     * })
     */
    upsert<T extends spatial_ref_sysUpsertArgs>(args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysCountArgs} args - Arguments to filter Spatial_ref_sys to count.
     * @example
     * // Count the number of Spatial_ref_sys
     * const count = await prisma.spatial_ref_sys.count({
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to count
     *   }
     * })
    **/
    count<T extends spatial_ref_sysCountArgs>(
      args?: Subset<T, spatial_ref_sysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spatial_ref_sysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>

    /**
     * Group by Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends spatial_ref_sysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spatial_ref_sysGroupByArgs['orderBy'] }
        : { orderBy?: spatial_ref_sysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spatial_ref_sys model
   */
  readonly fields: spatial_ref_sysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spatial_ref_sys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the spatial_ref_sys model
   */
  interface spatial_ref_sysFieldRefs {
    readonly srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly auth_name: FieldRef<"spatial_ref_sys", 'String'>
    readonly auth_srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly srtext: FieldRef<"spatial_ref_sys", 'String'>
    readonly proj4text: FieldRef<"spatial_ref_sys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spatial_ref_sys findUnique
   */
  export type spatial_ref_sysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findUniqueOrThrow
   */
  export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findFirst
   */
  export type spatial_ref_sysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findFirstOrThrow
   */
  export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findMany
   */
  export type spatial_ref_sysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys create
   */
  export type spatial_ref_sysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to create a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
  }

  /**
   * spatial_ref_sys createMany
   */
  export type spatial_ref_sysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys createManyAndReturn
   */
  export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys update
   */
  export type spatial_ref_sysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to update a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
    /**
     * Choose, which spatial_ref_sys to update.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys updateMany
   */
  export type spatial_ref_sysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys updateManyAndReturn
   */
  export type spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys upsert
   */
  export type spatial_ref_sysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The filter to search for the spatial_ref_sys to update in case it exists.
     */
    where: spatial_ref_sysWhereUniqueInput
    /**
     * In case the spatial_ref_sys found by the `where` argument doesn't exist, create a new spatial_ref_sys with this data.
     */
    create: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
    /**
     * In case the spatial_ref_sys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
  }

  /**
   * spatial_ref_sys delete
   */
  export type spatial_ref_sysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter which spatial_ref_sys to delete.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys deleteMany
   */
  export type spatial_ref_sysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to delete
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to delete.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys without action
   */
  export type spatial_ref_sysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
  }


  /**
   * Model giaothong
   */

  export type AggregateGiaothong = {
    _count: GiaothongCountAggregateOutputType | null
    _avg: GiaothongAvgAggregateOutputType | null
    _sum: GiaothongSumAggregateOutputType | null
    _min: GiaothongMinAggregateOutputType | null
    _max: GiaothongMaxAggregateOutputType | null
  }

  export type GiaothongAvgAggregateOutputType = {
    gid: number | null
    dien_tich: number | null
    id_gt: number | null
  }

  export type GiaothongSumAggregateOutputType = {
    gid: number | null
    dien_tich: number | null
    id_gt: number | null
  }

  export type GiaothongMinAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
  }

  export type GiaothongMaxAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
  }

  export type GiaothongCountAggregateOutputType = {
    gid: number
    ma_xa: number
    dien_tich: number
    ten_duong: number
    id_gt: number
    _all: number
  }


  export type GiaothongAvgAggregateInputType = {
    gid?: true
    dien_tich?: true
    id_gt?: true
  }

  export type GiaothongSumAggregateInputType = {
    gid?: true
    dien_tich?: true
    id_gt?: true
  }

  export type GiaothongMinAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
  }

  export type GiaothongMaxAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
  }

  export type GiaothongCountAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
    _all?: true
  }

  export type GiaothongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which giaothong to aggregate.
     */
    where?: giaothongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giaothongs to fetch.
     */
    orderBy?: giaothongOrderByWithRelationInput | giaothongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: giaothongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giaothongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giaothongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned giaothongs
    **/
    _count?: true | GiaothongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiaothongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiaothongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiaothongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiaothongMaxAggregateInputType
  }

  export type GetGiaothongAggregateType<T extends GiaothongAggregateArgs> = {
        [P in keyof T & keyof AggregateGiaothong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiaothong[P]>
      : GetScalarType<T[P], AggregateGiaothong[P]>
  }




  export type giaothongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giaothongWhereInput
    orderBy?: giaothongOrderByWithAggregationInput | giaothongOrderByWithAggregationInput[]
    by: GiaothongScalarFieldEnum[] | GiaothongScalarFieldEnum
    having?: giaothongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiaothongCountAggregateInputType | true
    _avg?: GiaothongAvgAggregateInputType
    _sum?: GiaothongSumAggregateInputType
    _min?: GiaothongMinAggregateInputType
    _max?: GiaothongMaxAggregateInputType
  }

  export type GiaothongGroupByOutputType = {
    gid: number
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
    _count: GiaothongCountAggregateOutputType | null
    _avg: GiaothongAvgAggregateOutputType | null
    _sum: GiaothongSumAggregateOutputType | null
    _min: GiaothongMinAggregateOutputType | null
    _max: GiaothongMaxAggregateOutputType | null
  }

  type GetGiaothongGroupByPayload<T extends giaothongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiaothongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiaothongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiaothongGroupByOutputType[P]>
            : GetScalarType<T[P], GiaothongGroupByOutputType[P]>
        }
      >
    >


  export type giaothongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["giaothong"]>

  export type giaothongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["giaothong"]>

  export type giaothongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["giaothong"]>

  export type giaothongSelectScalar = {
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }

  export type giaothongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gid" | "ma_xa" | "dien_tich" | "ten_duong" | "id_gt", ExtArgs["result"]["giaothong"]>

  export type $giaothongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "giaothong"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gid: number
      ma_xa: string | null
      dien_tich: number | null
      ten_duong: string | null
      id_gt: number | null
    }, ExtArgs["result"]["giaothong"]>
    composites: {}
  }

  type giaothongGetPayload<S extends boolean | null | undefined | giaothongDefaultArgs> = $Result.GetResult<Prisma.$giaothongPayload, S>

  type giaothongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<giaothongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiaothongCountAggregateInputType | true
    }

  export interface giaothongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['giaothong'], meta: { name: 'giaothong' } }
    /**
     * Find zero or one Giaothong that matches the filter.
     * @param {giaothongFindUniqueArgs} args - Arguments to find a Giaothong
     * @example
     * // Get one Giaothong
     * const giaothong = await prisma.giaothong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends giaothongFindUniqueArgs>(args: SelectSubset<T, giaothongFindUniqueArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Giaothong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {giaothongFindUniqueOrThrowArgs} args - Arguments to find a Giaothong
     * @example
     * // Get one Giaothong
     * const giaothong = await prisma.giaothong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends giaothongFindUniqueOrThrowArgs>(args: SelectSubset<T, giaothongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giaothong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongFindFirstArgs} args - Arguments to find a Giaothong
     * @example
     * // Get one Giaothong
     * const giaothong = await prisma.giaothong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends giaothongFindFirstArgs>(args?: SelectSubset<T, giaothongFindFirstArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giaothong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongFindFirstOrThrowArgs} args - Arguments to find a Giaothong
     * @example
     * // Get one Giaothong
     * const giaothong = await prisma.giaothong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends giaothongFindFirstOrThrowArgs>(args?: SelectSubset<T, giaothongFindFirstOrThrowArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Giaothongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Giaothongs
     * const giaothongs = await prisma.giaothong.findMany()
     * 
     * // Get first 10 Giaothongs
     * const giaothongs = await prisma.giaothong.findMany({ take: 10 })
     * 
     * // Only select the `gid`
     * const giaothongWithGidOnly = await prisma.giaothong.findMany({ select: { gid: true } })
     * 
     */
    findMany<T extends giaothongFindManyArgs>(args?: SelectSubset<T, giaothongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Giaothong.
     * @param {giaothongCreateArgs} args - Arguments to create a Giaothong.
     * @example
     * // Create one Giaothong
     * const Giaothong = await prisma.giaothong.create({
     *   data: {
     *     // ... data to create a Giaothong
     *   }
     * })
     * 
     */
    create<T extends giaothongCreateArgs>(args: SelectSubset<T, giaothongCreateArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Giaothongs.
     * @param {giaothongCreateManyArgs} args - Arguments to create many Giaothongs.
     * @example
     * // Create many Giaothongs
     * const giaothong = await prisma.giaothong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends giaothongCreateManyArgs>(args?: SelectSubset<T, giaothongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Giaothongs and returns the data saved in the database.
     * @param {giaothongCreateManyAndReturnArgs} args - Arguments to create many Giaothongs.
     * @example
     * // Create many Giaothongs
     * const giaothong = await prisma.giaothong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Giaothongs and only return the `gid`
     * const giaothongWithGidOnly = await prisma.giaothong.createManyAndReturn({
     *   select: { gid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends giaothongCreateManyAndReturnArgs>(args?: SelectSubset<T, giaothongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Giaothong.
     * @param {giaothongDeleteArgs} args - Arguments to delete one Giaothong.
     * @example
     * // Delete one Giaothong
     * const Giaothong = await prisma.giaothong.delete({
     *   where: {
     *     // ... filter to delete one Giaothong
     *   }
     * })
     * 
     */
    delete<T extends giaothongDeleteArgs>(args: SelectSubset<T, giaothongDeleteArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Giaothong.
     * @param {giaothongUpdateArgs} args - Arguments to update one Giaothong.
     * @example
     * // Update one Giaothong
     * const giaothong = await prisma.giaothong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends giaothongUpdateArgs>(args: SelectSubset<T, giaothongUpdateArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Giaothongs.
     * @param {giaothongDeleteManyArgs} args - Arguments to filter Giaothongs to delete.
     * @example
     * // Delete a few Giaothongs
     * const { count } = await prisma.giaothong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends giaothongDeleteManyArgs>(args?: SelectSubset<T, giaothongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Giaothongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Giaothongs
     * const giaothong = await prisma.giaothong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends giaothongUpdateManyArgs>(args: SelectSubset<T, giaothongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Giaothongs and returns the data updated in the database.
     * @param {giaothongUpdateManyAndReturnArgs} args - Arguments to update many Giaothongs.
     * @example
     * // Update many Giaothongs
     * const giaothong = await prisma.giaothong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Giaothongs and only return the `gid`
     * const giaothongWithGidOnly = await prisma.giaothong.updateManyAndReturn({
     *   select: { gid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends giaothongUpdateManyAndReturnArgs>(args: SelectSubset<T, giaothongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Giaothong.
     * @param {giaothongUpsertArgs} args - Arguments to update or create a Giaothong.
     * @example
     * // Update or create a Giaothong
     * const giaothong = await prisma.giaothong.upsert({
     *   create: {
     *     // ... data to create a Giaothong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Giaothong we want to update
     *   }
     * })
     */
    upsert<T extends giaothongUpsertArgs>(args: SelectSubset<T, giaothongUpsertArgs<ExtArgs>>): Prisma__giaothongClient<$Result.GetResult<Prisma.$giaothongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Giaothongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongCountArgs} args - Arguments to filter Giaothongs to count.
     * @example
     * // Count the number of Giaothongs
     * const count = await prisma.giaothong.count({
     *   where: {
     *     // ... the filter for the Giaothongs we want to count
     *   }
     * })
    **/
    count<T extends giaothongCountArgs>(
      args?: Subset<T, giaothongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiaothongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Giaothong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaothongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiaothongAggregateArgs>(args: Subset<T, GiaothongAggregateArgs>): Prisma.PrismaPromise<GetGiaothongAggregateType<T>>

    /**
     * Group by Giaothong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giaothongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends giaothongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: giaothongGroupByArgs['orderBy'] }
        : { orderBy?: giaothongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, giaothongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiaothongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the giaothong model
   */
  readonly fields: giaothongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for giaothong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__giaothongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the giaothong model
   */
  interface giaothongFieldRefs {
    readonly gid: FieldRef<"giaothong", 'Int'>
    readonly ma_xa: FieldRef<"giaothong", 'String'>
    readonly dien_tich: FieldRef<"giaothong", 'Float'>
    readonly ten_duong: FieldRef<"giaothong", 'String'>
    readonly id_gt: FieldRef<"giaothong", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * giaothong findUnique
   */
  export type giaothongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter, which giaothong to fetch.
     */
    where: giaothongWhereUniqueInput
  }

  /**
   * giaothong findUniqueOrThrow
   */
  export type giaothongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter, which giaothong to fetch.
     */
    where: giaothongWhereUniqueInput
  }

  /**
   * giaothong findFirst
   */
  export type giaothongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter, which giaothong to fetch.
     */
    where?: giaothongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giaothongs to fetch.
     */
    orderBy?: giaothongOrderByWithRelationInput | giaothongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for giaothongs.
     */
    cursor?: giaothongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giaothongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giaothongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of giaothongs.
     */
    distinct?: GiaothongScalarFieldEnum | GiaothongScalarFieldEnum[]
  }

  /**
   * giaothong findFirstOrThrow
   */
  export type giaothongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter, which giaothong to fetch.
     */
    where?: giaothongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giaothongs to fetch.
     */
    orderBy?: giaothongOrderByWithRelationInput | giaothongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for giaothongs.
     */
    cursor?: giaothongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giaothongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giaothongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of giaothongs.
     */
    distinct?: GiaothongScalarFieldEnum | GiaothongScalarFieldEnum[]
  }

  /**
   * giaothong findMany
   */
  export type giaothongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter, which giaothongs to fetch.
     */
    where?: giaothongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giaothongs to fetch.
     */
    orderBy?: giaothongOrderByWithRelationInput | giaothongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing giaothongs.
     */
    cursor?: giaothongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giaothongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giaothongs.
     */
    skip?: number
    distinct?: GiaothongScalarFieldEnum | GiaothongScalarFieldEnum[]
  }

  /**
   * giaothong create
   */
  export type giaothongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * The data needed to create a giaothong.
     */
    data?: XOR<giaothongCreateInput, giaothongUncheckedCreateInput>
  }

  /**
   * giaothong createMany
   */
  export type giaothongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many giaothongs.
     */
    data: giaothongCreateManyInput | giaothongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * giaothong createManyAndReturn
   */
  export type giaothongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * The data used to create many giaothongs.
     */
    data: giaothongCreateManyInput | giaothongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * giaothong update
   */
  export type giaothongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * The data needed to update a giaothong.
     */
    data: XOR<giaothongUpdateInput, giaothongUncheckedUpdateInput>
    /**
     * Choose, which giaothong to update.
     */
    where: giaothongWhereUniqueInput
  }

  /**
   * giaothong updateMany
   */
  export type giaothongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update giaothongs.
     */
    data: XOR<giaothongUpdateManyMutationInput, giaothongUncheckedUpdateManyInput>
    /**
     * Filter which giaothongs to update
     */
    where?: giaothongWhereInput
    /**
     * Limit how many giaothongs to update.
     */
    limit?: number
  }

  /**
   * giaothong updateManyAndReturn
   */
  export type giaothongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * The data used to update giaothongs.
     */
    data: XOR<giaothongUpdateManyMutationInput, giaothongUncheckedUpdateManyInput>
    /**
     * Filter which giaothongs to update
     */
    where?: giaothongWhereInput
    /**
     * Limit how many giaothongs to update.
     */
    limit?: number
  }

  /**
   * giaothong upsert
   */
  export type giaothongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * The filter to search for the giaothong to update in case it exists.
     */
    where: giaothongWhereUniqueInput
    /**
     * In case the giaothong found by the `where` argument doesn't exist, create a new giaothong with this data.
     */
    create: XOR<giaothongCreateInput, giaothongUncheckedCreateInput>
    /**
     * In case the giaothong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<giaothongUpdateInput, giaothongUncheckedUpdateInput>
  }

  /**
   * giaothong delete
   */
  export type giaothongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
    /**
     * Filter which giaothong to delete.
     */
    where: giaothongWhereUniqueInput
  }

  /**
   * giaothong deleteMany
   */
  export type giaothongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which giaothongs to delete
     */
    where?: giaothongWhereInput
    /**
     * Limit how many giaothongs to delete.
     */
    limit?: number
  }

  /**
   * giaothong without action
   */
  export type giaothongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giaothong
     */
    select?: giaothongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giaothong
     */
    omit?: giaothongOmit<ExtArgs> | null
  }


  /**
   * Model timduong
   */

  export type AggregateTimduong = {
    _count: TimduongCountAggregateOutputType | null
    _avg: TimduongAvgAggregateOutputType | null
    _sum: TimduongSumAggregateOutputType | null
    _min: TimduongMinAggregateOutputType | null
    _max: TimduongMaxAggregateOutputType | null
  }

  export type TimduongAvgAggregateOutputType = {
    gid: number | null
    dien_tich: number | null
    id_gt: number | null
  }

  export type TimduongSumAggregateOutputType = {
    gid: number | null
    dien_tich: number | null
    id_gt: number | null
  }

  export type TimduongMinAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
  }

  export type TimduongMaxAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
  }

  export type TimduongCountAggregateOutputType = {
    gid: number
    ma_xa: number
    dien_tich: number
    ten_duong: number
    id_gt: number
    _all: number
  }


  export type TimduongAvgAggregateInputType = {
    gid?: true
    dien_tich?: true
    id_gt?: true
  }

  export type TimduongSumAggregateInputType = {
    gid?: true
    dien_tich?: true
    id_gt?: true
  }

  export type TimduongMinAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
  }

  export type TimduongMaxAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
  }

  export type TimduongCountAggregateInputType = {
    gid?: true
    ma_xa?: true
    dien_tich?: true
    ten_duong?: true
    id_gt?: true
    _all?: true
  }

  export type TimduongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timduong to aggregate.
     */
    where?: timduongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timduongs to fetch.
     */
    orderBy?: timduongOrderByWithRelationInput | timduongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timduongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timduongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timduongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timduongs
    **/
    _count?: true | TimduongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimduongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimduongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimduongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimduongMaxAggregateInputType
  }

  export type GetTimduongAggregateType<T extends TimduongAggregateArgs> = {
        [P in keyof T & keyof AggregateTimduong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimduong[P]>
      : GetScalarType<T[P], AggregateTimduong[P]>
  }




  export type timduongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timduongWhereInput
    orderBy?: timduongOrderByWithAggregationInput | timduongOrderByWithAggregationInput[]
    by: TimduongScalarFieldEnum[] | TimduongScalarFieldEnum
    having?: timduongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimduongCountAggregateInputType | true
    _avg?: TimduongAvgAggregateInputType
    _sum?: TimduongSumAggregateInputType
    _min?: TimduongMinAggregateInputType
    _max?: TimduongMaxAggregateInputType
  }

  export type TimduongGroupByOutputType = {
    gid: number
    ma_xa: string | null
    dien_tich: number | null
    ten_duong: string | null
    id_gt: number | null
    _count: TimduongCountAggregateOutputType | null
    _avg: TimduongAvgAggregateOutputType | null
    _sum: TimduongSumAggregateOutputType | null
    _min: TimduongMinAggregateOutputType | null
    _max: TimduongMaxAggregateOutputType | null
  }

  type GetTimduongGroupByPayload<T extends timduongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimduongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimduongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimduongGroupByOutputType[P]>
            : GetScalarType<T[P], TimduongGroupByOutputType[P]>
        }
      >
    >


  export type timduongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["timduong"]>

  export type timduongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["timduong"]>

  export type timduongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }, ExtArgs["result"]["timduong"]>

  export type timduongSelectScalar = {
    gid?: boolean
    ma_xa?: boolean
    dien_tich?: boolean
    ten_duong?: boolean
    id_gt?: boolean
  }

  export type timduongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gid" | "ma_xa" | "dien_tich" | "ten_duong" | "id_gt", ExtArgs["result"]["timduong"]>

  export type $timduongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timduong"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gid: number
      ma_xa: string | null
      dien_tich: number | null
      ten_duong: string | null
      id_gt: number | null
    }, ExtArgs["result"]["timduong"]>
    composites: {}
  }

  type timduongGetPayload<S extends boolean | null | undefined | timduongDefaultArgs> = $Result.GetResult<Prisma.$timduongPayload, S>

  type timduongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timduongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimduongCountAggregateInputType | true
    }

  export interface timduongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timduong'], meta: { name: 'timduong' } }
    /**
     * Find zero or one Timduong that matches the filter.
     * @param {timduongFindUniqueArgs} args - Arguments to find a Timduong
     * @example
     * // Get one Timduong
     * const timduong = await prisma.timduong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timduongFindUniqueArgs>(args: SelectSubset<T, timduongFindUniqueArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timduong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timduongFindUniqueOrThrowArgs} args - Arguments to find a Timduong
     * @example
     * // Get one Timduong
     * const timduong = await prisma.timduong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timduongFindUniqueOrThrowArgs>(args: SelectSubset<T, timduongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timduong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongFindFirstArgs} args - Arguments to find a Timduong
     * @example
     * // Get one Timduong
     * const timduong = await prisma.timduong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timduongFindFirstArgs>(args?: SelectSubset<T, timduongFindFirstArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timduong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongFindFirstOrThrowArgs} args - Arguments to find a Timduong
     * @example
     * // Get one Timduong
     * const timduong = await prisma.timduong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timduongFindFirstOrThrowArgs>(args?: SelectSubset<T, timduongFindFirstOrThrowArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timduongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timduongs
     * const timduongs = await prisma.timduong.findMany()
     * 
     * // Get first 10 Timduongs
     * const timduongs = await prisma.timduong.findMany({ take: 10 })
     * 
     * // Only select the `gid`
     * const timduongWithGidOnly = await prisma.timduong.findMany({ select: { gid: true } })
     * 
     */
    findMany<T extends timduongFindManyArgs>(args?: SelectSubset<T, timduongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timduong.
     * @param {timduongCreateArgs} args - Arguments to create a Timduong.
     * @example
     * // Create one Timduong
     * const Timduong = await prisma.timduong.create({
     *   data: {
     *     // ... data to create a Timduong
     *   }
     * })
     * 
     */
    create<T extends timduongCreateArgs>(args: SelectSubset<T, timduongCreateArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timduongs.
     * @param {timduongCreateManyArgs} args - Arguments to create many Timduongs.
     * @example
     * // Create many Timduongs
     * const timduong = await prisma.timduong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timduongCreateManyArgs>(args?: SelectSubset<T, timduongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timduongs and returns the data saved in the database.
     * @param {timduongCreateManyAndReturnArgs} args - Arguments to create many Timduongs.
     * @example
     * // Create many Timduongs
     * const timduong = await prisma.timduong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timduongs and only return the `gid`
     * const timduongWithGidOnly = await prisma.timduong.createManyAndReturn({
     *   select: { gid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends timduongCreateManyAndReturnArgs>(args?: SelectSubset<T, timduongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timduong.
     * @param {timduongDeleteArgs} args - Arguments to delete one Timduong.
     * @example
     * // Delete one Timduong
     * const Timduong = await prisma.timduong.delete({
     *   where: {
     *     // ... filter to delete one Timduong
     *   }
     * })
     * 
     */
    delete<T extends timduongDeleteArgs>(args: SelectSubset<T, timduongDeleteArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timduong.
     * @param {timduongUpdateArgs} args - Arguments to update one Timduong.
     * @example
     * // Update one Timduong
     * const timduong = await prisma.timduong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timduongUpdateArgs>(args: SelectSubset<T, timduongUpdateArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timduongs.
     * @param {timduongDeleteManyArgs} args - Arguments to filter Timduongs to delete.
     * @example
     * // Delete a few Timduongs
     * const { count } = await prisma.timduong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timduongDeleteManyArgs>(args?: SelectSubset<T, timduongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timduongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timduongs
     * const timduong = await prisma.timduong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timduongUpdateManyArgs>(args: SelectSubset<T, timduongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timduongs and returns the data updated in the database.
     * @param {timduongUpdateManyAndReturnArgs} args - Arguments to update many Timduongs.
     * @example
     * // Update many Timduongs
     * const timduong = await prisma.timduong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timduongs and only return the `gid`
     * const timduongWithGidOnly = await prisma.timduong.updateManyAndReturn({
     *   select: { gid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends timduongUpdateManyAndReturnArgs>(args: SelectSubset<T, timduongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timduong.
     * @param {timduongUpsertArgs} args - Arguments to update or create a Timduong.
     * @example
     * // Update or create a Timduong
     * const timduong = await prisma.timduong.upsert({
     *   create: {
     *     // ... data to create a Timduong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timduong we want to update
     *   }
     * })
     */
    upsert<T extends timduongUpsertArgs>(args: SelectSubset<T, timduongUpsertArgs<ExtArgs>>): Prisma__timduongClient<$Result.GetResult<Prisma.$timduongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timduongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongCountArgs} args - Arguments to filter Timduongs to count.
     * @example
     * // Count the number of Timduongs
     * const count = await prisma.timduong.count({
     *   where: {
     *     // ... the filter for the Timduongs we want to count
     *   }
     * })
    **/
    count<T extends timduongCountArgs>(
      args?: Subset<T, timduongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimduongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timduong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimduongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimduongAggregateArgs>(args: Subset<T, TimduongAggregateArgs>): Prisma.PrismaPromise<GetTimduongAggregateType<T>>

    /**
     * Group by Timduong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timduongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends timduongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timduongGroupByArgs['orderBy'] }
        : { orderBy?: timduongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, timduongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimduongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timduong model
   */
  readonly fields: timduongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timduong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timduongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the timduong model
   */
  interface timduongFieldRefs {
    readonly gid: FieldRef<"timduong", 'Int'>
    readonly ma_xa: FieldRef<"timduong", 'String'>
    readonly dien_tich: FieldRef<"timduong", 'Float'>
    readonly ten_duong: FieldRef<"timduong", 'String'>
    readonly id_gt: FieldRef<"timduong", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * timduong findUnique
   */
  export type timduongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter, which timduong to fetch.
     */
    where: timduongWhereUniqueInput
  }

  /**
   * timduong findUniqueOrThrow
   */
  export type timduongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter, which timduong to fetch.
     */
    where: timduongWhereUniqueInput
  }

  /**
   * timduong findFirst
   */
  export type timduongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter, which timduong to fetch.
     */
    where?: timduongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timduongs to fetch.
     */
    orderBy?: timduongOrderByWithRelationInput | timduongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timduongs.
     */
    cursor?: timduongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timduongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timduongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timduongs.
     */
    distinct?: TimduongScalarFieldEnum | TimduongScalarFieldEnum[]
  }

  /**
   * timduong findFirstOrThrow
   */
  export type timduongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter, which timduong to fetch.
     */
    where?: timduongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timduongs to fetch.
     */
    orderBy?: timduongOrderByWithRelationInput | timduongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timduongs.
     */
    cursor?: timduongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timduongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timduongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timduongs.
     */
    distinct?: TimduongScalarFieldEnum | TimduongScalarFieldEnum[]
  }

  /**
   * timduong findMany
   */
  export type timduongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter, which timduongs to fetch.
     */
    where?: timduongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timduongs to fetch.
     */
    orderBy?: timduongOrderByWithRelationInput | timduongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timduongs.
     */
    cursor?: timduongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timduongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timduongs.
     */
    skip?: number
    distinct?: TimduongScalarFieldEnum | TimduongScalarFieldEnum[]
  }

  /**
   * timduong create
   */
  export type timduongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * The data needed to create a timduong.
     */
    data?: XOR<timduongCreateInput, timduongUncheckedCreateInput>
  }

  /**
   * timduong createMany
   */
  export type timduongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timduongs.
     */
    data: timduongCreateManyInput | timduongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timduong createManyAndReturn
   */
  export type timduongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * The data used to create many timduongs.
     */
    data: timduongCreateManyInput | timduongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timduong update
   */
  export type timduongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * The data needed to update a timduong.
     */
    data: XOR<timduongUpdateInput, timduongUncheckedUpdateInput>
    /**
     * Choose, which timduong to update.
     */
    where: timduongWhereUniqueInput
  }

  /**
   * timduong updateMany
   */
  export type timduongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timduongs.
     */
    data: XOR<timduongUpdateManyMutationInput, timduongUncheckedUpdateManyInput>
    /**
     * Filter which timduongs to update
     */
    where?: timduongWhereInput
    /**
     * Limit how many timduongs to update.
     */
    limit?: number
  }

  /**
   * timduong updateManyAndReturn
   */
  export type timduongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * The data used to update timduongs.
     */
    data: XOR<timduongUpdateManyMutationInput, timduongUncheckedUpdateManyInput>
    /**
     * Filter which timduongs to update
     */
    where?: timduongWhereInput
    /**
     * Limit how many timduongs to update.
     */
    limit?: number
  }

  /**
   * timduong upsert
   */
  export type timduongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * The filter to search for the timduong to update in case it exists.
     */
    where: timduongWhereUniqueInput
    /**
     * In case the timduong found by the `where` argument doesn't exist, create a new timduong with this data.
     */
    create: XOR<timduongCreateInput, timduongUncheckedCreateInput>
    /**
     * In case the timduong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timduongUpdateInput, timduongUncheckedUpdateInput>
  }

  /**
   * timduong delete
   */
  export type timduongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
    /**
     * Filter which timduong to delete.
     */
    where: timduongWhereUniqueInput
  }

  /**
   * timduong deleteMany
   */
  export type timduongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timduongs to delete
     */
    where?: timduongWhereInput
    /**
     * Limit how many timduongs to delete.
     */
    limit?: number
  }

  /**
   * timduong without action
   */
  export type timduongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timduong
     */
    select?: timduongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timduong
     */
    omit?: timduongOmit<ExtArgs> | null
  }


  /**
   * Model benthanh
   */

  export type AggregateBenthanh = {
    _count: BenthanhCountAggregateOutputType | null
    _avg: BenthanhAvgAggregateOutputType | null
    _sum: BenthanhSumAggregateOutputType | null
    _min: BenthanhMinAggregateOutputType | null
    _max: BenthanhMaxAggregateOutputType | null
  }

  export type BenthanhAvgAggregateOutputType = {
    gid: number | null
    so_to: number | null
    so_thua: number | null
    dien_tich: number | null
  }

  export type BenthanhSumAggregateOutputType = {
    gid: number | null
    so_to: number | null
    so_thua: number | null
    dien_tich: number | null
  }

  export type BenthanhMinAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    so_to: number | null
    so_thua: number | null
    dien_tich: number | null
    loai_dat: string | null
    mathuadat: string | null
  }

  export type BenthanhMaxAggregateOutputType = {
    gid: number | null
    ma_xa: string | null
    so_to: number | null
    so_thua: number | null
    dien_tich: number | null
    loai_dat: string | null
    mathuadat: string | null
  }

  export type BenthanhCountAggregateOutputType = {
    gid: number
    ma_xa: number
    so_to: number
    so_thua: number
    dien_tich: number
    loai_dat: number
    mathuadat: number
    _all: number
  }


  export type BenthanhAvgAggregateInputType = {
    gid?: true
    so_to?: true
    so_thua?: true
    dien_tich?: true
  }

  export type BenthanhSumAggregateInputType = {
    gid?: true
    so_to?: true
    so_thua?: true
    dien_tich?: true
  }

  export type BenthanhMinAggregateInputType = {
    gid?: true
    ma_xa?: true
    so_to?: true
    so_thua?: true
    dien_tich?: true
    loai_dat?: true
    mathuadat?: true
  }

  export type BenthanhMaxAggregateInputType = {
    gid?: true
    ma_xa?: true
    so_to?: true
    so_thua?: true
    dien_tich?: true
    loai_dat?: true
    mathuadat?: true
  }

  export type BenthanhCountAggregateInputType = {
    gid?: true
    ma_xa?: true
    so_to?: true
    so_thua?: true
    dien_tich?: true
    loai_dat?: true
    mathuadat?: true
    _all?: true
  }

  export type BenthanhAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benthanh to aggregate.
     */
    where?: benthanhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benthanhs to fetch.
     */
    orderBy?: benthanhOrderByWithRelationInput | benthanhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: benthanhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benthanhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benthanhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned benthanhs
    **/
    _count?: true | BenthanhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenthanhAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenthanhSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenthanhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenthanhMaxAggregateInputType
  }

  export type GetBenthanhAggregateType<T extends BenthanhAggregateArgs> = {
        [P in keyof T & keyof AggregateBenthanh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenthanh[P]>
      : GetScalarType<T[P], AggregateBenthanh[P]>
  }




  export type benthanhGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: benthanhWhereInput
    orderBy?: benthanhOrderByWithAggregationInput | benthanhOrderByWithAggregationInput[]
    by: BenthanhScalarFieldEnum[] | BenthanhScalarFieldEnum
    having?: benthanhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenthanhCountAggregateInputType | true
    _avg?: BenthanhAvgAggregateInputType
    _sum?: BenthanhSumAggregateInputType
    _min?: BenthanhMinAggregateInputType
    _max?: BenthanhMaxAggregateInputType
  }

  export type BenthanhGroupByOutputType = {
    gid: number
    ma_xa: string | null
    so_to: number | null
    so_thua: number | null
    dien_tich: number | null
    loai_dat: string | null
    mathuadat: string | null
    _count: BenthanhCountAggregateOutputType | null
    _avg: BenthanhAvgAggregateOutputType | null
    _sum: BenthanhSumAggregateOutputType | null
    _min: BenthanhMinAggregateOutputType | null
    _max: BenthanhMaxAggregateOutputType | null
  }

  type GetBenthanhGroupByPayload<T extends benthanhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenthanhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenthanhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenthanhGroupByOutputType[P]>
            : GetScalarType<T[P], BenthanhGroupByOutputType[P]>
        }
      >
    >


  export type benthanhSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    so_to?: boolean
    so_thua?: boolean
    dien_tich?: boolean
    loai_dat?: boolean
    mathuadat?: boolean
  }, ExtArgs["result"]["benthanh"]>

  export type benthanhSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    so_to?: boolean
    so_thua?: boolean
    dien_tich?: boolean
    loai_dat?: boolean
    mathuadat?: boolean
  }, ExtArgs["result"]["benthanh"]>

  export type benthanhSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gid?: boolean
    ma_xa?: boolean
    so_to?: boolean
    so_thua?: boolean
    dien_tich?: boolean
    loai_dat?: boolean
    mathuadat?: boolean
  }, ExtArgs["result"]["benthanh"]>

  export type benthanhSelectScalar = {
    gid?: boolean
    ma_xa?: boolean
    so_to?: boolean
    so_thua?: boolean
    dien_tich?: boolean
    loai_dat?: boolean
    mathuadat?: boolean
  }

  export type benthanhOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gid" | "ma_xa" | "so_to" | "so_thua" | "dien_tich" | "loai_dat" | "mathuadat", ExtArgs["result"]["benthanh"]>

  export type $benthanhPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "benthanh"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gid: number
      ma_xa: string | null
      so_to: number | null
      so_thua: number | null
      dien_tich: number | null
      loai_dat: string | null
      mathuadat: string | null
    }, ExtArgs["result"]["benthanh"]>
    composites: {}
  }

  type benthanhGetPayload<S extends boolean | null | undefined | benthanhDefaultArgs> = $Result.GetResult<Prisma.$benthanhPayload, S>

  type benthanhCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<benthanhFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenthanhCountAggregateInputType | true
    }

  export interface benthanhDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['benthanh'], meta: { name: 'benthanh' } }
    /**
     * Find zero or one Benthanh that matches the filter.
     * @param {benthanhFindUniqueArgs} args - Arguments to find a Benthanh
     * @example
     * // Get one Benthanh
     * const benthanh = await prisma.benthanh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends benthanhFindUniqueArgs>(args: SelectSubset<T, benthanhFindUniqueArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benthanh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {benthanhFindUniqueOrThrowArgs} args - Arguments to find a Benthanh
     * @example
     * // Get one Benthanh
     * const benthanh = await prisma.benthanh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends benthanhFindUniqueOrThrowArgs>(args: SelectSubset<T, benthanhFindUniqueOrThrowArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benthanh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhFindFirstArgs} args - Arguments to find a Benthanh
     * @example
     * // Get one Benthanh
     * const benthanh = await prisma.benthanh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends benthanhFindFirstArgs>(args?: SelectSubset<T, benthanhFindFirstArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benthanh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhFindFirstOrThrowArgs} args - Arguments to find a Benthanh
     * @example
     * // Get one Benthanh
     * const benthanh = await prisma.benthanh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends benthanhFindFirstOrThrowArgs>(args?: SelectSubset<T, benthanhFindFirstOrThrowArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benthanhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benthanhs
     * const benthanhs = await prisma.benthanh.findMany()
     * 
     * // Get first 10 Benthanhs
     * const benthanhs = await prisma.benthanh.findMany({ take: 10 })
     * 
     * // Only select the `gid`
     * const benthanhWithGidOnly = await prisma.benthanh.findMany({ select: { gid: true } })
     * 
     */
    findMany<T extends benthanhFindManyArgs>(args?: SelectSubset<T, benthanhFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benthanh.
     * @param {benthanhCreateArgs} args - Arguments to create a Benthanh.
     * @example
     * // Create one Benthanh
     * const Benthanh = await prisma.benthanh.create({
     *   data: {
     *     // ... data to create a Benthanh
     *   }
     * })
     * 
     */
    create<T extends benthanhCreateArgs>(args: SelectSubset<T, benthanhCreateArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benthanhs.
     * @param {benthanhCreateManyArgs} args - Arguments to create many Benthanhs.
     * @example
     * // Create many Benthanhs
     * const benthanh = await prisma.benthanh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends benthanhCreateManyArgs>(args?: SelectSubset<T, benthanhCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benthanhs and returns the data saved in the database.
     * @param {benthanhCreateManyAndReturnArgs} args - Arguments to create many Benthanhs.
     * @example
     * // Create many Benthanhs
     * const benthanh = await prisma.benthanh.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benthanhs and only return the `gid`
     * const benthanhWithGidOnly = await prisma.benthanh.createManyAndReturn({
     *   select: { gid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends benthanhCreateManyAndReturnArgs>(args?: SelectSubset<T, benthanhCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benthanh.
     * @param {benthanhDeleteArgs} args - Arguments to delete one Benthanh.
     * @example
     * // Delete one Benthanh
     * const Benthanh = await prisma.benthanh.delete({
     *   where: {
     *     // ... filter to delete one Benthanh
     *   }
     * })
     * 
     */
    delete<T extends benthanhDeleteArgs>(args: SelectSubset<T, benthanhDeleteArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benthanh.
     * @param {benthanhUpdateArgs} args - Arguments to update one Benthanh.
     * @example
     * // Update one Benthanh
     * const benthanh = await prisma.benthanh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends benthanhUpdateArgs>(args: SelectSubset<T, benthanhUpdateArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benthanhs.
     * @param {benthanhDeleteManyArgs} args - Arguments to filter Benthanhs to delete.
     * @example
     * // Delete a few Benthanhs
     * const { count } = await prisma.benthanh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends benthanhDeleteManyArgs>(args?: SelectSubset<T, benthanhDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benthanhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benthanhs
     * const benthanh = await prisma.benthanh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends benthanhUpdateManyArgs>(args: SelectSubset<T, benthanhUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benthanhs and returns the data updated in the database.
     * @param {benthanhUpdateManyAndReturnArgs} args - Arguments to update many Benthanhs.
     * @example
     * // Update many Benthanhs
     * const benthanh = await prisma.benthanh.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benthanhs and only return the `gid`
     * const benthanhWithGidOnly = await prisma.benthanh.updateManyAndReturn({
     *   select: { gid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends benthanhUpdateManyAndReturnArgs>(args: SelectSubset<T, benthanhUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benthanh.
     * @param {benthanhUpsertArgs} args - Arguments to update or create a Benthanh.
     * @example
     * // Update or create a Benthanh
     * const benthanh = await prisma.benthanh.upsert({
     *   create: {
     *     // ... data to create a Benthanh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benthanh we want to update
     *   }
     * })
     */
    upsert<T extends benthanhUpsertArgs>(args: SelectSubset<T, benthanhUpsertArgs<ExtArgs>>): Prisma__benthanhClient<$Result.GetResult<Prisma.$benthanhPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benthanhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhCountArgs} args - Arguments to filter Benthanhs to count.
     * @example
     * // Count the number of Benthanhs
     * const count = await prisma.benthanh.count({
     *   where: {
     *     // ... the filter for the Benthanhs we want to count
     *   }
     * })
    **/
    count<T extends benthanhCountArgs>(
      args?: Subset<T, benthanhCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenthanhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benthanh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenthanhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenthanhAggregateArgs>(args: Subset<T, BenthanhAggregateArgs>): Prisma.PrismaPromise<GetBenthanhAggregateType<T>>

    /**
     * Group by Benthanh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benthanhGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends benthanhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: benthanhGroupByArgs['orderBy'] }
        : { orderBy?: benthanhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, benthanhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenthanhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the benthanh model
   */
  readonly fields: benthanhFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for benthanh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__benthanhClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the benthanh model
   */
  interface benthanhFieldRefs {
    readonly gid: FieldRef<"benthanh", 'Int'>
    readonly ma_xa: FieldRef<"benthanh", 'String'>
    readonly so_to: FieldRef<"benthanh", 'Float'>
    readonly so_thua: FieldRef<"benthanh", 'Float'>
    readonly dien_tich: FieldRef<"benthanh", 'Float'>
    readonly loai_dat: FieldRef<"benthanh", 'String'>
    readonly mathuadat: FieldRef<"benthanh", 'String'>
  }
    

  // Custom InputTypes
  /**
   * benthanh findUnique
   */
  export type benthanhFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter, which benthanh to fetch.
     */
    where: benthanhWhereUniqueInput
  }

  /**
   * benthanh findUniqueOrThrow
   */
  export type benthanhFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter, which benthanh to fetch.
     */
    where: benthanhWhereUniqueInput
  }

  /**
   * benthanh findFirst
   */
  export type benthanhFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter, which benthanh to fetch.
     */
    where?: benthanhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benthanhs to fetch.
     */
    orderBy?: benthanhOrderByWithRelationInput | benthanhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for benthanhs.
     */
    cursor?: benthanhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benthanhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benthanhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of benthanhs.
     */
    distinct?: BenthanhScalarFieldEnum | BenthanhScalarFieldEnum[]
  }

  /**
   * benthanh findFirstOrThrow
   */
  export type benthanhFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter, which benthanh to fetch.
     */
    where?: benthanhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benthanhs to fetch.
     */
    orderBy?: benthanhOrderByWithRelationInput | benthanhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for benthanhs.
     */
    cursor?: benthanhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benthanhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benthanhs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of benthanhs.
     */
    distinct?: BenthanhScalarFieldEnum | BenthanhScalarFieldEnum[]
  }

  /**
   * benthanh findMany
   */
  export type benthanhFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter, which benthanhs to fetch.
     */
    where?: benthanhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of benthanhs to fetch.
     */
    orderBy?: benthanhOrderByWithRelationInput | benthanhOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing benthanhs.
     */
    cursor?: benthanhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` benthanhs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` benthanhs.
     */
    skip?: number
    distinct?: BenthanhScalarFieldEnum | BenthanhScalarFieldEnum[]
  }

  /**
   * benthanh create
   */
  export type benthanhCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * The data needed to create a benthanh.
     */
    data?: XOR<benthanhCreateInput, benthanhUncheckedCreateInput>
  }

  /**
   * benthanh createMany
   */
  export type benthanhCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many benthanhs.
     */
    data: benthanhCreateManyInput | benthanhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * benthanh createManyAndReturn
   */
  export type benthanhCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * The data used to create many benthanhs.
     */
    data: benthanhCreateManyInput | benthanhCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * benthanh update
   */
  export type benthanhUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * The data needed to update a benthanh.
     */
    data: XOR<benthanhUpdateInput, benthanhUncheckedUpdateInput>
    /**
     * Choose, which benthanh to update.
     */
    where: benthanhWhereUniqueInput
  }

  /**
   * benthanh updateMany
   */
  export type benthanhUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update benthanhs.
     */
    data: XOR<benthanhUpdateManyMutationInput, benthanhUncheckedUpdateManyInput>
    /**
     * Filter which benthanhs to update
     */
    where?: benthanhWhereInput
    /**
     * Limit how many benthanhs to update.
     */
    limit?: number
  }

  /**
   * benthanh updateManyAndReturn
   */
  export type benthanhUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * The data used to update benthanhs.
     */
    data: XOR<benthanhUpdateManyMutationInput, benthanhUncheckedUpdateManyInput>
    /**
     * Filter which benthanhs to update
     */
    where?: benthanhWhereInput
    /**
     * Limit how many benthanhs to update.
     */
    limit?: number
  }

  /**
   * benthanh upsert
   */
  export type benthanhUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * The filter to search for the benthanh to update in case it exists.
     */
    where: benthanhWhereUniqueInput
    /**
     * In case the benthanh found by the `where` argument doesn't exist, create a new benthanh with this data.
     */
    create: XOR<benthanhCreateInput, benthanhUncheckedCreateInput>
    /**
     * In case the benthanh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<benthanhUpdateInput, benthanhUncheckedUpdateInput>
  }

  /**
   * benthanh delete
   */
  export type benthanhDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
    /**
     * Filter which benthanh to delete.
     */
    where: benthanhWhereUniqueInput
  }

  /**
   * benthanh deleteMany
   */
  export type benthanhDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benthanhs to delete
     */
    where?: benthanhWhereInput
    /**
     * Limit how many benthanhs to delete.
     */
    limit?: number
  }

  /**
   * benthanh without action
   */
  export type benthanhDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benthanh
     */
    select?: benthanhSelect<ExtArgs> | null
    /**
     * Omit specific fields from the benthanh
     */
    omit?: benthanhOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    deleted_by: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    deleted_by: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: string | null
    deleted_by: number | null
    deleted_at: Date | null
    is_deleted: boolean | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: string | null
    deleted_by: number | null
    deleted_at: Date | null
    is_deleted: boolean | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    full_name: number
    email: number
    phone: number
    password: number
    role: number
    deleted_by: number
    deleted_at: number
    is_deleted: number
    avatar: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    deleted_by?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    deleted_by?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    deleted_by?: true
    deleted_at?: true
    is_deleted?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    deleted_by?: true
    deleted_at?: true
    is_deleted?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    deleted_by?: true
    deleted_at?: true
    is_deleted?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    full_name: string | null
    email: string | null
    phone: string | null
    password: string
    role: string | null
    deleted_by: number | null
    deleted_at: Date | null
    is_deleted: boolean | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    deleted_by?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    deleted_by?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    deleted_by?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    deleted_by?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "full_name" | "email" | "phone" | "password" | "role" | "deleted_by" | "deleted_at" | "is_deleted" | "avatar" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      full_name: string | null
      email: string | null
      phone: string | null
      password: string
      role: string | null
      deleted_by: number | null
      deleted_at: Date | null
      is_deleted: boolean | null
      avatar: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly deleted_by: FieldRef<"users", 'Int'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly is_deleted: FieldRef<"users", 'Boolean'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


  export const GiaothongScalarFieldEnum: {
    gid: 'gid',
    ma_xa: 'ma_xa',
    dien_tich: 'dien_tich',
    ten_duong: 'ten_duong',
    id_gt: 'id_gt'
  };

  export type GiaothongScalarFieldEnum = (typeof GiaothongScalarFieldEnum)[keyof typeof GiaothongScalarFieldEnum]


  export const TimduongScalarFieldEnum: {
    gid: 'gid',
    ma_xa: 'ma_xa',
    dien_tich: 'dien_tich',
    ten_duong: 'ten_duong',
    id_gt: 'id_gt'
  };

  export type TimduongScalarFieldEnum = (typeof TimduongScalarFieldEnum)[keyof typeof TimduongScalarFieldEnum]


  export const BenthanhScalarFieldEnum: {
    gid: 'gid',
    ma_xa: 'ma_xa',
    so_to: 'so_to',
    so_thua: 'so_thua',
    dien_tich: 'dien_tich',
    loai_dat: 'loai_dat',
    mathuadat: 'mathuadat'
  };

  export type BenthanhScalarFieldEnum = (typeof BenthanhScalarFieldEnum)[keyof typeof BenthanhScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    deleted_by: 'deleted_by',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted',
    avatar: 'avatar',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type spatial_ref_sysWhereInput = {
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    srid?: IntFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }

  export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
  }

  export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }, "srid">

  export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
    _count?: spatial_ref_sysCountOrderByAggregateInput
    _avg?: spatial_ref_sysAvgOrderByAggregateInput
    _max?: spatial_ref_sysMaxOrderByAggregateInput
    _min?: spatial_ref_sysMinOrderByAggregateInput
    _sum?: spatial_ref_sysSumOrderByAggregateInput
  }

  export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    OR?: spatial_ref_sysScalarWhereWithAggregatesInput[]
    NOT?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    srid?: IntWithAggregatesFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
  }

  export type giaothongWhereInput = {
    AND?: giaothongWhereInput | giaothongWhereInput[]
    OR?: giaothongWhereInput[]
    NOT?: giaothongWhereInput | giaothongWhereInput[]
    gid?: IntFilter<"giaothong"> | number
    ma_xa?: StringNullableFilter<"giaothong"> | string | null
    dien_tich?: FloatNullableFilter<"giaothong"> | number | null
    ten_duong?: StringNullableFilter<"giaothong"> | string | null
    id_gt?: FloatNullableFilter<"giaothong"> | number | null
  }

  export type giaothongOrderByWithRelationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    ten_duong?: SortOrderInput | SortOrder
    id_gt?: SortOrderInput | SortOrder
  }

  export type giaothongWhereUniqueInput = Prisma.AtLeast<{
    gid?: number
    AND?: giaothongWhereInput | giaothongWhereInput[]
    OR?: giaothongWhereInput[]
    NOT?: giaothongWhereInput | giaothongWhereInput[]
    ma_xa?: StringNullableFilter<"giaothong"> | string | null
    dien_tich?: FloatNullableFilter<"giaothong"> | number | null
    ten_duong?: StringNullableFilter<"giaothong"> | string | null
    id_gt?: FloatNullableFilter<"giaothong"> | number | null
  }, "gid">

  export type giaothongOrderByWithAggregationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    ten_duong?: SortOrderInput | SortOrder
    id_gt?: SortOrderInput | SortOrder
    _count?: giaothongCountOrderByAggregateInput
    _avg?: giaothongAvgOrderByAggregateInput
    _max?: giaothongMaxOrderByAggregateInput
    _min?: giaothongMinOrderByAggregateInput
    _sum?: giaothongSumOrderByAggregateInput
  }

  export type giaothongScalarWhereWithAggregatesInput = {
    AND?: giaothongScalarWhereWithAggregatesInput | giaothongScalarWhereWithAggregatesInput[]
    OR?: giaothongScalarWhereWithAggregatesInput[]
    NOT?: giaothongScalarWhereWithAggregatesInput | giaothongScalarWhereWithAggregatesInput[]
    gid?: IntWithAggregatesFilter<"giaothong"> | number
    ma_xa?: StringNullableWithAggregatesFilter<"giaothong"> | string | null
    dien_tich?: FloatNullableWithAggregatesFilter<"giaothong"> | number | null
    ten_duong?: StringNullableWithAggregatesFilter<"giaothong"> | string | null
    id_gt?: FloatNullableWithAggregatesFilter<"giaothong"> | number | null
  }

  export type timduongWhereInput = {
    AND?: timduongWhereInput | timduongWhereInput[]
    OR?: timduongWhereInput[]
    NOT?: timduongWhereInput | timduongWhereInput[]
    gid?: IntFilter<"timduong"> | number
    ma_xa?: StringNullableFilter<"timduong"> | string | null
    dien_tich?: FloatNullableFilter<"timduong"> | number | null
    ten_duong?: StringNullableFilter<"timduong"> | string | null
    id_gt?: FloatNullableFilter<"timduong"> | number | null
  }

  export type timduongOrderByWithRelationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    ten_duong?: SortOrderInput | SortOrder
    id_gt?: SortOrderInput | SortOrder
  }

  export type timduongWhereUniqueInput = Prisma.AtLeast<{
    gid?: number
    AND?: timduongWhereInput | timduongWhereInput[]
    OR?: timduongWhereInput[]
    NOT?: timduongWhereInput | timduongWhereInput[]
    ma_xa?: StringNullableFilter<"timduong"> | string | null
    dien_tich?: FloatNullableFilter<"timduong"> | number | null
    ten_duong?: StringNullableFilter<"timduong"> | string | null
    id_gt?: FloatNullableFilter<"timduong"> | number | null
  }, "gid">

  export type timduongOrderByWithAggregationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    ten_duong?: SortOrderInput | SortOrder
    id_gt?: SortOrderInput | SortOrder
    _count?: timduongCountOrderByAggregateInput
    _avg?: timduongAvgOrderByAggregateInput
    _max?: timduongMaxOrderByAggregateInput
    _min?: timduongMinOrderByAggregateInput
    _sum?: timduongSumOrderByAggregateInput
  }

  export type timduongScalarWhereWithAggregatesInput = {
    AND?: timduongScalarWhereWithAggregatesInput | timduongScalarWhereWithAggregatesInput[]
    OR?: timduongScalarWhereWithAggregatesInput[]
    NOT?: timduongScalarWhereWithAggregatesInput | timduongScalarWhereWithAggregatesInput[]
    gid?: IntWithAggregatesFilter<"timduong"> | number
    ma_xa?: StringNullableWithAggregatesFilter<"timduong"> | string | null
    dien_tich?: FloatNullableWithAggregatesFilter<"timduong"> | number | null
    ten_duong?: StringNullableWithAggregatesFilter<"timduong"> | string | null
    id_gt?: FloatNullableWithAggregatesFilter<"timduong"> | number | null
  }

  export type benthanhWhereInput = {
    AND?: benthanhWhereInput | benthanhWhereInput[]
    OR?: benthanhWhereInput[]
    NOT?: benthanhWhereInput | benthanhWhereInput[]
    gid?: IntFilter<"benthanh"> | number
    ma_xa?: StringNullableFilter<"benthanh"> | string | null
    so_to?: FloatNullableFilter<"benthanh"> | number | null
    so_thua?: FloatNullableFilter<"benthanh"> | number | null
    dien_tich?: FloatNullableFilter<"benthanh"> | number | null
    loai_dat?: StringNullableFilter<"benthanh"> | string | null
    mathuadat?: StringNullableFilter<"benthanh"> | string | null
  }

  export type benthanhOrderByWithRelationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    so_to?: SortOrderInput | SortOrder
    so_thua?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    loai_dat?: SortOrderInput | SortOrder
    mathuadat?: SortOrderInput | SortOrder
  }

  export type benthanhWhereUniqueInput = Prisma.AtLeast<{
    gid?: number
    AND?: benthanhWhereInput | benthanhWhereInput[]
    OR?: benthanhWhereInput[]
    NOT?: benthanhWhereInput | benthanhWhereInput[]
    ma_xa?: StringNullableFilter<"benthanh"> | string | null
    so_to?: FloatNullableFilter<"benthanh"> | number | null
    so_thua?: FloatNullableFilter<"benthanh"> | number | null
    dien_tich?: FloatNullableFilter<"benthanh"> | number | null
    loai_dat?: StringNullableFilter<"benthanh"> | string | null
    mathuadat?: StringNullableFilter<"benthanh"> | string | null
  }, "gid">

  export type benthanhOrderByWithAggregationInput = {
    gid?: SortOrder
    ma_xa?: SortOrderInput | SortOrder
    so_to?: SortOrderInput | SortOrder
    so_thua?: SortOrderInput | SortOrder
    dien_tich?: SortOrderInput | SortOrder
    loai_dat?: SortOrderInput | SortOrder
    mathuadat?: SortOrderInput | SortOrder
    _count?: benthanhCountOrderByAggregateInput
    _avg?: benthanhAvgOrderByAggregateInput
    _max?: benthanhMaxOrderByAggregateInput
    _min?: benthanhMinOrderByAggregateInput
    _sum?: benthanhSumOrderByAggregateInput
  }

  export type benthanhScalarWhereWithAggregatesInput = {
    AND?: benthanhScalarWhereWithAggregatesInput | benthanhScalarWhereWithAggregatesInput[]
    OR?: benthanhScalarWhereWithAggregatesInput[]
    NOT?: benthanhScalarWhereWithAggregatesInput | benthanhScalarWhereWithAggregatesInput[]
    gid?: IntWithAggregatesFilter<"benthanh"> | number
    ma_xa?: StringNullableWithAggregatesFilter<"benthanh"> | string | null
    so_to?: FloatNullableWithAggregatesFilter<"benthanh"> | number | null
    so_thua?: FloatNullableWithAggregatesFilter<"benthanh"> | number | null
    dien_tich?: FloatNullableWithAggregatesFilter<"benthanh"> | number | null
    loai_dat?: StringNullableWithAggregatesFilter<"benthanh"> | string | null
    mathuadat?: StringNullableWithAggregatesFilter<"benthanh"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    full_name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    deleted_by?: IntNullableFilter<"users"> | number | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_deleted?: BoolNullableFilter<"users"> | boolean | null
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    deleted_by?: IntNullableFilter<"users"> | number | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_deleted?: BoolNullableFilter<"users"> | boolean | null
    avatar?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    deleted_by?: IntNullableWithAggregatesFilter<"users"> | number | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type spatial_ref_sysCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUncheckedCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateManyInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type giaothongCreateInput = {
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type giaothongUncheckedCreateInput = {
    gid?: number
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type giaothongUpdateInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type giaothongUncheckedUpdateInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type giaothongCreateManyInput = {
    gid?: number
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type giaothongUpdateManyMutationInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type giaothongUncheckedUpdateManyInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type timduongCreateInput = {
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type timduongUncheckedCreateInput = {
    gid?: number
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type timduongUpdateInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type timduongUncheckedUpdateInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type timduongCreateManyInput = {
    gid?: number
    ma_xa?: string | null
    dien_tich?: number | null
    ten_duong?: string | null
    id_gt?: number | null
  }

  export type timduongUpdateManyMutationInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type timduongUncheckedUpdateManyInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    ten_duong?: NullableStringFieldUpdateOperationsInput | string | null
    id_gt?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type benthanhCreateInput = {
    ma_xa?: string | null
    so_to?: number | null
    so_thua?: number | null
    dien_tich?: number | null
    loai_dat?: string | null
    mathuadat?: string | null
  }

  export type benthanhUncheckedCreateInput = {
    gid?: number
    ma_xa?: string | null
    so_to?: number | null
    so_thua?: number | null
    dien_tich?: number | null
    loai_dat?: string | null
    mathuadat?: string | null
  }

  export type benthanhUpdateInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    so_to?: NullableFloatFieldUpdateOperationsInput | number | null
    so_thua?: NullableFloatFieldUpdateOperationsInput | number | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    loai_dat?: NullableStringFieldUpdateOperationsInput | string | null
    mathuadat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type benthanhUncheckedUpdateInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    so_to?: NullableFloatFieldUpdateOperationsInput | number | null
    so_thua?: NullableFloatFieldUpdateOperationsInput | number | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    loai_dat?: NullableStringFieldUpdateOperationsInput | string | null
    mathuadat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type benthanhCreateManyInput = {
    gid?: number
    ma_xa?: string | null
    so_to?: number | null
    so_thua?: number | null
    dien_tich?: number | null
    loai_dat?: string | null
    mathuadat?: string | null
  }

  export type benthanhUpdateManyMutationInput = {
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    so_to?: NullableFloatFieldUpdateOperationsInput | number | null
    so_thua?: NullableFloatFieldUpdateOperationsInput | number | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    loai_dat?: NullableStringFieldUpdateOperationsInput | string | null
    mathuadat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type benthanhUncheckedUpdateManyInput = {
    gid?: IntFieldUpdateOperationsInput | number
    ma_xa?: NullableStringFieldUpdateOperationsInput | string | null
    so_to?: NullableFloatFieldUpdateOperationsInput | number | null
    so_thua?: NullableFloatFieldUpdateOperationsInput | number | null
    dien_tich?: NullableFloatFieldUpdateOperationsInput | number | null
    loai_dat?: NullableStringFieldUpdateOperationsInput | string | null
    mathuadat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    full_name?: string | null
    email?: string | null
    phone?: string | null
    password: string
    role?: string | null
    deleted_by?: number | null
    deleted_at?: Date | string | null
    is_deleted?: boolean | null
    avatar?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    full_name?: string | null
    email?: string | null
    phone?: string | null
    password: string
    role?: string | null
    deleted_by?: number | null
    deleted_at?: Date | string | null
    is_deleted?: boolean | null
    avatar?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    user_id?: number
    full_name?: string | null
    email?: string | null
    phone?: string | null
    password: string
    role?: string | null
    deleted_by?: number | null
    deleted_at?: Date | string | null
    is_deleted?: boolean | null
    avatar?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type giaothongCountOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type giaothongAvgOrderByAggregateInput = {
    gid?: SortOrder
    dien_tich?: SortOrder
    id_gt?: SortOrder
  }

  export type giaothongMaxOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type giaothongMinOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type giaothongSumOrderByAggregateInput = {
    gid?: SortOrder
    dien_tich?: SortOrder
    id_gt?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type timduongCountOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type timduongAvgOrderByAggregateInput = {
    gid?: SortOrder
    dien_tich?: SortOrder
    id_gt?: SortOrder
  }

  export type timduongMaxOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type timduongMinOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    dien_tich?: SortOrder
    ten_duong?: SortOrder
    id_gt?: SortOrder
  }

  export type timduongSumOrderByAggregateInput = {
    gid?: SortOrder
    dien_tich?: SortOrder
    id_gt?: SortOrder
  }

  export type benthanhCountOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    so_to?: SortOrder
    so_thua?: SortOrder
    dien_tich?: SortOrder
    loai_dat?: SortOrder
    mathuadat?: SortOrder
  }

  export type benthanhAvgOrderByAggregateInput = {
    gid?: SortOrder
    so_to?: SortOrder
    so_thua?: SortOrder
    dien_tich?: SortOrder
  }

  export type benthanhMaxOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    so_to?: SortOrder
    so_thua?: SortOrder
    dien_tich?: SortOrder
    loai_dat?: SortOrder
    mathuadat?: SortOrder
  }

  export type benthanhMinOrderByAggregateInput = {
    gid?: SortOrder
    ma_xa?: SortOrder
    so_to?: SortOrder
    so_thua?: SortOrder
    dien_tich?: SortOrder
    loai_dat?: SortOrder
    mathuadat?: SortOrder
  }

  export type benthanhSumOrderByAggregateInput = {
    gid?: SortOrder
    so_to?: SortOrder
    so_thua?: SortOrder
    dien_tich?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_by?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    deleted_by?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_by?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_by?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    deleted_by?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}