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

import {
  AuditTrail,
  AuditTrailSummary,
  AwsIntegration,
  AwsIntegrationCreate,
  AwsIntegrationScan,
  AwsPull,
  AwsPullSyncActionRequest,
  AwsPullTask,
  AwsPullTaskStep,
  AwsPush,
  AwsPushTask,
  AwsPushTaskStep,
  AwsPushUpdate,
  BackupDataSnapshot,
  DiscoveryResult,
  Environment,
  EnvironmentCreate,
  GeneratedPasswordResponse,
  GitHubIntegration,
  GitHubIntegrationCreate,
  GitHubPull,
  GitHubPullTask,
  GitHubPullTaskStep,
  Grant,
  ImportCreateRequest,
  ImportCreateResponse,
  Invitation,
  InvitationCreate,
  Membership,
  MembershipCreate,
  Organization,
  OrganizationCreate,
  PaginatedAuditTrailList,
  PaginatedAwsIntegrationList,
  PaginatedAwsPullList,
  PaginatedAwsPullTaskList,
  PaginatedAwsPullTaskStepList,
  PaginatedAwsPushList,
  PaginatedAwsPushTaskList,
  PaginatedAwsPushTaskStepList,
  PaginatedEnvironmentList,
  PaginatedGitHubIntegrationList,
  PaginatedGitHubPullList,
  PaginatedGitHubPullTaskList,
  PaginatedGitHubPullTaskStepList,
  PaginatedGrantList,
  PaginatedIntegrationNodeList,
  PaginatedInvitationList,
  PaginatedMembershipList,
  PaginatedOrganizationList,
  PaginatedParameterDualityList,
  PaginatedParameterList,
  PaginatedParameterRuleList,
  PaginatedParameterTypeList,
  PaginatedParameterTypeRuleList,
  PaginatedProjectList,
  PaginatedServiceAccountList,
  PaginatedTagList,
  PaginatedTaskStepList,
  PaginatedTemplateList,
  PaginatedUserList,
  PaginatedValueList,
  Parameter,
  ParameterCreate,
  ParameterExport,
  ParameterRule,
  ParameterRuleCreate,
  ParameterTimeline,
  ParameterType,
  ParameterTypeCreate,
  ParameterTypeRule,
  ParameterTypeRuleCreate,
  PatchedAwsIntegration,
  PatchedAwsPull,
  PatchedAwsPushUpdate,
  PatchedEnvironment,
  PatchedGitHubPull,
  PatchedGrant,
  PatchedInvitation,
  PatchedMembership,
  PatchedOrganization,
  PatchedParameter,
  PatchedParameterRule,
  PatchedParameterType,
  PatchedParameterTypeRule,
  PatchedProject,
  PatchedServiceAccount,
  PatchedTagUpdate,
  PatchedTemplate,
  PatchedValue,
  Project,
  ProjectCreate,
  ServiceAccount,
  ServiceAccountCreateRequest,
  ServiceAccountCreateResponse,
  Tag,
  TagCreate,
  TagUpdate,
  Template,
  TemplateCreate,
  TemplatePreview,
  TemplateTimeline,
  User,
  Value,
  ValueCreate
} from './data-contracts'

export namespace Api {
  /**
   * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   * @tags api
   * @name ApiSchemaRetrieve
   * @request GET:/api/schema/
   * @secure
   * @response `200` `Record<string, any>`
   */
  export namespace ApiSchemaRetrieve {
    export type RequestParams = {}
    export type RequestQuery = {
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
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Record<string, any>
  }

  /**
   * @description A searchable log of all the actions taken by users and service accounts within the organization.
   * @tags audit
   * @name AuditList
   * @request GET:/api/v1/audit/
   * @secure
   * @response `200` `PaginatedAuditTrailList`
   */
  export namespace AuditList {
    export type RequestParams = {}
    export type RequestQuery = {
      action?: 'create' | 'delete' | 'pull' | 'push' | 'update'
      earliest?: string
      environment_id?: string
      latest?: string
      object_id?: string
      object_type?: string
      ordering?: string
      page?: number
      page_size?: number
      parameter_id?: string
      project_id?: string
      user_id?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAuditTrailList
  }

  /**
   * @description Retrieve one record from the audit log.
   * @tags audit
   * @name AuditRetrieve
   * @request GET:/api/v1/audit/{id}/
   * @secure
   * @response `200` `AuditTrail`
   */
  export namespace AuditRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AuditTrail
  }

  /**
   * @description Summary information about the organization's audit trail.
   * @tags audit
   * @name AuditSummaryRetrieve
   * @request GET:/api/v1/audit/summary/
   * @secure
   * @response `200` `AuditTrailSummary`
   */
  export namespace AuditSummaryRetrieve {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AuditTrailSummary
  }

  /**
   * No description
   * @tags backup
   * @name BackupSnapshotCreate
   * @summary Get a snapshot of all Projects with parameters
   * @request POST:/api/v1/backup/snapshot/
   * @secure
   * @response `200` `BackupDataSnapshot`
   */
  export namespace BackupSnapshotCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = BackupDataSnapshot
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsList
   * @request GET:/api/v1/environments/
   * @secure
   * @response `200` `PaginatedEnvironmentList`
   */
  export namespace EnvironmentsList {
    export type RequestParams = {}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
      parent__name?: string
      parent__name__icontains?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedEnvironmentList
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsCreate
   * @request POST:/api/v1/environments/
   * @secure
   * @response `201` `Environment`
   */
  export namespace EnvironmentsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = EnvironmentCreate
    export type RequestHeaders = {}
    export type ResponseBody = Environment
  }

