import { Component, h, VNode, Prop } from "@stencil/core";
import { ToastType } from "./toast.type";

@Component({
  tag: "cf-toast",
  styleUrl: "cf-toast.scss",
  shadow: true
})
export class CfToast {
  /**
   * The first name
   */
  @Prop() header: string;
  @Prop() content: string;
  @Prop() type: ToastType;

  render(): VNode {
    return (
      <div class="wrapper">
        <div
          class={{
            toast: true,
            success: this.type === "success",
            alert: this.type === "alert",
            error: this.type === "error"
          }}
        >
          <div class="content">
            <div
              class={{
                icon: true,
                success: this.type === "success",
                alert: this.type === "alert",
                error: this.type === "error"
              }}
            >
              <i class="uil uil-wifi"></i>
            </div>
            <div class="details">
              <span> {this.header} </span>
              <p> {this.content} </p>
            </div>
          </div>
          <div class="close-icon">
            <i class="uil uil-times"></i>
          </div>
        </div>
      </div>
    );
  }
}
