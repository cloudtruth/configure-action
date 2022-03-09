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
  url: string

  /**
   * A unique identifier for the audit record.
   * @format uuid
   */
  id: string

  /** The action that was taken. */
  action: string

  /** The id of the object associated with the action. */
  object_id: string

  /** The name of the object associated with the action, if applicable. */
  object_name: string

  /** The type of object associated with the action. */
  object_type: ObjectTypeEnum

  /**
   * The timestamp of the activity that was audited.
   * @format date-time
   */
  timestamp: string

  /** Details of the user associated with this change. */
  user: User
}

export interface AuditTrailSummary {
  /**
   * The earliest audit record timestamp available.
   * @format date-time
   */
  earliest: string | null

  /** The maximum number of days the system will save auditing records, based on your subscription. */
  max_days: number

  /** The maximum number of auditing records the system will save based on your subscription. */
  max_records: number

  /** The total number of audit records available. */
  total: number
}

export interface AwsIntegration {
  /** @format uri */
  url: string

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
  name: string

  /** An optional description for the integration. */
  description?: string

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status: StatusEnum

  /** If an error occurs, more details will be available in this field. */
  status_detail: string

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
  fqn: string

  /** The type of integration. */
  type: string

  /** Allow actions to write to the integration. */
  writable?: boolean

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id: string

  /** The AWS regions to integrate with. */
  aws_enabled_regions: AwsRegionEnum[]

  /** The AWS services to integrate with. */
  aws_enabled_services: AwsServiceEnum[]

  /** This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  CloudTruth will generate a random value for you to give to your AWS Administrator in order to create the necessary IAM role for proper access. */
  aws_external_id: string

  /**
   * If present, this is the KMS Key Id that is used to push values.  This key must be accessible in the AWS account (it cannot be an ARN to a key in another AWS account).
   * @pattern ^[a-zA-Z0-9:/_\-]+$
   */
  aws_kms_key_id?: string | null

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name: string
}

export interface AwsIntegrationCreate {
  /** An optional description for the integration. */
  description?: string

  /** Allow actions to write to the integration. */
  writable?: boolean

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id: string

  /** The AWS regions to integrate with. */
  aws_enabled_regions: AwsRegionEnum[]

  /** The AWS services to integrate with. */
  aws_enabled_services: AwsServiceEnum[]

  /**
   * This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  CloudTruth will generate a random value for you to give to your AWS Administrator in order to create the necessary IAM role for proper access.
   * @pattern ^[\w+=,.@:/\-]*$
   */
  aws_external_id?: string

  /**
   * If present, this is the KMS Key Id that is used to push values.  This key must be accessible in the AWS account (it cannot be an ARN to a key in another AWS account).
   * @pattern ^[a-zA-Z0-9:/_\-]+$
   */
  aws_kms_key_id?: string | null

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name: string
}

export interface AwsIntegrationScan {
  /** The AWS region to use.  This region must be enabled in the integration. */
  region: AwsRegionEnum

  /** The AWS service to use.  This service must be enabled in the integration. */
  service: AwsServiceEnum

  /**
   * Defines a pattern matching string that contains either mustache or regular expression syntax (with named capture groups) that locate the environment, project, and parameter name of the content you are looking for.
   *
   * If you are using mustache pattern matching, use:
   *   - ``{{ environment }}`` to identify the environment name
   *   - ``{{ parameter }}`` to identify the parameter name
   *   - ``{{ project }}`` to identify the project name
   * If you are using a regular expression, use Python syntax with named capture groups that locate the `environment`, `project`, and `parameter`.
   */
  resource: string
}

/**
* Pull actions can be configured to get configuration and secrets from
integrations on demand.
*/
export interface AwsPull {
  /** @format uri */
  url: string

  /**
   * Unique identifier for the action.
   * @format uuid
   */
  id: string

  /** The action name. */
  name: string

  /** The optional description for the action. */
  description?: string

  /** The most recent task run for this action. */
  latest_task: AwsPullTask | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string

  /** Allow the pull to create environments.  Any automatically created environments will be children of the `default` environment.  If an environment needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_environments?: boolean

  /** Allow the pull to create projects.  If a project needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_projects?: boolean

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Values being managed by a mapped pull. */
  mapped_values: Value[]

  /**
   * The pull mode used.
   *
   * A pattern pull uses a pattern-matching resource string with mustache-style markers to identify the project, parameter, and environment names, or with a Python regular expression that uses named capture groups that define the same three concepts.
   * A mapped pull uses a specific resource and JMESpath expression to deliver a value to a specific project, parameter, and environment.  This leverages external value linkages made in the value editor, and there is one mapped pull per integration provided by the system so that you can trigger external value pull synchronizations.
   */
  mode: ModeEnum

  /** The AWS region to use.  This region must be enabled in the integration. */
  region: AwsRegionEnum

  /** The AWS service to use.  This service must be enabled in the integration. */
  service: AwsServiceEnum

  /**
   * Defines a pattern matching string that contains either mustache or regular expression syntax (with named capture groups) that locate the environment, project, and parameter name of the content you are looking for.
   *
   * If you are using mustache pattern matching, use:
   *   - ``{{ environment }}`` to identify the environment name
   *   - ``{{ parameter }}`` to identify the parameter name
   *   - ``{{ project }}`` to identify the project name
   * If you are using a regular expression, use Python syntax with named capture groups that locate the `environment`, `project`, and `parameter`.
   */
  resource: string
}

export interface AwsPullSyncActionRequest {
  /** Allows you to set the dry_run flag on the pull action before triggering a sync. */
  dry_run?: boolean
}

/**
 * Pull task for an AWS integration.
 */
export interface AwsPullTask {
  /** @format uri */
  url: string

  /**
   * The unique identifier for the task.
   * @format uuid
   */
  id: string

  /** The reason why this task was triggered. */
  reason?: string | null

  /** Indicates task steps were only simulated, not actually performed. */
  dry_run?: boolean

  /** The current state of this task. */
  state?: StateEnum

  /** If an error occurs early during processing, before attempting to process values, this code may be helpful in determining the problem. */
  error_code?: string | null

  /** If an error occurs early during processing, before attempting to process values, this detail may be helpful in determining the problem. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * Pull task step for an AWS integration.
 */
export interface AwsPullTaskStep {
  /** @format uri */
  url: string

  /**
   * Unique identifier for a task step.
   * @format uuid
   */
  id: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: OperationEnum | null

  /** Indicates if the operation was successful. */
  success: boolean

  /** Additional details about the successful operation, if any. */
  success_detail?: string | null

  /** The fully-qualified name (FQN) this of the value that was changed. */
  fqn?: string | null

  /**
   * The environment affected by this step.
   * @format uri
   */
  environment: string | null

  /**
   * The environment id involved in the operation.
   * @format uuid
   */
  environment_id?: string | null

  /** The environment name involved in the operation. */
  environment_name?: string | null

  /**
   * The project affected by this step.
   * @format uri
   */
  project: string | null

  /**
   * The project id involved in the operation.
   * @format uuid
   */
  project_id?: string | null

  /** The project name involved in the operation. */
  project_name?: string | null

  /**
   * The parameter affected by this step.
   * @format uri
   */
  parameter: string | null

  /**
   * The parameter id involved in the operation.
   * @format uuid
   */
  parameter_id?: string | null

  /** The parameter name involved in the operation. */
  parameter_name?: string | null

  /** The integration-native id for the resource. */
  venue_id?: string | null

  /** The name of the item or resource as known by the integration. */
  venue_name?: string | null

  /** The summary of this step (what it was trying to do). */
  summary?: string | null

  /** An error code, if not successful. */
  error_code?: string | null

  /** Details on the error that occurred during processing. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
* Push actions can be configured to send configuration and secrets to
integrations when tags are updated.
*/
export interface AwsPush {
  /** @format uri */
  url: string

  /**
   * Unique identifier for the action.
   * @format uuid
   */
  id: string

  /** The action name. */
  name: string

  /** The optional description for the action. */
  description?: string

  /** The most recent task run for this action. */
  latest_task: AwsPushTask | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string

  /** This setting allows parameters (non-secrets) to be pushed to a destination that only supports storing secrets.  This may increase your overall cost from the cloud provider as some cloud providers charge a premium for secrets-only storage. */
  coerce_parameters?: boolean

  /** Include parameters (non-secrets) in the values being pushed.  This setting requires the destination to support parameters or for the `coerce_parameters` flag to be enabled, otherwise the push will fail. */
  include_parameters?: boolean

  /** Include secrets in the values being pushed.  This setting requires the destination to support secrets, otherwise the push will fail. */
  include_secrets?: boolean

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Normally, push will check to see if it originated the values in the destination before making changes to them.  Forcing a push disables the ownership check. */
  force?: boolean

  /** Normally, push will process all parameters including those that flow in from project dependencies.  Declaring a push as `local` will cause it to only process the parameters defined in the selected projects. */
  local?: boolean

  /** Projects that are included in the push. */
  projects: string[]

  /** Tags are used to select parameters by environment from the projects included in the push.  You cannot have two tags from the same environment in the same push. */
  tags: string[]

  /** The AWS region this push targets.  This region must be enabled in the integration. */
  region: AwsRegionEnum

  /** The AWS service this push targets.  This service must be enabled in the integration. */
  service: AwsServiceEnum

  /**
   * Defines a path through the integration to the location where values will be pushed.
   *
   * The following mustache-style substitutions can be used in the string:
   *   - ``{{ environment }}`` to insert the environment name
   *   - ``{{ parameter }}`` to insert the parameter name
   *   - ``{{ project }}`` to insert the project name
   *   - ``{{ push }}`` to insert the push name
   *   - ``{{ tag }}`` to insert the tag name
   * We recommend that you use project, environment, and parameter at a minimum to disambiguate your pushed resource identifiers.
   * If you include multiple projects in the push, the `project` substitution is required.  If you include multiple tags from different environments in the push, the `environment` substitution is required.  If you include multiple tags from the same environment in the push, the `tag` substitution is required.  In all cases, the `parameter` substitution is always required.
   */
  resource: string | null
}

/**
 * Push task for an AWS integration.
 */
export interface AwsPushTask {
  /** @format uri */
  url: string

