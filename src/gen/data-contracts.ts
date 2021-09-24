/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuditTrail {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the audit record.
   * @format uuid
   */
  id: string;

  /** The action that was taken. */
  action: string;

  /** The id of the object associated with the action. */
  object_id: string;

  /** The name of the object associated with the action, if applicable. */
  object_name: string;

  /** The type of object associated with the action. */
  object_type: ObjectTypeEnum;

  /**
   * The timestamp of the activity that was audited.
   * @format date-time
   */
  timestamp: string;

  /** Details of the user associated with this change. */
  user: User;
}

export interface AuditTrailSummary {
  /**
   * The earliest audit record timestamp available.
   * @format date-time
   */
  earliest: string | null;

  /** The maximum number of days the system will save auditing records, based on your subscription. */
  max_days: number;

  /** The maximum number of auditing records the system will save based on your subscription. */
  max_records: number;

  /** The total number of audit records available. */
  total: number;
}

export enum AwsEnabledRegionsEnum {
  AfSouth1 = "af-south-1",
  ApEast1 = "ap-east-1",
  ApNortheast1 = "ap-northeast-1",
  ApNortheast2 = "ap-northeast-2",
  ApNortheast3 = "ap-northeast-3",
  ApSouth1 = "ap-south-1",
  ApSoutheast1 = "ap-southeast-1",
  ApSoutheast2 = "ap-southeast-2",
  CaCentral1 = "ca-central-1",
  CnNorth1 = "cn-north-1",
  CnNorthwest1 = "cn-northwest-1",
  EuCentral1 = "eu-central-1",
  EuNorth1 = "eu-north-1",
  EuSouth1 = "eu-south-1",
  EuWest1 = "eu-west-1",
  EuWest2 = "eu-west-2",
  EuWest3 = "eu-west-3",
  MeSouth1 = "me-south-1",
  SaEast1 = "sa-east-1",
  UsEast1 = "us-east-1",
  UsEast2 = "us-east-2",
  UsWest1 = "us-west-1",
  UsWest2 = "us-west-2",
}

export enum AwsEnabledServicesEnum {
  S3 = "s3",
  Secretsmanager = "secretsmanager",
  Ssm = "ssm",
}

export interface AwsIntegration {
  /** @format uri */
  url: string;

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
  name: string;

  /** The optional description for the integration. */
  description?: string;

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status: string;

  /** If an error occurs, more details will be available in this field. */
  status_detail: string;

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at: string;

  /** The type of integration. */
  type: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
  fqn: string;

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id: string;

  /** The AWS regions to integrate with. */
  aws_enabled_regions: AwsEnabledRegionsEnum[];

  /** The AWS services to integrate with. */
  aws_enabled_services: AwsEnabledServicesEnum[];

  /**
   * This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  If your AWS Administrator provided you with a value use it, otherwise we will generate a random value for you to give to your AWS Administrator.
   * @pattern ^[\w+=,.@:/\-]*$
   */
  aws_external_id?: string;

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name: string;
}

export interface AwsIntegrationCreate {
  /** The optional description for the integration. */
  description?: string;

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id: string;

  /** The AWS regions to integrate with. */
  aws_enabled_regions: AwsEnabledRegionsEnum[];

  /** The AWS services to integrate with. */
  aws_enabled_services: AwsEnabledServicesEnum[];

  /**
   * This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  If your AWS Administrator provided you with a value use it, otherwise we will generate a random value for you to give to your AWS Administrator.
   * @pattern ^[\w+=,.@:/\-]*$
   */
  aws_external_id?: string;

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name: string;
}

export interface Environment {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id: string;

  /** The environment name. */
  name: string;

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

export interface EnvironmentCreate {
  /** The environment name. */
  name: string;

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null;
}

export interface GitHubIntegration {
  /** @format uri */
  url: string;

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
  name: string;

  /** The optional description for the integration. */
  description?: string;

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status: string;

  /** If an error occurs, more details will be available in this field. */
  status_detail: string;

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at: string;

