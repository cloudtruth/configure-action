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
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that is required to have a value for every parameter in every project.
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
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that is required to have a value for every parameter in every project.
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
  content_size?: number;
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
  Environment = "Environment",
  Integration = "Integration",
  Invitation = "Invitation",
  Membership = "Membership",
  Organization = "Organization",
  Parameter = "Parameter",
  Project = "Project",
  ServiceAccount = "ServiceAccount",
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
  subscription_id: string;
  subscription_plan_id: string;
  subscription_plan_name: string;

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

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any static values are stored in a dedicated vault for your organization for maximum security.  Dynamic values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those dynamic values are not allowed to be used. */
  secret?: boolean;
  templates: string[];

  /** If `true` then at least one of the values is dynamic. */
  uses_dynamic_values: boolean;

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

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any static values are stored in a dedicated vault for your organization for maximum security.  Dynamic values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those dynamic values are not allowed to be used. */
  secret?: boolean;
}

export interface ParameterExport {
  body: string;
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
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that is required to have a value for every parameter in every project.
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
  subscription_id?: string;
  subscription_plan_id?: string;
  subscription_plan_name?: string;

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

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any static values are stored in a dedicated vault for your organization for maximum security.  Dynamic values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those dynamic values are not allowed to be used. */
  secret?: boolean;
  templates?: string[];

  /** If `true` then at least one of the values is dynamic. */
  uses_dynamic_values?: boolean;

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
  parameters?: string[];

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

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter?: string;

  /** A dynamic parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth.  When this is `true`, the `fqn` field must be set. */
  dynamic?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `dynamic`. */
  dynamic_fqn?: string;

  /** If `dynamic`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  We support JMESpath expressions on `json`, `yaml`, and `dotenv` content. */
  dynamic_filter?: string;

  /** This is the content to use when resolving the Value for a static non-secret. */
  static_value?: string | null;

  /**
   * This is the actual content of the Value for the given parameter in the given environment.  Depending on the settings in the Value, the following things occur to calculate the `value`:
   *
   * For values that are not `dynamic` and parameters that are not `secret`, the system will use the content in `static_value` to satisfy the request.
   *
   * For values that are not `dynamic` and parameters that are `secret`, the system will retrieve the content from your organization's dedicated vault.
   *
   * For values that are `dynamic`, the system will retrieve the content from the integration on-demand.  If the content from the integration is `secret` and the parameter is not, or if the parameter is `secret` and the content from the integration is not, an error response will be given.  If a `dynamic_filter` is present then the content will have a JMESpath query applied, and that becomes the resulting value.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   *
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value?: string | null;

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

  /** The API Key to use as a Bearer token for the service account. */
  apikey: string;
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
  parameters: string[];

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

export interface TemplatePreview {
  body: string;
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

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter: string;

  /** A dynamic parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth.  When this is `true`, the `fqn` field must be set. */
  dynamic?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `dynamic`. */
  dynamic_fqn?: string;

  /** If `dynamic`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  We support JMESpath expressions on `json`, `yaml`, and `dotenv` content. */
  dynamic_filter?: string;

  /** This is the content to use when resolving the Value for a static non-secret. */
  static_value?: string | null;

  /**
   * This is the actual content of the Value for the given parameter in the given environment.  Depending on the settings in the Value, the following things occur to calculate the `value`:
   *
   * For values that are not `dynamic` and parameters that are not `secret`, the system will use the content in `static_value` to satisfy the request.
   *
   * For values that are not `dynamic` and parameters that are `secret`, the system will retrieve the content from your organization's dedicated vault.
   *
   * For values that are `dynamic`, the system will retrieve the content from the integration on-demand.  If the content from the integration is `secret` and the parameter is not, or if the parameter is `secret` and the content from the integration is not, an error response will be given.  If a `dynamic_filter` is present then the content will have a JMESpath query applied, and that becomes the resulting value.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   *
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value: string | null;

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

  /** A dynamic parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth.  When this is `true`, the `fqn` field must be set. */
  dynamic?: boolean;

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `dynamic`. */
  dynamic_fqn?: string;

  /** If `dynamic`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  We support JMESpath expressions on `json`, `yaml`, and `dotenv` content. */
  dynamic_filter?: string;

  /** This is the content to use when resolving the Value for a static non-secret. */
  static_value?: string | null;
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
  user_id?: string;
}

export interface EnvironmentsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;
  parent__name?: string;
}