  /**
   * @description The push operations that this environment was involved in.
   * @tags environments
   * @name EnvironmentsPushesList
   * @summary List push operations.
   * @request GET:/api/v1/environments/{environment_pk}/pushes/
   * @secure
   * @response `200` `PaginatedTaskStepList`
   */
  export namespace EnvironmentsPushesList {
    export type RequestParams = {environmentPk: string}
    export type RequestQuery = {ordering?: string; page?: number; page_size?: number}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedTaskStepList
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsList
   * @request GET:/api/v1/environments/{environment_pk}/tags/
   * @secure
   * @response `200` `PaginatedTagList`
   */
  export namespace EnvironmentsTagsList {
    export type RequestParams = {environmentPk: string}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
      timestamp?: string
      timestamp__gte?: string
      timestamp__lte?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedTagList
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsCreate
   * @request POST:/api/v1/environments/{environment_pk}/tags/
   * @secure
   * @response `201` `Tag`
   */
  export namespace EnvironmentsTagsCreate {
    export type RequestParams = {environmentPk: string}
    export type RequestQuery = {}
    export type RequestBody = TagCreate
    export type RequestHeaders = {}
    export type ResponseBody = Tag
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsRetrieve
   * @request GET:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `Tag`
   */
  export namespace EnvironmentsTagsRetrieve {
    export type RequestParams = {environmentPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Tag
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsUpdate
   * @request PUT:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `TagUpdate`
   */
  export namespace EnvironmentsTagsUpdate {
    export type RequestParams = {environmentPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = TagUpdate
    export type RequestHeaders = {}
    export type ResponseBody = TagUpdate
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsPartialUpdate
   * @request PATCH:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `TagUpdate`
   */
  export namespace EnvironmentsTagsPartialUpdate {
    export type RequestParams = {environmentPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedTagUpdate
    export type RequestHeaders = {}
    export type ResponseBody = TagUpdate
  }

  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option however they are mutually exclusive.
   * @tags environments
   * @name EnvironmentsTagsDestroy
   * @request DELETE:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace EnvironmentsTagsDestroy {
    export type RequestParams = {environmentPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsRetrieve
   * @request GET:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  export namespace EnvironmentsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Environment
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsUpdate
   * @request PUT:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  export namespace EnvironmentsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Environment
    export type RequestHeaders = {}
    export type ResponseBody = Environment
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsPartialUpdate
   * @request PATCH:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  export namespace EnvironmentsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedEnvironment
    export type RequestHeaders = {}
    export type ResponseBody = Environment
  }

  /**
   * No description
   * @tags environments
   * @name EnvironmentsDestroy
   * @request DELETE:/api/v1/environments/{id}/
   * @secure
   * @response `204` `void` Environment destroyed.
   * @response `409` `void` The environment has children and cannot be removed.
   */
  export namespace EnvironmentsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsList
   * @request GET:/api/v1/grants/
   * @secure
   * @response `200` `PaginatedGrantList`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsList {
    export type RequestParams = {}
    export type RequestQuery = {
      ordering?: string
      page?: number
      page_size?: number
      principal?: string
      role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'
      scope?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedGrantList
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsCreate
   * @request POST:/api/v1/grants/
   * @secure
   * @response `201` `Grant`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = Grant
    export type RequestHeaders = {}
    export type ResponseBody = Grant
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsRetrieve
   * @request GET:/api/v1/grants/{id}/
   * @secure
   * @response `200` `Grant`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Grant
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsUpdate
   * @request PUT:/api/v1/grants/{id}/
   * @secure
   * @response `200` `Grant`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Grant
    export type RequestHeaders = {}
    export type ResponseBody = Grant
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsPartialUpdate
   * @request PATCH:/api/v1/grants/{id}/
   * @secure
   * @response `200` `Grant`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedGrant
    export type RequestHeaders = {}
    export type ResponseBody = Grant
  }

  /**
   * @description Grants allow you to enable access control on Environments and Projects. Grants are part of the role-based access control feature set, so if your subscription does not have support for it, these paths will return a 403 Forbidden error.
   * @tags grants
   * @name GrantsDestroy
   * @request DELETE:/api/v1/grants/{id}/
   * @secure
   * @response `204` `void` Deleted.
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Removes grants matching the query parameters atomically. Use this technique to disable access control on a scope, or remove all grants for a user.
   * @tags grants
   * @name GrantsMultiDestroy
   * @request DELETE:/api/v1/grants/multi/
   * @secure
   * @response `200` `Grant`
   * @response `403` `void` Forbidden: see response for further details.
   */
  export namespace GrantsMultiDestroy {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Grant
  }

  /**
   * @description Import parameters from the provided data.
   * @tags import
   * @name ImportCreate
   * @request POST:/api/v1/import/
   * @secure
   * @response `201` `ImportCreateResponse`
   */
  export namespace ImportCreate {
    export type RequestParams = {}
    export type RequestQuery = {mask_secrets?: boolean; preview?: boolean}
    export type RequestBody = ImportCreateRequest
    export type RequestHeaders = {}
    export type ResponseBody = ImportCreateResponse
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsList
   * @request GET:/api/v1/integrations/aws/
   * @secure
   * @response `200` `PaginatedAwsIntegrationList`
   */
  export namespace IntegrationsAwsList {
    export type RequestParams = {}
    export type RequestQuery = {
      aws_account_id?: string
      aws_role_name?: string
      ordering?: string
      page?: number
      page_size?: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsIntegrationList
  }

  /**
   * @description ### Description ### Establishes an AWS Integration for your CloudTruth organization. ### Pre-Conditions ### - An AWS Integration for the account and role cannot already exist. ### Post-Conditions ### - You must establish an IAM role and trust relationship based on the Role Name and the External ID.
   * @tags integrations
   * @name IntegrationsAwsCreate
   * @summary Establishes an AWS Integration.
   * @request POST:/api/v1/integrations/aws/
   * @secure
   * @response `201` `AwsIntegration`
   */
  export namespace IntegrationsAwsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = AwsIntegrationCreate
    export type RequestHeaders = {}
    export type ResponseBody = AwsIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/
   * @secure
   * @response `200` `PaginatedAwsPullList`
   */
  export namespace IntegrationsAwsPullsList {
    export type RequestParams = {awsintegrationPk: string}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPullList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsCreate
   * @request POST:/api/v1/integrations/aws/{awsintegration_pk}/pulls/
   * @secure
   * @response `201` `AwsPull`
   */
  export namespace IntegrationsAwsPullsCreate {
    export type RequestParams = {awsintegrationPk: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPull
    export type RequestHeaders = {}
    export type ResponseBody = AwsPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsTasksList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{awspull_pk}/tasks/
   * @secure
   * @response `200` `PaginatedAwsPullTaskList`
   */
  export namespace IntegrationsAwsPullsTasksList {
    export type RequestParams = {awsintegrationPk: string; awspullPk: string}
    export type RequestQuery = {
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      ordering?: string
      page?: number
      page_size?: number
      state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPullTaskList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsTasksStepsList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{awspull_pk}/tasks/{awspulltask_pk}/steps/
   * @secure
   * @response `200` `PaginatedAwsPullTaskStepList`
   */
  export namespace IntegrationsAwsPullsTasksStepsList {
    export type RequestParams = {awsintegrationPk: string; awspullPk: string; awspulltaskPk: string}
    export type RequestQuery = {
      fqn?: string
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      operation?: 'create' | 'delete' | 'read' | 'update' | null
      ordering?: string
      page?: number
      page_size?: number
      success?: boolean
      venue_id?: string
      venue_id__icontains?: string
      venue_name?: string
      venue_name__icontains?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPullTaskStepList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsTasksStepsRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{awspull_pk}/tasks/{awspulltask_pk}/steps/{id}/
   * @secure
   * @response `200` `AwsPullTaskStep`
   */
  export namespace IntegrationsAwsPullsTasksStepsRetrieve {
    export type RequestParams = {awsintegrationPk: string; awspullPk: string; awspulltaskPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPullTaskStep
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsTasksRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{awspull_pk}/tasks/{id}/
   * @secure
   * @response `200` `AwsPullTask`
   */
  export namespace IntegrationsAwsPullsTasksRetrieve {
    export type RequestParams = {awsintegrationPk: string; awspullPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPullTask
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `AwsPull`
   */
  export namespace IntegrationsAwsPullsRetrieve {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsUpdate
   * @request PUT:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `AwsPull`
   */
  export namespace IntegrationsAwsPullsUpdate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPull
    export type RequestHeaders = {}
    export type ResponseBody = AwsPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsPartialUpdate
   * @request PATCH:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `AwsPull`
   */
  export namespace IntegrationsAwsPullsPartialUpdate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedAwsPull
    export type RequestHeaders = {}
    export type ResponseBody = AwsPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPullsDestroy
   * @request DELETE:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{id}/
   * @secure
   * @response `403` `void` Cannot destroy innate mapped pull of a data integration.
   */
  export namespace IntegrationsAwsPullsDestroy {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = any
  }

  /**
   * @description Enqueue a pull synchronization task for mapped external values accessible with this integration.
   * @tags integrations
   * @name IntegrationsAwsPullsSyncCreate
   * @request POST:/api/v1/integrations/aws/{awsintegration_pk}/pulls/{id}/sync/
   * @secure
   * @response `202` `void` Synchronization task enqueued.
   */
  export namespace IntegrationsAwsPullsSyncCreate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPullSyncActionRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/
   * @secure
   * @response `200` `PaginatedAwsPushList`
   */
  export namespace IntegrationsAwsPushesList {
    export type RequestParams = {awsintegrationPk: string}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPushList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesCreate
   * @request POST:/api/v1/integrations/aws/{awsintegration_pk}/pushes/
   * @secure
   * @response `201` `AwsPush`
   */
  export namespace IntegrationsAwsPushesCreate {
    export type RequestParams = {awsintegrationPk: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPush
    export type RequestHeaders = {}
    export type ResponseBody = AwsPush
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesTasksList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{awspush_pk}/tasks/
   * @secure
   * @response `200` `PaginatedAwsPushTaskList`
   */
  export namespace IntegrationsAwsPushesTasksList {
    export type RequestParams = {awsintegrationPk: string; awspushPk: string}
    export type RequestQuery = {
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      ordering?: string
      page?: number
      page_size?: number
      state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPushTaskList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesTasksStepsList
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{awspush_pk}/tasks/{awspushtask_pk}/steps/
   * @secure
   * @response `200` `PaginatedAwsPushTaskStepList`
   */
  export namespace IntegrationsAwsPushesTasksStepsList {
    export type RequestParams = {awsintegrationPk: string; awspushPk: string; awspushtaskPk: string}
    export type RequestQuery = {
      fqn?: string
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      operation?: 'create' | 'delete' | 'read' | 'update' | null
      ordering?: string
      page?: number
      page_size?: number
      success?: boolean
      venue_id?: string
      venue_id__icontains?: string
      venue_name?: string
      venue_name__icontains?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedAwsPushTaskStepList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesTasksStepsRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{awspush_pk}/tasks/{awspushtask_pk}/steps/{id}/
   * @secure
   * @response `200` `AwsPushTaskStep`
   */
  export namespace IntegrationsAwsPushesTasksStepsRetrieve {
    export type RequestParams = {awsintegrationPk: string; awspushPk: string; awspushtaskPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPushTaskStep
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesTasksRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{awspush_pk}/tasks/{id}/
   * @secure
   * @response `200` `AwsPushTask`
   */
  export namespace IntegrationsAwsPushesTasksRetrieve {
    export type RequestParams = {awsintegrationPk: string; awspushPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPushTask
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesRetrieve
   * @request GET:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{id}/
   * @secure
   * @response `200` `AwsPush`
   */
  export namespace IntegrationsAwsPushesRetrieve {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsPush
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesUpdate
   * @request PUT:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{id}/
   * @secure
   * @response `200` `AwsPushUpdate`
   */
  export namespace IntegrationsAwsPushesUpdate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPushUpdate
    export type RequestHeaders = {}
    export type ResponseBody = AwsPushUpdate
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesPartialUpdate
   * @request PATCH:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{id}/
   * @secure
   * @response `200` `AwsPushUpdate`
   */
  export namespace IntegrationsAwsPushesPartialUpdate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedAwsPushUpdate
    export type RequestHeaders = {}
    export type ResponseBody = AwsPushUpdate
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPushesDestroy
   * @request DELETE:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace IntegrationsAwsPushesDestroy {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Enqueue a push synchronization task.
   * @tags integrations
   * @name IntegrationsAwsPushesSyncCreate
   * @request POST:/api/v1/integrations/aws/{awsintegration_pk}/pushes/{id}/sync/
   * @secure
   * @response `202` `void` Synchronization task enqueued.
   */
  export namespace IntegrationsAwsPushesSyncCreate {
    export type RequestParams = {awsintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsPush
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsRetrieve
   * @summary Get details of an AWS Integration.
   * @request GET:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  export namespace IntegrationsAwsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {refresh_status?: boolean}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = AwsIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsUpdate
   * @request PUT:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  export namespace IntegrationsAwsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsIntegration
    export type RequestHeaders = {}
    export type ResponseBody = AwsIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsPartialUpdate
   * @request PATCH:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  export namespace IntegrationsAwsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedAwsIntegration
    export type RequestHeaders = {}
    export type ResponseBody = AwsIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsAwsDestroy
   * @summary Delete an AWS integration.
   * @request DELETE:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `204` `void` Integration removed.
   * @response `409` `void` The integration is used by one (or more) Value(s) and cannot be removed.
   */
  export namespace IntegrationsAwsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {in_use?: 'fail' | 'leave' | 'remove'}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Probe a region and service using a pattern matching string that can be used in pull actions.  This allows the pattern match to be checked for correctness and preview what will match during creation of the string.
   * @tags integrations
   * @name IntegrationsAwsScanCreate
   * @summary Evaluate a potential pull pattern and understand what it will match.
   * @request POST:/api/v1/integrations/aws/{id}/scan/
   * @secure
   * @response `200` `DiscoveryResult`
   */
  export namespace IntegrationsAwsScanCreate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = AwsIntegrationScan
    export type RequestHeaders = {}
    export type ResponseBody = DiscoveryResult
  }

  /**
   * @description ### Description ### Queries a third-party integration to retrieve the data specified by the FQN. You can start exploring by not specifying an 'fqn', which will return a list of FQNs for the existing third-party integrations. Third-party integrations can be configured via the Integrations section of the web application.
   * @tags integrations
   * @name IntegrationsExploreList
   * @summary Retrieve third-party integration data for the specified FQN.
   * @request GET:/api/v1/integrations/explore/
   * @secure
   * @response `200` `PaginatedIntegrationNodeList` The content at the FQN.
   * @response `400` `void` Invalid FQN requested.
   * @response `403` `void` Unable to contact the third-party integration.
   * @response `415` `void` Unsupported content type (usually this means it is binary).
   * @response `507` `void` Content exceeds internal size limit of 1MB.
   */
  export namespace IntegrationsExploreList {
    export type RequestParams = {}
    export type RequestQuery = {fqn?: string; jmes?: string; ordering?: string; page?: number; page_size?: number}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedIntegrationNodeList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubList
   * @request GET:/api/v1/integrations/github/
   * @secure
   * @response `200` `PaginatedGitHubIntegrationList`
   */
  export namespace IntegrationsGithubList {
    export type RequestParams = {}
    export type RequestQuery = {gh_organization_slug?: string; ordering?: string; page?: number; page_size?: number}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedGitHubIntegrationList
  }

  /**
   * @description ### Description ### Establishes a GitHub Integration in your CloudTruth organization. ### Pre-Conditions ### - The user must be an Administrator or Owner of your organization. - A GitHub Integration with the `installation_id` cannot already exist in this organization. - The user must first install the CloudTruth GitHub Application in their GitHub organization and obtain the `installation_id` of the application in order to create the integration. ### Initiating the GitHub Application Installation ### - Go to `https://github.com/apps/GITHUB_APP_NAME/installations/new?state=<bearer_token>` - On successful installation the browser will return to `https://APP_URL/app_setup/github` (configured in ctops/bin/github*) and provide the `installation_id` in the URI. - POST to this api to verify and establish the integration.
   * @tags integrations
   * @name IntegrationsGithubCreate
   * @summary Establishes a GitHub Integration.
   * @request POST:/api/v1/integrations/github/
   * @secure
   * @response `201` `GitHubIntegration`
   */
  export namespace IntegrationsGithubCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = GitHubIntegrationCreate
    export type RequestHeaders = {}
    export type ResponseBody = GitHubIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsList
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/
   * @secure
   * @response `200` `PaginatedGitHubPullList`
   */
  export namespace IntegrationsGithubPullsList {
    export type RequestParams = {githubintegrationPk: string}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedGitHubPullList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsTasksList
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/{githubpull_pk}/tasks/
   * @secure
   * @response `200` `PaginatedGitHubPullTaskList`
   */
  export namespace IntegrationsGithubPullsTasksList {
    export type RequestParams = {githubintegrationPk: string; githubpullPk: string}
    export type RequestQuery = {
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      ordering?: string
      page?: number
      page_size?: number
      state?: 'failure' | 'queued' | 'running' | 'skipped' | 'success'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedGitHubPullTaskList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsTasksStepsList
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/{githubpull_pk}/tasks/{githubpulltask_pk}/steps/
   * @secure
   * @response `200` `PaginatedGitHubPullTaskStepList`
   */
  export namespace IntegrationsGithubPullsTasksStepsList {
    export type RequestParams = {githubintegrationPk: string; githubpullPk: string; githubpulltaskPk: string}
    export type RequestQuery = {
      fqn?: string
      modified_at?: string
      modified_at__gte?: string
      modified_at__lte?: string
      operation?: 'create' | 'delete' | 'read' | 'update' | null
      ordering?: string
      page?: number
      page_size?: number
      success?: boolean
      venue_id?: string
      venue_id__icontains?: string
      venue_name?: string
      venue_name__icontains?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedGitHubPullTaskStepList
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsTasksStepsRetrieve
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/{githubpull_pk}/tasks/{githubpulltask_pk}/steps/{id}/
   * @secure
   * @response `200` `GitHubPullTaskStep`
   */
  export namespace IntegrationsGithubPullsTasksStepsRetrieve {
    export type RequestParams = {
      githubintegrationPk: string
      githubpullPk: string
      githubpulltaskPk: string
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GitHubPullTaskStep
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsTasksRetrieve
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/{githubpull_pk}/tasks/{id}/
   * @secure
   * @response `200` `GitHubPullTask`
   */
  export namespace IntegrationsGithubPullsTasksRetrieve {
    export type RequestParams = {githubintegrationPk: string; githubpullPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GitHubPullTask
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsRetrieve
   * @request GET:/api/v1/integrations/github/{githubintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `GitHubPull`
   */
  export namespace IntegrationsGithubPullsRetrieve {
    export type RequestParams = {githubintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GitHubPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsUpdate
   * @request PUT:/api/v1/integrations/github/{githubintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `GitHubPull`
   */
  export namespace IntegrationsGithubPullsUpdate {
    export type RequestParams = {githubintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = GitHubPull
    export type RequestHeaders = {}
    export type ResponseBody = GitHubPull
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubPullsPartialUpdate
   * @request PATCH:/api/v1/integrations/github/{githubintegration_pk}/pulls/{id}/
   * @secure
   * @response `200` `GitHubPull`
   */
  export namespace IntegrationsGithubPullsPartialUpdate {
    export type RequestParams = {githubintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedGitHubPull
    export type RequestHeaders = {}
    export type ResponseBody = GitHubPull
  }

  /**
   * @description Enqueue a pull synchronization task for mapped external values accessible with this integration.
   * @tags integrations
   * @name IntegrationsGithubPullsSyncCreate
   * @request POST:/api/v1/integrations/github/{githubintegration_pk}/pulls/{id}/sync/
   * @secure
   * @response `202` `void` Synchronization task enqueued.
   */
  export namespace IntegrationsGithubPullsSyncCreate {
    export type RequestParams = {githubintegrationPk: string; id: string}
    export type RequestQuery = {}
    export type RequestBody = GitHubPull
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubRetrieve
   * @summary Get details of a GitHub Integration.
   * @request GET:/api/v1/integrations/github/{id}/
   * @secure
   * @response `200` `GitHubIntegration`
   */
  export namespace IntegrationsGithubRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {refresh_status?: boolean}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GitHubIntegration
  }

  /**
   * No description
   * @tags integrations
   * @name IntegrationsGithubDestroy
   * @summary Delete a GitHub integration.
   * @request DELETE:/api/v1/integrations/github/{id}/
   * @secure
   * @response `204` `void` Integration removed.
   * @response `409` `void` The integration is used by one (or more) Value(s) and cannot be removed.
   */
  export namespace IntegrationsGithubDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {in_use?: 'fail' | 'leave' | 'remove'}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags invitations
   * @name InvitationsList
   * @request GET:/api/v1/invitations/
   * @secure
   * @response `200` `PaginatedInvitationList`
   */
  export namespace InvitationsList {
    export type RequestParams = {}
    export type RequestQuery = {
      email?: string
      ordering?: string
      page?: number
      page_size?: number
      role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'
      state?: 'accepted' | 'bounced' | 'pending' | 'sent'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedInvitationList
  }

  /**
   * @description Extend an invitation for someone else to join your organization.
   * @tags invitations
   * @name InvitationsCreate
   * @summary Create an invitation.
   * @request POST:/api/v1/invitations/
   * @secure
   * @response `201` `Invitation`
   * @response `403` `void` Permission denied.  Is the invitation role more permissive than your own?
   * @response `404` `void` Bad Request.  Is there already an invitation for that email?
   */
  export namespace InvitationsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = InvitationCreate
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * No description
   * @tags invitations
   * @name InvitationsRetrieve
   * @request GET:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  export namespace InvitationsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * No description
   * @tags invitations
   * @name InvitationsUpdate
   * @request PUT:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  export namespace InvitationsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Invitation
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * No description
   * @tags invitations
   * @name InvitationsPartialUpdate
   * @request PATCH:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  export namespace InvitationsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedInvitation
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * No description
   * @tags invitations
   * @name InvitationsDestroy
   * @request DELETE:/api/v1/invitations/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace InvitationsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Accept an invitation to join an organization. The email address used to log in and accept the invitation must match the email address specified by the inviting user when creating the invitation. On success the client receives the invitation record as it was updated. The client should then regenerate the JWT with the organization scope and proceed to the default landing page.
   * @tags invitations
   * @name InvitationsAcceptCreate
   * @summary Accept an invitation.
   * @request POST:/api/v1/invitations/{id}/accept/
   * @secure
   * @response `200` `Invitation` The invitation was accepted.  The client should obtain an organization scope token and proceed to the landing page.
   * @response `403` `void` Permission denied.  The accepting user's email may not match the invitation?
   * @response `404` `void` Bad Request.  The invitation does not exist or has already been accepted?
   */
  export namespace InvitationsAcceptCreate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * @description Re-send an invitation to the recipient.
   * @tags invitations
   * @name InvitationsResendCreate
   * @summary Resend an invitation.
   * @request POST:/api/v1/invitations/{id}/resend/
   * @secure
   * @response `200` `Invitation` The invitation state was reset to `pending`, which causes it to get sent again.  The most recent state is returned.  Clients should check the state.
   * @response `404` `void` Bad Request.  Was the invitation already accepted?
   */
  export namespace InvitationsResendCreate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Invitation
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsList
   * @request GET:/api/v1/memberships/
   * @secure
   * @response `200` `PaginatedMembershipList`
   */
  export namespace MembershipsList {
    export type RequestParams = {}
    export type RequestQuery = {
      ordering?: string
      page?: number
      page_size?: number
      role?: 'ADMIN' | 'CONTRIB' | 'OWNER' | 'VIEWER'
      user?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedMembershipList
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsCreate
   * @request POST:/api/v1/memberships/
   * @secure
   * @response `201` `Membership`
   */
  export namespace MembershipsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = MembershipCreate
    export type RequestHeaders = {}
    export type ResponseBody = Membership
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsRetrieve
   * @request GET:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  export namespace MembershipsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Membership
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsUpdate
   * @request PUT:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  export namespace MembershipsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Membership
    export type RequestHeaders = {}
    export type ResponseBody = Membership
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsPartialUpdate
   * @request PATCH:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  export namespace MembershipsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedMembership
    export type RequestHeaders = {}
    export type ResponseBody = Membership
  }

  /**
   * No description
   * @tags memberships
   * @name MembershipsDestroy
   * @request DELETE:/api/v1/memberships/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace MembershipsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsList
   * @request GET:/api/v1/organizations/
   * @secure
   * @response `200` `PaginatedOrganizationList`
   */
  export namespace OrganizationsList {
    export type RequestParams = {}
    export type RequestQuery = {name?: string; ordering?: string; page?: number; page_size?: number}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedOrganizationList
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsCreate
   * @request POST:/api/v1/organizations/
   * @secure
   * @response `201` `Organization`
   */
  export namespace OrganizationsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = OrganizationCreate
    export type RequestHeaders = {}
    export type ResponseBody = Organization
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsRetrieve
   * @request GET:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  export namespace OrganizationsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Organization
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsUpdate
   * @request PUT:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  export namespace OrganizationsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Organization
    export type RequestHeaders = {}
    export type ResponseBody = Organization
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsPartialUpdate
   * @request PATCH:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  export namespace OrganizationsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedOrganization
    export type RequestHeaders = {}
    export type ResponseBody = Organization
  }

  /**
   * No description
   * @tags organizations
   * @name OrganizationsDestroy
   * @request DELETE:/api/v1/organizations/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace OrganizationsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsList
   * @request GET:/api/v1/projects/
   * @secure
   * @response `200` `PaginatedProjectList`
   */
  export namespace ProjectsList {
    export type RequestParams = {}
    export type RequestQuery = {
      description__icontains?: string
      name?: string
      name__icontains?: string
      ordering?: string
      page?: number
      page_size?: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedProjectList
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsCreate
   * @request POST:/api/v1/projects/
   * @secure
   * @response `201` `Project`
   */
  export namespace ProjectsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = ProjectCreate
    export type RequestHeaders = {}
    export type ResponseBody = Project
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsRetrieve
   * @request GET:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  export namespace ProjectsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Project
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsUpdate
   * @request PUT:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  export namespace ProjectsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = Project
    export type RequestHeaders = {}
    export type ResponseBody = Project
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsPartialUpdate
   * @request PATCH:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  export namespace ProjectsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedProject
    export type RequestHeaders = {}
    export type ResponseBody = Project
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsDestroy
   * @request DELETE:/api/v1/projects/{id}/
   * @secure
   * @response `204` `void` Project destroyed.
   * @response `409` `void` The project has dependents and cannot be removed.
   */
  export namespace ProjectsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Exports all parameters in this project in the requested format. Parameter names and values will be coerced to the proper format (e.g. for a dotenv export, my_parameter will be capitalized to MY_PARAMETER and its value will be in a quoted string).  Note that capitalization is the only name coercion that will be performed on parameter names, names that are invalid for a given format will be omitted.
   * @tags projects
   * @name ProjectsParameterExportList
   * @request GET:/api/v1/projects/{project_pk}/parameter-export/
   * @secure
   * @response `200` `ParameterExport`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsParameterExportList {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {
      as_of?: string
      contains?: string
      endswith?: string
      environment?: string
      explicit_export?: boolean
      mask_secrets?: boolean
      ordering?: string
      output?: string
      startswith?: string
      tag?: string
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterExport
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersList
   * @request GET:/api/v1/projects/{project_pk}/parameters/
   * @secure
   * @response `200` `PaginatedParameterList`
   */
  export namespace ProjectsParametersList {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {
      as_of?: string
      description__icontains?: string
      difference?: string
      environment?: string
      evaluate?: boolean
      id__in?: string[]
      mask_secrets?: boolean
      name?: string
      name__contains?: string
      name__icontains?: string
      name__iexact?: string
      name__istartswith?: string
      name__startswith?: string
      ordering?: string
      page?: number
      page_size?: number
      secret?: boolean
      tag?: string
      values?: boolean
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedParameterList
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersCreate
   * @request POST:/api/v1/projects/{project_pk}/parameters/
   * @secure
   * @response `201` `Parameter`
   */
  export namespace ProjectsParametersCreate {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterCreate
    export type RequestHeaders = {}
    export type ResponseBody = Parameter
  }

  /**
   * @description The push operations that this parameter was involved in.
   * @tags projects
   * @name ProjectsParametersPushesList
   * @summary List push operations.
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/pushes/
   * @secure
   * @response `200` `PaginatedTaskStepList`
   */
  export namespace ProjectsParametersPushesList {
    export type RequestParams = {parameterPk: string; projectPk: string}
    export type RequestQuery = {as_of?: string; ordering?: string; page?: number; page_size?: number; tag?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedTaskStepList
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesList
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/
   * @secure
   * @response `200` `PaginatedParameterRuleList`
   */
  export namespace ProjectsParametersRulesList {
    export type RequestParams = {parameterPk: string; projectPk: string}
    export type RequestQuery = {
      ordering?: string
      page?: number
      page_size?: number
      type?: 'max' | 'max_len' | 'min' | 'min_len' | 'regex'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedParameterRuleList
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesCreate
   * @request POST:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/
   * @secure
   * @response `201` `ParameterRule`
   */
  export namespace ProjectsParametersRulesCreate {
    export type RequestParams = {parameterPk: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterRuleCreate
    export type RequestHeaders = {}
    export type ResponseBody = ParameterRule
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  export namespace ProjectsParametersRulesRetrieve {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterRule
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesUpdate
   * @request PUT:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  export namespace ProjectsParametersRulesUpdate {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterRule
    export type RequestHeaders = {}
    export type ResponseBody = ParameterRule
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesPartialUpdate
   * @request PATCH:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  export namespace ProjectsParametersRulesPartialUpdate {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedParameterRule
    export type RequestHeaders = {}
    export type ResponseBody = ParameterRule
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRulesDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace ProjectsParametersRulesDestroy {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Retrieve previously set values of a parameter in one or all environments. To see all the _effective_ values for a parameter across every environment, use the Parameters API (see the `values` field).
   * @tags projects
   * @name ProjectsParametersValuesList
   * @summary Retrieve values.
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/
   * @secure
   * @response `200` `PaginatedValueList`
   */
  export namespace ProjectsParametersValuesList {
    export type RequestParams = {parameterPk: string; projectPk: string}
    export type RequestQuery = {
      as_of?: string
      environment?: string
      evaluate?: boolean
      exclude?: string
      include?: string
      mask_secrets?: boolean
      page?: number
      page_size?: number
      tag?: string
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedValueList
  }

  /**
   * @description Set the value of a parameter in an environment.
   * @tags projects
   * @name ProjectsParametersValuesCreate
   * @summary Set a value.
   * @request POST:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/
   * @secure
   * @response `201` `Value`
   */
  export namespace ProjectsParametersValuesCreate {
    export type RequestParams = {parameterPk: string; projectPk: string}
    export type RequestQuery = {evaluate?: boolean; wrap?: boolean}
    export type RequestBody = ValueCreate
    export type RequestHeaders = {}
    export type ResponseBody = Value
  }

  /**
   * @description Retrieve the value of a parameter in an environment.
   * @tags projects
   * @name ProjectsParametersValuesRetrieve
   * @summary Retrieve a value.
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  export namespace ProjectsParametersValuesRetrieve {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {
      as_of?: string
      evaluate?: boolean
      exclude?: string
      include?: string
      mask_secrets?: boolean
      tag?: string
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Value
  }

  /**
   * @description Update the value of a parameter in an environment.
   * @tags projects
   * @name ProjectsParametersValuesUpdate
   * @summary Update a value.
   * @request PUT:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  export namespace ProjectsParametersValuesUpdate {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {evaluate?: boolean; wrap?: boolean}
    export type RequestBody = Value
    export type RequestHeaders = {}
    export type ResponseBody = Value
  }

  /**
   * @description Update the value of a parameter in an environment.
   * @tags projects
   * @name ProjectsParametersValuesPartialUpdate
   * @summary Update a value.
   * @request PATCH:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  export namespace ProjectsParametersValuesPartialUpdate {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {evaluate?: boolean; wrap?: boolean}
    export type RequestBody = PatchedValue
    export type RequestHeaders = {}
    export type ResponseBody = Value
  }

  /**
   * @description Destroy the value of a parameter in an environment.
   * @tags projects
   * @name ProjectsParametersValuesDestroy
   * @summary Destroy a value.
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace ProjectsParametersValuesDestroy {
    export type RequestParams = {id: string; parameterPk: string; projectPk: string}
    export type RequestQuery = {evaluate?: boolean}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `200` `Parameter`
   */
  export namespace ProjectsParametersRetrieve {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {
      as_of?: string
      environment?: string
      evaluate?: boolean
      mask_secrets?: boolean
      tag?: string
      values?: boolean
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Parameter
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersUpdate
   * @request PUT:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `200` `Parameter`
   * @response `400` `void` While checking pre-conditions, an external value was encountered that could not be resolved.
   * @response `404` `void` The given project id could not be found, or while checking pre-conditions, an external value was encountered that could not be resolved.
   * @response `415` `void` While checking pre-conditions, an external value was encountered that has an invalid content type.
   * @response `422` `void` A pre-condition to modifying the `secret` setting of the parameter failed, for example setting `secret: false` and having an external value that resolves to a value that is a secret.  In this case it would be unsafe to allow the `secret` setting to change.
   * @response `507` `void` While checking pre-conditions, an external value was encountered that was too large to process.
   */
  export namespace ProjectsParametersUpdate {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = Parameter
    export type RequestHeaders = {}
    export type ResponseBody = Parameter
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersPartialUpdate
   * @request PATCH:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `200` `Parameter`
   * @response `400` `void` While checking pre-conditions, an external value was encountered that could not be resolved.
   * @response `404` `void` The given project id could not be found, or while checking pre-conditions, an external value was encountered that could not be resolved.
   * @response `415` `void` While checking pre-conditions, an external value was encountered that has an invalid content type.
   * @response `422` `void` A pre-condition to modifying the `secret` setting of the parameter failed, for example setting `secret: false` and having an external value that resolves to a value that is a secret.  In this case it would be unsafe to allow the `secret` setting to change.
   * @response `507` `void` While checking pre-conditions, an external value was encountered that was too large to process.
   */
  export namespace ProjectsParametersPartialUpdate {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedParameter
    export type RequestHeaders = {}
    export type ResponseBody = Parameter
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsParametersDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace ProjectsParametersDestroy {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Summary information about how a parameter has changed over time. The time range of historical information available depends on your subscription. Any changes to the parameter itself, including rules and values, is included.
   * @tags projects
   * @name ProjectsParametersTimelineRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{id}/timeline/
   * @secure
   * @response `200` `ParameterTimeline`
   */
  export namespace ProjectsParametersTimelineRetrieve {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {as_of?: string; tag?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTimeline
  }

  /**
   * @description Retrieve parameters at dual timepoints for comparison. Results are aligned by parameter name.  This means if a parameter is created, then deleted, then created again with the same name the two records with different parameter IDs will show up in the same result entry. If t1 is not specified then it will point to a time in the past where nothing existed.  If t2 is not specified then it is assumed to be "now".
   * @tags projects
   * @name ProjectsParametersDualityList
   * @request GET:/api/v1/projects/{project_pk}/parameters/duality/
   * @secure
   * @response `200` `PaginatedParameterDualityList`
   */
  export namespace ProjectsParametersDualityList {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {
      difference?: boolean
      environment?: string
      evaluate?: boolean
      mask_secrets?: boolean
      name?: string
      name__contains?: string
      name__icontains?: string
      name__iexact?: string
      name__istartswith?: string
      name__startswith?: string
      ordering?: string
      page?: number
      page_size?: number
      secret?: boolean
      t1_as_of?: string
      t1_tag?: string
      t2_as_of?: string
      t2_tag?: string
      values?: boolean
      wrap?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedParameterDualityList
  }

  /**
   * @description Information about how the parameters of a project have changed over time. The time range of historical information available depends on your subscription. Any changes to the project's parameters, including rules and values, is included.
   * @tags projects
   * @name ProjectsParametersTimelinesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/timelines/
   * @secure
   * @response `200` `ParameterTimeline`
   */
  export namespace ProjectsParametersTimelinesRetrieve {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {as_of?: string; tag?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTimeline
  }

  /**
   * @description Endpoint for previewing a template.  Post the template content in the request body.
   * @tags projects
   * @name ProjectsTemplatePreviewCreate
   * @request POST:/api/v1/projects/{project_pk}/template-preview/
   * @secure
   * @response `200` `TemplatePreview`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatePreviewCreate {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {
      as_of?: string
      environment?: string
      mask_secrets?: boolean
      tag?: string
      template?: string
    }
    export type RequestBody = TemplatePreview
    export type RequestHeaders = {}
    export type ResponseBody = TemplatePreview
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesList
   * @request GET:/api/v1/projects/{project_pk}/templates/
   * @secure
   * @response `200` `PaginatedTemplateList`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatesList {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {
      as_of?: string
      environment?: string
      evaluate?: boolean
      mask_secrets?: boolean
      name?: string
      ordering?: string
      page?: number
      page_size?: number
      tag?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedTemplateList
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesCreate
   * @request POST:/api/v1/projects/{project_pk}/templates/
   * @secure
   * @response `201` `Template`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatesCreate {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = TemplateCreate
    export type RequestHeaders = {}
    export type ResponseBody = Template
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatesRetrieve {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {
      as_of?: string
      environment?: string
      evaluate?: boolean
      mask_secrets?: boolean
      tag?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Template
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesUpdate
   * @request PUT:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatesUpdate {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = Template
    export type RequestHeaders = {}
    export type ResponseBody = Template
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesPartialUpdate
   * @request PATCH:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  export namespace ProjectsTemplatesPartialUpdate {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedTemplate
    export type RequestHeaders = {}
    export type ResponseBody = Template
  }

  /**
   * No description
   * @tags projects
   * @name ProjectsTemplatesDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `204` `void` Template destroyed.
   * @response `409` `void` The template is referenced by another template or value and cannot be removed.
   */
  export namespace ProjectsTemplatesDestroy {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Information about how a template has changed over time. The time range of historical information available depends on your subscription. Any changes to the template itself is included.
   * @tags projects
   * @name ProjectsTemplatesTimelineRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/{id}/timeline/
   * @secure
   * @response `200` `TemplateTimeline`
   */
  export namespace ProjectsTemplatesTimelineRetrieve {
    export type RequestParams = {id: string; projectPk: string}
    export type RequestQuery = {as_of?: string; environment?: string; tag?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = TemplateTimeline
  }

  /**
   * @description Information about how the templates of a project have changed over time. The time range of historical information available depends on your subscription. Any changes to the project's templates is included.
   * @tags projects
   * @name ProjectsTemplatesTimelinesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/timelines/
   * @secure
   * @response `200` `TemplateTimeline`
   */
  export namespace ProjectsTemplatesTimelinesRetrieve {
    export type RequestParams = {projectPk: string}
    export type RequestQuery = {as_of?: string; environment?: string; tag?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = TemplateTimeline
  }

  /**
   * No description
   * @tags serviceaccounts
   * @name ServiceaccountsList
   * @request GET:/api/v1/serviceaccounts/
   * @secure
   * @response `200` `PaginatedServiceAccountList`
   */
  export namespace ServiceaccountsList {
    export type RequestParams = {}
    export type RequestQuery = {ordering?: string; page?: number; page_size?: number}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedServiceAccountList
  }

  /**
   * @description Creates a new ServiceAccount.  A ServiceAccount is a user record intended for machine use (such as a build system).  It does not have a username/password but is instead accessed using an API key. On creation, the API key will be returned.  This key will only be shown once, is not stored on any CloudTruth system, and should be treated as a secret.  Should the key be lost, you will need to delete and recreate the ServiceAccount in order to generate a new API key.
   * @tags serviceaccounts
   * @name ServiceaccountsCreate
   * @summary Create a ServiceAccount user.
   * @request POST:/api/v1/serviceaccounts/
   * @secure
   * @response `201` `ServiceAccountCreateResponse`
   */
  export namespace ServiceaccountsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = ServiceAccountCreateRequest
    export type RequestHeaders = {}
    export type ResponseBody = ServiceAccountCreateResponse
  }

  /**
   * No description
   * @tags serviceaccounts
   * @name ServiceaccountsRetrieve
   * @request GET:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  export namespace ServiceaccountsRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ServiceAccount
  }

  /**
   * No description
   * @tags serviceaccounts
   * @name ServiceaccountsUpdate
   * @request PUT:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  export namespace ServiceaccountsUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = ServiceAccount
    export type RequestHeaders = {}
    export type ResponseBody = ServiceAccount
  }

  /**
   * No description
   * @tags serviceaccounts
   * @name ServiceaccountsPartialUpdate
   * @request PATCH:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  export namespace ServiceaccountsPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedServiceAccount
    export type RequestHeaders = {}
    export type ResponseBody = ServiceAccount
  }

  /**
   * No description
   * @tags serviceaccounts
   * @name ServiceaccountsDestroy
   * @request DELETE:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace ServiceaccountsDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags types
   * @name TypesList
   * @request GET:/api/v1/types/
   * @secure
   * @response `200` `PaginatedParameterTypeList`
   */
  export namespace TypesList {
    export type RequestParams = {}
    export type RequestQuery = {
      description__icontains?: string
      name__icontains?: string
      name__iexact?: string
      ordering?: string
      page?: number
      page_size?: number
      parent__name__icontains?: string
      parent__name__iexact?: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedParameterTypeList
  }

  /**
   * No description
   * @tags types
   * @name TypesCreate
   * @request POST:/api/v1/types/
   * @secure
   * @response `201` `ParameterType`
   */
  export namespace TypesCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = ParameterTypeCreate
    export type RequestHeaders = {}
    export type ResponseBody = ParameterType
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesList
   * @request GET:/api/v1/types/{parametertype_pk}/rules/
   * @secure
   * @response `200` `PaginatedParameterTypeRuleList`
   */
  export namespace TypesRulesList {
    export type RequestParams = {parametertypePk: string}
    export type RequestQuery = {
      ordering?: string
      page?: number
      page_size?: number
      type?: 'max' | 'max_len' | 'min' | 'min_len' | 'regex'
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedParameterTypeRuleList
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesCreate
   * @request POST:/api/v1/types/{parametertype_pk}/rules/
   * @secure
   * @response `201` `ParameterTypeRule`
   */
  export namespace TypesRulesCreate {
    export type RequestParams = {parametertypePk: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterTypeRuleCreate
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTypeRule
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesRetrieve
   * @request GET:/api/v1/types/{parametertype_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterTypeRule`
   */
  export namespace TypesRulesRetrieve {
    export type RequestParams = {id: string; parametertypePk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTypeRule
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesUpdate
   * @request PUT:/api/v1/types/{parametertype_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterTypeRule`
   */
  export namespace TypesRulesUpdate {
    export type RequestParams = {id: string; parametertypePk: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterTypeRule
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTypeRule
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesPartialUpdate
   * @request PATCH:/api/v1/types/{parametertype_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterTypeRule`
   */
  export namespace TypesRulesPartialUpdate {
    export type RequestParams = {id: string; parametertypePk: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedParameterTypeRule
    export type RequestHeaders = {}
    export type ResponseBody = ParameterTypeRule
  }

  /**
   * No description
   * @tags types
   * @name TypesRulesDestroy
   * @request DELETE:/api/v1/types/{parametertype_pk}/rules/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace TypesRulesDestroy {
    export type RequestParams = {id: string; parametertypePk: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags types
   * @name TypesRetrieve
   * @request GET:/api/v1/types/{id}/
   * @secure
   * @response `200` `ParameterType`
   */
  export namespace TypesRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = ParameterType
  }

  /**
   * No description
   * @tags types
   * @name TypesUpdate
   * @request PUT:/api/v1/types/{id}/
   * @secure
   * @response `200` `ParameterType`
   */
  export namespace TypesUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = ParameterType
    export type RequestHeaders = {}
    export type ResponseBody = ParameterType
  }

  /**
   * No description
   * @tags types
   * @name TypesPartialUpdate
   * @request PATCH:/api/v1/types/{id}/
   * @secure
   * @response `200` `ParameterType`
   */
  export namespace TypesPartialUpdate {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = PatchedParameterType
    export type RequestHeaders = {}
    export type ResponseBody = ParameterType
  }

  /**
   * No description
   * @tags types
   * @name TypesDestroy
   * @request DELETE:/api/v1/types/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  export namespace TypesDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags users
   * @name UsersList
   * @request GET:/api/v1/users/
   * @secure
   * @response `200` `PaginatedUserList`
   */
  export namespace UsersList {
    export type RequestParams = {}
    export type RequestQuery = {ordering?: string; page?: number; page_size?: number; type?: string}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = PaginatedUserList
  }

  /**
   * No description
   * @tags users
   * @name UsersRetrieve
   * @request GET:/api/v1/users/{id}/
   * @secure
   * @response `200` `User`
   */
  export namespace UsersRetrieve {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = User
  }

  /**
   * @description ### Description ### Delete the specified user.  This removes all access the User may have to any Organization. ### Pre-Conditions ### - The user cannot be the only owner of any Organization. - The bearer token must belong to the user being deleted. - All of the memberships related to the User will be deleted, so all the membership deletion pre-conditions must also be met.
   * @tags users
   * @name UsersDestroy
   * @summary Delete the specified user.
   * @request DELETE:/api/v1/users/{id}/
   * @secure
   * @response `204` `void` User deleted. The client should behave as if the user logged out.
   * @response `400` `void` Bad Request - Is the user the only owner of any organization? - Were all required fields provided?
   * @response `403` `void` Forbidden - Did the Bearer token belong to the User being deleted?
   */
  export namespace UsersDestroy {
    export type RequestParams = {id: string}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description Get user information about the current user.
   * @tags users
   * @name UsersCurrentRetrieve
   * @summary Current user information
   * @request GET:/api/v1/users/current/
   * @secure
   * @response `200` `User` User information
   */
  export namespace UsersCurrentRetrieve {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = User
  }

  /**
   * @description Endpoint for accessing utility functions
   * @tags utils
   * @name UtilsGeneratePasswordCreate
   * @summary Get a randomly generated password using AWS Secrets Manager, with fallback to /dev/urandom.
   * @request POST:/api/v1/utils/generate_password/
   * @secure
   * @response `201` `GeneratedPasswordResponse`
   */
  export namespace UtilsGeneratePasswordCreate {
    export type RequestParams = {}
    export type RequestQuery = {
      length: number
      require_hardware_generation?: boolean
      require_lowercase?: boolean
      require_numbers?: boolean
      require_spaces?: boolean
      require_symbols?: boolean
      require_uppercase?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GeneratedPasswordResponse
  }
}