  /** The type of integration. */
  type: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
  fqn: string;
  gh_installation_id: number;
  gh_organization_slug: string;
}

export interface GitHubIntegrationCreate {
  /** The optional description for the integration. */
  description?: string;
  gh_installation_id: number;
}

export enum HistoryModelEnum {
  Parameter = "Parameter",
  ParameterRule = "ParameterRule",
  Value = "Value",
}

export enum HistoryTypeEnum {
  Create = "create",
  Update = "update",
  Delete = "delete",
}

/**
 * Describes the content available at a given location.
 */
export interface IntegrationExplorer {
  fqn: string;
  node_type: NodeTypeEnum;
  secret?: boolean;
  name?: string;
  content_type?: string | null;
  content_data?: string | null;
  content_size?: number | null;
  content_keys?: string[] | null;
}

export interface Invitation {
  /** @format uri */
  url: string;

  /**
   * The unique identifier of an invitation.
   * @format uuid
   */
  id: string;

  /**
   * The email address of the user to be invited.
   * @format email
   */
  email: string;

  /** The role that the user will have in the organization, should the user accept. */
  role: RoleEnum;

  /**
   * The user that created the invitation.
   * @format uri
   */
  inviter: string;

  /** The current state of the invitation. */
  state: string;

  /** Additional details about the state of the invitation. */
  state_detail: string;

  /**
   * The resulting membership, should the user accept.
   * @format uri
   */
  membership: string;
}

export interface InvitationCreate {
  /**
   * The email address of the user to be invited.
   * @format email
   */
  email: string;

  /** The role that the user will have in the organization, should the user accept. */
  role: RoleEnum;
}

export interface Membership {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the membership.
   * @format uuid
   */
  id: string;

  /**
   * The user of the membership.
   * @format uri
   */
  user: string;

  /**
   * The organization that the user is a member of.
   * @format uri
   */
  organization: string;

  /** The role that the user has in the organization. */
  role: RoleEnum;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

export interface MembershipCreate {
  /**
   * The user of the membership.
   * @format uri
   */
  user: string;

  /** The role that the user has in the organization. */
  role: RoleEnum;
}

export enum NodeTypeEnum {
  Directory = "directory",
  File = "file",
}

export enum ObjectTypeEnum {
  DataIntegration = "DataIntegration",
  Environment = "Environment",
  Parameter = "Parameter",
  ParameterRule = "ParameterRule",
  Project = "Project",
  Template = "Template",
  Value = "Value",
}

export interface Organization {
  /** @format uri */
  url: string;

  /** A unique identifier for the organization. */
  id: string;

  /** The organization name. */
  name: string;

  /** Indicates if this Organization is the one currently targeted by the Bearer token used by the client to authorize. */
  current: boolean;

  /** @format date-time */
  subscription_expires_at: string | null;
  subscription_id: string | null;
  subscription_plan_id: string | null;
  subscription_plan_name: string | null;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

export interface OrganizationCreate {
  /** The organization name. */
  name: string;
}

export interface PaginatedAuditTrailList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: AuditTrail[];
}

export interface PaginatedAwsIntegrationList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: AwsIntegration[];
}

export interface PaginatedEnvironmentList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Environment[];
}

export interface PaginatedGitHubIntegrationList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: GitHubIntegration[];
}

export interface PaginatedIntegrationExplorerList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: IntegrationExplorer[];
}

export interface PaginatedInvitationList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Invitation[];
}

export interface PaginatedMembershipList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Membership[];
}

export interface PaginatedOrganizationList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Organization[];
}

export interface PaginatedParameterList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Parameter[];
}

export interface PaginatedParameterRuleList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: ParameterRule[];
}

export interface PaginatedProjectList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Project[];
}

export interface PaginatedServiceAccountList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: ServiceAccount[];
}

export interface PaginatedTagList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Tag[];
}

export interface PaginatedTemplateList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Template[];
}

export interface PaginatedUserList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: User[];
}

export interface PaginatedValueList {
  /** @example 123 */
  count?: number;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null;

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null;
  results?: Value[];
}

/**
 * A single parameter inside of a project.
 */
export interface Parameter {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string;

  /** The parameter name. */
  name: string;

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean;
  type?: ParameterTypeEnum;

  /** Rules applied to this parameter. */
  rules: ParameterRule[];

  /** Templates that reference this Parameter. */
  referencing_templates: string[];

