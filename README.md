# configure-action

 ![ci](https://github.com/cloudtruth/configure-action/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/cloudtruth/configure-action/branch/main/graph/badge.svg?token=CZs9Fqr6k9)](https://codecov.io/gh/cloudtruth/configure-action)
[![open issues](https://img.shields.io/github/issues-raw/cloudtruth/configure-action?style=plastic)](https://github.com/cloudtruth/configure-action/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=plastic)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=plastic)](https://opensource.org/licenses/Apache-2.0)
[![cloudtruth](https://img.shields.io/badge/configured--by-CloudTruth-blue.svg?style=plastic&labelColor=384047&color=00A6C0&link=http://www.cloudtruth.com&logoWidth=16&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAACPElEQVQ4EaWTS2gTYRDHu4+EhGjMyVrw4EECEgTBUrCCYHKIVRMJYelNDx56UqGg1x70UHxAEU+CRx8kJJFEEYQU1BURHwdLKJRWQSrFhiJKJNnmsf5m010C9tYPZme+mfnP95/vm1VyuZw2tIOlD2LT6fQBn883papqCv9epIuY3W73SbFYLEhuNpudIb6Yz+dzsvcKGIZxgf1cr9crA5hBFkgc1nV9VNO0uwAniP/Gd7bVasUFLMspANjAvtnpdM6VSqXXTqT/WUK9SSQS9yORyBzgy5ZlHapUKj/cHKXRaOwLhUJLnDgJzZcSSCaTe8LhcAU27wF9R4+ixwitIfPQvyF5slTAUyS8cMHi9Pv9u1FHAI2jjyNqs9mMt9vta9jTsVjMu3hp4Yxt27Nob0FxFdoj1Wr1r+fsG2t0+ysajY7VarV34lIAb9DXeLlcXiZYxafB6EM///8vrHYRbxOxsNdVDD9iD6QqA/Z2ZhzgQTcgLXzlqQ6jV7ichBughdA2LQzB8jSvdZ3XclrQofNcURR5xqcuOJVK7Q8EAoskL+BbFcq0eZWDZLiG6/X6ZzdXZSjuQSmZyWROuE6S/2B/AmiiXyGbwWBwnimdxL5tmqaFdpYi/wInnWc3CzUDam+3Yp7amgu5WJvip7jwb27QKSAbilxE3eLUZ7zMYwZrBWYjMsr4p5EvxJaFLaxPutMor+AsLvAB1Y+y+cns32GYPgJ+xD5OsSvEJwqFwiWKPOR+jvVRzMFOf+d/tiIEWie7N4kAAAAASUVORK5CYII=)](https://www.cloudtruth.com/)


CloudTruth centralizes your configuration and secrets information to make it easier
to manage.

This action allows you to extract the configuration and secrets from a project, scoped
to an environment, into your GitHub Actions workflow.  This is done securely by ensuring
that the GitHub workflow engine is told which of your configuration values are considered
secrets, so it can ensure they are properly redacted.  This is analogous to the behavior
you would see if you added your secrets directly to your GitHub organization or repository
and then accessed those secrets through the `secrets` object in your action.

This action will modify your `env` object to have values for all the parameters that
you have stored in your project for the given environment.

## Prerequisites

You must have an api key established in your CloudTruth account.

## Action inputs

| name | required | description |
| ---- | -------- | ----------- |
| `apikey` | `yes` | The CloudTruth Service Account API Key to use. |
| `project` | `yes` | The CloudTruth project (name or id) within the organization. |
| `environment` | `yes` | The CloudTruth environment (name or id) view to use. |
| `tag` | `no` | The CloudTruth tag (name) within the environment to use.  If not specified, current values will be retrieved. |
| `overwrite` | `no` | (default: false) Allow existing environment variables to be overwritten. |
| `server` | `no` | (default: `https://api.cloudtruth.io`) The CloudTruth server to execute the query against. |

## Usage

Add a step to your workflow, ensuring that your CloudTruth service account api key is
stored in GitHub as a secret:

```yaml
    - uses: cloudtruth/configure-action@v2
      with:
        apikey: "${{ secrets.CLOUDTRUTH_API_KEY }}"
        project: "<project name or id>"
        environment: "<environment name or id>"
```

We recommend using tags to provide consistent retrieval of configuration.
Tags isolate your deployments from changes being made in real-time by users.

See our [GitHub Actions workflow](https://github.com/cloudtruth/configure-action/blob/main/.github/workflows/demo.yml)
for a working example.
