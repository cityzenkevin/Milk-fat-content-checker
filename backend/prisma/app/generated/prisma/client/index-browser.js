
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.AssignmentScalarFieldEnum = {
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

exports.Prisma.FatContentScalarFieldEnum = {
  id: 'id',
  density: 'density',
  inflared: 'inflared',
  color: 'color',
  createdAt: 'createdAt'
};

exports.Prisma.LecturerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  staffId: 'staffId'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SnapshotScalarFieldEnum = {
  id: 'id',
  submissionId: 'submissionId',
  snapshotName: 'snapshotName',
  snapshotPath: 'snapshotPath',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  studentId: 'studentId'
};

exports.Prisma.SubmissionScalarFieldEnum = {
  id: 'id',
  assignmentId: 'assignmentId',
  studentId: 'studentId',
  submissionCode: 'submissionCode',
  head: 'head',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  type: 'type',
  expires: 'expires',
  blacklisted: 'blacklisted',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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
exports.Role = {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  LECTURER: 'LECTURER'
};

exports.TokenType = {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  ACTIVATION: 'ACTIVATION'
};

exports.Prisma.ModelName = {
  User: 'User',
  Token: 'Token',
  Student: 'Student',
  Lecturer: 'Lecturer',
  Assignment: 'Assignment',
  Submission: 'Submission',
  Snapshot: 'Snapshot',
  FatContent: 'FatContent'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
