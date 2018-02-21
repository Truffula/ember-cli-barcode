/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
      // Add npm packages to package.json
      return this.addPackagesToProject([
        {name: 'jsbarcode', target: '3.8.0'}
      ]);
    }
};