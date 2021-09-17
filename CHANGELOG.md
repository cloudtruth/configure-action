# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added support for environment tags.
- Added configure-action User-Agent when talking to server.

### Updated

- Updated to latest API specification.
- Handle nomenclature change: static to internal, dynamic to external.

### Fixed

- Leverage environment lookup by name to avoid an extra API call.
- Added testing for paged reads.
- Functional, Line, and Branch coverage brought to 100%.
- Test against staging and production servers to catch regressions.

## [2.0.0] - 2021-07-20

Support for the new CloudTruth API.

### Added

- Added support for `cloudtruth.io` (REST-based API).
- Added support for specifying project or environment by id.

### Removed

- Removed support for `cloudtruth.com` (graph-based API).
  Continue to use the `@v1` tag if you use `app.cloudtruth.com`.

### Fixed

- Fixed unit tests failing from forks.
- Made build workflow check for changes to `dist/`.
- Updated a number of dependencies.
- Locked types/node to v12, as github runner uses node 12 for actions.

## [1.0.0] - 2021-05-10

Initial Release

[Unreleased]: https://github.com/cloudtruth/configure-action/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/cloudtruth/configure-action/releases/tag/v1.0.0

