# configure-action

 ![ci](https://github.com/cloudtruth/configure-action/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/cloudtruth/configure-action/branch/main/graph/badge.svg?token=CZs9Fqr6k9)](https://codecov.io/gh/cloudtruth/configure-action)
[![open issues](https://img.shields.io/github/issues-raw/cloudtruth/configure-action?style=plastic)](https://github.com/cloudtruth/configure-action/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=plastic)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=plastic)](https://opensource.org/licenses/Apache-2.0)
[![cloudtruth](https://img.shields.io/badge/configured--by-CloudTruth-blue.svg?style=plastic&labelColor=384047&color=00A6C0&link=http://www.cloudtruth.com&logoWidth=16&logo=data:image/png;base64,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)](https://www.cloudtruth.com/)


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

You must have a personal access token established in your CloudTruth account.

## Action inputs

| name | required | description |
| ---- | -------- | ----------- |
| `token` | `yes` | The CloudTruth service account token to use - this defines the Organization. |
| `project` | `yes` | The CloudTruth project name within the organization. |
| `environment` | `yes` | The CloudTruth environment lens to apply to the project. |
| `overwrite` | `no` | (default: false) Allow existing environment variables to be overwritten. |
| `server` | `no` | (default: api.cloudtruth.com) The CloudTruth server to execute the query against. |

## Usage

Add a step to your workflow, ensuring that your CloudTruth access token is
stored in GitHub as a secret:

```yaml
    - uses: cloudtruth/configure-action@v1
      with:
        token: "${{ secrets.CLOUDTRUTH_API_KEY }}"
        project: "<project name>"
        environment: "<environment name>"
```

See our [GitHub Actions workflow](https://github.com/cloudtruth/configure-action/blob/main/.github/workflows/test.yml) for a working example.

We recommend using the `@v1` itag to pick up the latest compatible version,
however you can also just rely on Dependabot to keep your workflow up to date.
