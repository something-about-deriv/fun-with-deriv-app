/**
 * Creates a DOM element and adds any attributes to it.
 *
 * @param {String} tag_name: the tag to create, e.g. 'div', 'a', etc
 * @param {Object} attributes: all the attributes to assign, e.g. { id: '...', class: '...', html: '...', ... }
 * @return the created DOM element
 */
export const createElement = (tag_name, attributes = {}) => {
  const el = document.createElement(tag_name);
  Object.keys(attributes).forEach((attr) => {
    const value = attributes[attr];
    if (attr === 'text') {
      el.textContent = value;
    } else if (attr === 'html') {
      el.html(value);
    } else {
      el.setAttribute(attr, value);
    }
  });
  return el;
};

let static_hash;
export const getStaticHash = () => {
  static_hash =
    static_hash ||
    (
      document.querySelector('script[src*="main"]').getAttribute('src') || ''
    ).split('.')[1];
  return static_hash;
};

export class PromiseClass {
  promise: Promise<unknown>;
  reject: (reason?: unknown) => void;
  resolve: (value: unknown) => void;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}