  /**
   * The unique identifier for the task.
   * @format uuid
   */
  id: string

  /** The reason why this task was triggered. */
  reason?: string | null

  /** Indicates task steps were only simulated, not actually performed. */
  dry_run?: boolean

  /** The current state of this task. */
  state?: StateEnum

  /** If an error occurs early during processing, before attempting to process values, this code may be helpful in determining the problem. */
  error_code?: string | null

  /** If an error occurs early during processing, before attempting to process values, this detail may be helpful in determining the problem. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * Push task step for an AWS integration.
 */
export interface AwsPushTaskStep {
  /** @format uri */
  url: string

  /**
   * Unique identifier for a task step.
   * @format uuid
   */
  id: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: OperationEnum | null

  /** Indicates if the operation was successful. */
  success: boolean

  /** Additional details about the successful operation, if any. */
  success_detail?: string | null

  /** The fully-qualified name (FQN) this of the value that was changed. */
  fqn?: string | null

  /**
   * The environment affected by this step.
   * @format uri
   */
  environment: string | null

  /**
   * The environment id involved in the operation.
   * @format uuid
   */
  environment_id?: string | null

  /** The environment name involved in the operation. */
  environment_name?: string | null

  /**
   * The project affected by this step.
   * @format uri
   */
  project: string | null

  /**
   * The project id involved in the operation.
   * @format uuid
   */
  project_id?: string | null

  /** The project name involved in the operation. */
  project_name?: string | null

  /**
   * The parameter affected by this step.
   * @format uri
   */
  parameter: string | null

  /**
   * The parameter id involved in the operation.
   * @format uuid
   */
  parameter_id?: string | null

  /** The parameter name involved in the operation. */
  parameter_name?: string | null

  /** The integration-native id for the resource. */
  venue_id?: string | null

  /** The name of the item or resource as known by the integration. */
  venue_name?: string | null

  /** The summary of this step (what it was trying to do). */
  summary?: string | null

  /** An error code, if not successful. */
  error_code?: string | null

  /** Details on the error that occurred during processing. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * Update a push.  The `region` and `service` cannot be changed on an existing push.
 */
export interface AwsPushUpdate {
  /** The action name. */
  name: string

  /** The optional description for the action. */
  description?: string

  /** Projects that are included in the push. */
  projects: string[]

  /** Tags are used to select parameters by environment from the projects included in the push.  You cannot have two tags from the same environment in the same push. */
  tags: string[]

  /**
   * Defines a path through the integration to the location where values will be pushed.
   *
   * The following mustache-style substitutions can be used in the string:
   *   - ``{{ environment }}`` to insert the environment name
   *   - ``{{ parameter }}`` to insert the parameter name
   *   - ``{{ project }}`` to insert the project name
   *   - ``{{ push }}`` to insert the push name
   *   - ``{{ tag }}`` to insert the tag name
   * We recommend that you use project, environment, and parameter at a minimum to disambiguate your pushed resource identifiers.
   * If you include multiple projects in the push, the `project` substitution is required.  If you include multiple tags from different environments in the push, the `environment` substitution is required.  If you include multiple tags from the same environment in the push, the `tag` substitution is required.  In all cases, the `parameter` substitution is always required.
   */
  resource: string | null

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Normally, push will check to see if it originated the values in the destination before making changes to them.  Forcing a push disables the ownership check. */
  force?: boolean

  /** Normally, push will process all parameters including those that flow in from project dependencies.  Declaring a push as `local` will cause it to only process the parameters defined in the selected projects. */
  local?: boolean

  /** This setting allows parameters (non-secrets) to be pushed to a destination that only supports storing secrets.  This may increase your overall cost from the cloud provider as some cloud providers charge a premium for secrets-only storage. */
  coerce_parameters?: boolean

  /** Include parameters (non-secrets) in the values being pushed.  This setting requires the destination to support parameters or for the `coerce_parameters` flag to be enabled, otherwise the push will fail. */
  include_parameters?: boolean

  /** Include secrets in the values being pushed.  This setting requires the destination to support secrets, otherwise the push will fail. */
  include_secrets?: boolean
}

export enum AwsRegionEnum {
  AfSouth1 = 'af-south-1',
  ApEast1 = 'ap-east-1',
  ApNortheast1 = 'ap-northeast-1',
  ApNortheast2 = 'ap-northeast-2',
  ApNortheast3 = 'ap-northeast-3',
  ApSouth1 = 'ap-south-1',
  ApSoutheast1 = 'ap-southeast-1',
  ApSoutheast2 = 'ap-southeast-2',
  CaCentral1 = 'ca-central-1',
  CnNorth1 = 'cn-north-1',
  CnNorthwest1 = 'cn-northwest-1',
  EuCentral1 = 'eu-central-1',
  EuNorth1 = 'eu-north-1',
  EuSouth1 = 'eu-south-1',
  EuWest1 = 'eu-west-1',
  EuWest2 = 'eu-west-2',
  EuWest3 = 'eu-west-3',
  MeSouth1 = 'me-south-1',
  SaEast1 = 'sa-east-1',
  UsEast1 = 'us-east-1',
  UsEast2 = 'us-east-2',
  UsWest1 = 'us-west-1',
  UsWest2 = 'us-west-2'
}

export enum AwsServiceEnum {
  S3 = 's3',
  Secretsmanager = 'secretsmanager',
  Ssm = 'ssm'
}

/**
 * Environment, parameter-type, and project (including parameters and values) data at a point in time.
 */
export interface BackupDataSnapshot {
  environments: Record<string, BackupEnvironment>
  types: Record<string, BackupParameterType>
  projects: Record<string, BackupProject>

  /** @format date-time */
  timestamp: string
}

/**
 * Basic environment data at a point in time.
 */
export interface BackupEnvironment {
  name: string
  parent?: string | null
  description?: string | null
}

/**
 * External reference data at a point in time.
 */
export interface BackupExternalReference {
  fqn: string
  jmes_path?: string | null
}

/**
 * Parameter, rule, and value data at a point in time.
 */
export interface BackupParameter {
  rules: Record<string, BackupParameterRule>
  values: Record<string, BackupParameterValue | null>
  name: string
  param_type: string
  project: string
  secret: boolean
  description?: string | null
}

/**
 * Rule that is applied to a parameter or parameter-type at a point in time.
 */
export interface BackupParameterRule {
  rule_type: string
  constraint: string
}

/**
 * Parameter type (and rule) data at a point in time.
 */
export interface BackupParameterType {
  rules: Record<string, BackupParameterRule>
  name: string
  parent: string
  description?: string | null
}

/**
 * Parameter value data at a point in time.
 */
export interface BackupParameterValue {
  external: BackupExternalReference | null
  environment: string
  evaluated: boolean
  source?: string | null
  project?: string | null
  value?: string | null
  raw?: string | null
}

/**
 * Environment, parameter-type, and project (including parameters and values) data at a point in time.
 */
export interface BackupProject {
  parameters: Record<string, BackupParameter>
  templates: Record<string, BackupTemplate>
  name: string
  parent?: string | null
  description?: string | null
}

/**
 * Template data at a given point in time.
 */
export interface BackupTemplate {
  name: string
  text: string
  description: string | null
}

export interface DiscoveredContent {
  venue_id: string
  venue_name: string
  environment_name: string
  project_name: string
  parameter_name: string
}

export interface DiscoveryResult {
  matched: Record<string, DiscoveredContent>
  skipped: Record<string, string>
}

export interface Environment {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id: string

  /** The environment name. */
  name: string

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null

  /** This is the opposite of `parent`, see that field for more details. */
  children: string[]

  /** Indicates if access control is being enforced through grants. */
  access_controlled?: boolean

  /** Your role in the environment, if the environment is access-controlled. */
  role: RoleEnum | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface EnvironmentCreate {
  /** The environment name. */
  name: string

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null
}

export interface GeneratedPasswordResponse {
  /** The generated password value */
  value: string
}

export interface GitHubIntegration {
  /** @format uri */
  url: string

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
  name: string

  /** An optional description for the integration. */
  description?: string

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status: StatusEnum

  /** If an error occurs, more details will be available in this field. */
  status_detail: string

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
  fqn: string

  /** The type of integration. */
  type: string

  /** Allow actions to write to the integration. */
  writable?: boolean

  /**
   * @min 0
   * @max 2147483647
   */
  gh_installation_id: number
  gh_organization_slug: string
}

export interface GitHubIntegrationCreate {
  /** An optional description for the integration. */
  description?: string

  /** Allow actions to write to the integration. */
  writable?: boolean

  /**
   * @min 0
   * @max 2147483647
   */
  gh_installation_id: number
}

/**
* Pull actions can be configured to get configuration and secrets from
integrations on demand.
*/
export interface GitHubPull {
  /** @format uri */
  url: string

  /**
   * Unique identifier for the action.
   * @format uuid
   */
  id: string

  /** The action name. */
  name: string

  /** The optional description for the action. */
  description?: string

  /** The most recent task run for this action. */
  latest_task: GitHubPullTask | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string

  /** Allow the pull to create environments.  Any automatically created environments will be children of the `default` environment.  If an environment needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_environments?: boolean

  /** Allow the pull to create projects.  If a project needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_projects?: boolean

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Values being managed by a mapped pull. */
  mapped_values: Value[]

  /**
   * The pull mode used.
   *
   * A pattern pull uses a pattern-matching resource string with mustache-style markers to identify the project, parameter, and environment names, or with a Python regular expression that uses named capture groups that define the same three concepts.
   * A mapped pull uses a specific resource and JMESpath expression to deliver a value to a specific project, parameter, and environment.  This leverages external value linkages made in the value editor, and there is one mapped pull per integration provided by the system so that you can trigger external value pull synchronizations.
   */
  mode: ModeEnum
}

/**
 * Pull task for a GitHub integration.
 */
export interface GitHubPullTask {
  /** @format uri */
  url: string