export interface IntegrationsAwsListParams {
  aws_account_id?: string;
  aws_role_name?: string;

  /** A page number within the paginated result set. */
  page?: number;
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

export interface IntegrationsExploreListParams {
  /**
   * FQN (URL-like) for third-party integration.
   * @format uri
   */
  fqn?: string;

  /** A page number within the paginated result set. */
  page?: number;
}

export interface IntegrationsGithubListParams {
  gh_organization_slug?: string;

  /** A page number within the paginated result set. */
  page?: number;
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

export interface InvitationsListParams {
  email?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** The role that the user will have in the organization, should the user accept. */
  role?: "ADMIN" | "CONTRIB" | "OWNER" | "VIEWER";

  /** The current state of the invitation. */
  state?: "accepted" | "bounced" | "pending" | "sent";
}

export interface MembershipsListParams {
  /** A page number within the paginated result set. */
  page?: number;

  /** The role that the user has in the organization. */
  role?: "ADMIN" | "CONTRIB" | "OWNER" | "VIEWER";

  /** The unique identifier of a user. */
  user?: string;
}

export interface OrganizationsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;
}

export interface ProjectsListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;
}

export interface ProjectsParameterExportListParams {
  /** (Optional) Only include parameters whose names contain the provided string. */
  contains?: string;

  /** (Optional) Only include parameters whose names end with the provided string. */
  endswith?: string;

  /**
   * (Optional) ID of the environment to use to instantiate this template
   * @format uuid
   */
  environment?: string;

  /** If true, explicitly marks parameters with export, e.g. export FOO=bar.  Defaults to false. */
  explicit_export?: boolean;

  /** If true, masks all secrets in the template (defaults to false) */
  mask_secrets?: boolean;

  /** Format to output: One of 'docker', 'dotenv', 'shell'. */
  output?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** (Optional) Only include parameters whose names start with the provided string. */
  startswith?: string;

  /** Indicates all secrets are wrapped.  For more information on secret wrapping, see the documentation. */
  wrap?: boolean;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersListParams {
  /**
   * (Optional) ID of the environment to get parameter values for.
   * @format uuid
   */
  environment?: string;

  /** If true, masks all secrets (defaults to false). */
  mask_secrets?: boolean;
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** If true, wraps all secrets (defaults to false) - see documentation for more details. */
  wrap?: boolean;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsParametersValuesListParams {
  /** ID of the environment to limit the result to.  If this is not specified then the result will contain a value for any environment in which it is set.  You cannot use this option to retrieve the _effective_ value of a parameter in an environment for which is is not explicitly set.  To see _effective_ values use the Parameters API (see the `values` field). */
  environment?: string;

  /** (Optional) If true, mask secret values in responses (defaults to false). */
  mask_secrets?: boolean;

  /** A page number within the paginated result set. */
  page?: number;

  /** For writes, indicates `static_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
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
  /** Indicates the `static_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
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
  /** (Optional) If true, mask secret values in responses (defaults to false). */
  mask_secrets?: boolean;

  /** For writes, indicates `static_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
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
  /** Indicates the `static_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
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
  /** Indicates the `static_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
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
   * (Optional) ID of the environment to get parameter values for.
   * @format uuid
   */
  environment?: string;

  /** If true, masks all secrets (defaults to false). */
  mask_secrets?: boolean;

  /** If true, wraps all secrets (defaults to false) - see documentation for more details. */
  wrap?: boolean;

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatePreviewCreateParams {
  /**
   * (Optional) ID of the environment to use to instantiate this template
   * @format uuid
   */
  environment?: string;

  /** If true, masks all secrets in the template (defaults to false) */
  mask_secrets?: boolean;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesListParams {
  name?: string;

  /** A page number within the paginated result set. */
  page?: number;

  /** @format uuid */
  projectPk: string;
}

export interface ProjectsTemplatesRetrieveParams {
  /**
   * (Optional) ID of the environment to use to instantiate this template
   * @format uuid
   */
  environment?: string;

  /** If true, masks all secrets in the template (defaults to false) */
  mask_secrets?: boolean;

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string;

  /** @format uuid */
  projectPk: string;
}

export interface ServiceaccountsListParams {
  /** A page number within the paginated result set. */
  page?: number;
}

export interface UsersListParams {
  /** A page number within the paginated result set. */
  page?: number;
  type?: string;
}
