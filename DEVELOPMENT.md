# Testing

To run the tests use a `.env` file with the following content:

```bash
CLOUDTRUTH_API_KEY=<api_key>
```

The account must be configured as follows for testing:

```yaml
projects:
  - name: default
  - name: cloudtruth/configure-action
    description: >-
      Provides test configuration for the GitHub Action cloudtruth/configure-action.
      If removed, CI for the project will break.

environments:
  default: {}
    override: {}
    
parameters:
  - name: CTTEST_NOT_A_SECRET
    description: This value is not a secret.
    values:
      default: not_a_secret_default
      override: not_a_secret_override

  - name: CTTEST_TOTALLY_A_SECRET
    description: This value is totally a secret.
    values:
      default: totally_a_secret_default
      override: totally_a_secret_override

  - name: CTTEST_HAS_NO_OVERRIDE
    description: This value is not overridden.
    values:
      default: has_no_override_default

  - name: cttest.not.posix
    description: This value does not confirm to POSIX environment naming standards.
    values:
      default: not.posix.default
      override: not.posix.override
```

# Build and Release

Build the typescript and package it for distribution, pretty up the code, and run tests:
```bash
$ npm run all
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder. 

Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket: 

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage:

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action