  /**
   * The unique identifier for the task.
   * @format uuid
   */
  id: string

  /** The reason why this task was triggered. */
  reason?: string | null

  /** Indicates task steps were only simulated, not actually performed. */
  dry_run?: boolean

  /** The current state of this task. */
  state?: StateEnum

  /** If an error occurs early during processing, before attempting to process values, this code may be helpful in determining the problem. */
  error_code?: string | null

  /** If an error occurs early during processing, before attempting to process values, this detail may be helpful in determining the problem. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * Pull task step for a GitHub integration.
 */
export interface GitHubPullTaskStep {
  /** @format uri */
  url: string

  /**
   * Unique identifier for a task step.
   * @format uuid
   */
  id: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: OperationEnum | null

  /** Indicates if the operation was successful. */
  success: boolean

  /** Additional details about the successful operation, if any. */
  success_detail?: string | null

  /** The fully-qualified name (FQN) this of the value that was changed. */
  fqn?: string | null

  /**
   * The environment affected by this step.
   * @format uri
   */
  environment: string | null

  /**
   * The environment id involved in the operation.
   * @format uuid
   */
  environment_id?: string | null

  /** The environment name involved in the operation. */
  environment_name?: string | null

  /**
   * The project affected by this step.
   * @format uri
   */
  project: string | null

  /**
   * The project id involved in the operation.
   * @format uuid
   */
  project_id?: string | null

  /** The project name involved in the operation. */
  project_name?: string | null

  /**
   * The parameter affected by this step.
   * @format uri
   */
  parameter: string | null

  /**
   * The parameter id involved in the operation.
   * @format uuid
   */
  parameter_id?: string | null

  /** The parameter name involved in the operation. */
  parameter_name?: string | null

  /** The integration-native id for the resource. */
  venue_id?: string | null

  /** The name of the item or resource as known by the integration. */
  venue_name?: string | null

  /** The summary of this step (what it was trying to do). */
  summary?: string | null

  /** An error code, if not successful. */
  error_code?: string | null

  /** Details on the error that occurred during processing. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface Grant {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the grant.
   * @format uuid
   */
  id: string

  /**
   * The URI of a principal for the grant; this must describe a user.
   * @format uri
   */
  principal: string

  /**
   * The URI of a scope for the grant; this must describe a project or environment.
   * @format uri
   */
  scope: string

  /** The role that the principal has in the given scope. */
  role: RoleEnum

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export enum HistoryModelEnum {
  Parameter = 'Parameter',
  ParameterRule = 'ParameterRule',
  Value = 'Value'
}

export enum HistoryTypeEnum {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
  Nothing = 'nothing'
}

export interface ImportCreateRequest {
  /** Project name or identifier */
  project: string

  /** Environment name or identifier */
  environment?: string | null

  /** Text to turn into variables */
  body: string

  /** Parameter names that should be secrets */
  secrets: string[]

  /** Parameter names to be ignored */
  ignore: string[]

  /** Create the project (if it does not exist) */
  add_project?: boolean

  /** Create the environment (if it does not exist) */
  add_environment?: boolean

  /** Create the parameters (if they do not exist) */
  add_parameters?: boolean

  /** Create the environment value override (if they do not exist) */
  add_overrides?: boolean

  /** Skip adding a parameter override if it is the same */
  inherit_on_same?: boolean
}

export interface ImportCreateResponse {
  /** Project parameter values after import */
  parameter: ImportParameter[]
}

/**
 * Describes an imported parameter.
 */
export interface ImportParameter {
  /** Project name */
  project_name: string

  /** Project identifier */
  project_id?: string | null

  /** Environment where parameter is defined */
  environment_name: string

  /** Environment identifier where value is set */
  environment_id?: string | null

  /** Parameter name */
  parameter_name: string

  /** Parameter identifier */
  parameter_id?: string | null

  /** Whether to treat the parameter as a secret */
  secret?: boolean

  /** Parameter value in the specified environment */
  value: string

  /** Parameter value identifier in the environment */
  value_id?: string | null

  /**
   * Date and time the parameter value was created
   * @format date-time
   */
  created_at: string | null

  /**
   * Date and time the parameter value was updated
   * @format date-time
   */
  modified_at: string | null

  /** Action taken on environment value for parameter */
  action: string
}

/**
 * Describes the content available at a given location.
 */
export interface IntegrationNode {
  fqn: string
  node_type: NodeTypeEnum
  secret?: boolean
  name?: string
  jmespath?: string | null
  content_type?: string | null
  content_data?: string | null
  content_size?: number | null
  content_keys?: string[] | null
  venue_id?: string | null
}

export interface Invitation {
  /** @format uri */
  url: string

  /**
   * The unique identifier of an invitation.
   * @format uuid
   */
  id: string

  /**
   * The email address of the user to be invited.
   * @format email
   */
  email: string

  /** The role that the user will have in the organization, should the user accept. */
  role: RoleEnum

  /**
   * The user that created the invitation.
   * @format uri
   */
  inviter: string

  /** The name of the user that created the invitation. */
  inviter_name: string

  /** The current state of the invitation. */
  state: string

  /** Additional details about the state of the invitation. */
  state_detail: string

  /**
   * The resulting membership, should the user accept.
   * @format uri
   */
  membership: string | null

  /**
   * The organization that the user will become a member of, should the user accept.
   * @format uri
   */
  organization: string
}

export interface InvitationCreate {
  /**
   * The email address of the user to be invited.
   * @format email
   */
  email: string

  /** The role that the user will have in the organization, should the user accept. */
  role: RoleEnum
}

export interface Membership {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the membership.
   * @format uuid
   */
  id: string

  /**
   * The user of the membership.
   * @format uri
   */
  user: string

  /**
   * The organization that the user is a member of.
   * @format uri
   */
  organization: string

  /** The role that the user has in the organization. */
  role: RoleEnum

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface MembershipCreate {
  /**
   * The user of the membership.
   * @format uri
   */
  user: string

  /** The role that the user has in the organization. */
  role: RoleEnum
}

export enum ModeEnum {
  Mapped = 'mapped',
  Pattern = 'pattern'
}

export enum NodeTypeEnum {
  Directory = 'directory',
  File = 'file',
  Value = 'value'
}

export enum ObjectTypeEnum {
  AwsIntegration = 'AwsIntegration',
  Environment = 'Environment',
  GitHubIntegration = 'GitHubIntegration',
  Grant = 'Grant',
  Invitation = 'Invitation',
  Membership = 'Membership',
  Organization = 'Organization',
  Parameter = 'Parameter',
  ParameterRule = 'ParameterRule',
  ParameterType = 'ParameterType',
  ParameterTypeRule = 'ParameterTypeRule',
  Project = 'Project',
  Pull = 'Pull',
  Push = 'Push',
  ServiceAccount = 'ServiceAccount',
  Tag = 'Tag',
  Task = 'Task',
  Template = 'Template',
  Value = 'Value'
}

export enum OperationEnum {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete'
}

export interface Organization {
  /** @format uri */
  url: string

  /** A unique identifier for the organization. */
  id: string

  /** The organization name. */
  name: string

  /** Indicates if this Organization is the one currently targeted by the Bearer token used by the client to authorize. */
  current: boolean

  /** Your role in the organization. */
  role: RoleEnum

  /** @format date-time */
  subscription_expires_at: string | null
  subscription_features: string[]
  subscription_id: string | null
  subscription_plan_id: string | null
  subscription_plan_name: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface OrganizationCreate {
  /** The organization name. */
  name: string
}

export interface PaginatedAuditTrailList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AuditTrail[]
}

export interface PaginatedAwsIntegrationList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsIntegration[]
}

export interface PaginatedAwsPullList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPull[]
}

export interface PaginatedAwsPullTaskList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPullTask[]
}

export interface PaginatedAwsPullTaskStepList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPullTaskStep[]
}

export interface PaginatedAwsPushList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPush[]
}

export interface PaginatedAwsPushTaskList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPushTask[]
}

export interface PaginatedAwsPushTaskStepList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: AwsPushTaskStep[]
}

export interface PaginatedEnvironmentList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Environment[]
}

export interface PaginatedGitHubIntegrationList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: GitHubIntegration[]
}

export interface PaginatedGitHubPullList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: GitHubPull[]
}

export interface PaginatedGitHubPullTaskList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: GitHubPullTask[]
}

export interface PaginatedGitHubPullTaskStepList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: GitHubPullTaskStep[]
}

export interface PaginatedGrantList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Grant[]
}

export interface PaginatedIntegrationNodeList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: IntegrationNode[]
}

export interface PaginatedInvitationList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Invitation[]
}

export interface PaginatedMembershipList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Membership[]
}

export interface PaginatedOrganizationList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Organization[]
}

export interface PaginatedParameterDualityList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: ParameterDuality[]
}

export interface PaginatedParameterList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Parameter[]
}

export interface PaginatedParameterRuleList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: ParameterRule[]
}

export interface PaginatedParameterTypeList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: ParameterType[]
}

export interface PaginatedParameterTypeRuleList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: ParameterTypeRule[]
}

export interface PaginatedProjectList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Project[]
}

export interface PaginatedServiceAccountList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: ServiceAccount[]
}

export interface PaginatedTagList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Tag[]
}

export interface PaginatedTaskStepList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: TaskStep[]
}

export interface PaginatedTemplateList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Template[]
}

export interface PaginatedUserList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: User[]
}

export interface PaginatedValueList {
  /** @example 123 */
  count?: number

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=4
   */
  next?: string | null

  /**
   * @format uri
   * @example http://api.example.org/accounts/?page=2
   */
  previous?: string | null
  results?: Value[]
}

