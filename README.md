# configure-action

 ![ci](https://github.com/cloudtruth/configure-action/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/cloudtruth/configure-action/branch/main/graph/badge.svg?token=CZs9Fqr6k9)](https://codecov.io/gh/cloudtruth/configure-action)
[![open issues](https://img.shields.io/github/issues-raw/cloudtruth/configure-action?style=plastic)](https://github.com/cloudtruth/configure-action/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=plastic)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=plastic)](https://opensource.org/licenses/Apache-2.0)
[![cloudtruth](https://img.shields.io/badge/configured--by-CloudTruth-blue.svg?style=plastic&labelColor=384047&color=00A6C0&link=http://www.cloudtruth.com&logoWidth=16&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QUUEholeU02qwAAAjVJREFUOMulk01I03EYxz9/9+ISk2lSaU5SSXETdaSZIniog13sql26VUJdCzp2iCKI6NZFO0SECA6yUMHN6MWo9ULzBacj11baNJs63Wzb/+mQ++fYqfzC7/L7Pb/n4fvyICJ2EfHIv8MjInZFRDxADf+HCUVEZOfN9+UV3nmm8fq/kpWlUHW4hMZaGwXmPNaiW0wurNBcXqTVaw1EhMejzxka/8CZ9jbKSw+hiuCbD9Az6OJCZwcPvoTptldQU7Tv78QUoYFhl9x75JB4PCEiIhtbcYn+iouIiH85LJ2Ol/LwvTdDCD3AQmgZp3uC21e60et0ANx84cG7FqU6bw9zkRjXmqu5/maGU1WlmHOy0yk4Rp5RfKCQY3U27WE29BMUhfwcEyaDjlyjAddsEFWEE5UWrU4P4Jmb53i9jc1ojDv3+2iqq8aUbQQgtEPg1UiMpUgU0/oK5r252CoryNoWIqUHqgiJRJJkMvNsrIYJ+Hwkk0nU7T/KHwHHKCnaT2OtVZvm8wdRFIXCAjNGgwFTthHnq7eoqsrJ1qZ0Ck31Nm719mG3VWki9gwMMR1YxGo5iPdbiBsXz9L7ZIy7l8+nRyllR//TUenpH5R4YtvGzahsRmMiIjIfXJCWc1fFOe7OsFELkiqCY2QMl3uCrvY2yizFiAg+f5DeQScdrUcZfv2RS12nsR4py0xiCotLP3B/mmLqcwC9Toe1zEJDnZXCfDOr6xEmZ+ZoaahPa7CrZWK36/wbyYbMGv7pHgwAAAAASUVORK5CYII=)](https://www.cloudtruth.com/)


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