  /** Dynamic values that reference this Parameter. */
  referencing_values: string[];

  /**
   *
   *             Each parameter has an effective value in every environment based on
   *             environment inheritance and which environments have had a value set.
   *
   *             Environments inherit from a single parent to form a tree, as a result
   *             a single parameter may have different values present for each environment.
   *             When a value is not explicitly set in an environment, the parent environment
   *             is consulted to see if it has a value defined, and so on.
   *
   *             The dictionary of values has an environment url as the key, and the optional
   *             Value record that it resolves to.  If the Value.environment matches the key,
   *             then it is an explicit value set for that environment.  If they differ, the
   *             value was obtained from a parent environment (directly or indirectly).  If the
   *             value is None then no value has ever been set in any environment for this
   *             parameter.
   *
   *             key: Environment url
   *             value: optional Value record
   *
   */
  values: Record<string, Value | null>;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

/**
 * A single parameter inside of a project.
 */
export interface ParameterCreate {
  /** The parameter name. */
  name: string;

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean;
  type?: ParameterTypeEnum;
}

export interface ParameterExport {
  body: string;
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface ParameterRule {
  /** @format uri */
  url: string;

  /** @format uuid */
  id: string;

  /**
   * The parameter this rule is for.
   * @format uri
   */
  parameter: string;
  type: ParameterRuleTypeEnum;
  constraint: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface ParameterRuleCreate {
  type: ParameterRuleTypeEnum;
  constraint: string;
}

export enum ParameterRuleTypeEnum {
  Min = "min",
  Max = "max",
  MinLen = "min_len",
  MaxLen = "max_len",
  Regex = "regex",
}

export interface ParameterTimeline {
  /** The number of records in this response. */
  count: number;

  /**
   * If present, additional history can be retrieved using this timestamp in the next call for the as_of query parameter value.
   * @format date-time
   */
  next_as_of?: string;
  results: ParameterTimelineEntry[];
}

/**
 * Details about a single change.
 */
export interface ParameterTimelineEntry {
  /** @format date-time */
  history_date: string;
  history_type: HistoryTypeEnum;

  /** The unique identifier of a user. */
  history_user?: string | null;

  /** The affected environment(s). */
  history_environments: ParameterTimelineEntryEnvironment[];

  /** The component of the parameter that changed. */
  history_model: HistoryModelEnum;

  /** The affected parameter. */
  history_parameter: ParameterTimelineEntryParameter;
}

export interface ParameterTimelineEntryEnvironment {
  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id: string;

  /** The environment name. */
  name: string;

  /** Indicates if the value change was direct or if it flowed into the environment. If `true` then the value was actually set directly into this environment. If `false` then the environment has no value set directly so it inherited the value from its parent. */
  override: boolean;
}

export interface ParameterTimelineEntryParameter {
  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string;

  /** The parameter name. */
  name: string;
}

export enum ParameterTypeEnum {
  String = "string",
  Integer = "integer",
  Bool = "bool",
}

export interface PatchedAwsIntegration {
  /** @format uri */
  url?: string;

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id?: string;
  name?: string;

  /** The optional description for the integration. */
  description?: string;

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status?: string;

  /** If an error occurs, more details will be available in this field. */
  status_detail?: string;

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at?: string;

  /** The type of integration. */
  type?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
  fqn?: string;

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id?: string;

  /** The AWS regions to integrate with. */
  aws_enabled_regions?: AwsEnabledRegionsEnum[];

  /** The AWS services to integrate with. */
  aws_enabled_services?: AwsEnabledServicesEnum[];

  /**
   * This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  If your AWS Administrator provided you with a value use it, otherwise we will generate a random value for you to give to your AWS Administrator.
   * @pattern ^[\w+=,.@:/\-]*$
   */
  aws_external_id?: string;

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name?: string;
}

export interface PatchedEnvironment {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id?: string;

  /** The environment name. */
  name?: string;

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

export interface PatchedInvitation {
  /** @format uri */
  url?: string;

  /**
   * The unique identifier of an invitation.
   * @format uuid
   */
  id?: string;

  /**
   * The email address of the user to be invited.
   * @format email
   */
  email?: string;

  /** The role that the user will have in the organization, should the user accept. */
  role?: RoleEnum;

  /**
   * The user that created the invitation.
   * @format uri
   */
  inviter?: string;

  /** The current state of the invitation. */
  state?: string;

  /** Additional details about the state of the invitation. */
  state_detail?: string;

  /**
   * The resulting membership, should the user accept.
   * @format uri
   */
  membership?: string;
}

export interface PatchedMembership {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the membership.
   * @format uuid
   */
  id?: string;

  /**
   * The user of the membership.
   * @format uri
   */
  user?: string;

  /**
   * The organization that the user is a member of.
   * @format uri
   */
  organization?: string;

  /** The role that the user has in the organization. */
  role?: RoleEnum;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

export interface PatchedOrganization {
  /** @format uri */
  url?: string;

  /** A unique identifier for the organization. */
  id?: string;

  /** The organization name. */
  name?: string;

  /** Indicates if this Organization is the one currently targeted by the Bearer token used by the client to authorize. */
  current?: boolean;

  /** @format date-time */
  subscription_expires_at?: string | null;
  subscription_id?: string | null;
  subscription_plan_id?: string | null;
  subscription_plan_name?: string | null;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

/**
 * A single parameter inside of a project.
 */
export interface PatchedParameter {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id?: string;

  /** The parameter name. */
  name?: string;

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean;
  type?: ParameterTypeEnum;

  /** Rules applied to this parameter. */
  rules?: ParameterRule[];

  /** Templates that reference this Parameter. */
  referencing_templates?: string[];

  /** Dynamic values that reference this Parameter. */
  referencing_values?: string[];

  /**
   *
   *             Each parameter has an effective value in every environment based on
   *             environment inheritance and which environments have had a value set.
   *
   *             Environments inherit from a single parent to form a tree, as a result
   *             a single parameter may have different values present for each environment.
   *             When a value is not explicitly set in an environment, the parent environment
   *             is consulted to see if it has a value defined, and so on.
   *
   *             The dictionary of values has an environment url as the key, and the optional
   *             Value record that it resolves to.  If the Value.environment matches the key,
   *             then it is an explicit value set for that environment.  If they differ, the
   *             value was obtained from a parent environment (directly or indirectly).  If the
   *             value is None then no value has ever been set in any environment for this
   *             parameter.
   *
   *             key: Environment url
   *             value: optional Value record
   *
   */
  values?: Record<string, Value | null>;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface PatchedParameterRule {
  /** @format uri */
  url?: string;

  /** @format uuid */
  id?: string;

  /**
   * The parameter this rule is for.
   * @format uri
   */
  parameter?: string;
  type?: ParameterRuleTypeEnum;
  constraint?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

export interface PatchedProject {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the project.
   * @format uuid
   */
  id?: string;

  /** The project name. */
  name?: string;

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

export interface PatchedServiceAccount {
  /** @format uri */
  url?: string;
  id?: string;
  user?: User;

  /** An optional description of the process or system using the service account. */
  description?: string;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;

  /**
   * The most recent date and time the service account was used.
   * @format date-time
   */
  last_used_at?: string;
}

/**
 * The details of a tag.
 */
export interface PatchedTag {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the tag.
   * @format uuid
   */
  id?: string;

  /** The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified. */
  name?: string;

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * The point in time this tag represents.
   * @format date-time
   */
  timestamp?: string;
  usage?: TagReadUsage;
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface PatchedTemplate {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id?: string;

  /** The template name. */
  name?: string;

  /** A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string;

  /** Parameters that this template references. */
  referenced_parameters?: string[];

  /** Other templates that this template references. */
  referenced_templates?: string[];

  /** Other templates that reference this template. */
  referencing_templates?: string[];

  /** The dynamic values that reference this template. */
  referencing_values?: string[];

  /** If True, this template contains secrets. */
  has_secret?: boolean;

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

/**
 * A value for a parameter in a given environment.
 */
export interface PatchedValue {
  /** @format uri */
  url?: string;

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id?: string;

  /**
   * The environment this value is set in.
   * @format uri
   */
  environment?: string;

  /** The environment name for this value.  This is a convenience to avoid another query against the server to resolve the environment url into a name. */
  environment_name?: string;

  /** The earliest tag name this value appears in (within the value's environment). */
  earliest_tag?: string | null;

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter?: string;

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string;

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string;

  /** If the value is external, and an error occurs retrieving it, the reason for the retrieval error will be placed into this field.  The query parameter `partial_success` can be used to control whether this condition causes an HTTP error response or not. */
  external_error?: string | null;

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null;

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean;

  /**
   * This is the actual content of the Value for the given parameter in the given environment.  Depending on the settings in the Value, the following things occur to calculate the `value`:
   *
   * For values that are not `external` and parameters that are not `secret`, the system will use the content in `internal_value` to satisfy the request.
   *
   * For values that are not `external` and parameters that are `secret`, the system will retrieve the content from your organization's dedicated vault.
   *
   * For values that are `external`, the system will retrieve the content from the integration on-demand.  You can control the error handling behavior of the server through the `partial_success` query parameter.
   *
   * If the content from the integration is `secret` and the parameter is not, an error will occur.  If an `external_filter` is present then the content will have a JMESpath query applied, and that becomes the resulting value.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   *
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value?: string | null;

  /** Indicates the value content is a secret.  Normally this is `true` when the parameter is a secret, however it is possible for a parameter to be a secret with a external value that is not a secret.  It is not possible to convert a parameter from a secret to a non-secret if any of the values are external and a secret.  Clients can check this condition by leveraging this field. */
  secret?: boolean | null;

  /** The parameters this value references, if interpolated. */
  referenced_parameters?: string[];

  /** The templates this value references, if interpolated. */
  referenced_templates?: string[];

  /** @format date-time */
  created_at?: string;

  /** @format date-time */
  modified_at?: string;
}

export interface Project {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the project.
   * @format uuid
   */
  id: string;

  /** The project name. */
  name: string;

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

export interface ProjectCreate {
  /** The project name. */
  name: string;

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string;
}

export enum RoleEnum {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  CONTRIB = "CONTRIB",
  VIEWER = "VIEWER",
}

export interface ServiceAccount {
  /** @format uri */
  url: string;
  id: string;
  user: User;

  /** An optional description of the process or system using the service account. */
  description?: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;

  /**
   * The most recent date and time the service account was used.
   * @format date-time
   */
  last_used_at: string;
}

export interface ServiceAccountCreateRequest {
  /** The name of the process or system using the service account. */
  name: string;

  /** An optional description of the process or system using the service account. */
  description?: string;
}

export interface ServiceAccountCreateResponse {
  /** @format uri */
  url: string;
  id: string;
  user: User;

  /** An optional description of the process or system using the service account. */
  description?: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;

  /**
   * The most recent date and time the service account was used.
   * @format date-time
   */
  last_used_at: string;

  /** The API Key to use as a Bearer token for the service account. */
  apikey: string;
}

/**
 * The details of a tag.
 */
export interface Tag {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the tag.
   * @format uuid
   */
  id: string;

  /** The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified. */
  name: string;

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * The point in time this tag represents.
   * @format date-time
   */
  timestamp: string;
  usage: TagReadUsage;
}

/**
 * Details for creating a tag.
 */
export interface TagCreate {
  /**
   * The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified.
   * @pattern ^[\w.-]+$
   */
  name: string;

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /**
   * The point in time this tag represents. If not specified then the current time will be used.
   * @format date-time
   */
  timestamp?: string | null;
}

/**
 * The read usage details of a tag.
 */
export interface TagReadUsage {
  /**
   * The last time a configuration was retrieved with this tag.
   * @format date-time
   */
  last_read: string | null;

  /** The last user (id) to use this tag to read configuration. */
  last_read_by?: string;

  /** The number of times the tag has been used to read configuration. */
  total_reads: number;
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface Template {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string;

  /** The template name. */
  name: string;

  /** A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string;

  /** Parameters that this template references. */
  referenced_parameters: string[];

  /** Other templates that this template references. */
  referenced_templates: string[];

  /** Other templates that reference this template. */
  referencing_templates: string[];

  /** The dynamic values that reference this template. */
  referencing_values: string[];

  /** If True, this template contains secrets. */
  has_secret: boolean;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface TemplateCreate {
  /** The template name. */
  name: string;

  /** A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string;
}

/**
 * Indicates errors occurred while retrieving values to substitute into the template.
 */
export interface TemplateLookupError {
  detail: TemplateLookupErrorEntry[];
}

export interface TemplateLookupErrorEntry {
  /**
   * The parameter id.
   * @format uuid
   */
  parameter_id: string;

  /** The parameter name. */
  parameter_name: string;

  /** The error code. */
  error_code: string;

  /** Details about the error. */
  error_detail: string;
}

export interface TemplatePreview {
  body: string;
}

export interface TemplateTimeline {
  /** The number of records in this response. */
  count: number;

  /**
   * If present, additional history can be retrieved using this timestamp in the next call for the as_of query parameter value.
   * @format date-time
   */
  next_as_of?: string;
  results: TemplateTimelineEntry[];
}

/**
 * Details about a single change.
 */
export interface TemplateTimelineEntry {
  /** @format date-time */
  history_date: string;
  history_type: HistoryTypeEnum;

  /** The unique identifier of a user. */
  history_user?: string | null;

  /** The template record as it was when archived for history. */
  history_template: TemplateTimelineEntryTemplate;
}

export interface TemplateTimelineEntryTemplate {
  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string;

  /** The template name. */
  name: string;

  /** A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content. */
  description?: string;

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string;
}

export interface User {
  /** @format uri */
  url: string;

  /** The unique identifier of a user. */
  id: string;

  /** The type of user record. */
  type?: string;
  name: string | null;
  email: string | null;
  picture_url: string | null;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

/**
 * A value for a parameter in a given environment.
 */
export interface Value {
  /** @format uri */
  url: string;

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string;

  /**
   * The environment this value is set in.
   * @format uri
   */
  environment: string;

  /** The environment name for this value.  This is a convenience to avoid another query against the server to resolve the environment url into a name. */
  environment_name: string;

  /** The earliest tag name this value appears in (within the value's environment). */
  earliest_tag: string | null;

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter: string;

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string;

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string;

  /** If the value is external, and an error occurs retrieving it, the reason for the retrieval error will be placed into this field.  The query parameter `partial_success` can be used to control whether this condition causes an HTTP error response or not. */
  external_error: string | null;

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null;

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean;

  /**
   * This is the actual content of the Value for the given parameter in the given environment.  Depending on the settings in the Value, the following things occur to calculate the `value`:
   *
   * For values that are not `external` and parameters that are not `secret`, the system will use the content in `internal_value` to satisfy the request.
   *
   * For values that are not `external` and parameters that are `secret`, the system will retrieve the content from your organization's dedicated vault.
   *
   * For values that are `external`, the system will retrieve the content from the integration on-demand.  You can control the error handling behavior of the server through the `partial_success` query parameter.
   *
   * If the content from the integration is `secret` and the parameter is not, an error will occur.  If an `external_filter` is present then the content will have a JMESpath query applied, and that becomes the resulting value.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   *
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value: string | null;

  /** Indicates the value content is a secret.  Normally this is `true` when the parameter is a secret, however it is possible for a parameter to be a secret with a external value that is not a secret.  It is not possible to convert a parameter from a secret to a non-secret if any of the values are external and a secret.  Clients can check this condition by leveraging this field. */
  secret: boolean | null;

  /** The parameters this value references, if interpolated. */
  referenced_parameters: string[];

  /** The templates this value references, if interpolated. */
  referenced_templates: string[];

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  modified_at: string;
}

/**
 * A value for a parameter in a given environment.
 */
export interface ValueCreate {
  /**
   * The environment this value is set in.
   * @format uri
   */
  environment: string;

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string;

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string;

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null;

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean;
}

export interface ApiSchemaRetrieveParams {
  format?: "json" | "yaml";
  lang?:
    | "af"
    | "ar"
    | "ar-dz"
    | "ast"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "br"
    | "bs"
    | "ca"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "dsb"
    | "el"
    | "en"
    | "en-au"
    | "en-gb"
    | "eo"
    | "es"
    | "es-ar"
    | "es-co"
    | "es-mx"
    | "es-ni"
    | "es-ve"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "he"
    | "hi"
    | "hr"
    | "hsb"
    | "hu"
    | "hy"
    | "ia"
    | "id"
    | "ig"
    | "io"
    | "is"
    | "it"
    | "ja"
    | "ka"
    | "kab"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ky"
    | "lb"
    | "lt"
    | "lv"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "my"
    | "nb"
    | "ne"
    | "nl"
    | "nn"
    | "os"
    | "pa"
    | "pl"
    | "pt"
    | "pt-br"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sq"
    | "sr"
    | "sr-latn"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tr"
    | "tt"
    | "udm"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "zh-hans"
    | "zh-hant";
}

export interface AuditListParams {
  /** The action that was taken. */
  action?: "create" | "delete" | "update";

  /** @format date-time */
  earliest?: string;

  /** @format date-time */
  latest?: string;
  object_id?: string;
  object_type?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
  user_id?: string;
}

export interface EnvironmentsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
  parent__name?: string;
}

export interface EnvironmentsTagsListParams {
  description__icontains?: string;
  name?: string;
  name__icontains?: string;

  /** Which field to use when ordering the results. */
  ordering?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /** @format date-time */
  timestamp?: string;

  /** @format date-time */
  timestamp__gte?: string;

  /** @format date-time */
  timestamp__lte?: string;

  /** @format uuid */
  environmentPk: string;
}

export interface IntegrationsAwsListParams {
  aws_account_id?: string;
  aws_role_name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface IntegrationsAwsRetrieveParams {
  /** Refresh the integration status before returning the details. */
  refresh_status?: boolean;

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
}

export interface IntegrationsAwsDestroyParams {
  /**
   * (Optional) Desired behavior if the integration has in-use values.
   *
   * - `fail` will return HTTP error 409 if there are any values using the integration.
   * - `leave` (default) will leave values in place and future queries may fail; you can control future value query behavior with the `lookup_error` query parameter on those requests.
   * - `remove` will remove the all values using the integration when the integration is removed.
   */
  in_use?: "fail" | "leave" | "remove";

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
}

export interface IntegrationsExploreListParams {
  /**
   * FQN (URL-like) for third-party integration.
   * @format uri
   */
  fqn?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface IntegrationsGithubListParams {
  gh_organization_slug?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface IntegrationsGithubRetrieveParams {
  /** Refresh the integration status before returning the details. */
  refresh_status?: boolean;

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
}

export interface IntegrationsGithubDestroyParams {
  /**
   * (Optional) Desired behavior if the integration has in-use values.
   *
   * - `fail` will return HTTP error 409 if there are any values using the integration.
   * - `leave` (default) will leave values in place and future queries may fail; you can control future value query behavior with the `lookup_error` query parameter on those requests.
   * - `remove` will remove the all values using the integration when the integration is removed.
   */
  in_use?: "fail" | "leave" | "remove";

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string;
}

export interface InvitationsListParams {
  email?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /** The role that the user will have in the organization, should the user accept. */
  role?: "ADMIN" | "CONTRIB" | "OWNER" | "VIEWER";

  /** The current state of the invitation. */
  state?: "accepted" | "bounced" | "pending" | "sent";
}

export interface MembershipsListParams {
  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /** The role that the user has in the organization. */
  role?: "ADMIN" | "CONTRIB" | "OWNER" | "VIEWER";

  /** The unique identifier of a user. */
  user?: string;
}

export interface OrganizationsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface ProjectsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface ProjectsParameterExportListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Only include parameters with names that contain the provided string. */
  contains?: string;

  /** Only include parameters with names that end with the provided string. */
  endswith?: string;

  /** Name or id of the environment to use to retrieve parameter values. */
  environment?: string;

  /** Explicitly marks parameters with export, e.g. `export FOO=bar`. */
  explicit_export?: boolean;

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean;

  /** Format to output: One of 'docker', 'dotenv', 'shell'. */
  output?: string;

  /** Only include parameters with names that start with the provided string. */
  startswith?: string;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** Indicates all secrets are wrapped. For more information on secret wrapping, see the documentation. */
  wrap?: boolean;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Name or id (uuid) of the environment to get parameter values for.  Cannot be used with `values`. */
  environment?: string;

  /** If true, masks all secrets. */
  mask_secrets?: boolean;
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /**
   * Determine if the response is allowed to include a partial success.
   *
   * A partial success can occur if one or more external values cannot be retrieved, for example when an in-use integration is removed using the `leave` option, leaving the values untouched. When `true`, any error that occurs during external value retrieval will be placed into a field named `external_error` in the affected Value, and the `value` field will be empty.  When `false`, any such error will cause the entire request to fail.
   * Partial success allows clients to tolerate invalid external values better.
   */
  partial_success?: boolean;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** If false, values are not returned: the `values` array will have no entries. This speeds up retrieval if value content is not needed.  Cannot be used with `environment`. */
  values?: boolean;

  /** If true, wraps all secrets - see documentation for more details. */
  wrap?: boolean;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersRulesListParams {
  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
  type?: "max" | "max_len" | "min" | "min_len" | "regex";

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersValuesListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Name or id of the environment to limit the result to. If this is not specified then the result will contain a value for any environment in which it is set. You cannot use this option to retrieve the _effective_ value of a parameter in an environment for which is is not explicitly set. To see _effective_ values use the Parameters API (see the `values` field). */
  environment?: string;

  /** Mask secret values in responses with `*****`. */
  mask_secrets?: boolean;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /**
   * Determine if the response is allowed to include a partial success.
   *
   * A partial success can occur if one or more external values cannot be retrieved, for example when an in-use integration is removed using the `leave` option, leaving the values untouched. When `true`, any error that occurs during external value retrieval will be placed into a field named `external_error` in the affected Value, and the `value` field will be empty.  When `false`, any such error will cause the entire request to fail.
   * Partial success allows clients to tolerate invalid external values better.
   */
  partial_success?: boolean;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** For writes, indicates `internal_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean;

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersValuesCreateParams {
  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean;

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersValuesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Mask secret values in responses with `*****`. */
  mask_secrets?: boolean;

  /**
   * Determine if the response is allowed to include a partial success.
   *
   * A partial success can occur if one or more external values cannot be retrieved, for example when an in-use integration is removed using the `leave` option, leaving the values untouched. When `true`, any error that occurs during external value retrieval will be placed into a field named `external_error` in the affected Value, and the `value` field will be empty.  When `false`, any such error will cause the entire request to fail.
   * Partial success allows clients to tolerate invalid external values better.
   */
  partial_success?: boolean;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** For writes, indicates `internal_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean;

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string;

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersValuesUpdateParams {
  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean;

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string;

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersValuesPartialUpdateParams {
  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean;

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string;

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string;

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string;
}

export interface ProjectsParametersRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Name or id (uuid) of the environment to get parameter values for.  Cannot be used with `values`. */
  environment?: string;

  /** If true, masks all secrets. */
  mask_secrets?: boolean;

  /**
   * Determine if the response is allowed to include a partial success.
   *
   * A partial success can occur if one or more external values cannot be retrieved, for example when an in-use integration is removed using the `leave` option, leaving the values untouched. When `true`, any error that occurs during external value retrieval will be placed into a field named `external_error` in the affected Value, and the `value` field will be empty.  When `false`, any such error will cause the entire request to fail.
   * Partial success allows clients to tolerate invalid external values better.
   */
  partial_success?: boolean;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** If false, values are not returned: the `values` array will have no entries. This speeds up retrieval if value content is not needed.  Cannot be used with `environment`. */
  values?: boolean;

  /** If true, wraps all secrets - see documentation for more details. */
  wrap?: boolean;

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersTimelineRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersTimelinesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatePreviewCreateParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Name or id of the environment to use to instantiate this template. If not specified then the default environment is used. */
  environment?: string;

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesRetrieveParams {
  /**
   * Name or id of the environment to use to evaluate this template. If not specified then the original content is returned in the body.
   * @format uuid
   */
  environment?: string;

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean;

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesTimelineRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesTimelinesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string;

  /** Specify a tag to retrieve configuration from.  Cannot be specified with `as_of`. */
  tag?: string;

  /** @format uuid */
  projectPk: string;
}

export interface ServiceaccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
}

export interface UsersListParams {
  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;
  type?: string;
}
