
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model UserContentProgress
 * 
 */
export type UserContentProgress = $Result.DefaultSelection<Prisma.$UserContentProgressPayload>
/**
 * Model UserCollectionProgress
 * 
 */
export type UserCollectionProgress = $Result.DefaultSelection<Prisma.$UserCollectionProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Answer: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
};

export type Answer = (typeof Answer)[keyof typeof Answer]


export const ContentType: {
  MATERI: 'MATERI',
  SOAL: 'SOAL'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Answer = $Enums.Answer

export const Answer: typeof $Enums.Answer

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userContentProgress`: Exposes CRUD operations for the **UserContentProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContentProgresses
    * const userContentProgresses = await prisma.userContentProgress.findMany()
    * ```
    */
  get userContentProgress(): Prisma.UserContentProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCollectionProgress`: Exposes CRUD operations for the **UserCollectionProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCollectionProgresses
    * const userCollectionProgresses = await prisma.userCollectionProgress.findMany()
    * ```
    */
  get userCollectionProgress(): Prisma.UserCollectionProgressDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    VerificationToken: 'VerificationToken',
    Collection: 'Collection',
    Content: 'Content',
    UserContentProgress: 'UserContentProgress',
    UserCollectionProgress: 'UserCollectionProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationToken" | "collection" | "content" | "userContentProgress" | "userCollectionProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      UserContentProgress: {
        payload: Prisma.$UserContentProgressPayload<ExtArgs>
        fields: Prisma.UserContentProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContentProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContentProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          findFirst: {
            args: Prisma.UserContentProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContentProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          findMany: {
            args: Prisma.UserContentProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>[]
          }
          create: {
            args: Prisma.UserContentProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          createMany: {
            args: Prisma.UserContentProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserContentProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          update: {
            args: Prisma.UserContentProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserContentProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserContentProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserContentProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContentProgressPayload>
          }
          aggregate: {
            args: Prisma.UserContentProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserContentProgress>
          }
          groupBy: {
            args: Prisma.UserContentProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserContentProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserContentProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserContentProgressCountAggregateOutputType> | number
          }
        }
      }
      UserCollectionProgress: {
        payload: Prisma.$UserCollectionProgressPayload<ExtArgs>
        fields: Prisma.UserCollectionProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCollectionProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCollectionProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCollectionProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCollectionProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          findMany: {
            args: Prisma.UserCollectionProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>[]
          }
          create: {
            args: Prisma.UserCollectionProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          createMany: {
            args: Prisma.UserCollectionProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCollectionProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          update: {
            args: Prisma.UserCollectionProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCollectionProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCollectionProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCollectionProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCollectionProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCollectionProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCollectionProgress>
          }
          groupBy: {
            args: Prisma.UserCollectionProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCollectionProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCollectionProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCollectionProgressCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    collection?: CollectionOmit
    content?: ContentOmit
    userContentProgress?: UserContentProgressOmit
    userCollectionProgress?: UserCollectionProgressOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserCollectionProgress: number
    UserContentProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCollectionProgress?: boolean | UserCountOutputTypeCountUserCollectionProgressArgs
    UserContentProgress?: boolean | UserCountOutputTypeCountUserContentProgressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCollectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserContentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContentProgressWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    contents: number
    UserCollectionProgress: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | CollectionCountOutputTypeCountContentsArgs
    UserCollectionProgress?: boolean | CollectionCountOutputTypeCountUserCollectionProgressArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountUserCollectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionProgressWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    UserContentProgress: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserContentProgress?: boolean | ContentCountOutputTypeCountUserContentProgressArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountUserContentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContentProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    phone: string | null
    phoneVerified: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    phone: string | null
    phoneVerified: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    emailVerified: number
    image: number
    phone: number
    phoneVerified: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string
    email: string
    password: string
    emailVerified: Date | null
    image: string | null
    phone: string
    phoneVerified: Date | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    VerificationToken?: boolean | User$VerificationTokenArgs<ExtArgs>
    UserCollectionProgress?: boolean | User$UserCollectionProgressArgs<ExtArgs>
    UserContentProgress?: boolean | User$UserContentProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "emailVerified" | "image" | "phone" | "phoneVerified" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VerificationToken?: boolean | User$VerificationTokenArgs<ExtArgs>
    UserCollectionProgress?: boolean | User$UserCollectionProgressArgs<ExtArgs>
    UserContentProgress?: boolean | User$UserContentProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      VerificationToken: Prisma.$VerificationTokenPayload<ExtArgs> | null
      UserCollectionProgress: Prisma.$UserCollectionProgressPayload<ExtArgs>[]
      UserContentProgress: Prisma.$UserContentProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      password: string
      emailVerified: Date | null
      image: string | null
      phone: string
      phoneVerified: Date | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VerificationToken<T extends User$VerificationTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$VerificationTokenArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserCollectionProgress<T extends User$UserCollectionProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$UserCollectionProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserContentProgress<T extends User$UserContentProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$UserContentProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.VerificationToken
   */
  export type User$VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    where?: VerificationTokenWhereInput
  }

  /**
   * User.UserCollectionProgress
   */
  export type User$UserCollectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    where?: UserCollectionProgressWhereInput
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    cursor?: UserCollectionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollectionProgressScalarFieldEnum | UserCollectionProgressScalarFieldEnum[]
  }

  /**
   * User.UserContentProgress
   */
  export type User$UserContentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    where?: UserContentProgressWhereInput
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    cursor?: UserContentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContentProgressScalarFieldEnum | UserContentProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _avg: VerificationTokenAvgAggregateOutputType | null
    _sum: VerificationTokenSumAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenAvgAggregateOutputType = {
    token: number | null
  }

  export type VerificationTokenSumAggregateOutputType = {
    token: number | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    token: number | null
    expiredAt: Date | null
    userId: string | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    token: number | null
    expiredAt: Date | null
    userId: string | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    token: number
    expiredAt: number
    userId: number
    _all: number
  }


  export type VerificationTokenAvgAggregateInputType = {
    token?: true
  }

  export type VerificationTokenSumAggregateInputType = {
    token?: true
  }

  export type VerificationTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiredAt?: true
    userId?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiredAt?: true
    userId?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiredAt?: true
    userId?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _avg?: VerificationTokenAvgAggregateInputType
    _sum?: VerificationTokenSumAggregateInputType
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    token: number
    expiredAt: Date
    userId: string
    _count: VerificationTokenCountAggregateOutputType | null
    _avg: VerificationTokenAvgAggregateOutputType | null
    _sum: VerificationTokenSumAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiredAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiredAt?: boolean
    userId?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiredAt" | "userId", ExtArgs["result"]["verificationToken"]>
  export type VerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: number
      expiredAt: Date
      userId: string
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'Int'>
    readonly expiredAt: FieldRef<"VerificationToken", 'DateTime'>
    readonly userId: FieldRef<"VerificationToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    sort: number | null
  }

  export type CollectionSumAggregateOutputType = {
    sort: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.ContentType | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.ContentType | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    sort: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    sort?: true
  }

  export type CollectionSumAggregateInputType = {
    sort?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    type: $Enums.ContentType
    sort: number | null
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contents?: boolean | Collection$contentsArgs<ExtArgs>
    UserCollectionProgress?: boolean | Collection$UserCollectionProgressArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>



  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "sort" | "createdAt" | "updatedAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | Collection$contentsArgs<ExtArgs>
    UserCollectionProgress?: boolean | Collection$UserCollectionProgressArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      contents: Prisma.$ContentPayload<ExtArgs>[]
      UserCollectionProgress: Prisma.$UserCollectionProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      type: $Enums.ContentType
      sort: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contents<T extends Collection$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserCollectionProgress<T extends Collection$UserCollectionProgressArgs<ExtArgs> = {}>(args?: Subset<T, Collection$UserCollectionProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly type: FieldRef<"Collection", 'ContentType'>
    readonly sort: FieldRef<"Collection", 'Int'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.contents
   */
  export type Collection$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Collection.UserCollectionProgress
   */
  export type Collection$UserCollectionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    where?: UserCollectionProgressWhereInput
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    cursor?: UserCollectionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollectionProgressScalarFieldEnum | UserCollectionProgressScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    sort: number | null
  }

  export type ContentSumAggregateOutputType = {
    sort: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    question: string | null
    vr: string | null
    answer: $Enums.Answer | null
    choiceA: string | null
    choiceB: string | null
    choiceC: string | null
    choiceD: string | null
    createdAt: Date | null
    updatedAt: Date | null
    collectionId: string | null
    sort: number | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    question: string | null
    vr: string | null
    answer: $Enums.Answer | null
    choiceA: string | null
    choiceB: string | null
    choiceC: string | null
    choiceD: string | null
    createdAt: Date | null
    updatedAt: Date | null
    collectionId: string | null
    sort: number | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    body: number
    question: number
    vr: number
    answer: number
    choiceA: number
    choiceB: number
    choiceC: number
    choiceD: number
    createdAt: number
    updatedAt: number
    collectionId: number
    sort: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    sort?: true
  }

  export type ContentSumAggregateInputType = {
    sort?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    question?: true
    vr?: true
    answer?: true
    choiceA?: true
    choiceB?: true
    choiceC?: true
    choiceD?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    sort?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    question?: true
    vr?: true
    answer?: true
    choiceA?: true
    choiceB?: true
    choiceC?: true
    choiceD?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    sort?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    question?: true
    vr?: true
    answer?: true
    choiceA?: true
    choiceB?: true
    choiceC?: true
    choiceD?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    sort?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    title: string | null
    body: string | null
    question: string | null
    vr: string | null
    answer: $Enums.Answer | null
    choiceA: string | null
    choiceB: string | null
    choiceC: string | null
    choiceD: string | null
    createdAt: Date
    updatedAt: Date
    collectionId: string
    sort: number
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    question?: boolean
    vr?: boolean
    answer?: boolean
    choiceA?: boolean
    choiceB?: boolean
    choiceC?: boolean
    choiceD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    sort?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    UserContentProgress?: boolean | Content$UserContentProgressArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>



  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    question?: boolean
    vr?: boolean
    answer?: boolean
    choiceA?: boolean
    choiceB?: boolean
    choiceC?: boolean
    choiceD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    sort?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "question" | "vr" | "answer" | "choiceA" | "choiceB" | "choiceC" | "choiceD" | "createdAt" | "updatedAt" | "collectionId" | "sort", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    UserContentProgress?: boolean | Content$UserContentProgressArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      UserContentProgress: Prisma.$UserContentProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      body: string | null
      question: string | null
      vr: string | null
      answer: $Enums.Answer | null
      choiceA: string | null
      choiceB: string | null
      choiceC: string | null
      choiceD: string | null
      createdAt: Date
      updatedAt: Date
      collectionId: string
      sort: number
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserContentProgress<T extends Content$UserContentProgressArgs<ExtArgs> = {}>(args?: Subset<T, Content$UserContentProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly body: FieldRef<"Content", 'String'>
    readonly question: FieldRef<"Content", 'String'>
    readonly vr: FieldRef<"Content", 'String'>
    readonly answer: FieldRef<"Content", 'Answer'>
    readonly choiceA: FieldRef<"Content", 'String'>
    readonly choiceB: FieldRef<"Content", 'String'>
    readonly choiceC: FieldRef<"Content", 'String'>
    readonly choiceD: FieldRef<"Content", 'String'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
    readonly collectionId: FieldRef<"Content", 'String'>
    readonly sort: FieldRef<"Content", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.UserContentProgress
   */
  export type Content$UserContentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    where?: UserContentProgressWhereInput
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    cursor?: UserContentProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContentProgressScalarFieldEnum | UserContentProgressScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model UserContentProgress
   */

  export type AggregateUserContentProgress = {
    _count: UserContentProgressCountAggregateOutputType | null
    _avg: UserContentProgressAvgAggregateOutputType | null
    _sum: UserContentProgressSumAggregateOutputType | null
    _min: UserContentProgressMinAggregateOutputType | null
    _max: UserContentProgressMaxAggregateOutputType | null
  }

  export type UserContentProgressAvgAggregateOutputType = {
    score: number | null
  }

  export type UserContentProgressSumAggregateOutputType = {
    score: number | null
  }

  export type UserContentProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    score: number | null
    openedAt: Date | null
  }

  export type UserContentProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    score: number | null
    openedAt: Date | null
  }

  export type UserContentProgressCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    score: number
    openedAt: number
    _all: number
  }


  export type UserContentProgressAvgAggregateInputType = {
    score?: true
  }

  export type UserContentProgressSumAggregateInputType = {
    score?: true
  }

  export type UserContentProgressMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    score?: true
    openedAt?: true
  }

  export type UserContentProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    score?: true
    openedAt?: true
  }

  export type UserContentProgressCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    score?: true
    openedAt?: true
    _all?: true
  }

  export type UserContentProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContentProgress to aggregate.
     */
    where?: UserContentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContentProgresses to fetch.
     */
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContentProgresses
    **/
    _count?: true | UserContentProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserContentProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserContentProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContentProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContentProgressMaxAggregateInputType
  }

  export type GetUserContentProgressAggregateType<T extends UserContentProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContentProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContentProgress[P]>
      : GetScalarType<T[P], AggregateUserContentProgress[P]>
  }




  export type UserContentProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContentProgressWhereInput
    orderBy?: UserContentProgressOrderByWithAggregationInput | UserContentProgressOrderByWithAggregationInput[]
    by: UserContentProgressScalarFieldEnum[] | UserContentProgressScalarFieldEnum
    having?: UserContentProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContentProgressCountAggregateInputType | true
    _avg?: UserContentProgressAvgAggregateInputType
    _sum?: UserContentProgressSumAggregateInputType
    _min?: UserContentProgressMinAggregateInputType
    _max?: UserContentProgressMaxAggregateInputType
  }

  export type UserContentProgressGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    score: number | null
    openedAt: Date
    _count: UserContentProgressCountAggregateOutputType | null
    _avg: UserContentProgressAvgAggregateOutputType | null
    _sum: UserContentProgressSumAggregateOutputType | null
    _min: UserContentProgressMinAggregateOutputType | null
    _max: UserContentProgressMaxAggregateOutputType | null
  }

  type GetUserContentProgressGroupByPayload<T extends UserContentProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContentProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContentProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContentProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserContentProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserContentProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    score?: boolean
    openedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContentProgress"]>



  export type UserContentProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    score?: boolean
    openedAt?: boolean
  }

  export type UserContentProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "score" | "openedAt", ExtArgs["result"]["userContentProgress"]>
  export type UserContentProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $UserContentProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContentProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      score: number | null
      openedAt: Date
    }, ExtArgs["result"]["userContentProgress"]>
    composites: {}
  }

  type UserContentProgressGetPayload<S extends boolean | null | undefined | UserContentProgressDefaultArgs> = $Result.GetResult<Prisma.$UserContentProgressPayload, S>

  type UserContentProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserContentProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserContentProgressCountAggregateInputType | true
    }

  export interface UserContentProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContentProgress'], meta: { name: 'UserContentProgress' } }
    /**
     * Find zero or one UserContentProgress that matches the filter.
     * @param {UserContentProgressFindUniqueArgs} args - Arguments to find a UserContentProgress
     * @example
     * // Get one UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserContentProgressFindUniqueArgs>(args: SelectSubset<T, UserContentProgressFindUniqueArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserContentProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserContentProgressFindUniqueOrThrowArgs} args - Arguments to find a UserContentProgress
     * @example
     * // Get one UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserContentProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserContentProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContentProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressFindFirstArgs} args - Arguments to find a UserContentProgress
     * @example
     * // Get one UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserContentProgressFindFirstArgs>(args?: SelectSubset<T, UserContentProgressFindFirstArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContentProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressFindFirstOrThrowArgs} args - Arguments to find a UserContentProgress
     * @example
     * // Get one UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserContentProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserContentProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserContentProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContentProgresses
     * const userContentProgresses = await prisma.userContentProgress.findMany()
     * 
     * // Get first 10 UserContentProgresses
     * const userContentProgresses = await prisma.userContentProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userContentProgressWithIdOnly = await prisma.userContentProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserContentProgressFindManyArgs>(args?: SelectSubset<T, UserContentProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserContentProgress.
     * @param {UserContentProgressCreateArgs} args - Arguments to create a UserContentProgress.
     * @example
     * // Create one UserContentProgress
     * const UserContentProgress = await prisma.userContentProgress.create({
     *   data: {
     *     // ... data to create a UserContentProgress
     *   }
     * })
     * 
     */
    create<T extends UserContentProgressCreateArgs>(args: SelectSubset<T, UserContentProgressCreateArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserContentProgresses.
     * @param {UserContentProgressCreateManyArgs} args - Arguments to create many UserContentProgresses.
     * @example
     * // Create many UserContentProgresses
     * const userContentProgress = await prisma.userContentProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserContentProgressCreateManyArgs>(args?: SelectSubset<T, UserContentProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserContentProgress.
     * @param {UserContentProgressDeleteArgs} args - Arguments to delete one UserContentProgress.
     * @example
     * // Delete one UserContentProgress
     * const UserContentProgress = await prisma.userContentProgress.delete({
     *   where: {
     *     // ... filter to delete one UserContentProgress
     *   }
     * })
     * 
     */
    delete<T extends UserContentProgressDeleteArgs>(args: SelectSubset<T, UserContentProgressDeleteArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserContentProgress.
     * @param {UserContentProgressUpdateArgs} args - Arguments to update one UserContentProgress.
     * @example
     * // Update one UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserContentProgressUpdateArgs>(args: SelectSubset<T, UserContentProgressUpdateArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserContentProgresses.
     * @param {UserContentProgressDeleteManyArgs} args - Arguments to filter UserContentProgresses to delete.
     * @example
     * // Delete a few UserContentProgresses
     * const { count } = await prisma.userContentProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserContentProgressDeleteManyArgs>(args?: SelectSubset<T, UserContentProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContentProgresses
     * const userContentProgress = await prisma.userContentProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserContentProgressUpdateManyArgs>(args: SelectSubset<T, UserContentProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserContentProgress.
     * @param {UserContentProgressUpsertArgs} args - Arguments to update or create a UserContentProgress.
     * @example
     * // Update or create a UserContentProgress
     * const userContentProgress = await prisma.userContentProgress.upsert({
     *   create: {
     *     // ... data to create a UserContentProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContentProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserContentProgressUpsertArgs>(args: SelectSubset<T, UserContentProgressUpsertArgs<ExtArgs>>): Prisma__UserContentProgressClient<$Result.GetResult<Prisma.$UserContentProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserContentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressCountArgs} args - Arguments to filter UserContentProgresses to count.
     * @example
     * // Count the number of UserContentProgresses
     * const count = await prisma.userContentProgress.count({
     *   where: {
     *     // ... the filter for the UserContentProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserContentProgressCountArgs>(
      args?: Subset<T, UserContentProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContentProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserContentProgressAggregateArgs>(args: Subset<T, UserContentProgressAggregateArgs>): Prisma.PrismaPromise<GetUserContentProgressAggregateType<T>>

    /**
     * Group by UserContentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContentProgressGroupByArgs} args - Group by arguments.
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
      T extends UserContentProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContentProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserContentProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserContentProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContentProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContentProgress model
   */
  readonly fields: UserContentProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContentProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContentProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserContentProgress model
   */
  interface UserContentProgressFieldRefs {
    readonly id: FieldRef<"UserContentProgress", 'String'>
    readonly userId: FieldRef<"UserContentProgress", 'String'>
    readonly contentId: FieldRef<"UserContentProgress", 'String'>
    readonly score: FieldRef<"UserContentProgress", 'Float'>
    readonly openedAt: FieldRef<"UserContentProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserContentProgress findUnique
   */
  export type UserContentProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserContentProgress to fetch.
     */
    where: UserContentProgressWhereUniqueInput
  }

  /**
   * UserContentProgress findUniqueOrThrow
   */
  export type UserContentProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserContentProgress to fetch.
     */
    where: UserContentProgressWhereUniqueInput
  }

  /**
   * UserContentProgress findFirst
   */
  export type UserContentProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserContentProgress to fetch.
     */
    where?: UserContentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContentProgresses to fetch.
     */
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContentProgresses.
     */
    cursor?: UserContentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContentProgresses.
     */
    distinct?: UserContentProgressScalarFieldEnum | UserContentProgressScalarFieldEnum[]
  }

  /**
   * UserContentProgress findFirstOrThrow
   */
  export type UserContentProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserContentProgress to fetch.
     */
    where?: UserContentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContentProgresses to fetch.
     */
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContentProgresses.
     */
    cursor?: UserContentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContentProgresses.
     */
    distinct?: UserContentProgressScalarFieldEnum | UserContentProgressScalarFieldEnum[]
  }

  /**
   * UserContentProgress findMany
   */
  export type UserContentProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserContentProgresses to fetch.
     */
    where?: UserContentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContentProgresses to fetch.
     */
    orderBy?: UserContentProgressOrderByWithRelationInput | UserContentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContentProgresses.
     */
    cursor?: UserContentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContentProgresses.
     */
    skip?: number
    distinct?: UserContentProgressScalarFieldEnum | UserContentProgressScalarFieldEnum[]
  }

  /**
   * UserContentProgress create
   */
  export type UserContentProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContentProgress.
     */
    data: XOR<UserContentProgressCreateInput, UserContentProgressUncheckedCreateInput>
  }

  /**
   * UserContentProgress createMany
   */
  export type UserContentProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContentProgresses.
     */
    data: UserContentProgressCreateManyInput | UserContentProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserContentProgress update
   */
  export type UserContentProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContentProgress.
     */
    data: XOR<UserContentProgressUpdateInput, UserContentProgressUncheckedUpdateInput>
    /**
     * Choose, which UserContentProgress to update.
     */
    where: UserContentProgressWhereUniqueInput
  }

  /**
   * UserContentProgress updateMany
   */
  export type UserContentProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContentProgresses.
     */
    data: XOR<UserContentProgressUpdateManyMutationInput, UserContentProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserContentProgresses to update
     */
    where?: UserContentProgressWhereInput
    /**
     * Limit how many UserContentProgresses to update.
     */
    limit?: number
  }

  /**
   * UserContentProgress upsert
   */
  export type UserContentProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContentProgress to update in case it exists.
     */
    where: UserContentProgressWhereUniqueInput
    /**
     * In case the UserContentProgress found by the `where` argument doesn't exist, create a new UserContentProgress with this data.
     */
    create: XOR<UserContentProgressCreateInput, UserContentProgressUncheckedCreateInput>
    /**
     * In case the UserContentProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContentProgressUpdateInput, UserContentProgressUncheckedUpdateInput>
  }

  /**
   * UserContentProgress delete
   */
  export type UserContentProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
    /**
     * Filter which UserContentProgress to delete.
     */
    where: UserContentProgressWhereUniqueInput
  }

  /**
   * UserContentProgress deleteMany
   */
  export type UserContentProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContentProgresses to delete
     */
    where?: UserContentProgressWhereInput
    /**
     * Limit how many UserContentProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserContentProgress without action
   */
  export type UserContentProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContentProgress
     */
    select?: UserContentProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContentProgress
     */
    omit?: UserContentProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContentProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserCollectionProgress
   */

  export type AggregateUserCollectionProgress = {
    _count: UserCollectionProgressCountAggregateOutputType | null
    _avg: UserCollectionProgressAvgAggregateOutputType | null
    _sum: UserCollectionProgressSumAggregateOutputType | null
    _min: UserCollectionProgressMinAggregateOutputType | null
    _max: UserCollectionProgressMaxAggregateOutputType | null
  }

  export type UserCollectionProgressAvgAggregateOutputType = {
    score: number | null
  }

  export type UserCollectionProgressSumAggregateOutputType = {
    score: number | null
  }

  export type UserCollectionProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    collectionId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCollectionProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    collectionId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCollectionProgressCountAggregateOutputType = {
    id: number
    userId: number
    collectionId: number
    openedContentIds: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCollectionProgressAvgAggregateInputType = {
    score?: true
  }

  export type UserCollectionProgressSumAggregateInputType = {
    score?: true
  }

  export type UserCollectionProgressMinAggregateInputType = {
    id?: true
    userId?: true
    collectionId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCollectionProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    collectionId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCollectionProgressCountAggregateInputType = {
    id?: true
    userId?: true
    collectionId?: true
    openedContentIds?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCollectionProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCollectionProgress to aggregate.
     */
    where?: UserCollectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollectionProgresses to fetch.
     */
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCollectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCollectionProgresses
    **/
    _count?: true | UserCollectionProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCollectionProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCollectionProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCollectionProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCollectionProgressMaxAggregateInputType
  }

  export type GetUserCollectionProgressAggregateType<T extends UserCollectionProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCollectionProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCollectionProgress[P]>
      : GetScalarType<T[P], AggregateUserCollectionProgress[P]>
  }




  export type UserCollectionProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionProgressWhereInput
    orderBy?: UserCollectionProgressOrderByWithAggregationInput | UserCollectionProgressOrderByWithAggregationInput[]
    by: UserCollectionProgressScalarFieldEnum[] | UserCollectionProgressScalarFieldEnum
    having?: UserCollectionProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCollectionProgressCountAggregateInputType | true
    _avg?: UserCollectionProgressAvgAggregateInputType
    _sum?: UserCollectionProgressSumAggregateInputType
    _min?: UserCollectionProgressMinAggregateInputType
    _max?: UserCollectionProgressMaxAggregateInputType
  }

  export type UserCollectionProgressGroupByOutputType = {
    id: string
    userId: string
    collectionId: string
    openedContentIds: JsonValue | null
    score: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCollectionProgressCountAggregateOutputType | null
    _avg: UserCollectionProgressAvgAggregateOutputType | null
    _sum: UserCollectionProgressSumAggregateOutputType | null
    _min: UserCollectionProgressMinAggregateOutputType | null
    _max: UserCollectionProgressMaxAggregateOutputType | null
  }

  type GetUserCollectionProgressGroupByPayload<T extends UserCollectionProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCollectionProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCollectionProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCollectionProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCollectionProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCollectionProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    collectionId?: boolean
    openedContentIds?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCollectionProgress"]>



  export type UserCollectionProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    collectionId?: boolean
    openedContentIds?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCollectionProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "collectionId" | "openedContentIds" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["userCollectionProgress"]>
  export type UserCollectionProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $UserCollectionProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCollectionProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      collectionId: string
      openedContentIds: Prisma.JsonValue | null
      score: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCollectionProgress"]>
    composites: {}
  }

  type UserCollectionProgressGetPayload<S extends boolean | null | undefined | UserCollectionProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCollectionProgressPayload, S>

  type UserCollectionProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCollectionProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCollectionProgressCountAggregateInputType | true
    }

  export interface UserCollectionProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCollectionProgress'], meta: { name: 'UserCollectionProgress' } }
    /**
     * Find zero or one UserCollectionProgress that matches the filter.
     * @param {UserCollectionProgressFindUniqueArgs} args - Arguments to find a UserCollectionProgress
     * @example
     * // Get one UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCollectionProgressFindUniqueArgs>(args: SelectSubset<T, UserCollectionProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCollectionProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCollectionProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCollectionProgress
     * @example
     * // Get one UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCollectionProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCollectionProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCollectionProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressFindFirstArgs} args - Arguments to find a UserCollectionProgress
     * @example
     * // Get one UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCollectionProgressFindFirstArgs>(args?: SelectSubset<T, UserCollectionProgressFindFirstArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCollectionProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressFindFirstOrThrowArgs} args - Arguments to find a UserCollectionProgress
     * @example
     * // Get one UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCollectionProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCollectionProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCollectionProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCollectionProgresses
     * const userCollectionProgresses = await prisma.userCollectionProgress.findMany()
     * 
     * // Get first 10 UserCollectionProgresses
     * const userCollectionProgresses = await prisma.userCollectionProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCollectionProgressWithIdOnly = await prisma.userCollectionProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCollectionProgressFindManyArgs>(args?: SelectSubset<T, UserCollectionProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCollectionProgress.
     * @param {UserCollectionProgressCreateArgs} args - Arguments to create a UserCollectionProgress.
     * @example
     * // Create one UserCollectionProgress
     * const UserCollectionProgress = await prisma.userCollectionProgress.create({
     *   data: {
     *     // ... data to create a UserCollectionProgress
     *   }
     * })
     * 
     */
    create<T extends UserCollectionProgressCreateArgs>(args: SelectSubset<T, UserCollectionProgressCreateArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCollectionProgresses.
     * @param {UserCollectionProgressCreateManyArgs} args - Arguments to create many UserCollectionProgresses.
     * @example
     * // Create many UserCollectionProgresses
     * const userCollectionProgress = await prisma.userCollectionProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCollectionProgressCreateManyArgs>(args?: SelectSubset<T, UserCollectionProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCollectionProgress.
     * @param {UserCollectionProgressDeleteArgs} args - Arguments to delete one UserCollectionProgress.
     * @example
     * // Delete one UserCollectionProgress
     * const UserCollectionProgress = await prisma.userCollectionProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCollectionProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCollectionProgressDeleteArgs>(args: SelectSubset<T, UserCollectionProgressDeleteArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCollectionProgress.
     * @param {UserCollectionProgressUpdateArgs} args - Arguments to update one UserCollectionProgress.
     * @example
     * // Update one UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCollectionProgressUpdateArgs>(args: SelectSubset<T, UserCollectionProgressUpdateArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCollectionProgresses.
     * @param {UserCollectionProgressDeleteManyArgs} args - Arguments to filter UserCollectionProgresses to delete.
     * @example
     * // Delete a few UserCollectionProgresses
     * const { count } = await prisma.userCollectionProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCollectionProgressDeleteManyArgs>(args?: SelectSubset<T, UserCollectionProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCollectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCollectionProgresses
     * const userCollectionProgress = await prisma.userCollectionProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCollectionProgressUpdateManyArgs>(args: SelectSubset<T, UserCollectionProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCollectionProgress.
     * @param {UserCollectionProgressUpsertArgs} args - Arguments to update or create a UserCollectionProgress.
     * @example
     * // Update or create a UserCollectionProgress
     * const userCollectionProgress = await prisma.userCollectionProgress.upsert({
     *   create: {
     *     // ... data to create a UserCollectionProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCollectionProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCollectionProgressUpsertArgs>(args: SelectSubset<T, UserCollectionProgressUpsertArgs<ExtArgs>>): Prisma__UserCollectionProgressClient<$Result.GetResult<Prisma.$UserCollectionProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCollectionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressCountArgs} args - Arguments to filter UserCollectionProgresses to count.
     * @example
     * // Count the number of UserCollectionProgresses
     * const count = await prisma.userCollectionProgress.count({
     *   where: {
     *     // ... the filter for the UserCollectionProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCollectionProgressCountArgs>(
      args?: Subset<T, UserCollectionProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCollectionProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCollectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCollectionProgressAggregateArgs>(args: Subset<T, UserCollectionProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCollectionProgressAggregateType<T>>

    /**
     * Group by UserCollectionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCollectionProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCollectionProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCollectionProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCollectionProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCollectionProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCollectionProgress model
   */
  readonly fields: UserCollectionProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCollectionProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCollectionProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCollectionProgress model
   */
  interface UserCollectionProgressFieldRefs {
    readonly id: FieldRef<"UserCollectionProgress", 'String'>
    readonly userId: FieldRef<"UserCollectionProgress", 'String'>
    readonly collectionId: FieldRef<"UserCollectionProgress", 'String'>
    readonly openedContentIds: FieldRef<"UserCollectionProgress", 'Json'>
    readonly score: FieldRef<"UserCollectionProgress", 'Float'>
    readonly createdAt: FieldRef<"UserCollectionProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCollectionProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCollectionProgress findUnique
   */
  export type UserCollectionProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCollectionProgress to fetch.
     */
    where: UserCollectionProgressWhereUniqueInput
  }

  /**
   * UserCollectionProgress findUniqueOrThrow
   */
  export type UserCollectionProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCollectionProgress to fetch.
     */
    where: UserCollectionProgressWhereUniqueInput
  }

  /**
   * UserCollectionProgress findFirst
   */
  export type UserCollectionProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCollectionProgress to fetch.
     */
    where?: UserCollectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollectionProgresses to fetch.
     */
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCollectionProgresses.
     */
    cursor?: UserCollectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCollectionProgresses.
     */
    distinct?: UserCollectionProgressScalarFieldEnum | UserCollectionProgressScalarFieldEnum[]
  }

  /**
   * UserCollectionProgress findFirstOrThrow
   */
  export type UserCollectionProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCollectionProgress to fetch.
     */
    where?: UserCollectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollectionProgresses to fetch.
     */
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCollectionProgresses.
     */
    cursor?: UserCollectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollectionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCollectionProgresses.
     */
    distinct?: UserCollectionProgressScalarFieldEnum | UserCollectionProgressScalarFieldEnum[]
  }

  /**
   * UserCollectionProgress findMany
   */
  export type UserCollectionProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCollectionProgresses to fetch.
     */
    where?: UserCollectionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollectionProgresses to fetch.
     */
    orderBy?: UserCollectionProgressOrderByWithRelationInput | UserCollectionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCollectionProgresses.
     */
    cursor?: UserCollectionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollectionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollectionProgresses.
     */
    skip?: number
    distinct?: UserCollectionProgressScalarFieldEnum | UserCollectionProgressScalarFieldEnum[]
  }

  /**
   * UserCollectionProgress create
   */
  export type UserCollectionProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCollectionProgress.
     */
    data: XOR<UserCollectionProgressCreateInput, UserCollectionProgressUncheckedCreateInput>
  }

  /**
   * UserCollectionProgress createMany
   */
  export type UserCollectionProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCollectionProgresses.
     */
    data: UserCollectionProgressCreateManyInput | UserCollectionProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCollectionProgress update
   */
  export type UserCollectionProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCollectionProgress.
     */
    data: XOR<UserCollectionProgressUpdateInput, UserCollectionProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCollectionProgress to update.
     */
    where: UserCollectionProgressWhereUniqueInput
  }

  /**
   * UserCollectionProgress updateMany
   */
  export type UserCollectionProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCollectionProgresses.
     */
    data: XOR<UserCollectionProgressUpdateManyMutationInput, UserCollectionProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCollectionProgresses to update
     */
    where?: UserCollectionProgressWhereInput
    /**
     * Limit how many UserCollectionProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCollectionProgress upsert
   */
  export type UserCollectionProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCollectionProgress to update in case it exists.
     */
    where: UserCollectionProgressWhereUniqueInput
    /**
     * In case the UserCollectionProgress found by the `where` argument doesn't exist, create a new UserCollectionProgress with this data.
     */
    create: XOR<UserCollectionProgressCreateInput, UserCollectionProgressUncheckedCreateInput>
    /**
     * In case the UserCollectionProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCollectionProgressUpdateInput, UserCollectionProgressUncheckedUpdateInput>
  }

  /**
   * UserCollectionProgress delete
   */
  export type UserCollectionProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCollectionProgress to delete.
     */
    where: UserCollectionProgressWhereUniqueInput
  }

  /**
   * UserCollectionProgress deleteMany
   */
  export type UserCollectionProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCollectionProgresses to delete
     */
    where?: UserCollectionProgressWhereInput
    /**
     * Limit how many UserCollectionProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCollectionProgress without action
   */
  export type UserCollectionProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionProgress
     */
    select?: UserCollectionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCollectionProgress
     */
    omit?: UserCollectionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCollectionProgressInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    image: 'image',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiredAt: 'expiredAt',
    userId: 'userId'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    sort: 'sort',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    question: 'question',
    vr: 'vr',
    answer: 'answer',
    choiceA: 'choiceA',
    choiceB: 'choiceB',
    choiceC: 'choiceC',
    choiceD: 'choiceD',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    collectionId: 'collectionId',
    sort: 'sort'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const UserContentProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    score: 'score',
    openedAt: 'openedAt'
  };

  export type UserContentProgressScalarFieldEnum = (typeof UserContentProgressScalarFieldEnum)[keyof typeof UserContentProgressScalarFieldEnum]


  export const UserCollectionProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    collectionId: 'collectionId',
    openedContentIds: 'openedContentIds',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCollectionProgressScalarFieldEnum = (typeof UserCollectionProgressScalarFieldEnum)[keyof typeof UserCollectionProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    image: 'image',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const CollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CollectionOrderByRelevanceFieldEnum = (typeof CollectionOrderByRelevanceFieldEnum)[keyof typeof CollectionOrderByRelevanceFieldEnum]


  export const ContentOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    question: 'question',
    vr: 'vr',
    choiceA: 'choiceA',
    choiceB: 'choiceB',
    choiceC: 'choiceC',
    choiceD: 'choiceD',
    collectionId: 'collectionId'
  };

  export type ContentOrderByRelevanceFieldEnum = (typeof ContentOrderByRelevanceFieldEnum)[keyof typeof ContentOrderByRelevanceFieldEnum]


  export const UserContentProgressOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId'
  };

  export type UserContentProgressOrderByRelevanceFieldEnum = (typeof UserContentProgressOrderByRelevanceFieldEnum)[keyof typeof UserContentProgressOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const UserCollectionProgressOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    collectionId: 'collectionId'
  };

  export type UserCollectionProgressOrderByRelevanceFieldEnum = (typeof UserCollectionProgressOrderByRelevanceFieldEnum)[keyof typeof UserCollectionProgressOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'Answer'
   */
  export type EnumAnswerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Answer'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    VerificationToken?: XOR<VerificationTokenNullableScalarRelationFilter, VerificationTokenWhereInput> | null
    UserCollectionProgress?: UserCollectionProgressListRelationFilter
    UserContentProgress?: UserContentProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    VerificationToken?: VerificationTokenOrderByWithRelationInput
    UserCollectionProgress?: UserCollectionProgressOrderByRelationAggregateInput
    UserContentProgress?: UserContentProgressOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    VerificationToken?: XOR<VerificationTokenNullableScalarRelationFilter, VerificationTokenWhereInput> | null
    UserCollectionProgress?: UserCollectionProgressListRelationFilter
    UserContentProgress?: UserContentProgressListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    phoneVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    token?: IntFilter<"VerificationToken"> | number
    expiredAt?: DateTimeFilter<"VerificationToken"> | Date | string
    userId?: StringFilter<"VerificationToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: number
    userId?: string
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    expiredAt?: DateTimeFilter<"VerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _avg?: VerificationTokenAvgOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
    _sum?: VerificationTokenSumOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: IntWithAggregatesFilter<"VerificationToken"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    userId?: StringWithAggregatesFilter<"VerificationToken"> | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    type?: EnumContentTypeFilter<"Collection"> | $Enums.ContentType
    sort?: IntNullableFilter<"Collection"> | number | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    contents?: ContentListRelationFilter
    UserCollectionProgress?: UserCollectionProgressListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contents?: ContentOrderByRelationAggregateInput
    UserCollectionProgress?: UserCollectionProgressOrderByRelationAggregateInput
    _relevance?: CollectionOrderByRelevanceInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    type?: EnumContentTypeFilter<"Collection"> | $Enums.ContentType
    sort?: IntNullableFilter<"Collection"> | number | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    contents?: ContentListRelationFilter
    UserCollectionProgress?: UserCollectionProgressListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"Collection"> | $Enums.ContentType
    sort?: IntNullableWithAggregatesFilter<"Collection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    question?: StringNullableFilter<"Content"> | string | null
    vr?: StringNullableFilter<"Content"> | string | null
    answer?: EnumAnswerNullableFilter<"Content"> | $Enums.Answer | null
    choiceA?: StringNullableFilter<"Content"> | string | null
    choiceB?: StringNullableFilter<"Content"> | string | null
    choiceC?: StringNullableFilter<"Content"> | string | null
    choiceD?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    collectionId?: StringFilter<"Content"> | string
    sort?: IntFilter<"Content"> | number
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    UserContentProgress?: UserContentProgressListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    vr?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    choiceA?: SortOrderInput | SortOrder
    choiceB?: SortOrderInput | SortOrder
    choiceC?: SortOrderInput | SortOrder
    choiceD?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    sort?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    UserContentProgress?: UserContentProgressOrderByRelationAggregateInput
    _relevance?: ContentOrderByRelevanceInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    question?: StringNullableFilter<"Content"> | string | null
    vr?: StringNullableFilter<"Content"> | string | null
    answer?: EnumAnswerNullableFilter<"Content"> | $Enums.Answer | null
    choiceA?: StringNullableFilter<"Content"> | string | null
    choiceB?: StringNullableFilter<"Content"> | string | null
    choiceC?: StringNullableFilter<"Content"> | string | null
    choiceD?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    collectionId?: StringFilter<"Content"> | string
    sort?: IntFilter<"Content"> | number
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    UserContentProgress?: UserContentProgressListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    vr?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    choiceA?: SortOrderInput | SortOrder
    choiceB?: SortOrderInput | SortOrder
    choiceC?: SortOrderInput | SortOrder
    choiceD?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    sort?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    title?: StringNullableWithAggregatesFilter<"Content"> | string | null
    body?: StringNullableWithAggregatesFilter<"Content"> | string | null
    question?: StringNullableWithAggregatesFilter<"Content"> | string | null
    vr?: StringNullableWithAggregatesFilter<"Content"> | string | null
    answer?: EnumAnswerNullableWithAggregatesFilter<"Content"> | $Enums.Answer | null
    choiceA?: StringNullableWithAggregatesFilter<"Content"> | string | null
    choiceB?: StringNullableWithAggregatesFilter<"Content"> | string | null
    choiceC?: StringNullableWithAggregatesFilter<"Content"> | string | null
    choiceD?: StringNullableWithAggregatesFilter<"Content"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    collectionId?: StringWithAggregatesFilter<"Content"> | string
    sort?: IntWithAggregatesFilter<"Content"> | number
  }

  export type UserContentProgressWhereInput = {
    AND?: UserContentProgressWhereInput | UserContentProgressWhereInput[]
    OR?: UserContentProgressWhereInput[]
    NOT?: UserContentProgressWhereInput | UserContentProgressWhereInput[]
    id?: StringFilter<"UserContentProgress"> | string
    userId?: StringFilter<"UserContentProgress"> | string
    contentId?: StringFilter<"UserContentProgress"> | string
    score?: FloatNullableFilter<"UserContentProgress"> | number | null
    openedAt?: DateTimeFilter<"UserContentProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type UserContentProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    score?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
    _relevance?: UserContentProgressOrderByRelevanceInput
  }

  export type UserContentProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contentId?: UserContentProgressUserIdContentIdCompoundUniqueInput
    AND?: UserContentProgressWhereInput | UserContentProgressWhereInput[]
    OR?: UserContentProgressWhereInput[]
    NOT?: UserContentProgressWhereInput | UserContentProgressWhereInput[]
    userId?: StringFilter<"UserContentProgress"> | string
    contentId?: StringFilter<"UserContentProgress"> | string
    score?: FloatNullableFilter<"UserContentProgress"> | number | null
    openedAt?: DateTimeFilter<"UserContentProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type UserContentProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    score?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    _count?: UserContentProgressCountOrderByAggregateInput
    _avg?: UserContentProgressAvgOrderByAggregateInput
    _max?: UserContentProgressMaxOrderByAggregateInput
    _min?: UserContentProgressMinOrderByAggregateInput
    _sum?: UserContentProgressSumOrderByAggregateInput
  }

  export type UserContentProgressScalarWhereWithAggregatesInput = {
    AND?: UserContentProgressScalarWhereWithAggregatesInput | UserContentProgressScalarWhereWithAggregatesInput[]
    OR?: UserContentProgressScalarWhereWithAggregatesInput[]
    NOT?: UserContentProgressScalarWhereWithAggregatesInput | UserContentProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserContentProgress"> | string
    userId?: StringWithAggregatesFilter<"UserContentProgress"> | string
    contentId?: StringWithAggregatesFilter<"UserContentProgress"> | string
    score?: FloatNullableWithAggregatesFilter<"UserContentProgress"> | number | null
    openedAt?: DateTimeWithAggregatesFilter<"UserContentProgress"> | Date | string
  }

  export type UserCollectionProgressWhereInput = {
    AND?: UserCollectionProgressWhereInput | UserCollectionProgressWhereInput[]
    OR?: UserCollectionProgressWhereInput[]
    NOT?: UserCollectionProgressWhereInput | UserCollectionProgressWhereInput[]
    id?: StringFilter<"UserCollectionProgress"> | string
    userId?: StringFilter<"UserCollectionProgress"> | string
    collectionId?: StringFilter<"UserCollectionProgress"> | string
    openedContentIds?: JsonNullableFilter<"UserCollectionProgress">
    score?: FloatNullableFilter<"UserCollectionProgress"> | number | null
    createdAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }

  export type UserCollectionProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    openedContentIds?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
    _relevance?: UserCollectionProgressOrderByRelevanceInput
  }

  export type UserCollectionProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_collectionId?: UserCollectionProgressUserIdCollectionIdCompoundUniqueInput
    AND?: UserCollectionProgressWhereInput | UserCollectionProgressWhereInput[]
    OR?: UserCollectionProgressWhereInput[]
    NOT?: UserCollectionProgressWhereInput | UserCollectionProgressWhereInput[]
    userId?: StringFilter<"UserCollectionProgress"> | string
    collectionId?: StringFilter<"UserCollectionProgress"> | string
    openedContentIds?: JsonNullableFilter<"UserCollectionProgress">
    score?: FloatNullableFilter<"UserCollectionProgress"> | number | null
    createdAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }, "id" | "userId_collectionId">

  export type UserCollectionProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    openedContentIds?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCollectionProgressCountOrderByAggregateInput
    _avg?: UserCollectionProgressAvgOrderByAggregateInput
    _max?: UserCollectionProgressMaxOrderByAggregateInput
    _min?: UserCollectionProgressMinOrderByAggregateInput
    _sum?: UserCollectionProgressSumOrderByAggregateInput
  }

  export type UserCollectionProgressScalarWhereWithAggregatesInput = {
    AND?: UserCollectionProgressScalarWhereWithAggregatesInput | UserCollectionProgressScalarWhereWithAggregatesInput[]
    OR?: UserCollectionProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCollectionProgressScalarWhereWithAggregatesInput | UserCollectionProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCollectionProgress"> | string
    userId?: StringWithAggregatesFilter<"UserCollectionProgress"> | string
    collectionId?: StringWithAggregatesFilter<"UserCollectionProgress"> | string
    openedContentIds?: JsonNullableWithAggregatesFilter<"UserCollectionProgress">
    score?: FloatNullableWithAggregatesFilter<"UserCollectionProgress"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserCollectionProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCollectionProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenCreateNestedOneWithoutUserInput
    UserCollectionProgress?: UserCollectionProgressCreateNestedManyWithoutUserInput
    UserContentProgress?: UserContentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenUncheckedCreateNestedOneWithoutUserInput
    UserCollectionProgress?: UserCollectionProgressUncheckedCreateNestedManyWithoutUserInput
    UserContentProgress?: UserContentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUpdateOneWithoutUserNestedInput
    UserCollectionProgress?: UserCollectionProgressUpdateManyWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    UserCollectionProgress?: UserCollectionProgressUncheckedUpdateManyWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    token: number
    expiredAt: Date | string
    user: UserCreateNestedOneWithoutVerificationTokenInput
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    token: number
    expiredAt: Date | string
    userId: string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationTokenNestedInput
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    token: number
    expiredAt: Date | string
    userId: string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutCollectionInput
    UserCollectionProgress?: UserCollectionProgressCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
    UserCollectionProgress?: UserCollectionProgressUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutCollectionNestedInput
    UserCollectionProgress?: UserCollectionProgressUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
    UserCollectionProgress?: UserCollectionProgressUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sort: number
    collection: CollectionCreateNestedOneWithoutContentsInput
    UserContentProgress?: UserContentProgressCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: string
    sort: number
    UserContentProgress?: UserContentProgressUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUpdateOneRequiredWithoutContentsNestedInput
    UserContentProgress?: UserContentProgressUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    UserContentProgress?: UserContentProgressUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: string
    sort: number
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type UserContentProgressCreateInput = {
    id?: string
    score?: number | null
    openedAt?: Date | string
    user: UserCreateNestedOneWithoutUserContentProgressInput
    content: ContentCreateNestedOneWithoutUserContentProgressInput
  }

  export type UserContentProgressUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserContentProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserContentProgressNestedInput
    content?: ContentUpdateOneRequiredWithoutUserContentProgressNestedInput
  }

  export type UserContentProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserContentProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressCreateInput = {
    id?: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCollectionProgressInput
    collection: CollectionCreateNestedOneWithoutUserCollectionProgressInput
  }

  export type UserCollectionProgressUncheckedCreateInput = {
    id?: string
    userId: string
    collectionId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCollectionProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCollectionProgressNestedInput
    collection?: CollectionUpdateOneRequiredWithoutUserCollectionProgressNestedInput
  }

  export type UserCollectionProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressCreateManyInput = {
    id?: string
    userId: string
    collectionId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCollectionProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerificationTokenNullableScalarRelationFilter = {
    is?: VerificationTokenWhereInput | null
    isNot?: VerificationTokenWhereInput | null
  }

  export type UserCollectionProgressListRelationFilter = {
    every?: UserCollectionProgressWhereInput
    some?: UserCollectionProgressWhereInput
    none?: UserCollectionProgressWhereInput
  }

  export type UserContentProgressListRelationFilter = {
    every?: UserContentProgressWhereInput
    some?: UserContentProgressWhereInput
    none?: UserContentProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCollectionProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserContentProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationTokenAvgOrderByAggregateInput = {
    token?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type VerificationTokenSumOrderByAggregateInput = {
    token?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelevanceInput = {
    fields: CollectionOrderByRelevanceFieldEnum | CollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumAnswerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Answer | EnumAnswerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Answer[] | null
    notIn?: $Enums.Answer[] | null
    not?: NestedEnumAnswerNullableFilter<$PrismaModel> | $Enums.Answer | null
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type ContentOrderByRelevanceInput = {
    fields: ContentOrderByRelevanceFieldEnum | ContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    question?: SortOrder
    vr?: SortOrder
    answer?: SortOrder
    choiceA?: SortOrder
    choiceB?: SortOrder
    choiceC?: SortOrder
    choiceD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    sort?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    question?: SortOrder
    vr?: SortOrder
    answer?: SortOrder
    choiceA?: SortOrder
    choiceB?: SortOrder
    choiceC?: SortOrder
    choiceD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    sort?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    question?: SortOrder
    vr?: SortOrder
    answer?: SortOrder
    choiceA?: SortOrder
    choiceB?: SortOrder
    choiceC?: SortOrder
    choiceD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    sort?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type EnumAnswerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Answer | EnumAnswerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Answer[] | null
    notIn?: $Enums.Answer[] | null
    not?: NestedEnumAnswerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Answer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnswerNullableFilter<$PrismaModel>
    _max?: NestedEnumAnswerNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type UserContentProgressOrderByRelevanceInput = {
    fields: UserContentProgressOrderByRelevanceFieldEnum | UserContentProgressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserContentProgressUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: string
  }

  export type UserContentProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    score?: SortOrder
    openedAt?: SortOrder
  }

  export type UserContentProgressAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserContentProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    score?: SortOrder
    openedAt?: SortOrder
  }

  export type UserContentProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    score?: SortOrder
    openedAt?: SortOrder
  }

  export type UserContentProgressSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCollectionProgressOrderByRelevanceInput = {
    fields: UserCollectionProgressOrderByRelevanceFieldEnum | UserCollectionProgressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCollectionProgressUserIdCollectionIdCompoundUniqueInput = {
    userId: string
    collectionId: string
  }

  export type UserCollectionProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    openedContentIds?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCollectionProgressAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserCollectionProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCollectionProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCollectionProgressSumOrderByAggregateInput = {
    score?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type VerificationTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput
    connect?: VerificationTokenWhereUniqueInput
  }

  export type UserCollectionProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput> | UserCollectionProgressCreateWithoutUserInput[] | UserCollectionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutUserInput | UserCollectionProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCollectionProgressCreateManyUserInputEnvelope
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
  }

  export type UserContentProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput> | UserContentProgressCreateWithoutUserInput[] | UserContentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutUserInput | UserContentProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserContentProgressCreateManyUserInputEnvelope
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
  }

  export type VerificationTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput
    connect?: VerificationTokenWhereUniqueInput
  }

  export type UserCollectionProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput> | UserCollectionProgressCreateWithoutUserInput[] | UserCollectionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutUserInput | UserCollectionProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCollectionProgressCreateManyUserInputEnvelope
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
  }

  export type UserContentProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput> | UserContentProgressCreateWithoutUserInput[] | UserContentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutUserInput | UserContentProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserContentProgressCreateManyUserInputEnvelope
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerificationTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput
    upsert?: VerificationTokenUpsertWithoutUserInput
    disconnect?: VerificationTokenWhereInput | boolean
    delete?: VerificationTokenWhereInput | boolean
    connect?: VerificationTokenWhereUniqueInput
    update?: XOR<XOR<VerificationTokenUpdateToOneWithWhereWithoutUserInput, VerificationTokenUpdateWithoutUserInput>, VerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserCollectionProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput> | UserCollectionProgressCreateWithoutUserInput[] | UserCollectionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutUserInput | UserCollectionProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCollectionProgressUpsertWithWhereUniqueWithoutUserInput | UserCollectionProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollectionProgressCreateManyUserInputEnvelope
    set?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    disconnect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    delete?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    update?: UserCollectionProgressUpdateWithWhereUniqueWithoutUserInput | UserCollectionProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollectionProgressUpdateManyWithWhereWithoutUserInput | UserCollectionProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
  }

  export type UserContentProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput> | UserContentProgressCreateWithoutUserInput[] | UserContentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutUserInput | UserContentProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserContentProgressUpsertWithWhereUniqueWithoutUserInput | UserContentProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContentProgressCreateManyUserInputEnvelope
    set?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    disconnect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    delete?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    update?: UserContentProgressUpdateWithWhereUniqueWithoutUserInput | UserContentProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContentProgressUpdateManyWithWhereWithoutUserInput | UserContentProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
  }

  export type VerificationTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationTokenCreateOrConnectWithoutUserInput
    upsert?: VerificationTokenUpsertWithoutUserInput
    disconnect?: VerificationTokenWhereInput | boolean
    delete?: VerificationTokenWhereInput | boolean
    connect?: VerificationTokenWhereUniqueInput
    update?: XOR<XOR<VerificationTokenUpdateToOneWithWhereWithoutUserInput, VerificationTokenUpdateWithoutUserInput>, VerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserCollectionProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput> | UserCollectionProgressCreateWithoutUserInput[] | UserCollectionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutUserInput | UserCollectionProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCollectionProgressUpsertWithWhereUniqueWithoutUserInput | UserCollectionProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollectionProgressCreateManyUserInputEnvelope
    set?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    disconnect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    delete?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    update?: UserCollectionProgressUpdateWithWhereUniqueWithoutUserInput | UserCollectionProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollectionProgressUpdateManyWithWhereWithoutUserInput | UserCollectionProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
  }

  export type UserContentProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput> | UserContentProgressCreateWithoutUserInput[] | UserContentProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutUserInput | UserContentProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserContentProgressUpsertWithWhereUniqueWithoutUserInput | UserContentProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContentProgressCreateManyUserInputEnvelope
    set?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    disconnect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    delete?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    update?: UserContentProgressUpdateWithWhereUniqueWithoutUserInput | UserContentProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContentProgressUpdateManyWithWhereWithoutUserInput | UserContentProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerificationTokenInput = {
    create?: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokenInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVerificationTokenNestedInput = {
    create?: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokenInput
    upsert?: UserUpsertWithoutVerificationTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationTokenInput, UserUpdateWithoutVerificationTokenInput>, UserUncheckedUpdateWithoutVerificationTokenInput>
  }

  export type ContentCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type UserCollectionProgressCreateNestedManyWithoutCollectionInput = {
    create?: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput> | UserCollectionProgressCreateWithoutCollectionInput[] | UserCollectionProgressUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutCollectionInput | UserCollectionProgressCreateOrConnectWithoutCollectionInput[]
    createMany?: UserCollectionProgressCreateManyCollectionInputEnvelope
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type UserCollectionProgressUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput> | UserCollectionProgressCreateWithoutCollectionInput[] | UserCollectionProgressUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutCollectionInput | UserCollectionProgressCreateOrConnectWithoutCollectionInput[]
    createMany?: UserCollectionProgressCreateManyCollectionInputEnvelope
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContentUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCollectionInput | ContentUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCollectionInput | ContentUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCollectionInput | ContentUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCollectionProgressUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput> | UserCollectionProgressCreateWithoutCollectionInput[] | UserCollectionProgressUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutCollectionInput | UserCollectionProgressCreateOrConnectWithoutCollectionInput[]
    upsert?: UserCollectionProgressUpsertWithWhereUniqueWithoutCollectionInput | UserCollectionProgressUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: UserCollectionProgressCreateManyCollectionInputEnvelope
    set?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    disconnect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    delete?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    update?: UserCollectionProgressUpdateWithWhereUniqueWithoutCollectionInput | UserCollectionProgressUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: UserCollectionProgressUpdateManyWithWhereWithoutCollectionInput | UserCollectionProgressUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput> | ContentCreateWithoutCollectionInput[] | ContentUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCollectionInput | ContentCreateOrConnectWithoutCollectionInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCollectionInput | ContentUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ContentCreateManyCollectionInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCollectionInput | ContentUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCollectionInput | ContentUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCollectionProgressUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput> | UserCollectionProgressCreateWithoutCollectionInput[] | UserCollectionProgressUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionProgressCreateOrConnectWithoutCollectionInput | UserCollectionProgressCreateOrConnectWithoutCollectionInput[]
    upsert?: UserCollectionProgressUpsertWithWhereUniqueWithoutCollectionInput | UserCollectionProgressUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: UserCollectionProgressCreateManyCollectionInputEnvelope
    set?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    disconnect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    delete?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    connect?: UserCollectionProgressWhereUniqueInput | UserCollectionProgressWhereUniqueInput[]
    update?: UserCollectionProgressUpdateWithWhereUniqueWithoutCollectionInput | UserCollectionProgressUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: UserCollectionProgressUpdateManyWithWhereWithoutCollectionInput | UserCollectionProgressUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutContentsInput = {
    create?: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutContentsInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserContentProgressCreateNestedManyWithoutContentInput = {
    create?: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput> | UserContentProgressCreateWithoutContentInput[] | UserContentProgressUncheckedCreateWithoutContentInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutContentInput | UserContentProgressCreateOrConnectWithoutContentInput[]
    createMany?: UserContentProgressCreateManyContentInputEnvelope
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
  }

  export type UserContentProgressUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput> | UserContentProgressCreateWithoutContentInput[] | UserContentProgressUncheckedCreateWithoutContentInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutContentInput | UserContentProgressCreateOrConnectWithoutContentInput[]
    createMany?: UserContentProgressCreateManyContentInputEnvelope
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
  }

  export type NullableEnumAnswerFieldUpdateOperationsInput = {
    set?: $Enums.Answer | null
  }

  export type CollectionUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutContentsInput
    upsert?: CollectionUpsertWithoutContentsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutContentsInput, CollectionUpdateWithoutContentsInput>, CollectionUncheckedUpdateWithoutContentsInput>
  }

  export type UserContentProgressUpdateManyWithoutContentNestedInput = {
    create?: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput> | UserContentProgressCreateWithoutContentInput[] | UserContentProgressUncheckedCreateWithoutContentInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutContentInput | UserContentProgressCreateOrConnectWithoutContentInput[]
    upsert?: UserContentProgressUpsertWithWhereUniqueWithoutContentInput | UserContentProgressUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: UserContentProgressCreateManyContentInputEnvelope
    set?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    disconnect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    delete?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    update?: UserContentProgressUpdateWithWhereUniqueWithoutContentInput | UserContentProgressUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: UserContentProgressUpdateManyWithWhereWithoutContentInput | UserContentProgressUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
  }

  export type UserContentProgressUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput> | UserContentProgressCreateWithoutContentInput[] | UserContentProgressUncheckedCreateWithoutContentInput[]
    connectOrCreate?: UserContentProgressCreateOrConnectWithoutContentInput | UserContentProgressCreateOrConnectWithoutContentInput[]
    upsert?: UserContentProgressUpsertWithWhereUniqueWithoutContentInput | UserContentProgressUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: UserContentProgressCreateManyContentInputEnvelope
    set?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    disconnect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    delete?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    connect?: UserContentProgressWhereUniqueInput | UserContentProgressWhereUniqueInput[]
    update?: UserContentProgressUpdateWithWhereUniqueWithoutContentInput | UserContentProgressUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: UserContentProgressUpdateManyWithWhereWithoutContentInput | UserContentProgressUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserContentProgressInput = {
    create?: XOR<UserCreateWithoutUserContentProgressInput, UserUncheckedCreateWithoutUserContentProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserContentProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutUserContentProgressInput = {
    create?: XOR<ContentCreateWithoutUserContentProgressInput, ContentUncheckedCreateWithoutUserContentProgressInput>
    connectOrCreate?: ContentCreateOrConnectWithoutUserContentProgressInput
    connect?: ContentWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserContentProgressNestedInput = {
    create?: XOR<UserCreateWithoutUserContentProgressInput, UserUncheckedCreateWithoutUserContentProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserContentProgressInput
    upsert?: UserUpsertWithoutUserContentProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserContentProgressInput, UserUpdateWithoutUserContentProgressInput>, UserUncheckedUpdateWithoutUserContentProgressInput>
  }

  export type ContentUpdateOneRequiredWithoutUserContentProgressNestedInput = {
    create?: XOR<ContentCreateWithoutUserContentProgressInput, ContentUncheckedCreateWithoutUserContentProgressInput>
    connectOrCreate?: ContentCreateOrConnectWithoutUserContentProgressInput
    upsert?: ContentUpsertWithoutUserContentProgressInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutUserContentProgressInput, ContentUpdateWithoutUserContentProgressInput>, ContentUncheckedUpdateWithoutUserContentProgressInput>
  }

  export type UserCreateNestedOneWithoutUserCollectionProgressInput = {
    create?: XOR<UserCreateWithoutUserCollectionProgressInput, UserUncheckedCreateWithoutUserCollectionProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionProgressInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutUserCollectionProgressInput = {
    create?: XOR<CollectionCreateWithoutUserCollectionProgressInput, CollectionUncheckedCreateWithoutUserCollectionProgressInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutUserCollectionProgressInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCollectionProgressNestedInput = {
    create?: XOR<UserCreateWithoutUserCollectionProgressInput, UserUncheckedCreateWithoutUserCollectionProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionProgressInput
    upsert?: UserUpsertWithoutUserCollectionProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCollectionProgressInput, UserUpdateWithoutUserCollectionProgressInput>, UserUncheckedUpdateWithoutUserCollectionProgressInput>
  }

  export type CollectionUpdateOneRequiredWithoutUserCollectionProgressNestedInput = {
    create?: XOR<CollectionCreateWithoutUserCollectionProgressInput, CollectionUncheckedCreateWithoutUserCollectionProgressInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutUserCollectionProgressInput
    upsert?: CollectionUpsertWithoutUserCollectionProgressInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutUserCollectionProgressInput, CollectionUpdateWithoutUserCollectionProgressInput>, CollectionUncheckedUpdateWithoutUserCollectionProgressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAnswerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Answer | EnumAnswerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Answer[] | null
    notIn?: $Enums.Answer[] | null
    not?: NestedEnumAnswerNullableFilter<$PrismaModel> | $Enums.Answer | null
  }

  export type NestedEnumAnswerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Answer | EnumAnswerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Answer[] | null
    notIn?: $Enums.Answer[] | null
    not?: NestedEnumAnswerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Answer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAnswerNullableFilter<$PrismaModel>
    _max?: NestedEnumAnswerNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VerificationTokenCreateWithoutUserInput = {
    id?: string
    token: number
    expiredAt: Date | string
  }

  export type VerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: number
    expiredAt: Date | string
  }

  export type VerificationTokenCreateOrConnectWithoutUserInput = {
    where: VerificationTokenWhereUniqueInput
    create: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type UserCollectionProgressCreateWithoutUserInput = {
    id?: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collection: CollectionCreateNestedOneWithoutUserCollectionProgressInput
  }

  export type UserCollectionProgressUncheckedCreateWithoutUserInput = {
    id?: string
    collectionId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCollectionProgressCreateOrConnectWithoutUserInput = {
    where: UserCollectionProgressWhereUniqueInput
    create: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCollectionProgressCreateManyUserInputEnvelope = {
    data: UserCollectionProgressCreateManyUserInput | UserCollectionProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserContentProgressCreateWithoutUserInput = {
    id?: string
    score?: number | null
    openedAt?: Date | string
    content: ContentCreateNestedOneWithoutUserContentProgressInput
  }

  export type UserContentProgressUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserContentProgressCreateOrConnectWithoutUserInput = {
    where: UserContentProgressWhereUniqueInput
    create: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput>
  }

  export type UserContentProgressCreateManyUserInputEnvelope = {
    data: UserContentProgressCreateManyUserInput | UserContentProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationTokenUpsertWithoutUserInput = {
    update: XOR<VerificationTokenUpdateWithoutUserInput, VerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationTokenCreateWithoutUserInput, VerificationTokenUncheckedCreateWithoutUserInput>
    where?: VerificationTokenWhereInput
  }

  export type VerificationTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: VerificationTokenWhereInput
    data: XOR<VerificationTokenUpdateWithoutUserInput, VerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type VerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCollectionProgressWhereUniqueInput
    update: XOR<UserCollectionProgressUpdateWithoutUserInput, UserCollectionProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserCollectionProgressCreateWithoutUserInput, UserCollectionProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCollectionProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCollectionProgressWhereUniqueInput
    data: XOR<UserCollectionProgressUpdateWithoutUserInput, UserCollectionProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserCollectionProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserCollectionProgressScalarWhereInput
    data: XOR<UserCollectionProgressUpdateManyMutationInput, UserCollectionProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCollectionProgressScalarWhereInput = {
    AND?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
    OR?: UserCollectionProgressScalarWhereInput[]
    NOT?: UserCollectionProgressScalarWhereInput | UserCollectionProgressScalarWhereInput[]
    id?: StringFilter<"UserCollectionProgress"> | string
    userId?: StringFilter<"UserCollectionProgress"> | string
    collectionId?: StringFilter<"UserCollectionProgress"> | string
    openedContentIds?: JsonNullableFilter<"UserCollectionProgress">
    score?: FloatNullableFilter<"UserCollectionProgress"> | number | null
    createdAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserCollectionProgress"> | Date | string
  }

  export type UserContentProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserContentProgressWhereUniqueInput
    update: XOR<UserContentProgressUpdateWithoutUserInput, UserContentProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserContentProgressCreateWithoutUserInput, UserContentProgressUncheckedCreateWithoutUserInput>
  }

  export type UserContentProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserContentProgressWhereUniqueInput
    data: XOR<UserContentProgressUpdateWithoutUserInput, UserContentProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserContentProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserContentProgressScalarWhereInput
    data: XOR<UserContentProgressUpdateManyMutationInput, UserContentProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserContentProgressScalarWhereInput = {
    AND?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
    OR?: UserContentProgressScalarWhereInput[]
    NOT?: UserContentProgressScalarWhereInput | UserContentProgressScalarWhereInput[]
    id?: StringFilter<"UserContentProgress"> | string
    userId?: StringFilter<"UserContentProgress"> | string
    contentId?: StringFilter<"UserContentProgress"> | string
    score?: FloatNullableFilter<"UserContentProgress"> | number | null
    openedAt?: DateTimeFilter<"UserContentProgress"> | Date | string
  }

  export type UserCreateWithoutVerificationTokenInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    UserCollectionProgress?: UserCollectionProgressCreateNestedManyWithoutUserInput
    UserContentProgress?: UserContentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationTokenInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    UserCollectionProgress?: UserCollectionProgressUncheckedCreateNestedManyWithoutUserInput
    UserContentProgress?: UserContentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
  }

  export type UserUpsertWithoutVerificationTokenInput = {
    update: XOR<UserUpdateWithoutVerificationTokenInput, UserUncheckedUpdateWithoutVerificationTokenInput>
    create: XOR<UserCreateWithoutVerificationTokenInput, UserUncheckedCreateWithoutVerificationTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationTokenInput, UserUncheckedUpdateWithoutVerificationTokenInput>
  }

  export type UserUpdateWithoutVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCollectionProgress?: UserCollectionProgressUpdateManyWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCollectionProgress?: UserCollectionProgressUncheckedUpdateManyWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentCreateWithoutCollectionInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sort: number
    UserContentProgress?: UserContentProgressCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCollectionInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sort: number
    UserContentProgress?: UserContentProgressUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput>
  }

  export type ContentCreateManyCollectionInputEnvelope = {
    data: ContentCreateManyCollectionInput | ContentCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserCollectionProgressCreateWithoutCollectionInput = {
    id?: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCollectionProgressInput
  }

  export type UserCollectionProgressUncheckedCreateWithoutCollectionInput = {
    id?: string
    userId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCollectionProgressCreateOrConnectWithoutCollectionInput = {
    where: UserCollectionProgressWhereUniqueInput
    create: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput>
  }

  export type UserCollectionProgressCreateManyCollectionInputEnvelope = {
    data: UserCollectionProgressCreateManyCollectionInput | UserCollectionProgressCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutCollectionInput, ContentUncheckedUpdateWithoutCollectionInput>
    create: XOR<ContentCreateWithoutCollectionInput, ContentUncheckedCreateWithoutCollectionInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutCollectionInput, ContentUncheckedUpdateWithoutCollectionInput>
  }

  export type ContentUpdateManyWithWhereWithoutCollectionInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutCollectionInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    question?: StringNullableFilter<"Content"> | string | null
    vr?: StringNullableFilter<"Content"> | string | null
    answer?: EnumAnswerNullableFilter<"Content"> | $Enums.Answer | null
    choiceA?: StringNullableFilter<"Content"> | string | null
    choiceB?: StringNullableFilter<"Content"> | string | null
    choiceC?: StringNullableFilter<"Content"> | string | null
    choiceD?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    collectionId?: StringFilter<"Content"> | string
    sort?: IntFilter<"Content"> | number
  }

  export type UserCollectionProgressUpsertWithWhereUniqueWithoutCollectionInput = {
    where: UserCollectionProgressWhereUniqueInput
    update: XOR<UserCollectionProgressUpdateWithoutCollectionInput, UserCollectionProgressUncheckedUpdateWithoutCollectionInput>
    create: XOR<UserCollectionProgressCreateWithoutCollectionInput, UserCollectionProgressUncheckedCreateWithoutCollectionInput>
  }

  export type UserCollectionProgressUpdateWithWhereUniqueWithoutCollectionInput = {
    where: UserCollectionProgressWhereUniqueInput
    data: XOR<UserCollectionProgressUpdateWithoutCollectionInput, UserCollectionProgressUncheckedUpdateWithoutCollectionInput>
  }

  export type UserCollectionProgressUpdateManyWithWhereWithoutCollectionInput = {
    where: UserCollectionProgressScalarWhereInput
    data: XOR<UserCollectionProgressUpdateManyMutationInput, UserCollectionProgressUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionCreateWithoutContentsInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserCollectionProgress?: UserCollectionProgressCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutContentsInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserCollectionProgress?: UserCollectionProgressUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutContentsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
  }

  export type UserContentProgressCreateWithoutContentInput = {
    id?: string
    score?: number | null
    openedAt?: Date | string
    user: UserCreateNestedOneWithoutUserContentProgressInput
  }

  export type UserContentProgressUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserContentProgressCreateOrConnectWithoutContentInput = {
    where: UserContentProgressWhereUniqueInput
    create: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput>
  }

  export type UserContentProgressCreateManyContentInputEnvelope = {
    data: UserContentProgressCreateManyContentInput | UserContentProgressCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithoutContentsInput = {
    update: XOR<CollectionUpdateWithoutContentsInput, CollectionUncheckedUpdateWithoutContentsInput>
    create: XOR<CollectionCreateWithoutContentsInput, CollectionUncheckedCreateWithoutContentsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutContentsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutContentsInput, CollectionUncheckedUpdateWithoutContentsInput>
  }

  export type CollectionUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCollectionProgress?: UserCollectionProgressUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCollectionProgress?: UserCollectionProgressUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserContentProgressUpsertWithWhereUniqueWithoutContentInput = {
    where: UserContentProgressWhereUniqueInput
    update: XOR<UserContentProgressUpdateWithoutContentInput, UserContentProgressUncheckedUpdateWithoutContentInput>
    create: XOR<UserContentProgressCreateWithoutContentInput, UserContentProgressUncheckedCreateWithoutContentInput>
  }

  export type UserContentProgressUpdateWithWhereUniqueWithoutContentInput = {
    where: UserContentProgressWhereUniqueInput
    data: XOR<UserContentProgressUpdateWithoutContentInput, UserContentProgressUncheckedUpdateWithoutContentInput>
  }

  export type UserContentProgressUpdateManyWithWhereWithoutContentInput = {
    where: UserContentProgressScalarWhereInput
    data: XOR<UserContentProgressUpdateManyMutationInput, UserContentProgressUncheckedUpdateManyWithoutContentInput>
  }

  export type UserCreateWithoutUserContentProgressInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenCreateNestedOneWithoutUserInput
    UserCollectionProgress?: UserCollectionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserContentProgressInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenUncheckedCreateNestedOneWithoutUserInput
    UserCollectionProgress?: UserCollectionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserContentProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserContentProgressInput, UserUncheckedCreateWithoutUserContentProgressInput>
  }

  export type ContentCreateWithoutUserContentProgressInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sort: number
    collection: CollectionCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateWithoutUserContentProgressInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: string
    sort: number
  }

  export type ContentCreateOrConnectWithoutUserContentProgressInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutUserContentProgressInput, ContentUncheckedCreateWithoutUserContentProgressInput>
  }

  export type UserUpsertWithoutUserContentProgressInput = {
    update: XOR<UserUpdateWithoutUserContentProgressInput, UserUncheckedUpdateWithoutUserContentProgressInput>
    create: XOR<UserCreateWithoutUserContentProgressInput, UserUncheckedCreateWithoutUserContentProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserContentProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserContentProgressInput, UserUncheckedUpdateWithoutUserContentProgressInput>
  }

  export type UserUpdateWithoutUserContentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUpdateOneWithoutUserNestedInput
    UserCollectionProgress?: UserCollectionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserContentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    UserCollectionProgress?: UserCollectionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutUserContentProgressInput = {
    update: XOR<ContentUpdateWithoutUserContentProgressInput, ContentUncheckedUpdateWithoutUserContentProgressInput>
    create: XOR<ContentCreateWithoutUserContentProgressInput, ContentUncheckedCreateWithoutUserContentProgressInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutUserContentProgressInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutUserContentProgressInput, ContentUncheckedUpdateWithoutUserContentProgressInput>
  }

  export type ContentUpdateWithoutUserContentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateWithoutUserContentProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutUserCollectionProgressInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenCreateNestedOneWithoutUserInput
    UserContentProgress?: UserContentProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCollectionProgressInput = {
    id?: string
    fullname: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    phone: string
    phoneVerified?: Date | string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationToken?: VerificationTokenUncheckedCreateNestedOneWithoutUserInput
    UserContentProgress?: UserContentProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCollectionProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCollectionProgressInput, UserUncheckedCreateWithoutUserCollectionProgressInput>
  }

  export type CollectionCreateWithoutUserCollectionProgressInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserCollectionProgressInput = {
    id?: string
    name: string
    description?: string | null
    type: $Enums.ContentType
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserCollectionProgressInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserCollectionProgressInput, CollectionUncheckedCreateWithoutUserCollectionProgressInput>
  }

  export type UserUpsertWithoutUserCollectionProgressInput = {
    update: XOR<UserUpdateWithoutUserCollectionProgressInput, UserUncheckedUpdateWithoutUserCollectionProgressInput>
    create: XOR<UserCreateWithoutUserCollectionProgressInput, UserUncheckedCreateWithoutUserCollectionProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCollectionProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCollectionProgressInput, UserUncheckedUpdateWithoutUserCollectionProgressInput>
  }

  export type UserUpdateWithoutUserCollectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUpdateOneWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCollectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationToken?: VerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    UserContentProgress?: UserContentProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionUpsertWithoutUserCollectionProgressInput = {
    update: XOR<CollectionUpdateWithoutUserCollectionProgressInput, CollectionUncheckedUpdateWithoutUserCollectionProgressInput>
    create: XOR<CollectionCreateWithoutUserCollectionProgressInput, CollectionUncheckedCreateWithoutUserCollectionProgressInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutUserCollectionProgressInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutUserCollectionProgressInput, CollectionUncheckedUpdateWithoutUserCollectionProgressInput>
  }

  export type CollectionUpdateWithoutUserCollectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserCollectionProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserCollectionProgressCreateManyUserInput = {
    id?: string
    collectionId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserContentProgressCreateManyUserInput = {
    id?: string
    contentId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserCollectionProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutUserCollectionProgressNestedInput
  }

  export type UserCollectionProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutUserContentProgressNestedInput
  }

  export type UserContentProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyCollectionInput = {
    id?: string
    title?: string | null
    body?: string | null
    question?: string | null
    vr?: string | null
    answer?: $Enums.Answer | null
    choiceA?: string | null
    choiceB?: string | null
    choiceC?: string | null
    choiceD?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sort: number
  }

  export type UserCollectionProgressCreateManyCollectionInput = {
    id?: string
    userId: string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
    UserContentProgress?: UserContentProgressUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
    UserContentProgress?: UserContentProgressUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    vr?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableEnumAnswerFieldUpdateOperationsInput | $Enums.Answer | null
    choiceA?: NullableStringFieldUpdateOperationsInput | string | null
    choiceB?: NullableStringFieldUpdateOperationsInput | string | null
    choiceC?: NullableStringFieldUpdateOperationsInput | string | null
    choiceD?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sort?: IntFieldUpdateOperationsInput | number
  }

  export type UserCollectionProgressUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCollectionProgressNestedInput
  }

  export type UserCollectionProgressUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionProgressUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    openedContentIds?: NullableJsonNullValueInput | InputJsonValue
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressCreateManyContentInput = {
    id?: string
    userId: string
    score?: number | null
    openedAt?: Date | string
  }

  export type UserContentProgressUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserContentProgressNestedInput
  }

  export type UserContentProgressUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContentProgressUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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