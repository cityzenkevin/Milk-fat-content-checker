
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    Token: TokenPayload<ExtArgs>[]
    student: StudentPayload<ExtArgs> | null
    lecturer: LecturerPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    email: string
    firstname: string | null
    lastname: string | null
    password: string
    role: Role
    isInviteAccepted: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type TokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Token"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    token: string
    type: TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
  }, ExtArgs["result"]["token"]>
  composites: {}
}

/**
 * Model Token
 * 
 */
export type Token = runtime.Types.DefaultSelection<TokenPayload>
export type StudentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Student"
  objects: {
    user: UserPayload<ExtArgs>
    submission: SubmissionPayload<ExtArgs>[]
    assignment: AssignmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    userId: number
    studentId: string
  }, ExtArgs["result"]["student"]>
  composites: {}
}

/**
 * Model Student
 * 
 */
export type Student = runtime.Types.DefaultSelection<StudentPayload>
export type LecturerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Lecturer"
  objects: {
    user: UserPayload<ExtArgs>
    assignments: AssignmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    userId: number
    staffId: string
  }, ExtArgs["result"]["lecturer"]>
  composites: {}
}

/**
 * Model Lecturer
 * 
 */
export type Lecturer = runtime.Types.DefaultSelection<LecturerPayload>
export type AssignmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Assignment"
  objects: {
    lecturer: LecturerPayload<ExtArgs>
    students: StudentPayload<ExtArgs>[]
    submissions: SubmissionPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    description: string
    deadline: Date
    isDraft: boolean
    assignmentCode: string | null
    lecturerId: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["assignment"]>
  composites: {}
}

/**
 * Model Assignment
 * 
 */
export type Assignment = runtime.Types.DefaultSelection<AssignmentPayload>
export type SubmissionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Submission"
  objects: {
    assignment: AssignmentPayload<ExtArgs>
    student: StudentPayload<ExtArgs>
    snapshots: SnapshotPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    assignmentId: number
    studentId: number
    submissionCode: string
    head: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["submission"]>
  composites: {}
}

/**
 * Model Submission
 * 
 */
export type Submission = runtime.Types.DefaultSelection<SubmissionPayload>
export type SnapshotPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Snapshot"
  objects: {
    submission: SubmissionPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    submissionId: string
    snapshotName: string
    snapshotPath: string
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["snapshot"]>
  composites: {}
}

/**
 * Model Snapshot
 * 
 */
export type Snapshot = runtime.Types.DefaultSelection<SnapshotPayload>
export type FatContentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "FatContent"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    density: number | null
    inflared: number | null
    color: string | null
    createdAt: Date
  }, ExtArgs["result"]["fatContent"]>
  composites: {}
}

/**
 * Model FatContent
 * 
 */
export type FatContent = runtime.Types.DefaultSelection<FatContentPayload>

/**
 * Enums
 */

