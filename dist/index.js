require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 428:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Api = void 0;
const http_client_1 = __nccwpck_require__(802);
class Api extends http_client_1.HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         *
         * @tags api
         * @name ApiSchemaRetrieve
         * @request GET:/api/schema/
         * @secure
         * @response `200` `Record<string, any>`
         */
        this.apiSchemaRetrieve = (query, params = {}) => this.request(Object.assign({ path: `/api/schema/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description A searchable log of all the actions taken by users and service accounts within the organization.
         *
         * @tags audit
         * @name AuditList
         * @request GET:/api/v1/audit/
         * @secure
         * @response `200` `PaginatedAuditTrailList`
         */
        this.auditList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/audit/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * @description Retrieve one record from the audit log.
         *
         * @tags audit
         * @name AuditRetrieve
         * @request GET:/api/v1/audit/{id}/
         * @secure
         * @response `200` `AuditTrail`
         */
        this.auditRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/audit/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * @description Summary information about the organization's audit trail.
         *
         * @tags audit
         * @name AuditSummaryRetrieve
         * @request GET:/api/v1/audit/summary/
         * @secure
         * @response `200` `AuditTrailSummary`
         */
        this.auditSummaryRetrieve = (params = {}) => this.request(Object.assign({ path: `/api/v1/audit/summary/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags environments
         * @name EnvironmentsList
         * @request GET:/api/v1/environments/
         * @secure
         * @response `200` `PaginatedEnvironmentList`
         */
        this.environmentsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags environments
         * @name EnvironmentsCreate
         * @request POST:/api/v1/environments/
         * @secure
         * @response `201` `Environment`
         */
        this.environmentsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags environments
         * @name EnvironmentsRetrieve
         * @request GET:/api/v1/environments/{id}/
         * @secure
         * @response `200` `Environment`
         */
        this.environmentsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags environments
         * @name EnvironmentsUpdate
         * @request PUT:/api/v1/environments/{id}/
         * @secure
         * @response `200` `Environment`
         */
        this.environmentsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags environments
         * @name EnvironmentsPartialUpdate
         * @request PATCH:/api/v1/environments/{id}/
         * @secure
         * @response `200` `Environment`
         */
        this.environmentsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
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
        this.environmentsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/environments/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsAwsList
         * @request GET:/api/v1/integrations/aws/
         * @secure
         * @response `200` `PaginatedAwsIntegrationList`
         */
        this.integrationsAwsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/aws/`, method: "GET", query: query, secure: true, format: "json" }, params));
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
        this.integrationsAwsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/aws/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
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
        this.integrationsAwsRetrieve = (_a, params = {}) => {
            var { id } = _a, query = __rest(_a, ["id"]);
            return this.request(Object.assign({ path: `/api/v1/integrations/aws/${id}/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsAwsUpdate
         * @request PUT:/api/v1/integrations/aws/{id}/
         * @secure
         * @response `200` `AwsIntegration`
         */
        this.integrationsAwsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/aws/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsAwsPartialUpdate
         * @request PATCH:/api/v1/integrations/aws/{id}/
         * @secure
         * @response `200` `AwsIntegration`
         */
        this.integrationsAwsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/aws/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsAwsDestroy
         * @request DELETE:/api/v1/integrations/aws/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.integrationsAwsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/aws/${id}/`, method: "DELETE", secure: true }, params));
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
        this.integrationsExploreList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/explore/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsGithubList
         * @request GET:/api/v1/integrations/github/
         * @secure
         * @response `200` `PaginatedGitHubIntegrationList`
         */
        this.integrationsGithubList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/github/`, method: "GET", query: query, secure: true, format: "json" }, params));
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
        this.integrationsGithubCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/github/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
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
        this.integrationsGithubRetrieve = (_a, params = {}) => {
            var { id } = _a, query = __rest(_a, ["id"]);
            return this.request(Object.assign({ path: `/api/v1/integrations/github/${id}/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags integrations
         * @name IntegrationsGithubDestroy
         * @request DELETE:/api/v1/integrations/github/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.integrationsGithubDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/integrations/github/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags invitations
         * @name InvitationsList
         * @request GET:/api/v1/invitations/
         * @secure
         * @response `200` `PaginatedInvitationList`
         */
        this.invitationsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/`, method: "GET", query: query, secure: true, format: "json" }, params));
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
        this.invitationsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags invitations
         * @name InvitationsRetrieve
         * @request GET:/api/v1/invitations/{id}/
         * @secure
         * @response `200` `Invitation`
         */
        this.invitationsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags invitations
         * @name InvitationsUpdate
         * @request PUT:/api/v1/invitations/{id}/
         * @secure
         * @response `200` `Invitation`
         */
        this.invitationsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags invitations
         * @name InvitationsPartialUpdate
         * @request PATCH:/api/v1/invitations/{id}/
         * @secure
         * @response `200` `Invitation`
         */
        this.invitationsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags invitations
         * @name InvitationsDestroy
         * @request DELETE:/api/v1/invitations/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.invitationsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/`, method: "DELETE", secure: true }, params));
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
        this.invitationsAcceptCreate = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/accept/`, method: "POST", secure: true, format: "json" }, params));
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
        this.invitationsResendCreate = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/invitations/${id}/resend/`, method: "POST", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsList
         * @request GET:/api/v1/memberships/
         * @secure
         * @response `200` `PaginatedMembershipList`
         */
        this.membershipsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsCreate
         * @request POST:/api/v1/memberships/
         * @secure
         * @response `201` `Membership`
         */
        this.membershipsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsRetrieve
         * @request GET:/api/v1/memberships/{id}/
         * @secure
         * @response `200` `Membership`
         */
        this.membershipsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsUpdate
         * @request PUT:/api/v1/memberships/{id}/
         * @secure
         * @response `200` `Membership`
         */
        this.membershipsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsPartialUpdate
         * @request PATCH:/api/v1/memberships/{id}/
         * @secure
         * @response `200` `Membership`
         */
        this.membershipsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags memberships
         * @name MembershipsDestroy
         * @request DELETE:/api/v1/memberships/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.membershipsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/memberships/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsList
         * @request GET:/api/v1/organizations/
         * @secure
         * @response `200` `PaginatedOrganizationList`
         */
        this.organizationsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsCreate
         * @request POST:/api/v1/organizations/
         * @secure
         * @response `201` `Organization`
         */
        this.organizationsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsRetrieve
         * @request GET:/api/v1/organizations/{id}/
         * @secure
         * @response `200` `Organization`
         */
        this.organizationsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsUpdate
         * @request PUT:/api/v1/organizations/{id}/
         * @secure
         * @response `200` `Organization`
         */
        this.organizationsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsPartialUpdate
         * @request PATCH:/api/v1/organizations/{id}/
         * @secure
         * @response `200` `Organization`
         */
        this.organizationsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags organizations
         * @name OrganizationsDestroy
         * @request DELETE:/api/v1/organizations/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.organizationsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/organizations/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsList
         * @request GET:/api/v1/projects/
         * @secure
         * @response `200` `PaginatedProjectList`
         */
        this.projectsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsCreate
         * @request POST:/api/v1/projects/
         * @secure
         * @response `201` `Project`
         */
        this.projectsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsRetrieve
         * @request GET:/api/v1/projects/{id}/
         * @secure
         * @response `200` `Project`
         */
        this.projectsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsUpdate
         * @request PUT:/api/v1/projects/{id}/
         * @secure
         * @response `200` `Project`
         */
        this.projectsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsPartialUpdate
         * @request PATCH:/api/v1/projects/{id}/
         * @secure
         * @response `200` `Project`
         */
        this.projectsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsDestroy
         * @request DELETE:/api/v1/projects/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.projectsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * @description Exports all parameters in this project in the requested format. Parameter names and values will be coerced to the proper format (e.g. for a dotenv export, my_parameter will be capitalized to MY_PARAMETER and its value will be in a quoted string).  Note that capitalization is the only name coercion that will be performed on parameter names, names that are invalid for a given format will be omitted.
         *
         * @tags projects
         * @name ProjectsParameterExportList
         * @request GET:/api/v1/projects/{project_pk}/parameter-export/
         * @secure
         * @response `200` `ParameterExport`
         */
        this.projectsParameterExportList = (_a, params = {}) => {
            var { projectPk } = _a, query = __rest(_a, ["projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameter-export/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersList
         * @request GET:/api/v1/projects/{project_pk}/parameters/
         * @secure
         * @response `200` `PaginatedParameterList`
         */
        this.projectsParametersList = (_a, params = {}) => {
            var { projectPk } = _a, query = __rest(_a, ["projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersCreate
         * @request POST:/api/v1/projects/{project_pk}/parameters/
         * @secure
         * @response `201` `Parameter`
         */
        this.projectsParametersCreate = (projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
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
        this.projectsParametersValuesList = (_a, params = {}) => {
            var { parameterPk, projectPk } = _a, query = __rest(_a, ["parameterPk", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
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
        this.projectsParametersValuesCreate = (_a, data, params = {}) => {
            var { parameterPk, projectPk } = _a, query = __rest(_a, ["parameterPk", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/`, method: "POST", query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
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
        this.projectsParametersValuesRetrieve = (_a, params = {}) => {
            var { id, parameterPk, projectPk } = _a, query = __rest(_a, ["id", "parameterPk", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
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
        this.projectsParametersValuesUpdate = (_a, data, params = {}) => {
            var { id, parameterPk, projectPk } = _a, query = __rest(_a, ["id", "parameterPk", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`, method: "PUT", query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
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
        this.projectsParametersValuesPartialUpdate = (_a, data, params = {}) => {
            var { id, parameterPk, projectPk } = _a, query = __rest(_a, ["id", "parameterPk", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`, method: "PATCH", query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
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
        this.projectsParametersValuesDestroy = (id, parameterPk, projectPk, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${parameterPk}/values/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersRetrieve
         * @request GET:/api/v1/projects/{project_pk}/parameters/{id}/
         * @secure
         * @response `200` `Parameter`
         */
        this.projectsParametersRetrieve = (_a, params = {}) => {
            var { id, projectPk } = _a, query = __rest(_a, ["id", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${id}/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersUpdate
         * @request PUT:/api/v1/projects/{project_pk}/parameters/{id}/
         * @secure
         * @response `200` `Parameter`
         * @response `400` `void` While checking pre-conditions, a dynamic value was encountered that could not be resolved.
         * @response `404` `void` The given project id could not be found, or while checking pre-conditions, a dynamic value was encountered that could not be resolved.
         * @response `415` `void` While checking pre-conditions, a dynamic value was encountered that has an invalid content type.
         * @response `422` `void` A pre-condition to modifying the `secret` setting of the parameter failed, for example setting `secret: false` and having a dynamic value that resolves to a value that is a secret.  In this case it would be unsafe to allow the `secret` setting to change.
         * @response `507` `void` While checking pre-conditions, a dynamic value was encountered that was too large to process.
         */
        this.projectsParametersUpdate = (id, projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersPartialUpdate
         * @request PATCH:/api/v1/projects/{project_pk}/parameters/{id}/
         * @secure
         * @response `200` `Parameter`
         * @response `400` `void` While checking pre-conditions, a dynamic value was encountered that could not be resolved.
         * @response `404` `void` The given project id could not be found, or while checking pre-conditions, a dynamic value was encountered that could not be resolved.
         * @response `415` `void` While checking pre-conditions, a dynamic value was encountered that has an invalid content type.
         * @response `422` `void` A pre-condition to modifying the `secret` setting of the parameter failed, for example setting `secret: false` and having a dynamic value that resolves to a value that is a secret.  In this case it would be unsafe to allow the `secret` setting to change.
         * @response `507` `void` While checking pre-conditions, a dynamic value was encountered that was too large to process.
         */
        this.projectsParametersPartialUpdate = (id, projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsParametersDestroy
         * @request DELETE:/api/v1/projects/{project_pk}/parameters/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.projectsParametersDestroy = (id, projectPk, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/parameters/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * @description Endpoint for previewing a template.
         *
         * @tags projects
         * @name ProjectsTemplatePreviewCreate
         * @request POST:/api/v1/projects/{project_pk}/template-preview/
         * @secure
         * @response `201` `TemplatePreview`
         */
        this.projectsTemplatePreviewCreate = (_a, data, params = {}) => {
            var { projectPk } = _a, query = __rest(_a, ["projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/template-preview/`, method: "POST", query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesList
         * @request GET:/api/v1/projects/{project_pk}/templates/
         * @secure
         * @response `200` `PaginatedTemplateList`
         */
        this.projectsTemplatesList = (_a, params = {}) => {
            var { projectPk } = _a, query = __rest(_a, ["projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesCreate
         * @request POST:/api/v1/projects/{project_pk}/templates/
         * @secure
         * @response `201` `TemplateCreate`
         */
        this.projectsTemplatesCreate = (projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesRetrieve
         * @request GET:/api/v1/projects/{project_pk}/templates/{id}/
         * @secure
         * @response `200` `Template`
         */
        this.projectsTemplatesRetrieve = (_a, params = {}) => {
            var { id, projectPk } = _a, query = __rest(_a, ["id", "projectPk"]);
            return this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/${id}/`, method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesUpdate
         * @request PUT:/api/v1/projects/{project_pk}/templates/{id}/
         * @secure
         * @response `200` `Template`
         */
        this.projectsTemplatesUpdate = (id, projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesPartialUpdate
         * @request PATCH:/api/v1/projects/{project_pk}/templates/{id}/
         * @secure
         * @response `200` `Template`
         */
        this.projectsTemplatesPartialUpdate = (id, projectPk, data, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags projects
         * @name ProjectsTemplatesDestroy
         * @request DELETE:/api/v1/projects/{project_pk}/templates/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.projectsTemplatesDestroy = (id, projectPk, params = {}) => this.request(Object.assign({ path: `/api/v1/projects/${projectPk}/templates/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags serviceaccounts
         * @name ServiceaccountsList
         * @request GET:/api/v1/serviceaccounts/
         * @secure
         * @response `200` `PaginatedServiceAccountList`
         */
        this.serviceaccountsList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/`, method: "GET", query: query, secure: true, format: "json" }, params));
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
        this.serviceaccountsCreate = (data, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/`, method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags serviceaccounts
         * @name ServiceaccountsRetrieve
         * @request GET:/api/v1/serviceaccounts/{id}/
         * @secure
         * @response `200` `ServiceAccount`
         */
        this.serviceaccountsRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/${id}/`, method: "GET", secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags serviceaccounts
         * @name ServiceaccountsUpdate
         * @request PUT:/api/v1/serviceaccounts/{id}/
         * @secure
         * @response `200` `ServiceAccount`
         */
        this.serviceaccountsUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/${id}/`, method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags serviceaccounts
         * @name ServiceaccountsPartialUpdate
         * @request PATCH:/api/v1/serviceaccounts/{id}/
         * @secure
         * @response `200` `ServiceAccount`
         */
        this.serviceaccountsPartialUpdate = (id, data, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/${id}/`, method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        /**
         * No description
         *
         * @tags serviceaccounts
         * @name ServiceaccountsDestroy
         * @request DELETE:/api/v1/serviceaccounts/{id}/
         * @secure
         * @response `204` `void` No response body
         */
        this.serviceaccountsDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/serviceaccounts/${id}/`, method: "DELETE", secure: true }, params));
        /**
         * No description
         *
         * @tags users
         * @name UsersList
         * @request GET:/api/v1/users/
         * @secure
         * @response `200` `PaginatedUserList`
         */
        this.usersList = (query, params = {}) => this.request(Object.assign({ path: `/api/v1/users/`, method: "GET", query: query, secure: true, format: "json" }, params));
        /**
         * No description
         *
         * @tags users
         * @name UsersRetrieve
         * @request GET:/api/v1/users/{id}/
         * @secure
         * @response `200` `User`
         */
        this.usersRetrieve = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/users/${id}/`, method: "GET", secure: true, format: "json" }, params));
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
        this.usersDestroy = (id, params = {}) => this.request(Object.assign({ path: `/api/v1/users/${id}/`, method: "DELETE", secure: true }, params));
    }
}
exports.Api = Api;


/***/ }),

/***/ 802:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.abortControllers = new Map();
        this.customFetch = (...fetchParams) => fetch(...fetchParams);
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(key, property instanceof Blob
                    ? property
                    : typeof property === "object" && property !== null
                        ? JSON.stringify(property)
                        : `${property}`);
                return formData;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = (_a) => __awaiter(this, void 0, void 0, function* () {
            var { body, secure, path, type, query, format, baseUrl, cancelToken } = _a, params = __rest(_a, ["body", "secure", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            const responseFormat = format || requestParams.format;
            return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0, body: typeof body === "undefined" || body === null ? null : payloadFormatter(body) })).then((response) => __awaiter(this, void 0, void 0, function* () {
                const r = response;
                r.data = null;
                r.error = null;
                const data = !responseFormat
                    ? r
                    : yield response[responseFormat]()
                        .then((data) => {
                        if (r.ok) {
                            r.data = data;
                        }
                        else {
                            r.error = data;
                        }
                        return r;
                    })
                        .catch((e) => {
                        r.error = e;
                        return r;
                    });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            }));
        });
        Object.assign(this, apiConfig);
    }
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.baseApiParams), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, (this.baseApiParams.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 884:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

//
// Copyright (C) 2021 CloudTruth, Inc.
//
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = exports.api = void 0;
const core = __importStar(__nccwpck_require__(186));
const Api_1 = __nccwpck_require__(428);
const uuid_1 = __nccwpck_require__(840);
__nccwpck_require__(340);
function api() {
    const api = new Api_1.Api({
        baseUrl: core.getInput('server') || 'https://api.cloudtruth.io',
        customFetch: fetch,
        securityWorker: (securityData) => {
            if (securityData) {
                return {
                    headers: {
                        ['Authorization']: 'Api-Key ' + securityData.apikey
                    },
                    keepalive: true
                };
            }
        }
    });
    api.setSecurityData({ apikey: core.getInput('apikey') });
    return api;
}
exports.api = api;
function inject(response) {
    const overwrite = core.getInput('overwrite') || false;
    for (const entry of response.data.results) {
        const values = Object.values(entry.values);
        const valueRecord = values[0];
        const effectiveValue = valueRecord === null || valueRecord === void 0 ? void 0 : valueRecord.value;
        const isSecret = entry.secret;
        const parameterName = entry.name;
        if (effectiveValue != null) {
            if (parameterName in process.env && !overwrite) {
                throw new Error(`The environment variable "${parameterName}" already exists and cannot be overwritten.`);
            }
            if (isSecret) {
                core.info(`Declaring "${parameterName}" as a secret.`);
                core.setSecret(effectiveValue);
            }
            core.info(`Setting environment variable "${parameterName}"`);
            core.exportVariable(parameterName, effectiveValue);
        }
        else {
            core.warning(`Ignoring unset value for parameter "${parameterName}" (GitHub Actions does not support unsetting).`);
        }
    }
}
function resolve_environment_id(environment_name_or_id, api) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!environment_name_or_id) {
            throw new Error(`No environment name or id was specified.`);
        }
        if (uuid_1.validate(environment_name_or_id)) {
            // we look it up to make sure the id is good and we have permission to use it
            try {
                const response = yield api.environmentsRetrieve(environment_name_or_id);
                return response.data.id;
            }
            catch (error) {
                throw new Error(`Environment "${environment_name_or_id}": ${error.error.detail}`);
            }
        }
        const response = yield api.environmentsList({ name: environment_name_or_id });
        if (response.data.count == 1) {
            const result = response.data.results;
            return result[0].id;
        }
        throw new Error(`Environment "${environment_name_or_id}": Not found.`);
    });
}
function resolve_project_id(project_name_or_id, api) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!project_name_or_id) {
            throw new Error(`No project name or id was specified.`);
        }
        if (uuid_1.validate(project_name_or_id)) {
            // we look it up to make sure the id is good and we have permission to use it
            try {
                const response = yield api.projectsRetrieve(project_name_or_id);
                return response.data.id;
            }
            catch (error) {
                throw new Error(`Project "${project_name_or_id}": ${error.error.detail}`);
            }
        }
        const response = yield api.projectsList({ name: project_name_or_id });
        if (response.data.count == 1) {
            const result = response.data.results;
            return result[0].id;
        }
        throw new Error(`Project "${project_name_or_id}": Not found.`);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = api();
            const project_id = yield resolve_project_id(core.getInput('project'), client);
            const environment_id = yield resolve_environment_id(core.getInput('environment'), client);
            for (let page = 1;; ++page) {
                core.debug(`Requesting parameter values for project='${project_id}' environment='${environment_id}' page=${page}`);
                const response = yield client.projectsParametersList({
                    projectPk: project_id,
                    environment: environment_id,
                    page: page
                });
                inject(response);
                if (response.data.next == null) {
                    if (page == 1 && response.data.count == 0) {
                        core.warning(`Project ${core.getInput('project')} has no parameters.`);
                    }
                    break;
                }
            }
        }
        catch (error) {
            core.setFailed(error.message || error.error.detail);
        }
    });
}
exports.run = run;


/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(87));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(87));
const path = __importStar(__nccwpck_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(747));
const os = __importStar(__nccwpck_require__(87));
const utils_1 = __nccwpck_require__(278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 340:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var realFetch = __nccwpck_require__(467);
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),

/***/ 467:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__nccwpck_require__(413));
var http = _interopDefault(__nccwpck_require__(605));
var Url = _interopDefault(__nccwpck_require__(835));
var https = _interopDefault(__nccwpck_require__(211));
var zlib = _interopDefault(__nccwpck_require__(761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __nccwpck_require__(877).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(628));

var _v2 = _interopRequireDefault(__nccwpck_require__(409));

var _v3 = _interopRequireDefault(__nccwpck_require__(122));

var _v4 = _interopRequireDefault(__nccwpck_require__(120));

var _nil = _interopRequireDefault(__nccwpck_require__(332));

var _version = _interopRequireDefault(__nccwpck_require__(595));

var _validate = _interopRequireDefault(__nccwpck_require__(900));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

var _parse = _interopRequireDefault(__nccwpck_require__(746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports.default = _default;

/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports.default = _default;

/***/ }),

/***/ 950:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;

/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(998));

var _md = _interopRequireDefault(__nccwpck_require__(569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;

/***/ }),

/***/ 998:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

var _parse = _interopRequireDefault(__nccwpck_require__(746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(998));

var _sha = _interopRequireDefault(__nccwpck_require__(274));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;

/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(814));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;

/***/ }),

/***/ 877:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 87:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

//
// Copyright (C) 2021 CloudTruth, Inc.
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
const run_1 = __nccwpck_require__(884);
run_1.run();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map