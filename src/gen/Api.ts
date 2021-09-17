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
  ApiSchemaRetrieveParams,
  AuditListParams,
  AuditTrail,
  AuditTrailSummary,
  AwsIntegration,
  AwsIntegrationCreate,
  Environment,
  EnvironmentCreate,
  EnvironmentsListParams,
  EnvironmentsTagsListParams,
  GitHubIntegration,
  GitHubIntegrationCreate,
  IntegrationsAwsDestroyParams,
  IntegrationsAwsListParams,
  IntegrationsAwsRetrieveParams,
  IntegrationsExploreListParams,
  IntegrationsGithubDestroyParams,
  IntegrationsGithubListParams,
  IntegrationsGithubRetrieveParams,
  Invitation,
  InvitationCreate,
  InvitationsListParams,
  Membership,
  MembershipCreate,
  MembershipsListParams,
  Organization,
  OrganizationCreate,
  OrganizationsListParams,
  PaginatedAuditTrailList,
  PaginatedAwsIntegrationList,
  PaginatedEnvironmentList,
  PaginatedGitHubIntegrationList,
  PaginatedIntegrationExplorerList,
  PaginatedInvitationList,
  PaginatedMembershipList,
  PaginatedOrganizationList,
  PaginatedParameterList,
  PaginatedParameterRuleList,
  PaginatedProjectList,
  PaginatedServiceAccountList,
  PaginatedTagList,
  PaginatedTemplateList,
  PaginatedUserList,
  PaginatedValueList,
  Parameter,
  ParameterCreate,
  ParameterExport,
  ParameterRule,
  ParameterRuleCreate,
  ParameterTimeline,
  PatchedAwsIntegration,
  PatchedEnvironment,
  PatchedInvitation,
  PatchedMembership,
  PatchedOrganization,
  PatchedParameter,
  PatchedParameterRule,
  PatchedProject,
  PatchedServiceAccount,
  PatchedTag,
  PatchedTemplate,
  PatchedValue,
  Project,
  ProjectCreate,
  ProjectsListParams,
  ProjectsParameterExportListParams,
  ProjectsParametersListParams,
  ProjectsParametersRetrieveParams,
  ProjectsParametersRulesListParams,
  ProjectsParametersTimelineRetrieveParams,
  ProjectsParametersTimelinesRetrieveParams,
  ProjectsParametersValuesCreateParams,
  ProjectsParametersValuesListParams,
  ProjectsParametersValuesPartialUpdateParams,
  ProjectsParametersValuesRetrieveParams,
  ProjectsParametersValuesUpdateParams,
  ProjectsTemplatePreviewCreateParams,
  ProjectsTemplatesListParams,
  ProjectsTemplatesRetrieveParams,
  ProjectsTemplatesTimelineRetrieveParams,
  ProjectsTemplatesTimelinesRetrieveParams,
  ServiceAccount,
  ServiceAccountCreateRequest,
  ServiceAccountCreateResponse,
  ServiceaccountsListParams,
  Tag,
  TagCreate,
  Template,
  TemplateCreate,
  TemplateLookupError,
  TemplatePreview,
  TemplateTimeline,
  User,
  UsersListParams,
  Value,
  ValueCreate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
   *
   * @tags api
   * @name ApiSchemaRetrieve
   * @request GET:/api/schema/
   * @secure
   * @response `200` `Record<string, any>`
   */
  apiSchemaRetrieve = (query: ApiSchemaRetrieveParams, params: RequestParams = {}) =>
    this.request<Record<string, any>, any>({
      path: `/api/schema/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description A searchable log of all the actions taken by users and service accounts within the organization.
   *
   * @tags audit
   * @name AuditList
   * @request GET:/api/v1/audit/
   * @secure
   * @response `200` `PaginatedAuditTrailList`
   */
  auditList = (query: AuditListParams, params: RequestParams = {}) =>
    this.request<PaginatedAuditTrailList, any>({
      path: `/api/v1/audit/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve one record from the audit log.
   *
   * @tags audit
   * @name AuditRetrieve
   * @request GET:/api/v1/audit/{id}/
   * @secure
   * @response `200` `AuditTrail`
   */
  auditRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<AuditTrail, any>({
      path: `/api/v1/audit/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Summary information about the organization's audit trail.
   *
   * @tags audit
   * @name AuditSummaryRetrieve
   * @request GET:/api/v1/audit/summary/
   * @secure
   * @response `200` `AuditTrailSummary`
   */
  auditSummaryRetrieve = (params: RequestParams = {}) =>
    this.request<AuditTrailSummary, any>({
      path: `/api/v1/audit/summary/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsList
   * @request GET:/api/v1/environments/
   * @secure
   * @response `200` `PaginatedEnvironmentList`
   */
  environmentsList = (query: EnvironmentsListParams, params: RequestParams = {}) =>
    this.request<PaginatedEnvironmentList, any>({
      path: `/api/v1/environments/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsCreate
   * @request POST:/api/v1/environments/
   * @secure
   * @response `201` `Environment`
   */
  environmentsCreate = (data: EnvironmentCreate, params: RequestParams = {}) =>
    this.request<Environment, any>({
      path: `/api/v1/environments/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsList
   * @request GET:/api/v1/environments/{environment_pk}/tags/
   * @secure
   * @response `200` `PaginatedTagList`
   */
  environmentsTagsList = ({ environmentPk, ...query }: EnvironmentsTagsListParams, params: RequestParams = {}) =>
    this.request<PaginatedTagList, any>({
      path: `/api/v1/environments/${environmentPk}/tags/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsCreate
   * @request POST:/api/v1/environments/{environment_pk}/tags/
   * @secure
   * @response `201` `Tag`
   */
  environmentsTagsCreate = (environmentPk: string, data: TagCreate, params: RequestParams = {}) =>
    this.request<Tag, any>({
      path: `/api/v1/environments/${environmentPk}/tags/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsRetrieve
   * @request GET:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `Tag`
   */
  environmentsTagsRetrieve = (environmentPk: string, id: string, params: RequestParams = {}) =>
    this.request<Tag, any>({
      path: `/api/v1/environments/${environmentPk}/tags/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsUpdate
   * @request PUT:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `Tag`
   */
  environmentsTagsUpdate = (environmentPk: string, id: string, data: Tag, params: RequestParams = {}) =>
    this.request<Tag, any>({
      path: `/api/v1/environments/${environmentPk}/tags/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsPartialUpdate
   * @request PATCH:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `200` `Tag`
   */
  environmentsTagsPartialUpdate = (environmentPk: string, id: string, data: PatchedTag, params: RequestParams = {}) =>
    this.request<Tag, any>({
      path: `/api/v1/environments/${environmentPk}/tags/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Tags allow you to name stable points in time for your configuration. Any query API that accepts an `as_of` option will also accept a `tag` option, however they are mutually exclusive.
   *
   * @tags environments
   * @name EnvironmentsTagsDestroy
   * @request DELETE:/api/v1/environments/{environment_pk}/tags/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  environmentsTagsDestroy = (environmentPk: string, id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/environments/${environmentPk}/tags/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsRetrieve
   * @request GET:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  environmentsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<Environment, any>({
      path: `/api/v1/environments/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsUpdate
   * @request PUT:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  environmentsUpdate = (id: string, data: Environment, params: RequestParams = {}) =>
    this.request<Environment, any>({
      path: `/api/v1/environments/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsPartialUpdate
   * @request PATCH:/api/v1/environments/{id}/
   * @secure
   * @response `200` `Environment`
   */
  environmentsPartialUpdate = (id: string, data: PatchedEnvironment, params: RequestParams = {}) =>
    this.request<Environment, any>({
      path: `/api/v1/environments/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags environments
   * @name EnvironmentsDestroy
   * @request DELETE:/api/v1/environments/{id}/
   * @secure
   * @response `204` `void` Environment destroyed.
   * @response `409` `void` The environment has children and cannot be removed.
   */
  environmentsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/environments/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsAwsList
   * @request GET:/api/v1/integrations/aws/
   * @secure
   * @response `200` `PaginatedAwsIntegrationList`
   */
  integrationsAwsList = (query: IntegrationsAwsListParams, params: RequestParams = {}) =>
    this.request<PaginatedAwsIntegrationList, any>({
      path: `/api/v1/integrations/aws/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ### Description ### Establishes an AWS Integration for your CloudTruth organization. ### Pre-Conditions ### - An AWS Integration for the account and role cannot already exist. ### Post-Conditions ### - You must establish an IAM role and trust relationship based on the Role Name and the External ID.
   *
   * @tags integrations
   * @name IntegrationsAwsCreate
   * @summary Establishes an AWS Integration.
   * @request POST:/api/v1/integrations/aws/
   * @secure
   * @response `201` `AwsIntegration`
   */
  integrationsAwsCreate = (data: AwsIntegrationCreate, params: RequestParams = {}) =>
    this.request<AwsIntegration, any>({
      path: `/api/v1/integrations/aws/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsAwsRetrieve
   * @summary Get details of an AWS Integration.
   * @request GET:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  integrationsAwsRetrieve = ({ id, ...query }: IntegrationsAwsRetrieveParams, params: RequestParams = {}) =>
    this.request<AwsIntegration, any>({
      path: `/api/v1/integrations/aws/${id}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsAwsUpdate
   * @request PUT:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  integrationsAwsUpdate = (id: string, data: AwsIntegration, params: RequestParams = {}) =>
    this.request<AwsIntegration, any>({
      path: `/api/v1/integrations/aws/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsAwsPartialUpdate
   * @request PATCH:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `200` `AwsIntegration`
   */
  integrationsAwsPartialUpdate = (id: string, data: PatchedAwsIntegration, params: RequestParams = {}) =>
    this.request<AwsIntegration, any>({
      path: `/api/v1/integrations/aws/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsAwsDestroy
   * @summary Delete an AWS integration.
   * @request DELETE:/api/v1/integrations/aws/{id}/
   * @secure
   * @response `204` `void` Integration removed.
   * @response `409` `void` The integration is used by one (or more) Value(s) and cannot be removed.
   */
  integrationsAwsDestroy = ({ id, ...query }: IntegrationsAwsDestroyParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/integrations/aws/${id}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description ### Description ### Queries a third-party integration to retrieve the data specified by the FQN. You can start exploring by not specifying an 'fqn', which will return a list of FQNs for the existing third-party integrations. Third-party integrations can be configured via the Integrations section of the web application.
   *
   * @tags integrations
   * @name IntegrationsExploreList
   * @summary Retrieve third-party integration data for the specified FQN.
   * @request GET:/api/v1/integrations/explore/
   * @secure
   * @response `200` `PaginatedIntegrationExplorerList` The content at the FQN.
   * @response `400` `void` Invalid FQN requested.
   * @response `403` `void` Unable to contact the third-party integration.
   * @response `415` `void` Unsupported content type (usually this means it is binary).
   * @response `507` `void` Content exceeds internal size limit of 1MB.
   */
  integrationsExploreList = (query: IntegrationsExploreListParams, params: RequestParams = {}) =>
    this.request<PaginatedIntegrationExplorerList, void>({
      path: `/api/v1/integrations/explore/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsGithubList
   * @request GET:/api/v1/integrations/github/
   * @secure
   * @response `200` `PaginatedGitHubIntegrationList`
   */
  integrationsGithubList = (query: IntegrationsGithubListParams, params: RequestParams = {}) =>
    this.request<PaginatedGitHubIntegrationList, any>({
      path: `/api/v1/integrations/github/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ### Description ### Establishes a GitHub Integration in your CloudTruth organization. ### Pre-Conditions ### - The user must be an Administrator or Owner of your organization. - A GitHub Integration with the `installation_id` cannot already exist in this organization. - The user must first install the CloudTruth GitHub Application in their GitHub organization and obtain the `installation_id` of the application in order to create the integration. ### Initiating the GitHub Application Installation ### - Go to `https://github.com/apps/GITHUB_APP_NAME/installations/new?state=<bearer_token>` - On successful installation the browser will return to `https://APP_URL/app_setup/github` (configured in ctops/bin/github*) and provide the `installation_id` in the URI. - POST to this api to verify and establish the integration.
   *
   * @tags integrations
   * @name IntegrationsGithubCreate
   * @summary Establishes a GitHub Integration.
   * @request POST:/api/v1/integrations/github/
   * @secure
   * @response `201` `GitHubIntegration`
   */
  integrationsGithubCreate = (data: GitHubIntegrationCreate, params: RequestParams = {}) =>
    this.request<GitHubIntegration, any>({
      path: `/api/v1/integrations/github/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsGithubRetrieve
   * @summary Get details of a GitHub Integration.
   * @request GET:/api/v1/integrations/github/{id}/
   * @secure
   * @response `200` `GitHubIntegration`
   */
  integrationsGithubRetrieve = ({ id, ...query }: IntegrationsGithubRetrieveParams, params: RequestParams = {}) =>
    this.request<GitHubIntegration, any>({
      path: `/api/v1/integrations/github/${id}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags integrations
   * @name IntegrationsGithubDestroy
   * @summary Delete a GitHub integration.
   * @request DELETE:/api/v1/integrations/github/{id}/
   * @secure
   * @response `204` `void` Integration removed.
   * @response `409` `void` The integration is used by one (or more) Value(s) and cannot be removed.
   */
  integrationsGithubDestroy = ({ id, ...query }: IntegrationsGithubDestroyParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/integrations/github/${id}/`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags invitations
   * @name InvitationsList
   * @request GET:/api/v1/invitations/
   * @secure
   * @response `200` `PaginatedInvitationList`
   */
  invitationsList = (query: InvitationsListParams, params: RequestParams = {}) =>
    this.request<PaginatedInvitationList, any>({
      path: `/api/v1/invitations/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Extend an invitation for someone else to join your organization.
   *
   * @tags invitations
   * @name InvitationsCreate
   * @summary Create an invitation.
   * @request POST:/api/v1/invitations/
   * @secure
   * @response `201` `Invitation`
   * @response `403` `void` Permission denied.  Is the invitation role more permissive than your own?
   * @response `404` `void` Bad Request.  Is there already an invitation for that email?
   */
  invitationsCreate = (data: InvitationCreate, params: RequestParams = {}) =>
    this.request<Invitation, void>({
      path: `/api/v1/invitations/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags invitations
   * @name InvitationsRetrieve
   * @request GET:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  invitationsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<Invitation, any>({
      path: `/api/v1/invitations/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags invitations
   * @name InvitationsUpdate
   * @request PUT:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  invitationsUpdate = (id: string, data: Invitation, params: RequestParams = {}) =>
    this.request<Invitation, any>({
      path: `/api/v1/invitations/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags invitations
   * @name InvitationsPartialUpdate
   * @request PATCH:/api/v1/invitations/{id}/
   * @secure
   * @response `200` `Invitation`
   */
  invitationsPartialUpdate = (id: string, data: PatchedInvitation, params: RequestParams = {}) =>
    this.request<Invitation, any>({
      path: `/api/v1/invitations/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags invitations
   * @name InvitationsDestroy
   * @request DELETE:/api/v1/invitations/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  invitationsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/invitations/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Accept an invitation to join an organization. The email address used to log in and accept the invitation must match the email address specified by the inviting user when creating the invitation. On success the client receives the invitation record as it was updated. The client should then regenerate the JWT with the organization scope and proceed to the default landing page.
   *
   * @tags invitations
   * @name InvitationsAcceptCreate
   * @summary Accept an invitation.
   * @request POST:/api/v1/invitations/{id}/accept/
   * @secure
   * @response `200` `Invitation` The invitation was accepted.  The client should obtain an organization scope token and proceed to the landing page.
   * @response `403` `void` Permission denied.  The accepting user's email may not match the invitation?
   * @response `404` `void` Bad Request.  The invitation does not exist or has already been accepted?
   */
  invitationsAcceptCreate = (id: string, params: RequestParams = {}) =>
    this.request<Invitation, void>({
      path: `/api/v1/invitations/${id}/accept/`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Re-send an invitation to the recipient.
   *
   * @tags invitations
   * @name InvitationsResendCreate
   * @summary Resend an invitation.
   * @request POST:/api/v1/invitations/{id}/resend/
   * @secure
   * @response `200` `Invitation` The invitation state was reset to `pending`, which causes it to get sent again.  The most recent state is returned.  Clients should check the state.
   * @response `404` `void` Bad Request.  Was the invitation already accepted?
   */
  invitationsResendCreate = (id: string, params: RequestParams = {}) =>
    this.request<Invitation, void>({
      path: `/api/v1/invitations/${id}/resend/`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsList
   * @request GET:/api/v1/memberships/
   * @secure
   * @response `200` `PaginatedMembershipList`
   */
  membershipsList = (query: MembershipsListParams, params: RequestParams = {}) =>
    this.request<PaginatedMembershipList, any>({
      path: `/api/v1/memberships/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsCreate
   * @request POST:/api/v1/memberships/
   * @secure
   * @response `201` `Membership`
   */
  membershipsCreate = (data: MembershipCreate, params: RequestParams = {}) =>
    this.request<Membership, any>({
      path: `/api/v1/memberships/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsRetrieve
   * @request GET:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  membershipsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<Membership, any>({
      path: `/api/v1/memberships/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsUpdate
   * @request PUT:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  membershipsUpdate = (id: string, data: Membership, params: RequestParams = {}) =>
    this.request<Membership, any>({
      path: `/api/v1/memberships/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsPartialUpdate
   * @request PATCH:/api/v1/memberships/{id}/
   * @secure
   * @response `200` `Membership`
   */
  membershipsPartialUpdate = (id: string, data: PatchedMembership, params: RequestParams = {}) =>
    this.request<Membership, any>({
      path: `/api/v1/memberships/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags memberships
   * @name MembershipsDestroy
   * @request DELETE:/api/v1/memberships/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  membershipsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/memberships/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsList
   * @request GET:/api/v1/organizations/
   * @secure
   * @response `200` `PaginatedOrganizationList`
   */
  organizationsList = (query: OrganizationsListParams, params: RequestParams = {}) =>
    this.request<PaginatedOrganizationList, any>({
      path: `/api/v1/organizations/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsCreate
   * @request POST:/api/v1/organizations/
   * @secure
   * @response `201` `Organization`
   */
  organizationsCreate = (data: OrganizationCreate, params: RequestParams = {}) =>
    this.request<Organization, any>({
      path: `/api/v1/organizations/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsRetrieve
   * @request GET:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  organizationsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<Organization, any>({
      path: `/api/v1/organizations/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsUpdate
   * @request PUT:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  organizationsUpdate = (id: string, data: Organization, params: RequestParams = {}) =>
    this.request<Organization, any>({
      path: `/api/v1/organizations/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsPartialUpdate
   * @request PATCH:/api/v1/organizations/{id}/
   * @secure
   * @response `200` `Organization`
   */
  organizationsPartialUpdate = (id: string, data: PatchedOrganization, params: RequestParams = {}) =>
    this.request<Organization, any>({
      path: `/api/v1/organizations/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organizations
   * @name OrganizationsDestroy
   * @request DELETE:/api/v1/organizations/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  organizationsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/organizations/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsList
   * @request GET:/api/v1/projects/
   * @secure
   * @response `200` `PaginatedProjectList`
   */
  projectsList = (query: ProjectsListParams, params: RequestParams = {}) =>
    this.request<PaginatedProjectList, any>({
      path: `/api/v1/projects/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsCreate
   * @request POST:/api/v1/projects/
   * @secure
   * @response `201` `Project`
   */
  projectsCreate = (data: ProjectCreate, params: RequestParams = {}) =>
    this.request<Project, any>({
      path: `/api/v1/projects/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsRetrieve
   * @request GET:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  projectsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<Project, any>({
      path: `/api/v1/projects/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsUpdate
   * @request PUT:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  projectsUpdate = (id: string, data: Project, params: RequestParams = {}) =>
    this.request<Project, any>({
      path: `/api/v1/projects/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsPartialUpdate
   * @request PATCH:/api/v1/projects/{id}/
   * @secure
   * @response `200` `Project`
   */
  projectsPartialUpdate = (id: string, data: PatchedProject, params: RequestParams = {}) =>
    this.request<Project, any>({
      path: `/api/v1/projects/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsDestroy
   * @request DELETE:/api/v1/projects/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  projectsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/projects/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Exports all parameters in this project in the requested format. Parameter names and values will be coerced to the proper format (e.g. for a dotenv export, my_parameter will be capitalized to MY_PARAMETER and its value will be in a quoted string).  Note that capitalization is the only name coercion that will be performed on parameter names, names that are invalid for a given format will be omitted.
   *
   * @tags projects
   * @name ProjectsParameterExportList
   * @request GET:/api/v1/projects/{project_pk}/parameter-export/
   * @secure
   * @response `200` `ParameterExport`
   */
  projectsParameterExportList = (
    { projectPk, ...query }: ProjectsParameterExportListParams,
    params: RequestParams = {},
  ) =>
    this.request<ParameterExport, any>({
      path: `/api/v1/projects/${projectPk}/parameter-export/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersList
   * @request GET:/api/v1/projects/{project_pk}/parameters/
   * @secure
   * @response `200` `PaginatedParameterList`
   */
  projectsParametersList = ({ projectPk, ...query }: ProjectsParametersListParams, params: RequestParams = {}) =>
    this.request<PaginatedParameterList, any>({
      path: `/api/v1/projects/${projectPk}/parameters/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersCreate
   * @request POST:/api/v1/projects/{project_pk}/parameters/
   * @secure
   * @response `201` `Parameter`
   */
  projectsParametersCreate = (projectPk: string, data: ParameterCreate, params: RequestParams = {}) =>
    this.request<Parameter, any>({
      path: `/api/v1/projects/${projectPk}/parameters/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesList
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/
   * @secure
   * @response `200` `PaginatedParameterRuleList`
   */
  projectsParametersRulesList = (
    { parameterPk, projectPk, ...query }: ProjectsParametersRulesListParams,
    params: RequestParams = {},
  ) =>
    this.request<PaginatedParameterRuleList, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesCreate
   * @request POST:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/
   * @secure
   * @response `201` `ParameterRule`
   */
  projectsParametersRulesCreate = (
    parameterPk: string,
    projectPk: string,
    data: ParameterRuleCreate,
    params: RequestParams = {},
  ) =>
    this.request<ParameterRule, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  projectsParametersRulesRetrieve = (id: string, parameterPk: string, projectPk: string, params: RequestParams = {}) =>
    this.request<ParameterRule, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesUpdate
   * @request PUT:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  projectsParametersRulesUpdate = (
    id: string,
    parameterPk: string,
    projectPk: string,
    data: ParameterRule,
    params: RequestParams = {},
  ) =>
    this.request<ParameterRule, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesPartialUpdate
   * @request PATCH:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `200` `ParameterRule`
   */
  projectsParametersRulesPartialUpdate = (
    id: string,
    parameterPk: string,
    projectPk: string,
    data: PatchedParameterRule,
    params: RequestParams = {},
  ) =>
    this.request<ParameterRule, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRulesDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/rules/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  projectsParametersRulesDestroy = (id: string, parameterPk: string, projectPk: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/rules/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Retrieve previously set values of a parameter in one or all environments. To see all the _effective_ values for a parameter across every environment, use the Parameters API (see the `values` field).
   *
   * @tags projects
   * @name ProjectsParametersValuesList
   * @summary Retrieve values.
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/
   * @secure
   * @response `200` `PaginatedValueList`
   */
  projectsParametersValuesList = (
    { parameterPk, projectPk, ...query }: ProjectsParametersValuesListParams,
    params: RequestParams = {},
  ) =>
    this.request<PaginatedValueList, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Set the value of a parameter in an environment.
   *
   * @tags projects
   * @name ProjectsParametersValuesCreate
   * @summary Set a value.
   * @request POST:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/
   * @secure
   * @response `201` `Value`
   */
  projectsParametersValuesCreate = (
    { parameterPk, projectPk, ...query }: ProjectsParametersValuesCreateParams,
    data: ValueCreate,
    params: RequestParams = {},
  ) =>
    this.request<Value, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve the value of a parameter in an environment.
   *
   * @tags projects
   * @name ProjectsParametersValuesRetrieve
   * @summary Retrieve a value.
   * @request GET:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  projectsParametersValuesRetrieve = (
    { id, parameterPk, projectPk, ...query }: ProjectsParametersValuesRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<Value, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update the value of a parameter in an environment.
   *
   * @tags projects
   * @name ProjectsParametersValuesUpdate
   * @summary Update a value.
   * @request PUT:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  projectsParametersValuesUpdate = (
    { id, parameterPk, projectPk, ...query }: ProjectsParametersValuesUpdateParams,
    data: Value,
    params: RequestParams = {},
  ) =>
    this.request<Value, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update the value of a parameter in an environment.
   *
   * @tags projects
   * @name ProjectsParametersValuesPartialUpdate
   * @summary Update a value.
   * @request PATCH:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `200` `Value`
   */
  projectsParametersValuesPartialUpdate = (
    { id, parameterPk, projectPk, ...query }: ProjectsParametersValuesPartialUpdateParams,
    data: PatchedValue,
    params: RequestParams = {},
  ) =>
    this.request<Value, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`,
      method: "PATCH",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Destroy the value of a parameter in an environment.
   *
   * @tags projects
   * @name ProjectsParametersValuesDestroy
   * @summary Destroy a value.
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{parameter_pk}/values/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  projectsParametersValuesDestroy = (id: string, parameterPk: string, projectPk: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `200` `Parameter`
   */
  projectsParametersRetrieve = (
    { id, projectPk, ...query }: ProjectsParametersRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<Parameter, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${id}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
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
  projectsParametersUpdate = (id: string, projectPk: string, data: Parameter, params: RequestParams = {}) =>
    this.request<Parameter, void>({
      path: `/api/v1/projects/${projectPk}/parameters/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
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
  projectsParametersPartialUpdate = (
    id: string,
    projectPk: string,
    data: PatchedParameter,
    params: RequestParams = {},
  ) =>
    this.request<Parameter, void>({
      path: `/api/v1/projects/${projectPk}/parameters/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsParametersDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/parameters/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  projectsParametersDestroy = (id: string, projectPk: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Summary information about how a parameter has changed over time. The time range of historical information available depends on your subscription. Any changes to the parameter itself, including rules and values, is included.
   *
   * @tags projects
   * @name ProjectsParametersTimelineRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/{id}/timeline/
   * @secure
   * @response `200` `ParameterTimeline`
   */
  projectsParametersTimelineRetrieve = (
    { id, projectPk, ...query }: ProjectsParametersTimelineRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<ParameterTimeline, any>({
      path: `/api/v1/projects/${projectPk}/parameters/${id}/timeline/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Information about how the parameters of a project have changed over time. The time range of historical information available depends on your subscription. Any changes to the project's parameters, including rules and values, is included.
   *
   * @tags projects
   * @name ProjectsParametersTimelinesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/parameters/timelines/
   * @secure
   * @response `200` `ParameterTimeline`
   */
  projectsParametersTimelinesRetrieve = (
    { projectPk, ...query }: ProjectsParametersTimelinesRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<ParameterTimeline, any>({
      path: `/api/v1/projects/${projectPk}/parameters/timelines/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Endpoint for previewing a template.  Post the template content in the request body.
   *
   * @tags projects
   * @name ProjectsTemplatePreviewCreate
   * @request POST:/api/v1/projects/{project_pk}/template-preview/
   * @secure
   * @response `200` `TemplatePreview`
   * @response `422` `TemplateLookupError`
   */
  projectsTemplatePreviewCreate = (
    { projectPk, ...query }: ProjectsTemplatePreviewCreateParams,
    data: TemplatePreview,
    params: RequestParams = {},
  ) =>
    this.request<TemplatePreview, TemplateLookupError>({
      path: `/api/v1/projects/${projectPk}/template-preview/`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesList
   * @request GET:/api/v1/projects/{project_pk}/templates/
   * @secure
   * @response `200` `PaginatedTemplateList`
   */
  projectsTemplatesList = ({ projectPk, ...query }: ProjectsTemplatesListParams, params: RequestParams = {}) =>
    this.request<PaginatedTemplateList, any>({
      path: `/api/v1/projects/${projectPk}/templates/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesCreate
   * @request POST:/api/v1/projects/{project_pk}/templates/
   * @secure
   * @response `201` `Template`
   * @response `422` `TemplateLookupError`
   */
  projectsTemplatesCreate = (projectPk: string, data: TemplateCreate, params: RequestParams = {}) =>
    this.request<Template, TemplateLookupError>({
      path: `/api/v1/projects/${projectPk}/templates/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  projectsTemplatesRetrieve = (
    { id, projectPk, ...query }: ProjectsTemplatesRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<Template, TemplateLookupError>({
      path: `/api/v1/projects/${projectPk}/templates/${id}/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesUpdate
   * @request PUT:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  projectsTemplatesUpdate = (id: string, projectPk: string, data: Template, params: RequestParams = {}) =>
    this.request<Template, TemplateLookupError>({
      path: `/api/v1/projects/${projectPk}/templates/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesPartialUpdate
   * @request PATCH:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `200` `Template`
   * @response `422` `TemplateLookupError`
   */
  projectsTemplatesPartialUpdate = (id: string, projectPk: string, data: PatchedTemplate, params: RequestParams = {}) =>
    this.request<Template, TemplateLookupError>({
      path: `/api/v1/projects/${projectPk}/templates/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags projects
   * @name ProjectsTemplatesDestroy
   * @request DELETE:/api/v1/projects/{project_pk}/templates/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  projectsTemplatesDestroy = (id: string, projectPk: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/projects/${projectPk}/templates/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Information about how a template has changed over time. The time range of historical information available depends on your subscription. Any changes to the template itself is included.
   *
   * @tags projects
   * @name ProjectsTemplatesTimelineRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/{id}/timeline/
   * @secure
   * @response `200` `TemplateTimeline`
   */
  projectsTemplatesTimelineRetrieve = (
    { id, projectPk, ...query }: ProjectsTemplatesTimelineRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<TemplateTimeline, any>({
      path: `/api/v1/projects/${projectPk}/templates/${id}/timeline/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Information about how the templates of a project have changed over time. The time range of historical information available depends on your subscription. Any changes to the project's templates is included.
   *
   * @tags projects
   * @name ProjectsTemplatesTimelinesRetrieve
   * @request GET:/api/v1/projects/{project_pk}/templates/timelines/
   * @secure
   * @response `200` `TemplateTimeline`
   */
  projectsTemplatesTimelinesRetrieve = (
    { projectPk, ...query }: ProjectsTemplatesTimelinesRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.request<TemplateTimeline, any>({
      path: `/api/v1/projects/${projectPk}/templates/timelines/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags serviceaccounts
   * @name ServiceaccountsList
   * @request GET:/api/v1/serviceaccounts/
   * @secure
   * @response `200` `PaginatedServiceAccountList`
   */
  serviceaccountsList = (query: ServiceaccountsListParams, params: RequestParams = {}) =>
    this.request<PaginatedServiceAccountList, any>({
      path: `/api/v1/serviceaccounts/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new ServiceAccount.  A ServiceAccount is a user record intended for machine use (such as a build system).  It does not have a username/password but is instead accessed using an API key. On creation, the API key will be returned.  This key will only be shown once, is not stored on any CloudTruth system, and should be treated as a secret.  Should the key be lost, you will need to delete and recreate the ServiceAccount in order to generate a new API key.
   *
   * @tags serviceaccounts
   * @name ServiceaccountsCreate
   * @summary Create a ServiceAccount user.
   * @request POST:/api/v1/serviceaccounts/
   * @secure
   * @response `201` `ServiceAccountCreateResponse`
   */
  serviceaccountsCreate = (data: ServiceAccountCreateRequest, params: RequestParams = {}) =>
    this.request<ServiceAccountCreateResponse, any>({
      path: `/api/v1/serviceaccounts/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags serviceaccounts
   * @name ServiceaccountsRetrieve
   * @request GET:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  serviceaccountsRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<ServiceAccount, any>({
      path: `/api/v1/serviceaccounts/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags serviceaccounts
   * @name ServiceaccountsUpdate
   * @request PUT:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  serviceaccountsUpdate = (id: string, data: ServiceAccount, params: RequestParams = {}) =>
    this.request<ServiceAccount, any>({
      path: `/api/v1/serviceaccounts/${id}/`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags serviceaccounts
   * @name ServiceaccountsPartialUpdate
   * @request PATCH:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `200` `ServiceAccount`
   */
  serviceaccountsPartialUpdate = (id: string, data: PatchedServiceAccount, params: RequestParams = {}) =>
    this.request<ServiceAccount, any>({
      path: `/api/v1/serviceaccounts/${id}/`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags serviceaccounts
   * @name ServiceaccountsDestroy
   * @request DELETE:/api/v1/serviceaccounts/{id}/
   * @secure
   * @response `204` `void` No response body
   */
  serviceaccountsDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/serviceaccounts/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name UsersList
   * @request GET:/api/v1/users/
   * @secure
   * @response `200` `PaginatedUserList`
   */
  usersList = (query: UsersListParams, params: RequestParams = {}) =>
    this.request<PaginatedUserList, any>({
      path: `/api/v1/users/`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name UsersRetrieve
   * @request GET:/api/v1/users/{id}/
   * @secure
   * @response `200` `User`
   */
  usersRetrieve = (id: string, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/v1/users/${id}/`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ### Description ### Delete the specified user.  This removes all access the User may have to any Organization. ### Pre-Conditions ### - The user cannot be the only owner of any Organization. - The bearer token must belong to the user being deleted. - All of the memberships related to the User will be deleted, so all the membership deletion pre-conditions must also be met.
   *
   * @tags users
   * @name UsersDestroy
   * @summary Delete the specified user.
   * @request DELETE:/api/v1/users/{id}/
   * @secure
   * @response `204` `void` User deleted. The client should behave as if the user logged out.
   * @response `400` `void` Bad Request - Is the user the only owner of any organization? - Were all required fields provided?
   * @response `403` `void` Forbidden - Did the Bearer token belong to the User being deleted?
   */
  usersDestroy = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/users/${id}/`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