/**
 * A single parameter inside of a project.
 */
export interface Parameter {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** The parameter name. */
  name: string

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean

  /** The type of this Parameter. */
  type?: string

  /** Rules applied to this parameter. */
  rules: ParameterRule[]

  /**
   * The project that the parameter is within.
   * @format uri
   */
  project: string

  /** The project name that the parameter is within. */
  project_name: string

  /** Templates that reference this Parameter. */
  referencing_templates: string[]

  /** Dynamic values that reference this Parameter. */
  referencing_values: string[]

  /**
   *
   *             This dictionary has keys that correspond to environment urls, and values
   *             that correspond to the effective value for this parameter in that environment.
   *             Each parameter has an effective value in every environment based on
   *             project dependencies and environment inheritance.
   *             The effective value is found by looking (within the keyed environment) up
   *             the project dependencies by parameter name.  If a value is not found, the
   *             parent environment is consulted with the same logic to locate a value.  It
   *             is possible for there to be a `null` value record for an environment, which
   *             means there is no value set; it is also possible for there to be a value record
   *             with a `value` of `null`, which means the value was explicitly set to `null`.
   *             If the value's parameter does not match the enclosing parameter (holding the
   *             values array) then that value is flowing in through project dependencies.
   *             Clients must recognize this in case the user asks to modify the value; in this
   *             case the client must POST a new Value to the current parameter to override the
   *             value coming in from the project dependency.
   *             If the Value.environment matches the key, then it is an explicit value set for
   *             that environment.  If they differ, the value was obtained from a parent
   *             environment (directly or indirectly).  If the value is None then no value has
   *             ever been set in any environment for this parameter within all the project
   *             dependencies.
   *
   */
  values: Record<string, Value | null>

  /**
   * If this parameter's project depends on another project which provides a parameter of the same name, this parameter overrides the one provided by the dependee.  You can use this field to determine if there will be side-effects the user should know about when deleting a parameter.  Deleting a parameter that overrides another one due to an identical name will uncover the one from the dependee project.
   * @format uri
   */
  overrides: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * A single parameter inside of a project.
 */
export interface ParameterCreate {
  /** The parameter name. */
  name: string

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean

  /** The type of this Parameter. */
  type?: string
}

/**
* Details about a parameter at two timepoints.

If t1 or t2 is null then the parameter did not exist at that
timepoint.
*/
export interface ParameterDuality {
  t1: Parameter | null
  t2: Parameter | null
}

export interface ParameterExport {
  body: string
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
  url: string

  /** @format uuid */
  id: string

  /**
   * The parameter this rule is for.
   * @format uri
   */
  parameter: string
  type: ParameterRuleTypeEnum
  constraint: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface ParameterRuleCreate {
  type: ParameterRuleTypeEnum
  constraint: string
}

export enum ParameterRuleTypeEnum {
  Min = 'min',
  Max = 'max',
  MinLen = 'min_len',
  MaxLen = 'max_len',
  Regex = 'regex'
}

export interface ParameterTimeline {
  /** The number of records in this response. */
  count: number

  /**
   * If present, additional history can be retrieved using this timestamp in the next call for the as_of query parameter value.
   * @format date-time
   */
  next_as_of?: string
  results: ParameterTimelineEntry[]
}

/**
 * Details about a single change.
 */
export interface ParameterTimelineEntry {
  /** @format date-time */
  history_date: string
  history_type: HistoryTypeEnum

  /** The unique identifier of a user. */
  history_user?: string | null

  /** The affected environment(s). */
  history_environments: ParameterTimelineEntryEnvironment[]

  /** The component of the parameter that changed. */
  history_model: HistoryModelEnum

  /** The affected parameter. */
  history_parameter: ParameterTimelineEntryParameter
}

export interface ParameterTimelineEntryEnvironment {
  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id: string

  /** The environment name. */
  name: string

  /** Indicates if the value change was direct or if it flowed into the environment. If `true` then the value was actually set directly into this environment. If `false` then the environment has no value set directly so it inherited the value from its parent. */
  override: boolean
}

export interface ParameterTimelineEntryParameter {
  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** The parameter name. */
  name: string
}

export interface ParameterType {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the parameter type.
   * @format uuid
   */
  id: string

  /** The parameter type name. */
  name: string

  /** A description of the parameter type, provide documentation on how to use this type here. */
  description?: string

  /** Rules applied to this parameter. */
  rules: ParameterTypeRule[]

  /**
   * All types must derive, either directly or indirectly, from one of the CloudTruth built-in types.   This is the ParameterType that this type is derived from.
   * @format uri
   */
  parent?: string | null