export const Role: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  LECTURER: 'LECTURER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  ACTIVATION: 'ACTIVATION'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.snapshot`: Exposes CRUD operations for the **Snapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snapshots
    * const snapshots = await prisma.snapshot.findMany()
    * ```
    */
  get snapshot(): Prisma.SnapshotDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.fatContent`: Exposes CRUD operations for the **FatContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FatContents
    * const fatContents = await prisma.fatContent.findMany()
    * ```
    */
  get fatContent(): Prisma.FatContentDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Token: 'Token',
    Student: 'Student',
    Lecturer: 'Lecturer',
    Assignment: 'Assignment',
    Submission: 'Submission',
    Snapshot: 'Snapshot',
    FatContent: 'FatContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'token' | 'student' | 'lecturer' | 'assignment' | 'submission' | 'snapshot' | 'fatContent'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: TokenPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>,
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: StudentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Lecturer: {
        payload: LecturerPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LecturerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          findFirst: {
            args: Prisma.LecturerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          findMany: {
            args: Prisma.LecturerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>[]
          }
          create: {
            args: Prisma.LecturerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          createMany: {
            args: Prisma.LecturerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LecturerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          update: {
            args: Prisma.LecturerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          deleteMany: {
            args: Prisma.LecturerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LecturerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LecturerPayload>
          }
          aggregate: {
            args: Prisma.LecturerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLecturer>
          }
          groupBy: {
            args: Prisma.LecturerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LecturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerCountArgs<ExtArgs>,
            result: $Utils.Optional<LecturerCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: AssignmentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: SubmissionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Snapshot: {
        payload: SnapshotPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SnapshotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapshotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          findFirst: {
            args: Prisma.SnapshotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapshotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          findMany: {
            args: Prisma.SnapshotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>[]
          }
          create: {
            args: Prisma.SnapshotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          createMany: {
            args: Prisma.SnapshotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SnapshotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          update: {
            args: Prisma.SnapshotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SnapshotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SnapshotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SnapshotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SnapshotPayload>
          }
          aggregate: {
            args: Prisma.SnapshotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSnapshot>
          }
          groupBy: {
            args: Prisma.SnapshotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapshotCountArgs<ExtArgs>,
            result: $Utils.Optional<SnapshotCountAggregateOutputType> | number
          }
        }
      }
      FatContent: {
        payload: FatContentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FatContentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FatContentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          findFirst: {
            args: Prisma.FatContentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FatContentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          findMany: {
            args: Prisma.FatContentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>[]
          }
          create: {
            args: Prisma.FatContentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          createMany: {
            args: Prisma.FatContentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FatContentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          update: {
            args: Prisma.FatContentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          deleteMany: {
            args: Prisma.FatContentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FatContentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FatContentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FatContentPayload>
          }
          aggregate: {
            args: Prisma.FatContentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFatContent>
          }
          groupBy: {
            args: Prisma.FatContentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FatContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FatContentCountArgs<ExtArgs>,
            result: $Utils.Optional<FatContentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
    Token: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Token?: boolean
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    submission: number
    assignment: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    submission?: boolean
    assignment?: boolean
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Count Type LecturerCountOutputType
   */


  export type LecturerCountOutputType = {
    assignments: number
  }

  export type LecturerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    assignments?: boolean
  }

  // Custom InputTypes

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerCountOutputType
     */
    select?: LecturerCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Count Type AssignmentCountOutputType
   */


  export type AssignmentCountOutputType = {
    students: number
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    students?: boolean
    submissions?: boolean
  }

  // Custom InputTypes

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Count Type SubmissionCountOutputType
   */


  export type SubmissionCountOutputType = {
    snapshots: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    snapshots?: boolean
  }

  // Custom InputTypes

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: Role | null
    isInviteAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: Role | null
    isInviteAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstname: number
    lastname: number
    password: number
    role: number
    isInviteAccepted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    isInviteAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    isInviteAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    isInviteAccepted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    firstname: string | null
    lastname: string | null
    password: string
    role: Role
    isInviteAccepted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    isInviteAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Token?: boolean | User$TokenArgs<ExtArgs>
    student?: boolean | StudentArgs<ExtArgs>
    lecturer?: boolean | LecturerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    isInviteAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Token?: boolean | User$TokenArgs<ExtArgs>
    student?: boolean | StudentArgs<ExtArgs>
    lecturer?: boolean | LecturerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Token<T extends User$TokenArgs<ExtArgs> = {}>(args?: Subset<T, User$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findMany', never>| Null>;

    student<T extends StudentArgs<ExtArgs> = {}>(args?: Subset<T, StudentArgs<ExtArgs>>): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    lecturer<T extends LecturerArgs<ExtArgs> = {}>(args?: Subset<T, LecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Token
   */
  export type User$TokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Token
   */


  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithAggregationInput>
    by: TokenScalarFieldEnum[]
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }


  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type TokenGetPayload<S extends boolean | null | undefined | TokenArgs> = $Types.GetResult<TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Token'> extends True ? Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Token'> extends True ? Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TokenPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>
    ): Prisma__TokenClient<$Types.GetResult<TokenPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Token base type for findUnique actions
   */
  export type TokenFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUnique
   */
  export interface TokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TokenFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token base type for findFirst actions
   */
  export type TokenFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: Enumerable<TokenScalarFieldEnum>
  }

  /**
   * Token findFirst
   */
  export interface TokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TokenFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: Enumerable<TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude<ExtArgs> | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    studentId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    studentId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    studentId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    studentId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: StudentScalarFieldEnum[]
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: number
    userId: number
    studentId: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studentId?: boolean
    user?: boolean | UserArgs<ExtArgs>
    submission?: boolean | Student$submissionArgs<ExtArgs>
    assignment?: boolean | Student$assignmentArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    studentId?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    submission?: boolean | Student$submissionArgs<ExtArgs>
    assignment?: boolean | Student$assignmentArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeArgs<ExtArgs>
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentArgs> = $Types.GetResult<StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    submission<T extends Student$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Student$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    assignment<T extends Student$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Student$assignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUnique
   */
  export interface StudentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StudentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student findFirst
   */
  export interface StudentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StudentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.submission
   */
  export type Student$submissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubmissionScalarFieldEnum>
  }


  /**
   * Student.assignment
   */
  export type Student$assignmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AssignmentScalarFieldEnum>
  }


  /**
   * Student without action
   */
  export type StudentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Lecturer
   */


  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LecturerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LecturerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    staffId: string | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    staffId: string | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    userId: number
    staffId: number
    _all: number
  }


  export type LecturerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LecturerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LecturerMinAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
    _all?: true
  }

  export type LecturerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturer to aggregate.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: Enumerable<LecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
    orderBy?: Enumerable<LecturerOrderByWithAggregationInput>
    by: LecturerScalarFieldEnum[]
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _avg?: LecturerAvgAggregateInputType
    _sum?: LecturerSumAggregateInputType
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }


  export type LecturerGroupByOutputType = {
    id: number
    userId: number
    staffId: string
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    staffId?: boolean
    user?: boolean | UserArgs<ExtArgs>
    assignments?: boolean | Lecturer$assignmentsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectScalar = {
    id?: boolean
    userId?: boolean
    staffId?: boolean
  }

  export type LecturerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    assignments?: boolean | Lecturer$assignmentsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeArgs<ExtArgs>
  }


  type LecturerGetPayload<S extends boolean | null | undefined | LecturerArgs> = $Types.GetResult<LecturerPayload, S>

  type LecturerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LecturerFindManyArgs, 'select' | 'include'> & {
      select?: LecturerCountAggregateInputType | true
    }

  export interface LecturerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecturer'], meta: { name: 'Lecturer' } }
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LecturerFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LecturerFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lecturer'> extends True ? Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Lecturer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LecturerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LecturerFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LecturerFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lecturer'> extends True ? Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LecturerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LecturerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LecturerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
    **/
    create<T extends LecturerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LecturerCreateArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Lecturers.
     *     @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     *     @example
     *     // Create many Lecturers
     *     const lecturer = await prisma.lecturer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LecturerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LecturerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
    **/
    delete<T extends LecturerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LecturerDeleteArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LecturerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LecturerUpdateArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LecturerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LecturerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LecturerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LecturerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
    **/
    upsert<T extends LecturerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LecturerUpsertArgs<ExtArgs>>
    ): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): Prisma.PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
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
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LecturerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    assignments<T extends Lecturer$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Lecturer base type for findUnique actions
   */
  export type LecturerFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findUnique
   */
  export interface LecturerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LecturerFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lecturer findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }


  /**
   * Lecturer base type for findFirst actions
   */
  export type LecturerFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: Enumerable<LecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: Enumerable<LecturerScalarFieldEnum>
  }

  /**
   * Lecturer findFirst
   */
  export interface LecturerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LecturerFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lecturer findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: Enumerable<LecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: Enumerable<LecturerScalarFieldEnum>
  }


  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturers to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: Enumerable<LecturerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    distinct?: Enumerable<LecturerScalarFieldEnum>
  }


  /**
   * Lecturer create
   */
  export type LecturerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecturer.
     */
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }


  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecturers.
     */
    data: Enumerable<LecturerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecturer.
     */
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     */
    where: LecturerWhereUniqueInput
  }


  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
  }


  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     */
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     */
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }


  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter which Lecturer to delete.
     */
    where: LecturerWhereUniqueInput
  }


  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturers to delete
     */
    where?: LecturerWhereInput
  }


  /**
   * Lecturer.assignments
   */
  export type Lecturer$assignmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AssignmentScalarFieldEnum>
  }


  /**
   * Lecturer without action
   */
  export type LecturerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LecturerInclude<ExtArgs> | null
  }



  /**
   * Model Assignment
   */


  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    id: number | null
    lecturerId: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    id: number | null
    lecturerId: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    isDraft: boolean | null
    assignmentCode: string | null
    lecturerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    isDraft: boolean | null
    assignmentCode: string | null
    lecturerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    deadline: number
    isDraft: number
    assignmentCode: number
    lecturerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    id?: true
    lecturerId?: true
  }

  export type AssignmentSumAggregateInputType = {
    id?: true
    lecturerId?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isDraft?: true
    assignmentCode?: true
    lecturerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isDraft?: true
    assignmentCode?: true
    lecturerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    isDraft?: true
    assignmentCode?: true
    lecturerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: Enumerable<AssignmentOrderByWithAggregationInput>
    by: AssignmentScalarFieldEnum[]
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }


  export type AssignmentGroupByOutputType = {
    id: number
    title: string
    description: string
    deadline: Date
    isDraft: boolean
    assignmentCode: string | null
    lecturerId: number
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isDraft?: boolean
    assignmentCode?: boolean
    lecturerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerArgs<ExtArgs>
    students?: boolean | Assignment$studentsArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    isDraft?: boolean
    assignmentCode?: boolean
    lecturerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerArgs<ExtArgs>
    students?: boolean | Assignment$studentsArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeArgs<ExtArgs>
  }


  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentArgs> = $Types.GetResult<AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AssignmentFindManyArgs, 'select' | 'include'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssignmentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Assignment'> extends True ? Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Assignment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssignmentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Assignment'> extends True ? Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Assignment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
    **/
    create<T extends AssignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Assignments.
     *     @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     *     @example
     *     // Create many Assignments
     *     const assignment = await prisma.assignment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssignmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
    **/
    delete<T extends AssignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
    **/
    upsert<T extends AssignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    lecturer<T extends LecturerArgs<ExtArgs> = {}>(args?: Subset<T, LecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Types.GetResult<LecturerPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    students<T extends Assignment$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Assignment base type for findUnique actions
   */
  export type AssignmentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUnique
   */
  export interface AssignmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AssignmentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment base type for findFirst actions
   */
  export type AssignmentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: Enumerable<AssignmentScalarFieldEnum>
  }

  /**
   * Assignment findFirst
   */
  export interface AssignmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AssignmentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: Enumerable<AssignmentScalarFieldEnum>
  }


  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: Enumerable<AssignmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: Enumerable<AssignmentScalarFieldEnum>
  }


  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }


  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: Enumerable<AssignmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
  }


  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }


  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
  }


  /**
   * Assignment.students
   */
  export type Assignment$studentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubmissionScalarFieldEnum>
  }


  /**
   * Assignment without action
   */
  export type AssignmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
  }



  /**
   * Model Submission
   */


  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    assignmentId: number | null
    studentId: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    assignmentId: number | null
    studentId: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    assignmentId: number | null
    studentId: number | null
    submissionCode: string | null
    head: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    assignmentId: number | null
    studentId: number | null
    submissionCode: string | null
    head: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    assignmentId: number
    studentId: number
    submissionCode: number
    head: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    assignmentId?: true
    studentId?: true
  }

  export type SubmissionSumAggregateInputType = {
    assignmentId?: true
    studentId?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    submissionCode?: true
    head?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    submissionCode?: true
    head?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    submissionCode?: true
    head?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: Enumerable<SubmissionOrderByWithAggregationInput>
    by: SubmissionScalarFieldEnum[]
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }


  export type SubmissionGroupByOutputType = {
    id: string
    assignmentId: number
    studentId: number
    submissionCode: string
    head: string
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    submissionCode?: boolean
    head?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentArgs<ExtArgs>
    student?: boolean | StudentArgs<ExtArgs>
    snapshots?: boolean | Submission$snapshotsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    submissionCode?: boolean
    head?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentArgs<ExtArgs>
    student?: boolean | StudentArgs<ExtArgs>
    snapshots?: boolean | Submission$snapshotsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeArgs<ExtArgs>
  }


  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionArgs> = $Types.GetResult<SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SubmissionFindManyArgs, 'select' | 'include'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubmissionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Submission'> extends True ? Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Submission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubmissionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Submission'> extends True ? Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Submission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubmissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
    **/
    create<T extends SubmissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Submissions.
     *     @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     *     @example
     *     // Create many Submissions
     *     const submission = await prisma.submission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubmissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
    **/
    delete<T extends SubmissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubmissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubmissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubmissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
    **/
    upsert<T extends SubmissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>
    ): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    assignment<T extends AssignmentArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentArgs<ExtArgs>>): Prisma__AssignmentClient<$Types.GetResult<AssignmentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    student<T extends StudentArgs<ExtArgs> = {}>(args?: Subset<T, StudentArgs<ExtArgs>>): Prisma__StudentClient<$Types.GetResult<StudentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    snapshots<T extends Submission$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Submission base type for findUnique actions
   */
  export type SubmissionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUnique
   */
  export interface SubmissionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SubmissionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }


  /**
   * Submission base type for findFirst actions
   */
  export type SubmissionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: Enumerable<SubmissionScalarFieldEnum>
  }

  /**
   * Submission findFirst
   */
  export interface SubmissionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SubmissionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: Enumerable<SubmissionScalarFieldEnum>
  }


  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: Enumerable<SubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: Enumerable<SubmissionScalarFieldEnum>
  }


  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }


  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: Enumerable<SubmissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }


  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
  }


  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }


  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }


  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
  }


  /**
   * Submission.snapshots
   */
  export type Submission$snapshotsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    where?: SnapshotWhereInput
    orderBy?: Enumerable<SnapshotOrderByWithRelationInput>
    cursor?: SnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SnapshotScalarFieldEnum>
  }


  /**
   * Submission without action
   */
  export type SubmissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubmissionInclude<ExtArgs> | null
  }



  /**
   * Model Snapshot
   */


  export type AggregateSnapshot = {
    _count: SnapshotCountAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  export type SnapshotMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    snapshotName: string | null
    snapshotPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnapshotMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    snapshotName: string | null
    snapshotPath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SnapshotCountAggregateOutputType = {
    id: number
    submissionId: number
    snapshotName: number
    snapshotPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SnapshotMinAggregateInputType = {
    id?: true
    submissionId?: true
    snapshotName?: true
    snapshotPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnapshotMaxAggregateInputType = {
    id?: true
    submissionId?: true
    snapshotName?: true
    snapshotPath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SnapshotCountAggregateInputType = {
    id?: true
    submissionId?: true
    snapshotName?: true
    snapshotPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SnapshotAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshot to aggregate.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: Enumerable<SnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snapshots
    **/
    _count?: true | SnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapshotMaxAggregateInputType
  }

  export type GetSnapshotAggregateType<T extends SnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnapshot[P]>
      : GetScalarType<T[P], AggregateSnapshot[P]>
  }




  export type SnapshotGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SnapshotWhereInput
    orderBy?: Enumerable<SnapshotOrderByWithAggregationInput>
    by: SnapshotScalarFieldEnum[]
    having?: SnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapshotCountAggregateInputType | true
    _min?: SnapshotMinAggregateInputType
    _max?: SnapshotMaxAggregateInputType
  }


  export type SnapshotGroupByOutputType = {
    id: string
    submissionId: string
    snapshotName: string
    snapshotPath: string
    createdAt: Date
    updatedAt: Date
    _count: SnapshotCountAggregateOutputType | null
    _min: SnapshotMinAggregateOutputType | null
    _max: SnapshotMaxAggregateOutputType | null
  }

  type GetSnapshotGroupByPayload<T extends SnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SnapshotSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    snapshotName?: boolean
    snapshotPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionArgs<ExtArgs>
  }, ExtArgs["result"]["snapshot"]>

  export type SnapshotSelectScalar = {
    id?: boolean
    submissionId?: boolean
    snapshotName?: boolean
    snapshotPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SnapshotInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionArgs<ExtArgs>
  }


  type SnapshotGetPayload<S extends boolean | null | undefined | SnapshotArgs> = $Types.GetResult<SnapshotPayload, S>

  type SnapshotCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SnapshotFindManyArgs, 'select' | 'include'> & {
      select?: SnapshotCountAggregateInputType | true
    }

  export interface SnapshotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snapshot'], meta: { name: 'Snapshot' } }
    /**
     * Find zero or one Snapshot that matches the filter.
     * @param {SnapshotFindUniqueArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SnapshotFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SnapshotFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Snapshot'> extends True ? Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Snapshot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SnapshotFindUniqueOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SnapshotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SnapshotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Snapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SnapshotFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SnapshotFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Snapshot'> extends True ? Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Snapshot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindFirstOrThrowArgs} args - Arguments to find a Snapshot
     * @example
     * // Get one Snapshot
     * const snapshot = await prisma.snapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SnapshotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SnapshotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snapshots
     * const snapshots = await prisma.snapshot.findMany()
     * 
     * // Get first 10 Snapshots
     * const snapshots = await prisma.snapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapshotWithIdOnly = await prisma.snapshot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SnapshotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnapshotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Snapshot.
     * @param {SnapshotCreateArgs} args - Arguments to create a Snapshot.
     * @example
     * // Create one Snapshot
     * const Snapshot = await prisma.snapshot.create({
     *   data: {
     *     // ... data to create a Snapshot
     *   }
     * })
     * 
    **/
    create<T extends SnapshotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SnapshotCreateArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Snapshots.
     *     @param {SnapshotCreateManyArgs} args - Arguments to create many Snapshots.
     *     @example
     *     // Create many Snapshots
     *     const snapshot = await prisma.snapshot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SnapshotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnapshotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Snapshot.
     * @param {SnapshotDeleteArgs} args - Arguments to delete one Snapshot.
     * @example
     * // Delete one Snapshot
     * const Snapshot = await prisma.snapshot.delete({
     *   where: {
     *     // ... filter to delete one Snapshot
     *   }
     * })
     * 
    **/
    delete<T extends SnapshotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SnapshotDeleteArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Snapshot.
     * @param {SnapshotUpdateArgs} args - Arguments to update one Snapshot.
     * @example
     * // Update one Snapshot
     * const snapshot = await prisma.snapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SnapshotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SnapshotUpdateArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Snapshots.
     * @param {SnapshotDeleteManyArgs} args - Arguments to filter Snapshots to delete.
     * @example
     * // Delete a few Snapshots
     * const { count } = await prisma.snapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SnapshotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SnapshotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snapshots
     * const snapshot = await prisma.snapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SnapshotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SnapshotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Snapshot.
     * @param {SnapshotUpsertArgs} args - Arguments to update or create a Snapshot.
     * @example
     * // Update or create a Snapshot
     * const snapshot = await prisma.snapshot.upsert({
     *   create: {
     *     // ... data to create a Snapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snapshot we want to update
     *   }
     * })
    **/
    upsert<T extends SnapshotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SnapshotUpsertArgs<ExtArgs>>
    ): Prisma__SnapshotClient<$Types.GetResult<SnapshotPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotCountArgs} args - Arguments to filter Snapshots to count.
     * @example
     * // Count the number of Snapshots
     * const count = await prisma.snapshot.count({
     *   where: {
     *     // ... the filter for the Snapshots we want to count
     *   }
     * })
    **/
    count<T extends SnapshotCountArgs>(
      args?: Subset<T, SnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SnapshotAggregateArgs>(args: Subset<T, SnapshotAggregateArgs>): Prisma.PrismaPromise<GetSnapshotAggregateType<T>>

    /**
     * Group by Snapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapshotGroupByArgs} args - Group by arguments.
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
      T extends SnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Snapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SnapshotClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    submission<T extends SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionArgs<ExtArgs>>): Prisma__SubmissionClient<$Types.GetResult<SubmissionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Snapshot base type for findUnique actions
   */
  export type SnapshotFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }

  /**
   * Snapshot findUnique
   */
  export interface SnapshotFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SnapshotFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Snapshot findUniqueOrThrow
   */
  export type SnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where: SnapshotWhereUniqueInput
  }


  /**
   * Snapshot base type for findFirst actions
   */
  export type SnapshotFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: Enumerable<SnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: Enumerable<SnapshotScalarFieldEnum>
  }

  /**
   * Snapshot findFirst
   */
  export interface SnapshotFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SnapshotFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Snapshot findFirstOrThrow
   */
  export type SnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshot to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: Enumerable<SnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snapshots.
     */
    distinct?: Enumerable<SnapshotScalarFieldEnum>
  }


  /**
   * Snapshot findMany
   */
  export type SnapshotFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter, which Snapshots to fetch.
     */
    where?: SnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snapshots to fetch.
     */
    orderBy?: Enumerable<SnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snapshots.
     */
    cursor?: SnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snapshots.
     */
    skip?: number
    distinct?: Enumerable<SnapshotScalarFieldEnum>
  }


  /**
   * Snapshot create
   */
  export type SnapshotCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Snapshot.
     */
    data: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
  }


  /**
   * Snapshot createMany
   */
  export type SnapshotCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snapshots.
     */
    data: Enumerable<SnapshotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Snapshot update
   */
  export type SnapshotUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Snapshot.
     */
    data: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
    /**
     * Choose, which Snapshot to update.
     */
    where: SnapshotWhereUniqueInput
  }


  /**
   * Snapshot updateMany
   */
  export type SnapshotUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snapshots.
     */
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyInput>
    /**
     * Filter which Snapshots to update
     */
    where?: SnapshotWhereInput
  }


  /**
   * Snapshot upsert
   */
  export type SnapshotUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Snapshot to update in case it exists.
     */
    where: SnapshotWhereUniqueInput
    /**
     * In case the Snapshot found by the `where` argument doesn't exist, create a new Snapshot with this data.
     */
    create: XOR<SnapshotCreateInput, SnapshotUncheckedCreateInput>
    /**
     * In case the Snapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapshotUpdateInput, SnapshotUncheckedUpdateInput>
  }


  /**
   * Snapshot delete
   */
  export type SnapshotDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
    /**
     * Filter which Snapshot to delete.
     */
    where: SnapshotWhereUniqueInput
  }


  /**
   * Snapshot deleteMany
   */
  export type SnapshotDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snapshots to delete
     */
    where?: SnapshotWhereInput
  }


  /**
   * Snapshot without action
   */
  export type SnapshotArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snapshot
     */
    select?: SnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SnapshotInclude<ExtArgs> | null
  }



  /**
   * Model FatContent
   */


  export type AggregateFatContent = {
    _count: FatContentCountAggregateOutputType | null
    _avg: FatContentAvgAggregateOutputType | null
    _sum: FatContentSumAggregateOutputType | null
    _min: FatContentMinAggregateOutputType | null
    _max: FatContentMaxAggregateOutputType | null
  }

  export type FatContentAvgAggregateOutputType = {
    id: number | null
    density: number | null
    inflared: number | null
  }

  export type FatContentSumAggregateOutputType = {
    id: number | null
    density: number | null
    inflared: number | null
  }

  export type FatContentMinAggregateOutputType = {
    id: number | null
    density: number | null
    inflared: number | null
    color: string | null
    createdAt: Date | null
  }

  export type FatContentMaxAggregateOutputType = {
    id: number | null
    density: number | null
    inflared: number | null
    color: string | null
    createdAt: Date | null
  }

  export type FatContentCountAggregateOutputType = {
    id: number
    density: number
    inflared: number
    color: number
    createdAt: number
    _all: number
  }


  export type FatContentAvgAggregateInputType = {
    id?: true
    density?: true
    inflared?: true
  }

  export type FatContentSumAggregateInputType = {
    id?: true
    density?: true
    inflared?: true
  }

  export type FatContentMinAggregateInputType = {
    id?: true
    density?: true
    inflared?: true
    color?: true
    createdAt?: true
  }

  export type FatContentMaxAggregateInputType = {
    id?: true
    density?: true
    inflared?: true
    color?: true
    createdAt?: true
  }

  export type FatContentCountAggregateInputType = {
    id?: true
    density?: true
    inflared?: true
    color?: true
    createdAt?: true
    _all?: true
  }

  export type FatContentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FatContent to aggregate.
     */
    where?: FatContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FatContents to fetch.
     */
    orderBy?: Enumerable<FatContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FatContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FatContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FatContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FatContents
    **/
    _count?: true | FatContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FatContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FatContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FatContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FatContentMaxAggregateInputType
  }

  export type GetFatContentAggregateType<T extends FatContentAggregateArgs> = {
        [P in keyof T & keyof AggregateFatContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFatContent[P]>
      : GetScalarType<T[P], AggregateFatContent[P]>
  }




  export type FatContentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FatContentWhereInput
    orderBy?: Enumerable<FatContentOrderByWithAggregationInput>
    by: FatContentScalarFieldEnum[]
    having?: FatContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FatContentCountAggregateInputType | true
    _avg?: FatContentAvgAggregateInputType
    _sum?: FatContentSumAggregateInputType
    _min?: FatContentMinAggregateInputType
    _max?: FatContentMaxAggregateInputType
  }


  export type FatContentGroupByOutputType = {
    id: number
    density: number | null
    inflared: number | null
    color: string | null
    createdAt: Date
    _count: FatContentCountAggregateOutputType | null
    _avg: FatContentAvgAggregateOutputType | null
    _sum: FatContentSumAggregateOutputType | null
    _min: FatContentMinAggregateOutputType | null
    _max: FatContentMaxAggregateOutputType | null
  }

  type GetFatContentGroupByPayload<T extends FatContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FatContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FatContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FatContentGroupByOutputType[P]>
            : GetScalarType<T[P], FatContentGroupByOutputType[P]>
        }
      >
    >


  export type FatContentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    density?: boolean
    inflared?: boolean
    color?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fatContent"]>

  export type FatContentSelectScalar = {
    id?: boolean
    density?: boolean
    inflared?: boolean
    color?: boolean
    createdAt?: boolean
  }


  type FatContentGetPayload<S extends boolean | null | undefined | FatContentArgs> = $Types.GetResult<FatContentPayload, S>

  type FatContentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FatContentFindManyArgs, 'select' | 'include'> & {
      select?: FatContentCountAggregateInputType | true
    }

  export interface FatContentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FatContent'], meta: { name: 'FatContent' } }
    /**
     * Find zero or one FatContent that matches the filter.
     * @param {FatContentFindUniqueArgs} args - Arguments to find a FatContent
     * @example
     * // Get one FatContent
     * const fatContent = await prisma.fatContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FatContentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FatContentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FatContent'> extends True ? Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one FatContent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FatContentFindUniqueOrThrowArgs} args - Arguments to find a FatContent
     * @example
     * // Get one FatContent
     * const fatContent = await prisma.fatContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FatContentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FatContentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first FatContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentFindFirstArgs} args - Arguments to find a FatContent
     * @example
     * // Get one FatContent
     * const fatContent = await prisma.fatContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FatContentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FatContentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FatContent'> extends True ? Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first FatContent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentFindFirstOrThrowArgs} args - Arguments to find a FatContent
     * @example
     * // Get one FatContent
     * const fatContent = await prisma.fatContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FatContentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FatContentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more FatContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FatContents
     * const fatContents = await prisma.fatContent.findMany()
     * 
     * // Get first 10 FatContents
     * const fatContents = await prisma.fatContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fatContentWithIdOnly = await prisma.fatContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FatContentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FatContentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a FatContent.
     * @param {FatContentCreateArgs} args - Arguments to create a FatContent.
     * @example
     * // Create one FatContent
     * const FatContent = await prisma.fatContent.create({
     *   data: {
     *     // ... data to create a FatContent
     *   }
     * })
     * 
    **/
    create<T extends FatContentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FatContentCreateArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many FatContents.
     *     @param {FatContentCreateManyArgs} args - Arguments to create many FatContents.
     *     @example
     *     // Create many FatContents
     *     const fatContent = await prisma.fatContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FatContentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FatContentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FatContent.
     * @param {FatContentDeleteArgs} args - Arguments to delete one FatContent.
     * @example
     * // Delete one FatContent
     * const FatContent = await prisma.fatContent.delete({
     *   where: {
     *     // ... filter to delete one FatContent
     *   }
     * })
     * 
    **/
    delete<T extends FatContentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FatContentDeleteArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one FatContent.
     * @param {FatContentUpdateArgs} args - Arguments to update one FatContent.
     * @example
     * // Update one FatContent
     * const fatContent = await prisma.fatContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FatContentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FatContentUpdateArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more FatContents.
     * @param {FatContentDeleteManyArgs} args - Arguments to filter FatContents to delete.
     * @example
     * // Delete a few FatContents
     * const { count } = await prisma.fatContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FatContentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FatContentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FatContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FatContents
     * const fatContent = await prisma.fatContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FatContentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FatContentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FatContent.
     * @param {FatContentUpsertArgs} args - Arguments to update or create a FatContent.
     * @example
     * // Update or create a FatContent
     * const fatContent = await prisma.fatContent.upsert({
     *   create: {
     *     // ... data to create a FatContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FatContent we want to update
     *   }
     * })
    **/
    upsert<T extends FatContentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FatContentUpsertArgs<ExtArgs>>
    ): Prisma__FatContentClient<$Types.GetResult<FatContentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of FatContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentCountArgs} args - Arguments to filter FatContents to count.
     * @example
     * // Count the number of FatContents
     * const count = await prisma.fatContent.count({
     *   where: {
     *     // ... the filter for the FatContents we want to count
     *   }
     * })
    **/
    count<T extends FatContentCountArgs>(
      args?: Subset<T, FatContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FatContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FatContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FatContentAggregateArgs>(args: Subset<T, FatContentAggregateArgs>): Prisma.PrismaPromise<GetFatContentAggregateType<T>>

    /**
     * Group by FatContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatContentGroupByArgs} args - Group by arguments.
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
      T extends FatContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FatContentGroupByArgs['orderBy'] }
        : { orderBy?: FatContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FatContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFatContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FatContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FatContentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FatContent base type for findUnique actions
   */
  export type FatContentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter, which FatContent to fetch.
     */
    where: FatContentWhereUniqueInput
  }

  /**
   * FatContent findUnique
   */
  export interface FatContentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FatContentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FatContent findUniqueOrThrow
   */
  export type FatContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter, which FatContent to fetch.
     */
    where: FatContentWhereUniqueInput
  }


  /**
   * FatContent base type for findFirst actions
   */
  export type FatContentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter, which FatContent to fetch.
     */
    where?: FatContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FatContents to fetch.
     */
    orderBy?: Enumerable<FatContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FatContents.
     */
    cursor?: FatContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FatContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FatContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FatContents.
     */
    distinct?: Enumerable<FatContentScalarFieldEnum>
  }

  /**
   * FatContent findFirst
   */
  export interface FatContentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FatContentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FatContent findFirstOrThrow
   */
  export type FatContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter, which FatContent to fetch.
     */
    where?: FatContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FatContents to fetch.
     */
    orderBy?: Enumerable<FatContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FatContents.
     */
    cursor?: FatContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FatContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FatContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FatContents.
     */
    distinct?: Enumerable<FatContentScalarFieldEnum>
  }


  /**
   * FatContent findMany
   */
  export type FatContentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter, which FatContents to fetch.
     */
    where?: FatContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FatContents to fetch.
     */
    orderBy?: Enumerable<FatContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FatContents.
     */
    cursor?: FatContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FatContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FatContents.
     */
    skip?: number
    distinct?: Enumerable<FatContentScalarFieldEnum>
  }


  /**
   * FatContent create
   */
  export type FatContentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * The data needed to create a FatContent.
     */
    data: XOR<FatContentCreateInput, FatContentUncheckedCreateInput>
  }


  /**
   * FatContent createMany
   */
  export type FatContentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FatContents.
     */
    data: Enumerable<FatContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FatContent update
   */
  export type FatContentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * The data needed to update a FatContent.
     */
    data: XOR<FatContentUpdateInput, FatContentUncheckedUpdateInput>
    /**
     * Choose, which FatContent to update.
     */
    where: FatContentWhereUniqueInput
  }


  /**
   * FatContent updateMany
   */
  export type FatContentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FatContents.
     */
    data: XOR<FatContentUpdateManyMutationInput, FatContentUncheckedUpdateManyInput>
    /**
     * Filter which FatContents to update
     */
    where?: FatContentWhereInput
  }


  /**
   * FatContent upsert
   */
  export type FatContentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * The filter to search for the FatContent to update in case it exists.
     */
    where: FatContentWhereUniqueInput
    /**
     * In case the FatContent found by the `where` argument doesn't exist, create a new FatContent with this data.
     */
    create: XOR<FatContentCreateInput, FatContentUncheckedCreateInput>
    /**
     * In case the FatContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FatContentUpdateInput, FatContentUncheckedUpdateInput>
  }


  /**
   * FatContent delete
   */
  export type FatContentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
    /**
     * Filter which FatContent to delete.
     */
    where: FatContentWhereUniqueInput
  }


  /**
   * FatContent deleteMany
   */
  export type FatContentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FatContents to delete
     */
    where?: FatContentWhereInput
  }


  /**
   * FatContent without action
   */
  export type FatContentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FatContent
     */
    select?: FatContentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    isDraft: 'isDraft',
    assignmentCode: 'assignmentCode',
    lecturerId: 'lecturerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const FatContentScalarFieldEnum: {
    id: 'id',
    density: 'density',
    inflared: 'inflared',
    color: 'color',
    createdAt: 'createdAt'
  };

  export type FatContentScalarFieldEnum = (typeof FatContentScalarFieldEnum)[keyof typeof FatContentScalarFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    staffId: 'staffId'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SnapshotScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    snapshotName: 'snapshotName',
    snapshotPath: 'snapshotPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SnapshotScalarFieldEnum = (typeof SnapshotScalarFieldEnum)[keyof typeof SnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    studentId: 'studentId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    submissionCode: 'submissionCode',
    head: 'head',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    role: 'role',
    isInviteAccepted: 'isInviteAccepted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    isInviteAccepted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Token?: TokenListRelationFilter
    student?: XOR<StudentRelationFilter, StudentWhereInput> | null
    lecturer?: XOR<LecturerRelationFilter, LecturerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isInviteAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Token?: TokenOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isInviteAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    isInviteAccepted?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TokenWhereInput = {
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    id?: IntFilter | number
    token?: StringFilter | string
    type?: EnumTokenTypeFilter | TokenType
    expires?: DateTimeFilter | Date | string
    blacklisted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = {
    id?: number
    token?: string
  }

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    token?: StringWithAggregatesFilter | string
    type?: EnumTokenTypeWithAggregatesFilter | TokenType
    expires?: DateTimeWithAggregatesFilter | Date | string
    blacklisted?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    studentId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
    assignment?: AssignmentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    user?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByRelationAggregateInput
    assignment?: AssignmentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = {
    id?: number
    userId?: number
    studentId?: string
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    studentId?: StringWithAggregatesFilter | string
  }

  export type LecturerWhereInput = {
    AND?: Enumerable<LecturerWhereInput>
    OR?: Enumerable<LecturerWhereInput>
    NOT?: Enumerable<LecturerWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    staffId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: AssignmentListRelationFilter
  }

  export type LecturerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    user?: UserOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type LecturerWhereUniqueInput = {
    id?: number
    userId?: number
    staffId?: string
  }

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _avg?: LecturerAvgOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
    _sum?: LecturerSumOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    OR?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LecturerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    staffId?: StringWithAggregatesFilter | string
  }

  export type AssignmentWhereInput = {
    AND?: Enumerable<AssignmentWhereInput>
    OR?: Enumerable<AssignmentWhereInput>
    NOT?: Enumerable<AssignmentWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    deadline?: DateTimeFilter | Date | string
    isDraft?: BoolFilter | boolean
    assignmentCode?: StringNullableFilter | string | null
    lecturerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    lecturer?: XOR<LecturerRelationFilter, LecturerWhereInput>
    students?: StudentListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isDraft?: SortOrder
    assignmentCode?: SortOrder
    lecturerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = {
    id?: number
    assignmentCode?: string
  }

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isDraft?: SortOrder
    assignmentCode?: SortOrder
    lecturerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AssignmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AssignmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AssignmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    deadline?: DateTimeWithAggregatesFilter | Date | string
    isDraft?: BoolWithAggregatesFilter | boolean
    assignmentCode?: StringNullableWithAggregatesFilter | string | null
    lecturerId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: Enumerable<SubmissionWhereInput>
    OR?: Enumerable<SubmissionWhereInput>
    NOT?: Enumerable<SubmissionWhereInput>
    id?: StringFilter | string
    assignmentId?: IntFilter | number
    studentId?: IntFilter | number
    submissionCode?: StringFilter | string
    head?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    assignment?: XOR<AssignmentRelationFilter, AssignmentWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    snapshots?: SnapshotListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    submissionCode?: SortOrder
    head?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    snapshots?: SnapshotOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = {
    id?: string
    submissionCode?: string
    studentId_assignmentId?: SubmissionStudentIdAssignmentIdCompoundUniqueInput
  }

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    submissionCode?: SortOrder
    head?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubmissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubmissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubmissionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    assignmentId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    submissionCode?: StringWithAggregatesFilter | string
    head?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SnapshotWhereInput = {
    AND?: Enumerable<SnapshotWhereInput>
    OR?: Enumerable<SnapshotWhereInput>
    NOT?: Enumerable<SnapshotWhereInput>
    id?: StringFilter | string
    submissionId?: StringFilter | string
    snapshotName?: StringFilter | string
    snapshotPath?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    submission?: XOR<SubmissionRelationFilter, SubmissionWhereInput>
  }

  export type SnapshotOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    snapshotName?: SortOrder
    snapshotPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type SnapshotWhereUniqueInput = {
    id?: string
    snapshotPath?: string
  }

  export type SnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    snapshotName?: SortOrder
    snapshotPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SnapshotCountOrderByAggregateInput
    _max?: SnapshotMaxOrderByAggregateInput
    _min?: SnapshotMinOrderByAggregateInput
  }

  export type SnapshotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SnapshotScalarWhereWithAggregatesInput>
    OR?: Enumerable<SnapshotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SnapshotScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    submissionId?: StringWithAggregatesFilter | string
    snapshotName?: StringWithAggregatesFilter | string
    snapshotPath?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FatContentWhereInput = {
    AND?: Enumerable<FatContentWhereInput>
    OR?: Enumerable<FatContentWhereInput>
    NOT?: Enumerable<FatContentWhereInput>
    id?: IntFilter | number
    density?: FloatNullableFilter | number | null
    inflared?: FloatNullableFilter | number | null
    color?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type FatContentOrderByWithRelationInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type FatContentWhereUniqueInput = {
    id?: number
  }

  export type FatContentOrderByWithAggregationInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    _count?: FatContentCountOrderByAggregateInput
    _avg?: FatContentAvgOrderByAggregateInput
    _max?: FatContentMaxOrderByAggregateInput
    _min?: FatContentMinOrderByAggregateInput
    _sum?: FatContentSumOrderByAggregateInput
  }

  export type FatContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FatContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<FatContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FatContentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    density?: FloatNullableWithAggregatesFilter | number | null
    inflared?: FloatNullableWithAggregatesFilter | number | null
    color?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    studentId: string
    user: UserCreateNestedOneWithoutStudentInput
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    assignment?: AssignmentCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    userId: number
    studentId: string
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    assignment?: AssignmentUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    assignment?: AssignmentUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    assignment?: AssignmentUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    userId: number
    studentId: string
  }

  export type StudentUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type LecturerCreateInput = {
    staffId: string
    user: UserCreateNestedOneWithoutLecturerInput
    assignments?: AssignmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateInput = {
    id?: number
    userId: number
    staffId: string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUpdateInput = {
    staffId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
    assignments?: AssignmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    staffId?: StringFieldUpdateOperationsInput | string
    assignments?: AssignmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerCreateManyInput = {
    id?: number
    userId: number
    staffId: string
  }

  export type LecturerUpdateManyMutationInput = {
    staffId?: StringFieldUpdateOperationsInput | string
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    staffId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentCreateInput = {
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutAssignmentsInput
    students?: StudentCreateNestedManyWithoutAssignmentInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    lecturerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutAssignmentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutAssignmentsNestedInput
    students?: StudentUpdateManyWithoutAssignmentNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    lecturerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutAssignmentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    lecturerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    lecturerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    student: StudentCreateNestedOneWithoutSubmissionInput
    snapshots?: SnapshotCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    assignmentId: number
    studentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: StudentUpdateOneRequiredWithoutSubmissionNestedInput
    snapshots?: SnapshotUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    assignmentId: number
    studentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateInput = {
    id?: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutSnapshotsInput
  }

  export type SnapshotUncheckedCreateInput = {
    id?: string
    submissionId: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type SnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateManyInput = {
    id?: string
    submissionId: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FatContentCreateInput = {
    density?: number | null
    inflared?: number | null
    color?: string | null
    createdAt?: Date | string
  }

  export type FatContentUncheckedCreateInput = {
    id?: number
    density?: number | null
    inflared?: number | null
    color?: string | null
    createdAt?: Date | string
  }

  export type FatContentUpdateInput = {
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    inflared?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FatContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    inflared?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FatContentCreateManyInput = {
    id?: number
    density?: number | null
    inflared?: number | null
    color?: string | null
    createdAt?: Date | string
  }

  export type FatContentUpdateManyMutationInput = {
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    inflared?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FatContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    density?: NullableFloatFieldUpdateOperationsInput | number | null
    inflared?: NullableFloatFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type LecturerRelationFilter = {
    is?: LecturerWhereInput
    isNot?: LecturerWhereInput
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isInviteAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isInviteAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isInviteAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumTokenTypeFilter = {
    equals?: TokenType
    in?: Enumerable<TokenType>
    notIn?: Enumerable<TokenType>
    not?: NestedEnumTokenTypeFilter | TokenType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter = {
    equals?: TokenType
    in?: Enumerable<TokenType>
    notIn?: Enumerable<TokenType>
    not?: NestedEnumTokenTypeWithAggregatesFilter | TokenType
    _count?: NestedIntFilter
    _min?: NestedEnumTokenTypeFilter
    _max?: NestedEnumTokenTypeFilter
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
  }

  export type LecturerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
  }

  export type LecturerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isDraft?: SortOrder
    assignmentCode?: SortOrder
    lecturerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isDraft?: SortOrder
    assignmentCode?: SortOrder
    lecturerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    isDraft?: SortOrder
    assignmentCode?: SortOrder
    lecturerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
  }

  export type AssignmentRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type SnapshotListRelationFilter = {
    every?: SnapshotWhereInput
    some?: SnapshotWhereInput
    none?: SnapshotWhereInput
  }

  export type SnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionStudentIdAssignmentIdCompoundUniqueInput = {
    studentId: number
    assignmentId: number
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    submissionCode?: SortOrder
    head?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    assignmentId?: SortOrder
    studentId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    submissionCode?: SortOrder
    head?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    submissionCode?: SortOrder
    head?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    assignmentId?: SortOrder
    studentId?: SortOrder
  }

  export type SubmissionRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type SnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    snapshotName?: SortOrder
    snapshotPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    snapshotName?: SortOrder
    snapshotPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    snapshotName?: SortOrder
    snapshotPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type FatContentCountOrderByAggregateInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type FatContentAvgOrderByAggregateInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
  }

  export type FatContentMaxOrderByAggregateInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type FatContentMinOrderByAggregateInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
  }

  export type FatContentSumOrderByAggregateInput = {
    id?: SortOrder
    density?: SortOrder
    inflared?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type LecturerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: TokenType
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutStudentInput>, Enumerable<SubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutStudentInput>
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: Enumerable<SubmissionWhereUniqueInput>
  }

  export type AssignmentCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutStudentsInput>, Enumerable<AssignmentUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutStudentInput>, Enumerable<SubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutStudentInput>
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: Enumerable<SubmissionWhereUniqueInput>
  }

  export type AssignmentUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutStudentsInput>, Enumerable<AssignmentUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutStudentInput>, Enumerable<SubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<SubmissionUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: Enumerable<SubmissionWhereUniqueInput>
    disconnect?: Enumerable<SubmissionWhereUniqueInput>
    delete?: Enumerable<SubmissionWhereUniqueInput>
    connect?: Enumerable<SubmissionWhereUniqueInput>
    update?: Enumerable<SubmissionUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<SubmissionUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<SubmissionScalarWhereInput>
  }

  export type AssignmentUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutStudentsInput>, Enumerable<AssignmentUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<AssignmentUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<AssignmentWhereUniqueInput>
    disconnect?: Enumerable<AssignmentWhereUniqueInput>
    delete?: Enumerable<AssignmentWhereUniqueInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
    update?: Enumerable<AssignmentUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<AssignmentUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<AssignmentScalarWhereInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutStudentInput>, Enumerable<SubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<SubmissionUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: Enumerable<SubmissionWhereUniqueInput>
    disconnect?: Enumerable<SubmissionWhereUniqueInput>
    delete?: Enumerable<SubmissionWhereUniqueInput>
    connect?: Enumerable<SubmissionWhereUniqueInput>
    update?: Enumerable<SubmissionUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<SubmissionUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<SubmissionScalarWhereInput>
  }

  export type AssignmentUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutStudentsInput>, Enumerable<AssignmentUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<AssignmentUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<AssignmentWhereUniqueInput>
    disconnect?: Enumerable<AssignmentWhereUniqueInput>
    delete?: Enumerable<AssignmentWhereUniqueInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
    update?: Enumerable<AssignmentUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<AssignmentUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<AssignmentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutLecturerInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutLecturerInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutLecturerInput>, Enumerable<AssignmentUncheckedCreateWithoutLecturerInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutLecturerInput>
    createMany?: AssignmentCreateManyLecturerInputEnvelope
    connect?: Enumerable<AssignmentWhereUniqueInput>
  }

  export type AssignmentUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutLecturerInput>, Enumerable<AssignmentUncheckedCreateWithoutLecturerInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutLecturerInput>
    createMany?: AssignmentCreateManyLecturerInputEnvelope
    connect?: Enumerable<AssignmentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutLecturerNestedInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    upsert?: UserUpsertWithoutLecturerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type AssignmentUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutLecturerInput>, Enumerable<AssignmentUncheckedCreateWithoutLecturerInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutLecturerInput>
    upsert?: Enumerable<AssignmentUpsertWithWhereUniqueWithoutLecturerInput>
    createMany?: AssignmentCreateManyLecturerInputEnvelope
    set?: Enumerable<AssignmentWhereUniqueInput>
    disconnect?: Enumerable<AssignmentWhereUniqueInput>
    delete?: Enumerable<AssignmentWhereUniqueInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
    update?: Enumerable<AssignmentUpdateWithWhereUniqueWithoutLecturerInput>
    updateMany?: Enumerable<AssignmentUpdateManyWithWhereWithoutLecturerInput>
    deleteMany?: Enumerable<AssignmentScalarWhereInput>
  }

  export type AssignmentUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<Enumerable<AssignmentCreateWithoutLecturerInput>, Enumerable<AssignmentUncheckedCreateWithoutLecturerInput>>
    connectOrCreate?: Enumerable<AssignmentCreateOrConnectWithoutLecturerInput>
    upsert?: Enumerable<AssignmentUpsertWithWhereUniqueWithoutLecturerInput>
    createMany?: AssignmentCreateManyLecturerInputEnvelope
    set?: Enumerable<AssignmentWhereUniqueInput>
    disconnect?: Enumerable<AssignmentWhereUniqueInput>
    delete?: Enumerable<AssignmentWhereUniqueInput>
    connect?: Enumerable<AssignmentWhereUniqueInput>
    update?: Enumerable<AssignmentUpdateWithWhereUniqueWithoutLecturerInput>
    updateMany?: Enumerable<AssignmentUpdateManyWithWhereWithoutLecturerInput>
    deleteMany?: Enumerable<AssignmentScalarWhereInput>
  }

  export type LecturerCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<LecturerCreateWithoutAssignmentsInput, LecturerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAssignmentsInput
    connect?: LecturerWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<Enumerable<StudentCreateWithoutAssignmentInput>, Enumerable<StudentUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutAssignmentInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutAssignmentInput>, Enumerable<SubmissionUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutAssignmentInput>
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: Enumerable<SubmissionWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<Enumerable<StudentCreateWithoutAssignmentInput>, Enumerable<StudentUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutAssignmentInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutAssignmentInput>, Enumerable<SubmissionUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutAssignmentInput>
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: Enumerable<SubmissionWhereUniqueInput>
  }

  export type LecturerUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<LecturerCreateWithoutAssignmentsInput, LecturerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAssignmentsInput
    upsert?: LecturerUpsertWithoutAssignmentsInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<LecturerUpdateWithoutAssignmentsInput, LecturerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type StudentUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutAssignmentInput>, Enumerable<StudentUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutAssignmentInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutAssignmentInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutAssignmentInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutAssignmentInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutAssignmentInput>, Enumerable<SubmissionUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutAssignmentInput>
    upsert?: Enumerable<SubmissionUpsertWithWhereUniqueWithoutAssignmentInput>
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: Enumerable<SubmissionWhereUniqueInput>
    disconnect?: Enumerable<SubmissionWhereUniqueInput>
    delete?: Enumerable<SubmissionWhereUniqueInput>
    connect?: Enumerable<SubmissionWhereUniqueInput>
    update?: Enumerable<SubmissionUpdateWithWhereUniqueWithoutAssignmentInput>
    updateMany?: Enumerable<SubmissionUpdateManyWithWhereWithoutAssignmentInput>
    deleteMany?: Enumerable<SubmissionScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutAssignmentInput>, Enumerable<StudentUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutAssignmentInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutAssignmentInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutAssignmentInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutAssignmentInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<Enumerable<SubmissionCreateWithoutAssignmentInput>, Enumerable<SubmissionUncheckedCreateWithoutAssignmentInput>>
    connectOrCreate?: Enumerable<SubmissionCreateOrConnectWithoutAssignmentInput>
    upsert?: Enumerable<SubmissionUpsertWithWhereUniqueWithoutAssignmentInput>
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: Enumerable<SubmissionWhereUniqueInput>
    disconnect?: Enumerable<SubmissionWhereUniqueInput>
    delete?: Enumerable<SubmissionWhereUniqueInput>
    connect?: Enumerable<SubmissionWhereUniqueInput>
    update?: Enumerable<SubmissionUpdateWithWhereUniqueWithoutAssignmentInput>
    updateMany?: Enumerable<SubmissionUpdateManyWithWhereWithoutAssignmentInput>
    deleteMany?: Enumerable<SubmissionScalarWhereInput>
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionInput
    connect?: StudentWhereUniqueInput
  }

  export type SnapshotCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Enumerable<SnapshotCreateWithoutSubmissionInput>, Enumerable<SnapshotUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<SnapshotCreateOrConnectWithoutSubmissionInput>
    createMany?: SnapshotCreateManySubmissionInputEnvelope
    connect?: Enumerable<SnapshotWhereUniqueInput>
  }

  export type SnapshotUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Enumerable<SnapshotCreateWithoutSubmissionInput>, Enumerable<SnapshotUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<SnapshotCreateOrConnectWithoutSubmissionInput>
    createMany?: SnapshotCreateManySubmissionInputEnvelope
    connect?: Enumerable<SnapshotWhereUniqueInput>
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StudentUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionInput
    upsert?: StudentUpsertWithoutSubmissionInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutSubmissionInput, StudentUncheckedUpdateWithoutSubmissionInput>
  }

  export type SnapshotUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Enumerable<SnapshotCreateWithoutSubmissionInput>, Enumerable<SnapshotUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<SnapshotCreateOrConnectWithoutSubmissionInput>
    upsert?: Enumerable<SnapshotUpsertWithWhereUniqueWithoutSubmissionInput>
    createMany?: SnapshotCreateManySubmissionInputEnvelope
    set?: Enumerable<SnapshotWhereUniqueInput>
    disconnect?: Enumerable<SnapshotWhereUniqueInput>
    delete?: Enumerable<SnapshotWhereUniqueInput>
    connect?: Enumerable<SnapshotWhereUniqueInput>
    update?: Enumerable<SnapshotUpdateWithWhereUniqueWithoutSubmissionInput>
    updateMany?: Enumerable<SnapshotUpdateManyWithWhereWithoutSubmissionInput>
    deleteMany?: Enumerable<SnapshotScalarWhereInput>
  }

  export type SnapshotUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Enumerable<SnapshotCreateWithoutSubmissionInput>, Enumerable<SnapshotUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<SnapshotCreateOrConnectWithoutSubmissionInput>
    upsert?: Enumerable<SnapshotUpsertWithWhereUniqueWithoutSubmissionInput>
    createMany?: SnapshotCreateManySubmissionInputEnvelope
    set?: Enumerable<SnapshotWhereUniqueInput>
    disconnect?: Enumerable<SnapshotWhereUniqueInput>
    delete?: Enumerable<SnapshotWhereUniqueInput>
    connect?: Enumerable<SnapshotWhereUniqueInput>
    update?: Enumerable<SnapshotUpdateWithWhereUniqueWithoutSubmissionInput>
    updateMany?: Enumerable<SnapshotUpdateManyWithWhereWithoutSubmissionInput>
    deleteMany?: Enumerable<SnapshotScalarWhereInput>
  }

  export type SubmissionCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<SubmissionCreateWithoutSnapshotsInput, SubmissionUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutSnapshotsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<SubmissionCreateWithoutSnapshotsInput, SubmissionUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutSnapshotsInput
    upsert?: SubmissionUpsertWithoutSnapshotsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<SubmissionUpdateWithoutSnapshotsInput, SubmissionUncheckedUpdateWithoutSnapshotsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumTokenTypeFilter = {
    equals?: TokenType
    in?: Enumerable<TokenType>
    notIn?: Enumerable<TokenType>
    not?: NestedEnumTokenTypeFilter | TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter = {
    equals?: TokenType
    in?: Enumerable<TokenType>
    notIn?: Enumerable<TokenType>
    not?: NestedEnumTokenTypeWithAggregatesFilter | TokenType
    _count?: NestedIntFilter
    _min?: NestedEnumTokenTypeFilter
    _max?: NestedEnumTokenTypeFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: Enumerable<TokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUserInput = {
    studentId: string
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    assignment?: AssignmentCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    studentId: string
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    assignment?: AssignmentUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type LecturerCreateWithoutUserInput = {
    staffId: string
    assignments?: AssignmentCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutUserInput = {
    id?: number
    staffId: string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutUserInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenScalarWhereInput = {
    AND?: Enumerable<TokenScalarWhereInput>
    OR?: Enumerable<TokenScalarWhereInput>
    NOT?: Enumerable<TokenScalarWhereInput>
    id?: IntFilter | number
    token?: StringFilter | string
    type?: EnumTokenTypeFilter | TokenType
    expires?: DateTimeFilter | Date | string
    blacklisted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    assignment?: AssignmentUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    assignment?: AssignmentUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type LecturerUpsertWithoutUserInput = {
    update: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type LecturerUpdateWithoutUserInput = {
    staffId?: StringFieldUpdateOperationsInput | string
    assignments?: AssignmentUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    staffId?: StringFieldUpdateOperationsInput | string
    assignments?: AssignmentUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutStudentInput = {
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    lecturer?: LecturerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateWithoutStudentInput = {
    id?: string
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    snapshots?: SnapshotCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    assignmentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: Enumerable<SubmissionCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutStudentsInput = {
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutStudentsInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    lecturerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutStudentsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutStudentsInput, AssignmentUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: Enumerable<SubmissionScalarWhereInput>
    OR?: Enumerable<SubmissionScalarWhereInput>
    NOT?: Enumerable<SubmissionScalarWhereInput>
    id?: StringFilter | string
    assignmentId?: IntFilter | number
    studentId?: IntFilter | number
    submissionCode?: StringFilter | string
    head?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutStudentsInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutStudentsInput, AssignmentUncheckedUpdateWithoutStudentsInput>
    create: XOR<AssignmentCreateWithoutStudentsInput, AssignmentUncheckedCreateWithoutStudentsInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutStudentsInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutStudentsInput, AssignmentUncheckedUpdateWithoutStudentsInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutStudentsInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: Enumerable<AssignmentScalarWhereInput>
    OR?: Enumerable<AssignmentScalarWhereInput>
    NOT?: Enumerable<AssignmentScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    deadline?: DateTimeFilter | Date | string
    isDraft?: BoolFilter | boolean
    assignmentCode?: StringNullableFilter | string | null
    lecturerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutLecturerInput = {
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLecturerInput = {
    id?: number
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    role?: Role
    isInviteAccepted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLecturerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
  }

  export type AssignmentCreateWithoutLecturerInput = {
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutAssignmentInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutLecturerInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutAssignmentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutLecturerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutLecturerInput, AssignmentUncheckedCreateWithoutLecturerInput>
  }

  export type AssignmentCreateManyLecturerInputEnvelope = {
    data: Enumerable<AssignmentCreateManyLecturerInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLecturerInput = {
    update: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
  }

  export type UserUpdateWithoutLecturerInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    isInviteAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AssignmentUpsertWithWhereUniqueWithoutLecturerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutLecturerInput, AssignmentUncheckedUpdateWithoutLecturerInput>
    create: XOR<AssignmentCreateWithoutLecturerInput, AssignmentUncheckedCreateWithoutLecturerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutLecturerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutLecturerInput, AssignmentUncheckedUpdateWithoutLecturerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutLecturerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutAssignmentsInput>
  }

  export type LecturerCreateWithoutAssignmentsInput = {
    staffId: string
    user: UserCreateNestedOneWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    userId: number
    staffId: string
  }

  export type LecturerCreateOrConnectWithoutAssignmentsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutAssignmentsInput, LecturerUncheckedCreateWithoutAssignmentsInput>
  }

  export type StudentCreateWithoutAssignmentInput = {
    studentId: string
    user: UserCreateNestedOneWithoutStudentInput
    submission?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAssignmentInput = {
    id?: number
    userId: number
    studentId: string
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAssignmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAssignmentInput, StudentUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateWithoutAssignmentInput = {
    id?: string
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubmissionInput
    snapshots?: SnapshotCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    studentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: SnapshotUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: Enumerable<SubmissionCreateManyAssignmentInput>
    skipDuplicates?: boolean
  }

  export type LecturerUpsertWithoutAssignmentsInput = {
    update: XOR<LecturerUpdateWithoutAssignmentsInput, LecturerUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<LecturerCreateWithoutAssignmentsInput, LecturerUncheckedCreateWithoutAssignmentsInput>
  }

  export type LecturerUpdateWithoutAssignmentsInput = {
    staffId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    staffId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutAssignmentInput, StudentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<StudentCreateWithoutAssignmentInput, StudentUncheckedCreateWithoutAssignmentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutAssignmentInput, StudentUncheckedUpdateWithoutAssignmentInput>
  }

  export type StudentUpdateManyWithWhereWithoutAssignmentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    studentId?: StringFilter | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutSubmissionsInput>
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutAssignmentsInput
    students?: StudentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    lecturerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type StudentCreateWithoutSubmissionInput = {
    studentId: string
    user: UserCreateNestedOneWithoutStudentInput
    assignment?: AssignmentCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutSubmissionInput = {
    id?: number
    userId: number
    studentId: string
    assignment?: AssignmentUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutSubmissionInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
  }

  export type SnapshotCreateWithoutSubmissionInput = {
    id?: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUncheckedCreateWithoutSubmissionInput = {
    id?: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotCreateOrConnectWithoutSubmissionInput = {
    where: SnapshotWhereUniqueInput
    create: XOR<SnapshotCreateWithoutSubmissionInput, SnapshotUncheckedCreateWithoutSubmissionInput>
  }

  export type SnapshotCreateManySubmissionInputEnvelope = {
    data: Enumerable<SnapshotCreateManySubmissionInput>
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutAssignmentsNestedInput
    students?: StudentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    lecturerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type StudentUpsertWithoutSubmissionInput = {
    update: XOR<StudentUpdateWithoutSubmissionInput, StudentUncheckedUpdateWithoutSubmissionInput>
    create: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
  }

  export type StudentUpdateWithoutSubmissionInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    assignment?: AssignmentUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    assignment?: AssignmentUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type SnapshotUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: SnapshotWhereUniqueInput
    update: XOR<SnapshotUpdateWithoutSubmissionInput, SnapshotUncheckedUpdateWithoutSubmissionInput>
    create: XOR<SnapshotCreateWithoutSubmissionInput, SnapshotUncheckedCreateWithoutSubmissionInput>
  }

  export type SnapshotUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: SnapshotWhereUniqueInput
    data: XOR<SnapshotUpdateWithoutSubmissionInput, SnapshotUncheckedUpdateWithoutSubmissionInput>
  }

  export type SnapshotUpdateManyWithWhereWithoutSubmissionInput = {
    where: SnapshotScalarWhereInput
    data: XOR<SnapshotUpdateManyMutationInput, SnapshotUncheckedUpdateManyWithoutSnapshotsInput>
  }

  export type SnapshotScalarWhereInput = {
    AND?: Enumerable<SnapshotScalarWhereInput>
    OR?: Enumerable<SnapshotScalarWhereInput>
    NOT?: Enumerable<SnapshotScalarWhereInput>
    id?: StringFilter | string
    submissionId?: StringFilter | string
    snapshotName?: StringFilter | string
    snapshotPath?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SubmissionCreateWithoutSnapshotsInput = {
    id?: string
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    student: StudentCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    assignmentId: number
    studentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutSnapshotsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutSnapshotsInput, SubmissionUncheckedCreateWithoutSnapshotsInput>
  }

  export type SubmissionUpsertWithoutSnapshotsInput = {
    update: XOR<SubmissionUpdateWithoutSnapshotsInput, SubmissionUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<SubmissionCreateWithoutSnapshotsInput, SubmissionUncheckedCreateWithoutSnapshotsInput>
  }

  export type SubmissionUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: StudentUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyStudentInput = {
    id?: string
    assignmentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    snapshots?: SnapshotUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutStudentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    lecturerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    lecturerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyLecturerInput = {
    id?: number
    title: string
    description: string
    deadline: Date | string
    isDraft?: boolean
    assignmentCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateWithoutLecturerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutAssignmentNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutLecturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutAssignmentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    assignmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyAssignmentInput = {
    id?: string
    studentId: number
    submissionCode: string
    head: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutAssignmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubmissionNestedInput
    snapshots?: SnapshotUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SnapshotUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    submissionCode?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotCreateManySubmissionInput = {
    id?: string
    snapshotName: string
    snapshotPath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SnapshotUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapshotUncheckedUpdateManyWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    snapshotName?: StringFieldUpdateOperationsInput | string
    snapshotPath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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