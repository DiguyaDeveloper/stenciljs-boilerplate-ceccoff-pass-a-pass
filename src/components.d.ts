/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ToastType } from "./components/cf-toast/toast.type";
export namespace Components {
    interface CfToast {
        "content": string;
        /**
          * The first name
         */
        "header": string;
        "type": ToastType;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCfToastElement extends Components.CfToast, HTMLStencilElement {
    }
    var HTMLCfToastElement: {
        prototype: HTMLCfToastElement;
        new (): HTMLCfToastElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cf-toast": HTMLCfToastElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CfToast {
        "content"?: string;
        /**
          * The first name
         */
        "header"?: string;
        "type"?: ToastType;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "cf-toast": CfToast;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cf-toast": LocalJSX.CfToast & JSXBase.HTMLAttributes<HTMLCfToastElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