  /** Name of the parent ParameterType (if any). */
  parent_name: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface ParameterTypeCreate {
  /** The parameter type name. */
  name: string

  /** A description of the parameter type, provide documentation on how to use this type here. */
  description?: string

  /**
   * All types must derive, either directly or indirectly, from one of the CloudTruth built-in types.   This is the ParameterType that this type is derived from.
   * @format uri
   */
  parent?: string | null
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface ParameterTypeRule {
  /** @format uri */
  url: string

  /** @format uuid */
  id: string

  /**
   * The type this rule is for.
   * @format uri
   */
  parameter_type: string
  type: ParameterRuleTypeEnum
  constraint: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface ParameterTypeRuleCreate {
  type: ParameterRuleTypeEnum
  constraint: string
}

export interface PatchedAwsIntegration {
  /** @format uri */
  url?: string

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id?: string
  name?: string

  /** An optional description for the integration. */
  description?: string

  /** The status of the integration connection with the third-party provider as of the `status_last_checked_at` field.  The status is updated automatically by the server when the integration is modified. */
  status?: StatusEnum

  /** If an error occurs, more details will be available in this field. */
  status_detail?: string

  /**
   * The last time the status was evaluated.
   * @format date-time
   */
  status_last_checked_at?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
  fqn?: string

  /** The type of integration. */
  type?: string

  /** Allow actions to write to the integration. */
  writable?: boolean

  /**
   * The AWS Account ID.
   * @pattern ^[0-9]+$
   */
  aws_account_id?: string

  /** The AWS regions to integrate with. */
  aws_enabled_regions?: AwsRegionEnum[]

  /** The AWS services to integrate with. */
  aws_enabled_services?: AwsServiceEnum[]

  /** This is a shared secret between the AWS Administrator who set up your IAM trust relationship and your CloudTruth AWS Integration.  CloudTruth will generate a random value for you to give to your AWS Administrator in order to create the necessary IAM role for proper access. */
  aws_external_id?: string

  /**
   * If present, this is the KMS Key Id that is used to push values.  This key must be accessible in the AWS account (it cannot be an ARN to a key in another AWS account).
   * @pattern ^[a-zA-Z0-9:/_\-]+$
   */
  aws_kms_key_id?: string | null

  /**
   * The role that CloudTruth will assume when interacting with your AWS Account through this integration.  The role is configured by your AWS Account Administrator.  If your AWS Administrator provided you with a value use it, otherwise make your own role name and give it to your AWS Administrator.
   * @pattern ^[\w+=,.@\-]+$
   */
  aws_role_name?: string
}

/**
* Pull actions can be configured to get configuration and secrets from
integrations on demand.
*/
export interface PatchedAwsPull {
  /** @format uri */
  url?: string

  /**
   * Unique identifier for the action.
   * @format uuid
   */
  id?: string

  /** The action name. */
  name?: string

  /** The optional description for the action. */
  description?: string

  /** The most recent task run for this action. */
  latest_task?: AwsPullTask | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string

  /** Allow the pull to create environments.  Any automatically created environments will be children of the `default` environment.  If an environment needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_environments?: boolean

  /** Allow the pull to create projects.  If a project needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_projects?: boolean

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Values being managed by a mapped pull. */
  mapped_values?: Value[]

  /**
   * The pull mode used.
   *
   * A pattern pull uses a pattern-matching resource string with mustache-style markers to identify the project, parameter, and environment names, or with a Python regular expression that uses named capture groups that define the same three concepts.
   * A mapped pull uses a specific resource and JMESpath expression to deliver a value to a specific project, parameter, and environment.  This leverages external value linkages made in the value editor, and there is one mapped pull per integration provided by the system so that you can trigger external value pull synchronizations.
   */
  mode?: ModeEnum

  /** The AWS region to use.  This region must be enabled in the integration. */
  region?: AwsRegionEnum

  /** The AWS service to use.  This service must be enabled in the integration. */
  service?: AwsServiceEnum

  /**
   * Defines a pattern matching string that contains either mustache or regular expression syntax (with named capture groups) that locate the environment, project, and parameter name of the content you are looking for.
   *
   * If you are using mustache pattern matching, use:
   *   - ``{{ environment }}`` to identify the environment name
   *   - ``{{ parameter }}`` to identify the parameter name
   *   - ``{{ project }}`` to identify the project name
   * If you are using a regular expression, use Python syntax with named capture groups that locate the `environment`, `project`, and `parameter`.
   */
  resource?: string
}

/**
 * Update a push.  The `region` and `service` cannot be changed on an existing push.
 */
export interface PatchedAwsPushUpdate {
  /** The action name. */
  name?: string

  /** The optional description for the action. */
  description?: string

  /** Projects that are included in the push. */
  projects?: string[]

  /** Tags are used to select parameters by environment from the projects included in the push.  You cannot have two tags from the same environment in the same push. */
  tags?: string[]

  /**
   * Defines a path through the integration to the location where values will be pushed.
   *
   * The following mustache-style substitutions can be used in the string:
   *   - ``{{ environment }}`` to insert the environment name
   *   - ``{{ parameter }}`` to insert the parameter name
   *   - ``{{ project }}`` to insert the project name
   *   - ``{{ push }}`` to insert the push name
   *   - ``{{ tag }}`` to insert the tag name
   * We recommend that you use project, environment, and parameter at a minimum to disambiguate your pushed resource identifiers.
   * If you include multiple projects in the push, the `project` substitution is required.  If you include multiple tags from different environments in the push, the `environment` substitution is required.  If you include multiple tags from the same environment in the push, the `tag` substitution is required.  In all cases, the `parameter` substitution is always required.
   */
  resource?: string | null

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Normally, push will check to see if it originated the values in the destination before making changes to them.  Forcing a push disables the ownership check. */
  force?: boolean

  /** Normally, push will process all parameters including those that flow in from project dependencies.  Declaring a push as `local` will cause it to only process the parameters defined in the selected projects. */
  local?: boolean

  /** This setting allows parameters (non-secrets) to be pushed to a destination that only supports storing secrets.  This may increase your overall cost from the cloud provider as some cloud providers charge a premium for secrets-only storage. */
  coerce_parameters?: boolean

  /** Include parameters (non-secrets) in the values being pushed.  This setting requires the destination to support parameters or for the `coerce_parameters` flag to be enabled, otherwise the push will fail. */
  include_parameters?: boolean

  /** Include secrets in the values being pushed.  This setting requires the destination to support secrets, otherwise the push will fail. */
  include_secrets?: boolean
}

export interface PatchedEnvironment {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the environment.
   * @format uuid
   */
  id?: string

  /** The environment name. */
  name?: string

  /** A description of the environment.  You may find it helpful to document how this environment is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * Environments can inherit from a single parent environment which provides values for parameters when specific environments do not have a value set.  Every organization has one default environment that cannot be removed.
   * @format uri
   */
  parent?: string | null

  /** This is the opposite of `parent`, see that field for more details. */
  children?: string[]

  /** Indicates if access control is being enforced through grants. */
  access_controlled?: boolean

  /** Your role in the environment, if the environment is access-controlled. */
  role?: RoleEnum | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

/**
* Pull actions can be configured to get configuration and secrets from
integrations on demand.
*/
export interface PatchedGitHubPull {
  /** @format uri */
  url?: string

  /**
   * Unique identifier for the action.
   * @format uuid
   */
  id?: string

  /** The action name. */
  name?: string

  /** The optional description for the action. */
  description?: string

  /** The most recent task run for this action. */
  latest_task?: GitHubPullTask | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string

  /** Allow the pull to create environments.  Any automatically created environments will be children of the `default` environment.  If an environment needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_environments?: boolean

  /** Allow the pull to create projects.  If a project needs to be created but the action does not allow it, a task step will be added with a null operation, and success_detail will indicate the action did not allow it. */
  create_projects?: boolean

  /** When set to dry-run mode an action will report the changes that it would have made in task steps, however those changes are not actually performed. */
  dry_run?: boolean

  /** Values being managed by a mapped pull. */
  mapped_values?: Value[]

  /**
   * The pull mode used.
   *
   * A pattern pull uses a pattern-matching resource string with mustache-style markers to identify the project, parameter, and environment names, or with a Python regular expression that uses named capture groups that define the same three concepts.
   * A mapped pull uses a specific resource and JMESpath expression to deliver a value to a specific project, parameter, and environment.  This leverages external value linkages made in the value editor, and there is one mapped pull per integration provided by the system so that you can trigger external value pull synchronizations.
   */
  mode?: ModeEnum
}

export interface PatchedGrant {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the grant.
   * @format uuid
   */
  id?: string

  /**
   * The URI of a principal for the grant; this must describe a user.
   * @format uri
   */
  principal?: string

  /**
   * The URI of a scope for the grant; this must describe a project or environment.
   * @format uri
   */
  scope?: string

  /** The role that the principal has in the given scope. */
  role?: RoleEnum

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface PatchedInvitation {
  /** @format uri */
  url?: string

  /**
   * The unique identifier of an invitation.
   * @format uuid
   */
  id?: string

  /**
   * The email address of the user to be invited.
   * @format email
   */
  email?: string

  /** The role that the user will have in the organization, should the user accept. */
  role?: RoleEnum

  /**
   * The user that created the invitation.
   * @format uri
   */
  inviter?: string

  /** The name of the user that created the invitation. */
  inviter_name?: string

  /** The current state of the invitation. */
  state?: string

  /** Additional details about the state of the invitation. */
  state_detail?: string

  /**
   * The resulting membership, should the user accept.
   * @format uri
   */
  membership?: string | null

  /**
   * The organization that the user will become a member of, should the user accept.
   * @format uri
   */
  organization?: string
}

export interface PatchedMembership {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the membership.
   * @format uuid
   */
  id?: string

  /**
   * The user of the membership.
   * @format uri
   */
  user?: string

  /**
   * The organization that the user is a member of.
   * @format uri
   */
  organization?: string

  /** The role that the user has in the organization. */
  role?: RoleEnum

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface PatchedOrganization {
  /** @format uri */
  url?: string

  /** A unique identifier for the organization. */
  id?: string

  /** The organization name. */
  name?: string

  /** Indicates if this Organization is the one currently targeted by the Bearer token used by the client to authorize. */
  current?: boolean

  /** Your role in the organization. */
  role?: RoleEnum

  /** @format date-time */
  subscription_expires_at?: string | null
  subscription_features?: string[]
  subscription_id?: string | null
  subscription_plan_id?: string | null
  subscription_plan_name?: string | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

/**
 * A single parameter inside of a project.
 */
export interface PatchedParameter {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id?: string

  /** The parameter name. */
  name?: string

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** Indicates if this content is secret or not.  When a parameter is considered to be a secret, any internal values are stored in a dedicated vault for your organization for maximum security.  External values are inspected on-demand to ensure they align with the parameter's secret setting and if they do not, those external values are not allowed to be used. */
  secret?: boolean

  /** The type of this Parameter. */
  type?: string

  /** Rules applied to this parameter. */
  rules?: ParameterRule[]

  /**
   * The project that the parameter is within.
   * @format uri
   */
  project?: string

  /** The project name that the parameter is within. */
  project_name?: string

  /** Templates that reference this Parameter. */
  referencing_templates?: string[]

  /** Dynamic values that reference this Parameter. */
  referencing_values?: string[]

  /**
   *
   *             This dictionary has keys that correspond to environment urls, and values
   *             that correspond to the effective value for this parameter in that environment.
   *             Each parameter has an effective value in every environment based on
   *             project dependencies and environment inheritance.
   *             The effective value is found by looking (within the keyed environment) up
   *             the project dependencies by parameter name.  If a value is not found, the
   *             parent environment is consulted with the same logic to locate a value.  It
   *             is possible for there to be a `null` value record for an environment, which
   *             means there is no value set; it is also possible for there to be a value record
   *             with a `value` of `null`, which means the value was explicitly set to `null`.
   *             If the value's parameter does not match the enclosing parameter (holding the
   *             values array) then that value is flowing in through project dependencies.
   *             Clients must recognize this in case the user asks to modify the value; in this
   *             case the client must POST a new Value to the current parameter to override the
   *             value coming in from the project dependency.
   *             If the Value.environment matches the key, then it is an explicit value set for
   *             that environment.  If they differ, the value was obtained from a parent
   *             environment (directly or indirectly).  If the value is None then no value has
   *             ever been set in any environment for this parameter within all the project
   *             dependencies.
   *
   */
  values?: Record<string, Value | null>

  /**
   * If this parameter's project depends on another project which provides a parameter of the same name, this parameter overrides the one provided by the dependee.  You can use this field to determine if there will be side-effects the user should know about when deleting a parameter.  Deleting a parameter that overrides another one due to an identical name will uncover the one from the dependee project.
   * @format uri
   */
  overrides?: string | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
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
  url?: string

  /** @format uuid */
  id?: string

  /**
   * The parameter this rule is for.
   * @format uri
   */
  parameter?: string
  type?: ParameterRuleTypeEnum
  constraint?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface PatchedParameterType {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the parameter type.
   * @format uuid
   */
  id?: string

  /** The parameter type name. */
  name?: string

  /** A description of the parameter type, provide documentation on how to use this type here. */
  description?: string

  /** Rules applied to this parameter. */
  rules?: ParameterTypeRule[]

  /**
   * All types must derive, either directly or indirectly, from one of the CloudTruth built-in types.   This is the ParameterType that this type is derived from.
   * @format uri
   */
  parent?: string | null

  /** Name of the parent ParameterType (if any). */
  parent_name?: string | null

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

/**
* A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
of primary key relationships.  Specifically:

* A 'url' field is included instead of the 'id' field.
* Relationships to other instances are hyperlinks, instead of primary keys.

NOTE: this only works with DRF 3.1.0 and above.
*/
export interface PatchedParameterTypeRule {
  /** @format uri */
  url?: string

  /** @format uuid */
  id?: string

  /**
   * The type this rule is for.
   * @format uri
   */
  parameter_type?: string
  type?: ParameterRuleTypeEnum
  constraint?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface PatchedProject {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the project.
   * @format uuid
   */
  id?: string

  /** The project name. */
  name?: string

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** This is the opposite of `depends_on`, see that field for more details. */
  dependents?: string[]

  /**
   * Project dependencies allow projects to be used for shared configuration, for example a database used by many applications needs to advertise its port number.
   *
   * Projects can depend on another project which will add the parameters from the parent project into the current project.  All of the parameter names between the two projects must be unique.  When retrieving values or rendering templates, all of the parameters from the parent project will also be available in the current project.
   * @format uri
   */
  depends_on?: string | null

  /** Indicates if access control is being enforced through grants. */
  access_controlled?: boolean

  /** Your role in the project, if the project is access-controlled. */
  role?: RoleEnum | null
  pushes?: AwsPush[]

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface PatchedServiceAccount {
  /** @format uri */
  url?: string
  id?: string
  user?: User

  /** An optional description of the process or system using the service account. */
  description?: string

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string

  /**
   * The most recent date and time the service account was used.  It will be null if the service account has not been used.
   * @format date-time
   */
  last_used_at?: string | null
}

/**
 * Details for updating a tag.
 */
export interface PatchedTagUpdate {
  /**
   * A unique identifier for the tag.
   * @format uuid
   */
  id?: string

  /**
   * The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified.
   * @pattern ^[\w.-]+$
   */
  name?: string

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * The point in time this tag represents.  If explicitly set to `null` then the current time will be used.
   * @format date-time
   */
  timestamp?: string | null
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface PatchedTemplate {
  /**
   * The templates this value references, if interpolated.
   * @format uri
   */
  url?: string

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id?: string

  /** The template name. */
  name?: string

  /** ('A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content.',) */
  description?: string

  /** If true, the `body` field has undergone evaluation. */
  evaluated?: boolean

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string

  /** Parameters that this template references. */
  referenced_parameters?: string[]

  /** Other templates that this template references. */
  referenced_templates?: string[]

  /** Other templates that reference this template. */
  referencing_templates?: string[]

  /** The dynamic values that reference this template. */
  referencing_values?: string[]

  /** If True, this template contains secrets. */
  has_secret?: boolean

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

/**
 * A value for a parameter in a given environment.
 */
export interface PatchedValue {
  /** @format uri */
  url?: string

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id?: string

  /**
   * The environment this value is set in.
   * @format uri
   */
  environment?: string

  /** The environment name for this value.  This is a convenience to avoid another query against the server to resolve the environment url into a name. */
  environment_name?: string

  /** The earliest tag name this value appears in (within the value's environment). */
  earliest_tag?: string | null

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter?: string

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string

  /** This field is deprecated and unused. */
  external_error?: string | null

  /** The most recent mapped pull status for an external value. */
  external_status?: TaskStep | null

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean

  /**
   * This is the actual content of the Value for the given parameter in the given environment.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value?: string | null

  /** If true, the `value` field has undergone template evaluation. */
  evaluated?: boolean

  /** Indicates the value content is a secret.  Normally this is `true` when the parameter is a secret, however it is possible for a parameter to be a secret with a external value that is not a secret.  It is not possible to convert a parameter from a secret to a non-secret if any of the values are external and a secret.  Clients can check this condition by leveraging this field. */
  secret?: boolean | null

  /** The parameters this value references, if interpolated. */
  referenced_parameters?: string[]

  /** The templates this value references, if interpolated. */
  referenced_templates?: string[]

  /** @format date-time */
  created_at?: string

  /** @format date-time */
  modified_at?: string
}

export interface Project {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the project.
   * @format uuid
   */
  id: string

  /** The project name. */
  name: string

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** This is the opposite of `depends_on`, see that field for more details. */
  dependents: string[]

  /**
   * Project dependencies allow projects to be used for shared configuration, for example a database used by many applications needs to advertise its port number.
   *
   * Projects can depend on another project which will add the parameters from the parent project into the current project.  All of the parameter names between the two projects must be unique.  When retrieving values or rendering templates, all of the parameters from the parent project will also be available in the current project.
   * @format uri
   */
  depends_on?: string | null

  /** Indicates if access control is being enforced through grants. */
  access_controlled?: boolean

  /** Your role in the project, if the project is access-controlled. */
  role: RoleEnum | null
  pushes: AwsPush[]

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

export interface ProjectCreate {
  /** The project name. */
  name: string

  /** A description of the project.  You may find it helpful to document how this project is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * Project dependencies allow projects to be used for shared configuration, for example a database used by many applications needs to advertise its port number.
   *
   * Projects can depend on another project which will add the parameters from the parent project into the current project.  All of the parameter names between the two projects must be unique.  When retrieving values or rendering templates, all of the parameters from the parent project will also be available in the current project.
   * @format uri
   */
  depends_on?: string | null
}

export enum RoleEnum {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  CONTRIB = 'CONTRIB',
  VIEWER = 'VIEWER'
}

export interface ServiceAccount {
  /** @format uri */
  url: string
  id: string
  user: User

  /** An optional description of the process or system using the service account. */
  description?: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string

  /**
   * The most recent date and time the service account was used.  It will be null if the service account has not been used.
   * @format date-time
   */
  last_used_at: string | null
}

export interface ServiceAccountCreateRequest {
  /** The name of the process or system using the service account. */
  name: string

  /** An optional description of the process or system using the service account. */
  description?: string
}

export interface ServiceAccountCreateResponse {
  /** @format uri */
  url: string
  id: string
  user: User

  /** An optional description of the process or system using the service account. */
  description?: string

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string

  /**
   * The most recent date and time the service account was used.  It will be null if the service account has not been used.
   * @format date-time
   */
  last_used_at: string | null

  /** The API Key to use as a Bearer token for the service account. */
  apikey: string
}

export enum StateEnum {
  Queued = 'queued',
  Running = 'running',
  Skipped = 'skipped',
  Success = 'success',
  Failure = 'failure'
}

export enum StatusEnum {
  Unknown = 'unknown',
  Pending = 'pending',
  Checking = 'checking',
  Connected = 'connected',
  Errored = 'errored',
  Missing = 'missing'
}

/**
 * The details of a tag.
 */
export interface Tag {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the tag.
   * @format uuid
   */
  id: string

  /**
   * The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified.
   * @pattern ^[\w.-]+$
   */
  name: string

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * The point in time this tag represents.
   * @format date-time
   */
  timestamp: string
  pushes: AwsPush[]
  usage: TagReadUsage
}

/**
 * Details for creating a tag.
 */
export interface TagCreate {
  /**
   * The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified.
   * @pattern ^[\w.-]+$
   */
  name: string

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * The point in time this tag represents. If not specified then the current time will be used.
   * @format date-time
   */
  timestamp?: string | null
}

/**
 * The read usage details of a tag.
 */
export interface TagReadUsage {
  /**
   * The last time a configuration was retrieved with this tag.
   * @format date-time
   */
  last_read: string | null

  /** The last user (id) to use this tag to read configuration. */
  last_read_by?: string

  /**
   * The number of times the tag has been used to read configuration.
   * @min -2147483648
   * @max 2147483647
   */
  total_reads: number
}

/**
 * Details for updating a tag.
 */
export interface TagUpdate {
  /**
   * A unique identifier for the tag.
   * @format uuid
   */
  id: string

  /**
   * The tag name. Tag names may contain alphanumeric, hyphen, underscore, or period characters. Tag names are case sensitive. The name cannot be modified.
   * @pattern ^[\w.-]+$
   */
  name: string

  /** A description of the tag.  You may find it helpful to document how this tag is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /**
   * The point in time this tag represents.  If explicitly set to `null` then the current time will be used.
   * @format date-time
   */
  timestamp?: string | null
}

/**
* Each task detail documents the synchronization of a single
value through an integration.
*/
export interface TaskStep {
  /** @format uri */
  url: string

  /**
   * Unique identifier for a task step.
   * @format uuid
   */
  id: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: OperationEnum | null

  /** Indicates if the operation was successful. */
  success: boolean

  /** Additional details about the successful operation, if any. */
  success_detail?: string | null

  /** The fully-qualified name (FQN) this of the value that was changed. */
  fqn?: string | null

  /**
   * The environment affected by this step.
   * @format uri
   */
  environment: string | null

  /**
   * The environment id involved in the operation.
   * @format uuid
   */
  environment_id?: string | null

  /** The environment name involved in the operation. */
  environment_name?: string | null

  /**
   * The project affected by this step.
   * @format uri
   */
  project: string | null

  /**
   * The project id involved in the operation.
   * @format uuid
   */
  project_id?: string | null

  /** The project name involved in the operation. */
  project_name?: string | null

  /**
   * The parameter affected by this step.
   * @format uri
   */
  parameter: string | null

  /**
   * The parameter id involved in the operation.
   * @format uuid
   */
  parameter_id?: string | null

  /** The parameter name involved in the operation. */
  parameter_name?: string | null

  /** The integration-native id for the resource. */
  venue_id?: string | null

  /** The name of the item or resource as known by the integration. */
  venue_name?: string | null

  /** The summary of this step (what it was trying to do). */
  summary?: string | null

  /** An error code, if not successful. */
  error_code?: string | null

  /** Details on the error that occurred during processing. */
  error_detail?: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface Template {
  /**
   * The templates this value references, if interpolated.
   * @format uri
   */
  url: string

  /**
   * A unique identifier for the template.
   * @format uuid
   */
  id: string

  /** The template name. */
  name: string

  /** ('A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content.',) */
  description?: string

  /** If true, the `body` field has undergone evaluation. */
  evaluated: boolean

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string

  /** Parameters that this template references. */
  referenced_parameters: string[]

  /** Other templates that this template references. */
  referenced_templates: string[]

  /** Other templates that reference this template. */
  referencing_templates: string[]

  /** The dynamic values that reference this template. */
  referencing_values: string[]

  /** If True, this template contains secrets. */
  has_secret: boolean

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * A parameter template in a given project, optionally instantiated against an environment.
 */
export interface TemplateCreate {
  /** The template name. */
  name: string

  /** ('A description of the template.  You may find it helpful to document how this template is used to assist others when they need to maintain software that uses this content.',) */
  description?: string

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string
}

/**
 * Indicates errors occurred while retrieving values to substitute into the template.
 */
export interface TemplateLookupError {
  detail: TemplateLookupErrorEntry[]
}

export interface TemplateLookupErrorEntry {
  /**
   * The parameter id.
   * @format uuid
   */
  parameter_id: string

  /** The parameter name. */
  parameter_name: string

  /** The error code. */
  error_code: string

  /** Details about the error. */
  error_detail: string
}

export interface TemplatePreview {
  body: string
}

export interface TemplateTimeline {
  /** The number of records in this response. */
  count: number

  /**
   * If present, additional history can be retrieved using this timestamp in the next call for the as_of query parameter value.
   * @format date-time
   */
  next_as_of?: string
  results: TemplateTimelineEntry[]
}

/**
 * Details about a single change.
 */
export interface TemplateTimelineEntry {
  /** @format date-time */
  history_date: string
  history_type: HistoryTypeEnum

  /** The unique identifier of a user. */
  history_user?: string | null

  /** The template record as it was when archived for history. */
  history_template: TemplateTimelineEntryTemplate
}

/**
 * Helper methods for all views or serializers that expose template concepts.
 */
export interface TemplateTimelineEntryTemplate {
  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** The parameter name. */
  name: string

  /** A description of the parameter.  You may find it helpful to document how this parameter is used to assist others when they need to maintain software that uses this content. */
  description?: string

  /** The content of the template.  Use mustache-style templating delimiters of `{{` and `}}` to reference parameter values by name for substitution into the template result. */
  body?: string
}

export interface User {
  /** @format uri */
  url: string

  /** The unique identifier of a user. */
  id: string

  /** The type of user record. */
  type?: string
  name: string | null

  /** The user's organization name. */
  organization_name: string | null

  /** Membership identifier for user. */
  membership_id: string | null

  /** The user's role in the current organization (defined by the request authorization header). */
  role: string | null
  email: string | null
  picture_url: string | null

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * A value for a parameter in a given environment.
 */
export interface Value {
  /** @format uri */
  url: string

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string

  /**
   * The environment this value is set in.
   * @format uri
   */
  environment: string

  /** The environment name for this value.  This is a convenience to avoid another query against the server to resolve the environment url into a name. */
  environment_name: string

  /** The earliest tag name this value appears in (within the value's environment). */
  earliest_tag: string | null

  /**
   * The parameter this value is for.
   * @format uri
   */
  parameter: string

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string

  /** This field is deprecated and unused. */
  external_error: string | null

  /** The most recent mapped pull status for an external value. */
  external_status: TaskStep | null

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean

  /**
   * This is the actual content of the Value for the given parameter in the given environment.
   *
   * If you request secret masking, no secret content will be included in the result and instead a series of asterisks will be used instead for the value.  If you request wrapping, the secret content will be wrapped in an envelope that is bound to your JWT token.  For more information about secret wrapping, see the docs.
   * Clients applying this value to a shell environment should set `<parameter_name>=<value>` even if `value` is the empty string.  If `value` is `null`, the client should unset that shell environment variable.
   */
  value: string | null

  /** If true, the `value` field has undergone template evaluation. */
  evaluated: boolean

  /** Indicates the value content is a secret.  Normally this is `true` when the parameter is a secret, however it is possible for a parameter to be a secret with a external value that is not a secret.  It is not possible to convert a parameter from a secret to a non-secret if any of the values are external and a secret.  Clients can check this condition by leveraging this field. */
  secret: boolean | null

  /** The parameters this value references, if interpolated. */
  referenced_parameters: string[]

  /** The templates this value references, if interpolated. */
  referenced_templates: string[]

  /** @format date-time */
  created_at: string

  /** @format date-time */
  modified_at: string
}

/**
 * A value for a parameter in a given environment.
 */
export interface ValueCreate {
  /**
   * The environment this value is set in.
   * @format uri
   */
  environment: string

  /** An external parameter leverages a CloudTruth integration to retrieve content on-demand from an external source.  When this is `false` the value is stored by CloudTruth and considered to be _internal_.  When this is `true`, the `external_fqn` field must be set. */
  external?: boolean

  /** The FQN, or Fully-Qualified Name, is the path through the integration to get to the desired content.  This must be present and reference a valid integration when the value is `external`. */
  external_fqn?: string

  /** If the value is `external`, the content returned by the integration can be reduced by applying a JMESpath expression.  This is valid as long as the content is structured and of a supported format.  JMESpath expressions are supported on `json`, `yaml`, and `dotenv` content. */
  external_filter?: string

  /** This is the content to use when resolving the Value for an internal non-secret, or when storing a secret.  When storing a secret, this content is stored in your organization's dedicated vault and this field is cleared.  This field is required if the value is being created or updated and is `internal`.  This field cannot be specified when creating or updating an `external` value. */
  internal_value?: string | null

  /** If `true`, apply template substitution rules to this value.  If `false`, this value is a literal value.  Note: secrets cannot be interpolated. */
  interpolated?: boolean
}

export interface ApiSchemaRetrieveParams {
  format?: 'json' | 'yaml'
  lang?:
    | 'af'
    | 'ar'
    | 'ar-dz'
    | 'ast'
    | 'az'
    | 'be'
    | 'bg'
    | 'bn'
    | 'br'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'cy'
    | 'da'
    | 'de'
    | 'dsb'
    | 'el'
    | 'en'
    | 'en-au'
    | 'en-gb'
    | 'eo'
    | 'es'
    | 'es-ar'
    | 'es-co'
    | 'es-mx'
    | 'es-ni'
    | 'es-ve'
    | 'et'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hsb'
    | 'hu'
    | 'hy'
    | 'ia'
    | 'id'
    | 'ig'
    | 'io'
    | 'is'
    | 'it'
    | 'ja'
    | 'ka'
    | 'kab'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'ky'
    | 'lb'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nn'
    | 'os'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-br'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sr-latn'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'tk'
    | 'tr'
    | 'tt'
    | 'udm'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh-hans'
    | 'zh-hant'
}

export interface AuditListParams {
  /** The action that was taken. */
  action?: 'create' | 'delete' | 'pull' | 'push' | 'update'

  /** @format date-time */
  earliest?: string

  /**
   * Returns records for the environment, associated tags, and values.
   * @format uuid
   */
  environment_id?: string

  /** @format date-time */
  latest?: string
  object_id?: string
  object_type?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /**
   * Returns records for the parameter and associated values.
   * @format uuid
   */
  parameter_id?: string

  /**
   * Returns records for the project, it's parameters, and associated values.
   * @format uuid
   */
  project_id?: string
  user_id?: string
}

export interface EnvironmentsListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  parent__name?: string
  parent__name__icontains?: string
}

export interface EnvironmentsPushesListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** @format uuid */
  environmentPk: string
}

export interface EnvironmentsTagsListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** @format date-time */
  timestamp?: string

  /** @format date-time */
  timestamp__gte?: string

  /** @format date-time */
  timestamp__lte?: string

  /** @format uuid */
  environmentPk: string
}

export interface GrantsListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /**
   * Filter by principal (User).
   * @format uri
   */
  principal?: string

  /** Filter by role. */
  role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'

  /**
   * Filter by grant scope (Environment, Project).
   * @format uri
   */
  scope?: string
}

export interface ImportCreateParams {
  /** Mask secrets in the response */
  mask_secrets?: boolean

  /** Do not create any objects */
  preview?: boolean
}

export interface IntegrationsAwsListParams {
  aws_account_id?: string
  aws_role_name?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface IntegrationsAwsPullsListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** @format uuid */
  awsintegrationPk: string
}

export interface IntegrationsAwsPullsTasksListParams {
  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** The current state of this task. */
  state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'

  /** @format uuid */
  awsintegrationPk: string

  /** @format uuid */
  awspullPk: string
}

export interface IntegrationsAwsPullsTasksStepsListParams {
  fqn?: string

  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: 'create' | 'delete' | 'read' | 'update' | null

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  success?: boolean
  venue_id?: string
  venue_id__icontains?: string
  venue_name?: string
  venue_name__icontains?: string

  /** @format uuid */
  awsintegrationPk: string

  /** @format uuid */
  awspullPk: string

  /** @format uuid */
  awspulltaskPk: string
}

export interface IntegrationsAwsPushesListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** @format uuid */
  awsintegrationPk: string
}

export interface IntegrationsAwsPushesTasksListParams {
  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** The current state of this task. */
  state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'

  /** @format uuid */
  awsintegrationPk: string

  /** @format uuid */
  awspushPk: string
}

export interface IntegrationsAwsPushesTasksStepsListParams {
  fqn?: string

  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: 'create' | 'delete' | 'read' | 'update' | null

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  success?: boolean
  venue_id?: string
  venue_id__icontains?: string
  venue_name?: string
  venue_name__icontains?: string

  /** @format uuid */
  awsintegrationPk: string

  /** @format uuid */
  awspushPk: string

  /** @format uuid */
  awspushtaskPk: string
}

export interface IntegrationsAwsRetrieveParams {
  /** Trigger a refresh of the integration status before returning the details. */
  refresh_status?: boolean

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
}

export interface IntegrationsAwsDestroyParams {
  /**
   * (Optional) Desired behavior if the integration has in-use values.
   *
   * - `fail` will return HTTP error 409 if there are any values using the integration.
   * - `leave` (default) will leave values in place and future queries may fail; you can control future value query behavior with the `lookup_error` query parameter on those requests.
   * - `remove` will remove the all values using the integration when the integration is removed.
   */
  in_use?: 'fail' | 'leave' | 'remove'

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
}

export interface IntegrationsExploreListParams {
  /**
   * FQN (URL-like) for third-party integration.
   * @format uri
   */
  fqn?: string

  /** JMES-path qualifier (key within file) */
  jmes?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface IntegrationsGithubListParams {
  gh_organization_slug?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface IntegrationsGithubPullsListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** @format uuid */
  githubintegrationPk: string
}

export interface IntegrationsGithubPullsTasksListParams {
  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** The current state of this task. */
  state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'

  /** @format uuid */
  githubintegrationPk: string

  /** @format uuid */
  githubpullPk: string
}

export interface IntegrationsGithubPullsTasksStepsListParams {
  fqn?: string

  /** @format date-time */
  modified_at?: string

  /** @format date-time */
  modified_at__gte?: string

  /** @format date-time */
  modified_at__lte?: string

  /**
   * The operation performed, if any.
   *
   * When the operation is an update, there may be additional details in the success_detail field to describe the change.
   * When the project is filled in but the environment and parameterare not, the operation is on the project.  When the environmentis filled in but the project and parameter are not, the operationis on the environment.  When the project and parameter are filledin but the environment is not, the operation is on the parameter.When all three are filled in, the operation is on the value ofthe parameter of the project in the specified environment.
   */
  operation?: 'create' | 'delete' | 'read' | 'update' | null

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  success?: boolean
  venue_id?: string
  venue_id__icontains?: string
  venue_name?: string
  venue_name__icontains?: string

  /** @format uuid */
  githubintegrationPk: string

  /** @format uuid */
  githubpullPk: string

  /** @format uuid */
  githubpulltaskPk: string
}

export interface IntegrationsGithubRetrieveParams {
  /** Refresh the integration status before returning the details. */
  refresh_status?: boolean

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
}

export interface IntegrationsGithubDestroyParams {
  /**
   * (Optional) Desired behavior if the integration has in-use values.
   *
   * - `fail` will return HTTP error 409 if there are any values using the integration.
   * - `leave` (default) will leave values in place and future queries may fail; you can control future value query behavior with the `lookup_error` query parameter on those requests.
   * - `remove` will remove the all values using the integration when the integration is removed.
   */
  in_use?: 'fail' | 'leave' | 'remove'

  /**
   * The unique identifier for the integration.
   * @format uuid
   */
  id: string
}

export interface InvitationsListParams {
  email?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** The role that the user will have in the organization, should the user accept. */
  role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'

  /** The current state of the invitation. */
  state?: 'accepted' | 'bounced' | 'pending' | 'sent'
}

export interface MembershipsListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** The role that the user has in the organization. */
  role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'

  /** The unique identifier of a user. */
  user?: string
}

export interface OrganizationsListParams {
  name?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface ProjectsListParams {
  description__icontains?: string
  name?: string
  name__icontains?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface ProjectsParameterExportListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Only include parameters with names that contain the provided string. */
  contains?: string

  /** Only include parameters with names that end with the provided string. */
  endswith?: string

  /** Name or id of the environment to use to retrieve parameter values. */
  environment?: string

  /** Explicitly marks parameters with export, e.g. `export FOO=bar`. */
  explicit_export?: boolean

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean

  /** Which field to use when ordering the results. */
  ordering?: string

  /** Format to output: One of 'docker', 'dotenv', 'shell'. */
  output?: string

  /** Only include parameters with names that start with the provided string. */
  startswith?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** Indicates all secrets are wrapped. For more information on secret wrapping, see the documentation. */
  wrap?: boolean

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string
  description__icontains?: string

  /** Specify a list of comma-separated environment names or ids (uuid) to compare values. Only returns a parameter if there is a difference. Cannot be used with `environment`, `wrap` or `values`. If used with `mask_secrets` then no secret parameters will be included in the result. */
  difference?: string

  /** Name or id (uuid) of the environment to get parameter values for. Cannot be used with `values`. */
  environment?: string

  /**
   * If `true`, runs template evaluation on this parameter's values.  If `false`, returns the value's template.
   * Has no effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** Multiple values may be separated by commas. */
  id__in?: string[]

  /** If true, replaces all secrets with `*****`. */
  mask_secrets?: boolean
  name?: string
  name__contains?: string
  name__icontains?: string
  name__iexact?: string
  name__istartswith?: string
  name__startswith?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  secret?: boolean

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** If false, values are not returned: the `values` array will have no entries. This speeds up retrieval if value content is not needed. Cannot be used with `environment`. */
  values?: boolean

  /** Wrap secrets. */
  wrap?: boolean

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersPushesListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** @format uuid */
  parameterPk: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersRulesListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  type?: 'max' | 'max_len' | 'min' | 'min_len' | 'regex'

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to limit the result to. If this is not specified then the result will contain a value for any environment in which it is set. You cannot use this option to retrieve the _effective_ value of a parameter in an environment for which is is not explicitly set. To see _effective_ values use the Parameters API (see the `values` field). */
  environment?: string

  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** A comma-separated list of field names to exclude from the response. */
  exclude?: string

  /** A comma-separated list of field names to include in the response. */
  include?: string

  /** Mask secret values in responses with `*****`. */
  mask_secrets?: boolean

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** For writes, indicates `internal_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesCreateParams {
  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** A comma-separated list of field names to exclude from the response. */
  exclude?: string

  /** A comma-separated list of field names to include in the response. */
  include?: string

  /** Mask secret values in responses with `*****`. */
  mask_secrets?: boolean

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** For writes, indicates `internal_value` is wrapped; for reads, indicates `value` is wrapped. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesUpdateParams {
  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesPartialUpdateParams {
  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** Indicates the `internal_value` is a wrapped secret. For more information on secret wrapping, see the documentation.  */
  wrap?: boolean

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersValuesDestroyParams {
  /**
   * If `true`, runs template evaluation on this parameter.  If `false`, returns the value's template.
   * No effect on values that are not interpolated.
   */
  evaluate?: boolean

  /**
   * A unique identifier for the value.
   * @format uuid
   */
  id: string

  /**
   * The parameter id.
   * @format uuid
   */
  parameterPk: string

  /**
   * The project id.
   * @format uuid
   */
  projectPk: string
}

export interface ProjectsParametersRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id (uuid) of the environment to get parameter values for. Cannot be used with `values`. */
  environment?: string

  /**
   * If `true`, runs template evaluation on this parameter's values.  If `false`, returns the value's template.
   * Has no effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** If true, replaces all secrets with `*****`. */
  mask_secrets?: boolean

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** If false, values are not returned: the `values` array will have no entries. This speeds up retrieval if value content is not needed. Cannot be used with `environment`. */
  values?: boolean

  /** Wrap secrets. */
  wrap?: boolean

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersTimelineRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersDualityListParams {
  /** Compare the values at `t1` and `t2` and if they are the same, omit the parameter from the result. */
  difference?: boolean

  /** Name or id (uuid) of the environment to get parameter values for. Cannot be used with `values`. */
  environment?: string

  /**
   * If `true`, runs template evaluation on this parameter's values.  If `false`, returns the value's template.
   * Has no effect on values that are not interpolated.
   */
  evaluate?: boolean

  /** If true, replaces all secrets with `*****`. */
  mask_secrets?: boolean
  name?: string
  name__contains?: string
  name__icontains?: string
  name__iexact?: string
  name__istartswith?: string
  name__startswith?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  secret?: boolean

  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `t1_tag`.
   * @format date-time
   */
  t1_as_of?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `t1_as_of`. Requires `environment`. */
  t1_tag?: string

  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `t2_tag`.
   * @format date-time
   */
  t2_as_of?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `t2_as_of`. Requires `environment`. */
  t2_tag?: string

  /** If false, values are not returned: the `values` array will have no entries. This speeds up retrieval if value content is not needed. Cannot be used with `environment`. */
  values?: boolean

  /** Wrap secrets. */
  wrap?: boolean

  /** @format uuid */
  projectPk: string
}

export interface ProjectsParametersTimelinesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsTemplatePreviewCreateParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to use to instantiate this template. If not specified then the default environment is used. */
  environment?: string

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** ID of the template parameter being previewed.  If not specified, this is assumed to be a not-yet-created parameter. */
  template?: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsTemplatesListParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to use to evaluate this template. If not specified then the original content is returned in the body. */
  environment?: string

  /**
   * If `true`, evaluates the template's body.  If `false`, returns the unevaluated template body.
   *
   */
  evaluate?: boolean

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean
  name?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsTemplatesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to use to evaluate this template. If not specified then the original content is returned in the body. */
  environment?: string

  /**
   * If `true`, evaluates the template's body.  If `false`, returns the unevaluated template body.
   *
   */
  evaluate?: boolean

  /** Masks all secrets in the template with `*****`. */
  mask_secrets?: boolean

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsTemplatesTimelineRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to use to evaluate this template. If not specified then the original content is returned in the body. */
  environment?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /**
   * A unique identifier for the parameter.
   * @format uuid
   */
  id: string

  /** @format uuid */
  projectPk: string
}

export interface ProjectsTemplatesTimelinesRetrieveParams {
  /**
   * Specify a point in time to retrieve configuration from. Cannot be specified with `tag`.
   * @format date-time
   */
  as_of?: string

  /** Name or id of the environment to use to evaluate this template. If not specified then the original content is returned in the body. */
  environment?: string

  /** Specify a tag to retrieve configuration from. Cannot be specified with `as_of`. Requires `environment`. */
  tag?: string

  /** @format uuid */
  projectPk: string
}

export interface ServiceaccountsListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
}

export interface TypesListParams {
  description__icontains?: string
  name__icontains?: string
  name__iexact?: string

  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  parent__name__icontains?: string
  parent__name__iexact?: string
}

export interface TypesRulesListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  type?: 'max' | 'max_len' | 'min' | 'min_len' | 'regex'

  /**
   * The parameter type id.
   * @format uuid
   */
  parametertypePk: string
}

export interface UsersListParams {
  /** Which field to use when ordering the results. */
  ordering?: string

  /** A page number within the paginated result set. */
  page?: number

  /** Number of results to return per page. */
  page_size?: number
  type?: string
}

export interface UtilsGeneratePasswordCreateParams {
  /** The length of the password to generate.  Minimum of 8, maximum of 4095. */
  length: number

  /** Default behavior is to fallback to /dev/urandom if we fail to get a random password from AWS Secrets Manager.  If set to 'True', we will not fallback to local password generation using /dev/urandom.  Default: False */
  require_hardware_generation?: boolean

  /** The password must include lowercase letters [a-z]. Default: True. */
  require_lowercase?: boolean

  /** The password must include numbers [0-9].  Default: True. */
  require_numbers?: boolean

  /** The password must include spaces [ ].  Default: False. */
  require_spaces?: boolean

  /** The password must include symbols [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~].  Default: False. */
  require_symbols?: boolean

  /** The password must include uppercase letters [A-Z].  Default: True. */
  require_uppercase?: boolean
}
