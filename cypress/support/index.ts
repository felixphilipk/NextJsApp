import "./commands"

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByData<T = any>(dataTestAttribute: string): Chainable<JQuery<T>>;
  }
}
