/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   response-status-view.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-repeat.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../paper-tabs/paper-tabs.d.ts" />
/// <reference path="../paper-tabs/paper-tab.d.ts" />
/// <reference path="../iron-pages/iron-pages.d.ts" />
/// <reference path="../request-timings/request-timings-panel.d.ts" />
/// <reference path="../headers-list-view/headers-list-view.d.ts" />
/// <reference path="../iron-collapse/iron-collapse.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="http-source-message-view.d.ts" />
/// <reference path="response-redirects-panel.d.ts" />
/// <reference path="response-status-mixin.d.ts" />
/// <reference path="response-status-styles.d.ts" />

declare namespace ApiElements {

  /**
   * HTTP response status view, including status, headers redirects and timings
   *
   * ### Full example
   *
   * ```html
   * <response-status-view
   *  status-code="[[statusCode]]"
   *  status-message="[[statusMessage]]"
   *  request-headers="[[requestHeaders]]"
   *  response-headers="[[responseHeaders]]"
   *  loading-time="[[loadingTime]]"
   *  http-message="[[_computeHttpMessage(requestHeaders)]]"
   *  redirects="[[redirects]]"
   *  redirect-timings="[[redirectTimings]]"
   *  timings="[[timings]]"></response-status-view>
   * ```
   *
   * ### Minimal example
   *
   * ```html
   * <response-status-view
   *  status-code="[[statusCode]]"
   *  status-message="[[statusMessage]]"
   *  response-headers="[[responseHeaders]]"
   *  loading-time="[[loadingTime]]"></response-status-view>
   * ```
   *
   * ## Understanding `is-xhr`
   *
   * ARC (Advanced REST client) uses it's own HTTP client library to connect to
   * the server. Because of that it collects much more information about the
   * connection itself. When the response ends it reports detailed redirects
   * information. Each response (including redirects) has detailed timing
   * infomration. The timing object applies HAT 1.2 spec. When `is-xhr`
   * attribute is not set, the element expect to received additional data
   * available in ARC app. Element renders additional tabs to list redirects
   * and table of timing information.
   *
   * Simple requerst objects like XHR or Fetch does not allow to collect this
   * information in such details. In this case `is-xhr` should be set so the
   * element won't render a view that can never be used.
   *
   * ## Data model
   *
   * ### Redirects
   *
   * #### `redirects`
   *
   * Array of objects. Each object has `headers` property as a HTTP headers
   * string, `status` as a HTTP status and optionally `statusText`.
   *
   * #### `redirectTimings`
   *
   * Array of objects. Each object represent a HAR 1.2 timings object.
   * See the `request-timings` element documentation for more information.
   *
   * ### `responseError`
   *
   * A JavaScript Error object.
   *
   * ### `timings`
   *
   * Object that represent a HAR 1.2 timings object. See the `request-timings`
   * element documentation for more information.
   *
   * ## Status message
   *
   * The element sets a status message if, after ~100 ms of setting status code
   * property, the `statusMessage` property is not set. This is to ensure that
   * the user will always see any status message.
   *
   * ## Styling
   *
   * `<response-status-view>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--response-status-view` | Mixin applied to the element | `{}`
   * `--raml-docs-response-panel` | Mixin applied to the element | `{}`
   * `--arc-status-code-color-200` | Color of the 200 status code (ARC theme option) | `rgba(56, 142, 60, 1)` |
   * `--arc-status-code-color-300` | Color of the 300 status code (ARC theme option) | `rgba(48, 63, 159, 1)` |
   * `--arc-status-code-color-400` | Color of the 400 status code (ARC theme option) | `rgba(245, 124, 0, 1)` |
   * `--arc-status-code-color-500` | Color of the 500 status code (ARC theme option) | `rgba(211, 47, 47, 1)` |
   * `--arc-font-subhead` | Mixin applied to sub headers (low implortance headers). It's a theme mixin. | `{}`
   * `--no-info-message` | Mixin applied to the messages information that there's no information available. | `{}`
   * `--arc-font-code1` | Mixin applied to the source message. It's a theme mixin. | `{}`
   * `--response-status-view-badge-color` | Color of the badge with number of the headers / redirections in advanced view | `#fff`
   * `--response-status-view-badge-background` | Background color of the badge with number of the headers / redirections in advanced view | `--accent-color`
   * `--response-status-view-empty-badge-color` | Color of the badge with number of the headers / redirections in advanced view | `#fff`
   * `--response-status-view-empty-badge-background` | Background color of the badge with number of the headers / redirections in advanced view | `#9e9e9e`
   * `--response-status-view-status-info-border-color` | Border color separating status from the response headers | `#e5e5e5`
   * `--response-status-view-status-container` | Mixin applied to the status row in the main view and in the redirects view (in advanced mode). | `{}`
   *
   * ## Changes in version 2.0
   *
   * - `status-message` element was removed. The `StatusMessage` class is included
   * with this element.
   */
  class ResponseStatusView extends
    ArcBehaviors.ResponseStatusMixin(
    Object) {

    /**
     * Response status code.
     */
    statusCode: number|null|undefined;

    /**
     * Status message (if any)
     */
    statusMessage: string|null|undefined;

    /**
     * The request/response loading time.
     */
    loadingTime: number|null|undefined;

    /**
     * The response headers as a HTTP headers string
     */
    responseHeaders: string|null|undefined;

    /**
     * Computed value, `true` if response headers are set
     */
    readonly hasResponseHeaders: string|null|undefined;

    /**
     * The request headers as a HTTP headers string
     */
    requestHeaders: string|null|undefined;

    /**
     * Computed value, true when request headers are set.
     */
    readonly hasRequestHeaders: string|null|undefined;

    /**
     * Raw HTTP message sent to the server.
     * It will be displayed in the request headers tab.
     * Optional for transports that do not expose this information.
     */
    httpMessage: string|null|undefined;

    /**
     * Computed value, true when source HTTP message is not set.
     */
    readonly hasHttpMessage: boolean|null|undefined;

    /**
     * An Error object representing the response error.
     * It uses this property only to determine if the request is errored
     */
    responseError: object|null|undefined;

    /**
     * Calculated to be true if responseError object is set.
     */
    readonly isError: boolean|null|undefined;

    /**
     * An array of redirect responses.
     * Each of the response objects should be regular Response objects.
     */
    redirects: any[]|null|undefined;

    /**
     * List of timings occured during the redirects.
     * This list should be ordered by the time of redirection.
     * See the `request-timings` element documentation for more
     * information.
     */
    redirectTimings: any[]|null|undefined;

    /**
     * Currently selected tab.
     */
    selectedTab: number|null|undefined;

    /**
     * The timings object to display request/response timing information
     * as defined in HAR 1.2 spec.
     * See the `request-timings` element documentation for more
     * information.
     */
    timings: object|null|undefined;

    /**
     * If true it means that the request has been made by the basic
     * transport and advanced details of the request/response like
     * redirects, timings, source message are not available.
     * It this case it will hide unused tabs.
     */
    isXhr: boolean|null|undefined;

    /**
     * True if the collapsable element is opened
     */
    opened: boolean|null|undefined;

    /**
     * A request URL that has been used to make a request
     */
    requestUrl: string|null|undefined;

    /**
     * A HTTP method used to make a request
     */
    requestMethod: string|null|undefined;
    attached(): void;
    _statusCodeChanged(): void;

    /**
     * Computes value for `isError` property.
     *
     * @param responseError Response error object
     */
    _computeIsError(responseError: object|null): Boolean|null;

    /**
     * Computes CSS class for the badge in the tabs.
     * If passed `input` is string it only check if string is not empty.
     * Otherwise it checks if passed value is !== 0.
     *
     * @param input String or number to check.
     * @returns Computed class name for this badge.
     */
    _computeBageClass(input: String|Number|null): String|null;

    /**
     * Compute size of the HTTP headers.
     * Note, it only checks for number of lines. It doeasn't check if each line
     * contains string.
     *
     * @param headers The headers strings to count.
     * @returns Size of the headers in passed string.
     */
    _computeHeadersLength(headers: String|null): Number|null;

    /**
     * Computes value for `hasHttpMessage` property.
     *
     * @param message HTTP message string.
     */
    _computeHasHttpMessage(message: String|null|undefined): Boolean|null;
    _roundTime(num: any): any;

    /**
     * Toggles collapsable element.
     */
    toggleCollapse(): void;

    /**
     * Computes class for the toggle's button icon.
     */
    _computeToggleIconClass(opened: any): any;

    /**
     * Runs status text recognition after ~100 ms to ensure a status message
     * is displayed event if there wasn't any.
     */
    assignStatusMessage(): void;

    /**
     * Resets current tab when isXhr is true.
     */
    _isXhrChanged(value: any): void;

    /**
     * Computes if headers are set
     */
    _computeHasHeaders(requestHeaders: any): any;

    /**
     * Closes the collapse when error is set.
     *
     * @param error Flag indicating error
     */
    _isErrorChanged(error: Boolean|null): void;
  }
}

interface HTMLElementTagNameMap {
  "response-status-view": ApiElements.ResponseStatusView;
}
